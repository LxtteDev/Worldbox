(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [9],
  {
    "7Qko": function (i, e, o) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = o("K4CH");
      function n(i) {
        if (i && i.__esModule) return i;
        var e = Object.create(null);
        return (
          i &&
            Object.keys(i).forEach(function (o) {
              if ("default" !== o) {
                var r = Object.getOwnPropertyDescriptor(i, o);
                Object.defineProperty(
                  e,
                  o,
                  r.get
                    ? r
                    : {
                        enumerable: !0,
                        get: function () {
                          return i[o];
                        },
                      }
                );
              }
            }),
          (e.default = i),
          Object.freeze(e)
        );
      }
      var t = n(o("q1tI")),
        a = [
          "\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/",
          "googlebot",
          "baiduspider",
          "gurujibot",
          "yandexbot",
          "slurp",
          "msnbot",
          "bingbot",
          "facebookexternalhit",
          "linkedinbot",
          "twitterbot",
          "slackbot",
          "telegrambot",
          "applebot",
          "pingdom",
          "tumblr",
        ];
      function s(i) {
        var e = new r.UAParser(i).getResult(),
          o = new RegExp("(" + a.join("|") + ")", "ig"),
          n = !!i && o.test(i.toLowerCase()),
          t = e.browser.name,
          s = e.device.type || null,
          b = e.os.name,
          l = e.engine.name,
          u = "mobile" === s,
          w = "tablet" === s,
          c = "iOS" === b;
        return Object.freeze({
          browser: t,
          deviceType: s,
          os: b,
          engine: l,
          isMobile: u,
          isTablet: w,
          isIos: c,
          source: i,
          deviceVendor: e.device.vendor || null,
          osVersion: parseInt(e.os.version, 10),
          browserVersion: parseFloat(e.browser.version),
          engineVersion: parseFloat(e.engine.version),
          isIphone: u && c,
          isIpad: w && c,
          isDesktop: !u && !w,
          isChrome: "Chrome" === t,
          isFirefox: "Firefox" === t,
          isSafari: "Safari" === t,
          isIE: "IE" === t,
          isEdge: "Edge" === t,
          isOpera: "Opera" === t,
          isMac: "Mac OS" === b,
          isChromeOS: "Chromium OS" === b,
          isWindows: "Windows" === b,
          isAndroid: "Android" === b,
          isBot: n,
        });
      }
      var b = function (i, e) {
        return (b =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (i, e) {
              i.__proto__ = e;
            }) ||
          function (i, e) {
            for (var o in e)
              Object.prototype.hasOwnProperty.call(e, o) && (i[o] = e[o]);
          })(i, e);
      };
      var l = function () {
        return (l =
          Object.assign ||
          function (i) {
            for (var e, o = 1, r = arguments.length; o < r; o++)
              for (var n in (e = arguments[o]))
                Object.prototype.hasOwnProperty.call(e, n) && (i[n] = e[n]);
            return i;
          }).apply(this, arguments);
      };
      function u(i, e, o, r) {
        return new (o || (o = Promise))(function (n, t) {
          function a(i) {
            try {
              b(r.next(i));
            } catch (e) {
              t(e);
            }
          }
          function s(i) {
            try {
              b(r.throw(i));
            } catch (e) {
              t(e);
            }
          }
          function b(i) {
            var e;
            i.done
              ? n(i.value)
              : ((e = i.value),
                e instanceof o
                  ? e
                  : new o(function (i) {
                      i(e);
                    })).then(a, s);
          }
          b((r = r.apply(i, e || [])).next());
        });
      }
      function w(i, e) {
        var o,
          r,
          n,
          t,
          a = {
            label: 0,
            sent: function () {
              if (1 & n[0]) throw n[1];
              return n[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (t = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
        function s(t) {
          return function (s) {
            return (function (t) {
              if (o) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((o = 1),
                    r &&
                      (n =
                        2 & t[0]
                          ? r.return
                          : t[0]
                          ? r.throw || ((n = r.return) && n.call(r), 0)
                          : r.next) &&
                      !(n = n.call(r, t[1])).done)
                  )
                    return n;
                  switch (((r = 0), n && (t = [2 & t[0], n.value]), t[0])) {
                    case 0:
                    case 1:
                      n = t;
                      break;
                    case 4:
                      return a.label++, { value: t[1], done: !1 };
                    case 5:
                      a.label++, (r = t[1]), (t = [0]);
                      continue;
                    case 7:
                      (t = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(n = (n = a.trys).length > 0 && n[n.length - 1]) &&
                        (6 === t[0] || 2 === t[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === t[0] && (!n || (t[1] > n[0] && t[1] < n[3]))) {
                        a.label = t[1];
                        break;
                      }
                      if (6 === t[0] && a.label < n[1]) {
                        (a.label = n[1]), (n = t);
                        break;
                      }
                      if (n && a.label < n[2]) {
                        (a.label = n[2]), a.ops.push(t);
                        break;
                      }
                      n[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  t = e.call(i, a);
                } catch (s) {
                  (t = [6, s]), (r = 0);
                } finally {
                  o = n = 0;
                }
              if (5 & t[0]) throw t[1];
              return { value: t[0] ? t[1] : void 0, done: !0 };
            })([t, s]);
          };
        }
      }
      (e.parse = s),
        (e.useUserAgent = function (i) {
          return s(i);
        }),
        (e.withUserAgent = function (i) {
          var e,
            o = this,
            r = i.displayName || i.name,
            n = (function (o) {
              function n() {
                return (null !== o && o.apply(this, arguments)) || this;
              }
              return (
                (function (i, e) {
                  if ("function" !== typeof e && null !== e)
                    throw new TypeError(
                      "Class extends value " +
                        String(e) +
                        " is not a constructor or null"
                    );
                  function o() {
                    this.constructor = i;
                  }
                  b(i, e),
                    (i.prototype =
                      null === e
                        ? Object.create(e)
                        : ((o.prototype = e.prototype), new o()));
                })(n, o),
                (n.prototype.render = function () {
                  return (
                    e ||
                      "undefined" === typeof window ||
                      (e = s(window.navigator.userAgent)),
                    t.createElement(i, l({ ua: e }, this.props))
                  );
                }),
                (n.displayName = "withUserAgent(" + r + ")"),
                n
              );
            })(t.Component);
          return (
            i.getInitialProps &&
              (n.getInitialProps = function (r) {
                return u(o, void 0, void 0, function () {
                  var o, n;
                  return w(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return (
                          (o = {}),
                          (n = ""),
                          "undefined" !== typeof r.req
                            ? (n = r.req.headers["user-agent"])
                            : "undefined" !== typeof window &&
                              (n = window.navigator.userAgent),
                          (e = s(n)),
                          (r.ua = Object.assign({}, e)),
                          [4, i.getInitialProps(r)]
                        );
                      case 1:
                        return (o = t.sent()), r.ua && delete r.ua, [2, o];
                    }
                  });
                });
              }),
            n
          );
        });
    },
    K4CH: function (i, e, o) {
      var r;
      !(function (n, t) {
        "use strict";
        var a = "function",
          s = "undefined",
          b = "object",
          l = "string",
          u = "model",
          w = "name",
          c = "type",
          d = "vendor",
          p = "version",
          f = "architecture",
          m = "console",
          h = "mobile",
          g = "tablet",
          v = "smarttv",
          x = "wearable",
          y = "embedded",
          k = "Amazon",
          _ = "Apple",
          O = "ASUS",
          S = "BlackBerry",
          T = "Firefox",
          j = "Google",
          A = "Huawei",
          C = "LG",
          q = "Microsoft",
          E = "Motorola",
          N = "Opera",
          z = "Samsung",
          P = "Sony",
          U = "Xiaomi",
          I = "Zebra",
          M = "Facebook",
          B = function (i) {
            for (var e = {}, o = 0; o < i.length; o++)
              e[i[o].toUpperCase()] = i[o];
            return e;
          },
          R = function (i, e) {
            return typeof i === l && -1 !== V(e).indexOf(V(i));
          },
          V = function (i) {
            return i.toLowerCase();
          },
          F = function (i, e) {
            if (typeof i === l)
              return (
                (i = i.replace(/^\s\s*/, "").replace(/\s\s*$/, "")),
                typeof e === s ? i : i.substring(0, 255)
              );
          },
          D = function (i, e) {
            for (var o, r, n, s, l, u, w = 0; w < e.length && !l; ) {
              var c = e[w],
                d = e[w + 1];
              for (o = r = 0; o < c.length && !l; )
                if ((l = c[o++].exec(i)))
                  for (n = 0; n < d.length; n++)
                    (u = l[++r]),
                      typeof (s = d[n]) === b && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, u))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = u ? u.replace(s[1], s[2]) : t)
                            : (this[s[0]] = u ? s[1].call(this, u, s[2]) : t)
                          : 4 === s.length &&
                            (this[s[0]] = u
                              ? s[3].call(this, u.replace(s[1], s[2]))
                              : t)
                        : (this[s] = u || t);
              w += 2;
            }
          },
          W = function (i, e) {
            for (var o in e)
              if (typeof e[o] === b && e[o].length > 0) {
                for (var r = 0; r < e[o].length; r++)
                  if (R(e[o][r], i)) return "?" === o ? t : o;
              } else if (R(e[o], i)) return "?" === o ? t : o;
            return i;
          },
          G = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          H = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [w, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [w, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [w, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [w, "Opera Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [w, N]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [w, p],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [w, "UCBrowser"]],
              [/\bqbcore\/([\w\.]+)/i],
              [p, [w, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [p, [w, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [w, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [w, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [p, [w, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[w, /(.+)/, "$1 Secure Browser"], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [w, "Firefox Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [w, "Opera Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [w, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [w, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [w, "Opera Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [w, "MIUI Browser"]],
              [/fxios\/([-\w\.]+)/i],
              [p, [w, T]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[w, "360 Browser"]],
              [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
              [[w, /(.+)/, "$1 Browser"], p],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[w, /_/g, " "], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [w, p],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i],
              [w],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[w, M], p],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [w, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [w, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [w, "Chrome Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[w, "Chrome WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [w, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [w, p],
              [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],
              [p, [w, "Mobile Safari"]],
              [/version\/([\w\.]+) .*(mobile ?safari|safari)/i],
              [p, w],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                w,
                [
                  p,
                  W,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [w, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[w, "Netscape"], p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [w, "Firefox Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [w, p],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[f, "amd64"]],
              [/(ia32(?=;))/i],
              [[f, V]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[f, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[f, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[f, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[f, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[f, /ower/, "", V]],
              [/(sun4\w)[;\)]/i],
              [[f, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[f, V]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [u, [d, z], [c, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [u, [d, z], [c, h]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [u, [d, _], [c, h]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [u, [d, _], [c, g]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [u, [d, A], [c, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i,
              ],
              [u, [d, A], [c, h]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [u, /_/g, " "],
                [d, U],
                [c, h],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [u, /_/g, " "],
                [d, U],
                [c, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [u, [d, "OPPO"], [c, h]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [u, [d, "Vivo"], [c, h]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [u, [d, "Realme"], [c, h]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [u, [d, E], [c, h]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [u, [d, E], [c, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [u, [d, C], [c, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [u, [d, C], [c, h]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [u, [d, "Lenovo"], [c, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [u, /_/g, " "],
                [d, "Nokia"],
                [c, h],
              ],
              [/(pixel c)\b/i],
              [u, [d, j], [c, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [u, [d, j], [c, h]],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [u, [d, P], [c, h]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [u, "Xperia Tablet"],
                [d, P],
                [c, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [u, [d, "OnePlus"], [c, h]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [u, [d, k], [c, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [u, /(.+)/g, "Fire Phone $1"],
                [d, k],
                [c, h],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [u, d, [c, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [u, [d, S], [c, h]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [u, [d, O], [c, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [u, [d, O], [c, h]],
              [/(nexus 9)/i],
              [u, [d, "HTC"], [c, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i,
              ],
              [d, [u, /_/g, " "], [c, h]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [u, [d, "Acer"], [c, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [u, [d, "Meizu"], [c, h]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [u, [d, "Sharp"], [c, h]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [d, u, [c, h]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [d, u, [c, g]],
              [/(surface duo)/i],
              [u, [d, q], [c, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [u, [d, "Fairphone"], [c, h]],
              [/(u304aa)/i],
              [u, [d, "AT&T"], [c, h]],
              [/\bsie-(\w*)/i],
              [u, [d, "Siemens"], [c, h]],
              [/\b(rct\w+) b/i],
              [u, [d, "RCA"], [c, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [u, [d, "Dell"], [c, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [u, [d, "Verizon"], [c, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [u, [d, "Barnes & Noble"], [c, g]],
              [/\b(tm\d{3}\w+) b/i],
              [u, [d, "NuVision"], [c, g]],
              [/\b(k88) b/i],
              [u, [d, "ZTE"], [c, g]],
              [/\b(nx\d{3}j) b/i],
              [u, [d, "ZTE"], [c, h]],
              [/\b(gen\d{3}) b.+49h/i],
              [u, [d, "Swiss"], [c, h]],
              [/\b(zur\d{3}) b/i],
              [u, [d, "Swiss"], [c, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [u, [d, "Zeki"], [c, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[d, "Dragon Touch"], u, [c, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [u, [d, "Insignia"], [c, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [u, [d, "NextBook"], [c, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[d, "Voice"], u, [c, h]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[d, "LvTel"], u, [c, h]],
              [/\b(ph-1) /i],
              [u, [d, "Essential"], [c, h]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [u, [d, "Envizen"], [c, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [u, [d, "MachSpeed"], [c, g]],
              [/\btu_(1491) b/i],
              [u, [d, "Rotor"], [c, g]],
              [/(shield[\w ]+) b/i],
              [u, [d, "Nvidia"], [c, g]],
              [/(sprint) (\w+)/i],
              [d, u, [c, h]],
              [/(kin\.[onetw]{3})/i],
              [
                [u, /\./g, " "],
                [d, q],
                [c, h],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [u, [d, I], [c, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [u, [d, I], [c, h]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [d, u, [c, m]],
              [/droid.+; (shield) bui/i],
              [u, [d, "Nvidia"], [c, m]],
              [/(playstation [345portablevi]+)/i],
              [u, [d, P], [c, m]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [u, [d, q], [c, m]],
              [/smart-tv.+(samsung)/i],
              [d, [c, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [u, /^/, "SmartTV"],
                [d, z],
                [c, v],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [d, C],
                [c, v],
              ],
              [/(apple) ?tv/i],
              [d, [u, "Apple TV"], [c, v]],
              [/crkey/i],
              [
                [u, "Chromecast"],
                [d, j],
                [c, v],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [u, [d, k], [c, v]],
              [/\(dtv[\);].+(aquos)/i],
              [u, [d, "Sharp"], [c, v]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [d, F],
                [u, F],
                [c, v],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[c, v]],
              [/((pebble))app/i],
              [d, u, [c, x]],
              [/droid.+; (glass) \d/i],
              [u, [d, j], [c, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [u, [d, I], [c, x]],
              [/(quest( 2)?)/i],
              [u, [d, M], [c, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [d, [c, y]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [u, [c, h]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [u, [c, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[c, g]],
              [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],
              [[c, h]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [u, [d, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [w, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [w, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [w, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, w],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [w, p],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [w, [p, W, G]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [w, "Windows"],
                [p, W, G],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [p, /_/g, "."],
                [w, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [w, "Mac OS"],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
              [p, w],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [w, p],
              [/\(bb(10);/i],
              [p, [w, S]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [w, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [w, "Firefox OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [w, "webOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [w, "Chromecast"]],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[w, "Chromium OS"], p],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [w, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [[w, "Solaris"], p],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [w, p],
            ],
          },
          L = function (i, e) {
            if ((typeof i === b && ((e = i), (i = t)), !(this instanceof L)))
              return new L(i, e).getResult();
            var o =
                i ||
                (typeof n !== s && n.navigator && n.navigator.userAgent
                  ? n.navigator.userAgent
                  : ""),
              r = e
                ? (function (i, e) {
                    var o = {};
                    for (var r in i)
                      e[r] && e[r].length % 2 === 0
                        ? (o[r] = e[r].concat(i[r]))
                        : (o[r] = i[r]);
                    return o;
                  })(H, e)
                : H;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e.name = t),
                  (e.version = t),
                  D.call(e, o, r.browser),
                  (e.major =
                    typeof (i = e.version) === l
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : t),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i.architecture = t), D.call(i, o, r.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i.vendor = t),
                  (i.model = t),
                  (i.type = t),
                  D.call(i, o, r.device),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i.name = t), (i.version = t), D.call(i, o, r.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (i.name = t), (i.version = t), D.call(i, o, r.os), i;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return o;
              }),
              (this.setUA = function (i) {
                return (
                  (o = typeof i === l && i.length > 255 ? F(i, 255) : i), this
                );
              }),
              this.setUA(o),
              this
            );
          };
        (L.VERSION = "0.7.31"),
          (L.BROWSER = B([w, p, "major"])),
          (L.CPU = B([f])),
          (L.DEVICE = B([u, d, c, m, h, v, g, x, y])),
          (L.ENGINE = L.OS = B([w, p])),
          typeof e !== s
            ? (typeof i !== s && i.exports && (e = i.exports = L),
              (e.UAParser = L))
            : o("qpuh")
            ? (r = function () {
                return L;
              }.call(e, o, e, i)) === t || (i.exports = r)
            : typeof n !== s && (n.UAParser = L);
        var Z = typeof n !== s && (n.jQuery || n.Zepto);
        if (Z && !Z.ua) {
          var $ = new L();
          (Z.ua = $.getResult()),
            (Z.ua.get = function () {
              return $.getUA();
            }),
            (Z.ua.set = function (i) {
              $.setUA(i);
              var e = $.getResult();
              for (var o in e) Z.ua[o] = e[o];
            });
        }
      })("object" === typeof window ? window : this);
    },
    qpuh: function (i, e) {
      (function (e, o) {
        i.exports = (function () {
          var i = {
              929: function (i) {
                i.exports = e;
              },
            },
            r = {};
          function n(e) {
            if (r[e]) return r[e].exports;
            var o = (r[e] = { exports: {} }),
              t = !0;
            try {
              i[e](o, o.exports, n), (t = !1);
            } finally {
              t && delete r[e];
            }
            return o.exports;
          }
          return (n.ab = o + "/"), n(929);
        })();
      }.call(this, {}, "/"));
    },
  },
]);
