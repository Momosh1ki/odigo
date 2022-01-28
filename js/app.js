(() => {
  "use strict";
  function e(e) {
    this.type = e;
  }
  (e.prototype.init = function () {
    const e = this;
    (this.оbjects = []),
      (this.daClassname = "_dynamic_adapt_"),
      (this.nodes = document.querySelectorAll("[data-da]"));
    for (let e = 0; e < this.nodes.length; e++) {
      const t = this.nodes[e],
        n = t.dataset.da.trim().split(","),
        o = {};
      (o.element = t),
        (o.parent = t.parentNode),
        (o.destination = document.querySelector(n[0].trim())),
        (o.breakpoint = n[1] ? n[1].trim() : "767"),
        (o.place = n[2] ? n[2].trim() : "last"),
        (o.index = this.indexInParent(o.parent, o.element)),
        this.оbjects.push(o);
    }
    this.arraySort(this.оbjects),
      (this.mediaQueries = Array.prototype.map.call(
        this.оbjects,
        function (e) {
          return (
            "(" + this.type + "-width: " + e.breakpoint + "px)," + e.breakpoint
          );
        },
        this
      )),
      (this.mediaQueries = Array.prototype.filter.call(
        this.mediaQueries,
        function (e, t, n) {
          return Array.prototype.indexOf.call(n, e) === t;
        }
      ));
    for (let t = 0; t < this.mediaQueries.length; t++) {
      const n = this.mediaQueries[t],
        o = String.prototype.split.call(n, ","),
        i = window.matchMedia(o[0]),
        r = o[1],
        l = Array.prototype.filter.call(this.оbjects, function (e) {
          return e.breakpoint === r;
        });
      i.addListener(function () {
        e.mediaHandler(i, l);
      }),
        this.mediaHandler(i, l);
    }
  }),
    (e.prototype.mediaHandler = function (e, t) {
      if (e.matches)
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          (n.index = this.indexInParent(n.parent, n.element)),
            this.moveTo(n.place, n.element, n.destination);
        }
      else
        for (let e = t.length - 1; e >= 0; e--) {
          const n = t[e];
          n.element.classList.contains(this.daClassname) &&
            this.moveBack(n.parent, n.element, n.index);
        }
    }),
    (e.prototype.moveTo = function (e, t, n) {
      t.classList.add(this.daClassname),
        "last" === e || e >= n.children.length
          ? n.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? n.children[e].insertAdjacentElement("beforebegin", t)
          : n.insertAdjacentElement("afterbegin", t);
    }),
    (e.prototype.moveBack = function (e, t, n) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[n]
          ? e.children[n].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (e.prototype.indexInParent = function (e, t) {
      const n = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(n, t);
    }),
    (e.prototype.arraySort = function (e) {
      "min" === this.type
        ? Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? -1
                : "last" === e.place || "first" === t.place
                ? 1
                : e.place - t.place
              : e.breakpoint - t.breakpoint;
          })
        : Array.prototype.sort.call(e, function (e, t) {
            return e.breakpoint === t.breakpoint
              ? e.place === t.place
                ? 0
                : "first" === e.place || "last" === t.place
                ? 1
                : "last" === e.place || "first" === t.place
                ? -1
                : t.place - e.place
              : t.breakpoint - e.breakpoint;
          });
    });
  new e("max").init();
  let t = (e, t = 500, n = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = n ? `${n}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !n),
            !n && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !n && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    n = (e, t = 500, n = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          n && e.style.removeProperty("height");
        let o = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = n ? `${n}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = o + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    o = !0,
    i = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (o) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (o = !1),
          setTimeout(function () {
            o = !0;
          }, e);
      }
    };
  let l = !1;
  setTimeout(() => {
    if (l) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const s = document.querySelectorAll(".top-places__column");
  1 == s.length
    ? document.querySelector(".top-places").classList.add("one")
    : 2 == s.length &&
      document.querySelector(".top-places").classList.add("two"),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          o &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? i(e) : r(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })(),
    (function () {
      const e = document.querySelectorAll("[data-spollers]");
      if (e.length > 0) {
        const o = Array.from(e).filter(function (e, t, n) {
          return !e.dataset.spollers.split(",")[0];
        });
        o.length > 0 && r(o);
        const i = Array.from(e).filter(function (e, t, n) {
          return e.dataset.spollers.split(",")[0];
        });
        if (i.length > 0) {
          const e = [];
          i.forEach((t) => {
            const n = {},
              o = t.dataset.spollers.split(",");
            (n.value = o[0]),
              (n.type = o[1] ? o[1].trim() : "max"),
              (n.item = t),
              e.push(n);
          });
          let t = e.map(function (e) {
            return (
              "(" +
              e.type +
              "-width: " +
              e.value +
              "px)," +
              e.value +
              "," +
              e.type
            );
          });
          (t = t.filter(function (e, t, n) {
            return n.indexOf(e) === t;
          })),
            t.forEach((t) => {
              const n = t.split(","),
                o = n[1],
                i = n[2],
                l = window.matchMedia(n[0]),
                s = e.filter(function (e) {
                  if (e.value === o && e.type === i) return !0;
                });
              l.addEventListener("change", function () {
                r(s, l);
              }),
                r(s, l);
            });
        }
        function r(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  l(e),
                  e.addEventListener("click", s))
                : (e.classList.remove("_spoller-init"),
                  l(e, !1),
                  e.removeEventListener("click", s));
          });
        }
        function l(e, t = !0) {
          const n = e.querySelectorAll("[data-spoller]");
          n.length > 0 &&
            n.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            });
        }
        function s(e) {
          const o = e.target;
          if (o.hasAttribute("data-spoller") || o.closest("[data-spoller]")) {
            const i = o.hasAttribute("data-spoller")
                ? o
                : o.closest("[data-spoller]"),
              r = i.closest("[data-spollers]"),
              l = !!r.hasAttribute("data-one-spoller");
            r.querySelectorAll("._slide").length ||
              (l && !i.classList.contains("_spoller-active") && a(r),
              i.classList.toggle("_spoller-active"),
              ((e, o = 500) => {
                e.hidden ? n(e, o) : t(e, o);
              })(i.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function a(e) {
          const n = e.querySelector("[data-spoller]._spoller-active");
          n &&
            (n.classList.remove("_spoller-active"),
            t(n.nextElementSibling, 500));
        }
      }
    })();
})();
