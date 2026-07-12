/** Shared app-style product mockups for marketing. Demo data only — no private/real user data. */

import type { ReactNode } from 'react';

export function MockChrome({
  title,
  children,
  className = '',
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[12px] border border-[#222222] bg-[#131313] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)] ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#222222] bg-[#0B0B0B]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        <span className="ml-2 text-[11px] text-[#777777] font-medium tracking-tight">{title}</span>
      </div>
      {children}
    </div>
  );
}

function StatusPill({ label, tone }: { label: string; tone: 'red' | 'gold' | 'green' | 'muted' }) {
  const styles = {
    red: 'bg-[rgba(229,25,55,0.12)] text-[#E51937] border-[#E51937]/25',
    gold: 'bg-[rgba(255,196,41,0.12)] text-[#FFC429] border-[#FFC429]/25',
    green: 'bg-[rgba(34,197,94,0.12)] text-[#22C55E] border-[#22C55E]/25',
    muted: 'bg-[#1A1A1A] text-[#9CA3AF] border-[#222222]',
  }[tone];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${styles}`}>
      {label}
    </span>
  );
}

function AccentCard({
  accent,
  children,
  className = '',
}: {
  accent: 'red' | 'gold';
  children: ReactNode;
  className?: string;
}) {
  const border = accent === 'red' ? 'border-l-[#E51937]' : 'border-l-[#FFC429]';
  return (
    <div className={`bg-[#1A1A1A] border border-[#222222] border-l-[3px] ${border} rounded-[10px] p-3 ${className}`}>
      {children}
    </div>
  );
}

export function DashboardMock({ compact = false }: { compact?: boolean }) {
  return (
    <MockChrome title="Dashboard · Gryph ClubConnect">
      <div className={`flex ${compact ? 'h-[320px]' : 'h-[360px]'}`}>
        <aside className="hidden sm:flex w-[140px] flex-col border-r border-[#222222] bg-[#0B0B0B] p-2 gap-0.5">
          <p className="text-[9px] uppercase tracking-wider text-[#777777] px-2 py-1.5 font-semibold">Menu</p>
          {['Dashboard', 'Explore', 'Events', 'Hiring', 'Inbox'].map((item, i) => (
            <div
              key={item}
              className={`px-2 py-1.5 rounded-[8px] text-[11px] ${
                i === 0 ? 'bg-[rgba(229,25,55,0.12)] text-[#F5F5F5] border-l-2 border-[#E51937]' : 'text-[#9CA3AF]'
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="flex-1 p-3 overflow-hidden space-y-3">
          <div className="flex items-center justify-between gap-2">
            <div>
              <p className="text-[13px] font-bold text-[#F5F5F5]">Good afternoon</p>
              <p className="text-[10px] text-[#777777]">Your campus involvement at a glance</p>
            </div>
            <StatusPill label="Early testing" tone="gold" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { label: 'Upcoming events', value: '3', accent: 'red' as const },
              { label: 'Tasks due', value: '2', accent: 'gold' as const },
              { label: 'Pending', value: '1', accent: 'red' as const },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-2.5">
                <p className="text-[16px] font-extrabold" style={{ color: stat.accent === 'red' ? '#E51937' : '#FFC429' }}>
                  {stat.value}
                </p>
                <p className="text-[9px] text-[#777777] mt-0.5 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <AccentCard accent="red">
              <p className="text-[10px] text-[#777777] mb-1">Upcoming event</p>
              <p className="text-[12px] font-semibold text-[#F5F5F5]">Intro Photo Walk</p>
              <p className="text-[10px] text-[#9CA3AF] mt-0.5">Photography Club · Sat 2:00 PM</p>
              <div className="mt-2"><StatusPill label="Signed up" tone="green" /></div>
            </AccentCard>
            <AccentCard accent="gold">
              <p className="text-[10px] text-[#777777] mb-1">Application</p>
              <p className="text-[12px] font-semibold text-[#F5F5F5]">Social Media Coordinator</p>
              <p className="text-[10px] text-[#9CA3AF] mt-0.5">Photography Club role</p>
              <div className="mt-2"><StatusPill label="Under review" tone="gold" /></div>
            </AccentCard>
          </div>

          {!compact && (
            <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[11px] font-semibold text-[#F5F5F5]">Tasks due this week</p>
                <span className="text-[10px] text-[#777777]">2 open</span>
              </div>
              {[
                { task: 'Post event reminder', due: 'Wed', status: 'In progress' },
                { task: 'Review join request', due: 'Thu', status: 'Needs review' },
              ].map((t) => (
                <div key={t.task} className="flex items-center justify-between py-1.5 border-t border-[#222222] first:border-0">
                  <p className="text-[11px] text-[#9CA3AF]">{t.task}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-[#777777]">{t.due}</span>
                    <StatusPill label={t.status} tone={t.status === 'Needs review' ? 'gold' : 'muted'} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MockChrome>
  );
}

export function ExploreMock() {
  const clubs = [
    { name: 'Photography Club', tag: 'Creative', status: 'Request to join', tone: 'red' as const },
    { name: 'Debate Society', tag: 'Academic', status: 'Saved', tone: 'gold' as const },
    { name: 'Community Outreach', tag: 'Community', status: 'Member', tone: 'green' as const },
  ];
  return (
    <MockChrome title="Explore Clubs">
      <div className="h-[320px] p-3 space-y-3 overflow-hidden">
        <div className="flex gap-2">
          <div className="flex-1 bg-[#0B0B0B] border border-[#222222] rounded-[10px] px-3 py-2 text-[11px] text-[#777777]">
            Search clubs…
          </div>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {['All', 'Academic', 'Creative', 'Community'].map((f, i) => (
            <span
              key={f}
              className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                i === 0
                  ? 'bg-[#E51937] text-white border-[#E51937]'
                  : 'bg-[#1A1A1A] text-[#9CA3AF] border-[#222222]'
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {clubs.map((c) => (
            <div key={c.name} className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-[8px] bg-[#0B0B0B] border border-[#222222] flex items-center justify-center text-[11px] font-bold text-[#E51937]">
                {c.name.slice(0, 1)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-[#F5F5F5] truncate">{c.name}</p>
                <p className="text-[10px] text-[#777777]">{c.tag}</p>
              </div>
              <StatusPill label={c.status} tone={c.tone} />
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}

export function WorkspaceMock() {
  return (
    <MockChrome title="Club Workspace · Photography Club">
      <div className="h-[320px] p-3 space-y-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[13px] font-bold text-[#F5F5F5]">Command Center</p>
            <p className="text-[10px] text-[#777777]">Photography Club operations</p>
          </div>
          <StatusPill label="Setup 4/6" tone="gold" />
        </div>

        <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
          <p className="text-[11px] font-semibold text-[#F5F5F5] mb-2">Setup checklist</p>
          {[
            { label: 'Public profile published', done: true },
            { label: 'Roles & permissions set', done: true },
            { label: 'First announcement posted', done: true },
            { label: 'Upcoming event created', done: true },
            { label: 'Hiring role opened', done: false },
            { label: 'Documents uploaded', done: false },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 py-1">
              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${item.done ? 'bg-[#E51937] border-[#E51937]' : 'border-[#444]'}`}>
                {item.done && <span className="text-[8px] text-white">✓</span>}
              </div>
              <span className={`text-[11px] ${item.done ? 'text-[#9CA3AF]' : 'text-[#F5F5F5]'}`}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          <AccentCard accent="red">
            <p className="text-[10px] text-[#777777]">Join requests</p>
            <p className="text-[18px] font-extrabold text-[#E51937]">1</p>
            <p className="text-[10px] text-[#9CA3AF]">Needs approval</p>
          </AccentCard>
          <AccentCard accent="gold">
            <p className="text-[10px] text-[#777777]">Quick actions</p>
            <p className="text-[11px] text-[#F5F5F5] mt-1">Post announcement</p>
            <p className="text-[11px] text-[#F5F5F5]">Create event</p>
          </AccentCard>
        </div>
      </div>
    </MockChrome>
  );
}

export function EventsMock() {
  return (
    <MockChrome title="Events · Photography Club">
      <div className="h-[320px] p-3 space-y-3 overflow-hidden">
        <AccentCard accent="red">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[12px] font-semibold text-[#F5F5F5]">Intro Photo Walk</p>
              <p className="text-[10px] text-[#9CA3AF] mt-0.5">Sat · 2:00 PM · Johnston Green</p>
            </div>
            <StatusPill label="18 signed up" tone="green" />
          </div>
          <div className="mt-3 pt-2 border-t border-[#222222]">
            <p className="text-[10px] text-[#777777] mb-1.5">Sign-up questions</p>
            <p className="text-[11px] text-[#9CA3AF]">Do you have your own camera?</p>
            <p className="text-[11px] text-[#9CA3AF]">Any accessibility needs?</p>
          </div>
        </AccentCard>

        <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
          <p className="text-[11px] font-semibold text-[#F5F5F5] mb-2">Sign-up list</p>
          {[
            { name: 'Alex M.', note: 'Bringing own camera' },
            { name: 'Sam R.', note: 'Needs borrowed gear' },
            { name: 'Jordan L.', note: 'First event' },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between py-1.5 border-t border-[#222222] first:border-0">
              <p className="text-[11px] text-[#F5F5F5]">{p.name}</p>
              <p className="text-[10px] text-[#777777]">{p.note}</p>
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}

export function TasksMock() {
  const cols = [
    {
      label: 'To do',
      color: '#777777',
      items: [
        { title: 'Book meeting room', due: 'Fri', owner: 'A. Chen' },
      ],
    },
    {
      label: 'In progress',
      color: '#FFC429',
      items: [
        { title: 'Draft announcement', due: 'Wed', owner: 'You' },
        { title: 'Update event poster', due: 'Thu', owner: 'M. Patel' },
      ],
    },
    {
      label: 'Needs review',
      color: '#E51937',
      items: [
        { title: 'Budget draft', due: 'Today', owner: 'You' },
      ],
    },
  ];
  return (
    <MockChrome title="Tasks & Assignments">
      <div className="h-[320px] p-3 overflow-x-auto">
        <div className="flex gap-2 min-w-[480px] h-full">
          {cols.map((col) => (
            <div key={col.label} className="flex-1 min-w-[140px]">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col.color }} />
                <span className="text-[10px] font-semibold uppercase tracking-wide" style={{ color: col.color }}>
                  {col.label}
                </span>
              </div>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <div key={item.title} className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-2.5">
                    <p className="text-[11px] font-medium text-[#F5F5F5] leading-snug">{item.title}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[10px] text-[#777777]">{item.owner}</span>
                      <span className="text-[10px] text-[#9CA3AF]">{item.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}

export function HiringMock() {
  return (
    <MockChrome title="Hiring · Social Media Coordinator">
      <div className="h-[320px] p-3 space-y-3 overflow-hidden">
        <AccentCard accent="gold">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-semibold text-[#F5F5F5]">Social Media Coordinator</p>
              <p className="text-[10px] text-[#9CA3AF] mt-0.5">Open role · Photography Club</p>
            </div>
            <StatusPill label="Accepting apps" tone="green" />
          </div>
        </AccentCard>

        <div className="flex gap-1.5 flex-wrap">
          {['Pending', 'Reviewed', 'Interview', 'Accepted'].map((s, i) => (
            <span
              key={s}
              className={`px-2 py-1 rounded-full text-[10px] font-semibold border ${
                i === 0
                  ? 'bg-[rgba(255,196,41,0.12)] text-[#FFC429] border-[#FFC429]/25'
                  : 'bg-[#1A1A1A] text-[#777777] border-[#222222]'
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] overflow-hidden">
          {[
            { name: 'Casey W.', status: 'Pending', note: 'Applied 2 days ago' },
            { name: 'Riley K.', status: 'Reviewed', note: 'Portfolio linked' },
            { name: 'Taylor P.', status: 'Interview', note: 'Scheduled Fri' },
          ].map((a) => (
            <div key={a.name} className="flex items-center justify-between px-3 py-2.5 border-b border-[#222222] last:border-0">
              <div>
                <p className="text-[11px] font-semibold text-[#F5F5F5]">{a.name}</p>
                <p className="text-[10px] text-[#777777]">{a.note}</p>
              </div>
              <StatusPill
                label={a.status}
                tone={a.status === 'Pending' ? 'gold' : a.status === 'Interview' ? 'red' : 'muted'}
              />
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}

export function MembersMock() {
  return (
    <MockChrome title="Members & Org Chart">
      <div className="h-[320px] p-3 space-y-3 overflow-hidden">
        <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
          <p className="text-[10px] text-[#777777] uppercase tracking-wide font-semibold mb-2">Leadership</p>
          <div className="flex justify-center mb-3">
            <div className="px-3 py-2 rounded-[10px] border border-[#E51937]/30 bg-[rgba(229,25,55,0.08)] text-center">
              <p className="text-[11px] font-bold text-[#F5F5F5]">A. Chen</p>
              <p className="text-[10px] text-[#E51937]">President</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: 'M. Patel', role: 'VP Events', tone: 'gold' as const },
              { name: 'J. Park', role: 'Treasurer', tone: 'muted' as const },
            ].map((m) => (
              <div key={m.name} className="px-2.5 py-2 rounded-[10px] border border-[#222222] bg-[#0B0B0B] text-center">
                <p className="text-[11px] font-semibold text-[#F5F5F5]">{m.name}</p>
                <div className="mt-1 flex justify-center"><StatusPill label={m.role} tone={m.tone} /></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
          <p className="text-[11px] font-semibold text-[#F5F5F5] mb-2">Access levels</p>
          {[
            { name: 'A. Chen', access: 'Owner' },
            { name: 'M. Patel', access: 'Executive' },
            { name: 'S. Nguyen', access: 'Member' },
          ].map((row) => (
            <div key={row.name} className="flex items-center justify-between py-1.5 border-t border-[#222222] first:border-0">
              <p className="text-[11px] text-[#9CA3AF]">{row.name}</p>
              <StatusPill label={row.access} tone={row.access === 'Owner' ? 'red' : row.access === 'Executive' ? 'gold' : 'muted'} />
            </div>
          ))}
        </div>
      </div>
    </MockChrome>
  );
}

export function AnnouncementsMock() {
  return (
    <MockChrome title="Announcements">
      <div className="h-[280px] p-3 space-y-2 overflow-hidden">
        {[
          { title: 'Photo Walk this Saturday', body: 'Meet at Johnston Green at 2:00 PM. Bring a camera if you have one.', pin: true },
          { title: 'Exec meeting notes', body: 'Agenda and task owners posted for next week.', pin: false },
          { title: 'Hiring now open', body: 'Apply for Social Media Coordinator by Friday.', pin: false },
        ].map((a) => (
          <div key={a.title} className="bg-[#1A1A1A] border border-[#222222] rounded-[10px] p-3">
            <div className="flex items-center gap-2 mb-1">
              {a.pin && <StatusPill label="Pinned" tone="red" />}
              <p className="text-[12px] font-semibold text-[#F5F5F5]">{a.title}</p>
            </div>
            <p className="text-[11px] text-[#9CA3AF] leading-relaxed">{a.body}</p>
          </div>
        ))}
      </div>
    </MockChrome>
  );
}
