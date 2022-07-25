/*! For license information please see app.6000a419.js.LICENSE.txt */
!(function (e) {
  function t(t) {
    for (
      var o, i, c = t[0], s = t[1], d = t[2], l = 0, u = [];
      l < c.length;
      l++
    )
      (i = c[l]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && u.push(r[i][0]),
        (r[i] = 0);
    for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o]);
    for (p && p(t); u.length; ) u.shift()();
    return a.push.apply(a, d || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], o = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== r[c] && (o = !1);
      }
      o && (a.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var o = {},
    i = { 3: 0 },
    r = { 3: 0 },
    a = [];
  function c(e) {
    return (
      s.p +
      "" +
      ({}[e] || e) +
      "." +
      {
        0: "f5c8902a",
        1: "5cc52498",
        2: "e6230664",
        5: "e4ae5237",
        6: "e2138752",
        7: "3e20fa35",
        8: "21ff080e",
      }[e] +
      ".chunk.js"
    );
  }
  function s(t) {
    if (o[t]) return o[t].exports;
    var n = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [];
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        { 0: 1, 1: 1 }[e] &&
        t.push(
          (i[e] = new Promise(function (t, n) {
            for (
              var o =
                  ({}[e] || e) +
                  "." +
                  {
                    0: "f1a5cc53",
                    1: "6af172a3",
                    2: "31d6cfe0",
                    5: "31d6cfe0",
                    6: "31d6cfe0",
                    7: "31d6cfe0",
                    8: "31d6cfe0",
                  }[e] +
                  ".chunk.css",
                r = s.p + o,
                a = document.getElementsByTagName("link"),
                c = 0;
              c < a.length;
              c++
            ) {
              var d =
                (u = a[c]).getAttribute("data-href") || u.getAttribute("href");
              if ("stylesheet" === u.rel && (d === o || d === r)) return t();
            }
            var l = document.getElementsByTagName("style");
            for (c = 0; c < l.length; c++) {
              var u;
              if ((d = (u = l[c]).getAttribute("data-href")) === o || d === r)
                return t();
            }
            var p = document.createElement("link");
            (p.rel = "stylesheet"),
              (p.type = "text/css"),
              (p.onload = t),
              (p.onerror = function (t) {
                var o = (t && t.target && t.target.src) || r,
                  a = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + o + ")"
                  );
                (a.code = "CSS_CHUNK_LOAD_FAILED"),
                  (a.request = o),
                  delete i[e],
                  p.parentNode.removeChild(p),
                  n(a);
              }),
              (p.href = r),
              document.getElementsByTagName("head")[0].appendChild(p);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var n = r[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var o = new Promise(function (t, o) {
          n = r[e] = [t, o];
        });
        t.push((n[2] = o));
        var a = new Error();
        var d = (function t(n, o) {
          var i,
            d = document.createElement("script"),
            l = "&retry-attempt=" + (3 - o + 1);
          (d.charset = "utf-8"),
            (d.timeout = 120),
            s.nc && d.setAttribute("nonce", s.nc),
            (d.src = n),
            (i = function (n) {
              (d.onerror = d.onload = null), clearTimeout(u);
              var i = r[e];
              if (0 !== i)
                if (i)
                  if (0 === o) {
                    var s = n && ("load" === n.type ? "missing" : n.type),
                      p = n && n.target && n.target.src;
                    (a.message =
                      "Loading chunk " +
                      e +
                      " failed after 3 retries.\n(" +
                      s +
                      ": " +
                      p +
                      ")"),
                      (a.name = "ChunkLoadError"),
                      (a.type = s),
                      (a.request = p),
                      window.location.reload(),
                      i[1](a),
                      (r[e] = void 0);
                  } else
                    setTimeout(function () {
                      var n = "cache-bust=true" + l,
                        i = t(c(e) + "?" + n, o - 1);
                      document.head.appendChild(i);
                    }, 0);
                else r[e] = void 0;
            });
          var u = setTimeout(function () {
            i({ type: "timeout", target: d });
          }, 12e4);
          return (d.onerror = d.onload = i), d;
        })(c(e), 3);
        document.head.appendChild(d);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = o),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/play/"),
    (s.oe = function (e) {
      throw e;
    });
  var d = (window.webpackJsonp = window.webpackJsonp || []),
    l = d.push.bind(d);
  (d.push = t), (d = d.slice());
  for (var u = 0; u < d.length; u++) t(d[u]);
  var p = l;
  a.push([518, 4]), n();
})({
  0: function (e, t, n) {
    "use strict";
    n.d(t, "k", function () {
      return je;
    }),
      n.d(t, "H", function () {
        return xe;
      }),
      n.d(t, "qb", function () {
        return Me;
      }),
      n.d(t, "nb", function () {
        return Te;
      }),
      n.d(t, "I", function () {
        return Le;
      }),
      n.d(t, "cb", function () {
        return Ae;
      }),
      n.d(t, "ab", function () {
        return _e;
      }),
      n.d(t, "d", function () {
        return Ce;
      }),
      n.d(t, "c", function () {
        return Pe;
      }),
      n.d(t, "F", function () {
        return De;
      }),
      n.d(t, "E", function () {
        return Re;
      }),
      n.d(t, "p", function () {
        return Be;
      }),
      n.d(t, "q", function () {
        return Ne;
      }),
      n.d(t, "n", function () {
        return qe;
      }),
      n.d(t, "L", function () {
        return We;
      }),
      n.d(t, "a", function () {
        return Fe;
      }),
      n.d(t, "rb", function () {
        return Ke;
      }),
      n.d(t, "M", function () {
        return ze;
      }),
      n.d(t, "W", function () {
        return Ye;
      }),
      n.d(t, "g", function () {
        return Xe;
      }),
      n.d(t, "G", function () {
        return Qe;
      }),
      n.d(t, "P", function () {
        return $e;
      }),
      n.d(t, "J", function () {
        return et;
      }),
      n.d(t, "tb", function () {
        return tt;
      }),
      n.d(t, "A", function () {
        return nt;
      }),
      n.d(t, "lb", function () {
        return ot;
      }),
      n.d(t, "y", function () {
        return it;
      }),
      n.d(t, "gb", function () {
        return rt;
      }),
      n.d(t, "mb", function () {
        return at;
      }),
      n.d(t, "t", function () {
        return ct;
      }),
      n.d(t, "B", function () {
        return st;
      }),
      n.d(t, "i", function () {
        return dt;
      }),
      n.d(t, "l", function () {
        return lt;
      }),
      n.d(t, "o", function () {
        return pt;
      }),
      n.d(t, "T", function () {
        return wt;
      }),
      n.d(t, "U", function () {
        return vt;
      }),
      n.d(t, "Bb", function () {
        return gt;
      }),
      n.d(t, "wb", function () {
        return bt;
      }),
      n.d(t, "e", function () {
        return yt;
      }),
      n.d(t, "Z", function () {
        return ht;
      }),
      n.d(t, "zb", function () {
        return St;
      }),
      n.d(t, "Cb", function () {
        return Ot;
      }),
      n.d(t, "xb", function () {
        return kt;
      }),
      n.d(t, "vb", function () {
        return Et;
      }),
      n.d(t, "S", function () {
        return jt;
      }),
      n.d(t, "h", function () {
        return Tt;
      }),
      n.d(t, "Y", function () {
        return Lt;
      }),
      n.d(t, "N", function () {
        return At;
      }),
      n.d(t, "V", function () {
        return _t;
      }),
      n.d(t, "f", function () {
        return Pt;
      }),
      n.d(t, "z", function () {
        return Dt;
      }),
      n.d(t, "b", function () {
        return Rt;
      }),
      n.d(t, "j", function () {
        return Bt;
      }),
      n.d(t, "Ab", function () {
        return Nt;
      }),
      n.d(t, "u", function () {
        return qt;
      }),
      n.d(t, "db", function () {
        return Ht;
      }),
      n.d(t, "bb", function () {
        return Ut;
      }),
      n.d(t, "pb", function () {
        return Vt;
      }),
      n.d(t, "ob", function () {
        return Wt;
      }),
      n.d(t, "jb", function () {
        return Ft;
      }),
      n.d(t, "fb", function () {
        return Kt;
      }),
      n.d(t, "s", function () {
        return zt;
      }),
      n.d(t, "w", function () {
        return Yt;
      }),
      n.d(t, "D", function () {
        return Xt;
      }),
      n.d(t, "C", function () {
        return Jt;
      }),
      n.d(t, "m", function () {
        return Qt;
      }),
      n.d(t, "kb", function () {
        return Zt;
      }),
      n.d(t, "x", function () {
        return $t;
      }),
      n.d(t, "hb", function () {
        return en;
      }),
      n.d(t, "v", function () {
        return tn;
      }),
      n.d(t, "eb", function () {
        return nn;
      }),
      n.d(t, "ib", function () {
        return on;
      }),
      n.d(t, "X", function () {
        return rn;
      }),
      n.d(t, "Q", function () {
        return an;
      }),
      n.d(t, "R", function () {
        return cn;
      }),
      n.d(t, "sb", function () {
        return sn;
      }),
      n.d(t, "yb", function () {
        return dn;
      }),
      n.d(t, "O", function () {
        return ln;
      }),
      n.d(t, "K", function () {
        return un;
      }),
      n.d(t, "r", function () {
        return pn;
      }),
      n.d(t, "ub", function () {
        return mn;
      });
    var o = n(3),
      i = n(5),
      r = n(35),
      a = n(73),
      c = n(64),
      s = n(84),
      d = n.n(s),
      l = n(221),
      u = n(6),
      p = n(108),
      m = n(127),
      f = (n(243), n(244)),
      w = n.n(f),
      v = n(17),
      g = n(107),
      b = n.n(g),
      y = n(72),
      h = n(71),
      S = n(2),
      O = n(222),
      k = n(20),
      E = n(56),
      I = n(7),
      j = n(103),
      x = n.n(j),
      M = n(109),
      T = n(74),
      L = (n(245), n(246)),
      A = n.n(L),
      _ = n(247),
      C = n.n(_),
      P = n(102),
      D = n.n(P),
      R = n(166),
      B = n.n(R),
      N = n(248),
      q = n.n(N),
      G = n(32),
      H = n(44),
      U = n(128),
      V = n(37),
      W = n(50),
      F = n(27),
      K = n(70),
      z = n(158);
    function Y(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            e &&
            (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]);
          if (null == n) return;
          var o,
            i,
            r = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (o = n.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return r;
        })(e, t) ||
        X(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function X(e, t) {
      if (e) {
        if ("string" == typeof e) return J(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? J(e, t)
            : void 0
        );
      }
    }
    function J(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function Q(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function Z(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Q(Object(n), !0).forEach(function (t) {
              $(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : Q(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function $(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function ee(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function te(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            ee(r, o, i, a, c, "next", e);
          }
          function c(e) {
            ee(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var ne,
      oe,
      ie,
      re = new l.a(),
      ae = 1 / v.f,
      ce = !1,
      se = !1,
      de = !1,
      le = "loadMidRollAd",
      ue = !1,
      pe = !1,
      me = !0,
      fe = "in",
      we = !1,
      ve = !1,
      ge = null,
      be = !1,
      ye = !1,
      he = !1,
      Se = !1,
      Oe = !1,
      ke = !1,
      Ee = "",
      Ie = !1,
      je = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      xe = function () {
        return pe;
      },
      Me = function (e) {
        pe = e;
      },
      Te = function () {
        he = !0;
      },
      Le = function () {
        return me;
      },
      Ae = function (e) {
        me = e;
      },
      _e = (function () {
        var e = te(
          regeneratorRuntime.mark(function e(t) {
            var n,
              o,
              i,
              r = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      (o = Object(M.a)(!0)),
                      (i = Z(Z(Z({}, Object(S.a)()), n), o)),
                      c.a.logEvent(t, i),
                      (e.next = 6),
                      Object(y.a)()
                    );
                  case 6:
                    e.sent.logEvent(t, Z(Z({}, Object(S.a)()), n));
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      Ce = function (e, t, n, o) {
        return b()({
          method: e,
          url: t,
          headers: n ? { Authorization: "Bearer ".concat(n) } : {},
          data: o || null,
        });
      },
      Pe = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        d.a.setContext(t),
          n
            ? d.a.notify(new Error(JSON.stringify(e)))
            : d.a.notify(e instanceof Error ? e : new Error(e));
      };
    b.a.interceptors.response.use(
      function (e) {
        return e;
      },
      function (e) {
        throw (
          (e && e.response && 401 === e.response.status && Object(o.b)(), e)
        );
      }
    );
    var De = function () {
        return S.b.isiOS() ? "icon-social-apple" : "icon-play-store";
      },
      Re = function () {
        return S.b.isiOS() ? w.a : q.a;
      },
      Be = function (e) {
        return S.b.isiOS()
          ? (function (e) {
              return Object(S.e)(e).ios;
            })(e)
          : (function (e) {
              return Object(S.e)(e).android;
            })(e);
      },
      Ne = function () {
        return S.b.isiOS()
          ? window.localizedData.downloadOnAppStore
          : window.localizedData.downloadOnPlayStore;
      },
      qe = function (e) {
        return S.b.isiOS()
          ? "LS_".concat(e, "_appstore")
          : "LS_".concat(e, "_playstore");
      },
      Ge = function () {
        return [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i,
        ].some(function (e) {
          return navigator.userAgent.match(e);
        });
      },
      He = function () {
        window.fullScreenFlag = !0;
        var e = window.document.documentElement;
        Ge() || S.b.isIPad()
          ? (!(function () {
              try {
                var e = window.document,
                  t = e.documentElement,
                  n =
                    t.requestFullscreen ||
                    t.mozRequestFullScreen ||
                    t.webkitRequestFullScreen ||
                    t.msRequestFullscreen;
                e.fullscreenElement ||
                  e.mozFullScreenElement ||
                  e.webkitFullscreenElement ||
                  e.msFullscreenElement ||
                  n.call(t, { navigationUI: "hide" });
              } catch (e) {}
              setTimeout(function () {
                Object(i.b)();
              }, 500);
            })(),
            setTimeout(function () {
              window.scrollTo(0, 1);
            }, 0))
          : window.fullScreen ||
            (window.innerWidth === window.screen.width &&
              window.innerHeight === window.screen.height)
          ? (document.body.classList.remove("--fullscreen"),
            document.exitFullScreen
              ? document.exitFullScreen()
              : document.webkitExitFullScreen
              ? document.webkitExitFullScreen()
              : document.msExitFullScreen && document.msExitFullScreen())
          : e.requestFullscreen
          ? (document.body.classList.add("--fullscreen"), e.requestFullscreen())
          : e.webkitRequestFullscreen
          ? (document.body.classList.add("--fullscreen"),
            e.webkitRequestFullscreen())
          : e.msRequestFullscreen &&
            (document.body.classList.add("--fullscreen"),
            e.msRequestFullscreen());
      },
      Ue = function () {
        if (((window.fullScreenFlag = !1), Ge()))
          !(function () {
            try {
              if (
                "hidden" === document.visibilityState ||
                null === document.fullscreenElement
              )
                return;
              var e = window.document,
                t =
                  e.exitFullscreen ||
                  e.mozCancelFullScreen ||
                  e.webkitExitFullscreen ||
                  e.msExitFullscreen;
              (e.fullscreenElement ||
                e.mozFullScreenElement ||
                e.webkitFullscreenElement ||
                e.msFullscreenElement) &&
                t.call(e);
            } catch (e) {}
            setTimeout(function () {
              window.sessionEnded && We(), Object(i.b)();
            }, 500);
          })();
        else
          try {
            if (
              "hidden" === document.visibilityState ||
              null === document.fullscreenElement
            )
              return;
            document.body.classList.remove("--fullscreen"),
              document.exitFullscreen
                ? document.exitFullscreen()
                : document.webkitExitFullscreen
                ? document.webkitExitFullscreen()
                : document.msExitFullscreen && document.msExitFullscreen();
          } catch (e) {}
      },
      Ve = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (e)
          try {
            var n = e.volume;
            return (
              (n += t ? ae : -ae),
              (n = Math.max(n, 0)),
              (n = Math.min(n, 1)),
              (e.volume = n),
              Object(o.G)(n),
              e.volume
            );
          } catch (e) {
            return Object(o.G)(1), 1;
          }
        return e.volume;
      },
      We = function () {
        var e = document.querySelectorAll(".icon.fullscreen");
        e &&
          e.forEach(function (e) {
            e.classList.add(
              window.fullScreenFlag ? "icon-exit-fullscreen" : "icon-fullscreen"
            ),
              e.classList.remove(
                window.fullScreenFlag
                  ? "icon-fullscreen"
                  : "icon-exit-fullscreen"
              ),
              (e.title =
                window.localizedData[
                  window.fullScreenFlag ? "exitFullscreen" : "enterFullscreen"
                ]);
          });
      },
      Fe = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null,
          n = document.getElementById("remoteVideo");
        switch (e) {
          case "fullscreen":
            window.fullScreenFlag ? Ue() : He(), Object(G.e)(), We();
            break;
          case "toggleSidebar":
            Object(a.c)(!Object(a.a)());
            break;
          case "showSupportTool":
            St("helpNSupport");
            break;
          case "toggleMouseLock":
            if (
              (_e("click_event", { click_type: "mouselock_icon" }),
              Object(r.c)())
            ) {
              var c = document.getElementById("remoteVideo");
              window.isPortraitMode
                ? ((i.n.x = c.clientWidth / 2), (i.n.y = c.clientHeight / 2))
                : ((i.n.x = c.clientHeight / 2), (i.n.y = c.clientWidth / 2)),
                Object(r.b)();
            }
            break;
          case "toggleVideoSound":
            if (t.isMuted && n.volume >= ae) {
              try {
                localStorage.setItem("audioMuted", !1),
                  (n.volume = Object(o.n)());
              } catch (c) {}
              Object(I.o)();
            } else {
              try {
                localStorage.setItem("audioMuted", !0);
              } catch (c) {}
              Object(I.i)();
            }
            break;
          case "volumeUp":
            return Object(I.o)(), Ve(n, !0);
          case "volumeDown":
            var s = Ve(n, !1);
            return s < ae ? Object(I.i)() : Object(I.o)(), s;
          case "exitFullscreen":
            Ue(), Object(G.e)();
        }
        return null;
      },
      Ke = function (e) {
        Object(o.G)(e);
        var t = localStorage.getItem("audioMuted");
        document.querySelector(".volumeSlider input") &&
          (document.querySelector(".volumeSlider input").value = Math.floor(
            e * v.f
          )),
          (document.getElementById("remoteVideo").volume = e),
          e >= ae
            ? ((window.isMuted = !1), "false" === t && Object(I.o)())
            : ((window.isMuted = !0), Object(I.i)());
      },
      ze = function () {
        var e = document.querySelectorAll(".icon.videoSound");
        e &&
          e.forEach(function (e) {
            e.classList.remove("icon-unmute", "icon-mute"),
              e.classList.add(window.isMuted ? "icon-mute" : "icon-unmute"),
              e.setAttribute(
                "title",
                window.isMuted
                  ? window.localizedData.unmute
                  : window.localizedData.mute
              );
          });
        var t = document.querySelectorAll(".volume-slider");
        t &&
          t.forEach(function (e) {
            e.querySelector(".slider") &&
              (e.querySelector(".slider").value = window.isMuted
                ? 0
                : Math.floor(Object(o.n)() * v.f));
          });
      };
    (window.sliderHandler = function (e) {
      ne && clearTimeout(ne),
        (ne = setTimeout(function () {
          document.querySelector(".volumeSlider").style.display = "none";
        }, 2e3));
      var t = document.getElementById("remoteVideo"),
        n = e.target.value;
      t && ((t.volume = e.target.value / v.f), Object(o.G)(t.volume)),
        (window.isMuted = n < ae),
        window.isMuted ? Object(I.i)() : Object(I.o)(),
        localStorage.setItem("audioMuted", window.isMuted);
      var i = document.querySelectorAll(".volume-slider input");
      i &&
        i.forEach(function (e) {
          e.value = Math.floor(n * v.f);
        }),
        ze();
    }),
      (window.handleIconClick = function (e) {
        if (!window.sidebar || "drag" !== window.sidebar.widgetState) {
          var t = document.querySelectorAll(".video-container");
          if (
            ("toggleVideoSound" === e &&
              (t = { ref: t, isMuted: window.isMuted }),
            "volumeUp" === e || "volumeDown" === e)
          ) {
            document.querySelector(".volumeSlider").style.display = "flex";
            var n = document.getElementById("remoteVideo");
            (n.volume = Object(o.n)()), (window.isMuted = !1);
            var i = Fe(e, t);
            return (
              i < ae && ((window.isMuted = !0), n && (n.muted = !0)),
              (document.querySelector(".volumeSlider input").value = Math.floor(
                i * v.f
              )),
              ne && clearTimeout(ne),
              (ne = setTimeout(function () {
                document.querySelector(".volumeSlider").style.display = "none";
              }, 2e3)),
              void ze()
            );
          }
          Fe(e, t);
        }
      });
    var Ye = function () {
        return !!(
          document.fullScreenElement ||
          document.webkitIsFullScreen ||
          document.mozFullScreen ||
          document.msFullscreenElement
        );
      },
      Xe = function (e) {
        try {
          switch (e) {
            case "mobile-hide":
              return window.sessionEnded ? "d-none" : "sm-hide";
            case "mouseLockSupported":
              return Object(r.c)() && !Ye() && window.isNativeMouseActive
                ? ""
                : "d-none";
            case "isWasmSupported":
              return window.isWasmSupported &&
                u.c.initialized &&
                !window.sessionEnded
                ? "sm-hide"
                : "d-none";
            case "allow-android-chrome":
              return S.b.isAndroidChrome() ? "" : "sm-hide";
            default:
              return "";
          }
        } catch (e) {
          return "";
        }
      },
      Je = function (e) {
        for (var t = e.idPrefix, n = "", i = 0; i < E.length; i++) {
          var r = E[i],
            a = r.name,
            c = r.action,
            s = r.check,
            d = r.iconClass,
            l = r.title;
          if (
            ("videoSound" === a &&
              !1 === window.isMuted &&
              ((d = "icon-unmute"), (l = "mute")),
            "videoSound" === a)
          ) {
            var u = document.getElementById("remoteVideo"),
              p = u ? u.volume / v.f : 0;
            n += '<div\n              id="'
              .concat(t + a, '"\n              class="iconContainer ')
              .concat(Xe(s), " ")
              .concat(a, '"\n              title="')
              .concat(
                window.localizedData[l],
                '"\n          >\n              <icon class="icon pointer '
              )
              .concat(a, " ")
              .concat(d, '"\n                    onClick=handleIconClick("')
              .concat(
                c,
                '")></icon>\n              <div class="volume-slider">\n                <input\n                  type="range"\n                  min="0"\n                  max="'
              )
              .concat(v.f, '"\n                  value="')
              .concat(
                p,
                '"\n                  class="slider"\n                  id="myRange"\n                  oninput="sliderHandler(event)"\n                  step="1"\n                  onChange="sliderHandler(event)"\n                />\n              </div>\n          </div>'
              );
          } else
            n += '<div\n              id="'
              .concat(t + a, '"\n              class="iconContainer ')
              .concat(Xe(s), " ")
              .concat(a, '"\n              onClick=handleIconClick("')
              .concat(c, '")\n              title="')
              .concat(
                window.localizedData[l],
                '"\n          >\n              <icon class="icon pointer '
              )
              .concat(a, " ")
              .concat(d, '"/>\n          </div>');
        }
        return (n =
          '<div\n            id="popularGamesIcon"\n            name="showPopularGames"\n            class="iconContainer '
            .concat(
              Object(o.g)() ? "" : "hide",
              '"\n            onClick="window.dispatchEvent(new CustomEvent(\'SHOW_POPULAR_GAME_SCREEN\'))"\n            title="'
            )
            .concat(
              window.localizedData.popularGames,
              '"\n        >\n            <div id="'
            )
            .concat(t, 'popularIcon" class="icon pointer">\n            ')
            .concat(
              Object(o.r)() ? "" : '<span class="circle"/>',
              "\n            </div>\n        </div>"
            ) + n);
      },
      Qe = function (e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.className,
          i = void 0 === o ? "" : o,
          r = n.avoidIcon,
          a = n.id,
          c = void 0 === a ? "" : a,
          s = n.extra,
          d = void 0 === s ? "" : s,
          l = n.attrs,
          u = void 0 === l ? "" : l,
          p = "true" === sessionStorage.getItem("is_rewards_enabled"),
          m = !!sessionStorage.getItem("reward_details");
        return (
          !p ||
            "0" !== sessionStorage.getItem("rewards_timer") ||
            m ||
            "js-fs-widget" === c ||
            ve ||
            ((ve = !0), _e("won_coupon", { win_type: "share_link" })),
          '<div class="top-action hide '
            .concat(i, '" id="')
            .concat(c, '" ')
            .concat(u, ">\n    ")
            .concat(
              r
                ? ""
                : '<div class="logo-container flex" onClick="showProductInfo()">\n      <div class="bluestacks-logo-top">\n        <img id="company-logo" class="company-logo" />\n      </div>\n      <div class="info-container">\n        <icon id="icon-oval" class="icon-oval" onClick="showProductInfo(\''.concat(
                    t,
                    "')\"></icon>\n      </div>\n    </div>"
                  ),
              '\n    <div id="toolbarMenu" class="flex toolbarMenu">\n      '
            )
            .concat(
              p
                ? "js-fs-widget" === c
                  ? ""
                  : m
                  ? '<div class="rewardsIcon">\n          <img id="coinLogo" class="coinImg" src="/play/images/coin.svg"/>\n          </div>'
                  : "0" === sessionStorage.getItem("rewards_timer") ||
                    "true" === sessionStorage.getItem("reward_available")
                  ? '<div class="rewardsSection available">\n            <img id="coinLogo" class="coinImg" src="/play/images/coin.svg"/>\n            <div class="rewardsInfo">\n              <span class="rewardsTopbarTitle">Claim Scratch Card!</span>\n            </div>\n          </div>'
                  : '<div class="rewardsSection">\n          <img id="coinLogo" class="coinGif" src="/play/images/whiteCoin.gif"/>\n          <div class="rewardsInfo">\n            <span class="rewardsTopbarTitle">Free Scratch Card in</span>\n            <span class="rewardsTimer"></span>\n          </div>\n        </div>'
                : "",
              '\n      <div class="toolBarData flex">\n        '
            )
            .concat(
              Je({ idPrefix: "js-fs-widget" === c ? "widget-" : "topAction-" }),
              "\n        "
            )
            .concat(d, "\n      </div>\n    </div>\n  </div>")
        );
      };
    function Ze() {
      _e("click_event", { click_type: "reward_icon" }),
        (window.rewardRedeemed = !0),
        St("rewardsBetterLuck");
    }
    window.openScratchCard = function () {
      _e("click_event", { click_type: "reward_icon" }),
        (window.rewardRedeemed =
          null !== sessionStorage.getItem("reward_details")),
        St("rewardsBetterLuck");
    };
    var $e = function () {
      var e, t;
      (e = E),
        document.getElementById("userActions").classList.add("avoid-collapse"),
        (document.getElementById("userActions").innerHTML =
          '<div class="volumeSlider">\n    <input\n      type="range"\n      min="0"\n      max="'
            .concat(
              v.f,
              '"\n      class="slider"\n      id="myRange"\n      oninput="sliderHandler(event)"\n      step="1"\n    />\n  </div>'
            )
            .concat(Qe(e, t))),
        document.querySelector(".rewardsIcon") &&
          (document.querySelector(".rewardsIcon").onclick =
            window.openScratchCard),
        (document.querySelector(".company-logo").src = window.isWhiteLabelledApp
          ? B.a
          : D.a),
        (document.querySelector(".company-logo").alt = window.isWhiteLabelledApp
          ? "logo"
          : "now.gg logo"),
        (document.querySelector(".toolBarData").innerHTML = Je({
          idPrefix: "topAction-",
        })),
        (document.querySelector(".top-action").style.display = "flex");
      var n = document.getElementById("topAction-popularIcon"),
        o = Object(K.loadAnimation)({
          container: n,
          renderer: "svg",
          loop: !1,
          autoplay: !0,
          path: "".concat("/play", "/trendingUp.json"),
        });
      o.addEventListener("complete", function () {
        setTimeout(function () {
          o.goToAndPlay(0);
        }, 3e3);
      }),
        document.querySelector(".rewardsSection") &&
          (document.querySelector(".rewardsSection").onclick =
            "0" === sessionStorage.getItem("rewards_timer") ||
            "true" === sessionStorage.getItem("reward_available")
              ? Ze
              : window.openScratchCard);
    };
    window.addEventListener("appinstalled", function () {
      (Se = !0),
        he || Object(S.g)("click_event", { click_type: "install_pwa" });
    });
    var et = function () {
        return ge;
      },
      tt = function (e) {
        ge = e;
      },
      nt = function () {
        return be;
      },
      ot = function (e) {
        ye = e;
      },
      it = function () {
        return ye;
      };
    window.addEventListener("beforeinstallprompt", function (e) {
      if (!S.b.isMobile()) {
        var t,
          n = Object(o.c)(),
          i =
            (null == n || null === (t = n.features) || void 0 === t
              ? void 0
              : t.isPWAEnabled) && !Object(S.f)();
        Object(o.h)() < 3 && i && !Se && ((ge = e), (be = !0)),
          _e("PWA_eligibility", { value: be });
      }
      e.preventDefault();
    });
    var rt = function (e) {
        ke = e;
      },
      at = function (e) {
        Ee = e;
      },
      ct = function () {
        return ke;
      },
      st = function () {
        return Ee;
      },
      dt = function (e) {
        var t = document.getElementById("loader");
        (window.isSocialMediaFlow || window.isWhiteLabelledApp) &&
          t &&
          t.remove(),
          _e("nowgg_web_first-impression");
        var i = e.authToken;
        i && Object(o.F)(i), (window.campaignData = e);
        var r = e.customData,
          a = "portrait";
        r && (a = r.videoOrientation ? r.videoOrientation : "portrait"),
          (window.isPortraitMode = "portrait" === a),
          Object(k.b)();
        var c = e.attributionType,
          s = e.name,
          d = e.packageName,
          l = e.appPublisherSlug,
          u = e.appId,
          p = e.appSlug;
        if (
          ((function (e, t) {
            var n = "https://cdn.now.gg/apps-content/".concat(t, "/pwa"),
              o = -1 !== window.location.href.indexOf("?"),
              i = {
                name: e,
                short_name: e,
                start_url: "".concat(
                  o ? window.location.href.split("?")[0] : window.location.href,
                  "?utm_source=PWA_app_icon&utm_medium=PWA_browser&utm_campaign=PWA"
                ),
                scope: window.location.href.split("?")[0],
                display: S.b.isMobile() ? "standalone" : "fullscreen",
                theme_color: "#FF43A6",
                description: e,
                icons: [
                  {
                    src: "".concat(n, "/Icon_48.png"),
                    sizes: "48x48",
                    type: "image/png",
                  },
                  {
                    src: "".concat(n, "/Icon_96.png"),
                    sizes: "96x96",
                    type: "image/png",
                  },
                  {
                    src: "".concat(n, "/Icon_144.png"),
                    sizes: "144x144",
                    type: "image/png",
                  },
                  {
                    src: "".concat(n, "/Icon_192.png"),
                    sizes: "192x192",
                    type: "image/png",
                  },
                  {
                    src: "".concat(n, "/Icon_512.png"),
                    sizes: "512x512",
                    type: "image/png",
                  },
                ],
              },
              r = document.createElement("link");
            r.rel = "manifest";
            var a = JSON.stringify(i);
            r.setAttribute(
              "href",
              "data:application/json;charset=utf-8,".concat(
                encodeURIComponent(a)
              )
            ),
              document.head.appendChild(r);
          })(s, d),
          c === v.e.singular && S.b.isMobile())
        )
          n.e(8)
            .then(n.t.bind(null, 520, 7))
            .then(function (e) {
              var t = e.SingularConfig,
                n = e.singularSdk;
              (window.SingularConfig = t), (window.singularSdk = n);
            });
        else if (window.playUrl) {
          var m = new URLSearchParams(window.location.search),
            f = m.get("pbjs_debug"),
            w = m.get("aditude_debug");
          f || w
            ? l &&
              u &&
              p &&
              window.history.replaceState(
                null,
                "",
                ""
                  .concat(Object(h.b)(), "/")
                  .concat(l, "/")
                  .concat(u, "/")
                  .concat(p, "?")
                  .concat(m)
              )
            : l &&
              u &&
              p &&
              window.history.replaceState(
                null,
                "",
                ""
                  .concat(Object(h.b)(), "/")
                  .concat(l, "/")
                  .concat(u, "/")
                  .concat(p)
              );
        } else window.history.replaceState(null, "", "");
      },
      lt = function () {
        document.querySelectorAll(".logoImageContainer").forEach(function (e) {
          e.classList.add("fadeOut");
        });
      };
    window.playInBrowser = function () {
      var e = document.getElementById("screen");
      (e.innerHTML = ""), e.classList.remove("downloadScreenView");
      var t = setInterval(function () {
        var e = document.getElementById("mobileMenu");
        e && ((e.style.display = "block"), clearInterval(t));
      }, 500);
      window.showAds
        ? (window.dispatchEvent(
            new CustomEvent("SET_PORTRAIT_MODE", {
              detail: window.isPortraitMode,
            })
          ),
          window.appReady
            ? (_e("impression_event", {
                impression_type: "gameplay_screen_view",
                screen_type: "gameplay",
              }),
              lt())
            : (window.playInBrowserClicked = !0))
        : window.appReady
        ? (window.dispatchEvent(
            new CustomEvent("SET_PORTRAIT_MODE", {
              detail: window.isPortraitMode,
            })
          ),
          _e("impression_event", {
            impression_type: "gameplay_screen_view",
            screen_type: "gameplay",
          }),
          lt())
        : (window.playInBrowserClicked = !0);
    };
    function ut(e) {
      var t = { top: e.offsetTop, left: e.offsetLeft };
      if (e.offsetParent) {
        var n = ut(e.offsetParent);
        (t.top += n.top), (t.left += n.left);
      }
      return t;
    }
    (window.setHideState = function () {
      var e = document.getElementById("mobileMenu");
      e.classList.toggle("hide");
      var t = ut(e),
        n = 0 === window.orientation ? window.innerWidth : window.innerHeight;
      (function (e, t, n) {
        if (window.isPortraitMode)
          return e.top + t.offsetHeight > window.innerHeight;
        return (
          (0 === window.orientation ? n + e.top : e.top) + t.offsetHeight > n
        );
      })(t, e, n) &&
        (window.isPortraitMode
          ? (e.style.top = "".concat(
              window.innerHeight - e.offsetHeight - 15,
              "px"
            ))
          : (e.style.top = "".concat(n - e.offsetHeight - 15, "px")));
    }),
      String.prototype.padStart ||
        (String.prototype.padStart = function (e, t) {
          var n;
          return (
            (e >>= 0),
            (t = String(void 0 !== t ? t : " ")),
            this.length > e
              ? (n = String(this))
              : ((e -= this.length) > t.length && (t += t.repeat(e / t.length)),
                (n = t.slice(0, e) + String(this))),
            n
          );
        });
    var pt = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = Object(o.c)(),
        n = t.customData ? t.customData : "";
      if (n) {
        var i = n.widgetCoordinate;
        if (i) {
          if (e) {
            var r = document.querySelector("#remoteVideo"),
              a = r.getBoundingClientRect(),
              c = parseInt(
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--sat"
                ),
                10
              ),
              s = parseInt(
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--sal"
                ),
                10
              );
            if (
              (window.isPortraitMode && 0 === window.orientation) ||
              (!window.isPortraitMode &&
                (90 === window.orientation || -90 === window.orientation))
            ) {
              var d = a.x,
                l = d >= 0 ? d : 0;
              return {
                x: parseFloat(
                  (((parseFloat(i.x) * a.width) / 100 + l) /
                    window.innerWidth) *
                    100
                ),
                y: parseFloat(
                  (((parseFloat(i.y) * a.height) / 100 + a.y) /
                    window.innerHeight) *
                    100
                ),
              };
            }
            if (
              (!window.isPortraitMode && 0 === window.orientation) ||
              (window.isPortraitMode &&
                (90 === window.orientation || -90 === window.orientation))
            ) {
              var u = window.isPortraitMode
                  ? a.x + s
                  : window.isPortraitMode
                  ? a.x
                  : a.x + c,
                p = u >= 0 ? u : 0;
              return {
                x: parseFloat(
                  (((parseFloat(i.x) * a.height) / 100 + a.y) /
                    window.innerHeight) *
                    100
                ),
                y: parseFloat(
                  (((parseFloat(i.y) * a.width) / 100 + p) /
                    window.innerWidth) *
                    100
                ),
              };
            }
          }
          return { x: parseFloat(i.x), y: parseFloat(i.y) };
        }
        return { x: 8, y: 10 };
      }
      return { x: 8, y: 10 };
    };
    window.handleShareButton = function (e) {
      e.stopPropagation(),
        _e("click_event", {
          click_type: "social_share",
          screen_type: window.appReady ? "gameplay" : "loading",
        });
      var t = {
        title: window.title,
        url: ""
          .concat(window.location.origin)
          .concat(
            window.location.pathname,
            "?utm_campaign=share&utm_source=social"
          ),
      };
      try {
        navigator.share(t);
      } catch (e) {}
    };
    var mt = {},
      ft = (function () {
        var e = te(
          regeneratorRuntime.mark(function e(t) {
            var o,
              i,
              r,
              a,
              c,
              s = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (mt[t]) {
                      e.next = 5;
                      break;
                    }
                    return (
                      (e.next = 3),
                      Promise.all([n.e(7), n.e(5)]).then(n.bind(null, 521))
                    );
                  case 3:
                    (i = e.sent), (mt = i.default);
                  case 5:
                    for (
                      r = s.length, a = new Array(r > 1 ? r - 1 : 0), c = 1;
                      c < r;
                      c++
                    )
                      a[c - 1] = s[c];
                    (o = mt)[t].apply(o, a);
                  case 7:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      wt = (function () {
        var e = te(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), ft("hideModal");
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      vt = (function () {
        var e = te(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), ft("hideScreen");
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      gt = (function () {
        var e = te(
          regeneratorRuntime.mark(function e(t, n) {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), ft("showScreen", t, n);
                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      bt = (function () {
        var e = te(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              i,
              r = arguments;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = !(r.length > 0 && void 0 !== r[0]) || r[0]),
                      (window.screenType = "download"),
                      wt(),
                      null == (i = Object(o.c)()) ||
                        null === (t = i.features) ||
                        void 0 === t ||
                        !t.whiteLabelledText)
                    ) {
                      e.next = 8;
                      break;
                    }
                    return (e.next = 7), gt("timeout");
                  case 7:
                    return e.abrupt("return");
                  case 8:
                    return (e.next = 10), gt("ending", { header: n });
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      yt = function () {
        var e = Object(o.c)().features;
        return (void 0 === e ? {} : e).isPremiumGamesEnabled;
      },
      ht = function () {
        var e = window.timer;
        e &&
          (re.setDuration(e),
          re.start(),
          yt() &&
            (re.onTick = function (e) {
              e <= v.a && Object(m.b)(Math.round(e));
            }),
          (re.onCompleted = te(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        Fe("exitFullscreen"),
                        re && re.reset(),
                        Object(I.a)(),
                        (e.next = 5),
                        Object(y.a)()
                      );
                    case 5:
                      e.sent, _e("ac_view_dwn_screen", { type: "AUTO" });
                    case 7:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )));
      };
    window.closeModal = function () {
      document.querySelectorAll(".modal").forEach(function (e) {
        e.style.display = "none";
      }),
        wt();
    };
    var St = (function () {
      var e = te(
        regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), ft("showModal", t, n);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t, n) {
        return e.apply(this, arguments);
      };
    })();
    (window.showProductInfo = function () {
      if ("drag" !== window.sidebar.widgetState) {
        if (window.isWhiteLabelledApp)
          return (
            (document.getElementById("nerdStats").innerHTML = O.a),
            p.a.init(),
            void window.dispatchEvent(
              new CustomEvent("NERD_MODE_CHANGED", { detail: !0 })
            )
          );
        St("product_info"), p.a.init();
      }
    }),
      (window.reloadBrowser = function () {
        window.location.reload();
      }),
      (window.dragHandler = function (e, t, n) {
        var i = Object(o.c)();
        if (
          "5349" === window.gameId &&
          "CA" !== (null == i ? void 0 : i.countryCode)
        ) {
          var r = document.querySelector(".".concat(t)),
            a = e.clientX - parseInt(window.getComputedStyle(r).left, 10),
            c = e.clientY - parseInt(window.getComputedStyle(r).top, 10);
          document.addEventListener("mousemove", s),
            document.addEventListener("mouseup", d),
            (window.resetMidRollEvents = d);
        }
        function s(e) {
          var t = e.clientY - c,
            n = e.clientX - a;
          t < 0 && (t = 0),
            n < -Math.floor(0.8 * r.offsetWidth) &&
              (n = -Math.floor(0.8 * r.offsetWidth)),
            t >
              window.innerHeight -
                r.offsetHeight +
                Math.floor(0.7 * r.offsetHeight) &&
              (t =
                window.innerHeight -
                r.offsetHeight +
                Math.floor(0.7 * r.offsetHeight)),
            n >
              window.innerWidth -
                r.offsetWidth +
                Math.floor(0.8 * r.offsetWidth) &&
              (n =
                window.innerWidth -
                r.offsetWidth +
                Math.floor(0.8 * r.offsetWidth)),
            (r.style.top = "".concat(t, "px")),
            (r.style.left = "".concat(n, "px"));
        }
        function d(e) {
          var t = parseInt(r.style.left, 10),
            o = parseInt(r.style.top, 10),
            i = {};
          t < 0 || t > window.innerWidth || o < 0 || o > window.innerHeight
            ? (i.hidden = !0)
            : (i.visible = !0),
            _e(
              "ad_moved",
              Z(
                Z({}, i),
                {},
                {
                  ad_type: ""
                    .concat(n, "_")
                    .concat(
                      "video" === n ? "533x400" : window.midRollDimension
                    ),
                }
              )
            ),
            document.removeEventListener("mousemove", s),
            document.removeEventListener("mouseup", d);
        }
      });
    var Ot = function () {
        (document.querySelector(".supportTitle").innerHTML =
          window.localizedData.thankYouSupport),
          (document.querySelector(".feedbackSection").style.display = "block");
      },
      kt = function () {
        (document.querySelector(".supportTitle").innerHTML =
          window.localizedData.helpAndSupport),
          jt(),
          (document.querySelector(".warningImg").style.display = "block"),
          (document.querySelector(".feedbackErrorSection").style.display =
            "block");
      },
      Et = function () {
        (document.getElementById("issueForm").style.display = "none"),
          (document.querySelector(".supportTitle").innerHTML =
            window.localizedData.diagnosingIssue),
          (document.querySelector(".closeButton").style.display = "none"),
          (document.querySelector(".diagnosisSection").style.display = "block");
      };
    function It(e) {
      document.getElementById("step".concat(e)).classList.add("success");
    }
    var jt = function () {
      document.querySelector(".diagnosisSection").style.display = "none";
    };
    function xt() {
      return Mt.apply(this, arguments);
    }
    function Mt() {
      return (Mt = te(
        regeneratorRuntime.mark(function e() {
          var t, n, i, r, a, c, s, d;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((r = Object(S.a)()),
                    (a = Object(M.a)()),
                    !window.sessionEnded)
                  ) {
                    e.next = 6;
                    break;
                  }
                  (e.t0 = {}), (e.next = 9);
                  break;
                case 6:
                  return (e.next = 8), Object(I.b)();
                case 8:
                  e.t0 = e.sent;
                case 9:
                  return (
                    (c = e.t0),
                    (s = Object(o.c)()),
                    (d = {
                      countryCode: s.countryCode,
                      stats: c,
                      muted: window.isMuted,
                      langugage: window.language || "",
                      systemInfo: {
                        userAgent: navigator.userAgent,
                        isTouchDevice: navigator.maxTouchPoints > 0,
                        isMobile: S.b.isMobile(),
                        browser: r.browser,
                        browserVersion: r.browser_version,
                        os: S.b.getOS(),
                        deviceInfo: I.c,
                        concurrency: navigator.hardwareConcurrency,
                        graphics: {
                          graphics_vendor: a.graphics_vendor,
                          graphics_renderer: a.graphics_renderer,
                        },
                        memoryUsage: Z({}, a.memory || {}),
                      },
                      imap: {
                        isGameGuideHidden: Object(o.q)(),
                        isGamepadConnected: !!T.a.gamepad,
                        isWasmSupported: window.isWasmSupported,
                        imapActive:
                          null === (t = window) ||
                          void 0 === t ||
                          null === (n = t.bs) ||
                          void 0 === n
                            ? void 0
                            : n.imapToggleActive,
                        overlayActive: Object(G.a)(),
                        overlayObj: Object(o.l)(
                          "overlayObj",
                          !0,
                          "localStorage"
                        ),
                        touchStartEvent:
                          "ontouchstart" in document.documentElement,
                        overlayChildElementCount:
                          null === (i = document.getElementById("overlay")) ||
                          void 0 === i
                            ? void 0
                            : i.childElementCount,
                        imapState: {
                          fileLoaderState: window.imapState,
                          internal: u.a,
                          class: {
                            active: u.c.active,
                            pointerLock: u.c.pointerLock,
                            initialized: u.c.initialized,
                            height: u.c.height,
                            width: u.c.width,
                          },
                        },
                      },
                      logs: [],
                    }),
                    I.l &&
                      I.l.roblox_placeId &&
                      ((d.roblox_placeId = I.l.roblox_placeId),
                      (d.roblox_ingame_url =
                        "https://www.roblox.com/games/".concat(
                          I.l.roblox_placeId
                        ))),
                    e.abrupt("return", d)
                  );
                case 14:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var Tt = (function () {
        var e = te(
          regeneratorRuntime.mark(function e(t, n) {
            var o;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Ct(500);
                  case 2:
                    if ((It(1), !n)) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 6), xt();
                  case 6:
                    (o = e.sent),
                      (t.diagnosticReportData = Z(
                        Z({}, t.diagnosticReportData),
                        o
                      )),
                      (e.next = 12);
                    break;
                  case 10:
                    return (e.next = 12), Ct(500);
                  case 12:
                    return It(2), (e.next = 15), Object(H.a)(t);
                  case 15:
                    return It(3), (e.next = 18), Ct(500);
                  case 18:
                    n && It(4);
                  case 19:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      Lt = function (e, t) {
        if (e) {
          var n = new FileReader();
          (n.onloadend = function () {
            (oe = n.result),
              (t.style.backgroundImage =
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(".concat(
                  oe,
                  ")"
                ));
          }),
            (n.onerror = function () {}),
            n.readAsDataURL(e);
        }
      },
      At = function e() {
        var t,
          n = (function (e, t) {
            var n =
              ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
            if (!n) {
              if (
                Array.isArray(e) ||
                (n = X(e)) ||
                (t && e && "number" == typeof e.length)
              ) {
                n && (e = n);
                var o = 0,
                  i = function () {};
                return {
                  s: i,
                  n: function () {
                    return o >= e.length
                      ? { done: !0 }
                      : { done: !1, value: e[o++] };
                  },
                  e: function (e) {
                    throw e;
                  },
                  f: i,
                };
              }
              throw new TypeError(
                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var r,
              a = !0,
              c = !1;
            return {
              s: function () {
                n = n.call(e);
              },
              n: function () {
                var e = n.next();
                return (a = e.done), e;
              },
              e: function (e) {
                (c = !0), (r = e);
              },
              f: function () {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (c) throw r;
                }
              },
            };
          })(document.querySelectorAll('input[name="radio-group"]'));
        try {
          for (n.s(); !(t = n.n()).done; ) {
            if (t.value.checked) {
              document
                .querySelector(".radio-btn-group")
                .removeEventListener("click", e),
                (document.querySelector(".submitBtn").disabled = !1);
              break;
            }
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }
      };
    function _t(e) {
      if (!e) return !1;
      var t = e.type.split("/")[1];
      return ["jpg", "jpeg", "png", "svg", "tiff"].includes(t);
    }
    function Ct(e) {
      return new Promise(function (t) {
        setTimeout(function () {
          t();
        }, e);
      });
    }
    var Pt = function () {
      var e = x()("remoteVideo", "png");
      return new File([e.blob], "screenshot.png", { type: "image/png" });
    };
    function Dt(e) {
      var t = window.innerHeight > window.innerWidth;
      return "networkStatus" === e.id && t && !1 === window.isPortraitMode
        ? window.innerHeight - e.offsetLeft - e.offsetWidth
        : window.innerWidth - e.offsetLeft - e.offsetWidth;
    }
    function Rt(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = window.innerHeight > window.innerWidth;
      "networkStatus" === e.id && n && !1 === window.isPortraitMode
        ? ((e.style.left = "".concat(
            0.5 * window.innerHeight - 0.5 * e.offsetWidth,
            "px"
          )),
          t &&
            (e.style.top = "".concat(
              0.5 * window.innerWidth - 0.5 * e.offsetHeight,
              "px"
            )))
        : ((e.style.left = "".concat(
            0.5 * window.innerWidth - 0.5 * e.offsetWidth,
            "px"
          )),
          t &&
            (e.style.top = "".concat(
              0.5 * window.innerHeight - 0.5 * e.offsetHeight,
              "px"
            )));
    }
    function Bt(e) {
      var t,
        n,
        o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = o.onDragClose,
        r = o.onDragStart,
        a = 0,
        c = 0,
        s = 0,
        d = 0,
        l = 0,
        u = 0;
      (e.onmousedown = f), (e.ontouchstart = f);
      var p = !1,
        m = null;
      function f(t) {
        (t = t || window.event),
          (p = !1),
          (m = setTimeout(function () {
            p = !0;
          }, 500)),
          "mousedown" == t.type
            ? ((s = t.clientX), (d = t.clientY))
            : "touchstart" == t.type &&
              ((s = t.targetTouches[0].clientX),
              (d = t.targetTouches[0].clientY)),
          document.addEventListener("mouseup", v),
          document.addEventListener("touchend", v);
        var n = e.getBoundingClientRect();
        (l = n.left),
          (u = n.top),
          document.addEventListener("mousemove", w),
          document.addEventListener("touchmove", w),
          r && r();
      }
      function w(o) {
        (o = o || window.event).preventDefault(),
          "mousemove" == o.type
            ? ((a = s - o.clientX),
              (c = d - o.clientY),
              (s = o.clientX),
              (d = o.clientY))
            : "touchmove" == o.type &&
              ((a = s - o.targetTouches[0].clientX),
              (c = d - o.targetTouches[0].clientY),
              (s = o.targetTouches[0].clientX),
              (d = o.targetTouches[0].clientY));
        var i = e.offsetLeft - a,
          r = e.offsetTop - c,
          l = window.innerHeight > window.innerWidth;
        "js-fs-widget" === e.id
          ? (i > e.offsetWidth / 2 && e.offsetWidth / 2 + i < window.innerWidth
              ? ((t = e.offsetLeft - a), (e.style.left = "".concat(t, "px")))
              : (i <= e.offsetWidth / 2 &&
                  (e.style.left = e.offsetWidth / 2 + 1 + "px"),
                e.offsetWidth / 2 + i >= window.innerWidth &&
                  (e.style.left =
                    window.innerWidth - e.offsetWidth / 2 - 1 + "px")),
            r > 0 &&
              e.offsetHeight + r < window.innerHeight &&
              ((n = e.offsetTop - c), (e.style.top = "".concat(n, "px"))))
          : "networkStatus" === e.id && l && !1 === window.isPortraitMode
          ? (i > 5 &&
              e.offsetWidth + i < window.innerHeight - 5 &&
              ((t = e.offsetLeft - c), (e.style.left = "".concat(t, "px"))),
            r > 5 &&
              e.offsetHeight + r < window.innerWidth - 5 &&
              ((n = e.offsetTop + a), (e.style.top = "".concat(n, "px"))))
          : (i > 5 &&
              e.offsetWidth + i < window.innerWidth - 5 &&
              ((t = e.offsetLeft - a), (e.style.left = "".concat(t, "px"))),
            r > 5 &&
              e.offsetHeight + r < window.innerHeight - 5 &&
              ((n = e.offsetTop - c), (e.style.top = "".concat(n, "px"))));
      }
      function v(o) {
        o.preventDefault(),
          m && (clearTimeout(m), (m = null)),
          document.removeEventListener("mouseup", v),
          document.removeEventListener("touchend", v),
          document.removeEventListener("mousemove", w),
          document.removeEventListener("touchmove", w);
        var r = e.getBoundingClientRect();
        (t = r.left),
          (n = r.top),
          i && i({ drag: p, startX: l, startY: u, endX: t, endY: n });
      }
    }
    function Nt() {
      var e = document.querySelector(".robloxToast");
      if (e) {
        e.classList.add("slideDown"), e.classList.remove("slideUp");
        var t = document.querySelector(".robloxClose");
        t && t.addEventListener("click", Gt),
          (function () {
            var e,
              t,
              n = 6,
              o = !1,
              r = document.getElementById("remoteVideo");
            function a(n) {
              (3 !== n.which && 2 !== n.button) ||
                ((o = !0),
                (e = document.pointerLockElement ? i.n.x : n.pageX),
                (t = document.pointerLockElement ? i.n.y : n.pageY));
            }
            function c(e) {
              e.preventDefault();
            }
            r.addEventListener("contextmenu", c),
              r.addEventListener("mousedown", a),
              r.addEventListener("mouseup", function s(d) {
                if (o) {
                  var l = Math.abs(
                      (document.pointerLockElement ? i.n.x : d.pageX) - e
                    ),
                    u = Math.abs(
                      (document.pointerLockElement ? i.n.x : d.pageY) - t
                    );
                  (o = !1),
                    (l > n || u > n) &&
                      (Gt(),
                      r.removeEventListener("contextmenu", c),
                      r.removeEventListener("mousedown", a),
                      r.removeEventListener("mouseup", s));
                }
              });
          })();
      }
    }
    function qt() {
      return "5349" === window.gameId ? Object(o.f)() : Object(o.s)();
    }
    function Gt() {
      var e = document.querySelector(".robloxToast");
      if (e) {
        Object(o.D)(),
          (window.isRobloxToastHide = !0),
          e.classList.remove("slideDown"),
          e.classList.add("slideUp");
        var t = document.querySelector(".robloxClose");
        t && t.removeEventListener("click", Gt);
      }
    }
    var Ht = function () {
        var e, t, n;
        !0,
          Object(i.u)(),
          we ||
            ((we = !0),
            (t = sessionStorage.getItem("rewards_secs_remaining")
              ? parseInt(sessionStorage.getItem("rewards_secs_remaining"))
              : parseInt(sessionStorage.getItem("rewards_timer"))),
            (n = !1),
            t > 0 &&
              (e = setInterval(function () {
                if (!n) {
                  0 === t && (n = !0);
                  var o = Math.floor(t / 60),
                    i = t % 60;
                  i < 10 && (i = "0".concat(i)),
                    o < 10 && (o = "0".concat(o)),
                    document.querySelector(".rewardsTimer") || clearInterval(e),
                    sessionStorage.setItem("rewards_secs_remaining", t),
                    document.querySelector(".rewardsTimer") &&
                      (document.querySelector(".rewardsTimer").innerHTML = ""
                        .concat(o, " min ")
                        .concat(i, " sec"));
                  var r = document.querySelector(".timerDivText");
                  if (
                    (r &&
                      (r.innerHTML = "".concat(o, " min ").concat(i, " sec")),
                    t > 0)
                  )
                    t -= 1;
                  else if (0 === t) {
                    clearInterval(e);
                    var a = document.querySelector(".rewardsSection");
                    a &&
                      ((a.innerHTML =
                        '\n          <img id="coinLogo" class="coinImg" src="/play/images/coin.svg"/>\n          <div class="rewardsInfo">\n            <span class="rewardsTopbarTitle">Claim Scratch Card!</span>\n          </div>'),
                      a.classList.add("available"),
                      (a.onclick = Ze)),
                      sessionStorage.setItem("reward_available", !0),
                      sessionStorage.removeItem("rewards_secs_remaining"),
                      r ? Ze() : _e("won_coupon", { win_type: "playtime" });
                  }
                }
              }, 1e3)));
      },
      Ut = function () {
        ce = !0;
      },
      Vt = function (e) {
        se = e;
      },
      Wt = function (e) {
        de = e;
      },
      Ft = function (e) {
        le = e;
      },
      Kt = function (e) {
        Oe = e;
      },
      zt = function () {
        return Oe;
      },
      Yt = function () {
        return le;
      },
      Xt = function () {
        return se;
      },
      Jt = function () {
        return de;
      },
      Qt = function () {
        return ce;
      },
      Zt = function () {
        ue = !0;
      },
      $t = function () {
        return ue;
      },
      en = function (e) {
        ie = e;
      },
      tn = function () {
        return ie;
      },
      nn = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "in";
        fe = e;
      },
      on = function (e) {
        Ie = e;
      },
      rn = function () {
        var e, t, n;
        if (!Ie) {
          var i =
              null === (e = window.appInfo) || void 0 === e ? void 0 : e.ads,
            r =
              null == i || null === (t = i.mobile) || void 0 === t
                ? void 0
                : t.isMidRollEnabled,
            a =
              null == i || null === (n = i.desktop) || void 0 === n
                ? void 0
                : n.isMidRollEnabled,
            c = Object(o.c)().experimentTypes,
            s = (void 0 === c ? [] : c).indexOf("audioIos") > -1;
          if (S.b.isMobile() && r) {
            if (S.b.isiOS() && !s) return;
            Object(F.e)();
          } else if (!S.b.isMobile() && a) {
            var d,
              l,
              u = Object(o.c)().experimentTypes;
            if ((void 0 === u ? [] : u).indexOf("inGameAds") > -1)
              return Object(F.c)(), void Object(W.b)();
            (
              (null === (d = window) ||
              void 0 === d ||
              null === (l = d.appInfo) ||
              void 0 === l
                ? void 0
                : l.videoAdsCountryCodes) || []
            ).indexOf(fe.toLowerCase()) > -1
              ? Object(F.c)()
              : Object(W.b)();
          }
        }
      },
      an = function () {
        var e = document.querySelector(".bgVideoLoader");
        e &&
          setTimeout(function () {
            var t = window.innerWidth,
              n = window.innerHeight;
            (!window.isPortraitMode ||
              (90 !== window.orientation && -90 !== window.orientation)) &&
            (window.isPortraitMode ||
              (!window.isPortraitMode &&
                (90 === window.orientation || -90 === window.orientation)))
              ? ((e.style.width = "".concat(t, "px")),
                (e.style.height = "".concat(n, "px")))
              : ((e.style.width = "".concat(n, "px")),
                (e.style.height = "".concat(t, "px"))),
              Object(i.b)();
          }, 100);
      },
      cn = function () {
        "visible" === document.visibilityState &&
          setTimeout(function () {
            an();
          }, 200);
      },
      sn = function (e) {
        try {
          document.querySelector(".volumeIconImg").src =
            "muted" === e ? A.a : C.a;
        } catch (e) {}
      };
    window.handleVolume = function () {
      try {
        var e = document.querySelector(".tapToUnmute");
        e.classList.contains("hideText") || e.classList.add("hideText"),
          pe
            ? me
              ? (window.tude.setVideoVolume(1), (me = !1), sn("unmuted"))
              : (window.tude.setVideoVolume(0), (me = !0), sn("muted"))
            : (window.tude.setVideoVolume(1),
              (me = !1),
              sn("unmuted"),
              (pe = !0));
      } catch (e) {}
    };
    var dn = function () {
        try {
          var e = document.querySelector(".bgVideoLoader");
          if ((sn("muted"), e)) {
            var t, n, o, i;
            S.b.isMobile() &&
              (e.classList.add("mobileLoadingVideo"),
              an(),
              window.addEventListener("orientationchange", an),
              document.addEventListener("visibilitychange", cn));
            var r = document.querySelector(".loadingGameIcon");
            if (
              (window.appInfo &&
                window.appInfo.media &&
                window.appInfo.media.desktop &&
                (r.src = window.appInfo.media.desktop.icon),
              (e.style.display = "block"),
              Ie)
            )
              return (window.showAds = !1), Object(V.d)(), void Ut();
            window.showAds = !0;
            var a =
                null === (t = window.appInfo) || void 0 === t
                  ? void 0
                  : t.playDomain,
              c =
                null === (n = window.appInfo) || void 0 === n ? void 0 : n.ads,
              s = S.b.isMobile()
                ? null == c || null === (o = c.mobile) || void 0 === o
                  ? void 0
                  : o.isPreRollEnabled
                : null == c || null === (i = c.desktop) || void 0 === i
                ? void 0
                : i.isPreRollEnabled,
              d = sessionStorage.getItem("adDisplayed");
            if (
              window.performance &&
              window.performance.getEntriesByType &&
              window.performance.getEntriesByType("navigation").length &&
              "reload" ===
                window.performance.getEntriesByType("navigation")[0].type &&
              d
            )
              return (
                Object(V.d)(),
                Ut(),
                void (
                  a &&
                  !window.imaError &&
                  ((ue = !0), Object(W.d)(), Object(V.b)())
                )
              );
            s && a && !window.imaError
              ? ((window.showAds = !0),
                Object(W.d)(),
                Object(V.b)(),
                Object(U.a)())
              : ((window.showAds = !1),
                (window.imaError = !0),
                Object(V.d)(),
                Ut());
          }
        } catch (e) {}
      },
      ln = function () {
        if ("visible" === document.visibilityState) {
          if ("true" === sessionStorage.getItem("userActive")) return;
          sessionStorage.setItem("userActive", !0), Object(i.w)("active");
        } else {
          if ("false" === sessionStorage.getItem("userActive")) return;
          if (window.isUnloading) return;
          sessionStorage.setItem("userActive", !1), Object(i.w)("inactive");
        }
      };
    function un() {
      function e() {
        Object(i.w)("active"),
          window.focus(),
          document.removeEventListener("mouseover", e);
      }
      (window.onbeforeunload = function () {
        window.isUnloading = !0;
      }),
        document.addEventListener("visibilitychange", ln),
        (window.onload = function () {
          sessionStorage.getItem("userActive") &&
            "false" === sessionStorage.getItem("userActive") &&
            (sessionStorage.setItem("userActive", !0), Object(i.w)("active"));
        }),
        (window.onblur = function () {
          Object(i.w)("inactive"), document.addEventListener("mouseover", e);
        });
    }
    var pn = function () {
        var e,
          t,
          n = Object(o.c)().allocatedInstanceRegion,
          i = {
            game:
              null === (e = window.appInfo) || void 0 === e ? void 0 : e.slug,
            "instance-region": n,
          };
        return (
          (t = i),
          Object.entries(t).reduce(function (e, t) {
            var n = Y(t, 2),
              o = n[0],
              i = n[1];
            return void 0 !== i && (e[o] = i), e;
          }, {})
        );
      },
      mn = function (e) {
        var t = document.querySelector(".banner");
        t &&
          (e
            ? ((t.style.transition = "ease -in -out 0.2s opacity"),
              t.setAttribute("data-str-id", e),
              t.classList.add("show"),
              Object(k.b)(document.getElementById("player")))
            : ((t.style.transition = ""),
              t.classList.remove("show"),
              t.removeAttribute("data-str-id"),
              (t.textContent = "")));
      };
    window.addEventListener("SHOW_POPULAR_GAME_SCREEN", function () {
      if (window.popularGamesScreenVisible) Object(z.c)();
      else {
        var e, t, n, i, r, a, c, s;
        _e("click_event", { click_type: "popular_games" }),
          Object(o.A)(),
          document.querySelectorAll(".icon>.circle").forEach(function (e) {
            return e.classList.add("hide");
          });
        var d = document.querySelector("#topAction-popularIcon.icon");
        d && d.classList.add("active");
        var l = document.getElementById("mobileMenu");
        l && (l.style.display = "none"),
          window.isPortraitMode && document.body.classList.add("p-bg");
        var u =
          null === (e = window) ||
          void 0 === e ||
          null === (t = e.appInfo) ||
          void 0 === t ||
          null === (n = t.media) ||
          void 0 === n ||
          null === (i = n.desktop) ||
          void 0 === i
            ? void 0
            : i.banner;
        S.b.isMobile() &&
          null !== (r = window) &&
          void 0 !== r &&
          null !== (a = r.appInfo) &&
          void 0 !== a &&
          null !== (c = a.media) &&
          void 0 !== c &&
          null !== (s = c.mobile) &&
          void 0 !== s &&
          s.banner &&
          (u = appInfo.media.mobile.banner),
          (window.popularGamesScreenVisible = !0);
        var p = document.getElementById("screen"),
          m = Object(o.g)();
        Object(z.b)({
          element: p,
          background: u,
          mobile: S.b.isMobile(),
          portrait: 0 === window.orientation || 2 === window.orientation,
          sendStats: _e,
          data: m || [],
          screenType: "popular_games_screen",
        });
      }
    }),
      (window.resetPlaying = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        e && (document.getElementById(e).innerHTML = "");
        var t = document.getElementById("mobileMenu");
        t && (t.style.display = "none"),
          document.body.classList.remove("m-game", "d-game"),
          !1,
          (window.appReady = !1),
          (window.sessionEnded = !1),
          Object(V.d)(),
          window.restartApp();
      });
  },
  10: function (e, t, n) {
    "use strict";
    n.d(t, "j", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return i;
      }),
      n.d(t, "h", function () {
        return r;
      }),
      n.d(t, "i", function () {
        return a;
      }),
      n.d(t, "k", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "d", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "f", function () {
        return p;
      }),
      n.d(t, "g", function () {
        return m;
      });
    var o = { resolution: "1280x720" },
      i = {
        0: 4096,
        1: 8192,
        2: 16384,
        3: 32768,
        4: 256,
        5: 512,
        8: 16,
        9: 32,
        10: 64,
        11: 128,
        12: 1,
        13: 2,
        14: 4,
        15: 8,
      },
      r = { 0: 4, 1: 6, 2: 8, 3: 10, 4: 12 },
      a = { 0: 5, 1: 7, 2: 9, 3: 11, 4: 13 },
      c = { MOUSE_MOVE: 3, MOUSE_SCROLL: 14 },
      s = "IMAP_EVENT_INITIALIZED",
      d = "IMAP_EVENT_TERMINATED",
      l = "IMAP_EVENT_FAILURE",
      u = "IMAP_EVENT_UPDATE",
      p = "IMAP_GAMEPAD_IN_USE",
      m = "IMAP_POINTER_LOCK";
  },
  102: function (e, t, n) {
    e.exports = n.p + "images/logo-1-a.png";
  },
  105: function (e, t, n) {
    "use strict";
    var o = n(104),
      i = (n(250), n(251), n(485), n(0)),
      r = n(2);
    function a(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            e &&
            (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]);
          if (null == n) return;
          var o,
            i,
            r = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (o = n.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return r;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return c(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return c(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function c(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    var d = {
        RTT: {
          value: 0,
          getNetworkRating: function (e) {
            return e > 70 ? 1 : e >= 40 && e <= 70 ? 2 : 3;
          },
        },
      },
      l = (function () {
        function e() {
          var t = this;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.stats = d),
            (this.calculateStatTimeout = 15),
            (this.collapseMsgTimeout = 5),
            (this.currentMos = 1 / 0),
            (this.mosLastClosed = 1 / 0),
            (this.calculateStatInterval = null),
            (this.collapseTimer = null),
            (this.isVisible = !1),
            (this.isCollapsed = !1),
            (this.webrtcStats = null),
            (this.networkStatus = "Good"),
            (this.containerElm = document.querySelector(
              ".networkStatusContainer"
            )),
            Object(i.j)(document.getElementById("networkStatus"), {
              onDragStart: function () {
                return t.toggleMovementTransition("#networkStatus");
              },
              onDragClose: function () {
                return t.handleDragClose.apply(t, arguments);
              },
            }),
            this.attachListenersToKnowMore(),
            this.attachListenersToCloseBtn(),
            (this.isUnstableNetworkMsgClosed = !1),
            (this.isSlowNetworkMsgClosed = !1),
            (this.networkMessageType = "");
        }
        var t, n, c;
        return (
          (t = e),
          (n = [
            {
              key: "attachListenersToCloseBtn",
              value: function () {
                var e = this,
                  t = document.querySelector(".networkStatusCloseBtn");
                t &&
                  (t.addEventListener(
                    "touchstart",
                    function (t) {
                      return e.handleClose(t);
                    },
                    { capture: !0 }
                  ),
                  t.addEventListener(
                    "mousedown",
                    function (t) {
                      return e.handleClose(t);
                    },
                    { capture: !0 }
                  ));
              },
            },
            {
              key: "attachListenersToKnowMore",
              value: function () {
                var e = this;
                document
                  .querySelectorAll("[data-id='networkStatusKnowMoreLink']")
                  .forEach(function (t) {
                    t.addEventListener(
                      "touchstart",
                      function () {
                        (document.querySelector(
                          ".networkStatusContainer"
                        ).style.zIndex = 99),
                          Object(i.zb)("networkStatusKnowMore", {
                            networkStatus: e.networkStatus,
                            preventRotate: r.b.isMobile(),
                          });
                      },
                      { capture: !0 }
                    ),
                      t.addEventListener(
                        "mousedown",
                        function () {
                          (document.querySelector(
                            ".networkStatusContainer"
                          ).style.zIndex = 99),
                            Object(i.zb)("networkStatusKnowMore", {
                              networkStatus: e.networkStatus,
                              preventRotate: r.b.isMobile(),
                            });
                        },
                        { capture: !0 }
                      );
                  });
              },
            },
            {
              key: "handleClose",
              value: function () {
                "unstable" === this.networkMessageType &&
                  (this.isUnstableNetworkMsgClosed = !0),
                  "slow" === this.networkMessageType &&
                    (this.isSlowNetworkMsgClosed = !0),
                  (this.mosLastClosed = this.currentMos),
                  this.hideNetworkMsg();
              },
            },
            {
              key: "handleDragClose",
              value: function (e) {
                var t = e.drag;
                this.toggleMovementTransition("#networkStatus"),
                  t || this.toggleCollapseNetworkMsg(!this.isCollapsed);
              },
            },
            {
              key: "positionNetworkStatusToCenter",
              value: function () {
                Object(i.b)(this.containerElm);
              },
            },
            {
              key: "toggleMovementTransition",
              value: function (e) {
                document
                  .querySelector(e)
                  .classList.toggle("transition-movement");
              },
            },
            {
              key: "resetStats",
              value: function () {
                var e = Object.entries(this.stats).reduce(function (e, t) {
                  var n = a(t, 2),
                    o = n[0],
                    i = n[1],
                    r = (i.value, i.getNetworkRating);
                  return (e[o] = { value: 0, getNetworkRating: r }), e;
                }, {});
                this.stats = e;
              },
            },
            {
              key: "subscribe",
              value: function (e) {
                var t = this;
                this.resetStats(),
                  this.hideNetworkMsg(),
                  (this.webrtcStats = new o.WebRTCStats({
                    getStatsInterval: 1e3,
                  }));
                try {
                  return (
                    this.webrtcStats.addPeer({ pc: e, peerId: "3" }),
                    this.webrtcStats.on("stats", function (e) {
                      return t.onStatChange(e.data);
                    }),
                    (this.calculateStatInterval = setInterval(function () {
                      (t.currentMos = t.calculateNetworkState()),
                        t.setNetworkMsg(t.currentMos)
                          ? t.showNetworkMsg()
                          : setTimeout(function () {
                              t.hideNetworkMsg();
                            }, 2e3),
                        t.resetStats();
                    }, 1e3 * this.calculateStatTimeout)),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              },
            },
            {
              key: "onStatChange",
              value: function (e) {
                if (!e) return !1;
                var t = e.connection.currentRoundTripTime,
                  n = parseFloat(1e3 * t);
                return (this.stats.RTT.value += n), !0;
              },
            },
            {
              key: "calculateNetworkState",
              value: function () {
                var e = this,
                  t = Object.keys(this.stats).length;
                return (
                  Object.entries(this.stats).reduce(function (t, n) {
                    var o = a(n, 2),
                      i = (o[0], o[1]),
                      r = i.value;
                    return (
                      t +
                      (0, i.getNetworkRating)(
                        Math.round(r / e.calculateStatTimeout)
                      )
                    );
                  }, 0) / t
                );
              },
            },
            {
              key: "setNetworkMsg",
              value: function (e) {
                if (this.isSlowNetworkMsgClosed) return !1;
                var t = document.querySelector(".networkIconContainer"),
                  n = document.querySelector(".networkStatusMsg"),
                  o = document.querySelectorAll(
                    "[data-id='networkStatusKnowMoreLink']"
                  ),
                  r = "",
                  a = "",
                  c = "";
                return (
                  e < 2
                    ? ((this.networkMessageType = "slow"),
                      (this.isUnstableNetworkMsgClosed = !1),
                      (r = "slow-wifi"),
                      (a = window.localizedData.networkMsgSlow),
                      (c = "Slow"))
                    : e >= 2 && e < 3 && !this.isUnstableNetworkMsgClosed
                    ? ((this.networkMessageType = "unstable"),
                      (r = "unstable-wifi"),
                      (a = window.localizedData.networkMsgUnstable),
                      (c = "Unstable"))
                    : ((this.networkMessageType = "good"),
                      (r = "wifi"),
                      (c = "Good")),
                  c !== this.networkStatus && "Good" !== c
                    ? (this.isCollapsed ||
                        o.forEach(function (e) {
                          return e.classList.remove("hide");
                        }),
                      Object(i.ab)("impression_event", {
                        impression_type: "network_status_" + c.toLowerCase(),
                        screen_type: "gameplay",
                      }))
                    : c !== this.networkStatus &&
                      o.forEach(function (e) {
                        return e.classList.add("hide");
                      }),
                  (this.networkStatus = c),
                  t &&
                    (t.innerHTML = '<icon class="icon pointer icon-'.concat(
                      r,
                      '"/>'
                    )),
                  n && (n.innerHTML = a),
                  !(e >= 3 || !r)
                );
              },
            },
            {
              key: "setCollapseTimeout",
              value: function () {
                var e = this;
                this.collapseTimer && clearTimeout(this.collapseTimer),
                  (this.collapseTimer = setTimeout(function () {
                    e.toggleCollapseNetworkMsg(!0);
                  }, 1e3 * this.collapseMsgTimeout));
              },
            },
            {
              key: "showNetworkMsg",
              value: function () {
                if (this.isVisible || "Good" === this.networkStatus) return !1;
                var e = document.querySelector("#networkStatus");
                return (
                  e.classList.add("slideDown"),
                  e.classList.remove("slideUp"),
                  (this.isVisible = !0),
                  this.setCollapseTimeout(),
                  !0
                );
              },
            },
            {
              key: "hideNetworkMsg",
              value: function () {
                if (!this.isVisible) return !1;
                var e = document.querySelector("#networkStatus");
                return (
                  e.classList.remove("slideDown"),
                  e.classList.add("slideUp"),
                  (this.isVisible = !1),
                  !0
                );
              },
            },
            {
              key: "toggleCollapseNetworkMsg",
              value: function (e) {
                var t = document.querySelector(".networkStatusMsg"),
                  n = document.querySelector(".networkStatusContainer"),
                  o = document.querySelectorAll(
                    "[data-id='networkStatusKnowMoreLink']"
                  ),
                  r = document.querySelector(".networkStatusCloseBtn");
                e
                  ? (t.classList.add("hide"),
                    r.classList.add("hide"),
                    (n.style.width = "auto"),
                    o.forEach(function (e) {
                      return e.classList.add("hide");
                    }),
                    (this.isCollapsed = !0))
                  : (t.classList.remove("hide"),
                    r.classList.remove("hide"),
                    (n.style.width = ""),
                    "Good" !== this.networkStatus &&
                      o.forEach(function (e) {
                        return e.classList.remove("hide");
                      }),
                    (this.isCollapsed = !1),
                    Object(i.z)(this.containerElm) <= 0 &&
                      this.positionNetworkStatusToCenter(),
                    this.setCollapseTimeout());
              },
            },
            {
              key: "unsubscribe",
              value: function () {
                return (
                  this.hideNetworkMsg(),
                  this.calculateStatInterval &&
                    clearInterval(this.calculateStatInterval),
                  (this.calculateStatInterval = null),
                  (this.isVisible = !1),
                  (this.isCollapsed = !1),
                  this.webrtcStats &&
                    (this.webrtcStats.removePeer("3"),
                    this.webrtcStats.removeAllListeners()),
                  (this.webrtcStats = null),
                  (this.networkStatus = "Good"),
                  !0
                );
              },
            },
          ]) && s(t.prototype, n),
          c && s(t, c),
          e
        );
      })();
    t.a = new l();
  },
  106: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    });
    var o = n(0),
      i = n(20);
    function r(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var a = null,
      c = function () {
        var e = document.querySelector(".audioAdsBanner"),
          t = document.querySelector(".audioCross");
        try {
          e.classList.remove("show"),
            t.classList.remove("show"),
            e.classList.remove("darken");
        } catch (e) {}
      },
      s = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      c(),
                        a && "function" == typeof a && a(),
                        Object(o.ab)("click_event", {
                          click_type: "audio_ad_launcher",
                        });
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var a = e.apply(t, n);
                function c(e) {
                  r(a, o, i, c, s, "next", e);
                }
                function s(e) {
                  r(a, o, i, c, s, "throw", e);
                }
                c(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      d = function (e) {
        var t = document.querySelector(".audioAdsBanner"),
          n = document.querySelector(".audioCross");
        a = e;
        try {
          t.classList.add("show"),
            setTimeout(function () {
              n.classList.add("show"), t.classList.add("darken");
            }, 5e3),
            Object(o.ab)("impression_event", {
              impression_type: "audio_ad_launcher",
            });
        } catch (e) {}
      },
      l = function () {
        c(),
          Object(o.ab)("click_event", {
            click_type: "audio_ad_launcher_close",
          }),
          window.sessionEnded ||
            setTimeout(function () {
              d(a);
            }, 18e4);
      };
    t.a = {
      init: function () {
        (window.audioBanner = window.audioBanner || {}),
          (window.audioBanner.dismissPopup = l),
          (window.audioBanner.showAd = s);
        var e = document.querySelector(".audioAdsBanner");
        try {
          (e.innerHTML =
            "\n      <p class='titleText' data-str-id='listenToAd'></p>\n      <button class='listenNow' data-str-id='listenNow' onclick='audioBanner.showAd()'></button>\n      <p class='audioCross' onclick='audioBanner.dismissPopup()'></p>\n  "),
            Object(i.b)(e);
        } catch (e) {}
      },
    };
  },
  108: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return w;
    });
    var o,
      i,
      r = n(7),
      a = n(242),
      c = n.n(a),
      s = n(28),
      d = n(20),
      l = n(2),
      u = null,
      p = !1,
      m = function (e) {
        p = e;
        var t = document.getElementById("nerdModeEnabled"),
          n = document.getElementById("nerdModeSwitch");
        e
          ? (t && t.setAttribute("checked", "checked"),
            n && n.classList.add("checked"),
            Object(d.b)(document.querySelector(".copied-tooltip")))
          : (t && t.removeAttribute("checked"),
            n && n.classList.remove("checked")),
          window.dispatchEvent(
            new CustomEvent("NERD_MODE_CHANGED", { detail: e })
          );
      };
    function f() {
      var e = document.querySelector(".copyable-data");
      if (!e) return "";
      if (
        (clearInterval(u),
        (document.querySelector(".copied-tooltip").style.display = "block"),
        (u = setTimeout(function () {
          document.querySelector(".copied-tooltip").style.display = "none";
        }, 3e3)),
        e.classList.contains("showStats"))
      )
        return e.innerText;
      var t = e.cloneNode(!0),
        n = "".concat(e.id, "-copy");
      t.classList.add("showStats"),
        (t.id = n),
        (t.style.position = "absolute"),
        (t.style.top = "-999999px"),
        (t.style.left = "-999999px"),
        document.querySelector("body").append(t);
      var o = document.getElementById(n),
        i = o.innerText;
      return o.remove(), i;
    }
    var w = function () {
        return p;
      },
      v = function (e) {
        var t = document.getElementById("tpEnable"),
          n = document.getElementById("tpSwitch");
        e
          ? (t && t.setAttribute("checked", "checked"),
            n && n.classList.add("checked"),
            (s.a.size = 30),
            s.a.init("._videoContainer"))
          : (t && t.removeAttribute("checked"),
            n && n.classList.remove("checked"),
            s.a.clean());
      };
    (window.bs = window.bs || {}),
      (window.bs.closeNerdMode = function () {
        m(p);
      }),
      (window.bs.toggleNerdMode = function () {
        (p = !p), v(window.bs.tpEnabled), m(p);
      }),
      (window.bs.handleClose = function () {
        m(!1);
      }),
      (window.bs.showNerdModeFields = function () {
        (window.copyTap += 1),
          7 === window.copyTap &&
            document.getElementById("copyData").classList.add("showStats");
      }),
      (window.bs.tpEnabled = !1),
      (window.bs.tpToggle = function () {
        (window.bs.tpEnabled = !window.bs.tpEnabled), v(window.bs.tpEnabled);
      }),
      (t.a = {
        init: function () {
          m(p),
            (window.copyTap = 0),
            window.nerdModeInititalized ||
              window.addEventListener("NERD_MODE_CHANGED", function (e) {
                Object(r.j)(e.detail);
                var t = document.querySelector(".nerd-mode-data");
                if (
                  (t && (t.style.display = e.detail ? "block" : "none"),
                  e.detail)
                ) {
                  var n;
                  i ||
                    (i = new c.a(".nerd-mode-data > .copy-button", {
                      text: function () {
                        return f();
                      },
                    })),
                    clearInterval(o),
                    (o = setInterval(function () {
                      !(function () {
                        var e = document.getElementById("remoteVideo");
                        (document.getElementById("nerdWidth").innerText =
                          e.offsetWidth),
                          (document.getElementById("nerdHeight").innerText =
                            e.offsetHeight),
                          (document.getElementById("nerdPixelRatio").innerText =
                            parseFloat(window.devicePixelRatio).toFixed(2));
                        try {
                          var t = e.getVideoPlaybackQuality();
                          0 !== t.totalVideoFrames && 7 === window.copyTap
                            ? ((document.querySelector(
                                ".totalVideoFrames"
                              ).innerText = t.totalVideoFrames),
                              (document.querySelector(
                                ".droppedVideoFrames"
                              ).innerText = t.droppedVideoFrames),
                              (document.querySelector(
                                "#nerdFrames"
                              ).style.display = "table-row"))
                            : (document.querySelector(
                                "#nerdFrames"
                              ).style.display = "none");
                        } catch (e) {}
                      })();
                    }, 1e3));
                  var a = JSON.parse(sessionStorage.getItem("campaignData"));
                  if (a) {
                    var s =
                        a.city && "NA" !== a.city
                          ? decodeURIComponent(a.city)
                          : "",
                      d =
                        a.countryRegion && "NA" !== a.countryRegion
                          ? a.countryRegion
                          : "";
                    (document.getElementById("nerdPkg").innerText =
                      a.packageName),
                      (document.getElementById("nerdGeo").innerText = ""
                        .concat(s)
                        .concat(s ? ", " : "")
                        .concat(d)
                        .concat(s || d ? ", " : "")
                        .concat(a.countryCode || ""));
                  }
                  (document.getElementById("deviceInfoVal").innerHTML =
                    "TP: ".concat(
                      null === (n = navigator) || void 0 === n
                        ? void 0
                        : n.maxTouchPoints,
                      ", "
                    ) +
                    "\n TS: ".concat(
                      document.documentElement
                        ? "ontouchstart" in document.documentElement
                        : "NONE",
                      ", "
                    ) +
                    "\n WASM: ".concat(window.isWasmSupported, ", ") +
                    "\n DEV: ".concat(r.c.type, ", ") +
                    "\n MOB: ".concat(l.b.isMobile())),
                    (document.getElementById("nerdInstance").innerText =
                      (null == a ? void 0 : a.nowInstanceId) || "NULL"),
                    (document.getElementById("nerdUserId").innerText =
                      (null == a ? void 0 : a.nowUserId) || "NULL");
                } else {
                  window.copyTap = 0;
                  var u = document.getElementById("copyData");
                  u && u.classList.remove("showStats"),
                    clearInterval(o),
                    i && (i.destroy(), (i = null));
                }
              }),
            (window.nerdModeInititalized = !0);
        },
        setNerdMode: m,
      });
  },
  109: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var o = {};
    !(function () {
      var e = (function () {
        var e = document.createElement("canvas").getContext("webgl");
        if (null == e) return { vendor: "", renderer: "" };
        var t = e.getExtension("WEBGL_debug_renderer_info");
        return null == t
          ? { vendor: "", renderer: "" }
          : {
              vendor: e.getParameter(t.UNMASKED_VENDOR_WEBGL),
              renderer: e.getParameter(t.UNMASKED_RENDERER_WEBGL),
            };
      })();
      if (
        ((o.graphics_vendor = e.vendor),
        (o.graphics_renderer = e.renderer),
        navigator.hardwareConcurrency)
      )
        if ("string" == typeof concurrency) {
          var t = parseInt(navigator.hardwareConcurrency);
          o.hardwareConcurrency = isNaN(t) ? 1 : t;
        } else o.hardwareConcurrency = navigator.hardwareConcurrency;
      ("boolean" != typeof navigator.webdriver &&
        "string" != typeof navigator.webdriver) ||
        (o.webdriver = navigator.webdriver);
    })();
    var i = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (window.performance && window.performance.memory) {
        var t = window.performance.memory,
          n = t.jsHeapSizeLimit,
          i = t.totalJSHeapSize,
          r = t.usedJSHeapSize;
        e
          ? ((o.memory_jsHeapSizeLimit = n ? n / 1048576 : "NA"),
            (o.memory_totalJSHeapSize = i ? i / 1048576 : "NA"),
            (o.memory_usedJSHeapSize = r ? r / 1048576 : "NA"))
          : (o.memory = {
              jsHeapSizeLimit: n ? n / 1048576 : "NA",
              totalJSHeapSize: i ? i / 1048576 : "NA",
              usedJSHeapSize: r ? r / 1048576 : "NA",
            });
      }
      return o;
    };
  },
  11: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return r;
      });
    var o = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return e.indexOf("Dpad") > -1 && -1 === e.indexOf("+")
          ? e.replaceAll("Gamepad", "")
          : e
              .replaceAll("Gamepad", "")
              .replaceAll("Trigger", "T")
              .replaceAll("Left", "L")
              .replaceAll("Right", "R")
              .replaceAll("Shoulder", "B");
      },
      i =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjEzMTggMi41MTk0M0MxMS41MTU3IDEuODQ3NjEgMTIuNDg0NCAxLjg0NzYxIDEyLjg2ODIgMi41MTk0M0wyMy4xNDUxIDIwLjUwMzlDMjMuNTI2IDIxLjE3MDUgMjMuMDQ0NiAyMiAyMi4yNzY4IDIySDEuNzIzMThDMC45NTUzNTYgMjIgMC40NzM5OSAyMS4xNzA1IDAuODU0OTM3IDIwLjUwMzlMMTEuMTMxOCAyLjUxOTQzWiIgZmlsbD0iI0RFNUE0OCIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjEyNSA3LjI1SDEwLjg3NVYxNS4yNUgxMy4xMjVWNy4yNVpNMTMuMTI1IDE3LjI1SDEwLjg3NVYxOS4yNUgxMy4xMjVWMTcuMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K",
      r = {
        NULL: '<div class="gamepad-null">\n    <img src="'.concat(
          i,
          '" />\n    <h1 data-str-id="gamepadNull"></h1>\n    <p data-str-id="gamepadNullInfo"></p>\n    </div>'
        ),
        UNSUPPORTED: '<div class="gamepad-null">\n    <img src="'.concat(
          i,
          '" />\n    <h1 data-str-id="gamepadNotSupported"></h1></div>'
        ),
      };
  },
  127: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    }),
      n.d(t, "b", function () {
        return c;
      });
    var o = n(0),
      i = n(20),
      r = (n(517), {}),
      a = function () {
        (r.active = "hidden"),
          document.querySelectorAll(".ng-toast").forEach(function (e) {
            e.innerHTML = "";
          });
      },
      c = function (e) {
        if (
          "started" !== r.active &&
          "ended" !== r.active &&
          "hidden" !== r.active
        ) {
          document.querySelectorAll(".ng-toast").forEach(function (e) {
            (e.innerHTML =
              '<div class="ending-wrap">\n  <p data-str-id="gameplay"></p>\n  <strong id="explore-timer"></strong>\n  <span class="crossIcon" id="closeExplore"></span>\n</div>'),
              Object(i.b)(e);
          }),
            (r.active = "started");
        } else {
          var t = Math.round(e % 60),
            n = document.getElementById("explore-timer");
          n &&
            (n.innerText = "0"
              .concat(Math.floor(e / 60), ":")
              .concat(t > 9 ? t : "0" + t)),
            e <= 0 && (a(), Object(o.wb)(), (r.active = "ended"));
        }
      };
  },
  128: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return c;
      });
    var o = n(0),
      i = n(37),
      r = n(27),
      a = function () {
        setTimeout(function () {
          Object(r.a)();
        }, 6e4);
      },
      c = function () {
        document.querySelector(".ad-zone").offsetHeight
          ? (Object(o.ab)("ads.js_not_blocked", { value: "pre-roll" }),
            window.imaError || Object(i.c)())
          : ((window.imaError = !0),
            Object(o.bb)(),
            Object(o.ab)("ad_load_fail", {
              fail_type: "ads.js_blocked",
              value: "pre-roll",
            }),
            window.appReady ? (Object(o.db)(), Object(i.a)()) : Object(i.d)());
      };
  },
  129: function (e) {
    e.exports = JSON.parse(
      '{"about-product.copyright":"© 2022 now.gg. All rights reserved. By using now.gg you agree to our <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://now.gg/terms-and-privacy.html#terms\'>Terms of Use</a> and  <a target=\'_blank\' rel=\'noopener noreferrer\' href=\'https://now.gg/terms-and-privacy.html#privacy\'>Privacy Policy</a>","about-product.nerdMode":"Nerd mode","about-product.support":"Support","about-product.website":"Website","age":"Age","appNotAvailable.about":"We\'ll be back soon!","appNotAvailable.heading":"Working on our infrastructure.","back":"Back","backtogame":"Back to the game","category":"Category","coming-soon.about":"Visit this page at a later date for more information.","coming-soon.heading":"Coming soon","connected":"Connected","continuePlaying":"Continue playing","continuePlayingWhiteLabelled":"Continue using {game}","timoutModalTitle":"{game} stopped due to inactivity","timoutModalDesc":"Your {game} session stops when you’re away from the screen for a while. Don’t worry, everything is saved automatically.","downloadFromAppStore":"Download from the App Store","downloadFromPlayStore":"Get it on Google Play","downloadOnAppStore":"Download on App Store","downloadOnPlayStore":"Download on Play Store","enjoyedTheGame":"Enjoyed the game?","error-screen.heading":"Oops! Something went wrong.","error-screen.subHeading":"Refreshing in","initializingServers":"Initializing the servers","install":"Install","installNow":"Install now","loading":"Loading...","nerd-mode.about":"Nerd mode impacts gameplay performance. Please use Nerd mode only when required.","nerd-mode.copiedToClipboard":"Copied to clipboard","networkLost":"Network lost.","or":"Or","overlay.klook":"Tip: Hold <b>{key}</b> to use mouse for look around.","overlay.look":"Tip: Press <b>{key}</b> to use mouse for look around.","playInBrowser":"Play instantly in browser","refresh":"Refresh","something-wrong-heading":"Something went wrong. Please try again in sometime","stabilizingConnection":"Stabilizing the connection","strategy":"Strategy","summoningGameLords":"Summoning game lords","too-many-requests.about":"There is unusually high demand for our service right now. Please try again in sometime.","tryingToReconnect":"Trying to reconnect...","downloadNow":"Download on PC","volumeDown":"Volume down","volumeUp":"Volume up","mute":"Mute","unmute":"Unmute","gamepadTitle":"Game controls","fullscreen":"Fullscreen","recaptcha":"Please check the box below to proceed.","tooltipHeading":"On-screen Game Controls","tooltipSubHeading":"You can turn on/off onscreen game controls from here","tooltipAction":"OK, Got it","uhOh":"Uh-oh","pouringRequests":"It’s pouring requests","backSoon":"We will be back soon. Try again shortly.","youMayContinue":"You may continue playing the game by downloading it.","gamePlayLimit":"Gameplay time limit","playLimitMsg":"You\'ve reached your daily playtime limit. Please come back again tomorrow.","thankYou":"Thank you.","gameWillStart":"Game will start after the ad","launchGame":"Launch game","loading2":"Loading","networkTroubleshootTitle":"Troubleshooting & Help","networkTroubleshoot-1":"If you are using Wifi, try moving closer.","networkTroubleshoot-2":"Avoid activities with heavy internet usage.","networkTroubleshoot-3":"Connect to Ethernet.","networkTroubleshoot-4":"Maybe you are far away from server location.","networkMsgSlow":"Extremely high latency may impact gameplay","networkMsgUnstable":"High latency may impact gameplay","gameAdTitle":"The game will start after the ad.","gameControlsTitle":"Game controls","onScreenToggleTitle":"On-screen game controls","showTapToggleTitle":"Show visual feedback for taps/clicks","keyboard":"Keyboard","gamepad":"Gamepad","gamepadNull":"Gamepad not detected","gamepadNullInfo":"If you have one, make sure it’s plugged in / paired, and <b>press buttons to wake it up.</b>","gamepadNotSupported":"Game does not support gamepad","onScreenTitle":"On-screen controls","closeWidget":"Close menu","openMenu":"Open menu","drag":"Hold and drag","windows":"Windows","exitFullscreen":"Exit fullscreen","enterFullscreen":"Enter fullscreen","closeAdIn":"Close ad in {time}","launchGameText":"Launching game in {time}","ad":"Ad","midAd":"Ad {currentCount} of {totalCount}","helpAndSupport":"Help and Support","next":"Next","lag":"Game is lagging","stuck":"Game stuck at loading screen","ping":"Ping time is too high","keyControls":"Key controls","others":"Others","email":"Email*","problemDescription":"Problem Description*","describeProblem":"Describe the problem you are experiencing ...","uploadFromDevice":"Upload from device","captureScreen":"Capture screen","invalidFileImage":"Please upload an image of a valid format.","runReport":"Run a diagnostic report.","submit":"Submit","failedToSubmitFeedback":"Something went wrong while submitting feedback. Please try again.","yourResponse":"We have received your response and it is being reviewed by our Customer Support.","youCanDownload":"You can download your copy of the report.","downloadReport":"Download report","okay":"Okay","tryAgain":"Try again","thankYouSupport":"Thank you","diagnosingIssue":"Diagnosing issue","uploadPicture":"Upload picture or screenshot","creatingDevice":"Creating device profile","collectingStats":"Collecting stats","creatingLogs":"Collecting other information","compilingInfo":"Compiling information","processingProblemReport":"Processing problem report","sendingProblemReport":"Sending problem report","underMaintenance.heading":"Undergoing maintenance","underMaintenance.about":"Currently undergoing maintenance, please try after some time","robloxToastMsg":"Hold right click to rotate camera","launchingGame":"Launching game","clickToUnmute":"Click to Unmute","tapToUnmute":"Tap to Unmute","knowMore":"Know more","moreGames":"More Games","popularGames":"Popular Games","playNow":"Play now","gameplay":"Gameplay time left","playTimOver":"Gameplay time over","playTimOverMsg":"Discover and play popular games!","startingAdIn":"Starting Ad in {time}","watchLater":"Watch later","adWillStartin":"Ad will start in {time}","watchNow":"Watch now","spotInstanceShortMsg":"Assigning a new server in","spotInstanceLongMsg":"Due to high traffic, we may switch users to a different server","serverBusy":"Server busy","serverBusyMsg":"Restart to get on a new server and continue playing!","restart":"Restart","somethingWentWrong":"Unfortunately, something went wrong.","refreshNow":"Refresh now","upgradeInProgress":"Upgrade in Progress","appNotFound":"Gearing up to unlock new experiences for you. Thank you for your support and patience.","gearingUp":"Gearing up to unlock new experiences for you.","bs10":"Download BlueStacks 10 to play the game on PC!","downloadHeading":"Download","blueStacksForMac":"BlueStacks for Mac","blueStacks":"BlueStacks","areYouShare":"Are you sure?","cancel":"Cancel","yes":"Yes","newLink":"The following link will open in a new tab","cursorLocked":"Cursor locked","cursorLockedInfo":"Press <b>[ESC]</b> to unlock cursor","lockCursor":"Lock mouse cursor","download":"Preparing for download","downloadError":"Download interrupted due to unknown error. Please try again.","uploadAFile":"Upload a file","uploadAFileText":"Upload a file, image or document.","okGotIt":"Ok, got it","uploadingFile":"Uploading file","uploadedSuccessfully":"Uploaded successfully","uploadFailed":"Upload failed","feedback-form.downloadButtonText":"Download {game_name} on PC","feedback-form.downloadClicked":"Launch the installer after it has downloaded.","proTip":"Pro Tip: Install game shortcut","installApp":"Install App","backToGame":"Back to game","listenToAd":"Listnen to an audio ad and continue playing on now.gg","listenNow":"Listen now","yourGameWill":"Your game will begin after the following advertisement"}'
    );
  },
  158: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return c;
    }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "a", function () {
        return d;
      });
    var o = n(164),
      i = n.n(o),
      r = n(103),
      a = n.n(r),
      c = function (e) {
        Promise.all([n.e(0), n.e(1)])
          .then(n.bind(null, 253))
          .then(function (t) {
            (0, t.render)(e);
          });
      },
      s = function () {
        Promise.all([n.e(0), n.e(1)])
          .then(n.bind(null, 253))
          .then(function (e) {
            (0, e.unmount)();
          });
      },
      d = function (e) {
        var t = e.screen,
          n = e.mobile,
          o = e.campaignData,
          r = e.icon,
          c = e.altIcon,
          s = e.storeLogo,
          d = e.downloadText,
          l = e.btnType,
          u = e.dlink;
        t.classList.remove("downloadScreenView"),
          (t.innerHTML =
            '<div class="endingScreen">\n<div class="screenshotContainer">\n  <div class="screenshotBg"></div>\n  <div class="screenshotShadow"></div>\n</div>\n<div class="gameBlock">\n  <div class="flex gameDetailsSection">\n    <img alt="appImg" class="appImg" />\n    <div class="flex column">\n      <span class="gameName"></span>\n      <span class="flex genreContainer">\n        <span class="genre"></span>\n        <span class="devName"></span>\n      </span>\n    </div>\n  </div>\n  <div class="whiteLablelledText">\n    <p class="gamePlayLimit" data-str-id="gamePlayLimit"></p>\n    <p class="playLimitMsg" data-str-id="playLimitMsg"></p>\n    <p class="thankYou" data-str-id="thankYou"></p>\n  </div>\n  <div class="gameDownloadSection">\n    <p class="continue-playing" data-str-id="enjoyedTheGame"></p>\n    <button\n      class="default download-on-pc button-download-os-specific button-download-os-specific-post"\n      onclick="startDownload(true);"\n    >\n      <span>\n        <div class="flex vrtlCenter spaceBetween">\n          <div class="flex perfectCenter iconContainer">\n            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqISURBVHgB7VnNjxxHFX+vej521zGxkThwYsASiixBbEMQNwgSQgqRyJGjL/wBvnGzxRmJiH8g3DiGQw4cQKzFgYsFRgJkICQDQohgIdaKP2anu+rxvqq6Z7PjmezMKLLSb9U709VV1fV+9XtfNQC99NJLL7300ksvvfTysRRcp9NLl795JUJ1BZ4hCQmmd+79/HBVv6cCcOWF1yZVVb8BBF+HZ1OmMQ1fvnvvZ9NlHZ4KwJcuf/td/pjE8QE8+PxXtI26gwmB8gwp8UPSCYn8X7lHwERlPPozu7wx33u/8ozvpT/5fR5L/h19rPzZ5ABVM4O9+X9g1DwwEB4/unp3enh0mo4DWCLXLr9yXZQ/fv5T8Jfv/RCa0YHNTkVDvSgZEEW7JFfUi2TxiZ/xrXyv+EoClLbbZ/5Oke8j3zfcmb8jf0f+THwf5J77kT/TK5nyqM95XlmIYOAbMahn8Nn3fipATML+vujy+ml6BlguavP3v/oq1PvPMawBLo4DTM4zKufRuIO8s5VuqeufrL1iXAdjvvaAqqGOlfYUpH/QiwY8MEh7xaO4TxjohRWPCyO+hn4fdDzxu7Q/X6jjgm0I95HxCDyG/JP3NYZzcHTui7ouxPDiMiWXMoApdwH5pc3+OaBA8OLzCL/71qg8v/1ehG/84phfyGYQwHeflVI28E0gfWac5IXJJRve1BDqxkxDwADSi+KAdbOdDJW0RB2LVPFaGm5TGtkOh0aZReiUY48XYktQXRA/i2EfVslgVQdVgoG48slFsnzmOV48t4ttyifo5QvSVSTnV7A+QdevYKRqxNQVKrOZIFNY7Tqq9QQMqhg6w4RVyMtUOLkPyqSNgJda/8JjIo8RUwl8nyCzcXWQWwmA6Y++m4uSKjT7V7NznxC8fzLFZb26W4F8twUIZw0a7YU4yD4DawZhXisTjD8DBZKQlUVRiZ+p9ubwiNr5xI9ENrFKfIdsROg46I0AAFNo+mSx7agmtUtZqpqkAkFmn2As5G0Bc93oLCFVJqhaIYcE8+AMRkA2k8G+0hznjTlEZYDtKfJzpo5eyGAoFRQqBltMREFiIBsxxdreuQ0ARG7fJ7j2ywYuDO3+90dUHGHycBTAQAAyhalC9ewKE4GbCTs9/gy8QxoR1EeonpDcZQQBZ8xAjFG9PNUMAvsNENArMS1WUoAIc26LUNgukQdr9R+VYKMTbwmAonRHQt5tj9OujsdmMKflto/gwASzW/FxtkNkXYW+bAtiKgKQxXgBjBEfcJ+9keUADALMSDaYWcIKH88NHNFVQiLOeP65+RvYAgPQ6VucHWR7X+yj7R6ZSozOjBCgKKrShhzHd1YuJHSvLf+4TdBJnvRgMPsOpkhQs+aWIQN0YO8AofoxR6ZHzJAnPNcxAzGrdH4SCmzDBNS0fRG2s6JFOBUoZQKWKGTeXVaejKOqV6Yr72qKqA7SHJkAG9Wjm4NL1tezzezxKx43Yp0HI3aRI4Ihfw73EB7/A+DBPVanGfMSHwPkELwpAJATEKV5LMoqOM6KzAgxCbNrBy/ILottO/2Fptk8dKJoO63vKMagHlwUH3LSdcD2PuR5h0NRPkFTI4zHti6ZXwCW0Dmr2vfmiEWwWtbwAT4NJk94LAHB6J5dvLS+z8JeBoF8HAVsc/kcBiF0agFP4HOOr/EBNbTtHwzgE0NzZOhOVOI9DYyBmBNCCZsKMq8hNcoee8tqCNZ0go4utmFNPLwqnIucjl9QVoDtaE5uEO1Od01yeTQ7kRAn1M4FlGaLyZIpCWf5lbnQCewE8djzi8o1kGgjIURqEHaAyJmjJE20DQByklf0y44FDRjKCWAbA1oTcRAo5wnZmMW4S5ZCpZZQ6pr7tm4ClEcyjSTyiNto7o7ZEx4MFhmQq0BKx5oDmFNJsDEAXb3JQ1nXkG1HyUHqbFUeR112YOe5VW2Ki+4ctNmdVogA81mCWayta7KweCyhb2h5opLI39U8jOr8KGUGNABbMYGc0ICHQuoolXfanRumlind0IhZeS9ZPRVkBSqf0xoNGmOSfB+MKxhxZanjyaIQ8lrGw4H3pfKuasg7n2aWIYrycuFWAIBi+xaiyDM/+1744Ayxg4/grsL2RzO8ykKe3mhoNHPQ8dIvWNyHbCnCLBkz8HY/HJH0WkqIMg6s0EqKftTKEfUAgtYKA2sBkKv9XBl2bdwShXZnKegBgdlv8jogtIyRFFgpXfk4YUJVmblKRYeVRxv+NwoGFnUMSzruV8Y0N3HzQwaA7f46AXBNAHQqbAm3UGDk94TgiUuwwkRsO7h1pha4cihipwi8cFGw8rTYFa3aypP2JG4kKf8tQxTAOO1ND0nf5YtTNlIjobdeWNgWo0BY8gzLSxDd2GMnDHqiosdbyYFCL1PVDMCOuhQoP+YSRfTizO79CEec3w+CnPMk0On4Jfujiq3DkqOgLcKgGvzszefUsznYGICTohSWtXdppv7NAChOT50laUJj2aSc+0U1DfTdJDkDjJYHCEhyLmhngx42oynRyJlftJRamP7+Q7BELOq0MGL2NP99qM/RD1es8NiGE8w6YpsCqCkET4QwFzzJD4PIS2LbTQttOYyBK0Hu/S1jFPOxw7FcLLTZZ8kSwcYpOJwIWeEzh1TXMJMjNgFXHQkfn6nh0BqVwJrVYD67sDwglUPhHA5zeDTFO2t3uNTi3cbL846XVp/niYuyxp+r45RdFb82l8RAfACfAYjytTClVlYFB9GR9iP0dTzAGgBoXh/jBx+cnL2gAp4iYwFHEh0ze1soedwsO5TaBEiZIqas5iFpb611PsnBR5PUhDTUZaqTjVHwysKMkdtxgrQsn/DAdErIsRhNJRegnEvn3S9m4sARQfFZohMrG5qm+AT9DYFaB6cnx144oR+p2alTTqrs9DiscSgY4MyCFpbA6/6TaKt95wR+8fnCaU3OF0RRVlpoLWlsoTRk1uRDFqd3/iHEcmkLwycqQIIIq+RDR4E8dTfTW9CPqPwM1tYHycKDl77mO6J6fo0C2cNnNpVSORVnWZQv787ky8fjmUkO+GmbchYAvvbP+/CF+o9tHXNCjOmZ3q54OtHmNm8/haVWydShP0HrA3JmmUGJVJ4LxcUvhdw3z9OJMuarE/yBc4O/wRkB4N2dyuen3/0z3HxnA0v5COUGn5MJAAzV35f1WQpASOGQT2hv/uZfv4XvX7oIL8VzsEqMivmuQ5cF5tBiW7f/U9rQ2aQlBcCi86UPzvv28b/h10/e1u/MmJ/AU9a8VL58+dVb/Mqb8OyKBNsf3PnTW7eWdVgZJ6698Mp1LlW/w4hfgGdHpHY/Yl/04zv33jqEXpbLOunyxrIHkwmcUWYwncIOZecAHITP3WQ7vAVnFA6EN56kd16HHclOAThfXXqNw/ObsKmkcPUR/PUu7EB2BoDQnn8k+RXv/gQ2l+kwxatHMD2CLcvOMpwqhDe3pLzIpMZqcyadIqt/QD+DuN1/F7YpCJMhXuRfx/93G7YoWzeBc9Wl6xyF34AdCR+tv9xAc8jRAbYhWzUBDXcEP4IdCqfnAu4EtiRnLIeXTTaYcIV2A3YvE76m0EsvvfTSSy+99LKB/B8VZLLkcMV6CAAAAABJRU5ErkJggg==" alt="monitor-logo" class="monitorIcon" />\n          </div>\n          <span\n            data-str-id="feedback-form.downloadButtonText"\n            data-values="name"\n          ></span>\n        </div>\n      </span>\n    </button>\n  </div>\n</div>\n<div class="gameInfoBlock">\n  <div class="flex gameDetailsBlock">\n    <img class="appImg" alt="game-logo" />\n    <div class="flex column gameNameSection">\n      <span class="gameName ellipsis"></span\n      ><span class="flex publisher ellipsis"\n        ><span class="genre"></span><span class="separator"></span\n        ><span class="devName"></span\n      ></span>\n    </div>\n  </div>\n  <div class="whiteLablelledText">\n    <p class="gamePlayLimit" data-str-id="gamePlayLimit"></p>\n    <p class="playLimitMsg" data-str-id="playLimitMsg"></p>\n    <p class="thankYou" data-str-id="thankYou"></p>\n  </div>\n  <div class="gameDownloadSection">\n    <p data-str-id="enjoyedTheGame" class="enjoyedTheGame"></p>\n    <a\n      target="_blank"\n      class="flex default download-on-mobile black button-download-os-specific-post button-download-os-specific"\n      rel="noreferrer noopener"\n      onClick="deliverStats(event)"\n      data-screentype="download_screen"\n      ><div class="flex vrtlCenter hrtlCenter">\n        <div class="flex perfectCenter iconContainer">\n          <icon\n            class="play-store-logo icon-play-store"\n            alt="Play store logo"\n          />\n        </div>\n        <div\n          class="text endingScreenDownloadText"\n        ></div></div\n    ></a>\n  </div>\n</div>\n<div\n  id="arrowDown"\n  class="start"\n  onclick="this.style.display=\'none\'"\n>\n  <div class="download-arrow">\n    <img\n      id="arrow-icon"\n      alt=""\n    />\n  </div>\n  <div\n    class="about-text"\n    data-str-id="feedback-form.downloadClicked"\n  ></div>\n</div>\n</div>');
        var p = document.querySelector(".screenshotContainer");
        if (
          ((p.style.display = "block"),
          window.isPortraitMode
            ? p.classList.add("portrait")
            : p.classList.add("landscape"),
          n || window.isPortraitMode || p.classList.add("l-desktop"),
          window.isDownloadClicked)
        ) {
          var m = a()("remoteVideo", "png").dataUri;
          if (m && "data:," !== m)
            document.querySelector(".screenshotBg").style.backgroundImage =
              "url(".concat(m, ")");
          else {
            var f,
              w,
              v =
                null == o ||
                null === (f = o.media) ||
                void 0 === f ||
                null === (w = f.desktop) ||
                void 0 === w
                  ? void 0
                  : w.banner;
            v &&
              (document.querySelector(".screenshotBg").style.backgroundImage =
                "url(".concat(v, ")")),
              p.classList.remove("l-desktop");
          }
          return (
            (document.querySelector(".gameBlock").style.display = "none"),
            (document.querySelector(".gameInfoBlock").style.display = "none"),
            void (document.getElementById("arrow-icon").src = i.a)
          );
        }
        if (window.avoidScreenShot) {
          var g,
            b,
            y =
              null == o ||
              null === (g = o.media) ||
              void 0 === g ||
              null === (b = g.desktop) ||
              void 0 === b
                ? void 0
                : b.banner;
          y &&
            (document.querySelector(".screenshotBg").style.backgroundImage =
              "url(".concat(y, ")")),
            p.classList.remove("l-desktop");
        } else {
          var h = a()("remoteVideo", "png").dataUri;
          if (h && "data:," !== h)
            document.querySelector(".screenshotBg").style.backgroundImage =
              "url(".concat(h, ")");
          else {
            var S,
              O,
              k =
                null == o ||
                null === (S = o.media) ||
                void 0 === S ||
                null === (O = S.desktop) ||
                void 0 === O
                  ? void 0
                  : O.banner;
            k &&
              (document.querySelector(".screenshotBg").style.backgroundImage =
                "url(".concat(k, ")")),
              p.classList.remove("l-desktop");
          }
        }
        var E = o.name,
          I = o.appGenre,
          j = o.publisher;
        document.querySelectorAll(".appImg").forEach(function (e) {
          (e.src = r || c), (e.alt = "".concat(E));
        }),
          document.querySelectorAll(".gameName").forEach(function (e) {
            e.innerText = E;
          }),
          document.querySelectorAll(".devName").forEach(function (e) {
            e.innerText = j;
          }),
          document.querySelectorAll(".genre").forEach(function (e) {
            e.innerText = I;
          }),
          n && (document.querySelector(".download-on-mobile").href = u),
          document
            .querySelector(".download-on-mobile")
            .setAttribute("data-btntype", l);
        var x = document.querySelector(".play-store-logo");
        x.classList.remove("icon-play-store", "icon-apple"),
          x.classList.add(s),
          (document.querySelector(".endingScreenDownloadText").innerHTML = d),
          (document.querySelector(".endingScreenDownloadText").innerHTML = d),
          (document.querySelector("#player").style.display = "none"),
          (document.querySelector(".app").style.display = "block"),
          (document.querySelector(".gamePlayScreen").style.display = "block"),
          n
            ? ((document.querySelector(".gameBlock").style.display = "none"),
              (document.querySelector(".gameInfoBlock").style.display =
                "block"))
            : (window.isQtWeb
                ? ((document.querySelector(".gameBlock").style.display =
                    "none"),
                  window.qtContext.dataChanged(
                    JSON.stringify({ event: "notifyClientBtnClicked" })
                  ))
                : (document.querySelector(".gameBlock").style.display =
                    "block"),
              (document.querySelector(".gameInfoBlock").style.display =
                "none")),
          (document.getElementById("arrow-icon").src = i.a),
          window.isWhiteLabelledApp &&
            ((document.querySelector(".genreContainer").style.display = "none"),
            document
              .querySelectorAll(".gameDownloadSection")
              .forEach(function (e) {
                e.style.display = "none";
              }),
            (document.querySelector(
              ".gameInfoBlock .gameNameSection"
            ).style.display = "none"));
      };
  },
  164: function (e, t, n) {
    e.exports = n.p + "images/arrow.png";
  },
  166: function (e, t, n) {
    e.exports = n.p + "images/nutaku_desktop.svg";
  },
  17: function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return o;
    }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return r;
      }),
      n.d(t, "f", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return s;
      });
    var o = {
        singular: "SINGULAR",
        appsflyer: "APPSFLYER",
        adjust: "ADJUST",
        singular_custom: "SINGULAR_CUSTOM",
        myTracker: "MYTRACKER",
        plarium_custom: "PLARIUM_CUSTOM",
      },
      i = "nowgg-",
      r = 180,
      a = 50,
      c = 16,
      s = { MIN: 266, MAX: 361 };
  },
  2: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return m;
    }),
      n.d(t, "a", function () {
        return g;
      }),
      n.d(t, "c", function () {
        return b;
      }),
      n.d(t, "g", function () {
        return y;
      }),
      n.d(t, "f", function () {
        return h;
      }),
      n.d(t, "e", function () {
        return S;
      });
    var o = n(159),
      i = n.n(o),
      r = n(3),
      a = n(17),
      c = n(71),
      s = n(0);
    function d(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? d(Object(n), !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : d(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var m = function () {
        try {
          return i.a.parse(window.navigator.userAgent);
        } catch (e) {
          return {};
        }
      },
      f = function () {
        var e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return (t =
          null !== (e = t) && void 0 !== e && e.includes("?")
            ? t.includes("af_js_web=true")
              ? t
              : "".concat(t, "af_js_web=true")
            : "".concat(t, "?af_js_web=true"));
      },
      w = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, o;
        return (
          (t = e),
          (o = [
            {
              key: "isSafari",
              value: function () {
                return !!(
                  navigator.vendor.match(/[Aa]+pple/g) &&
                  navigator.vendor.match(/[Aa]+pple/g).length > 0
                );
              },
            },
          ]),
          (n = null) && u(t.prototype, n),
          o && u(t, o),
          e
        );
      })();
    p(w, "isMobile", function () {
      return [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i,
        /Opera Mini/i,
        /IEMobile/i,
        /WPDesktop/i,
      ].some(function (e) {
        return (
          navigator.userAgent.match(e) ||
          /iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
        );
      });
    }),
      p(w, "isiOS", function () {
        return (
          /iPad|iPhone|iPod/.test(navigator.platform) ||
          ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
        );
      }),
      p(w, "isiOSSafari", function () {
        return (
          !!(
            /iPad|iPhone|iPod/.test(navigator.platform) ||
            ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)
          ) && -1 !== navigator.userAgent.indexOf("Safari")
        );
      }),
      p(w, "isAndroidChrome", function () {
        return [/Android/i].some(function (e) {
          return (
            !!navigator.userAgent.match(e) &&
            navigator.userAgent.match(/Safari/i)
          );
        });
      }),
      p(w, "isIPad", function () {
        return !!(
          navigator.maxTouchPoints &&
          navigator.maxTouchPoints > 2 &&
          /MacIntel/.test(navigator.platform)
        );
      }),
      p(w, "getOS", function () {
        var e = window.navigator.platform,
          t = m(),
          n = t && t.os ? t.os.family : "others";
        return (
          -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(e)
            ? (n = "mac")
            : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(e)
            ? (n = "win")
            : -1 !== ["iPhone", "iPad", "iPod"].indexOf(e)
            ? (n = "ios")
            : (-1 === ["Android", "Linux"].indexOf(e) && "Android" !== n) ||
              (n = "android"),
          n
        );
      }),
      p(w, "getWinVer", function () {
        return "win" === w.getOS() ? i.a.os.version : "";
      }),
      p(w, "isSamsungBrowser", function () {
        return -1 !== navigator.userAgent.indexOf("SamsungBrowser");
      }),
      p(w, "getLang", function () {
        var e = new URLSearchParams(window.location.search).get("lang");
        return (
          (null != e && "" !== e) ||
            (e =
              (navigator.languages && navigator.languages[0]) ||
              navigator.language),
          (null != e && "" !== e) || (e = "en-US"),
          e
        );
      }),
      p(w, "getCookie", function (e) {
        for (
          var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0;
          o < n.length;
          o++
        ) {
          for (var i = n[o]; " " === i.charAt(0); ) i = i.substring(1);
          if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return null;
      }),
      p(w, "getLink", function (e) {
        var t,
          n = window.sessionId || Object(r.o)(),
          o = w.getOS(),
          i = w.getWinVer(),
          c = e,
          s =
            w.getCookie("preferred_lang") ||
            w.getLang().substring(0, 2) ||
            "en",
          d = w.getCookie("_ga") || "",
          l = "".concat(a.d).concat(e);
        t =
          "win" === w.getOS()
            ? "bsx-install-button-".concat(a.d + e)
            : "".concat(a.d).concat(e);
        return "https://cloud.bluestacks.com/api/getdownloadnow?platform="
          .concat(o, "&win_version=")
          .concat(i, "&client_uuid=")
          .concat(n, "&app_pkg=")
          .concat(c, "&preferred_lang=")
          .concat(s, "&utm_source=")
          .concat("android_cloud", "&utm_medium=&gaCookie=")
          .concat(
            d,
            "&gclid=&clickid=&msclkid=&affiliateId=&offerId=&transaction_id=&aff_sub=&first_landing_page=&referrer="
          )
          .concat(window.location.href, "&download_page_referrer=")
          .concat(window.location.href, "&utm_campaign=")
          .concat(l, "&exit_utm_campaign=")
          .concat(t, "&incompatible=")
          .concat(!1);
      }),
      p(w, "downloadBlueStacks", function (e) {
        var t = w.getLink(e);
        window.location = t;
      }),
      p(w, "isPCChrome", function () {
        return (
          -1 !== navigator.userAgent.indexOf("Chrome") ||
          -1 !== navigator.userAgent.indexOf("CriOS")
        );
      }),
      (t.b = w);
    var v = (function () {
      var e = function (e) {
        return e.test(window.navigator.userAgent);
      };
      switch (!0) {
        case e(/edg/i):
          return "Microsoft Edge";
        case e(/trident/i):
          return "Microsoft Internet Explorer";
        case e(/firefox|fxios/i):
          return "Mozilla Firefox";
        case e(/opr\//i):
          return "Opera";
        case e(/ucbrowser/i):
          return "UC Browser";
        case e(/samsungbrowser/i):
          return "Samsung Browser";
        case e(/chrome|chromium|crios/i):
          return "Google Chrome";
        case e(/safari/i):
          return "Apple Safari";
        default:
          return "Other";
      }
    })();
    var g = function () {
        var e,
          t = Object(r.c)(),
          n = m(),
          o = window.sessionId || Object(r.o)(),
          i = window.gameId,
          a = document.referrer ? document.referrer.split("/")[2] : "NA",
          c = sessionStorage.getItem("utm_medium"),
          s = sessionStorage.getItem("utm_source"),
          d = sessionStorage.getItem("utm_campaign");
        return {
          browser: v,
          browser_version: n ? n.version : null,
          user_uuid: o || (t.sessionId ? t.sessionId : null),
          publisher: t.publisher ? t.publisher : null,
          screen_res: ""
            .concat(window.screen.width * window.devicePixelRatio, "x")
            .concat(window.screen.height * window.devicePixelRatio),
          os: n && n.os ? n.os.family : null,
          os_version: n && n.os ? n.os.version : null,
          device:
            n.manufacturer && n
              ? "".concat(n.manufacturer, " ").concat(n.product)
              : navigator.platform,
          timestamp: Date.now(),
          session_id: o || (t.sessionId ? t.sessionId : null),
          package_name:
            t.packageName ||
            (null === (e = window.appInfo) || void 0 === e
              ? void 0
              : e.packageName) ||
            null,
          countryCode: t.countryCode || null,
          referrer: a || null,
          utm_campaign: d || "NA",
          utm_medium: c || "NA",
          utm_source: s || "NA",
          appId: i,
          pageReferer: document.referrer,
          adTrackingId: window.adTrackingId,
          nowSource:
            s && "NA" !== s ? s : document.referrer ? document.referrer : "NA",
        };
      },
      b = function (e) {
        var t, n;
        null != e &&
          null !== (t = e.currentTarget) &&
          void 0 !== t &&
          t.dataset &&
          Object(s.ab)("click_event", {
            click_type:
              (null === (n = e.currentTarget.dataset) || void 0 === n
                ? void 0
                : n.btntype) || null,
          });
      };
    window.deliverStats = function (e) {
      var t, n, o, i, r;
      (window.singularClick && window.singularClick(),
      null != e &&
        null !== (t = e.currentTarget) &&
        void 0 !== t &&
        t.dataset) &&
        Object(s.ab)("ac_click_conversion", {
          conversion_type:
            (null == e ||
            null === (n = e.currentTarget) ||
            void 0 === n ||
            null === (o = n.dataset) ||
            void 0 === o
              ? void 0
              : o.btntype) || null,
          screen_type:
            (null == e ||
            null === (i = e.currentTarget) ||
            void 0 === i ||
            null === (r = i.dataset) ||
            void 0 === r
              ? void 0
              : r.screentype) || null,
        });
    };
    var y = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        Object(s.ab)(e, l({}, t));
      },
      h = function () {
        var e = window.matchMedia("(display-mode: standalone)").matches;
        return !!(
          document.referrer.startsWith("android-app://") ||
          navigator.standalone ||
          e
        );
      },
      S = function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        e = "";
        var t = Object(r.c)() || {},
          n = t.appPublisherSlug,
          o = t.appId,
          i = t.appSlug,
          s = window.sessionId || Object(r.o)(),
          d = sessionStorage.getItem("utm_source"),
          l = sessionStorage.getItem("utm_campaign"),
          u = w.getCookie("fbClickId"),
          p = w.getCookie("_fbp");
        l = l ? (e ? "".concat(l).concat(e) : l) : "organic".concat(e);
        var m = function () {
          return {
            android:
              t && t.targetUrl
                ? t.targetUrl.android
                : "https://play.google.com/store/apps/".concat(
                    t.packageName ? "details?id=".concat(t.packageName) : ""
                  ),
            ios:
              t && t.targetUrl
                ? t.targetUrl.iOS
                : "https://www.apple.com/in/app-store/",
          };
        };
        if (!t.targetUrl) return m();
        switch (t.attributionType) {
          case a.e.appsflyer:
            var v = d && "NA" !== d ? "".concat(d, "_web") : "nowgg_organic",
              b = l && "NA" !== l ? l : "";
            return {
              android: ""
                .concat(f(t.targetUrl.android), "&pid=")
                .concat(v, "&c=")
                .concat(b, "&clickid=")
                .concat(s),
              ios: ""
                .concat(f(t.targetUrl.iOS), "&pid=")
                .concat(v, "&c=")
                .concat(b, "&clickid=")
                .concat(s),
            };
          case a.e.singular:
            var y = window,
              h = y.singularSdk,
              S = y.SingularConfig,
              O = y.singular;
            if (h && S && O) {
              var k = atob(O),
                E = k.split(":"),
                I = Object(r.k)();
              if (E.length > 1 && !I.android) {
                var j = new S(
                  E[0],
                  E[1],
                  window.location.host.split(".").reverse().join(".")
                ).withCustomUserId(s);
                h.init(j),
                  (window.singularClick = function () {
                    return h.event("download_clicked", g());
                  });
                var x = {
                  android: h.buildWebToAppLink(t.targetUrl.android),
                  ios: h.buildWebToAppLink(t.targetUrl.iOS),
                };
                return (
                  window.playUrl
                    ? n &&
                      o &&
                      i &&
                      window.history.replaceState(
                        null,
                        "",
                        ""
                          .concat(Object(c.b)(), "/")
                          .concat(n, "/")
                          .concat(o, "/")
                          .concat(i)
                      )
                    : window.history.replaceState(null, "", ""),
                  Object(r.E)(x),
                  x
                );
              }
              return I;
            }
            return m();
          case a.e.adjust:
            var M = d && "NA" !== d ? "".concat(d, "_web") : "nowgg_organic",
              T = l && "NA" !== l ? l : "";
            return {
              android: ""
                .concat(t.targetUrl.android, "&campaign=")
                .concat(M, "&adgroup=")
                .concat(T),
              ios: ""
                .concat(t.targetUrl.iOS, "&campaign=")
                .concat(M, "&adgroup=")
                .concat(T),
            };
          case a.e.singular_custom:
            var L = d && "NA" !== d ? "".concat(d, "_web") : "nowgg_organic",
              A = l && "NA" !== l ? l : "";
            return {
              android: ""
                .concat(t.targetUrl.android, "?_smtype=3&pcn=")
                .concat(A, "&psn=")
                .concat(L),
              ios: ""
                .concat(t.targetUrl.iOS, "?_smtype=3&pcn=")
                .concat(A, "&psn=")
                .concat(L),
            };
          case a.e.myTracker:
            var _ = d && "NA" !== d ? "".concat(d, "_web") : "nowgg_organic",
              C = l && "NA" !== l ? l : "";
            return u
              ? {
                  android: ""
                    .concat(t.targetUrl.android, "&mt_network=")
                    .concat(_, "&mt_campaign=")
                    .concat(C, "&_1lpb_fbclid=")
                    .concat(u, "&_1lpb_fbp=")
                    .concat(p),
                  ios: ""
                    .concat(t.targetUrl.iOS, "&mt_network=")
                    .concat(_, "&mt_campaign=")
                    .concat(C, "&_1lpb_fbclid=")
                    .concat(u, "&_1lpb_fbp=")
                    .concat(p),
                }
              : {
                  android: ""
                    .concat(t.targetUrl.android, "&mt_network=")
                    .concat(_, "&mt_campaign=")
                    .concat(C),
                  ios: ""
                    .concat(t.targetUrl.iOS, "&mt_network=")
                    .concat(_, "&mt_campaign=")
                    .concat(C),
                };
          case a.e.plarium_custom:
            var P = sessionStorage.getItem("queryParams");
            return P
              ? {
                  android: "".concat(t.targetUrl.android).concat(P),
                  ios: "".concat(t.targetUrl.iOS).concat(P),
                }
              : { android: t.targetUrl.android, ios: t.targetUrl.iOS };
          default:
            return m();
        }
      };
  },
  20: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return d;
    }),
      n.d(t, "a", function () {
        return l;
      });
    var o = n(129);
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function c(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var s = {
      en: "i18n/en-US.json",
      de: "i18n/de-DE.json",
      es: "i18n/es-ES.json",
      pl: "i18n/pl-PL.json",
      pt: "i18n/pt-BR.json",
      ru: "i18n/ru-RU.json",
      tr: "i18n/tr-TR.json",
      zh: "i18n/zh-TW.json",
      ar: "i18n/ar-EG.json",
      ko: "i18n/ko-KR.json",
      th: "i18n/th-TH.json",
      vi: "i18n/vi-VN.json",
      fr: "i18n/fr-FR.json",
      ja: "i18n/ja-JP.json",
      it: "i18n/it-IT.json",
    };
    window.localizedData = o;
    var d = function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : document,
            t = e.querySelectorAll("[data-str-id]"),
            n = 0;
          n < t.length;
          n++
        ) {
          var o = t[n].getAttribute("data-str-id"),
            i = t[n].getAttribute("data-values");
          if (i) {
            var r = window.localizedData[o].replace(
              /(\{.+\})/g,
              window.campaignData[i]
            );
            r && (t[n].innerHTML = r);
          } else {
            var a = window.localizedData[o],
              c = t[n].getAttribute("data-var");
            a && (t[n].innerHTML = a.replace(/(\{.+\})/g, c));
          }
        }
      },
      l = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      s[window.language] || (window.language = "en"),
                        "en" !== window.language
                          ? fetch(
                              "".concat("/play", "/").concat(s[window.language])
                            )
                              .then(function (e) {
                                return e.json();
                              })
                              .then(function (e) {
                                return (window.localizedData = r(r({}, o), e));
                              })
                          : (window.localizedData = o),
                        d();
                    case 3:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function a(e) {
                  c(r, o, i, a, s, "next", e);
                }
                function s(e) {
                  c(r, o, i, a, s, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })();
  },
  210: function (e, t, n) {
    "use strict";
    var o,
      i = n(0),
      r = n(83),
      a = n(233),
      c = n.n(a),
      s = n(234),
      d = n.n(s),
      l = n(235),
      u = n.n(l),
      p =
        '<div\nid="mobileMenu"\nclass="mobile-menu hide"\nonContextMenu="(event) => event.preventDefault()"\nonTouchStart="menu.handleLongPress()"\nonTouchEnd="menu.handleTouchMoveEnd()"\n>\n<div class="brand-logo" onClick="showProductInfo()">\n  <img alt="'
          .concat(window.isWhiteLabelledApp ? "logo" : "now.gg logo", '" src="')
          .concat(
            window.isWhiteLabelledApp ? u.a : d.a,
            '" />\n  <div class="info-container">\n    <icon id="icon-oval" class="icon-oval" />\n  </div>\n</div>\n<div class="button-components">\n  <div id="toolbarMenu" class="toolbarMenu"></div>\n  <div class="url-share" onClick="handleShareButton(event)">\n    <img class="share-logo" alt="Share" src="'
          )
          .concat(
            c.a,
            '"/>\n  </div>\n  <div class="upArrowButton" onClick="setHideState()">\n    <svg\n      class="upArrow"\n      viewBox="0 0 12 7"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        d="M0.292893 6.70711C0.683417 7.09763 1.31658 7.09763 1.70711 6.70711L6 2.41421L10.2929 6.70711C10.6834 7.09763 11.3166 7.09763 11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289L6.70711 0.292893C6.31658 -0.0976315 5.68342 -0.0976315 5.29289 0.292893L0.292893 5.29289C-0.0976311 5.68342 -0.0976311 6.31658 0.292893 6.70711Z"\n      />\n    </svg>\n  </div>\n</div>\n</div>'
          ),
      m = function (e) {
        Object(r.a)("mobileMenu", e);
      },
      f = function () {
        setTimeout(function () {
          var e = Object(i.o)(!window.sessionEnded);
          m({ x: e.x, y: e.y });
        }, 100);
      },
      w = function (e) {
        o || ((o = !0), window.removeEventListener("resize", f, !0)),
          Object(r.b)("mobileMenu", e);
      },
      v = function e() {
        window.removeEventListener("touchmove", w),
          window.removeEventListener("touchend", e);
      },
      g = function () {
        "none" !== document.getElementById("mobileMenu").style.display &&
          (window.addEventListener("touchmove", w),
          window.addEventListener("touchend", v));
      };
    t.a = {
      init: function () {
        (window.menu = {}),
          (window.menu.handleLongPress = g),
          (window.menu.handleTouchMoveEnd = v),
          (document.getElementById("userActions").innerHTML = p),
          navigator.share ||
            (document.querySelector(".url-share").style.display = "none");
        var e = Object(i.o)();
        ((o && !window.sessionEnded) ||
          (f(),
          window.addEventListener("resize", f, !0),
          document
            .querySelector(".app")
            .addEventListener("wheel", function (e) {
              return e.preventDefault();
            })),
        window.isSocialMediaFlow) ||
          (document.getElementById("mobileMenu").style.display = "block");
        m({ x: e.x, y: e.y });
      },
    };
  },
  221: function (e, t, n) {
    "use strict";
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    n.d(t, "a", function () {
      return i;
    });
    var i = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.duration = 0),
          (this.elapsed = 0),
          (this.isActive = !1),
          (this.lastFrameTime = Date.now()),
          (this.lastSecond = Date.now()),
          (this.onTick = function () {}),
          (this.onCompleted = function () {}),
          this.tick();
      }
      var t, n, i;
      return (
        (t = e),
        (n = [
          {
            key: "getTimeLeft",
            value: function () {
              var e = this.duration - this.elapsed;
              return Math.max(0, e);
            },
          },
          {
            key: "pause",
            value: function () {
              return (this.isActive = !1), this;
            },
          },
          {
            key: "reset",
            value: function () {
              this.elapsed = 0;
            },
          },
          {
            key: "setDuration",
            value: function (e) {
              return (
                (this.lastFrameTime = Date.now()), (this.duration = e), this
              );
            },
          },
          {
            key: "start",
            value: function () {
              return (this.isActive = !0), this;
            },
          },
          {
            key: "tick",
            value: function () {
              var e = Date.now(),
                t = e - this.lastFrameTime;
              this.isActive &&
                e - this.lastSecond > 1e3 &&
                (this.onTick(this.getTimeLeft()), (this.lastSecond = e)),
                (this.lastFrameTime = e),
                this.isActive &&
                  ((this.elapsed += t / 1e3),
                  this.getTimeLeft() <= 1 &&
                    (this.pause(), this.onCompleted())),
                window.requestAnimationFrame(this.tick.bind(this));
            },
          },
        ]) && o(t.prototype, n),
        i && o(t, i),
        e
      );
    })();
  },
  222: function (e, t, n) {
    "use strict";
    t.a =
      '<div class="copied-tooltip">\n<div data-str-id="nerd-mode.copiedToClipboard"></div>\n</div>\n<div class="nerd-mode-data">\n<button class="copy-button" onclick="bs.showNerdModeFields()">\n  <svg\n    width="13"\n    height="16"\n    viewBox="0 0 13 16"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      fillRule="evenodd"\n      clipRule="evenodd"\n      d="M1.5 1.5H8.5V3H4.5H3V4.5V11.5H1.5V1.5ZM3 13H1.5H0V11.5V1.5V0L1.5 0L8.5 0L10 0V1.5V3H11.5H13V4.5V14.5V16H11.5H4.5H3V14.5V13ZM11.5 4.5H4.5V14.5H11.5V4.5Z"\n      fill="white"\n    />\n  </svg>\n</button>\n<button class="close-button" onclick="bs.handleClose()">\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    width="12"\n    height="13"\n    viewBox="0 0 12 13"\n    fill="none"\n  >\n    <path\n      d="M0.850394 12.0945L0 11.2441L5.16535 6.04724L0 0.850394L0.850394 0L6.01575 5.19685L11.1496 0L12 0.850394L6.83465 6.04724L12 11.2441L11.1496 12.0945L6.01575 6.92913L0.850394 12.0945Z"\n      fill="white"\n    />\n  </svg>\n</button>\n<div class="title">\n  <div class="content">\n    <h3 data-str-id="about-product.nerdMode"></h3>\n  </div>\n  <p class="about" data-str-id="nerd-mode.about"></p>\n</div>\n<hr />\n<div class="copyable-data" id="copyData">\n  <table>\n    <tbody>\n      <tr>\n        <td class="title">Platform &nbsp;:</td>\n        <td class="values">\n          <span id="browser" class="pkg"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">App Package &nbsp;:</td>\n        <td class="values">\n          <span id="nerdPkg" class="pkg"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">Country &nbsp;:</td>\n        <td class="values">\n          <span id="nerdGeo" class="geo"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">Instance ID &nbsp;:</td>\n        <td class="values">\n          <span id="nerdInstance" class="geo"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">User ID &nbsp;:</td>\n        <td class="values">\n          <span id="nerdUserId" class="geo"></span>\n        </td>\n      </tr>\n      <tr class="viewport">\n        <td class="title">Viewport &nbsp;:</td>\n        <td class="values">\n          <span class="width" id="nerdWidth"></span> x\n          <span class="height" id="nerdHeight"></span>\n        </td>\n      </tr>\n      <tr class="nerdPixelRatio">\n        <td class="title">Device Pixel Ratio &nbsp;:</td>\n        <td class="values" id="nerdPixelRatio"></td>\n      </tr>\n      <tr id="nerdFrames">\n        <td class="title">Frames &nbsp;:</td>\n        <td class="values">\n          <span class="droppedVideoFrames"></span> dropped out\n          of <span class="totalVideoFrames"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">Connection State &nbsp;:</td>\n        <td class="values">\n          <span id="nerdCon"></span>\n        </td>\n      </tr>\n      <tr>\n        <td class="title">Ping &nbsp;:</td>\n        <td class="values">\n          <span id="nerdRTT"></span>\n        </td>\n      </tr>\n      <tr id="vidStatus">\n        <td class="title">Current Resolution &nbsp;:</td>\n        <td class="values">\n          <span class="connection-state" id="vidStat"></span>\n        </td>\n      </tr>\n      <tr id="vidFrames">\n        <td class="title">Frames per second &nbsp;:</td>\n        <td class="values">\n          <span class="connection-state" id="vidFps"></span>\n        </td>\n      </tr>\n      <tr id="nerdJitter">\n        <td class="title">Jitter / AvgJitterBufferDelay&nbsp:</td>\n        <td class="values">\n          <span id="nerdJitterAvg"></span>\n        </td>\n      </tr>\n      <tr id="buildVersion">\n        <td class="title">Build version &nbsp;:</td>\n        <td class="values">\n          <span class="buildVersion" id="buildVersionVal"></span>\n        </td>\n      </tr>\n      <tr id="deviceInfo" style="width: 0; height: 0; position:absolute; overflow:hidden;">\n        <td class="title">Device Info:</td>\n        <td class="values">\n          <span id="deviceInfoVal"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <hr id="nerdSep" />\n  <div class="flex videoStatsBlock">\n    <div class="video" id="videoRTS" style="display: none;">\n      <div class="title">Video</div>\n      <table>\n        <tbody>\n          <tr>\n            <td class="title">\n              Bitrate &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="vidBR"\n              ></span>\n            </td>\n          </tr>\n          <tr>\n            <td class="title">\n              Codec &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="vidCD"\n              ></span>\n            </td>\n          </tr>\n          <tr>\n            <td class="title">\n              Packets &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="vidLS"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class="audio" id="audioRTS" style="display: none;">\n      <div class="title">Audio</div>\n      <table>\n        <tbody>\n          <tr>\n            <td class="title">\n              Bitrate &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="audBR"\n              ></span>\n            </td>\n          </tr>\n          <tr>\n            <td class="title">\n              Codec &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="audCD"\n              ></span>\n            </td>\n          </tr>\n          <tr>\n            <td class="title">\n              Packets &nbsp;: &nbsp;<span\n                class="connection-state"\n                id="audLS"\n              ></span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n<hr id="nerdSep" class="videoStatsHr" />\n<div class="nerd-item">\n<p data-str-id="showTapToggleTitle"></p>\n<div id="tpSwitch" class="check-switch">\n  <input\n    type="checkbox"\n    id="tpEnable"\n    onchange="bs.tpToggle(event)"\n  />\n  <div class="circle"></div>\n</div>\n</div>\n</div>';
  },
  223: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return b;
    }),
      n.d(t, "a", function () {
        return y;
      });
    var o = n(3),
      i = n(0),
      r = n(44),
      a = n(7),
      c = n(5),
      s = n(2),
      d = n(73),
      l = n(81),
      u = n(35);
    function p(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var m = function (e) {
        if (122 === e.keyCode) {
          var t = document.querySelectorAll(".video-container");
          Object(i.a)("fullscreen", t);
        }
      },
      f = function (e) {
        if (["gameplay", "loading"].includes(window.screenType)) {
          if (document.querySelector("._hj-widget-container")) return;
          e.preventDefault();
        }
      },
      w = function () {
        if (!document.fullscreenelement) {
          var e = window.innerHeight,
            t = window.innerWidth;
          if (
            (s.b.isSamsungBrowser() &&
              window.isSocialMediaFlow &&
              ((e = window.outerHeight), (t = window.outerWidth)),
            s.b.isiOSSafari() || s.b.isAndroidChrome())
          ) {
            var n = document.querySelector("body");
            if (
              (n &&
                ((n.style.height = "".concat(e, "px")),
                (n.style.width = "".concat(t, "px"))),
              e > t && !window.isPortraitMode)
            )
              document
                .querySelectorAll(
                  ".rotate-screen, .portrait-mode, .ReactModal__Overlay, .productAboutModal .ReactModal__Overlay"
                )
                .forEach(function (t) {
                  t &&
                    ((t.style.width = "".concat(e, "px")),
                    (t.style.height = ""));
                });
            else if (window.isPortraitMode && t > e) {
              document
                .querySelectorAll(
                  ".rotate-screen, .portrait-mode, .ReactModal__Overlay, .productAboutModal .ReactModal__Overlay"
                )
                .forEach(function (t) {
                  t &&
                    ((t.style.width = "".concat(e, "px")),
                    (t.style.height = ""));
                });
            } else {
              document
                .querySelectorAll(
                  ".rotate-screen, .portrait-mode, .ReactModal__Overlay, .productAboutModal .ReactModal__Overlay"
                )
                .forEach(function (t) {
                  t &&
                    ((t.style.width = ""),
                    (t.style.height = "".concat(e, "px")));
                });
            }
            setTimeout(function () {
              window.scrollTo(0, 1);
            }, 0),
              (document.body.scrollTop = 0),
              window.mobileResizeDone || (window.mobileResizeDone = !0);
          } else if (window.mobileResizeDone) {
            document
              .querySelectorAll(
                "body, .rotate-screen, .portrait-mode, .ReactModal__Overlay, .productAboutModal .ReactModal__Overlay"
              )
              .forEach(function (e) {
                e && ((e.style.width = ""), (e.style.height = ""));
              }),
              setTimeout(function () {
                window.scrollTo(0, 1);
              }, 0),
              (document.body.scrollTop = 0),
              (window.mobileResizeDone = !1);
          }
        }
      },
      v = function () {
        window.sidebar && (window.sidebar.widgetState = "click"),
          Object(u.c)() && Object(d.b)(),
          document.webkitIsFullScreen ||
          document.mozFullScreen ||
          document.msFullscreenElement ||
          document.fullscreenElement
            ? ((window.fullscreen = !0),
              (window.fullScreenFlag = !0),
              document.body.classList.add("--fullscreen"),
              s.b.isMobile() ||
                Object(i.ab)("click_event", {
                  click_type: "enter_fullscreen",
                  screen_type: window.screenType,
                }))
            : ((window.fullscreen = !1),
              (window.fullScreenFlag = !1),
              document.body.classList.remove("--fullscreen"),
              s.b.isMobile() ||
                Object(i.ab)("click_event", {
                  click_type: "exit_fullscreen",
                  screen_type: window.screenType,
                })),
          Object(c.u)(),
          Object(i.L)();
      },
      g = function () {
        document.removeEventListener("keyup", m),
          window.removeEventListener("resize", w),
          window.removeEventListener("orientationchange", w),
          document.body.removeEventListener("touchmove", f, {
            passive: !1,
            useCapture: !1,
          });
      },
      b = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              var t, n;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = 1), !(n = Object(o.c)()) || !n.packageName)) {
                        e.next = 37;
                        break;
                      }
                      if (!n.isNewUser) {
                        e.next = 34;
                        break;
                      }
                      if (window.timer) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 9),
                        Object(r.d)()
                          .then(function (e) {
                            e &&
                            e.payload &&
                            e.payload.remainingSeconds &&
                            e.payload.remainingSeconds > 0
                              ? ((window.timer = e.payload.remainingSeconds),
                                (window.ignoreTimer = !1),
                                (window.playerMuted = !0),
                                (window.onbeforeunload = a.f),
                                document.addEventListener("keyup", m),
                                window.addEventListener("resize", w),
                                window.addEventListener("orientationchange", w),
                                document.body.addEventListener("touchmove", f, {
                                  passive: !1,
                                  useCapture: !1,
                                }),
                                y())
                              : ((window.timer = t),
                                Object(i.Z)(),
                                (window.ignoreTimer = !1),
                                Object(c.b)());
                          })
                          .catch(function () {
                            Object(i.zb)("many_requests", "somethingWrong");
                          })
                      );
                    case 9:
                      e.next = 32;
                      break;
                    case 11:
                      if (!(window.timer && window.timer > 0)) {
                        e.next = 26;
                        break;
                      }
                      return (
                        (window.ignoreTimer = !1),
                        (window.playerMuted = !0),
                        (window.onbeforeunload = a.f),
                        document.addEventListener("keyup", m),
                        window.addEventListener("resize", w),
                        window.addEventListener("orientationchange", w),
                        document.body.addEventListener("touchmove", f, {
                          passive: !1,
                          useCapture: !1,
                        }),
                        y(),
                        (e.next = 24),
                        Object(a.h)(n)
                      );
                    case 24:
                      e.next = 32;
                      break;
                    case 26:
                      (window.timer = t),
                        Object(i.Z)(),
                        (window.ignoreTimer = !1),
                        Object(c.b)();
                    case 32:
                      e.next = 35;
                      break;
                    case 34:
                      n &&
                        !n.isNewUser &&
                        (Object(l.a)(),
                        Object(i.wb)(!1),
                        g(),
                        Object(c.b)(),
                        (window.sessionEnded = !0));
                    case 35:
                      e.next = 39;
                      break;
                    case 37:
                      g(), Object(i.zb)("coming_soon");
                    case 39:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function a(e) {
                  p(r, o, i, a, c, "next", e);
                }
                function c(e) {
                  p(r, o, i, a, c, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      y = function () {
        (!s.b.isAndroidChrome() && s.b.isMobile()) ||
          ["", "moz", "webkit", "ms"].forEach(function (e) {
            document.addEventListener("".concat(e, "fullscreenchange"), v, !1);
          });
      };
  },
  226: function (e, t, n) {
    e.exports = n.p + "images/GamepadDpadDown.png";
  },
  227: function (e, t, n) {
    e.exports = n.p + "images/GamepadDpadLeft.png";
  },
  228: function (e, t, n) {
    e.exports = n.p + "images/GamepadDpadRight.png";
  },
  229: function (e, t, n) {
    e.exports = n.p + "images/GamepadDpadUp.png";
  },
  230: function (e, t, n) {
    e.exports = n.p + "images/MouseLButton.png";
  },
  231: function (e, t, n) {
    e.exports = n.p + "images/MouseMButton.png";
  },
  232: function (e, t, n) {
    e.exports = n.p + "images/MouseRButton.png";
  },
  233: function (e, t, n) {
    e.exports = n.p + "images/share.svg";
  },
  234: function (e, t, n) {
    e.exports = n.p + "images/logo.svg";
  },
  235: function (e, t, n) {
    e.exports = n.p + "images/nutaku_mobile.svg";
  },
  237: function (e, t, n) {
    e.exports = n.p + "images/static_ad_bg.jpg";
  },
  238: function (e, t, n) {
    e.exports = n.p + "images/spinner.svg";
  },
  239: function (e, t, n) {
    e.exports = n.p + "images/warning-new.svg";
  },
  240: function (e, t, n) {
    e.exports = n.p + "images/tick.svg";
  },
  243: function (e, t, n) {
    e.exports = n.p + "images/androidBrowser.png";
  },
  244: function (e, t, n) {
    e.exports = n.p + "images/appStore.svg";
  },
  245: function (e, t, n) {
    e.exports = n.p + "images/iosBrowser.png";
  },
  246: function (e, t, n) {
    e.exports = n.p + "images/muted.svg";
  },
  247: function (e, t, n) {
    e.exports = n.p + "images/unmuted.svg";
  },
  248: function (e, t, n) {
    e.exports = n.p + "images/playStore.svg";
  },
  250: function (e, t, n) {
    e.exports = n.p + "images/slow-network.svg";
  },
  251: function (e, t, n) {
    e.exports = n.p + "images/unstable-network.svg";
  },
  27: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return B;
    }),
      n.d(t, "i", function () {
        return N;
      }),
      n.d(t, "d", function () {
        return G;
      }),
      n.d(t, "f", function () {
        return V;
      }),
      n.d(t, "c", function () {
        return K;
      }),
      n.d(t, "e", function () {
        return z;
      }),
      n.d(t, "a", function () {
        return X;
      }),
      n.d(t, "h", function () {
        return $;
      }),
      n.d(t, "g", function () {
        return ee;
      });
    var o,
      i,
      r,
      a,
      c,
      s,
      d,
      l,
      u,
      p,
      m,
      f,
      w = n(0),
      v = n(35),
      g = n(3),
      b = n(106),
      y = n(2),
      h = 10,
      S = 10,
      O = !1,
      k = !1,
      E = 18e4,
      I = 18e4,
      j = !0,
      x = "",
      M = "",
      T = !1,
      L = 1,
      A = 1,
      _ = {},
      C = 0,
      P = 0,
      D = !1,
      R = function () {
        Object(w.lb)(!1);
        try {
          (A = 1),
            (o.style.display = "none"),
            (o.style.zIndex = "-1"),
            m && (m.style.opacity = 0);
          var e = document.getElementById(
            "prebid-wrapper-mid-roll-videoplayer_html5_api"
          );
          setTimeout(function () {
            e && (e.pause(), (e.muted = !0));
          }, 1e3);
        } catch (e) {}
      },
      B = function () {
        (S = 10),
          setTimeout(function () {
            document.querySelector(".closeAdMidRoll").style.display = "flex";
          }, 1100),
          (document.querySelector(".icon-cont-mid-roll").style.display =
            "none"),
          (r = setInterval(function () {
            S > 0
              ? ((document.querySelector(".closeAdMidRoll").innerHTML =
                  window.localizedData.closeAdIn.replace(/(\{.+\})/g, S)),
                (S -= 1))
              : (clearInterval(r),
                (document.querySelector(".closeAdMidRoll").style.display =
                  "none"),
                (document.querySelector(".icon-cont-mid-roll").style.display =
                  "flex"));
          }, 1e3));
      },
      N = function (e) {
        (x = e), (window.midRollDimension = e);
      },
      q = function () {
        f = setTimeout(function () {
          O && 1 === A
            ? J()
            : (R(),
              Z(),
              (window.tude = window.tude || { cmd: [] }),
              tude.cmd.push(function () {
                try {
                  tude.closePlayer();
                } catch (e) {}
              }));
        }, 15e3);
      },
      G = function () {
        (document.querySelector(".midRollAdHeader").style.display = "none"),
          (o.style.display = "block"),
          Object(w.ab)("ad_impression_attempt", {
            value: "mid-roll_".concat(L, "_").concat(A),
            ad_type: "video_533x400",
          }),
          Object(w.lb)(!0),
          (window.tude = window.tude || { cmd: [] }),
          q();
        var e = D ? "mid-pod" : "mid-roll";
        window.tude.cmd.push(function () {
          ((_ = Object(w.r)()).pod = L + 1),
            (_.count = A),
            k && (_.rb = 2.1),
            D && (_.rb = 2.2),
            window.tude.setVideoPageTargeting(_),
            (u = window.tude.requestVideoAd({
              divId: "prebid-wrapper-mid-roll",
              code: e,
              options: { volume: 0 },
              sourceVideos: [
                {
                  src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                  type: "video/mp4",
                },
              ],
            })),
            F();
        });
      },
      H = function () {
        var e = document.getElementById("remoteVideo");
        e && !window.isMuted && (e.muted = !1),
          d.classList.remove("fadeIn"),
          (document.getElementById("prebid-wrapper-mid-roll-mobile").innerHTML =
            "");
        var t = document.querySelector(".progressDiv"),
          n = document.querySelector(".path");
        t && n && (n.style.strokeDashoffset = 520);
      },
      U = function (e) {
        Object(w.ab)("ad_load_fail", {
          fail_type: e,
          value: "mid-roll_".concat(L, "_").concat(A),
          ad_type: "audio",
        }),
          Q(),
          H();
      },
      V = function () {
        try {
          (window.tudeAudio = window.tudeAudio || { cmd: [] }),
            Object(w.ab)("ad_impression_attempt", {
              value: "mid-roll_".concat(L, "_").concat(A),
              ad_type: "audio",
            }),
            window.tudeAudio.cmd.push(function () {
              if (
                !(p = window.tudeAudio.requestAd({
                  divId: "prebid-wrapper-mid-roll-mobile",
                  code: "audio",
                }))
              )
                return (
                  Object(w.ab)("ad_load_fail", {
                    fail_type: "something_wrong",
                    value: "mid-roll_".concat(L, "_").concat(A),
                    ad_type: "audio",
                  }),
                  !1
                );
              W();
            });
        } catch (e) {}
      },
      W = function () {
        p.on("adRequesting", function (e) {}),
          p.on("loaded", function (e) {
            var t = e.detail.duration;
            C = +(void 0 === t ? 20 : t);
          }),
          p.on("adError", function (e) {
            U(e.type);
          }),
          p.on("playerError", function (e) {
            U(e.type);
          }),
          p.on("autoPlayFailed", function (e) {
            U(e.type);
          }),
          p.on("autoPlayRequiresMuted", function (e) {
            U(e.type);
          }),
          p.on("complete", function (e) {
            H();
          }),
          p.on("start", function (e) {
            var t = document.getElementById("remoteVideo");
            t && !t.muted && (t.muted = !0),
              d.classList.add("fadeIn"),
              Object(w.ab)("impression_event", {
                impression_type: "ad_impression",
                value: "mid-roll_".concat(L, "_").concat(A),
                ad_type: "audio",
                ad_length: C,
              }),
              Q();
          }),
          p.on("adProgress", function (e) {
            var t = e.detail.detail.currentTime;
            (t = +t) > C && (t = C);
            var n = document.querySelector(".progressDiv"),
              o = document.querySelector(".path"),
              i = (t / C) * 100;
            n &&
              o &&
              (o.style.strokeDashoffset =
                520 * (1 - Math.max(Math.min(i, 100), 0) / 100));
          }),
          p.on("adRequested", function (e) {}),
          p.on("playerReady", function (e) {}),
          p.on("adsManagerLoaded", function (e) {}),
          p.on("playInitiating", function (e) {});
      },
      F = function () {
        u.on("NO_BID", function (e) {
          f && clearTimeout(f), delete window.MIDROLL_STATE, ne(e.detail.error);
        })
          .on("LOADED", function (e) {
            var t = e.detail.duration;
            P = +(void 0 === t ? 20 : t);
            try {
              window.tude.setVideoVolume(0);
            } catch (e) {}
          })
          .on("ERROR", function (e) {
            delete window.MIDROLL_STATE,
              f && clearTimeout(f),
              ne(e.detail.error);
          })
          .on("PLAYER_AD_ERROR", function (e) {
            delete window.MIDROLL_STATE,
              f && clearTimeout(f),
              ne(e.detail.error);
          })
          .on("COMPLETED", function (e) {
            T ||
              (O && 1 === A ? J() : (R(), clearInterval(i), clearInterval(r)));
          })
          .on("SKIPPED", function (e) {
            delete window.MIDROLL_STATE;
            var t = O && 1 === A ? L : L - 1;
            Object(w.ab)("click_event", {
              click_type: "skip_ad",
              value: "mid-roll_".concat(t, "_").concat(A),
              ad_type: "video_533x400",
              ad_length: P,
            }),
              O && 1 === A && Z(),
              R(),
              clearInterval(i),
              clearInterval(r),
              (T = !0);
          })
          .on("STARTED", function (e) {
            (window.MIDROLL_STATE = "STARTED"),
              window.tude.setVideoVolume(0),
              Object(w.ab)("impression_event", {
                impression_type: "ad_impression",
                value: "mid-roll_".concat(L, "_").concat(A),
                ad_type: "video_533X400",
                ad_length: P,
              }),
              f && clearTimeout(f),
              ((O && 2 === A) || !O) && Z(),
              (function () {
                if (
                  ((document.querySelector(".icon-cont").style.display =
                    "none"),
                  O)
                ) {
                  var e = document.querySelector(".adCount"),
                    t = "";
                  e &&
                    ((t = (t = window.localizedData.midAd.replace(
                      "{currentCount}",
                      A
                    )).replace("{totalCount}", 2)),
                    (e.innerHTML = t)),
                    2 === A &&
                      ((h = 3),
                      (document.querySelector(".closeAd").innerHTML =
                        window.localizedData.closeAdIn.replace(/(\{.+\})/g, h)),
                      setTimeout(function () {
                        document.querySelector(".closeAd").style.display =
                          "flex";
                      }, 1100),
                      (i = setInterval(function () {
                        h > 0
                          ? ((document.querySelector(".closeAd").innerHTML =
                              window.localizedData.closeAdIn.replace(
                                /(\{.+\})/g,
                                h
                              )),
                            (h -= 1))
                          : (clearInterval(i),
                            (document.querySelector(".closeAd").style.display =
                              "none"),
                            (document.querySelector(
                              ".icon-cont"
                            ).style.display = "flex"));
                      }, 1e3)));
                } else
                  (h = 10),
                    (document.querySelector(".closeAd").innerHTML =
                      window.localizedData.closeAdIn.replace(/(\{.+\})/g, h)),
                    setTimeout(function () {
                      document.querySelector(".closeAd").style.display = "flex";
                    }, 1100),
                    (i = setInterval(function () {
                      h > 0
                        ? ((document.querySelector(".closeAd").innerHTML =
                            window.localizedData.closeAdIn.replace(
                              /(\{.+\})/g,
                              h
                            )),
                          (h -= 1))
                        : (clearInterval(i),
                          (document.querySelector(".closeAd").style.display =
                            "none"),
                          (document.querySelector(".icon-cont").style.display =
                            "flex"));
                    }, 1e3));
              })(),
              (M = "video"),
              (document.querySelector(".midRollAdHeader").style.display =
                "flex"),
              (o.style.zIndex = "9999"),
              (m.style.opacity = 1),
              (T = !1);
          })
          .on("CLICKED", function (e) {
            te(e);
          })
          .on("VIDEO_CLICKED", function (e) {
            te(e);
          })
          .on("PAUSED", function (e) {
            te(e);
          })
          .on("RESUMED", function (e) {
            te(e);
          });
      },
      K = function () {
        var e = Object(g.c)(),
          t = e.experimentTypes,
          n = void 0 === t ? [] : t,
          i = e.countryCode;
        (D = n.indexOf("poddedAds") > -1 && "AU" === i),
          (O = n.indexOf("midRollAds") > -1 && !D),
          (k = n.indexOf("midRollTiming") > -1 && !D);
        (E = k ? 12e4 : O ? 3e5 : 18e4),
          (o = document.querySelector(".midRollAds")),
          ((m = document.getElementById(
            "prebid-wrapper-mid-roll"
          )).style.display = "block"),
          (l = setTimeout(function () {
            if ("hidden" === document.visibilityState)
              return Object(w.pb)(!0), void Object(w.jb)("loadMidRollAd");
            G();
          }, E));
      },
      z = function () {
        (d = document.querySelector(".mobileMidroll")),
          (a = setTimeout(function () {
            var e = document.visibilityState;
            if (!y.b.isiOS())
              return "hidden" === e
                ? (Object(w.pb)(!0), void Object(w.jb)("mobileMidRoll"))
                : void V();
            Object(b.b)(V);
          }, I));
      };
    var Y = function () {
      var e = document.querySelector(".fallbackAdsMidRoll");
      e && (e.style.display = "none");
    };
    window.closeAd = function () {
      delete window.MIDROLL_STATE,
        Object(w.ab)("click_event", {
          click_type: "close_ad",
          value: "mid-roll_".concat(L - 1, "_").concat(A),
          ad_type: "".concat(M, "_").concat("video" === M ? "533x400" : x),
        }),
        Object(v.c)() && window.isNativeMouseActive && Object(v.b)(!0),
        Y(),
        R(),
        (window.tude = window.tude || { cmd: [] }),
        tude.cmd.push(function () {
          try {
            tude.closePlayer();
          } catch (e) {}
        }),
        (h = 10),
        (S = 10),
        clearInterval(i),
        clearInterval(r);
    };
    var X = function () {
      Y();
    };
    window.clearMidRollInterval = function () {
      (o = document.querySelector(".midRollAds")),
        (j = !1),
        clearTimeout(c),
        clearTimeout(s),
        clearTimeout(l),
        clearTimeout(a),
        o && R(),
        Y();
    };
    var J = function () {
        j &&
          ((A += 1),
          Object(w.ab)("ad_impression_attempt", {
            value: "mid-roll_".concat(L, "_").concat(A),
            ad_type: "video_533x400",
          }),
          (window.tude = window.tude || { cmd: [] }),
          q(),
          window.tude.cmd.push(function () {
            ((_ = Object(w.r)()).pod = L + 1),
              (_.count = A),
              window.tude.setVideoPageTargeting(_);
            var e = D ? "mid-pod" : "mid-roll";
            u = window.tude.requestVideoAd({
              divId: "prebid-wrapper-mid-roll",
              code: e,
              options: { volume: 0 },
              sourceVideos: [
                {
                  src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                  type: "video/mp4",
                },
              ],
            });
          }));
      },
      Q = function () {
        j &&
          ((L += 1),
          (s = setTimeout(function () {
            var e = document.visibilityState;
            if (!y.b.isiOS())
              return "hidden" === e
                ? (Object(w.pb)(!0),
                  void Object(w.jb)("loadMobileWrapperAgain"))
                : void $();
            Object(b.b)(V);
          }, I)));
      },
      Z = function () {
        j &&
          ((L += 1),
          (c = setTimeout(function () {
            var e = document.querySelector(".fallbackAdsMidRoll");
            if (
              ((o.style.left = "0"),
              (o.style.top = "unset"),
              (o.style.bottom = "0"),
              (e.style.left = "0"),
              (e.style.top = "unset"),
              (e.style.bottom = "0"),
              "hidden" === document.visibilityState)
            )
              return Object(w.pb)(!0), void Object(w.jb)("loadWrapperAgain");
            ee();
          }, E)));
      },
      $ = function () {
        try {
          (window.tudeAudio = window.tudeAudio || { cmd: [] }),
            Object(w.ab)("ad_impression_attempt", {
              value: "mid-roll_".concat(L, "_").concat(A),
              ad_type: "audio",
            }),
            window.tudeAudio.cmd.push(function () {
              if (
                !(p = window.tudeAudio.requestAd({
                  divId: "prebid-wrapper-mid-roll-mobile",
                  code: "audio",
                }))
              )
                return (
                  Object(w.ab)("ad_load_fail", {
                    fail_type: "something_wrong",
                    value: "mid-roll_".concat(L, "_").concat(A),
                    ad_type: "audio",
                  }),
                  !1
                );
            });
        } catch (e) {}
      },
      ee = function () {
        (document.querySelector(".midRollAdHeader").style.display = "none"),
          (o.style.display = "block"),
          Object(w.lb)(!0),
          Object(w.ab)("ad_impression_attempt", {
            value: "mid-roll_".concat(L, "_").concat(A),
            ad_type: "video_533x400",
          }),
          (window.tude = window.tude || { cmd: [] }),
          q();
        var e = D ? "mid-pod" : "mid-roll";
        window.tude.cmd.push(function () {
          ((_ = Object(w.r)()).pod = L + 1),
            (_.count = A),
            k && (_.rb = 2.1),
            D && (_.rb = 2.2),
            window.tude.setVideoPageTargeting(_),
            (u = window.tude.requestVideoAd({
              divId: "prebid-wrapper-mid-roll",
              code: e,
              options: { volume: 0 },
              sourceVideos: [
                {
                  src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                  type: "video/mp4",
                },
              ],
            }));
        });
      };
    function te(e) {
      e.stopPropagation();
      var t = O && 1 === A ? L : L - 1;
      Object(w.ab)("click_event", {
        click_type: "on_ad",
        value: "mid-roll_".concat(t, "_").concat(A),
        ad_length: P,
      });
    }
    function ne(e) {
      var t = "others";
      e && e.getError && (t = e.getError().getErrorCode()),
        e && e.getErrorCode && (t = e.getErrorCode()),
        Object(w.ab)("ad_load_fail", {
          fail_type: t,
          value: "mid-roll_".concat(L, "_").concat(A),
          ad_type: "video_533x400",
        }),
        O && 1 === A
          ? J()
          : (R(),
            !window.sessionEnded &&
              j &&
              ((window.MIDROLL_STATE = "FALLBACK"),
              clearInterval(i),
              (window.tudeDisplay = window.tudeDisplay || { cmd: [] }),
              window.tudeDisplay.cmd.push(function () {
                window.tudeDisplay.refreshAdsViaDivMappings([
                  {
                    divId: "div-gpt-ad-1642440975217-1",
                    baseDivId: "pb-slot-float",
                  },
                ]);
              })),
            (M = "static"),
            Z());
    }
  },
  28: function (e, t, n) {
    "use strict";
    var o = 0,
      i = {
        tp: {},
        clickTap: "ontouchstart" in window ? "touchstart" : "click",
        dom: ".video-container",
        styleEl: "",
        size: 20,
        animIds: {},
        init: function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "body";
          this.dom = document.querySelector(e);
        },
        getOrientation: function () {
          return window.innerHeight > window.innerWidth
            ? "portrait"
            : "landscape";
        },
        create: function (e, t) {
          if (window.bs.tpEnabled) {
            (i.tp[o] = document.createElement("div")),
              i.tp[o].setAttribute("id", "touchpoint-".concat(o)),
              t && i.tp[o].setAttribute("style", "color:".concat(t, ";"));
            try {
              if ("Android" === i.getMobileOS() || "iOS" === i.getMobileOS()) {
                var n = i.getOrientation();
                window.isPortraitMode
                  ? "landscape" === n
                    ? ((i.tp[o].style.left = "".concat(
                        window.innerHeight - e.touches[0].pageY - 0.5 * i.size,
                        "px"
                      )),
                      (i.tp[o].style.top = "".concat(
                        e.touches[0].pageX - 0.5 * i.size,
                        "px"
                      )))
                    : ((i.tp[o].style.left = "".concat(
                        e.touches[0].pageX - 0.5 * i.size,
                        "px"
                      )),
                      (i.tp[o].style.top = "".concat(
                        e.touches[0].pageY - 0.5 * i.size,
                        "px"
                      )))
                  : "landscape" === n
                  ? ((i.tp[o].style.left = "".concat(
                      e.touches[0].pageX - 0.5 * i.size,
                      "px"
                    )),
                    (i.tp[o].style.top = "".concat(
                      e.touches[0].pageY - 0.5 * i.size,
                      "px"
                    )))
                  : ((i.tp[o].style.left = "".concat(
                      e.touches[0].pageY - 0.5 * i.size,
                      "px"
                    )),
                    (i.tp[o].style.top = "".concat(
                      window.innerWidth - e.touches[0].pageX - 0.5 * i.size,
                      "px"
                    )));
              } else if (e.touches && e.touches.length > 0)
                (i.tp[o].style.left = "".concat(
                  e.touches[0].pageX - 0.5 * i.size,
                  "px"
                )),
                  (i.tp[o].style.top = "".concat(
                    e.touches[0].pageY - 0.5 * i.size,
                    "px"
                  ));
              else {
                i.tp[o].style.left = "".concat(e.clientX - 0.5 * i.size, "px");
                var r =
                  e.clientY -
                  (document.fullscreenElement || window.fullScreenFlag
                    ? 0
                    : 48) -
                  0.5 * i.size;
                i.tp[o].style.top = "".concat(r, "px");
              }
            } catch (e) {}
            (i.tp[o].className = "tp-init"),
              this.dom.appendChild(i.tp[o]),
              window.requestNextAnimationFrame(
                function (e, t) {
                  i.tp[t].className += " tp-anim";
                },
                void 0,
                o
              );
            var a = o;
            i.tp[o].addEventListener(
              "transitionend",
              function (e) {
                i.gc(a, e);
              },
              !1
            ),
              o++;
          }
        },
        gc: function (e, t) {
          var n = document.querySelector("#touchpoint-".concat(e));
          n &&
            (t.target.removeEventListener("transitionend", i.gc, !1),
            this.dom.removeChild(n));
        },
        clean: function () {
          document.querySelectorAll(".tp-init").forEach(function (e) {
            return e.remove();
          });
        },
        isSafari: function () {
          return !!(
            navigator.vendor.match(/[Aa]+pple/g) &&
            navigator.vendor.match(/[Aa]+pple/g).length > 0
          );
        },
        getMobileOS: function () {
          var e = navigator.userAgent || navigator.vendor || window.opera;
          return e.match(/iPad/i) || e.match(/iPhone/i) || e.match(/iPod/i)
            ? "iOS"
            : e.match(/Android/i)
            ? "Android"
            : "unknown";
        },
        requestId: function () {
          var e;
          do {
            e = Math.floor(1e9 * Math.random());
          } while (e in i.animIds);
          return e;
        },
      };
    window.cancelNextAnimationFrame ||
      (window.cancelNextAnimationFrame = function (e) {
        i.animIds[e] &&
          (cancelAnimationFrame(i.animIds[e]), delete i.animIds[e]);
      }),
      window.requestNextAnimationFrame ||
        (window.requestNextAnimationFrame = function (e, t, n) {
          var o = i.requestId();
          return (
            (i.animIds[o] = requestAnimationFrame(function () {
              i.animIds[o] = requestAnimationFrame(function (t) {
                delete i.animIds[o], e(t, n);
              }, t);
            }, t)),
            o
          );
        }),
      (t.a = i);
  },
  3: function (e, t, n) {
    "use strict";
    n.d(t, "l", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return c;
      }),
      n.d(t, "F", function () {
        return s;
      }),
      n.d(t, "m", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "v", function () {
        return u;
      }),
      n.d(t, "i", function () {
        return p;
      }),
      n.d(t, "C", function () {
        return m;
      }),
      n.d(t, "p", function () {
        return f;
      }),
      n.d(t, "t", function () {
        return w;
      }),
      n.d(t, "c", function () {
        return v;
      }),
      n.d(t, "E", function () {
        return g;
      }),
      n.d(t, "k", function () {
        return b;
      }),
      n.d(t, "o", function () {
        return y;
      }),
      n.d(t, "q", function () {
        return h;
      }),
      n.d(t, "u", function () {
        return S;
      }),
      n.d(t, "G", function () {
        return O;
      }),
      n.d(t, "n", function () {
        return k;
      }),
      n.d(t, "x", function () {
        return E;
      }),
      n.d(t, "d", function () {
        return I;
      }),
      n.d(t, "w", function () {
        return j;
      }),
      n.d(t, "f", function () {
        return x;
      }),
      n.d(t, "y", function () {
        return M;
      }),
      n.d(t, "s", function () {
        return T;
      }),
      n.d(t, "e", function () {
        return L;
      }),
      n.d(t, "j", function () {
        return A;
      }),
      n.d(t, "D", function () {
        return _;
      }),
      n.d(t, "h", function () {
        return C;
      }),
      n.d(t, "B", function () {
        return P;
      }),
      n.d(t, "z", function () {
        return D;
      }),
      n.d(t, "g", function () {
        return R;
      }),
      n.d(t, "r", function () {
        return B;
      }),
      n.d(t, "A", function () {
        return N;
      });
    var o = "userToken",
      i = "instanceData",
      r = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "sessionStorage",
          o = window[n].getItem(e);
        return o ? (t ? JSON.parse(o) : o) : t ? {} : "";
      },
      a = function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "sessionStorage";
        return (
          n ? window[o].setItem(e, JSON.stringify(t)) : window[o].setItem(e, t),
          !0
        );
      },
      c = function (e, t) {
        return (function (e, t, n) {
          if (!t) return !1;
          try {
            var o = sessionStorage.getItem(e),
              i = {};
            return (
              o ? ((i = JSON.parse(o))[t] = n) : (i[t] = n),
              sessionStorage.setItem(e, JSON.stringify(i)),
              !0
            );
          } catch (e) {
            return !1;
          }
        })("campaignData", e, t);
      },
      s = function (e) {
        return a(o, e), !0;
      },
      d = function () {
        return r(o) || "";
      },
      l = function () {
        return (
          (function (e) {
            try {
              sessionStorage.removeItem(e);
            } catch (e) {
              return !1;
            }
          })(o),
          !0
        );
      },
      u = function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return a(i, e, t), !0;
      },
      p = function () {
        return r("retryAttempts");
      },
      m = function (e) {
        a("retryAttempts", e);
      },
      f = function () {
        a("retryAttempts", 0);
      },
      w = function (e) {
        a("campaignData", e, !0);
      },
      v = function () {
        return r("campaignData", !0);
      },
      g = function (e) {
        return a("singUrls", e, !0);
      },
      b = function () {
        return r("singUrls", !0);
      },
      y = function () {
        return r("sessionId");
      },
      h = function () {
        return !!localStorage.getItem("gameGuideHidden");
      },
      S = function () {
        localStorage.setItem("gameGuideHidden", !0);
      },
      O = function (e) {
        return localStorage.setItem("volume", e), !0;
      },
      k = function () {
        var e = localStorage.getItem("volume") || 0.5;
        return Math.min(e, 1);
      },
      E = function (e) {
        var t = r("overlayObj", !0, "localStorage") || {};
        (t[window.gameId] = e), a("overlayObj", t, !0, "localStorage");
      },
      I = function () {
        var e,
          t = r("overlayObj", !0, "localStorage");
        return void 0 === t[window.gameId]
          ? null === (e = window.campaignData) || void 0 === e
            ? void 0
            : e.keyMappingOverlay
          : t[window.gameId];
      },
      j = function (e) {
        var t = r("jsFsWidgetCoordinateObj", !0, "localStorage");
        (t[window.gameId] = e),
          a("jsFsWidgetCoordinateObj", t, !0, "localStorage");
      };
    function x() {
      return r("ROBLOX_EVENT_DATA", !0);
    }
    function M(e) {
      return a("ROBLOX_EVENT_DATA", e, !0);
    }
    function T() {
      return sessionStorage.removeItem("ROBLOX_EVENT_DATA");
    }
    var L = function () {
        return r("jsFsWidgetCoordinateObj", !0, "localStorage")[window.gameId];
      },
      A = function () {
        var e = localStorage.getItem("robloxToastViewCount");
        return e ? +e : 0;
      },
      _ = function () {
        var e = localStorage.getItem("robloxToastViewCount");
        (e = e ? +e + 1 : 1), localStorage.setItem("robloxToastViewCount", e);
      },
      C = function () {
        var e = localStorage.getItem("pwaCount");
        return e ? +e : 0;
      },
      P = function (e) {
        localStorage.setItem("pwaCount", e);
      },
      D = function (e) {
        sessionStorage.setItem("popularGamesData", JSON.stringify(e));
      },
      R = function () {
        var e = sessionStorage.getItem("popularGamesData");
        if (e)
          try {
            if (((e = JSON.parse(e)), Array.isArray(e) && e.length)) return e;
          } catch (e) {}
        return !1;
      },
      B = function () {
        return null !== localStorage.getItem("isPopularGamesIconClicked");
      },
      N = function () {
        localStorage.setItem("isPopularGamesIconClicked", "true");
      };
  },
  32: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return D;
    }),
      n.d(t, "c", function () {
        return R;
      }),
      n.d(t, "a", function () {
        return B;
      }),
      n.d(t, "e", function () {
        return q;
      }),
      n.d(t, "d", function () {
        return U;
      });
    var o = n(10),
      i = n(2),
      r = n(226),
      a = n.n(r),
      c = n(227),
      s = n.n(c),
      d = n(228),
      l = n.n(d),
      u = n(229),
      p = n.n(u),
      m = n(6),
      f = n(230),
      w = n.n(f),
      v = n(231),
      g = n.n(v),
      b = n(232),
      y = n.n(b),
      h = n(11),
      S = n(20),
      O = n(3),
      k = {
        MouseLButton: w.a,
        MouseRButton: y.a,
        MouseMButton: g.a,
        DpadUp: p.a,
        DpadDown: a.a,
        DpadLeft: s.a,
        DpadRight: l.a,
      },
      E = Object(O.d)(),
      I = [],
      j = { left: 0, width: 0, height: 0, top: 0 },
      x = !1,
      M = function (e, t) {
        return (e / 100) * t;
      },
      T = function (e) {
        var t = document.querySelector(".snackbar");
        t.classList.add("show"),
          (t.innerHTML = e),
          setTimeout(function () {
            t.classList.remove("show");
          }, 5e3),
          Object(S.b)(t);
      };
    window.showToast = T;
    var L = function (e, t, n) {
        return '<span class="overlayKeyValue '
          .concat(t, '"\n    style="transform:')
          .concat(n, ';"\n    >\n      <span>')
          .concat(e, "</span>\n    </span>");
      },
      A = function () {
        return window.gamepadMode && x;
      },
      _ = {
        Oem1: ";",
        Oem2: "/",
        Oem3: "~",
        Oem4: "[",
        Oem5: "\\",
        Oem6: "]",
        Oem7: "'",
        OemPlus: "+",
        OemComma: ",",
        OemMinus: "-",
        OemPeriod: ".",
      },
      C = function (e) {
        return _[e] || e;
      },
      P = function () {
        if (
          (m.a.logs.push("renderKeys: ".concat(E)),
          !E || (window.gamepadMode && !x))
        )
          return (
            m.a.logs.push("renderKeys empty:"),
            void (document.getElementById("overlay").innerHTML = "")
          );
        (m.a.overlayState = "RENDER_KEYS"),
          m.a.logs.push("renderKeys before keys: ".concat(E));
        var e = I.map(function (e) {
          if (e.IsVisibleInOverlay || e.ShowOnOverlay) {
            var t = (function (e) {
                switch (e.Type) {
                  case "Tap":
                  case "TapRepeat":
                  case "Script":
                    var t = A() ? Object(h.b)(e.Key_alt1) : C(e.Key);
                    if (A() ? e.Key_alt1 : e.Key)
                      return '<span class="overlayKeyValue '
                        .concat(e.Type, " ")
                        .concat(k[t] ? "DpadImage" : "", '">\n        ')
                        .concat(
                          k[t] ? '<img src="'.concat(k[t], '" alt="" />') : t,
                          "</span>"
                        );
                    break;
                  case "Dpad":
                    var n = "";
                    return (
                      A()
                        ? e.GamepadStick &&
                          (n += '<span class="overlayKeyValue">'.concat(
                            Object(h.b)(e.GamepadStick),
                            "</span>"
                          ))
                        : (e.KeyUp &&
                            (n += L(
                              C(e.KeyUp),
                              "up",
                              "translateY(-100%) translateY(-".concat(
                                M(j.height, Math.min(e.XRadius / 3, 4)),
                                "px)"
                              )
                            )),
                          e.KeyLeft &&
                            (n += L(
                              C(e.KeyLeft),
                              "left",
                              "translateX(-100%) translateX(-".concat(
                                M(j.height, Math.min(e.XRadius / 3, 4)),
                                "px)"
                              )
                            )),
                          e.KeyDown &&
                            (n += L(
                              C(e.KeyDown),
                              "left",
                              "translateY(100%) translateY(".concat(
                                M(j.height, Math.min(e.XRadius / 3, 4)),
                                "px)"
                              )
                            )),
                          e.KeyRight &&
                            (n += L(
                              C(e.KeyRight),
                              "left",
                              "translateX(100%) translateX(".concat(
                                M(j.height, Math.min(e.XRadius / 3, 4)),
                                "px)"
                              )
                            ))),
                      n
                    );
                  case "FreeLook":
                    var o = "";
                    return (
                      A() &&
                        (e.GamepadStick
                          ? (o += '<span class="overlayKeyValue">'.concat(
                              Object(h.b)(e.GamepadStick),
                              "</span>"
                            ))
                          : (e.KeyUp_alt1 &&
                              (o += L(
                                Object(h.b)(e.KeyUp_alt1),
                                "up",
                                "translateY(-40%) translateY(-".concat(
                                  M(j.height, 3),
                                  "px)"
                                )
                              )),
                            e.KeyLeft_alt1 &&
                              (o += L(
                                Object(h.b)(e.KeyLeft_alt1),
                                "left",
                                "translateX(-40%) translateX(-".concat(
                                  M(j.height, 3),
                                  "px)"
                                )
                              )),
                            e.KeyDown_alt1 &&
                              (o += L(
                                Object(h.b)(e.KeyDown_alt1),
                                "down",
                                "translateY(40%) translateY(".concat(
                                  M(j.height, 3),
                                  "px)"
                                )
                              )),
                            e.KeyRight_alt1 &&
                              (o += L(
                                Object(h.b)(e.KeyRight_alt1),
                                "right",
                                "translateX(40%) translateX(".concat(
                                  M(j.height, 3),
                                  "px)"
                                )
                              )))),
                      o && (o += '<span class="freelook-bg"></span>'),
                      o
                    );
                  case "Pan":
                    var i = A()
                      ? Object(h.b)(e.KeyStartStop_alt1)
                      : C(e.KeyStartStop);
                    return i
                      ? '<span class="overlayKeyValue">'.concat(i, "</span>")
                      : "";
                  case "MOBASkill":
                    var r = A() ? e.KeyActivate_alt1 : e.KeyActivate;
                    if (r)
                      return k[r]
                        ? '<span class="overlayKeyValue">\n          <img src="'.concat(
                            k[r],
                            '" alt="" />\n        </span>'
                          )
                        : '<span class="overlayKeyValue MobaText '
                            .concat(r, '">\n          ')
                            .concat(
                              A() ? Object(h.b)(r) : C(r),
                              "\n        </span>"
                            );
                }
                return "";
              })(e),
              n = "";
            return (
              "Pan" === e.Type &&
                e.LButtonX >= 0 &&
                e.LButtonY >= 0 &&
                (n = A()
                  ? ""
                  : '<span\n              class="overlayKey LBM"\n              style="left:'
                      .concat(
                        j.left + M(j.width, e.LButtonX),
                        "px;\n              top: "
                      )
                      .concat(
                        j.top + M(j.height, e.LButtonY),
                        'px;"\n            ><span class="overlayKeyValue">\n            <img src="'
                      )
                      .concat(
                        k.MouseLButton,
                        '" alt="" />\n          </span></span>'
                      )),
              "MOBASkill" === e.Type &&
                e.CancelX > 0 &&
                e.CancelY > 0 &&
                (n =
                  '<span\n              class="overlayKey Tap"\n              style="left:'
                    .concat(
                      j.left + M(j.width, e.CancelX),
                      "px;\n              top: "
                    )
                    .concat(
                      j.top + M(j.height, e.CancelY),
                      'px;"\n            ><span class="overlayKeyValue">\n                '
                    )
                    .concat(
                      A() ? Object(h.b)(e.KeyCancel_alt1) : e.KeyCancel,
                      "\n          </span></span>"
                    )),
              t
                ? '\n        <span\n          class="overlayKey '
                    .concat(e.Type, " ")
                    .concat(A() ? "gamepad" : "", '"\n          style="left:')
                    .concat(j.left + M(j.width, e.X), "px;\n          top: ")
                    .concat(j.top + M(j.height, e.Y), 'px;"\n        >')
                    .concat(t, "</span>")
                    .concat(n)
                : null
            );
          }
          return null;
        })
          .filter(function (e) {
            return e;
          })
          .join("");
        if (
          (m.a.logs.push("renderKeys after collecting keys: ".concat(e.length)),
          E)
        )
          document.getElementById("overlay").innerHTML = e;
        else {
          var t = document.getElementById("overlay");
          t && (t.innerHTML = "");
        }
      },
      D = function () {
        var e = document.querySelector(".overlay-bg");
        if ((e && e.remove(), m.c.active)) {
          var t = document.getElementById("remoteVideo");
          if (t) {
            var n = t.getBoundingClientRect();
            if (n) {
              var o = t.parentNode.getBoundingClientRect(),
                i = {};
              (i.top = Math.max(n.top - o.top, 0)),
                (i.left = Math.max(n.left - o.left, 0)),
                (i.width = n.width),
                (i.height = n.height),
                (j = i);
            }
            P();
          }
        }
      },
      R = function (e) {
        Object(O.x)(e), (E = e), D();
      },
      B = function () {
        return E;
      },
      N = null,
      q = function () {
        clearTimeout(N), (N = setTimeout(D, 100));
      },
      G = function (e) {
        var t = e.detail,
          n = document.getElementById("overlay");
        m.a.logs.push("updateActive: ".concat(E, " ").concat(t)),
          n &&
            (document.getElementById("overlay").style.display = t
              ? "block"
              : "none"),
          D();
      },
      H = function e() {
        document.removeEventListener("visibilitychange", D),
          document.removeEventListener("TOP_ACTIVITY_CHANGED", D),
          window.removeEventListener(o.e, G),
          window.removeEventListener(o.d, e);
        var t = document.querySelector(".iconContainer.controller"),
          n = document.getElementById("overlay");
        n && (n.innerHTML = ""), t && t.remove();
      },
      U = function () {
        m.c.initialized &&
          window.videoLoaded &&
          (function (e) {
            if (!i.b.isMobile()) {
              (m.a.overlayState = "RENDERING_OVERLAY"),
                (E = B()),
                m.a.logs.push("renderOverlay: ".concat(E));
              var t = null == e ? void 0 : e.ControlSchemes;
              if (
                t &&
                (t.forEach(function (e) {
                  if (e.Selected) {
                    x = e.isGamepadControlsPresent;
                    var t = e.GameControls;
                    t &&
                      (t.forEach(function (e) {
                        (e.IsVisibleInOverlay || e.ShowOnOverlay) &&
                          ("Pan" === e.Type &&
                            (A() ? e.KeyStartStop_alt1 : e.KeyStartStop) &&
                            T(
                              '<p data-str-id="overlay.look" data-var="'.concat(
                                A()
                                  ? Object(h.b)(e.KeyStartStop_alt1)
                                  : e.KeyStartStop,
                                '"></p>'
                              )
                            ),
                          "FreeLook" === e.Type &&
                            (A() ? e.Key_alt1 : e.Key) &&
                            T(
                              '<p data-str-id="overlay.klook" data-var="'.concat(
                                A() ? Object(h.b)(e.Key_alt1) : e.Key,
                                '"></p>'
                              )
                            ));
                      }),
                      (I = t));
                  }
                }),
                !E)
              ) {
                var n = document.querySelector(".overlay-bg");
                n && n.remove();
              }
              D(),
                document.addEventListener("visibilitychange", D),
                document.addEventListener("TOP_ACTIVITY_CHANGED", D),
                window.addEventListener(o.e, G),
                window.addEventListener(o.d, H);
            }
          })(m.c.config);
      };
    window.addEventListener(o.c, function () {
      U();
    });
  },
  35: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return v;
    }),
      n.d(t, "a", function () {
        return y;
      }),
      n.d(t, "c", function () {
        return h;
      });
    var o = n(5),
      i = n(0),
      r = n(2),
      a = n(3);
    function c(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function s(e) {
      return (s =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var d,
      l = "mouseLockOnboarding",
      u = { active: !1 },
      p = {
        init: null,
        animate: null,
        cursorLocked: null,
        cursorLockedEsc: null,
      },
      m = function () {
        var e = document.querySelector(".highlighter");
        Object(i.ub)(),
          (e.style.transform = ""),
          (e.style.top = "0"),
          document.body.classList.remove("highlighter-active");
      },
      f = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      t < 3
                        ? setTimeout(
                            function () {
                              var e = document.querySelector(".highlighter"),
                                t = document
                                  .getElementById("remoteVideo")
                                  .getBoundingClientRect(),
                                n = "scale("
                                  .concat(
                                    Math.min(t.width / window.innerWidth, 1),
                                    ", "
                                  )
                                  .concat(
                                    Math.min(
                                      t.height / (window.innerHeight - 46),
                                      1
                                    ),
                                    ")"
                                  );
                              (e.style.transform = n), (e.style.top = "46px");
                            },
                            r.b.isSafari() ? 1e3 : 0
                          )
                        : m();
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function a(e) {
                  c(r, o, i, a, s, "next", e);
                }
                function s(e) {
                  c(r, o, i, a, s, "throw", e);
                }
                a(void 0);
              });
            });
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      w = function () {
        if (!Object(i.W)()) {
          var e,
            t = document.querySelector(".highlighter"),
            n =
              ("undefined" == typeof localStorage || s(localStorage)) &&
              localStorage[l]
                ? +localStorage.getItem(l)
                : 0;
          n <= 2 && document.body.classList.add("highlighter-active"),
            t &&
              ((t.style.transform = ""),
              f(n),
              (function (e, t) {
                p.animate = setTimeout(function () {
                  document.pointerLockElement
                    ? e <= 3 && Object(i.ub)("cursorLocked")
                    : m();
                }, t);
              })(n, 1e3),
              (e = n < 3 ? 4e3 : 1e3),
              (p.cursorLocked = setTimeout(function () {
                m(),
                  Object(i.ub)(),
                  (p.cursorLockedEsc = setTimeout(function () {
                    Object(i.ub)("cursorLockedInfo");
                  }, 1e3));
              }, e)),
              (n += 1) <= 3 &&
                (function (e) {
                  localStorage.setItem(l, e);
                })(n));
        }
      },
      v = function (e) {
        if (!document.pointerLockElement) {
          Object(i.ab)("mouse_lock", {
            value: "enabled",
            reason: e ? "midroll_closed" : void 0,
          });
          var t = document.getElementById("remoteVideo");
          if (t && "function" == typeof t.requestPointerLock) {
            try {
              t.requestPointerLock();
            } catch (e) {}
            (u.active = !0),
              document.addEventListener("pointerlockchange", b, !1),
              document.addEventListener("mozpointerlockchange", b, !1),
              document.addEventListener("webkitpointerlockchange", b, !1),
              document.addEventListener("pointerlockerror", b, !1),
              document.addEventListener("mozpointerlockerror", b, !1),
              document.addEventListener("webkitpointerlockerror", b, !1),
              w();
          }
        }
      },
      g = !1,
      b = function e() {
        ((u.active = !1), h()) &&
          document
            .querySelectorAll(".icon.pointer.mouseLock")
            .forEach(function (e) {
              e.classList.remove(
                document.pointerLockElement
                  ? "icon-mouse-unlock"
                  : "icon-mouse-lock"
              ),
                e.classList.add(
                  document.pointerLockElement
                    ? "icon-mouse-lock"
                    : "icon-mouse-unlock"
                );
            });
        !document.pointerLockElement &&
          window.isNativeMouseActive &&
          m(document.querySelector(".highlighter")),
          document.pointerLockElement ||
            (g ||
              Object(i.ab)("mouse_lock", {
                value: "disabled",
                reason: "escape_pressed",
              }),
            (g = !1),
            clearTimeout(p.init),
            clearTimeout(p.animate),
            clearTimeout(p.cursorLocked),
            clearTimeout(p.cursorLockedEsc),
            document.removeEventListener("pointerlockchange", e),
            document.removeEventListener("mozpointerlockchange", e),
            document.removeEventListener("webkitpointerlockchange", e)),
          Object(o.b)();
      },
      y = function (e) {
        try {
          document.pointerLockElement &&
            (Object(i.ab)("mouse_lock", { value: "disabled", reason: e }),
            (g = !0),
            document.exitPointerLock());
        } catch (e) {}
      },
      h = function () {
        if (void 0 === d) {
          var e = Object(a.c)().features;
          d = !!(void 0 === e ? {} : e).isMouseLockEnabled;
        }
        return d;
      };
  },
  36: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return d;
    }),
      n.d(t, "c", function () {
        return l;
      }),
      n.d(t, "b", function () {
        return u;
      }),
      n.d(t, "a", function () {
        return p;
      });
    var o = n(10);
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              a(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function a(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function c(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            e &&
            (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]);
          if (null == n) return;
          var o,
            i,
            r = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (o = n.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return r;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return s(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return s(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    var d = function (e) {
        var t = -1;
        return (
          (e.ControlSchemes = e.ControlSchemes.map(function (n, i) {
            var r, a;
            return (
              (n.isGamepadControlsPresent = !1),
              ((n.SchemeTags &&
                ((r = n.SchemeTags),
                (a = !1),
                r.forEach(function (e) {
                  var t = c(e.split(":"), 2),
                    n = t[0],
                    i = t[1];
                  o.j[n] === i && (a = !0);
                }),
                a)) ||
                (n.Selected && -1 === t)) &&
                (t = i),
              (n.Selected = !1),
              (n.GameControls = n.GameControls.map(function (e) {
                return (
                  "Tap" === e.Type ||
                  "TapRepeat" === e.Type ||
                  "Swipe" === e.Type
                    ? (n.isGamepadControlsPresent =
                        n.isGamepadControlsPresent || e.Key_alt1)
                    : "DPad" === e.Type
                    ? (n.isGamepadControlsPresent =
                        n.isGamepadControlsPresent ||
                        e.GamepadStick ||
                        e.KeyUp_alt1 ||
                        e.KeyDown_alt1 ||
                        e.KeyLeft_alt1 ||
                        e.KeyRight_alt1)
                    : "MobaSkill" === e.Type
                    ? (n.isGamepadControlsPresent =
                        n.isGamepadControlsPresent || e.GamepadStick)
                    : "Pan" === e.Type &&
                      (n.isGamepadControlsPresent =
                        n.isGamepadControlsPresent ||
                        e.KeyStartStop_alt1 ||
                        e.KeySuspend_alt1 ||
                        e.KeyLookAround_alt1 ||
                        e.GamepadStick),
                  e
                );
              })),
              (n.isGamepadControlsPresent = !!n.isGamepadControlsPresent),
              (e.anySchemeHasGamepad =
                e.anySchemeHasGamepad || n.isGamepadControlsPresent),
              n
            );
          })),
          t
        );
      },
      l = function (e, t) {
        return (
          (t.ControlSchemes = t.ControlSchemes.map(function (t) {
            return (
              t.Selected &&
                (t.GameControls = t.GameControls.map(function (t) {
                  return "lol.onevone" === e && "Pan" === t.Type
                    ? r(r({}, t), {}, { Sensitivity: 0.3 })
                    : t;
                })),
              t
            );
          })),
          t
        );
      },
      u = function (e, t) {
        return "https://cloud.bluestacks.com/get_cfg_info?package_name="
          .concat(e, "&parser_version=")
          .concat(t);
      },
      p = function (e, t) {
        window.dispatchEvent(new CustomEvent(e, { detail: t }));
      };
  },
  37: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return L;
    }),
      n.d(t, "b", function () {
        return A;
      }),
      n.d(t, "a", function () {
        return _;
      }),
      n.d(t, "d", function () {
        return C;
      });
    var o,
      i,
      r,
      a,
      c,
      s,
      d = n(0),
      l = n(2),
      u = n(3),
      p = n(128),
      m = n(237),
      f = n.n(m),
      w = n(102),
      v = n.n(w),
      g = n(27),
      b = "",
      y = !1,
      h = 20,
      S = {},
      O = !1,
      k = 1,
      E = !1,
      I = !1;
    function j(e) {
      e.stopPropagation(),
        Object(d.ab)("click_event", {
          click_type: "on_ad",
          value: "pre-roll",
          ad_length: h,
        });
    }
    var x = function () {
        "hidden" === document.visibilityState &&
          (window.tude.setVideoVolume(0), Object(d.sb)("muted"));
      },
      M = function () {
        var e = {
          divId: "preroll-wrapper",
          code: "pre-roll",
          options: { volume: 0 },
          sourceVideos: [
            {
              src: "https://cdn.now.gg/apps-content/modVideo.mp4",
              type: "video/mp4",
            },
          ],
        };
        Object(d.ab)("ad_impression_attempt", {
          value: "pre-roll",
          ad_type: "video_".concat(a, "X").concat(c),
        }),
          (window.tude = window.tude || { cmd: [] }),
          (r = setTimeout(function () {
            if (
              ((window.tude = window.tude || { cmd: [] }),
              Object(d.ab)("ad_load_fail", {
                fail_type: "timeout",
                value: "pre-roll",
                ad_type: "video_640X480",
              }),
              window.tude.cmd.push(function () {
                try {
                  window.tude.closePlayer();
                } catch (e) {}
              }),
              "error429" !== Object(d.v)())
            )
              if (
                ((o.style.display = "none"), Object(d.bb)(), window.appReady)
              ) {
                var e;
                _(), Object(d.ab)("ac_view_game_launch"), Object(d.db)();
                var t =
                  null === (e = window.appInfo) || void 0 === e
                    ? void 0
                    : e.playDomain;
                !window.imaError && t && Object(d.X)();
              } else C(), Object(d.kb)();
          }, 15e3)),
          "error429" !== Object(d.v)() &&
            ((k = 2),
            window.tude.cmd.push(function () {
              ((S = Object(d.r)()).pod = 1),
                (S.count = 2),
                (S.rb = 1.1),
                window.tude.setVideoPageTargeting(S),
                (s = window.tude.requestVideoAd(e));
            }));
      },
      T = function () {
        s.on("NO_BID", function (e) {
          r && clearTimeout(r), P(e.detail.error);
        })
          .on("LOADED", function (e) {
            var t = Object(d.I)(),
              n = Object(d.H)();
            document.addEventListener("visibilitychange", x);
            try {
              var o = "hidden" === document.visibilityState;
              (!t && n && !o) || I
                ? (window.tude.setVideoVolume(1), Object(d.sb)("unmuted"))
                : (window.tude.setVideoVolume(0), Object(d.sb)("muted"));
            } catch (e) {}
            (!O || (O && 2 === k)) &&
              (function () {
                var e = (
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                ).duration;
                h = +(void 0 === e ? 20 : e);
              })(e.detail);
          })
          .on("ERROR", function (e) {
            r && clearTimeout(r), P(e.detail.error);
          })
          .on("PLAYER_AD_ERROR", function (e) {
            r && clearTimeout(r), P(e.detail.error);
          })
          .on("COMPLETED", function (e) {
            document.removeEventListener("visibilitychange", x),
              y ||
                (function () {
                  if (O && 1 === k) return void M();
                  if (
                    ((o.style.display = "none"),
                    Object(d.bb)(),
                    window.appReady)
                  ) {
                    var e;
                    _(), Object(d.ab)("ac_view_game_launch"), Object(d.db)();
                    var t =
                      null === (e = window.appInfo) || void 0 === e
                        ? void 0
                        : e.playDomain;
                    !window.imaError && t && Object(d.X)();
                  } else C(), Object(d.kb)();
                })();
          })
          .on("SKIPPED", function (e) {
            (y = !0),
              document.removeEventListener("visibilitychange", x),
              (function () {
                if (
                  (clearInterval(i),
                  Object(d.ab)("click_event", {
                    click_type: "skip_ad",
                    value: "pre-roll",
                    ad_type: "video_640X480",
                    ad_length: h,
                  }),
                  O && 1 === k)
                )
                  return void M();
                if (
                  ((o.style.display = "none"), Object(d.bb)(), window.appReady)
                ) {
                  var e;
                  _(), Object(d.ab)("ac_view_game_launch"), Object(d.db)();
                  var t =
                    null === (e = window.appInfo) || void 0 === e
                      ? void 0
                      : e.playDomain;
                  !window.imaError && t && Object(d.X)();
                } else C(), Object(d.kb)();
              })();
          })
          .on("STARTED", function (e) {
            sessionStorage.setItem("adDisplayed", !0), (y = !1);
            var t = Object(d.I)(),
              n = Object(d.H)(),
              o = document.querySelector(".tapToUnmute");
            o &&
              (I && o.classList.add("hideText"),
              (o.style.display = "flex"),
              l.b.isMobile() &&
                !window.isPortraitMode &&
                setTimeout(function () {
                  o.classList.contains("hideText") ||
                    o.classList.add("hideText");
                }, 4e3));
            var i = document.querySelector(".clickToUnmute");
            i &&
              (i.innerHTML = l.b.isMobile()
                ? window.localizedData.tapToUnmute
                : window.localizedData.clickToUnmute);
            try {
              var a = "hidden" === document.visibilityState;
              (!t && n && !a) || I
                ? (window.tude.setVideoVolume(1), Object(d.sb)("unmuted"))
                : (window.tude.setVideoVolume(0), Object(d.sb)("muted"));
            } catch (e) {}
            r && clearTimeout(r),
              (function () {
                var e = document.querySelector(".launchGameTextContainer"),
                  t = document.querySelector(".launchGameText");
                (!O || (O && 2 === k)) &&
                  ((t.innerHTML = window.localizedData.launchGameText.replace(
                    /(\{.+\})/g,
                    h
                  )),
                  D());
                var n = document.querySelector(".nowGGLogo");
                l.b.isMobile()
                  ? ((e.style.backgroundColor = "#000"),
                    (n.style.opacity = "0"))
                  : (n.src = v.a);
                e.style.display = "flex";
                var o = document.querySelector(".gameIconContainer");
                o && o.classList.add("animateSmall");
                Object(d.ab)("impression_event", {
                  impression_type: "ad_impression",
                  value: "pre-roll",
                  ad_type: "video_640X480",
                  ad_length: h,
                });
              })();
          })
          .on("CLICKED", function (e) {
            j(e);
          })
          .on("VIDEO_CLICKED", function (e) {
            j(e);
          })
          .on("PAUSED", function (e) {
            (!O || (O && 2 === k)) && clearInterval(i), j(e);
          })
          .on("RESUMED", function (e) {
            (!O || (O && 2 === k)) && D(), j(e);
          });
      },
      L = function () {
        var e = Object(u.c)(),
          t = e.experimentTypes,
          n = void 0 === t ? [] : t,
          i = e.countryCode;
        (I = n.indexOf("clickToPlay") > -1 && "GB" === i),
          Object(d.qb)(I),
          Object(d.cb)(!I),
          (E = n.indexOf("poddedAds") > -1 && "AU" === i && !I),
          (O = n.indexOf("preRollAds") > -1 && !E && !I);
        var p,
          m,
          f,
          w,
          v = {
            divId: "preroll-wrapper",
            code: I ? "pre-ctp" : E ? "pre-pod" : "pre-roll",
            options: { volume: 0 },
            sourceVideos: [
              {
                src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                type: "video/mp4",
              },
            ],
          };
        (o = document.getElementById("preroll-wrapper")),
          l.b.isMobile()
            ? ((p = window.isPortraitMode
                ? window.innerWidth - 20
                : window.innerHeight - 20),
              (m = window.isPortraitMode
                ? window.innerHeight - 50
                : window.innerWidth - 50))
            : ((p = window.innerWidth - 20), (m = window.innerHeight - 50)),
          (f = m),
          (a = Math.ceil(1.33 * f)),
          (c = m),
          a > p && ((w = a = p), (c = Math.ceil(w / 1.33))),
          (o.style.width = "".concat(a, "px")),
          (o.style.height = "".concat(c, "px")),
          Object(d.ab)("ad_impression_attempt", {
            value: "pre-roll",
            ad_type: "video_".concat(a, "X").concat(c),
          }),
          (window.tude = window.tude || { cmd: [] }),
          (r = setTimeout(function () {
            if (O && 1 === k) M();
            else if (
              ((window.tude = window.tude || { cmd: [] }),
              Object(d.ab)("ad_load_fail", {
                fail_type: "timeout",
                value: "pre-roll",
                ad_type: "video_640X480",
              }),
              window.tude.cmd.push(function () {
                try {
                  window.tude.closePlayer();
                } catch (e) {}
              }),
              "error429" !== Object(d.v)())
            )
              if (
                ((o.style.display = "none"), Object(d.bb)(), window.appReady)
              ) {
                var e;
                _(), Object(d.ab)("ac_view_game_launch"), Object(d.db)();
                var t =
                  null === (e = window.appInfo) || void 0 === e
                    ? void 0
                    : e.playDomain;
                !window.imaError && t && Object(d.X)();
              } else C(), Object(d.kb)();
          }, 15e3)),
          "error429" !== Object(d.v)() &&
            window.tude.cmd.push(function () {
              ((S = Object(d.r)()).pod = 1),
                (S.count = 1),
                O && (S.rb = 1.1),
                E && (S.rb = 1.2),
                I && (S.rb = 1.3),
                window.tude.setVideoPageTargeting(S),
                (s = window.tude.requestVideoAd(v)),
                T();
            });
      },
      A = function () {
        var e = document.querySelector(".fallbackAdsMidRoll"),
          t = "mid-roll";
        (window.googletag = window.googletag || { cmd: [] }),
          window.googletag.cmd.push(function () {
            var n = {};
            window.googletag
              .pubads()
              .addEventListener("impressionViewable", function (e) {
                var n = e.slot.getSlotElementId();
                if (
                  -1 !== n.indexOf("skyScrapper") ||
                  -1 !== n.indexOf("leaderBoard")
                ) {
                  var o = 1;
                  return (
                    -1 !== n.indexOf("skyScrapper") &&
                      ("div-gpt-ad-skyScrapper-2" === n && (o = 2),
                      Object(d.ab)("impression_event", {
                        impression_type: "ad_impression",
                        value: "mid-roll_"
                          .concat(window.midRollCount, "_")
                          .concat(o),
                        ad_type: "static_160x600",
                      })),
                    void (
                      -1 !== n.indexOf("leaderBoard") &&
                      ("div-gpt-ad-leaderBoard-2" === n && (o = 2),
                      Object(d.ab)("impression_event", {
                        impression_type: "ad_impression",
                        value: "mid-roll_"
                          .concat(window.midRollCount, "_")
                          .concat(o),
                        ad_type: "static_970x90",
                      }))
                    )
                  );
                }
                Object(p.b)(),
                  Object(g.i)(b),
                  Object(d.ab)("impression_event", {
                    impression_type: "ad_impression",
                    value: "pre-roll" === t ? "pre-roll_1_".concat(1) : t,
                    ad_type: "static_".concat(b),
                  });
              }),
              googletag.pubads().addEventListener("slotOnload", function (e) {
                e.slot.getSlotElementId();
              }),
              googletag
                .pubads()
                .addEventListener("slotRenderEnded", function (n) {
                  var o = n.slot.getSlotElementId();
                  if (
                    -1 === o.indexOf("skyScrapper") &&
                    -1 === o.indexOf("leaderBoard")
                  )
                    if (n.isEmpty)
                      Object(d.ab)("ad_load_fail", {
                        fail_type: "static_ads",
                        value: t,
                        ad_type: "static_0x0",
                      });
                    else {
                      Object(g.b)();
                      var i = {
                        "Advertiser ID": n.advertiserId,
                        "Campaign ID": n.campaignId,
                        "Creative ID": n.creativeId,
                        "Is empty?": n.isEmpty,
                        "Line Item ID": n.lineItemId,
                        Size: n.size.join("x"),
                        "Source Agnostic Creative ID":
                          n.sourceAgnosticCreativeId,
                        "Source Agnostic Line Item ID":
                          n.sourceAgnosticLineItemId,
                      };
                      b = i.Size;
                      var r = document.querySelector(".gptPassbackForMidRoll");
                      if (
                        (r &&
                          ((r.style.marginLeft = "0 !important"),
                          (r.style.marginRight = "0 !important")),
                        e)
                      )
                        l.b.isMobile()
                          ? ((e.style.width = "".concat(
                              parseInt(b.split("x")[0]) + 50,
                              "px"
                            )),
                            (e.style.height = "".concat(
                              parseInt(b.split("x")[1]) + 50,
                              "px"
                            )))
                          : ((e.style.width = "".concat(
                              parseInt(b.split("x")[0]) + 100,
                              "px"
                            )),
                            (e.style.height = "".concat(
                              parseInt(b.split("x")[1]) + 50,
                              "px"
                            ))),
                          (document.querySelector(
                            ".fallbackBgImageMidRoll"
                          ).style.backgroundImage = "url(".concat(f.a, ")")),
                          (e.style.display = "block");
                    }
                  else {
                    var a = 1;
                    n.isEmpty &&
                      (-1 !== o.indexOf("skyScrapper") &&
                        "div-gpt-ad-skyScrapper-2" === o &&
                        (a = 2),
                      -1 !== o.indexOf("leaderBoard") &&
                        "div-gpt-ad-leaderBoard-2" === o &&
                        (a = 2),
                      Object(d.ab)("ad_load_fail", {
                        fail_type: "static_ads",
                        value: "mid-roll_"
                          .concat(window.midRollCount, "_")
                          .concat(a),
                        ad_type: "static_0x0",
                      }));
                  }
                }),
              googletag
                .pubads()
                .addEventListener("slotRequested", function (e) {
                  n[o] = Date.now();
                  var o = e.slot.getSlotElementId();
                  if (
                    -1 !== o.indexOf("skyScrapper") ||
                    -1 !== o.indexOf("leaderBoard")
                  ) {
                    var i = 1;
                    return (
                      -1 !== o.indexOf("skyScrapper") &&
                        ("div-gpt-ad-skyScrapper-2" === o && (i = 2),
                        (b = "160x600")),
                      -1 !== o.indexOf("leaderBoard") &&
                        ("div-gpt-ad-leaderBoard-2" === o && (i = 2),
                        (b = "970x90")),
                      void Object(d.ab)("ad_impression_attempt", {
                        value: "mid-roll_"
                          .concat(window.midRollCount, "_")
                          .concat(i),
                        ad_type: "static_".concat(b),
                      })
                    );
                  }
                  (t = o === midRollSlot ? "mid-roll" : "pre-roll"),
                    Object(d.ab)("ad_impression_attempt", {
                      value: "pre-roll" === t ? "pre-roll_1_".concat(1) : t,
                      ad_type: "static_".concat(b),
                    });
                }),
              googletag
                .pubads()
                .addEventListener("slotResponseReceived", function (e) {
                  e.slot.getSlotElementId();
                }),
              googletag
                .pubads()
                .addEventListener("slotVisibilityChanged", function (e) {
                  e.slot.getSlotElementId(), e.inViewPercentage;
                });
          });
      },
      _ = function () {
        var e = document.querySelector(".bgVideoLoader");
        e &&
          (e.classList.add("fade-out"),
          setTimeout(function () {
            (e.style.display = "none"), e.classList.remove("fade-out");
          }, 500));
      },
      C = function () {
        if ("error429" !== Object(d.v)()) {
          var e = document.querySelector(".tapToUnmute");
          e && (e.style.display = "none");
          var t = document.querySelector(".loadingContainer");
          t &&
            (window.appInfo &&
              window.appInfo.media &&
              window.appInfo.media.desktop &&
              (t.style.backgroundImage =
                "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(".concat(
                  window.appInfo.media.desktop.banner,
                  ")"
                )),
            (t.style.display = "flex"));
          var n = document.querySelector(".gameIconContainer"),
            o = document.querySelector(".launchGameText"),
            i = document.querySelector(".launchGameTextContainer"),
            r = document.querySelector(".nowGGLogo");
          try {
            l.b.isMobile()
              ? ((i.style.display = "none"), (n.style.display = "none"))
              : ((r.src = v.a),
                (i.style.display = "flex"),
                n.classList.add("animateSmall"));
          } catch (e) {}
          o && (o.style.display = "none");
        }
      };
    function P(e) {
      document.removeEventListener("visibilitychange", x);
      var t = "others";
      if (
        (e && e.getError && (t = e.getError().getErrorCode()),
        e && e.getErrorCode && (t = e.getErrorCode()),
        Object(d.ab)("ad_load_fail", {
          fail_type: t,
          value: "pre-roll",
          ad_type: "video_640X580",
        }),
        O && 1 === k)
      )
        M();
      else if (((o.style.display = "none"), Object(d.bb)(), window.appReady)) {
        var n;
        _(), Object(d.ab)("ac_view_game_launch"), Object(d.db)();
        var i =
          null === (n = window.appInfo) || void 0 === n ? void 0 : n.playDomain;
        !window.imaError && i && Object(d.X)();
      } else C(), Object(d.kb)();
    }
    function D() {
      var e = document.querySelector(".launchGameText");
      i = setInterval(function () {
        h > 0
          ? ((e.innerHTML = window.localizedData.launchGameText.replace(
              /(\{.+\})/g,
              h
            )),
            (h -= 1))
          : clearInterval(i);
      }, 1e3);
    }
  },
  44: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return w;
    }),
      n.d(t, "a", function () {
        return g;
      }),
      n.d(t, "d", function () {
        return b;
      }),
      n.d(t, "f", function () {
        return y;
      }),
      n.d(t, "e", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return S;
      });
    var o = n(107),
      i = n.n(o),
      r = n(0),
      a = n(3),
      c = n(7);
    function s(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? s(Object(n), !0).forEach(function (t) {
              l(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : s(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function l(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function u(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function p(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            u(r, o, i, a, c, "next", e);
          }
          function c(e) {
            u(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var m = function () {
        try {
          var e = sessionStorage.getItem("dl");
          return e ? "&dl=".concat(e) : "";
        } catch (e) {
          return "";
        }
      },
      f = "",
      w = (function () {
        var e = p(
          regeneratorRuntime.mark(function e(t, n, o) {
            var i, c, s, d, l;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((e.prev = 0),
                        (i = ""
                          .concat(f, "/api/user/v2/auth?locale=")
                          .concat(window.language)),
                        (c = {
                          appId: t,
                          token: n,
                          sessionId: Object(a.o)(),
                          recaptchaToken: o,
                          adTrackingId: window.adTrackingId,
                        }),
                        (i += window.utmParamsStr || m()),
                        window.isIpad && (c.forceDeviceType = "ipad"),
                        !window["".concat(window.gameId, "-auth")])
                      ) {
                        e.next = 23;
                        break;
                      }
                      return (
                        (e.next = 8), window["".concat(window.gameId, "-auth")]
                      );
                    case 8:
                      if (
                        ((s = e.sent),
                        delete window["".concat(window.gameId, "-auth")],
                        !s.ok && 400 !== s.status)
                      ) {
                        e.next = 20;
                        break;
                      }
                      return (e.next = 13), s.json();
                    case 13:
                      if ("INVALID_REGION" !== (d = e.sent).code) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt("return", d);
                    case 16:
                      if (!d) {
                        e.next = 18;
                        break;
                      }
                      return e.abrupt("return", d);
                    case 18:
                      e.next = 21;
                      break;
                    case 20:
                      throw Error({
                        text: "API returned ".concat(s.status),
                        response: s,
                      });
                    case 21:
                      e.next = 31;
                      break;
                    case 23:
                      return (e.next = 25), Object(r.d)("post", i, n, c);
                    case 25:
                      if ((l = e.sent) && l.data) {
                        e.next = 30;
                        break;
                      }
                      throw Error(l);
                    case 30:
                      return e.abrupt("return", l.data);
                    case 31:
                      return e.abrupt("return", {});
                    case 34:
                      return (
                        (e.prev = 34),
                        (e.t0 = e.catch(0)),
                        e.abrupt("return", !1)
                      );
                    case 37:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 34]]
            );
          })
        );
        return function (t, n, o) {
          return e.apply(this, arguments);
        };
      })(),
      v = (function () {
        var e = p(
          regeneratorRuntime.mark(function e(t, n) {
            var o, c, s, d;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = Object(a.m)()),
                      (c = t.map(
                        (function () {
                          var e = p(
                            regeneratorRuntime.mark(function e(t) {
                              var i, a, c;
                              return regeneratorRuntime.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (i = t.type),
                                        (a = ""
                                          .concat(
                                            f,
                                            "/api/support/v1/ticket-screenshot-url?mime-type="
                                          )
                                          .concat(i, "&userId=")
                                          .concat(n)),
                                        (e.next = 4),
                                        Object(r.d)("get", a, o)
                                      );
                                    case 4:
                                      return (
                                        (c = e.sent), e.abrupt("return", c.data)
                                      );
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })()
                      )),
                      (e.next = 4),
                      Promise.all(c)
                    );
                  case 4:
                    return (
                      (s = e.sent),
                      (d = s.map(function (e, n) {
                        var o = e.signedUrl,
                          r = t[n],
                          a = {
                            method: "put",
                            url: o,
                            headers: { "Content-Type": r.type },
                            data: r,
                          };
                        return i()(a);
                      })),
                      (e.next = 8),
                      Promise.all(d)
                    );
                  case 8:
                    return e.abrupt(
                      "return",
                      s.map(function (e) {
                        return e.previewUrl;
                      })
                    );
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n) {
          return e.apply(this, arguments);
        };
      })(),
      g = (function () {
        var e = p(
          regeneratorRuntime.mark(function e(t) {
            var n, o, i, c, s, l;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = "".concat(f, "/api/support/v1/ticket")),
                      (i = Object(a.m)()),
                      (e.next = 4),
                      v(t.screenshots || [], t.userId)
                    );
                  case 4:
                    return (
                      (c = e.sent),
                      (s = d(d({}, t), {}, { screenshots: c })),
                      (e.next = 8),
                      Object(r.d)("post", o, i, s)
                    );
                  case 8:
                    return (
                      (l = e.sent),
                      e.abrupt(
                        "return",
                        null == l || null === (n = l.data) || void 0 === n
                          ? void 0
                          : n.success
                      )
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      b = (function () {
        var e = p(
          regeneratorRuntime.mark(function e() {
            var t, n, o, i, s, l, u;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = Object(a.m)()),
                        (n = "".concat(f, "/api/user/v2/instance")),
                        (e.prev = 2),
                        (e.next = 5),
                        Object(r.d)("get", n, t)
                      );
                    case 5:
                      if (((o = e.sent), (i = Object(a.c)()), !o || !o.data)) {
                        e.next = 15;
                        break;
                      }
                      if (
                        !(
                          o.data &&
                          o.data.payload &&
                          o.data.payload.nowInstanceId
                        )
                      ) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (s = o.data.payload),
                        (l = s.iceCandidates),
                        (u = s.offerSdp),
                        (e.next = 14),
                        Object(c.h)(
                          d(d({}, i), {}, { iceCandidates: l, offerSdp: u })
                        )
                      );
                    case 14:
                      return e.abrupt("return", o.data);
                    case 15:
                      e.next = 20;
                      break;
                    case 17:
                      throw ((e.prev = 17), (e.t0 = e.catch(2)), Error(e.t0));
                    case 20:
                      return e.abrupt("return", null);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 17]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      y = (function () {
        var e = p(
          regeneratorRuntime.mark(function e(t) {
            var n, o, i;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = Object(a.m)()),
                        (o = "".concat(f, "/api/user/v2/set-answer")),
                        (e.prev = 2),
                        (e.next = 5),
                        Object(r.d)("post", o, n, { answerSdp: t })
                      );
                    case 5:
                      return (i = e.sent), e.abrupt("return", i.data);
                    case 9:
                      throw ((e.prev = 9), (e.t0 = e.catch(2)), Error(e.t0));
                    case 12:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 9]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      h = (function () {
        var e = p(
          regeneratorRuntime.mark(function e() {
            var t, n, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = Object(a.m)()),
                        (n = "".concat(
                          f,
                          "/api/rewards/v1/redeem-scratchcard"
                        )),
                        (e.prev = 2),
                        (e.next = 5),
                        Object(r.d)("get", n, t)
                      );
                    case 5:
                      if ((o = e.sent) && o.data) {
                        e.next = 10;
                        break;
                      }
                      throw Error(o);
                    case 10:
                      return e.abrupt("return", o.data);
                    case 11:
                      e.next = 16;
                      break;
                    case 13:
                      return (
                        (e.prev = 13),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", { code: "FAILURE" })
                      );
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      S = (function () {
        var e = p(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              o,
              i,
              c,
              s = arguments;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = s.length > 0 && void 0 !== s[0] && s[0]),
                        (n = ""
                          .concat(
                            f,
                            "/api/apps/v1/popular/apps/list?currentApp="
                          )
                          .concat(window.gameId)),
                        (e.prev = 2),
                        (e.next = 5),
                        Object(r.d)("get", n)
                      );
                    case 5:
                      if ((o = e.sent) && o.data) {
                        e.next = 10;
                        break;
                      }
                      throw Error(o);
                    case 10:
                      if (t && (Object(a.z)(o.data.data), o.data.data.length))
                        for (
                          i = document.getElementsByName("showPopularGames"),
                            c = 0;
                          c < i.length;
                          c++
                        )
                          i[c].classList.remove("hide");
                      return e.abrupt("return", o.data);
                    case 12:
                      e.next = 18;
                      break;
                    case 14:
                      return (
                        (e.prev = 14),
                        (e.t0 = e.catch(2)),
                        e.abrupt("return", {})
                      );
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 14]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
  },
  480: function (e, t, n) {},
  485: function (e, t, n) {
    e.exports = n.p + "images/good-network.svg";
  },
  486: function (e, t, n) {},
  5: function (e, t, n) {
    "use strict";
    n.d(t, "r", function () {
      return M;
    }),
      n.d(t, "n", function () {
        return T;
      }),
      n.d(t, "b", function () {
        return C;
      }),
      n.d(t, "z", function () {
        return P;
      }),
      n.d(t, "A", function () {
        return R;
      }),
      n.d(t, "y", function () {
        return B;
      }),
      n.d(t, "g", function () {
        return N;
      }),
      n.d(t, "t", function () {
        return q;
      }),
      n.d(t, "a", function () {
        return G;
      }),
      n.d(t, "p", function () {
        return U;
      }),
      n.d(t, "l", function () {
        return V;
      }),
      n.d(t, "o", function () {
        return F;
      }),
      n.d(t, "q", function () {
        return K;
      }),
      n.d(t, "m", function () {
        return z;
      }),
      n.d(t, "k", function () {
        return ie;
      }),
      n.d(t, "i", function () {
        return le;
      }),
      n.d(t, "w", function () {
        return ue;
      }),
      n.d(t, "j", function () {
        return pe;
      }),
      n.d(t, "v", function () {
        return me;
      }),
      n.d(t, "x", function () {
        return we;
      }),
      n.d(t, "c", function () {
        return ye;
      }),
      n.d(t, "u", function () {
        return he;
      }),
      n.d(t, "h", function () {
        return Le;
      }),
      n.d(t, "B", function () {
        return Ae;
      }),
      n.d(t, "s", function () {
        return Pe;
      }),
      n.d(t, "f", function () {
        return De;
      }),
      n.d(t, "d", function () {
        return Re;
      }),
      n.d(t, "e", function () {
        return Be;
      });
    var o = n(7),
      i = n(2),
      r = n(17),
      a = n(6),
      c = n(28),
      s = n(0),
      d = n(35),
      l = n(163),
      u = n(32),
      p = n(65),
      m = n(3);
    function f(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function w(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? f(Object(n), !0).forEach(function (t) {
              v(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : f(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function v(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function g(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return b(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return b(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return b(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function b(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    var y,
      h = new Map(),
      S = new Array(10).fill(0),
      O = 0,
      k = {},
      E = 0,
      I = function (e, t) {
        return (
          e["movement".concat(t)] ||
          e["mozMovement".concat(t)] ||
          e["webkitMovement".concat(t)] ||
          0
        );
      },
      j = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = new ArrayBuffer(2 * t.length + 2),
          o = new Uint16Array(n);
        window.enableMouseLogs, (o[0] = e);
        for (var i = 0; i < t.length; i++) o[i + 1] = t[i];
        return n;
      },
      x = function (e, t, n, o, i) {
        var r = null == e ? void 0 : e.getBoundingClientRect(),
          a = null == t ? void 0 : t.getBoundingClientRect();
        if (r && a) {
          var c = r.x <= a.x + n && r.x + r.width >= a.x + n,
            s = r.y <= a.y + o && r.y + r.height >= a.y + o;
          c && s && Object(d.a)("mouseover_".concat(i));
        }
      },
      M = function () {
        var e = 32767,
          t = document.getElementById("remoteVideo"),
          n = document.querySelector(".midRollAds"),
          r = document.querySelector(".fallbackAdsMidRoll"),
          a = 6,
          c = !1,
          l = 0,
          u = {
            InpMouseMove: 0,
            InpMouseLDown: 1,
            InpMouseLUp: 2,
            InpMouseMDown: 3,
            InpMouseMUp: 4,
            InpMouseRDown: 5,
            InpMouseRUp: 6,
            InpMouseX1Down: 7,
            InpMouseX1Up: 8,
            InpMouseX2Down: 9,
            InpMouseX2Up: 10,
            InpMouseWheel: 11,
          };
        function p(e) {
          return ["L", "M", "R", "X1", "X2"][e];
        }
        function f(e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = {
              mousedown: "InpMouse".concat(p(e.button), "Down"),
              mouseup: "InpMouse".concat(p(e.button), "Up"),
              mousemove: "InpMouseMove",
              wheel: "InpMouseWheel",
              mouseleave: "InpMouse".concat(p(y), "Up"),
            };
          return t ? n[e.type] : u[n[e.type]];
        }
        return {
          activate: function () {
            !window.isNativeMouseActive &&
              matchMedia("(hover:hover)") &&
              matchMedia("(hover:hover)").matches &&
              (!window.isRobloxToastHide &&
                !i.b.isMobile() &&
                "5349" === window.gameId &&
                Object(m.j)() < 3 &&
                Object(s.Ab)(),
              (window.isNativeMouseActive = !0),
              Object(o.m)(j(41, [1, 0, 0, 0])),
              Object(o.m)(j(41, [2, 0, 0, 0])),
              (t.style.cursor = "none"));
          },
          deActivate: function () {
            Object(d.a)("native_deactivated"),
              window.isNativeMouseActive &&
                ((window.isNativeMouseActive = !1), (t.style.cursor = "auto"));
          },
          isNativeMouseActive: function () {
            return window.isNativeMouseActive;
          },
          processNativeMouse: function (i, d, u, p) {
            if (window.isNativeMouseActive && i instanceof MouseEvent) {
              var m = f(i);
              if (document.pointerLockElement && t) {
                var w = I(i, "X"),
                  v = I(i, "Y");
                (T.x += w), (T.y += v), (l = 10 * Math.sqrt(w * w + v * v));
                var g = window.isPortraitMode ? t.offsetWidth : t.offsetHeight,
                  b = window.isPortraitMode ? t.offsetHeight : t.offsetWidth;
                T.x > g && ((T.x = 0), (c = !0)),
                  T.y > b && ((T.y = 0), (c = !0)),
                  T.x < 0 && ((T.x = g), (c = !0)),
                  T.y < 0 && ((T.y = b), (c = !0)),
                  (u = T.x),
                  (p = T.y),
                  Object(s.W)() &&
                    x(
                      document.getElementById("js-fs-widget"),
                      t,
                      u,
                      p,
                      "fsWidget"
                    ),
                  window.MIDROLL_STATE &&
                    x(
                      "STARTED" === window.MIDROLL_STATE ? n : r,
                      t,
                      u,
                      p,
                      "midRoll"
                    );
              }
              if (0 === m)
                c
                  ? ((c = !1),
                    setTimeout(function () {
                      Object(o.m)(
                        j(
                          41,
                          [
                            m,
                            Math.floor((u / t.offsetHeight) * e),
                            Math.floor((p / t.offsetWidth) * e),
                            Math.floor(i.deltaY) || 0,
                          ],
                          f(i, !0)
                        )
                      );
                    }, Math.min((1e3 - l) / 20, 20)))
                  : Object(o.n)(
                      j(
                        41,
                        [
                          m,
                          Math.floor((u / t.offsetHeight) * e),
                          Math.floor((p / t.offsetWidth) * e),
                          Math.floor(i.deltaY) || 0,
                        ],
                        f(i, !0)
                      )
                    );
              else if (11 === m) {
                if (a <= 0 || 6 === a || Math.abs(i.wheelDelta) > 100)
                  return (
                    Object(o.n)(
                      j(
                        41,
                        [
                          m,
                          Math.floor((u / t.offsetHeight) * e),
                          Math.floor((p / t.offsetWidth) * e),
                          Math.floor(
                            i.deltaY < 0 ? Math.abs(i.deltaY) : -1 * i.deltaY
                          ),
                        ],
                        f(i, !0)
                      )
                    ),
                    void (a = 5)
                  );
                --a;
              } else
                (u = (u / t.offsetHeight) * e),
                  (p = (p / t.offsetWidth) * e),
                  u < 0 && (u = 0),
                  p < 0 && (p = 0),
                  u > e && (u = e),
                  p > e && (p = e),
                  Object(o.m)(
                    j(
                      41,
                      [
                        m,
                        Math.floor(u),
                        Math.floor(p),
                        Math.floor(i.deltaY) || 0,
                      ],
                      f(i, !0)
                    )
                  );
            }
          },
        };
      },
      T = { x: 0, y: 0 },
      L = M(),
      A = L.processNativeMouse,
      _ = L.isNativeMouseActive,
      C = function () {
        var e = new Event("resize");
        window.dispatchEvent(e);
      },
      P = function (e) {
        e.stopPropagation(), e.preventDefault();
        for (
          var t = e.changedTouches,
            n = e.target.getBoundingClientRect(),
            i = [],
            r = 0;
          r < t.length;
          r++
        )
          i =
            window.innerHeight > window.innerWidth && !window.isPortraitMode
              ? [].concat(g(i), [
                  h.get(t[r].identifier),
                  Math.ceil(t[r].clientY - n.y),
                  Math.ceil(n.right - t[r].clientX),
                ])
              : window.innerHeight > window.innerWidth && window.isPortraitMode
              ? [].concat(g(i), [
                  h.get(t[r].identifier),
                  Math.ceil(t[r].clientX - n.x),
                  Math.ceil(t[r].clientY - n.y),
                ])
              : window.innerHeight < window.innerWidth && window.isPortraitMode
              ? [].concat(g(i), [
                  h.get(t[r].identifier),
                  Math.ceil(n.bottom - t[r].clientY),
                  Math.ceil(t[r].clientX - n.left),
                ])
              : [].concat(g(i), [
                  h.get(t[r].identifier),
                  Math.ceil(t[r].clientX - n.x),
                  Math.ceil(t[r].clientY - n.y),
                ]);
        Object(o.n)(j(3, i, "TouchMove"), e);
      },
      D = function () {
        for (var e = 0; e < 10; e++) if (!S[e]) return (S[e] = 1), e;
        return null;
      },
      R = function (e) {
        e.stopPropagation(), e.preventDefault();
        var t = e.changedTouches;
        if (t)
          for (
            var n = e.target.getBoundingClientRect(), i = 0;
            i < t.length;
            i++
          )
            if (!h.get(t[i].identifier))
              if (
                (h.set(t[i].identifier, D()),
                c.a.create(e, "darkgreen"),
                window.innerHeight > window.innerWidth &&
                  !window.isPortraitMode)
              ) {
                var r = [
                  h.get(t[i].identifier),
                  Math.ceil(t[i].clientY - n.y),
                  Math.ceil(n.right - t[i].clientX),
                ];
                Object(o.m)(j(1, r, "TouchStart"));
              } else if (
                window.isPortraitMode &&
                window.innerHeight < window.innerWidth
              ) {
                var a = [
                  h.get(t[i].identifier),
                  Math.ceil(n.bottom - t[i].clientY),
                  Math.ceil(t[i].clientX - n.left),
                ];
                Object(o.m)(j(1, a, "TouchStart"));
              } else if (
                window.isPortraitMode &&
                window.innerHeight > window.innerWidth
              ) {
                var s = [
                  h.get(t[i].identifier),
                  Math.ceil(t[i].clientX - n.x),
                  Math.ceil(t[i].clientY - n.y),
                ];
                Object(o.m)(j(1, s, "TouchStart"));
              } else {
                var d = [
                  h.get(t[i].identifier),
                  Math.ceil(t[i].clientX - n.x),
                  Math.ceil(t[i].clientY - n.y),
                ];
                Object(o.m)(j(1, d, "TouchStart"));
              }
      },
      B = function (e) {
        e.stopPropagation(), e.preventDefault();
        var t = e.changedTouches;
        if (t) {
          for (
            var n = e.target.getBoundingClientRect(), i = 0;
            i < t.length;
            i++
          ) {
            if (
              window.innerHeight > window.innerWidth &&
              !window.isPortraitMode
            ) {
              var r = [
                h.get(t[i].identifier),
                Math.ceil(t[i].clientY - n.y),
                Math.ceil(n.right - t[i].clientX),
              ];
              c.a.create(w(w({}, e), {}, { touches: e.changedTouches }), "red"),
                Object(o.m)(j(2, r, "TouchEnd"));
            } else if (
              window.isPortraitMode &&
              window.innerHeight < window.innerWidth
            ) {
              var a = [
                h.get(t[i].identifier),
                Math.ceil(n.bottom - t[i].clientY),
                Math.ceil(t[i].clientX - n.left),
              ];
              c.a.create(w(w({}, e), {}, { touches: e.changedTouches }), "red"),
                Object(o.m)(j(2, a, "TouchEnd"));
            } else if (
              window.isPortraitMode &&
              window.innerHeight > window.innerWidth
            ) {
              var s = [
                h.get(t[i].identifier),
                Math.ceil(t[i].clientX - n.x),
                Math.ceil(t[i].clientY - n.y),
              ];
              c.a.create(w(w({}, e), {}, { touches: e.changedTouches }), "red"),
                Object(o.m)(j(2, s, "TouchEnd"));
            } else {
              var d = [
                h.get(t[i].identifier),
                Math.ceil(t[i].clientX - n.x),
                Math.ceil(t[i].clientY - n.y),
              ];
              c.a.create(w(w({}, e), {}, { touches: e.changedTouches }), "red"),
                Object(o.m)(j(2, d, "TouchEnd"));
            }
            var l = h.get(t[i].identifier);
            (S[l] = 0), h.delete(t[i].identifier);
          }
          o.n && o.n.cancel();
        }
      },
      N = function (e) {
        var t = document.getElementById("remoteVideo");
        if (e.detail) {
          var n = document.querySelector(".app");
          n.classList.contains("rotate-screen")
            ? (n.classList.remove("rotate-screen"),
              n.classList.add("portrait-mode"),
              setTimeout(function () {
                return C();
              }, 100))
            : i.b.isMobile() && n.classList.add("portrait-mode"),
            t &&
              ("number" == typeof window.orientationValue &&
                2 === window.orientationValue &&
                t.classList.add("inverted"),
              t.classList.remove("landscape-1"),
              t.classList.remove("landscape"),
              t.classList.remove("landscape-3"));
        } else {
          var o = document.querySelector(".app");
          if (
            (o.classList.remove("portrait-mode"),
            t &&
              (t.classList.remove("inverted"),
              "number" == typeof window.orientationValue &&
                t.classList.add("landscape-".concat(window.orientationValue))),
            o.classList.remove("portrait-mode"),
            i.b.isMobile() && o.classList.add("rotate-screen"),
            i.b.isMobile())
          )
            o.classList.contains("rotate-screen") ||
              (o.classList.add("rotate-screen"),
              setTimeout(function () {
                return C();
              }, 100));
          else {
            var r = document.querySelector(".top-action");
            r && (r.style.display = "flex");
          }
        }
        setTimeout(function () {
          return C();
        }, 100);
      },
      q = function () {
        N({ detail: window.isPortraitMode });
      },
      G = function () {
        h.clear(), (S = new Array(10).fill(0));
      },
      H = function (e, t) {
        return a.c.pointerLock
          ? { x: I(e, "X"), y: I(e, "Y") }
          : window.isPortraitMode
          ? { x: e.offsetX, y: e.offsetY }
          : { x: Math.ceil(e.clientX - t.x), y: Math.ceil(e.clientY - t.y) };
      },
      U = Object(l.throttle)(function (e) {
        var t = e.target.getBoundingClientRect();
        if (
          (a.c.outOfFocus && a.c.updateFocus(),
          a.c.active && (E > 0 || a.c.pointerLock) && !_())
        ) {
          c.a.create(e);
          var n = H(e, t),
            i = n.x,
            r = n.y;
          a.c.mouseMove(i, r);
        } else if (O) {
          c.a.create(e);
          var s = [];
          (s = window.isPortraitMode
            ? [0, e.offsetX, e.offsetY]
            : [0, Math.ceil(e.clientX - t.x), Math.ceil(e.clientY - t.y)]),
            _()
              ? A.apply(void 0, [e].concat(g(s)))
              : Object(o.n)(j(3, s, "MouseMove"), e),
            (O = 1);
        } else if (_()) {
          var d = [];
          (d = window.isPortraitMode
            ? [0, e.offsetX, e.offsetY]
            : [0, Math.ceil(e.clientX - t.x), Math.ceil(e.clientY - t.y)]),
            A.apply(void 0, [e].concat(g(d)));
        }
      }, r.c),
      V = {},
      W = !1,
      F = function (e) {
        c.a.create(e, "darkgreen"), (W = !0), (y = e.button);
        var t = e.target.getBoundingClientRect();
        if (a.c.inUse() && !_()) {
          (k[e.button] = !0),
            (E = Object.keys(k).filter(function (e) {
              return k[e];
            }).length);
          var n = H(e, t),
            i = n.x,
            r = n.y;
          (V = { x: t.left + i, y: t.top + r }), a.c.mouseDown(e.button, i, r);
        } else if (!O) {
          var s = [];
          (s = window.isPortraitMode
            ? [0, e.offsetX, e.offsetY]
            : [0, Math.ceil(e.clientX - t.x), Math.ceil(e.clientY - t.y)]),
            _()
              ? (Object(d.c)() &&
                  (document.fullscreenElement ||
                    document.webkitFullscreenElement) &&
                  (Object(d.b)(),
                  window.isNativeMouseActive &&
                    !document.pointerLockElement &&
                    ((T.x = s[1]), (T.y = s[2]))),
                A.apply(void 0, [e].concat(g(s))))
              : Object(o.m)(j(1, s, "MouseDown")),
            (V = { x: t.left + s[1], y: t.top + s[2] }),
            window.keyboardStatus && p.a.updatePos(),
            (O = 1);
        }
      },
      K = function (e) {
        (W = !1), c.a.create(e, "red");
        var t = e.target.getBoundingClientRect();
        if (a.c.inUse() && !_()) {
          (k[e.button] = !1),
            (E = Object.keys(k).filter(function (e) {
              return k[e];
            }).length);
          var n = H(e, t),
            i = n.x,
            r = n.y;
          a.c.mouseUp(e.button, i, r);
        } else if (O) {
          var s = [];
          (s = window.isPortraitMode
            ? [0, e.offsetX, e.offsetY]
            : [0, Math.ceil(e.clientX - t.x), Math.ceil(e.clientY - t.y)]),
            _()
              ? A.apply(void 0, [e].concat(g(s)))
              : Object(o.m)(j(2, s, "MouseUp")),
            (O = 0),
            (y = void 0);
        }
        o.n && o.n.cancel();
      },
      z = function (e) {
        if (W) {
          var t = document.elementFromPoint(e.clientX, e.clientY);
          (t &&
            ((t.className && t.className.includes("tp-init")) ||
              e.target === t)) ||
            K(e);
        }
      },
      Y = 1,
      X = 2,
      J = 4,
      Q = 8,
      Z = 16,
      $ = 32,
      ee = 64,
      te = function (e) {
        return (
          (e.shiftKey && Y) |
          (e.altKey && X) |
          (e.ctrlKey && J) |
          (e.metaKey && Q) |
          (e.getModifierState("CapsLock") && Z) |
          (e.getModifierState("ScrollLock") && $) |
          (e.getModifierState("NumLock") && ee)
        );
      },
      ne = { 27: !0 },
      oe = function (e, t) {
        var n = new ArrayBuffer(4),
          i = new Uint8Array(n);
        (i[0] = t), (i[1] = 1), (i[2] = e), (i[3] = 4), Object(o.m)(n);
      },
      ie = { timestamp: Date.now() },
      re = function (e, t) {
        var n = t.key;
        if ("Unidentified" !== n)
          if (!window.keyboardStatus && Object(o.g)()) {
            var i = new ArrayBuffer(4),
              r = new Uint8Array(i);
            (r[0] = 101 === e ? 91 : 92),
              (r[1] = 1),
              (r[2] = t.which || t.keyCode),
              (r[3] = 0),
              Object(o.m)(i);
          } else if (
            n.length > 1 ||
            ((!window.keyboardStatus ||
              (function (e) {
                return e.altKey || e.ctrlKey || e.metaKey;
              })(t)) &&
              ((n >= "a" && n <= "z") || (n >= "A" && n <= "Z") || " " === n))
          ) {
            var a = t.which || t.keyCode;
            if (n.length > 1 && ne[a]) return;
            var c = new ArrayBuffer(4),
              s = new Uint8Array(c);
            (s[0] = e), (s[1] = 1), (s[2] = a), (s[3] = te(t)), Object(o.m)(c);
          } else if (101 === e && !t.isComposing) {
            if (p.a.justEnded) return void (p.a.justEnded = !1);
            ie.timestamp = Date.now();
            var d = n.codePointAt(0),
              l = new ArrayBuffer(6),
              u = new Uint8Array(l),
              m = new Uint16Array([d]),
              f = new Uint8Array(m.buffer, m.byteOffset, m.byteLength);
            (u[0] = 103),
              (u[1] = 0),
              (u[2] = 0),
              (u[3] = 0),
              (u[4] = f[0]),
              (u[5] = f[1]),
              Object(o.m)(l);
          }
      },
      ae = {},
      ce = {},
      se = {},
      de = "MacIntel" === navigator.platform && 0 === navigator.maxTouchPoints,
      le = function (e) {
        var t,
          n = document.getElementById("modal");
        if (
          !(null == n || null === (t = n.children) || void 0 === t
            ? void 0
            : t.length)
        )
          if (27 !== e.which) {
            if (e.isComposing) return 0;
            if (!(e.target instanceof HTMLTextAreaElement)) {
              var i = e.which || e.keyCode;
              switch (((se[i] = !0), i)) {
                case 86:
                  if (e.metaKey || e.ctrlKey) return 0;
                  break;
                case 65:
                case 67:
                case 88:
                  if (de && e.metaKey) return oe(i, 101), 0;
                  break;
                default:
                  e.preventDefault();
              }
              (ae[i] = e),
                a.c.inUse()
                  ? (e.preventDefault(), a.c.keyDown(i))
                  : e.isComposing || re(101, e);
            }
          } else Object(o.m)("backtogame");
      },
      ue = function (e) {
        Object(o.m)("tabstatus::".concat(e));
      },
      pe = function (e) {
        var t,
          n = document.getElementById("modal");
        if (
          !(null == n || null === (t = n.children) || void 0 === t
            ? void 0
            : t.length)
        ) {
          if (e.isComposing) return 0;
          var o = e.which || e.keyCode;
          switch ((delete se[o], o)) {
            case 86:
              if (e.metaKey || e.ctrlKey) return 0;
              break;
            case 65:
            case 67:
            case 88:
              if (de && e.metaKey) return oe(o, 102), 0;
              break;
            default:
              e.preventDefault();
          }
          if (a.c.inUse()) e.preventDefault(), (ce[o] = e), a.c.keyUp(o);
          else {
            if (27 === e.which) return;
            e.isComposing || re(102, e);
          }
        }
      },
      me = function (e, t) {
        var n = 101;
        if (
          (t || (n = 102),
          !(263 === e || 264 === e || (e <= r.b.MAX && e >= r.b.MIN)))
        ) {
          var i = t ? ae[e] : ce[e];
          try {
            var a = new ArrayBuffer(4),
              c = new Uint8Array(a);
            (c[0] = n),
              (c[1] = 1),
              (c[2] = e),
              (c[3] = i && i.getModifierState ? te(i) : 0),
              t ? delete ae[e] : delete ce[e],
              Object(o.m)(a);
          } catch (e) {}
        }
      };
    var fe = { w: 16, h: 9 },
      we = function (e, t) {
        (fe.w = e), (fe.h = t);
      },
      ve = function (e) {
        return Math.round((e / fe.w) * fe.h);
      },
      ge = function (e) {
        return Math.round(e / fe.w) * fe.w;
      },
      be = function (e) {
        return Math.round((e / fe.h) * fe.w);
      },
      ye = function () {
        var e,
          t,
          n,
          o,
          r = document.querySelector("._videoContainer"),
          a = document.getElementById("remoteVideo");
        if (null === a || null === r) return { width: e, height: t };
        (a.style.width = "100%"), (e = r.offsetWidth), (t = r.offsetHeight);
        var c = Object(s.B)();
        if (
          (c &&
            ("leaderboard" === c
              ? (t -= 190)
              : "skyscrapper" === c && (e -= 330)),
          window.isPortraitMode
            ? (ve(t) > e && (t = be(e)), (t = ge(t)), (n = e = ve(t)), (o = t))
            : (ve(e) > t && (e = be(t)), (n = e = ge(e)), (o = t = ve(e))),
          i.b.isMobile() &&
            (document.fullscreenElement || window.fullScreenFlag) &&
            ((e = r.offsetWidth), (t = r.offsetHeight)),
          i.b.isMobile())
        ) {
          var d = parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--sat"
              )
            ),
            l = parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--sab"
              )
            ),
            u = parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--sal"
              )
            ),
            p = parseInt(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--sar"
              )
            );
          (r.style.paddingLeft = ""),
            (r.style.paddingRight = ""),
            (r.style.paddingTop = ""),
            (r.style.paddingBottom = ""),
            window.isPortraitMode || 0 !== window.orientation
              ? window.isPortraitMode || 90 !== window.orientation
                ? window.isPortraitMode || -90 !== window.orientation
                  ? window.isPortraitMode && 0 === window.orientation
                    ? ((r.style.paddingTop = "".concat(d, "px")),
                      (r.style.paddingBottom = "".concat(l, "px")),
                      (t = t - d - l))
                    : window.isPortraitMode && 90 === window.orientation
                    ? ((r.style.paddingTop = "".concat(u, "px")), (t -= u))
                    : window.isPortraitMode &&
                      -90 === window.orientation &&
                      ((r.style.paddingTop = "".concat(p, "px")), (t -= p))
                  : ((r.style.paddingRight = "".concat(p, "px")), (e -= p))
                : ((r.style.paddingLeft = "".concat(u, "px")), (e -= u))
              : ((r.style.paddingLeft = "".concat(d, "px")), (e -= d));
        }
        if (
          ((a.style.width = "".concat(e, "px")),
          (a.style.height = "".concat(t, "px")),
          !window.isPortraitMode ||
          document.fullscreenElement ||
          window.fullScreenFlag
            ? (a.style.objectFit = "fill")
            : (a.style.objectFit = "cover"),
          i.b.isMobile() &&
            (i.b.isiOSSafari() || i.b.isiOS()) &&
            window.fullScreenFlag &&
            !i.b.isIPad())
        ) {
          var m = e / (n - 2),
            f = t / (o - 2);
          return (
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.position = "absolute"),
            (a.style.transformOrigin = "0% 0%"),
            (a.style.objectFit = "unset"),
            window.isPortraitMode
              ? ((a.style.transform = "scaleY("
                  .concat(f, ") scaleX(")
                  .concat(m, ")")),
                (a.style.height = "".concat(o, "px")),
                (a.style.width = "".concat(n, "px")))
              : ((a.style.objectFit = "contain"),
                (a.style.top = "50%"),
                (a.style.left = "50%"),
                (a.style.transform = "scaleY("
                  .concat(f, ") scaleX(")
                  .concat(m, ") rotate(-90deg) translate(-50%, -50%)")),
                (a.style.height = "".concat(n, "px")),
                (a.style.width = "".concat(o, "px"))),
            { width: e, height: t }
          );
        }
        return (
          ((i.b.isMobile() &&
            (i.b.isiOSSafari() || i.b.isiOS()) &&
            !window.fullScreenFlag) ||
            i.b.isIPad()) &&
            ((e = n),
            (t = o),
            (a.style.top = "50%"),
            (a.style.left = "50%"),
            (a.style.position = "absolute"),
            (a.style.objectFit = "cover"),
            window.isPortraitMode
              ? ((a.style.transformOrigin = ""), (a.style.transform = ""))
              : ((a.style.transformOrigin = "0 0"), (a.style.transform = "")),
            (a.style.height = "".concat(t, "px")),
            (a.style.width = "".concat(e, "px"))),
          i.b.isIPad() &&
            (Object(s.W)()
              ? ((window.fullScreenFlag = !0), Object(s.L)())
              : ((window.fullScreenFlag = !1), Object(s.L)())),
          window.isPortraitMode ||
            ((a.style.height = "".concat(e, "px")),
            (a.style.width = "".concat(t, "px"))),
          { width: e, height: t }
        );
      },
      he = function () {
        var e = document.querySelector(".app");
        e &&
          (i.b.isMobile() ||
            ((e.style.height = ""), (e.style.height = "100vh")));
        var t,
          n = Object(s.t)(),
          r = Object(s.B)(),
          c = ye(),
          d = c.width,
          l = c.height;
        if (
          ((function (e, t) {
            if (e && t) {
              var n = "screen::".concat(e, "::").concat(t, "::", 60);
              Object(o.m)(n);
            }
          })(d, l),
          n && r)
        ) {
          var p = document.querySelector("._videoContainer"),
            m = document.getElementById("skyScrapper-1"),
            f = document.getElementById("skyScrapper-2"),
            w = document.getElementById("leaderBoard-1"),
            v = document.getElementById("leaderBoard-2");
          try {
            if ("leaderboard" === r) {
              var g = (p.offsetHeight - l) / 2 - 90;
              g > 0 &&
                ((w.style.top = "".concat(g / 2, "px")),
                (v.style.bottom = "".concat(g / 2, "px"))),
                document.querySelectorAll(".leaderBoard").forEach(function (e) {
                  e.style.display = "flex";
                }),
                document.querySelectorAll(".skyScrapper").forEach(function (e) {
                  e.style.display = "none";
                });
            } else if ("skyscrapper" === r) {
              var b = (p.offsetWidth - d) / 2 - 160;
              b > 0 &&
                ((m.style.left = "".concat(b / 2, "px")),
                (f.style.right = "".concat(b / 2, "px"))),
                document.querySelectorAll(".skyScrapper").forEach(function (e) {
                  e.style.display = "flex";
                }),
                document.querySelectorAll(".leaderBoard").forEach(function (e) {
                  e.style.display = "none";
                });
            }
          } catch (e) {}
        }
        a.c.initialized &&
          ((t = new Event("control_overlay_resize")),
          window.dispatchEvent(t),
          a.c.setDimensions(d, l),
          a.c.updateDimensions(),
          Object(u.e)());
      },
      Se = 0,
      Oe = 0,
      ke = null,
      Ee = !1,
      Ie = { x: null, y: null },
      je = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? 50 : 25,
      xe = Object(l.throttle)(function (e) {
        var t = e.target.getBoundingClientRect(),
          n = e.offsetX,
          o = e.offsetY;
        window.isPortraitMode ||
          ((n = Math.ceil(e.clientX - t.x)), (o = Math.ceil(e.clientY - t.y)));
        var i = e.deltaY ? 120 * -e.deltaY : 1.5 * -e.deltaX;
        a.c.mouseScroll(n, o, i);
      }, 30),
      Me = { 9849: 16 },
      Te = Date.now(),
      Le = function (e) {
        if (
          (e.preventDefault(),
          e.stopPropagation(),
          a.c.inUse() && (!0 === e.ctrlKey || se[Me[window.gameId] || 17]))
        )
          return xe.cancel(), xe(e), void (Te = Date.now());
        if (!(Date.now() - Te < 1e3))
          if (_()) {
            var t,
              n = e.target.getBoundingClientRect();
            (t = window.isPortraitMode
              ? [0, e.offsetX, e.offsetY]
              : [0, Math.ceil(e.clientX - n.x), Math.ceil(e.clientY - n.y)]),
              A.apply(void 0, [e].concat(g(t)));
          } else if (!O) {
            var i,
              r = e.target.getBoundingClientRect(),
              c = e.wheelDeltaY
                ? e.wheelDeltaY === -3 * e.deltaY
                : 0 === e.deltaMode;
            if (!Ee)
              (i = window.isPortraitMode
                ? [0, e.offsetX, e.offsetY]
                : [0, Math.ceil(e.clientX - r.x), Math.ceil(e.clientY - r.y)]),
                Object(o.m)(j(1, i, "ScollStart"));
            if (((Ee = !0), c)) {
              var s,
                d = (e.deltaY / 120) * je,
                l = (e.deltaX / 120) * je;
              (Se = Math.floor(Se + d)),
                (Oe = Math.floor(Oe + l)),
                (s = window.isPortraitMode
                  ? [0, e.offsetX - Oe, e.offsetY - Se]
                  : [
                      0,
                      Math.ceil(e.clientX - r.x) - Oe,
                      Math.ceil(e.clientY - r.y) - Se,
                    ]),
                (Ie.x = s[1]),
                (Ie.y = s[2]),
                setTimeout(function () {
                  Object(o.n)(j(3, s, "Scroll"));
                }, 10);
            } else {
              var u,
                p = (e.deltaY / 120) * je;
              p < 0 && p > -10 ? (p = -10) : p > 0 && p < 10 && (p = 10),
                (Se = Math.floor(Se + p)),
                (u = window.isPortraitMode
                  ? [0, e.offsetX, e.offsetY - Se]
                  : [
                      0,
                      Math.ceil(e.clientX - r.x),
                      Math.ceil(e.clientY - r.y) - Se,
                    ]),
                (Ie.x = u[1]),
                (Ie.y = u[2]),
                setTimeout(function () {
                  Object(o.n)(j(3, u, "Scroll"));
                }, 20);
            }
            clearInterval(ke),
              (ke = setTimeout(function () {
                o.n && o.n.cancel();
                var e = [0, Ie.x, Ie.y];
                Object(o.m)(j(2, e, "ScrollEnd")),
                  (Ie = { x: null, y: null }),
                  (Se = 0),
                  (Oe = 0),
                  (Ee = !1);
              }, 100)),
              e.preventDefault();
          }
      },
      Ae = function (e, t, n) {
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 0;
          try {
            var o = document.createEvent("TouchEvent");
            o.initTouchEvent("touchstart", !0, !0),
              (o.targetTouches = [{ pageX: t, pageY: n }]),
              e.dispatchEvent(o);
          } catch (t) {
            try {
              var i = document.createEvent("UIEvent");
              i.initUIEvent("touchstart", !0, !0), e.dispatchEvent(i);
            } catch (t) {
              var r = document.createEvent("Event");
              r.initEvent("touchstart", !0, !0), e.dispatchEvent(r);
            }
          }
        })(e, t, n),
          (function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0;
            try {
              var o = document.createEvent("TouchEvent");
              o.initTouchEvent("touchend", !0, !0),
                (o.changedTouches = [{ pageX: t, pageY: n }]),
                e.dispatchEvent(o);
            } catch (t) {
              try {
                var i = document.createEvent("UIEvent");
                i.initUIEvent("touchend", !0, !0), e.dispatchEvent(i);
              } catch (t) {
                var r = document.createEvent("Event");
                r.initEvent("touchend", !0, !0), e.dispatchEvent(r);
              }
            }
          })(e, t, n);
      },
      _e = {},
      Ce = {},
      Pe = function (e) {
        var t = function (e) {
            if (Ce[e]) {
              var t = [e, Ce[e].x, Ce[e].y];
              Object(o.m)(j(2, t)), (_e[e] = 0), (Ce[e] = null);
            }
          },
          n = [];
        e.forEach(function (e, i) {
          if (_e[i] && e.x > 1e4 && e.y > 1e4) t(i);
          else if (1 === _e[i] && e.x < 1e4 && e.y < 1e4)
            (Ce[i] = e), n.push(i, e.x, e.y);
          else if (Ce[i] && e.x > 1e4 && e.y > 1e4) t(i);
          else if (e.x < 1e4 && e.y < 1e4) {
            var r = [i, e.x, e.y];
            (Ce[i] = e),
              (function (e, t) {
                Object(o.m)(j(1, t)), (_e[e] = 1);
              })(i, r);
          }
        }),
          n.length && Object(o.m)(j(3, n));
      },
      De = function (e) {
        var t = 1e6,
          n = Math.floor(e.accelerationIncludingGravity.x * t),
          r = Math.floor(e.accelerationIncludingGravity.y * t),
          a = Math.floor(e.accelerationIncludingGravity.z * t);
        i.b.isiOS() &&
          ((n = n < 0 ? Math.abs(n) : -n),
          (r = r < 0 ? Math.abs(r) : -r),
          (a = a < 0 ? Math.abs(a) : -a));
        var c,
          s,
          d,
          l,
          u = [n, r, a];
        Object(o.n)(
          ((c = 201),
          (s = u),
          (d = new ArrayBuffer(16)),
          ((l = new Uint32Array(d))[0] = c),
          (l[1] = s[0]),
          (l[2] = s[1]),
          (l[3] = s[2]),
          d)
        );
      },
      Re = function (e) {
        a.b.onblur(),
          Object.keys(ae).forEach(function (e) {
            var t = ae[e];
            try {
              var n = t.which || t.keyCode;
              se[n] && pe(t);
            } catch (e) {}
          });
      },
      Be = function (e) {
        a.b.onfocus();
      };
  },
  50: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return l;
    }),
      n.d(t, "e", function () {
        return p;
      }),
      n.d(t, "b", function () {
        return m;
      }),
      n.d(t, "a", function () {
        return f;
      });
    var o,
      i,
      r = n(5),
      a = n(27),
      c = n(0),
      s = n(3),
      d = !1,
      l = function () {
        (d = !0), (window.midRollCount = 1);
      },
      u = function () {
        document.querySelectorAll(".leaderBoard").forEach(function (e) {
          e.style.display = "none";
        }),
          document.querySelectorAll(".skyScrapper").forEach(function (e) {
            e.style.display = "none";
          });
      },
      p = function e(t) {
        if ("hidden" === document.visibilityState)
          return Object(c.ob)(!0), Object(c.fb)(!0), void clearInterval(o);
        var n = Object(c.r)();
        "skyscrapper" === i
          ? ((window.tudeDisplay = window.tudeDisplay || { cmd: [] }),
            window.tudeDisplay.cmd.push(function () {
              window.tudeDisplay.setPageTargeting(n),
                window.tudeDisplay.refreshAdsViaDivMappings([
                  {
                    divId: "div-gpt-ad-skyScrapper-1",
                    baseDivId: "pb-slot-incontent-large",
                  },
                  {
                    divId: "div-gpt-ad-skyScrapper-2",
                    baseDivId: "pb-slot-incontent-large",
                  },
                ]);
            }))
          : ((window.tudeDisplay = window.tudeDisplay || { cmd: [] }),
            window.tudeDisplay.cmd.push(function () {
              window.tudeDisplay.setPageTargeting(n),
                window.tudeDisplay.refreshAdsViaDivMappings([
                  {
                    divId: "div-gpt-ad-leaderBoard-1",
                    baseDivId: "pb-slot-incontent-small",
                  },
                  {
                    divId: "div-gpt-ad-leaderBoard-2",
                    baseDivId: "pb-slot-incontent-small",
                  },
                ]);
            })),
          (window.midRollCount += 1),
          t &&
            (o = setInterval(function () {
              e();
            }, 3e4));
      },
      m = function () {
        var e = !0;
        if (!window.imaError) {
          var t = document.querySelector("._videoContainer"),
            n = t.offsetHeight,
            l = t.offsetWidth,
            u = Object(s.c)().experimentTypes,
            m = (void 0 === u ? [] : u).indexOf("inGameAds") > -1;
          n < 600 && l < 728 && ((e = !1), m || Object(a.c)());
          var f = Object(c.r)();
          d &&
            e &&
            (Object(c.gb)(!0),
            window.clearMidRollInterval && !m && window.clearMidRollInterval(),
            (window.tudeDisplay = window.tudeDisplay || { cmd: [] }),
            window.isPortraitMode
              ? window.tudeDisplay.cmd.push(function () {
                  window.tudeDisplay.setPageTargeting(f),
                    window.tudeDisplay.refreshAdsViaDivMappings([
                      {
                        divId: "div-gpt-ad-skyScrapper-1",
                        baseDivId: "pb-slot-incontent-large",
                      },
                      {
                        divId: "div-gpt-ad-skyScrapper-2",
                        baseDivId: "pb-slot-incontent-large",
                      },
                    ]);
                })
              : window.tudeDisplay.cmd.push(function () {
                  window.tudeDisplay.setPageTargeting(f),
                    window.tudeDisplay.refreshAdsViaDivMappings([
                      {
                        divId: "div-gpt-ad-skyScrapper-1",
                        baseDivId: "pb-slot-incontent-large",
                      },
                      {
                        divId: "div-gpt-ad-skyScrapper-2",
                        baseDivId: "pb-slot-incontent-large",
                      },
                      {
                        divId: "div-gpt-ad-leaderBoard-1",
                        baseDivId: "pb-slot-incontent-small",
                      },
                      {
                        divId: "div-gpt-ad-leaderBoard-2",
                        baseDivId: "pb-slot-incontent-small",
                      },
                    ]);
                }),
            (function () {
              var e,
                t,
                n = document.querySelector("._videoContainer"),
                o = document.getElementById("remoteVideo"),
                a = n.offsetHeight,
                s = o.offsetHeight,
                d = n.offsetWidth,
                l = o.offsetWidth;
              window.isPortraitMode
                ? ((e = a - s), (t = d - l))
                : ((e = a - l), (t = d - s)),
                (i =
                  e >= 190
                    ? "leaderboard"
                    : t >= 330 || t > e
                    ? "skyscrapper"
                    : "leaderboard"),
                Object(c.mb)(i),
                Object(r.u)();
            })(),
            (o = setInterval(function () {
              p();
            }, 3e4)));
        }
      },
      f = function () {
        clearInterval(o), u(), (window.midRollCount = 1);
      };
  },
  517: function (e, t, n) {},
  518: function (e, t, n) {
    "use strict";
    n.r(t);
    n(254),
      n(255),
      n(256),
      n(257),
      n(258),
      n(259),
      n(260),
      n(261),
      n(262),
      n(263),
      n(264),
      n(265),
      n(266),
      n(267),
      n(268),
      n(269),
      n(270),
      n(271),
      n(272),
      n(273),
      n(274),
      n(275),
      n(276),
      n(277),
      n(278),
      n(279),
      n(281),
      n(282),
      n(283),
      n(114),
      n(284),
      n(285),
      n(286),
      n(287),
      n(288),
      n(289),
      n(290),
      n(291),
      n(292),
      n(293),
      n(294),
      n(295),
      n(296),
      n(297),
      n(298),
      n(300),
      n(301),
      n(302),
      n(303),
      n(304),
      n(306),
      n(307),
      n(309),
      n(310),
      n(311),
      n(312),
      n(313),
      n(314),
      n(315),
      n(316),
      n(317),
      n(318),
      n(319),
      n(320),
      n(321),
      n(322),
      n(323),
      n(324),
      n(326),
      n(327),
      n(328),
      n(329),
      n(330),
      n(331),
      n(332),
      n(333),
      n(334),
      n(335),
      n(336),
      n(337),
      n(338),
      n(340),
      n(341),
      n(342),
      n(343),
      n(344),
      n(345),
      n(346),
      n(347),
      n(348),
      n(349),
      n(350),
      n(351),
      n(352),
      n(353),
      n(354),
      n(355),
      n(356),
      n(357),
      n(358),
      n(359),
      n(360),
      n(361),
      n(362),
      n(363),
      n(364),
      n(365),
      n(366),
      n(367),
      n(368),
      n(369),
      n(370),
      n(371),
      n(372),
      n(374),
      n(375),
      n(376),
      n(377),
      n(381),
      n(382),
      n(383),
      n(384),
      n(385),
      n(386),
      n(387),
      n(388),
      n(389),
      n(390),
      n(391),
      n(392),
      n(393),
      n(394),
      n(395),
      n(396),
      n(151),
      n(397),
      n(398),
      n(399),
      n(400),
      n(401),
      n(402),
      n(403),
      n(404),
      n(405),
      n(200),
      n(406),
      n(407),
      n(408),
      n(409),
      n(410),
      n(411),
      n(412),
      n(414),
      n(415),
      n(416),
      n(417),
      n(418),
      n(419),
      n(420),
      n(421),
      n(422),
      n(423),
      n(424),
      n(425),
      n(426),
      n(427),
      n(428),
      n(429),
      n(430),
      n(431),
      n(432),
      n(433),
      n(435),
      n(436),
      n(437),
      n(438),
      n(439),
      n(440),
      n(441),
      n(442),
      n(443),
      n(444),
      n(445),
      n(446),
      n(448),
      n(449),
      n(450),
      n(451),
      n(452),
      n(453),
      n(454),
      n(455),
      n(456),
      n(457),
      n(458),
      n(459),
      n(460),
      n(461),
      n(462),
      n(463),
      n(464),
      n(465),
      n(466),
      n(467),
      n(468),
      n(469),
      n(470),
      n(471),
      n(472),
      n(473),
      n(474),
      n(475),
      n(476),
      n(479),
      n(207),
      n(480),
      n(481);
    var o,
      i,
      r,
      a = n(224),
      c = n.n(a),
      s = n(2),
      d = n(72),
      l = n(5),
      u = n(0),
      p = n(44),
      m = n(3),
      f = n(64),
      w = n(7),
      v = n(83),
      g = n(20),
      b = function (e) {
        Object(v.a)("backbutton-mob", e);
      },
      y = function (e) {
        Object(v.b)("backbutton-mob", e);
      },
      h = function e() {
        window.removeEventListener("touchmove", y),
          window.removeEventListener("touchend", e);
      },
      S = function () {
        "none" !== document.getElementById("backbutton-mob").style.display &&
          (window.addEventListener("touchmove", y),
          window.addEventListener("touchend", h));
      },
      O = function () {
        (window.bs = window.bs || {}),
          (window.bs.andBack = w.e),
          (window.bs.handleLongPress = S),
          (window.bs.handleTouchMoveEnd = h),
          s.b.isMobile()
            ? (document.getElementById("back").innerHTML =
                '\n<button\nid="backbutton-mob"\nclass="back-togame"\nstyle="top:90%; left: 80%"\noncontextmenu="event.preventDefault()"\nontouchstart="bs.handleLongPress()"\nontouchend="bs.handleTouchMoveEnd()"\nonclick="bs.andBack()"\n>\n<span class="arrow">\n  <svg\n    width="8"\n    height="13"\n    viewBox="0 0 8 13"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      fillRule="evenodd"\n      clipRule="evenodd"\n      d="M7.20711 0.792893C7.59763 1.18342 7.59763 1.81658 7.20711 2.20711L2.91421 6.5L7.20711 10.7929C7.59763 11.1834 7.59763 11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289 12.2071L0.792893 7.20711C0.402369 6.81658 0.402369 6.18342 0.792893 5.79289L5.79289 0.792893C6.18342 0.402369 6.81658 0.402369 7.20711 0.792893Z"\n      fill="white"\n    />\n  </svg>\n</span>\n<span class="backtext" data-str-id="back"></span>\n</button>')
            : (document.getElementById("back").innerHTML =
                '<div class="backbutton">\n<button\n  class="primaryButton largeButton margin-top-20 backtogame"\n  onclick="bs.andBack()"\n>\n  <svg\n    width="19"\n    height="10"\n    viewBox="0 0 19 10"\n    fill="none"\n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path\n      d="M18.5 5L0.499997 5M0.499997 5L5 9.5M0.499997 5L5 0.500001"\n      stroke="white"\n      strokeLinecap="round"\n      strokeLinejoin="round"\n    />\n  </svg>\n  &nbsp;<span data-str-id="backtogame"></span>\n</button>\n</div>'),
          Object(g.b)(document.getElementById("back")),
          window.addEventListener("TOP_ACTIVITY_CHANGED", function (e) {
            window.appReady &&
              (e.detail
                ? s.b.isMobile()
                  ? (document.body.classList.add("m-game"),
                    b({ x: 90, y: window.isPortraitMode ? 80 : 20 }))
                  : document.body.classList.add("d-game")
                : document.body.classList.remove("m-game", "d-game"));
          }),
          b({ x: 90, y: window.isPortraitMode ? 80 : 20 });
      };
    function k(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var E,
      I,
      j,
      x =
        "\n    <p class='crossIcon' onclick='pwa.dismissPopup()'></p>\n    <p class='titleText' data-str-id='proTip'></p>\n    <div class='flex iconContainer'>\n        <img src="
          .concat(
            null === (o = window.appInfo) ||
              void 0 === o ||
              null === (i = o.media) ||
              void 0 === i
              ? void 0
              : i.desktop.icon,
            " />\n        <p class='flex column spaceBetween'>\n            <span class='gameName'>"
          )
          .concat(
            null === (r = window.appInfo) || void 0 === r ? void 0 : r.gameName,
            "</span>\n            <span class='nowgg'>now.gg</span>\n        </p>\n    </div>\n    <div class='flex buttonContainer'>\n        <button class='cancelButton' data-str-id='cancel' onclick='pwa.dismissPopup()'></button>\n        <button class='installButton' data-str-id='yes' onclick='pwa.installPopup()'></button>\n    </div>\n"
          ),
      M = function () {
        window.dispatchEvent(new CustomEvent("PWA_ACTIVITY", { detail: !1 })),
          Object(u.ab)("click_event", { click_type: "PWA_nudge", value: !1 });
      },
      T = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              var t, n, o;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        (window.dispatchEvent(
                          new CustomEvent("PWA_ACTIVITY", { detail: !1 })
                        ),
                        Object(u.ab)("click_event", {
                          click_type: "PWA_nudge",
                          value: !0,
                        }),
                        null === (t = Object(u.J)()))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return t.prompt(), (e.next = 7), t.userChoice;
                    case 7:
                      (n = e.sent),
                        "accepted" === (o = n.outcome) && Object(u.tb)(null),
                        Object(u.ab)("click_event", {
                          click_type: "PWA_system_prompt",
                          value: "accepted" === o,
                        });
                    case 11:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function a(e) {
                  k(r, o, i, a, c, "next", e);
                }
                function c(e) {
                  k(r, o, i, a, c, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      L = function () {
        (window.pwa = window.pwa || {}),
          (window.pwa.dismissPopup = M),
          (window.pwa.installPopup = T);
        var e = document.querySelector(".pwaModal");
        try {
          (e.innerHTML = x), Object(g.b)(e);
        } catch (e) {}
        window.addEventListener("PWA_ACTIVITY", function (e) {
          var t = document.querySelector(".pwaModal");
          if (e.detail)
            try {
              t.classList.add("show"),
                Object(u.ab)("impression_event", {
                  impression_type: "PWA_nudge",
                }),
                Object(u.nb)();
              var n = Object(m.h)();
              Object(m.B)(n + 1);
            } catch (e) {}
          else t.classList.remove("show");
        });
      };
    function A(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var _ = "\n    <div class='flex iconContainer'>\n      <img src="
        .concat(
          null === (E = window.appInfo) ||
            void 0 === E ||
            null === (I = E.media) ||
            void 0 === I
            ? void 0
            : I.desktop.icon,
          " />\n      <p class='flex column'>\n          <span class='gameName'>"
        )
        .concat(
          null === (j = window.appInfo) || void 0 === j ? void 0 : j.gameName,
          "</span>\n          <span class='publisherSlug'></span>\n      </p>\n    </div>\n    <span class='seperator'></span>\n    <a href='https://play.google.com/store/apps/details?id=com.kingsgroup.sos&hl=en_IN&gl=US' target='_blank' data-str-id='installApp' onClick='cpi.sendStat()'></a>\n    <p class='adBanner' data-str-id='ad'></p>\n    <p class='crossIcon' onclick='cpi.dismissPopup()'></p>\n  "
        ),
      C = function () {
        window.dispatchEvent(new CustomEvent("CPI_ADS", { detail: !1 })),
          Object(u.ab)("click_event", {
            click_type: "close_ad",
            ad_type: "CPI",
          }),
          setTimeout(function () {
            window.dispatchEvent(new CustomEvent("CPI_ADS", { detail: !0 }));
          }, 18e4);
      },
      P = (function () {
        var e,
          t =
            ((e = regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      window.dispatchEvent(
                        new CustomEvent("CPI_ADS", { detail: !1 })
                      ),
                        Object(u.ab)("click_event", {
                          click_type: "on_ad",
                          ad_type: "CPI",
                        });
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })),
            function () {
              var t = this,
                n = arguments;
              return new Promise(function (o, i) {
                var r = e.apply(t, n);
                function a(e) {
                  A(r, o, i, a, c, "next", e);
                }
                function c(e) {
                  A(r, o, i, a, c, "throw", e);
                }
                a(void 0);
              });
            });
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      D = function () {
        (window.cpi = window.cpi || {}),
          (window.cpi.dismissPopup = C),
          (window.cpi.sendStat = P);
        var e = document.querySelector(".cpiAds");
        try {
          (e.innerHTML = _), Object(g.b)(e);
        } catch (e) {}
        window.addEventListener("CPI_ADS", function (e) {
          var t = document.querySelector(".cpiAds");
          if (e.detail)
            try {
              var n = Object(m.c)(),
                o = null == n ? void 0 : n.appPublisherSlug;
              (document.querySelector(".publisherSlug").innerHTML = o),
                t.classList.add("show"),
                Object(u.ab)("impression_event", {
                  impression_type: "ad_impression",
                  ad_type: "CPI",
                });
            } catch (e) {}
          else t.classList.remove("show");
        });
      },
      R = n(84),
      B = n.n(R),
      N = /QtWebEngine/.test(navigator.userAgent),
      q = function () {
        window.addEventListener("load", function () {
          N || (window.qt = { webChannelTransport: { send: function () {} } }),
            N &&
              n
                .e(6)
                .then(n.bind(null, 621))
                .then(function (e) {
                  new (0,
                  e.default)(window.qt.webChannelTransport, function (e) {
                    (window.isQtWeb = !0),
                      (window.qtContext = e.objects.webBridge);
                  });
                });
        });
      },
      G = n(127),
      H = (n(165), n(109)),
      U = n(223),
      V = n(108),
      W = function (e) {
        (window.isDisconnected = e), Object(V.b)() && Object(w.k)();
        var t = document.getElementById("networkOverlay");
        e
          ? t &&
            document
              .getElementById("networkOverlay")
              .classList.add("network-overlay")
          : t &&
            document
              .getElementById("networkOverlay")
              .classList.remove("network-overlay", "connected", "back");
      },
      F = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : null,
          t = navigator.onLine ? "online" : "offline";
        if ("online" !== t) W(!0);
        else
          var n = setInterval(function () {
            fetch("/", { mode: "no-cors" })
              .then(function () {
                if (
                  (setTimeout(function () {
                    W(!1);
                  }, 2e3),
                  e && e instanceof Event)
                ) {
                  var t = document.querySelector(".connected"),
                    o = document.querySelector(".disconnectText");
                  (t.style.display = "block"),
                    (o.style.display = "none"),
                    setTimeout(function () {
                      document
                        .getElementById("networkOverlay")
                        .classList.add("back"),
                        (window.isReconnect = !0),
                        Object(p.d)()
                          .then(function (e) {
                            (t.style.display = "none"),
                              (o.style.display = "block"),
                              e &&
                                e.payload &&
                                e.payload &&
                                ((window.timer =
                                  e.payload.remainingSeconds || 1),
                                Object(u.Z)());
                          })
                          .catch(function (e) {});
                    }, 1e3);
                }
                return clearInterval(n);
              })
              .catch(function () {
                W(!0);
              });
          }, 2e3);
      },
      K = n(71),
      z = n(81),
      Y = n(73),
      X = n(106);
    function J(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function Q(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? J(Object(n), !0).forEach(function (t) {
              Z(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : J(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function Z(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function $(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function ee(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            $(r, o, i, a, c, "next", e);
          }
          function c(e) {
            $(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var te = !1;
    String.prototype.includes ||
      (String.prototype.includes = function (e, t) {
        if (e instanceof RegExp)
          throw TypeError("first argument must not be a RegExp");
        return void 0 === t && (t = 0), -1 !== this.indexOf(e, t);
      });
    var ne = function () {
        window.launchApp(), Object(z.b)(), Object(U.b)();
      },
      oe = "portrait",
      ie = window.appInfo,
      re = (void 0 === ie ? {} : ie).customData;
    (oe = (void 0 === re ? {} : re).videoOrientation || oe),
      (window.isPortraitMode = "portrait" === oe),
      Object(l.t)(),
      (window.isSocialMediaFlow = s.b.isMobile() && !window.isWhiteLabelledApp);
    var ae = function (e) {
        var t,
          n = e.publisher,
          o = e.packageName,
          i = {
            appSessionId: window.sessionId,
            appId: window.gameId,
            publisher: n,
            packageName:
              o ||
              (null === (t = window.appInfo) || void 0 === t
                ? void 0
                : t.packageName),
            userType: "anonymous",
          };
        f.a.init(i);
      },
      ce = (function () {
        var e = ee(
          regeneratorRuntime.mark(function e(t, n, o) {
            var i, r, a, c, l, w, v, g, b, y;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(p.b)(t, n, o);
                  case 2:
                    if ((i = e.sent)) {
                      e.next = 6;
                      break;
                    }
                    return (
                      Object(u.zb)("many_requests", "somethingWrong"),
                      e.abrupt("return")
                    );
                  case 6:
                    if (
                      ((a = (r = i || {}).userData),
                      (c = void 0 === a ? {} : a),
                      (l = r.code),
                      (c.isNewUser = !0),
                      sessionStorage.setItem(
                        "is_rewards_enabled",
                        c.isRewardsEnabled
                      ),
                      sessionStorage.setItem(
                        "rewards_timer",
                        c.scratchcardTimer
                      ),
                      (w = c.sessionId),
                      (v = c.playTime),
                      (g = c.countryCode),
                      c.countryRegion,
                      c.city,
                      Object(u.eb)(g),
                      (window.timer = v),
                      w &&
                        ((window.sessionId = w),
                        sessionStorage.setItem("sessionId", w)),
                      ae(i),
                      Object(s.f)() &&
                        Object(s.g)("nowgg_pwa_first-impression"),
                      "INVALID_REGION" !== l)
                    ) {
                      e.next = 21;
                      break;
                    }
                    return (
                      Object(u.zb)("app_not_available"), e.abrupt("return")
                    );
                  case 21:
                    if (
                      ("CAMPAIGN_NOT_FOUND" === l &&
                        Object(u.zb)("coming_soon"),
                      "UNDER_MAINTENANCE" !== l)
                    ) {
                      e.next = 25;
                      break;
                    }
                    return (
                      Object(u.zb)("under_maintenance"), e.abrupt("return")
                    );
                  case 25:
                    if (
                      (sessionStorage.setItem("APP_ID", window.gameId),
                      sessionStorage.setItem(
                        "RECAPTCHA_KEY",
                        "6Le_ZMYbAAAAAFyLH13_CQDmAM9dBLSWJsyUDvB-"
                      ),
                      "RECAPTCHA_REQUIRED" !== l && "RECAPTCHA_FAILED" !== l)
                    ) {
                      e.next = 38;
                      break;
                    }
                    return (
                      (b = Q({}, Object(s.a)())),
                      f.a.logEvent("recaptcha", b),
                      (e.next = 32),
                      Object(d.a)()
                    );
                  case 32:
                    return (
                      (y = e.sent), (e.next = 35), y.logEvent("recaptcha", b)
                    );
                  case 35:
                    return (
                      window.sessionId &&
                        sessionStorage.setItem("sessionId", window.sessionId),
                      setTimeout(function () {
                        window.location.href = "".concat(
                          "/play",
                          "/verify.html"
                        );
                      }, 500),
                      e.abrupt("return")
                    );
                  case 38:
                    if (
                      (Object(m.t)(c),
                      Object(u.i)(c),
                      "INSTANCE_UNAVAILABLE" !== l)
                    ) {
                      e.next = 45;
                      break;
                    }
                    return (
                      Object(u.ab)("ac_instance_not_available"),
                      Object(u.zb)("error429"),
                      Object(u.hb)("error429"),
                      e.abrupt("return")
                    );
                  case 45:
                    return ne(), e.abrupt("return", c);
                  case 47:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t, n, o) {
          return e.apply(this, arguments);
        };
      })();
    window.restartApp = function () {
      ce(window.gameId);
    };
    var se = function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0]
          ? arguments[0]
          : "bG9jYXRpb24=";
      return atob(e);
    };
    (function () {
      var e = ee(
        regeneratorRuntime.mark(function e() {
          var t,
            n,
            o,
            i,
            r,
            a,
            d,
            f,
            w,
            v,
            b,
            y,
            h,
            S,
            k,
            E,
            I,
            j,
            x,
            M,
            T,
            A,
            _,
            C,
            P,
            R,
            N,
            U,
            V,
            W,
            z,
            J,
            Q,
            Z,
            $,
            ee;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (t = "".concat("https://netv2.now.gg", "/geoip")),
                    (e.next = 3),
                    fetch(t).catch(function (e) {})
                  );
                case 3:
                  if (
                    ((n = e.sent),
                    (te = 403 === (null == n ? void 0 : n.status)),
                    Object(u.ib)(te),
                    (window.orientationValue = 1),
                    Object(p.c)(!0).catch(function (e) {
                      Object(u.ab)("ac_err", {
                        error_screen_type: "API_fail_popular_game_screen",
                        screen_type: window.screenType,
                      });
                    }),
                    (o = Object(m.c)()),
                    ae(o),
                    te &&
                      ((i = window[se()].host),
                      Object(u.ab)("proxy_ad_block", { value: i })),
                    !o || !o.packageName)
                  ) {
                    e.next = 21;
                    break;
                  }
                  if (((r = o.isNewUser), Object(u.i)(o), r)) {
                    e.next = 21;
                    break;
                  }
                  return (
                    Object(l.b)(),
                    ae(o),
                    (window.sessionEnded = !0),
                    Object(u.wb)(!1),
                    e.abrupt("return")
                  );
                case 21:
                  if (
                    ("localStorage" in window || (window.localStorage = c.a),
                    window.gameId)
                  ) {
                    e.next = 25;
                    break;
                  }
                  return (
                    Object(u.zb)("many_requests", "somethingWrong"),
                    e.abrupt("return")
                  );
                case 25:
                  if (
                    (s.b.isMobile() &&
                      (a = document.getElementById("userActions")) &&
                      a.classList.add("mobileActions"),
                    (d = window.location.search),
                    Object(g.a)(),
                    d &&
                      sessionStorage.setItem(
                        "queryParams",
                        window.location.search
                      ),
                    window.isWhiteLabelledApp &&
                      document
                        .querySelector("body")
                        .classList.add("whiteLabelled"),
                    s.b.isMobile()
                      ? document.querySelector(".overlay-bg").remove()
                      : window.appInfo &&
                        window.appInfo.media &&
                        "{}" !== JSON.stringify(window.appInfo.media) &&
                        ((document.querySelector(
                          ".gamePlayScreen"
                        ).style.display = "block"),
                        Object(l.t)()),
                    window.isLocalhost ||
                      B.a.start({
                        apiKey: "bc23c3c1d70a2c1cef097af5a1d5175c",
                        releaseStage: "production",
                        appVersion: "1.50.0",
                        appType: "Adnet",
                        onError: function (e) {
                          e.addMetadata("userData", o),
                            e.addMetadata("systemInfo", Object(H.a)());
                        },
                      }),
                    window.isSocialMediaFlow &&
                      (f = document.getElementById("loader")) &&
                      (f.style.display = "block"),
                    window.isWhiteLabelledApp ||
                      (s.b.isMobile()
                        ? (document.querySelector(
                            ".logoImageContainer.mobileView"
                          ).style.display = "flex")
                        : (document.querySelector(
                            ".logoImageContainer.desktopView"
                          ).style.display = "flex")),
                    (window.screenType = "loading"),
                    (document.getElementById("remoteVideo").poster =
                      "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="),
                    (window.isMuted = !0),
                    /MSIE|Trident/.test(window.navigator.userAgent) ||
                      (F(!0),
                      window.addEventListener("online", F),
                      window.addEventListener("offline", F)),
                    document.title || (document.title = "now.gg"),
                    window.location.pathname.split("/").includes("apps") &&
                      (window.location.href = "".concat(K.a.WEBSITE_HOME)),
                    (w = new URLSearchParams(window.location.search)),
                    (v = w.get("token")),
                    (b = w.get("recaptchaToken")),
                    sessionStorage.getItem("baseUrl") ||
                      sessionStorage.setItem("baseUrl", window.location.href),
                    b &&
                      (w.delete("recaptchaToken"),
                      window.history.replaceState(
                        null,
                        document.title,
                        Array.from(w).length > 0 ? "?".concat(w) : "/"
                      )),
                    localStorage.removeItem("experimentType"),
                    (y = Object(m.m)()),
                    document.addEventListener("click", function (e) {
                      switch (e.target.id) {
                        case "closeExplore":
                          Object(G.a)();
                          break;
                        case "closeModal":
                          Object(u.T)();
                          break;
                        case "close-sidebar":
                          Object(Y.c)(!1),
                            window.sidebar.interacted ||
                              (setTimeout(function () {
                                window.sidebar &&
                                  window.sidebar.widgetClick &&
                                  window.sidebar.widgetClick("closeWidget");
                              }, 3e3),
                              (window.sidebar.interacted = !0));
                      }
                    }),
                    O(),
                    s.b.isMobile() || L(),
                    s.b.isiOS() && X.a.init(),
                    s.b.isMobile() && D(),
                    q(),
                    !o || o.appId !== window.gameId || !y || b)
                  ) {
                    e.next = 83;
                    break;
                  }
                  if (
                    ((j = (I = o || {}).countryCode),
                    (x = void 0 === j ? "in" : j),
                    (M = I.experimentTypes),
                    (T = void 0 === M ? [] : M),
                    Object(u.eb)(x),
                    Object(u.i)(o),
                    ne(),
                    !te)
                  ) {
                    e.next = 66;
                    break;
                  }
                  return Object(u.yb)(), e.abrupt("return");
                case 66:
                  if (
                    ((A =
                      null === (h = window.appInfo) || void 0 === h
                        ? void 0
                        : h.playDomain),
                    (_ =
                      null === (S = window.appInfo) || void 0 === S
                        ? void 0
                        : S.ads),
                    (C = s.b.isMobile()
                      ? null == _ || null === (k = _.mobile) || void 0 === k
                        ? void 0
                        : k.isPreRollEnabled
                      : null == _ || null === (E = _.desktop) || void 0 === E
                      ? void 0
                      : E.isPreRollEnabled),
                    !(T.indexOf("clickToPlay") > -1 && "GB" === x && A && C))
                  ) {
                    e.next = 80;
                    break;
                  }
                  if (
                    !(
                      window.performance &&
                      window.performance.getEntriesByType &&
                      window.performance.getEntriesByType("navigation").length
                    )
                  ) {
                    e.next = 78;
                    break;
                  }
                  if (
                    "reload" !==
                      window.performance.getEntriesByType("navigation")[0]
                        .type ||
                    !isAdShown
                  ) {
                    e.next = 76;
                    break;
                  }
                  return Object(u.yb)(), e.abrupt("return");
                case 76:
                case 78:
                  return Object(u.Bb)("c2p"), e.abrupt("return");
                case 80:
                  Object(u.yb)(), (e.next = 109);
                  break;
                case 83:
                  return (e.next = 85), ce(window.gameId, v, b);
                case 85:
                  if ((V = e.sent)) {
                    e.next = 88;
                    break;
                  }
                  return e.abrupt("return");
                case 88:
                  if (!te) {
                    e.next = 91;
                    break;
                  }
                  return Object(u.yb)(), e.abrupt("return");
                case 91:
                  if (
                    ((W = V.experimentTypes),
                    (z = void 0 === W ? [] : W),
                    (J = V.countryCode),
                    (Q =
                      null === (P = window.appInfo) || void 0 === P
                        ? void 0
                        : P.playDomain),
                    (Z =
                      null === (R = window.appInfo) || void 0 === R
                        ? void 0
                        : R.ads),
                    ($ = s.b.isMobile()
                      ? null == Z || null === (N = Z.mobile) || void 0 === N
                        ? void 0
                        : N.isPreRollEnabled
                      : null == Z || null === (U = Z.desktop) || void 0 === U
                      ? void 0
                      : U.isPreRollEnabled),
                    (ee = sessionStorage.getItem("adDisplayed")),
                    !(z.indexOf("clickToPlay") > -1 && "GB" === J && Q && $))
                  ) {
                    e.next = 108;
                    break;
                  }
                  if (
                    !(
                      window.performance &&
                      window.performance.getEntriesByType &&
                      window.performance.getEntriesByType("navigation").length
                    )
                  ) {
                    e.next = 106;
                    break;
                  }
                  if (
                    "reload" !==
                      window.performance.getEntriesByType("navigation")[0]
                        .type ||
                    !ee
                  ) {
                    e.next = 104;
                    break;
                  }
                  return Object(u.yb)(), e.abrupt("return");
                case 104:
                case 106:
                  return Object(u.Bb)("c2p"), e.abrupt("return");
                case 108:
                  Object(u.yb)();
                case 109:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })()();
  },
  56: function (e) {
    e.exports = JSON.parse(
      '[{"name":"customerSupport","action":"showSupportTool","iconClass":"icon-support","title":"helpAndSupport"},{"name":"controller","action":"toggleSidebar","iconClass":"gamepad icon-gc","check":"isWasmSupported","title":"gamepadTitle"},{"name":"mouseLock","action":"toggleMouseLock","iconClass":"icon-mouse-unlock","check":"mouseLockSupported","title":"lockCursor"},{"name":"videoSound","action":"toggleVideoSound","iconClass":"icon-mute","check":"mobile-hide","title":"unmute"},{"name":"fullscreen","action":"fullscreen","iconClass":"icon-fullscreen","title":"fullscreen"}]'
    );
  },
  6: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return m;
      });
    var o = n(10),
      i = n(36);
    window.InputMapperApi = window.InputMapperApi || {
      imapInitSuccess: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        s.logs.push("got success ".concat(t)),
          (f.initialized = !0),
          (s.currentState = "GOT_SUCCESS"),
          f.addEventListener(),
          Object(i.a)(o.c, f.config),
          f.updateDimensions();
      },
      enableRawMouseInput: function (e) {
        if (
          ((f.pointerLock = 1 === e), (f.isChangeRequestedByPrimitive = !0), e)
        ) {
          var t = document.getElementById(f.elementId);
          t && (t.requestPointerLock(), Object(i.a)(o.g, 1));
        } else
          "function" == typeof document.exitPointerLock &&
            (document.exitPointerLock(), Object(i.a)(o.g, 0));
        setTimeout(function () {
          (f.isChangeRequestedByPrimitive = !1),
            s.logs.push("Pointer lock, ".concat(f.pointerLock));
        }, 10);
      },
      imapInitFailure: function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        s.logs.push("imapInitFailure. ".concat(t)),
          (f.initialized = !1),
          f.clear(),
          Object(i.a)(o.b, !1);
      },
    };
    var r = n(32),
      a = n(3);
    function c(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    var s = {
        currentState: "NOT_INITIALIZED",
        overlayState: "NOT_INITIALIZED",
        logs: [],
      },
      d = {
        config: null,
        active: !1,
        pointerLock: !1,
        outOfFocus: !1,
        initialized: !1,
        isChangeRequestedByPrimitive: !1,
        elementId: "",
        inUse: function () {
          var e =
            void 0 !== Object(a.c)().features.disableImap &&
            Object(a.c)().features.disableImap;
          return this.initialized && this.active && !e;
        },
        clear: function () {
          (this.active = !1),
            (this.pointerLock = !1),
            (s.currentState = "TERMINATED"),
            s.logs.push("".concat(Date.now(), " - CLEAR")),
            Object(i.a)(o.d, {}),
            "function" == typeof document.exitPointerLock &&
              document.exitPointerLock(),
            document.querySelector(".overlay-bg") &&
              document.querySelector(".overlay-bg").remove(),
            document.removeEventListener("pointerlockchange", p, !1),
            document.removeEventListener("mozpointerlockchange", p, !1),
            document.removeEventListener("webkitpointerlockchange", p, !1),
            Object(r.c)(!1);
        },
        addEventListener: function () {
          document.addEventListener("pointerlockchange", p, !1),
            document.addEventListener("mozpointerlockchange", p, !1),
            document.addEventListener("webkitpointerlockchange", p, !1);
        },
        updateActive: function (e) {
          var t = this,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 300;
          s.logs.push("updating active  ".concat(this.active, ", ").concat(e)),
            e !== this.active &&
              (n
                ? setTimeout(function () {
                    s.logs.push(
                      "".concat(Date.now(), " - SET_ACTIVE_TIMEOUT_").concat(e)
                    ),
                      (t.active = e),
                      Object(i.a)(o.e, e);
                  }, n)
                : ((this.active = e),
                  s.logs.push(
                    "".concat(Date.now(), " - SET_ACTIVE_").concat(e)
                  ),
                  Object(i.a)(o.e, e)));
        },
        initialize: function (e, t, n, o) {
          var r = this;
          this.elementId = o;
          var a,
            d = window.Module.GetParserVersion() || 17;
          (s.currentState = "INITIALIZING"),
            s.logs.push("".concat(Date.now(), " - INIT_CALLED_").concat(e));
          try {
            ((a = regeneratorRuntime.mark(function o() {
              var a, c, l, u, p, m, f;
              return regeneratorRuntime.wrap(
                function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        if (r.config) {
                          o.next = 37;
                          break;
                        }
                        return (
                          (o.prev = 1),
                          s.logs.push("".concat(Date.now(), " - GETTING_CFG")),
                          (o.next = 5),
                          fetch(Object(i.b)(e, d))
                        );
                      case 5:
                        if (!(a = o.sent).ok) {
                          o.next = 28;
                          break;
                        }
                        return (o.next = 9), a.json();
                      case 9:
                        if (
                          ((l = o.sent),
                          (u = (u =
                            null == l ||
                            null === (c = l.cfg_file_url) ||
                            void 0 === c
                              ? void 0
                              : c.normal).replace("http://", "https://")),
                          s.logs.push("cfg file url  ".concat(u)),
                          !u)
                        ) {
                          o.next = 26;
                          break;
                        }
                        return (o.next = 16), fetch(u);
                      case 16:
                        if (!(p = o.sent).ok) {
                          o.next = 24;
                          break;
                        }
                        return (o.next = 20), p.json();
                      case 20:
                        (m = o.sent),
                          (r.config = Object(i.c)(e, m)),
                          (o.next = 26);
                        break;
                      case 24:
                        throw (
                          (s.logs.push("CFG api error ".concat(p.status)),
                          Error("Cannot find config file"))
                        );
                      case 26:
                        o.next = 30;
                        break;
                      case 28:
                        throw (
                          (s.logs.push("CFG api failed ".concat(a.status)),
                          Error("CFG api failed ".concat(e)))
                        );
                      case 30:
                        o.next = 37;
                        break;
                      case 32:
                        (o.prev = 32),
                          (o.t0 = o.catch(1)),
                          s.logs.push(
                            ""
                              .concat(Date.now(), " - CFG_API_FAILED ")
                              .concat(JSON.stringify(o.t0))
                          ),
                          (r.initialized = !1),
                          r.clear();
                      case 37:
                        if (r.config) {
                          (f = Object(i.d)(r.config)),
                            (r.config.ControlSchemes[f].Selected = !0);
                          try {
                            r.setDimensions(t, n),
                              s.logs.push(
                                "".concat(Date.now(), " - Calling ImapLibInit")
                              ),
                              s.logs.push(
                                "".concat(e, ", ").concat(t, ", ").concat(n)
                              ),
                              window.Module.ImapLibInit(
                                e,
                                t,
                                n,
                                JSON.stringify(r.config)
                              );
                          } catch (e) {
                            s.logs.push(
                              ""
                                .concat(
                                  Date.now(),
                                  " - ERROR when calling ImapLibInit "
                                )
                                .concat(JSON.stringify(e))
                            ),
                              "string" != typeof e.message
                                ? window.Module.GetExceptionMessage(e)
                                : s.logs.push(e),
                              (r.initialized = !1),
                              r.clear();
                          }
                        }
                      case 38:
                      case "end":
                        return o.stop();
                    }
                },
                o,
                null,
                [[1, 32]]
              );
            })),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (n, o) {
                var i = a.apply(e, t);
                function r(e) {
                  c(i, n, o, r, s, "next", e);
                }
                function s(e) {
                  c(i, n, o, r, s, "throw", e);
                }
                r(void 0);
              });
            })();
          } catch (e) {
            s.logs.push("".concat(Date.now(), " exp - ").concat(e)),
              (this.initialized = !1),
              this.clear();
          }
        },
        loadCfg: function (e) {
          (this.config = e), s.logs.push("".concat(Date.now(), " - load CFG"));
          try {
            window.Module.imapLoadCfg(JSON.stringify(e));
          } catch (e) {
            s.logs.push("cannot change cfg ".concat(e));
          }
        },
        setDimensions: function (e, t) {
          s.logs.push("setdimensions ".concat(e, " ").concat(t)),
            (this.height = t),
            (this.width = e);
        },
        updateDimensions: function () {
          if (this.inUse())
            try {
              window.Module.ImapHandleResize(0, 0, this.width, this.height);
            } catch (t) {
              var e = window.Module.GetExceptionMessage(t);
              s.logs.push(
                "inputmapper --\x3e error while updating input mapper on resize\n          w "
                  .concat(this.width, ", h ")
                  .concat(this.height, ", ")
                  .concat(e)
              );
            }
        },
        updateFocus: function () {
          if (d.active)
            try {
              window.Module.ImapOnWindowActivate(!0), (this.outOfFocus = !1);
            } catch (e) {
              s.logs.push("Cannot process updateFocus ".concat(e, " "));
            }
        },
        keyDown: function (e) {
          this.outOfFocus && this.updateFocus();
          try {
            window.Module.ImapHandleKey(e, 1);
          } catch (e) {
            s.logs.push("Cannot process keydown", e);
          }
        },
        keyUp: function (e) {
          try {
            window.Module.ImapHandleKey(e, 0);
          } catch (e) {
            s.logs.push("Cannot process keyup", e);
          }
        },
        mouseMove: function (e, t) {
          try {
            this.pointerLock
              ? window.Module.HandleRawMouse(o.k.MOUSE_MOVE, e, t, 0)
              : window.Module.ImapHandleMouseMove(o.k.MOUSE_MOVE, e, t, 0);
          } catch (e) {
            s.logs.push("Cannot process mouse move ".concat(e));
          }
        },
        mouseDown: function (e, t, n) {
          s.logs.push(
            "mouse down ".concat(o.h[e], ", ").concat(t, ", ").concat(n, ", 0")
          );
          try {
            this.pointerLock
              ? window.Module.HandleRawMouse(o.h[e], t, n, 0)
              : window.Module.ImapHandleMouseControls(o.h[e], t, n, 0);
          } catch (e) {
            s.logs.push("Cannot process mouseDown ".concat(e));
          }
        },
        mouseUp: function (e, t, n) {
          s.logs.push(
            "mouse up ".concat(o.i[e], ", ").concat(t, ", ").concat(n, ", 0")
          );
          try {
            this.pointerLock
              ? window.Module.HandleRawMouse(o.i[e], t, n, 0)
              : window.Module.ImapHandleMouseMove(o.i[e], t, n, 0);
          } catch (e) {
            s.logs.push("Cannot process mouseUp ".concat(e));
          }
        },
        mouseScroll: function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          try {
            d.pointerLock
              ? window.Module.HandleRawMouse(o.k.MOUSE_SCROLL, e, t, 0)
              : window.Module.ImapHandleMouseMove(o.k.MOUSE_SCROLL, e, t, n);
          } catch (e) {
            s.logs.push("Cannot process mouseScroll ".concat(e));
          }
        },
        exitPanMode: function () {
          s.logs.push("Handle exitPanMode");
          try {
            window.Module &&
              "function" == typeof window.Module.ExitPanMode &&
              window.Module.ExitPanMode();
          } catch (e) {
            s.logs.push("Cannot process exitPanMode ".concat(e));
          }
        },
        onWindowActivate: function (e) {
          s.logs.push("Handle onWindowActivate ".concat(e));
          try {
            window.Module &&
              "function" == typeof window.Module.ImapOnWindowActivate &&
              window.Module.ImapOnWindowActivate(e);
          } catch (t) {
            s.logs.push(
              "Cannot process onWindowActivate ".concat(e, ", ").concat(t)
            );
          }
        },
      };
    function l() {
      d.active && (d.exitPanMode(), d.onWindowActivate(!1));
    }
    function u() {
      d.active && (d.onWindowActivate(!0), d.exitPanMode());
    }
    function p() {
      d.isChangeRequestedByPrimitive || (l(), u());
    }
    var m = { onblur: l, onfocus: u },
      f = (t.c = d);
  },
  64: function (e, t, n) {
    "use strict";
    var o = n(162);
    function i(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            e &&
            (("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"]);
          if (null == n) return;
          var o,
            i,
            r = [],
            a = !0,
            c = !1;
          try {
            for (
              n = n.call(e);
              !(a = (o = n.next()).done) &&
              (r.push(o.value), !t || r.length !== t);
              a = !0
            );
          } catch (e) {
            (c = !0), (i = e);
          } finally {
            try {
              a || null == n.return || n.return();
            } finally {
              if (c) throw i;
            }
          }
          return r;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return r(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if (
            "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return r(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
      return o;
    }
    function a(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? a(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : a(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function s(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function d(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function l(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            d(r, o, i, a, c, "next", e);
          }
          function c(e) {
            d(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var u = {
      baseHost: "https://prod",
      url: new URL(window.location.href),
      utmParams: {},
      baseHostMapping: {
        qa: "https://qa1.testngg.net",
        staging: "https://stagingngg.net",
        engg: "https://engg1.testngg.net",
        production: "https://now.gg",
        sandbox: "https://sandbox-now.gg",
      },
      domain:
        "localhost" === window.location.hostname
          ? "localhost"
          : window.location.hostname,
      init: function (e) {
        var t = this;
        return l(
          regeneratorRuntime.mark(function n() {
            var i, r, a, s, d, l, u, m, f, w, v, g, b, y, h, S, O, k;
            return regeneratorRuntime.wrap(
              function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (i = e.userId),
                        (r = e.appSessionId),
                        (a = e.userType),
                        (s = e.utm_source),
                        (d = void 0 === s ? "NA" : s),
                        (l = e.utm_campaign),
                        (u = void 0 === l ? "NA" : l),
                        (m = e.utm_medium),
                        (f = void 0 === m ? "NA" : m),
                        (w = e.publisher),
                        (v = e.packageName),
                        (g = e.appId),
                        (b = new Date()),
                        (t.userId = i),
                        (t.appSessionId = r),
                        (t.userType = a),
                        (t.publisher = w),
                        (t.packageName = v),
                        (t.appId = g),
                        (t.pageReferer = document.referrer),
                        t.setBaseHost(),
                        b.setHours(b.getHours() + 24),
                        (y = t.getCookie("naId")),
                        (t.utm_medium = t.utm_medium
                          ? t.utm_medium
                          : t.url.searchParams.get("utm_medium")),
                        (t.utm_source = t.utm_source
                          ? t.utm_source
                          : t.url.searchParams.get("utm_source")),
                        (t.utm_campaign = t.utm_campaign
                          ? t.utm_campaign
                          : t.url.searchParams.get("utm_campaign")),
                        (t.utmParams = {
                          utm_medium: t.getCookie("utm_medium") || f,
                          utm_source: t.getCookie("utm_source") || d,
                          utm_campaign: t.getCookie("utm_campaign") || u,
                        }),
                        y ||
                          ((y = Object(o.a)()),
                          (document.cookie = "naId="
                            .concat(y, ";expires=")
                            .concat(b, ";domain=")
                            .concat(t.domain, ";path=/;secure"))),
                        (t.naId = y),
                        (h = t.getCookie("deviceId")) ||
                          ((h = Object(o.a)()),
                          (document.cookie = "deviceId="
                            .concat(h, ";domain=")
                            .concat(t.domain, ";path=/;secure"))),
                        (t.deviceId = h),
                        (S = c(
                          {
                            naId: y,
                            deviceId: h,
                            userType: a,
                            platform: "web",
                            eventTimestamp: Date.now(),
                            userId: i,
                            appSessionId: r,
                            appId: g,
                            packageName: v,
                            publisher: w,
                            pageReferer: t.pageReferer,
                          },
                          t.utmParams
                        )),
                        (O = p(S)),
                        (n.prev = 23),
                        (n.next = 26),
                        fetch("".concat(t.baseHost, "/track/events/v1/init"), {
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          method: "POST",
                          body: JSON.stringify(O),
                        })
                      );
                    case 26:
                      return (k = n.sent), n.abrupt("return", k);
                    case 30:
                      return (
                        (n.prev = 30),
                        (n.t0 = n.catch(23)),
                        n.abrupt("return", n.t0)
                      );
                    case 33:
                    case "end":
                      return n.stop();
                  }
              },
              n,
              null,
              [[23, 30]]
            );
          })
        )();
      },
      getCookie: function (e) {
        for (
          var t = "".concat(e, "="), n = document.cookie.split(";"), o = 0;
          o < n.length;
          o++
        ) {
          for (var i = n[o]; " " === i.charAt(0); ) i = i.substring(1);
          if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
        }
        return null;
      },
      setBaseHost: function () {
        var e = "production".replace(/[0-9]/g, "");
        this.baseHost = this.baseHostMapping[e] || this.baseHostMapping.engg;
      },
      getResolution: function () {
        return ""
          .concat(window.screen.width * window.devicePixelRatio, "x")
          .concat(window.screen.height * window.devicePixelRatio);
      },
      logEvent: function (e, t) {
        var n = this;
        return l(
          regeneratorRuntime.mark(function o() {
            var i, r, a;
            return regeneratorRuntime.wrap(
              function (o) {
                for (;;)
                  switch ((o.prev = o.next)) {
                    case 0:
                      return (
                        (i = c(
                          c(
                            {
                              userId: n.userId,
                              naId: n.naId,
                              deviceId: n.deviceId,
                              platform: "web",
                              appSessionId: t
                                ? t.user_uuid || t.sessionId
                                : n.appSessionId,
                              userType: n.userType,
                              eventTimestamp: Date.now(),
                              packageName: t ? t.package_name : n.packageName,
                              appId: n.appId,
                              publisher: n.publisher,
                              pageReferer: n.pageReferer,
                            },
                            n.utmParams
                          ),
                          {},
                          {
                            eventName: e,
                            env: "production",
                            eventPayload: c(
                              c({}, t),
                              {},
                              { screen_res: n.getResolution() }
                            ),
                          }
                        )),
                        (r = p(i)),
                        (o.prev = 2),
                        (o.next = 5),
                        fetch("".concat(n.baseHost, "/track/events/v1/event"), {
                          headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                          },
                          method: "POST",
                          body: JSON.stringify(r),
                        })
                      );
                    case 5:
                      return (a = o.sent), o.abrupt("return", a);
                    case 9:
                      return (
                        (o.prev = 9),
                        (o.t0 = o.catch(2)),
                        o.abrupt("return", o.t0)
                      );
                    case 12:
                    case "end":
                      return o.stop();
                  }
              },
              o,
              null,
              [[2, 9]]
            );
          })
        )();
      },
    };
    function p(e) {
      return Object.entries(e).reduce(function (e, t) {
        var n = i(t, 2),
          o = n[0],
          r = n[1];
        return void 0 !== r && (e[o] = r), e;
      }, {});
    }
    t.a = u;
  },
  65: function (e, t, n) {
    "use strict";
    var o = n(7),
      i = n(5),
      r = !1,
      a = "",
      c = "imeText";
    function s(e) {
      var t = e.str,
        n = void 0 === t ? "" : t,
        i = e.enter,
        c = void 0 === i ? 0 : i,
        s = e.del,
        d = void 0 === s ? 0 : s,
        l = new ArrayBuffer(4 + 2 * a.length),
        u = new Uint8Array(l);
      (u[0] = 103), (u[1] = d), (u[2] = c), (u[3] = Number(r));
      for (var p = 4, m = 0; m < n.length; m += 1) {
        var f = n[m].charCodeAt(0),
          w = new Uint16Array([f]),
          v = new Uint8Array(w.buffer, w.byteOffset, w.byteLength);
        (u[p] = v[0]), (u[++p] = v[1]), p++;
      }
      Object(o.m)(l);
    }
    var d = {
      init: function () {
        document.addEventListener("compositionstart", this.startComposing),
          document.addEventListener("compositionupdate", this.update),
          document.addEventListener("compositionend", this.endComposing);
        var e = document.getElementById(c);
        e && e.addEventListener("blur", this.textBlur), this.updatePos();
      },
      updatePos: function () {
        try {
          var e = document.getElementById(c);
          e !== document.activeElement && e.focus(), (a = "");
          var t = window.innerHeight,
            n = window.innerWidth;
          i.l.x - 20 < 0
            ? (e.style.left = "0px")
            : n - i.l.x < 146
            ? (e.style.left = "".concat(i.l.x - 146, "px"))
            : (e.style.left = "".concat(i.l.x - 20, "px")),
            i.l.y - 20 < 0
              ? (e.style.top = "0px")
              : t - i.l.y < 23
              ? (e.style.top = "".concat(i.l.y - 23, "px"))
              : (e.style.top = "".concat(i.l.y - 20, "px")),
            (e.value = " ");
        } catch (e) {}
      },
      textBlur: function (e) {
        setTimeout(function () {
          var t,
            n = document.getElementById("modal"),
            o =
              null == n || null === (t = n.children) || void 0 === t
                ? void 0
                : t.length;
          window.keyboardStatus && !o && e.target.focus();
        }, 100);
      },
      justEnded: !1,
      startComposing: function (e) {
        (r = !0), s({ del: Date.now() - i.k.status <= 3 ? 1 : 0 });
      },
      update: function (e) {
        (a = e.data), s({ str: e.data });
      },
      endComposing: function (e) {
        (r = !1), (this.justEnded = !0), s({ str: e.data });
      },
      clear: function () {
        try {
          var e = document.getElementById(c);
          e.blur(),
            e.removeEventListener("blur", this.textBlur),
            document.removeEventListener(
              "compositionstart",
              this.startComposing
            ),
            document.removeEventListener("compositionupdate", this.update),
            document.removeEventListener("compositionend", this.endComposing);
        } catch (e) {}
      },
      destroy: function () {
        this.clear();
        try {
          document.getElementById(c).remove();
        } catch (e) {}
      },
    };
    t.a = d;
  },
  7: function (e, t, n) {
    "use strict";
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        (o.enumerable = o.enumerable || !1),
          (o.configurable = !0),
          "value" in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o);
      }
    }
    n.d(t, "l", function () {
      return fe;
    }),
      n.d(t, "m", function () {
        return be;
      }),
      n.d(t, "i", function () {
        return Se;
      }),
      n.d(t, "n", function () {
        return Oe;
      }),
      n.d(t, "f", function () {
        return ke;
      }),
      n.d(t, "o", function () {
        return Ie;
      }),
      n.d(t, "b", function () {
        return Pe;
      }),
      n.d(t, "a", function () {
        return De;
      }),
      n.d(t, "c", function () {
        return He;
      }),
      n.d(t, "d", function () {
        return ze;
      }),
      n.d(t, "g", function () {
        return Xe;
      }),
      n.d(t, "h", function () {
        return ct;
      }),
      n.d(t, "k", function () {
        return lt;
      }),
      n.d(t, "j", function () {
        return ft;
      }),
      n.d(t, "e", function () {
        return wt;
      });
    var i,
      r,
      a = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e);
        }
        var t, n, i;
        return (
          (t = e),
          (i = [
            {
              key: "paste",
              value: function (e) {
                if (window.keyboardStatus) {
                  e.preventDefault();
                  var t = (e.clipboardData || window.clipboardData).getData(
                    "text"
                  );
                  (t = t.slice(0, 1024)), be("clipboard::".concat(t));
                  var n = new ArrayBuffer(4),
                    o = new Uint8Array(n);
                  (o[0] = 101), (o[1] = 1), (o[2] = 86), (o[3] = 4), be(n);
                }
              },
            },
            {
              key: "sync",
              value: function (e) {
                navigator.clipboard.writeText(e);
              },
            },
          ]),
          (n = null) && o(t.prototype, n),
          i && o(t, i),
          e
        );
      })(),
      c = n(104),
      s = n(3),
      d = n(56),
      l = n(72),
      u = n(2),
      p = n(10),
      m = n(5),
      f = n(0),
      w = n(17),
      v = n(81),
      g = n(6),
      b = n(210),
      y = n(28),
      h = n(161),
      S = n(32),
      O = n(105),
      k = n(20),
      E = (n(486), !1),
      I = function (e) {
        var t = document.createElement("div");
        return (
          (t.innerHTML = "<span class="
            .concat(e ? "help" : "spinner", ">\n    ")
            .concat(e ? "&#33" : "", "\n  </span>\n    <p data-str-id=")
            .concat(
              e ? "downloadError" : "download",
              ' id="downloadStatus"></p>\n  </div>'
            )),
          (t.id = "d-banner"),
          (t.className = "d-banner"),
          t
        );
      },
      j = n(236),
      x = n.n(j),
      M = n(64),
      T = n(37),
      L = n(50),
      A = n(65),
      _ = n(27),
      C = n(44),
      P = n(238),
      D = n.n(P),
      R = n(239),
      B = n.n(R),
      N = n(240),
      q = n.n(N),
      G = n(70);
    function H(e) {
      return (H =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function U(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, o);
      }
      return n;
    }
    function V(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? U(Object(n), !0).forEach(function (t) {
              W(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : U(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function W(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function F(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function K(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            F(r, o, i, a, c, "next", e);
          }
          function c(e) {
            F(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    window.networkStatus = O.a;
    var z,
      Y,
      X,
      J,
      Q,
      Z,
      $,
      ee,
      te,
      ne,
      oe = null,
      ie = null,
      re = null,
      ae = !1,
      ce = !1,
      se = !1,
      de = null,
      le = 0,
      ue = !1,
      pe = null,
      me = null,
      fe = Object(f.u)(),
      we = {
        receivedBuffer: [],
        receivedSize: 0,
        name: "",
        totalSize: 0,
        initiated: !1,
      };
    function ve() {
      (we.receivedBuffer = []),
        (we.receivedSize = 0),
        (we.name = ""),
        (we.totalSize = 0),
        (we.initiated = !1),
        setTimeout(
          function () {
            var e = document.getElementById("d-banner");
            e && e.remove();
          },
          E ? 3e3 : 1e3
        );
    }
    var ge = { iceServers: [{ urls: "stun:sturn.now.gg:3478?transport=udp" }] },
      be = function (e) {
        if (i && "open" === i.readyState)
          try {
            i.send(e);
          } catch (e) {}
      },
      ye = function (e, t) {
        var n,
          o = Object(s.o)(),
          i = Object(s.c)(),
          r = i.nowUserId,
          a = i.nowInstanceId,
          c = {
            error_code: e.errorCode || null,
            fb_user_id: r || null,
            ac_instance_id: a || null,
            sessionId: o || null,
            error_type: t,
            error_data: {
              event: e,
              eventStr: JSON.stringify(e),
              errorURL: null == e ? void 0 : e.url,
              errorMessage: e.message || null,
              errorText: null == e ? void 0 : e.errorText,
              errorDetail:
                null == e || null === (n = e.error) || void 0 === n
                  ? void 0
                  : n.errorDetail,
              errorCode: null == e ? void 0 : e.errorCode,
            },
            apk_pkg_name: re || null,
            device_type: "browser",
            adTrackingId: window.adTrackingId,
          };
        M.a.logEvent("ac_err", c), oe.logEvent("ac_err", c);
      },
      he = function (e, t, n) {
        var o = {};
        for (var i in e) o[i] = e[i];
        o.errorCode !== n && Object(f.c)(o, t, !0);
      },
      Se = function () {
        var e = document.getElementById("remoteVideo");
        e &&
          !e.muted &&
          (be("audio::mute"),
          (e.muted = !0),
          localStorage.setItem("audioMuted", !0)),
          (window.isMuted = !0),
          Object(f.M)();
      },
      Oe = x()(function (e, t) {
        t && y.a.create(t), be(e);
      }, w.c),
      ke = function () {
        z && z.close(), ie && clearInterval(ie);
      },
      Ee = function (e) {
        return e.preventDefault();
      },
      Ie = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = document.getElementById("remoteVideo");
        ((t && t.muted) || e) &&
          (be("audio::unmute"),
          (t.muted = !1),
          (window.isMuted = !1),
          localStorage.setItem("audioMuted", !1)),
          Object(f.M)();
      },
      je = !1,
      xe = function e() {
        ae ||
          h.a.video({ inline: !0 }).then(function (t) {
            if (t.result) {
              ae = !0;
              try {
                var n = u.b.isMobile()
                  ? "false"
                  : localStorage.getItem("audioMuted");
                if (!n || "false" === n) Object(s.n)() > 0 && Ie();
              } catch (e) {}
            } else
              je ||
                setTimeout(function () {
                  (je = !0), e();
                }, 500);
          });
      },
      Me = function () {
        !(function () {
          if (!u.b.isMobile()) return;
          if (!Object(s.c)().isNewUser) return;
          if ("visible" === document.visibilityState) {
            var e,
              t = null === (e = z) || void 0 === e ? void 0 : e.connectionState;
            ("failed" !== t && "disconnected" !== t) ||
              Object(C.d)()
                .then(function (e) {
                  var t;
                  (null != e &&
                    null !== (t = e.payload) &&
                    void 0 !== t &&
                    t.nowInstanceId) ||
                    Object(f.wb)();
                })
                .catch(function (e) {});
          }
        })();
        var e = document.querySelector(".bgVideoLoader");
        if ("visible" === document.visibilityState) {
          Object(f.ab)("tab_inactive", { value: "active" }),
            Object(f.m)() &&
              window.appReady &&
              !ue &&
              (Object(T.a)(),
              e &&
                u.b.isMobile() &&
                (window.addEventListener("orientationchange", f.Q),
                document.addEventListener("visibilitychange", f.R)),
              (ue = !0));
          var t = Object(f.D)(),
            n = Object(f.C)();
          if (t) {
            Object(f.pb)(!1);
            var o = Object(f.w)();
            "loadMidRollAd" === o
              ? Object(_.d)()
              : "loadWrapperAgain" === o
              ? Object(_.g)()
              : "mobileMidRoll" === o
              ? Object(_.f)()
              : "loadMobileWrapperAgain" === o && Object(_.h)();
          }
          if (n) Object(f.ob)(!1), Object(f.s)() && Object(L.e)(!0);
        } else Object(f.ab)("tab_inactive", { value: "inactive" });
        u.b.isMobile() ||
          ("visible" === document.visibilityState &&
            document.getElementById("remoteVideo") &&
            (document.getElementById("remoteVideo").style.display =
              "-webkit-box"));
        var i = Object(u.a)().os,
          r = u.b.isMobile() ? "false" : localStorage.getItem("audioMuted");
        if ("Android" === i)
          "visible" === document.visibilityState
            ? "false" === r && ae && Ie()
            : Se();
        else if ("iOS" === i) {
          var a = document.getElementById("remoteVideo");
          if ("visible" === document.visibilityState)
            (null == a ? void 0 : a.paused) &&
              (h.a.video({ inline: !0 }).then(function (e) {}),
              Object(m.B)(a, 0, 0));
          else
            Se(),
              a &&
                a.addEventListener(
                  "touchend",
                  function () {
                    a.play(), "false" === r && ae && Ie();
                  },
                  { once: !0 }
                );
        }
      };
    function Te(e) {
      e.preventDefault();
    }
    var Le = (function () {
        var e = K(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (X && J && Q) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 3), z.getStats();
                  case 3:
                    (Y = e.sent).forEach(function (e) {
                      "inbound-rtp" === e.type &&
                        "video" === e.kind &&
                        ((X = e.id), (Z = Y.get(X))),
                        "inbound-rtp" === e.type &&
                          "audio" === e.kind &&
                          (J = e.id),
                        "candidate-pair" === e.type &&
                          "succeeded" === e.state &&
                          (Q = e.id);
                    }),
                      (e.next = 0);
                    break;
                  case 7:
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      Ae = (function () {
        var e = K(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((t = {}), "connected" !== z.connectionState)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), Le();
                  case 4:
                    return e.abrupt(
                      "return",
                      (ie = setInterval(
                        K(
                          regeneratorRuntime.mark(function e() {
                            var n, o, i, r, a;
                            return regeneratorRuntime.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), z.getStats();
                                  case 2:
                                    if (((Y = e.sent), X))
                                      try {
                                        ($ = Y.get(X)),
                                          (t.fps = $.framesPerSecond),
                                          (t.videoBytes =
                                            $.bytesReceived / 1048576),
                                          (t.bitrate =
                                            (8 *
                                              ((null === (n = $) || void 0 === n
                                                ? void 0
                                                : n.bytesReceived) -
                                                (null === (o = Z) ||
                                                void 0 === o
                                                  ? void 0
                                                  : o.bytesReceived))) /
                                            (((null === (i = $) || void 0 === i
                                              ? void 0
                                              : i.timestamp) -
                                              (null === (r = Z) || void 0 === r
                                                ? void 0
                                                : r.timestamp)) /
                                              1e3) /
                                            1048576),
                                          (Z = $);
                                      } catch (e) {}
                                    if (
                                      (J &&
                                        (ee = Y.get(J)) &&
                                        ee.bytesReceived &&
                                        (t.audioBytes =
                                          ee.bytesReceived / 1048576),
                                      !Q)
                                    ) {
                                      e.next = 15;
                                      break;
                                    }
                                    if (void 0 !== (te = Y.get(Q))) {
                                      e.next = 12;
                                      break;
                                    }
                                    return (Q = void 0), (e.next = 11), Le();
                                  case 11:
                                    te = Y.get(Q);
                                  case 12:
                                    (t.ping = te.currentRoundTripTime),
                                      (a =
                                        Y.get(te.localCandidateId) &&
                                        Y.get(te.localCandidateId)
                                          .candidateType),
                                      (t.connType =
                                        "relay" === a ? "TURN" : "STUN");
                                  case 15:
                                    Object(f.ab)("ac_view_game_stats", t);
                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        ),
                        3e4
                      ))
                    );
                  case 5:
                    return (
                      "disconnected" === z.connectionState &&
                        null !== ie &&
                        (clearInterval(ie), (ie = null)),
                      "connected" !== z.connectionState &&
                        ((X = void 0), (J = void 0), (Q = void 0)),
                      e.abrupt("return", null)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    var _e,
      Ce,
      Pe = function () {
        return new Promise(function (e, t) {
          var n = new c.WebRTCStats({ getStatsInterval: 1e3 });
          try {
            n.addPeer({ pc: z, peerId: "2" }),
              n.on("stats", function t(o) {
                var i = (function (e) {
                  var t,
                    n,
                    o = e.data,
                    i = {},
                    r =
                      (null == o || null === (t = o.audio) || void 0 === t
                        ? void 0
                        : t.inbound[0]) || !1,
                    a =
                      (null == o || null === (n = o.video) || void 0 === n
                        ? void 0
                        : n.inbound[0]) || !1;
                  null != o &&
                    o.connection &&
                    null != o &&
                    o.connection.currentRoundTripTime &&
                    (i.currentRoundTripTime = "".concat(
                      parseFloat(
                        1e3 * o.connection.currentRoundTripTime
                      ).toFixed(2),
                      "ms"
                    ));
                  var c = parseFloat(
                    ((a.jitterBufferDelay - ut) /
                      (a.jitterBufferEmittedCount - pt)) *
                      1e3
                  ).toFixed(2);
                  if (
                    ("NaN" !== c &&
                      (i["Jitter / AvgJitterBufferDelay"] = ""
                        .concat(a.jitter, " / ")
                        .concat(c)),
                    (ut = a.jitterBufferDelay),
                    (pt = a.jitterBufferEmittedCount),
                    (i.browser = Object(u.d)().description),
                    a)
                  ) {
                    (i.video = {}),
                      a.frameHeight &&
                        a.frameWidth &&
                        (i.video.resolution = ""
                          .concat(a.frameWidth ? a.frameWidth : "0", " x ")
                          .concat(a.frameHeight ? a.frameHeight : "0")),
                      a.framesPerSecond >= 0 &&
                        (i.video.framesPerSecond = a.framesPerSecond
                          ? a.framesPerSecond
                          : "0"),
                      a.mimeType &&
                        (i.video.codec = ""
                          .concat(a.mimeType || "NA", " - ")
                          .concat(dt(a.clockRate || "0"))),
                      (i.video.bitrate = st(a ? a.bitrate : 0));
                    var s = a.packetsLost || "0";
                    i.video.packets = ""
                      .concat(s, " lost out of ")
                      .concat(a.packetsReceived || "0");
                  }
                  return (
                    r &&
                      ((i.audio = {}),
                      (i.audio.bitrate = st(r ? r.bitrate : 0)),
                      r.mimeType &&
                        (i.audio.codec = ""
                          .concat(r.mimeType || "NA", " - ")
                          .concat(dt(r.clockRate || "0"))),
                      (i.audio.packets = ""
                        .concat(r.packetsLost || "0", " lost out of ")
                        .concat(r.packetsReceived || "0"))),
                    (i.buildVersion = "1.50.0"),
                    i
                  );
                })(o);
                n.removePeer("2"), n.removeListener("stats", t), e(i);
              });
          } catch (e) {
            t(e);
          }
        });
      },
      De = function (e) {
        (window.sessionEnded = !0),
          (function (e) {
            e && be("userstop::USER_STOPPED"),
              document.body.classList.remove("g-initialized");
            var t = document.getElementById("remoteVideo");
            Object(m.a)(),
              g.c.clear(),
              (window.isGamePlayStopped = !0),
              (ce = !1),
              t &&
                (u.b.isMobile() ||
                  (t.removeEventListener("mousemove", m.p),
                  t.removeEventListener("mousedown", m.o),
                  t.removeEventListener("mouseup", m.q)),
                window.removeEventListener("resize", m.u),
                window.removeEventListener("paste", a.paste),
                document.removeEventListener("keydown", m.i),
                document.removeEventListener("keyup", m.j),
                t.removeEventListener("touchstart", m.A),
                t.removeEventListener("touchend", m.y),
                t.removeEventListener("touchmove", m.z),
                document.removeEventListener("gesturestart", Ee),
                document.removeEventListener("visibilitychange", Me),
                t.removeEventListener("wheel", m.h),
                window.removeEventListener("devicemotion", m.f),
                window.removeEventListener("blur", m.d),
                window.removeEventListener("focus", m.e),
                document.removeEventListener("contextmenu", Te),
                (t.srcObject = null)),
              Object(f.wb)();
          })(e),
          window.removeEventListener("resize", L.handleAdType),
          ke(),
          window.clearMidRollInterval && window.clearMidRollInterval(),
          L.a && Object(L.a)();
        try {
          Object(s.a)("isNewUser", !1);
        } catch (e) {}
      },
      Re = {
        audio: !1,
        video: { width: { exact: 320 }, height: { exact: 240 } },
      },
      Be = {
        audio: !1,
        video: { width: { exact: 640 }, height: { exact: 480 } },
      },
      Ne = (function () {
        var e = K(
          regeneratorRuntime.mark(function e(t) {
            var n,
              o = arguments;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = o.length > 1 && void 0 !== o[1] && o[1]),
                        u.b.isMobile() &&
                          ("0" === t
                            ? ((Re.video.facingMode = { exact: "environment" }),
                              (Be.video.facingMode = { exact: "environment" }),
                              (Re.video.width.exact = 240),
                              (Re.video.height.exact = 320))
                            : ((Re.video.facingMode = { exact: "user" }),
                              (Be.video.facingMode = { exact: "user" }),
                              (Re.video.width.exact = 240),
                              (Re.video.height.exact = 320))),
                        (e.prev = 3),
                        (e.next = 6),
                        navigator.mediaDevices.getUserMedia(Re)
                      );
                    case 6:
                      (_e = e.sent), (e.next = 22);
                      break;
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.t0 = e.catch(3)),
                        (e.prev = 12),
                        (e.next = 15),
                        navigator.mediaDevices.getUserMedia(Be)
                      );
                    case 15:
                      (_e = e.sent), (e.next = 22);
                      break;
                    case 18:
                      return (
                        (e.prev = 18),
                        (e.t1 = e.catch(12)),
                        e.abrupt("return", !1)
                      );
                    case 22:
                      return (
                        n && Ce.replaceTrack(_e.getTracks()[0]),
                        e.abrupt("return", !0)
                      );
                    case 24:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [3, 9],
                [12, 18],
              ]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    function qe(e) {}
    var Ge = (function () {
        var e = K(
          regeneratorRuntime.mark(function e() {
            var t,
              n,
              o,
              i,
              r,
              a,
              c,
              s = arguments;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (t = s.length > 0 && void 0 !== s[0] ? s[0] : 0),
                        (n = s.length > 1 ? s[1] : void 0),
                        (e.prev = 2),
                        (e.next = 5),
                        z.setRemoteDescription(new RTCSessionDescription(n))
                      );
                    case 5:
                      return (e.next = 7), Ne(t);
                    case 7:
                      return (
                        (o = e.sent),
                        _e &&
                          ((i = _e.getTracks()[0]), (Ce = z.addTrack(i, _e))),
                        (e.next = 11),
                        z.createAnswer()
                      );
                    case 11:
                      return (
                        (r = e.sent),
                        (a = new RegExp("useinbandfec=1", "g")),
                        (c = r
                          ? r.sdp.replace(
                              a,
                              "sprop-stereo=1;stereo=1;maxplaybackrate=48000;useinbandfec=1"
                            )
                          : null),
                        be(
                          "answer_camera::"
                            .concat(c)
                            .concat(o ? "" : "::camera_denied")
                        ),
                        (z.onnegotiationneeded = qe),
                        (e.next = 18),
                        z.setLocalDescription(r)
                      );
                    case 18:
                      e.next = 23;
                      break;
                    case 20:
                      (e.prev = 20), (e.t0 = e.catch(2));
                    case 23:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 20]]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      He = {},
      Ue = function () {
        He.type &&
          ("desktop" === He.type
            ? window.keyboardStatus
              ? A.a.init()
              : A.a.clear()
            : A.a.destroy());
      },
      Ve = (function () {
        var e = K(
          regeneratorRuntime.mark(function e(t) {
            var n, o, i, r, c, d, l, p, w, b, y, h, S, O, k, E, I, j, x, M;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = t.msgType),
                      (e.t0 = n),
                      (e.next =
                        "appReady" === e.t0
                          ? 6
                          : "screenorientation" === e.t0
                          ? 37
                          : "appcrash" === e.t0
                          ? 44
                          : "trackEvent" === e.t0
                          ? 61
                          : "clipboard" === e.t0
                          ? 63
                          : "topActivity" === e.t0
                          ? 65
                          : "openUrl" === e.t0
                          ? 76
                          : "keyboardStatus" === e.t0
                          ? 78
                          : "sessionComplete" === e.t0
                          ? 82
                          : "fileTransfer" === e.t0
                          ? 87
                          : "sendLocation" === e.t0
                          ? 91
                          : "offer_camera" === e.t0
                          ? 93
                          : "camera" === e.t0
                          ? 96
                          : "fileUploadResult" === e.t0
                          ? 100
                          : "showFileChooser" === e.t0
                          ? 103
                          : "showdisconnectimer" === e.t0
                          ? 107
                          : 111);
                    break;
                  case 6:
                    if (
                      (kt(),
                      Object(f.O)(),
                      Object(f.K)(),
                      (o = Object(s.c)()).packageName === t.packageName)
                    ) {
                      e.next = 12;
                      break;
                    }
                    return e.abrupt("return");
                  case 12:
                    return (
                      (He.type = t.deviceType),
                      Ue(),
                      ("smartphone" !== t.deviceType &&
                        "phablet" !== t.deviceType) ||
                        Object(m.x)(2, 1),
                      (window.appReady = !0),
                      Object(f.Z)(),
                      Object(v.a)(),
                      (!window.playInBrowserClicked &&
                        u.b.isMobile() &&
                        window.isSocialMediaFlow) ||
                        (Object(f.l)(),
                        window.showAds
                          ? u.b.isMobile() &&
                            setTimeout(function () {
                              return Object(m.b)();
                            }, 100)
                          : (window.dispatchEvent(
                              new CustomEvent("SET_PORTRAIT_MODE", {
                                detail: window.isPortraitMode,
                              })
                            ),
                            Object(f.ab)("impression_event", {
                              impression_type: "gameplay_screen_view",
                              screen_type: "gameplay",
                            }),
                            u.b.isMobile() &&
                              (setTimeout(function () {
                                return Object(m.b)();
                              }, 100),
                              (i = document.getElementById("mobileMenu")) &&
                                (i.style.display = "block")))),
                      Object(f.m)() &&
                        (Object(f.ab)("ac_view_game_launch"),
                        Object(T.a)(),
                        document.querySelector(".bgVideoLoader") &&
                          u.b.isMobile() &&
                          (window.removeEventListener("orientationchange", f.Q),
                          document.removeEventListener(
                            "visibilitychange",
                            f.R
                          )),
                        Object(f.db)()),
                      Object(f.x)() &&
                        ((c =
                          null === (r = window.appInfo) || void 0 === r
                            ? void 0
                            : r.playDomain),
                        !window.imaError && c && Object(f.X)()),
                      document.querySelector(".progress-bar .progress") &&
                        (document.querySelector(
                          ".progress-bar .progress"
                        ).style.width = "100%"),
                      (window.screenType = "gameplay"),
                      setTimeout(function () {
                        var e = Object(f.y)();
                        if (Object(f.A)() && !u.b.isMobile()) {
                          if (e)
                            return void setTimeout(function () {
                              window.dispatchEvent(
                                new CustomEvent("PWA_ACTIVITY", { detail: !0 })
                              );
                            }, 6e4);
                          window.dispatchEvent(
                            new CustomEvent("PWA_ACTIVITY", { detail: !0 })
                          );
                        }
                      }, 6e5),
                      (d = o.experimentTypes),
                      (l = (void 0 === d ? [] : d).indexOf("cpiAds") > -1),
                      (p = Object(u.a)()),
                      "Android" === p.os &&
                        u.b.isMobile() &&
                        l &&
                        setTimeout(function () {
                          window.dispatchEvent(
                            new CustomEvent("CPI_ADS", { detail: !0 })
                          );
                        }, 18e4),
                      e.abrupt("break", 112)
                    );
                  case 37:
                    if ("com.bluestacks.appmart" !== t.packageName) {
                      e.next = 39;
                      break;
                    }
                    return e.abrupt("return");
                  case 39:
                    try {
                      (w = parseInt(t.rotation, 10) || 0),
                        (window.orientationValue = w),
                        (window.isPortraitMode = !(1 === w || 3 === w)),
                        (window.isSocialMediaFlow &&
                          !window.playInBrowserClicked) ||
                          window.dispatchEvent(
                            new CustomEvent("SET_PORTRAIT_MODE", {
                              detail: window.isPortraitMode,
                            })
                          );
                    } catch (e) {}
                    return (
                      setTimeout(function () {
                        return Object(m.b)();
                      }, 100),
                      e.abrupt("break", 112)
                    );
                  case 44:
                    if (
                      "com.ldsanguo.shark" !== t.packageName &&
                      "com.harbortouch.echopro" !== t.packageName &&
                      "com.wuxia.novastar" !== t.packageName
                    ) {
                      e.next = 46;
                      break;
                    }
                    return e.abrupt("break", 112);
                  case 46:
                    if (Object(s.c)().packageName === t.packageName) {
                      e.next = 49;
                      break;
                    }
                    return e.abrupt("return");
                  case 49:
                    if (!((b = parseInt(Object(s.i)(), 10)) < 3)) {
                      e.next = 57;
                      break;
                    }
                    return (
                      Object(s.C)(b + 1),
                      Object(f.zb)("error"),
                      g.c.clear(),
                      e.abrupt("break", 112)
                    );
                  case 57:
                    return (
                      Object(s.p)(),
                      De(!0),
                      Object(f.T)(),
                      e.abrupt("break", 112)
                    );
                  case 61:
                    return (
                      t.roblox_placeId &&
                        ((fe = t),
                        Object(s.y)(t),
                        Object(f.ab)("roblox_place_id", {
                          value: t.roblox_placeId,
                        })),
                      e.abrupt("break", 112)
                    );
                  case 63:
                    return a.sync(t.data), e.abrupt("break", 112);
                  case 65:
                    return (
                      (h = "connected" === z.iceConnectionState),
                      (S = Object(s.c)()),
                      (se = "com.bluestacks.appmart" === t.packageName),
                      (O = h && S.packageName === t.packageName),
                      g.a.logs.push(
                        "topactivity: "
                          .concat(S.packageName, " ")
                          .concat(t.packageName)
                      ),
                      g.c.updateActive(O, 0),
                      (g.c.isCurrentGameActive = O),
                      (L = O),
                      S.id,
                      (A = t),
                      (_ = void 0),
                      (C = void 0),
                      (P = void 0),
                      (_ = Object(s.c)().features),
                      (C = (void 0 === _ ? {} : _).isNativeMouseEnabled),
                      (P = void 0 === C ? [] : C),
                      !u.b.isMobile() &&
                        (P || (null != P && P.length)) &&
                        (L &&
                        A &&
                        ((P.length && P.includes(A.activityName)) ||
                          ("boolean" == typeof P && P))
                          ? Object(m.r)().activate()
                          : Object(m.r)().deActivate(),
                        Object(f.P)()),
                      null != S &&
                        null !== (y = S.features) &&
                        void 0 !== y &&
                        y.isBackButtonEnabled &&
                        window.dispatchEvent(
                          new CustomEvent("TOP_ACTIVITY_CHANGED", {
                            detail: h && S.packageName !== t.packageName,
                          })
                        ),
                      e.abrupt("break", 112)
                    );
                  case 76:
                    return (
                      u.b.isSafari()
                        ? Object(f.zb)("url", { url: t.url })
                        : window.open(t.url, "_blank", "noopener"),
                      e.abrupt("break", 112)
                    );
                  case 78:
                    return (
                      (window.keyboardStatus = "true" === t.enabled),
                      Ue(),
                      g.c.initialized &&
                        ((k = Object(s.c)()),
                        g.a.logs.push(
                          "keyboardStatus: "
                            .concat(k.packageName, " ")
                            .concat(t.packageName)
                        ),
                        g.c.updateActive(
                          "true" !== t.enabled &&
                            k.packageName === t.packageName,
                          0
                        )),
                      e.abrupt("break", 112)
                    );
                  case 82:
                    if (
                      !(
                        window.showdisconnectimer &&
                        Date.now() - window.showdisconnectimer > 55
                      )
                    ) {
                      e.next = 85;
                      break;
                    }
                    return Ot(), e.abrupt("return");
                  case 85:
                    return We(), e.abrupt("break", 112);
                  case 87:
                    return (
                      (we.initiated = !0),
                      (we.name = t.fileName),
                      (we.totalSize = t.fileSize),
                      e.abrupt("break", 112)
                    );
                  case 91:
                    return (
                      navigator.geolocation.getCurrentPosition(
                        function (e) {
                          var t = e.coords;
                          be(
                            "location::"
                              .concat(t.latitude, "::")
                              .concat(t.longitude)
                          );
                        },
                        function (e) {},
                        { enableHighAccuracy: !0, timeout: 5e3, maximumAge: 0 }
                      ),
                      e.abrupt("break", 112)
                    );
                  case 93:
                    return (
                      (E = t.sdp_camera),
                      (I = t.facing),
                      Ge(I, { type: "offer", sdp: E }),
                      e.abrupt("break", 112)
                    );
                  case 96:
                    return (
                      "on" === t.cmd && Ne(t.facing, !0),
                      "off" === t.cmd &&
                        z &&
                        _e &&
                        (_e.getTracks().forEach(function (e) {
                          return e.stop();
                        }),
                        Ce.replaceTrack(null)),
                      e.abrupt("break", 112)
                    );
                  case 100:
                    return (me = null), bt(), e.abrupt("break", 112);
                  case 103:
                    if (
                      ((j = document.getElementById("uploadFile")),
                      t.type && (j.accept = t.type),
                      j)
                    )
                      try {
                        j.focus(), j.click();
                      } catch (e) {
                        be("fileupload::failed");
                      }
                    return e.abrupt("break", 112);
                  case 107:
                    sessionStorage.clear(),
                      (window.showdisconnectimer = Date.now());
                    try {
                      document
                        .getElementById("spotInstanceToast")
                        .classList.add("slideDown"),
                        document
                          .getElementById("spotInstanceToast")
                          .classList.remove("slideUp"),
                        (x = document.querySelector(".timer")),
                        (M = 60),
                        (ne = setInterval(function () {
                          (x.textContent =
                            60 === M
                              ? "01:00"
                              : "00:" + M.toString().padStart(2, 0)),
                            --M <= 0 &&
                              (clearInterval(ne),
                              document
                                .getElementById("spotInstanceToast")
                                .classList.remove("slideDown"),
                              document
                                .getElementById("spotInstanceToast")
                                .classList.add("slideUp"),
                              document
                                .querySelector(".waitingLoader")
                                .classList.remove("hide"));
                        }, 1e3));
                    } catch (e) {}
                    return e.abrupt("break", 112);
                  case 111:
                    return e.abrupt("break", 112);
                  case 112:
                  case "end":
                    return e.stop();
                }
              var L, A, _, C, P;
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
    function We() {
      (window.timer = 0), Object(f.Z)(), De();
    }
    var Fe = function () {
        var e = Object(s.n)();
        Object(f.rb)(e), xe(), window.isQtWeb && Ie();
      },
      Ke = function (e) {
        Object(f.c)(e, "dataChannelError", !0), ye(e, "dataChannelError");
      };
    window.handleMobileIconClick = function (e) {
      if ("fullscreen" === e) {
        var t = V(
          V({}, Object(u.a)()),
          {},
          {
            click_type: window.fullScreenFlag
              ? "exit_fullscreen"
              : "enter_fullscreen",
            screen_type: window.appReady
              ? "gameplay"
              : window.sessionEnded
              ? "endingscreen"
              : "loadin",
          }
        );
        try {
          M.a.logEvent("click_event", t), oe.logEvent("click_event", t);
        } catch (e) {}
      }
      window.handleIconClick(e);
    };
    var ze = function () {
        for (var e = "", t = 0; t < d.length; t++) {
          var n = d[t],
            o = n.name,
            i = n.action,
            r = n.check,
            a = n.iconClass;
          e += '<div\n            id="'
            .concat(o, '"\n            class="iconContainer ')
            .concat(Object(f.g)(r), " ")
            .concat(o, '"\n            onClick=handleMobileIconClick("')
            .concat(i, '")\n        >\n            <icon class="icon pointer ')
            .concat(o, " ")
            .concat(a, '"/>\n        </div>');
        }
        return (e +=
          '<div\n            id="popularGamesIcon"\n            name="showPopularGames"\n            class="iconContainer showPopularGame '
            .concat(
              Object(s.g)() ? "" : "hide",
              '"\n            onClick="window.dispatchEvent(new CustomEvent(\'SHOW_POPULAR_GAME_SCREEN\'))"\n            title="'
            )
            .concat(
              window.localizedData.popularGames,
              '"\n        >\n        <div id="popularIconM" class="icon pointer">\n          '
            )
            .concat(
              Object(s.r)() ? "" : '<span class="circle"/>',
              "\n        </div>\n        </div>"
            ));
      },
      Ye = !1,
      Xe = function () {
        return Ye;
      },
      Je = function () {
        return K(
          regeneratorRuntime.mark(function e() {
            var t, n, o, r, c, d, l, w, v, y, h, S, O;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    u.b.isSafari() &&
                      ((t = document.getElementById("remoteVideo")).pause(),
                      t
                        .play()
                        .then(function (e) {})
                        .catch(function (e) {})),
                      i &&
                        ((n = Object(s.c)()),
                        "open" === i.readyState &&
                          ((o = document.getElementById("remoteVideo")),
                          (window.InputMapperApi.sendKeyToAndroid = m.v),
                          (window.InputMapperApi.sendTouchPoints = function (
                            e,
                            t
                          ) {
                            if (g.c.inUse() && i && e)
                              try {
                                Object(m.s)(e);
                              } catch (t) {
                                Object(f.c)(
                                  e,
                                  "Cannot parse IMAP Touchpoints",
                                  !0
                                );
                              }
                          }),
                          o &&
                            (!1 === window.isMuted && Ie(!0),
                            Object(f.T)(),
                            (document.querySelector(
                              ".game-background"
                            ).style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(77, 77, 77, 0.7) 100%), url('".concat(
                              u.b.isMobile()
                                ? null == n ||
                                  null === (r = n.media) ||
                                  void 0 === r ||
                                  null === (c = r.mobile) ||
                                  void 0 === c
                                  ? void 0
                                  : c.banner
                                : null == n ||
                                  null === (d = n.media) ||
                                  void 0 === d ||
                                  null === (l = d.desktop) ||
                                  void 0 === l
                                ? void 0
                                : l.banner,
                              "') no-repeat"
                            )),
                            (document.querySelector(".app").style.display =
                              "block"),
                            (document.querySelector(
                              ".gamePlayScreen"
                            ).style.display = "block"),
                            u.b.isMobile()
                              ? (b.a.init(),
                                document
                                  .querySelectorAll(".game-icon-logo")
                                  .forEach(function (e) {
                                    var t, o;
                                    e.src =
                                      null == n ||
                                      null === (t = n.media) ||
                                      void 0 === t ||
                                      null === (o = t.desktop) ||
                                      void 0 === o
                                        ? void 0
                                        : o.icon;
                                  }),
                                (document.querySelector(
                                  ".button-components .toolbarMenu"
                                ).innerHTML = ze()),
                                (w = document.getElementById("popularIconM")),
                                (v = Object(G.loadAnimation)({
                                  container: w,
                                  renderer: "svg",
                                  loop: !1,
                                  autoplay: !0,
                                  path: "".concat("/play", "/trendingUp.json"),
                                })).addEventListener("complete", function () {
                                  setTimeout(function () {
                                    v.goToAndPlay(0);
                                  }, 3e3);
                                }))
                              : Object(f.P)(),
                            Object(m.u)({}),
                            o.removeAttribute("controls"),
                            (y = n.features),
                            (h = (void 0 === y ? {} : y)
                              .isNativeKeyboardEnabled),
                            (Ye = h),
                            u.b.isMobile() || Ye
                              ? g.c.clear()
                              : ("com.innersloth.spacemafia" ===
                                  (S = n.packageName) &&
                                  (S = "com.innersloth.spacemafia_23021"),
                                window.IMAP_FILES_LOADED.then(function () {
                                  if (
                                    ((g.a.currentState = "IMAP_FILES_LOADED"),
                                    g.a.logs.push(
                                      ""
                                        .concat(Date.now(), " Calling init ")
                                        .concat(window.isWasmSupported)
                                    ),
                                    window.isWasmSupported)
                                  ) {
                                    var e = Object(m.c)(),
                                      t = e.width,
                                      n = e.height;
                                    g.c.initialize(S, t, n, "remoteVideo");
                                  } else g.c.clear();
                                }).catch(function () {
                                  (g.c.initialized = !1), g.c.clear();
                                })),
                            ce
                              ? Object(m.a)()
                              : ((window.isMuted = !0),
                                window.addEventListener("resize", m.u),
                                window.addEventListener(p.f, function (e) {
                                  Object(f.ab)("game_pad_play", { value: 1 });
                                }),
                                window.addEventListener(p.g, function (e) {
                                  Object(f.ab)("shooting_mode", e.detail);
                                }),
                                window.addEventListener("paste", a.paste),
                                u.b.isMobile() ||
                                  (o.addEventListener("mousemove", m.p),
                                  o.addEventListener("mousedown", m.o),
                                  o.addEventListener("mouseup", m.q),
                                  o.addEventListener("mouseleave", m.m),
                                  o.addEventListener("mouseup", Fe, {
                                    once: !0,
                                  }),
                                  window.addEventListener("blur", m.d),
                                  window.addEventListener("focus", m.e),
                                  document.addEventListener("contextmenu", Te)),
                                window.isSocialMediaFlow ||
                                  (window.addEventListener(
                                    "SET_PORTRAIT_MODE",
                                    m.g
                                  ),
                                  window.dispatchEvent(
                                    new CustomEvent("SET_PORTRAIT_MODE", {
                                      detail: window.isPortraitMode,
                                    })
                                  )),
                                o.addEventListener("touchstart", m.A),
                                o.addEventListener("touchend", m.y),
                                o.addEventListener("touchcancel", m.y),
                                o.addEventListener("touchmove", m.z),
                                o.addEventListener("touchend", Fe, {
                                  once: !0,
                                }),
                                o.addEventListener("wheel", m.h, !1),
                                document.addEventListener("keydown", m.i),
                                document.addEventListener("keyup", m.j),
                                document.addEventListener("gesturestart", Ee),
                                document.addEventListener(
                                  "visibilitychange",
                                  Me
                                ),
                                (ce = !0),
                                n.isAccelerometerSupported &&
                                  u.b.isMobile() &&
                                  vt()),
                            o.focus(),
                            window.showAds ||
                              Object(f.ab)("ac_view_game_launch"),
                            window.isReconnect &&
                              window.appReady &&
                              u.b.isMobile() &&
                              (O = document.getElementById("mobileMenu")) &&
                              setTimeout(function () {
                                O.style.display = "block";
                              }, 1e3))));
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
      };
    var Qe = function (e) {
        return function () {
          switch (e) {
            case "open":
              !(function () {
                E = !1;
                var e = document.createDocumentFragment();
                e.appendChild(I()),
                  Object(k.b)(e),
                  document
                    .getElementsByClassName("game-play")[0]
                    .appendChild(e);
              })();
              break;
            case "close":
              ve(), r.close(), (r = null);
              break;
            case "error":
              ve(),
                (function () {
                  E = !0;
                  var e = document.getElementById("d-banner");
                  e &&
                    ((e.innerHTML = ""), e.appendChild(I(!0)), Object(k.b)(e));
                })(),
                r.close(),
                (r = null);
          }
        };
      },
      Ze = function (e) {
        var t = e.data;
        if (
          (we.receivedBuffer.push(t),
          (we.receivedSize += t.byteLength),
          we.receivedSize >= we.totalSize)
        ) {
          var n = new Blob(we.receivedBuffer),
            o = document.createElement("a");
          (o.href = URL.createObjectURL(n)),
            (o.download = we.name),
            o.click(),
            URL.revokeObjectURL(o.href),
            ve();
        }
      },
      $e = function (e) {
        var t = {};
        e &&
          e.data &&
          (e.data.split(":$:").forEach(function (e) {
            e.startsWith("sdp_camera")
              ? (t.sdp_camera = e.split("sdp_camera=")[1])
              : Object.assign(
                  t,
                  (function (e) {
                    var t = {};
                    return (
                      e.split("\n").forEach(function (n) {
                        if (n) {
                          var o = n.split("=")[0];
                          try {
                            t[o] = n.substring(
                              n.indexOf("".concat(o, "=")) + o.length + 1
                            );
                          } catch (t) {
                            Object(f.c)(t, e, !0);
                          }
                        }
                      }),
                      t
                    );
                  })(e)
                );
          }),
          t && t.msgType && Ve(t));
      },
      et = function (e) {
        return function () {
          switch (e) {
            case "close":
              ht(), pe.close(), (pe = null);
              break;
            case "error":
              yt(), pe.close(), (pe = null);
          }
        };
      },
      tt = (function () {
        var e = K(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 4), z.addIceCandidate(t);
                    case 4:
                      e.next = 11;
                      break;
                    case 6:
                      throw (
                        ((e.prev = 6),
                        (e.t0 = e.catch(0)),
                        he(e.t0, "Error in adding ice candidates"),
                        ye(e.t0, "addingIceCandidateError"),
                        e.t0)
                      );
                    case 11:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 6]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      nt = (function () {
        var e = K(
          regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        z.setRemoteDescription(
                          new RTCSessionDescription({ type: "offer", sdp: t })
                        )
                      );
                    case 3:
                      e.next = 10;
                      break;
                    case 5:
                      throw (
                        ((e.prev = 5),
                        (e.t0 = e.catch(0)),
                        he(e.t0, "Error in setting remote description:offer"),
                        ye(e.t0, "settingRemoteDescriptionError"),
                        e.t0)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 5]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      ot = (function () {
        var e = K(
          regeneratorRuntime.mark(function e() {
            var t, n, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), z.createAnswer();
                    case 3:
                      return (
                        (t = e.sent),
                        (n = new RegExp("useinbandfec=1", "g")),
                        (o = t
                          ? t.sdp.replace(
                              n,
                              "sprop-stereo=1;stereo=1;maxplaybackrate=48000;useinbandfec=1"
                            )
                          : null),
                        (e.next = 8),
                        Object(C.f)(o)
                      );
                    case 8:
                      e.next = 15;
                      break;
                    case 10:
                      throw (
                        ((e.prev = 10),
                        (e.t0 = e.catch(0)),
                        he(e.t0, "Error in creating answer"),
                        ye(e.t0, "createAnswerError"),
                        e.t0)
                      );
                    case 15:
                      return (
                        (e.prev = 15), (e.next = 18), z.setLocalDescription(t)
                      );
                    case 18:
                      e.next = 25;
                      break;
                    case 20:
                      throw (
                        ((e.prev = 20),
                        (e.t1 = e.catch(15)),
                        he(e.t1, "Error in setting local description:answer"),
                        ye(e.t1, "settingLocalDescriptionError"),
                        e.t1)
                      );
                    case 25:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [
                [0, 10],
                [15, 20],
              ]
            );
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    function it() {
      for (var e = 262144; me && me.byteLength; ) {
        if (pe.bufferedAmount > pe.bufferedAmountLowThreshold)
          return void (pe.onbufferedamountlow = function () {
            (pe.onbufferedamountlow = null), it();
          });
        var t = me.slice(0, e);
        (me = me.slice(e, me.byteLength)), pe.send(t);
      }
    }
    var rt,
      at = (function () {
        var e = K(
          regeneratorRuntime.mark(function e() {
            var t, n;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), Object(l.a)();
                  case 2:
                    (oe = e.sent),
                      (t = document.getElementById("remoteVideo")),
                      (n = Object(s.c)()),
                      n ? n.countryCode : null,
                      ((z = new RTCPeerConnection(ge)).ondatachannel =
                        function (e) {
                          if ("fileUpload" === e.channel.label)
                            return (
                              ((pe = e.channel).binaryType = "arraybuffer"),
                              (pe.onopen = it),
                              (pe.onclose = et("close")),
                              void (pe.onerror = et("error"))
                            );
                          "fileDownload" === e.channel.label
                            ? (((r = e.channel).onmessage = Ze),
                              (r.onopen = Qe("open")),
                              (r.onclose = Qe("close")),
                              (r.onerror = Qe("error")))
                            : (((i = e.channel).onmessage = $e),
                              (i.onopen = Je()),
                              (i.onclose = Je()),
                              (i.onerror = Ke));
                        }),
                      Date.now(),
                      (z.onicecandidateerror = function (e) {
                        he(e, "Ice candidate error", 701),
                          ye(e, "iceCandidateError");
                      }),
                      Date.now(),
                      z.addEventListener(
                        "icegatheringstatechange",
                        function () {}
                      ),
                      z.addEventListener("connectionstatechange", function (e) {
                        if (
                          "failed" === z.connectionState ||
                          "disconnected" === z.connectionState
                        ) {
                          if (
                            (yt(),
                            window.showdisconnectimer &&
                              Date.now() - window.showdisconnectimer > 55)
                          )
                            return void Ot();
                          (window.avoidScreenShot = !0), O.a.unsubscribe();
                        }
                        "failed" === z.connectionState &&
                          he(e, "Webrtc connection failed"),
                          "connected" === z.connectionState &&
                            (O.a.unsubscribe(), O.a.subscribe(z)),
                          Ae();
                      }),
                      z.addEventListener(
                        "signalingstatechange",
                        function () {}
                      ),
                      z.addEventListener(
                        "iceconnectionstatechange ",
                        function () {}
                      ),
                      z.addEventListener("negotiationneeded", function (e) {
                        he(e, "negotiationneeded to share camera stream!");
                      }),
                      z.addEventListener("icecandidate", function (e) {
                        var t = e.candidate;
                        t &&
                          (("object" === H(t) && "host" !== t.type) ||
                            ("string" == typeof t && t.length));
                      }),
                      z.addEventListener("track", function (e) {
                        1 !== le
                          ? ((le = 1),
                            t &&
                              ((de = new MediaStream()),
                              (t.srcObject = de),
                              (t.disablePictureInPicture = !0),
                              t.addEventListener("loadeddata", function () {
                                t.readyState >= 3 &&
                                  (document.body.classList.add("g-initialized"),
                                  (window.videoLoaded = !0),
                                  Object(S.d)());
                              }),
                              e.streams[0].getTracks().forEach(function (e) {
                                de.addTrack(e);
                              })))
                          : (le = 0);
                      });
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      ct = (function () {
        var e = K(
          regeneratorRuntime.mark(function e(t) {
            var n, o, i;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        "connected" !==
                        (null === (n = z) || void 0 === n
                          ? void 0
                          : n.connectionState)
                      ) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return");
                    case 3:
                      if (
                        (Object(s.i)() || Object(s.p)(),
                        (o = t.offerSdp),
                        (i = t.iceCandidates),
                        o && i && 0 !== i.length)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        Object(f.zb)("many_requests", "somethingWrong"),
                        e.abrupt("return")
                      );
                    case 9:
                      return (
                        (re = null == t ? void 0 : t.pkg), (e.next = 12), at()
                      );
                    case 12:
                      return (e.prev = 12), (e.next = 15), nt(o);
                    case 15:
                      return (e.next = 17), tt(i[0]);
                    case 17:
                      return (e.next = 19), ot();
                    case 19:
                      e.next = 26;
                      break;
                    case 21:
                      return (
                        (e.prev = 21),
                        (e.t0 = e.catch(12)),
                        Object(f.zb)("many_requests", "somethingWrong"),
                        e.abrupt("return")
                      );
                    case 26:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[12, 21]]
            );
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })(),
      st = function (e) {
        var t = parseInt(e, 10);
        return t && t > 0
          ? "".concat(parseFloat(t / 1e3).toFixed(2), " kbps")
          : "0 kbps";
      },
      dt = function (e) {
        var t = parseInt(e, 10);
        return t && t > 0 ? "".concat(parseInt(t / 1e3, 10), " kHz") : "0 kHz";
      },
      lt = function () {
        var e = document.getElementById("nerdCon");
        e.innerText = z
          ? z.connectionState
          : void 0 === z
          ? "initiating"
          : "failed";
        var t = z && "connected" === z.connectionState ? "green" : "red";
        "red" === t ? e.classList.remove("green") : e.classList.remove("red"),
          e.classList.add(t);
      },
      ut = 0,
      pt = 0,
      mt = function (e) {
        var t,
          n,
          o = e.data;
        lt();
        var i =
            (null == o || null === (t = o.audio) || void 0 === t
              ? void 0
              : t.inbound[0]) || !1,
          r =
            (null == o || null === (n = o.video) || void 0 === n
              ? void 0
              : n.inbound[0]) || !1;
        null != o &&
          o.connection &&
          null != o &&
          o.connection.currentRoundTripTime &&
          (document.getElementById("nerdRTT").innerText = "".concat(
            parseFloat(1e3 * o.connection.currentRoundTripTime).toFixed(2),
            "ms"
          ));
        var a = parseFloat(
          ((r.jitterBufferDelay - ut) / (r.jitterBufferEmittedCount - pt)) * 1e3
        ).toFixed(2);
        if (
          ("NaN" !== a
            ? (document.getElementById("nerdJitterAvg").innerText = ""
                .concat(r.jitter, " / ")
                .concat(a))
            : (document.getElementById("nerdJitter").style.display = "none"),
          (ut = r.jitterBufferDelay),
          (pt = r.jitterBufferEmittedCount),
          (document.getElementById("nerdSep").style.opacity = r || i ? 1 : 0),
          (document.getElementById("browser").innerText = Object(
            u.d
          )().description),
          r)
        ) {
          r.frameHeight && r.frameWidth
            ? ((document.getElementById("vidStatus").style.display =
                "table-row"),
              (document.getElementById("vidStat").innerText = ""
                .concat(r.frameWidth ? r.frameWidth : "0", " x ")
                .concat(r.frameHeight ? r.frameHeight : "0")))
            : (document.getElementById("vidStat").innerText = "-"),
            r.framesPerSecond >= 0
              ? ((document.getElementById("vidFrames").style.display =
                  "table-row"),
                (document.getElementById("vidFps").innerText = r.framesPerSecond
                  ? r.framesPerSecond
                  : "0"))
              : (document.getElementById("vidFps").innerText = "-"),
            r.mimeType
              ? (document.getElementById("vidCD").innerText = ""
                  .concat(r.mimeType || "NA", " - ")
                  .concat(dt(r.clockRate || "0")))
              : (document.getElementById("vidCD").innerText = "NA"),
            (document.getElementById("videoRTS").style.display = "block"),
            (document.getElementById("vidBR").innerText = st(
              r ? r.bitrate : 0
            ));
          var c = r.packetsLost || "0";
          document.getElementById("vidLS").innerText = ""
            .concat(c, " lost out of ")
            .concat(r.packetsReceived || "0");
        } else
          (document.getElementById("vidStatus").style.display = "none"),
            (document.getElementById("videoRTS").style.display = "none"),
            (document.getElementById("vidStat").innerText = ""),
            (document.getElementById("vidFrames").style.display = "none");
        i
          ? ((document.getElementById("audioRTS").style.display = "block"),
            (document.getElementById("audBR").innerText = st(
              i ? i.bitrate : 0
            )),
            i.mimeType
              ? (document.getElementById("audCD").innerText = ""
                  .concat(i.mimeType || "NA", " - ")
                  .concat(dt(i.clockRate || "0")))
              : (document.getElementById("audCD").innerText = "NA"),
            (document.getElementById("audLS").innerText = ""
              .concat(i.packetsLost || "0", " lost out of ")
              .concat(i.packetsReceived || "0")))
          : (document.getElementById("audioRTS").style.display = "none"),
          (document.getElementById("buildVersionVal").textContent = "1.50.0");
      },
      ft = function (e) {
        if (((ut = 0), (pt = 0), e)) {
          lt(), rt || (rt = new c.WebRTCStats({ getStatsInterval: 1e3 }));
          try {
            rt.addPeer({ pc: z, peerId: "1" }), rt.on("stats", mt);
          } catch (e) {}
        } else rt && (rt.removePeer("1"), rt.removeListener("stats", mt));
      },
      wt = function () {
        be("backtogame".concat(se ? "::force" : ""));
      };
    function vt() {
      u.b.isiOS()
        ? document.addEventListener(
            "mouseup",
            function () {
              window.DeviceMotionEvent &&
                "function" ==
                  typeof window.DeviceMotionEvent.requestPermission &&
                DeviceMotionEvent.requestPermission().then(function (e) {
                  "granted" === e &&
                    window.addEventListener("devicemotion", m.f);
                });
            },
            { once: !0 }
          )
        : window.addEventListener("devicemotion", m.f);
    }
    function gt() {
      St(!0);
      var e = document.getElementById("fileUploadToast");
      e && (e.classList.add("slideDown"), e.classList.remove("slideUp"));
      var t = document.getElementById("fileUploadIcon");
      t && ((t.src = D.a), t.classList.add("spin"));
      var n = document.querySelector("#fileUploadToast .toastMessage");
      n && (n.textContent = window.localizedData.uploadingFile);
    }
    function bt() {
      ht();
      var e = document.getElementById("fileUploadIcon");
      e && ((e.src = q.a), e.classList.remove("spin"));
      var t = document.querySelector("#fileUploadToast .toastMessage");
      t && (t.textContent = window.localizedData.uploadedSuccessfully);
    }
    function yt() {
      pe && (pe.close(), (pe = null)), ht();
      var e = document.getElementById("fileUploadIcon");
      e && ((e.src = B.a), e.classList.remove("spin"));
      var t = document.querySelector("#fileUploadToast .toastMessage");
      t && (t.textContent = window.localizedData.uploadFailed);
    }
    function ht() {
      !(function () {
        for (
          var e = document.getElementsByName("uploadFile"), t = 0;
          t < e.length;
          t++
        )
          e[t].value = null;
      })(),
        St(!1);
      var e = document.getElementById("fileUploadToast");
      e &&
        setTimeout(function () {
          e.classList.add("slideUp"), e.classList.remove("slideDown");
        }, 3e3);
    }
    function St() {
      for (
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = document.getElementsByName("uploadFile"),
          n = 0;
        n < t.length;
        n++
      )
        t[n].disabled = e;
    }
    function Ot() {
      Object(f.zb)("spot_instances"), clearInterval(ne);
    }
    function kt() {
      if (!window.isHJScriptLoaded && "5349" === window.gameId) {
        window.isHJScriptLoaded = !0;
        var e,
          t,
          n,
          o,
          i = Object(s.c)();
        "android" === u.b.getOS() &&
          "US" === i.countryCode &&
          ((e = window),
          (t = document),
          (e.hj =
            e.hj ||
            function () {
              (e.hj.q = e.hj.q || []).push(arguments);
            }),
          (e._hjSettings = { hjid: 848438, hjsv: 6 }),
          (n = t.getElementsByTagName("head")[0]),
          ((o = t.createElement("script")).async = 1),
          (o.src =
            "https://static.hotjar.com/c/hotjar-" +
            e._hjSettings.hjid +
            ".js?sv=" +
            e._hjSettings.hjsv),
          n.appendChild(o),
          window.hj("identify", i.nowUserId));
      }
    }
    (window.uploadFile = (function () {
      var e = K(
        regeneratorRuntime.mark(function e(t) {
          var n, o, i;
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((o = t.target.files).length) {
                    e.next = 4;
                    break;
                  }
                  return e.abrupt("return");
                case 4:
                  if (
                    "connected" ===
                    (null === (n = z) || void 0 === n
                      ? void 0
                      : n.connectionState)
                  ) {
                    e.next = 8;
                    break;
                  }
                  return gt(), yt(), e.abrupt("return");
                case 8:
                  return (i = o[0]), (e.next = 12), i.arrayBuffer();
                case 12:
                  (me = e.sent),
                    be(
                      "fileupload::".concat(i.name, "::").concat(me.byteLength)
                    ),
                    gt();
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })()),
      window.addEventListener("unload", function () {
        pe && (pe.close(), (pe = null));
      }),
      (window.fileUploadClick = function () {
        var e = document.getElementById("uploadFile");
        e.addEventListener("focus", function t() {
          e.removeEventListener("focus", t),
            (e && e.value) || be("fileupload::failed");
        });
      });
  },
  71: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    });
    var o = function () {
        var e = "/play";
        return e;
      },
      i = {
        WEBSITE_HOME: "".concat(
          window.location.host.match(/localhost/i)
            ? "https://stagingngg.net"
            : window.location.origin
        ),
      };
    t.a = i;
  },
  72: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var o = n(160);
    n(519);
    function i(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function r(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, r) {
          var a = e.apply(t, n);
          function c(e) {
            i(a, o, r, c, s, "next", e);
          }
          function s(e) {
            i(a, o, r, c, s, "throw", e);
          }
          c(void 0);
        });
      };
    }
    o.a.initializeApp({
      apiKey: "AIzaSyA-U86wuV6oKNJSAv28MuhkxLDcShdnwsM",
      authDomain: "accounts.now.gg",
      projectId: "prod-now-gg",
      storageBucket: "prod-now-gg.appspot.com",
      messagingSenderId: "543291291905",
      appId: "1:543291291905:web:436a5c44f503e7ff2a0300",
      measurementId: "G-3VNQ9KRKV2",
    });
    var a = null;
    function c() {
      return s.apply(this, arguments);
    }
    function s() {
      return (s = r(
        regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (a) {
                    e.next = 4;
                    break;
                  }
                  return (e.next = 3), o.a.analytics();
                case 3:
                  a = e.sent;
                case 4:
                  return e.abrupt("return", a);
                case 5:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
  },
  73: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return T;
    }),
      n.d(t, "c", function () {
        return L;
      }),
      n.d(t, "b", function () {
        return G;
      });
    var o = n(10),
      i = n(0),
      r = n(32),
      a = n(11),
      c = n(74),
      s = n(6),
      d = n(241),
      l = n.n(d),
      u = n(20),
      p = n(2),
      m = n(3),
      f = n(56);
    window.closeWidgetClick = function () {
      window.sidebar &&
        window.sidebar.widgetClick &&
        window.sidebar.widgetClick("closeWidget");
    };
    var w = function () {
        return Object(i.G)(f, "gameplay", {
          id: "js-fs-widget",
          className: "fs-widget",
          avoidIcon: !0,
          attrs: '"',
          extra:
            '\n        <div\n            class="iconContainer"\n            title="'
              .concat(
                window.localizedData.closeWidget,
                '"\n        >\n            <icon id="closeWidget" class="icon pointer icon-close-round" onclick="window.closeWidgetClick()"/>\n        </div>\n        <div\n            class="iconContainer"\n            title="'
              )
              .concat(
                window.localizedData.drag,
                '"\n        >\n            <icon class="icon pointer icon-grip"/>\n        </div>'
              ),
        });
      },
      v = function (e) {
        var t = e.Strings;
        Object.keys(t).length > 0 &&
          Object.keys(t).forEach(function (e) {
            e.startsWith(window.language) &&
              Object.keys(t[e]).forEach(function (n) {
                window.localizedData[n] = t[e][n];
              });
          });
      },
      g = function (e) {
        var t = e.getBoundingClientRect();
        t.x + t.width > window.innerWidth &&
          (e.style.left = "".concat(window.innerWidth - t.width, "px"));
      },
      b = function (e) {
        var t,
          n,
          o = 0,
          r = 0,
          a = 0,
          c = 0,
          s = 0,
          d = 0;
        e.onmousedown = function (t) {
          if (
            t.target &&
            ("myRange" === t.target.id ||
              t.target.classList.contains("volume-slider"))
          )
            return;
          (t = t || window.event),
            (l = !1),
            t.preventDefault(),
            (a = t.clientX),
            (c = t.clientY),
            (document.onmouseup = p);
          var n = e.getBoundingClientRect();
          return (s = n.left), (d = n.top), (document.onmousemove = u), !1;
        };
        var l = !1;
        function u(t) {
          (l = !0),
            (t = t || window.event).preventDefault(),
            (o = a - t.clientX),
            (r = c - t.clientY),
            (a = t.clientX),
            (c = t.clientY);
          var n = document.getElementById("js-fs-widget"),
            i = e.offsetLeft - o,
            s = e.offsetTop - r;
          i > 0 &&
            n.offsetWidth + i < window.innerWidth &&
            (e.style.left = "".concat(i, "px")),
            s > 0 &&
              n.offsetHeight + s < window.innerHeight &&
              (e.style.top = "".concat(s, "px"));
        }
        function p() {
          (window.sidebar.widgetState = l ? "drag" : "click"),
            (document.onmouseup = null),
            (document.onmousemove = null);
          var o = e.getBoundingClientRect();
          (t = o.left), (n = o.top);
          var r = document.getElementById("js-fs-widget"),
            a = +r.style.left.replace("px", ""),
            c = +r.style.top.replace("px", "");
          0 <= a &&
            a <= innerWidth &&
            0 <= c &&
            c <= innerHeight &&
            Object(m.w)({ x: a, y: c });
          try {
            if (s !== t && d !== n) {
              var u = document.getElementById("js-fs-widget");
              Object(i.ab)("top_bar_moved", {
                value: u.classList.contains("collapse")
                  ? "collapsed_moved"
                  : "expanded_moved",
                start_position_x: Number((s / window.innerWidth) * 100).toFixed(
                  2
                ),
                start_position_y: Number(
                  (d / window.innerHeight) * 100
                ).toFixed(2),
                end_position_x: Number((t / window.innerWidth) * 100).toFixed(
                  2
                ),
                end_position_y: Number((n / window.innerHeight) * 100).toFixed(
                  2
                ),
              });
            }
          } catch (e) {}
        }
      },
      y = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = {};
        if (e) {
          e.GameControls.forEach(function (e) {
            n[e.GuidanceCategory]
              ? n[e.GuidanceCategory].push(e)
              : (n[e.GuidanceCategory] = [e]);
          });
          var o = Object.keys(n)
            .map(function (e) {
              return '<ul class="control-list">\n        <li class="control-category" data-str-id="'
                .concat(e, '">')
                .concat(e, "</li>\n        ")
                .concat(
                  n[e]
                    .map(function (e) {
                      switch (e.Type) {
                        case "FreeLook":
                          return e.KeyDown ||
                            e.KeyRight ||
                            e.KeyUp ||
                            e.KeyLeft ||
                            t
                            ? ""
                                .concat(
                                  e.Guidance.Key && e["Key".concat(t)]
                                    ? '<li data-str-id="'
                                        .concat(
                                          e.Guidance.Key,
                                          '">\n                      <span>'
                                        )
                                        .concat(
                                          e.Guidance.Key,
                                          "</span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["Key".concat(t)]),
                                          "</span>\n                    </li>"
                                        )
                                    : "",
                                  "\n                    "
                                )
                                .concat(
                                  e.Guidance.KeyDown
                                    ? '<li>\n                      <span data-str-id="'
                                        .concat(e.Guidance.KeyDown, '">')
                                        .concat(
                                          e.Guidance.KeyDown,
                                          "</span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyDown".concat(t)]),
                                          "</span>\n                    </li>"
                                        )
                                    : "",
                                  "\n                    "
                                )
                                .concat(
                                  e.Guidance.KeyRight
                                    ? '<li>\n                      <span data-str-id="'
                                        .concat(e.Guidance.KeyRight, '">')
                                        .concat(
                                          e.Guidance.KeyRight,
                                          "</span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyRight".concat(t)]),
                                          "</span>\n                    </li>"
                                        )
                                    : "",
                                  "\n                    "
                                )
                                .concat(
                                  e.Guidance.KeyUp
                                    ? '<li>\n                      <span data-str-id="'
                                        .concat(e.Guidance.KeyUp, '">')
                                        .concat(
                                          e.Guidance.KeyUp,
                                          "</span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyUp".concat(t)]),
                                          "</span>\n                    </li>"
                                        )
                                    : "",
                                  "\n                    "
                                )
                                .concat(
                                  e.Guidance.KeyLeft
                                    ? '<li>\n                      <span data-str-id="'
                                        .concat(e.Guidance.KeyLeft, '">')
                                        .concat(
                                          e.Guidance.KeyLeft,
                                          "</span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyLeft".concat(t)]),
                                          "</span>\n                    </li>"
                                        )
                                    : "",
                                  "\n                "
                                )
                            : "";
                        case "Pan":
                          return e.KeyAction || e.KeyStartStop || t
                            ? ""
                                .concat(
                                  e.Guidance.KeyAction &&
                                    e["KeyAction".concat(t)]
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.KeyAction,
                                          '">\n                      '
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyAction".concat(t)]),
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          t
                                            ? e["KeyAction".concat(t)]
                                            : "MouseLButton",
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  !t && e["KeyLookAround".concat(t)]
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.KeyLookAround,
                                          '">\n                      '
                                        )
                                        .concat(
                                          Object(a.b)(
                                            e.Guidance.KeyLookAround || "Pan"
                                          ),
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          Object(a.b)(
                                            e["KeyLookAround".concat(t)] ||
                                              (t ? e.GamepadStick : "")
                                          ),
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  t && e.GamepadStick
                                    ? '<li>\n                    <span data-str-id="Pan">Pan</span>\n                    <span>'.concat(
                                        Object(a.b)(e.GamepadStick),
                                        "</span>\n                  </li>"
                                      )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  e.Guidance.Sensitivity
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.Sensitivity,
                                          '">\n                      '
                                        )
                                        .concat(
                                          e.Guidance.Sensitivity,
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          e.Sensitivity,
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  e.Guidance.KeyStartStop &&
                                    e["KeyStartStop".concat(t)]
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.KeyStartStop,
                                          '">\n                      '
                                        )
                                        .concat(
                                          Object(a.b)(e.Guidance.KeyStartStop),
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          Object(a.b)(
                                            e["KeyStartStop".concat(t)]
                                          ),
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  e.Guidance.KeySuspend &&
                                    e["KeySuspend".concat(t)]
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.KeySuspend,
                                          '">\n                      '
                                        )
                                        .concat(
                                          e.Guidance.KeySuspend,
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          Object(a.b)(
                                            e["KeySuspend".concat(t)]
                                          ),
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  e.Guidance.SensitivityRatioY
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(
                                          e.Guidance.SensitivityRatioY,
                                          '">\n                      '
                                        )
                                        .concat(
                                          e.Guidance.SensitivityRatioY,
                                          "\n                    </span>\n                    <span>"
                                        )
                                        .concat(
                                          e.SensitivityRatioY,
                                          "</span>\n                  </li>"
                                        )
                                    : "",
                                  "\n              "
                                )
                            : "";
                        case "Dpad":
                          return e.KeyDown ||
                            e.KeyUp ||
                            e.KeyRight ||
                            e.KeyLeft ||
                            t
                            ? ""
                                .concat(
                                  e.Guidance.KeyDown &&
                                    (e.Guidance.GamepadStick ||
                                      e.Guidance.DpadTitle)
                                    ? '<li class="control-sub" data-str-id="'
                                        .concat(
                                          e.Guidance.DpadTitle ||
                                            e.Guidance.GamepadStick,
                                          '">\n                  '
                                        )
                                        .concat(
                                          e.Guidance.DpadTitle ||
                                            e.Guidance.GamepadStick,
                                          "\n                  </li>"
                                        )
                                    : "",
                                  "\n                  "
                                )
                                .concat(
                                  t && e.GamepadStick
                                    ? '<li>\n                      <span data-str-id="'
                                        .concat(
                                          e.Guidance.GamepadStick,
                                          '">\n                        '
                                        )
                                        .concat(
                                          Object(a.b)(
                                            e.Guidance.GamepadStick
                                          ) || "DPAD",
                                          "\n                      </span>\n                      <span>"
                                        )
                                        .concat(
                                          e.GamepadStick,
                                          "</span>\n                    </li>"
                                        )
                                    : '<li>\n                      <span data-str-id="'
                                        .concat(
                                          e.Guidance.KeyUp,
                                          '">\n                        '
                                        )
                                        .concat(
                                          e.Guidance.KeyUp || "Up",
                                          "\n                      </span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyUp".concat(t)]),
                                          '</span>\n                    </li>\n                    <li>\n                      <span data-str-id="'
                                        )
                                        .concat(
                                          e.Guidance.KeyLeft,
                                          '">\n                        '
                                        )
                                        .concat(
                                          e.Guidance.KeyLeft || "Left",
                                          "\n                      </span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyLeft".concat(t)]),
                                          '</span>\n                    </li><li>\n                      <span data-str-id="'
                                        )
                                        .concat(
                                          e.Guidance.KeyDown,
                                          '">\n                        '
                                        )
                                        .concat(
                                          e.Guidance.KeyDown || "Down",
                                          "\n                      </span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyDown".concat(t)]),
                                          '</span>\n                    </li>\n                    <li>\n                      <span data-str-id="'
                                        )
                                        .concat(
                                          e.Guidance.KeyRight,
                                          '">\n                        '
                                        )
                                        .concat(
                                          e.Guidance.KeyRight || "Right",
                                          "\n                      </span>\n                      <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyRight".concat(t)]),
                                          "</span>\n                    </li>\n                    "
                                        )
                                )
                            : "";
                        case "EdgeScroll":
                          return '<li><span data-str-id="'
                            .concat(
                              e.Guidance.EdgeScrollEnabled,
                              '">\n                    '
                            )
                            .concat(
                              e.Guidance.EdgeScrollEnabled,
                              "\n                  </span>\n                  <span>"
                            )
                            .concat(
                              e.EdgeScrollEnabled ? "True" : "False",
                              "</span>\n                </li>"
                            );
                        case "Zoom":
                        case "MouseZoom":
                          return e["KeyIn".concat(t)] || e["KeyOut".concat(t)]
                            ? '<li>\n                    <span data-str-id="'
                                .concat(e.Guidance.KeyIn, '">')
                                .concat(
                                  e.Guidance.KeyIn,
                                  "</span>\n                    <span>"
                                )
                                .concat(
                                  Object(a.b)(e["KeyIn".concat(t)]),
                                  '</span>\n                  </li>\n                  <li>\n                    <span data-str-id="'
                                )
                                .concat(e.Guidance.KeyOut, '">')
                                .concat(
                                  e.Guidance.KeyOut,
                                  "</span>\n                    <span>"
                                )
                                .concat(
                                  Object(a.b)(e["KeyOut".concat(t)]),
                                  "</span>\n                  </li> "
                                )
                                .concat(
                                  e.Guidance.KeyWheel
                                    ? '<li>\n                    <span data-str-id="'
                                        .concat(e.Guidance.KeyWheel, '">')
                                        .concat(
                                          e.Guidance.KeyWheel,
                                          "</span>\n                    <span>"
                                        )
                                        .concat(
                                          Object(a.b)(e["KeyWheel".concat(t)]),
                                          "</span>\n                  </li>"
                                        )
                                    : ""
                                )
                            : "";
                        default:
                          return e.Guidance.Key &&
                            (e["Key".concat(t)] || e["KeyModifier".concat(t)])
                            ? '<li>\n                <span data-str-id="'
                                .concat(e.Guidance.Key, '">')
                                .concat(
                                  e.Guidance.Key || "",
                                  "</span>\n                <span>"
                                )
                                .concat(
                                  Object(a.b)(
                                    e["Key".concat(t)] ||
                                      e["KeyModifier".concat(t)]
                                  ),
                                  "</span>\n              </li>"
                                )
                            : "";
                      }
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .join(""),
                  "\n      </ul>"
                );
            })
            .join("");
          return o;
        }
        return "";
      },
      h = n(70),
      S = !1,
      O = !1,
      k = !1,
      E = {},
      I = {},
      j = 0,
      x = function () {
        k && (Object(r.d)(), Object(r.b)());
      },
      M = function () {
        window.sidebar = {
          widgetVisible: !0,
          widgetClick: function (e) {
            if (!window.sidebar || "drag" !== window.sidebar.widgetState)
              switch (e) {
                case "closeWidget":
                  (window.sidebar.widgetVisible =
                    !window.sidebar.widgetVisible),
                    document
                      .getElementById("js-fs-widget")
                      .classList.toggle("collapse"),
                    Object(m.u)();
                  try {
                    g(document.getElementById("js-fs-widget")),
                      (document.getElementById("closeWidget").title = window
                        .sidebar.widgetVisible
                        ? window.localizedData.closeWidget
                        : window.localizedData.openMenu);
                  } catch (e) {}
              }
          },
          changeTab: function (e) {
            var t, n, o, r;
            if (
              (Array.from(document.querySelectorAll(".tab-item")).forEach(
                function (e) {
                  return e.classList.remove("active");
                }
              ),
              (void 0 ===
                (null === (t = Object(m.c)()) ||
                void 0 === t ||
                null === (n = t.features) ||
                void 0 === n
                  ? void 0
                  : n.showGamepadInGuide) ||
                (null !== (o = Object(m.c)()) &&
                  void 0 !== o &&
                  null !== (r = o.features) &&
                  void 0 !== r &&
                  r.showGamepadInGuide)) &&
                document
                  .querySelector(".tab-item.".concat(e))
                  .classList.add("active"),
              D(".tab-content"),
              "gamepad" === e)
            ) {
              window.gamepadMode = !0;
              try {
                document.querySelector(".gamepad-null").style.display = "flex";
              } catch (e) {}
            } else window.gamepadMode = !1;
            x(),
              Object(i.ab)("controls_type", { value: e }),
              (document.querySelector(".tab-content.".concat(e)).style.display =
                "block");
          },
          toggleOverlay: function () {
            (k = !k),
              s.a.logs.push("toggleOverlay: ".concat(k)),
              N(k),
              Object(i.ab)("controls_view", { value: k ? "on" : "off" });
          },
          onSelectChange: function (e) {
            E &&
              j !== e &&
              ((j = e),
              (E.ControlSchemes = E.ControlSchemes.map(function (e, t) {
                return (
                  (e.Selected = !1),
                  t === j &&
                    ((e.Selected = !0),
                    (I = e),
                    c.a.setActiveSchemeHasGamepad(I.isGamepadControlsPresent)),
                  e
                );
              })),
              s.c.loadCfg(E),
              _(),
              C(),
              x(),
              Object(i.ab)("controls_scheme", { value: I.Name || "" }));
          },
        };
      },
      T = function () {
        return S;
      },
      L = function (e) {
        (S = e)
          ? (document.getElementById("sidebar-wrap").classList.remove("hide"),
            document
              .getElementById("sidebar-wrap")
              .classList.remove("invisible"))
          : document.getElementById("sidebar-wrap").classList.add("hide"),
          S
            ? document.body.classList.add("--sidebar")
            : document.body.classList.remove("--sidebar"),
          Object(i.ab)("click_event", {
            click_type: S ? "sidebar_opened" : "sidebar_closed",
          });
      },
      A = function () {
        var e = document.getElementById("gcStatus");
        O && I.isGamepadControlsPresent
          ? e.classList.remove("disabled")
          : e.classList.add("disabled");
      },
      _ = function (e) {
        var t = I.isGamepadControlsPresent
          ? O
            ? y(I, "_alt1")
            : a.a.NULL
          : a.a.UNSUPPORTED;
        if (e) return t;
        var n = document.querySelector(".tab-content.gamepad");
        I.isGamepadControlsPresent && (n && (n.innerHTML = t), A()),
          Object(u.b)(n);
      },
      C = function (e) {
        var t = y(I);
        if (e) return t;
        var n = document.querySelector(".tab-content.keyboard");
        (n.innerHTML = t), Object(u.b)(n);
      },
      P = function (e) {
        var t, n, o, i, r, a, c, s, d, l, u, p;
        return "\n    "
          .concat(
            w(),
            '\n    <div class="sidebar-wrap" id="sidebar-wrap">\n      <h1 class="sidebar-header">\n        <p class="tab-icon-header"><icon class="icon-gc"></icon><span data-str-id="gameControlsTitle"></span></p>\n        <span class="icon-close-round" id="close-sidebar"></span>\n      </h1>\n      '
          )
          .concat(
            void 0 !==
              (null === (t = Object(m.c)()) ||
              void 0 === t ||
              null === (n = t.features) ||
              void 0 === n
                ? void 0
                : n.disableImap) &&
              null !== (o = Object(m.c)()) &&
              void 0 !== o &&
              null !== (i = o.features) &&
              void 0 !== i &&
              i.disableImap
              ? ""
              : '<div class="sidebar-control">\n        <h4 data-str-id="onScreenTitle"></h4>\n        <div class="check-switch overlaySwitch '
                  .concat(
                    e ? " checked" : "",
                    '">\n          <input\n            type="checkbox"\n            class="overlayEnable"\n            onchange="window.sidebar.toggleOverlay(event)"\n            '
                  )
                  .concat(
                    e ? " checked='checked'" : "",
                    '\n          />\n          <div class="circle"></div>\n        </div>\n      </div>'
                  ),
            "\n      "
          )
          .concat(
            E.ControlSchemes.length > 1
              ? '<div class="sidebar-control form">\n      <h4>Controls scheme</h4>\n      <select class="customSelect" id="scheme" onchange="window.sidebar.onSelectChange(this.selectedIndex)">\n        '.concat(
                  E.ControlSchemes.map(function (e, t) {
                    return (
                      e.Selected && (j = t),
                      '<option value="'
                        .concat(t, '" ')
                        .concat(e.Selected ? "selected" : "", ">")
                        .concat(e.Name, "</option>")
                    );
                  }),
                  "\n      </select>\n    </div>"
                )
              : "",
            '\n      <div class="tab-wrapper">\n        <div class="tab-header">\n            <div class="tab-item keyboard tab-icon-header '
          )
          .concat(
            void 0 ===
              (null === (r = Object(m.c)()) ||
              void 0 === r ||
              null === (a = r.features) ||
              void 0 === a
                ? void 0
                : a.showGamepadInGuide) ||
              (null !== (c = Object(m.c)()) &&
                void 0 !== c &&
                null !== (s = c.features) &&
                void 0 !== s &&
                s.showGamepadInGuide)
              ? "active"
              : "",
            '" onclick=\'window.sidebar.changeTab("keyboard")\'>\n              <icon class="icon-keyboard"></icon>\n              <span data-str-id="keyboard"></span>\n            </div>\n            <div class="tab-item gamepad tab-icon-header '
          )
          .concat(
            void 0 ===
              (null === (d = Object(m.c)()) ||
              void 0 === d ||
              null === (l = d.features) ||
              void 0 === l
                ? void 0
                : l.showGamepadInGuide) ||
              (null !== (u = Object(m.c)()) &&
                void 0 !== u &&
                null !== (p = u.features) &&
                void 0 !== p &&
                p.showGamepadInGuide)
              ? ""
              : "collapse",
            '"\n                onclick=\'window.sidebar.changeTab("gamepad")\'>\n              <icon class="icon-gc" id="gcStatus"></icon>\n              <span data-str-id="gamepad"></span>\n            </div>\n        </div>\n        <div class="tab-body">\n            <div class="tab-content keyboard">\n            '
          )
          .concat(
            C(!0),
            '\n            </div>\n            <div class="tab-content gamepad">\n              '
          )
          .concat(
            _(!0),
            "\n            </div>\n        </div>\n      </div>\n    </div>\n"
          );
      },
      D = function (e) {
        Array.from(document.querySelectorAll(e)).forEach(function (e) {
          return (e.style.display = "none");
        });
      },
      R = function (e) {
        var t;
        c.a.onconnected(e),
          Object(i.ab)("game_pad", {
            value: 1,
            name:
              (null == e || null === (t = e.gamepad) || void 0 === t
                ? void 0
                : t.id) || "",
          }),
          (O = !0),
          _();
      },
      B = function (e) {
        c.a.ondisconnected(e),
          Object(i.ab)("game_pad", { value: 0 }),
          (O = !1),
          _();
      },
      N = function (e) {
        (k = e), Object(r.c)(e);
        var t = Array.from(document.getElementsByClassName("imapEnable")),
          n = Array.from(document.getElementsByClassName("imapSwitch")),
          o = document.querySelector(".overlaySwitch");
        e
          ? (t.length &&
              t.forEach(function (e) {
                return e.setAttribute("checked", "checked");
              }),
            n.length &&
              n.forEach(function (e) {
                return e.classList.add("checked");
              }),
            o && o.classList.add("checked"))
          : (t.length &&
              t.forEach(function (e) {
                return e.removeAttribute("checked");
              }),
            n.length &&
              n.forEach(function (e) {
                return e.classList.remove("checked");
              }),
            o && o.classList.remove("checked"));
      },
      q = function () {
        var e = Object(m.e)();
        if (e) {
          var t = e.x,
            n = e.y;
          if (t >= 0 && t <= innerWidth) {
            var o = document.getElementById("js-fs-widget");
            o &&
              ((o.style.top = "".concat(n, "px")),
              (o.style.left = "".concat(t, "px")));
          }
        }
      },
      G = function () {
        var e = document.getElementById("sidebar");
        (e.innerHTML = w()),
          Object(u.b)(e),
          b(document.getElementById("js-fs-widget")),
          q();
        var t = document.getElementById("widget-popularIcon"),
          n = Object(h.loadAnimation)({
            container: t,
            renderer: "svg",
            loop: !1,
            autoplay: !0,
            path: "".concat("/play", "/trendingUp.json"),
          });
        n.addEventListener("complete", function () {
          setTimeout(function () {
            n.goToAndPlay(0);
          }, 3e3);
        });
      },
      H = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.detail;
        if (!p.b.isMobile()) {
          var n = document.getElementById("sidebar");
          if (
            ((s.a.sideBarState = "RENDERING_SIDEBAR"),
            M(),
            Object(i.P)(),
            t && t.ControlSchemes)
          ) {
            var o = Object(m.q)();
            (s.a.sideBarState = "RENDERED_SIDEBAR"),
              s.a.logs.push("".concat(o, " game guide state"));
            var a = t.ControlSchemes.find(function (e) {
              return !0 === e.Selected;
            });
            (E = t),
              (I = a),
              c.a.setActiveSchemeHasGamepad(I.isGamepadControlsPresent),
              Object(i.ab)("controls_scheme", { value: I.Name || "" }),
              s.a.logs.push("".concat(I.Name, " current scheme")),
              (S = !0),
              s.c.config.anySchemeHasGamepad &&
                (window.addEventListener("gamepadconnected", R, !1),
                window.addEventListener("gamepaddisconnected", B, !1)),
              (n.innerHTML = P(k));
            var d = document.getElementById("widget-popularIcon"),
              f = Object(h.loadAnimation)({
                container: d,
                renderer: "svg",
                loop: !1,
                autoplay: !0,
                path: "".concat("/play", "/trendingUp.json"),
              });
            if (
              (f.addEventListener("complete", function () {
                setTimeout(function () {
                  f.goToAndPlay(0);
                }, 3e3);
              }),
              s.a.logs.push("".concat(k, " overlayActive")),
              v(t),
              Object(u.b)(n),
              o)
            ) {
              var w = document.getElementById("sidebar-wrap");
              w && w.classList.add("invisible"), L(!1);
            } else document.body.classList.add("--sidebar");
            new l.a({ selector: ".customSelect" }),
              A(),
              Object(r.b)(),
              N(Object(m.d)()),
              window.sidebar.changeTab("keyboard"),
              b(document.getElementById("js-fs-widget")),
              Object(i.ab)("impression_event", {
                impression_type: "sidebar_viewed",
              }),
              q();
          } else G();
        }
      };
    window.addEventListener(o.d, H), window.addEventListener(o.c, H);
  },
  74: function (e, t, n) {
    "use strict";
    var o = n(10),
      i = n(6),
      r = n(36),
      a = null,
      c = !1,
      s = performance.now(),
      d = !0;
    function l() {
      if (c) {
        d && (Object(r.a)(o.f), (d = !1));
        var e = navigator.getGamepads()[0];
        if (e && e.connected && e.timestamp !== s) {
          var t = e.axes,
            n = 0,
            i = e.buttons;
          for (var a in i)
            o.a[a] && (i[a].value > 0.75 ? (n |= o.a[a]) : (n &= ~o.a[a]));
          try {
            window.Module.ImapPlayGamepadAnalogEvents(
              e.timestamp,
              n,
              1 - e.buttons[6].value,
              1 - e.buttons[7].value,
              ~~(128 * t[0] * 255),
              ~~(128 * -t[1] * 255),
              ~~(128 * t[2] * 255),
              ~~(128 * -t[3] * 255)
            );
          } catch (e) {}
          s = e.timestamp;
        }
      }
    }
    var u = {
      gamepad: null,
      setActiveSchemeHasGamepad: function (e) {
        c = e;
      },
      onconnected: function (e) {
        i.c.config.anySchemeHasGamepad && !a && (a = setInterval(l, 16)),
          (u.gamepad = e.gamepad);
      },
      ondisconnected: function (e) {
        clearInterval(a), (u.gamepad = null), (d = !0);
      },
    };
    t.a = u;
  },
  81: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return p;
      });
    var o,
      i = n(2),
      r = n(3),
      a = n(5),
      c = n(0),
      s = n(17);
    function d(e, t, n, o, i, r, a) {
      try {
        var c = e[r](a),
          s = c.value;
      } catch (e) {
        return void n(e);
      }
      c.done ? t(s) : Promise.resolve(s).then(o, i);
    }
    function l(e) {
      return function () {
        var t = this,
          n = arguments;
        return new Promise(function (o, i) {
          var r = e.apply(t, n);
          function a(e) {
            d(r, o, i, a, c, "next", e);
          }
          function c(e) {
            d(r, o, i, a, c, "throw", e);
          }
          a(void 0);
        });
      };
    }
    var u = function () {
        var e = 5;
        o = setInterval(function () {
          (e += 1) <= 90 && document.querySelector(".progress-bar .progress")
            ? (document.querySelector(".progress-bar .progress").style.width =
                "".concat(e, "%"))
            : clearInterval(o);
        }, 200);
      },
      p = function () {
        clearInterval(o);
      };
    (window.launchApp = (function () {
      var e = l(
        regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  Object(a.t)(),
                    (document.querySelector(".gamePlayScreen").style.display =
                      "block"),
                    document.querySelector(".landingScreen") &&
                      (document.querySelector(".landingScreen").style.display =
                        "none"),
                    i.b.isMobile() &&
                      (Object(i.c)(t),
                      window.isSocialMediaFlow &&
                        (window.addEventListener("SET_PORTRAIT_MODE", a.g),
                        window.playInBrowser()));
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (t) {
        return e.apply(this, arguments);
      };
    })()),
      (window.startDownload = (function () {
        var e = l(
          regeneratorRuntime.mark(function e(t) {
            var n, o, a, d, l, u, p, m, f, w, v, g, b;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((d = Object(r.c)()),
                      (l =
                        null === (n = window) ||
                        void 0 === n ||
                        null === (o = n.appInfo) ||
                        void 0 === o
                          ? void 0
                          : o.packageName),
                      (u = null == d ? void 0 : d.attributionType),
                      (p =
                        null == d || null === (a = d.targetUrl) || void 0 === a
                          ? void 0
                          : a.desktop),
                      t &&
                        Object(c.ab)("ac_click_conversion", {
                          conversion_type: "download_BGP",
                        }),
                      !p)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (
                      (m = sessionStorage.getItem("queryParams")) &&
                        u === s.e.plarium_custom &&
                        (p = "".concat(p).concat(m)),
                      window.open(p, "_blank"),
                      e.abrupt("return")
                    );
                  case 10:
                    if (!window.isQtWeb) {
                      e.next = 13;
                      break;
                    }
                    return (
                      window.qtContext.dataChanged(
                        JSON.stringify({ event: "notifyClientBtnClicked" })
                      ),
                      e.abrupt("return")
                    );
                  case 13:
                    if (
                      "bluestacks" !==
                      (
                        sessionStorage.getItem("utm_campaign") || "NA"
                      ).toLowerCase()
                    ) {
                      e.next = 18;
                      break;
                    }
                    return (
                      (g = "bluestacksgp: -json ".concat(
                        encodeURIComponent(
                          JSON.stringify({
                            app_icon_url:
                              (null == d ||
                              null === (f = d.media) ||
                              void 0 === f
                                ? void 0
                                : f.desktop.icon) ||
                              (null == d ||
                              null === (w = d.media) ||
                              void 0 === w
                                ? void 0
                                : w.mobile.icon) ||
                              "",
                            app_name: (null == d ? void 0 : d.name) || "",
                            app_url:
                              (null == d ||
                              null === (v = d.targetUrl) ||
                              void 0 === v
                                ? void 0
                                : v.android) || "",
                            app_pkg: (null == d ? void 0 : d.packageName) || "",
                          })
                        )
                      )),
                      (document.location = g),
                      e.abrupt("return")
                    );
                  case 18:
                    (b = document.getElementById("arrowDown")),
                      "Apple Safari" !== Object(i.a)().browser && b
                        ? ((b.style.display = "flex"),
                          b.classList.add("flex", "download-arrow-container"))
                        : b &&
                          ((b.style.display = "none"),
                          b.classList.remove(
                            "flex",
                            "download-arrow-container"
                          )),
                      i.b.downloadBlueStacks(l);
                  case 21:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })());
  },
  83: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return i;
      });
    var o = function (e, t) {
        var n = t.x,
          o = t.y,
          i = document.getElementById(e);
        i &&
          ((i.style.left = "".concat(n, "%")),
          (i.style.top = "".concat(o, "%")));
      },
      i = function (e, t) {
        var n,
          o,
          i = document.getElementById(e);
        if (
          (!window.isPortraitMode &&
            (90 === window.orientation || -90 === window.orientation)) ||
          (window.isPortraitMode && 0 === window.orientation) ||
          window.sessionEnded
        ) {
          var r = i.getBoundingClientRect(),
            a = (10 / window.innerHeight) * 100,
            c =
              ((window.innerHeight - (r.height + 4)) / window.innerHeight) *
              100,
            s = (10 / window.innerWidth) * 100,
            d = ((window.innerWidth - (r.width + 4)) / window.innerWidth) * 100,
            l = (t.changedTouches[0].clientX / window.innerWidth) * 100,
            u = (t.changedTouches[0].clientY / window.innerHeight) * 100;
          u > a && u < c && (o = u), l > s && l < d && (n = l);
        } else if (window.isPortraitMode || 0 !== window.orientation) {
          if (
            window.isPortraitMode &&
            (90 === window.orientation || -90 === window.orientation)
          ) {
            var p = i.getBoundingClientRect(),
              m = (10 / window.innerWidth) * 100,
              f =
                ((window.innerWidth - (p.width + 4)) / window.innerWidth) * 100,
              w = (10 / window.innerHeight) * 100,
              v =
                ((window.innerHeight - (p.height + 4)) / window.innerHeight) *
                100,
              g = (t.changedTouches[0].clientX / window.innerWidth) * 100,
              b =
                100 - (t.changedTouches[0].clientY / window.innerHeight) * 100;
            g > m && g < f && (o = g), b > w && b < v && (n = b);
          }
        } else {
          var y = i.getBoundingClientRect(),
            h = (10 / window.innerWidth) * 100,
            S = ((window.innerWidth - (y.width + 4)) / window.innerWidth) * 100,
            O = (10 / window.innerHeight) * 100,
            k =
              ((window.innerHeight - (y.height + 4)) / window.innerHeight) *
              100,
            E = 100 - (t.changedTouches[0].clientX / window.innerWidth) * 100,
            I = (t.changedTouches[0].clientY / window.innerHeight) * 100;
          E > h && E < S && (o = E), I > O && I < k && (n = I);
        }
        (i.style.left = "".concat(n, "%")), (i.style.top = "".concat(o, "%"));
      };
  },
});
//# sourceMappingURL=app.6000a419.js.map
