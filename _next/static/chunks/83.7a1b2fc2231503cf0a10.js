(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [83],
  {
    P957: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("kriW"),
        a = r("20a2"),
        o = r("vOnD"),
        m = r("S6dy"),
        l = r("hIrt"),
        h = r("G7qJ"),
        s = o.b.button.withConfig({
          displayName: "PlayButton__ButtonStyleWrapper",
          componentId: "sc-tpjoyr-0",
        })(
          [
            "border-radius:8px;border:0;outline:none;overflow:hidden;animation:fadeIn 1.5s;font-family:'Poppins';&.btn-play-now *{pointer-events:none;}@media screen and (max-width:768px){&.mob{max-width:100%;margin-top:32px;height:56px;}img,video{height:auto;max-width:40px;}.btn-text{font-weight:600;font-size:14px !important;line-height:150%;}}",
            "",
          ],
          function (e) {
            return Object(m.a)(e.lang);
          }
        );
      t.a = function (e) {
        var t = e.btnText,
          r = e.className,
          o = void 0 === r ? "" : r,
          m = e.showIcon,
          u = void 0 === m || m,
          c = e.redirectUrl,
          d = void 0 === c ? "" : c,
          g = e.children,
          p = e.origin,
          b = Object(a.useRouter)().locale;
        return d || "header" === p
          ? Object(n.jsxs)(s, {
              onClick: function () {
                if (!d) return null;
                Object(h.g)(d);
              },
              className: "play-btn flex perfectCenter ".concat(
                o,
                " experience-btn"
              ),
              lang: b,
              redirectUrl: d,
              children: [
                g,
                u && Object(n.jsx)(l.a, { width: "44", height: "44" }),
                Object(n.jsx)("span", {
                  className: "btn-text",
                  children: Object(n.jsx)(i.a, { id: t }),
                }),
              ],
            })
          : null;
      };
    },
    S6dy: function (e, t, r) {
      "use strict";
      t.a = function (e) {
        var t = { cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[e] || e,
          r = "";
        return (
          "ja" == t
            ? (r +=
                "{\n        @media (max-width: 767px) {\n            .btn-text {\n              font-weight: 600;\n              font-size: 11px !important;\n              line-height: 150%;\n              margin-left: 8px;\n              }\n            }\n        }")
            : "ko" == t || "de" === t || "id" === t
            ? (r +=
                "\n        @media (max-width: 767px) {\n            .btn-text {\n                font-weight: 600;\n                font-size: 12px !important;\n                line-height: 150%;\n                margin-left: 8px;\n              }\n            }\n        ")
            : ("vi" !== t && "es" !== t && "pt-br" !== t && "fr" !== t) ||
              (r +=
                "\n          .btn-text {\n              font-weight: 600;\n              font-size: 15px !important;\n              line-height: 150%;\n            }\n            @media (max-width: 767px) {\n              .btn-text {\n                  text-align: left;\n                  line-height: 120%\n                }\n              }\n      "),
          r
        );
      };
    },
    deKR: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = (r("q1tI"), r("kriW"));
      t.a = function (e) {
        var t = e.text,
          r = e.values;
        return t
          ? Object(n.jsx)(i.a, { id: t, values: r, defaultMessage: t })
          : null;
      };
    },
    hIrt: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("lPHp"),
        a = r.n(i),
        o = r("q1tI"),
        m = r("qM95");
      t.a = function (e) {
        var t = e.width,
          r = e.height,
          i = e.className,
          l = Object(o.createRef)();
        return (
          Object(o.useEffect)(function () {
            a.a.loadAnimation({
              container: l.current,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: m,
            });
          }, []),
          Object(n.jsx)("div", {
            className: i,
            style: { width: "".concat(t, "px"), height: "".concat(r, "px") },
            ref: l,
          })
        );
      };
    },
    mmzJ: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("q1tI"),
        a = r("vOnD").b.div.withConfig({
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
          r = void 0 !== t && t,
          o = e.setExpanded,
          m = e.id,
          l = e.header,
          h = e.body,
          s = e.children,
          u = e.defaultBodyheight,
          c = e.headerItems,
          d = Object(i.useState)(r),
          g = d[0],
          p = d[1],
          b = Object(i.useRef)(null),
          x = Object(i.useState)(0),
          f = x[0],
          w = x[1];
        return (
          Object(i.useEffect)(
            function () {
              p(r), r && w("".concat(b.current.scrollHeight, "px"));
            },
            [r]
          ),
          Object(n.jsxs)(a, {
            className: "accordion-container ".concat(g ? "open" : ""),
            open: g,
            bodyHeight: f,
            defaultBodyheight: u,
            headerItems: c,
            children: [
              Object(n.jsx)("div", {
                className: "header",
                onClick: function () {
                  p(!g), w("".concat(b.current.scrollHeight, "px")), o && o(m);
                },
                children: Object(n.jsx)("span", {
                  className: "text",
                  children: l,
                }),
              }),
              Object(n.jsx)("div", {
                ref: b,
                className: "body",
                children:
                  s ||
                  Object(n.jsx)("span", {
                    className: "text",
                    dangerouslySetInnerHTML: { __html: h },
                  }),
              }),
            ],
          })
        );
      };
    },
    "s+lh": function (e, t, r) {
      !(function (t, r) {
        var n = (function (e, t, r) {
          "use strict";
          var n, i;
          if (
            ((function () {
              var t,
                r = {
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
              for (t in ((i = e.lazySizesConfig || e.lazysizesConfig || {}), r))
                t in i || (i[t] = r[t]);
            })(),
            !t || !t.getElementsByClassName)
          )
            return { init: function () {}, cfg: i, noSupport: !0 };
          var a = t.documentElement,
            o = e.HTMLPictureElement,
            m = "addEventListener",
            l = "getAttribute",
            h = e[m].bind(e),
            s = e.setTimeout,
            u = e.requestAnimationFrame || s,
            c = e.requestIdleCallback,
            d = /^picture$/i,
            g = ["load", "error", "lazyincluded", "_lazyloaded"],
            p = {},
            b = Array.prototype.forEach,
            x = function (e, t) {
              return (
                p[t] || (p[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                p[t].test(e[l]("class") || "") && p[t]
              );
            },
            f = function (e, t) {
              x(e, t) ||
                e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
            },
            w = function (e, t) {
              var r;
              (r = x(e, t)) &&
                e.setAttribute("class", (e[l]("class") || "").replace(r, " "));
            },
            v = function (e, t, r) {
              var n = r ? m : "removeEventListener";
              r && v(e, t),
                g.forEach(function (r) {
                  e[n](r, t);
                });
            },
            y = function (e, r, i, a, o) {
              var m = t.createEvent("Event");
              return (
                i || (i = {}),
                (i.instance = n),
                m.initEvent(r, !a, !o),
                (m.detail = i),
                e.dispatchEvent(m),
                m
              );
            },
            j = function (t, r) {
              var n;
              !o && (n = e.picturefill || i.pf)
                ? (r &&
                    r.src &&
                    !t[l]("srcset") &&
                    t.setAttribute("srcset", r.src),
                  n({ reevaluate: !0, elements: [t] }))
                : r && r.src && (t.src = r.src);
            },
            k = function (e, t) {
              return (getComputedStyle(e, null) || {})[t];
            },
            O = function (e, t, r) {
              for (
                r = r || e.offsetWidth;
                r < i.minSize && t && !e._lazysizesWidth;

              )
                (r = t.offsetWidth), (t = t.parentNode);
              return r;
            },
            C = (function () {
              var e,
                r,
                n = [],
                i = [],
                a = n,
                o = function () {
                  var t = a;
                  for (a = n.length ? i : n, e = !0, r = !1; t.length; )
                    t.shift()();
                  e = !1;
                },
                m = function (n, i) {
                  e && !i
                    ? n.apply(this, arguments)
                    : (a.push(n), r || ((r = !0), (t.hidden ? s : u)(o)));
                };
              return (m._lsFlush = o), m;
            })(),
            z = function (e, t) {
              return t
                ? function () {
                    C(e);
                  }
                : function () {
                    var t = this,
                      r = arguments;
                    C(function () {
                      e.apply(t, r);
                    });
                  };
            },
            N = function (e) {
              var t,
                n = 0,
                a = i.throttleDelay,
                o = i.ricTimeout,
                m = function () {
                  (t = !1), (n = r.now()), e();
                },
                l =
                  c && o > 49
                    ? function () {
                        c(m, { timeout: o }),
                          o !== i.ricTimeout && (o = i.ricTimeout);
                      }
                    : z(function () {
                        s(m);
                      }, !0);
              return function (e) {
                var i;
                (e = !0 === e) && (o = 33),
                  t ||
                    ((t = !0),
                    (i = a - (r.now() - n)) < 0 && (i = 0),
                    e || i < 9 ? l() : s(l, i));
              };
            },
            _ = function (e) {
              var t,
                n,
                i = 99,
                a = function () {
                  (t = null), e();
                },
                o = function () {
                  var e = r.now() - n;
                  e < i ? s(o, i - e) : (c || a)(a);
                };
              return function () {
                (n = r.now()), t || (t = s(o, i));
              };
            },
            A = (function () {
              var o,
                c,
                g,
                p,
                O,
                A,
                L,
                I,
                S,
                P,
                M,
                B,
                T = /^img$/i,
                F = /^iframe$/i,
                H =
                  "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                R = 0,
                D = 0,
                q = 0,
                W = -1,
                U = function (e) {
                  q--, (!e || q < 0 || !e.target) && (q = 0);
                },
                Y = function (e) {
                  return (
                    null == B && (B = "hidden" == k(t.body, "visibility")),
                    B ||
                      !(
                        "hidden" == k(e.parentNode, "visibility") &&
                        "hidden" == k(e, "visibility")
                      )
                  );
                },
                K = function (e, r) {
                  var n,
                    i = e,
                    o = Y(e);
                  for (
                    I -= r, M += r, S -= r, P += r;
                    o && (i = i.offsetParent) && i != t.body && i != a;

                  )
                    (o = (k(i, "opacity") || 1) > 0) &&
                      "visible" != k(i, "overflow") &&
                      ((n = i.getBoundingClientRect()),
                      (o =
                        P > n.left &&
                        S < n.right &&
                        M > n.top - 1 &&
                        I < n.bottom + 1));
                  return o;
                },
                $ = function () {
                  var e,
                    r,
                    m,
                    h,
                    s,
                    u,
                    d,
                    g,
                    b,
                    x,
                    f,
                    w,
                    v = n.elements;
                  if ((p = i.loadMode) && q < 8 && (e = v.length)) {
                    for (r = 0, W++; r < e; r++)
                      if (v[r] && !v[r]._lazyRace)
                        if (
                          !H ||
                          (n.prematureUnveil && n.prematureUnveil(v[r]))
                        )
                          te(v[r]);
                        else if (
                          (((g = v[r][l]("data-expand")) && (u = 1 * g)) ||
                            (u = D),
                          x ||
                            ((x =
                              !i.expand || i.expand < 1
                                ? a.clientHeight > 500 && a.clientWidth > 500
                                  ? 500
                                  : 370
                                : i.expand),
                            (n._defEx = x),
                            (f = x * i.expFactor),
                            (w = i.hFac),
                            (B = null),
                            D < f && q < 1 && W > 2 && p > 2 && !t.hidden
                              ? ((D = f), (W = 0))
                              : (D = p > 1 && W > 1 && q < 6 ? x : R)),
                          b !== u &&
                            ((A = innerWidth + u * w),
                            (L = innerHeight + u),
                            (d = -1 * u),
                            (b = u)),
                          (m = v[r].getBoundingClientRect()),
                          (M = m.bottom) >= d &&
                            (I = m.top) <= L &&
                            (P = m.right) >= d * w &&
                            (S = m.left) <= A &&
                            (M || P || S || I) &&
                            (i.loadHidden || Y(v[r])) &&
                            ((c && q < 3 && !g && (p < 3 || W < 4)) ||
                              K(v[r], u)))
                        ) {
                          if ((te(v[r]), (s = !0), q > 9)) break;
                        } else
                          !s &&
                            c &&
                            !h &&
                            q < 4 &&
                            W < 4 &&
                            p > 2 &&
                            (o[0] || i.preloadAfterLoad) &&
                            (o[0] ||
                              (!g &&
                                (M ||
                                  P ||
                                  S ||
                                  I ||
                                  "auto" != v[r][l](i.sizesAttr)))) &&
                            (h = o[0] || v[r]);
                    h && !s && te(h);
                  }
                },
                G = N($),
                J = function (e) {
                  var t = e.target;
                  t._lazyCache
                    ? delete t._lazyCache
                    : (U(e),
                      f(t, i.loadedClass),
                      w(t, i.loadingClass),
                      v(t, V),
                      y(t, "lazyloaded"));
                },
                Q = z(J),
                V = function (e) {
                  Q({ target: e.target });
                },
                X = function (e, t) {
                  var r = e.getAttribute("data-load-mode") || i.iframeLoadMode;
                  0 == r
                    ? e.contentWindow.location.replace(t)
                    : 1 == r && (e.src = t);
                },
                Z = function (e) {
                  var t,
                    r = e[l](i.srcsetAttr);
                  (t = i.customMedia[e[l]("data-media") || e[l]("media")]) &&
                    e.setAttribute("media", t),
                    r && e.setAttribute("srcset", r);
                },
                ee = z(function (e, t, r, n, a) {
                  var o, m, h, u, c, p;
                  (c = y(e, "lazybeforeunveil", t)).defaultPrevented ||
                    (n &&
                      (r ? f(e, i.autosizesClass) : e.setAttribute("sizes", n)),
                    (m = e[l](i.srcsetAttr)),
                    (o = e[l](i.srcAttr)),
                    a && (u = (h = e.parentNode) && d.test(h.nodeName || "")),
                    (p = t.firesLoad || ("src" in e && (m || o || u))),
                    (c = { target: e }),
                    f(e, i.loadingClass),
                    p && (clearTimeout(g), (g = s(U, 2500)), v(e, V, !0)),
                    u && b.call(h.getElementsByTagName("source"), Z),
                    m
                      ? e.setAttribute("srcset", m)
                      : o && !u && (F.test(e.nodeName) ? X(e, o) : (e.src = o)),
                    a && (m || u) && j(e, { src: o })),
                    e._lazyRace && delete e._lazyRace,
                    w(e, i.lazyClass),
                    C(function () {
                      var t = e.complete && e.naturalWidth > 1;
                      (p && !t) ||
                        (t && f(e, i.fastLoadedClass),
                        J(c),
                        (e._lazyCache = !0),
                        s(function () {
                          "_lazyCache" in e && delete e._lazyCache;
                        }, 9)),
                        "lazy" == e.loading && q--;
                    }, !0);
                }),
                te = function (e) {
                  if (!e._lazyRace) {
                    var t,
                      r = T.test(e.nodeName),
                      n = r && (e[l](i.sizesAttr) || e[l]("sizes")),
                      a = "auto" == n;
                    ((!a && c) ||
                      !r ||
                      (!e[l]("src") && !e.srcset) ||
                      e.complete ||
                      x(e, i.errorClass) ||
                      !x(e, i.lazyClass)) &&
                      ((t = y(e, "lazyunveilread").detail),
                      a && E.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      q++,
                      ee(e, t, a, n, r));
                  }
                },
                re = _(function () {
                  (i.loadMode = 3), G();
                }),
                ne = function () {
                  3 == i.loadMode && (i.loadMode = 2), re();
                },
                ie = function () {
                  c ||
                    (r.now() - O < 999
                      ? s(ie, 999)
                      : ((c = !0), (i.loadMode = 3), G(), h("scroll", ne, !0)));
                };
              return {
                _: function () {
                  (O = r.now()),
                    (n.elements = t.getElementsByClassName(i.lazyClass)),
                    (o = t.getElementsByClassName(
                      i.lazyClass + " " + i.preloadClass
                    )),
                    h("scroll", G, !0),
                    h("resize", G, !0),
                    h("pageshow", function (e) {
                      if (e.persisted) {
                        var r = t.querySelectorAll("." + i.loadingClass);
                        r.length &&
                          r.forEach &&
                          u(function () {
                            r.forEach(function (e) {
                              e.complete && te(e);
                            });
                          });
                      }
                    }),
                    e.MutationObserver
                      ? new MutationObserver(G).observe(a, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (a[m]("DOMNodeInserted", G, !0),
                        a[m]("DOMAttrModified", G, !0),
                        setInterval(G, 999)),
                    h("hashchange", G, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      t[m](e, G, !0);
                    }),
                    /d$|^c/.test(t.readyState)
                      ? ie()
                      : (h("load", ie),
                        t[m]("DOMContentLoaded", G),
                        s(ie, 2e4)),
                    n.elements.length ? ($(), C._lsFlush()) : G();
                },
                checkElems: G,
                unveil: te,
                _aLSL: ne,
              };
            })(),
            E = (function () {
              var e,
                r = z(function (e, t, r, n) {
                  var i, a, o;
                  if (
                    ((e._lazysizesWidth = n),
                    (n += "px"),
                    e.setAttribute("sizes", n),
                    d.test(t.nodeName || ""))
                  )
                    for (
                      a = 0, o = (i = t.getElementsByTagName("source")).length;
                      a < o;
                      a++
                    )
                      i[a].setAttribute("sizes", n);
                  r.detail.dataAttr || j(e, r.detail);
                }),
                n = function (e, t, n) {
                  var i,
                    a = e.parentNode;
                  a &&
                    ((n = O(e, a, n)),
                    (i = y(e, "lazybeforesizes", { width: n, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((n = i.detail.width) &&
                        n !== e._lazysizesWidth &&
                        r(e, a, i, n)));
                },
                a = _(function () {
                  var t,
                    r = e.length;
                  if (r) for (t = 0; t < r; t++) n(e[t]);
                });
              return {
                _: function () {
                  (e = t.getElementsByClassName(i.autosizesClass)),
                    h("resize", a);
                },
                checkElems: a,
                updateElem: n,
              };
            })(),
            L = function () {
              !L.i && t.getElementsByClassName && ((L.i = !0), E._(), A._());
            };
          return (
            s(function () {
              i.init && L();
            }),
            (n = {
              cfg: i,
              autoSizer: E,
              loader: A,
              init: L,
              uP: j,
              aC: f,
              rC: w,
              hC: x,
              fire: y,
              gW: O,
              rAF: C,
            })
          );
        })(t, t.document, Date);
        (t.lazySizes = n), e.exports && (e.exports = n);
      })("undefined" != typeof window ? window : {});
    },
    v1EE: function (e, t, r) {
      var n, i, a;
      !(function (o, m) {
        if (o) {
          (m = m.bind(null, o, o.document)),
            e.exports
              ? m(r("s+lh"))
              : ((i = [r("s+lh")]),
                void 0 ===
                  (a = "function" === typeof (n = m) ? n.apply(t, i) : n) ||
                  (e.exports = a));
        }
      })("undefined" != typeof window ? window : 0, function (e, t, r) {
        "use strict";
        if (e.addEventListener) {
          var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            a = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            o = /^picture$/i,
            m = r.cfg,
            l = {
              getParent: function (t, r) {
                var n = t,
                  i = t.parentNode;
                return (
                  (r && "prev" != r) ||
                    !i ||
                    !o.test(i.nodeName || "") ||
                    (i = i.parentNode),
                  "self" != r &&
                    (n =
                      "prev" == r
                        ? t.previousElementSibling
                        : (r &&
                            (i.closest || e.jQuery) &&
                            (i.closest
                              ? i.closest(r)
                              : jQuery(i).closest(r)[0])) ||
                          i),
                  n
                );
              },
              getFit: function (e) {
                var t,
                  r,
                  n = getComputedStyle(e, null) || {},
                  o = n.content || n.fontFamily,
                  m = {
                    fit:
                      e._lazysizesParentFit ||
                      e.getAttribute("data-parent-fit"),
                  };
                return (
                  !m.fit && o && (t = o.match(i)) && (m.fit = t[1]),
                  m.fit
                    ? (!(r =
                        e._lazysizesParentContainer ||
                        e.getAttribute("data-parent-container")) &&
                        o &&
                        (t = o.match(a)) &&
                        (r = t[1]),
                      (m.parent = l.getParent(e, r)))
                    : (m.fit = n.objectFit),
                  m
                );
              },
              getImageRatio: function (t) {
                var r,
                  i,
                  a,
                  l,
                  h,
                  s,
                  u,
                  c = t.parentNode,
                  d =
                    c && o.test(c.nodeName || "")
                      ? c.querySelectorAll("source, img")
                      : [t];
                for (r = 0; r < d.length; r++)
                  if (
                    ((i =
                      (t = d[r]).getAttribute(m.srcsetAttr) ||
                      t.getAttribute("srcset") ||
                      t.getAttribute("data-pfsrcset") ||
                      t.getAttribute("data-risrcset") ||
                      ""),
                    (a = t._lsMedia || t.getAttribute("media")),
                    (a = m.customMedia[t.getAttribute("data-media") || a] || a),
                    i &&
                      (!a || ((e.matchMedia && matchMedia(a)) || {}).matches))
                  ) {
                    (l = parseFloat(t.getAttribute("data-aspectratio"))) ||
                      ((h = i.match(n))
                        ? "w" == h[2]
                          ? ((s = h[1]), (u = h[3]))
                          : ((s = h[3]), (u = h[1]))
                        : ((s = t.getAttribute("width")),
                          (u = t.getAttribute("height"))),
                      (l = s / u));
                    break;
                  }
                return l;
              },
              calculateSize: function (e, t) {
                var r,
                  n,
                  i,
                  a = this.getFit(e),
                  o = a.fit,
                  m = a.parent;
                return "width" == o ||
                  (("contain" == o || "cover" == o) &&
                    (n = this.getImageRatio(e)))
                  ? (m ? (t = m.clientWidth) : (m = e),
                    (i = t),
                    "width" == o
                      ? (i = t)
                      : (r = t / m.clientHeight) &&
                        (("cover" == o && r < n) ||
                          ("contain" == o && r > n)) &&
                        (i = t * (n / r)),
                    i)
                  : t;
              },
            };
          (r.parentFit = l),
            t.addEventListener("lazybeforesizes", function (e) {
              if (!e.defaultPrevented && e.detail.instance == r) {
                var t = e.target;
                e.detail.width = l.calculateSize(t, e.detail.width);
              }
            });
        }
      });
    },
    xoxq: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("nKUr"),
        i = r("20a2"),
        a = r("q1tI"),
        o = r("G7qJ"),
        m = r("rePB"),
        l = r("A8lN"),
        h = r("AATo"),
        s = r("mmzJ"),
        u = r("deKR"),
        c = r("P957"),
        d = r("vOnD"),
        g = r("7Qko"),
        p =
          (r("s+lh"),
          r("v1EE"),
          d.b.a.withConfig({
            displayName: "PageLinks__PageLink",
            componentId: "sc-1dpf9wt-0",
          })([
            "display:flex;padding:16px;width:360px;@media (max-width:1150px){width:44%;}transition:0.2s ease-in-out;position:relative;margin:0 12px 12px 0;@media (max-width:1134px){width:48%;}.icon{height:48px;width:auto;img{height:100%;width:auto;}}.content{margin-left:24px;.title{font-weight:600;font-size:14px;color:#0b0223;margin-top:0 !important;line-height:21px;margin-bottom:4px;}.para{font-size:12px;color:#473e5f;min-height:57px;margin-bottom:4px;line-height:18px;}.know-more{font-weight:600;font-size:12px;color:var(--primaryColor) !important;line-height:18px;}}.arrow{margin-left:5px;height:12px;width:12px;color:var(--paraColor);transform:rotate(-90deg);position:absolute;right:8px;top:20px;&:before{background-color:var(--paraColor);bottom:1px;content:'';height:9px;position:absolute;right:2px;transform-origin:bottom;width:1px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg);}&:after{border-bottom-style:solid;border-bottom-width:1px;border-right-style:solid;border-right-width:1px;content:'';display:inline-block;height:6px;left:3px;position:absolute;top:5px;width:6px;}@media (max-width:1025px){right:20px;}}&:hover{background-color:#f5f5f5;border-radius:8px;}&.active-page-link{background-color:#f5f5f5;border-radius:8px;}",
          ])),
        b = function (e) {
          var t,
            r = e.title,
            m = e.para,
            l = e.link,
            h = e.icon,
            s = e.externalLink,
            u = Object(i.useRouter)(),
            c = u.pathname,
            d = u.locale,
            b = Object(a.useState)(),
            x = b[0],
            f = b[1];
          return (
            Object(a.useEffect)(function () {
              var e = window.navigator.userAgent;
              f(Object(g.useUserAgent)(e).isMobile);
            }, []),
            Object(a.useEffect)(
              function () {
                var e, t, r, n, i;
                x
                  ? (t =
                      null ===
                        (r =
                          document.querySelectorAll(".active-page-link")[1]) ||
                      void 0 === r
                        ? void 0
                        : r.closest(".hamburger-menu-item"))
                  : (t =
                      null ===
                        (n = document.querySelector(".active-page-link")) ||
                      void 0 === n
                        ? void 0
                        : n.closest(".menu-item"));
                (null !== (e = t) &&
                  void 0 !== e &&
                  e.classList.contains("active")) ||
                  null === (i = t) ||
                  void 0 === i ||
                  i.classList.add("active");
              },
              [x]
            ),
            Object(n.jsxs)(p, {
              href: ""
                .concat(l.includes("http") ? "" : "".concat(Object(o.e)(d)))
                .concat(l),
              target: s ? "_blank" : "_self",
              className: "".concat(
                ((t = l),
                c.split("/").includes(t.replace(".html", "").replace("/", ""))
                  ? "active-page-link"
                  : "")
              ),
              children: [
                Object(n.jsx)("div", {
                  className: "icon",
                  dangerouslySetInnerHTML: { __html: h },
                }),
                Object(n.jsxs)("div", {
                  className: "content",
                  children: [
                    Object(n.jsx)("h4", {
                      className: "title",
                      children: Object(o.k)(r),
                    }),
                    Object(n.jsx)("p", {
                      className: "para",
                      children: Object(o.k)(m),
                    }),
                    Object(n.jsx)("span", {
                      className: "know-more",
                      children: Object(o.k)("learnMore"),
                    }),
                  ],
                }),
                s && Object(n.jsx)("span", { className: "arrow" }),
              ],
            })
          );
        },
        x = d.b.div.withConfig({
          displayName: "MenuItems__Menu",
          componentId: "sc-zyfu1t-0",
        })([
          "min-width:335px;.title{font-weight:600;font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:8px;line-height:18px;}.pages{display:flex;flex-wrap:wrap;@media (min-width:768px){max-height:60vh;overflow-y:auto;-ms-overflow-style:none;scrollbar-width:none;}svg.dimension{width:48px;height:48px;}}.pages::-webkit-scrollbar{display:none;}",
        ]),
        f = function (e) {
          var t,
            r,
            i,
            a = e.subMenuItems,
            o = e.title,
            m = e.id;
          return Object(n.jsx)("div", {
            className: "menu-overlay menu-overlay-".concat(m),
            children: Object(n.jsxs)("div", {
              className: "container menu-overlay-container ".concat(
                null !== a &&
                  void 0 !== a &&
                  null !== (t = a.right[0]) &&
                  void 0 !== t &&
                  t.content
                  ? ""
                  : "no-right-section"
              ),
              children: [
                Object(n.jsx)("div", {
                  className: "mega-menu-left-section",
                  children: Object(n.jsxs)(x, {
                    className: "menu",
                    children: [
                      Object(n.jsx)("h2", { className: "title", children: o }),
                      Object(n.jsx)("div", {
                        className: "pages",
                        children:
                          null === a ||
                          void 0 === a ||
                          null === (r = a.left) ||
                          void 0 === r
                            ? void 0
                            : r.map(function (e, t) {
                                return Object(n.jsx)(b, {
                                  title: e.title,
                                  para: e.description,
                                  link: e.learn_more,
                                  icon: e.icon,
                                  externalLink: e.open_in_new_tab,
                                });
                              }),
                      }),
                    ],
                  }),
                }),
                (null === a ||
                void 0 === a ||
                null === (i = a.right[0]) ||
                void 0 === i
                  ? void 0
                  : i.content) &&
                  Object(n.jsxs)("div", {
                    children: [
                      Object(n.jsx)("div", {
                        className: "right-section-container",
                        dangerouslySetInnerHTML: {
                          __html:
                            null === a || void 0 === a
                              ? void 0
                              : a.right[0].content,
                        },
                      }),
                      Object(n.jsx)("div", { className: "gradient-container" }),
                    ],
                  }),
              ],
            }),
          });
        };
      function w(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? w(Object(r), !0).forEach(function (t) {
                Object(m.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : w(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var y = function (e) {
          var t = e.type,
            r = e.origin,
            m = e.headerLinks,
            d = Object(i.useRouter)(),
            g = d.pathname,
            p = d.locale,
            b = d.asPath,
            x = Object(l.b)(),
            w = x.appUrl,
            y = x.openDemoModal,
            j =
              (x.newsArticle,
              "hamburger" === t ? "hamburger-menu-drop column" : "header-menu"),
            k = "hamburger" === t ? "hamburger-menu-item" : "menu-item",
            O =
              (Object(o.f)(
                h.c.filter(function (e) {
                  return "ja" !== e;
                })
              ),
              m &&
                "object" === typeof m &&
                m.map(function (e, t) {
                  return v(
                    v(
                      {
                        text: e.title,
                        menuComponent: function () {
                          return Object(n.jsx)(f, {
                            title: e.title,
                            subMenuItems: e.sub_menu_item,
                            id: t,
                          });
                        },
                        internalLinks: [],
                      },
                      !e.show_sub_menu && { path: e.url }
                    ),
                    {},
                    {
                      isExternalPath: e.open_in_new_tab,
                      subMenu: e.show_sub_menu,
                    }
                  );
                })),
            C = Object(a.useState)(null),
            z = C[0],
            N = C[1],
            _ = function (e) {
              var t, r, n;
              return (null !== (t = e.path) &&
                void 0 !== t &&
                t.includes(
                  null === (r = b.split("/")[1]) || void 0 === r
                    ? void 0
                    : r.replace(".html", "")
                ) &&
                "" != b.split("/")[1]) ||
                (null !== (n = e.internalLinks) &&
                  void 0 !== n &&
                  n.includes(b.split("/")[1].replace(".html", "")))
                ? "active"
                : "";
            };
          Object(a.useEffect)(
            function () {
              var e;
              null === (e = document.getElementById("hamburger-top")) ||
                void 0 === e ||
                e.scrollTo(0, 0);
            },
            [z]
          );
          return (
            w && { href: w },
            Object(a.useEffect)(function () {
              if ("ja" == p) {
                var e = document
                  .querySelector(".scheduleDemoBtnRef")
                  .closest(".btn-item");
                setTimeout(function () {
                  var t;
                  null === e ||
                    void 0 === e ||
                    null === (t = e.classList) ||
                    void 0 === t ||
                    t.add("show-schedule-demo-btn");
                }, 1e3);
              }
            }, []),
            Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsxs)("ul", {
                  className: "flex ".concat(j, " perfectCenter"),
                  children: [
                    m &&
                      "object" === typeof m &&
                      O.map(function (e, r) {
                        var i;
                        return (
                          (!e.validLocales ||
                            (null === (i = e.validLocales) || void 0 === i
                              ? void 0
                              : i.includes(p))) &&
                          Object(n.jsx)(
                            "li",
                            {
                              className: "flex "
                                .concat(k, " ")
                                .concat(_(e), " perfectCenter"),
                              children: e.path
                                ? Object(n.jsx)(n.Fragment, {
                                    children: Object(n.jsxs)("a", {
                                      className: "".concat(
                                        e.isExternalPath ? "external-menu" : "",
                                        " primary-hover"
                                      ),
                                      href: ""
                                        .concat(
                                          e.path.includes("http")
                                            ? ""
                                            : "".concat(Object(o.e)(p))
                                        )
                                        .concat(e.path),
                                      target: e.isExternalPath
                                        ? "_blank"
                                        : "_self",
                                      rel: "noopener",
                                      children: [
                                        Object(n.jsx)(u.a, { text: e.text }),
                                        Object(n.jsx)("span", {
                                          class: "arrow",
                                        }),
                                      ],
                                    }),
                                  })
                                : "hamburger" !== t
                                ? Object(n.jsxs)("div", {
                                    className: "mega-menu primary-hover",
                                    children: [
                                      Object(n.jsx)(u.a, { text: e.text }),
                                      e.menuComponent && e.menuComponent(),
                                    ],
                                  })
                                : Object(n.jsx)(
                                    s.a,
                                    {
                                      isOpen: r === z,
                                      id: r,
                                      setExpanded: function (e) {
                                        return N(e);
                                      },
                                      header: Object(o.k)(e.text),
                                      defaultBodyheight: "0",
                                      headerItems: !0,
                                      children:
                                        e.menuComponent && e.menuComponent(),
                                    },
                                    r
                                  ),
                            },
                            e.text
                          )
                        );
                      }),
                    "app-details-page" !== r &&
                      "hamburger" !== t &&
                      "/_pages/blog" !== g &&
                      "/_pages/support" !== g &&
                      "/blog/[slug]" !== g &&
                      "/support/[slug]" !== g &&
                      "/404" !== g &&
                      Object(n.jsx)("li", {
                        className:
                          "flex btn-item perfectCenter pointer ".concat(
                            w ? "show-experience-btn" : ""
                          ),
                        children:
                          "ja" === p
                            ? Object(n.jsx)("button", {
                                className:
                                  "scheduleDemoBtnRef demoBtnHeader header-link",
                                onClick: y,
                                children: Object(n.jsx)(u.a, {
                                  text: "scheduleADemo",
                                }),
                              })
                            : Object(n.jsx)(c.a, {
                                redirectUrl: w,
                                showIcon: !1,
                                btnText: "experienceNowGG",
                                className: "header-link",
                                origin: "header",
                              }),
                      }),
                  ],
                }),
                "app-details-page" !== r &&
                  "hamburger" === t &&
                  Object(n.jsx)("div", {
                    className:
                      "flex scheduleDemoBtnRef demoBtnHamburger perfectCenter",
                    children:
                      "ja" === p
                        ? Object(n.jsx)("button", {
                            className:
                              "flex header-link hamburger-btn-item perfectCenter pointer",
                            onClick: y,
                            children: Object(n.jsx)(u.a, {
                              text: "scheduleADemo",
                            }),
                          })
                        : Object(n.jsx)(c.a, {
                            redirectUrl: w,
                            showIcon: !1,
                            btnText: "experienceNowGG",
                            className: "header-link",
                          }),
                  }),
              ],
            })
          );
        },
        j = function (e) {
          var t = e.onClose,
            r = (e.transition, e.origin),
            a = e.headerLinks,
            m = Object(i.useRouter)().locale;
          return Object(n.jsxs)("div", {
            className:
              "flex hamburger-menu-wrapper column perfectCenter space-btw",
            id: "hamburger-top",
            children: [
              Object(n.jsxs)("div", {
                className: "flex hamburger-header perfectCenter space-btw",
                children: [
                  Object(n.jsx)("a", {
                    href: "".concat(Object(o.e)(m), "/"),
                    className: "logo",
                    children: Object(n.jsx)("img", {
                      alt: "now.gg logo",
                      src: "https://cdn.now.gg/apps-content/img/nowgg-logo.png",
                      width: "181",
                      height: "48",
                    }),
                  }),
                  Object(n.jsx)("div", {
                    onClick: t,
                    className: "hamburger-close-block",
                    id: "humburger-close",
                  }),
                ],
              }),
              Object(n.jsx)(y, {
                type: "hamburger",
                origin: r,
                headerLinks: a,
              }),
            ],
          });
        },
        k = function (e) {
          var t = "";
          return (
            "ja" == ({ cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[e] || e) &&
              (t +=
                "{\n        @media (max-width: 952px) {\n            .header-section-light {\n                .header-menu {\n                    .menu-item {\n                        margin-right: 12px;\n                        font-size: 11px;\n                    }\n                }\n              }\n            }\n        }"),
            t
          );
        },
        O = d.b.div.withConfig({
          displayName: "HeaderLight__HeaderStyle",
          componentId: "sc-1kux33w-0",
        })(
          ["", " ", ""],
          ".header-section-light{height:87px;position:fixed;left:0;top:0;right:0;z-index:10;max-height:108px;background:#ffffff;display:flex}.header-section-light .container{align-items:center}@media (max-width: 768px){.header-section-light .logo-alignment{justify-content:center !important}}@media (max-width: 768px){.header-section-light .logo svg{height:48px;width:181px}}.header-section-light .bs-logo img{height:60px}.header-section-light .header-menu{height:100%}.header-section-light .header-menu a,.header-section-light .header-menu a:active,.header-section-light .header-menu a:visited,.header-section-light .header-menu button{color:var(--hpTitleColor)}.header-section-light .header-menu .menu-item{height:100%;padding:8px;margin-right:12px;font-size:14px;line-height:150%;color:var(--hpTitleColor);cursor:pointer}.header-section-light .header-menu .menu-item:hover .primary-hover{color:var(--primaryColor)}.header-section-light .header-menu .menu-item:hover .external-menu .arrow::before{background-color:var(--primaryColor)}.header-section-light .header-menu .menu-item:hover .external-menu .arrow::after{border-color:var(--primaryColor)}.header-section-light .header-menu .menu-item:hover .mega-menu::after{border-color:var(--primaryColor);transform:rotate(-135deg) translateY(50%);bottom:-3px}.header-section-light .header-menu .menu-item:hover .mega-menu .menu-overlay{display:block;animation:fadeIn 0.3s}.header-section-light .header-menu .menu-item .external-menu{position:relative}.header-section-light .header-menu .menu-item .external-menu .arrow{margin-left:5px;height:12px;width:12px;color:var(--lightParaColor);transform:rotate(-90deg);position:absolute;right:-15px;top:5px}.header-section-light .header-menu .menu-item .external-menu .arrow:before{background-color:var(--lightParaColor);bottom:2px;content:'';height:9px;position:absolute;right:2px;transform-origin:bottom;width:1px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.header-section-light .header-menu .menu-item .external-menu .arrow:after{border-bottom-style:solid;border-bottom-width:1px;border-right-style:solid;border-right-width:1px;content:'';display:inline-block;height:6px;left:3px;position:absolute;top:4px;width:6px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay{cursor:default;display:none;padding:48px 0;color:black;left:0;position:absolute;top:87px;width:100vw;background:var(--white);box-shadow:0px 6px 6px -6px rgba(0,0,0,0.8)}@media (min-width: 768px){.header-section-light .header-menu .menu-item .mega-menu .menu-overlay{max-height:75vh}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .menu-overlay-container{align-items:flex-start}}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .container{display:flex}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .no-right-section .mega-menu-left-section{width:auto;max-width:unset}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-left-section{width:67%}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .gradient-container{background:linear-gradient(113.21deg, #ffedf6 0%, #ffedf6 .01%, #e4f7ff 30.94%, #fcffed 42%);position:absolute;height:100%;width:100%;z-index:0;top:0;bottom:0}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section{top:0;bottom:0;padding:0 24px;display:inline-block;overflow-y:auto;position:relative;z-index:1;-ms-overflow-style:none;scrollbar-width:none}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .title{text-transform:capitalize;font-weight:600;font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:24px;line-height:18px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row{display:flex;flex-direction:row}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .brand-assets{font-weight:600;font-size:12px;color:#473e5f;text-transform:uppercase;line-height:18px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .logo-assets{font-size:14px;color:#473e5f;margin:4px 0;height:54px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .get-assets-btn{color:var(--primaryColor);border:1px solid;background:none;border-radius:4px;padding:4px 25px;font-weight:600;font-size:10px;letter-spacing:0.05em;display:inline-block;height:auto;line-height:15px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .get-assets-btn:hover{background:var(--primaryColor);color:var(--white)}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .company-logo{border:1px solid white;width:104px;height:104px;border-radius:8px;display:flex;justify-content:center;align-items:center;margin-right:16px;transition:0.3s ease}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .company-logo img{width:64px;height:47px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-para{width:328px;line-height:21px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image{max-width:328px;height:auto;margin-bottom:16px;border-radius:8px;transition:0.3s ease}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image img{width:calc(100% - 6px);transform:translate(3px, 3px);height:100%;max-height:200px;border-radius:8px;display:inline-block;box-shadow:0 0 0 1px #ff43a433}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image img.news{object-fit:contain}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-para{width:328px;line-height:21px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section .learn-more{margin-top:16px;font-weight:600;font-size:12px;color:var(--primaryColor);height:41px;display:flex;align-items:center}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .company-logo,.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .menu-image{outline-offset:-3px;outline:3px solid var(--primaryColor);border-radius:11px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .company-logo img,.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .menu-image img{border:0}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .learn-more{text-decoration:underline}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .get-assets-btn{background:var(--primaryColor);color:var(--white)}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay .mega-menu-right-section::-webkit-scrollbar{display:none}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay-0{min-height:440px}.header-section-light .header-menu .menu-item .mega-menu .menu-overlay-1{min-height:464px}.header-section-light .header-menu .menu-item .mega-menu:after{margin-left:5px;content:'';border:solid var(--lightParaColor);border-width:0 1px 1px 0;display:inline-block;padding:3px;transform:rotate(45deg) translateY(-50%);bottom:0;position:relative;transition:0.2s ease-in-out}.header-section-light .header-menu .menu-item .mega-menu:hover::after{transform:rotate(-135deg) translateY(50%);bottom:-3px}.header-section-light .header-menu .menu-item.active .primary-hover{color:var(--primaryColor)}.header-section-light .header-menu .menu-item.active .mega-menu::after{border:solid var(--primaryColor);border-width:0 1px 1px 0}.header-section-light .header-menu .btn-item{width:0;transition:width 1s}.header-section-light .header-menu .btn-item .header-link{border:none;padding:0;white-space:nowrap;overflow:hidden;text-overflow:clip}.header-section-light .header-menu .show-experience-btn,.header-section-light .header-menu .show-schedule-demo-btn{width:200px;margin-left:34px}.header-section-light .header-menu .show-experience-btn .header-link,.header-section-light .header-menu .show-schedule-demo-btn .header-link{border:1px solid var(--primaryColor);color:var(--primaryColor);border-radius:6px;padding:11.5px 24px}.header-section-light .header-menu .show-experience-btn .header-link:hover,.header-section-light .header-menu .show-schedule-demo-btn .header-link:hover{border:1px solid var(--primaryColor)}.header-section-light .header-link{display:block;border:1px solid #1f1637;border-radius:6px;padding:11.5px 24px;background:transparent;font-weight:600;font-size:14px;line-height:150%;color:var(--hpTitleColor);cursor:pointer;font-family:'Poppins', sans-serif;text-align:center;width:100%;transition:all 0.4s ease-in-out 0s}.header-section-light .header-link:hover{color:white !important;background:var(--primaryColor);border-color:var(--primaryColor)}@media (max-width: 767px){.header-section-light .header-link{border-radius:8px;color:white !important;background:var(--primaryColor);border-color:var(--primaryColor)}}.header-section-light #humburger-icon{display:none;width:24px;height:24px}@media (max-width: 1025px){.header-section-light{position:fixed;top:0;width:100%;transition:top 0.3s;padding:16px 0}.header-section-light .container{justify-content:space-between;align-items:center}.header-section-light .header-menu{display:none}.header-section-light #humburger-icon{display:inline-block;cursor:pointer}.header-section-light .hamburger-menu-wrapper{background-color:white}}.header-section-light .hamburger-menu-wrapper{position:fixed;top:0;right:0;bottom:0;padding-bottom:24px;z-index:99;left:100%;overflow-y:auto;transition:left 0.5s;display:flex;background-position:center center;background-size:cover;height:100%;width:100%;font-size:18px;line-height:150%}.header-section-light .hamburger-menu-wrapper .demoBtnHamburger{position:fixed;bottom:24px;outline:24px solid #fff;background-color:#fff}.header-section-light .hamburger-menu-wrapper .hamburger-header{padding:16px;width:100%}.header-section-light .hamburger-menu-wrapper .hamburger-header .hamburger-close-block{width:24px;height:24px;background:url(\"https://cms-cdn.now.gg/cms-media/2022/02/Close.png\") -144px 0;background-size:cover;cursor:pointer;position:relative;top:0px;right:5px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item{position:relative;color:var(--hpTitleColor);width:100%;background:rgba(255,255,255,0.01);padding:16px 24px;justify-content:flex-start}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a{color:var(--hpTitleColor);display:flex;width:100%;align-items:flex-start;line-height:150%}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a:hover{color:var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a:hover p,.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a:hover .brand-assets,.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a:hover .logo-assets{color:var(--hpTitleColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item a:hover .company-logo{outline-offset:-3px;outline:3px solid var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu{position:relative}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu .arrow{margin-left:5px;height:12px;width:12px;color:var(--lightParaColor);transform:rotate(-90deg);position:absolute;right:-15px;top:5px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu .arrow:before{background-color:var(--lightParaColor);bottom:2px;content:'';height:9px;position:absolute;right:2px;transform-origin:bottom;width:1px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu .arrow:after{border-bottom-style:solid;border-bottom-width:1px;border-right-style:solid;border-right-width:1px;content:'';display:inline-block;height:6px;left:3px;position:absolute;top:4px;width:6px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay{cursor:default;display:none;padding:48px 0;color:black;left:0;position:absolute;top:87px;width:100vw;background:var(--white);box-shadow:0px 6px 6px -6px rgba(0,0,0,0.8)}@media (min-width: 768px){.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay{max-height:75vh}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .menu-overlay-container{align-items:flex-start}}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .container{display:flex}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .no-right-section .mega-menu-left-section{width:auto;max-width:unset}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-left-section{width:67%}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .gradient-container{background:linear-gradient(113.21deg, #ffedf6 0%, #ffedf6 .01%, #e4f7ff 30.94%, #fcffed 42%);position:absolute;height:100%;width:100%;z-index:0;top:0;bottom:0}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section{top:0;bottom:0;padding:0 24px;display:inline-block;overflow-y:auto;position:relative;z-index:1;-ms-overflow-style:none;scrollbar-width:none}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .title{text-transform:capitalize;font-weight:600;font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:24px;line-height:18px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row{display:flex;flex-direction:row}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .brand-assets{font-weight:600;font-size:12px;color:#473e5f;text-transform:uppercase;line-height:18px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .logo-assets{font-size:14px;color:#473e5f;margin:4px 0;height:54px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .get-assets-btn{color:var(--primaryColor);border:1px solid;background:none;border-radius:4px;padding:4px 25px;font-weight:600;font-size:10px;letter-spacing:0.05em;display:inline-block;height:auto;line-height:15px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .get-assets-btn:hover{background:var(--primaryColor);color:var(--white)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .company-logo{border:1px solid white;width:104px;height:104px;border-radius:8px;display:flex;justify-content:center;align-items:center;margin-right:16px;transition:0.3s ease}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .row .company-logo img{width:64px;height:47px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-para{width:328px;line-height:21px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image{max-width:328px;height:auto;margin-bottom:16px;border-radius:8px;transition:0.3s ease}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image img{width:calc(100% - 6px);transform:translate(3px, 3px);height:100%;max-height:200px;border-radius:8px;display:inline-block;box-shadow:0 0 0 1px #ff43a433}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-image img.news{object-fit:contain}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .menu-para{width:328px;line-height:21px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section .learn-more{margin-top:16px;font-weight:600;font-size:12px;color:var(--primaryColor);height:41px;display:flex;align-items:center}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .company-logo,.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .menu-image{outline-offset:-3px;outline:3px solid var(--primaryColor);border-radius:11px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .company-logo img,.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .menu-image img{border:0}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .learn-more{text-decoration:underline}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section:hover .get-assets-btn{background:var(--primaryColor);color:var(--white)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay .mega-menu-right-section::-webkit-scrollbar{display:none}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay-0{min-height:440px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu .menu-overlay-1{min-height:464px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu:after{margin-left:5px;content:'';border:solid var(--lightParaColor);border-width:0 1px 1px 0;display:inline-block;padding:3px;transform:rotate(45deg) translateY(-50%);bottom:0;position:relative;transition:0.2s ease-in-out}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .mega-menu:hover::after{transform:rotate(-135deg) translateY(50%);bottom:-3px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body{margin-left:-24px;padding-left:24px;width:100vw;max-height:auto}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container{padding:0 !important}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-left-section{padding-right:30px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-left-section .title{margin-top:16px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section{padding:16px 24px;flex-direction:column;background:linear-gradient(113.21deg, #ffedf6 0%, #ffedf6 .01%, #e4f7ff 60.94%, #fcffed 100%);width:auto;margin-left:-24px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .title{text-transform:capitalize;font-weight:600;font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:24px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row{display:flex;flex-direction:row}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row .company-logo{margin-right:16px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row .brand-assets{font-weight:600;font-size:12px;line-height:18px;text-transform:uppercase;margin:4px 0px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row .logo-assets{font-weight:normal;font-size:14px;line-height:150%;margin:4px 0px;min-height:44px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row .get-assets-btn{color:var(--primaryColor);border:1px solid;background:none;border-radius:4px;padding:4px 25px;font-weight:600;font-size:12px;letter-spacing:0.05em;height:auto;width:100%;display:flex;align-items:center;justify-content:center;line-height:15px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .row .get-assets-btn:hover{background:var(--primaryColor);color:var(--white)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .company-logo{border:1px solid white;width:104px;height:104px;border-radius:8px;display:flex;justify-content:center;align-items:center}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .company-logo img{width:64px;height:47px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-para{line-height:21px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-image{max-width:328px;height:auto;margin-bottom:16px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-image img{width:calc(100% - 6px);transform:translate(3px, 3px);height:100%;max-height:200px;border-radius:8px;box-shadow:0 0 0 1px #ff43a433;display:inline-block}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-image .nft{object-fit:cover}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-image:hover{outline-offset:-3px;outline:3px solid var(--primaryColor);border-radius:11px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .menu-image:hover img{border:0}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .body .container .mega-menu-right-section .learn-more{margin-top:16px;font-weight:600;font-size:12px;color:var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu{justify-content:space-between}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu .arrow{position:absolute;right:2px;top:6px;color:var(--paraColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item .external-menu .arrow:before{background-color:var(--paraColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item:hover::after{opacity:1}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item:hover .external-menu .arrow::before{background-color:var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item:hover .external-menu .arrow::after{border-color:var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item:hover .mega-menu::after{border-color:var(--primaryColor);transform:rotate(-135deg) translateY(50%);bottom:-3px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item.active .primary-hover,.header-section-light .hamburger-menu-wrapper .hamburger-menu-item.active .header>.text{position:relative;color:var(--primaryColor)}.header-section-light .hamburger-menu-wrapper .hamburger-menu-item.active::after{opacity:1}.header-section-light .hamburger-menu-wrapper .scheduleDemoBtnRef{width:calc(100% - 48px)}.header-section-light .hamburger-menu-wrapper .scheduleDemoBtnRef .hamburger-btn-item{height:56px;padding:11.5px 24px;width:100%;border:0;background:var(--primaryColor);box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:4px;font-weight:600;color:#fff;font-size:18px;line-height:150%}.header-section-light .hamburger-menu-wrapper .hamburger-menu-drop{width:100%;margin:auto;margin-top:0;padding-bottom:72px}.header-section-light .hamburger-menu-wrapper .hamburger-menu-drop>li:first-child{box-shadow:none !important}@media (max-width: 767px){.header-section-light{background-color:#fff}.header-section-light .bs-logo img{height:44px}}.header-section-light.open-menu .hamburger-menu-wrapper{transition:left 0.5s;left:0}.scroll-down .header-section-light{transition:transform 0.4s ease-in;transform:translate3d(0, -100%, 0)}.scroll-up .header-section-light{transform:none;transition:transform 0.4s ease-in-out;box-shadow:0px 4px 16px rgba(0,0,0,0.08)}#nprogress .bar{background:var(--primaryColor) !important}#nprogress .peg{box-shadow:0 0 10px var(--primaryColor) 0,0 0 5px var(--primaryColor) 0}.header-margin-top{top:85px !important}@media (max-width: 768px){.header-margin-top{top:109px !important}}.header-margin-top-unsupportedLang{top:85px !important}@media (max-width: 768px){.header-margin-top-unsupportedLang{top:133px !important}}\n",
          function (e) {
            return k(e.lang);
          }
        );
      t.default = function (e) {
        var t = e.hideHeaderLink,
          r = e.origin,
          m = e.headerLinks,
          l = Object(i.useRouter)().locale,
          h = Object(a.useState)(!1),
          s = h[0],
          u = h[1],
          c = Object(a.useState)(!1),
          d = c[0],
          g = c[1];
        Object(a.useEffect)(
          function () {
            s
              ? (document.body.classList.add("hamburger-open"),
                document
                  .querySelector(".header-section-light")
                  .classList.add("open-menu"),
                document.querySelector(".language") &&
                  (document.querySelector(".language").style.zIndex = "1"))
              : (document.body.classList.remove("hamburger-open"),
                document
                  .querySelector(".header-section-light")
                  .classList.remove("open-menu"),
                document.querySelector(".language") &&
                  (document.querySelector(".language").style.zIndex = "2"));
          },
          [s]
        );
        return Object(n.jsx)(O, {
          lang: l,
          children: Object(n.jsx)("header", {
            className: "header-section-light",
            children: Object(n.jsxs)("div", {
              className: "flex container ".concat(
                t ? "logo-alignment" : "space-btw"
              ),
              children: [
                Object(n.jsx)("a", {
                  href: "".concat("" !== Object(o.e)(l) ? Object(o.e)(l) : "/"),
                  className: "logo",
                  children: Object(n.jsx)("img", {
                    alt: "now.gg logo",
                    src: "https://cdn.now.gg/apps-content/img/nowgg-logo.png",
                    width: "181",
                    height: "48",
                  }),
                }),
                t
                  ? null
                  : Object(n.jsxs)(n.Fragment, {
                      children: [
                        Object(n.jsx)(y, { origin: r, headerLinks: m }),
                        Object(n.jsx)("div", {
                          onClick: function () {
                            u(!0), g(!0);
                          },
                          className: "hamburger-block",
                          id: "humburger-icon",
                          children: Object(n.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            children: [
                              Object(n.jsx)("rect", {
                                x: "2",
                                y: "11",
                                width: "20",
                                height: "1",
                                rx: "0.5",
                                fill: "#FF42A5",
                              }),
                              Object(n.jsx)("rect", {
                                x: "2",
                                y: "18",
                                width: "20",
                                height: "1",
                                rx: "0.5",
                                fill: "#FF42A5",
                              }),
                              Object(n.jsx)("rect", {
                                x: "2",
                                y: "4",
                                width: "20",
                                height: "1",
                                rx: "0.5",
                                fill: "#FF42A5",
                              }),
                            ],
                          }),
                        }),
                        d &&
                          Object(n.jsx)(j, {
                            onClose: function () {
                              u(!1),
                                setTimeout(function () {
                                  g(!1);
                                }, 500);
                            },
                            transition: s,
                            origin: r,
                            headerLinks: m,
                          }),
                      ],
                    }),
              ],
            }),
          }),
        });
      };
    },
  },
]);
