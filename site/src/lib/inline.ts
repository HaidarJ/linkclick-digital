// Tiny inline Markdown for frontmatter strings (ledes, FAQ answers): escapes HTML, then supports
// [links](/url/), **bold** and the [CLIENT TO CONFIRM: …] marker. Nothing else.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(src: string): string {
  let s = esc(src);
  s = s.replace(/\[CLIENT TO CONFIRM:([^\]]*)\]/g, '<mark class="todo">[CLIENT TO CONFIRM:$1]</mark>');
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, href) => {
    const ext = /^https?:\/\//.test(href);
    return `<a href="${href}"${ext ? ' rel="noopener"' : ''}>${text}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return s;
}

// Plain text for JSON-LD (links reduced to their text, markers kept out).
export function plain(src: string): string {
  return src.replace(/\[CLIENT TO CONFIRM:[^\]]*\]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
}
