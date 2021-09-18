---
to: "<%= options.indexOf('page') !== -1 ? `src/pages/${name}.tsx` : null %>"
---
<%
  var hasStyles = options.indexOf("styles") !== -1;
%>
import React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
<%if (hasStyles) { %>
import styles from "@styles/pages/<%= h.changeCase.pascalCase(name) %>.module.scss";
<% } %>

const <%= h.changeCase.pascalCase(name) %>: NextPage = () => {
  return (
    <>
      <NextSeo title="<%= h.changeCase.sentenceCase(name) %>" />
      <div<%- (hasStyles ? ` className=\{styles.${h.changeCase.camelCase(name)}\}` : null)%>><pre>/<%= name %></pre> page</div>
    </>
  );
};

export default <%= h.changeCase.pascalCase(name) %>;
