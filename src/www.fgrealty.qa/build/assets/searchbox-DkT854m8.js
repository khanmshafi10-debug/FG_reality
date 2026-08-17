const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/SearchBoxHeroContainer-BIlmJlKs.js", "assets/Index.vue_vue_type_script_setup_true_lang-D5aQpFwh.js", "assets/vue-vendor-CYDoerDP.js", "assets/useListings-CtILWCvQ.js", "assets/Svg.vue_vue_type_script_setup_true_lang-CaBOBOJQ.js", "assets/svg-CcOQM07R.js"]))) => i.map(i => d[i]);
import {
    _ as c
} from "./preload-helper-I4rgV-VL.js";
const t = document.querySelector("search-box-container");
if (t) {
    let s = !1,
        u = !1;
    const d = r => {
        const n = r.target ? .closest(".searchBox__searchBtn");
        if (!n || !t.contains(n)) return;
        const a = t.querySelector(".searchBoxDropdown"),
            i = a ? .getAttribute("data-operation") || a ? .querySelector(".searchBoxDropdown__text") ? .textContent ? .trim().toLowerCase(),
            o = i === "buy" || i === "شراء" ? t.getAttribute("data-buy-url") : t.getAttribute("data-rent-url");
        o && (r.preventDefault(), r.stopPropagation(), r.stopImmediatePropagation(), window.location.href = o)
    };
    t.addEventListener("click", d, !0), document.addEventListener("click", d, !0);
    const e = async r => {
        if (s) return;
        s = !0, u = r.type === "click", t.removeEventListener("click", e), t.removeEventListener("focusin", e), t.removeEventListener("mouseenter", e);
        const [{
            createApp: l
        }, {
            default: n
        }, {
            default: a
        }] = await Promise.all([c(() =>
            import ("./vue-vendor-CYDoerDP.js"), []), c(() =>
            import ("./SearchBoxHeroContainer-BIlmJlKs.js"), __vite__mapDeps([0, 1, 2, 3, 4])), c(() =>
            import ("./svg-CcOQM07R.js"), __vite__mapDeps([5, 4, 2]))]), i = t.getAttribute("variant"), p = t.getAttribute("operation-type") || "rent", o = l(n, {
            variant: i,
            operationType: p
        });
        o.use(a), o.mount(t), u && requestAnimationFrame(() => {
            t.querySelector(".searchBox__input") ? .focus()
        })
    };
    t.addEventListener("click", e), t.addEventListener("focusin", e), t.addEventListener("mouseenter", e, {
        once: !0
    })
}