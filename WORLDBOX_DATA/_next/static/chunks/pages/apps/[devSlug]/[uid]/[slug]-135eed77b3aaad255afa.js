_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [60, 346],
  {
    "0JCS": function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, "__N_SSP", function () {
          return _;
        }),
        a.d(t, "default", function () {
          return k;
        });
      var i = a("nKUr"),
        n = a("rePB"),
        s = a("KQm4"),
        o = a("q1tI"),
        r = a("Vvt1"),
        l = a.n(r),
        p = a("PvKc"),
        d = a("G7qJ"),
        c = a("MBWa"),
        m = a("EUWv"),
        g = (a("Sktx"), a("20a2")),
        x = a("AATo"),
        h = a("vOnD"),
        b = a("Ybt9"),
        u = a("WdPs"),
        f = a("A8lN"),
        w = a("Mr/I"),
        v = a("1fFI");
      function j(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, i);
        }
        return a;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? j(Object(a), !0).forEach(function (t) {
                Object(n.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : j(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      var y = h.b.div.withConfig({
          displayName: "slug__AppStyleWrapper",
          componentId: "sc-xehpa8-0",
        })(
          ["", ""],
          ".apps-wrapper{padding-bottom:80px}@media screen and (max-width: 767px){.apps-wrapper{margin-bottom:48px}}.apps-wrapper button{font-family:'Poppins', sans-serif}.apps-wrapper .app-details .title{font-size:36px;line-height:54px;color:#0b0223;margin-top:5px}.apps-wrapper .app-details .description{font-size:16px;line-height:150%;color:#473e5f;margin-top:24px}.apps-wrapper .pre-register-btn{max-width:500px;width:auto}.apps-wrapper .pre-register-btn .btn-text{white-space:nowrap;padding:12px 72.5px;margin-left:0px;overflow:hidden;text-overflow:ellipsis}.apps-wrapper .pre-register-btn:hover{background:#ff3392}@media screen and (max-width: 767px){.apps-wrapper .divider{background:#c4c4c4;opacity:0.2;border-radius:4px;height:1px;margin:0 16px;transform:translateY(-1px)}.apps-wrapper .app-details .title{font-size:24px;line-height:36px;margin-top:40px}.apps-wrapper .app-details .description{margin-top:16px}.apps-wrapper .app-details .btn-play-now img{max-width:56px}.apps-wrapper .app-details .btn-play-now .btn-text{font-size:18px !important}.apps-wrapper .app-details .pre-register-btn{width:100%}.apps-wrapper .app-details .pre-register-btn .btn-text{padding:16px 52px}}\n"
        ),
        N = l()(
          function () {
            return a.e(345).then(a.bind(null, "0NYU"));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["0NYU"];
              },
              modules: ["./components/games"],
            },
          }
        ),
        _ = !0;
      function k(e) {
        var t,
          a,
          n,
          r,
          l,
          h,
          j,
          _,
          k,
          F = Object(o.useState)(""),
          z = F[0],
          S = F[1],
          I = Object(g.useRouter)().locale,
          P = e.overview_title,
          A = void 0 === P ? "" : P,
          C = e.overview_description,
          E = void 0 === C ? "" : C,
          L = e.media,
          D = void 0 === L ? {} : L,
          B = e.popular_games,
          q = e.genrewise_games,
          M = e.upcoming_games,
          T = e.genreShortDescription,
          G = e.upcomingShortDescription,
          R = e.playBtnDetails,
          U = void 0 === R ? {} : R,
          V = e.developers_details,
          H = void 0 === V ? {} : V,
          K = e.seoEnabled,
          W = e.faqs,
          J = void 0 === W ? [] : W,
          Y = e.faq_schema,
          Q = void 0 === Y ? {} : Y,
          X = e.moddable,
          Z = void 0 === X ? null : X,
          $ = e.packageName,
          ee = e.nowgg_id,
          te = e.bluestacksSupported,
          ae = void 0 === te ? null : te,
          ie = {
            releaseDate: e.releaseDate,
            platform: e.platform,
            genre: e.genre,
          },
          ne = ["None"];
        x.a.includes(x.b[I] || I) &&
          (ne = [{ page: Object(d.k)("games"), path: "games" }].concat(
            Object(s.a)(
              ie.genre[0]
                ? [
                    {
                      page:
                        null === (_ = ie.genre[0]) || void 0 === _
                          ? void 0
                          : _.name,
                      path: "games/".concat(
                        null === (k = ie.genre[0]) || void 0 === k
                          ? void 0
                          : k.slug
                      ),
                    },
                  ]
                : []
            ),
            [
              {
                page: e.name,
                path: "apps/"
                  .concat(null === H || void 0 === H ? void 0 : H.slug, "/")
                  .concat(null === e || void 0 === e ? void 0 : e.nowgg_id, "/")
                  .concat(null === e || void 0 === e ? void 0 : e.slug),
              },
            ]
          ));
        var se = e.meta_title,
          oe = e.meta_description,
          re = {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: e.name,
            description: oe,
            url: ""
              .concat(e.host)
              .concat(Object(d.e)(I), "/apps/")
              .concat(
                null === e ||
                  void 0 === e ||
                  null === (t = e.developers_details) ||
                  void 0 === t
                  ? void 0
                  : t.slug,
                "/"
              )
              .concat(null === e || void 0 === e ? void 0 : e.nowgg_id, "/")
              .concat(null === e || void 0 === e ? void 0 : e.slug, ".html"),
            image:
              null === e ||
              void 0 === e ||
              null === (a = e.media) ||
              void 0 === a ||
              null === (n = a.mobile) ||
              void 0 === n
                ? void 0
                : n.banner,
            operatingSystem: "Windows, Mac, Android, iOS",
            applicationCategory: "GameApplication, MultimediaApplication",
            genre:
              null === e ||
              void 0 === e ||
              null === (r = e.genre[0]) ||
              void 0 === r
                ? void 0
                : r.name,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: null === e || void 0 === e ? void 0 : e.rating,
              ratingCount:
                (null === e || void 0 === e ? void 0 : e.ratingCount) || 32455,
            },
            author: { "@type": "Organization", name: "now.gg" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          };
        Object(o.useEffect)(function () {
          Object(d.j)({
            pageId: null === e || void 0 === e ? void 0 : e.id,
            locale: I,
          });
        }, []),
          (0, Object(f.b)().setNavigationNewsArticle)(
            null === (l = e.pressReleases) || void 0 === l ? void 0 : l.data[0]
          );
        var le = Object(o.useState)(!1),
          pe = le[0],
          de = le[1];
        return Object(i.jsx)(y, {
          children: Object(i.jsxs)(p.a, {
            metaTitle: se,
            metaDescription: oe,
            breadcrumbList: ne,
            seoEnabled: K,
            ogContent: {
              ogImage:
                (null === (h = D.mobile) || void 0 === h
                  ? void 0
                  : h.ogimage) ||
                (null === (j = D.desktop) || void 0 === j ? void 0 : j.banner),
            },
            host: e.host,
            validLocales: e.meta_language,
            schemas: e.webpage_schema,
            origin: "app-details-page",
            headerLinks: e.headerLinks.menus,
            footerLinks: e.footerLinks.menus,
            children: [
              Object(i.jsxs)("div", {
                className: "apps-wrapper",
                children: [
                  Object(i.jsx)(
                    c.default,
                    O(
                      O(
                        {
                          rating: e.rating,
                          name: e.name,
                          appSlug: e.slug,
                          releaseInfo: ie,
                        },
                        D
                      ),
                      {},
                      {
                        playBtnDetails: U,
                        developers_details: H,
                        onApiLoad: function (e) {
                          return S(e);
                        },
                        moddable: Z,
                        upcoming: e.upcoming,
                        bannerCTA: e.bannerCTA
                          ? e.bannerCTA
                          : Object(d.k)("comingSoon"),
                        bluestacksSupported: ae,
                        nowgg_id: e.nowgg_id,
                      }
                    )
                  ),
                  Object(i.jsx)("div", { className: "divider" }),
                  Object(i.jsxs)("div", {
                    children: [
                      Object(i.jsxs)("div", {
                        className: "app-details container",
                        children: [
                          Object(i.jsx)("h1", {
                            className: "title",
                            children: A,
                          }),
                          Object(i.jsx)("div", {
                            className: "description",
                            dangerouslySetInnerHTML: { __html: E },
                          }),
                          e.upcoming
                            ? Object(i.jsx)(m.default, {
                                btnText: "".concat(
                                  e.preRegisterCTA
                                    ? e.preRegisterCTA
                                    : "Pre-Register for ".concat(e.name)
                                ),
                                className: "mob pre-register-btn",
                                showIcon: !1,
                                setShowLoader: de,
                              })
                            : z &&
                              Object(i.jsx)(m.default, {
                                btnText: "playInBrowser_1",
                                className: "mob btn-play-now",
                                redirectUrl: z,
                              }),
                        ],
                      }),
                      Object(i.jsx)("div", {
                        className: "container",
                        children:
                          (null === q || void 0 === q ? void 0 : q.length) >=
                            2 &&
                          Object(i.jsx)(N, {
                            games: q,
                            isPopularGames: !1,
                            genre: e.genre,
                            host: e.host,
                            releaseInfo: ie,
                            genreShortDescription: T,
                            CATEGORY_PAGE_LOCALES: x.a,
                            CN_LOCALE_MAPPING: x.b,
                          }),
                      }),
                      M &&
                        M.length >= 4 &&
                        Object(i.jsx)(w.default, {
                          games: M,
                          host: e.host,
                          description: G,
                        }),
                      Object(i.jsxs)("div", {
                        className: "container",
                        children: [
                          Object(i.jsx)(N, {
                            games: B,
                            isPopularGames: !0,
                            host: e.host,
                          }),
                          Object(i.jsx)(u.default, { faqList: J }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              Object(i.jsx)(b.a, { schemas: re }),
              Q && Object(i.jsx)(b.a, { schemas: Q }),
              Object(i.jsx)(v.default, {
                isFormOpen: pe,
                closeForm: function () {
                  de(!1);
                },
                locale: I,
                packageName: $,
                nowgg_id: ee,
              }),
            ],
          }),
        });
      }
    },
    "4l1m": function (e, t, a) {},
    LFMM: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/apps/[devSlug]/[uid]/[slug]",
        function () {
          return a("0JCS");
        },
      ]);
    },
    "Mr/I": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("nKUr"),
        n = a("kriW"),
        s = a("q1tI"),
        o = (a("hL++"), a("20a2")),
        r = a("G7qJ"),
        l = a("vOnD"),
        p = (a("k4wN"), a("xqva")),
        d = a("Ndxo"),
        c = (a("4l1m"), a("QfqV"), a("bTu8")),
        m = a("0Xqd"),
        g = a("fMrl"),
        x = a("bKGj"),
        h = a("7Qko"),
        b = l.b.section.withConfig({
          displayName: "upcoming-games__UpcomingGamesStyleWrapper",
          componentId: "sc-1nk2o71-0",
        })(
          ["", ""],
          ".games{background:linear-gradient(113.21deg, #FFEDF6 0%, #FFEDF6 .01%, #E4F7FF 60.94%, #FCFFED 100%);margin-top:48px;padding-top:48px;padding-bottom:48px}.games .header{font-weight:400;font-size:36px;line-height:150%;color:#0b0223;display:-webkit-box;margin-bottom:24px}.games .description{font-weight:400;font-size:16px;line-height:150%;color:#473E5F;margin-bottom:34px;margin-top:-8px}@media screen and (max-width: 767px){.games .description{font-size:14px}}.games .games-list{padding:4px 0px 6px 4px}.games .games-list .games-item .image-wrapper{position:relative;display:flex;width:119px;height:160px;transform:translateY(0);transition:transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out}.games .games-list .games-item .image-wrapper .swiper-lazy-preloader-transparent{--swiper-preloader-color: transparent}.games .games-list .games-item .image-wrapper .img-responsive{border-radius:8px;object-fit:fill;width:100%}.games .games-list .games-item .image-wrapper .img-responsive:not(.swiper-lazy-loaded){display:none}.games .games-list .games-item .image-wrapper .play-btn{width:100%;background:var(--primaryColor);box-shadow:0px 8px 16px rgba(0,0,0,0.1);color:var(--white);border-radius:8px;margin-top:24px;border:0;outline:none;overflow:hidden;position:absolute;bottom:0;left:0;z-index:1;max-width:100%;border-top-left-radius:0;border-top-right-radius:0;height:32px}.games .games-list .games-item .image-wrapper .play-btn .btn-text{font-weight:600;font-size:14px;line-height:150%}@media (max-width: 767px){.games .games-list .games-item .image-wrapper .play-btn{height:28px}.games .games-list .games-item .image-wrapper .play-btn .btn-text{font-size:12px}}.games .games-list .games-item .games-item-bottom{width:119px}.games .see-more-btn{height:48px;margin:73px 24px 0px 24px;font-weight:600;font-size:14px;line-height:150%;background:#FFFFFF;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;color:#FF42A5;border:1px solid #FF42A5;display:none}.games .see-more-btn:hover{background-color:#FF42A5;color:#FFFFFF}@media (max-width: 767px){.games .see-more-btn{display:flex;margin-top:50px}}.games .games-item{margin-right:40px;width:119px}.games .games-item .lazyload-container{width:100%}.games .games-item .lazyload-container .LazyLoad{width:100%;height:100%}.games .games-item .lazyload-container .LazyLoad img{width:100%;object-fit:cover;height:100%;border-radius:8px}.games .games-item:hover{cursor:pointer}.games .games-item:hover .image-wrapper{box-shadow:0px 0px 0px 2px #ffffff, 0px 0px 0px 3.5px #ff42a5;border-radius:8px}.games .games-item .games-item-bottom{justify-content:space-between;margin-top:15px;display:flex;flex-direction:column}.games .games-item .games-item-bottom .star{color:rgba(0,0,0,0.2)}.games .games-item .games-item-bottom .game-info{line-height:150%;color:#1f1637}.games .games-item .games-item-bottom .name,.games .games-item .games-item-bottom .company{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2}.games .games-item .games-item-bottom .name{font-weight:600;font-size:14px;line-height:150%}.games .games-item .games-item-bottom .company{font-weight:400;font-size:12px;line-height:150%;margin-top:4px}.games .games-item .moddable-game-label{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:4px 8px;position:absolute;z-index:2;height:28px;width:100%;background:rgba(0,0,0,0.5);backdrop-filter:blur(24px);border-radius:6px 6px 0px 0px}.games .games-item .moddable-game-label svg{margin-right:10px}.games .games-item .moddable-game-label .moddable-game-text{font-weight:normal;font-size:12px;line-height:150%;color:#ffffff}@media screen and (min-width: 768px){.games .games-list.item2{justify-content:flex-start}.games .games-list.item2 .games-item{width:350px;margin-right:39px}}@media screen and (max-width: 470px){.games .games-list a:nth-child(2) .games-item{margin-right:0}.games .games-list a:nth-child(4) .games-item{margin-right:0}}@media screen and (min-width: 953px){.games .games-list :last-child{margin-right:0}}@media screen and (max-width: 952px){.games .games-list .games-item{width:40vw;max-width:170px}}@media screen and (max-width: 767px){.games{margin-top:0px}.games .header{font-size:24px;line-height:36px;text-align:center}}\n"
        );
      t.default = function (e) {
        var t = e.games,
          a = void 0 === t ? [] : t,
          l = e.host,
          u = e.description,
          f = void 0 === u ? "<p></p>" : u;
        c.a.use([m.a, g.a]);
        var w = Object(o.useRouter)().locale;
        if (!a.length) return null;
        var v = Object(r.e)(w),
          j = function (e) {
            var t = "https://cdn.now.gg/apps-content/img/homepage/app-tile.png";
            e.target.src !== t && (e.target.src = t);
          },
          O = Object(s.useState)(7),
          y = O[0],
          N = O[1],
          _ = Object(s.useState)(),
          k = _[0],
          F = _[1];
        return (
          Object(s.useEffect)(function () {
            var e = window.navigator.userAgent;
            F(Object(h.useUserAgent)(e).isMobile);
          }, []),
          Object(s.useEffect)(function () {
            var e = screen.width;
            N(e >= 1024 ? 7 : e >= 768 ? 5 : e >= 575 ? 4 : e >= 430 ? 3 : 2);
          }, []),
          Object(i.jsx)(b, {
            children: Object(i.jsx)("section", {
              className: "games",
              children: Object(i.jsxs)("div", {
                className: "container",
                children: [
                  Object(i.jsx)("div", {
                    className: "header",
                    children: Object(i.jsx)(n.a, { id: "app.upcomingGames" }),
                  }),
                  Object(i.jsx)("div", {
                    className: "description",
                    dangerouslySetInnerHTML: { __html: "".concat(f) },
                  }),
                  Object(i.jsx)(p.a, {
                    spaceBetween: 35,
                    slidesPerView: 2,
                    lazy: !0,
                    breakpoints: {
                      345: { slidesPerView: 3, spaceBetween: 100 },
                      400: { slidesPerView: 3 },
                      500: { slidesPerView: 4, spaceBetween: 100 },
                      575: { slidesPerView: 4, spaceBetween: 25 },
                      600: { slidesPerView: 5, spaceBetween: 100 },
                      730: { slidesPerView: 5, spaceBetween: 30 },
                      890: { slidesPerView: 6, spaceBetween: 30 },
                      1024: { slidesPerView: 7 },
                    },
                    loop: y <= a.length,
                    autoplay: { delay: 3e3, disableOnInteraction: !1 },
                    modules: [m.a, g.a],
                    className: "games-list item".concat(a.length),
                    loopedSlides: 7,
                    children: a.map(function (e) {
                      var t,
                        a,
                        n = e.nowgg_id,
                        s = e.media,
                        o = void 0 === s ? {} : s,
                        r = e.name,
                        p = void 0 === r ? "" : r,
                        c = (e.rating, e.title),
                        m = void 0 === c ? "" : c,
                        g = e.slug,
                        h = e.developers_details,
                        b = void 0 === h ? {} : h,
                        u =
                          (e.moddable,
                          ""
                            .concat(l)
                            .concat(v, "/apps/")
                            .concat(b.slug, "/")
                            .concat(n, "/")
                            .concat(g, ".html"));
                      return Object(i.jsx)(d.a, {
                        children: Object(i.jsx)(i.Fragment, {
                          children: Object(i.jsxs)(
                            "a",
                            {
                              href: u,
                              className: "games-item",
                              children: [
                                Object(i.jsxs)("div", {
                                  className: "image-wrapper",
                                  children: [
                                    Object(i.jsx)("source", {
                                      media: "(max-width:768px)",
                                      srcSet:
                                        null === (t = o.mobile) || void 0 === t
                                          ? void 0
                                          : t.tile,
                                    }),
                                    Object(i.jsx)("img", {
                                      className: "img-responsive swiper-lazy",
                                      "data-src": k
                                        ? o && o.mobile && o.mobile.tile
                                          ? null === (a = o.mobile) ||
                                            void 0 === a
                                            ? void 0
                                            : a.tile
                                          : "https://cdn.now.gg/apps-content/img/homepage/app-tile.png"
                                        : o && o.desktop && o.desktop.tile
                                        ? o.desktop.tile
                                        : "https://cdn.now.gg/apps-content/img/homepage/app-tile.png",
                                      alt: m,
                                      height: "160",
                                      width: "119",
                                      onError: j,
                                    }),
                                    Object(i.jsx)("div", {
                                      className:
                                        "swiper-lazy-preloader swiper-lazy-preloader-transparent",
                                      children: Object(i.jsx)(x.a, {}),
                                    }),
                                  ],
                                }),
                                Object(i.jsx)("div", {
                                  className: "games-item-bottom flex",
                                  children: Object(i.jsxs)("div", {
                                    className: "game-info",
                                    children: [
                                      Object(i.jsx)("div", {
                                        className: "name",
                                        children: p,
                                      }),
                                      Object(i.jsx)("div", {
                                        className: "company",
                                        children:
                                          null === b || void 0 === b
                                            ? void 0
                                            : b.name,
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            n
                          ),
                        }),
                      });
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    Sktx: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("nKUr"),
        n = a("kriW"),
        s = a("vOnD").b.div.withConfig({
          displayName: "release-info__ReleaseInfoStyled",
          componentId: "sc-1139389-0",
        })(
          ["", ""],
          ".release-info .info{font-size:14px;line-height:150%;margin-right:24px;display:flex;flex-direction:column}.release-info .info .value strong{font-weight:600}.release-info .info.genre .value{text-transform:capitalize}.release-info.flex.mob{display:none}@media screen and (max-width: 767px){.release-info.flex{display:none}.release-info.flex.mob{display:flex;background:#f5f5f5}.release-info.flex.mob .info{font-size:12px;margin-right:24px;color:#473e5f;height:68px;display:flex;justify-content:center;flex-direction:column}.release-info.show-release-info{display:flex !important}.release-info.show-release-info .info{display:flex}.release-info.show-release-info .info .label{display:none}.release-info.show-release-info .info .value{margin-bottom:4px}.release-info.show-release-info .info .value strong{font-weight:400}}@media screen and (min-width: 767px){.single-info .info{display:flex}.single-info .info .label{display:none}.single-info .info .value strong{font-weight:400}}\n"
        );
      t.default = function (e) {
        var t = e.className,
          a = void 0 === t ? "" : t,
          o = e.releaseDate,
          r = void 0 === o ? "" : o,
          l = e.platform,
          p = void 0 === l ? [] : l;
        e.genre;
        return Object(i.jsx)(s, {
          children: Object(i.jsxs)("ul", {
            className: "release-info flex ".concat(a),
            children: [
              r
                ? Object(i.jsxs)("li", {
                    className: "info",
                    children: [
                      Object(i.jsx)("label", {
                        className: "label",
                        children: Object(i.jsx)(n.a, { id: "app.releaseDate" }),
                      }),
                      Object(i.jsx)("value", {
                        className: "value",
                        children: Object(i.jsx)("strong", { children: r }),
                      }),
                    ],
                  })
                : null,
              p.length
                ? Object(i.jsxs)("li", {
                    className: "info",
                    children: [
                      Object(i.jsxs)("label", {
                        className: "label",
                        children: [Object(i.jsx)(n.a, { id: "platform" }), ":"],
                      }),
                      Object(i.jsx)("value", {
                        className: "value",
                        children: Object(i.jsx)("strong", {
                          children: p.join(", "),
                        }),
                      }),
                    ],
                  })
                : null,
            ],
          }),
        });
      };
    },
    WdPs: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("nKUr"),
        n = a("q1tI"),
        s = a("mmzJ"),
        o = a("deKR"),
        r = a("ctH2");
      t.default = function (e) {
        var t = e.faqList,
          a = Object(n.useState)(null),
          l = a[0],
          p = a[1];
        return (null === t || void 0 === t ? void 0 : t.length) < 1
          ? null
          : Object(i.jsxs)(r.default, {
              children: [
                Object(i.jsx)("h2", {
                  className: "title",
                  children: Object(i.jsx)(o.a, { text: "faqs" }),
                }),
                Object(i.jsx)("div", {
                  className: "accordion-group",
                  children: t.map(function (e, t) {
                    return Object(i.jsx)(
                      s.a,
                      {
                        isOpen: t === l,
                        id: t,
                        setExpanded: function (e) {
                          return p(e);
                        },
                        header: e.que,
                        body: e.ans,
                      },
                      t
                    );
                  }),
                }),
              ],
            });
      };
    },
    ctH2: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = a("vOnD").b.div.withConfig({
        displayName: "style__FaqContainer",
        componentId: "sc-1b7vwmv-0",
      })([
        "margin-top:48px;margin-bottom:80px;@media screen and (max-width:767px){margin-bottom:48px;}.title{font-size:36px;line-height:54px;color:#0b0223;margin-bottom:16px;@media screen and (max-width:767px){font-size:24px;}}.accordion-group{.header{padding:16px 0px;}.accordion-container{border-bottom:1px solid #ebebeb;}.open{border-bottom:0px;}}.accordion-container:last-of-type{border-bottom:0px;}",
      ]);
      t.default = i;
    },
    mmzJ: function (e, t, a) {
      "use strict";
      var i = a("nKUr"),
        n = a("q1tI"),
        s = a("vOnD").b.div.withConfig({
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
          a = void 0 !== t && t,
          o = e.setExpanded,
          r = e.id,
          l = e.header,
          p = e.body,
          d = e.children,
          c = e.defaultBodyheight,
          m = e.headerItems,
          g = Object(n.useState)(a),
          x = g[0],
          h = g[1],
          b = Object(n.useRef)(null),
          u = Object(n.useState)(0),
          f = u[0],
          w = u[1];
        return (
          Object(n.useEffect)(
            function () {
              h(a), a && w("".concat(b.current.scrollHeight, "px"));
            },
            [a]
          ),
          Object(i.jsxs)(s, {
            className: "accordion-container ".concat(x ? "open" : ""),
            open: x,
            bodyHeight: f,
            defaultBodyheight: c,
            headerItems: m,
            children: [
              Object(i.jsx)("div", {
                className: "header",
                onClick: function () {
                  h(!x), w("".concat(b.current.scrollHeight, "px")), o && o(r);
                },
                children: Object(i.jsx)("span", {
                  className: "text",
                  children: l,
                }),
              }),
              Object(i.jsx)("div", {
                ref: b,
                className: "body",
                children:
                  d ||
                  Object(i.jsx)("span", {
                    className: "text",
                    dangerouslySetInnerHTML: { __html: p },
                  }),
              }),
            ],
          })
        );
      };
    },
  },
  [["LFMM", 1, 0, 10, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 14, 15, 19, 20, 21]],
]);
