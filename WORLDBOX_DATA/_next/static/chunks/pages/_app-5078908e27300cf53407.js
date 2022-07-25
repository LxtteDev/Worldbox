_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [43],
  {
    0: function (n, o, s) {
      s("GcxT"), (n.exports = s("nOHt"));
    },
    "1TCz": function (n, o, s) {
      "use strict";
      s.r(o);
      var t = s("o0o1"),
        e = s.n(t),
        i = s("HaE+"),
        g = s("nKUr"),
        r = s("rePB"),
        a = s("q9CF"),
        p = s("20a2"),
        w = s("A8lN"),
        l = s("vOnD"),
        c = function (n) {
          var o = "";
          return (
            "en" !== ({ cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[n] || n) &&
              (o +=
                "{\n        .blog-menu {\n            display: none;\n        }\n      }"),
            o
          );
        },
        f = s("Vvt1"),
        j = s.n(f),
        u = s("q1tI"),
        d = s("G7qJ");
      function m(n, o) {
        var s = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(n);
          o &&
            (t = t.filter(function (o) {
              return Object.getOwnPropertyDescriptor(n, o).enumerable;
            })),
            s.push.apply(s, t);
        }
        return s;
      }
      function h(n) {
        for (var o = 1; o < arguments.length; o++) {
          var s = null != arguments[o] ? arguments[o] : {};
          o % 2
            ? m(Object(s), !0).forEach(function (o) {
                Object(r.a)(n, o, s[o]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
            : m(Object(s)).forEach(function (o) {
                Object.defineProperty(
                  n,
                  o,
                  Object.getOwnPropertyDescriptor(s, o)
                );
              });
        }
        return n;
      }
      var b = Object(l.a)(
          ["", " ", ""],
          ":root{--white: #ffffff;--black: #000000;--primaryColor: #ff43a6;--paraColor: #473e5f;--titlecolor: #0b0223;--hpTitleColor: #1f1637;--termsTitleColor: #5b5273;--partnerParaColor: #8d84a5;--contactusParaColor: #797091;--hoverPrimary: #ff339e;--borderColor: #ebebeb;--lightParaColor: #a198b9}*{box-sizing:border-box;margin:0;padding:0}*:focus,*:active,*:hover{outline:none}html,body{margin:0;padding:0;width:100%}ul[class]{list-style:none;padding:0;margin:0}button,.btn{cursor:pointer}h1,h2,h3,h4,h5,h6,p,span{margin:0;font-weight:unset}a{text-decoration:none}b,strong{font-family:var(--font-bold)}.inline-lazy{display:inline}.main-content{min-height:calc(100vh - 297px)}html[lang='ko'] *{word-break:keep-all}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}body{font-family:'Poppins', sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;background-color:var(--white);padding-top:87px !important}@media (max-width: 767px){body{padding-top:83px !important}}html:not([lang='en']) .blog-menu{display:none}html[lang='ja'] .header-section-light .logo{width:fit-content}html[lang='ja'] .header-section-light .logo svg{width:181px;height:48px}.flex{display:flex}.flex.perfectCenter{justify-content:center;align-items:center}.flex.hrtlCenter{justify-content:center}.flex.vrtlCenter{align-items:center}.flex.flex-end{justify-content:flex-end}.flex.space-btw{justify-content:space-between}.flex.space-even{justify-content:space-evenly}.flex.space-around{justify-content:space-around}.flex.column{flex-direction:column}.flex.start{align-items:flex-start}.flex.pointer{cursor:pointer}.container{max-width:1147px;width:100%;margin:0 auto}@media (max-width: 1200px){.container{padding:0 12px !important}}@media (max-width: 1024px){.container{padding:0 16px !important}}.img-responsive{max-width:100%;width:auto;height:auto}.image-fit{object-fit:cover;height:100%;width:100%}.fs-modal-open,.hamburger-open{height:100vh;overflow-y:hidden}.read-more{color:#ff43a5;cursor:pointer}.experience-btn *{pointer-events:none}#nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d, 0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px, -4px);-ms-transform:rotate(3deg) translate(0px, -4px);transform:rotate(3deg) translate(0px, -4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}#nprogress .bar{background:var(--primaryColor) !important}#nprogress .peg{box-shadow:0 0 10px var(--primaryColor) 0,0 0 5px var(--primaryColor) 0}.scroll-down .header-section-light{transition:transform 0.4s ease-in;transform:translate3d(0, -100%, 0)}.scroll-up .header-section-light{transform:none;transition:transform 0.4s ease-in-out;box-shadow:0px 4px 16px rgba(0,0,0,0.08)}@media (min-width: 1025px){.language+.main-content{margin-top:85px}}@media (max-width: 1024px){.language+.main-content{margin-top:110px}.unsupportedlangMsg+.main-content{margin-top:135px}}\n",
          function (n) {
            return c(n.lang);
          }
        ),
        y = j()(
          function () {
            return s.e(87).then(s.bind(null, "yDDw"));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["yDDw"];
              },
              modules: ["../shared/utils/nprogress.js"],
            },
          }
        );
      function U(n) {
        var o = n.Component,
          s = n.pageProps,
          t = n.isMobile,
          e = n.host,
          i = n.messages,
          r = n.languages,
          l = (n.newsArticle, n.country_code),
          c = Object(p.useRouter)().locale;
        return (
          Object(u.useEffect)(function () {
            if (window.location.pathname.startsWith("/en")) {
              var n = window.location.pathname.split("/en")[1] || "/";
              window.history.pushState({}, null, n);
            }
            Object(d.c)("first_landing_page") ||
              Object(d.i)("first_landing_page", window.location.href, 1),
              l && Object(d.i)("v_country", l);
          }, []),
          Object(g.jsxs)(a.b, {
            locale: c,
            messages: i,
            children: [
              Object(g.jsxs)(w.a, {
                isMobile: t,
                messages: i,
                languages: r,
                country_code: l,
                children: [
                  Object(g.jsx)(o, h(h({}, s), {}, { isMobile: t, host: e })),
                  Object(g.jsx)(y, {}),
                ],
              }),
              Object(g.jsx)(b, { locale: c }),
            ],
          })
        );
      }
      U.getInitialProps = (function () {
        var n = Object(i.a)(
          e.a.mark(function n(o) {
            var s, t, i, g, r, a, p, w, l, c, f, j, u, d;
            return e.a.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (s = o.ctx.req.url),
                      (t = !!o.ctx.req),
                      (i = o.router),
                      (g = i.locale),
                      (r = i.defaultLocale),
                      (p = ""),
                      (w = ""),
                      t &&
                        ((w =
                          (null === (l = o.ctx.req) || void 0 === l
                            ? void 0
                            : l.headers["cloudfront-viewer-country"]) || null),
                        (p = ""
                          .concat("https", "://")
                          .concat(o.ctx.req.headers.host)),
                        (a =
                          !(
                            null === (c = o.ctx.req) ||
                            void 0 === c ||
                            !c.headers["sec-ch-ua-mobile"] ||
                            "?1" !== o.ctx.req.headers["sec-ch-ua-mobile"]
                          ) ||
                          !!(
                            (null !== (f = o.ctx.req) &&
                              void 0 !== f &&
                              f.headers["cloudFront-is-mobile-viewer"]) ||
                            (null !== (j = o.ctx.req) &&
                              void 0 !== j &&
                              j.rawHeaders["cloudFront-is-mobile-viewer"])
                          ))),
                      (n.next = 8),
                      v(g, r, s)
                    );
                  case 8:
                    return (
                      (u = n.sent),
                      (d = {
                        blog_post_lang: [
                          "zh-hans",
                          "zh-hant",
                          "en",
                          "ja",
                          "ko",
                        ],
                        app_page_lang: [
                          "zh-hans",
                          "zh-hant",
                          "en",
                          "ja",
                          "ko",
                          "pt-br",
                          "es",
                          "th",
                          "vi",
                          "fr",
                          "de",
                          "id",
                        ],
                        support_article_lang: ["zh-hant", "en", "ja", "ko"],
                        prereg_apps_lang: ["zh-hans", "zh-hant"],
                      }),
                      n.abrupt("return", {
                        isMobile: a,
                        messages: u,
                        host: p,
                        languages: d,
                        country_code: w,
                      })
                    );
                  case 11:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        );
        return function (o) {
          return n.apply(this, arguments);
        };
      })();
      var v = (function () {
        var n = Object(i.a)(
          e.a.mark(function n(o, t, i) {
            var g, r, a, p, w, l, c, f;
            return e.a.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    if (
                      ((r = {
                        "/apps/": "nowgg-games",
                        "/blog/": "nowgg-blog",
                        "/games/": "nowgg-games",
                        "/news/": "nowgg-news",
                        "/support/": "nowgg-support",
                      }),
                      (a = { tw: "zh" }),
                      (l = !1),
                      !(g = {
                        "/": "nowgg-home",
                        "/aboutus.html": "nowgg-aboutus",
                        "/blog.html": "nowgg-blog",
                        "/copyright-dispute-policy.html": "nowgg-copyright",
                        "/games.html": "nowgg-games",
                        "/home.html": "nowgg-home",
                        "/indiecraft.html": "nowgg-indiecraft",
                        "/news.html": "nowgg-news",
                        "/nfg.html": "nowgg-nfg",
                        "/payments.html": "nowgg-payments",
                        "/platform.html": "nowgg-platform",
                        "/solutions.html": "nowgg-solutions",
                        "/support.html": "nowgg-support",
                        "/terms-and-privacy.html": "nowgg-terms-and-privacy",
                        "/unsubscribe.html": "nowgg-unsubscribe",
                        "/404.html": "nowgg-404",
                      })[i])
                    ) {
                      n.next = 14;
                      break;
                    }
                    return (
                      (n.next = 7),
                      s("Sdhw")(
                        "./".concat(g[i], "/i18n/").concat(a[o] || o, ".json")
                      )
                    );
                  case 7:
                    return (
                      (p = n.sent),
                      (n.next = 10),
                      s("Sdhw")(
                        "./".concat(g[i], "/i18n/").concat(a[o] || t, ".json")
                      )
                    );
                  case 10:
                    (w = n.sent), (l = !0), (n.next = 29);
                    break;
                  case 14:
                    n.t0 = e.a.keys(r);
                  case 15:
                    if ((n.t1 = n.t0()).done) {
                      n.next = 29;
                      break;
                    }
                    if (((c = n.t1.value), (f = r[c]), !i.includes(c))) {
                      n.next = 27;
                      break;
                    }
                    return (
                      (n.next = 21),
                      s("Sdhw")(
                        "./".concat(f, "/i18n/").concat(a[o] || o, ".json")
                      )
                    );
                  case 21:
                    return (
                      (p = n.sent),
                      (n.next = 24),
                      s("Sdhw")(
                        "./".concat(f, "/i18n/").concat(a[o] || t, ".json")
                      )
                    );
                  case 24:
                    return (w = n.sent), (l = !0), n.abrupt("break", 29);
                  case 27:
                    n.next = 15;
                    break;
                  case 29:
                    if (l) {
                      n.next = 36;
                      break;
                    }
                    return (
                      (n.next = 32), s("r1gb")("./".concat(a[o] || o, ".json"))
                    );
                  case 32:
                    return (
                      (p = n.sent),
                      (n.next = 35),
                      s("r1gb")("./".concat(a[o] || t, ".json"))
                    );
                  case 35:
                    w = n.sent;
                  case 36:
                    return n.abrupt("return", h(h({}, w), p));
                  case 37:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        );
        return function (o, s, t) {
          return n.apply(this, arguments);
        };
      })();
      o.default = U;
    },
    GcxT: function (n, o, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return s("1TCz");
        },
      ]);
    },
    Sdhw: function (n, o, s) {
      var t = {
        "./nowgg-404/i18n/ar.json": ["oUSD", 24],
        "./nowgg-404/i18n/cn.json": ["voOi", 25],
        "./nowgg-404/i18n/de.json": ["533T", 26],
        "./nowgg-404/i18n/en.json": ["X+yj", 27],
        "./nowgg-404/i18n/es.json": ["VL1g", 28],
        "./nowgg-404/i18n/fr.json": ["jKkj", 29],
        "./nowgg-404/i18n/id.json": ["NDTW", 30],
        "./nowgg-404/i18n/it.json": ["vOWW", 31],
        "./nowgg-404/i18n/ja.json": ["vAsl", 32],
        "./nowgg-404/i18n/ko.json": ["CiZt", 33],
        "./nowgg-404/i18n/pl.json": ["Iv1Z", 34],
        "./nowgg-404/i18n/pt-br.json": ["54vR", 35],
        "./nowgg-404/i18n/ru.json": ["C4Xr", 36],
        "./nowgg-404/i18n/th.json": ["waVT", 37],
        "./nowgg-404/i18n/tr.json": ["DImS", 38],
        "./nowgg-404/i18n/vi.json": ["G+XT", 39],
        "./nowgg-404/i18n/zh.json": ["XUkW", 40],
        "./nowgg-404/placeholder/placeholder.json": ["ZlMk", 88],
        "./nowgg-aboutus/i18n/ar.json": ["HCzB", 89],
        "./nowgg-aboutus/i18n/cn.json": ["oQN9", 90],
        "./nowgg-aboutus/i18n/de.json": ["ixaD", 91],
        "./nowgg-aboutus/i18n/en.json": ["Qv/W", 92],
        "./nowgg-aboutus/i18n/es.json": ["b6eF", 93],
        "./nowgg-aboutus/i18n/fr.json": ["mEVL", 94],
        "./nowgg-aboutus/i18n/id.json": ["F8d4", 95],
        "./nowgg-aboutus/i18n/it.json": ["5Kat", 96],
        "./nowgg-aboutus/i18n/ja.json": ["PfEb", 97],
        "./nowgg-aboutus/i18n/ko.json": ["5Jtb", 98],
        "./nowgg-aboutus/i18n/pl.json": ["ubcl", 99],
        "./nowgg-aboutus/i18n/pt-br.json": ["mJlx", 100],
        "./nowgg-aboutus/i18n/ru.json": ["PUF+", 101],
        "./nowgg-aboutus/i18n/th.json": ["NynM", 102],
        "./nowgg-aboutus/i18n/tr.json": ["2oR9", 103],
        "./nowgg-aboutus/i18n/vi.json": ["1P8K", 104],
        "./nowgg-aboutus/i18n/zh.json": ["CLYH", 105],
        "./nowgg-aboutus/placeholder/placeholder.json": ["iO5y", 106],
        "./nowgg-blog/i18n/ar.json": ["H4tc", 107],
        "./nowgg-blog/i18n/cn.json": ["b14v", 108],
        "./nowgg-blog/i18n/de.json": ["8Ipy", 109],
        "./nowgg-blog/i18n/en.json": ["7ilR", 110],
        "./nowgg-blog/i18n/es.json": ["4nO9", 111],
        "./nowgg-blog/i18n/fr.json": ["xxeV", 112],
        "./nowgg-blog/i18n/id.json": ["u3vw", 113],
        "./nowgg-blog/i18n/it.json": ["acwQ", 114],
        "./nowgg-blog/i18n/ja.json": ["pWbP", 115],
        "./nowgg-blog/i18n/ko.json": ["ekmI", 116],
        "./nowgg-blog/i18n/pl.json": ["4ToJ", 117],
        "./nowgg-blog/i18n/pt-br.json": ["zLC+", 118],
        "./nowgg-blog/i18n/ru.json": ["xhBp", 119],
        "./nowgg-blog/i18n/th.json": ["1/Gv", 120],
        "./nowgg-blog/i18n/tr.json": ["e9gO", 121],
        "./nowgg-blog/i18n/vi.json": ["ZtCr", 122],
        "./nowgg-blog/i18n/zh.json": ["REfS", 123],
        "./nowgg-blog/placeholder/placeholder.json": ["7r6j", 124],
        "./nowgg-common/placeholder/placeholder.json": ["AVl3", 125],
        "./nowgg-copyright/i18n/ar.json": ["d9zP", 126],
        "./nowgg-copyright/i18n/cn.json": ["jmFE", 127],
        "./nowgg-copyright/i18n/de.json": ["3DJX", 128],
        "./nowgg-copyright/i18n/en.json": ["vc9q", 129],
        "./nowgg-copyright/i18n/es.json": ["OOUK", 130],
        "./nowgg-copyright/i18n/fr.json": ["wZcY", 131],
        "./nowgg-copyright/i18n/id.json": ["c3pu", 132],
        "./nowgg-copyright/i18n/it.json": ["G5Xl", 133],
        "./nowgg-copyright/i18n/ja.json": ["A50X", 134],
        "./nowgg-copyright/i18n/ko.json": ["3Rft", 135],
        "./nowgg-copyright/i18n/pl.json": ["C87n", 136],
        "./nowgg-copyright/i18n/pt-br.json": ["B0bn", 137],
        "./nowgg-copyright/i18n/ru.json": ["lYLs", 138],
        "./nowgg-copyright/i18n/th.json": ["y71r", 139],
        "./nowgg-copyright/i18n/tr.json": ["5/Nu", 140],
        "./nowgg-copyright/i18n/vi.json": ["gQzb", 141],
        "./nowgg-copyright/i18n/zh.json": ["M9mj", 142],
        "./nowgg-copyright/placeholder/placeholder.json": ["BIqT", 143],
        "./nowgg-games/i18n/ar.json": ["okL/", 144],
        "./nowgg-games/i18n/cn.json": ["tBQj", 145],
        "./nowgg-games/i18n/de.json": ["+rgq", 146],
        "./nowgg-games/i18n/en.json": ["NRJZ", 147],
        "./nowgg-games/i18n/es.json": ["DBlo", 148],
        "./nowgg-games/i18n/fr.json": ["anoa", 149],
        "./nowgg-games/i18n/id.json": ["LlvJ", 150],
        "./nowgg-games/i18n/it.json": ["EyUy", 151],
        "./nowgg-games/i18n/ja.json": ["9LQK", 152],
        "./nowgg-games/i18n/ko.json": ["gwai", 153],
        "./nowgg-games/i18n/pl.json": ["Q0It", 154],
        "./nowgg-games/i18n/pt-br.json": ["1Npc", 155],
        "./nowgg-games/i18n/ru.json": ["0Esg", 156],
        "./nowgg-games/i18n/th.json": ["BPog", 157],
        "./nowgg-games/i18n/tr.json": ["AxU0", 158],
        "./nowgg-games/i18n/vi.json": ["WtG0", 159],
        "./nowgg-games/i18n/zh.json": ["tLA+", 160],
        "./nowgg-games/placeholder/placeholder.json": ["1vrq", 161],
        "./nowgg-home/i18n/ar.json": ["zxjN", 162],
        "./nowgg-home/i18n/cn.json": ["rn0U", 163],
        "./nowgg-home/i18n/de.json": ["S3y6", 164],
        "./nowgg-home/i18n/en.json": ["s3AB", 165],
        "./nowgg-home/i18n/es.json": ["nNm7", 166],
        "./nowgg-home/i18n/fr.json": ["HaCI", 167],
        "./nowgg-home/i18n/id.json": ["nCJ3", 168],
        "./nowgg-home/i18n/it.json": ["PhBm", 169],
        "./nowgg-home/i18n/ja.json": ["ycYp", 170],
        "./nowgg-home/i18n/ko.json": ["fXal", 171],
        "./nowgg-home/i18n/pl.json": ["87Iu", 172],
        "./nowgg-home/i18n/pt-br.json": ["jOkv", 173],
        "./nowgg-home/i18n/ru.json": ["BERi", 174],
        "./nowgg-home/i18n/th.json": ["Fcn2", 175],
        "./nowgg-home/i18n/tr.json": ["yUp7", 176],
        "./nowgg-home/i18n/vi.json": ["DHlF", 177],
        "./nowgg-home/i18n/zh.json": ["tKpj", 178],
        "./nowgg-home/placeholder/placeholder.json": ["/VWs", 179],
        "./nowgg-indiecraft/i18n/ar.json": ["aoO6", 180],
        "./nowgg-indiecraft/i18n/cn.json": ["vNI2", 181],
        "./nowgg-indiecraft/i18n/de.json": ["MD3W", 182],
        "./nowgg-indiecraft/i18n/en.json": ["Ot2a", 183],
        "./nowgg-indiecraft/i18n/es.json": ["Hhep", 184],
        "./nowgg-indiecraft/i18n/fr.json": ["1lDF", 185],
        "./nowgg-indiecraft/i18n/id.json": ["mCm9", 186],
        "./nowgg-indiecraft/i18n/it.json": ["b2N+", 187],
        "./nowgg-indiecraft/i18n/ja.json": ["pkiy", 188],
        "./nowgg-indiecraft/i18n/ko.json": ["x5yZ", 189],
        "./nowgg-indiecraft/i18n/pl.json": ["cbSV", 190],
        "./nowgg-indiecraft/i18n/pt-br.json": ["7Hit", 191],
        "./nowgg-indiecraft/i18n/ru.json": ["4W//", 192],
        "./nowgg-indiecraft/i18n/th.json": ["OfkA", 193],
        "./nowgg-indiecraft/i18n/tr.json": ["9R6j", 194],
        "./nowgg-indiecraft/i18n/vi.json": ["+q+7", 195],
        "./nowgg-indiecraft/i18n/zh.json": ["/hNO", 196],
        "./nowgg-indiecraft/placeholder/placeholder.json": ["zKdt", 197],
        "./nowgg-news/i18n/ar.json": ["yOpa", 198],
        "./nowgg-news/i18n/cn.json": ["Vv8V", 199],
        "./nowgg-news/i18n/de.json": ["sHPm", 200],
        "./nowgg-news/i18n/en.json": ["e48u", 201],
        "./nowgg-news/i18n/es.json": ["jgEa", 202],
        "./nowgg-news/i18n/fr.json": ["4lcQ", 203],
        "./nowgg-news/i18n/id.json": ["7lif", 204],
        "./nowgg-news/i18n/it.json": ["Kv5h", 205],
        "./nowgg-news/i18n/ja.json": ["XCCZ", 206],
        "./nowgg-news/i18n/ko.json": ["Hp0u", 207],
        "./nowgg-news/i18n/pl.json": ["4JxN", 208],
        "./nowgg-news/i18n/pt-br.json": ["7QrE", 209],
        "./nowgg-news/i18n/ru.json": ["+xj8", 210],
        "./nowgg-news/i18n/th.json": ["L6wZ", 211],
        "./nowgg-news/i18n/tr.json": ["nMRm", 212],
        "./nowgg-news/i18n/vi.json": ["zxhS", 213],
        "./nowgg-news/i18n/zh.json": ["Mkvr", 214],
        "./nowgg-news/placeholder/placeholder.json": ["5O23", 215],
        "./nowgg-nfg/i18n/ar.json": ["QDSN", 216],
        "./nowgg-nfg/i18n/cn.json": ["eLh/", 217],
        "./nowgg-nfg/i18n/de.json": ["3ji3", 218],
        "./nowgg-nfg/i18n/en.json": ["YbMP", 219],
        "./nowgg-nfg/i18n/es.json": ["plhz", 220],
        "./nowgg-nfg/i18n/fr.json": ["W39c", 221],
        "./nowgg-nfg/i18n/id.json": ["wUms", 222],
        "./nowgg-nfg/i18n/it.json": ["1V/C", 223],
        "./nowgg-nfg/i18n/ja.json": ["Kibw", 224],
        "./nowgg-nfg/i18n/ko.json": ["yPR9", 225],
        "./nowgg-nfg/i18n/pl.json": ["ytBo", 226],
        "./nowgg-nfg/i18n/pt-br.json": ["PKGI", 227],
        "./nowgg-nfg/i18n/ru.json": ["eIAx", 228],
        "./nowgg-nfg/i18n/th.json": ["GDBo", 229],
        "./nowgg-nfg/i18n/tr.json": ["Qa9S", 230],
        "./nowgg-nfg/i18n/vi.json": ["gMjM", 231],
        "./nowgg-nfg/i18n/zh.json": ["H1E0", 232],
        "./nowgg-nfg/placeholder/placeholder.json": ["JjZA", 233],
        "./nowgg-payments/i18n/ar.json": ["giLR", 234],
        "./nowgg-payments/i18n/cn.json": ["Bvep", 235],
        "./nowgg-payments/i18n/de.json": ["kz78", 236],
        "./nowgg-payments/i18n/en.json": ["pWGP", 237],
        "./nowgg-payments/i18n/es.json": ["7i6b", 238],
        "./nowgg-payments/i18n/fr.json": ["9x2o", 239],
        "./nowgg-payments/i18n/id.json": ["jDNl", 240],
        "./nowgg-payments/i18n/it.json": ["ggnq", 241],
        "./nowgg-payments/i18n/ja.json": ["I/l+", 242],
        "./nowgg-payments/i18n/ko.json": ["R2Fe", 243],
        "./nowgg-payments/i18n/pl.json": ["1phu", 244],
        "./nowgg-payments/i18n/pt-br.json": ["njWP", 245],
        "./nowgg-payments/i18n/ru.json": ["Zzk4", 246],
        "./nowgg-payments/i18n/th.json": ["Er3V", 247],
        "./nowgg-payments/i18n/tr.json": ["6owv", 248],
        "./nowgg-payments/i18n/vi.json": ["PAhY", 249],
        "./nowgg-payments/i18n/zh.json": ["0Qj0", 250],
        "./nowgg-payments/placeholder/placeholder.json": ["OAkT", 251],
        "./nowgg-platform/i18n/ar.json": ["h5aF", 252],
        "./nowgg-platform/i18n/cn.json": ["b1Kw", 253],
        "./nowgg-platform/i18n/de.json": ["bjgv", 254],
        "./nowgg-platform/i18n/en.json": ["9k+h", 255],
        "./nowgg-platform/i18n/es.json": ["sf0H", 256],
        "./nowgg-platform/i18n/fr.json": ["dgSW", 257],
        "./nowgg-platform/i18n/id.json": ["LG6F", 258],
        "./nowgg-platform/i18n/it.json": ["/n1h", 259],
        "./nowgg-platform/i18n/ja.json": ["vdq9", 260],
        "./nowgg-platform/i18n/ko.json": ["6yQp", 261],
        "./nowgg-platform/i18n/pl.json": ["gIn2", 262],
        "./nowgg-platform/i18n/pt-br.json": ["ea5P", 263],
        "./nowgg-platform/i18n/ru.json": ["0eHF", 264],
        "./nowgg-platform/i18n/th.json": ["BKNK", 265],
        "./nowgg-platform/i18n/tr.json": ["1RjD", 266],
        "./nowgg-platform/i18n/vi.json": ["SiBj", 267],
        "./nowgg-platform/i18n/zh.json": ["eSEW", 268],
        "./nowgg-platform/placeholder/placeholder.json": ["pwAH", 269],
        "./nowgg-solutions/i18n/ar.json": ["Qi1p", 270],
        "./nowgg-solutions/i18n/cn.json": ["BgHk", 271],
        "./nowgg-solutions/i18n/de.json": ["xSy3", 272],
        "./nowgg-solutions/i18n/en.json": ["Jn5P", 273],
        "./nowgg-solutions/i18n/es.json": ["WiAt", 274],
        "./nowgg-solutions/i18n/fr.json": ["i94q", 275],
        "./nowgg-solutions/i18n/id.json": ["6Yrv", 276],
        "./nowgg-solutions/i18n/it.json": ["cLwZ", 277],
        "./nowgg-solutions/i18n/ja.json": ["VuqP", 278],
        "./nowgg-solutions/i18n/ko.json": ["uKoz", 279],
        "./nowgg-solutions/i18n/pl.json": ["z28m", 280],
        "./nowgg-solutions/i18n/pt-br.json": ["KAWX", 281],
        "./nowgg-solutions/i18n/ru.json": ["7XjY", 282],
        "./nowgg-solutions/i18n/th.json": ["yIu7", 283],
        "./nowgg-solutions/i18n/tr.json": ["ZNWU", 284],
        "./nowgg-solutions/i18n/vi.json": ["vpT3", 285],
        "./nowgg-solutions/i18n/zh.json": ["Wqf9", 286],
        "./nowgg-solutions/placeholder/placeholder.json": ["LwFo", 287],
        "./nowgg-support/i18n/ar.json": ["gbaY", 288],
        "./nowgg-support/i18n/cn.json": ["T1GV", 289],
        "./nowgg-support/i18n/de.json": ["xaUA", 290],
        "./nowgg-support/i18n/en.json": ["QFto", 291],
        "./nowgg-support/i18n/es.json": ["hJis", 292],
        "./nowgg-support/i18n/fr.json": ["Ycmi", 293],
        "./nowgg-support/i18n/id.json": ["dIA/", 294],
        "./nowgg-support/i18n/it.json": ["Onwr", 295],
        "./nowgg-support/i18n/ja.json": ["hndV", 296],
        "./nowgg-support/i18n/ko.json": ["rtGG", 297],
        "./nowgg-support/i18n/pl.json": ["Y3HX", 298],
        "./nowgg-support/i18n/pt-br.json": ["flTT", 299],
        "./nowgg-support/i18n/ru.json": ["kIgg", 300],
        "./nowgg-support/i18n/th.json": ["wIKj", 301],
        "./nowgg-support/i18n/tr.json": ["ilUK", 302],
        "./nowgg-support/i18n/vi.json": ["fNGn", 303],
        "./nowgg-support/i18n/zh.json": ["rncp", 304],
        "./nowgg-support/placeholder/placeholder.json": ["b80d", 305],
        "./nowgg-terms-and-privacy/i18n/ar.json": ["I04U", 306],
        "./nowgg-terms-and-privacy/i18n/cn.json": ["VeH6", 307],
        "./nowgg-terms-and-privacy/i18n/de.json": ["i9dB", 308],
        "./nowgg-terms-and-privacy/i18n/en.json": ["EdsQ", 309],
        "./nowgg-terms-and-privacy/i18n/es.json": ["5A4T", 310],
        "./nowgg-terms-and-privacy/i18n/fr.json": ["sMwu", 311],
        "./nowgg-terms-and-privacy/i18n/id.json": ["WJgF", 312],
        "./nowgg-terms-and-privacy/i18n/it.json": ["5aaP", 313],
        "./nowgg-terms-and-privacy/i18n/ja.json": ["dJzz", 314],
        "./nowgg-terms-and-privacy/i18n/ko.json": ["sCKA", 315],
        "./nowgg-terms-and-privacy/i18n/pl.json": ["H+rF", 316],
        "./nowgg-terms-and-privacy/i18n/pt-br.json": ["/UF7", 317],
        "./nowgg-terms-and-privacy/i18n/ru.json": ["LTpI", 318],
        "./nowgg-terms-and-privacy/i18n/th.json": ["D++g", 319],
        "./nowgg-terms-and-privacy/i18n/tr.json": ["BJHb", 320],
        "./nowgg-terms-and-privacy/i18n/vi.json": ["1vCg", 321],
        "./nowgg-terms-and-privacy/i18n/zh.json": ["JYvx", 322],
        "./nowgg-terms-and-privacy/placeholder/placeholder.json": ["a7vb", 323],
        "./nowgg-unsubscribe/i18n/ar.json": ["+1MV", 324],
        "./nowgg-unsubscribe/i18n/cn.json": ["ebYr", 325],
        "./nowgg-unsubscribe/i18n/de.json": ["/6R1", 326],
        "./nowgg-unsubscribe/i18n/en.json": ["OQeL", 327],
        "./nowgg-unsubscribe/i18n/es.json": ["TFoy", 328],
        "./nowgg-unsubscribe/i18n/fr.json": ["mQTv", 329],
        "./nowgg-unsubscribe/i18n/id.json": ["Bd1x", 330],
        "./nowgg-unsubscribe/i18n/it.json": ["9gGe", 331],
        "./nowgg-unsubscribe/i18n/ja.json": ["WvbC", 332],
        "./nowgg-unsubscribe/i18n/ko.json": ["jGOJ", 333],
        "./nowgg-unsubscribe/i18n/pl.json": ["o+dv", 334],
        "./nowgg-unsubscribe/i18n/pt-br.json": ["oDea", 335],
        "./nowgg-unsubscribe/i18n/ru.json": ["pTXL", 336],
        "./nowgg-unsubscribe/i18n/th.json": ["FUe4", 337],
        "./nowgg-unsubscribe/i18n/tr.json": ["fn4d", 338],
        "./nowgg-unsubscribe/i18n/vi.json": ["MFEq", 339],
        "./nowgg-unsubscribe/i18n/zh.json": ["qX8n", 340],
        "./nowgg-unsubscribe/placeholder/placeholder.json": ["zwqE", 341],
      };
      function e(n) {
        if (!s.o(t, n))
          return Promise.resolve().then(function () {
            var o = new Error("Cannot find module '" + n + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          });
        var o = t[n],
          e = o[0];
        return s.e(o[1]).then(function () {
          return s.t(e, 3);
        });
      }
      (e.keys = function () {
        return Object.keys(t);
      }),
        (e.id = "Sdhw"),
        (n.exports = e);
    },
    r1gb: function (n, o, s) {
      var t = {
        "./ar.json": ["oUSD", 24],
        "./cn.json": ["voOi", 25],
        "./de.json": ["533T", 26],
        "./en.json": ["X+yj", 27],
        "./es.json": ["VL1g", 28],
        "./fr.json": ["jKkj", 29],
        "./id.json": ["NDTW", 30],
        "./it.json": ["vOWW", 31],
        "./ja.json": ["vAsl", 32],
        "./ko.json": ["CiZt", 33],
        "./pl.json": ["Iv1Z", 34],
        "./pt-br.json": ["54vR", 35],
        "./ru.json": ["C4Xr", 36],
        "./th.json": ["waVT", 37],
        "./tr.json": ["DImS", 38],
        "./vi.json": ["G+XT", 39],
        "./zh.json": ["XUkW", 40],
      };
      function e(n) {
        if (!s.o(t, n))
          return Promise.resolve().then(function () {
            var o = new Error("Cannot find module '" + n + "'");
            throw ((o.code = "MODULE_NOT_FOUND"), o);
          });
        var o = t[n],
          e = o[0];
        return s.e(o[1]).then(function () {
          return s.t(e, 3);
        });
      }
      (e.keys = function () {
        return Object.keys(t);
      }),
        (e.id = "r1gb"),
        (n.exports = e);
    },
  },
  [[0, 1, 0, 2, 3, 4, 5, 6]],
]);
