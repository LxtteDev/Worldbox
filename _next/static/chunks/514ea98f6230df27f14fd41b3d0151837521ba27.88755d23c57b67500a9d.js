(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [7],
  {
    "/0+H": function (e, t, n) {
      "use strict";
      (t.__esModule = !0),
        (t.isInAmpMode = c),
        (t.useAmp = function () {
          return c(o.default.useContext(a.AmpStateContext));
        });
      var r,
        o = (r = n("q1tI")) && r.__esModule ? r : { default: r },
        a = n("lwAK");
      function c() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.ampFirst,
          n = void 0 !== t && t,
          r = e.hybrid,
          o = void 0 !== r && r,
          a = e.hasQuery,
          c = void 0 !== a && a;
        return n || (o && c);
      }
    },
    "7W2i": function (e, t, n) {
      var r = n("SksO");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    "8Kt/": function (e, t, n) {
      "use strict";
      n("lSNA");
      (t.__esModule = !0), (t.defaultHead = l), (t.default = void 0);
      var r,
        o = (function (e) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" !== typeof e && "function" !== typeof e))
            return { default: e };
          var t = u();
          if (t && t.has(e)) return t.get(e);
          var n = {},
            r = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if (Object.prototype.hasOwnProperty.call(e, o)) {
              var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
              a && (a.get || a.set)
                ? Object.defineProperty(n, o, a)
                : (n[o] = e[o]);
            }
          (n.default = e), t && t.set(e, n);
          return n;
        })(n("q1tI")),
        a = (r = n("Xuae")) && r.__esModule ? r : { default: r },
        c = n("lwAK"),
        i = n("FYa8"),
        s = n("/0+H");
      function u() {
        if ("function" !== typeof WeakMap) return null;
        var e = new WeakMap();
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = [o.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              o.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === o.default.Fragment
          ? e.concat(
              o.default.Children.toArray(t.props.children).reduce(function (
                e,
                t
              ) {
                return "string" === typeof t || "number" === typeof t
                  ? e
                  : e.concat(t);
              },
              [])
            )
          : e.concat(t);
      }
      var p = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        return e
          .reduce(function (e, t) {
            var n = o.default.Children.toArray(t.props.children);
            return e.concat(n);
          }, [])
          .reduce(d, [])
          .reverse()
          .concat(l(t.inAmpMode))
          .filter(
            (function () {
              var e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return function (o) {
                var a = !0,
                  c = !1;
                if (
                  o.key &&
                  "number" !== typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  c = !0;
                  var i = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(i) ? (a = !1) : e.add(i);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (a = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (var s = 0, u = p.length; s < u; s++) {
                      var l = p[s];
                      if (o.props.hasOwnProperty(l))
                        if ("charSet" === l) n.has(l) ? (a = !1) : n.add(l);
                        else {
                          var d = o.props[l],
                            f = r[l] || new Set();
                          ("name" === l && c) || !f.has(d)
                            ? (f.add(d), (r[l] = f))
                            : (a = !1);
                        }
                    }
                }
                return a;
              };
            })()
          )
          .reverse()
          .map(function (e, t) {
            var n = e.key || t;
            return o.default.cloneElement(e, { key: n });
          });
      }
      function m(e) {
        var t = e.children,
          n = (0, o.useContext)(c.AmpStateContext),
          r = (0, o.useContext)(i.HeadManagerContext);
        return o.default.createElement(
          a.default,
          {
            reduceComponentsToState: f,
            headManager: r,
            inAmpMode: (0, s.isInAmpMode)(n),
          },
          t
        );
      }
      m.rewind = function () {};
      var h = m;
      t.default = h;
    },
    Bnag: function (e, t) {
      e.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      };
    },
    EbDI: function (e, t) {
      e.exports = function (e) {
        if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      };
    },
    FYa8: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.HeadManagerContext = void 0);
      var o = (
        (r = n("q1tI")) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.HeadManagerContext = o;
    },
    Ijbi: function (e, t, n) {
      var r = n("WkPL");
      e.exports = function (e) {
        if (Array.isArray(e)) return r(e);
      };
    },
    Nsbk: function (e, t) {
      function n(t) {
        return (
          (e.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
          n(t)
        );
      }
      e.exports = n;
    },
    PJYZ: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    PvKc: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return O;
      });
      var r = n("nKUr"),
        o = n("rePB"),
        a = n("20a2"),
        c = n("g4pe"),
        i = n.n(c);
      function s() {
        return Object(r.jsx)("noscript", {
          children: Object(r.jsx)("iframe", {
            src: "https://www.googletagmanager.com/ns.html?id=GTM-PRM8BWR",
            height: "0",
            width: "0",
            style: { display: "none", visibility: "hidden" },
          }),
        });
      }
      var u = n("G7qJ"),
        l = n("Ybt9"),
        d = function (e) {
          var t = e.ogImage,
            n = e.ogImageSecure,
            o = e.twitterImage;
          return Object(r.jsxs)(i.a, {
            children: [
              Object(r.jsx)("meta", {
                property: "og:image",
                content: t || "https://cdn.now.gg/apps-content/img/OGImg.png",
              }),
              Object(r.jsx)("meta", {
                property: "og:image:secure_url",
                content:
                  n || t || "https://cdn.now.gg/apps-content/img/OGImg.png",
              }),
              Object(r.jsx)("meta", {
                property: "og:image:width",
                content: "1200",
              }),
              Object(r.jsx)("meta", {
                property: "og:image:height",
                content: "630",
              }),
              Object(r.jsx)("meta", {
                property: "og:image:type",
                content: "image/jpeg",
              }),
              Object(r.jsx)("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              Object(r.jsx)("meta", {
                name: "twitter:image",
                content:
                  o || t || "https://cdn.now.gg/apps-content/img/OGImg.png",
              }),
            ],
          });
        },
        p = n("AATo"),
        f = function (e) {
          var t = e.host,
            n = e.validLocales,
            o = void 0 === n ? p.h : n,
            c = Object(a.useRouter)(),
            s = c.locale,
            u = c.asPath,
            l = o.includes("en") ? "en" : s,
            d =
              "en" === l
                ? "".concat(t).concat("/" == u ? "" : u)
                : ""
                    .concat(t, "/")
                    .concat(l)
                    .concat("/" == u ? "" : u);
          return Object(r.jsxs)(i.a, {
            children: [
              Object(r.jsx)("link", {
                rel: "alternate",
                href: d,
                hrefLang: "x-default",
              }),
              o
                .filter(function (e) {
                  return e !== p.b[l] && e !== l;
                })
                .map(function (e) {
                  var n = p.k[e] || e,
                    o = ""
                      .concat(t, "/")
                      .concat(p.f[e] || e)
                      .concat("/" == u ? "" : u);
                  return "en" === n || o.includes("/ja/payments")
                    ? null
                    : Object(r.jsx)(
                        "link",
                        { rel: "alternate", href: o, hrefLang: n },
                        e
                      );
                }),
            ],
          });
        },
        m = n("q1tI"),
        h = n("Vvt1"),
        b = n.n(h);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                Object(o.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      b()(
        function () {
          return Promise.all([n.e(2), n.e(16)]).then(n.bind(null, "pipb"));
        },
        {
          loadableGenerated: {
            webpack: function () {
              return ["pipb"];
            },
            modules: ["./language"],
          },
        }
      );
      var v = b()(
          function () {
            return Promise.all([
              n.e(10),
              n.e(2),
              n.e(9),
              n.e(11),
              n.e(83),
            ]).then(n.bind(null, "xoxq"));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["xoxq"];
              },
              modules: ["../Header/HeaderLight"],
            },
          }
        ),
        y = b()(
          function () {
            return Promise.all([n.e(0), n.e(10), n.e(2), n.e(8), n.e(82)]).then(
              n.bind(null, "HXcA")
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return ["HXcA"];
              },
              modules: ["../Footer/Footer"],
            },
          }
        );
      function O(e) {
        var t = e.children,
          n = e.metaTitle,
          o = void 0 === n ? "homeMetaTitle" : n,
          c = e.metaDescription,
          p = void 0 === c ? "homeMetaDesc" : c,
          h = (e.schemaKey, e.ogContent),
          b = e.breadcrumb,
          g = e.dynamicUrl,
          O = void 0 === g || g,
          x = e.breadcrumbList,
          w = (e.theme, e.showLaunguages),
          k = void 0 === w || w,
          _ = e.hideHeaderLinks,
          M = e.seoEnabled,
          P = void 0 === M || M,
          L = e.host,
          I = e.getSchemas,
          S =
            void 0 === I
              ? function () {
                  return null;
                }
              : I,
          A = e.schemas,
          C = e.validLocales,
          E = e.origin,
          H = e.nextLevel,
          q = void 0 === H ? "new" : H,
          D = e.showNextLevel,
          T = void 0 === D || D,
          R = e.headerLinks,
          F = e.footerLinks,
          N = e.bannerType,
          K = void 0 === N ? 1 : N,
          U = Object(a.useRouter)(),
          W = U.locale,
          G = U.asPath,
          J = void 0 === G ? "" : G,
          Y = U.pathname,
          z = Object(m.useState)(""),
          B = z[0],
          X = z[1],
          Z =
            "en" === W
              ? "".concat(L).concat("/" == J ? "" : J)
              : ""
                  .concat(L, "/")
                  .concat(W)
                  .concat("/" == J ? "" : J);
        return (
          Object(m.useEffect)(function () {
            var e,
              t = document.body,
              n = "scroll-up",
              r = "scroll-down",
              o = 0,
              a =
                null === (e = document.querySelector("header")) || void 0 === e
                  ? void 0
                  : e.offsetHeight;
            t.classList.remove(r);
            var c = function () {
              document.querySelector(".language") &&
                (document.querySelector(".language").style.zIndex = "10");
              var e = window.pageYOffset;
              e <= a
                ? t.classList.remove(n)
                : (e > o && !t.classList.contains(r)
                    ? (t.classList.remove(n), t.classList.add(r))
                    : e < o &&
                      t.classList.contains(r) &&
                      (t.classList.remove(r), t.classList.add(n)),
                  (o = e));
            };
            return (
              window.addEventListener("scroll", c),
              function () {
                return window.removeEventListener("scroll", c);
              }
            );
          }),
          Object(m.useEffect)(
            function () {
              navigator &&
                (X(Object(u.d)().platform),
                B && document.body.classList.add(B));
            },
            [B]
          ),
          Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsxs)(i.a, {
                children: [
                  Object(r.jsx)("meta", { charSet: "UTF-8" }),
                  P
                    ? Object(r.jsx)("meta", {
                        name: "robots",
                        content: "index,follow",
                      })
                    : Object(r.jsx)("meta", {
                        name: "robots",
                        content: "noindex,nofollow",
                      }),
                  Object(r.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                  }),
                  Object(r.jsx)("meta", {
                    httpEquiv: "X-UA-Compatible",
                    content: "ie=edge",
                  }),
                  Object(r.jsx)("link", { rel: "canonical", href: Z }),
                  Object(r.jsx)("meta", {
                    name: "description",
                    content: Object(u.k)(p),
                  }),
                  Object(r.jsx)("meta", {
                    name: "baidu-site-verification",
                    content: "code-y42E1spUr0",
                  }),
                  Object(r.jsx)("meta", {
                    name: "theme-color",
                    content: "#FF42A5",
                  }),
                  Object(r.jsx)("meta", {
                    property: "og:locale",
                    content: { cn: "zh-Hans_CN", tw: "zh-Hant_TW" }[W] || W,
                  }),
                  Object(r.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  Object(r.jsx)("meta", {
                    property: "og:title",
                    content: Object(u.k)(o),
                  }),
                  Object(r.jsx)("meta", {
                    property: "og:description",
                    content: Object(u.k)(p),
                  }),
                  Object(r.jsx)("meta", { property: "og:url", content: Z }),
                  Object(r.jsx)("meta", {
                    property: "og:site_name",
                    content: "now.gg",
                  }),
                  Object(r.jsx)("meta", {
                    property: "twitter:title",
                    content: Object(u.k)(o),
                  }),
                  Object(r.jsx)("meta", {
                    name: "twitter:description",
                    content: Object(u.k)(p),
                  }),
                  Object(r.jsx)("link", {
                    rel: "icon",
                    href: "https://cdn.now.gg/apps-content/common/img/favicon.ico",
                    sizes: "32x32",
                  }),
                  Object(r.jsx)("link", {
                    rel: "icon",
                    href: "https://cdn.now.gg/apps-content/common/img/favicon.ico",
                    sizes: "192x192",
                  }),
                  Object(r.jsx)("link", {
                    rel: "apple-touch-icon-precomposed",
                    href: "https://cdn.now.gg/apps-content/common/img/favicon.ico",
                  }),
                  Object(r.jsx)("meta", {
                    name: "msapplication-TileImage",
                    content:
                      "https://cdn.now.gg/apps-content/common/img/favicon.ico",
                  }),
                  Object(r.jsx)("title", { children: Object(u.k)(o) }),
                  Object(r.jsx)("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                  }),
                ],
              }),
              Object(r.jsx)(d, j({}, h)),
              "/404" !== Y && Object(r.jsx)(f, { host: L, validLocales: C }),
              Object(r.jsx)(s, {}),
              R &&
                Object(r.jsx)(v, {
                  hideHeaderLink: _,
                  origin: E,
                  headerLinks: R,
                }),
              Object(r.jsx)("div", { className: "main-content", children: t }),
              Object(r.jsx)(y, {
                customBreadcrumbs: b,
                dynamicUrl: O,
                breadcrumbList: x,
                host: L,
                showLanguages: k,
                validLocales: C,
                nextLevel: q,
                showNextLevel: T,
                footerItems: F,
                bannerType: K,
              }),
              Object(r.jsx)(l.a, {
                schemas:
                  A ||
                  S(o, p, Z, null === h || void 0 === h ? void 0 : h.ogImage),
              }),
            ],
          })
        );
      }
    },
    RIqP: function (e, t, n) {
      var r = n("Ijbi"),
        o = n("EbDI"),
        a = n("ZhPi"),
        c = n("Bnag");
      e.exports = function (e) {
        return r(e) || o(e) || a(e) || c();
      };
    },
    Xuae: function (e, t, n) {
      "use strict";
      var r = n("RIqP"),
        o = n("lwsE"),
        a = n("W8MJ"),
        c = (n("PJYZ"), n("7W2i")),
        i = n("a1gu"),
        s = n("Nsbk");
      function u(e) {
        var t = (function () {
          if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" === typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = s(e);
          if (t) {
            var o = s(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return i(this, n);
        };
      }
      (t.__esModule = !0), (t.default = void 0);
      var l = n("q1tI"),
        d = (function (e) {
          c(n, e);
          var t = u(n);
          function n(e) {
            var a;
            return (
              o(this, n),
              ((a = t.call(this, e))._hasHeadManager = void 0),
              (a.emitChange = function () {
                a._hasHeadManager &&
                  a.props.headManager.updateHead(
                    a.props.reduceComponentsToState(
                      r(a.props.headManager.mountedInstances),
                      a.props
                    )
                  );
              }),
              (a._hasHeadManager =
                a.props.headManager && a.props.headManager.mountedInstances),
              a
            );
          }
          return (
            a(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.add(this),
                    this.emitChange();
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.emitChange();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this._hasHeadManager &&
                    this.props.headManager.mountedInstances.delete(this),
                    this.emitChange();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(l.Component);
      t.default = d;
    },
    Ybt9: function (e, t, n) {
      "use strict";
      var r = n("nKUr");
      t.a = function (e) {
        var t = e.schemas;
        return t
          ? Object(r.jsx)("script", {
              type: "application/ld+json",
              dangerouslySetInnerHTML: { __html: JSON.stringify(t) },
            })
          : null;
      };
    },
    a1gu: function (e, t, n) {
      var r = n("cDf5"),
        o = n("PJYZ");
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? o(e) : t;
      };
    },
    g4pe: function (e, t, n) {
      e.exports = n("8Kt/");
    },
    lwAK: function (e, t, n) {
      "use strict";
      var r;
      (t.__esModule = !0), (t.AmpStateContext = void 0);
      var o = (
        (r = n("q1tI")) && r.__esModule ? r : { default: r }
      ).default.createContext({});
      t.AmpStateContext = o;
    },
  },
]);
