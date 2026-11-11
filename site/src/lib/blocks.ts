// Turns a page's rendered Markdown into designed sections. Each `##` section becomes a block whose
// layout follows what the section actually contains, so writers keep writing plain Markdown:
//   two or more `###`          → cards      (sub-services, features)
//   an ordered list (3+ items) → steps      (a process)
//   a list of **Bold.** items  → factors    (what drives the price, what's measured)
//   a list of "Label: value"   → facts      (the brand-facts sheet)
//   a table                    → compare
//   a plain list (3+ items)    → checklist
//   anything else              → prose
// The first paragraph under each heading is the answer-first lead and is set larger.

export type Kind = 'prose' | 'cards' | 'steps' | 'factors' | 'facts' | 'compare' | 'checklist';
export type Item = { title: string; body: string };
export type Block = {
  id: string;
  title: string;
  lead: string;
  kind: Kind;
  intro: string; // html between the lead and the structured part
  items: Item[];
  table: string;
  after: string; // html after the structured part
  surface: 'paper' | 'mist' | 'ink';
  /** A text-only section with little or nothing after the lead: laid out as one passage, not two columns. */
  short: boolean;
};

const BLOCK_START = /\n(?=<(?:p|h3|h4|ul|ol|table|blockquote|hr|figure|pre)[\s>])/;

const strip = (s: string) => s.replace(/<[^>]+>/g, '').trim();

function splitChildren(html: string): string[] {
  return ('\n' + html.trim()).split(BLOCK_START).map((s) => s.trim()).filter(Boolean);
}

function listItems(list: string): string[] {
  return [...list.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1].trim());
}

// "<strong>Brief.</strong> We agree…" → { title: "Brief", body: "We agree…" }
function boldLead(li: string): Item | null {
  const m = li.replace(/^<p>|<\/p>$/g, '').match(/^<strong>([\s\S]+?)<\/strong>[\s:.,–-]*([\s\S]*)$/);
  if (!m) return null;
  return { title: m[1].replace(/[.:]\s*$/, ''), body: m[2].trim() };
}

// "Services: UGC…" → { title: "Services", body: "UGC…" }
function labelValue(li: string): Item | null {
  const m = li.match(/^([A-Z][A-Za-z ,&/'’-]{1,40}):\s+([\s\S]+)$/);
  return m ? { title: m[1], body: m[2] } : null;
}

function classify(children: string[]) {
  const isTag = (c: string, t: string) => c.startsWith(`<${t}`);
  const h3 = children.filter((c) => isTag(c, 'h3')).length;
  const firstIndex = (pred: (c: string) => boolean) => children.findIndex(pred);

  if (h3 >= 2) {
    const start = firstIndex((c) => isTag(c, 'h3'));
    const items: Item[] = [];
    for (const c of children.slice(start)) {
      if (isTag(c, 'h3')) items.push({ title: strip(c.replace(/<h3[^>]*>|<\/h3>/g, '')), body: '' });
      else items[items.length - 1].body += c + '\n';
    }
    return { kind: 'cards' as Kind, intro: children.slice(0, start), items, table: '', after: [] as string[] };
  }

  const ol = firstIndex((c) => isTag(c, 'ol'));
  if (ol >= 0 && listItems(children[ol]).length >= 3) {
    const items = listItems(children[ol]).map((li) => boldLead(li) ?? { title: '', body: li });
    return { kind: 'steps' as Kind, intro: children.slice(0, ol), items, table: '', after: children.slice(ol + 1) };
  }

  const tbl = firstIndex((c) => isTag(c, 'table'));
  if (tbl >= 0) {
    return { kind: 'compare' as Kind, intro: children.slice(0, tbl), items: [], table: children[tbl], after: children.slice(tbl + 1) };
  }

  const ul = firstIndex((c) => isTag(c, 'ul'));
  if (ul >= 0) {
    const lis = listItems(children[ul]);
    const bold = lis.map(boldLead);
    if (lis.length >= 3 && bold.every(Boolean)) {
      return { kind: 'factors' as Kind, intro: children.slice(0, ul), items: bold as Item[], table: '', after: children.slice(ul + 1) };
    }
    const kv = lis.map(labelValue);
    if (lis.length >= 4 && kv.filter(Boolean).length >= lis.length - 1) {
      const items = lis.map((li, i) => kv[i] ?? { title: '', body: li });
      return { kind: 'facts' as Kind, intro: children.slice(0, ul), items, table: '', after: children.slice(ul + 1) };
    }
    if (lis.length >= 3) {
      return { kind: 'checklist' as Kind, intro: children.slice(0, ul), items: lis.map((body) => ({ title: '', body })), table: '', after: children.slice(ul + 1) };
    }
  }
  return { kind: 'prose' as Kind, intro: children, items: [], table: '', after: [] as string[] };
}

export function toBlocks(html: string): { preface: string; blocks: Block[] } {
  const parts = html.split(/(<h2 id="[^"]+">[\s\S]*?<\/h2>)/);
  const preface = parts[0].trim();
  const blocks: Block[] = [];
  for (let i = 1; i < parts.length; i += 2) {
    const [, id, title] = parts[i].match(/<h2 id="([^"]+)">([\s\S]*?)<\/h2>/)!;
    const children = splitChildren(parts[i + 1] ?? '');
    let lead = '';
    if (children[0]?.startsWith('<p')) lead = children.shift()!.replace(/^<p>|<\/p>$/g, '');
    const c = classify(children);
    const rest = (c.intro.join(' ') + ' ' + c.after.join(' ')).replace(/<[^>]+>/g, '').trim();
    const short = c.kind === 'prose' && rest.length < 250;
    blocks.push({ id, title, lead, kind: c.kind, intro: c.intro.join('\n'), items: c.items, table: c.table, after: c.after.join('\n'), surface: 'paper', short });
  }
  // Surfaces: the first process gets the page's one dark sheet; then cards, fact sheets, tables and
  // checklists get a pale sheet wherever both neighbours are plain paper. Sheets never touch, so the
  // page alternates like the homepage and rounded corners always open onto paper.
  const firstSteps = blocks.findIndex((b) => b.kind === 'steps');
  if (firstSteps >= 0) blocks[firstSteps].surface = 'ink';
  const pale = new Set<Kind>(['cards', 'facts', 'compare', 'checklist']);
  blocks.forEach((b, i) => {
    const prev = blocks[i - 1]?.surface ?? 'paper';
    const next = blocks[i + 1]?.surface ?? 'paper';
    if (b.surface === 'paper' && pale.has(b.kind) && prev === 'paper' && next === 'paper') b.surface = 'mist';
  });
  return { preface, blocks };
}
