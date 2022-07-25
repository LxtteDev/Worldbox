(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [16],
  {
    P957: function (e, t, i) {
      "use strict";
      var a = i("nKUr"),
        n = i("kriW"),
        o = i("20a2"),
        r = i("vOnD"),
        s = i("S6dy"),
        l = i("hIrt"),
        d = i("G7qJ"),
        c = r.b.button.withConfig({
          displayName: "PlayButton__ButtonStyleWrapper",
          componentId: "sc-tpjoyr-0",
        })(
          [
            "border-radius:8px;border:0;outline:none;overflow:hidden;animation:fadeIn 1.5s;font-family:'Poppins';&.btn-play-now *{pointer-events:none;}@media screen and (max-width:768px){&.mob{max-width:100%;margin-top:32px;height:56px;}img,video{height:auto;max-width:40px;}.btn-text{font-weight:600;font-size:14px !important;line-height:150%;}}",
            "",
          ],
          function (e) {
            return Object(s.a)(e.lang);
          }
        );
      t.a = function (e) {
        var t = e.btnText,
          i = e.className,
          r = void 0 === i ? "" : i,
          s = e.showIcon,
          m = void 0 === s || s,
          g = e.redirectUrl,
          p = void 0 === g ? "" : g,
          u = e.children,
          h = e.origin,
          f = Object(o.useRouter)().locale;
        return p || "header" === h
          ? Object(a.jsxs)(c, {
              onClick: function () {
                if (!p) return null;
                Object(d.g)(p);
              },
              className: "play-btn flex perfectCenter ".concat(
                r,
                " experience-btn"
              ),
              lang: f,
              redirectUrl: p,
              children: [
                u,
                m && Object(a.jsx)(l.a, { width: "44", height: "44" }),
                Object(a.jsx)("span", {
                  className: "btn-text",
                  children: Object(a.jsx)(n.a, { id: t }),
                }),
              ],
            })
          : null;
      };
    },
    S6dy: function (e, t, i) {
      "use strict";
      t.a = function (e) {
        var t = { cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[e] || e,
          i = "";
        return (
          "ja" == t
            ? (i +=
                "{\n        @media (max-width: 767px) {\n            .btn-text {\n              font-weight: 600;\n              font-size: 11px !important;\n              line-height: 150%;\n              margin-left: 8px;\n              }\n            }\n        }")
            : "ko" == t || "de" === t || "id" === t
            ? (i +=
                "\n        @media (max-width: 767px) {\n            .btn-text {\n                font-weight: 600;\n                font-size: 12px !important;\n                line-height: 150%;\n                margin-left: 8px;\n              }\n            }\n        ")
            : ("vi" !== t && "es" !== t && "pt-br" !== t && "fr" !== t) ||
              (i +=
                "\n          .btn-text {\n              font-weight: 600;\n              font-size: 15px !important;\n              line-height: 150%;\n            }\n            @media (max-width: 767px) {\n              .btn-text {\n                  text-align: left;\n                  line-height: 120%\n                }\n              }\n      "),
          i
        );
      };
    },
    ULIw: function (e) {
      e.exports = JSON.parse(
        '[{"id":"en","value":"English"},{"id":"tw","value":"\u4e2d\u6587 \u2013 \u7e41\u9ad4"},{"id":"vi","value":"Ti\u1ebfng Vi\u1ec7t"},{"id":"tr","value":"T\xfcrk\xe7e"},{"id":"th","value":"\u0e44\u0e17\u0e22"},{"id":"ru","value":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{"id":"pt-br","value":"Portugu\xeas"},{"id":"pl","value":"polski"},{"id":"nl","value":"Nederlands"},{"id":"ko","value":"\ud55c\uad6d\uc5b4"},{"id":"ja","value":"\u65e5\u672c\u8a9e"},{"id":"it","value":"Italiano"},{"id":"fr","value":"Fran\xe7ais"},{"id":"es","value":"Espa\xf1ol"},{"id":"de","value":"Deutsch"},{"id":"cn","value":"\u4e2d\u6587 \u2013 \u7b80\u4f53"},{"id":"id","value":"Indonesia"}]'
      );
    },
    deKR: function (e, t, i) {
      "use strict";
      var a = i("nKUr"),
        n = (i("q1tI"), i("kriW"));
      t.a = function (e) {
        var t = e.text,
          i = e.values;
        return t
          ? Object(a.jsx)(n.a, { id: t, values: i, defaultMessage: t })
          : null;
      };
    },
    hIrt: function (e, t, i) {
      "use strict";
      var a = i("nKUr"),
        n = i("lPHp"),
        o = i.n(n),
        r = i("q1tI"),
        s = i("qM95");
      t.a = function (e) {
        var t = e.width,
          i = e.height,
          n = e.className,
          l = Object(r.createRef)();
        return (
          Object(r.useEffect)(function () {
            o.a.loadAnimation({
              container: l.current,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: s,
            });
          }, []),
          Object(a.jsx)("div", {
            className: n,
            style: { width: "".concat(t, "px"), height: "".concat(i, "px") },
            ref: l,
          })
        );
      };
    },
    mmzJ: function (e, t, i) {
      "use strict";
      var a = i("nKUr"),
        n = i("q1tI"),
        o = i("vOnD").b.div.withConfig({
          displayName: "style__AccordionContainer",
          componentId: "sc-ge3ocg-0",
        })(
          [
            ".header{position:relative;height:auto;display:flex;align-items:center;cursor:pointer;font-size:16px;line-height:",
            ";color:",
            ";margin-bottom:",
            ";.text{width:95%;@media screen and (max-width:767px){width:90%;}@media screen and (max-width:366px){width:87%;}}&::after{margin-left:5px;content:'';border:solid;border-width:0 1px 1px 0;display:inline-block;padding:3px;transform:",
            ";bottom:",
            ";position:absolute;transition:0.2s ease-in-out;right:",
            ";}}.body{background-color:",
            ";border-radius:6px;overflow:hidden;max-height:",
            ";opacity:",
            ";transition:",
            ";font-size:14px;color:#473e5f;ol,ul{padding-left:16px;}.text{padding:16px;display:inline-block;}}",
          ],
          function (e) {
            return e.headerItems ? "36px" : "inherit";
          },
          function (e) {
            return e.headerItems
              ? "".concat(e.open ? "#ff339e" : "#0B0223")
              : "#473e5f";
          },
          function (e) {
            return e.open ? "".concat(e.headerItems ? "16px" : "0") : "0";
          },
          function (e) {
            return e.open
              ? "rotate(-135deg) translateY(50%)"
              : "rotate(45deg) translateY(-50%)";
          },
          function (e) {
            return e.headerItems ? "15px" : "auto";
          },
          function (e) {
            return e.headerItems ? "32px" : "15px";
          },
          function (e) {
            return e.open ? "#f5f5f5" : "unset";
          },
          function (e) {
            return e.open
              ? e.bodyHeight
              : e.defaultBodyheight
              ? e.defaultBodyheight
              : "1px";
          },
          function (e) {
            return e.open ? "1" : "".concat(e.headerItems ? "0" : "1");
          },
          function (e) {
            return e.headerItems
              ? "opacity 0.4s ease-in"
              : "max-height 0.4s ease";
          }
        );
      t.a = function (e) {
        var t = e.isOpen,
          i = void 0 !== t && t,
          r = e.setExpanded,
          s = e.id,
          l = e.header,
          d = e.body,
          c = e.children,
          m = e.defaultBodyheight,
          g = e.headerItems,
          p = Object(n.useState)(i),
          u = p[0],
          h = p[1],
          f = Object(n.useRef)(null),
          x = Object(n.useState)(0),
          b = x[0],
          v = x[1];
        return (
          Object(n.useEffect)(
            function () {
              h(i), i && v("".concat(f.current.scrollHeight, "px"));
            },
            [i]
          ),
          Object(a.jsxs)(o, {
            className: "accordion-container ".concat(u ? "open" : ""),
            open: u,
            bodyHeight: b,
            defaultBodyheight: m,
            headerItems: g,
            children: [
              Object(a.jsx)("div", {
                className: "header",
                onClick: function () {
                  h(!u), v("".concat(f.current.scrollHeight, "px")), r && r(s);
                },
                children: Object(a.jsx)("span", {
                  className: "text",
                  children: l,
                }),
              }),
              Object(a.jsx)("div", {
                ref: f,
                className: "body",
                children:
                  c ||
                  Object(a.jsx)("span", {
                    className: "text",
                    dangerouslySetInnerHTML: { __html: d },
                  }),
              }),
            ],
          })
        );
      };
    },
    pipb: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "getBrowserLocale", function () {
          return g;
        });
      var a = i("nKUr"),
        n = i("q1tI"),
        o = i("ULIw"),
        r = i("AATo"),
        s = i("G7qJ"),
        l = i("vOnD").b.div.withConfig({
          displayName: "style__LanguageModalStyleWarpper",
          componentId: "sc-tzgosc-0",
        })(
          [
            "min-width:183px;position:absolute;bottom:55px;right:16px;filter:drop-shadow(0px 8px 24px rgba(0,0,0,0.08));.locale-name{text-decoration:underline;font-size:12px;line-height:150%;cursor:pointer;text-align:right;.label{background-color:unset;display:inline-block;min-width:80px;border:1px solid rgba(0,0,0,0.1);border-radius:4px;text-align:center;height:26px;padding:4px 12px 4px 8px;font-weight:normal;font-size:12px;line-height:150%;position:relative;&:hover{background-color:white;}&::before{border:5px solid white;content:'';position:absolute;left:-21px;top:-6px;width:20px;height:10px;border-bottom:transparent;border-top-right-radius:22px;border-left:none;display:",
            ";}&::after{margin-left:5px;content:'';border:solid;border-width:0 1px 1px 0;display:inline-block;padding:3px;transform:",
            ";bottom:",
            ";position:relative;transition:0.2s ease-in-out;}}.btn-focus{border:1px solid white;background-color:white;border-radius:0 0 4px 4px;}}.language-header{.language-heading{font-weight:bold;font-size:24px;line-height:140%;color:#ff42a5;}}.modal-body{max-width:540px !important;width:100% !important;}.show-dropdown{display:block !important;}.language-body{margin-top:20px;display:none;.dropdown-list{position:relative;z-index:1;ul{li{font-size:14px;line-height:150%;background:#ffffff;height:37px;display:flex;align-items:center;justify-content:space-between;a{padding:8px;}cursor:pointer;box-shadow:inset 0px 1px 0px #f5f5f5;position:relative;.link{width:100%;height:100%;color:black;}&:first-child{border-top-right-radius:4px;border-top-left-radius:4px;}&:last-child{border-bottom-left-radius:4px;}&:hover{background:#f5f5f5;box-shadow:inset 0px 1px 0px #f5f5f5;}.tick{visibility:hidden;position:absolute;right:8px;}&.selected{.tick{visibility:visible;.logo{vertical-align:middle;}}}}}}}.language-footer{margin-top:20px;.done-btn{width:100%;border:0;background:#ff42a5;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:4px;font-weight:600;font-size:18px;line-height:150%;color:#ffffff;padding:14.5px 0;}}@media screen and (max-width:768px){bottom:33px;.modal-body{max-height:calc(90vh - 20px);}}.show{display:block;}",
          ],
          function (e) {
            return e.ddOpen ? "block" : "none";
          },
          function (e) {
            return e.ddOpen
              ? "rotate(45deg) translateY(-50%)"
              : "rotate(-135deg) translateY(50%)";
          },
          function (e) {
            return e.ddOpen ? 0 : "-3px";
          }
        ),
        d = i("20a2"),
        c = function (e) {
          var t = e.preferredLocaleId,
            i = e.locales,
            r = e.onSelectLocale,
            c = e.defaultLocale,
            m = e.unsupportedLang,
            p = Object(d.useRouter)(),
            u = p.asPath,
            h = p.locale,
            f = p.pathname,
            x = Object(n.useState)(u),
            b = x[0],
            v = x[1],
            w = Object(n.useState)(c),
            y = w[0],
            j = w[1],
            z = Object(n.useState)(!1),
            O = z[0],
            N = z[1];
          Object(n.useEffect)(function () {
            (window.onclick = function (e) {
              if (!e.target.matches(".label")) {
                var t = document.querySelector(".language-body");
                if (t.classList.contains("show-dropdown"))
                  document
                    .getElementById("locale-select")
                    .classList.toggle("btn-focus"),
                    t.classList.remove("show-dropdown"),
                    N(!1);
              }
            }),
              "/" === b && v("");
          }, []);
          return (
            Object(n.useEffect)(
              function () {
                if (m) j(g(i, h));
                else {
                  var e =
                    i.filter(function (e) {
                      return e.id === h;
                    }).length > 0
                      ? o.filter(function (e) {
                          return e.id === h;
                        })[0]
                      : o[0];
                  j(e);
                }
              },
              [t]
            ),
            Object(a.jsxs)(l, {
              className: "language-modal",
              ddOpen: O,
              children: [
                Object(a.jsx)("div", {
                  className: "language-body",
                  children: Object(a.jsx)("div", {
                    className: "dropdown-list",
                    children:
                      t &&
                      Object(a.jsx)("ul", {
                        className: "dropdown-list-ul",
                        children: i.map(function (e) {
                          var t = e.value,
                            i = e.id;
                          return f.includes("/payments") && "ja" === i
                            ? null
                            : Object(a.jsxs)(
                                "li",
                                {
                                  className: "lang-option ".concat(
                                    y.id === i ? "selected" : ""
                                  ),
                                  children: [
                                    Object(a.jsx)("a", {
                                      className: "link",
                                      onClick: function () {
                                        return (function (e) {
                                          var t = o.filter(function (t) {
                                            return t.id === e;
                                          })[0];
                                          j(t), r(t);
                                        })(i);
                                      },
                                      href:
                                        "en" !== i || b
                                          ? Object(s.e)(i) + b
                                          : "/",
                                      children: t,
                                    }),
                                    Object(a.jsx)("span", {
                                      className: "tick",
                                      children: Object(a.jsx)("svg", {
                                        className: "logo",
                                        width: "16",
                                        height: "14",
                                        viewBox: "0 0 16 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: Object(a.jsx)("path", {
                                          fillRule: "evenodd",
                                          clipRule: "evenodd",
                                          d: "M4.82163 13.2106C4.82308 13.2119 4.82453 13.2132 4.82599 13.2145C5.29625 13.6328 6.01251 13.586 6.42579 13.1101L6.42579 13.11L15.7214 2.40468C16.1347 1.92873 16.0885 1.2038 15.6183 0.78552C15.148 0.367237 14.4317 0.41399 14.0185 0.889945L5.47113 10.7335L1.88544 7.54415C1.41518 7.12587 0.698925 7.17262 0.285645 7.64857C-0.127635 8.12453 -0.0814414 8.84945 0.388821 9.26774L4.82163 13.2106Z",
                                          fill: "#FF42A5",
                                        }),
                                      }),
                                    }),
                                  ],
                                },
                                i
                              );
                        }),
                      }),
                  }),
                }),
                Object(a.jsx)("p", {
                  className: "locale-name",
                  children: Object(a.jsx)("button", {
                    id: "locale-select",
                    className: "label",
                    onClick: function () {
                      var e = document.querySelector(".language-body"),
                        t = document.getElementById("locale-select");
                      e.classList.toggle("show-dropdown"),
                        t.classList.toggle("btn-focus"),
                        N(function (e) {
                          return !e;
                        });
                    },
                    children: y.value,
                  }),
                }),
              ],
            })
          );
        },
        m = i("A8lN"),
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = { zh: "cn", "zh-HK": "cn", "zh-CN": "cn", "zh-TW": "tw" },
            a = i[window.navigator.language] || window.navigator.language;
          return r.g.includes(a) &&
            e.filter(function (e) {
              return e.id === a;
            }).length > 0
            ? e.filter(function (e) {
                return e.id === a;
              })[0]
            : e.filter(function (e) {
                return "en" === e.id;
              })[0] ||
                e.filter(function (e) {
                  return e.id === t;
                })[0];
        };
      t.default = function (e) {
        e.origin;
        var t = e.validLocales,
          i = Object(n.useState)(!1),
          l = i[0],
          g = i[1],
          p = Object(d.useRouter)(),
          u = p.asPath,
          h = p.locale,
          f = Object(n.useState)(h),
          x = f[0],
          b = f[1],
          v = Object(m.b)(),
          w = v.language,
          y = v.setPreferredLanguage,
          j = o.filter(function (e) {
            return r.g.includes(e.id);
          });
        t &&
          (j = o.filter(function (e) {
            return t.includes(r.b[e.id] || e.id);
          })),
          Object(n.useEffect)(
            function () {
              var e = Object(s.c)("preferred_lang") || w;
              e
                ? (b(e),
                  !j.filter(function (t) {
                    return t.id === e;
                  }).length > 0
                    ? g(!0)
                    : (g(!1), b(e)))
                : z();
            },
            [w]
          );
        var z = function () {
            var e = O();
            b(e);
          },
          O = function () {
            var e = "en",
              i = window.navigator.language;
            try {
              r.g.some(function (t) {
                if (i.toLowerCase().includes(t)) return (e = t), !0;
              });
            } catch (a) {}
            return (t || r.g).includes(e) ? e : h;
          },
          N = function (e) {
            var t = u;
            if (!t.includes("/".concat(e, "/"))) {
              r.g.some(function (e) {
                return t.includes("/".concat(e, "/"));
              })
                ? "en" === e
                  ? t.replace(/\/.*\//, "/")
                  : t.replace(/\/.*\//, "/".concat(e, "/"))
                : "en" === e
                ? t
                : "/".concat(e).concat(t);
            }
          };
        return j.length < 2
          ? null
          : Object(a.jsx)(c, {
              preferredLocaleId: x,
              locales: j,
              onSelectLocale: function (e) {
                var t = e.id,
                  i =
                    (e.value,
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : "");
                t &&
                  (Object(s.i)(
                    "preferred_lang",
                    r.g.includes(t) ? t : "en",
                    2e4
                  ),
                  b(t),
                  y(t),
                  "close" !== i && h !== t && N(t));
              },
              defaultLocale:
                j.filter(function (e) {
                  return e.id === x;
                })[0] || o[0],
              unsupportedLang: l,
            });
      };
    },
    "s+lh": function (e, t, i) {
      !(function (t, i) {
        var a = (function (e, t, i) {
          "use strict";
          var a, n;
          if (
            ((function () {
              var t,
                i = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  preloadClass: "lazypreload",
                  errorClass: "lazyerror",
                  autosizesClass: "lazyautosizes",
                  fastLoadedClass: "ls-is-cached",
                  iframeLoadMode: 0,
                  srcAttr: "data-src",
                  srcsetAttr: "data-srcset",
                  sizesAttr: "data-sizes",
                  minSize: 40,
                  customMedia: {},
                  init: !0,
                  expFactor: 1.5,
                  hFac: 0.8,
                  loadMode: 2,
                  loadHidden: !0,
                  ricTimeout: 0,
                  throttleDelay: 125,
                };
              for (t in ((n = e.lazySizesConfig || e.lazysizesConfig || {}), i))
                t in n || (n[t] = i[t]);
            })(),
            !t || !t.getElementsByClassName)
          )
            return { init: function () {}, cfg: n, noSupport: !0 };
          var o = t.documentElement,
            r = e.HTMLPictureElement,
            s = "addEventListener",
            l = "getAttribute",
            d = e[s].bind(e),
            c = e.setTimeout,
            m = e.requestAnimationFrame || c,
            g = e.requestIdleCallback,
            p = /^picture$/i,
            u = ["load", "error", "lazyincluded", "_lazyloaded"],
            h = {},
            f = Array.prototype.forEach,
            x = function (e, t) {
              return (
                h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                h[t].test(e[l]("class") || "") && h[t]
              );
            },
            b = function (e, t) {
              x(e, t) ||
                e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
            },
            v = function (e, t) {
              var i;
              (i = x(e, t)) &&
                e.setAttribute("class", (e[l]("class") || "").replace(i, " "));
            },
            w = function (e, t, i) {
              var a = i ? s : "removeEventListener";
              i && w(e, t),
                u.forEach(function (i) {
                  e[a](i, t);
                });
            },
            y = function (e, i, n, o, r) {
              var s = t.createEvent("Event");
              return (
                n || (n = {}),
                (n.instance = a),
                s.initEvent(i, !o, !r),
                (s.detail = n),
                e.dispatchEvent(s),
                s
              );
            },
            j = function (t, i) {
              var a;
              !r && (a = e.picturefill || n.pf)
                ? (i &&
                    i.src &&
                    !t[l]("srcset") &&
                    t.setAttribute("srcset", i.src),
                  a({ reevaluate: !0, elements: [t] }))
                : i && i.src && (t.src = i.src);
            },
            z = function (e, t) {
              return (getComputedStyle(e, null) || {})[t];
            },
            O = function (e, t, i) {
              for (
                i = i || e.offsetWidth;
                i < n.minSize && t && !e._lazysizesWidth;

              )
                (i = t.offsetWidth), (t = t.parentNode);
              return i;
            },
            N = (function () {
              var e,
                i,
                a = [],
                n = [],
                o = a,
                r = function () {
                  var t = o;
                  for (o = a.length ? n : a, e = !0, i = !1; t.length; )
                    t.shift()();
                  e = !1;
                },
                s = function (a, n) {
                  e && !n
                    ? a.apply(this, arguments)
                    : (o.push(a), i || ((i = !0), (t.hidden ? c : m)(r)));
                };
              return (s._lsFlush = r), s;
            })(),
            C = function (e, t) {
              return t
                ? function () {
                    N(e);
                  }
                : function () {
                    var t = this,
                      i = arguments;
                    N(function () {
                      e.apply(t, i);
                    });
                  };
            },
            k = function (e) {
              var t,
                a = 0,
                o = n.throttleDelay,
                r = n.ricTimeout,
                s = function () {
                  (t = !1), (a = i.now()), e();
                },
                l =
                  g && r > 49
                    ? function () {
                        g(s, { timeout: r }),
                          r !== n.ricTimeout && (r = n.ricTimeout);
                      }
                    : C(function () {
                        c(s);
                      }, !0);
              return function (e) {
                var n;
                (e = !0 === e) && (r = 33),
                  t ||
                    ((t = !0),
                    (n = o - (i.now() - a)) < 0 && (n = 0),
                    e || n < 9 ? l() : c(l, n));
              };
            },
            F = function (e) {
              var t,
                a,
                n = 99,
                o = function () {
                  (t = null), e();
                },
                r = function () {
                  var e = i.now() - a;
                  e < n ? c(r, n - e) : (g || o)(o);
                };
              return function () {
                (a = i.now()), t || (t = c(r, n));
              };
            },
            A = (function () {
              var r,
                g,
                u,
                h,
                O,
                A,
                L,
                _,
                S,
                I,
                M,
                B,
                R = /^img$/i,
                W = /^iframe$/i,
                P =
                  "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                T = 0,
                D = 0,
                H = 0,
                q = -1,
                U = function (e) {
                  H--, (!e || H < 0 || !e.target) && (H = 0);
                },
                G = function (e) {
                  return (
                    null == B && (B = "hidden" == z(t.body, "visibility")),
                    B ||
                      !(
                        "hidden" == z(e.parentNode, "visibility") &&
                        "hidden" == z(e, "visibility")
                      )
                  );
                },
                K = function (e, i) {
                  var a,
                    n = e,
                    r = G(e);
                  for (
                    _ -= i, M += i, S -= i, I += i;
                    r && (n = n.offsetParent) && n != t.body && n != o;

                  )
                    (r = (z(n, "opacity") || 1) > 0) &&
                      "visible" != z(n, "overflow") &&
                      ((a = n.getBoundingClientRect()),
                      (r =
                        I > a.left &&
                        S < a.right &&
                        M > a.top - 1 &&
                        _ < a.bottom + 1));
                  return r;
                },
                J = function () {
                  var e,
                    i,
                    s,
                    d,
                    c,
                    m,
                    p,
                    u,
                    f,
                    x,
                    b,
                    v,
                    w = a.elements;
                  if ((h = n.loadMode) && H < 8 && (e = w.length)) {
                    for (i = 0, q++; i < e; i++)
                      if (w[i] && !w[i]._lazyRace)
                        if (
                          !P ||
                          (a.prematureUnveil && a.prematureUnveil(w[i]))
                        )
                          te(w[i]);
                        else if (
                          (((u = w[i][l]("data-expand")) && (m = 1 * u)) ||
                            (m = D),
                          x ||
                            ((x =
                              !n.expand || n.expand < 1
                                ? o.clientHeight > 500 && o.clientWidth > 500
                                  ? 500
                                  : 370
                                : n.expand),
                            (a._defEx = x),
                            (b = x * n.expFactor),
                            (v = n.hFac),
                            (B = null),
                            D < b && H < 1 && q > 2 && h > 2 && !t.hidden
                              ? ((D = b), (q = 0))
                              : (D = h > 1 && q > 1 && H < 6 ? x : T)),
                          f !== m &&
                            ((A = innerWidth + m * v),
                            (L = innerHeight + m),
                            (p = -1 * m),
                            (f = m)),
                          (s = w[i].getBoundingClientRect()),
                          (M = s.bottom) >= p &&
                            (_ = s.top) <= L &&
                            (I = s.right) >= p * v &&
                            (S = s.left) <= A &&
                            (M || I || S || _) &&
                            (n.loadHidden || G(w[i])) &&
                            ((g && H < 3 && !u && (h < 3 || q < 4)) ||
                              K(w[i], m)))
                        ) {
                          if ((te(w[i]), (c = !0), H > 9)) break;
                        } else
                          !c &&
                            g &&
                            !d &&
                            H < 4 &&
                            q < 4 &&
                            h > 2 &&
                            (r[0] || n.preloadAfterLoad) &&
                            (r[0] ||
                              (!u &&
                                (M ||
                                  I ||
                                  S ||
                                  _ ||
                                  "auto" != w[i][l](n.sizesAttr)))) &&
                            (d = r[0] || w[i]);
                    d && !c && te(d);
                  }
                },
                $ = k(J),
                Y = function (e) {
                  var t = e.target;
                  t._lazyCache
                    ? delete t._lazyCache
                    : (U(e),
                      b(t, n.loadedClass),
                      v(t, n.loadingClass),
                      w(t, V),
                      y(t, "lazyloaded"));
                },
                Q = C(Y),
                V = function (e) {
                  Q({ target: e.target });
                },
                Z = function (e, t) {
                  var i = e.getAttribute("data-load-mode") || n.iframeLoadMode;
                  0 == i
                    ? e.contentWindow.location.replace(t)
                    : 1 == i && (e.src = t);
                },
                X = function (e) {
                  var t,
                    i = e[l](n.srcsetAttr);
                  (t = n.customMedia[e[l]("data-media") || e[l]("media")]) &&
                    e.setAttribute("media", t),
                    i && e.setAttribute("srcset", i);
                },
                ee = C(function (e, t, i, a, o) {
                  var r, s, d, m, g, h;
                  (g = y(e, "lazybeforeunveil", t)).defaultPrevented ||
                    (a &&
                      (i ? b(e, n.autosizesClass) : e.setAttribute("sizes", a)),
                    (s = e[l](n.srcsetAttr)),
                    (r = e[l](n.srcAttr)),
                    o && (m = (d = e.parentNode) && p.test(d.nodeName || "")),
                    (h = t.firesLoad || ("src" in e && (s || r || m))),
                    (g = { target: e }),
                    b(e, n.loadingClass),
                    h && (clearTimeout(u), (u = c(U, 2500)), w(e, V, !0)),
                    m && f.call(d.getElementsByTagName("source"), X),
                    s
                      ? e.setAttribute("srcset", s)
                      : r && !m && (W.test(e.nodeName) ? Z(e, r) : (e.src = r)),
                    o && (s || m) && j(e, { src: r })),
                    e._lazyRace && delete e._lazyRace,
                    v(e, n.lazyClass),
                    N(function () {
                      var t = e.complete && e.naturalWidth > 1;
                      (h && !t) ||
                        (t && b(e, n.fastLoadedClass),
                        Y(g),
                        (e._lazyCache = !0),
                        c(function () {
                          "_lazyCache" in e && delete e._lazyCache;
                        }, 9)),
                        "lazy" == e.loading && H--;
                    }, !0);
                }),
                te = function (e) {
                  if (!e._lazyRace) {
                    var t,
                      i = R.test(e.nodeName),
                      a = i && (e[l](n.sizesAttr) || e[l]("sizes")),
                      o = "auto" == a;
                    ((!o && g) ||
                      !i ||
                      (!e[l]("src") && !e.srcset) ||
                      e.complete ||
                      x(e, n.errorClass) ||
                      !x(e, n.lazyClass)) &&
                      ((t = y(e, "lazyunveilread").detail),
                      o && E.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      H++,
                      ee(e, t, o, a, i));
                  }
                },
                ie = F(function () {
                  (n.loadMode = 3), $();
                }),
                ae = function () {
                  3 == n.loadMode && (n.loadMode = 2), ie();
                },
                ne = function () {
                  g ||
                    (i.now() - O < 999
                      ? c(ne, 999)
                      : ((g = !0), (n.loadMode = 3), $(), d("scroll", ae, !0)));
                };
              return {
                _: function () {
                  (O = i.now()),
                    (a.elements = t.getElementsByClassName(n.lazyClass)),
                    (r = t.getElementsByClassName(
                      n.lazyClass + " " + n.preloadClass
                    )),
                    d("scroll", $, !0),
                    d("resize", $, !0),
                    d("pageshow", function (e) {
                      if (e.persisted) {
                        var i = t.querySelectorAll("." + n.loadingClass);
                        i.length &&
                          i.forEach &&
                          m(function () {
                            i.forEach(function (e) {
                              e.complete && te(e);
                            });
                          });
                      }
                    }),
                    e.MutationObserver
                      ? new MutationObserver($).observe(o, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (o[s]("DOMNodeInserted", $, !0),
                        o[s]("DOMAttrModified", $, !0),
                        setInterval($, 999)),
                    d("hashchange", $, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      t[s](e, $, !0);
                    }),
                    /d$|^c/.test(t.readyState)
                      ? ne()
                      : (d("load", ne),
                        t[s]("DOMContentLoaded", $),
                        c(ne, 2e4)),
                    a.elements.length ? (J(), N._lsFlush()) : $();
                },
                checkElems: $,
                unveil: te,
                _aLSL: ae,
              };
            })(),
            E = (function () {
              var e,
                i = C(function (e, t, i, a) {
                  var n, o, r;
                  if (
                    ((e._lazysizesWidth = a),
                    (a += "px"),
                    e.setAttribute("sizes", a),
                    p.test(t.nodeName || ""))
                  )
                    for (
                      o = 0, r = (n = t.getElementsByTagName("source")).length;
                      o < r;
                      o++
                    )
                      n[o].setAttribute("sizes", a);
                  i.detail.dataAttr || j(e, i.detail);
                }),
                a = function (e, t, a) {
                  var n,
                    o = e.parentNode;
                  o &&
                    ((a = O(e, o, a)),
                    (n = y(e, "lazybeforesizes", { width: a, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((a = n.detail.width) &&
                        a !== e._lazysizesWidth &&
                        i(e, o, n, a)));
                },
                o = F(function () {
                  var t,
                    i = e.length;
                  if (i) for (t = 0; t < i; t++) a(e[t]);
                });
              return {
                _: function () {
                  (e = t.getElementsByClassName(n.autosizesClass)),
                    d("resize", o);
                },
                checkElems: o,
                updateElem: a,
              };
            })(),
            L = function () {
              !L.i && t.getElementsByClassName && ((L.i = !0), E._(), A._());
            };
          return (
            c(function () {
              n.init && L();
            }),
            (a = {
              cfg: n,
              autoSizer: E,
              loader: A,
              init: L,
              uP: j,
              aC: b,
              rC: v,
              hC: x,
              fire: y,
              gW: O,
              rAF: N,
            })
          );
        })(t, t.document, Date);
        (t.lazySizes = a), e.exports && (e.exports = a);
      })("undefined" != typeof window ? window : {});
    },
    scKu: function (e, t, i) {
      "use strict";
      i.r(t);
      var a = i("nKUr"),
        n = i("kriW"),
        o = i("Oifm"),
        r = i("hL++"),
        s = i("20a2"),
        l = i("vOnD"),
        d = i("q1tI"),
        c = i("7Qko"),
        m = i("G7qJ"),
        g = i("k4wN"),
        p = l.b.section.withConfig({
          displayName: "games__GamesStyleWrapper",
          componentId: "sc-x9rtth-0",
        })(
          ["", ""],
          ".games .header{display:flex;flex-direction:row;justify-content:space-between}.games .header .genre-games-heading{font-size:30px;line-height:45px;font-weight:400;color:#0b0223;margin-top:48px;margin-bottom:16px;display:inline-block}.games .header .genre-games-heading::after{margin-left:13px;content:'';border:solid #1f1637;border-width:0 2px 2px 0;display:inline-block;padding:5px;transform:rotate(-45deg) translateY(-50%);bottom:0;position:relative;-webkit-transition:0.2s ease-in-out;transition:0.2s ease-in-out}.games .header .genre-games-heading:hover{color:#ff42a5;cursor:pointer}.games .header .genre-games-heading:hover::after{border:solid #ff42a5;border-width:0 2px 2px 0;transform:rotate(-45deg) translate(5px, calc(-50% + 4px))}.games .header .upcoming-games-heading{font-size:30px;line-height:45px;font-weight:400;color:#0b0223;margin-top:48px;margin-bottom:16px;display:inline-block}.games .header .genre-games-description{font-weight:normal;font-size:16px;line-height:150%;color:#473e5f}@media (max-width: 767px){.games .header .genre-games-description{font-size:14px}}.games .header .see-more{font-weight:600;font-size:14px;line-height:150%;color:#ff42a5;align-self:center;min-width:90px;display:flex;right:12px;top:6px;position:relative;text-transform:uppercase;justify-content:center}.games .header .see-more:hover{text-decoration:underline;cursor:pointer}@media (max-width: 767px){.games .header .see-more{display:none}}.games .games-list{justify-content:start;flex:1 1 39px}.games .games-list .games-item-hover:hover .image-wrapper .lazyload-container{box-shadow:0px 0px 0px 2px #ffffff, 0px 0px 0px 3.5px #ff42a5;border-radius:8px}.games .games-list .image-wrapper{position:relative;display:flex;height:268px}@media screen and (max-width: 767px){.games .games-list .image-wrapper{height:228px}}.games .games-list .image-wrapper .play-btn{width:100%;background:var(--primaryColor);color:var(--white);border-radius:8px;margin-top:24px;border:0;outline:none;overflow:hidden;position:absolute;bottom:0;left:0;z-index:1;max-width:100%;border-top-left-radius:0;border-top-right-radius:0;height:32px}.games .games-list .image-wrapper .play-btn .btn-text{font-weight:600;font-size:14px;line-height:150%}@media (max-width: 767px){.games .games-list .image-wrapper .play-btn{height:28px}.games .games-list .image-wrapper .play-btn .btn-text{font-size:12px}}.games .games-list .upcoming-image-wrapper{max-width:360px;min-width:170px;height:203px}.games .games-list .upcoming-image-wrapper .launch-time{position:absolute;width:max-content;max-width:50%;overflow:hidden;text-overflow:ellipsis;height:26px;right:0px;top:16px;background:#FF42A5;border-radius:8px 0px 0px 8px;font-weight:600;font-size:12px;line-height:150%;-webkit-box-orient:vertical;display:-webkit-box;align-items:center;color:#FFFFFF;padding:4px 8px;z-index:2;-webkit-line-clamp:1}.games .upcoming-games-list{justify-content:space-between;flex-wrap:nowrap !important}@media screen and (max-width: 590px){.games .upcoming-games-list{flex-direction:column;align-items:flex-start}}@media screen and (max-width: 392px){.games .upcoming-games-list{align-items:center}}.games .see-more-btn{padding:14.5px 40px;background-color:var(--white);height:48px;margin-top:30px;border:1px solid var(--primaryColor);border-radius:8px;font-weight:600;font-size:14px;line-height:150%;color:var(--primaryColor);display:none}.games .see-more-btn:hover{background-color:var(--primaryColor);color:var(--white)}@media (max-width: 767px){.games .see-more-btn{display:flex}}.games .see-upcoming-btn{height:48px;margin-top:30px;font-weight:600;font-size:14px;line-height:150%;background:#FF42A5;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;color:#FFFFFF;display:none}.games .see-upcoming-btn:hover{background-color:#FFFFFF;color:#FF42A5;border:1px solid #FF42A5}@media (max-width: 767px){.games .see-upcoming-btn{display:flex}}.games .games-item{margin-top:24px;margin-right:36px;width:200px;max-width:200px}.games .games-item .lazyload-container{width:100%}.games .games-item .lazyload-container .LazyLoad{width:100%;height:100%}.games .games-item .lazyload-container .LazyLoad .img-responsive{width:100%;height:100%;border-radius:8px}.games .games-item .lazyload-container .LazyLoad .upcoming-img-responsive{border-radius:12px 12px 0px 0px}.games .games-item .games-item-bottom{justify-content:space-between;margin-top:16px;display:flex;flex-direction:column}.games .games-item .games-item-bottom .star{color:rgba(0,0,0,0.2)}.games .games-item .games-item-bottom .game-info{line-height:150%;color:#1f1637;padding-right:10px}.games .games-item .games-item-bottom .name,.games .games-item .games-item-bottom .company{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:1}.games .games-item .games-item-bottom .name{font-weight:600;font-size:14px;line-height:21px}.games .games-item .games-item-bottom .name.upcoming-name{font-size:16px;line-height:24px;-webkit-line-clamp:2}@media screen and (max-width: 767px){.games .games-item .games-item-bottom .name.upcoming-name{font-size:14px}}.games .games-item .games-item-bottom .company{font-size:14px;font-weight:400;margin-top:4px;line-height:24px}.games .games-item .games-item-bottom .company.upcoming-company{font-size:14px;margin-top:8px;line-height:21px}@media screen and (max-width: 767px){.games .games-item .games-item-bottom .company.upcoming-company{font-size:12px}}.games .games-item .upcoming-games-item-bottom{padding-left:16px;padding-right:16px}.games .games-item .moddable-game-label{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px 8px;position:absolute;z-index:2;min-height:28px;width:100%;background:rgba(0,0,0,0.5);backdrop-filter:blur(24px);border-radius:8px 8px 0px 0px}.games .games-item .moddable-game-label svg{margin-right:10px}.games .games-item .moddable-game-label .moddable-game-text{font-weight:normal;font-size:12px;line-height:150%;color:#ffffff}.games .upcoming-games-item{max-width:360px;min-width:170px;width:32%;height:312px;background-color:white;border-radius:12px;margin-right:24px}.games .upcoming-games-item:hover{box-shadow:0px 0px 0px 2px #ffffff, 0px 0px 0px 3.5px #ff42a5;border-radius:12px}@media screen and (max-width: 590px){.games .upcoming-games-item{margin-right:0px;min-width:360px}}@media screen and (max-width: 392px){.games .upcoming-games-item{margin-right:0px;min-width:260px;width:100%}}@media screen and (min-width: 768px){.games .games-list.item2{justify-content:flex-start}.games .games-list.item2 .games-item{width:350px;margin-right:39px}}@media screen and (max-width: 470px){.games .games-list a:nth-child(2) .games-item{margin-right:0}.games .games-list a:nth-child(4) .games-item{margin-right:0}}@media screen and (max-width: 366px){.games .games-list .games-item .image-wrapper .moddable-game-label svg{margin-right:4px}.games .games-list .games-item .image-wrapper .moddable-game-label .moddable-game-text{font-size:10px}}@media screen and (min-width: 768px) and (max-width: 1200px){.games .games-list .games-item-hover{width:16vw}}@media screen and (min-width: 953px){.games .games-list :last-child{margin-right:0}}@media screen and (min-width: 590px){.games .upcoming-games-list :last-child{margin-right:0}}@media screen and (max-width: 952px){.games .games-list{display:flex;flex-wrap:wrap;margin-top:0px}.games .games-list .games-item-hover{width:40vw;max-width:170px;margin-top:32px}}@media screen and (max-width: 767px){.games .header .genre-games-heading{margin-top:48px;font-size:24px;line-height:36px;text-align:left}.games .header .genre-games-heading::after{padding:4px}}@media screen and (max-width: 605px){.games .games-list-hover .games-item-hover{width:46%;margin-right:20px}.games .games-list-hover :nth-child(2){margin-right:0}.games .games-list-hover :nth-child(4){margin-right:0}.games .games-list-hover :nth-child(6){margin-right:0}}@media screen and (max-width: 593px){.games .games-list-hover :nth-child(2){margin-right:0}.games .games-list-hover :nth-child(4){margin-right:0}.games .games-list-hover :nth-child(6){margin-right:0}}.upcoming-games{background:linear-gradient(113.21deg, #FFEDF6 0%, #FFEDF6 .01%, #E4F7FF 60.94%, #FCFFED 100%);padding-bottom:80px;margin-top:48px}@media screen and (max-width: 767px){.upcoming-games{padding-bottom:46.5px}}\n"
        );
      t.default = function (e) {
        var t = e.games,
          i = void 0 === t ? [] : t,
          l = (e.isPopularGames, e.genre),
          u = e.host,
          h = e.genreDescription,
          f = void 0 === h ? "" : h,
          x = e.slug,
          b = e.className,
          v = x,
          w = Object(s.useRouter)().locale,
          y = Object(d.useState)(),
          j = y[0],
          z = y[1];
        if (!i.length) return null;
        var O = Object(d.useState)(5),
          N = O[0],
          C = O[1],
          k = Object(m.e)(w);
        Object(d.useEffect)(function () {
          var e = window.navigator.userAgent;
          z(Object(c.useUserAgent)(e).isMobile),
            Object(c.useUserAgent)(e).isMobile && C(6);
        }, []),
          Object(d.useEffect)(
            function () {
              "upcoming" === v && C(3);
            },
            [v]
          );
        var F = function (e) {
          var t =
            "upcoming" === v
              ? "https://cms-cdn.now.gg/cms-media/2022/05/OG-Image.jpg"
              : "https://cdn.now.gg/apps-content/img/homepage/app-tile.png";
          e.target.src !== t &&
            ((e.target.src = t), (e.target.previousElementSibling.srcset = t));
        };
        return Object(a.jsx)(p, {
          children:
            ("upcoming" !== v || i.length >= 2) &&
            Object(a.jsx)("section", {
              className: "games ".concat(v, "-games ").concat(b),
              children: Object(a.jsxs)("div", {
                className: "container",
                children: [
                  l &&
                    Object(a.jsx)("div", {
                      className: "header",
                      children: Object(a.jsxs)("div", {
                        className: "header-left",
                        children: [
                          Object(a.jsx)("a", {
                            className: ""
                              .concat(
                                "upcoming" !== v && "genre-games-heading",
                                " "
                              )
                              .concat(v, "-games-heading"),
                            href:
                              "upcoming" !== v &&
                              ""
                                .concat(Object(m.e)(w), "/games/")
                                .concat(v, ".html"),
                            children: Object(a.jsx)(n.a, {
                              id: "app.genreGames",
                              values: {
                                GENRE: Object(a.jsx)("span", { children: l }),
                              },
                              children: function (e) {
                                return e;
                              },
                            }),
                          }),
                          Object(a.jsx)("div", {
                            className: "genre-games-description",
                            dangerouslySetInnerHTML: { __html: f },
                          }),
                        ],
                      }),
                    }),
                  Object(a.jsx)("div", {
                    className: "games-list "
                      .concat("upcoming" !== v && "games-list-hover", " ")
                      .concat(v, "-games-list flex item")
                      .concat(i.length),
                    children: i.slice(0, N).map(function (e) {
                      var t,
                        i,
                        s,
                        l,
                        d,
                        c,
                        m = e.nowgg_id,
                        p = e.media,
                        h = void 0 === p ? {} : p,
                        f = e.name,
                        x = void 0 === f ? "" : f,
                        b = e.rating,
                        w = void 0 === b ? 0 : b,
                        y = e.title,
                        z = void 0 === y ? "" : y,
                        O = e.slug,
                        N = e.developers_details,
                        C = void 0 === N ? {} : N,
                        A = e.moddable,
                        E = e.gameTileText,
                        L = ""
                          .concat(u)
                          .concat(k, "/apps/")
                          .concat(C.slug, "/")
                          .concat(m, "/")
                          .concat(O, ".html");
                      return Object(a.jsxs)(
                        "a",
                        {
                          href: L,
                          className: "games-item "
                            .concat("upcoming" !== v && "games-item-hover", " ")
                            .concat(v, "-games-item"),
                          children: [
                            Object(a.jsxs)("div", {
                              className: "image-wrapper ".concat(
                                v,
                                "-image-wrapper"
                              ),
                              children: [
                                "upcoming" !== v
                                  ? A &&
                                    Object(a.jsxs)("div", {
                                      className: "moddable-game-label",
                                      children: [
                                        Object(a.jsx)(g.a, {}),
                                        Object(a.jsx)("span", {
                                          className: "moddable-game-text",
                                          children: Object(a.jsx)(n.a, {
                                            id: "moddableGame",
                                          }),
                                        }),
                                      ],
                                    })
                                  : Object(a.jsx)("div", {
                                      className: "launch-time",
                                      children: E
                                        ? Object(a.jsx)(n.a, { id: E })
                                        : Object(a.jsx)(n.a, {
                                            id: "comingSoon",
                                          }),
                                    }),
                                Object(a.jsxs)(r.a, {
                                  children: [
                                    Object(a.jsx)("source", {
                                      media: "(max-width:768px)",
                                      srcSet:
                                        "upcoming" === v
                                          ? null === (t = h.mobile) ||
                                            void 0 === t
                                            ? void 0
                                            : t.ogimage
                                          : null === (i = h.mobile) ||
                                            void 0 === i
                                          ? void 0
                                          : i.tile,
                                    }),
                                    Object(a.jsx)("img", {
                                      className: "img-responsive ".concat(
                                        v,
                                        "-img-responsive"
                                      ),
                                      src:
                                        "upcoming" === v
                                          ? j
                                            ? null === (s = h.mobile) ||
                                              void 0 === s
                                              ? void 0
                                              : s.ogimage
                                            : null === (l = h.desktop) ||
                                              void 0 === l
                                            ? void 0
                                            : l.ogimage
                                          : j
                                          ? null === (d = h.mobile) ||
                                            void 0 === d
                                            ? void 0
                                            : d.tile
                                          : null === (c = h.desktop) ||
                                            void 0 === c
                                          ? void 0
                                          : c.tile,
                                      alt: z,
                                      height: "upcoming" === v ? "203" : "470",
                                      width: "upcoming" === v ? "360" : "350",
                                      onError: F,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            Object(a.jsxs)("div", {
                              className: "games-item-bottom ".concat(
                                v,
                                "-games-item-bottom flex"
                              ),
                              children: [
                                Object(a.jsxs)("div", {
                                  className: "game-info",
                                  children: [
                                    Object(a.jsx)("div", {
                                      className: "name ".concat(v, "-name"),
                                      children: x,
                                    }),
                                    Object(a.jsx)("div", {
                                      className: "company ".concat(
                                        v,
                                        "-company"
                                      ),
                                      children:
                                        null === C || void 0 === C
                                          ? void 0
                                          : C.name,
                                    }),
                                  ],
                                }),
                                "upcoming" !== v &&
                                  Object(a.jsx)(o.a, { rating: w }),
                              ],
                            }),
                          ],
                        },
                        m
                      );
                    }),
                  }),
                  "upcoming" !== v &&
                    l &&
                    Object(a.jsx)("a", {
                      className: "flex see-more-btn perfectCenter",
                      href: ""
                        .concat(Object(m.e)(w), "/games/")
                        .concat(v, ".html"),
                      children: Object(a.jsx)(n.a, { id: "seeMore" }),
                    }),
                ],
              }),
            }),
        });
      };
    },
    v1EE: function (e, t, i) {
      var a, n, o;
      !(function (r, s) {
        if (r) {
          (s = s.bind(null, r, r.document)),
            e.exports
              ? s(i("s+lh"))
              : ((n = [i("s+lh")]),
                void 0 ===
                  (o = "function" === typeof (a = s) ? a.apply(t, n) : a) ||
                  (e.exports = o));
        }
      })("undefined" != typeof window ? window : 0, function (e, t, i) {
        "use strict";
        if (e.addEventListener) {
          var a = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            n = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            r = /^picture$/i,
            s = i.cfg,
            l = {
              getParent: function (t, i) {
                var a = t,
                  n = t.parentNode;
                return (
                  (i && "prev" != i) ||
                    !n ||
                    !r.test(n.nodeName || "") ||
                    (n = n.parentNode),
                  "self" != i &&
                    (a =
                      "prev" == i
                        ? t.previousElementSibling
                        : (i &&
                            (n.closest || e.jQuery) &&
                            (n.closest
                              ? n.closest(i)
                              : jQuery(n).closest(i)[0])) ||
                          n),
                  a
                );
              },
              getFit: function (e) {
                var t,
                  i,
                  a = getComputedStyle(e, null) || {},
                  r = a.content || a.fontFamily,
                  s = {
                    fit:
                      e._lazysizesParentFit ||
                      e.getAttribute("data-parent-fit"),
                  };
                return (
                  !s.fit && r && (t = r.match(n)) && (s.fit = t[1]),
                  s.fit
                    ? (!(i =
                        e._lazysizesParentContainer ||
                        e.getAttribute("data-parent-container")) &&
                        r &&
                        (t = r.match(o)) &&
                        (i = t[1]),
                      (s.parent = l.getParent(e, i)))
                    : (s.fit = a.objectFit),
                  s
                );
              },
              getImageRatio: function (t) {
                var i,
                  n,
                  o,
                  l,
                  d,
                  c,
                  m,
                  g = t.parentNode,
                  p =
                    g && r.test(g.nodeName || "")
                      ? g.querySelectorAll("source, img")
                      : [t];
                for (i = 0; i < p.length; i++)
                  if (
                    ((n =
                      (t = p[i]).getAttribute(s.srcsetAttr) ||
                      t.getAttribute("srcset") ||
                      t.getAttribute("data-pfsrcset") ||
                      t.getAttribute("data-risrcset") ||
                      ""),
                    (o = t._lsMedia || t.getAttribute("media")),
                    (o = s.customMedia[t.getAttribute("data-media") || o] || o),
                    n &&
                      (!o || ((e.matchMedia && matchMedia(o)) || {}).matches))
                  ) {
                    (l = parseFloat(t.getAttribute("data-aspectratio"))) ||
                      ((d = n.match(a))
                        ? "w" == d[2]
                          ? ((c = d[1]), (m = d[3]))
                          : ((c = d[3]), (m = d[1]))
                        : ((c = t.getAttribute("width")),
                          (m = t.getAttribute("height"))),
                      (l = c / m));
                    break;
                  }
                return l;
              },
              calculateSize: function (e, t) {
                var i,
                  a,
                  n,
                  o = this.getFit(e),
                  r = o.fit,
                  s = o.parent;
                return "width" == r ||
                  (("contain" == r || "cover" == r) &&
                    (a = this.getImageRatio(e)))
                  ? (s ? (t = s.clientWidth) : (s = e),
                    (n = t),
                    "width" == r
                      ? (n = t)
                      : (i = t / s.clientHeight) &&
                        (("cover" == r && i < a) ||
                          ("contain" == r && i > a)) &&
                        (n = t * (a / i)),
                    n)
                  : t;
              },
            };
          (i.parentFit = l),
            t.addEventListener("lazybeforesizes", function (e) {
              if (!e.defaultPrevented && e.detail.instance == i) {
                var t = e.target;
                e.detail.width = l.calculateSize(t, e.detail.width);
              }
            });
        }
      });
    },
  },
]);
