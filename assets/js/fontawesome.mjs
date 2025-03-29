import { dom } from './fontawesome.generated.mjs';

export function initFontawesome(...nodes) {
  if (nodes.length === 0)
    dom.i2svg();
  else
    for (const node of nodes)
      dom.i2svg({ node });
}
