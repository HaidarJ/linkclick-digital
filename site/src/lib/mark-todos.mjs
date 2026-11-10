// After the build, wrap "[CLIENT TO CONFIRM: …]" placeholders from Markdown bodies in <mark class="todo">
// so they are easy to spot on the page (frontmatter strings are already marked by src/lib/inline.ts).
// Works on the built HTML, so it doesn't depend on which Markdown processor Astro uses.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const RE = /(?<!>)\[CLIENT TO CONFIRM:([^\]<]*)\]/g;

async function* html(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* html(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

export function markTodos() {
  return {
    name: 'mark-todos',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        let n = 0;
        for await (const file of html(fileURLToPath(dir))) {
          const src = await readFile(file, 'utf8');
          const [head, ...rest] = src.split('<body');
          if (!rest.length) continue;
          const body = rest.join('<body').replace(RE, (m) => { n++; return `<mark class="todo">${m}</mark>`; });
          await writeFile(file, head + '<body' + body);
        }
        logger.info(`${n} client placeholders marked`);
      },
    },
  };
}
