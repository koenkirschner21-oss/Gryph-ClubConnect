/* ===== VARIABLES ===== */
:root {
    --bg-primary: #0A0A0A;
    --bg-secondary: #111111;
    --bg-tertiary: #161616;
    --text-primary: #FFFFFF;
    --text-secondary: #B0B0B0;
    --text-muted: #666666;
    --red: #C8102E;
    --red-dark: #8B0000;
    --gold: #F5B800;
    --green: #22C55E;
    --border: rgba(255, 255, 255, 0.06);
}

/* ===== GLOBAL ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-secondary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 16px;
    line-height: 1.6;
}

.container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 40px;
}

/* ===== NAVIGATION ===== */
.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
    padding: 20px 0;
}

.navbar .nav-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
}

.logo {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
    flex: 1;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-links a:hover {
    color: var(--text-primary);
}

.nav-buttons {
    display: flex;
    gap: 16px;
}

/* ===== BUTTONS ===== */
.btn {
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-lg {
    padding: 16px 32px;
    font-size: 15px;
}

.btn-primary {
    background: linear-gradient(to right, var(--red), var(--red-dark));
    color: white;
    box-shadow: 0 4px 24px rgba(200, 16, 46, 0.35);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(200, 16, 46, 0.5);
}

.btn-ghost {
    background: transparent;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-ghost:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.4);
}

/* ===== HERO SECTION ===== */
.hero {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    padding: 120px 0;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(200, 16, 46, 0.08) 0%, transparent 70%);
    pointer-events: none;
}

.hero-container {
    .container;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
}

.eyebrow {
    display: inline-block;
    background: rgba(200, 16, 46, 0.12);
    border: 1px solid rgba(200, 16, 46, 0.2);
    border-radius: 9999px;
    padding: 8px 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--red);
    letter-spacing: 0.12em;
    margin-bottom: 24px;
}

.hero-content h1 {
    font-size: 80px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 24px;
    color: var(--text-primary);
}

.gold-text {
    color: var(--gold);
}

.hero-content > p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 520px;
}

.hero-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 80px;
}

.hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 32px;
}

.stat-value {
    font-size: 36px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.stat-label {
    font-size: 11px;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 700;
    letter-spacing: 0.1em;
}

/* ===== MOCKUP FRAMES ===== */
.mockup-frame {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 32px 80px rgba(0, 0, 0, 0.8);
}

.mockup-header {
    background: var(--bg-secondary);
    padding: 16px 20px;
    border-bottom: 1px solid var(--border);
    display: flex;
    gap: 8px;
}

.dots {
    display: flex;
    gap: 8px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
}

.dot.red { background: var(--red); }
.dot.gold { background: var(--gold); }
.dot.green { background: var(--green); }

.mockup-body {
    display: flex;
    height: 300px;
}

.sidebar {
    width: 160px;
    background: var(--bg-secondary);
    padding: 16px;
    border-right: 1px solid var(--border);
    font-size: 12px;
    overflow-y: auto;
}

.section-title {
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    margin-bottom: 12px;
}

.club-item, .channel-item {
    padding: 8px 12px;
    border-radius: 6px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--text-secondary);
}

.club-item.active, .channel-item.active {
    background: rgba(200, 16, 46, 0.15);
    color: var(--text-primary);
}

.badge {
    background: var(--red);
    color: white;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 9999px;
    margin-left: auto;
    display: inline-block;
}

.divider {
    height: 1px;
    background: var(--border);
    margin: 8px 0;
}

.chat {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.chat-header {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    font-weight: 700;
    color: var(--text-primary);
    font-size: 13px;
    display: flex;
    justify-content: space-between;
}

.online {
    background: rgba(34, 197, 94, 0.2);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: var(--green);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 9999px;
}

.messages {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.message {
    display: flex;
    gap: 12px;
    font-size: 12px;
    align-items: flex-start;
}

.avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--red);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    flex-shrink: 0;
}

.avatar.blue {
    background: #1A3A7A;
}

.avatar.green {
    background: #1A5A3A;
}

/* ===== TICKER ===== */
.ticker {
    background: var(--bg-secondary);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 16px 0;
    overflow: hidden;
}

.ticker-text {
    display: inline-block;
    white-space: nowrap;
    animation: scroll 60s linear infinite;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-muted);
    letter-spacing: 0.1em;
    padding: 0 40px;
}

@keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}

/* ===== SECTION HEADERS ===== */
.section-header {
    text-align: center;
    margin-bottom: 80px;
    max-width: 860px;
    margin-left: auto;
    margin-right: auto;
}

.section-header h2 {
    font-size: 48px;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.1;
    margin-bottom: 16px;
}

.section-header p {
    font-size: 18px;
    color: var(--text-secondary);
}

/* ===== PROBLEM SECTION ===== */
.problem-section {
    background: var(--bg-secondary);
    padding: 120px 0;
}

.problem-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.problem-card {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    text-align: center;
}

.problem-card .icon {
    font-size: 32px;
    margin-bottom: 16px;
}

.problem-card h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 12px;
}

.problem-card p {
    font-size: 14px;
    line-height: 1.6;
}

/* ===== FEATURES SECTION ===== */
.features-section {
    background: var(--bg-primary);
    padding: 120px 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.feature-card {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    transition: all 0.2s ease;
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(200, 16, 46, 0.15);
}

.feature-card.wide {
    grid-column: span 2;
}

.feature-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-size: 24px;
}

.feature-card.red .feature-icon {
    background: rgba(200, 16, 46, 0.12);
}

.feature-card.gold .feature-icon {
    background: rgba(245, 184, 0, 0.12);
}

.feature-tag {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 8px;
}

.feature-card.red .feature-tag { color: var(--red); }
.feature-card.gold .feature-tag { color: var(--gold); }

.feature-card h3 {
    font-size: 20px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.feature-card p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
}

.feature-link {
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    transition: transform 0.2s;
}

.feature-card.red .feature-link { color: var(--red); }
.feature-card.gold .feature-link { color: var(--gold); }

.feature-link:hover {
    transform: translateX(4px);
}

/* ===== FEATURE SHOWCASES ===== */
.feature-showcase {
    background: var(--bg-primary);
    padding: 120px 0;
}

.feature-showcase.alt-bg {
    background: var(--bg-secondary);
}

.showcase-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.showcase-grid:nth-child(2) {
    grid-template-columns: 1fr 1fr;
}

.showcase-content {
    order: 2;
}

.showcase-grid:nth-child(odd) .showcase-content {
    order: 1;
}

.showcase-content h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 16px;
    color: var(--text-primary);
}

.showcase-content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 24px;
    max-width: 600px;
}

.feature-list {
    list-style: none;
}

.feature-list li {
    font-size: 15px;
    margin-bottom: 12px;
    color: var(--text-secondary);
}

.feature-list li::before {
    content: '✓ ';
    color: var(--gold);
    font-weight: 700;
    margin-right: 8px;
}

/* ===== KANBAN BOARD ===== */
.kanban-board {
    display: flex;
    gap: 16px;
    padding: 16px;
    height: 320px;
}

.kanban-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.column-header {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding-bottom: 8px;
    border-bottom: 2px solid;
}

.column-header.red { border-color: var(--red); color: var(--red); }
.column-header.gold { border-color: var(--gold); color: var(--gold); }
.column-header.green { border-color: var(--green); color: var(--green); }

.task-card {
    background: rgba(200, 16, 46, 0.1);
    border: 1px solid rgba(200, 16, 46, 0.2);
    border-radius: 8px;
    padding: 12px;
    font-size: 12px;
    color: var(--text-secondary);
}

.progress-bar {
    padding: 0 16px 16px;
}

.progress-label {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 8px;
    color: var(--text-secondary);
}

.progress-fill {
    height: 6px;
    background: linear-gradient(to right, var(--red), var(--gold));
    border-radius: 3px;
}

/* ===== CALENDAR PREVIEW ===== */
.calendar-preview {
    padding: 20px;
}

.calendar-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    color: var(--text-muted);
    margin-bottom: 16px;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin-bottom: 20px;
}

.day {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: var(--text-secondary);
    border-radius: 4px;
}

.day.event-day {
    background: var(--red);
    color: white;
    font-weight: 700;
}

.event-card {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(200, 16, 46, 0.3);
    border-radius: 12px;
    padding: 16px;
}

.event-title {
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.event-date {
    font-size: 12px;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.rsvp-badge {
    display: inline-block;
    background: rgba(34, 197, 94, 0.2);
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: var(--green);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 9999px;
    margin-bottom: 12px;
}

/* ===== HOW IT WORKS ===== */
.how-it-works {
    background: var(--bg-secondary);
    padding: 120px 0;
}

.how-it-works-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.steps {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.step {
    display: flex;
    gap: 24px;
}

.step-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--red);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
    flex-shrink: 0;
}

.step-content h3 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.step-content p {
    font-size: 14px;
    line-height: 1.6;
}

.setup-wizard {
    position: relative;
}

.wizard-label {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--gold);
    letter-spacing: 0.1em;
}

.wizard-content {
    padding: 60px 32px 32px;
}

.wizard-content h4 {
    font-size: 18px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 8px;
}

.wizard-content > p {
    font-size: 14px;
    color: var(--text-secondary);
    margin-bottom: 20px;
}

.form-field {
    margin-bottom: 20px;
}

.form-field label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 8px;
}

.form-field input {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--text-primary);
    font-size: 14px;
}

.code-input {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 10px 12px;
    color: var(--text-primary);
    font-family: monospace;
    letter-spacing: 4px;
}

.success-message {
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 8px;
    padding: 12px;
    color: var(--green);
    font-size: 12px;
    margin: 20px 0;
    text-align: center;
}

/* ===== PRICING ===== */
.pricing-section {
    background: var(--bg-primary);
    padding: 120px 0;
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.pricing-card {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    position: relative;
}

.pricing-card.featured {
    border-color: var(--red);
    box-shadow: 0 0 40px rgba(200, 16, 46, 0.2);
    transform: scale(1.05);
}

.popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to right, var(--red), var(--red-dark));
    color: white;
    padding: 6px 16px;
    border-radius: 9999px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
}

.price-tier {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--red);
    margin-bottom: 8px;
}

.price-tier.gold {
    color: var(--gold);
}

.price-amount {
    font-size: 56px;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 4px;
}

.price-amount span {
    font-size: 16px;
    color: var(--text-muted);
}

.price-features {
    margin: 32px 0;
    padding: 32px 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
}

.feature {
    font-size: 14px;
    margin-bottom: 12px;
    color: var(--text-secondary);
}

.feature.grayed {
    color: var(--text-muted);
    opacity: 0.6;
}

.pricing-card .btn {
    width: 100%;
    justify-content: center;
    margin-top: 32px;
}

/* ===== TESTIMONIALS ===== */
.testimonials-section {
    background: var(--bg-secondary);
    padding: 120px 0;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

.testimonial-card {
    background: var(--bg-tertiary);
    border: 1px solid var(--border);
    border-left: 3px solid var(--red);
    border-radius: 16px;
    padding: 32px;
}

.stars {
    font-size: 14px;
    margin-bottom: 16px;
    color: var(--gold);
}

.testimonial-card p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 24px;
    font-style: italic;
}

.testimonial-author {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.author-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--red);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    flex-shrink: 0;
}

.author-avatar.blue {
    background: #1A3A7A;
}

.author-avatar.green {
    background: #1A5A3A;
}

.testimonial-author strong {
    font-size: 14px;
    color: var(--text-primary);
    display: block;
}

.testimonial-author small {
    font-size: 12px;
    color: var(--text-muted);
    display: block;
    margin-top: 4px;
}

/* ===== FINAL CTA ===== */
.final-cta {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    padding: 120px 0;
    text-align: center;
}

.cta-badge {
    display: inline-block;
    background: rgba(200, 16, 46, 0.12);
    border: 1px solid rgba(200, 16, 46, 0.2);
    border-radius: 9999px;
    padding: 8px 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--red);
    letter-spacing: 0.12em;
    margin-bottom: 24px;
}

.final-cta h2 {
    font-size: 56px;
    font-weight: 900;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.final-cta > p:first-of-type {
    font-size: 20px;
    color: var(--text-secondary);
    margin-bottom: 32px;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 24px;
}

.trust-line {
    font-size: 12px;
    color: var(--text-muted);
}

/* ===== FOOTER ===== */
footer {
    background: #080808;
    border-top: 1px solid var(--border);
    padding: 80px 0 40px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 40px;
}

.footer-column h4 {
    font-size: 14px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 16px;
}

.footer-column p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 16px;
}

.footer-column a {
    display: block;
    font-size: 14px;
    color: var(--text-secondary);
    text-decoration: none;
    margin-bottom: 12px;
    transition: color 0.2s;
}

.footer-column a:hover {
    color: var(--text-primary);
}

.social-links {
    display: flex;
    gap: 16px;
}

.gold-link {
    color: var(--gold) !important;
}

.footer-bottom {
    border-top: 1px solid var(--border);
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--text-muted);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .container {
        padding: 0 20px;
    }

    .navbar .nav-container {
        flex-wrap: wrap;
        gap: 20px;
        padding: 0 20px;
    }

    .nav-links {
        display: none;
    }

    .hero-container,
    .showcase-grid,
    .how-it-works-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .hero-content h1 {
        font-size: 48px;
    }

    .hero-stats {
        grid-template-columns: repeat(2, 1fr);
    }

    .problem-cards,
    .testimonials-grid,
    .pricing-grid,
    .features-grid {
        grid-template-columns: 1fr;
    }

    .feature-card.wide {
        grid-column: span 1;
    }

    .pricing-card.featured {
        transform: scale(1);
    }

    .footer-grid {
        grid-template-columns: 1fr;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .cta-buttons .btn {
        width: 100%;
    }
}
