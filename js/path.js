(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [82, 11],
  {
    HXcA: function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i("nKUr"),
        o = i("20a2"),
        a = i("deKR"),
        r = i("chPE"),
        s = i("q1tI"),
        l = i("G7qJ"),
        c = {
          platform: "platform",
          solutions: "solutions",
          payments: "payments",
          blog: "blog",
          news: "news",
          aboutus: "about",
          games: "games",
          "terms-and-privacy": "termsAndPrivacy",
          "copyright-dispute-policy": "copyrightDispute",
          unsubscribe: "unsubscribe",
          registration: "Registration",
          preregister: "preRegister",
          support: "support",
          nfg: "nfg",
        },
        d = function (e) {
          var t = e.breadcrumbs,
            i = e.host,
            a = Object(o.useRouter)().locale,
            r = [];
          (r = t.map(function (e, t) {
            return {
              "@type": "ListItem",
              position: t + 2,
              name: e.page,
              item: ""
                .concat(i)
                .concat(Object(l.e)(a), "/")
                .concat(e.path, ".html"),
            };
          })).unshift({
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: i + Object(l.e)(a),
          });
          var s = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: r,
          };
          return Object(n.jsx)("script", {
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: JSON.stringify(s) },
          });
        },
        p = function (e) {
          var t = e.customBreadcrumbs,
            i = void 0 === t ? null : t,
            a = e.breadcrumbList,
            r = void 0 === a ? [] : a,
            s = e.host,
            c = e.dynamicUrl,
            p = void 0 === c || c,
            f = Object(o.useRouter)(),
            m = f.pathname,
            h = f.locale,
            u = x(m, i, r, p);
          return "/_pages/home" !== m && u
            ? Object(n.jsxs)(n.Fragment, {
                children: [
                  Object(n.jsx)("div", {
                    className: "scroller",
                    children: Object(n.jsx)("ul", {
                      children: u.map(function (e, t) {
                        return Object(n.jsx)(
                          "li",
                          {
                            children:
                              t !== u.length - 1
                                ? Object(n.jsx)("a", {
                                    href: ""
                                      .concat(Object(l.e)(h), "/")
                                      .concat(e.path, ".html"),
                                    className: "breadcrumb-page",
                                    children: e.page,
                                  })
                                : Object(n.jsx)("span", { children: e.page }),
                          },
                          t
                        );
                      }),
                    }),
                  }),
                  Object(n.jsx)(d, { breadcrumbs: u, host: s }),
                ],
              })
            : null;
        },
        x = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null,
            i = arguments.length > 2 ? arguments[2] : void 0,
            n = arguments.length > 3 ? arguments[3] : void 0;
          if (i.length > 0) return "None" === i[0] ? null : i;
          var o = function () {
            var t;
            return 0 !==
              (t = (t =
                "_pages" === e.split("/")[1]
                  ? e.split("/").slice(2)
                  : e.split("/").slice(1)).map(function (e) {
                return { page: c[e] ? Object(l.k)(c[e]) : e, path: e };
              })).length
              ? t
              : ["No breadcrumb found"];
          };
          return t
            ? Object.keys(t)
                .map(function (e) {
                  var i = o();
                  return (i = i.map(function (i) {
                    return {
                      page:
                        i.page ===
                        "".concat(n ? "[".concat(e, "]") : "".concat(e))
                          ? t[e].name
                          : i.page,
                      path:
                        i.path ===
                        "".concat(n ? "[".concat(e, "]") : "".concat(e))
                          ? t[e].link
                          : i.path,
                    };
                  }));
                })
                .flat()
            : o();
        },
        f = i("pipb"),
        m = i("vOnD"),
        h = i("AATo"),
        u = i("A8lN"),
        g = i("P957"),
        b = i("JeI0"),
        y = i.n(b),
        w = i("hIrt"),
        v = m.b.div.withConfig({
          displayName: "NextLevel__Section",
          componentId: "sc-1eurid-0",
        })(
          ["", ""],
          ".next-level{max-width:1147px;margin:auto;background:linear-gradient(113.21deg, #FFEDF6 0%, #FFEDF6 .01%, #E4F7FF 60.94%, #FCFFED 100%);background-size:cover;padding:41px 48px 40px;box-shadow:inset 0px 1px 0px #f5f5f5;border-radius:12px}.next-level .container .next-level-content{font-weight:400;font-size:24px;line-height:36px;color:var(--paraColor);max-width:600px;width:100%}.next-level .container .next-level-content p.highlight{font-weight:600;font-size:36px;line-height:54px;color:#332a4b}.next-level .container .next-level-content p.highlight_2{font-weight:400;font-size:36px;line-height:150%;color:#1F1637}@media screen and (max-width: 767px){.next-level .container .next-level-content p.highlight_2{font-size:24px}}.next-level .container .next-level-content p.highlited_para{font-size:24px;line-height:150%;font-weight:400}@media screen and (max-width: 767px){.next-level .container .next-level-content p.highlited_para{font-size:16px}}@media (max-width: 767px){.next-level .container .next-level-content{text-align:center}}.next-level .container .align-center{max-width:100%;text-align:center}.next-level .container .fixed-demo-btn{max-width:280px !important;border-radius:8px !important;height:56px !important}.next-level .container .fixed-demo-btn button{width:auto !important}.next-level .container .scheduleDemoBtnRef{width:100%;max-width:382px;background:#ff43a6;border-radius:8px;align-items:center;overflow:hidden;border:none;justify-content:center}.next-level .container .scheduleDemoBtnRef .scheduleDemoBtnRefLogo{width:60px}.next-level .container .scheduleDemoBtnRef .scheduleDemoBtnRefLogo img{margin-right:0px}.next-level .container .scheduleDemoBtnRef .fixed-demo-logo{width:auto}.next-level .container .scheduleDemoBtnRef .fixed-demo-logo img{margin-right:8px !important}.next-level .container .scheduleDemoBtnRef .next-level-btn{width:auto;height:56px;padding:12px 24px 12px 0px;background:#ff43a6;border-radius:4px;font-weight:600;color:#fff;border:0;font-size:18px;line-height:150%;transition:transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;font-family:'Poppins', 'sans-serif'}.next-level .container .scheduleDemoBtnRef .next-level-btn:hover{transform:translateY(-5px)}.next-level .container .btn-wrapper .experience-btn{width:fit-content;height:56px;background:#ff42a5;padding:0 24px;color:#ffffff;font-weight:600;font-size:16px;line-height:150%;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;transition:all 0.4s ease-in-out 0s;margin-left:24px}.next-level .container .btn-wrapper .experience-btn:hover{transform:translate(0px, -3px)}.next-level .container .btn-wrapper .experience-btn .btn-text{margin-left:16px;white-space:nowrap}@media (min-width: 768px) and (max-width: 1023px){.next-level .container .btn-wrapper .experience-btn{padding:0 48px}}@media (min-width: 1024px){.next-level .container .btn-wrapper .experience-btn{padding:0 63.5px}}@media (max-width: 767px){.next-level .container .btn-wrapper{width:100%}.next-level .container .btn-wrapper .experience-btn{width:100%;margin-left:0px;justify-content:center}}@media (max-width: 767px){.next-level{background:linear-gradient(113.21deg, #FFEDF6 0%, #FFEDF6 .01%, #E4F7FF 60.94%, #FCFFED 100%);background-size:cover;padding:41px 0px 24px;padding-top:33px;border-radius:0px}.next-level .container{flex-direction:column}.next-level .container .title{margin-bottom:32px;font-weight:400;font-size:18px;line-height:150%}.next-level .container .title span{font-size:24px;line-height:31.2px}.next-level .container .btn-wrapper{margin-top:32px}}\n"
        ),
        k = function (e) {
          var t = e.onClick,
            i = e.cta,
            r = e.origin,
            s = e.show,
            l = Object(u.b)(),
            c = l.appUrl,
            d = l.openDemoModal,
            p = Object(o.useRouter)().locale;
          return s
            ? Object(n.jsx)(v, {
                children: Object(n.jsx)("section", {
                  className: "next-level",
                  children: Object(n.jsxs)("div", {
                    className: "flex container perfectCenter space-btw",
                    children: [
                      Object(n.jsx)("div", {
                        className: "next-level-content",
                        children:
                          "old" === r && "ja" === p
                            ? Object(n.jsxs)(n.Fragment, {
                                children: [
                                  Object(n.jsx)("p", {
                                    children: Object(n.jsx)(a.a, {
                                      text: "bringingMobile",
                                    }),
                                  }),
                                  Object(n.jsx)("p", {
                                    className: "highlight",
                                    children: Object(n.jsx)(a.a, {
                                      text: "nestBillion",
                                    }),
                                  }),
                                ],
                              })
                            : Object(n.jsxs)(n.Fragment, {
                                children: [
                                  Object(n.jsx)("p", {
                                    className: "highlight_2",
                                    children: Object(n.jsx)(a.a, {
                                      text: "mobileCloud",
                                    }),
                                  }),
                                  Object(n.jsx)("p", {
                                    className: "highlited_para",
                                    children: Object(n.jsx)(a.a, {
                                      text: "forGameDevelopers",
                                    }),
                                  }),
                                ],
                              }),
                      }),
                      "ja" === p
                        ? Object(n.jsxs)("div", {
                            className: "".concat(
                              i ? "fixed-demo-btn" : "",
                              " flex scheduleDemoBtnRef"
                            ),
                            onClick: t || d,
                            children: [
                              Object(n.jsx)(y.a, {
                                className: "".concat(
                                  i ? "fixed-demo-logo" : "",
                                  " scheduleDemoBtnRefLogo"
                                ),
                                children: Object(n.jsx)(w.a, {
                                  width: "56",
                                  height: "56",
                                }),
                              }),
                              Object(n.jsx)("button", {
                                className:
                                  "flex next-level-btn demoBtnNextLevel perfectCenter pointer",
                                children: Object(n.jsx)(a.a, {
                                  text: i || "joinTheRev",
                                }),
                              }),
                            ],
                          })
                        : Object(n.jsx)("div", {
                            className: "btn-wrapper",
                            children:
                              "pre-register" !== r &&
                              Object(n.jsx)(g.a, {
                                className: "flex vrtlCenter experience-btn",
                                redirectUrl: c,
                                btnText: "experienceNowGG",
                              }),
                          }),
                    ],
                  }),
                }),
              })
            : null;
        },
        j =
          (i("mmzJ"),
          function () {
            return Object(n.jsxs)("svg", {
              className: "hover-img",
              width: "47",
              height: "54",
              viewBox: "0 0 47 54",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                Object(n.jsx)("path", {
                  d: "M-1.16007 19.7715C-10.0435 20.5684 -17 28.0901 -17 37.2446C-17 46.9432 -9.21492 54.7954 0.400799 54.7954H14.9496C14.9689 54.7954 14.9689 54.7954 14.9882 54.7954C5.39173 54.7759 -2.37408 46.9237 -2.37408 37.2446L-2.37408 26.2048C-2.37408 23.9308 -1.95014 21.754 -1.16007 19.7715Z",
                  fill: "#FF42A5",
                }),
                Object(n.jsx)("path", {
                  d: "M31.1558 19.7715C31.9459 21.7734 32.3698 23.9502 32.3698 26.2243V37.264C32.3698 46.9432 24.604 54.7954 15.0076 54.8148C15.0268 54.8148 15.0268 54.8148 15.0461 54.8148H29.5949C39.2107 54.8148 46.9958 46.9626 46.9958 37.264C46.9958 28.0901 40.0393 20.5684 31.1558 19.7715Z",
                  fill: "#B3D661",
                }),
                Object(n.jsx)("path", {
                  d: "M14.9497 54.7956C14.9305 54.7956 14.9305 54.7956 14.9112 54.7956C14.9305 54.7956 14.9497 54.7956 14.9497 54.7956C14.969 54.7956 14.969 54.7956 14.9883 54.7956C14.9883 54.7956 14.969 54.7956 14.9497 54.7956ZM14.9497 8.6543C7.58859 8.6543 1.30658 13.2607 -1.23706 19.7718C-0.716771 19.7329 -0.196482 19.694 0.323808 19.694H14.8726C14.8919 19.694 14.9305 19.694 14.9497 19.694C14.969 19.694 15.0075 19.694 15.0268 19.694H29.5756C30.0959 19.694 30.6355 19.7134 31.1365 19.7718C28.6121 13.2607 22.3109 8.6543 14.9497 8.6543Z",
                  fill: "#51A5C9",
                }),
                Object(n.jsx)("path", {
                  d: "M14.8918 19.6934H0.323707C-0.196583 19.6934 -0.736142 19.7128 -1.23716 19.7711C-2.02723 21.773 -2.45117 23.9499 -2.45117 26.2239L-2.45117 37.2636C-2.45117 46.9428 5.31464 54.795 14.9111 54.8144C14.9304 54.8144 14.9304 54.8144 14.9496 54.8144C5.37245 54.7756 -2.37409 46.9234 -2.37409 37.2636C-2.37409 27.5844 5.37245 19.7517 14.9496 19.7128C14.9304 19.6934 14.9111 19.6934 14.8918 19.6934Z",
                  fill: "#4C4789",
                }),
                Object(n.jsx)("path", {
                  d: "M29.5949 19.6934H15.0461C15.0268 19.6934 14.9883 19.6934 14.969 19.6934C24.5462 19.7322 32.2927 27.5844 32.2927 37.2442C32.2927 46.9234 24.5462 54.7561 14.969 54.795C14.9883 54.795 14.9883 54.795 15.0075 54.795C24.604 54.7756 32.3698 46.9234 32.3698 37.2442V26.2045C32.3698 23.9304 31.9459 21.7536 31.1558 19.7517C30.6355 19.7128 30.1152 19.6934 29.5949 19.6934Z",
                  fill: "#398B4D",
                }),
                Object(n.jsx)("path", {
                  d: "M14.9497 19.6934C5.37251 19.7322 -2.37402 27.5844 -2.37402 37.2442C-2.37402 46.9234 5.37251 54.7561 14.9497 54.795C24.5269 54.7561 32.2734 46.9039 32.2734 37.2442C32.2927 27.5844 24.5269 19.7322 14.9497 19.6934Z",
                  fill: "#1F1637",
                }),
                Object(n.jsx)("path", {
                  d: "M14.9882 54.795C24.5984 54.795 32.389 46.9372 32.389 37.2442C32.389 27.5511 24.5984 19.6934 14.9882 19.6934C5.37801 19.6934 -2.4126 27.5511 -2.4126 37.2442C-2.4126 46.9372 5.37801 54.795 14.9882 54.795Z",
                  fill: "#1F1637",
                }),
                Object(n.jsx)("path", {
                  d: "M10.6911 36.1952C10.6911 37.7501 9.43853 39.0134 7.89693 39.0134C6.35533 39.0134 5.10278 37.7501 5.10278 36.1952C5.10278 34.6403 6.35533 33.377 7.89693 33.377C9.43853 33.377 10.6911 34.6403 10.6911 36.1952Z",
                  fill: "white",
                }),
                Object(n.jsx)("path", {
                  d: "M24.6232 37.7505H20.3838C19.6323 37.7505 19.0156 37.1285 19.0156 36.3705V36.0401C19.0156 35.2821 19.6323 34.6602 20.3838 34.6602H24.6232C25.3747 34.6602 25.9914 35.2821 25.9914 36.0401V36.3705C25.9914 37.1285 25.3747 37.7505 24.6232 37.7505Z",
                  fill: "white",
                }),
                Object(n.jsx)("path", {
                  d: "M10.7294 36.2343C10.7294 37.7891 9.47686 39.0525 7.93526 39.0525C6.39366 39.0525 5.14111 37.7891 5.14111 36.2343C5.14111 34.6794 6.39366 33.416 7.93526 33.416C9.47686 33.416 10.7294 34.6794 10.7294 36.2343Z",
                  fill: "white",
                }),
                Object(n.jsx)("path", {
                  d: "M24.6422 37.7896H20.4028C19.6513 37.7896 19.0347 37.1676 19.0347 36.4096V36.0792C19.0347 35.3212 19.6513 34.6992 20.4028 34.6992H24.6422C25.3938 34.6992 26.0104 35.3212 26.0104 36.0792V36.4096C26.0104 37.1676 25.413 37.7896 24.6422 37.7896Z",
                  fill: "white",
                }),
              ],
            });
          }),
        C = function () {
          return Object(n.jsxs)("svg", {
            className: "hover-img",
            width: "48",
            height: "53",
            viewBox: "0 0 48 53",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              Object(n.jsx)("path", {
                d: "M15.8399 19.7715C6.95647 20.5684 0 28.0901 0 37.2446C0 46.9432 7.78508 54.7954 17.4008 54.7954H31.9496C31.9689 54.7954 31.9689 54.7954 31.9882 54.7954C22.3917 54.7759 14.6259 46.9237 14.6259 37.2446L14.6259 26.2048C14.6259 23.9308 15.0499 21.754 15.8399 19.7715Z",
                fill: "#FF42A5",
              }),
              Object(n.jsx)("path", {
                d: "M48.1558 19.7715C48.9459 21.7734 49.3698 23.9502 49.3698 26.2243V37.264C49.3698 46.9432 41.604 54.7954 32.0076 54.8148C32.0268 54.8148 32.0268 54.8148 32.0461 54.8148H46.5949C56.2107 54.8148 63.9958 46.9626 63.9958 37.264C63.9958 28.0901 57.0393 20.5684 48.1558 19.7715Z",
                fill: "#B3D661",
              }),
              Object(n.jsx)("path", {
                d: "M31.9497 54.7956C31.9305 54.7956 31.9305 54.7956 31.9112 54.7956C31.9305 54.7956 31.9497 54.7956 31.9497 54.7956C31.969 54.7956 31.969 54.7956 31.9883 54.7956C31.9883 54.7956 31.969 54.7956 31.9497 54.7956ZM31.9497 8.6543C24.5886 8.6543 18.3066 13.2607 15.7629 19.7718C16.2832 19.7329 16.8035 19.694 17.3238 19.694H31.8726C31.8919 19.694 31.9305 19.694 31.9497 19.694C31.969 19.694 32.0075 19.694 32.0268 19.694H46.5756C47.0959 19.694 47.6355 19.7134 48.1365 19.7718C45.6121 13.2607 39.3109 8.6543 31.9497 8.6543Z",
                fill: "#51A5C9",
              }),
              Object(n.jsx)("path", {
                d: "M31.8918 19.6934H17.3237C16.8034 19.6934 16.2639 19.7128 15.7628 19.7711C14.9728 21.773 14.5488 23.9499 14.5488 26.2239L14.5488 37.2636C14.5488 46.9428 22.3146 54.795 31.9111 54.8144C31.9304 54.8144 31.9304 54.8144 31.9496 54.8144C22.3724 54.7756 14.6259 46.9234 14.6259 37.2636C14.6259 27.5844 22.3724 19.7517 31.9496 19.7128C31.9304 19.6934 31.9111 19.6934 31.8918 19.6934Z",
                fill: "#4C4789",
              }),
              Object(n.jsx)("path", {
                d: "M46.5949 19.6934H32.0461C32.0268 19.6934 31.9883 19.6934 31.969 19.6934C41.5462 19.7322 49.2927 27.5844 49.2927 37.2442C49.2927 46.9234 41.5462 54.7561 31.969 54.795C31.9883 54.795 31.9883 54.795 32.0075 54.795C41.604 54.7756 49.3698 46.9234 49.3698 37.2442V26.2045C49.3698 23.9304 48.9459 21.7536 48.1558 19.7517C47.6355 19.7128 47.1152 19.6934 46.5949 19.6934Z",
                fill: "#398B4D",
              }),
              Object(n.jsx)("path", {
                d: "M31.9497 19.6934C22.3725 19.7322 14.626 27.5844 14.626 37.2442C14.626 46.9234 22.3725 54.7561 31.9497 54.795C41.5269 54.7561 49.2734 46.9039 49.2734 37.2442C49.2927 27.5844 41.5269 19.7322 31.9497 19.6934Z",
                fill: "#1F1637",
              }),
              Object(n.jsx)("path", {
                d: "M31.9882 54.795C41.5984 54.795 49.389 46.9372 49.389 37.2442C49.389 27.5511 41.5984 19.6934 31.9882 19.6934C22.378 19.6934 14.5874 27.5511 14.5874 37.2442C14.5874 46.9372 22.378 54.795 31.9882 54.795Z",
                fill: "#1F1637",
              }),
              Object(n.jsx)("path", {
                d: "M27.6911 36.1952C27.6911 37.7501 26.4385 39.0134 24.8969 39.0134C23.3553 39.0134 22.1028 37.7501 22.1028 36.1952C22.1028 34.6403 23.3553 33.377 24.8969 33.377C26.4385 33.377 27.6911 34.6403 27.6911 36.1952Z",
                fill: "white",
              }),
              Object(n.jsx)("path", {
                d: "M41.6232 37.7505H37.3838C36.6323 37.7505 36.0156 37.1285 36.0156 36.3705V36.0401C36.0156 35.2821 36.6323 34.6602 37.3838 34.6602H41.6232C42.3747 34.6602 42.9914 35.2821 42.9914 36.0401V36.3705C42.9914 37.1285 42.3747 37.7505 41.6232 37.7505Z",
                fill: "white",
              }),
              Object(n.jsx)("path", {
                d: "M27.7294 36.2343C27.7294 37.7891 26.4769 39.0525 24.9353 39.0525C23.3937 39.0525 22.1411 37.7891 22.1411 36.2343C22.1411 34.6794 23.3937 33.416 24.9353 33.416C26.4769 33.416 27.7294 34.6794 27.7294 36.2343Z",
                fill: "white",
              }),
              Object(n.jsx)("path", {
                d: "M41.6422 37.7896H37.4028C36.6513 37.7896 36.0347 37.1676 36.0347 36.4096V36.0792C36.0347 35.3212 36.6513 34.6992 37.4028 34.6992H41.6422C42.3938 34.6992 43.0104 35.3212 43.0104 36.0792V36.4096C43.0104 37.1676 42.413 37.7896 41.6422 37.7896Z",
                fill: "white",
              }),
            ],
          });
        },
        F = m.b.section.withConfig({
          displayName: "style__FooterHelperStyled",
          componentId: "sc-ihp9yw-0",
        })([
          '.footer-container{display:flex;flex-wrap:wrap;padding-bottom:24px;margin-bottom:28px;justify-content:space-between !important;border-bottom:1px solid #EEEDF0;.linkdin-2{background-position:-40px 0px !important;}.snapchat-2{background-position:0px 0px !important;}.twitter-2{background-position:32px 0px !important;}.social-icons-2{display:flex;position:absolute;top:45px;right:0px;.icon-2{background:url(https://cms-cdn.now.gg/cms-media/2022/04/sprite-image.png);background-size:cover;width:32px;height:32px;}@media screen and (max-width:1200px){right:24px;}@media screen and (max-width:768px){position:unset;margin-top:45px;}width:calc(32px * 3 + 10px * 2);justify-content:space-between;}.cursor{cursor:pointer}@media screen and (max-width:768px){padding-bottom:32px;display:block;.logos-alt{margin-top:35px;display:flex;background:url("https://cms-cdn.now.gg/cms-media/2022/04/sprite-image.png") 0 0;background-size:cover;background-position:center;width:112px;height:32px;justify-content:space-between;}}.footer-left{display:flex;flex-wrap:wrap;flex-direction:column;height:calc(261px + 32px);min-width:64%;@media screen and (max-width:1092px){height:auto;min-width:58%;padding-left:24px;margin-top:15px;}@media screen and (max-width:964px){min-width:52%;}@media screen and (max-width:850px){min-width:46.5%;}@media screen and (max-width:768px){padding-left:0px;}.quater-height{height:22px;@media screen and (max-width:1090px){height:auto;}.arrow{@media screen and (min-width:1090px){display:none}margin-left:5px;margin-right:20px;height:12px;width:12px;color:var(--paraColor);transform:rotate(-90deg);@media screen and (max-width:767px){margin-right:6px;}&:before{background-color:var(--paraColor);bottom:1px;content:\'\';height:9px;position:absolute;right:2px;transform-origin:bottom;width:1px;-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);transform:rotate(-45deg);}&:after{border-bottom-style:solid;border-bottom-width:1px;border-right-style:solid;border-right-width:1px;content:\'\';display:inline-block;height:6px;left:3px;position:absolute;top:5px;width:6px;}}}.half-height{height:116px;@media screen and (max-width:1090px){height:auto;}}.full-height{height:270px;@media screen and (max-width:1090px){height:auto;}}.section{.justify-content-between{justify-content:space-between;}.pink-color{@media screen and (max-width:1090px){color:rgb(255,51,158) !important;&::after{transform:rotate(-135deg) translateY(50%) !important;}}}.display-none{@media screen and (max-width:1090px){display:none !important;}}margin-bottom:24px;width:168px;display:flex;flex-direction:column;white-space:nowrap;overflow-y:hidden;@media screen and (max-width:1092px){width:100%;overflow-y:unset;margin-bottom:0px;}.sub-title-link{width:min-content;margin-bottom:5px;@media screen and (max-width:1090px){position:relative;background-color:rgb(245,245,245);opacity:1;transition:opacity 0.4s ease-in 0s;font-size:14px;color:rgb(71,62,95);margin-bottom:0px;padding:14px 24px 13px 24px;height:48px;left:-24px;width:calc(100% + 24px);border-radius:0px;}@media screen and (max-width:767px){width:100vw;position:relative;left:-16px;background-color:rgb(245,245,245);opacity:1;transition:opacity 0.4s ease-in 0s;font-size:14px;color:rgb(71,62,95);margin-bottom:0px;padding:14px 24px 13px 16px;height:48px;}}.title-anchor{width:min-content;white-space:nowrap;@media screen and (max-width:1092px){width:100%;}}.title{font-weight:600;font-size:14px;color:#1F1637;margin-bottom:16px !important;line-height:21px;margin-bottom:4px;&:hover{text-decoration:underline;}@media screen and (max-width:1092px){&:hover{text-decoration:none;}height:48px;margin-bottom:0px !important;-webkit-box-align:center;align-items:center;display:flex;}}.title-2{font-weight:600;font-size:14px;color:#1F1637;margin-bottom:16px !important;line-height:21px;margin-bottom:4px;@media screen and (max-width:1092px){cursor:pointer;height:48px;align-items:center;display:flex;justify-content:space-between;padding-right:24px;&::after{margin-left:5px;content:"";border-style:solid;border-color:initial;border-image:initial;border-width:0px 1px 1px 0px;display:inline-block;padding:3px;transform:rotate(45deg) translateY(-50%);transition:all 0.2s ease-in-out 0s;}margin-bottom:0px !important;-webkit-box-align:center;}@media screen and (max-width:767px){padding-right:10px;}}.sub-title{font-weight:400;font-size:14px;color:#473E5F;line-height:21px;&:hover{color:#1F1637;text-decoration:underline;}}.sub-title-2{font-weight:400;font-size:14px;color:#473E5F;line-height:21px;}.sub-heading-web{font-weight:600;font-size:14px;color:#1F1637;line-height:21px;}}}.footer-left-ja{width:100%;flex-direction:row;justify-content:space-between;height:auto;@media screen and (min-width:768px){.quater-height{height:22px;.arrow{display:none;}}.half-height{height:116px;}.full-height{height:270px;}.section{margin-bottom:24px;width:168px;display:flex;flex-direction:column;white-space:nowrap;overflow-y:hidden;.title-2{display:block;&::after{display:none;}}.sub-title-link{position:unset;background-color:unset;padding:0px;}.display-none{display:block !important;}.pink-color{color:rgb(31,22,55);}}}.section{@media screen and (max-width:767px){.sub-title-link{width:100vw;left:-16px;padding-left:16px;}}}}.footer-right{.banner-1{background-repeat:no-repeat;background-position:bottom;background-size:cover !important;background:url("https://cms-cdn.now.gg/cms-media/2022/04/Peep-Art.png");}.banner-2{height:258px;background:url("https://cms-cdn.now.gg/cms-media/2022/04/Peep-Art-1.png");}.banner-common{width:361px;border-radius:12px;border:1px solid rgba(255,66,165,0.1);padding:25px 24px 24px 24px;margin:auto;}@media screen and (max-width:1092px){.banner-common{margin-top:15px;margin-left:24px;}}@media screen and (max-width:768px){.banner-common{margin:auto;margin-top:35px;}}.r-heading{font-weight:400;font-size:24px;line-height:36px;margin-bottom:24px;}.r-div{width:100%;height:36px;border:1px solid #FF42A5;color:#FF42A5;border-radius:6px;box-shadow:0px 8px 16px rgba(0,0,0,0.1);display:flex;justify-content:center;align-items:center;transition:all 0.4s ease-in-out 0s;&:hover{background:#FF42A5;color:#FFFFFF;.r-button{color:#FFFFFF;}}}.r-button{font-weight:600;font-size:14px;line-height:21px;width:100%;color:#FF42A5;text-align:center;transition:all 0.4s ease-in-out 0s;height:100%;display:flex;justify-content:center;align-items:center;}.r-input{background:#FFFFFF;border:1px solid #EEEDF0;box-sizing:border-box;box-shadow:0px 2px 8px rgb(0 0 0 / 4%);border-radius:6px;padding:7.5px 12px;margin-bottom:24px;width:100%;font-weight:400;font-size:14px;line-height:150%;}.hover-img-1{display:none;}.hover-img-2{display:none;}.hover-img{display:none;}.banner-2{&:hover{.hover-img-1{display:flex;justify-content:start;position:relative;left:-25px;bottom:-20px;transition:1s ease-out;}.hover-img-2{display:flex;justify-content:end;position:relative;right:-25px;bottom:-21px;transition:1s ease-out;}.hover-img{display:block;border-radius:12px;transition:1s ease-out;}.r-input{border:1px solid #FF42A5;transition:0.3s ease-out;}}}@media screen and (max-width:393px){.banner-common{width:auto;}.r-heading{font-size:22px;}.r-button{font-size:12px;}}@media screen and (max-width:346px){.r-heading{font-size:20px;}}@media screen and (max-width:323px){.r-heading{font-size:18px;}}}}',
        ]),
        O = function (e) {
          var t = e.footerItems,
            i = e.bannerType,
            r = e.openContactUs,
            c = Object(s.useState)(null),
            d = c[0],
            p = c[1],
            x = Object(s.useState)(0),
            f = x[0],
            m = x[1],
            h = Object(s.useState)(""),
            u = h[0],
            g = h[1],
            b = Object(o.useRouter)().locale,
            y = function (e) {
              if (!(window.innerWidth > 1090)) {
                e.preventDefault();
                var t = e.target.id,
                  i = d;
                if (null !== i) {
                  document.getElementById(i).classList.remove("pink-color");
                  var n = document.getElementsByClassName(i);
                  Array.from(n).forEach(function (e) {
                    e.classList.add("display-none");
                  });
                }
                if (t !== i) {
                  p(t), document.getElementById(t).classList.add("pink-color");
                  var o = document.getElementsByClassName(t);
                  Array.from(o).forEach(function (e) {
                    e.classList.remove("display-none");
                  });
                } else p(null);
              }
            };
          return Object(n.jsx)(F, {
            children: Object(n.jsxs)("div", {
              className: "footer-container",
              children: [
                Object(n.jsx)("div", {
                  className: "footer-left ".concat(
                    "ja" === b && "footer-left-ja"
                  ),
                  children:
                    t &&
                    t.map(function (e, t) {
                      var i =
                        e.sub_items &&
                        e.sub_items.map(function (t, i) {
                          return Object(n.jsx)("a", {
                            className: "sub-title-link display-none ".concat(
                              e.slug
                            ),
                            href: t.url
                              ? t.url.includes("http")
                                ? t.url
                                : Object(l.e)(b) + t.url
                              : "",
                            target: t.open_in_new_tab ? "_blank" : "_self",
                            rel: t.open_in_new_tab ? "noopener noreferrer" : "",
                            children: Object(n.jsx)("span", {
                              className: t.url
                                ? "sub-title ".concat(t.class ? t.class : "")
                                : "sub-title-2 ".concat(t.class ? t.class : ""),
                              children: t.title,
                            }),
                          });
                        });
                      return Object(n.jsx)(n.Fragment, {
                        children:
                          i.length >= 4
                            ? Object(n.jsxs)("div", {
                                className: "section full-height",
                                children: [
                                  e.url
                                    ? Object(n.jsx)("a", {
                                        id: e.slug,
                                        className: "title-anchor title ".concat(
                                          e.class
                                        ),
                                        href: e.url.includes("http")
                                          ? e.url
                                          : Object(l.e)(b) + e.url,
                                        target: e.open_in_new_tab
                                          ? "_blank"
                                          : "_self",
                                        rel: e.open_in_new_tab
                                          ? "noopener noreferrer"
                                          : "",
                                        children: e.menu_item,
                                      })
                                    : Object(n.jsx)("h2", {
                                        onClick: function (e) {
                                          return y(e);
                                        },
                                        id: e.slug,
                                        className: "title-2 ".concat(e.class),
                                        children: e.menu_item,
                                      }),
                                  i.length > 8 ? i.slice(0, 8) : i,
                                ],
                              })
                            : i && 0 != i.length
                            ? Object(n.jsxs)("div", {
                                className: "section half-height",
                                children: [
                                  e.url
                                    ? Object(n.jsx)("a", {
                                        id: e.slug,
                                        className: "title-anchor title ".concat(
                                          e.class
                                        ),
                                        href: e.url.includes("http")
                                          ? e.url
                                          : Object(l.e)(b) + e.url,
                                        target: e.open_in_new_tab
                                          ? "_blank"
                                          : "_self",
                                        rel: e.open_in_new_tab
                                          ? "noopener noreferrer"
                                          : "",
                                        children: e.menu_item,
                                      })
                                    : Object(n.jsx)("h2", {
                                        onClick: function (e) {
                                          return y(e);
                                        },
                                        id: e.slug,
                                        className: "title-2 ".concat(e.class),
                                        children: e.menu_item,
                                      }),
                                  i,
                                ],
                              })
                            : Object(n.jsx)("div", {
                                className: "section quater-height",
                                children: e.url
                                  ? Object(n.jsxs)("a", {
                                      id: e.slug,
                                      className:
                                        "title-anchor title flex justify-content-between ".concat(
                                          e.class
                                        ),
                                      href: e.url.includes("http")
                                        ? e.url
                                        : Object(l.e)(b) + e.url,
                                      target: e.open_in_new_tab
                                        ? "_blank"
                                        : "_self",
                                      rel: e.open_in_new_tab
                                        ? "noopener noreferrer"
                                        : "",
                                      children: [
                                        e.menu_item,
                                        Object(n.jsx)("span", {
                                          className: "arrow",
                                        }),
                                      ],
                                    })
                                  : Object(n.jsxs)("h2", {
                                      id: e.slug,
                                      className:
                                        "contact-us" === e.class
                                          ? "title cursor flex justify-content-between ".concat(
                                              e.class
                                            )
                                          : "title-2 ".concat(e.class),
                                      onClick:
                                        "contact-us" === e.class ? r : null,
                                      children: [
                                        e.menu_item,
                                        "contact-us" === e.class &&
                                          Object(n.jsx)("span", {
                                            className: "arrow",
                                          }),
                                      ],
                                    }),
                              }),
                      });
                    }),
                }),
                Object(n.jsxs)("div", {
                  className: "flex perfectCenter social-icons-2",
                  children: [
                    Object(n.jsx)("a", {
                      href: "https://www.linkedin.com/company/nowgginc",
                      target: "_blank",
                      rel: "noopener",
                      className: "icon-2 linkdin-2",
                    }),
                    Object(n.jsx)("a", {
                      href: "https://www.snapchat.com/add/nowgginc",
                      target: "_blank",
                      rel: "noopener",
                      className: "icon-2 snapchat-2",
                    }),
                    Object(n.jsx)("a", {
                      href: "https://twitter.com/nowgginc",
                      target: "_blank",
                      rel: "noopener",
                      className: "icon-2 twitter-2",
                    }),
                  ],
                }),
                "ja" !== b &&
                  Object(n.jsx)("div", {
                    className: "footer-right",
                    onMouseEnter: function () {
                      m(f + 1);
                    },
                    children:
                      1 == i
                        ? Object(n.jsxs)("div", {
                            className: "banner-1 banner-common",
                            children: [
                              Object(n.jsx)("h2", {
                                className: "r-heading",
                                children: Object(n.jsx)(a.a, {
                                  text: "joindeveloper",
                                }),
                              }),
                              Object(n.jsx)("div", {
                                className: "r-div",
                                children: Object(n.jsx)("a", {
                                  href:
                                    "https://dev.now.gg" +
                                    "".concat("en" !== b ? "/" + b : "") +
                                    "/?utm_source=now.gg&utm_campaign=navigation&utm_medium=main-site",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "r-button",
                                  children: Object(n.jsx)(a.a, {
                                    text: "registerbutton",
                                  }),
                                }),
                              }),
                            ],
                          })
                        : Object(n.jsxs)("div", {
                            className: "banner-2 banner-common",
                            children: [
                              Object(n.jsx)("h2", {
                                className: "r-heading",
                                children:
                                  "Get regular blog updates to your inbox",
                              }),
                              Object(n.jsx)("input", {
                                className: "r-input",
                                type: "email",
                                placeholder: "Enter your email here",
                                onChange: function (e) {
                                  return g(e.target.value);
                                },
                              }),
                              "" !== u &&
                                Object(n.jsx)("div", {
                                  className: "r-div",
                                  children: Object(n.jsx)("a", {
                                    className: "r-button",
                                    children: "Subscribe",
                                  }),
                                }),
                              "" === u &&
                                (f % 2 === 0
                                  ? Object(n.jsx)("div", {
                                      className: "hover-img-1",
                                      children: Object(n.jsx)(j, {}),
                                    })
                                  : Object(n.jsx)("div", {
                                      className: "hover-img-2",
                                      children: Object(n.jsx)(C, {}),
                                    })),
                            ],
                          }),
                  }),
              ],
            }),
          });
        },
        U =
          (i("s+lh"),
          i("v1EE"),
          m.b.div.withConfig({
            displayName: "Footer__FooterStyle",
            componentId: "sc-1rki6vl-0",
          })(
            ["", " ", ""],
            ".footer-section{background:radial-gradient(100% 100% at 50% 0%, rgba(254,66,165,0) 52.6%, rgba(255,66,165,0.05) 100%)}@media (max-width: 767px){.footer-section{padding-top:35px;padding-bottom:0}}.footer-section .container{padding:50px 0px 24px 0px;margin:0 auto}.footer-section .container .social-logos{margin-bottom:50px}@media screen and (max-width: 1092px){.footer-section .container .social-logos{margin-bottom:20px}}@media (max-width: 768px){.footer-section .container .social-logos{margin-bottom:35px;flex-direction:column;align-items:flex-start}}.footer-section .container .social-logos .breadcrumb{display:flex;flex-direction:row;align-items:center;width:82%}@media (max-width: 1065px){.footer-section .container .social-logos .breadcrumb{width:78%}}@media (max-width: 768px){.footer-section .container .social-logos .breadcrumb{align-items:flex-start;width:100%}}.footer-section .container .social-logos .breadcrumb .scroller{overflow-x:auto;margin-top:-4px}@media (max-width: 768px){.footer-section .container .social-logos .breadcrumb .scroller{width:100%;overflow-x:auto;margin-top:2px}}.footer-section .container .social-logos .breadcrumb .scroller .breadcrumb-page{color:#000000}.footer-section .container .social-logos .breadcrumb ul{display:inline-flex;height:auto;align-items:center;list-style:none;width:max-content}@media (max-width: 768px){.footer-section .container .social-logos .breadcrumb ul{margin-bottom:16px;height:23.08px}}.footer-section .container .social-logos .breadcrumb ul li{display:flex;align-items:center;height:auto;color:var(--hpTitleColor);padding-right:12px}.footer-section .container .social-logos .breadcrumb ul li::before{content:'>';padding-right:12px;color:#5b5273;font-weight:400;font-size:20px;padding-left:0px}.footer-section .container .social-logos .breadcrumb ul li::before:first-child{padding:0px}.footer-section .container .social-logos .breadcrumb ul li:last-child{color:#797091}.footer-section .container .social-logos .breadcrumb ul li:first-child a{color:var(--hpTitleColor)}.footer-section .container .social-logos .breadcrumb ul li a{font-size:12px;font-weight:400}.footer-section .container .social-logos .breadcrumb ul li a:active,.footer-section .container .social-logos .breadcrumb ul li a:visited{color:var(--hpTitleColor)}.footer-section .container .social-logos .breadcrumb ul li span{font-size:12px;font-weight:400}.footer-section .container .footer-logo{display:block;padding-right:15px}.footer-section .container .footer-logo img{width:32.74px;height:23.74px}@media (max-width: 768px){.footer-section .container .footer-logo{margin-bottom:16px;min-width:38px}.footer-section .container .footer-logo img{width:32px;height:23.08px}.footer-section .container .footer-logo svg{width:66px;height:48px}}.footer-section .container .footer-list{flex-wrap:wrap}.footer-section .container .footer-list li{margin-bottom:20px;white-space:nowrap}@media (max-width: 767px){.footer-section .container .footer-list li{white-space:unset}}.footer-section .container .footer-list li a{color:var(--hpTitleColor);font-size:12px;line-height:1.4}@media (min-width: 768px){.footer-section .container .footer-list{display:flex}.footer-section .container .footer-list li{margin-bottom:16px}.footer-section .container .footer-list li:not(:last-child){margin-right:24px}.footer-section .container .footer-list li a:hover{text-decoration:underline}}@media (max-width: 768px){.footer-section .container .footer-list{display:flex;justify-content:left}.footer-section .container .footer-list li{margin-bottom:16px}.footer-section .container .footer-list li:not(:last-child){margin-right:24px}}@media (max-width: 768px) and (max-width: 415px){.footer-section .container .footer-list li:not(:last-child){margin-right:16px}}@media (max-width: 768px){.footer-section .container .footer-list li a:hover{text-decoration:underline}}.footer-section .container .footer-list #contact-us-modal{cursor:pointer;color:var(--hpTitleColor);font-size:12px;line-height:1.4;margin-top:3px}.footer-section .container .footer-list #contact-us-modal:hover{text-decoration:underline}.footer-section .container .copyright{color:#8d84a5;font-size:12px;line-height:18px;margin-bottom:22px}@media (min-width: 768px){.footer-section .container .copyright{margin-bottom:0}}@media (max-width: 768px){.footer-section .container .copyright{width:70%}}.footer-section .container .agreement{font-size:13px;line-height:17px;color:#8d84a5;margin-bottom:16px}.footer-section .container .agreement a{color:#0091ff}.footer-section .container.footer-pad{position:relative}@media (max-width: 1200px) and (min-width: 768px){.footer-section .container.footer-pad{padding:50px 24px 24px 24px !important;margin:auto}}@media (max-width: 1200px){.footer-section .container{margin-left:0}}@media (max-width: 767px){.footer-section .container{margin-left:0}}.footer-section .footer-strip{width:100%;background-color:#071036;padding:16px 0 15px 0;font-size:14px;line-height:150%;color:#fff}.footer-section .footer-strip .container{padding:0}@media (max-width: 1200px){.footer-section .footer-strip .container{padding-left:24px}}@media (max-width: 767px){.footer-section .footer-strip .container{padding-left:0;margin-left:0;display:flex;align-items:center;justify-content:center}}.footer-section .footer-strip span{color:var(--primaryColor)}.contact-us .modal-body .contact-heading{width:100%;margin-bottom:10px}.contact-us .modal-body .contact-heading h2{font-weight:bold;font-size:24px;line-height:140%;color:var(--hpTitleColor)}.contact-us .modal-body .contact-para{font-size:18px;line-height:150%;color:var(--contactusParaColor);padding-bottom:20px;max-width:454px}.contact-us .modal-body .contact-para a{color:#0397eb}.contact-us .modal-body .contact-close-btn{background:var(--primaryColor);box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:4px;padding:11.5px 24px;width:100%;height:56px;border:0;color:#fff;font-weight:600;font-size:18px;line-height:150%;font-family:'Poppins', sans-serif}\n",
            function (e) {
              return (
                e.gdprFooterBar &&
                ".footer-section {\n    padding-bottom: 20px;\n}"
              );
            }
          ));
      t.default = function (e) {
        var t = e.customBreadcrumbs,
          i = e.dynamicUrl,
          c = e.breadcrumbList,
          d = e.host,
          x = e.showLanguages,
          m = e.validLocales,
          g = e.nextLevel,
          b = e.showNextLevel,
          y = e.footerItems,
          w = e.bannerType,
          v =
            (Object(u.b)().support_article_lang, Object(o.useRouter)().locale),
          j = Object(s.useState)(!1),
          C = j[0],
          F = j[1],
          E = function () {
            return F(!1);
          },
          A = Object(s.useState)(!1),
          z = A[0],
          B = A[1],
          N = function (e) {
            return ("terms-and-privacy.html#terms" !== e.link &&
              "terms-and-privacy.html#eu-privacy" !== e.link) ||
              h.g.includes(v)
              ? "".concat(Object(l.e)(v), "/").concat(e.link)
              : "/".concat(e.link);
          };
        return (
          Object(s.useEffect)(function () {
            Object(l.c)("euconsent-v2") && B(!0);
          }, []),
          Object(n.jsxs)(U, {
            gdprFooterBar: z,
            children: [
              Object(n.jsx)(k, { origin: g, show: b }),
              Object(n.jsx)("footer", {
                className: "flex footer-section column",
                children: Object(n.jsxs)("div", {
                  className: "container footer-pad",
                  children: [
                    Object(n.jsx)("div", {
                      className: "flex social-logos vrtlCenter space-btw",
                      children: Object(n.jsxs)("div", {
                        className: "breadcrumb",
                        children: [
                          Object(n.jsx)("a", {
                            href: "".concat(
                              "" !== Object(l.e)(v) ? Object(l.e)(v) : "/"
                            ),
                            className: "flex footer-logo vrtlCenter",
                            children: Object(n.jsx)("img", {
                              className: "lazyload",
                              alt: "now.gg logo",
                              "data-src":
                                "https://cdn.now.gg/apps-content/img/homepage/nowgg-footer-logo.png",
                              width: "44",
                              height: "32",
                            }),
                          }),
                          Object(n.jsx)(p, {
                            customBreadcrumbs: t,
                            dynamicUrl: i,
                            breadcrumbList: c,
                            host: d,
                          }),
                        ],
                      }),
                    }),
                    Object(n.jsx)(O, {
                      footerItems: y,
                      bannerType: w,
                      openContactUs: function () {
                        return F(!0);
                      },
                    }),
                    Object(n.jsx)("ul", {
                      className: "footer-list",
                      children: [
                        {
                          text: "termsAndPrivacy",
                          link: "terms-and-privacy.html#terms",
                        },
                        {
                          text: "copyrightDispute",
                          link: "copyright-dispute-policy.html",
                        },
                        {
                          text: "euPrivacy",
                          link: "terms-and-privacy.html#eu-privacy",
                        },
                        {
                          text: "\u7279\u5b9a\u5546\u53d6\u5f15\u6cd5\u306b\u57fa\u3065\u304f\u8868\u793a",
                          link: "terms-and-privacy.html#terms_ja",
                          validLocales: ["ja"],
                        },
                      ].map(function (e, t) {
                        var i;
                        return (
                          (!e.validLocales ||
                            (null === (i = e.validLocales) || void 0 === i
                              ? void 0
                              : i.includes(v))) &&
                          Object(n.jsx)("li", {
                            children: Object(n.jsx)("a", {
                              href: N(e),
                              children: Object(n.jsx)(a.a, { text: e.text }),
                            }),
                          })
                        );
                      }),
                    }),
                    Object(n.jsxs)("div", {
                      className: "copyright-locale flex space-btw",
                      children: [
                        Object(n.jsx)("p", {
                          className: "copyright",
                          children: Object(n.jsx)(a.a, {
                            text: "copyrightText",
                          }),
                        }),
                        x &&
                          Object(n.jsx)(f.default, {
                            origin: "footer",
                            validLocales: m,
                          }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(n.jsxs)(r.a, {
                className: "contact-us",
                open: C,
                onClose: E,
                children: [
                  Object(n.jsx)("div", {
                    className: "flex contact-heading perfectCenter space-btw",
                    children: Object(n.jsx)("h2", {
                      children: Object(n.jsx)(a.a, { text: "contactUs" }),
                    }),
                  }),
                  Object(n.jsxs)("p", {
                    className: "contact-para",
                    children: [
                      Object(n.jsx)(a.a, { text: "contactUsPara" }),
                      " ",
                      Object(n.jsx)("a", {
                        href: "mailto:support@now.gg",
                        children: "support@now.gg",
                      }),
                    ],
                  }),
                  Object(n.jsx)("button", {
                    onClick: E,
                    className: "contact-close-btn contact-cross-btns",
                    children: Object(n.jsx)(a.a, { text: "close" }),
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    P957: function (e, t, i) {
      "use strict";
      var n = i("nKUr"),
        o = i("kriW"),
        a = i("20a2"),
        r = i("vOnD"),
        s = i("S6dy"),
        l = i("hIrt"),
        c = i("G7qJ"),
        d = r.b.button.withConfig({
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
          p = void 0 === s || s,
          x = e.redirectUrl,
          f = void 0 === x ? "" : x,
          m = e.children,
          h = e.origin,
          u = Object(a.useRouter)().locale;
        return f || "header" === h
          ? Object(n.jsxs)(d, {
              onClick: function () {
                if (!f) return null;
                Object(c.g)(f);
              },
              className: "play-btn flex perfectCenter ".concat(
                r,
                " experience-btn"
              ),
              lang: u,
              redirectUrl: f,
              children: [
                m,
                p && Object(n.jsx)(l.a, { width: "44", height: "44" }),
                Object(n.jsx)("span", {
                  className: "btn-text",
                  children: Object(n.jsx)(o.a, { id: t }),
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
    chPE: function (e, t, i) {
      "use strict";
      var n = i("nKUr"),
        o = i("vOnD").b.div.withConfig({
          displayName: "Modal__ModalStyleWrapper",
          componentId: "sc-iffdj2-0",
        })(
          ["", ""],
          ":root{--white: #ffffff;--black: #000000;--primaryColor: #ff43a6;--paraColor: #473e5f;--titlecolor: #0b0223;--hpTitleColor: #1f1637;--termsTitleColor: #5b5273;--partnerParaColor: #8d84a5;--contactusParaColor: #797091;--hoverPrimary: #ff339e;--borderColor: #ebebeb;--lightParaColor: #a198b9}*{box-sizing:border-box;margin:0;padding:0}*:focus,*:active,*:hover{outline:none}html,body{margin:0;padding:0;width:100%}ul[class]{list-style:none;padding:0;margin:0}button,.btn{cursor:pointer}h1,h2,h3,h4,h5,h6,p,span{margin:0;font-weight:unset}a{text-decoration:none}b,strong{font-family:var(--font-bold)}.inline-lazy{display:inline}.main-content{min-height:calc(100vh - 297px)}html[lang='ko'] *{word-break:keep-all}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}body{font-family:'Poppins', sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;background-color:var(--white);padding-top:87px !important}@media (max-width: 767px){body{padding-top:83px !important}}html:not([lang='en']) .blog-menu{display:none}html[lang='ja'] .header-section-light .logo{width:fit-content}html[lang='ja'] .header-section-light .logo svg{width:181px;height:48px}.flex{display:flex}.flex.perfectCenter{justify-content:center;align-items:center}.flex.hrtlCenter{justify-content:center}.flex.vrtlCenter{align-items:center}.flex.flex-end{justify-content:flex-end}.flex.space-btw{justify-content:space-between}.flex.space-even{justify-content:space-evenly}.flex.space-around{justify-content:space-around}.flex.column{flex-direction:column}.flex.start{align-items:flex-start}.flex.pointer{cursor:pointer}.container{max-width:1147px;width:100%;margin:0 auto}@media (max-width: 1200px){.container{padding:0 12px !important}}@media (max-width: 1024px){.container{padding:0 16px !important}}.img-responsive{max-width:100%;width:auto;height:auto}.image-fit{object-fit:cover;height:100%;width:100%}.fs-modal-open,.hamburger-open{height:100vh;overflow-y:hidden}.read-more{color:#ff43a5;cursor:pointer}.experience-btn *{pointer-events:none}.schedule-a-demo-parent{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999}.schedule-a-demo-parent .schedule-parent{font-family:'Poppins', sans-serif !important;padding:24px;background:#ffffff;box-shadow:0px 8px 24px rgba(0,0,0,0.08);border-radius:12px;max-width:540px;width:100%;position:relative}.schedule-a-demo-parent .schedule-parent .demo-parent{width:100%}.schedule-a-demo-parent .schedule-parent .demo-parent iframe{width:100% !important}.schedule-a-demo-parent .schedule-parent .demo-parent>header,.schedule-a-demo-parent .schedule-parent .demo-parent>div{margin-bottom:24px;width:100%;max-height:80vh;height:100%;overflow:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header{width:auto;margin-left:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header .title{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor)}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header .demo-close-icon{cursor:pointer}.schedule-a-demo-parent .schedule-parent .demo-parent .h2{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .h1{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .h2{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .input-field{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .success-container{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .scheduleDemo-submit{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .demo-header{margin-bottom:10px}.schedule-a-demo-parent .schedule-parent .demo-parent form{max-height:calc(80vh - 20px);overflow-y:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form h1{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor);display:block;position:absolute;top:24px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form .hs_error_rollup{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field{width:100%;margin-bottom:15px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field label{font-weight:600;font-size:12px;line-height:18px;text-transform:uppercase;color:var(--paraColor);opacity:0.8;margin-bottom:4px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input{width:100%;height:51px;background:#ffffff;border:1px solid #ebebeb;box-sizing:border-box;box-shadow:0px 2px 8px rgba(0,0,0,0.04);border-radius:4px;padding:12px;font-size:18px;line-height:150%}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input::placeholder{color:#5b5273;opacity:0.4}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input:focus{border:1px solid #ff43a6}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field input[type='text']{-webkit-appearance:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field select{cursor:pointer}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs .hs-error-msg{margin-top:6px;font-weight:600;font-size:12px;line-height:16px;color:#ff402f;text-transform:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs.err .error-text{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs.err svg{top:18% !important}.schedule-a-demo-parent .schedule-parent .demo-parent .legal-consent-container{font-size:0.7rem;margin-bottom:0.5rem;color:black}.schedule-a-demo-parent .schedule-parent .demo-parent .legal-consent-container a{color:#18a0fb}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-button{border:0;outline:none;width:100%;padding:11.5px 24px;background:#ff43a6;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:4px;font-weight:600;font-size:18px;line-height:150%;color:#ffffff;cursor:pointer;-webkit-appearance:none}@media (max-width: 500px){.schedule-a-demo-parent .schedule-parent{padding:16px}}.schedule-a-demo-parent .submitted-message{width:100%;margin-bottom:0 !important}.schedule-a-demo-parent .submitted-message p:first-child{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor);position:absolute;top:24px}.schedule-a-demo-parent .submitted-message p:last-child{font-size:18px;line-height:150%;color:#473e5f;opacity:0.6;margin-bottom:20px}.modal{position:fixed;background:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:99999}.modal-body{font-family:'Poppins', sans-serif !important;padding:20px;background:#ffffff;box-shadow:0px 8px 24px rgba(0,0,0,0.08);border-radius:12px;max-width:540px;width:100%;max-height:calc(80vh - 20px);overflow-y:auto;position:relative}@media (max-width: 500px){.modal-body{padding:16px}}.modal-body .close-icon{cursor:pointer;z-index:1;position:absolute;right:20px;display:flex;align-items:center;top:24px}\n"
        );
      t.a = function (e) {
        var t = e.open,
          i = e.children,
          a = e.onClose,
          r = e.className,
          s = void 0 === r ? "" : r;
        return t
          ? Object(n.jsx)(o, {
              className: "modal-wrapper",
              children: Object(n.jsx)("div", {
                className: "flex modal perfectCenter "
                  .concat(s, " ")
                  .concat(t ? "open-modal" : ""),
                children: Object(n.jsxs)("div", {
                  className: "modal-body",
                  children: [
                    a &&
                      Object(n.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "black",
                        className: "close-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: a,
                        children: Object(n.jsx)("path", {
                          d: "M20.2201 5.3709L18.6291 3.77991L12 10.409L5.37087 3.77991L3.77988 5.3709L10.409 12L3.77988 18.6292L5.37087 20.2201L12 13.591L18.6291 20.2201L20.2201 18.6292L13.591 12L20.2201 5.3709Z",
                          fill: "#0B0223",
                        }),
                      }),
                    i,
                  ],
                }),
              }),
            })
          : null;
      };
    },
    deKR: function (e, t, i) {
      "use strict";
      var n = i("nKUr"),
        o = (i("q1tI"), i("kriW"));
      t.a = function (e) {
        var t = e.text,
          i = e.values;
        return t
          ? Object(n.jsx)(o.a, { id: t, values: i, defaultMessage: t })
          : null;
      };
    },
    hIrt: function (e, t, i) {
      "use strict";
      var n = i("nKUr"),
        o = i("lPHp"),
        a = i.n(o),
        r = i("q1tI"),
        s = i("qM95");
      t.a = function (e) {
        var t = e.width,
          i = e.height,
          o = e.className,
          l = Object(r.createRef)();
        return (
          Object(r.useEffect)(function () {
            a.a.loadAnimation({
              container: l.current,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: s,
            });
          }, []),
          Object(n.jsx)("div", {
            className: o,
            style: { width: "".concat(t, "px"), height: "".concat(i, "px") },
            ref: l,
          })
        );
      };
    },
    kriW: function (e, t, i) {
      "use strict";
      var n = i("X52I"),
        o = i("q1tI"),
        a = i("dDsW"),
        r = i("N3fz");
      function s(e) {
        var t = Object(a.a)(),
          i = t.formatMessage,
          n = t.textComponent,
          r = void 0 === n ? o.Fragment : n,
          s = e.id,
          l = e.description,
          c = e.defaultMessage,
          d = e.values,
          p = e.children,
          x = e.tagName,
          f = void 0 === x ? r : x,
          m = i({ id: s, description: l, defaultMessage: c }, d, {
            ignoreTag: e.ignoreTag,
          });
        return "function" === typeof p
          ? p(Array.isArray(m) ? m : [m])
          : f
          ? o.createElement(f, null, o.Children.toArray(m))
          : o.createElement(o.Fragment, null, m);
      }
      s.displayName = "FormattedMessage";
      var l = o.memo(s, function (e, t) {
        var i = e.values,
          o = Object(n.c)(e, ["values"]),
          a = t.values,
          s = Object(n.c)(t, ["values"]);
        return Object(r.d)(a, i) && Object(r.d)(o, s);
      });
      (l.displayName = "MemoizedFormattedMessage"), (t.a = l);
    },
    mmzJ: function (e, t, i) {
      "use strict";
      var n = i("nKUr"),
        o = i("q1tI"),
        a = i("vOnD").b.div.withConfig({
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
          c = e.body,
          d = e.children,
          p = e.defaultBodyheight,
          x = e.headerItems,
          f = Object(o.useState)(i),
          m = f[0],
          h = f[1],
          u = Object(o.useRef)(null),
          g = Object(o.useState)(0),
          b = g[0],
          y = g[1];
        return (
          Object(o.useEffect)(
            function () {
              h(i), i && y("".concat(u.current.scrollHeight, "px"));
            },
            [i]
          ),
          Object(n.jsxs)(a, {
            className: "accordion-container ".concat(m ? "open" : ""),
            open: m,
            bodyHeight: b,
            defaultBodyheight: p,
            headerItems: x,
            children: [
              Object(n.jsx)("div", {
                className: "header",
                onClick: function () {
                  h(!m), y("".concat(u.current.scrollHeight, "px")), r && r(s);
                },
                children: Object(n.jsx)("span", {
                  className: "text",
                  children: l,
                }),
              }),
              Object(n.jsx)("div", {
                ref: u,
                className: "body",
                children:
                  d ||
                  Object(n.jsx)("span", {
                    className: "text",
                    dangerouslySetInnerHTML: { __html: c },
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
          return x;
        });
      var n = i("nKUr"),
        o = i("q1tI"),
        a = i("ULIw"),
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
        c = i("20a2"),
        d = function (e) {
          var t = e.preferredLocaleId,
            i = e.locales,
            r = e.onSelectLocale,
            d = e.defaultLocale,
            p = e.unsupportedLang,
            f = Object(c.useRouter)(),
            m = f.asPath,
            h = f.locale,
            u = f.pathname,
            g = Object(o.useState)(m),
            b = g[0],
            y = g[1],
            w = Object(o.useState)(d),
            v = w[0],
            k = w[1],
            j = Object(o.useState)(!1),
            C = j[0],
            F = j[1];
          Object(o.useEffect)(function () {
            (window.onclick = function (e) {
              if (!e.target.matches(".label")) {
                var t = document.querySelector(".language-body");
                if (t.classList.contains("show-dropdown"))
                  document
                    .getElementById("locale-select")
                    .classList.toggle("btn-focus"),
                    t.classList.remove("show-dropdown"),
                    F(!1);
              }
            }),
              "/" === b && y("");
          }, []);
          return (
            Object(o.useEffect)(
              function () {
                if (p) k(x(i, h));
                else {
                  var e =
                    i.filter(function (e) {
                      return e.id === h;
                    }).length > 0
                      ? a.filter(function (e) {
                          return e.id === h;
                        })[0]
                      : a[0];
                  k(e);
                }
              },
              [t]
            ),
            Object(n.jsxs)(l, {
              className: "language-modal",
              ddOpen: C,
              children: [
                Object(n.jsx)("div", {
                  className: "language-body",
                  children: Object(n.jsx)("div", {
                    className: "dropdown-list",
                    children:
                      t &&
                      Object(n.jsx)("ul", {
                        className: "dropdown-list-ul",
                        children: i.map(function (e) {
                          var t = e.value,
                            i = e.id;
                          return u.includes("/payments") && "ja" === i
                            ? null
                            : Object(n.jsxs)(
                                "li",
                                {
                                  className: "lang-option ".concat(
                                    v.id === i ? "selected" : ""
                                  ),
                                  children: [
                                    Object(n.jsx)("a", {
                                      className: "link",
                                      onClick: function () {
                                        return (function (e) {
                                          var t = a.filter(function (t) {
                                            return t.id === e;
                                          })[0];
                                          k(t), r(t);
                                        })(i);
                                      },
                                      href:
                                        "en" !== i || b
                                          ? Object(s.e)(i) + b
                                          : "/",
                                      children: t,
                                    }),
                                    Object(n.jsx)("span", {
                                      className: "tick",
                                      children: Object(n.jsx)("svg", {
                                        className: "logo",
                                        width: "16",
                                        height: "14",
                                        viewBox: "0 0 16 14",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: Object(n.jsx)("path", {
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
                Object(n.jsx)("p", {
                  className: "locale-name",
                  children: Object(n.jsx)("button", {
                    id: "locale-select",
                    className: "label",
                    onClick: function () {
                      var e = document.querySelector(".language-body"),
                        t = document.getElementById("locale-select");
                      e.classList.toggle("show-dropdown"),
                        t.classList.toggle("btn-focus"),
                        F(function (e) {
                          return !e;
                        });
                    },
                    children: v.value,
                  }),
                }),
              ],
            })
          );
        },
        p = i("A8lN"),
        x = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0,
            i = { zh: "cn", "zh-HK": "cn", "zh-CN": "cn", "zh-TW": "tw" },
            n = i[window.navigator.language] || window.navigator.language;
          return r.g.includes(n) &&
            e.filter(function (e) {
              return e.id === n;
            }).length > 0
            ? e.filter(function (e) {
                return e.id === n;
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
          i = Object(o.useState)(!1),
          l = i[0],
          x = i[1],
          f = Object(c.useRouter)(),
          m = f.asPath,
          h = f.locale,
          u = Object(o.useState)(h),
          g = u[0],
          b = u[1],
          y = Object(p.b)(),
          w = y.language,
          v = y.setPreferredLanguage,
          k = a.filter(function (e) {
            return r.g.includes(e.id);
          });
        t &&
          (k = a.filter(function (e) {
            return t.includes(r.b[e.id] || e.id);
          })),
          Object(o.useEffect)(
            function () {
              var e = Object(s.c)("preferred_lang") || w;
              e
                ? (b(e),
                  !k.filter(function (t) {
                    return t.id === e;
                  }).length > 0
                    ? x(!0)
                    : (x(!1), b(e)))
                : j();
            },
            [w]
          );
        var j = function () {
            var e = C();
            b(e);
          },
          C = function () {
            var e = "en",
              i = window.navigator.language;
            try {
              r.g.some(function (t) {
                if (i.toLowerCase().includes(t)) return (e = t), !0;
              });
            } catch (n) {}
            return (t || r.g).includes(e) ? e : h;
          },
          F = function (e) {
            var t = m;
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
        return k.length < 2
          ? null
          : Object(n.jsx)(d, {
              preferredLocaleId: g,
              locales: k,
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
                  v(t),
                  "close" !== i && h !== t && F(t));
              },
              defaultLocale:
                k.filter(function (e) {
                  return e.id === g;
                })[0] || a[0],
              unsupportedLang: l,
            });
      };
    },
    qM95: function (e) {
      e.exports = JSON.parse(
        '{"v":"4.8.0","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":30,"ip":0,"op":120,"w":500,"h":500,"nm":"Logo Art Animation","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"Master","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[356,356,100],"ix":6}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Eye Ctrl","parent":1,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"s":true,"x":{"a":0,"k":50,"ix":3},"y":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":18,"s":[45.225]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":22,"s":[52.225]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":28,"s":[40.225]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":32,"s":[44.225]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":55,"s":[44.225]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":59,"s":[40.225]},{"t":64,"s":[45.225]}],"ix":4}},"a":{"a":0,"k":[50,50,0],"ix":1},"s":{"a":0,"k":[28.09,8.427,100],"ix":6}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"R Eye Mask","parent":2,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":24,"s":[86.764,167.548,0],"to":[0,-8.889,0],"ti":[0,11.111,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":32,"s":[86.764,114.215,0],"to":[0,-11.111,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":55,"s":[86.764,100.882,0],"to":[0,5.556,0],"ti":[0,-13.891,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":59,"s":[86.764,50.887,0],"to":[0,13.887,0],"ti":[0,-5.555,0]},{"t":64,"s":[86.764,167.548,0]}],"ix":2},"a":{"a":0,"k":[-35.736,-16.736,0],"ix":1},"s":{"a":0,"k":[181.9,606.333,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[18.529,18.529],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.262745098039,0.650980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-35.736,-16.736],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"R Eye","parent":2,"tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[86.764,50.882,0],"ix":2},"a":{"a":0,"k":[-35.736,-16.736,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":4,"s":[160,533.333,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":11,"s":[224.08,746.933,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":16,"s":[135.08,450.267,100]},{"t":19,"s":[160,533.333,100]}],"ix":6}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[18.529,18.529],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-35.736,-16.736],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"L Eye Mask","parent":2,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":22,"s":[14.264,167.548,0],"to":[0,-10,0],"ti":[0,11.111,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":30,"s":[14.264,107.548,0],"to":[0,-11.111,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":53,"s":[14.264,100.882,0],"to":[0,5.556,0],"ti":[0,-13.891,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":57,"s":[14.264,50.887,0],"to":[0,13.887,0],"ti":[0,-5.555,0]},{"t":62,"s":[14.264,167.548,0]}],"ix":2},"a":{"a":0,"k":[-35.736,-16.736,0],"ix":1},"s":{"a":0,"k":[181.9,606.333,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[18.529,18.529],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.262745098039,0.650980392157,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-35.736,-16.736],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"L Eye","parent":2,"tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[14.264,50.882,0],"ix":2},"a":{"a":0,"k":[-35.736,-16.736,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":7,"s":[160,533.333,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":14,"s":[224.08,746.933,100]},{"i":{"x":[0.833,0.833,0.833],"y":[1,1,1]},"o":{"x":[0.167,0.167,0.167],"y":[0,0,0]},"t":19,"s":[135.08,450.267,100]},{"t":22,"s":[160,533.333,100]}],"ix":6}},"ao":0,"ef":[{"ty":28,"nm":"Set Matte","np":8,"mn":"ADBE Set Matte3","ix":1,"en":1,"ef":[{"ty":10,"nm":"Take Matte From Layer","mn":"ADBE Set Matte3-0001","ix":1,"v":{"a":0,"k":0,"ix":1}},{"ty":7,"nm":"Use For Matte","mn":"ADBE Set Matte3-0002","ix":2,"v":{"a":0,"k":4,"ix":2}},{"ty":7,"nm":"Invert Matte","mn":"ADBE Set Matte3-0003","ix":3,"v":{"a":0,"k":1,"ix":3}},{"ty":7,"nm":"If Layer Sizes Differ","mn":"ADBE Set Matte3-0004","ix":4,"v":{"a":0,"k":1,"ix":4}},{"ty":7,"nm":"Composite Matte with Original","mn":"ADBE Set Matte3-0005","ix":5,"v":{"a":0,"k":1,"ix":5}},{"ty":7,"nm":"Premultiply Matte Layer","mn":"ADBE Set Matte3-0006","ix":6,"v":{"a":0,"k":1,"ix":6}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[18.529,18.529],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-35.736,-16.736],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Center","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50,50,0],"ix":2},"a":{"a":0,"k":[193.5,107.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[54.226,54.226],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":52,"ix":4},"nm":"Rectangle Path 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":6,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[193.5,107.25],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"Left_Heart_Loop 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-38,"ix":10},"p":{"a":0,"k":[245,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.535,"y":1},"o":{"x":0.709,"y":0},"t":23,"s":[{"i":[[0,0],[0,0],[-2.603,-92.463],[0,0],[0,0]],"o":[[0,0],[0,0],[2.642,93.831],[0,0],[0,0]],"v":[[3.568,-93.139],[-3.411,-92.493],[-99.911,5.007],[-4.911,99.007],[0.357,99.394]],"c":false}]},{"i":{"x":0.398,"y":1},"o":{"x":0.463,"y":0},"t":30,"s":[{"i":[[0,0],[34.653,0],[2.681,-71.21],[-20.174,-1.402],[0,0]],"o":[[0,0],[-21.605,0],[-3.084,81.916],[40.306,2.106],[0,0]],"v":[[-2.835,-93.212],[-134.5,-96],[-222.504,-3.869],[-136,95.5],[5.664,99.689]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":34,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-2.908,-93.575],[-88.592,-91.223],[-178.147,6.496],[-90.092,100.277],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":37,"s":[{"i":[[0,0],[30.374,-0.346],[2.461,-84.607],[-12.965,-0.725],[0,0]],"o":[[0,0],[-12.511,0.8],[-2.42,83.183],[41.815,0],[0,0]],"v":[[-2.908,-93.575],[-105.879,-95.483],[-201.356,1.152],[-107.379,96.017],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.734,"y":0},"t":54,"s":[{"i":[[0,0],[30.374,-0.346],[2.461,-84.607],[-12.965,-0.725],[0,0]],"o":[[0,0],[-12.511,0.8],[-2.42,83.183],[41.815,0],[0,0]],"v":[[-2.908,-93.575],[-105.879,-95.483],[-201.356,1.152],[-107.379,96.017],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":57,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-2.908,-93.575],[-88.592,-91.223],[-178.147,6.496],[-90.092,100.277],[5.039,99.337]],"c":false}]},{"i":{"x":0.336,"y":1},"o":{"x":0.333,"y":0},"t":61,"s":[{"i":[[0,0],[34.653,0],[2.681,-71.21],[-20.174,-1.402],[0,0]],"o":[[0,0],[-21.605,0],[-3.084,81.916],[40.306,2.106],[0,0]],"v":[[-2.835,-93.212],[-134.5,-96],[-222.504,-3.869],[-136,95.5],[5.664,99.689]],"c":false}]},{"t":68,"s":[{"i":[[0,0],[0,0],[-2.603,-92.463],[0,0],[0,0]],"o":[[0,0],[0,0],[2.642,93.831],[0,0],[0,0]],"v":[[3.568,-93.139],[-3.411,-92.493],[-99.911,5.007],[-4.911,99.007],[0.357,99.394]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":24,"op":67,"st":23,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"Left_Heart_Loop","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":38,"ix":10},"p":{"a":0,"k":[255,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.535,"y":1},"o":{"x":0.709,"y":0},"t":21,"s":[{"i":[[0,0],[0,0],[-2.603,-92.463],[0,0],[0,0]],"o":[[0,0],[0,0],[2.642,93.831],[0,0],[0,0]],"v":[[3.568,-93.139],[-3.411,-92.493],[-99.911,5.007],[-4.911,99.007],[0.357,99.394]],"c":false}]},{"i":{"x":0.398,"y":1},"o":{"x":0.463,"y":0},"t":28,"s":[{"i":[[0,0],[34.653,0],[2.681,-71.21],[-20.174,-1.402],[0,0]],"o":[[0,0],[-21.605,0],[-3.084,81.916],[40.306,2.106],[0,0]],"v":[[-2.835,-93.212],[-134.5,-96],[-222.504,-3.869],[-136,95.5],[5.664,99.689]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":32,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-2.908,-93.575],[-88.592,-91.223],[-178.147,6.496],[-90.092,100.277],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":35,"s":[{"i":[[0,0],[30.374,-0.346],[2.461,-84.607],[-12.965,-0.725],[0,0]],"o":[[0,0],[-12.511,0.8],[-2.42,83.183],[41.815,0],[0,0]],"v":[[-2.908,-93.575],[-105.879,-95.483],[-201.356,1.152],[-107.379,96.017],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.734,"y":0},"t":52,"s":[{"i":[[0,0],[30.374,-0.346],[2.461,-84.607],[-12.965,-0.725],[0,0]],"o":[[0,0],[-12.511,0.8],[-2.42,83.183],[41.815,0],[0,0]],"v":[[-2.908,-93.575],[-105.879,-95.483],[-201.356,1.152],[-107.379,96.017],[5.039,99.337]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":55,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-2.908,-93.575],[-88.592,-91.223],[-178.147,6.496],[-90.092,100.277],[5.039,99.337]],"c":false}]},{"i":{"x":0.336,"y":1},"o":{"x":0.333,"y":0},"t":59,"s":[{"i":[[0,0],[34.653,0],[2.681,-71.21],[-20.174,-1.402],[0,0]],"o":[[0,0],[-21.605,0],[-3.084,81.916],[40.306,2.106],[0,0]],"v":[[-2.835,-93.212],[-134.5,-96],[-222.504,-3.869],[-136,95.5],[5.664,99.689]],"c":false}]},{"t":66,"s":[{"i":[[0,0],[0,0],[-2.603,-92.463],[0,0],[0,0]],"o":[[0,0],[0,0],[2.642,93.831],[0,0],[0,0]],"v":[[3.568,-93.139],[-3.411,-92.493],[-99.911,5.007],[-4.911,99.007],[0.357,99.394]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":22,"op":66,"st":21,"bm":0},{"ddd":0,"ind":10,"ty":4,"nm":"Top_Loop 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-90,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.765,"y":0},"t":72,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-1.25,-96],[-97.75,1.5],[-2.75,95.5],[0,96.5]],"c":false}]},{"i":{"x":0.125,"y":1},"o":{"x":0.333,"y":0},"t":78,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-95,-96],[-191.5,1.5],[-96.5,95.5],[0,96.5]],"c":false}]},{"t":88,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-64.25,-96],[-160.75,1.5],[-65.75,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":73,"op":123,"st":72,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"Top_Loop","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":-90,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.188,"y":1},"o":{"x":0.836,"y":0},"t":3,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-64.25,-96],[-160.75,1.5],[-65.75,95.5],[0,96.5]],"c":false}]},{"i":{"x":0.009,"y":1},"o":{"x":1,"y":0},"t":14,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-95,-96],[-191.5,1.5],[-96.5,95.5],[0,96.5]],"c":false}]},{"t":22,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-1.25,-96],[-97.75,1.5],[-2.75,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":20,"st":0,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"Right_Ear 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.5,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.07,"y":1},"o":{"x":0.767,"y":0},"t":64,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-5.5,-96],[-102,1.5],[-7,95.5],[0,96.5]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.122,"y":0},"t":70,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-124,-96],[-220.5,1.5],[-125.5,95.5],[0,96.5]],"c":false}]},{"t":81,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-96.5,-96],[-193,1.5],[-98,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":64,"op":122,"st":64,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"Right_Ear","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[245.5,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[-100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.034,"y":1},"o":{"x":0.696,"y":0},"t":6,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-96.5,-96],[-193,1.5],[-98,95.5],[0,96.5]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.832,"y":0},"t":17,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-124,-96],[-220.5,1.5],[-125.5,95.5],[0,96.5]],"c":false}]},{"t":25,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.75],[-5.5,-96],[-102,1.5],[-7,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":25,"st":0,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"Left Ear 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[255,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.249,"y":1},"o":{"x":0.835,"y":0},"t":66,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-5.25,-96],[-101.75,1.5],[-6.75,95.5],[0,96.5]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.135,"y":0},"t":73,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-134.5,-96],[-231,1.5],[-136,95.5],[0,96.5]],"c":false}]},{"t":84,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-104.5,-96],[-201,1.5],[-106,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":66,"op":123,"st":66,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"Left Ear","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[255,250,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.034,"y":1},"o":{"x":0.696,"y":0},"t":0,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-104.5,-96],[-201,1.5],[-106,95.5],[0,96.5]],"c":false}]},{"i":{"x":0,"y":1},"o":{"x":0.832,"y":0},"t":11,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-134.5,-96],[-231,1.5],[-136,95.5],[0,96.5]],"c":false}]},{"t":19,"s":[{"i":[[0,0],[0,0],[0,-92.5],[0,0],[0,0]],"o":[[0,0],[0,0],[0,92.5],[0,0],[0,0]],"v":[[-3.5,-96.5],[-5.25,-96],[-101.75,1.5],[-6.75,95.5],[0,96.5]],"c":false}]}],"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":21,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":19,"st":0,"bm":0}],"markers":[]}'
      );
    },
    qpuh: function (e, t) {
      (function (t, i) {
        e.exports = (function () {
          var e = {
              929: function (e) {
                e.exports = t;
              },
            },
            n = {};
          function o(t) {
            if (n[t]) return n[t].exports;
            var i = (n[t] = { exports: {} }),
              a = !0;
            try {
              e[t](i, i.exports, o), (a = !1);
            } finally {
              a && delete n[t];
            }
            return i.exports;
          }
          return (o.ab = i + "/"), o(929);
        })();
      }.call(this, {}, "/"));
    },
    "s+lh": function (e, t, i) {
      !(function (t, i) {
        var n = (function (e, t, i) {
          "use strict";
          var n, o;
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
              for (t in ((o = e.lazySizesConfig || e.lazysizesConfig || {}), i))
                t in o || (o[t] = i[t]);
            })(),
            !t || !t.getElementsByClassName)
          )
            return { init: function () {}, cfg: o, noSupport: !0 };
          var a = t.documentElement,
            r = e.HTMLPictureElement,
            s = "addEventListener",
            l = "getAttribute",
            c = e[s].bind(e),
            d = e.setTimeout,
            p = e.requestAnimationFrame || d,
            x = e.requestIdleCallback,
            f = /^picture$/i,
            m = ["load", "error", "lazyincluded", "_lazyloaded"],
            h = {},
            u = Array.prototype.forEach,
            g = function (e, t) {
              return (
                h[t] || (h[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")),
                h[t].test(e[l]("class") || "") && h[t]
              );
            },
            b = function (e, t) {
              g(e, t) ||
                e.setAttribute("class", (e[l]("class") || "").trim() + " " + t);
            },
            y = function (e, t) {
              var i;
              (i = g(e, t)) &&
                e.setAttribute("class", (e[l]("class") || "").replace(i, " "));
            },
            w = function (e, t, i) {
              var n = i ? s : "removeEventListener";
              i && w(e, t),
                m.forEach(function (i) {
                  e[n](i, t);
                });
            },
            v = function (e, i, o, a, r) {
              var s = t.createEvent("Event");
              return (
                o || (o = {}),
                (o.instance = n),
                s.initEvent(i, !a, !r),
                (s.detail = o),
                e.dispatchEvent(s),
                s
              );
            },
            k = function (t, i) {
              var n;
              !r && (n = e.picturefill || o.pf)
                ? (i &&
                    i.src &&
                    !t[l]("srcset") &&
                    t.setAttribute("srcset", i.src),
                  n({ reevaluate: !0, elements: [t] }))
                : i && i.src && (t.src = i.src);
            },
            j = function (e, t) {
              return (getComputedStyle(e, null) || {})[t];
            },
            C = function (e, t, i) {
              for (
                i = i || e.offsetWidth;
                i < o.minSize && t && !e._lazysizesWidth;

              )
                (i = t.offsetWidth), (t = t.parentNode);
              return i;
            },
            F = (function () {
              var e,
                i,
                n = [],
                o = [],
                a = n,
                r = function () {
                  var t = a;
                  for (a = n.length ? o : n, e = !0, i = !1; t.length; )
                    t.shift()();
                  e = !1;
                },
                s = function (n, o) {
                  e && !o
                    ? n.apply(this, arguments)
                    : (a.push(n), i || ((i = !0), (t.hidden ? d : p)(r)));
                };
              return (s._lsFlush = r), s;
            })(),
            O = function (e, t) {
              return t
                ? function () {
                    F(e);
                  }
                : function () {
                    var t = this,
                      i = arguments;
                    F(function () {
                      e.apply(t, i);
                    });
                  };
            },
            U = function (e) {
              var t,
                n = 0,
                a = o.throttleDelay,
                r = o.ricTimeout,
                s = function () {
                  (t = !1), (n = i.now()), e();
                },
                l =
                  x && r > 49
                    ? function () {
                        x(s, { timeout: r }),
                          r !== o.ricTimeout && (r = o.ricTimeout);
                      }
                    : O(function () {
                        d(s);
                      }, !0);
              return function (e) {
                var o;
                (e = !0 === e) && (r = 33),
                  t ||
                    ((t = !0),
                    (o = a - (i.now() - n)) < 0 && (o = 0),
                    e || o < 9 ? l() : d(l, o));
              };
            },
            E = function (e) {
              var t,
                n,
                o = 99,
                a = function () {
                  (t = null), e();
                },
                r = function () {
                  var e = i.now() - n;
                  e < o ? d(r, o - e) : (x || a)(a);
                };
              return function () {
                (n = i.now()), t || (t = d(r, o));
              };
            },
            A = (function () {
              var r,
                x,
                m,
                h,
                C,
                A,
                B,
                N,
                D,
                _,
                L,
                S,
                M = /^img$/i,
                P = /^iframe$/i,
                V =
                  "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                H = 0,
                I = 0,
                T = 0,
                J = -1,
                G = function (e) {
                  T--, (!e || T < 0 || !e.target) && (T = 0);
                },
                R = function (e) {
                  return (
                    null == S && (S = "hidden" == j(t.body, "visibility")),
                    S ||
                      !(
                        "hidden" == j(e.parentNode, "visibility") &&
                        "hidden" == j(e, "visibility")
                      )
                  );
                },
                Z = function (e, i) {
                  var n,
                    o = e,
                    r = R(e);
                  for (
                    N -= i, L += i, D -= i, _ += i;
                    r && (o = o.offsetParent) && o != t.body && o != a;

                  )
                    (r = (j(o, "opacity") || 1) > 0) &&
                      "visible" != j(o, "overflow") &&
                      ((n = o.getBoundingClientRect()),
                      (r =
                        _ > n.left &&
                        D < n.right &&
                        L > n.top - 1 &&
                        N < n.bottom + 1));
                  return r;
                },
                q = function () {
                  var e,
                    i,
                    s,
                    c,
                    d,
                    p,
                    f,
                    m,
                    u,
                    g,
                    b,
                    y,
                    w = n.elements;
                  if ((h = o.loadMode) && T < 8 && (e = w.length)) {
                    for (i = 0, J++; i < e; i++)
                      if (w[i] && !w[i]._lazyRace)
                        if (
                          !V ||
                          (n.prematureUnveil && n.prematureUnveil(w[i]))
                        )
                          te(w[i]);
                        else if (
                          (((m = w[i][l]("data-expand")) && (p = 1 * m)) ||
                            (p = I),
                          g ||
                            ((g =
                              !o.expand || o.expand < 1
                                ? a.clientHeight > 500 && a.clientWidth > 500
                                  ? 500
                                  : 370
                                : o.expand),
                            (n._defEx = g),
                            (b = g * o.expFactor),
                            (y = o.hFac),
                            (S = null),
                            I < b && T < 1 && J > 2 && h > 2 && !t.hidden
                              ? ((I = b), (J = 0))
                              : (I = h > 1 && J > 1 && T < 6 ? g : H)),
                          u !== p &&
                            ((A = innerWidth + p * y),
                            (B = innerHeight + p),
                            (f = -1 * p),
                            (u = p)),
                          (s = w[i].getBoundingClientRect()),
                          (L = s.bottom) >= f &&
                            (N = s.top) <= B &&
                            (_ = s.right) >= f * y &&
                            (D = s.left) <= A &&
                            (L || _ || D || N) &&
                            (o.loadHidden || R(w[i])) &&
                            ((x && T < 3 && !m && (h < 3 || J < 4)) ||
                              Z(w[i], p)))
                        ) {
                          if ((te(w[i]), (d = !0), T > 9)) break;
                        } else
                          !d &&
                            x &&
                            !c &&
                            T < 4 &&
                            J < 4 &&
                            h > 2 &&
                            (r[0] || o.preloadAfterLoad) &&
                            (r[0] ||
                              (!m &&
                                (L ||
                                  _ ||
                                  D ||
                                  N ||
                                  "auto" != w[i][l](o.sizesAttr)))) &&
                            (c = r[0] || w[i]);
                    c && !d && te(c);
                  }
                },
                W = U(q),
                Q = function (e) {
                  var t = e.target;
                  t._lazyCache
                    ? delete t._lazyCache
                    : (G(e),
                      b(t, o.loadedClass),
                      y(t, o.loadingClass),
                      w(t, Y),
                      v(t, "lazyloaded"));
                },
                K = O(Q),
                Y = function (e) {
                  K({ target: e.target });
                },
                $ = function (e, t) {
                  var i = e.getAttribute("data-load-mode") || o.iframeLoadMode;
                  0 == i
                    ? e.contentWindow.location.replace(t)
                    : 1 == i && (e.src = t);
                },
                X = function (e) {
                  var t,
                    i = e[l](o.srcsetAttr);
                  (t = o.customMedia[e[l]("data-media") || e[l]("media")]) &&
                    e.setAttribute("media", t),
                    i && e.setAttribute("srcset", i);
                },
                ee = O(function (e, t, i, n, a) {
                  var r, s, c, p, x, h;
                  (x = v(e, "lazybeforeunveil", t)).defaultPrevented ||
                    (n &&
                      (i ? b(e, o.autosizesClass) : e.setAttribute("sizes", n)),
                    (s = e[l](o.srcsetAttr)),
                    (r = e[l](o.srcAttr)),
                    a && (p = (c = e.parentNode) && f.test(c.nodeName || "")),
                    (h = t.firesLoad || ("src" in e && (s || r || p))),
                    (x = { target: e }),
                    b(e, o.loadingClass),
                    h && (clearTimeout(m), (m = d(G, 2500)), w(e, Y, !0)),
                    p && u.call(c.getElementsByTagName("source"), X),
                    s
                      ? e.setAttribute("srcset", s)
                      : r && !p && (P.test(e.nodeName) ? $(e, r) : (e.src = r)),
                    a && (s || p) && k(e, { src: r })),
                    e._lazyRace && delete e._lazyRace,
                    y(e, o.lazyClass),
                    F(function () {
                      var t = e.complete && e.naturalWidth > 1;
                      (h && !t) ||
                        (t && b(e, o.fastLoadedClass),
                        Q(x),
                        (e._lazyCache = !0),
                        d(function () {
                          "_lazyCache" in e && delete e._lazyCache;
                        }, 9)),
                        "lazy" == e.loading && T--;
                    }, !0);
                }),
                te = function (e) {
                  if (!e._lazyRace) {
                    var t,
                      i = M.test(e.nodeName),
                      n = i && (e[l](o.sizesAttr) || e[l]("sizes")),
                      a = "auto" == n;
                    ((!a && x) ||
                      !i ||
                      (!e[l]("src") && !e.srcset) ||
                      e.complete ||
                      g(e, o.errorClass) ||
                      !g(e, o.lazyClass)) &&
                      ((t = v(e, "lazyunveilread").detail),
                      a && z.updateElem(e, !0, e.offsetWidth),
                      (e._lazyRace = !0),
                      T++,
                      ee(e, t, a, n, i));
                  }
                },
                ie = E(function () {
                  (o.loadMode = 3), W();
                }),
                ne = function () {
                  3 == o.loadMode && (o.loadMode = 2), ie();
                },
                oe = function () {
                  x ||
                    (i.now() - C < 999
                      ? d(oe, 999)
                      : ((x = !0), (o.loadMode = 3), W(), c("scroll", ne, !0)));
                };
              return {
                _: function () {
                  (C = i.now()),
                    (n.elements = t.getElementsByClassName(o.lazyClass)),
                    (r = t.getElementsByClassName(
                      o.lazyClass + " " + o.preloadClass
                    )),
                    c("scroll", W, !0),
                    c("resize", W, !0),
                    c("pageshow", function (e) {
                      if (e.persisted) {
                        var i = t.querySelectorAll("." + o.loadingClass);
                        i.length &&
                          i.forEach &&
                          p(function () {
                            i.forEach(function (e) {
                              e.complete && te(e);
                            });
                          });
                      }
                    }),
                    e.MutationObserver
                      ? new MutationObserver(W).observe(a, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (a[s]("DOMNodeInserted", W, !0),
                        a[s]("DOMAttrModified", W, !0),
                        setInterval(W, 999)),
                    c("hashchange", W, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (e) {
                      t[s](e, W, !0);
                    }),
                    /d$|^c/.test(t.readyState)
                      ? oe()
                      : (c("load", oe),
                        t[s]("DOMContentLoaded", W),
                        d(oe, 2e4)),
                    n.elements.length ? (q(), F._lsFlush()) : W();
                },
                checkElems: W,
                unveil: te,
                _aLSL: ne,
              };
            })(),
            z = (function () {
              var e,
                i = O(function (e, t, i, n) {
                  var o, a, r;
                  if (
                    ((e._lazysizesWidth = n),
                    (n += "px"),
                    e.setAttribute("sizes", n),
                    f.test(t.nodeName || ""))
                  )
                    for (
                      a = 0, r = (o = t.getElementsByTagName("source")).length;
                      a < r;
                      a++
                    )
                      o[a].setAttribute("sizes", n);
                  i.detail.dataAttr || k(e, i.detail);
                }),
                n = function (e, t, n) {
                  var o,
                    a = e.parentNode;
                  a &&
                    ((n = C(e, a, n)),
                    (o = v(e, "lazybeforesizes", { width: n, dataAttr: !!t }))
                      .defaultPrevented ||
                      ((n = o.detail.width) &&
                        n !== e._lazysizesWidth &&
                        i(e, a, o, n)));
                },
                a = E(function () {
                  var t,
                    i = e.length;
                  if (i) for (t = 0; t < i; t++) n(e[t]);
                });
              return {
                _: function () {
                  (e = t.getElementsByClassName(o.autosizesClass)),
                    c("resize", a);
                },
                checkElems: a,
                updateElem: n,
              };
            })(),
            B = function () {
              !B.i && t.getElementsByClassName && ((B.i = !0), z._(), A._());
            };
          return (
            d(function () {
              o.init && B();
            }),
            (n = {
              cfg: o,
              autoSizer: z,
              loader: A,
              init: B,
              uP: k,
              aC: b,
              rC: y,
              hC: g,
              fire: v,
              gW: C,
              rAF: F,
            })
          );
        })(t, t.document, Date);
        (t.lazySizes = n), e.exports && (e.exports = n);
      })("undefined" != typeof window ? window : {});
    },
    v1EE: function (e, t, i) {
      var n, o, a;
      !(function (r, s) {
        if (r) {
          (s = s.bind(null, r, r.document)),
            e.exports
              ? s(i("s+lh"))
              : ((o = [i("s+lh")]),
                void 0 ===
                  (a = "function" === typeof (n = s) ? n.apply(t, o) : n) ||
                  (e.exports = a));
        }
      })("undefined" != typeof window ? window : 0, function (e, t, i) {
        "use strict";
        if (e.addEventListener) {
          var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            o = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            a = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            r = /^picture$/i,
            s = i.cfg,
            l = {
              getParent: function (t, i) {
                var n = t,
                  o = t.parentNode;
                return (
                  (i && "prev" != i) ||
                    !o ||
                    !r.test(o.nodeName || "") ||
                    (o = o.parentNode),
                  "self" != i &&
                    (n =
                      "prev" == i
                        ? t.previousElementSibling
                        : (i &&
                            (o.closest || e.jQuery) &&
                            (o.closest
                              ? o.closest(i)
                              : jQuery(o).closest(i)[0])) ||
                          o),
                  n
                );
              },
              getFit: function (e) {
                var t,
                  i,
                  n = getComputedStyle(e, null) || {},
                  r = n.content || n.fontFamily,
                  s = {
                    fit:
                      e._lazysizesParentFit ||
                      e.getAttribute("data-parent-fit"),
                  };
                return (
                  !s.fit && r && (t = r.match(o)) && (s.fit = t[1]),
                  s.fit
                    ? (!(i =
                        e._lazysizesParentContainer ||
                        e.getAttribute("data-parent-container")) &&
                        r &&
                        (t = r.match(a)) &&
                        (i = t[1]),
                      (s.parent = l.getParent(e, i)))
                    : (s.fit = n.objectFit),
                  s
                );
              },
              getImageRatio: function (t) {
                var i,
                  o,
                  a,
                  l,
                  c,
                  d,
                  p,
                  x = t.parentNode,
                  f =
                    x && r.test(x.nodeName || "")
                      ? x.querySelectorAll("source, img")
                      : [t];
                for (i = 0; i < f.length; i++)
                  if (
                    ((o =
                      (t = f[i]).getAttribute(s.srcsetAttr) ||
                      t.getAttribute("srcset") ||
                      t.getAttribute("data-pfsrcset") ||
                      t.getAttribute("data-risrcset") ||
                      ""),
                    (a = t._lsMedia || t.getAttribute("media")),
                    (a = s.customMedia[t.getAttribute("data-media") || a] || a),
                    o &&
                      (!a || ((e.matchMedia && matchMedia(a)) || {}).matches))
                  ) {
                    (l = parseFloat(t.getAttribute("data-aspectratio"))) ||
                      ((c = o.match(n))
                        ? "w" == c[2]
                          ? ((d = c[1]), (p = c[3]))
                          : ((d = c[3]), (p = c[1]))
                        : ((d = t.getAttribute("width")),
                          (p = t.getAttribute("height"))),
                      (l = d / p));
                    break;
                  }
                return l;
              },
              calculateSize: function (e, t) {
                var i,
                  n,
                  o,
                  a = this.getFit(e),
                  r = a.fit,
                  s = a.parent;
                return "width" == r ||
                  (("contain" == r || "cover" == r) &&
                    (n = this.getImageRatio(e)))
                  ? (s ? (t = s.clientWidth) : (s = e),
                    (o = t),
                    "width" == r
                      ? (o = t)
                      : (i = t / s.clientHeight) &&
                        (("cover" == r && i < n) ||
                          ("contain" == r && i > n)) &&
                        (o = t * (n / i)),
                    o)
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
