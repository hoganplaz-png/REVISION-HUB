// Where the site's AI marking server lives. The deploy workflow rewrites this file with the
// Cloudflare Worker's address once the Worker is set up; until then AI marking stays off.
window.IB_CONFIG = Object.assign({}, window.IB_CONFIG);
