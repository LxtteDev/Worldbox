(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [19],
  {
    EUWv: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "ButtonStyleWrapper", function () {
          return s;
        });
      var a = t("nKUr"),
        r = t("kriW"),
        o = t("20a2"),
        i = t("vOnD"),
        l = t("S6dy"),
        c = t("hIrt"),
        p = t("G7qJ"),
        s = i.b.button.withConfig({
          displayName: "button__ButtonStyleWrapper",
          componentId: "sc-70fkv9-0",
        })(
          [
            "max-width:280px;width:100%;height:56px;background:#ff42a5;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;margin-top:24px;border:0;outline:none;overflow:hidden;&.btn-play-now *{pointer-events:none;}@media screen and (max-width:768px){height:40px;margin-top:0;&.mob{max-width:100%;margin-top:32px;height:56px;}img,video{height:auto;max-width:40px;}.btn-text{font-weight:600;font-size:14px !important;line-height:150%;}}",
            " ",
            "",
          ],
          ".btn-text{margin-left:16px;color:#fff;font-weight:600;font-size:18px;line-height:150%}.logo{margin-top:7px}\n",
          function (e) {
            return Object(l.a)(e.lang);
          }
        );
      n.default = function (e) {
        var n = e.btnText,
          t = e.className,
          i = void 0 === t ? "" : t,
          l = e.showIcon,
          d = void 0 === l || l,
          b = e.redirectUrl,
          h = void 0 === b ? "" : b,
          x = e.children,
          m = e.setShowLoader,
          g = Object(o.useRouter)().locale;
        return Object(a.jsxs)(s, {
          onClick: function () {
            if (!h) return m(!0), null;
            Object(p.g)(h);
          },
          className: "play-btn flex perfectCenter ".concat(i),
          lang: g,
          children: [
            x,
            d &&
              Object(a.jsx)(c.a, {
                width: "56",
                height: "56",
                className: "logo",
              }),
            Object(a.jsx)("span", {
              className: "btn-text",
              children: Object(a.jsx)(r.a, { id: n }),
            }),
          ],
        });
      };
    },
    IdcG: function (e, n, t) {
      "use strict";
      var a = t("nKUr"),
        r = t("vOnD").b.div.withConfig({
          displayName: "style__HorizontalSvgWrapper",
          componentId: "sc-bca2mw-0",
        })([
          "display:flex;align-items:center;height:56px;overflow:hidden;@media screen and (max-width:767px){height:40px}",
        ]);
      n.a = function () {
        return Object(a.jsx)(r, {
          children: Object(a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: "lds-message",
            width: "80px",
            height: "80px",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            children: [
              Object(a.jsx)("g", {
                transform: "translate(20 50)",
                children: Object(a.jsx)("circle", {
                  cx: "0",
                  cy: "0",
                  r: "7",
                  fill: "#51A5C9",
                  transform: "scale(0.99275 0.99275)",
                  children: Object(a.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    begin: "-0.375s",
                    calcMode: "spline",
                    keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                    values: "0;1;0",
                    keyTimes: "0;0.5;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                  }),
                }),
              }),
              Object(a.jsx)("g", {
                transform: "translate(40 50)",
                children: Object(a.jsx)("circle", {
                  cx: "0",
                  cy: "0",
                  r: "7",
                  fill: "#FF42A5",
                  transform: "scale(0.773605 0.773605)",
                  children: Object(a.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    begin: "-0.25s",
                    calcMode: "spline",
                    keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                    values: "0;1;0",
                    keyTimes: "0;0.5;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                  }),
                }),
              }),
              Object(a.jsx)("g", {
                transform: "translate(60 50)",
                children: Object(a.jsx)("circle", {
                  cx: "0",
                  cy: "0",
                  r: "7",
                  fill: "#B3D661",
                  transform: "scale(0.42525 0.42525)",
                  children: Object(a.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    begin: "-0.125s",
                    calcMode: "spline",
                    keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                    values: "0;1;0",
                    keyTimes: "0;0.5;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                  }),
                }),
              }),
              Object(a.jsx)("g", {
                transform: "translate(80 50)",
                children: Object(a.jsx)("circle", {
                  cx: "0",
                  cy: "0",
                  r: "7",
                  fill: "#FF42A5",
                  transform: "scale(0.113418 0.113418)",
                  children: Object(a.jsx)("animateTransform", {
                    attributeName: "transform",
                    type: "scale",
                    begin: "0s",
                    calcMode: "spline",
                    keySplines: "0.3 0 0.7 1;0.3 0 0.7 1",
                    values: "0;1;0",
                    keyTimes: "0;0.5;1",
                    dur: "1s",
                    repeatCount: "indefinite",
                  }),
                }),
              }),
            ],
          }),
        });
      };
    },
    MBWa: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t("nKUr"),
        r = t("o0o1"),
        o = t.n(r),
        i = t("rePB"),
        l = t("HaE+"),
        c = t("q1tI"),
        p = t("Vvt1"),
        s = t.n(p),
        d = t("kriW"),
        b = t("7Qko"),
        h = t("EUWv"),
        x = t("myyI"),
        m = t("k4wN"),
        g = t("AATo"),
        f = t("vOnD"),
        C = t("G7qJ"),
        w = t("hL++"),
        u = t("20a2"),
        j = t("IdcG"),
        L = function () {
          return Object(a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            children: [
              Object(a.jsx)("path", {
                d: "M12 10.0467C11.4822 10.0467 11.0625 10.4665 11.0625 10.9842V17.0214C11.0625 17.5392 11.4822 17.9589 12 17.9589C12.5178 17.9589 12.9375 17.5392 12.9375 17.0214V10.9842C12.9375 10.4665 12.5178 10.0467 12 10.0467Z",
                fill: "#DE5A48",
              }),
              Object(a.jsx)("path", {
                d: "M13.2656 7.63307C13.2656 8.33206 12.699 8.8987 12 8.8987C11.301 8.8987 10.7344 8.33206 10.7344 7.63307C10.7344 6.93409 11.301 6.36745 12 6.36745C12.699 6.36745 13.2656 6.93409 13.2656 7.63307Z",
                fill: "#DE5A48",
              }),
              Object(a.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M12 0C5.36705 0 0 5.36752 0 12C0 18.633 5.36752 24 12 24C18.633 24 24 18.6325 24 12C24 5.36705 18.6324 0 12 0ZM12 22.125C6.40345 22.125 1.875 17.5962 1.875 12C1.875 6.40345 6.40383 1.875 12 1.875C17.5965 1.875 22.125 6.40383 22.125 12C22.125 17.5965 17.5961 22.125 12 22.125Z",
                fill: "#DE5A48",
              }),
            ],
          });
        },
        y = t("XeFM"),
        O = function (e) {
          var n = e.className;
          return Object(a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "41",
            height: "40",
            viewBox: "0 0 41 40",
            fill: "none",
            className: n,
            children: [
              Object(a.jsx)("path", {
                d: "M29.078 35C28.966 35 28.8548 34.997 28.7445 34.992C28.6137 34.9855 28.5045 34.9774 28.3962 34.9671L28.3672 34.9643C28.2885 34.9564 28.2098 34.9472 28.1317 34.9366H27.925L27.8324 34.8899C27.5569 34.8407 27.2825 34.7746 27.0148 34.6931L26.9927 34.6864C26.8895 34.6548 26.7871 34.6206 26.6859 34.5841L26.6675 34.5775C26.565 34.5403 26.4637 34.5013 26.3634 34.4594L26.3187 34.4406C26.2335 34.4047 26.1411 34.3635 26.0492 34.3202L25.9961 34.2946C25.9067 34.2513 25.8224 34.2084 25.7395 34.1644L25.6692 34.1263C25.5859 34.0804 25.5079 34.036 25.4311 33.9898L25.341 33.9347C25.2763 33.8951 25.2017 33.8473 25.1278 33.7977L25.0513 33.7458C24.9743 33.6931 24.8995 33.6395 24.8259 33.5845L24.7568 33.5329C24.6815 33.4752 24.6053 33.4143 24.5302 33.3523L24.482 33.3122C24.3982 33.2413 24.3174 33.1699 24.2377 33.0967L24.2113 33.0725C24.1212 32.9887 24.0329 32.9027 23.9469 32.8141L20.4997 29.2698L17.0511 32.8152C16.9656 32.9033 16.8779 32.9892 16.7884 33.0725L16.7639 33.0949C16.6841 33.1683 16.6028 33.2402 16.5204 33.31L16.4667 33.3545C16.3946 33.4141 16.3185 33.4748 16.2407 33.5343L16.182 33.5782C16.0985 33.6401 16.0244 33.6933 15.9492 33.7451C15.9267 33.7609 15.897 33.7808 15.8676 33.8004C15.8 33.846 15.7243 33.8945 15.6476 33.9417L15.571 33.9882C15.4936 34.0348 15.4145 34.0799 15.3347 34.1239L15.2502 34.1694C15.1792 34.2075 15.0937 34.2509 15.0074 34.2925L14.9588 34.3161C14.8593 34.363 14.7674 34.4042 14.6741 34.4437L14.6262 34.4637C14.5349 34.5016 14.4338 34.5407 14.3317 34.5779L14.3079 34.5862C14.2132 34.6203 14.112 34.654 14.0099 34.6856L13.984 34.6944L13.96 34.7007C13.6998 34.779 13.4331 34.8424 13.1651 34.8902L13.0736 34.9363L12.8686 34.9366C12.7924 34.9468 12.7157 34.956 12.6389 34.9637L12.6041 34.9671C12.4957 34.9774 12.3861 34.9855 12.2761 34.9912L12.2376 34.9925C12.1446 34.997 12.0332 35 11.9212 35C11.8094 35 11.698 34.997 11.5873 34.992C11.4556 34.9855 11.3454 34.9774 11.2362 34.967L11.2038 34.9637C11.1271 34.956 11.0506 34.9468 10.9748 34.9366L10.8802 34.9236C10.5351 34.8723 10.1912 34.7947 9.85754 34.6931L9.83291 34.6856C9.73042 34.654 9.62915 34.62 9.52879 34.5841C9.41039 34.5415 9.30957 34.502 9.21014 34.4612L9.17954 34.4481C9.07643 34.4047 8.98464 34.3638 8.89332 34.3207L8.85721 34.3032C8.74936 34.251 8.66446 34.2082 8.58063 34.1633L8.50689 34.1232C8.42933 34.0807 8.34948 34.0349 8.27115 33.9877L8.19787 33.9437C8.11832 33.8948 8.0426 33.846 7.96764 33.7955L7.89436 33.7462C7.81604 33.692 7.74261 33.6392 7.66964 33.5851L7.60003 33.5329C7.52538 33.4759 7.44843 33.4146 7.37255 33.3517L7.31641 33.3047C7.24068 33.2408 7.15915 33.1688 7.07883 33.0949L7.05344 33.0717C6.87552 32.906 6.70342 32.729 6.54203 32.5459L6.51755 32.5181C6.44657 32.4362 6.37666 32.3526 6.30873 32.2676L6.28258 32.2342C6.20884 32.14 6.14902 32.0609 6.09089 31.98L6.04087 31.9096C5.99008 31.8375 5.93853 31.7619 5.8885 31.6851L5.83526 31.6018C5.78876 31.528 5.74256 31.452 5.69758 31.3756L5.65016 31.2934C5.60442 31.2122 5.56052 31.1309 5.51768 31.0486L5.48403 30.9829C5.43691 30.8896 5.39499 30.8025 5.3546 30.7142L5.32508 30.6493C5.28653 30.5637 5.24599 30.4676 5.20713 30.37L5.19199 30.3322C5.15084 30.2264 5.11244 30.1227 5.07679 30.018L5.06517 29.9834C5.03503 29.8956 5.00245 29.7908 4.97139 29.6842L4.96497 29.6628C4.88618 29.3898 4.82239 29.11 4.77481 28.8288L4.72846 28.7342L4.72831 28.5153C4.71745 28.4302 4.70796 28.3445 4.70001 28.2588L4.69741 28.2284C4.68869 28.1356 4.68073 28.0213 4.67492 27.9058L4.67385 27.8673C4.66941 27.771 4.6665 27.6564 4.6665 27.5412C4.6665 27.4261 4.66941 27.3115 4.67431 27.1976C4.68043 27.068 4.68792 26.958 4.69771 26.8494L4.70001 26.8239C4.70796 26.738 4.71745 26.6529 4.72831 26.5678L4.741 26.4711C4.782 26.1798 4.84014 25.8893 4.91403 25.6053V25.5944L4.97552 25.3833C5.00535 25.2817 5.03702 25.1811 5.07098 25.0814C5.1129 24.9584 5.1513 24.8549 5.19153 24.752L5.20377 24.7209C5.2463 24.6149 5.28638 24.5194 5.32875 24.4249L5.35675 24.3631C5.39453 24.2811 5.4366 24.1932 5.48035 24.1064L5.51967 24.0301C5.56052 23.9516 5.60442 23.8705 5.64985 23.7899L5.69712 23.7078C5.74103 23.6326 5.78815 23.5554 5.83603 23.4795L5.88605 23.4011C5.93914 23.3198 5.991 23.2435 6.04424 23.1679L6.08753 23.1073C6.14948 23.0215 6.20823 22.9434 6.26865 22.8664L6.30644 22.8179C6.37727 22.7289 6.44749 22.6451 6.51954 22.5627L6.54279 22.5355C6.62387 22.4439 6.70633 22.3543 6.79123 22.267L8.99612 20.0001L6.79154 17.7332C6.70556 17.6451 6.62249 17.555 6.54157 17.463L6.52 17.4383C6.4481 17.3554 6.37819 17.2722 6.31027 17.1873L6.27493 17.142C6.2093 17.0586 6.14902 16.9787 6.09043 16.8971L6.04332 16.8304C5.99038 16.7555 5.93852 16.6794 5.88835 16.602L5.83496 16.519C5.78891 16.4466 5.74256 16.3696 5.69712 16.292L5.6471 16.2052C5.60335 16.1281 5.55975 16.0474 5.51722 15.9653L5.47699 15.8867C5.43706 15.8079 5.39545 15.7211 5.35537 15.6338L5.32845 15.5742C5.28607 15.4798 5.24568 15.3842 5.20713 15.2876L5.18816 15.2396C5.15175 15.1473 5.11397 15.0434 5.07787 14.9384C5.04773 14.8499 5.02233 14.7713 4.99923 14.6955L4.99633 14.6895L4.96451 14.5797C4.87639 14.2727 4.80679 13.958 4.75799 13.6425L4.75584 13.6357L4.74039 13.5242C4.72464 13.4092 4.71087 13.2936 4.70001 13.1769L4.69802 13.1552C4.68823 13.0456 4.68073 12.9352 4.67492 12.824L4.67354 12.7826C4.66941 12.6884 4.6665 12.5745 4.6665 12.4595C4.6665 12.3436 4.66941 12.2296 4.67431 12.1159C4.68073 11.9831 4.68823 11.8723 4.69802 11.7625L4.70001 11.7409C4.71087 11.6242 4.72464 11.5086 4.74039 11.3936L4.75676 11.2757L4.75906 11.2689C4.80495 10.9745 4.86859 10.681 4.94875 10.3944L4.99633 10.228L4.99893 10.2225C5.02172 10.1483 5.04528 10.0744 5.07022 10.0014L5.08246 9.96679C5.11351 9.87588 5.15099 9.77349 5.19061 9.67188L5.21065 9.62171C5.24553 9.53411 5.28561 9.43895 5.32783 9.34458L5.35369 9.28765C5.39514 9.19721 5.4366 9.11118 5.47944 9.02609L5.52258 8.94226C5.5599 8.86975 5.60411 8.78812 5.65001 8.70759L5.69636 8.62675C5.74256 8.54827 5.78891 8.4712 5.8371 8.3957L5.88636 8.31848C5.93852 8.23858 5.99038 8.16214 6.04332 8.08712L6.08921 8.02185C6.14948 7.9388 6.20853 7.86032 6.26911 7.78294L6.30812 7.73323C6.37849 7.64579 6.44779 7.56243 6.51939 7.48048L6.53759 7.45925C6.62234 7.36284 6.70556 7.27271 6.79093 7.18479L7.157 6.80858H7.18561C7.23074 6.76847 7.27633 6.72899 7.32222 6.69015L7.36643 6.65381C7.44736 6.58634 7.52507 6.52437 7.60416 6.46429L7.6701 6.41459C7.74337 6.36017 7.8168 6.30748 7.8913 6.25621L7.97238 6.20147C8.04336 6.15381 8.11878 6.10569 8.19497 6.0585L8.27207 6.01132C8.35101 5.96413 8.42887 5.91962 8.50735 5.87621L8.58139 5.83642C8.66492 5.79191 8.7489 5.74929 8.83335 5.7084L8.89209 5.68008C8.98388 5.63652 9.07643 5.59531 9.1699 5.55599L9.21626 5.53633C9.30345 5.50031 9.39937 5.46288 9.49682 5.42781L9.54761 5.4094C9.63542 5.37763 9.74419 5.34161 9.85387 5.30796L9.88248 5.29946C10.1724 5.21233 10.4699 5.14328 10.7684 5.09437L10.8596 5.06386L10.974 5.06354C11.0526 5.053 11.1317 5.04372 11.2111 5.0357L11.2431 5.03271C11.3502 5.02233 11.4579 5.01463 11.5662 5.00881L11.6058 5.00755C11.6977 5.00315 11.8088 5 11.9209 5C12.0332 5 12.1447 5.00315 12.255 5.00818C12.3841 5.01463 12.4925 5.02233 12.5995 5.03271L12.6314 5.0357C12.7106 5.04357 12.7894 5.053 12.8679 5.06354H12.9823L13.0741 5.09437C13.3729 5.14328 13.6702 5.21233 13.96 5.29946L13.9886 5.30796C14.0984 5.34161 14.207 5.37763 14.3144 5.41648L14.3287 5.42151C14.4319 5.45863 14.534 5.49795 14.6349 5.5401L14.6585 5.55001C14.7674 5.59594 14.8593 5.63715 14.9504 5.68008L15.0053 5.70651C15.0871 5.74599 15.1664 5.78609 15.2445 5.82761C15.2621 5.83642 15.3149 5.86442 15.3149 5.86442L15.3493 5.88455C15.4145 5.9201 15.4936 5.96539 15.5715 6.01226L15.6533 6.06196C15.7243 6.10569 15.8 6.15413 15.8748 6.20446C15.897 6.2194 15.9267 6.23922 15.9565 6.25998C16.0244 6.30669 16.0985 6.35986 16.1719 6.41427L16.2276 6.45611C16.3185 6.52531 16.3946 6.58603 16.4701 6.64847L16.5259 6.69518C16.6004 6.75778 16.6829 6.83076 16.7636 6.90531L16.7901 6.92906C16.8791 7.01241 16.966 7.09735 17.0511 7.18479L20.4997 10.7302L23.9483 7.18479C24.0324 7.09813 24.1202 7.01273 24.2096 6.92937L24.2289 6.9116C24.3174 6.83028 24.3982 6.75872 24.481 6.68873L24.533 6.64548C24.605 6.58602 24.6812 6.52531 24.7589 6.46586L24.8272 6.41459C24.8995 6.36064 24.9743 6.30685 25.0504 6.25495L25.1235 6.20509C25.2017 6.15287 25.2763 6.10522 25.352 6.0585C25.3718 6.04592 25.4031 6.02689 25.4346 6.00817C25.5087 5.96382 25.5872 5.91899 25.6664 5.87527L25.7385 5.83642C25.822 5.79191 25.906 5.74929 25.9903 5.7084L26.0407 5.68402C26.1408 5.63652 26.2335 5.59531 26.3271 5.55599L26.3732 5.53664C26.4596 5.50047 26.5558 5.46319 26.6536 5.42781L26.7041 5.40972C26.7932 5.37732 26.9016 5.34161 27.0109 5.30796L27.0397 5.29946C27.2991 5.22145 27.5644 5.15822 27.8314 5.11041L27.923 5.06386L28.1314 5.06354C28.2075 5.05332 28.2842 5.04435 28.3611 5.03649L28.3965 5.03303C28.5048 5.02265 28.6137 5.01463 28.7234 5.00881L28.763 5.00739C28.8548 5.00315 28.966 5 29.078 5C29.1903 5 29.3016 5.00315 29.4119 5.00818C29.5415 5.01463 29.6497 5.02233 29.7568 5.03271L29.795 5.03617C29.8718 5.04435 29.9484 5.05332 30.0248 5.06354H30.1383L30.2299 5.09421C30.5282 5.14313 30.8256 5.21186 31.1154 5.29899L31.1457 5.30796C31.2549 5.34161 31.3632 5.37732 31.4706 5.41601L31.4857 5.42151C31.5894 5.45863 31.6918 5.49858 31.7931 5.54074L31.838 5.55945C31.9185 5.59342 32.0068 5.63259 32.0946 5.67395L32.1529 5.701L32.177 5.71359C32.2652 5.75653 32.3416 5.79569 32.4169 5.83579L32.4865 5.87354C32.5705 5.91962 32.6485 5.96413 32.7253 6.01006L32.7845 6.04514L32.8199 6.06794C32.8803 6.10522 32.9548 6.15287 33.0287 6.20226L33.1052 6.25416C33.1803 6.30591 33.2536 6.35844 33.3256 6.41207L33.3854 6.45548L33.4096 6.47514C33.4816 6.53035 33.5526 6.58713 33.6227 6.64501L33.6781 6.69062C33.7593 6.75919 33.8413 6.83201 33.9219 6.90656L33.9573 6.93912C34.0345 7.01068 34.1214 7.09562 34.2063 7.18259C34.2934 7.27224 34.3761 7.36174 34.4566 7.45312L34.4794 7.47923C34.5533 7.56432 34.6229 7.64767 34.6906 7.73245L34.7203 7.7702C34.7905 7.86 34.8497 7.93833 34.9071 8.01792L34.9571 8.0879C35.0102 8.16356 35.0615 8.23921 35.1113 8.31549L35.1643 8.39885C35.2105 8.4712 35.2574 8.54827 35.3024 8.62581L35.3523 8.71263C35.3948 8.78733 35.4387 8.86833 35.4811 8.95012C35.4846 8.95531 35.5296 9.04496 35.5296 9.04496C35.5625 9.10992 35.605 9.19831 35.6458 9.28733L35.6633 9.32603C35.7145 9.441 35.7546 9.53536 35.7925 9.63021L35.8091 9.67188C35.8485 9.77349 35.8862 9.87588 35.9218 9.97921L35.9345 10.0173C35.9657 10.1087 36.0006 10.22 36.0333 10.3322L36.0506 10.3944C36.139 10.7104 36.2076 11.036 36.2547 11.3634L36.2712 11.4553L36.2714 11.4855C36.2809 11.5618 36.2897 11.6385 36.2969 11.7156L36.2997 11.7359L36.302 11.7695C36.3116 11.8781 36.3193 11.9872 36.3243 12.0972C36.3301 12.2296 36.3332 12.3436 36.3332 12.458C36.3332 12.5745 36.3301 12.6884 36.3254 12.8019C36.3194 12.9281 36.3119 13.0372 36.3024 13.1445L36.2977 13.1939C36.2902 13.2735 36.2815 13.3527 36.2714 13.4315V13.4504L36.2568 13.541C36.208 13.8834 36.136 14.2236 36.0424 14.5533L36.0336 14.5844C36.0012 14.6969 35.9662 14.8081 35.9285 14.9185C35.8862 15.0424 35.8484 15.1453 35.8085 15.247L35.7925 15.2875C35.7545 15.3829 35.7144 15.4778 35.6725 15.5712L35.639 15.645C35.6051 15.719 35.5631 15.807 35.5195 15.8933L35.4826 15.9647C35.4399 16.0474 35.3957 16.1281 35.3506 16.2085L35.3024 16.292C35.2574 16.3696 35.2105 16.4466 35.1623 16.5223L35.117 16.5937C35.061 16.6794 35.0093 16.7555 34.9564 16.8309L34.9105 16.8953C34.8505 16.9787 34.7904 17.0586 34.7284 17.1371L34.6825 17.1953C34.6241 17.2686 34.5565 17.3499 34.4866 17.4298C34.4736 17.4454 34.4604 17.4603 34.4469 17.4754C34.3776 17.5545 34.2949 17.644 34.2101 17.7315L32.0033 20.0001L34.2081 22.2671C34.2938 22.3551 34.377 22.4452 34.4581 22.5373L34.4801 22.5628C34.552 22.6451 34.6221 22.7289 34.6906 22.8148L34.7258 22.8598C34.7911 22.9428 34.8511 23.0224 34.9089 23.1029L34.9525 23.1644C35.0093 23.2445 35.0618 23.3219 35.1127 23.4002L35.1609 23.4752C35.2112 23.555 35.2577 23.6315 35.3032 23.7091L35.3494 23.7895C35.3953 23.8706 35.4387 23.9508 35.4809 24.0318L35.5196 24.1076C35.5628 24.193 35.6047 24.2802 35.6451 24.3681L35.6714 24.4261C35.7144 24.5225 35.7546 24.6182 35.793 24.7144L35.8112 24.7602C35.8481 24.8541 35.8862 24.9582 35.9223 25.0631C35.9631 25.1828 35.9963 25.2883 36.0268 25.3933L36.0347 25.4195C36.1273 25.741 36.1992 26.0718 36.2487 26.4035L36.2712 26.4963L36.2714 26.5678C36.2804 26.6399 36.2888 26.7124 36.2958 26.7854L36.2981 26.8027L36.3017 26.8481C36.3115 26.958 36.3193 27.0688 36.3243 27.1798C36.3301 27.3115 36.3332 27.4261 36.3332 27.5412C36.3332 27.6564 36.3301 27.771 36.3254 27.8849C36.3194 28.0117 36.3116 28.1216 36.3021 28.2303L36.2969 28.2835C36.2897 28.3608 36.2812 28.4376 36.2714 28.5142V28.6361L36.2408 28.7303C36.1918 29.0447 36.1225 29.358 36.0347 29.6628L36.0266 29.69C35.996 29.7946 35.9636 29.8983 35.9285 30.001L35.9177 30.0323C35.8865 30.1236 35.8481 30.2284 35.8075 30.3317L35.7948 30.3638C35.7538 30.4665 35.7138 30.5609 35.672 30.6543L35.6504 30.7024C35.6047 30.8025 35.5628 30.8896 35.5192 30.976L35.4829 31.0467C35.4392 31.1309 35.396 31.2106 35.3515 31.2893L35.3022 31.3745C35.259 31.4489 35.212 31.5261 35.1635 31.6029L35.1133 31.6812C35.0618 31.7606 35.0093 31.838 34.9556 31.914L34.9059 31.9841C34.8511 32.0604 34.7911 32.1395 34.7298 32.218L34.6841 32.2757C34.6221 32.3534 34.552 32.4373 34.4801 32.5198L34.4469 32.5577C34.377 32.6373 34.2938 32.7278 34.2081 32.8154C34.1217 32.9044 34.0345 32.9898 33.9453 33.0725L33.9219 33.0939C33.841 33.1683 33.7598 33.2402 33.6773 33.31L33.6331 33.3463C33.5514 33.4141 33.4752 33.4752 33.3974 33.5343L33.3359 33.5809C33.2555 33.6401 33.1815 33.6933 33.1061 33.7451C33.0821 33.7622 33.0507 33.7833 33.0187 33.804C32.9577 33.8452 32.8833 33.8932 32.8076 33.9399L32.7218 33.9918C32.6482 34.036 32.5705 34.0804 32.4917 34.1239L32.4123 34.1667C32.334 34.2084 32.2497 34.2513 32.1646 34.2925L32.1157 34.3161C32.0156 34.3635 31.9229 34.4047 31.8293 34.4442L31.7831 34.4637C31.6971 34.4992 31.6006 34.537 31.5033 34.5724L31.4524 34.5904C31.3678 34.6211 31.266 34.6552 31.1625 34.6869L31.1421 34.6931C30.874 34.7749 30.5988 34.8408 30.3223 34.8902L30.2307 34.9363L30.0254 34.9366C29.9489 34.9468 29.8726 34.956 29.7953 34.9637L29.7603 34.9671C29.652 34.9774 29.5427 34.9855 29.4331 34.9912L29.3934 34.9928C29.3016 34.997 29.1903 35 29.0788 35H29.078Z",
                fill: "white",
              }),
              Object(a.jsx)("path", {
                d: "M7.67478 23.1772C5.32976 25.5884 5.32976 29.4974 7.67478 31.9084C10.0199 34.3195 13.8221 34.3195 16.1671 31.9084L24.7456 23.0887C27.0906 20.6776 27.0906 16.7685 24.7456 14.3575C22.4005 11.9466 18.5984 11.9466 16.2532 14.3575L7.67478 23.1772Z",
                fill: "#FFD900",
              }),
              Object(a.jsx)("path", {
                d: "M17.9259 27.543C17.9259 24.1333 15.2375 21.3691 11.9211 21.3691C8.60462 21.3691 5.91602 24.1333 5.91602 27.543C5.91602 30.9527 8.60462 33.7167 11.9211 33.7167C15.2375 33.7167 17.9259 30.9527 17.9259 27.543Z",
                fill: "#FFD900",
              }),
              Object(a.jsx)("path", {
                d: "M33.3247 23.1772L24.7462 14.3575C23.5737 13.152 22.037 12.5493 20.5 12.5493V27.4542L24.8324 31.9084C27.1775 34.3195 30.9797 34.3195 33.3247 31.9084C35.6697 29.4974 35.6697 25.5884 33.3247 23.1772Z",
                fill: "#179AFF",
              }),
              Object(a.jsx)("path", {
                d: "M35.0832 27.543C35.0832 24.1333 32.3947 21.3691 29.0783 21.3691C25.7617 21.3691 23.0732 24.1333 23.0732 27.543C23.0732 30.9527 25.7617 33.7167 29.0783 33.7167C32.3947 33.7167 35.0832 30.9527 35.0832 27.543Z",
                fill: "#179AFF",
              }),
              Object(a.jsx)("path", {
                d: "M7.67478 16.8248C5.32976 14.4138 5.32976 10.5048 7.67478 8.09363C10.0199 5.68266 13.8221 5.68266 16.1671 8.09379L24.7456 16.9135C27.0906 19.3245 27.0906 23.2335 24.7456 25.6447C22.4005 28.0556 18.5984 28.0556 16.2532 25.6447L7.67478 16.8248Z",
                fill: "#106100",
              }),
              Object(a.jsx)("path", {
                d: "M33.3247 8.09375C30.9797 5.68279 27.1775 5.68279 24.8324 8.09375L20.5 12.548V27.4529C22.037 27.4529 23.5737 26.85 24.7462 25.6446L33.3247 16.8249C35.6697 14.4139 35.6697 10.5049 33.3247 8.09375Z",
                fill: "#013886",
              }),
              Object(a.jsx)("path", {
                d: "M23.3013 21.8797H25.917C26.4421 21.8797 26.868 21.4418 26.868 20.9015C26.868 20.3612 26.4421 19.9233 25.917 19.9233H23.3013C22.776 19.9233 22.3501 20.3612 22.3501 20.9015C22.3501 21.4418 22.776 21.8797 23.3013 21.8797Z",
                fill: "white",
              }),
              Object(a.jsx)("path", {
                d: "M16.6671 19.5273C17.4028 19.5273 17.9992 20.1408 17.9992 20.8973C17.9992 21.6541 17.4028 22.2675 16.6671 22.2675C15.9313 22.2675 15.335 21.6541 15.335 20.8973C15.335 20.1408 15.9313 19.5273 16.6671 19.5273Z",
                fill: "white",
              }),
              Object(a.jsx)("path", {
                d: "M33.3247 16.8247C35.6699 14.4138 35.6699 10.5047 33.3247 8.09374V8.09358C30.9797 5.68262 27.1775 5.68262 24.8324 8.09358L20.5 12.5479L24.66 16.8247C27.0527 19.2848 30.9319 19.2848 33.3247 16.8247Z",
                fill: "#E7232A",
              }),
              Object(a.jsx)("path", {
                d: "M35.0832 12.4579C35.0832 9.04817 32.3947 6.28411 29.0783 6.28411C25.7617 6.28411 23.0732 9.04817 23.0732 12.4579C23.0732 15.8676 25.7617 18.6316 29.0783 18.6316C32.3947 18.6316 35.0832 15.8676 35.0832 12.4579Z",
                fill: "#E7232A",
              }),
              Object(a.jsx)("path", {
                d: "M17.9259 12.4579C17.9259 9.04817 15.2375 6.28411 11.9211 6.28411C8.60462 6.28411 5.91602 9.04817 5.91602 12.4579C5.91602 15.8676 8.60462 18.6316 11.9211 18.6316C15.2375 18.6316 17.9259 15.8676 17.9259 12.4579Z",
                fill: "#34CE42",
              }),
              Object(a.jsx)("path", {
                d: "M7.67478 16.8247C5.32976 14.4138 5.32976 10.5047 7.67478 8.09374V8.09358C10.0199 5.68262 13.8219 5.68262 16.1671 8.09358L20.4995 12.5479L16.3395 16.8247C13.9469 19.2848 10.0675 19.2848 7.67478 16.8247Z",
                fill: "#34CE42",
              }),
            ],
          });
        },
        v = function () {
          return Object(a.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "36",
            height: "22",
            viewBox: "0 0 36 22",
            fill: "none",
            children: [
              Object(a.jsx)("path", {
                d: "M10.2681 10.4957C9.3214 9.83847 8.1829 9.4552 6.95809 9.4552C3.9946 9.4552 1.53644 11.6989 1.07705 14.6376C0.991757 15.1833 1.44771 15.634 2 15.634C3.97333 15.634 5.94666 15.634 7.91999 15.634",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linecap": "round",
              }),
              Object(a.jsx)("rect", {
                x: "4.08984",
                y: "1.73181",
                width: "4.63407",
                height: "4.63407",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linejoin": "round",
              }),
              Object(a.jsx)("path", {
                d: "M20.3089 4.82129L17.9918 7.13832M17.9918 7.13832L15.6748 9.45536M17.9918 7.13832L15.6748 4.82129M17.9918 7.13832L20.3089 9.45536",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              }),
              Object(a.jsx)("path", {
                d: "M25.6516 19.2703C25.7222 19.8181 25.2677 20.2681 24.7154 20.2681C20.2332 20.2681 15.7509 20.2681 11.2686 20.2681C10.7163 20.2681 10.2618 19.8181 10.3324 19.2703C10.8218 15.4761 14.0646 12.5447 17.992 12.5447C21.9194 12.5447 25.1622 15.4761 25.6516 19.2703Z",
                stroke: "white",
                "stroke-width": "2",
              }),
              Object(a.jsx)("path", {
                d: "M25.7148 10.5792C26.4396 10.3516 27.2194 10.2277 28.0319 10.2277C31.4898 10.2277 34.3581 12.4721 34.8933 15.4115C34.9923 15.9549 34.5353 16.4064 33.983 16.4064C32.2567 16.4064 30.5305 16.4064 28.8042 16.4064",
                stroke: "white",
                "stroke-width": "2",
                "stroke-linecap": "round",
              }),
              Object(a.jsx)("circle", {
                cx: "28.4181",
                cy: "4.43502",
                r: "2.70321",
                stroke: "white",
                "stroke-width": "2",
              }),
            ],
          });
        },
        k = function (e) {
          var n = "";
          return (
            "zh-Hant-TW" == ({ cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[e] || e) &&
              (n +=
                "{\n            @media screen and (max-width: 767px) {\n              .hero-banner .hero-content {\n                .play-btn-wrapper {\n                  .create-gameroom-btn {\n                    .beta-tag {\n                      font-size: 8px;\n                    }\n                  }\n                }\n              }\n            }\n          }"),
            n
          );
        };
      function N(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function z(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? N(Object(t), !0).forEach(function (n) {
                Object(i.a)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var S = f.b.section.withConfig({
        displayName: "hero-banner__HeroBannerStyleWrapper",
        componentId: "sc-a350qy-0",
      })(
        ["", " ", ""],
        ".hero-banner{color:#fff;position:relative}.hero-banner .banner-assets{background-position:center;background-size:cover;background-repeat:no-repeat;width:100%;position:absolute;top:0;left:0}.hero-banner .banner-assets img{height:100%;width:100%}.hero-banner .banner-assets::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(180deg, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.9) 100%);z-index:1}.hero-banner .container{position:relative;z-index:2}.hero-banner .hero-game-details{position:absolute !important;bottom:52px;left:10%;max-width:80%}.hero-banner .banner-assets .video-wrapper{height:calc(85vh - 108px);min-height:360px}.hero-banner .banner-assets video{width:100%;object-fit:cover;object-position:top center}.hero-banner .hero-content{align-items:flex-end}.hero-banner .hero-content .app-logo{padding-top:195px}.hero-banner .hero-content .app-logo .lazyload-container{width:263px;height:366px;overflow:hidden;border-radius:8px}.hero-banner .hero-content .app-logo .lazyload-container::before{content:'';position:absolute;top:0;left:0;width:95px;height:200%;z-index:2;transform-origin:right center;transform:translate(-100%, -50%) rotate(45deg);background:#ffffff;opacity:0.5;filter:blur(25px);animation:fadeInOut 5s infinite}@keyframes fadeInOut{0%{left:0;transform-origin:right center;transform:translate(-100%, -50%) rotate(45deg)}10%{left:100%;transform-origin:center left;transform:translate(0, 0) rotate(45deg)}100%{left:100%;transform-origin:center left;transform:translate(0, 0) rotate(45deg)}}.hero-banner .hero-content .app-logo img{border-radius:8px;border:1px solid rgba(255,255,255,0.2);position:relative;height:366px;display:block;width:100%}.hero-banner .hero-content .app-info{margin:24px;margin-top:8px;padding-bottom:56px;max-width:550px}.hero-banner .hero-content .app-info .app-name{font-weight:700;font-size:36px;line-height:54px;margin-bottom:8px}.hero-banner .hero-content .app-info .genre-company{display:flex}.hero-banner .hero-content .app-info .genre-company .hide-partition::before{display:none}@media screen and (max-width: 450px){.hero-banner .hero-content .app-info .genre-company{flex-direction:column}.hero-banner .hero-content .app-info .genre-company .company{margin-bottom:12px}.hero-banner .hero-content .app-info .genre-company .company::before{display:none}.hero-banner .hero-content .app-info .genre-company .genre{margin-bottom:4px}}.hero-banner .hero-content .app-info .company{font-size:14px;line-height:150%;margin-bottom:16px;white-space:nowrap}@media screen and (max-width: 767px){.hero-banner .hero-content .app-info .company{white-space:unset}}.hero-banner .hero-content .app-info .genre{font-size:14px;line-height:150%;margin-bottom:16px;display:inline-block;position:relative;color:white}.hero-banner .hero-content .app-info .en-genre:hover:after{transform:scaleX(1);transform-origin:bottom left}.hero-banner .hero-content .app-info .en-genre:after{content:'';position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:white;transform-origin:bottom right;transition:transform 0.25s ease-out}@media screen and (max-width: 767px){.hero-banner .hero-content .app-info .en-genre::after{display:none}}.hero-banner .hero-content .app-info .company::before{content:'|';margin:0 10px;color:rgba(255,255,255,0.2);font-size:14px}.hero-banner .hero-content .app-info .moddable-game-label{display:flex;flex-direction:row;justify-content:start;align-items:center;padding:4px 0px;height:28px;margin-bottom:16px}.hero-banner .hero-content .app-info .moddable-game-label svg{margin-right:10px}.hero-banner .hero-content .app-info .moddable-game-label .moddable-game-text{font-weight:normal;font-size:12px;line-height:150%;color:#ffffff}@media screen and (max-width: 767px){.hero-banner .hero-content .app-info .moddable-game-label{margin-bottom:12px}}.hero-banner .hero-content .app-info .upcoming-moddable-game-label{margin-bottom:16px}.hero-banner .hero-content .app-info .availability{padding:7.5px 12.5px;background:#E3DFEC;border-radius:6px;color:#5B5273;font-weight:600;font-size:14px;line-height:150%;width:max-content}@media screen and (max-width: 767px){.hero-banner .hero-content .app-info .availability{font-weight:700;font-size:12px;background:unset;padding:7.5px 10px 7.5px 0px;color:#FFFFFF;width:auto}}.hero-banner .hero-content .play-btn-wrapper{min-width:auto;max-width:max-content}.hero-banner .hero-content .play-btn-wrapper a.create-gameroom-btn{display:none !important}.hero-banner .hero-content .play-btn-wrapper .button-wrapper{display:flex;flex-direction:row;width:max-content}.hero-banner .hero-content .play-btn-wrapper .play-btn{padding:0 12px}.hero-banner .hero-content .play-btn-wrapper .play-btn.disabled{max-width:100%;background:none;border:none;height:auto;pointer-events:none;margin-top:0;border-top:1px solid rgba(255,255,255,0.2);border-radius:0;padding:14px 0 0 0;justify-content:flex-start}.hero-banner .hero-content .play-btn-wrapper .play-btn.disabled .btn-text{text-align:left;margin-left:12px;font-weight:normal;font-family:'Poppins', sans-serif;font-size:14px !important}.hero-banner .hero-content .play-btn-wrapper .play-btn.disabled svg{width:24px;height:24px;flex-shrink:0;flex-grow:0}@media screen and (max-width: 767px){.hero-banner .hero-content .play-btn-wrapper .play-btn.disabled{padding:14px 0}}.hero-banner .hero-content .play-btn-wrapper .download-btn{display:flex;justify-content:space-evenly;height:56px;margin-top:16px;padding:14px 16px;min-width:200px;width:max-content;border:1px solid rgba(255,255,255,0.2);border-radius:6px;position:relative}.hero-banner .hero-content .play-btn-wrapper .download-btn.mac-download-btn{background:linear-gradient(180deg, #5BCE66 0%, #9BCE5B 100%)}.hero-banner .hero-content .play-btn-wrapper .download-btn.mac-download-btn:hover{background:#a4db80;border:1px solid rgba(255,255,255,0.6);color:#fff}.hero-banner .hero-content .play-btn-wrapper .download-btn.mac-download-btn .windows-logo{display:none}.hero-banner .hero-content .play-btn-wrapper .download-btn.windows-download-btn{background:linear-gradient(180deg, #159AFF 0%, #15B9FF 100%)}.hero-banner .hero-content .play-btn-wrapper .download-btn.windows-download-btn:hover{background:#52cbff;border:1px solid rgba(255,255,255,0.6)}.hero-banner .hero-content .play-btn-wrapper .download-btn.windows-download-btn .mac-logo{display:none}.hero-banner .hero-content .play-btn-wrapper .download-btn.windows-download-btn .btn-text::before{margin-left:9px}.hero-banner .hero-content .play-btn-wrapper .download-btn .btn-text{position:relative;display:flex;flex-direction:column;margin-left:20px}.hero-banner .hero-content .play-btn-wrapper .download-btn .btn-text .btn-main-text{font-weight:600;font-size:16px;line-height:24px}.hero-banner .hero-content .play-btn-wrapper .download-btn .btn-text .btn-sub-text{font-weight:500;font-size:12px;line-height:18px;letter-spacing:0.5px}.hero-banner .hero-content .play-btn-wrapper .download-btn .btn-text::before{content:'';border-right:1px solid rgba(255,255,255,0.5);left:-24px;top:0;position:absolute;height:100%;margin-left:12px}@media screen and (max-width: 345px){.hero-banner .hero-content .play-btn-wrapper .download-btn{padding:14px 12px}}.hero-banner .hero-content .play-btn-wrapper .play-on-pc-message{font-weight:400;font-size:14px;line-height:150%;color:#FFFFFF;margin-top:14px}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn{height:56px;background:#9d68f4;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:0px 20px;gap:12px;margin-left:24px;margin-top:24px;cursor:pointer;order:2;border:none}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text{display:flex;flex-direction:column;width:max-content}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .main-btn-text{font-weight:600;font-size:16px;line-height:150%;display:flex;align-items:center;text-align:center;color:#fff}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .sub-btn-text{font-weight:500;font-size:10px;line-height:15px;display:flex;align-items:center;color:rgba(255,255,255,0.8)}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .beta-tag{display:flex;flex-direction:row;align-items:center;padding:0px 8px;gap:10px;height:18px;background:#622cb8;border-radius:40px;font-weight:400;font-size:12px;line-height:150%;color:rgba(255,255,255,0.8);width:max-content}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .mobile-only{display:none}@media screen and (max-width: 1024px){.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn{margin-left:0}}@media screen and (max-width: 767px){.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn{height:40px;padding:0px 16px;gap:8px;margin-left:0;margin-top:8px;max-width:210px;min-width:243px}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .main-btn-text{font-size:12px}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .pc-only{display:none}.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn .btn-text .mobile-only{display:block}}@media screen and (max-width: 410px){.hero-banner .hero-content .play-btn-wrapper .create-gameroom-btn{min-width:auto}}.hero-banner .hero-content .pre-api-respsonse{display:flex;flex-direction:row;width:max-content}.hero-banner .loader-wrapper{position:relative}.hero-banner .loader-wrapper svg{top:0;left:0;transform:translate(0)}.hero-banner .loader-wrapper .loader{display:flex;height:-webkit-fill-available;align-items:center;margin-top:24px}.hero-banner .loader-wrapper .loader .loading-text{font-size:14px;line-height:150%;width:max-content;min-width:168px}@media screen and (max-width: 767px){.hero-banner .loader-wrapper .loader .loading-text{display:none}}@media screen and (max-width: 767px){.hero-banner .loader-wrapper .loader{margin-top:0}}.hero-banner .loader-wrapper .create-room-loader{margin-left:24px}@media screen and (max-width: 1295px){.hero-banner .hero-game-details{left:5%}}@media screen and (max-width: 1250px){.hero-banner .hero-game-details{left:4%}}@media screen and (max-width: 1200px){.hero-banner .hero-game-details{left:0px;bottom:52px}}@media screen and (max-width: 950px){.hero-banner .hero-game-details{max-width:100%}}@media screen and (min-width: 768px){.hero-banner .banner-assets.fallback{background-image:url(https://cdn.now.gg/apps-content/img/homepage/apps-video-pc.png)}}@media screen and (max-width: 1024px){.hero-banner .hero-content .play-btn-wrapper{flex-direction:column}.hero-banner .hero-content .play-btn-wrapper .button-wrapper{flex-direction:column}}@media screen and (max-width: 767px){.hero-banner{padding-top:calc(100vh - 545px)}.hero-banner .hero-content,.hero-banner .banner-assets{height:100%}.hero-banner .hero-content::before,.hero-banner .banner-assets::before{background:linear-gradient(180deg, rgba(0,0,0,0) 48.66%, rgba(0,0,0,0.6) 65.72%, #000 100%)}.hero-banner .hero-game-details{left:0px;bottom:0px}.hero-banner .banner-assets.fallback{background-image:url(https://cdn.now.gg/apps-content/img/homepage/apps-video-mob.png)}.hero-banner .banner-assets .lazyload-container,.hero-banner .banner-assets .LazyLoad{height:100%}.hero-banner .hero-content{padding-bottom:16px !important;padding-left:0 !important;padding-right:0 !important}.hero-banner .hero-content .app-logo .lazyload-container{width:123px;height:164px}.hero-banner .hero-content .app-logo img{width:123px;height:100%}.hero-banner .hero-content .app-info{margin:8px 0 0 16px;padding-bottom:6px}.hero-banner .hero-content .app-info .app-name{font-weight:bold;font-size:18px;line-height:140%;margin-bottom:4px}.hero-banner .hero-content .app-info .company{font-size:14px;line-height:150%;margin-bottom:4px}.hero-banner .hero-content .play-btn-wrapper{min-width:auto}.hero-banner .hero-content .play-btn-wrapper .play-btn{min-width:243px}.hero-banner .loader-wrapper{height:40px}}@media screen and (max-width: 410px){.hero-banner .hero-content .play-btn-wrapper .play-btn{min-width:auto;max-width:210px}}.hero-banner .hero-content .play-btn-wrapper .download-btn *{pointer-events:none}.game-hero-banner{height:85vh;min-height:468px}@media screen and (max-width: 767px){.game-hero-banner{height:78vh}}\n",
        function (e) {
          return k(e.lang);
        }
      );
      s()(
        function () {
          return t.e(346).then(t.bind(null, "Sktx"));
        },
        {
          ssr: !1,
          loadableGenerated: {
            webpack: function () {
              return ["Sktx"];
            },
            modules: ["../release-info"],
          },
        }
      ),
        (n.default = function (e) {
          var n,
            t,
            r,
            i,
            p = e.rating,
            s = e.name,
            f = e.releaseInfo,
            k = e.desktop,
            N = e.mobile,
            M = e.playBtnDetails,
            F = e.developers_details,
            E = e.onApiLoad,
            _ = e.moddable,
            A = e.upcoming,
            B = void 0 !== A && A,
            T = e.bannerCTA,
            I = e.bluestacksSupported,
            D = e.appSlug,
            Z = (e.nowgg_id, Object(c.useState)("")),
            U = Z[0],
            W = Z[1],
            H = Object(c.useState)(""),
            P = H[0],
            V = H[1],
            G = Object(c.useState)("warningBrowser"),
            R = (G[0], G[1]),
            q = Object(c.useState)(!1),
            K = q[0],
            J = q[1],
            X = Object(c.useState)(),
            Q = X[0],
            Y = X[1],
            $ = Object(c.useState)(!1),
            ee = $[0],
            ne = $[1],
            te = Object(c.useState)(!1),
            ae = te[0],
            re = te[1],
            oe = Object(c.useState)(""),
            ie = oe[0],
            le = oe[1],
            ce = Object(c.useState)({}),
            pe = ce[0],
            se = ce[1],
            de = Object(c.useRef)(null),
            be = Object(u.useRouter)().locale,
            he = Object(c.useState)(!1),
            xe = he[0],
            me = he[1];
          Object(c.useEffect)(function () {
            var e = window.navigator.userAgent;
            Y(Object(b.useUserAgent)(e).isMobile),
              Object(b.useUserAgent)(e).isMobile
                ? (N && (N.video || N.banner)) || me(!0)
                : (k && (k.video || k.banner)) || me(!0);
          }, []),
            Object(c.useEffect)(function () {
              fe();
            }, []);
          var ge = 1,
            fe = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var n, t, a, r, i;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), Object(C.a)(z({}, M));
                        case 2:
                          (n = e.sent),
                            (t = n.code),
                            (a = n.redirectUrl),
                            (r = n.success),
                            (i = n.gameRoomUrl),
                            r ? (W(a), V(i)) : R(g.j[t] || "invalidRegion_2"),
                            J(!0),
                            "function" === typeof E && E(a);
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
            })();
          Object(c.useEffect)(
            function () {
              ee && Object(C.g)(U);
            },
            [U]
          ),
            Object(c.useEffect)(
              function () {
                ae && Object(C.g)(P);
              },
              [P]
            );
          var Ce = function (e) {
            de.current && de.current.classList.add("fallback");
          };
          return (
            Object(c.useEffect)(function () {
              navigator &&
                (le(Object(C.d)().platform), se(navigator.userAgent));
            }, []),
            Object(a.jsx)(S, {
              lang: be,
              children: Object(a.jsxs)("div", {
                className: "hero-banner game-hero-banner",
                children: [
                  Object(a.jsx)("div", {
                    className: "banner-assets ".concat(xe ? "fallback" : ""),
                    ref: de,
                    children: Object(a.jsx)("div", {
                      className: "video-wrapper",
                      children: Object(a.jsxs)("video", {
                        autoPlay: !0,
                        muted: !0,
                        playsInline: !0,
                        preload: "none",
                        className: "page-vid",
                        height: "100%",
                        width: "100%",
                        poster: Q
                          ? null === N || void 0 === N
                            ? void 0
                            : N.banner
                          : null === k || void 0 === k
                          ? void 0
                          : k.banner,
                        onEnded: function (e) {
                          try {
                            var n = e.target;
                            if (ge >= 2)
                              return (
                                n.removeAttribute("autoplay"), void n.load()
                              );
                            ge++, n.load();
                          } catch (e) {}
                        },
                        onError: Ce,
                        onStalled: Ce,
                        children: [
                          Object(a.jsx)("source", {
                            type: "video/mp4",
                            src: Q
                              ? null === N || void 0 === N
                                ? void 0
                                : N.video
                              : null === k || void 0 === k
                              ? void 0
                              : k.video,
                          }),
                          Object(a.jsx)(d.a, { id: "videoNotSupported" }),
                        ],
                      }),
                    }),
                  }),
                  Object(a.jsx)("div", {
                    className: "container hero-game-details",
                    children: Object(a.jsxs)("div", {
                      className: "container hero-content flex",
                      children: [
                        Object(a.jsx)("div", {
                          className: "app-logo",
                          children: Object(a.jsxs)(w.a, {
                            lazyload: !1,
                            children: [
                              Object(a.jsx)("source", {
                                media: "(max-width:767px)",
                                srcSet:
                                  null === N || void 0 === N ? void 0 : N.tile,
                              }),
                              Object(a.jsx)("img", {
                                className: "logo-img",
                                src: Q
                                  ? null === N || void 0 === N
                                    ? void 0
                                    : N.tile
                                  : null === k || void 0 === k
                                  ? void 0
                                  : k.tile,
                                height: "366",
                                width: "263",
                                alt: s,
                                onError: function (e) {
                                  var n =
                                    "https://cdn.now.gg/apps-content/img/homepage/app-tile.png";
                                  e.target.src !== n && (e.target.src = n);
                                },
                              }),
                            ],
                          }),
                        }),
                        Object(a.jsxs)("div", {
                          className: "app-info",
                          children: [
                            Object(a.jsx)("div", {
                              children: Object(a.jsx)(x.default, { rating: p }),
                            }),
                            Object(a.jsx)("h2", {
                              className: "app-name",
                              children: s,
                            }),
                            Object(a.jsxs)("div", {
                              className: "genre-company",
                              children: [
                                null !== (n = f.genre) &&
                                void 0 !== n &&
                                n.length
                                  ? g.a.includes(g.b[be] || be)
                                    ? Object(a.jsx)("a", {
                                        className: "genre en-genre",
                                        href: ""
                                          .concat(Object(C.e)(be), "/games/")
                                          .concat(
                                            null === (t = f.genre[0]) ||
                                              void 0 === t
                                              ? void 0
                                              : t.slug,
                                            ".html"
                                          ),
                                        children:
                                          null === (r = f.genre[0]) ||
                                          void 0 === r
                                            ? void 0
                                            : r.name,
                                      })
                                    : Object(a.jsx)("span", {
                                        className: "genre",
                                        children:
                                          null === (i = f.genre[0]) ||
                                          void 0 === i
                                            ? void 0
                                            : i.name,
                                      })
                                  : null,
                                Object(a.jsx)("div", {
                                  className: "company ".concat(
                                    f.genre[0] ? "" : "hide-partition"
                                  ),
                                  children:
                                    (null === F || void 0 === F
                                      ? void 0
                                      : F.name) || "",
                                }),
                              ],
                            }),
                            _ &&
                              Object(a.jsxs)("div", {
                                className: "moddable-game-label ".concat(
                                  B && "upcoming-moddable-game-label"
                                ),
                                children: [
                                  Object(a.jsx)(m.a, {}),
                                  Object(a.jsx)("span", {
                                    className: "moddable-game-text",
                                    children: Object(a.jsx)(d.a, {
                                      id: "moddableGame",
                                    }),
                                  }),
                                ],
                              }),
                            B
                              ? Object(a.jsx)("div", {
                                  className: "availability",
                                  children: T,
                                })
                              : K
                              ? Object(a.jsx)("div", {
                                  className: "play-btn-wrapper",
                                  children: U
                                    ? Object(a.jsx)("div", {
                                        className: ee
                                          ? "loader-wrapper"
                                          : "play-btn-parent",
                                        children: ee
                                          ? Object(a.jsxs)("div", {
                                              className: "loader",
                                              children: [
                                                Object(a.jsx)("span", {
                                                  className: "loading-text",
                                                  children: Object(a.jsx)(d.a, {
                                                    id: "fetchingGameDetails",
                                                  }),
                                                }),
                                                Object(a.jsx)(j.a, {}),
                                              ],
                                            })
                                          : Object(a.jsxs)("div", {
                                              className: "button-wrapper",
                                              children: [
                                                Object(a.jsx)(h.default, {
                                                  btnText: "playInBrowser_1",
                                                  redirectUrl: U,
                                                  className: "btn-play-now",
                                                }),
                                                P
                                                  ? Object(a.jsxs)("button", {
                                                      class:
                                                        "create-gameroom-btn",
                                                      onClick: function () {
                                                        if (!P)
                                                          return re(!0), null;
                                                        Object(C.g)(P);
                                                      },
                                                      children: [
                                                        Object(a.jsx)(
                                                          "figure",
                                                          {
                                                            class:
                                                              "game-room-icon",
                                                            children: Object(
                                                              a.jsx
                                                            )(v, {}),
                                                          }
                                                        ),
                                                        Object(a.jsxs)("div", {
                                                          class: "btn-text",
                                                          children: [
                                                            Object(a.jsx)(
                                                              "span",
                                                              {
                                                                class:
                                                                  "main-btn-text pc-only",
                                                                children:
                                                                  Object(a.jsx)(
                                                                    d.a,
                                                                    {
                                                                      id: "createGameRoom",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                            Object(a.jsx)(
                                                              "span",
                                                              {
                                                                class:
                                                                  "main-btn-text mobile-only",
                                                                children:
                                                                  Object(a.jsx)(
                                                                    d.a,
                                                                    {
                                                                      id: "playWithFriends",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                            Object(a.jsx)(
                                                              "span",
                                                              {
                                                                class:
                                                                  "sub-btn-text pc-only",
                                                                children:
                                                                  Object(a.jsx)(
                                                                    d.a,
                                                                    {
                                                                      id: "playAndChat",
                                                                    }
                                                                  ),
                                                              }
                                                            ),
                                                          ],
                                                        }),
                                                        Object(a.jsx)("span", {
                                                          class: "beta-tag",
                                                          children: Object(
                                                            a.jsx
                                                          )(d.a, {
                                                            id: "beta",
                                                          }),
                                                        }),
                                                      ],
                                                    })
                                                  : null,
                                              ],
                                            }),
                                      })
                                    : Object(a.jsxs)(a.Fragment, {
                                        children: [
                                          Object(a.jsx)(h.default, {
                                            btnText: "".concat(
                                              Q ||
                                                ("win" !== ie && "mac" !== ie)
                                                ? Object(C.k)("appNotAvailable")
                                                : Object(C.k)(
                                                    "playOnBlueStacks"
                                                  )
                                            ),
                                            redirectUrl: U,
                                            className: "disabled",
                                            showIcon: !1,
                                            children: Object(a.jsx)(L, {}),
                                          }),
                                          !I || ("win" !== ie && "mac" !== ie)
                                            ? null
                                            : !Q &&
                                              Object(a.jsxs)(y.default, {
                                                btnText: Object(C.k)(
                                                  "download"
                                                ),
                                                subText:
                                                  "mac" == ie
                                                    ? Object(C.k)(
                                                        "bluestacksForMac"
                                                      )
                                                    : Object(C.k)(
                                                        "blueStack10"
                                                      ),
                                                className:
                                                  "download-btn download-bluestacks-btn ".concat(
                                                    "mac" == ie
                                                      ? "mac-download-btn"
                                                      : "windows-download-btn"
                                                  ),
                                                platform: ie,
                                                app_pkg: M.packageName,
                                                userAgent: pe,
                                                appSlug: D,
                                                children: [
                                                  Object(a.jsx)(O, {
                                                    className:
                                                      "btn-img windows-logo",
                                                  }),
                                                  Object(a.jsx)("img", {
                                                    src: "https://cdn-www.bluestacks.com/bs-images/bs4-logo-icon.png",
                                                    height: "54",
                                                    width: "54",
                                                    class: "btn-img mac-logo",
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                                })
                              : Object(a.jsx)("div", {
                                  className: "".concat(
                                    ee ? "loader-wrapper" : "play-btn-wrapper",
                                    " pre-api-respsonse"
                                  ),
                                  children: ee
                                    ? Object(a.jsxs)("div", {
                                        className: "loader",
                                        children: [
                                          Object(a.jsx)("span", {
                                            className: "loading-text",
                                            children: Object(a.jsx)(d.a, {
                                              id: "fetchingGameDetails",
                                            }),
                                          }),
                                          Object(a.jsx)(j.a, {}),
                                        ],
                                      })
                                    : Object(a.jsx)(h.default, {
                                        btnText: "playInBrowser_1",
                                        redirectUrl: U,
                                        className: "btn-play-now",
                                        setShowLoader: ne,
                                      }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
    S6dy: function (e, n, t) {
      "use strict";
      n.a = function (e) {
        var n = { cn: "zh-Hans-CN", tw: "zh-Hant-TW" }[e] || e,
          t = "";
        return (
          "ja" == n
            ? (t +=
                "{\n        @media (max-width: 767px) {\n            .btn-text {\n              font-weight: 600;\n              font-size: 11px !important;\n              line-height: 150%;\n              margin-left: 8px;\n              }\n            }\n        }")
            : "ko" == n || "de" === n || "id" === n
            ? (t +=
                "\n        @media (max-width: 767px) {\n            .btn-text {\n                font-weight: 600;\n                font-size: 12px !important;\n                line-height: 150%;\n                margin-left: 8px;\n              }\n            }\n        ")
            : ("vi" !== n && "es" !== n && "pt-br" !== n && "fr" !== n) ||
              (t +=
                "\n          .btn-text {\n              font-weight: 600;\n              font-size: 15px !important;\n              line-height: 150%;\n            }\n            @media (max-width: 767px) {\n              .btn-text {\n                  text-align: left;\n                  line-height: 120%\n                }\n              }\n      "),
          t
        );
      };
    },
    XeFM: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "ButtonStyleWrapper", function () {
          return c;
        });
      var a = t("nKUr"),
        r = t("20a2"),
        o = t("vOnD"),
        i = t("S6dy"),
        l = t("G7qJ"),
        c = o.b.a.withConfig({
          displayName: "download-button__ButtonStyleWrapper",
          componentId: "sc-c953su-0",
        })(
          [
            "max-width:280px;width:100%;height:56px;background:#ff42a5;box-shadow:0px 8px 16px rgba(0,0,0,0.1);border-radius:8px;margin-top:24px;border:0;outline:none;overflow:hidden;&.btn-play-now *{pointer-events:none;}@media screen and (max-width:768px){height:40px;margin-top:0;&.mob{max-width:100%;margin-top:32px;height:56px;}img,video{height:auto;max-width:40px;}.btn-text{font-weight:600;font-size:14px !important;line-height:150%;}}&.download-loader{position:absolute;left:0;bottom:0;height:4px;background:linear-gradient( 88.25deg,#df011f 0.18%,#9d2750 37.7%,#0a88d9 119.08% );width:100%;overflow:hidden;&::after{position:absolute;left:-100%;content:'';bottom:0;display:block;background-color:#fff;height:4px;width:100%;animation:getWidth 0.5s ease-in infinite;}}@keyframes getWidth{0%{left:-100%;}100%{left:100%;}}",
            " ",
            "",
          ],
          ".btn-text{margin-left:16px;color:#fff;font-weight:600;font-size:18px;line-height:150%}.logo{margin-top:7px}\n",
          function (e) {
            return Object(i.a)(e.lang);
          }
        );
      n.default = function (e) {
        var n = e.btnText,
          t = e.subText,
          o = e.className,
          i = void 0 === o ? "" : o,
          p = e.children,
          s = (e.setShowLoader, e.app_pkg),
          d = e.platform,
          b = (e.incompatible, e.userAgent),
          h = (e.appSlug, e.dataBsVersion),
          x = e.dataUtm,
          m = Object(r.useRouter)().locale,
          g = Object(l.m)(),
          f = Object(l.c)("_ga") || "",
          C = Object(l.c)("utm_campaign") || "",
          w = Object(l.c)("utm_source") || "",
          u = Object(l.c)("utm_medium") || "",
          j = Object(l.c)("first_landing_page") || "",
          L = x || s,
          y = h || ("mac" === d ? "bs4" : "bs5"),
          O = Object(l.b)(d, g, m, f, C, w, u, s, j, b, L, y);
        return Object(a.jsxs)(c, {
          href: O,
          className: "flex perfectCenter ".concat(i),
          lang: m,
          onClick: function (e) {
            var n = e.target,
              t = "download-loader";
            n.classList.add(t),
              setTimeout(function () {
                n.classList.remove(t);
              }, 1500);
          },
          "data-bsVersion": h,
          "data-utm": x,
          children: [
            p,
            Object(a.jsxs)("span", {
              className: "btn-text",
              children: [
                Object(a.jsx)("span", {
                  className: "btn-main-text",
                  children: n,
                }),
                Object(a.jsx)("span", {
                  className: "btn-sub-text",
                  children: t,
                }),
              ],
            }),
          ],
        });
      };
    },
    hIrt: function (e, n, t) {
      "use strict";
      var a = t("nKUr"),
        r = t("lPHp"),
        o = t.n(r),
        i = t("q1tI"),
        l = t("qM95");
      n.a = function (e) {
        var n = e.width,
          t = e.height,
          r = e.className,
          c = Object(i.createRef)();
        return (
          Object(i.useEffect)(function () {
            o.a.loadAnimation({
              container: c.current,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: l,
            });
          }, []),
          Object(a.jsx)("div", {
            className: r,
            style: { width: "".concat(n, "px"), height: "".concat(t, "px") },
            ref: c,
          })
        );
      };
    },
    myyI: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t("nKUr"),
        r = t("vOnD").b.div.withConfig({
          displayName: "rating__RatingStyled",
          componentId: "sc-mf47ig-0",
        })(
          [
            "margin-bottom:8px;width:130px;font-size:20px;@media screen and (max-width:767px){margin-bottom:4px;font-size:18px;}",
            "",
          ],
          "\ufeff.star{margin-right:4px;color:rgba(255,255,255,0.5)}.star:last-child{margin-right:0}.star.fill{color:#ffc32a !important}.star.fill-half{position:relative}.star.fill-half::after{content:'';position:absolute;width:50%;height:100%;right:0;top:0}.star.fill-half::before{content:'\u2605';position:absolute;top:-1px;left:0;opacity:1;width:50%;height:100%;color:#ffc32a;overflow:hidden}\n"
        );
      n.default = function (e) {
        var n = e.rating,
          t = [],
          o = +(void 0 === n ? 0 : n),
          i = Math.floor(o),
          l = i === o ? 0 : o <= i + 0.5 ? 0.5 : 1;
        if (0 === o)
          for (var c = 0; c < 5; c++)
            t.push(
              Object(a.jsx)(
                "span",
                { className: "star", children: "\u2605" },
                c
              )
            );
        else if (5 === o)
          for (var p = 0; p < 5; p++)
            t.push(
              Object(a.jsx)(
                "span",
                { className: "star fill", children: "\u2605" },
                p
              )
            );
        else {
          for (var s = 0; s < i && s < i; s++)
            t.push(
              Object(a.jsx)(
                "span",
                { className: "star fill", children: "\u2605" },
                s
              )
            );
          t.push(
            Object(a.jsx)("span", {
              className: "star ".concat(
                0 === l ? "" : 1 === l ? "fill" : "fill-half"
              ),
              children: "\u2605",
            })
          );
          for (var d = i; d < 4; d++)
            t.push(
              Object(a.jsx)(
                "span",
                { className: "star", children: "\u2605" },
                d
              )
            );
        }
        return Object(a.jsx)(r, {
          className: "ratings",
          children: t.map(function (e) {
            return e;
          }),
        });
      };
    },
  },
]);
