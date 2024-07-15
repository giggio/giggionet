#!/usr/bin/env node

import { generate } from 'critical';
import { globbySync } from 'globby';
import { renameSync } from 'node:fs';
import { join, parse } from 'node:path';
import { Worker, isMainThread, workerData } from 'node:worker_threads';

if (isMainThread) {
  const files = globbySync(['**/*.html', '!**/*critical*', '!pt-br', '!**/1/index.html', '!**/blog/**', '!**/participations/**'], {
    cwd: 'public',
  });
  console.log(`Found ${files.length} HTML files:`);
  console.log(files.toString());
  let resolve;
  const done = new Promise((r) => resolve = r);
  const workers = files.map((htmlFile) => {
    const worker = new Worker(import.meta.filename, { workerData: { htmlFile } });
    worker.on('exit', (code) => {
      workers.splice(workers.indexOf(worker), 1);
      if (code !== 0)
        console.error(new Error(`Critical work for file ${htmlFile} stopped with exit code ${code}.`));
      if (workers.length === 0)
        resolve();
    });
    return worker;
  });
  await done;
  console.log('Generated all critical HTML and CSS.');
} else {
  const { htmlFile } = workerData;
  const parsed = parse(htmlFile);
  const htmlBeforeCriticalFile = join(parsed.dir, `${parsed.name}-before-critical.html`);
  renameSync(join('public', htmlFile), join('public', htmlBeforeCriticalFile));
  // @ts-ignore
  await generate({
    inline: true,
    base: 'public/',
    src: htmlBeforeCriticalFile,
    target: {
      html: htmlFile,
    },
    width: 900,
    height: 900,
    rebase: {
      from: '/css/css/fontawesome/webfonts/',
      to: '/css/fontawesome/webfonts/',
    },
    ignore: {
      atrule: ['@font-face'],
    }
  });
}
