(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    QeBL: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "pageQuery", function () {
          return m;
        });
      var l = a("q1tI"),
        n = a.n(l),
        r = a("Wbzz"),
        c = a("6Gk8"),
        i = a("Bl7J"),
        s = a("vrFN");
      t.default = function (e) {
        var t = e.data,
          a = e.location,
          l = t.site.siteMetadata.title,
          m = t.allMarkdownRemark.edges;
        return n.a.createElement(
          i.a,
          { location: a, title: l },
          n.a.createElement(s.a, { title: "All posts" }),
          n.a.createElement(c.a, null),
          n.a.createElement(
            "div",
            { className: "d-md-flex flex-wrap" },
            m.map(function (e) {
              var t = e.node,
                a = t.frontmatter.title || t.fields.slug;
              return n.a.createElement(
                "article",
                {
                  key: t.fields.slug,
                  className:
                    "border my-3 m-md-3 p-3 shadow col-md-5 roi-article",
                },
                n.a.createElement(
                  "header",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "h3" },
                    n.a.createElement(r.Link, { to: t.fields.slug }, a)
                  ),
                  n.a.createElement("small", null, t.frontmatter.date)
                ),
                n.a.createElement(
                  "section",
                  null,
                  n.a.createElement("p", {
                    dangerouslySetInnerHTML: {
                      __html: t.frontmatter.description || t.excerpt,
                    },
                  })
                )
              );
            })
          )
        );
      };
      var m = "2840482602";
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-tsx-2bc18539bb315a01ff61.js.map
