(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    q4sD: function (e, t, a) {},
    yZlL: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function () {
          return o;
        });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("Wbzz"),
        m = a("6Gk8"),
        c = a("Bl7J"),
        i = a("vrFN");
      a("q4sD");
      t.default = function (e) {
        var t = e.data,
          a = e.pageContext,
          l = e.location,
          o = t.markdownRemark,
          s = t.site.siteMetadata.title,
          d = a.previous,
          u = a.next;
        return n.a.createElement(
          c.a,
          { location: l, title: s, className: "d-md-block" },
          n.a.createElement(i.a, {
            title: o.frontmatter.title,
            description: o.frontmatter.description || o.excerpt,
          }),
          n.a.createElement(
            "div",
            null,
            n.a.createElement(
              "article",
              { className: "border m-3 p-3 d-md-block" },
              n.a.createElement(
                "header",
                null,
                n.a.createElement(
                  "div",
                  { className: "h2" },
                  o.frontmatter.title
                ),
                n.a.createElement("p", null, o.frontmatter.date)
              ),
              n.a.createElement("section", {
                className: "ml-md-2",
                dangerouslySetInnerHTML: { __html: o.html },
              }),
              n.a.createElement("hr", null),
              n.a.createElement("footer", null, n.a.createElement(m.a, null))
            ),
            n.a.createElement(
              "nav",
              { className: "d-md-block ml-md-5" },
              n.a.createElement(
                "ul",
                null,
                n.a.createElement(
                  "li",
                  null,
                  d &&
                    n.a.createElement(
                      r.Link,
                      { to: d.fields.slug, rel: "prev" },
                      "← ",
                      d.frontmatter.title
                    )
                ),
                n.a.createElement(
                  "li",
                  null,
                  u &&
                    n.a.createElement(
                      r.Link,
                      { to: u.fields.slug, rel: "next" },
                      u.frontmatter.title,
                      " →"
                    )
                )
              )
            )
          )
        );
      };
      var o = "3493826965";
    },
  },
]);
//# sourceMappingURL=component---src-templates-blog-post-js-33d316b67127d51a9af7.js.map
