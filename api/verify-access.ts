const MAX_CODE_LENGTH = 120;

function sendJson(
  response: any,
  status: number,
  payload: Record<string, unknown>,
) {
  response.status(status);
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store, max-age=0');
  response.end(JSON.stringify(payload));
}

export default function handler(request: any, response: any) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    sendJson(response, 405, {
      ok: false,
      error: 'Method not allowed.',
    });
    return;
  }

  const configuredCode = process.env.CLUBCONNECT_ACCESS_CODE;
  const loginUrl = process.env.CLUBCONNECT_APP_LOGIN_URL;

  if (!configuredCode || !loginUrl) {
    console.error(
      'Missing CLUBCONNECT_ACCESS_CODE or CLUBCONNECT_APP_LOGIN_URL.',
    );
    sendJson(response, 500, {
      ok: false,
      error: 'Early access is temporarily unavailable.',
    });
    return;
  }

  const submittedCode =
    typeof request.body?.code === 'string' ? request.body.code.trim() : '';

  if (!submittedCode || submittedCode.length > MAX_CODE_LENGTH) {
    sendJson(response, 400, {
      ok: false,
      error: 'Enter a valid access code.',
    });
    return;
  }

  if (submittedCode !== configuredCode) {
    sendJson(response, 401, {
      ok: false,
      error: 'That access code is incorrect.',
    });
    return;
  }

  sendJson(response, 200, {
    ok: true,
    loginUrl,
  });
}
