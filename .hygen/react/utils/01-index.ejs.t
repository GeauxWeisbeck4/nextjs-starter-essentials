---
to: "<%= options.indexOf('index') !== -1 ? `src/utils/${h.changeCase.param(name)}/index.tsx` : null %>"
---
import <%= h.changeCase.camel(name) %> from './<%= h.changeCase.param(name) %>';

export default <%= h.changeCase.camel(name) %>;
