(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [15],
  {
    "/Pgi": function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return i;
      });
      var n = r("q1tI");
      function i(e, t) {
        return "undefined" === typeof window
          ? Object(n.useEffect)(e, t)
          : Object(n.useLayoutEffect)(e, t);
      }
    },
    Ff2n: function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      r.d(t, "a", function () {
        return n;
      });
    },
    KQm4: function (e, t, r) {
      "use strict";
      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function i(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return n(e);
          })(e) ||
          (function (e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" === typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? n(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      r.d(t, "a", function () {
        return i;
      });
    },
    Ndxo: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return c;
      });
      var n = r("q1tI"),
        i = r.n(n),
        a = r("tu8O"),
        o = r("/Pgi"),
        l = ["tag", "children", "className", "swiper", "zoom", "virtualIndex"];
      function s() {
        return (s =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var c = Object(n.forwardRef)(function (e, t) {
        var r,
          c = void 0 === e ? {} : e,
          u = c.tag,
          d = void 0 === u ? "div" : u,
          p = c.children,
          f = c.className,
          b = void 0 === f ? "" : f,
          v = c.swiper,
          m = c.zoom,
          g = c.virtualIndex,
          h = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(c, l),
          O = Object(n.useRef)(null),
          y = Object(n.useState)("swiper-slide"),
          j = y[0],
          w = y[1];
        function E(e, t, r) {
          t === O.current && w(r);
        }
        Object(o.a)(function () {
          if ((t && (t.current = O.current), O.current && v)) {
            if (!v.destroyed)
              return (
                v.on("_slideClass", E),
                function () {
                  v && v.off("_slideClass", E);
                }
              );
            "swiper-slide" !== j && w("swiper-slide");
          }
        }),
          Object(o.a)(
            function () {
              v && O.current && w(v.getSlideClasses(O.current));
            },
            [v]
          ),
          "function" === typeof p &&
            (r = {
              isActive:
                j.indexOf("swiper-slide-active") >= 0 ||
                j.indexOf("swiper-slide-duplicate-active") >= 0,
              isVisible: j.indexOf("swiper-slide-visible") >= 0,
              isDuplicate: j.indexOf("swiper-slide-duplicate") >= 0,
              isPrev:
                j.indexOf("swiper-slide-prev") >= 0 ||
                j.indexOf("swiper-slide-duplicate-prev") >= 0,
              isNext:
                j.indexOf("swiper-slide-next") >= 0 ||
                j.indexOf("swiper-slide-duplicate-next") >= 0,
            });
        var _ = function () {
          return "function" === typeof p ? p(r) : p;
        };
        return i.a.createElement(
          d,
          s(
            {
              ref: O,
              className: Object(a.f)(j + (b ? " " + b : "")),
              "data-swiper-slide-index": g,
            },
            h
          ),
          m
            ? i.a.createElement(
                "div",
                {
                  className: "swiper-zoom-container",
                  "data-swiper-zoom": "number" === typeof m ? m : void 0,
                },
                _()
              )
            : _()
        );
      });
      c.displayName = "SwiperSlide";
    },
    QfqV: function (e, t, r) {},
    bKGj: function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("vOnD").b.svg.withConfig({
          displayName: "style__SvgStyleWrapper",
          componentId: "sc-4wcfru-0",
        })([
          "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.circle{stroke-dasharray:90;stroke-dashoffset:90;stroke-linecap:round;transform-origin:center;animation:animate-stroke 1.5s ease infinite,rotation 1.5s linear infinite;}.circle-2{transform:rotate(-20deg);animation:animate-stroke 1.5s ease-in infinite,rotation2 1.5s linear infinite;}.circle-3{transform:rotate(-60deg);animation:animate-stroke 1.5s ease-in infinite,rotation3 1.5s linear infinite;}@keyframes animate-stroke{50%{stroke-dashoffset:0;}100%{stroke-dashoffset:-90;}}@keyframes rotation{0%{}100%{transform:rotate(360deg);}}@keyframes rotation2{0%{}100%{transform:rotate(340deg);}}@keyframes rotation3{0%{}100%{transform:rotate(300deg);}}",
        ]);
      t.a = function () {
        return Object(n.jsxs)(i, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          className: "img-loader",
          children: [
            Object(n.jsx)("style", { type: "text/css" }),
            Object(n.jsx)("circle", {
              className: "circle circle-3",
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "#B3D661",
              strokeWidth: "8",
            }),
            Object(n.jsx)("circle", {
              className: "circle circle-2",
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "#51A5C9",
              strokeWidth: "8",
            }),
            Object(n.jsx)("circle", {
              className: "circle circle-1",
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "#FF42A5",
              strokeWidth: "8",
            }),
          ],
        });
      };
    },
    "hL++": function (e, t, r) {
      "use strict";
      var n = r("nKUr"),
        i = r("rePB"),
        a = r("KQm4"),
        o = r("Ff2n"),
        l = r("q1tI"),
        s = r("JeI0"),
        c = r.n(s),
        u = r("bKGj"),
        d = r("vOnD").b.div.withConfig({
          displayName: "style__PictureStyleWrapper",
          componentId: "sc-3zuk8d-0",
        })([
          "position:relative;img{max-width:100%;height:auto;z-index:1;position:relative;}",
        ]);
      function p(e, t) {
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
      function f(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(r), !0).forEach(function (t) {
                Object(i.a)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      t.a = function (e) {
        var t = e.lazyload,
          r = void 0 === t || t,
          i = e.lazyLoadClass,
          s = void 0 === i ? "" : i,
          p = Object(o.a)(e, ["lazyload", "lazyLoadClass"]),
          b = Object(l.useState)(!1),
          v = b[0],
          m = b[1],
          g = Object(a.a)(p.children),
          h = g.findIndex(function (e) {
            return "img" === e.type;
          }),
          O = g.splice(h, 1).pop();
        function y(e) {
          var t = e.src,
            r = e.fallbackSrc,
            i = e.alt,
            a = e.className;
          return Object(n.jsx)("div", {
            className: "image",
            dangerouslySetInnerHTML: {
              __html: '\n                <img alt="'
                .concat(i, '" src="')
                .concat(t, '"\n                data-fallback=')
                .concat(
                  r,
                  ' \n                onerror="this.onerror=null;this.src=this.dataset.fallback;"\n                class="'
                )
                .concat(
                  a,
                  "\" \n                width='261'\n                height='364'\n                />\n              "
                ),
            },
          });
        }
        return Object(n.jsx)(n.Fragment, {
          children: r
            ? Object(n.jsxs)(d, {
                className: "lazyload-container ".concat(s),
                children: [
                  Object(n.jsx)(c.a, {
                    children: Object(n.jsxs)("picture", {
                      children: [
                        g.map(function (e) {
                          return e;
                        }),
                        Object(n.jsx)(
                          "img",
                          f(
                            {
                              onLoad: function () {
                                m(!0);
                              },
                              onError: function (e) {
                                e.target.parentNode.removeChild(e.target);
                              },
                            },
                            O.props
                          )
                        ),
                      ],
                    }),
                  }),
                  !v && Object(n.jsx)(u.a, {}),
                ],
              })
            : Object(n.jsx)(d, {
                className: "lazyload-container",
                children: Object(n.jsxs)("picture", {
                  children: [
                    g.map(function (e) {
                      return e;
                    }),
                    Object(n.jsx)(
                      y,
                      f(
                        f({}, O.props),
                        {},
                        {
                          fallbackSrc:
                            "https://cdn.now.gg/apps-content/img/homepage/app-tile.png",
                          className: "logo-img",
                        }
                      )
                    ),
                  ],
                }),
              }),
        });
      };
    },
    tu8O: function (e, t, r) {
      "use strict";
      function n(e) {
        return (
          "object" === typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function i(e, t) {
        var r = ["__proto__", "constructor", "prototype"];
        Object.keys(t)
          .filter(function (e) {
            return r.indexOf(e) < 0;
          })
          .forEach(function (r) {
            "undefined" === typeof e[r]
              ? (e[r] = t[r])
              : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0
              ? t[r].__swiper__
                ? (e[r] = t[r])
                : i(e[r], t[r])
              : (e[r] = t[r]);
          });
      }
      function a(e) {
        return (
          void 0 === e && (e = {}),
          e.navigation &&
            "undefined" === typeof e.navigation.nextEl &&
            "undefined" === typeof e.navigation.prevEl
        );
      }
      function o(e) {
        return (
          void 0 === e && (e = {}),
          e.pagination && "undefined" === typeof e.pagination.el
        );
      }
      function l(e) {
        return (
          void 0 === e && (e = {}),
          e.scrollbar && "undefined" === typeof e.scrollbar.el
        );
      }
      function s(e) {
        void 0 === e && (e = "");
        var t = e
            .split(" ")
            .map(function (e) {
              return e.trim();
            })
            .filter(function (e) {
              return !!e;
            }),
          r = [];
        return (
          t.forEach(function (e) {
            r.indexOf(e) < 0 && r.push(e);
          }),
          r.join(" ")
        );
      }
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "a", function () {
          return i;
        }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "d", function () {
          return o;
        }),
        r.d(t, "e", function () {
          return l;
        }),
        r.d(t, "f", function () {
          return s;
        });
    },
    xqva: function (e, t, r) {
      "use strict";
      r.d(t, "a", function () {
        return v;
      });
      var n = r("q1tI"),
        i = r.n(n),
        a = r("bTu8"),
        o = r("tu8O"),
        l = [
          "init",
          "_direction",
          "touchEventsTarget",
          "initialSlide",
          "_speed",
          "cssMode",
          "updateOnWindowResize",
          "resizeObserver",
          "nested",
          "focusableElements",
          "_enabled",
          "_width",
          "_height",
          "preventInteractionOnTransition",
          "userAgent",
          "url",
          "_edgeSwipeDetection",
          "_edgeSwipeThreshold",
          "_freeMode",
          "_freeModeMomentum",
          "_freeModeMomentumRatio",
          "_freeModeMomentumBounce",
          "_freeModeMomentumBounceRatio",
          "_freeModeMomentumVelocityRatio",
          "_freeModeSticky",
          "_freeModeMinimumVelocity",
          "_autoHeight",
          "setWrapperSize",
          "virtualTranslate",
          "_effect",
          "breakpoints",
          "_spaceBetween",
          "_slidesPerView",
          "_slidesPerColumn",
          "_slidesPerColumnFill",
          "_slidesPerGroup",
          "_slidesPerGroupSkip",
          "_centeredSlides",
          "_centeredSlidesBounds",
          "_slidesOffsetBefore",
          "_slidesOffsetAfter",
          "normalizeSlideIndex",
          "_centerInsufficientSlides",
          "_watchOverflow",
          "roundLengths",
          "touchRatio",
          "touchAngle",
          "simulateTouch",
          "_shortSwipes",
          "_longSwipes",
          "longSwipesRatio",
          "longSwipesMs",
          "_followFinger",
          "allowTouchMove",
          "_threshold",
          "touchMoveStopPropagation",
          "touchStartPreventDefault",
          "touchStartForcePreventDefault",
          "touchReleaseOnEdges",
          "uniqueNavElements",
          "_resistance",
          "_resistanceRatio",
          "_watchSlidesProgress",
          "_watchSlidesVisibility",
          "_grabCursor",
          "preventClicks",
          "preventClicksPropagation",
          "_slideToClickedSlide",
          "_preloadImages",
          "updateOnImagesReady",
          "_loop",
          "_loopAdditionalSlides",
          "_loopedSlides",
          "_loopFillGroupWithBlank",
          "loopPreventsSlide",
          "_allowSlidePrev",
          "_allowSlideNext",
          "_swipeHandler",
          "_noSwiping",
          "noSwipingClass",
          "noSwipingSelector",
          "passiveListeners",
          "containerModifierClass",
          "slideClass",
          "slideBlankClass",
          "slideActiveClass",
          "slideDuplicateActiveClass",
          "slideVisibleClass",
          "slideDuplicateClass",
          "slideNextClass",
          "slideDuplicateNextClass",
          "slidePrevClass",
          "slideDuplicatePrevClass",
          "wrapperClass",
          "runCallbacksOnInit",
          "observer",
          "observeParents",
          "observeSlideChildren",
          "a11y",
          "autoplay",
          "_controller",
          "coverflowEffect",
          "cubeEffect",
          "fadeEffect",
          "flipEffect",
          "hashNavigation",
          "history",
          "keyboard",
          "lazy",
          "mousewheel",
          "_navigation",
          "_pagination",
          "parallax",
          "_scrollbar",
          "_thumbs",
          "virtual",
          "zoom",
        ];
      function s(e, t) {
        var r = t.slidesPerView;
        if (t.breakpoints) {
          var n = a.a.prototype.getBreakpoint(t.breakpoints),
            i = n in t.breakpoints ? t.breakpoints[n] : void 0;
          i && i.slidesPerView && (r = i.slidesPerView);
        }
        var o = Math.ceil(parseFloat(t.loopedSlides || r, 10));
        return (o += t.loopAdditionalSlides) > e.length && (o = e.length), o;
      }
      function c(e) {
        var t = [];
        return (
          i.a.Children.toArray(e).forEach(function (e) {
            e.type && "SwiperSlide" === e.type.displayName
              ? t.push(e)
              : e.props &&
                e.props.children &&
                c(e.props.children).forEach(function (e) {
                  return t.push(e);
                });
          }),
          t
        );
      }
      function u(e) {
        var t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": [],
          };
        return (
          i.a.Children.toArray(e).forEach(function (e) {
            if (e.type && "SwiperSlide" === e.type.displayName) t.push(e);
            else if (e.props && e.props.slot && r[e.props.slot])
              r[e.props.slot].push(e);
            else if (e.props && e.props.children) {
              var n = c(e.props.children);
              n.length > 0
                ? n.forEach(function (e) {
                    return t.push(e);
                  })
                : r["container-end"].push(e);
            } else r["container-end"].push(e);
          }),
          { slides: t, slots: r }
        );
      }
      function d(e) {
        var t,
          r,
          n,
          i,
          a,
          l = e.swiper,
          s = e.slides,
          c = e.passedParams,
          u = e.changedParams,
          d = e.nextEl,
          p = e.prevEl,
          f = e.scrollbarEl,
          b = e.paginationEl,
          v = u.filter(function (e) {
            return "children" !== e && "direction" !== e;
          }),
          m = l.params,
          g = l.pagination,
          h = l.navigation,
          O = l.scrollbar,
          y = l.virtual,
          j = l.thumbs;
        u.includes("thumbs") &&
          c.thumbs &&
          c.thumbs.swiper &&
          m.thumbs &&
          !m.thumbs.swiper &&
          (t = !0),
          u.includes("controller") &&
            c.controller &&
            c.controller.control &&
            m.controller &&
            !m.controller.control &&
            (r = !0),
          u.includes("pagination") &&
            c.pagination &&
            (c.pagination.el || b) &&
            (m.pagination || !1 === m.pagination) &&
            g &&
            !g.el &&
            (n = !0),
          u.includes("scrollbar") &&
            c.scrollbar &&
            (c.scrollbar.el || f) &&
            (m.scrollbar || !1 === m.scrollbar) &&
            O &&
            !O.el &&
            (i = !0),
          u.includes("navigation") &&
            c.navigation &&
            (c.navigation.prevEl || p) &&
            (c.navigation.nextEl || d) &&
            (m.navigation || !1 === m.navigation) &&
            h &&
            !h.prevEl &&
            !h.nextEl &&
            (a = !0);
        (v.forEach(function (e) {
          if (Object(o.b)(m[e]) && Object(o.b)(c[e])) Object(o.a)(m[e], c[e]);
          else {
            var t = c[e];
            (!0 !== t && !1 !== t) ||
            ("navigation" !== e && "pagination" !== e && "scrollbar" !== e)
              ? (m[e] = c[e])
              : !1 === t &&
                l[(r = e)] &&
                (l[r].destroy(),
                "navigation" === r
                  ? ((m[r].prevEl = void 0),
                    (m[r].nextEl = void 0),
                    (l[r].prevEl = void 0),
                    (l[r].nextEl = void 0))
                  : ((m[r].el = void 0), (l[r].el = void 0)));
          }
          var r;
        }),
        u.includes("children") && y && m.virtual.enabled
          ? ((y.slides = s), y.update(!0))
          : u.includes("children") &&
            l.lazy &&
            l.params.lazy.enabled &&
            l.lazy.load(),
        t) &&
          j.init() &&
          j.update(!0);
        r && (l.controller.control = m.controller.control),
          n && (b && (m.pagination.el = b), g.init(), g.render(), g.update()),
          i &&
            (f && (m.scrollbar.el = f),
            O.init(),
            O.updateSize(),
            O.setTranslate()),
          a &&
            (d && (m.navigation.nextEl = d),
            p && (m.navigation.prevEl = p),
            h.init(),
            h.update()),
          u.includes("allowSlideNext") && (l.allowSlideNext = c.allowSlideNext),
          u.includes("allowSlidePrev") && (l.allowSlidePrev = c.allowSlidePrev),
          u.includes("direction") && l.changeDirection(c.direction, !1),
          l.update();
      }
      var p = r("/Pgi"),
        f = ["className", "tag", "wrapperTag", "children", "onSwiper"];
      function b() {
        return (b =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var v = Object(n.forwardRef)(function (e, t) {
        var r = void 0 === e ? {} : e,
          c = r.className,
          v = r.tag,
          m = void 0 === v ? "div" : v,
          g = r.wrapperTag,
          h = void 0 === g ? "div" : g,
          O = r.children,
          y = r.onSwiper,
          j = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(r, f),
          w = !1,
          E = Object(n.useState)("swiper-container"),
          _ = E[0],
          x = E[1],
          S = Object(n.useState)(null),
          k = S[0],
          P = S[1],
          N = Object(n.useState)(!1),
          C = N[0],
          z = N[1],
          M = Object(n.useRef)(!1),
          I = Object(n.useRef)(null),
          R = Object(n.useRef)(null),
          A = Object(n.useRef)(null),
          D = Object(n.useRef)(null),
          B = Object(n.useRef)(null),
          T = Object(n.useRef)(null),
          F = Object(n.useRef)(null),
          V = Object(n.useRef)(null),
          G = (function (e) {
            void 0 === e && (e = {});
            var t = { on: {} },
              r = {},
              n = {};
            Object(o.a)(t, a.a.defaults),
              Object(o.a)(t, a.a.extendedDefaults),
              (t._emitClasses = !0),
              (t.init = !1);
            var i = {},
              s = l.map(function (e) {
                return e.replace(/_/, "");
              });
            return (
              Object.keys(e).forEach(function (a) {
                s.indexOf(a) >= 0
                  ? Object(o.b)(e[a])
                    ? ((t[a] = {}),
                      (n[a] = {}),
                      Object(o.a)(t[a], e[a]),
                      Object(o.a)(n[a], e[a]))
                    : ((t[a] = e[a]), (n[a] = e[a]))
                  : 0 === a.search(/on[A-Z]/) && "function" === typeof e[a]
                  ? (r["" + a[2].toLowerCase() + a.substr(3)] = e[a])
                  : (i[a] = e[a]);
              }),
              ["navigation", "pagination", "scrollbar"].forEach(function (e) {
                !0 === t[e] && (t[e] = {}), !1 === t[e] && delete t[e];
              }),
              { params: t, passedParams: n, rest: i, events: r }
            );
          })(j),
          L = G.params,
          W = G.passedParams,
          q = G.rest,
          K = G.events,
          H = u(O),
          U = H.slides,
          J = H.slots,
          Q = function () {
            z(!C);
          };
        if (
          (Object.assign(L.on, {
            _containerClasses: function (e, t) {
              x(t);
            },
          }),
          !I.current &&
            (Object.assign(L.on, K),
            (w = !0),
            (R.current = (function (e) {
              return new a.a(e);
            })(L)),
            (R.current.loopCreate = function () {}),
            (R.current.loopDestroy = function () {}),
            L.loop && (R.current.loopedSlides = s(U, L)),
            R.current.virtual && R.current.params.virtual.enabled))
        ) {
          R.current.virtual.slides = U;
          var Z = { cache: !1, renderExternal: P, renderExternalUpdate: !1 };
          Object(o.a)(R.current.params.virtual, Z),
            Object(o.a)(R.current.originalParams.virtual, Z);
        }
        R.current && R.current.on("_beforeBreakpoint", Q);
        return (
          Object(n.useEffect)(function () {
            return function () {
              R.current && R.current.off("_beforeBreakpoint", Q);
            };
          }),
          Object(n.useEffect)(function () {
            !M.current &&
              R.current &&
              (R.current.emitSlidesClasses(), (M.current = !0));
          }),
          Object(p.a)(function () {
            if ((t && (t.current = I.current), I.current))
              return (
                (function (e, t) {
                  var r = e.el,
                    n = e.nextEl,
                    i = e.prevEl,
                    a = e.paginationEl,
                    l = e.scrollbarEl,
                    s = e.swiper;
                  Object(o.c)(t) &&
                    n &&
                    i &&
                    ((s.params.navigation.nextEl = n),
                    (s.originalParams.navigation.nextEl = n),
                    (s.params.navigation.prevEl = i),
                    (s.originalParams.navigation.prevEl = i)),
                    Object(o.d)(t) &&
                      a &&
                      ((s.params.pagination.el = a),
                      (s.originalParams.pagination.el = a)),
                    Object(o.e)(t) &&
                      l &&
                      ((s.params.scrollbar.el = l),
                      (s.originalParams.scrollbar.el = l)),
                    s.init(r);
                })(
                  {
                    el: I.current,
                    nextEl: B.current,
                    prevEl: T.current,
                    paginationEl: F.current,
                    scrollbarEl: V.current,
                    swiper: R.current,
                  },
                  L
                ),
                y && y(R.current),
                function () {
                  R.current &&
                    !R.current.destroyed &&
                    R.current.destroy(!0, !1);
                }
              );
          }, []),
          Object(p.a)(function () {
            !w &&
              K &&
              R.current &&
              Object.keys(K).forEach(function (e) {
                R.current.on(e, K[e]);
              });
            var e = (function (e, t, r, n) {
              var i = [];
              if (!t) return i;
              var a = function (e) {
                  i.indexOf(e) < 0 && i.push(e);
                },
                s = n.map(function (e) {
                  return e.key;
                }),
                c = r.map(function (e) {
                  return e.key;
                });
              return (
                s.join("") !== c.join("") && a("children"),
                n.length !== r.length && a("children"),
                l
                  .filter(function (e) {
                    return "_" === e[0];
                  })
                  .map(function (e) {
                    return e.replace(/_/, "");
                  })
                  .forEach(function (r) {
                    if (r in e && r in t)
                      if (Object(o.b)(e[r]) && Object(o.b)(t[r])) {
                        var n = Object.keys(e[r]),
                          i = Object.keys(t[r]);
                        n.length !== i.length
                          ? a(r)
                          : (n.forEach(function (n) {
                              e[r][n] !== t[r][n] && a(r);
                            }),
                            i.forEach(function (n) {
                              e[r][n] !== t[r][n] && a(r);
                            }));
                      } else e[r] !== t[r] && a(r);
                  }),
                i
              );
            })(W, A.current, U, D.current);
            return (
              (A.current = W),
              (D.current = U),
              e.length &&
                R.current &&
                !R.current.destroyed &&
                d({
                  swiper: R.current,
                  slides: U,
                  passedParams: W,
                  changedParams: e,
                  nextEl: B.current,
                  prevEl: T.current,
                  scrollbarEl: V.current,
                  paginationEl: F.current,
                }),
              function () {
                K &&
                  R.current &&
                  Object.keys(K).forEach(function (e) {
                    R.current.off(e, K[e]);
                  });
              }
            );
          }),
          Object(p.a)(
            function () {
              var e;
              !(e = R.current) ||
                e.destroyed ||
                !e.params.virtual ||
                (e.params.virtual && !e.params.virtual.enabled) ||
                (e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.lazy && e.params.lazy.enabled && e.lazy.load(),
                e.parallax &&
                  e.params.parallax &&
                  e.params.parallax.enabled &&
                  e.parallax.setTranslate());
            },
            [k]
          ),
          i.a.createElement(
            m,
            b({ ref: I, className: Object(o.f)(_ + (c ? " " + c : "")) }, q),
            J["container-start"],
            Object(o.c)(L) &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement("div", {
                  ref: T,
                  className: "swiper-button-prev",
                }),
                i.a.createElement("div", {
                  ref: B,
                  className: "swiper-button-next",
                })
              ),
            Object(o.e)(L) &&
              i.a.createElement("div", {
                ref: V,
                className: "swiper-scrollbar",
              }),
            Object(o.d)(L) &&
              i.a.createElement("div", {
                ref: F,
                className: "swiper-pagination",
              }),
            i.a.createElement(
              h,
              { className: "swiper-wrapper" },
              J["wrapper-start"],
              L.virtual
                ? (function (e, t, r) {
                    var n;
                    if (!r) return null;
                    var a = e.isHorizontal()
                      ? (((n = {})[e.rtlTranslate ? "right" : "left"] =
                          r.offset + "px"),
                        n)
                      : { top: r.offset + "px" };
                    return t
                      .filter(function (e, t) {
                        return t >= r.from && t <= r.to;
                      })
                      .map(function (t) {
                        return i.a.cloneElement(t, { swiper: e, style: a });
                      });
                  })(R.current, U, k)
                : !L.loop || (R.current && R.current.destroyed)
                ? U.map(function (e) {
                    return i.a.cloneElement(e, { swiper: R.current });
                  })
                : (function (e, t, r) {
                    var n = t.map(function (t, r) {
                      return i.a.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": r,
                      });
                    });
                    function a(e, t, n) {
                      return i.a.cloneElement(e, {
                        key: e.key + "-duplicate-" + t + "-" + n,
                        className:
                          (e.props.className || "") +
                          " " +
                          r.slideDuplicateClass,
                      });
                    }
                    if (r.loopFillGroupWithBlank) {
                      var o = r.slidesPerGroup - (n.length % r.slidesPerGroup);
                      if (o !== r.slidesPerGroup)
                        for (var l = 0; l < o; l += 1) {
                          var c = i.a.createElement("div", {
                            className: r.slideClass + " " + r.slideBlankClass,
                          });
                          n.push(c);
                        }
                    }
                    "auto" !== r.slidesPerView ||
                      r.loopedSlides ||
                      (r.loopedSlides = n.length);
                    var u = s(n, r),
                      d = [],
                      p = [];
                    return (
                      n.forEach(function (e, t) {
                        t < u && p.push(a(e, t, "prepend")),
                          t < n.length &&
                            t >= n.length - u &&
                            d.push(a(e, t, "append"));
                      }),
                      e && (e.loopedSlides = u),
                      [].concat(d, n, p)
                    );
                  })(R.current, U, L),
              J["wrapper-end"]
            ),
            J["container-end"]
          )
        );
      });
      v.displayName = "Swiper";
    },
  },
]);
