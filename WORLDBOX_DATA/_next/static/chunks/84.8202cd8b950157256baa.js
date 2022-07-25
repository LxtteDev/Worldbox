(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [84],
  {
    "6pal": function (e, t, o) {
      "use strict";
      o.r(t);
      var a = o("nKUr"),
        n = (o("q1tI"), o("chPE")),
        r = o("Vvt1"),
        s = o.n(r),
        i = o("AATo"),
        d = o("SJFK"),
        f = o("20a2"),
        c = o("bKGj"),
        p = s()(
          function () {
            return Promise.all([o.e(0), o.e(13)]).then(
              o.t.bind(null, "9pBV", 7)
            );
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return ["9pBV"];
              },
              modules: ["react-hubspot-form"],
            },
          }
        );
      t.default = function (e) {
        var t = e.showScheduleDemo,
          o = e.onClose,
          r = Object(f.useRouter)().locale;
        return Object(a.jsx)(a.Fragment, {
          children: Object(a.jsx)(n.a, {
            open: t,
            children: Object(a.jsx)("div", {
              className: "flex schedule-a-demo-parent perfectCenter",
              id: "scheduleDemo",
              children: Object(a.jsx)("section", {
                className: "flex schedule-parent perfectCenter",
                children: Object(a.jsxs)("div", {
                  className: "flex demo-parent vrtlCenter column",
                  children: [
                    Object(a.jsx)("header", {
                      className: "flex demo-header vrtlCenter space-btw",
                      children: Object(a.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className: "demo-close-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: o,
                        children: Object(a.jsx)("path", {
                          d: "M20.2201 5.3709L18.6291 3.77991L12 10.409L5.37087 3.77991L3.77988 5.3709L10.409 12L3.77988 18.6292L5.37087 20.2201L12 13.591L18.6291 20.2201L20.2201 18.6292L13.591 12L20.2201 5.3709Z",
                          fill: "#0B0223",
                        }),
                      }),
                    }),
                    Object(a.jsx)("div", {
                      className: "hbspt-container",
                      children: Object(a.jsx)(p, {
                        id: "hubspot-form",
                        portalId: i.l,
                        formId: d.hubSpotFormIds[r] || d.hubSpotFormIds.en,
                        loading: Object(a.jsx)(c.a, {}),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          }),
        });
      };
    },
    SJFK: function (e, t) {
      e.exports = {
        hubSpotFormIds: {
          en: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          de: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          es: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          fr: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          it: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          ja: "c1fa26f9-2969-49ef-b892-f69ade4f45af",
          ko: "51c2c287-e440-474b-89a2-a8626c312777",
          "pt-br": "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          ru: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          tr: "cc835c8c-8ce7-4a2b-9afc-e61f60cb220e",
          tw: "b0089cb5-1187-4bcc-b556-e49d2075afd5",
          cn: "531dc632-010d-4cb3-9dfd-69b9c8302af9",
        },
        unsubscribeFormIds: {
          en: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          de: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          es: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          fr: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          it: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          ja: "a8a6a69f-8a3d-4bfb-be0b-8920be7b73bb",
          ko: "f6e9d57b-bd05-48aa-bf73-f3a2ab5bca50",
          "pt-br": "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          ru: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          tr: "e39a2d4b-1d99-4119-acc1-ddd2245e2f49",
          tw: "ac2179cd-3bd7-49d2-9fb8-a234a199ac93",
          cn: "49111b1a-2f81-4346-9489-732589160905",
        },
        subscribeFormIds: {
          en: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          de: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          es: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          fr: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          it: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          ja: "b9f6bd5e-300e-4677-b3cd-996a1098554d",
          ko: "ca54d067-579a-4693-8b14-aea4340c3aa5",
          "pt-br": "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          ru: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          tr: "bf54ddb3-c0ee-4e0a-8acb-f299879f3573",
          tw: "289ac536-2c4a-4c29-87cb-864fc0a75b82",
          cn: "bbbef84e-1b1a-429e-9793-655c7ced91dc",
        },
        createDeveloperAccountFormIds: {
          en: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          de: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          es: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          fr: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          it: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          ja: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          ko: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          "pt-br": "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          ru: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          tr: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          tw: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
          cn: "5f3fb87d-bb88-4eb7-baeb-fea8fbb851bd",
        },
      };
    },
    bKGj: function (e, t, o) {
      "use strict";
      var a = o("nKUr"),
        n = o("vOnD").b.svg.withConfig({
          displayName: "style__SvgStyleWrapper",
          componentId: "sc-4wcfru-0",
        })([
          "position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);.circle{stroke-dasharray:90;stroke-dashoffset:90;stroke-linecap:round;transform-origin:center;animation:animate-stroke 1.5s ease infinite,rotation 1.5s linear infinite;}.circle-2{transform:rotate(-20deg);animation:animate-stroke 1.5s ease-in infinite,rotation2 1.5s linear infinite;}.circle-3{transform:rotate(-60deg);animation:animate-stroke 1.5s ease-in infinite,rotation3 1.5s linear infinite;}@keyframes animate-stroke{50%{stroke-dashoffset:0;}100%{stroke-dashoffset:-90;}}@keyframes rotation{0%{}100%{transform:rotate(360deg);}}@keyframes rotation2{0%{}100%{transform:rotate(340deg);}}@keyframes rotation3{0%{}100%{transform:rotate(300deg);}}",
        ]);
      t.a = function () {
        return Object(a.jsxs)(n, {
          xmlns: "http://www.w3.org/2000/svg",
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          className: "img-loader",
          children: [
            Object(a.jsx)("style", { type: "text/css" }),
            Object(a.jsx)("circle", {
              className: "circle circle-3",
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "#B3D661",
              strokeWidth: "8",
            }),
            Object(a.jsx)("circle", {
              className: "circle circle-2",
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "#51A5C9",
              strokeWidth: "8",
            }),
            Object(a.jsx)("circle", {
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
    chPE: function (e, t, o) {
      "use strict";
      var a = o("nKUr"),
        n = o("vOnD").b.div.withConfig({
          displayName: "Modal__ModalStyleWrapper",
          componentId: "sc-iffdj2-0",
        })(
          ["", ""],
          ":root{--white: #ffffff;--black: #000000;--primaryColor: #ff43a6;--paraColor: #473e5f;--titlecolor: #0b0223;--hpTitleColor: #1f1637;--termsTitleColor: #5b5273;--partnerParaColor: #8d84a5;--contactusParaColor: #797091;--hoverPrimary: #ff339e;--borderColor: #ebebeb;--lightParaColor: #a198b9}*{box-sizing:border-box;margin:0;padding:0}*:focus,*:active,*:hover{outline:none}html,body{margin:0;padding:0;width:100%}ul[class]{list-style:none;padding:0;margin:0}button,.btn{cursor:pointer}h1,h2,h3,h4,h5,h6,p,span{margin:0;font-weight:unset}a{text-decoration:none}b,strong{font-family:var(--font-bold)}.inline-lazy{display:inline}.main-content{min-height:calc(100vh - 297px)}html[lang='ko'] *{word-break:keep-all}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z11lFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1JlFd2JQEl8qw.woff2) format(\"woff2\");unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF}@font-face{font-family:'Poppins';font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLBT5Z1xlFd2JQEk.woff2) format(\"woff2\");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}body{font-family:'Poppins', sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden;background-color:var(--white);padding-top:87px !important}@media (max-width: 767px){body{padding-top:83px !important}}html:not([lang='en']) .blog-menu{display:none}html[lang='ja'] .header-section-light .logo{width:fit-content}html[lang='ja'] .header-section-light .logo svg{width:181px;height:48px}.flex{display:flex}.flex.perfectCenter{justify-content:center;align-items:center}.flex.hrtlCenter{justify-content:center}.flex.vrtlCenter{align-items:center}.flex.flex-end{justify-content:flex-end}.flex.space-btw{justify-content:space-between}.flex.space-even{justify-content:space-evenly}.flex.space-around{justify-content:space-around}.flex.column{flex-direction:column}.flex.start{align-items:flex-start}.flex.pointer{cursor:pointer}.container{max-width:1147px;width:100%;margin:0 auto}@media (max-width: 1200px){.container{padding:0 12px !important}}@media (max-width: 1024px){.container{padding:0 16px !important}}.img-responsive{max-width:100%;width:auto;height:auto}.image-fit{object-fit:cover;height:100%;width:100%}.fs-modal-open,.hamburger-open{height:100vh;overflow-y:hidden}.read-more{color:#ff43a5;cursor:pointer}.experience-btn *{pointer-events:none}.schedule-a-demo-parent{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999}.schedule-a-demo-parent .schedule-parent{font-family:'Poppins', sans-serif !important;padding:24px;background:#ffffff;box-shadow:0px 8px 24px rgba(0,0,0,0.08);border-radius:12px;max-width:540px;width:100%;position:relative}.schedule-a-demo-parent .schedule-parent .demo-parent{width:100%}.schedule-a-demo-parent .schedule-parent .demo-parent iframe{width:100% !important}.schedule-a-demo-parent .schedule-parent .demo-parent>header,.schedule-a-demo-parent .schedule-parent .demo-parent>div{margin-bottom:24px;width:100%;max-height:80vh;height:100%;overflow:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header{width:auto;margin-left:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header .title{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor)}.schedule-a-demo-parent .schedule-parent .demo-parent .demo-header .demo-close-icon{cursor:pointer}.schedule-a-demo-parent .schedule-parent .demo-parent .h2{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .h1{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .h2{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .input-field{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .success-container{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .scheduleDemo-submit{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent.submitted-message .demo-header{margin-bottom:10px}.schedule-a-demo-parent .schedule-parent .demo-parent form{max-height:calc(80vh - 20px);overflow-y:auto}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form h1{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor);display:block;position:absolute;top:24px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form .hs_error_rollup{display:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field{width:100%;margin-bottom:15px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field label{font-weight:600;font-size:12px;line-height:18px;text-transform:uppercase;color:var(--paraColor);opacity:0.8;margin-bottom:4px}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input{width:100%;height:51px;background:#ffffff;border:1px solid #ebebeb;box-sizing:border-box;box-shadow:0px 2px 8px rgba(0,0,0,0.04);border-radius:4px;padding:12px;font-size:18px;line-height:150%}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input::placeholder{color:#5b5273;opacity:0.4}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-input:focus{border:1px solid #ff43a6}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field input[type='text']{-webkit-appearance:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field select{cursor:pointer}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs .hs-error-msg{margin-top:6px;font-weight:600;font-size:12px;line-height:16px;color:#ff402f;text-transform:none}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs.err .error-text{display:block}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-form-field .hs-error-msgs.err svg{top:18% !important}.schedule-a-demo-parent .schedule-parent .demo-parent .legal-consent-container{font-size:0.7rem;margin-bottom:0.5rem;color:black}.schedule-a-demo-parent .schedule-parent .demo-parent .legal-consent-container a{color:#18a0fb}.schedule-a-demo-parent .schedule-parent .demo-parent .hs-button{border:0;outline:none;width:100%;padding:11.5px 24px;background:#ff43a6;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:4px;font-weight:600;font-size:18px;line-height:150%;color:#ffffff;cursor:pointer;-webkit-appearance:none}@media (max-width: 500px){.schedule-a-demo-parent .schedule-parent{padding:16px}}.schedule-a-demo-parent .submitted-message{width:100%;margin-bottom:0 !important}.schedule-a-demo-parent .submitted-message p:first-child{font-weight:bold;font-size:24px;line-height:120%;color:var(--primaryColor);position:absolute;top:24px}.schedule-a-demo-parent .submitted-message p:last-child{font-size:18px;line-height:150%;color:#473e5f;opacity:0.6;margin-bottom:20px}.modal{position:fixed;background:rgba(0,0,0,0.7);top:0;right:0;bottom:0;left:0;z-index:99999}.modal-body{font-family:'Poppins', sans-serif !important;padding:20px;background:#ffffff;box-shadow:0px 8px 24px rgba(0,0,0,0.08);border-radius:12px;max-width:540px;width:100%;max-height:calc(80vh - 20px);overflow-y:auto;position:relative}@media (max-width: 500px){.modal-body{padding:16px}}.modal-body .close-icon{cursor:pointer;z-index:1;position:absolute;right:20px;display:flex;align-items:center;top:24px}\n"
        );
      t.a = function (e) {
        var t = e.open,
          o = e.children,
          r = e.onClose,
          s = e.className,
          i = void 0 === s ? "" : s;
        return t
          ? Object(a.jsx)(n, {
              className: "modal-wrapper",
              children: Object(a.jsx)("div", {
                className: "flex modal perfectCenter "
                  .concat(i, " ")
                  .concat(t ? "open-modal" : ""),
                children: Object(a.jsxs)("div", {
                  className: "modal-body",
                  children: [
                    r &&
                      Object(a.jsx)("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "black",
                        className: "close-icon",
                        xmlns: "http://www.w3.org/2000/svg",
                        onClick: r,
                        children: Object(a.jsx)("path", {
                          d: "M20.2201 5.3709L18.6291 3.77991L12 10.409L5.37087 3.77991L3.77988 5.3709L10.409 12L3.77988 18.6292L5.37087 20.2201L12 13.591L18.6291 20.2201L20.2201 18.6292L13.591 12L20.2201 5.3709Z",
                          fill: "#0B0223",
                        }),
                      }),
                    o,
                  ],
                }),
              }),
            })
          : null;
      };
    },
  },
]);
