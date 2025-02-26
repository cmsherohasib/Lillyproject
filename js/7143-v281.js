"use strict";
(globalThis["webpackChunkwheel_of_names_quasar"] =
  globalThis["webpackChunkwheel_of_names_quasar"] || []).push([
  [7143],
  {
    7143: (e, t, l) => {
      l.r(t), l.d(t, { default: () => b });
      var n = l(59835),
        s = l(16707);
      const a = {
          class:
            "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
        },
        o = (0, n._)("div", { style: { "font-size": "30vh" } }, " 404 ", -1),
        c = (0, n._)(
          "div",
          { class: "text-h2", style: { opacity: ".4" } },
          " Oops. Nothing here... ",
          -1
        ),
        r = {
          setup(e) {
            return (
              (0, n.bv)(() =>
                (0, s.trackEvent)("404NotFound", location.pathname)
              ),
              (e, t) => {
                const l = (0, n.up)("q-btn");
                return (
                  (0, n.wg)(),
                  (0, n.iD)("div", a, [
                    (0, n._)("div", null, [
                      o,
                      c,
                      (0, n.Wm)(l, {
                        class: "q-mt-xl",
                        color: "white",
                        "text-color": "blue",
                        unelevated: "",
                        to: "/",
                        label: "Go Home",
                        "no-caps": "",
                      }),
                    ]),
                  ])
                );
              }
            );
          },
        };
      var u = l(68879),
        h = l(69984),
        i = l.n(h);
      const p = r,
        b = p;
      i()(r, "components", { QBtn: u.Z });
    },
  },
]);
