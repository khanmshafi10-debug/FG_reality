const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/swiper-init-DcbyglS8.js", "assets/swiper-vendor-B9i8cgTm.js", "assets/swiper-init-DK1bY9WB.css"]))) => i.map(i => d[i]);
import {
    _ as m
} from "./preload-helper-I4rgV-VL.js";
const w = ".listingCardSwiper",
    p = ".listingCard__image",
    A = ".listingCardSwiperArrow",
    h = 1280,
    f = new WeakMap;
let d = null,
    u = null;

function x() {
    return u ? Promise.resolve(u) : m(async () => {
        const {
            loadSwiper: e
        } = await
        import ("./swiper-init-DcbyglS8.js");
        return {
            loadSwiper: e
        }
    }, __vite__mapDeps([0, 1, 2])).then(({
        loadSwiper: e
    }) => e()).then(e => (u = e, e))
}

function E() {
    d || (d = new IntersectionObserver(e => {
        for (const t of e) t.isIntersecting && (t.target.classList.add("is-inView"), d.unobserve(t.target))
    }, {
        rootMargin: "200px 0px"
    })), document.querySelectorAll(p).forEach(e => {
        e.querySelector(w) && !e.classList.contains("is-inView") && d.observe(e)
    })
}

function _(e) {
    const t = e.slides,
        r = e.realIndex,
        i = t.length,
        o = [r, (r + 1) % i, (r - 1 + i) % i];
    for (const s of o) {
        const n = t[s] ?.querySelector("img[data-src]");
        n && (n.src = n.dataset.src, n.removeAttribute("data-src"))
    }
}

function S(e) {
    const t = f.get(e);
    if (t) return t;
    const r = e.querySelector(w);
    if (!r) return Promise.resolve(null);
    const i = x().then(({
        Swiper: o,
        Navigation: s
    }) => {
        r.classList.add("swiper");
        const n = r.querySelector(".listingCardSwiper__wrapper");
        n && n.classList.replace("listingCardSwiper__wrapper", "swiper-wrapper"), r.querySelectorAll(".listingCardSwiper__slide").forEach(c => {
            c.classList.replace("listingCardSwiper__slide", "swiper-slide")
        });
        const L = window.innerWidth >= h,
            a = new o(r, {
                modules: [s],
                slidesPerView: 1,
                loop: !0,
                allowTouchMove: !L,
                navigation: {
                    nextEl: e.querySelector(".listingCardSwiperArrow--next"),
                    prevEl: e.querySelector(".listingCardSwiperArrow--prev")
                },
                pagination: !1
            }),
            g = e.querySelectorAll(".listingCardSwiper__mockPagination-dot"),
            C = () => {
                const c = a.realIndex % g.length;
                g.forEach((l, y) => {
                    l.classList.toggle("is-active", y === c)
                })
            };
        return a.on("slideChange", () => {
            _(a), C()
        }), _(a), e.classList.add("is-swiperReady"), r.addEventListener("click", () => {
            const l = r.closest(".listingCard") ?.querySelector(".listingCard__mainA");
            l && l.click()
        }), a
    });
    return f.set(e, i), i
}

function P() {
    document.addEventListener("mouseenter", e => {
        if (!(e.target instanceof Element)) return;
        const t = e.target.closest(p);
        t && t.querySelector(w) && S(t)
    }, !0), document.addEventListener("click", e => {
        if (!(e.target instanceof Element)) return;
        const t = e.target.closest(A);
        if (!t) return;
        const r = t.closest(p);
        if (!r) return;
        e.preventDefault(), e.stopPropagation();
        const i = t.classList.contains("listingCardSwiperArrow--next"),
            o = r.classList.contains("is-swiperReady");
        S(r).then(s => {
            !s || o || (i ? s.slideNext() : s.slidePrev())
        })
    })
}
window.observeCardSwipers = E;

function v() {
    E(), P()
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", v) : v();
export {
    E as observeCardSwipers
};