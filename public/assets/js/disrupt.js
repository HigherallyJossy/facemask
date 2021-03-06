if (! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length" in t && t.length,
            n = ot.type(t);
        return "function" !== n && !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
    }

    function i(t, e, n) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ot.grep(t, function(t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (pt.test(e)) return ot.filter(e, t, n);
            e = ot.filter(e, t)
        }
        return ot.grep(t, function(t) {
            return ot.inArray(t, e) >= 0 !== n
        })
    }

    function o(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function s(t) {
        var e = wt[t] = {};
        return ot.each(t.match(bt) || [], function(t, n) {
            e[n] = !0
        }), e
    }

    function r() {
        ht.addEventListener ? (ht.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (ht.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (ht.addEventListener || "load" === event.type || "complete" === ht.readyState) && (r(), ot.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(St, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ct.test(n) ? ot.parseJSON(n) : n)
                } catch (o) {}
                ot.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function c(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function d(t, e, n, i) {
        if (ot.acceptData(t)) {
            var o, s, r = ot.expando,
                a = t.nodeType,
                l = a ? ot.cache : t,
                c = a ? t[r] : t[r] && r;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[r] = Q.pop() || ot.guid++ : r), l[c] || (l[c] = a ? {} : {
                toJSON: ot.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = ot.extend(l[c], e) : l[c].data = ot.extend(l[c].data, e)), s = l[c], i || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[ot.camelCase(e)] = n), "string" == typeof e ? (o = s[e], null == o && (o = s[ot.camelCase(e)])) : o = s, o
        }
    }

    function u(t, e, n) {
        if (ot.acceptData(t)) {
            var i, o, s = t.nodeType,
                r = s ? ot.cache : t,
                a = s ? t[ot.expando] : ot.expando;
            if (r[a]) {
                if (e && (i = n ? r[a] : r[a].data)) {
                    ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !c(i) : !ot.isEmptyObject(i)) return
                }(n || (delete r[a].data, c(r[a]))) && (s ? ot.cleanData([t], !0) : nt.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function p() {
        return !0
    }

    function f() {
        return !1
    }

    function h() {
        try {
            return ht.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Lt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function v(t, e) {
        var n, i, o = 0,
            s = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
        if (!s)
            for (s = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ot.nodeName(i, e) ? s.push(i) : ot.merge(s, v(i, e));
        return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], s) : s
    }

    function m(t) {
        Ot.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
    }

    function w(t) {
        var e = Xt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function x(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
    }

    function T(t, e) {
        if (1 === e.nodeType && ot.hasData(t)) {
            var n, i, o, s = ot._data(t),
                r = ot._data(e, s),
                a = s.events;
            if (a) {
                delete r.handle, r.events = {};
                for (n in a)
                    for (i = 0, o = a[n].length; o > i; i++) ot.event.add(e, n, a[n][i])
            }
            r.data && (r.data = ot.extend({}, r.data))
        }
    }

    function k(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                o = ot._data(e);
                for (i in o.events) ot.removeEvent(e, i, o.handle);
                e.removeAttribute(ot.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Ot.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function C(e, n) {
        var i, o = ot(n.createElement(e)).appendTo(n.body),
            s = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
        return o.detach(), s
    }

    function S(t) {
        var e = ht,
            n = Zt[t];
        return n || (n = C(t, e), "none" !== n && n || (Jt = (Jt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = C(t, e), Jt.detach()), Zt[t] = n), n
    }

    function $(t, e) {
        return {
            get: function() {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function _(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = pe.length; o--;)
            if (e = pe[o] + n, e in t) return e;
        return i
    }

    function A(t, e) {
        for (var n, i, o, s = [], r = 0, a = t.length; a > r; r++) i = t[r], i.style && (s[r] = ot._data(i, "olddisplay"), n = i.style.display, e ? (s[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && At(i) && (s[r] = ot._data(i, "olddisplay", S(i.nodeName)))) : (o = At(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
        for (r = 0; a > r; r++) i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[r] || "" : "none"));
        return t
    }

    function E(t, e, n) {
        var i = le.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function O(t, e, n, i, o) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === n && (r += ot.css(t, n + _t[s], !0, o)), i ? ("content" === n && (r -= ot.css(t, "padding" + _t[s], !0, o)), "margin" !== n && (r -= ot.css(t, "border" + _t[s] + "Width", !0, o))) : (r += ot.css(t, "padding" + _t[s], !0, o), "padding" !== n && (r += ot.css(t, "border" + _t[s] + "Width", !0, o)));
        return r
    }

    function N(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = te(t),
            r = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, s);
        if (0 >= o || null == o) {
            if (o = ee(t, e, s), (0 > o || null == o) && (o = t.style[e]), ie.test(o)) return o;
            i = r && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + O(t, e, n || (r ? "border" : "content"), i, s) + "px"
    }

    function D(t, e, n, i, o) {
        return new D.prototype.init(t, e, n, i, o)
    }

    function I() {
        return setTimeout(function() {
            fe = void 0
        }), fe = ot.now()
    }

    function j(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; 4 > o; o += 2 - e) n = _t[o], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function P(t, e, n) {
        for (var i, o = (be[e] || []).concat(be["*"]), s = 0, r = o.length; r > s; s++)
            if (i = o[s].call(n, e, t)) return i
    }

    function L(t, e, n) {
        var i, o, s, r, a, l, c, d, u = this,
            p = {},
            f = t.style,
            h = t.nodeType && At(t),
            g = ot._data(t, "fxshow");
        n.queue || (a = ot._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, u.always(function() {
            u.always(function() {
                a.unqueued--, ot.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = ot.css(t, "display"), d = "none" === c ? ot._data(t, "olddisplay") || S(t.nodeName) : c, "inline" === d && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || u.always(function() {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (o = e[i], ge.exec(o)) {
                if (delete e[i], s = s || "toggle" === o, o === (h ? "hide" : "show")) {
                    if ("show" !== o || !g || void 0 === g[i]) continue;
                    h = !0
                }
                p[i] = g && g[i] || ot.style(t, i)
            } else c = void 0;
        if (ot.isEmptyObject(p)) "inline" === ("none" === c ? S(t.nodeName) : c) && (f.display = c);
        else {
            g ? "hidden" in g && (h = g.hidden) : g = ot._data(t, "fxshow", {}), s && (g.hidden = !h), h ? ot(t).show() : u.done(function() {
                ot(t).hide()
            }), u.done(function() {
                var e;
                ot._removeData(t, "fxshow");
                for (e in p) ot.style(t, e, p[e])
            });
            for (i in p) r = P(h ? g[i] : 0, i, u), i in g || (g[i] = r.start, h && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function H(t, e) {
        var n, i, o, s, r;
        for (n in t)
            if (i = ot.camelCase(n), o = e[i], s = t[n], ot.isArray(s) && (o = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), r = ot.cssHooks[i], r && "expand" in r) {
                s = r.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = o)
            } else e[i] = o
    }

    function F(t, e, n) {
        var i, o, s = 0,
            r = ye.length,
            a = ot.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var e = fe || I(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, s = 1 - i, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                return a.notifyWith(t, [c, s, n]), 1 > s && l ? n : (a.resolveWith(t, [c]), !1)
            },
            c = a.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: fe || I(),
                duration: n.duration,
                tweens: [],
                createTween: function(e, n) {
                    var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function(e) {
                    var n = 0,
                        i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) c.tweens[n].run(1);
                    return e ? a.resolveWith(t, [c, e]) : a.rejectWith(t, [c, e]), this
                }
            }),
            d = c.props;
        for (H(d, c.opts.specialEasing); r > s; s++)
            if (i = ye[s].call(c, t, d, c.opts)) return i;
        return ot.map(d, P, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function q(t) {
        return function(e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, o = 0,
                s = e.toLowerCase().match(bt) || [];
            if (ot.isFunction(n))
                for (; i = s[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function z(t, e, n, i) {
        function o(a) {
            var l;
            return s[a] = !0, ot.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
            }), l
        }
        var s = {},
            r = t === Be;
        return o(e.dataTypes[0]) || !s["*"] && o("*")
    }

    function M(t, e) {
        var n, i, o = ot.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ot.extend(!0, t, n), t
    }

    function R(t, e, n) {
        for (var i, o, s, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
        if (o)
            for (r in a)
                if (a[r] && a[r].test(o)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) s = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                i || (i = r)
            }
            s = s || i
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }

    function B(t, e, n, i) {
        var o, s, r, a, l, c = {},
            d = t.dataTypes.slice();
        if (d[1])
            for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
        for (s = d.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (r = c[l + " " + s] || c["* " + s], !r)
                for (o in c)
                    if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                        r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], d.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && t["throws"]) e = r(e);
                else try {
                    e = r(e)
                } catch (u) {
                    return {
                        state: "parsererror",
                        error: r ? u : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function W(t, e, n, i) {
        var o;
        if (ot.isArray(e)) ot.each(e, function(e, o) {
            n || Xe.test(t) ? i(t, o) : W(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
        });
        else if (n || "object" !== ot.type(e)) i(t, e);
        else
            for (o in e) W(t + "[" + o + "]", e[o], n, i)
    }

    function U() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function V() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function X(t) {
        return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var Q = [],
        K = Q.slice,
        Y = Q.concat,
        G = Q.push,
        J = Q.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        nt = {},
        it = "1.11.3",
        ot = function(t, e) {
            return new ot.fn.init(t, e)
        },
        st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^-ms-/,
        at = /-([\da-z])/gi,
        lt = function(t, e) {
            return e.toUpperCase()
        };
    ot.fn = ot.prototype = {
        jquery: it,
        constructor: ot,
        selector: "",
        length: 0,
        toArray: function() {
            return K.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
        },
        pushStack: function(t) {
            var e = ot.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return ot.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(ot.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(K.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: G,
        sort: Q.sort,
        splice: Q.splice
    }, ot.extend = ot.fn.extend = function() {
        var t, e, n, i, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || ot.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (o = arguments[a]))
                for (i in o) t = r[i], n = o[i], r !== n && (c && n && (ot.isPlainObject(n) || (e = ot.isArray(n))) ? (e ? (e = !1, s = t && ot.isArray(t) ? t : []) : s = t && ot.isPlainObject(t) ? t : {}, r[i] = ot.extend(c, s, n)) : void 0 !== n && (r[i] = n));
        return r
    }, ot.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === ot.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === ot.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function(e) {
            e && ot.trim(e) && (t.execScript || function(e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function(t) {
            return t.replace(rt, "ms-").replace(at, lt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var o, s = 0,
                r = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; r > s && (o = e.apply(t[s], i), o !== !1); s++);
                else
                    for (s in t)
                        if (o = e.apply(t[s], i), o === !1) break
            } else if (a)
                for (; r > s && (o = e.call(t[s], s, t[s]), o !== !1); s++);
            else
                for (s in t)
                    if (o = e.call(t[s], s, t[s]), o === !1) break; return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(st, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : G.call(i, t)), i
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (J) return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; n > i;) t[o++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i, o = [], s = 0, r = t.length, a = !n; r > s; s++) i = !e(t[s], s), i !== a && o.push(t[s]);
            return o
        },
        map: function(t, e, i) {
            var o, s = 0,
                r = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; r > s; s++) o = e(t[s], s, i), null != o && l.push(o);
            else
                for (s in t) o = e(t[s], s, i), null != o && l.push(o);
            return Y.apply([], l)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t) ? (n = K.call(arguments, 2), i = function() {
                return t.apply(e || this, n.concat(K.call(arguments)))
            }, i.guid = t.guid = t.guid || ot.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: nt
    }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ct = function(t) {
        function e(t, e, n, i) {
            var o, s, r, a, l, c, u, f, h, g;
            if ((e ? e.ownerDocument || e : z) !== D && N(e), e = e || D, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
            if (!i && j) {
                if (11 !== a && (o = yt.exec(t)))
                    if (r = o[1]) {
                        if (9 === a) {
                            if (s = e.getElementById(r), !s || !s.parentNode) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(r)) && F(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (o[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = o[3]) && x.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (x.qsa && (!P || !P.test(t))) {
                    if (f = u = q, h = e, g = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (c = S(t), (u = e.getAttribute("id")) ? f = u.replace(wt, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;) c[l] = f + p(c[l]);
                        h = bt.test(t) && d(e.parentNode) || e, g = c.join(",")
                    }
                    if (g) try {
                        return J.apply(n, h.querySelectorAll(g)), n
                    } catch (v) {} finally {
                        u || e.removeAttribute("id")
                    }
                }
            }
            return _(t.replace(lt, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[q] = !0, t
        }

        function o(t) {
            var e = D.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) T.attrHandle[n[i]] = e
        }

        function r(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function c(t) {
            return i(function(e) {
                return e = +e, i(function(n, i) {
                    for (var o, s = t([], n.length, e), r = s.length; r--;) n[o = s[r]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }

        function d(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function u() {}

        function p(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                o = n && "parentNode" === i,
                s = R++;
            return e.first ? function(e, n, s) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, s)
            } : function(e, n, r) {
                var a, l, c = [M, s];
                if (r) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, r)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o) {
                            if (l = e[q] || (e[q] = {}), (a = l[i]) && a[0] === M && a[1] === s) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, r)) return !0
                        }
            }
        }

        function h(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var o = t.length; o--;)
                    if (!t[o](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var o = 0, s = n.length; s > o; o++) e(t, n[o], i);
            return i
        }

        function v(t, e, n, i, o) {
            for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (!n || n(s, i, o)) && (r.push(s), c && e.push(a));
            return r
        }

        function m(t, e, n, o, s, r) {
            return o && !o[q] && (o = m(o)), s && !s[q] && (s = m(s, r)), i(function(i, r, a, l) {
                var c, d, u, p = [],
                    f = [],
                    h = r.length,
                    m = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? m : v(m, p, t, a, l),
                    b = n ? s || (i ? t : h || o) ? [] : r : y;
                if (n && n(y, b, a, l), o)
                    for (c = v(b, f), o(c, [], a, l), d = c.length; d--;)(u = c[d]) && (b[f[d]] = !(y[f[d]] = u));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (c = [], d = b.length; d--;)(u = b[d]) && c.push(y[d] = u);
                            s(null, b = [], c, l)
                        }
                        for (d = b.length; d--;)(u = b[d]) && (c = s ? tt(i, u) : p[d]) > -1 && (i[c] = !(r[c] = u))
                    }
                } else b = v(b === r ? b.splice(h, b.length) : b), s ? s(null, r, b, l) : J.apply(r, b)
            })
        }

        function y(t) {
            for (var e, n, i, o = t.length, s = T.relative[t[0].type], r = s || T.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                    return t === e
                }, r, !0), c = f(function(t) {
                    return tt(e, t) > -1
                }, r, !0), d = [function(t, n, i) {
                    var o = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; o > a; a++)
                if (n = T.relative[t[a].type]) d = [f(h(d), n)];
                else {
                    if (n = T.filter[t[a].type].apply(null, t[a].matches), n[q]) {
                        for (i = ++a; o > i && !T.relative[t[i].type]; i++);
                        return m(a > 1 && h(d), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), o > i && y(t = t.slice(i)), o > i && p(t))
                    }
                    d.push(n)
                }
            return h(d)
        }

        function b(t, n) {
            var o = n.length > 0,
                s = t.length > 0,
                r = function(i, r, a, l, c) {
                    var d, u, p, f = 0,
                        h = "0",
                        g = i && [],
                        m = [],
                        y = A,
                        b = i || s && T.find.TAG("*", c),
                        w = M += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (c && (A = r !== D && r); h !== x && null != (d = b[h]); h++) {
                        if (s && d) {
                            for (u = 0; p = t[u++];)
                                if (p(d, r, a)) {
                                    l.push(d);
                                    break
                                }
                            c && (M = w)
                        }
                        o && ((d = !p && d) && f--, i && g.push(d))
                    }
                    if (f += h, o && h !== f) {
                        for (u = 0; p = n[u++];) p(g, m, r, a);
                        if (i) {
                            if (f > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = Y.call(l));
                            m = v(m)
                        }
                        J.apply(l, m), c && !i && m.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (M = w, A = y), g
                };
            return o ? i(r) : r
        }
        var w, x, T, k, C, S, $, _, A, E, O, N, D, I, j, P, L, H, F, q = "sizzle" + 1 * new Date,
            z = t.document,
            M = 0,
            R = 0,
            B = n(),
            W = n(),
            U = n(),
            V = function(t, e) {
                return t === e && (O = !0), 0
            },
            X = 1 << 31,
            Q = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            G = K.push,
            J = K.push,
            Z = K.slice,
            tt = function(t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            st = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
            rt = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            at = new RegExp(nt + "+", "g"),
            lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            ct = new RegExp("^" + nt + "*," + nt + "*"),
            dt = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ut = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            pt = new RegExp(rt),
            ft = new RegExp("^" + ot + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + rt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            vt = /^h\d$/i,
            mt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            Tt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            kt = function() {
                N()
            };
        try {
            J.apply(K = Z.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
        } catch (Ct) {
            J = {
                apply: K.length ? function(t, e) {
                    G.apply(t, Z.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        x = e.support = {}, C = e.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, N = e.setDocument = function(t) {
            var e, n, i = t ? t.ownerDocument || t : z;
            return i !== D && 9 === i.nodeType && i.documentElement ? (D = i, I = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", kt, !1) : n.attachEvent && n.attachEvent("onunload", kt)), j = !C(i), x.attributes = o(function(t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = o(function(t) {
                return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = mt.test(i.getElementsByClassName), x.getById = o(function(t) {
                return I.appendChild(t).id = q, !i.getElementsByName || !i.getElementsByName(q).length
            }), x.getById ? (T.find.ID = function(t, e) {
                if ("undefined" != typeof e.getElementById && j) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function(t) {
                var e = t.replace(xt, Tt);
                return function(t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ? function(t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function(t, e) {
                var n, i = [],
                    o = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, T.find.CLASS = x.getElementsByClassName && function(t, e) {
                return j ? e.getElementsByClassName(t) : void 0
            }, L = [], P = [], (x.qsa = mt.test(i.querySelectorAll)) && (o(function(t) {
                I.appendChild(t).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || P.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + q + "-]").length || P.push("~="), t.querySelectorAll(":checked").length || P.push(":checked"), t.querySelectorAll("a#" + q + "+*").length || P.push(".#.+[+~]")
            }), o(function(t) {
                var e = i.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && P.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
            })), (x.matchesSelector = mt.test(H = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function(t) {
                x.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), L.push("!=", rt)
            }), P = P.length && new RegExp(P.join("|")), L = L.length && new RegExp(L.join("|")), e = mt.test(I.compareDocumentPosition), F = e || mt.test(I.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function(t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function(t, e) {
                if (t === e) return O = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === z && F(z, t) ? -1 : e === i || e.ownerDocument === z && F(z, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & n ? -1 : 1)
            } : function(t, e) {
                if (t === e) return O = !0, 0;
                var n, o = 0,
                    s = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    c = [e];
                if (!s || !a) return t === i ? -1 : e === i ? 1 : s ? -1 : a ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                if (s === a) return r(t, e);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (n = e; n = n.parentNode;) c.unshift(n);
                for (; l[o] === c[o];) o++;
                return o ? r(l[o], c[o]) : l[o] === z ? -1 : c[o] === z ? 1 : 0
            }, i) : D
        }, e.matches = function(t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function(t, n) {
            if ((t.ownerDocument || t) !== D && N(t), n = n.replace(ut, "='$1']"), !(!x.matchesSelector || !j || L && L.test(n) || P && P.test(n))) try {
                var i = H.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (o) {}
            return e(n, D, null, [t]).length > 0
        }, e.contains = function(t, e) {
            return (t.ownerDocument || t) !== D && N(t), F(t, e)
        }, e.attr = function(t, e) {
            (t.ownerDocument || t) !== D && N(t);
            var n = T.attrHandle[e.toLowerCase()],
                i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !j) : void 0;
            return void 0 !== i ? i : x.attributes || !j ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function(t) {
            var e, n = [],
                i = 0,
                o = 0;
            if (O = !x.detectDuplicates, E = !x.sortStable && t.slice(0), t.sort(V), O) {
                for (; e = t[o++];) e === t[o] && (i = n.push(o));
                for (; i--;) t.splice(n[i], 1)
            }
            return E = null, t
        }, k = e.getText = function(t) {
            var e, n = "",
                i = 0,
                o = t.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === o || 4 === o) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(xt, Tt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(xt, Tt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    } : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, n, i) {
                    return function(o) {
                        var s = e.attr(o, t);
                        return null == s ? "!=" === n : !n || (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n && (s === i || s.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function(t, e, n, i, o) {
                    var s = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === o ? function(t) {
                        return !!t.parentNode
                    } : function(e, n, l) {
                        var c, d, u, p, f, h, g = s !== r ? "nextSibling" : "previousSibling",
                            v = e.parentNode,
                            m = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (v) {
                            if (s) {
                                for (; g;) {
                                    for (u = e; u = u[g];)
                                        if (a ? u.nodeName.toLowerCase() === m : 1 === u.nodeType) return !1;
                                    h = g = "only" === t && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [r ? v.firstChild : v.lastChild], r && y) {
                                for (d = v[q] || (v[q] = {}), c = d[t] || [], f = c[0] === M && c[1], p = c[0] === M && c[2], u = f && v.childNodes[f]; u = ++f && u && u[g] || (p = f = 0) || h.pop();)
                                    if (1 === u.nodeType && ++p && u === e) {
                                        d[t] = [M, f, p];
                                        break
                                    }
                            } else if (y && (c = (e[q] || (e[q] = {}))[t]) && c[0] === M) p = c[1];
                            else
                                for (;
                                    (u = ++f && u && u[g] || (p = f = 0) || h.pop()) && ((a ? u.nodeName.toLowerCase() !== m : 1 !== u.nodeType) || !++p || (y && ((u[q] || (u[q] = {}))[t] = [M, p]), u !== e)););
                            return p -= o, p === i || p % i === 0 && p / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, n) {
                    var o, s = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[q] ? s(n) : s.length > 1 ? (o = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                        for (var i, o = s(t, n), r = o.length; r--;) i = tt(t, o[r]), t[i] = !(e[i] = o[r])
                    }) : function(t) {
                        return s(t, 0, o)
                    }) : s
                }
            },
            pseudos: {
                not: i(function(t) {
                    var e = [],
                        n = [],
                        o = $(t.replace(lt, "$1"));
                    return o[q] ? i(function(t, e, n, i) {
                        for (var s, r = o(t, null, i, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, i, s) {
                        return e[0] = t, o(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function(t) {
                    return function(n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function(t) {
                    return t = t.replace(xt, Tt),
                        function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function(t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Tt).toLowerCase(),
                        function(e) {
                            var n;
                            do
                                if (n = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === I
                },
                focus: function(t) {
                    return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function(t) {
                    return t.disabled === !1
                },
                disabled: function(t) {
                    return t.disabled === !0
                },
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function(t) {
                    return !T.pseudos.empty(t)
                },
                header: function(t) {
                    return vt.test(t.nodeName)
                },
                input: function(t) {
                    return gt.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(t, e) {
                    return [e - 1]
                }),
                eq: c(function(t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function(t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function(t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function(t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (w in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) T.pseudos[w] = a(w);
        for (w in {
                submit: !0,
                reset: !0
            }) T.pseudos[w] = l(w);
        return u.prototype = T.filters = T.pseudos, T.setFilters = new u, S = e.tokenize = function(t, n) {
            var i, o, s, r, a, l, c, d = W[t + " "];
            if (d) return n ? 0 : d.slice(0);
            for (a = t, l = [], c = T.preFilter; a;) {
                (!i || (o = ct.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = dt.exec(a)) && (i = o.shift(), s.push({
                    value: i,
                    type: o[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (r in T.filter) !(o = ht[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(),
                    s.push({
                        value: i,
                        type: r,
                        matches: o
                    }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
        }, $ = e.compile = function(t, e) {
            var n, i = [],
                o = [],
                s = U[t + " "];
            if (!s) {
                for (e || (e = S(t)), n = e.length; n--;) s = y(e[n]), s[q] ? i.push(s) : o.push(s);
                s = U(t, b(o, i)), s.selector = t
            }
            return s
        }, _ = e.select = function(t, e, n, i) {
            var o, s, r, a, l, c = "function" == typeof t && t,
                u = !i && S(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === e.nodeType && j && T.relative[s[1].type]) {
                    if (e = (T.find.ID(r.matches[0].replace(xt, Tt), e) || [])[0], !e) return n;
                    c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (o = ht.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !T.relative[a = r.type]);)
                    if ((l = T.find[a]) && (i = l(r.matches[0].replace(xt, Tt), bt.test(s[0].type) && d(e.parentNode) || e))) {
                        if (s.splice(o, 1), t = i.length && p(s), !t) return J.apply(n, i), n;
                        break
                    }
            }
            return (c || $(t, u))(i, e, !j, n, bt.test(t) && d(e.parentNode) || e), n
        }, x.sortStable = q.split("").sort(V).join("") === q, x.detectDuplicates = !!O, N(), x.sortDetached = o(function(t) {
            return 1 & t.compareDocumentPosition(D.createElement("div"))
        }), o(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && o(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), o(function(t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
    var dt = ot.expr.match.needsContext,
        ut = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pt = /^.[^:#\[\.,]*$/;
    ot.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, ot.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                for (e = 0; o > e; e++)
                    if (ot.contains(i[e], this)) return !0
            }));
            for (e = 0; o > e; e++) ot.find(t, i[e], n);
            return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function(t) {
            return !!i(this, "string" == typeof t && dt.test(t) ? ot(t) : t || [], !1).length
        }
    });
    var ft, ht = t.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        vt = ot.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ht, !0)), ut.test(n[1]) && ot.isPlainObject(e))
                        for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = ht.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return ft.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = ht, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
    vt.prototype = ot.fn, ft = ot(ht);
    var mt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ot.extend({
        dir: function(t, e, n) {
            for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), ot.fn.extend({
        has: function(t) {
            var e, n = ot(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; i > e; e++)
                    if (ot.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, s = [], r = dt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; o > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(s.length > 1 ? ot.unique(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ot.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return ot.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return ot.dir(t, "parentNode", n)
        },
        next: function(t) {
            return o(t, "nextSibling")
        },
        prev: function(t) {
            return o(t, "previousSibling")
        },
        nextAll: function(t) {
            return ot.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return ot.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return ot.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return ot.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return ot.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return ot.sibling(t.firstChild)
        },
        contents: function(t) {
            return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
        }
    }, function(t, e) {
        ot.fn[t] = function(n, i) {
            var o = ot.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), mt.test(t) && (o = o.reverse())), this.pushStack(o)
        }
    });
    var bt = /\S+/g,
        wt = {};
    ot.Callbacks = function(t) {
        t = "string" == typeof t ? wt[t] || s(t) : ot.extend({}, t);
        var e, n, i, o, r, a, l = [],
            c = !t.once && [],
            d = function(s) {
                for (n = t.memory && s, i = !0, r = a || 0, a = 0, o = l.length, e = !0; l && o > r; r++)
                    if (l[r].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
            },
            u = {
                add: function() {
                    if (l) {
                        var i = l.length;
                        ! function s(e) {
                            ot.each(e, function(e, n) {
                                var i = ot.type(n);
                                "function" === i ? t.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && s(n)
                            })
                        }(arguments), e ? o = l.length : n && (a = i, d(n))
                    }
                    return this
                },
                remove: function() {
                    return l && ot.each(arguments, function(t, n) {
                        for (var i;
                            (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (o >= i && o--, r >= i && r--)
                    }), this
                },
                has: function(t) {
                    return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = c = n = void 0, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = void 0, n || u.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(t, n) {
                    return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : d(n)), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return u
    }, ot.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", ot.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var t = arguments;
                        return ot.Deferred(function(n) {
                            ot.each(e, function(e, s) {
                                var r = ot.isFunction(t[e]) && t[e];
                                o[s[1]](function() {
                                    var t = r && r.apply(this, arguments);
                                    t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? ot.extend(t, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then, ot.each(e, function(t, s) {
                var r = s[2],
                    a = s[3];
                i[s[1]] = r.add, a && r.add(function() {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? i : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(t) {
            var e, n, i, o = 0,
                s = K.call(arguments),
                r = s.length,
                a = 1 !== r || t && ot.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : ot.Deferred(),
                c = function(t, n, i) {
                    return function(o) {
                        n[t] = this, i[t] = arguments.length > 1 ? K.call(arguments) : o, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (e = new Array(r), n = new Array(r), i = new Array(r); r > o; o++) s[o] && ot.isFunction(s[o].promise) ? s[o].promise().done(c(o, i, s)).fail(l.reject).progress(c(o, n, e)) : --a;
            return a || l.resolveWith(i, s), l.promise()
        }
    });
    var xt;
    ot.fn.ready = function(t) {
        return ot.ready.promise().done(t), this
    }, ot.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? ot.readyWait++ : ot.ready(!0)
        },
        ready: function(t) {
            if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                if (!ht.body) return setTimeout(ot.ready);
                ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ht, [ot]), ot.fn.triggerHandler && (ot(ht).triggerHandler("ready"), ot(ht).off("ready")))
            }
        }
    }), ot.ready.promise = function(e) {
        if (!xt)
            if (xt = ot.Deferred(), "complete" === ht.readyState) setTimeout(ot.ready);
            else if (ht.addEventListener) ht.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            ht.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && ht.documentElement
            } catch (i) {}
            n && n.doScroll && ! function o() {
                if (!ot.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(o, 50)
                    }
                    r(), ot.ready()
                }
            }()
        }
        return xt.promise(e)
    };
    var Tt, kt = "undefined";
    for (Tt in ot(nt)) break;
    nt.ownLast = "0" !== Tt, nt.inlineBlockNeedsLayout = !1, ot(function() {
            var t, e, n, i;
            n = ht.getElementsByTagName("body")[0], n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = ht.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), ot.acceptData = function(t) {
            var e = ot.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
    var Ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        St = /([A-Z])/g;
    ot.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !c(t)
        },
        data: function(t, e, n) {
            return d(t, e, n)
        },
        removeData: function(t, e) {
            return u(t, e)
        },
        _data: function(t, e, n) {
            return d(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return u(t, e, !0)
        }
    }), ot.fn.extend({
        data: function(t, e) {
            var n, i, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (o = ot.data(s), 1 === s.nodeType && !ot._data(s, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(s, i, o[i])));
                    ot._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                ot.data(this, t)
            }) : arguments.length > 1 ? this.each(function() {
                ot.data(this, t, e)
            }) : s ? l(s, t, ot.data(s, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                ot.removeData(this, t)
            })
        }
    }), ot.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ? i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = ot.queue(t, e),
                i = n.length,
                o = n.shift(),
                s = ot._queueHooks(t, e),
                r = function() {
                    ot.dequeue(t, e)
                };
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return ot._data(t, n) || ot._data(t, n, {
                empty: ot.Callbacks("once memory").add(function() {
                    ot._removeData(t, e + "queue"), ot._removeData(t, n)
                })
            })
        }
    }), ot.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = ot.queue(this, t, e);
                ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                ot.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = ot.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) n = ot._data(s[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    });
    var $t = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _t = ["Top", "Right", "Bottom", "Left"],
        At = function(t, e) {
            return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
        },
        Et = ot.access = function(t, e, n, i, o, s, r) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === ot.type(n)) {
                o = !0;
                for (a in n) ot.access(t, e, a, n[a], !0, s, r)
            } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (r = !0), c && (r ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(ot(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : s
        },
        Ot = /^(?:checkbox|radio)$/i;
    ! function() {
        var t = ht.createElement("input"),
            e = ht.createElement("div"),
            n = ht.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ht.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                nt.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function() {
        var e, n, i = ht.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var Nt = /^(?:input|select|textarea)$/i,
        Dt = /^key/,
        It = /^(?:mouse|pointer|contextmenu)|click/,
        jt = /^(?:focusinfocus|focusoutblur)$/,
        Pt = /^([^.]*)(?:\.(.+)|)$/;
    ot.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, v = ot._data(t);
            if (v) {
                for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (r = v.events) || (r = v.events = {}), (d = v.handle) || (d = v.handle = function(t) {
                        return typeof ot === kt || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(d.elem, arguments)
                    }, d.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) s = Pt.exec(e[a]) || [], f = g = s[1], h = (s[2] || "").split(".").sort(), f && (c = ot.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = ot.event.special[f] || {}, u = ot.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && ot.expr.match.needsContext.test(o),
                    namespace: h.join(".")
                }, l), (p = r[f]) || (p = r[f] = [], p.delegateCount = 0, c.setup && c.setup.call(t, i, h, d) !== !1 || (t.addEventListener ? t.addEventListener(f, d, !1) : t.attachEvent && t.attachEvent("on" + f, d))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, u) : p.push(u), ot.event.global[f] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var s, r, a, l, c, d, u, p, f, h, g, v = ot.hasData(t) && ot._data(t);
            if (v && (d = v.events)) {
                for (e = (e || "").match(bt) || [""], c = e.length; c--;)
                    if (a = Pt.exec(e[c]) || [], f = g = a[1], h = (a[2] || "").split(".").sort(), f) {
                        for (u = ot.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, p = d[f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = s = p.length; s--;) r = p[s], !o && g !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (p.splice(s, 1), r.selector && p.delegateCount--, u.remove && u.remove.call(t, r));
                        l && !p.length && (u.teardown && u.teardown.call(t, h, v.handle) !== !1 || ot.removeEvent(t, f, v.handle), delete d[f])
                    } else
                        for (f in d) ot.event.remove(t, f + e[c], n, i, !0);
                ot.isEmptyObject(d) && (delete v.handle, ot._removeData(t, "events"))
            }
        },
        trigger: function(e, n, i, o) {
            var s, r, a, l, c, d, u, p = [i || ht],
                f = et.call(e, "type") ? e.type : e,
                h = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = d = i = i || ht, 3 !== i.nodeType && 8 !== i.nodeType && !jt.test(f + ot.event.triggered) && (f.indexOf(".") >= 0 && (h = f.split("."), f = h.shift(), h.sort()), r = f.indexOf(":") < 0 && "on" + f, e = e[ot.expando] ? e : new ot.Event(f, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), c = ot.event.special[f] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!o && !c.noBubble && !ot.isWindow(i)) {
                    for (l = c.delegateType || f, jt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) p.push(a), d = a;
                    d === (i.ownerDocument || ht) && p.push(d.defaultView || d.parentWindow || t)
                }
                for (u = 0;
                    (a = p[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : c.bindType || f, s = (ot._data(a, "events") || {})[e.type] && ot._data(a, "handle"), s && s.apply(a, n), s = r && a[r], s && s.apply && ot.acceptData(a) && (e.result = s.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && ot.acceptData(i) && r && i[f] && !ot.isWindow(i)) {
                    d = i[r], d && (i[r] = null), ot.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    ot.event.triggered = void 0, d && (i[r] = d)
                }
                return e.result
            }
        },
        dispatch: function(t) {
            t = ot.event.fix(t);
            var e, n, i, o, s, r = [],
                a = K.call(arguments),
                l = (ot._data(this, "events") || {})[t.type] || [],
                c = ot.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (r = ot.event.handlers.call(this, t, l), e = 0;
                    (o = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, s = 0;
                        (i = o.handlers[s++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, s, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (o = [], s = 0; a > s; s++) i = e[s], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                        o.length && r.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        fix: function(t) {
            if (t[ot.expando]) return t;
            var e, n, i, o = t.type,
                s = t,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = It.test(o) ? this.mouseHooks : Dt.test(o) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new ot.Event(s), e = i.length; e--;) n = i[e], t[n] = s[n];
            return t.target || (t.target = s.srcElement || ht), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, s) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, s = e.button,
                    r = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ht, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== h() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === h() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ot.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return ot.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var o = ot.extend(new ot.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
        }
    }, ot.removeEvent = ht.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === kt && (t[i] = null), t.detachEvent(i, n))
    }, ot.Event = function(t, e) {
        return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
    }, ot.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = p, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = p, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ot.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        ot.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this,
                    o = t.relatedTarget,
                    s = t.handleObj;
                return (!o || o !== i && !ot.contains(i, o)) && (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), nt.submitBubbles || (ot.event.special.submit = {
        setup: function() {
            return !ot.nodeName(this, "form") && void ot.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function(t) {
                    t._submit_bubble = !0
                }), ot._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function() {
            return !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (ot.event.special.change = {
        setup: function() {
            return Nt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ot.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), ot.event.add(this, "click._change", function(t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
            })), !1) : void ot.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                Nt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                }), ot._data(e, "changeBubbles", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ot.event.remove(this, "._change"), !Nt.test(this.nodeName)
        }
    }), nt.focusinBubbles || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t), !0)
        };
        ot.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, e);
                o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    o = ot._data(i, e) - 1;
                o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
            }
        }
    }), ot.fn.extend({
        on: function(t, e, n, i, o) {
            var s, r;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (s in t) this.on(s, e, n, t[s], o);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === o && (r = i, i = function(t) {
                return ot().off(t), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = ot.guid++)), this.each(function() {
                ot.event.add(this, t, i, n, e)
            })
        },
        one: function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function() {
                ot.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? ot.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ht = / jQuery\d+="(?:null|\d+)"/g,
        Ft = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
        qt = /^\s+/,
        zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Mt = /<([\w:]+)/,
        Rt = /<tbody/i,
        Bt = /<|&#?\w+;/,
        Wt = /<(?:script|style|link)/i,
        Ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Vt = /^$|\/(?:java|ecma)script/i,
        Xt = /^true\/(.*)/,
        Qt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Kt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Yt = g(ht),
        Gt = Yt.appendChild(ht.createElement("div"));
    Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, Kt.th = Kt.td, ot.extend({
        clone: function(t, e, n) {
            var i, o, s, r, a, l = ot.contains(t.ownerDocument, t);
            if (nt.html5Clone || ot.isXMLDoc(t) || !Ft.test("<" + t.nodeName + ">") ? s = t.cloneNode(!0) : (Gt.innerHTML = t.outerHTML, Gt.removeChild(s = Gt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                for (i = v(s), a = v(t), r = 0; null != (o = a[r]); ++r) i[r] && k(o, i[r]);
            if (e)
                if (n)
                    for (a = a || v(t), i = i || v(s), r = 0; null != (o = a[r]); r++) T(o, i[r]);
                else T(t, s);
            return i = v(s, "script"), i.length > 0 && x(i, !l && v(t, "script")), i = a = o = null, s
        },
        buildFragment: function(t, e, n, i) {
            for (var o, s, r, a, l, c, d, u = t.length, p = g(e), f = [], h = 0; u > h; h++)
                if (s = t[h], s || 0 === s)
                    if ("object" === ot.type(s)) ot.merge(f, s.nodeType ? [s] : s);
                    else if (Bt.test(s)) {
                for (a = a || p.appendChild(e.createElement("div")), l = (Mt.exec(s) || ["", ""])[1].toLowerCase(), d = Kt[l] || Kt._default, a.innerHTML = d[1] + s.replace(zt, "<$1></$2>") + d[2], o = d[0]; o--;) a = a.lastChild;
                if (!nt.leadingWhitespace && qt.test(s) && f.push(e.createTextNode(qt.exec(s)[0])), !nt.tbody)
                    for (s = "table" !== l || Rt.test(s) ? "<table>" !== d[1] || Rt.test(s) ? 0 : a : a.firstChild, o = s && s.childNodes.length; o--;) ot.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (ot.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = p.lastChild
            } else f.push(e.createTextNode(s));
            for (a && p.removeChild(a), nt.appendChecked || ot.grep(v(f, "input"), m), h = 0; s = f[h++];)
                if ((!i || -1 === ot.inArray(s, i)) && (r = ot.contains(s.ownerDocument, s), a = v(p.appendChild(s), "script"), r && x(a), n))
                    for (o = 0; s = a[o++];) Vt.test(s.type || "") && n.push(s);
            return a = null, p
        },
        cleanData: function(t, e) {
            for (var n, i, o, s, r = 0, a = ot.expando, l = ot.cache, c = nt.deleteExpando, d = ot.event.special; null != (n = t[r]); r++)
                if ((e || ot.acceptData(n)) && (o = n[a], s = o && l[o])) {
                    if (s.events)
                        for (i in s.events) d[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, s.handle);
                    l[o] && (delete l[o], c ? delete n[a] : typeof n.removeAttribute !== kt ? n.removeAttribute(a) : n[a] = null, Q.push(o))
                }
        }
    }), ot.fn.extend({
        text: function(t) {
            return Et(this, function(t) {
                return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ht).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ot.cleanData(v(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && x(v(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ot.cleanData(v(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ot.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return ot.clone(this, t, e)
            })
        },
        html: function(t) {
            return Et(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ht, "") : void 0;
                if (!("string" != typeof t || Wt.test(t) || !nt.htmlSerialize && Ft.test(t) || !nt.leadingWhitespace && qt.test(t) || Kt[(Mt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(zt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(v(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (o) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode, ot.cleanData(v(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(t, e) {
            t = Y.apply([], t);
            var n, i, o, s, r, a, l = 0,
                c = this.length,
                d = this,
                u = c - 1,
                p = t[0],
                f = ot.isFunction(p);
            if (f || c > 1 && "string" == typeof p && !nt.checkClone && Ut.test(p)) return this.each(function(n) {
                var i = d.eq(n);
                f && (t[0] = p.call(this, n, i.html())), i.domManip(t, e)
            });
            if (c && (a = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (s = ot.map(v(a, "script"), b), o = s.length; c > l; l++) i = a, l !== u && (i = ot.clone(i, !0, !0), o && ot.merge(s, v(i, "script"))), e.call(this[l], i, l);
                if (o)
                    for (r = s[s.length - 1].ownerDocument, ot.map(s, w), l = 0; o > l; l++) i = s[l], Vt.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(r, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Qt, "")));
                a = n = null
            }
            return this
        }
    }), ot.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        ot.fn[t] = function(t) {
            for (var n, i = 0, o = [], s = ot(t), r = s.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), ot(s[i])[e](n), G.apply(o, n.get());
            return this.pushStack(o)
        }
    });
    var Jt, Zt = {};
    ! function() {
        var t;
        nt.shrinkWrapBlocks = function() {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = ht.getElementsByTagName("body")[0], n && n.style ? (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ht.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var te, ee, ne = /^margin/,
        ie = new RegExp("^(" + $t + ")(?!px)[a-z%]+$", "i"),
        oe = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    }, ee = function(t, e, n) {
        var i, o, s, r, a = t.style;
        return n = n || te(t), r = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== r || ot.contains(t.ownerDocument, t) || (r = ot.style(t, e)), ie.test(r) && ne.test(e) && (i = a.width, o = a.minWidth,
            s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = o, a.maxWidth = s)), void 0 === r ? r : r + ""
    }) : ht.documentElement.currentStyle && (te = function(t) {
        return t.currentStyle
    }, ee = function(t, e, n) {
        var i, o, s, r, a = t.style;
        return n = n || te(t), r = n ? n[e] : void 0, null == r && a && a[e] && (r = a[e]), ie.test(r) && !oe.test(e) && (i = a.left, o = t.runtimeStyle, s = o && o.left, s && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = i, s && (o.left = s)), void 0 === r ? r : r + "" || "auto"
    }), ! function() {
        function e() {
            var e, n, i, o;
            n = ht.getElementsByTagName("body")[0], n && n.style && (e = ht.createElement("div"), i = ht.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s = r = !1, l = !0, t.getComputedStyle && (s = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                width: "4px"
            }).width, o = e.appendChild(ht.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", a = 0 === o[0].offsetHeight, a && (o[0].style.display = "", o[1].style.display = "none", a = 0 === o[0].offsetHeight), n.removeChild(i))
        }
        var n, i, o, s, r, a, l;
        n = ht.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], (i = o && o.style) && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
            reliableHiddenOffsets: function() {
                return null == a && e(), a
            },
            boxSizingReliable: function() {
                return null == r && e(), r
            },
            pixelPosition: function() {
                return null == s && e(), s
            },
            reliableMarginRight: function() {
                return null == l && e(), l
            }
        }))
    }(), ot.swap = function(t, e, n, i) {
        var o, s, r = {};
        for (s in e) r[s] = t.style[s], t.style[s] = e[s];
        o = n.apply(t, i || []);
        for (s in e) t.style[s] = r[s];
        return o
    };
    var se = /alpha\([^)]*\)/i,
        re = /opacity\s*=\s*([^)]*)/,
        ae = /^(none|table(?!-c[ea]).+)/,
        le = new RegExp("^(" + $t + ")(.*)$", "i"),
        ce = new RegExp("^([+-])=(" + $t + ")", "i"),
        de = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ue = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        pe = ["Webkit", "O", "Moz", "ms"];
    ot.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, s, r, a = ot.camelCase(e),
                    l = t.style;
                if (e = ot.cssProps[a] || (ot.cssProps[a] = _(l, a)), r = ot.cssHooks[e] || ot.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (o = r.get(t, !1, i)) ? o : l[e];
                if (s = typeof n, "string" === s && (o = ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e)), s = "number"), null != n && n === n && ("number" !== s || ot.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(t, n, i))))) try {
                    l[e] = n
                } catch (c) {}
            }
        },
        css: function(t, e, n, i) {
            var o, s, r, a = ot.camelCase(e);
            return e = ot.cssProps[a] || (ot.cssProps[a] = _(t.style, a)), r = ot.cssHooks[e] || ot.cssHooks[a], r && "get" in r && (s = r.get(t, !0, n)), void 0 === s && (s = ee(t, e, i)), "normal" === s && e in ue && (s = ue[e]), "" === n || n ? (o = parseFloat(s), n === !0 || ot.isNumeric(o) ? o || 0 : s) : s
        }
    }), ot.each(["height", "width"], function(t, e) {
        ot.cssHooks[e] = {
            get: function(t, n, i) {
                return n ? ae.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, de, function() {
                    return N(t, e, i)
                }) : N(t, e, i) : void 0
            },
            set: function(t, n, i) {
                var o = i && te(t);
                return E(t, n, i ? O(t, e, i, nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
            }
        }
    }), nt.opacity || (ot.cssHooks.opacity = {
        get: function(t, e) {
            return re.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                s = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(s.replace(se, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = se.test(s) ? s.replace(se, o) : s + " " + o)
        }
    }), ot.cssHooks.marginRight = $(nt.reliableMarginRight, function(t, e) {
        return e ? ot.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"]) : void 0
    }), ot.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        ot.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, o = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[t + _t[i] + e] = s[i] || s[i - 2] || s[0];
                return o
            }
        }, ne.test(t) || (ot.cssHooks[t + e].set = E)
    }), ot.fn.extend({
        css: function(t, e) {
            return Et(this, function(t, e, n) {
                var i, o, s = {},
                    r = 0;
                if (ot.isArray(e)) {
                    for (i = te(t), o = e.length; o > r; r++) s[e[r]] = ot.css(t, e[r], !1, i);
                    return s
                }
                return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                At(this) ? ot(this).show() : ot(this).hide()
            })
        }
    }), ot.Tween = D, D.prototype = {
        constructor: D,
        init: function(t, e, n, i, o, s) {
            this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (ot.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = D.propHooks[this.prop];
            return t && t.get ? t.get(this) : D.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
        }
    }, D.prototype.init.prototype = D.prototype, D.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function(t) {
                ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ot.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, ot.fx = D.prototype.init, ot.fx.step = {};
    var fe, he, ge = /^(?:toggle|show|hide)$/,
        ve = new RegExp("^(?:([+-])=|)(" + $t + ")([a-z%]*)$", "i"),
        me = /queueHooks$/,
        ye = [L],
        be = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    o = ve.exec(e),
                    s = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                    r = (ot.cssNumber[t] || "px" !== s && +i) && ve.exec(ot.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s) {
                    s = s || r[3], o = o || [], r = +i || 1;
                    do a = a || ".5", r /= a, ot.style(n.elem, t, r + s); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return o && (r = n.start = +r || +i || 0, n.unit = s, n.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), n
            }]
        };
    ot.Animation = ot.extend(F, {
            tweener: function(t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; o > i; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), ot.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(At).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var o = ot.isEmptyObject(t),
                    s = ot.speed(e, n, i),
                    r = function() {
                        var e = F(this, ot.extend({}, t), s);
                        (o || ot._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        o = null != t && t + "queueHooks",
                        s = ot.timers,
                        r = ot._data(this);
                    if (o) r[o] && r[o].stop && i(r[o]);
                    else
                        for (o in r) r[o] && r[o].stop && me.test(o) && i(r[o]);
                    for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(n), e = !1, s.splice(o, 1));
                    (e || !n) && ot.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = ot._data(this),
                        i = n[t + "queue"],
                        o = n[t + "queueHooks"],
                        s = ot.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                    for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function(t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function(t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, o)
            }
        }), ot.each({
            slideDown: j("show"),
            slideUp: j("hide"),
            slideToggle: j("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ot.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function() {
            var t, e = ot.timers,
                n = 0;
            for (fe = ot.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ot.fx.stop(), fe = void 0
        }, ot.fx.timer = function(t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function() {
            he || (he = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function() {
            clearInterval(he), he = null
        }, ot.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ot.fn.delay = function(t, e) {
            return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                var i = setTimeout(e, t);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        function() {
            var t, e, n, i, o;
            e = ht.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ht.createElement("select"), o = n.appendChild(ht.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = o.selected, nt.enctype = !!ht.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, t = ht.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
    var we = /\r/g;
    ot.fn.extend({
        val: function(t) {
            var e, n, i, o = this[0];
            return arguments.length ? (i = ot.isFunction(t), this.each(function(n) {
                var o;
                1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function(t) {
                    return null == t ? "" : t + ""
                })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
            })) : o ? (e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)) : void 0
        }
    }), ot.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = ot.find.attr(t, "value");
                    return null != e ? e : ot.trim(ot.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : i.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                        if (n = i[l], !(!n.selected && l !== o || (nt.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), s) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, s = ot.makeArray(e), r = o.length; r--;)
                        if (i = o[r], ot.inArray(ot.valHooks.option.get(i), s) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) >= 0 : void 0
            }
        }, nt.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var xe, Te, ke = ot.expr.attrHandle,
        Ce = /^(?:checked|selected)$/i,
        Se = nt.getSetAttribute,
        $e = nt.input;
    ot.fn.extend({
        attr: function(t, e) {
            return Et(this, ot.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                ot.removeAttr(this, t)
            })
        }
    }), ot.extend({
        attr: function(t, e, n) {
            var i, o, s = t.nodeType;
            if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === kt ? ot.prop(t, e, n) : (1 === s && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? Te : xe)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                s = e && e.match(bt);
            if (s && 1 === t.nodeType)
                for (; n = s[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? $e && Se || !Ce.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(Se ? n : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), Te = {
        set: function(t, e, n) {
            return e === !1 ? ot.removeAttr(t, n) : $e && Se || !Ce.test(n) ? t.setAttribute(!Se && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = ke[e] || ot.find.attr;
        ke[e] = $e && Se || !Ce.test(e) ? function(t, e, i) {
            var o, s;
            return i || (s = ke[e], ke[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, ke[e] = s), o
        } : function(t, e, n) {
            return n ? void 0 : t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), $e && Se || (ot.attrHooks.value = {
        set: function(t, e, n) {
            return ot.nodeName(t, "input") ? void(t.defaultValue = e) : xe && xe.set(t, e, n)
        }
    }), Se || (xe = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, ke.id = ke.name = ke.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ot.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: xe.set
    }, ot.attrHooks.contenteditable = {
        set: function(t, e, n) {
            xe.set(t, "" !== e && e, n)
        }
    }, ot.each(["width", "height"], function(t, e) {
        ot.attrHooks[e] = {
            set: function(t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), nt.style || (ot.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var _e = /^(?:input|select|textarea|button|object)$/i,
        Ae = /^(?:a|area)$/i;
    ot.fn.extend({
        prop: function(t, e) {
            return Et(this, ot.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return t = ot.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), ot.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var i, o, s, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return s = 1 !== r || !ot.isXMLDoc(t), s && (e = ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = ot.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : _e.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || ot.each(["href", "src"], function(t, e) {
        ot.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), nt.optSelected || (ot.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ot.propFix[this.toLowerCase()] = this
    }), nt.enctype || (ot.propFix.enctype = "encoding");
    var Ee = /[\t\r\n\f]/g;
    ot.fn.extend({
        addClass: function(t) {
            var e, n, i, o, s, r, a = 0,
                l = this.length,
                c = "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).addClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r = ot.trim(i), n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, o, s, r, a = 0,
                l = this.length,
                c = 0 === arguments.length || "string" == typeof t && t;
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).removeClass(t.call(this, e, this.className))
            });
            if (c)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ee, " ") : "")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                        r = t ? ot.trim(i) : "", n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(ot.isFunction(t) ? function(n) {
                ot(this).toggleClass(t.call(this, n, this.className, e), e)
            } : function() {
                if ("string" === n)
                    for (var e, i = 0, o = ot(this), s = t.match(bt) || []; e = s[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                else(n === kt || "boolean" === n) && (this.className && ot._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ot._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ee, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Oe = ot.now(),
        Ne = /\?/,
        De = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ot.parseJSON = function(e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            o = ot.trim(e + "");
        return o && !ot.trim(o.replace(De, function(t, e, o, s) {
            return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !s - !o, "")
        })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
    }, ot.parseXML = function(e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (o) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
    };
    var Ie, je, Pe = /#.*$/,
        Le = /([?&])_=[^&]*/,
        He = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        qe = /^(?:GET|HEAD)$/,
        ze = /^\/\//,
        Me = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Re = {},
        Be = {},
        We = "*/".concat("*");
    try {
        je = location.href
    } catch (Ue) {
        je = ht.createElement("a"), je.href = "", je = je.href
    }
    Ie = Me.exec(je.toLowerCase()) || [], ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: je,
            type: "GET",
            isLocal: Fe.test(Ie[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? M(M(t, ot.ajaxSettings), e) : M(ot.ajaxSettings, t)
        },
        ajaxPrefilter: q(Re),
        ajaxTransport: q(Be),
        ajax: function(t, e) {
            function n(t, e, n, i) {
                var o, d, m, y, w, T = e;
                2 !== b && (b = 2, a && clearTimeout(a), c = void 0, r = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, n && (y = R(u, x, n)), y = B(u, y, x, o), o ? (u.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (ot.etag[s] = w)), 204 === t || "HEAD" === u.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = y.state, d = y.data, m = y.error, o = !m)) : (m = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", o ? h.resolveWith(p, [d, T, x]) : h.rejectWith(p, [x, T, m]), x.statusCode(v), v = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [x, u, o ? d : m]), g.fireWith(p, [x, T]), l && (f.trigger("ajaxComplete", [x, u]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, o, s, r, a, l, c, d, u = ot.ajaxSetup({}, e),
                p = u.context || u,
                f = u.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
                h = ot.Deferred(),
                g = ot.Callbacks("once memory"),
                v = u.statusCode || {},
                m = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === b) {
                            if (!d)
                                for (d = {}; e = He.exec(r);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, m[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return b || (u.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) v[e] = [v[e], t[e]];
                            else x.always(t[x.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || w;
                        return c && c.abort(e), n(0, e), this
                    }
                };
            if (h.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, u.url = ((t || u.url || je) + "").replace(Pe, "").replace(ze, Ie[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = ot.trim(u.dataType || "*").toLowerCase().match(bt) || [""], null == u.crossDomain && (i = Me.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Ie[1] && i[2] === Ie[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ie[3] || ("http:" === Ie[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = ot.param(u.data, u.traditional)), z(Re, u, e, x), 2 === b) return x;
            l = ot.event && u.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !qe.test(u.type), s = u.url, u.hasContent || (u.data && (s = u.url += (Ne.test(s) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = Le.test(s) ? s.replace(Le, "$1_=" + Oe++) : s + (Ne.test(s) ? "&" : "?") + "_=" + Oe++)), u.ifModified && (ot.lastModified[s] && x.setRequestHeader("If-Modified-Since", ot.lastModified[s]), ot.etag[s] && x.setRequestHeader("If-None-Match", ot.etag[s])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", u.contentType), x.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + We + "; q=0.01" : "") : u.accepts["*"]);
            for (o in u.headers) x.setRequestHeader(o, u.headers[o]);
            if (u.beforeSend && (u.beforeSend.call(p, x, u) === !1 || 2 === b)) return x.abort();
            w = "abort";
            for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[o](u[o]);
            if (c = z(Be, u, e, x)) {
                x.readyState = 1, l && f.trigger("ajaxSend", [x, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
                    x.abort("timeout")
                }, u.timeout));
                try {
                    b = 1, c.send(m, n)
                } catch (T) {
                    if (!(2 > b)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        getJSON: function(t, e, n) {
            return ot.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return ot.get(t, void 0, e, "script")
        }
    }), ot.each(["get", "post"], function(t, e) {
        ot[e] = function(t, n, i, o) {
            return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                url: t,
                type: e,
                dataType: o,
                data: n,
                success: i
            })
        }
    }), ot._evalUrl = function(t) {
        return ot.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ot.fn.extend({
        wrapAll: function(t) {
            if (ot.isFunction(t)) return this.each(function(e) {
                ot(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            return this.each(ot.isFunction(t) ? function(e) {
                ot(this).wrapInner(t.call(this, e))
            } : function() {
                var e = ot(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = ot.isFunction(t);
            return this.each(function(n) {
                ot(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ot.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"))
    }, ot.expr.filters.visible = function(t) {
        return !ot.expr.filters.hidden(t)
    };
    var Ve = /%20/g,
        Xe = /\[\]$/,
        Qe = /\r?\n/g,
        Ke = /^(?:submit|button|image|reset|file)$/i,
        Ye = /^(?:input|select|textarea|keygen)/i;
    ot.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) W(n, t[n], e, o);
        return i.join("&").replace(Ve, "+")
    }, ot.fn.extend({
        serialize: function() {
            return ot.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = ot.prop(this, "elements");
                return t ? ot.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !ot(this).is(":disabled") && Ye.test(this.nodeName) && !Ke.test(t) && (this.checked || !Ot.test(t))
            }).map(function(t, e) {
                var n = ot(this).val();
                return null == n ? null : ot.isArray(n) ? ot.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Qe, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Qe, "\r\n")
                }
            }).get()
        }
    }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && U() || V()
    } : U;
    var Ge = 0,
        Je = {},
        Ze = ot.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Je) Je[t](void 0, !0)
    }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && ot.ajaxTransport(function(t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function(n, i) {
                    var o, s = t.xhr(),
                        r = ++Ge;
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (o in n) void 0 !== n[o] && s.setRequestHeader(o, n[o] + "");
                    s.send(t.hasContent && t.data || null), e = function(n, o) {
                        var a, l, c;
                        if (e && (o || 4 === s.readyState))
                            if (delete Je[r], e = void 0, s.onreadystatechange = ot.noop, o) 4 !== s.readyState && s.abort();
                            else {
                                c = {}, a = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (d) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = c.text ? 200 : 404
                            }
                        c && i(a, l, c, s.getAllResponseHeaders())
                    }, t.async ? 4 === s.readyState ? setTimeout(e) : s.onreadystatechange = Je[r] = e : e()
                },
                abort: function() {
                    e && e(void 0, !0)
                }
            }
        }
    }), ot.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return ot.globalEval(t), t
            }
        }
    }), ot.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ot.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var e, n = ht.head || ot("head")[0] || ht.documentElement;
            return {
                send: function(i, o) {
                    e = ht.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function() {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    ot.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = tn.pop() || ot.expando + "_" + Oe++;
            return this[t] = !0, t
        }
    }), ot.ajaxPrefilter("json jsonp", function(e, n, i) {
        var o, s, r, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + o) : e.jsonp !== !1 && (e.url += (Ne.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || ot.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
            r = arguments
        }, i.always(function() {
            t[o] = s, e[o] && (e.jsonpCallback = n.jsonpCallback, tn.push(o)), r && ot.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), ot.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || ht;
        var i = ut.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
    };
    var nn = ot.fn.load;
    ot.fn.load = function(t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var i, o, s, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = ot.trim(t.slice(a, t.length)), t = t.slice(0, a)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (s = "POST"), r.length > 0 && ot.ajax({
            url: t,
            type: s,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, r.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            r.each(n, o || [t.responseText, e, t])
        }), this
    }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        ot.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), ot.expr.filters.animated = function(t) {
        return ot.grep(ot.timers, function(e) {
            return t === e.elem
        }).length
    };
    var on = t.document.documentElement;
    ot.offset = {
        setOffset: function(t, e, n) {
            var i, o, s, r, a, l, c, d = ot.css(t, "position"),
                u = ot(t),
                p = {};
            "static" === d && (t.style.position = "relative"), a = u.offset(), s = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === d || "fixed" === d) && ot.inArray("auto", [s, l]) > -1, c ? (i = u.position(), r = i.top, o = i.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (p.top = e.top - a.top + r), null != e.left && (p.left = e.left - a.left + o), "using" in e ? e.using.call(t, p) : u.css(p)
        }
    }, ot.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                ot.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                s = o && o.ownerDocument;
            return s ? (e = s.documentElement, ot.contains(e, o) ? (typeof o.getBoundingClientRect !== kt && (i = o.getBoundingClientRect()), n = X(s), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ot.css(i, "marginTop", !0),
                    left: e.left - n.left - ot.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || on; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");) t = t.offsetParent;
                return t || on
            })
        }
    }), ot.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = /Y/.test(e);
        ot.fn[t] = function(i) {
            return Et(this, function(t, i, o) {
                var s = X(t);
                return void 0 === o ? s ? e in s ? s[e] : s.document.documentElement[i] : t[i] : void(s ? s.scrollTo(n ? ot(s).scrollLeft() : o, n ? o : ot(s).scrollTop()) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }), ot.each(["top", "left"], function(t, e) {
        ot.cssHooks[e] = $(nt.pixelPosition, function(t, n) {
            return n ? (n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n) : void 0
        })
    }), ot.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        ot.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            ot.fn[i] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || o === !0 ? "margin" : "border");
                return Et(this, function(e, n, i) {
                    var o;
                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ot.css(e, n, r) : ot.style(e, n, i, r)
                }, e, s ? i : void 0, s, null)
            }
        })
    }), ot.fn.size = function() {
        return this.length
    }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ot
    });
    var sn = t.jQuery,
        rn = t.$;
    return ot.noConflict = function(e) {
        return t.$ === ot && (t.$ = rn), e && t.jQuery === ot && (t.jQuery = sn), ot
    }, typeof e === kt && (t.jQuery = t.$ = ot), ot
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
"use strict";
var e = t.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
"use strict";

function e() {
    var t = document.createElement("bootstrap"),
        e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
    for (var n in e)
        if (void 0 !== t.style[n]) return {
            end: e[n]
        };
    return !1
}
t.fn.emulateTransitionEnd = function(e) {
    var n = !1,
        i = this;
    t(this).one("bsTransitionEnd", function() {
        n = !0
    });
    var o = function() {
        n || t(i).trigger(t.support.transition.end)
    };
    return setTimeout(o, e), this
}, t(function() {
    t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
        bindType: t.support.transition.end,
        delegateType: t.support.transition.end,
        handle: function(e) {
            return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
        }
    })
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.alert");
        o || n.data("bs.alert", o = new i(this)), "string" == typeof e && o[e].call(n)
    })
}
var n = '[data-dismiss="alert"]',
    i = function(e) {
        t(e).on("click", n, this.close)
    };
i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.close = function(e) {
    function n() {
        r.detach().trigger("closed.bs.alert").remove()
    }
    var o = t(this),
        s = o.attr("data-target");
    s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
    var r = t(s);
    e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
};
var o = t.fn.alert;
t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
    return t.fn.alert = o, this
}, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.button"),
            s = "object" == typeof e && e;
        o || i.data("bs.button", o = new n(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
    })
}
var n = function(e, i) {
    this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
};
n.VERSION = "3.3.6", n.DEFAULTS = {
    loadingText: "loading..."
}, n.prototype.setState = function(e) {
    var n = "disabled",
        i = this.$element,
        o = i.is("input") ? "val" : "html",
        s = i.data();
    e += "Text", null == s.resetText && i.data("resetText", i[o]()), setTimeout(t.proxy(function() {
        i[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
    }, this), 0)
}, n.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var n = this.$element.find("input");
        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var i = t.fn.button;
t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
    return t.fn.button = i, this
}, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
    var i = t(n.target);
    i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.carousel"),
            s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
            r = "string" == typeof e ? e : s.slide;
        o || i.data("bs.carousel", o = new n(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
    })
}
var n = function(e, n) {
    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
};
n.VERSION = "3.3.6", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, n.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, n.prototype.cycle = function(e) {
    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
}, n.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, n.prototype.getItemForDirection = function(t, e) {
    var n = this.getItemIndex(e),
        i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
    if (i && !this.options.wrap) return e;
    var o = "prev" == t ? -1 : 1,
        s = (n + o) % this.$items.length;
    return this.$items.eq(s)
}, n.prototype.to = function(t) {
    var e = this,
        n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
}, n.prototype.pause = function(e) {
    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, n.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
}, n.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
}, n.prototype.slide = function(e, i) {
    var o = this.$element.find(".item.active"),
        s = i || this.getItemForDirection(e, o),
        r = this.interval,
        a = "next" == e ? "left" : "right",
        l = this;
    if (s.hasClass("active")) return this.sliding = !1;
    var c = s[0],
        d = t.Event("slide.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
    if (this.$element.trigger(d), !d.isDefaultPrevented()) {
        if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var u = t(this.$indicators.children()[this.getItemIndex(s)]);
            u && u.addClass("active")
        }
        var p = t.Event("slid.bs.carousel", {
            relatedTarget: c,
            direction: a
        });
        return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
            s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                l.$element.trigger(p)
            }, 0)
        }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(p)), r && this.cycle(), this
    }
};
var i = t.fn.carousel;
t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
    return t.fn.carousel = i, this
};
var o = function(n) {
    var i, o = t(this),
        s = t(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
    if (s.hasClass("carousel")) {
        var r = t.extend({}, s.data(), o.data()),
            a = o.attr("data-slide-to");
        a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), n.preventDefault()
    }
};
t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
    t('[data-ride="carousel"]').each(function() {
        var n = t(this);
        e.call(n, n.data())
    })
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
    return t(i)
}

function n(e) {
    return this.each(function() {
        var n = t(this),
            o = n.data("bs.collapse"),
            s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
        !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || n.data("bs.collapse", o = new i(this, s)), "string" == typeof e && o[e]()
    })
}
var i = function(e, n) {
    this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
i.VERSION = "3.3.6", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
    toggle: !0
}, i.prototype.dimension = function() {
    var t = this.$element.hasClass("width");
    return t ? "width" : "height"
}, i.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
            var s = t.Event("show.bs.collapse");
            if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                o && o.length && (n.call(o, "hide"), e || o.data("bs.collapse", null));
                var r = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var a = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!t.support.transition) return a.call(this);
                var l = t.camelCase(["scroll", r].join("-"));
                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
            }
        }
    }
}, i.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var e = t.Event("hide.bs.collapse");
        if (this.$element.trigger(e), !e.isDefaultPrevented()) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var o = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : o.call(this)
        }
    }
}, i.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, i.prototype.getParent = function() {
    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(n, i) {
        var o = t(i);
        this.addAriaAndCollapsedClass(e(o), o)
    }, this)).end()
}, i.prototype.addAriaAndCollapsedClass = function(t, e) {
    var n = t.hasClass("in");
    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
};
var o = t.fn.collapse;
t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function() {
    return t.fn.collapse = o, this
}, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
    var o = t(this);
    o.attr("data-target") || i.preventDefault();
    var s = e(o),
        r = s.data("bs.collapse"),
        a = r ? "toggle" : o.data();
    n.call(s, a)
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    var n = e.attr("data-target");
    n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var i = n && t(n);
    return i && i.length ? i : e.parent()
}

function n(n) {
    n && 3 === n.which || (t(o).remove(), t(s).each(function() {
        var i = t(this),
            o = e(i),
            s = {
                relatedTarget: this
            };
        o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(o[0], n.target) || (o.trigger(n = t.Event("hide.bs.dropdown", s)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
    }))
}

function i(e) {
    return this.each(function() {
        var n = t(this),
            i = n.data("bs.dropdown");
        i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
    })
}
var o = ".dropdown-backdrop",
    s = '[data-toggle="dropdown"]',
    r = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
r.VERSION = "3.3.6", r.prototype.toggle = function(i) {
    var o = t(this);
    if (!o.is(".disabled, :disabled")) {
        var s = e(o),
            r = s.hasClass("open");
        if (n(), !r) {
            "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
            var a = {
                relatedTarget: this
            };
            if (s.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
            o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
        }
        return !1
    }
}, r.prototype.keydown = function(n) {
    if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
        var i = t(this);
        if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
            var o = e(i),
                r = o.hasClass("open");
            if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && o.find(s).trigger("focus"), i.trigger("click");
            var a = " li:not(.disabled):visible a",
                l = o.find(".dropdown-menu" + a);
            if (l.length) {
                var c = l.index(n.target);
                38 == n.which && c > 0 && c--, 40 == n.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
            }
        }
    }
};
var a = t.fn.dropdown;
t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
    return t.fn.dropdown = a, this
}, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function(t) {
"use strict";

function e(e, i) {
    return this.each(function() {
        var o = t(this),
            s = o.data("bs.modal"),
            r = t.extend({}, n.DEFAULTS, o.data(), "object" == typeof e && e);
        s || o.data("bs.modal", s = new n(this, r)), "string" == typeof e ? s[e](i) : r.show && s.show(i)
    })
}
var n = function(e, n) {
    this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
n.VERSION = "3.3.6", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, n.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, n.prototype.show = function(e) {
    var i = this,
        o = t.Event("show.bs.modal", {
            relatedTarget: e
        });
    this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        i.$element.one("mouseup.dismiss.bs.modal", function(e) {
            t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var o = t.support.transition && i.$element.hasClass("fade");
        i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
        var s = t.Event("shown.bs.modal", {
            relatedTarget: e
        });
        o ? i.$dialog.one("bsTransitionEnd", function() {
            i.$element.trigger("focus").trigger(s)
        }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(s)
    }))
}, n.prototype.hide = function(e) {
    e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
}, n.prototype.enforceFocus = function() {
    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
        this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, n.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, n.prototype.resize = function() {
    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
}, n.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, n.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, n.prototype.backdrop = function(e) {
    var i = this,
        o = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var s = t.support.transition && o;
        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
        s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var r = function() {
            i.removeBackdrop(), e && e()
        };
        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
    } else e && e()
}, n.prototype.handleUpdate = function() {
    this.adjustDialog()
}, n.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, n.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, n.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, n.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, n.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, n.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var i = t.fn.modal;
t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
    return t.fn.modal = i, this
}, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
    var i = t(this),
        o = i.attr("href"),
        s = t(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
        r = s.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(o) && o
        }, s.data(), i.data());
    i.is("a") && n.preventDefault(), s.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
            i.is(":visible") && i.trigger("focus")
        })
    }), e.call(s, r, this)
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tooltip"),
            s = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.tooltip", o = new n(this, s)), "string" == typeof e && o[e]())
    })
}
var n = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, n.prototype.init = function(e, n, i) {
    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
        var r = o[s];
        if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
        else if ("manual" != r) {
            var a = "hover" == r ? "mouseenter" : "focusin",
                l = "hover" == r ? "mouseleave" : "focusout";
            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = t.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.getOptions = function(e) {
    return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
    }), e
}, n.prototype.getDelegateOptions = function() {
    var e = {},
        n = this.getDefaults();
    return this._options && t.each(this._options, function(t, i) {
        n[t] != i && (e[t] = i)
    }), e
}, n.prototype.enter = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
        "in" == n.hoverState && n.show()
    }, n.options.delay.show)) : n.show())
}, n.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, n.prototype.leave = function(e) {
    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
    return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
        "out" == n.hoverState && n.hide()
    }, n.options.delay.hide)) : n.hide())
}, n.prototype.show = function() {
    var e = t.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(e);
        var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (e.isDefaultPrevented() || !i) return;
        var o = this,
            s = this.tip(),
            r = this.getUID(this.type);
        this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
            l = /\s?auto?\s?/i,
            c = l.test(a);
        c && (a = a.replace(l, "") || "top"), s.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var d = this.getPosition(),
            u = s[0].offsetWidth,
            p = s[0].offsetHeight;
        if (c) {
            var f = a,
                h = this.getPosition(this.$viewport);
            a = "bottom" == a && d.bottom + p > h.bottom ? "top" : "top" == a && d.top - p < h.top ? "bottom" : "right" == a && d.right + u > h.width ? "left" : "left" == a && d.left - u < h.left ? "right" : a, s.removeClass(f).addClass(a)
        }
        var g = this.getCalculatedOffset(a, d, u, p);
        this.applyPlacement(g, a);
        var v = function() {
            var t = o.hoverState;
            o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
        };
        t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(n.TRANSITION_DURATION) : v()
    }
}, n.prototype.applyPlacement = function(e, n) {
    var i = this.tip(),
        o = i[0].offsetWidth,
        s = i[0].offsetHeight,
        r = parseInt(i.css("margin-top"), 10),
        a = parseInt(i.css("margin-left"), 10);
    isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
        using: function(t) {
            i.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, e), 0), i.addClass("in");
    var l = i[0].offsetWidth,
        c = i[0].offsetHeight;
    "top" == n && c != s && (e.top = e.top + s - c);
    var d = this.getViewportAdjustedDelta(n, e, l, c);
    d.left ? e.left += d.left : e.top += d.top;
    var u = /top|bottom/.test(n),
        p = u ? 2 * d.left - o + l : 2 * d.top - s + c,
        f = u ? "offsetWidth" : "offsetHeight";
    i.offset(e), this.replaceArrow(p, i[0][f], u)
}, n.prototype.replaceArrow = function(t, e, n) {
    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
}, n.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, n.prototype.hide = function(e) {
    function i() {
        "in" != o.hoverState && s.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
    }
    var o = this,
        s = t(this.$tip),
        r = t.Event("hide.bs." + this.type);
    return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
}, n.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, n.prototype.hasContent = function() {
    return this.getTitle()
}, n.prototype.getPosition = function(e) {
    e = e || this.$element;
    var n = e[0],
        i = "BODY" == n.tagName,
        o = n.getBoundingClientRect();
    null == o.width && (o = t.extend({}, o, {
        width: o.right - o.left,
        height: o.bottom - o.top
    }));
    var s = i ? {
            top: 0,
            left: 0
        } : e.offset(),
        r = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        },
        a = i ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
    return t.extend({}, o, r, a, s)
}, n.prototype.getCalculatedOffset = function(t, e, n, i) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - n / 2
    } : "top" == t ? {
        top: e.top - i,
        left: e.left + e.width / 2 - n / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - i / 2,
        left: e.left - n
    } : {
        top: e.top + e.height / 2 - i / 2,
        left: e.left + e.width
    }
}, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
    var o = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return o;
    var s = this.options.viewport && this.options.viewport.padding || 0,
        r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var a = e.top - s - r.scroll,
            l = e.top + s - r.scroll + i;
        a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
    } else {
        var c = e.left - s,
            d = e.left + s + n;
        c < r.left ? o.left = r.left - c : d > r.right && (o.left = r.left + r.width - d)
    }
    return o
}, n.prototype.getTitle = function() {
    var t, e = this.$element,
        n = this.options;
    return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
}, n.prototype.getUID = function(t) {
    do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
    return t
}, n.prototype.tip = function() {
    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, n.prototype.enable = function() {
    this.enabled = !0
}, n.prototype.disable = function() {
    this.enabled = !1
}, n.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, n.prototype.toggle = function(e) {
    var n = this;
    e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
}, n.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
    })
};
var i = t.fn.tooltip;
t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
    return t.fn.tooltip = i, this
}
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.popover"),
            s = "object" == typeof e && e;
        (o || !/destroy|hide/.test(e)) && (o || i.data("bs.popover", o = new n(this, s)), "string" == typeof e && o[e]())
    })
}
var n = function(t, e) {
    this.init("popover", t, e)
};
if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
n.VERSION = "3.3.6", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
    return n.DEFAULTS
}, n.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        n = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, n.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, n.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, n.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var i = t.fn.popover;
t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
    return t.fn.popover = i, this
}
}(jQuery), + function(t) {
"use strict";

function e(n, i) {
    this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
}

function n(n) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.scrollspy"),
            s = "object" == typeof n && n;
        o || i.data("bs.scrollspy", o = new e(this, s)), "string" == typeof n && o[n]()
    })
}
e.VERSION = "3.3.6", e.DEFAULTS = {
    offset: 10
}, e.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, e.prototype.refresh = function() {
    var e = this,
        n = "offset",
        i = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var e = t(this),
            o = e.data("target") || e.attr("href"),
            s = /^#./.test(o) && t(o);
        return s && s.length && s.is(":visible") && [
            [s[n]().top + i, o]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        e.offsets.push(this[0]), e.targets.push(this[1])
    })
}, e.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        n = this.getScrollHeight(),
        i = this.options.offset + n - this.$scrollElement.height(),
        o = this.offsets,
        s = this.targets,
        r = this.activeTarget;
    if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = s[s.length - 1]) && this.activate(t);
    if (r && e < o[0]) return this.activeTarget = null, this.clear();
    for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
}, e.prototype.activate = function(e) {
    this.activeTarget = e, this.clear();
    var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
        i = t(n).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
}, e.prototype.clear = function() {
    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var i = t.fn.scrollspy;
t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
    return t.fn.scrollspy = i, this
}, t(window).on("load.bs.scrollspy.data-api", function() {
    t('[data-spy="scroll"]').each(function() {
        var e = t(this);
        n.call(e, e.data())
    })
})
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.tab");
        o || i.data("bs.tab", o = new n(this)), "string" == typeof e && o[e]()
    })
}
var n = function(e) {
    this.element = t(e)
};
n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
    var e = this.element,
        n = e.closest("ul:not(.dropdown-menu)"),
        i = e.data("target");
    if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
        var o = n.find(".active:last a"),
            s = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            }),
            r = t.Event("show.bs.tab", {
                relatedTarget: o[0]
            });
        if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
            var a = t(i);
            this.activate(e.closest("li"), n), this.activate(a, a.parent(), function() {
                o.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: e[0]
                }), e.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: o[0]
                })
            })
        }
    }
}, n.prototype.activate = function(e, i, o) {
    function s() {
        r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
    }
    var r = i.find("> .active"),
        a = o && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
    r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(n.TRANSITION_DURATION) : s(), r.removeClass("in")
};
var i = t.fn.tab;
t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
    return t.fn.tab = i, this
};
var o = function(n) {
    n.preventDefault(), e.call(t(this), "show")
};
t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
"use strict";

function e(e) {
    return this.each(function() {
        var i = t(this),
            o = i.data("bs.affix"),
            s = "object" == typeof e && e;
        o || i.data("bs.affix", o = new n(this, s)), "string" == typeof e && o[e]()
    })
}
var n = function(e, i) {
    this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
n.VERSION = "3.3.6", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
    offset: 0,
    target: window
}, n.prototype.getState = function(t, e, n, i) {
    var o = this.$target.scrollTop(),
        s = this.$element.offset(),
        r = this.$target.height();
    if (null != n && "top" == this.affixed) return n > o && "top";
    if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= s.top) && "bottom" : !(t - i >= o + r) && "bottom";
    var a = null == this.affixed,
        l = a ? o : s.top,
        c = a ? r : e;
    return null != n && n >= o ? "top" : null != i && l + c >= t - i && "bottom"
}, n.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(n.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, n.prototype.checkPositionWithEventLoop = function() {
    setTimeout(t.proxy(this.checkPosition, this), 1)
}, n.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var e = this.$element.height(),
            i = this.options.offset,
            o = i.top,
            s = i.bottom,
            r = Math.max(t(document).height(), t(document.body).height());
        "object" != typeof i && (s = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof s && (s = i.bottom(this.$element));
        var a = this.getState(r, e, o, s);
        if (this.affixed != a) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (a ? "-" + a : ""),
                c = t.Event(l + ".bs.affix");
            if (this.$element.trigger(c), c.isDefaultPrevented()) return;
            this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == a && this.$element.offset({
            top: r - e - s
        })
    }
};
var i = t.fn.affix;
t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
    return t.fn.affix = i, this
}, t(window).on("load", function() {
    t('[data-spy="affix"]').each(function() {
        var n = t(this),
            i = n.data();
        i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
    })
})
}(jQuery), ! function(t) {
"function" == typeof define && define.amd ? define(["jquery"], function(e) {
    return t(e)
}) : "object" == typeof module && "object" == typeof module.exports ? module.exports = t(require("jquery")) : t(window.jQuery)
}(function(t) {
"use strict";

function e(t) {
    void 0 === t && (t = window.navigator.userAgent), t = t.toLowerCase();
    var e = /(edge)\/([\w.]+)/.exec(t) || /(opr)[\/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(iemobile)[\/]([\w.]+)/.exec(t) || /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
        n = /(ipad)/.exec(t) || /(ipod)/.exec(t) || /(windows phone)/.exec(t) || /(iphone)/.exec(t) || /(kindle)/.exec(t) || /(silk)/.exec(t) || /(android)/.exec(t) || /(win)/.exec(t) || /(mac)/.exec(t) || /(linux)/.exec(t) || /(cros)/.exec(t) || /(playbook)/.exec(t) || /(bb)/.exec(t) || /(blackberry)/.exec(t) || [],
        i = {},
        o = {
            browser: e[5] || e[3] || e[1] || "",
            version: e[2] || e[4] || "0",
            versionNumber: e[4] || e[2] || "0",
            platform: n[0] || ""
        };
    if (o.browser && (i[o.browser] = !0, i.version = o.version, i.versionNumber = parseInt(o.versionNumber, 10)), o.platform && (i[o.platform] = !0), (i.android || i.bb || i.blackberry || i.ipad || i.iphone || i.ipod || i.kindle || i.playbook || i.silk || i["windows phone"]) && (i.mobile = !0), (i.cros || i.mac || i.linux || i.win) && (i.desktop = !0), (i.chrome || i.opr || i.safari) && (i.webkit = !0), i.rv || i.iemobile) {
        var s = "msie";
        o.browser = s, i[s] = !0
    }
    if (i.edge) {
        delete i.edge;
        var r = "msedge";
        o.browser = r, i[r] = !0
    }
    if (i.safari && i.blackberry) {
        var a = "blackberry";
        o.browser = a, i[a] = !0
    }
    if (i.safari && i.playbook) {
        var l = "playbook";
        o.browser = l, i[l] = !0
    }
    if (i.bb) {
        var c = "blackberry";
        o.browser = c, i[c] = !0
    }
    if (i.opr) {
        var d = "opera";
        o.browser = d, i[d] = !0
    }
    if (i.safari && i.android) {
        var u = "android";
        o.browser = u, i[u] = !0
    }
    if (i.safari && i.kindle) {
        var p = "kindle";
        o.browser = p, i[p] = !0
    }
    if (i.safari && i.silk) {
        var f = "silk";
        o.browser = f, i[f] = !0
    }
    return i.name = o.browser, i.platform = o.platform, i
}
return window.jQBrowser = e(window.navigator.userAgent), window.jQBrowser.uaMatch = e, t && (t.browser = window.jQBrowser), window.jQBrowser
}),
function() {
var t, e, n, i, o, s, r, a, l, c;
e = window.device, t = {}, window.device = t, i = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), t.ios = function() {
    return t.iphone() || t.ipod() || t.ipad()
}, t.iphone = function() {
    return !t.windows() && o("iphone")
}, t.ipod = function() {
    return o("ipod")
}, t.ipad = function() {
    return o("ipad")
}, t.android = function() {
    return !t.windows() && o("android")
}, t.androidPhone = function() {
    return t.android() && o("mobile")
}, t.androidTablet = function() {
    return t.android() && !o("mobile")
}, t.blackberry = function() {
    return o("blackberry") || o("bb10") || o("rim")
}, t.blackberryPhone = function() {
    return t.blackberry() && !o("tablet")
}, t.blackberryTablet = function() {
    return t.blackberry() && o("tablet")
}, t.windows = function() {
    return o("windows")
}, t.windowsPhone = function() {
    return t.windows() && o("phone")
}, t.windowsTablet = function() {
    return t.windows() && o("touch") && !t.windowsPhone()
}, t.fxos = function() {
    return (o("(mobile;") || o("(tablet;")) && o("; rv:")
}, t.fxosPhone = function() {
    return t.fxos() && o("mobile")
}, t.fxosTablet = function() {
    return t.fxos() && o("tablet")
}, t.meego = function() {
    return o("meego")
}, t.cordova = function() {
    return window.cordova && "file:" === location.protocol
}, t.nodeWebkit = function() {
    return "object" == typeof window.process
}, t.mobile = function() {
    return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
}, t.tablet = function() {
    return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
}, t.desktop = function() {
    return !t.tablet() && !t.mobile()
}, t.television = function() {
    var t;
    for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], t = 0; t < television.length;) {
        if (o(television[t])) return !0;
        t++
    }
    return !1
}, t.portrait = function() {
    return window.innerHeight / window.innerWidth > 1
}, t.landscape = function() {
    return window.innerHeight / window.innerWidth < 1
}, t.noConflict = function() {
    return window.device = e, this
}, o = function(t) {
    return -1 !== c.indexOf(t)
}, r = function(t) {
    var e;
    return e = new RegExp(t, "i"), i.className.match(e)
}, n = function(t) {
    var e = null;
    r(t) || (e = i.className.replace(/^\s+|\s+$/g, ""), i.className = e + " " + t)
}, l = function(t) {
    r(t) && (i.className = i.className.replace(" " + t, ""))
}, t.ios() ? t.ipad() ? n("ios ipad tablet") : t.iphone() ? n("ios iphone mobile") : t.ipod() && n("ios ipod mobile") : t.android() ? n(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? n(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? n(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? n(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? n("meego mobile") : t.nodeWebkit() ? n("node-webkit") : t.television() ? n("television") : t.desktop() && n("desktop"), t.cordova() && n("cordova"), s = function() {
    t.landscape() ? (l("portrait"), n("landscape")) : (l("landscape"), n("portrait"))
}, a = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, s, !1) : window.attachEvent ? window.attachEvent(a, s) : window[a] = s, s(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() {
    return t
}) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t
}.call(this), ! function(t) {
var e = t(window);
t.fn.visible = function(t, n, i) {
    if (!(this.length < 1)) {
        var o = this.length > 1 ? this.eq(0) : this,
            s = o.get(0),
            r = e.width(),
            a = e.height(),
            i = i ? i : "both",
            l = n !== !0 || s.offsetWidth * s.offsetHeight;
        if ("function" == typeof s.getBoundingClientRect) {
            var c = s.getBoundingClientRect(),
                d = c.top >= 0 && c.top < a,
                u = c.bottom > 0 && c.bottom <= a,
                p = c.left >= 0 && c.left < r,
                f = c.right > 0 && c.right <= r,
                h = t ? d || u : d && u,
                g = t ? p || f : p && f;
            if ("both" === i) return l && h && g;
            if ("vertical" === i) return l && h;
            if ("horizontal" === i) return l && g
        } else {
            var v = e.scrollTop(),
                m = v + a,
                y = e.scrollLeft(),
                b = y + r,
                w = o.offset(),
                x = w.top,
                T = x + o.height(),
                k = w.left,
                C = k + o.width(),
                S = t === !0 ? T : x,
                $ = t === !0 ? x : T,
                _ = t === !0 ? C : k,
                A = t === !0 ? k : C;
            if ("both" === i) return !!l && m >= $ && S >= v && b >= A && _ >= y;
            if ("vertical" === i) return !!l && m >= $ && S >= v;
            if ("horizontal" === i) return !!l && b >= A && _ >= y
        }
    }
}
}(jQuery), ! function(t) {
"use strict";

function e() {}

function n() {
    try {
        return document.activeElement
    } catch (t) {}
}

function i(t, e) {
    for (var n = 0, i = t.length; i > n; n++)
        if (t[n] === e) return !0;
    return !1
}

function o(t, e, n) {
    return t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : void 0
}

function s(t, e) {
    var n;
    t.createTextRange ? (n = t.createTextRange(), n.move("character", e), n.select()) : t.selectionStart && (t.focus(), t.setSelectionRange(e, e))
}

function r(t, e) {
    try {
        return t.type = e, !0
    } catch (n) {
        return !1
    }
}

function a(t, e) {
    if (t && t.getAttribute(_)) e(t);
    else
        for (var n, i = t ? t.getElementsByTagName("input") : q, o = t ? t.getElementsByTagName("textarea") : z, s = i ? i.length : 0, r = o ? o.length : 0, a = s + r, l = 0; a > l; l++) n = s > l ? i[l] : o[l - s], e(n)
}

function l(t) {
    a(t, d)
}

function c(t) {
    a(t, u)
}

function d(t, e) {
    var n = !!e && t.value !== e,
        i = t.value === t.getAttribute(_);
    if ((n || i) && "true" === t.getAttribute(A)) {
        t.removeAttribute(A), t.value = t.value.replace(t.getAttribute(_), ""), t.className = t.className.replace($, "");
        var o = t.getAttribute(j);
        parseInt(o, 10) >= 0 && (t.setAttribute("maxLength", o), t.removeAttribute(j));
        var s = t.getAttribute(E);
        return s && (t.type = s), !0
    }
    return !1
}

function u(t) {
    var e = t.getAttribute(_);
    if ("" === t.value && e) {
        t.setAttribute(A, "true"), t.value = e, t.className += " " + S;
        var n = t.getAttribute(j);
        n || (t.setAttribute(j, t.maxLength), t.removeAttribute("maxLength"));
        var i = t.getAttribute(E);
        return i ? t.type = "text" : "password" === t.type && r(t, "text") && t.setAttribute(E, "password"), !0
    }
    return !1
}

function p(t) {
    return function() {
        M && t.value === t.getAttribute(_) && "true" === t.getAttribute(A) ? s(t, 0) : d(t)
    }
}

function f(t) {
    return function() {
        u(t)
    }
}

function h(t) {
    return function() {
        l(t)
    }
}

function g(t) {
    return function(e) {
        return x = t.value, "true" === t.getAttribute(A) && x === t.getAttribute(_) && i(k, e.keyCode) ? (e.preventDefault && e.preventDefault(), !1) : void 0
    }
}

function v(t) {
    return function() {
        d(t, x), "" === t.value && (t.blur(), s(t, 0))
    }
}

function m(t) {
    return function() {
        t === n() && t.value === t.getAttribute(_) && "true" === t.getAttribute(A) && s(t, 0)
    }
}

function y(t) {
    var e = t.form;
    e && "string" == typeof e && (e = document.getElementById(e), e.getAttribute(O) || (o(e, "submit", h(e)), e.setAttribute(O, "true"))), o(t, "focus", p(t)), o(t, "blur", f(t)), M && (o(t, "keydown", g(t)), o(t, "keyup", v(t)), o(t, "click", m(t))), t.setAttribute(N, "true"), t.setAttribute(_, U), (M || t !== n()) && u(t)
}
var b = document.createElement("input"),
    w = void 0 !== b.placeholder;
if (t.Placeholders = {
        nativeSupport: w,
        disable: w ? e : l,
        enable: w ? e : c
    }, !w) {
    var x, T = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
        k = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        C = "#ccc",
        S = "placeholdersjs",
        $ = new RegExp("(?:^|\\s)" + S + "(?!\\S)"),
        _ = "data-placeholder-value",
        A = "data-placeholder-active",
        E = "data-placeholder-type",
        O = "data-placeholder-submit",
        N = "data-placeholder-bound",
        D = "data-placeholder-focus",
        I = "data-placeholder-live",
        j = "data-placeholder-maxlength",
        P = 100,
        L = document.getElementsByTagName("head")[0],
        H = document.documentElement,
        F = t.Placeholders,
        q = document.getElementsByTagName("input"),
        z = document.getElementsByTagName("textarea"),
        M = "false" === H.getAttribute(D),
        R = "false" !== H.getAttribute(I),
        B = document.createElement("style");
    B.type = "text/css";
    var W = document.createTextNode("." + S + " {color:" + C + ";}");
    B.styleSheet ? B.styleSheet.cssText = W.nodeValue : B.appendChild(W), L.insertBefore(B, L.firstChild);
    for (var U, V, X = 0, Q = q.length + z.length; Q > X; X++) V = X < q.length ? q[X] : z[X - q.length], U = V.attributes.placeholder, U && (U = U.nodeValue, U && i(T, V.type) && y(V));
    var K = setInterval(function() {
        for (var t = 0, e = q.length + z.length; e > t; t++) V = t < q.length ? q[t] : z[t - q.length], U = V.attributes.placeholder, U ? (U = U.nodeValue, U && i(T, V.type) && (V.getAttribute(N) || y(V), (U !== V.getAttribute(_) || "password" === V.type && !V.getAttribute(E)) && ("password" === V.type && !V.getAttribute(E) && r(V, "text") && V.setAttribute(E, "password"), V.value === V.getAttribute(_) && (V.value = U), V.setAttribute(_, U)))) : V.getAttribute(A) && (d(V), V.removeAttribute(_));
        R || clearInterval(K)
    }, P);
    o(t, "beforeunload", function() {
        F.disable()
    })
}
}(this), ! function(t, e, n) {
"use strict";

function i(n) {
    if (o = e.documentElement, s = e.body, U(), at = this, n = n || {}, pt = n.constants || {}, n.easing)
        for (var i in n.easing) Q[i] = n.easing[i];
    bt = n.edgeStrategy || "set", dt = {
        beforerender: n.beforerender,
        render: n.render,
        keyframe: n.keyframe
    }, ut = n.forceHeight !== !1, ut && (Lt = n.scale || 1), ft = n.mobileDeceleration || C, gt = n.smoothScrolling !== !1, vt = n.smoothScrollingDuration || $, mt = {
        targetTop: at.getScrollTop()
    }, Wt = (n.mobileCheck || function() {
        return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
    })(), Wt ? (ct = e.getElementById(n.skrollrBody || S), ct && rt(), K(), Ot(o, [y, x], [b])) : Ot(o, [y, w], [b]), at.refresh(), Tt(t, "resize orientationchange", function() {
        var t = o.clientWidth,
            e = o.clientHeight;
        (e !== Mt || t !== zt) && (Mt = e, zt = t, Rt = !0)
    });
    var r = V();
    return function a() {
        J(), xt = r(a)
    }(), at
}
var o, s, r = {
        get: function() {
            return at
        },
        init: function(t) {
            return at || new i(t)
        },
        VERSION: "0.6.30"
    },
    a = Object.prototype.hasOwnProperty,
    l = t.Math,
    c = t.getComputedStyle,
    d = "touchstart",
    u = "touchmove",
    p = "touchcancel",
    f = "touchend",
    h = "skrollable",
    g = h + "-before",
    v = h + "-between",
    m = h + "-after",
    y = "skrollr",
    b = "no-" + y,
    w = y + "-desktop",
    x = y + "-mobile",
    T = "linear",
    k = 1e3,
    C = .004,
    S = "skrollr-body",
    $ = 200,
    _ = "start",
    A = "end",
    E = "center",
    O = "bottom",
    N = "___skrollable_id",
    D = /^(?:input|textarea|button|select)$/i,
    I = /^\s+|\s+$/g,
    j = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    P = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    L = /^(@?[a-z\-]+)\[(\w+)\]$/,
    H = /-([a-z0-9_])/g,
    F = function(t, e) {
        return e.toUpperCase()
    },
    q = /[\-+]?[\d]*\.?[\d]+/g,
    z = /\{\?\}/g,
    M = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    R = /[a-z\-]+-gradient/g,
    B = "",
    W = "",
    U = function() {
        var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
        if (c) {
            var e = c(s, null);
            for (var n in e)
                if (B = n.match(t) || +n == n && e[n].match(t)) break;
            if (!B) return void(B = W = "");
            B = B[0], "-" === B.slice(0, 1) ? (W = B, B = {
                "-webkit-": "webkit",
                "-moz-": "Moz",
                "-ms-": "ms",
                "-o-": "O"
            }[B]) : W = "-" + B.toLowerCase() + "-"
        }
    },
    V = function() {
        var e = t.requestAnimationFrame || t[B.toLowerCase() + "RequestAnimationFrame"],
            n = It();
        return (Wt || !e) && (e = function(e) {
            var i = It() - n,
                o = l.max(0, 1e3 / 60 - i);
            return t.setTimeout(function() {
                n = It(), e()
            }, o)
        }), e
    },
    X = function() {
        var e = t.cancelAnimationFrame || t[B.toLowerCase() + "CancelAnimationFrame"];
        return (Wt || !e) && (e = function(e) {
            return t.clearTimeout(e)
        }), e
    },
    Q = {
        begin: function() {
            return 0
        },
        end: function() {
            return 1
        },
        linear: function(t) {
            return t
        },
        quadratic: function(t) {
            return t * t
        },
        cubic: function(t) {
            return t * t * t
        },
        swing: function(t) {
            return -l.cos(t * l.PI) / 2 + .5
        },
        sqrt: function(t) {
            return l.sqrt(t)
        },
        outCubic: function(t) {
            return l.pow(t - 1, 3) + 1
        },
        bounce: function(t) {
            var e;
            if (.5083 >= t) e = 3;
            else if (.8489 >= t) e = 9;
            else if (.96208 >= t) e = 27;
            else {
                if (!(.99981 >= t)) return 1;
                e = 91
            }
            return 1 - l.abs(3 * l.cos(t * e * 1.028) / e)
        }
    };
i.prototype.refresh = function(t) {
    var i, o, s = !1;
    for (t === n ? (s = !0, lt = [], Bt = 0, t = e.getElementsByTagName("*")) : t.length === n && (t = [t]), i = 0, o = t.length; o > i; i++) {
        var r = t[i],
            a = r,
            l = [],
            c = gt,
            d = bt,
            u = !1;
        if (s && N in r && delete r[N], r.attributes) {
            for (var p = 0, f = r.attributes.length; f > p; p++) {
                var g = r.attributes[p];
                if ("data-anchor-target" !== g.name)
                    if ("data-smooth-scrolling" !== g.name)
                        if ("data-edge-strategy" !== g.name)
                            if ("data-emit-events" !== g.name) {
                                var v = g.name.match(j);
                                if (null !== v) {
                                    var m = {
                                        props: g.value,
                                        element: r,
                                        eventType: g.name.replace(H, F)
                                    };
                                    l.push(m);
                                    var y = v[1];
                                    y && (m.constant = y.substr(1));
                                    var b = v[2];
                                    /p$/.test(b) ? (m.isPercentage = !0, m.offset = (0 | b.slice(0, -1)) / 100) : m.offset = 0 | b;
                                    var w = v[3],
                                        x = v[4] || w;
                                    w && w !== _ && w !== A ? (m.mode = "relative", m.anchors = [w, x]) : (m.mode = "absolute", w === A ? m.isEnd = !0 : m.isPercentage || (m.offset = m.offset * Lt))
                                }
                            } else u = !0;
                else d = g.value;
                else c = "off" !== g.value;
                else if (a = e.querySelector(g.value), null === a) throw 'Unable to find anchor target "' + g.value + '"'
            }
            if (l.length) {
                var T, k, C;
                !s && N in r ? (C = r[N], T = lt[C].styleAttr, k = lt[C].classAttr) : (C = r[N] = Bt++, T = r.style.cssText, k = Et(r)), lt[C] = {
                    element: r,
                    styleAttr: T,
                    classAttr: k,
                    anchorTarget: a,
                    keyFrames: l,
                    smoothScrolling: c,
                    edgeStrategy: d,
                    emitEvents: u,
                    lastFrameIndex: -1
                }, Ot(r, [h], [])
            }
        }
    }
    for ($t(), i = 0, o = t.length; o > i; i++) {
        var S = lt[t[i][N]];
        S !== n && (Z(S), et(S))
    }
    return at
}, i.prototype.relativeToAbsolute = function(t, e, n) {
    var i = o.clientHeight,
        s = t.getBoundingClientRect(),
        r = s.top,
        a = s.bottom - s.top;
    return e === O ? r -= i : e === E && (r -= i / 2), n === O ? r += a : n === E && (r += a / 2), r += at.getScrollTop(), r + .5 | 0
}, i.prototype.animateTo = function(t, e) {
    e = e || {};
    var i = It(),
        o = at.getScrollTop(),
        s = e.duration === n ? k : e.duration;
    return ht = {
        startTop: o,
        topDiff: t - o,
        targetTop: t,
        duration: s,
        startTime: i,
        endTime: i + s,
        easing: Q[e.easing || T],
        done: e.done
    }, ht.topDiff || (ht.done && ht.done.call(at, !1), ht = n), at
}, i.prototype.stopAnimateTo = function() {
    ht && ht.done && ht.done.call(at, !0), ht = n
}, i.prototype.isAnimatingTo = function() {
    return !!ht
}, i.prototype.isMobile = function() {
    return Wt
}, i.prototype.setScrollTop = function(e, n) {
    return yt = n === !0, Wt ? Ut = l.min(l.max(e, 0), Pt) : t.scrollTo(0, e), at
}, i.prototype.getScrollTop = function() {
    return Wt ? Ut : t.pageYOffset || o.scrollTop || s.scrollTop || 0
}, i.prototype.getMaxScrollTop = function() {
    return Pt
}, i.prototype.on = function(t, e) {
    return dt[t] = e, at
}, i.prototype.off = function(t) {
    return delete dt[t], at
}, i.prototype.destroy = function() {
    var t = X();
    t(xt), Ct(), Ot(o, [b], [y, w, x]);
    for (var e = 0, i = lt.length; i > e; e++) st(lt[e].element);
    o.style.overflow = s.style.overflow = "", o.style.height = s.style.height = "", ct && r.setStyle(ct, "transform", "none"), at = n, ct = n, dt = n, ut = n, Pt = 0, Lt = 1, pt = n, ft = n, Ht = "down", Ft = -1, zt = 0, Mt = 0, Rt = !1, ht = n, gt = n, vt = n, mt = n, yt = n, Bt = 0, bt = n, Wt = !1, Ut = 0, wt = n
};
var K = function() {
        var i, r, a, c, h, g, v, m, y, b, w, x;
        Tt(o, [d, u, p, f].join(" "), function(t) {
            var o = t.changedTouches[0];
            for (c = t.target; 3 === c.nodeType;) c = c.parentNode;
            switch (h = o.clientY, g = o.clientX, b = t.timeStamp, D.test(c.tagName) || t.preventDefault(), t.type) {
                case d:
                    i && i.blur(), at.stopAnimateTo(), i = c, r = v = h, a = g, y = b;
                    break;
                case u:
                    D.test(c.tagName) && e.activeElement !== c && t.preventDefault(), m = h - v, x = b - w, at.setScrollTop(Ut - m, !0), v = h, w = b;
                    break;
                default:
                case p:
                case f:
                    var s = r - h,
                        T = a - g,
                        k = T * T + s * s;
                    if (49 > k) {
                        if (!D.test(i.tagName)) {
                            i.focus();
                            var C = e.createEvent("MouseEvents");
                            C.initMouseEvent("click", !0, !0, t.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), i.dispatchEvent(C)
                        }
                        return
                    }
                    i = n;
                    var S = m / x;
                    S = l.max(l.min(S, 3), -3);
                    var $ = l.abs(S / ft),
                        _ = S * $ + .5 * ft * $ * $,
                        A = at.getScrollTop() - _,
                        E = 0;
                    A > Pt ? (E = (Pt - A) / _, A = Pt) : 0 > A && (E = -A / _, A = 0), $ *= 1 - E, at.animateTo(A + .5 | 0, {
                        easing: "outCubic",
                        duration: $
                    })
            }
        }), t.scrollTo(0, 0), o.style.overflow = s.style.overflow = "hidden"
    },
    Y = function() {
        var t, e, n, i, s, r, a, c, d, u, p, f = o.clientHeight,
            h = _t();
        for (c = 0, d = lt.length; d > c; c++)
            for (t = lt[c], e = t.element, n = t.anchorTarget, i = t.keyFrames, s = 0, r = i.length; r > s; s++) a = i[s], u = a.offset, p = h[a.constant] || 0, a.frame = u, a.isPercentage && (u *= f, a.frame = u), "relative" === a.mode && (st(e), a.frame = at.relativeToAbsolute(n, a.anchors[0], a.anchors[1]) - u, st(e, !0)), a.frame += p, ut && !a.isEnd && a.frame > Pt && (Pt = a.frame);
        for (Pt = l.max(Pt, At()), c = 0, d = lt.length; d > c; c++) {
            for (t = lt[c], i = t.keyFrames, s = 0, r = i.length; r > s; s++) a = i[s], p = h[a.constant] || 0, a.isEnd && (a.frame = Pt - a.offset + p);
            t.keyFrames.sort(jt)
        }
    },
    G = function(t, e) {
        for (var n = 0, i = lt.length; i > n; n++) {
            var o, s, l = lt[n],
                c = l.element,
                d = l.smoothScrolling ? t : e,
                u = l.keyFrames,
                p = u.length,
                f = u[0],
                y = u[u.length - 1],
                b = d < f.frame,
                w = d > y.frame,
                x = b ? f : y,
                T = l.emitEvents,
                k = l.lastFrameIndex;
            if (b || w) {
                if (b && -1 === l.edge || w && 1 === l.edge) continue;
                switch (b ? (Ot(c, [g], [m, v]), T && k > -1 && (St(c, f.eventType, Ht), l.lastFrameIndex = -1)) : (Ot(c, [m], [g, v]), T && p > k && (St(c, y.eventType, Ht), l.lastFrameIndex = p)), l.edge = b ? -1 : 1, l.edgeStrategy) {
                    case "reset":
                        st(c);
                        continue;
                    case "ease":
                        d = x.frame;
                        break;
                    default:
                    case "set":
                        var C = x.props;
                        for (o in C) a.call(C, o) && (s = ot(C[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), s) : r.setStyle(c, o, s));
                        continue
                }
            } else 0 !== l.edge && (Ot(c, [h, v], [g, m]), l.edge = 0);
            for (var S = 0; p - 1 > S; S++)
                if (d >= u[S].frame && d <= u[S + 1].frame) {
                    var $ = u[S],
                        _ = u[S + 1];
                    for (o in $.props)
                        if (a.call($.props, o)) {
                            var A = (d - $.frame) / (_.frame - $.frame);
                            A = $.props[o].easing(A), s = it($.props[o].value, _.props[o].value, A), s = ot(s), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), s) : r.setStyle(c, o, s)
                        }
                    T && k !== S && ("down" === Ht ? St(c, $.eventType, Ht) : St(c, _.eventType, Ht), l.lastFrameIndex = S);
                    break
                }
        }
    },
    J = function() {
        Rt && (Rt = !1, $t());
        var t, e, i = at.getScrollTop(),
            o = It();
        if (ht) o >= ht.endTime ? (i = ht.targetTop, t = ht.done, ht = n) : (e = ht.easing((o - ht.startTime) / ht.duration), i = ht.startTop + e * ht.topDiff | 0), at.setScrollTop(i, !0);
        else if (!yt) {
            var s = mt.targetTop - i;
            s && (mt = {
                startTop: Ft,
                topDiff: i - Ft,
                targetTop: i,
                startTime: qt,
                endTime: qt + vt
            }), o <= mt.endTime && (e = Q.sqrt((o - mt.startTime) / vt), i = mt.startTop + e * mt.topDiff | 0)
        }
        if (yt || Ft !== i) {
            Ht = i > Ft ? "down" : Ft > i ? "up" : Ht, yt = !1;
            var a = {
                    curTop: i,
                    lastTop: Ft,
                    maxTop: Pt,
                    direction: Ht
                },
                l = dt.beforerender && dt.beforerender.call(at, a);
            l !== !1 && (G(i, at.getScrollTop()), Wt && ct && r.setStyle(ct, "transform", "translate(0, " + -Ut + "px) " + wt), Ft = i, dt.render && dt.render.call(at, a)), t && t.call(at, !1)
        }
        qt = o
    },
    Z = function(t) {
        for (var e = 0, n = t.keyFrames.length; n > e; e++) {
            for (var i, o, s, r, a = t.keyFrames[e], l = {}; null !== (r = P.exec(a.props));) s = r[1], o = r[2], i = s.match(L), null !== i ? (s = i[1], i = i[2]) : i = T, o = o.indexOf("!") ? tt(o) : [o.slice(1)], l[s] = {
                value: o,
                easing: Q[i]
            };
            a.props = l
        }
    },
    tt = function(t) {
        var e = [];
        return M.lastIndex = 0, t = t.replace(M, function(t) {
            return t.replace(q, function(t) {
                return t / 255 * 100 + "%"
            })
        }), W && (R.lastIndex = 0, t = t.replace(R, function(t) {
            return W + t
        })), t = t.replace(q, function(t) {
            return e.push(+t), "{?}"
        }), e.unshift(t), e
    },
    et = function(t) {
        var e, n, i = {};
        for (e = 0, n = t.keyFrames.length; n > e; e++) nt(t.keyFrames[e], i);
        for (i = {}, e = t.keyFrames.length - 1; e >= 0; e--) nt(t.keyFrames[e], i)
    },
    nt = function(t, e) {
        var n;
        for (n in e) a.call(t.props, n) || (t.props[n] = e[n]);
        for (n in t.props) e[n] = t.props[n]
    },
    it = function(t, e, n) {
        var i, o = t.length;
        if (o !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
        var s = [t[0]];
        for (i = 1; o > i; i++) s[i] = t[i] + (e[i] - t[i]) * n;
        return s
    },
    ot = function(t) {
        var e = 1;
        return z.lastIndex = 0, t[0].replace(z, function() {
            return t[e++]
        })
    },
    st = function(t, e) {
        t = [].concat(t);
        for (var n, i, o = 0, s = t.length; s > o; o++) i = t[o], n = lt[i[N]], n && (e ? (i.style.cssText = n.dirtyStyleAttr, Ot(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText, n.dirtyClassAttr = Et(i), i.style.cssText = n.styleAttr, Ot(i, n.classAttr)))
    },
    rt = function() {
        wt = "translateZ(0)", r.setStyle(ct, "transform", wt);
        var t = c(ct),
            e = t.getPropertyValue("transform"),
            n = t.getPropertyValue(W + "transform"),
            i = e && "none" !== e || n && "none" !== n;
        i || (wt = "")
    };
r.setStyle = function(t, e, n) {
    var i = t.style;
    if (e = e.replace(H, F).replace("-", ""), "zIndex" === e) isNaN(n) ? i[e] = n : i[e] = "" + (0 | n);
    else if ("float" === e) i.styleFloat = i.cssFloat = n;
    else try {
        B && (i[B + e.slice(0, 1).toUpperCase() + e.slice(1)] = n), i[e] = n
    } catch (o) {}
};
var at, lt, ct, dt, ut, pt, ft, ht, gt, vt, mt, yt, bt, wt, xt, Tt = r.addEvent = function(e, n, i) {
        var o = function(e) {
            return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                e.returnValue = !1, e.defaultPrevented = !0
            }), i.call(this, e)
        };
        n = n.split(" ");
        for (var s, r = 0, a = n.length; a > r; r++) s = n[r], e.addEventListener ? e.addEventListener(s, i, !1) : e.attachEvent("on" + s, o), Vt.push({
            element: e,
            name: s,
            listener: i
        })
    },
    kt = r.removeEvent = function(t, e, n) {
        e = e.split(" ");
        for (var i = 0, o = e.length; o > i; i++) t.removeEventListener ? t.removeEventListener(e[i], n, !1) : t.detachEvent("on" + e[i], n)
    },
    Ct = function() {
        for (var t, e = 0, n = Vt.length; n > e; e++) t = Vt[e], kt(t.element, t.name, t.listener);
        Vt = []
    },
    St = function(t, e, n) {
        dt.keyframe && dt.keyframe.call(at, t, e, n)
    },
    $t = function() {
        var t = at.getScrollTop();
        Pt = 0, ut && !Wt && (s.style.height = ""), Y(), ut && !Wt && (s.style.height = Pt + o.clientHeight + "px"), Wt ? at.setScrollTop(l.min(at.getScrollTop(), Pt)) : at.setScrollTop(t, !0), yt = !0
    },
    _t = function() {
        var t, e, n = o.clientHeight,
            i = {};
        for (t in pt) e = pt[t], "function" == typeof e ? e = e.call(at) : /p$/.test(e) && (e = e.slice(0, -1) / 100 * n), i[t] = e;
        return i
    },
    At = function() {
        var t, e = 0;
        return ct && (e = l.max(ct.offsetHeight, ct.scrollHeight)), t = l.max(e, s.scrollHeight, s.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), t - o.clientHeight
    },
    Et = function(e) {
        var n = "className";
        return t.SVGElement && e instanceof t.SVGElement && (e = e[n], n = "baseVal"), e[n]
    },
    Ot = function(e, i, o) {
        var s = "className";
        if (t.SVGElement && e instanceof t.SVGElement && (e = e[s], s = "baseVal"), o === n) return void(e[s] = i);
        for (var r = e[s], a = 0, l = o.length; l > a; a++) r = Dt(r).replace(Dt(o[a]), " ");
        r = Nt(r);
        for (var c = 0, d = i.length; d > c; c++) - 1 === Dt(r).indexOf(Dt(i[c])) && (r += " " + i[c]);
        e[s] = Nt(r)
    },
    Nt = function(t) {
        return t.replace(I, "")
    },
    Dt = function(t) {
        return " " + t + " "
    },
    It = Date.now || function() {
        return +new Date
    },
    jt = function(t, e) {
        return t.frame - e.frame
    },
    Pt = 0,
    Lt = 1,
    Ht = "down",
    Ft = -1,
    qt = It(),
    zt = 0,
    Mt = 0,
    Rt = !1,
    Bt = 0,
    Wt = !1,
    Ut = 0,
    Vt = [];
"function" == typeof define && define.amd ? define([], function() {
    return r
}) : "undefined" != typeof module && module.exports ? module.exports = r : t.skrollr = r
}(window, document), ! function(t) {
if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
else if ("function" == typeof define && define.amd) define([], t);
else {
    var e;
    "undefined" != typeof window ? e = window : "undefined" != typeof global ? e = global : "undefined" != typeof self && (e = self), e.Slideout = t()
}
}(function() {
return function t(e, n, i) {
    function o(r, a) {
        if (!n[r]) {
            if (!e[r]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(r, !0);
                if (s) return s(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = n[r] = {
                exports: {}
            };
            e[r][0].call(d.exports, function(t) {
                var n = e[r][1][t];
                return o(n ? n : t)
            }, d, d.exports, t, e, n, i)
        }
        return n[r].exports
    }
    for (var s = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
    return o
}({
    1: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            for (var n in e) e[n] && (t[n] = e[n]);
            return t
        }

        function o(t, e) {
            t.prototype = i(t.prototype || {}, e.prototype)
        }

        function s(t) {
            t = t || {}, this._startOffsetX = 0, this._currentOffsetX = 0, this._opening = !1, this._moved = !1, this._opened = !1, this._preventOpen = !1, this._touch = void 0 === t.touch || t.touch && !0, this.panel = t.panel, this.menu = t.menu, this.panel.className.search("slideout-panel") === -1 && (this.panel.className += " slideout-panel"), this.menu.className.search("slideout-menu") === -1 && (this.menu.className += " slideout-menu"), this._fx = t.fx || "ease", this._duration = parseInt(t.duration, 10) || 300, this._tolerance = parseInt(t.tolerance, 10) || 70, this._padding = this._translateTo = parseInt(t.padding, 10) || 256, this._orientation = "right" === t.side ? -1 : 1, this._translateTo *= this._orientation, this._touch && this._initTouchEvents()
        }
        var r, a = t("decouple"),
            l = t("emitter"),
            c = !1,
            d = window.document,
            u = d.documentElement,
            p = window.navigator.msPointerEnabled,
            f = {
                start: p ? "MSPointerDown" : "touchstart",
                move: p ? "MSPointerMove" : "touchmove",
                end: p ? "MSPointerUp" : "touchend"
            },
            h = function() {
                var t = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
                    e = d.getElementsByTagName("script")[0].style;
                for (var n in e)
                    if (t.test(n)) return "-" + n.match(t)[0].toLowerCase() + "-";
                return "WebkitOpacity" in e ? "-webkit-" : "KhtmlOpacity" in e ? "-khtml-" : ""
            }();
        o(s, l), s.prototype.open = function() {
            var t = this;
            return this.emit("beforeopen"), u.className.search("slideout-open") === -1 && (u.className += " slideout-open"), this._setTransition(), this._translateXTo(this._translateTo), this._opened = !0, setTimeout(function() {
                t.panel.style.transition = t.panel.style["-webkit-transition"] = "", t.emit("open")
            }, this._duration + 50), this
        }, s.prototype.close = function() {
            var t = this;
            return this.isOpen() || this._opening ? (this.emit("beforeclose"), this._setTransition(), this._translateXTo(0), this._opened = !1, setTimeout(function() {
                u.className = u.className.replace(/ slideout-open/, ""), t.panel.style.transition = t.panel.style["-webkit-transition"] = t.panel.style[h + "transform"] = t.panel.style.transform = "", t.emit("close")
            }, this._duration + 50), this) : this
        }, s.prototype.toggle = function() {
            return this.isOpen() ? this.close() : this.open()
        }, s.prototype.isOpen = function() {
            return this._opened
        }, s.prototype._translateXTo = function(t) {
            this._currentOffsetX = t, this.panel.style[h + "transform"] = this.panel.style.transform = "translate3d(" + t + "px, 0, 0)"
        }, s.prototype._setTransition = function() {
            this.panel.style[h + "transition"] = this.panel.style.transition = h + "transform " + this._duration + "ms " + this._fx
        }, s.prototype._initTouchEvents = function() {
            var t = this;
            this._onScrollFn = a(d, "scroll", function() {
                t._moved || (clearTimeout(r), c = !0, r = setTimeout(function() {
                    c = !1
                }, 250))
            }), this._preventMove = function(e) {
                t._moved && e.preventDefault()
            }, d.addEventListener(f.move, this._preventMove), this._resetTouchFn = function(e) {
                "undefined" != typeof e.touches && (t._moved = !1, t._opening = !1, t._startOffsetX = e.touches[0].pageX, t._preventOpen = !t._touch || !t.isOpen() && 0 !== t.menu.clientWidth)
            }, this.panel.addEventListener(f.start, this._resetTouchFn), this._onTouchCancelFn = function() {
                t._moved = !1, t._opening = !1
            }, this.panel.addEventListener("touchcancel", this._onTouchCancelFn), this._onTouchEndFn = function() {
                t._moved && (t._opening && Math.abs(t._currentOffsetX) > t._tolerance ? t.open() : t.close()), t._moved = !1
            }, this.panel.addEventListener(f.end, this._onTouchEndFn), this._onTouchMoveFn = function(e) {
                if (!c && !t._preventOpen && "undefined" != typeof e.touches) {
                    var n = e.touches[0].clientX - t._startOffsetX,
                        i = t._currentOffsetX = n;
                    if (!(Math.abs(i) > t._padding) && Math.abs(n) > 20) {
                        t._opening = !0;
                        var o = n * t._orientation;
                        if (t._opened && o > 0 || !t._opened && o < 0) return;
                        o <= 0 && (i = n + t._padding * t._orientation, t._opening = !1), t._moved || u.className.search("slideout-open") !== -1 || (u.className += " slideout-open"), t.panel.style[h + "transform"] = t.panel.style.transform = "translate3d(" + i + "px, 0, 0)", t.emit("translate", i), t._moved = !0
                    }
                }
            }, this.panel.addEventListener(f.move, this._onTouchMoveFn)
        }, s.prototype.enableTouch = function() {
            return this._touch = !0, this
        }, s.prototype.disableTouch = function() {
            return this._touch = !1, this
        }, s.prototype.destroy = function() {
            return this.close(), d.removeEventListener(f.move, this._preventMove), this.panel.removeEventListener(f.start, this._resetTouchFn), this.panel.removeEventListener("touchcancel", this._onTouchCancelFn), this.panel.removeEventListener(f.end, this._onTouchEndFn), this.panel.removeEventListener(f.move, this._onTouchMoveFn), d.removeEventListener("scroll", this._onScrollFn), this.open = this.close = function() {}, this
        }, e.exports = s
    }, {
        decouple: 2,
        emitter: 3
    }],
    2: [function(t, e, n) {
        "use strict";

        function i(t, e, n) {
            function i(t) {
                a = t, s()
            }

            function s() {
                l || (o(r), l = !0)
            }

            function r() {
                n.call(t, a), l = !1
            }
            var a, l = !1;
            t.addEventListener(e, i, !1)
        }
        var o = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }
        }();
        e.exports = i
    }, {}],
    3: [function(t, e, n) {
        "use strict";
        var i = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        };
        n.__esModule = !0;
        var o = function() {
            function t() {
                i(this, t)
            }
            return t.prototype.on = function(t, e) {
                return this._eventCollection = this._eventCollection || {}, this._eventCollection[t] = this._eventCollection[t] || [], this._eventCollection[t].push(e), this
            }, t.prototype.once = function e(t, n) {
                function i() {
                    e.off(t, i), n.apply(this, arguments)
                }
                var e = this;
                return i.listener = n, this.on(t, i), this
            }, t.prototype.off = function(t, e) {
                var n = void 0;
                return this._eventCollection && (n = this._eventCollection[t]) ? (n.forEach(function(t, i) {
                    t !== e && t.listener !== e || n.splice(i, 1)
                }), 0 === n.length && delete this._eventCollection[t], this) : this
            }, t.prototype.emit = function n(t) {
                for (var e = this, i = arguments.length, o = Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++) o[s - 1] = arguments[s];
                var n = void 0;
                return this._eventCollection && (n = this._eventCollection[t]) ? (n = n.slice(0), n.forEach(function(t) {
                    return t.apply(e, o)
                }), this) : this
            }, t
        }();
        n["default"] = o, e.exports = n["default"]
    }, {}]
}, {}, [1])(1)
});
var addClass, device_height, device_width, el_body, el_html, el_wrapper, getCookie, parseBoolean, setCookie, set_background, set_font_size, set_height, set_text_color, validatedata;
device_width = window.innerWidth > 0 ? window.innerWidth : screen.width, device_height = window.innerHeight > 0 ? window.innerHeight : screen.height, el_html = jQuery("html"), el_body = jQuery("body"), el_wrapper = jQuery(".ct-js-wrapper"), validatedata = function(t, e) {
    return void 0 !== t ? t : e
}, parseBoolean = function(t, e) {
    return "true" === t || "false" !== t && e
}, setCookie = function(t, e, n) {
    var i, o;
    "default" !== n ? (i = new Date, i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), o = "expires=" + i.toUTCString(), document.cookie = t + "=" + e + "; " + o) : document.cookie = t + "=" + e
}, getCookie = function(t) {
    var e, n, i, o;
    for (o = t + "=", n = document.cookie.split(";"), i = 0; i < n.length;) {
        for (e = n[i];
            " " === e.charAt(0);) e = e.substring(1);
        if (0 === e.indexOf(o)) return e.substring(o.length, e.length);
        i++
    }
    return ""
}, addClass = function(t) {
    t.hasClass("active") ? t.removeClass("active") : t.addClass("active")
}, set_background = function() {
    if ($("[data-background]").length > 0) return $("[data-background]").each(function() {
        var t, e, n;
        n = $(this), t = $(this).attr("data-background"), e = $(this).attr("data-background-mobile"), "#" === n.attr("data-background").substr(0, 1) ? n.css("background-color", t) : n.attr("data-background-mobile") && device.mobile() ? n.css("background-image", "url(" + e + ")") : n.css("background-image", "url(" + t + ")")
    })
}, set_text_color = function() {
    if ($("[data-color]").length > 0) return $("[data-color]").each(function() {
        var t;
        t = $(this), t.css("color", t.attr("data-color"))
    })
}, set_font_size = function() {
    if ($("[data-font-size]").length > 0) return $("[data-font-size]").each(function() {
        var t;
        t = $(this), t.css("font-size", t.attr("data-font-size") + "px")
    })
}, set_height = function() {
    if ($("[data-height]").length > 0) return $("[data-height]").each(function() {
        var t, e;
        e = $(this), t = e.attr("data-height"), t.indexOf("%") > -1 ? e.css("min-height", device_height * parseInt(t, 10) / 100) : e.css("min-height", parseInt(t, 10) + "px")
    })
}, ! function(t, e) {
    "function" == typeof define && define.amd ? define("sifter", e) : "object" == typeof exports ? module.exports = e() : t.Sifter = e()
}(this, function() {
    var t = function(t, e) {
        this.items = t, this.settings = e || {
            diacritics: !0
        }
    };
    t.prototype.tokenize = function(t) {
        if (t = i(String(t || "").toLowerCase()), !t || !t.length) return [];
        var e, n, s, a, l = [],
            c = t.split(/ +/);
        for (e = 0, n = c.length; n > e; e++) {
            if (s = o(c[e]), this.settings.diacritics)
                for (a in r) r.hasOwnProperty(a) && (s = s.replace(new RegExp(a, "g"), r[a]));
            l.push({
                string: c[e],
                regex: new RegExp(s, "i")
            })
        }
        return l
    }, t.prototype.iterator = function(t, e) {
        var n;
        n = s(t) ? Array.prototype.forEach || function(t) {
            for (var e = 0, n = this.length; n > e; e++) t(this[e], e, this)
        } : function(t) {
            for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this)
        }, n.apply(t, [e])
    }, t.prototype.getScoreFunction = function(t, e) {
        var n, i, o, s;
        n = this, t = n.prepareSearch(t, e), o = t.tokens, i = t.options.fields, s = o.length;
        var r = function(t, e) {
                var n, i;
                return t ? (t = String(t || ""), i = t.search(e.regex), -1 === i ? 0 : (n = e.string.length / t.length, 0 === i && (n += .5), n)) : 0
            },
            a = function() {
                var t = i.length;
                return t ? 1 === t ? function(t, e) {
                    return r(e[i[0]], t)
                } : function(e, n) {
                    for (var o = 0, s = 0; t > o; o++) s += r(n[i[o]], e);
                    return s / t
                } : function() {
                    return 0
                }
            }();
        return s ? 1 === s ? function(t) {
            return a(o[0], t)
        } : "and" === t.options.conjunction ? function(t) {
            for (var e, n = 0, i = 0; s > n; n++) {
                if (e = a(o[n], t), 0 >= e) return 0;
                i += e
            }
            return i / s
        } : function(t) {
            for (var e = 0, n = 0; s > e; e++) n += a(o[e], t);
            return n / s
        } : function() {
            return 0
        }
    }, t.prototype.getSortFunction = function(t, n) {
        var i, o, s, r, a, l, c, d, u, p, f;
        if (s = this, t = s.prepareSearch(t, n), f = !t.query && n.sort_empty || n.sort, u = function(t, e) {
                return "$score" === t ? e.score : s.items[e.id][t]
            }, a = [], f)
            for (i = 0, o = f.length; o > i; i++)(t.query || "$score" !== f[i].field) && a.push(f[i]);
        if (t.query) {
            for (p = !0, i = 0, o = a.length; o > i; i++)
                if ("$score" === a[i].field) {
                    p = !1;
                    break
                }
            p && a.unshift({
                field: "$score",
                direction: "desc"
            })
        } else
            for (i = 0, o = a.length; o > i; i++)
                if ("$score" === a[i].field) {
                    a.splice(i, 1);
                    break
                } for (d = [], i = 0, o = a.length; o > i; i++) d.push("desc" === a[i].direction ? -1 : 1);
        return l = a.length, l ? 1 === l ? (r = a[0].field, c = d[0], function(t, n) {
            return c * e(u(r, t), u(r, n))
        }) : function(t, n) {
            var i, o, s;
            for (i = 0; l > i; i++)
                if (s = a[i].field, o = d[i] * e(u(s, t), u(s, n))) return o;
            return 0
        } : null
    }, t.prototype.prepareSearch = function(t, e) {
        if ("object" == typeof t) return t;
        e = n({}, e);
        var i = e.fields,
            o = e.sort,
            r = e.sort_empty;
        return i && !s(i) && (e.fields = [i]), o && !s(o) && (e.sort = [o]), r && !s(r) && (e.sort_empty = [r]), {
            options: e,
            query: String(t || "").toLowerCase(),
            tokens: this.tokenize(t),
            total: 0,
            items: []
        }
    }, t.prototype.search = function(t, e) {
        var n, i, o, s, r = this;
        return i = this.prepareSearch(t, e), e = i.options, t = i.query, s = e.score || r.getScoreFunction(i), t.length ? r.iterator(r.items, function(t, o) {
            n = s(t), (e.filter === !1 || n > 0) && i.items.push({
                score: n,
                id: o
            })
        }) : r.iterator(r.items, function(t, e) {
            i.items.push({
                score: 1,
                id: e
            })
        }), o = r.getSortFunction(i, e), o && i.items.sort(o), i.total = i.items.length, "number" == typeof e.limit && (i.items = i.items.slice(0, e.limit)), i
    };
    var e = function(t, e) {
            return "number" == typeof t && "number" == typeof e ? t > e ? 1 : e > t ? -1 : 0 : (t = a(String(t || "")), e = a(String(e || "")), t > e ? 1 : e > t ? -1 : 0)
        },
        n = function(t) {
            var e, n, i, o;
            for (e = 1, n = arguments.length; n > e; e++)
                if (o = arguments[e])
                    for (i in o) o.hasOwnProperty(i) && (t[i] = o[i]);
            return t
        },
        i = function(t) {
            return (t + "").replace(/^\s+|\s+$|/g, "")
        },
        o = function(t) {
            return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },
        s = Array.isArray || $ && $.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        r = {
            a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
            c: "[cÇçćĆčČ]",
            d: "[dđĐďĎ]",
            e: "[eÈÉÊËèéêëěĚĒēęĘ]",
            i: "[iÌÍÎÏìíîïĪī]",
            l: "[lłŁ]",
            n: "[nÑñňŇńŃ]",
            o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
            r: "[rřŘ]",
            s: "[sŠšśŚ]",
            t: "[tťŤ]",
            u: "[uÙÚÛÜùúûüůŮŪū]",
            y: "[yŸÿýÝ]",
            z: "[zŽžżŻźŹ]"
        },
        a = function() {
            var t, e, n, i, o = "",
                s = {};
            for (n in r)
                if (r.hasOwnProperty(n))
                    for (i = r[n].substring(2, r[n].length - 1), o += i, t = 0, e = i.length; e > t; t++) s[i.charAt(t)] = n;
            var a = new RegExp("[" + o + "]", "g");
            return function(t) {
                return t.replace(a, function(t) {
                    return s[t]
                }).toLowerCase()
            }
        }();
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("microplugin", e) : "object" == typeof exports ? module.exports = e() : t.MicroPlugin = e()
}(this, function() {
    var t = {};
    t.mixin = function(t) {
        t.plugins = {}, t.prototype.initializePlugins = function(t) {
            var n, i, o, s = this,
                r = [];
            if (s.plugins = {
                    names: [],
                    settings: {},
                    requested: {},
                    loaded: {}
                }, e.isArray(t))
                for (n = 0, i = t.length; i > n; n++) "string" == typeof t[n] ? r.push(t[n]) : (s.plugins.settings[t[n].name] = t[n].options, r.push(t[n].name));
            else if (t)
                for (o in t) t.hasOwnProperty(o) && (s.plugins.settings[o] = t[o], r.push(o));
            for (; r.length;) s.require(r.shift())
        }, t.prototype.loadPlugin = function(e) {
            var n = this,
                i = n.plugins,
                o = t.plugins[e];
            if (!t.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
            i.requested[e] = !0, i.loaded[e] = o.fn.apply(n, [n.plugins.settings[e] || {}]), i.names.push(e)
        }, t.prototype.require = function(t) {
            var e = this,
                n = e.plugins;
            if (!e.plugins.loaded.hasOwnProperty(t)) {
                if (n.requested[t]) throw new Error('Plugin has circular dependency ("' + t + '")');
                e.loadPlugin(t)
            }
            return n.loaded[t]
        }, t.define = function(e, n) {
            t.plugins[e] = {
                name: e,
                fn: n
            }
        }
    };
    var e = {
        isArray: Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
    };
    return t
}),
function(t, e) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], e) : "object" == typeof exports ? module.exports = e(require("jquery"), require("sifter"), require("microplugin")) : t.Selectize = e(t.jQuery, t.Sifter, t.MicroPlugin)
}(this, function(t, e, n) {
    "use strict";
    var i = function(t, e) {
            if ("string" != typeof e || e.length) {
                var n = "string" == typeof e ? new RegExp(e, "i") : e,
                    i = function(t) {
                        var e = 0;
                        if (3 === t.nodeType) {
                            var o = t.data.search(n);
                            if (o >= 0 && t.data.length > 0) {
                                var s = t.data.match(n),
                                    r = document.createElement("span");
                                r.className = "highlight";
                                var a = t.splitText(o),
                                    l = (a.splitText(s[0].length), a.cloneNode(!0));
                                r.appendChild(l), a.parentNode.replaceChild(r, a), e = 1
                            }
                        } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName))
                            for (var c = 0; c < t.childNodes.length; ++c) c += i(t.childNodes[c]);
                        return e
                    };
                return t.each(function() {
                    i(this)
                })
            }
        },
        o = function() {};
    o.prototype = {
        on: function(t, e) {
            this._events = this._events || {}, this._events[t] = this._events[t] || [], this._events[t].push(e)
        },
        off: function(t, e) {
            var n = arguments.length;
            return 0 === n ? delete this._events : 1 === n ? delete this._events[t] : (this._events = this._events || {}, void(t in this._events != 0 && this._events[t].splice(this._events[t].indexOf(e), 1)))
        },
        trigger: function(t) {
            if (this._events = this._events || {}, t in this._events != 0)
                for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, o.mixin = function(t) {
        for (var e = ["on", "off", "trigger"], n = 0; n < e.length; n++) t.prototype[e[n]] = o.prototype[e[n]]
    };
    var s = /Mac/.test(navigator.userAgent),
        r = 65,
        a = 13,
        l = 27,
        c = 37,
        d = 38,
        u = 80,
        p = 39,
        f = 40,
        h = 78,
        g = 8,
        v = 46,
        m = 16,
        y = s ? 91 : 17,
        b = s ? 18 : 17,
        w = 9,
        x = 1,
        T = 2,
        k = !/android/i.test(window.navigator.userAgent) && !!document.createElement("form").validity,
        C = function(t) {
            return "undefined" != typeof t
        },
        S = function(t) {
            return "undefined" == typeof t || null === t ? null : "boolean" == typeof t ? t ? "1" : "0" : t + ""
        },
        $ = function(t) {
            return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        _ = function(t) {
            return (t + "").replace(/\$/g, "$$$$")
        },
        A = {};
    A.before = function(t, e, n) {
        var i = t[e];
        t[e] = function() {
            return n.apply(t, arguments), i.apply(t, arguments)
        }
    }, A.after = function(t, e, n) {
        var i = t[e];
        t[e] = function() {
            var e = i.apply(t, arguments);
            return n.apply(t, arguments), e
        }
    };
    var E = function(t) {
            var e = !1;
            return function() {
                e || (e = !0, t.apply(this, arguments))
            }
        },
        O = function(t, e) {
            var n;
            return function() {
                var i = this,
                    o = arguments;
                window.clearTimeout(n), n = window.setTimeout(function() {
                    t.apply(i, o)
                }, e)
            }
        },
        N = function(t, e, n) {
            var i, o = t.trigger,
                s = {};
            t.trigger = function() {
                var n = arguments[0];
                return -1 === e.indexOf(n) ? o.apply(t, arguments) : void(s[n] = arguments)
            }, n.apply(t, []), t.trigger = o;
            for (i in s) s.hasOwnProperty(i) && o.apply(t, s[i])
        },
        D = function(t, e, n, i) {
            t.on(e, n, function(e) {
                for (var n = e.target; n && n.parentNode !== t[0];) n = n.parentNode;
                return e.currentTarget = n, i.apply(this, [e])
            })
        },
        I = function(t) {
            var e = {};
            if ("selectionStart" in t) e.start = t.selectionStart, e.length = t.selectionEnd - e.start;
            else if (document.selection) {
                t.focus();
                var n = document.selection.createRange(),
                    i = document.selection.createRange().text.length;
                n.moveStart("character", -t.value.length), e.start = n.text.length - i, e.length = i
            }
            return e
        },
        j = function(t, e, n) {
            var i, o, s = {};
            if (n)
                for (i = 0, o = n.length; o > i; i++) s[n[i]] = t.css(n[i]);
            else s = t.css();
            e.css(s)
        },
        P = function(e, n) {
            if (!e) return 0;
            var i = t("<test>").css({
                position: "absolute",
                top: -99999,
                left: -99999,
                width: "auto",
                padding: 0,
                whiteSpace: "pre"
            }).text(e).appendTo("body");
            j(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
            var o = i.width();
            return i.remove(), o
        },
        L = function(t) {
            var e = null,
                n = function(n, i) {
                    var o, s, r, a, l, c, d, u;
                    n = n || window.event || {}, i = i || {}, n.metaKey || n.altKey || (i.force || t.data("grow") !== !1) && (o = t.val(), n.type && "keydown" === n.type.toLowerCase() && (s = n.keyCode, r = s >= 97 && 122 >= s || s >= 65 && 90 >= s || s >= 48 && 57 >= s || 32 === s, s === v || s === g ? (u = I(t[0]), u.length ? o = o.substring(0, u.start) + o.substring(u.start + u.length) : s === g && u.start ? o = o.substring(0, u.start - 1) + o.substring(u.start + 1) : s === v && "undefined" != typeof u.start && (o = o.substring(0, u.start) + o.substring(u.start + 1))) : r && (c = n.shiftKey, d = String.fromCharCode(n.keyCode), d = c ? d.toUpperCase() : d.toLowerCase(), o += d)), a = t.attr("placeholder"), !o && a && (o = a), l = P(o, t) + 4, l !== e && (e = l, t.width(l), t.triggerHandler("resize")))
                };
            t.on("keydown keyup update blur", n), n()
        },
        H = function(n, i) {
            var o, s, r, a, l = this;
            a = n[0], a.selectize = l;
            var c = window.getComputedStyle && window.getComputedStyle(a, null);
            if (r = c ? c.getPropertyValue("direction") : a.currentStyle && a.currentStyle.direction, r = r || n.parents("[dir]:first").attr("dir") || "", t.extend(l, {
                    order: 0,
                    settings: i,
                    $input: n,
                    tabIndex: n.attr("tabindex") || "",
                    tagType: "select" === a.tagName.toLowerCase() ? x : T,
                    rtl: /rtl/i.test(r),
                    eventNS: ".selectize" + ++H.count,
                    highlightedValue: null,
                    isOpen: !1,
                    isDisabled: !1,
                    isRequired: n.is("[required]"),
                    isInvalid: !1,
                    isLocked: !1,
                    isFocused: !1,
                    isInputHidden: !1,
                    isSetup: !1,
                    isShiftDown: !1,
                    isCmdDown: !1,
                    isCtrlDown: !1,
                    ignoreFocus: !1,
                    ignoreBlur: !1,
                    ignoreHover: !1,
                    hasOptions: !1,
                    currentResults: null,
                    lastValue: "",
                    caretPos: 0,
                    loading: 0,
                    loadedSearches: {},
                    $activeOption: null,
                    $activeItems: [],
                    optgroups: {},
                    options: {},
                    userOptions: {},
                    items: [],
                    renderCache: {},
                    onSearchChange: null === i.loadThrottle ? l.onSearchChange : O(l.onSearchChange, i.loadThrottle)
                }), l.sifter = new e(this.options, {
                    diacritics: i.diacritics
                }), l.settings.options) {
                for (o = 0, s = l.settings.options.length; s > o; o++) l.registerOption(l.settings.options[o]);
                delete l.settings.options
            }
            if (l.settings.optgroups) {
                for (o = 0, s = l.settings.optgroups.length; s > o; o++) l.registerOptionGroup(l.settings.optgroups[o]);
                delete l.settings.optgroups
            }
            l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"), "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode), l.initializePlugins(l.settings.plugins), l.setupCallbacks(), l.setupTemplates(), l.setup()
        };
    return o.mixin(H), n.mixin(H), t.extend(H.prototype, {
        setup: function() {
            var e, n, i, o, r, a, l, c, d, u = this,
                p = u.settings,
                f = u.eventNS,
                h = t(window),
                g = t(document),
                v = u.$input;
            if (l = u.settings.mode, c = v.attr("class") || "", e = t("<div>").addClass(p.wrapperClass).addClass(c).addClass(l), n = t("<div>").addClass(p.inputClass).addClass("items").appendTo(e), i = t('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", v.is(":disabled") ? "-1" : u.tabIndex), a = t(p.dropdownParent || e), o = t("<div>").addClass(p.dropdownClass).addClass(l).hide().appendTo(a), r = t("<div>").addClass(p.dropdownContentClass).appendTo(o), u.settings.copyClassesToDropdown && o.addClass(c), e.css({
                    width: v[0].style.width
                }), u.plugins.names.length && (d = "plugin-" + u.plugins.names.join(" plugin-"), e.addClass(d), o.addClass(d)), (null === p.maxItems || p.maxItems > 1) && u.tagType === x && v.attr("multiple", "multiple"), u.settings.placeholder && i.attr("placeholder", p.placeholder), !u.settings.splitOn && u.settings.delimiter) {
                var w = u.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                u.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
            }
            v.attr("autocorrect") && i.attr("autocorrect", v.attr("autocorrect")), v.attr("autocapitalize") && i.attr("autocapitalize", v.attr("autocapitalize")), u.$wrapper = e, u.$control = n, u.$control_input = i, u.$dropdown = o, u.$dropdown_content = r, o.on("mouseenter", "[data-selectable]", function() {
                return u.onOptionHover.apply(u, arguments)
            }), o.on("mousedown click", "[data-selectable]", function() {
                return u.onOptionSelect.apply(u, arguments)
            }), D(n, "mousedown", "*:not(input)", function() {
                return u.onItemSelect.apply(u, arguments)
            }), L(i), n.on({
                mousedown: function() {
                    return u.onMouseDown.apply(u, arguments)
                },
                click: function() {
                    return u.onClick.apply(u, arguments)
                }
            }), i.on({
                mousedown: function(t) {
                    t.stopPropagation()
                },
                keydown: function() {
                    return u.onKeyDown.apply(u, arguments)
                },
                keyup: function() {
                    return u.onKeyUp.apply(u, arguments)
                },
                keypress: function() {
                    return u.onKeyPress.apply(u, arguments)
                },
                resize: function() {
                    u.positionDropdown.apply(u, [])
                },
                blur: function() {
                    return u.onBlur.apply(u, arguments)
                },
                focus: function() {
                    return u.ignoreBlur = !1, u.onFocus.apply(u, arguments)
                },
                paste: function() {
                    return u.onPaste.apply(u, arguments)
                }
            }), g.on("keydown" + f, function(t) {
                u.isCmdDown = t[s ? "metaKey" : "ctrlKey"], u.isCtrlDown = t[s ? "altKey" : "ctrlKey"], u.isShiftDown = t.shiftKey
            }), g.on("keyup" + f, function(t) {
                t.keyCode === b && (u.isCtrlDown = !1), t.keyCode === m && (u.isShiftDown = !1), t.keyCode === y && (u.isCmdDown = !1)
            }), g.on("mousedown" + f, function(t) {
                if (u.isFocused) {
                    if (t.target === u.$dropdown[0] || t.target.parentNode === u.$dropdown[0]) return !1;
                    u.$control.has(t.target).length || t.target === u.$control[0] || u.blur(t.target)
                }
            }), h.on(["scroll" + f, "resize" + f].join(" "), function() {
                u.isOpen && u.positionDropdown.apply(u, arguments)
            }), h.on("mousemove" + f, function() {
                u.ignoreHover = !1
            }), this.revertSettings = {
                $children: v.children().detach(),
                tabindex: v.attr("tabindex")
            }, v.attr("tabindex", -1).hide().after(u.$wrapper), t.isArray(p.items) && (u.setValue(p.items), delete p.items), k && v.on("invalid" + f, function(t) {
                t.preventDefault(), u.isInvalid = !0, u.refreshState()
            }), u.updateOriginalInput(), u.refreshItems(), u.refreshState(), u.updatePlaceholder(), u.isSetup = !0, v.is(":disabled") && u.disable(), u.on("change", this.onChange), v.data("selectize", u), v.addClass("selectized"), u.trigger("initialize"), p.preload === !0 && u.onSearchChange("")
        },
        setupTemplates: function() {
            var e = this,
                n = e.settings.labelField,
                i = e.settings.optgroupLabelField,
                o = {
                    optgroup: function(t) {
                        return '<div class="optgroup">' + t.html + "</div>"
                    },
                    optgroup_header: function(t, e) {
                        return '<div class="optgroup-header">' + e(t[i]) + "</div>"
                    },
                    option: function(t, e) {
                        return '<div class="option">' + e(t[n]) + "</div>"
                    },
                    item: function(t, e) {
                        return '<div class="item">' + e(t[n]) + "</div>"
                    },
                    option_create: function(t, e) {
                        return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>"
                    }
                };
            e.settings.render = t.extend({}, o, e.settings.render)
        },
        setupCallbacks: function() {
            var t, e, n = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (t in n) n.hasOwnProperty(t) && (e = this.settings[n[t]], e && this.on(t, e))
        },
        onClick: function(t) {
            var e = this;
            e.isFocused || (e.focus(), t.preventDefault())
        },
        onMouseDown: function(e) {
            var n = this,
                i = e.isDefaultPrevented();
            if (t(e.target), n.isFocused) {
                if (e.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null), !1
            } else i || window.setTimeout(function() {
                n.focus()
            }, 0)
        },
        onChange: function() {
            this.$input.trigger("change")
        },
        onPaste: function(e) {
            var n = this;
            n.isFull() || n.isInputHidden || n.isLocked ? e.preventDefault() : n.settings.splitOn && setTimeout(function() {
                for (var e = t.trim(n.$control_input.val() || "").split(n.settings.splitOn), i = 0, o = e.length; o > i; i++) n.createItem(e[i])
            }, 0)
        },
        onKeyPress: function(t) {
            if (this.isLocked) return t && t.preventDefault();
            var e = String.fromCharCode(t.keyCode || t.which);
            return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(), t.preventDefault(), !1) : void 0
        },
        onKeyDown: function(t) {
            var e = (t.target === this.$control_input[0], this);
            if (e.isLocked) return void(t.keyCode !== w && t.preventDefault());
            switch (t.keyCode) {
                case r:
                    if (e.isCmdDown) return void e.selectAll();
                    break;
                case l:
                    return void(e.isOpen && (t.preventDefault(), t.stopPropagation(), e.close()));
                case h:
                    if (!t.ctrlKey || t.altKey) break;
                case f:
                    if (!e.isOpen && e.hasOptions) e.open();
                    else if (e.$activeOption) {
                        e.ignoreHover = !0;
                        var n = e.getAdjacentOption(e.$activeOption, 1);
                        n.length && e.setActiveOption(n, !0, !0)
                    }
                    return void t.preventDefault();
                case u:
                    if (!t.ctrlKey || t.altKey) break;
                case d:
                    if (e.$activeOption) {
                        e.ignoreHover = !0;
                        var i = e.getAdjacentOption(e.$activeOption, -1);
                        i.length && e.setActiveOption(i, !0, !0)
                    }
                    return void t.preventDefault();
                case a:
                    return void(e.isOpen && e.$activeOption && (e.onOptionSelect({
                        currentTarget: e.$activeOption
                    }), t.preventDefault()));
                case c:
                    return void e.advanceSelection(-1, t);
                case p:
                    return void e.advanceSelection(1, t);
                case w:
                    return e.settings.selectOnTab && e.isOpen && e.$activeOption && (e.onOptionSelect({
                        currentTarget: e.$activeOption
                    }), e.isFull() || t.preventDefault()), void(e.settings.create && e.createItem() && t.preventDefault());
                case g:
                case v:
                    return void e.deleteSelection(t)
            }
            return !e.isFull() && !e.isInputHidden || (s ? t.metaKey : t.ctrlKey) ? void 0 : void t.preventDefault()
        },
        onKeyUp: function(t) {
            var e = this;
            if (e.isLocked) return t && t.preventDefault();
            var n = e.$control_input.val() || "";
            e.lastValue !== n && (e.lastValue = n, e.onSearchChange(n), e.refreshOptions(), e.trigger("type", n))
        },
        onSearchChange: function(t) {
            var e = this,
                n = e.settings.load;
            n && (e.loadedSearches.hasOwnProperty(t) || (e.loadedSearches[t] = !0, e.load(function(i) {
                n.apply(e, [t, i])
            })))
        },
        onFocus: function(t) {
            var e = this,
                n = e.isFocused;
            return e.isDisabled ? (e.blur(), t && t.preventDefault(), !1) : void(e.ignoreFocus || (e.isFocused = !0, "focus" === e.settings.preload && e.onSearchChange(""), n || e.trigger("focus"), e.$activeItems.length || (e.showInput(), e.setActiveItem(null), e.refreshOptions(!!e.settings.openOnFocus)), e.refreshState()))
        },
        onBlur: function(t, e) {
            var n = this;
            if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0, void n.onFocus(t);
                var i = function() {
                    n.close(), n.setTextboxValue(""), n.setActiveItem(null), n.setActiveOption(null), n.setCaret(n.items.length), n.refreshState(), (e || document.body).focus(), n.ignoreFocus = !1, n.trigger("blur")
                };
                n.ignoreFocus = !0, n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
            }
        },
        onOptionHover: function(t) {
            this.ignoreHover || this.setActiveOption(t.currentTarget, !1)
        },
        onOptionSelect: function(e) {
            var n, i, o = this;
            e.preventDefault && (e.preventDefault(), e.stopPropagation()), i = t(e.currentTarget), i.hasClass("create") ? o.createItem(null, function() {
                o.settings.closeAfterSelect && o.close()
            }) : (n = i.attr("data-value"), "undefined" != typeof n && (o.lastQuery = null, o.setTextboxValue(""), o.addItem(n), o.settings.closeAfterSelect ? o.close() : !o.settings.hideSelected && e.type && /mouse/.test(e.type) && o.setActiveOption(o.getOption(n))))
        },
        onItemSelect: function(t) {
            var e = this;
            e.isLocked || "multi" === e.settings.mode && (t.preventDefault(), e.setActiveItem(t.currentTarget, t))
        },
        load: function(t) {
            var e = this,
                n = e.$wrapper.addClass(e.settings.loadingClass);
            e.loading++, t.apply(e, [function(t) {
                e.loading = Math.max(e.loading - 1, 0), t && t.length && (e.addOption(t), e.refreshOptions(e.isFocused && !e.isInputHidden)), e.loading || n.removeClass(e.settings.loadingClass), e.trigger("load", t)
            }])
        },
        setTextboxValue: function(t) {
            var e = this.$control_input,
                n = e.val() !== t;
            n && (e.val(t).triggerHandler("update"), this.lastValue = t)
        },
        getValue: function() {
            return this.tagType === x && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        },
        setValue: function(t, e) {
            var n = e ? [] : ["change"];
            N(this, n, function() {
                this.clear(e), this.addItems(t, e)
            })
        },
        setActiveItem: function(e, n) {
            var i, o, s, r, a, l, c, d, u = this;
            if ("single" !== u.settings.mode) {
                if (e = t(e), !e.length) return t(u.$activeItems).removeClass("active"), u.$activeItems = [], void(u.isFocused && u.showInput());
                if (i = n && n.type.toLowerCase(), "mousedown" === i && u.isShiftDown && u.$activeItems.length) {
                    for (d = u.$control.children(".active:last"), r = Array.prototype.indexOf.apply(u.$control[0].childNodes, [d[0]]), a = Array.prototype.indexOf.apply(u.$control[0].childNodes, [e[0]]), r > a && (c = r, r = a, a = c), o = r; a >= o; o++) l = u.$control[0].childNodes[o], -1 === u.$activeItems.indexOf(l) && (t(l).addClass("active"), u.$activeItems.push(l));
                    n.preventDefault()
                } else "mousedown" === i && u.isCtrlDown || "keydown" === i && this.isShiftDown ? e.hasClass("active") ? (s = u.$activeItems.indexOf(e[0]), u.$activeItems.splice(s, 1), e.removeClass("active")) : u.$activeItems.push(e.addClass("active")[0]) : (t(u.$activeItems).removeClass("active"), u.$activeItems = [e.addClass("active")[0]]);
                u.hideInput(), this.isFocused || u.focus()
            }
        },
        setActiveOption: function(e, n, i) {
            var o, s, r, a, l, c = this;
            c.$activeOption && c.$activeOption.removeClass("active"), c.$activeOption = null, e = t(e), e.length && (c.$activeOption = e.addClass("active"), (n || !C(n)) && (o = c.$dropdown_content.height(), s = c.$activeOption.outerHeight(!0), n = c.$dropdown_content.scrollTop() || 0, r = c.$activeOption.offset().top - c.$dropdown_content.offset().top + n, a = r, l = r - o + s, r + s > o + n ? c.$dropdown_content.stop().animate({
                scrollTop: l
            }, i ? c.settings.scrollDuration : 0) : n > r && c.$dropdown_content.stop().animate({
                scrollTop: a
            }, i ? c.settings.scrollDuration : 0)))
        },
        selectAll: function() {
            var t = this;
            "single" !== t.settings.mode && (t.$activeItems = Array.prototype.slice.apply(t.$control.children(":not(input)").addClass("active")), t.$activeItems.length && (t.hideInput(), t.close()), t.focus())
        },
        hideInput: function() {
            var t = this;
            t.setTextboxValue(""), t.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: t.rtl ? 1e4 : -1e4
            }), t.isInputHidden = !0
        },
        showInput: function() {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }), this.isInputHidden = !1
        },
        focus: function() {
            var t = this;
            t.isDisabled || (t.ignoreFocus = !0, t.$control_input[0].focus(), window.setTimeout(function() {
                t.ignoreFocus = !1, t.onFocus()
            }, 0))
        },
        blur: function(t) {
            this.$control_input[0].blur(), this.onBlur(null, t)
        },
        getScoreFunction: function(t) {
            return this.sifter.getScoreFunction(t, this.getSearchOptions())
        },
        getSearchOptions: function() {
            var t = this.settings,
                e = t.sortField;
            return "string" == typeof e && (e = [{
                field: e
            }]), {
                fields: t.searchField,
                conjunction: t.searchConjunction,
                sort: e
            }
        },
        search: function(e) {
            var n, i, o, s = this,
                r = s.settings,
                a = this.getSearchOptions();
            if (r.score && (o = s.settings.score.apply(this, [e]), "function" != typeof o)) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (e !== s.lastQuery ? (s.lastQuery = e, i = s.sifter.search(e, t.extend(a, {
                    score: o
                })), s.currentResults = i) : i = t.extend(!0, {}, s.currentResults), r.hideSelected)
                for (n = i.items.length - 1; n >= 0; n--) - 1 !== s.items.indexOf(S(i.items[n].id)) && i.items.splice(n, 1);
            return i
        },
        refreshOptions: function(e) {
            var n, o, s, r, a, l, c, d, u, p, f, h, g, v, m, y;
            "undefined" == typeof e && (e = !0);
            var b = this,
                w = t.trim(b.$control_input.val()),
                x = b.search(w),
                T = b.$dropdown_content,
                k = b.$activeOption && S(b.$activeOption.attr("data-value"));
            for (r = x.items.length, "number" == typeof b.settings.maxOptions && (r = Math.min(r, b.settings.maxOptions)), a = {}, l = [], n = 0; r > n; n++)
                for (c = b.options[x.items[n].id], d = b.render("option", c), u = c[b.settings.optgroupField] || "", p = t.isArray(u) ? u : [u], o = 0, s = p && p.length; s > o; o++) u = p[o], b.optgroups.hasOwnProperty(u) || (u = ""), a.hasOwnProperty(u) || (a[u] = [], l.push(u)), a[u].push(d);
            for (this.settings.lockOptgroupOrder && l.sort(function(t, e) {
                    var n = b.optgroups[t].$order || 0,
                        i = b.optgroups[e].$order || 0;
                    return n - i
                }), f = [], n = 0, r = l.length; r > n; n++) u = l[n], b.optgroups.hasOwnProperty(u) && a[u].length ? (h = b.render("optgroup_header", b.optgroups[u]) || "", h += a[u].join(""), f.push(b.render("optgroup", t.extend({}, b.optgroups[u], {
                html: h
            })))) : f.push(a[u].join(""));
            if (T.html(f.join("")), b.settings.highlight && x.query.length && x.tokens.length)
                for (n = 0, r = x.tokens.length; r > n; n++) i(T, x.tokens[n].regex);
            if (!b.settings.hideSelected)
                for (n = 0, r = b.items.length; r > n; n++) b.getOption(b.items[n]).addClass("selected");
            g = b.canCreate(w), g && (T.prepend(b.render("option_create", {
                input: w
            })), y = t(T[0].childNodes[0])), b.hasOptions = x.items.length > 0 || g, b.hasOptions ? (x.items.length > 0 ? (m = k && b.getOption(k), m && m.length ? v = m : "single" === b.settings.mode && b.items.length && (v = b.getOption(b.items[0])), v && v.length || (v = y && !b.settings.addPrecedence ? b.getAdjacentOption(y, 1) : T.find("[data-selectable]:first"))) : v = y, b.setActiveOption(v), e && !b.isOpen && b.open()) : (b.setActiveOption(null), e && b.isOpen && b.close())
        },
        addOption: function(e) {
            var n, i, o, s = this;
            if (t.isArray(e))
                for (n = 0, i = e.length; i > n; n++) s.addOption(e[n]);
            else(o = s.registerOption(e)) && (s.userOptions[o] = !0, s.lastQuery = null, s.trigger("option_add", o, e))
        },
        registerOption: function(t) {
            var e = S(t[this.settings.valueField]);
            return !(!e || this.options.hasOwnProperty(e)) && (t.$order = t.$order || ++this.order, this.options[e] = t, e)
        },
        registerOptionGroup: function(t) {
            var e = S(t[this.settings.optgroupValueField]);
            return !!e && (t.$order = t.$order || ++this.order, this.optgroups[e] = t, e)
        },
        addOptionGroup: function(t, e) {
            e[this.settings.optgroupValueField] = t, (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e)
        },
        removeOptionGroup: function(t) {
            this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t], this.renderCache = {}, this.trigger("optgroup_remove", t))
        },
        clearOptionGroups: function() {
            this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
        },
        updateOption: function(e, n) {
            var i, o, s, r, a, l, c, d = this;
            if (e = S(e), s = S(n[d.settings.valueField]), null !== e && d.options.hasOwnProperty(e)) {
                if ("string" != typeof s) throw new Error("Value must be set in option data");
                c = d.options[e].$order, s !== e && (delete d.options[e], r = d.items.indexOf(e), -1 !== r && d.items.splice(r, 1, s)), n.$order = n.$order || c, d.options[s] = n, a = d.renderCache.item, l = d.renderCache.option, a && (delete a[e], delete a[s]), l && (delete l[e], delete l[s]), -1 !== d.items.indexOf(s) && (i = d.getItem(e), o = t(d.render("item", n)), i.hasClass("active") && o.addClass("active"), i.replaceWith(o)), d.lastQuery = null, d.isOpen && d.refreshOptions(!1)
            }
        },
        removeOption: function(t, e) {
            var n = this;
            t = S(t);
            var i = n.renderCache.item,
                o = n.renderCache.option;
            i && delete i[t], o && delete o[t], delete n.userOptions[t], delete n.options[t], n.lastQuery = null, n.trigger("option_remove", t), n.removeItem(t, e)
        },
        clearOptions: function() {
            var t = this;
            t.loadedSearches = {}, t.userOptions = {}, t.renderCache = {}, t.options = t.sifter.items = {}, t.lastQuery = null, t.trigger("option_clear"), t.clear()
        },
        getOption: function(t) {
            return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"))
        },
        getAdjacentOption: function(e, n) {
            var i = this.$dropdown.find("[data-selectable]"),
                o = i.index(e) + n;
            return o >= 0 && o < i.length ? i.eq(o) : t()
        },
        getElementWithValue: function(e, n) {
            if (e = S(e), "undefined" != typeof e && null !== e)
                for (var i = 0, o = n.length; o > i; i++)
                    if (n[i].getAttribute("data-value") === e) return t(n[i]);
            return t()
        },
        getItem: function(t) {
            return this.getElementWithValue(t, this.$control.children())
        },
        addItems: function(e, n) {
            for (var i = t.isArray(e) ? e : [e], o = 0, s = i.length; s > o; o++) this.isPending = s - 1 > o, this.addItem(i[o], n)
        },
        addItem: function(e, n) {
            var i = n ? [] : ["change"];
            N(this, i, function() {
                var i, o, s, r, a, l = this,
                    c = l.settings.mode;
                return e = S(e), -1 !== l.items.indexOf(e) ? void("single" === c && l.close()) : void(l.options.hasOwnProperty(e) && ("single" === c && l.clear(n), "multi" === c && l.isFull() || (i = t(l.render("item", l.options[e])), a = l.isFull(), l.items.splice(l.caretPos, 0, e), l.insertAtCaret(i), (!l.isPending || !a && l.isFull()) && l.refreshState(), l.isSetup && (s = l.$dropdown_content.find("[data-selectable]"), l.isPending || (o = l.getOption(e), r = l.getAdjacentOption(o, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== c), r && l.setActiveOption(l.getOption(r))), !s.length || l.isFull() ? l.close() : l.positionDropdown(),
                    l.updatePlaceholder(), l.trigger("item_add", e, i), l.updateOriginalInput({
                        silent: n
                    })))))
            })
        },
        removeItem: function(t, e) {
            var n, i, o, s = this;
            n = "object" == typeof t ? t : s.getItem(t), t = S(n.attr("data-value")), i = s.items.indexOf(t), -1 !== i && (n.remove(), n.hasClass("active") && (o = s.$activeItems.indexOf(n[0]), s.$activeItems.splice(o, 1)), s.items.splice(i, 1), s.lastQuery = null, !s.settings.persist && s.userOptions.hasOwnProperty(t) && s.removeOption(t, e), i < s.caretPos && s.setCaret(s.caretPos - 1), s.refreshState(), s.updatePlaceholder(), s.updateOriginalInput({
                silent: e
            }), s.positionDropdown(), s.trigger("item_remove", t, n))
        },
        createItem: function(e, n) {
            var i = this,
                o = i.caretPos;
            e = e || t.trim(i.$control_input.val() || "");
            var s = arguments[arguments.length - 1];
            if ("function" != typeof s && (s = function() {}), "boolean" != typeof n && (n = !0), !i.canCreate(e)) return s(), !1;
            i.lock();
            var r = "function" == typeof i.settings.create ? this.settings.create : function(t) {
                    var e = {};
                    return e[i.settings.labelField] = t, e[i.settings.valueField] = t, e
                },
                a = E(function(t) {
                    if (i.unlock(), !t || "object" != typeof t) return s();
                    var e = S(t[i.settings.valueField]);
                    return "string" != typeof e ? s() : (i.setTextboxValue(""), i.addOption(t), i.setCaret(o), i.addItem(e), i.refreshOptions(n && "single" !== i.settings.mode), void s(t))
                }),
                l = r.apply(this, [e, a]);
            return "undefined" != typeof l && a(l), !0
        },
        refreshItems: function() {
            this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
        },
        refreshState: function() {
            var t, e = this;
            e.isRequired && (e.items.length && (e.isInvalid = !1), e.$control_input.prop("required", t)), e.refreshClasses()
        },
        refreshClasses: function() {
            var e = this,
                n = e.isFull(),
                i = e.isLocked;
            e.$wrapper.toggleClass("rtl", e.rtl), e.$control.toggleClass("focus", e.isFocused).toggleClass("disabled", e.isDisabled).toggleClass("required", e.isRequired).toggleClass("invalid", e.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", e.isFocused && !e.isInputHidden).toggleClass("dropdown-active", e.isOpen).toggleClass("has-options", !t.isEmptyObject(e.options)).toggleClass("has-items", e.items.length > 0), e.$control_input.data("grow", !n && !i)
        },
        isFull: function() {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        },
        updateOriginalInput: function(t) {
            var e, n, i, o, s = this;
            if (t = t || {}, s.tagType === x) {
                for (i = [], e = 0, n = s.items.length; n > e; e++) o = s.options[s.items[e]][s.settings.labelField] || "", i.push('<option value="' + $(s.items[e]) + '" selected="selected">' + $(o) + "</option>");
                i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'), s.$input.html(i.join(""))
            } else s.$input.val(s.getValue()), s.$input.attr("value", s.$input.val());
            s.isSetup && (t.silent || s.trigger("change", s.$input.val()))
        },
        updatePlaceholder: function() {
            if (this.settings.placeholder) {
                var t = this.$control_input;
                this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder), t.triggerHandler("update", {
                    force: !0
                })
            }
        },
        open: function() {
            var t = this;
            t.isLocked || t.isOpen || "multi" === t.settings.mode && t.isFull() || (t.focus(), t.isOpen = !0, t.refreshState(), t.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), t.positionDropdown(), t.$dropdown.css({
                visibility: "visible"
            }), t.trigger("dropdown_open", t.$dropdown))
        },
        close: function() {
            var t = this,
                e = t.isOpen;
            "single" === t.settings.mode && t.items.length && t.hideInput(), t.isOpen = !1, t.$dropdown.hide(), t.setActiveOption(null), t.refreshState(), e && t.trigger("dropdown_close", t.$dropdown)
        },
        positionDropdown: function() {
            var t = this.$control,
                e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
            e.top += t.outerHeight(!0), this.$dropdown.css({
                width: t.outerWidth(),
                top: e.top,
                left: e.left
            })
        },
        clear: function(t) {
            var e = this;
            e.items.length && (e.$control.children(":not(input)").remove(), e.items = [], e.lastQuery = null, e.setCaret(0), e.setActiveItem(null), e.updatePlaceholder(), e.updateOriginalInput({
                silent: t
            }), e.refreshState(), e.showInput(), e.trigger("clear"))
        },
        insertAtCaret: function(e) {
            var n = Math.min(this.caretPos, this.items.length);
            0 === n ? this.$control.prepend(e) : t(this.$control[0].childNodes[n]).before(e), this.setCaret(n + 1)
        },
        deleteSelection: function(e) {
            var n, i, o, s, r, a, l, c, d, u = this;
            if (o = e && e.keyCode === g ? -1 : 1, s = I(u.$control_input[0]), u.$activeOption && !u.settings.hideSelected && (l = u.getAdjacentOption(u.$activeOption, -1).attr("data-value")), r = [], u.$activeItems.length) {
                for (d = u.$control.children(".active:" + (o > 0 ? "last" : "first")), a = u.$control.children(":not(input)").index(d), o > 0 && a++, n = 0, i = u.$activeItems.length; i > n; n++) r.push(t(u.$activeItems[n]).attr("data-value"));
                e && (e.preventDefault(), e.stopPropagation())
            } else(u.isFocused || "single" === u.settings.mode) && u.items.length && (0 > o && 0 === s.start && 0 === s.length ? r.push(u.items[u.caretPos - 1]) : o > 0 && s.start === u.$control_input.val().length && r.push(u.items[u.caretPos]));
            if (!r.length || "function" == typeof u.settings.onDelete && u.settings.onDelete.apply(u, [r]) === !1) return !1;
            for ("undefined" != typeof a && u.setCaret(a); r.length;) u.removeItem(r.pop());
            return u.showInput(), u.positionDropdown(), u.refreshOptions(!0), l && (c = u.getOption(l), c.length && u.setActiveOption(c)), !0
        },
        advanceSelection: function(t, e) {
            var n, i, o, s, r, a, l = this;
            0 !== t && (l.rtl && (t *= -1), n = t > 0 ? "last" : "first", i = I(l.$control_input[0]), l.isFocused && !l.isInputHidden ? (s = l.$control_input.val().length, r = 0 > t ? 0 === i.start && 0 === i.length : i.start === s, r && !s && l.advanceCaret(t, e)) : (a = l.$control.children(".active:" + n), a.length && (o = l.$control.children(":not(input)").index(a), l.setActiveItem(null), l.setCaret(t > 0 ? o + 1 : o))))
        },
        advanceCaret: function(t, e) {
            var n, i, o = this;
            0 !== t && (n = t > 0 ? "next" : "prev", o.isShiftDown ? (i = o.$control_input[n](), i.length && (o.hideInput(), o.setActiveItem(i), e && e.preventDefault())) : o.setCaret(o.caretPos + t))
        },
        setCaret: function(e) {
            var n = this;
            if (e = "single" === n.settings.mode ? n.items.length : Math.max(0, Math.min(n.items.length, e)), !n.isPending) {
                var i, o, s, r;
                for (s = n.$control.children(":not(input)"), i = 0, o = s.length; o > i; i++) r = t(s[i]).detach(), e > i ? n.$control_input.before(r) : n.$control.append(r)
            }
            n.caretPos = e
        },
        lock: function() {
            this.close(), this.isLocked = !0, this.refreshState()
        },
        unlock: function() {
            this.isLocked = !1, this.refreshState()
        },
        disable: function() {
            var t = this;
            t.$input.prop("disabled", !0), t.$control_input.prop("disabled", !0).prop("tabindex", -1), t.isDisabled = !0, t.lock()
        },
        enable: function() {
            var t = this;
            t.$input.prop("disabled", !1), t.$control_input.prop("disabled", !1).prop("tabindex", t.tabIndex), t.isDisabled = !1, t.unlock()
        },
        destroy: function() {
            var e = this,
                n = e.eventNS,
                i = e.revertSettings;
            e.trigger("destroy"), e.off(), e.$wrapper.remove(), e.$dropdown.remove(), e.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: i.tabindex
            }).show(), e.$control_input.removeData("grow"), e.$input.removeData("selectize"), t(window).off(n), t(document).off(n), t(document.body).off(n), delete e.$input[0].selectize
        },
        render: function(t, e) {
            var n, i, o = "",
                s = !1,
                r = this,
                a = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
            return ("option" === t || "item" === t) && (n = S(e[r.settings.valueField]), s = !!n), s && (C(r.renderCache[t]) || (r.renderCache[t] = {}), r.renderCache[t].hasOwnProperty(n)) ? r.renderCache[t][n] : (o = r.settings.render[t].apply(this, [e, $]), ("option" === t || "option_create" === t) && (o = o.replace(a, "<$1 data-selectable")), "optgroup" === t && (i = e[r.settings.optgroupValueField] || "", o = o.replace(a, '<$1 data-group="' + _($(i)) + '"')), ("option" === t || "item" === t) && (o = o.replace(a, '<$1 data-value="' + _($(n || "")) + '"')), s && (r.renderCache[t][n] = o), o)
        },
        clearCache: function(t) {
            var e = this;
            "undefined" == typeof t ? e.renderCache = {} : delete e.renderCache[t]
        },
        canCreate: function(t) {
            var e = this;
            if (!e.settings.create) return !1;
            var n = e.settings.createFilter;
            return !(!t.length || "function" == typeof n && !n.apply(e, [t]) || "string" == typeof n && !new RegExp(n).test(t) || n instanceof RegExp && !n.test(t))
        }
    }), H.count = 0, H.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    }, t.fn.selectize = function(e) {
        var n = t.fn.selectize.defaults,
            i = t.extend({}, n, e),
            o = i.dataAttr,
            s = i.labelField,
            r = i.valueField,
            a = i.optgroupField,
            l = i.optgroupLabelField,
            c = i.optgroupValueField,
            d = function(e, n) {
                var a, l, c, d, u = e.attr(o);
                if (u)
                    for (n.options = JSON.parse(u), a = 0, l = n.options.length; l > a; a++) n.items.push(n.options[a][r]);
                else {
                    var p = t.trim(e.val() || "");
                    if (!i.allowEmptyOption && !p.length) return;
                    for (c = p.split(i.delimiter), a = 0, l = c.length; l > a; a++) d = {}, d[s] = c[a], d[r] = c[a], n.options.push(d);
                    n.items = c
                }
            },
            u = function(e, n) {
                var d, u, p, f, h = n.options,
                    g = {},
                    v = function(t) {
                        var e = o && t.attr(o);
                        return "string" == typeof e && e.length ? JSON.parse(e) : null
                    },
                    m = function(e, o) {
                        e = t(e);
                        var l = S(e.attr("value"));
                        if (l || i.allowEmptyOption)
                            if (g.hasOwnProperty(l)) {
                                if (o) {
                                    var c = g[l][a];
                                    c ? t.isArray(c) ? c.push(o) : g[l][a] = [c, o] : g[l][a] = o
                                }
                            } else {
                                var d = v(e) || {};
                                d[s] = d[s] || e.text(), d[r] = d[r] || l, d[a] = d[a] || o, g[l] = d, h.push(d), e.is(":selected") && n.items.push(l)
                            }
                    },
                    y = function(e) {
                        var i, o, s, r, a;
                        for (e = t(e), s = e.attr("label"), s && (r = v(e) || {}, r[l] = s, r[c] = s, n.optgroups.push(r)), a = t("option", e), i = 0, o = a.length; o > i; i++) m(a[i], s)
                    };
                for (n.maxItems = e.attr("multiple") ? null : 1, f = e.children(), d = 0, u = f.length; u > d; d++) p = f[d].tagName.toLowerCase(), "optgroup" === p ? y(f[d]) : "option" === p && m(f[d])
            };
        return this.each(function() {
            if (!this.selectize) {
                var o, s = t(this),
                    r = this.tagName.toLowerCase(),
                    a = s.attr("placeholder") || s.attr("data-placeholder");
                a || i.allowEmptyOption || (a = s.children('option[value=""]').text());
                var l = {
                    placeholder: a,
                    options: [],
                    optgroups: [],
                    items: []
                };
                "select" === r ? u(s, l) : d(s, l), o = new H(s, t.extend(!0, {}, n, l, e))
            }
        })
    }, t.fn.selectize.defaults = H.defaults, t.fn.selectize.support = {
        validity: k
    }, H.define("drag_drop", function() {
        if (!t.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var e = this;
            e.lock = function() {
                var t = e.lock;
                return function() {
                    var n = e.$control.data("sortable");
                    return n && n.disable(), t.apply(e, arguments)
                }
            }(), e.unlock = function() {
                var t = e.unlock;
                return function() {
                    var n = e.$control.data("sortable");
                    return n && n.enable(), t.apply(e, arguments)
                }
            }(), e.setup = function() {
                var n = e.setup;
                return function() {
                    n.apply(this, arguments);
                    var i = e.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: e.isLocked,
                        start: function(t, e) {
                            e.placeholder.css("width", e.helper.css("width")), i.css({
                                overflow: "visible"
                            })
                        },
                        stop: function() {
                            i.css({
                                overflow: "hidden"
                            });
                            var n = e.$activeItems ? e.$activeItems.slice() : null,
                                o = [];
                            i.children("[data-value]").each(function() {
                                o.push(t(this).attr("data-value"))
                            }), e.setValue(o), e.setActiveItem(n)
                        }
                    })
                }
            }()
        }
    }), H.define("dropdown_header", function(e) {
        var n = this;
        e = t.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function(t) {
                return '<div class="' + t.headerClass + '"><div class="' + t.titleRowClass + '"><span class="' + t.labelClass + '">' + t.title + '</span><a href="javascript:void(0)" class="' + t.closeClass + '">&times;</a></div></div>'
            }
        }, e), n.setup = function() {
            var i = n.setup;
            return function() {
                i.apply(n, arguments), n.$dropdown_header = t(e.html(e)), n.$dropdown.prepend(n.$dropdown_header)
            }
        }()
    }), H.define("optgroup_columns", function(e) {
        var n = this;
        e = t.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, e), this.getAdjacentOption = function(e, n) {
            var i = e.closest("[data-group]").find("[data-selectable]"),
                o = i.index(e) + n;
            return o >= 0 && o < i.length ? i.eq(o) : t()
        }, this.onKeyDown = function() {
            var t = n.onKeyDown;
            return function(e) {
                var i, o, s, r;
                return !this.isOpen || e.keyCode !== c && e.keyCode !== p ? t.apply(this, arguments) : (n.ignoreHover = !0, r = this.$activeOption.closest("[data-group]"), i = r.find("[data-selectable]").index(this.$activeOption), r = e.keyCode === c ? r.prev("[data-group]") : r.next("[data-group]"), s = r.find("[data-selectable]"), o = s.eq(Math.min(s.length - 1, i)), void(o.length && this.setActiveOption(o)))
            }
        }();
        var i = function() {
                var t, e = i.width,
                    n = document;
                return "undefined" == typeof e && (t = n.createElement("div"), t.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', t = t.firstChild, n.body.appendChild(t), e = i.width = t.offsetWidth - t.clientWidth, n.body.removeChild(t)), e
            },
            o = function() {
                var o, s, r, a, l, c, d;
                if (d = t("[data-group]", n.$dropdown_content), s = d.length, s && n.$dropdown_content.width()) {
                    if (e.equalizeHeight) {
                        for (r = 0, o = 0; s > o; o++) r = Math.max(r, d.eq(o).height());
                        d.css({
                            height: r
                        })
                    }
                    e.equalizeWidth && (c = n.$dropdown_content.innerWidth() - i(), a = Math.round(c / s), d.css({
                        width: a
                    }), s > 1 && (l = c - a * (s - 1), d.eq(s - 1).css({
                        width: l
                    })))
                }
            };
        (e.equalizeHeight || e.equalizeWidth) && (A.after(this, "positionDropdown", o), A.after(this, "refreshOptions", o))
    }), H.define("remove_button", function(e) {
        if ("single" !== this.settings.mode) {
            e = t.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, e);
            var n = this,
                i = '<a href="javascript:void(0)" class="' + e.className + '" tabindex="-1" title="' + $(e.title) + '">' + e.label + "</a>",
                o = function(t, e) {
                    var n = t.search(/(<\/[^>]+>\s*)$/);
                    return t.substring(0, n) + e + t.substring(n)
                };
            this.setup = function() {
                var s = n.setup;
                return function() {
                    if (e.append) {
                        var r = n.settings.render.item;
                        n.settings.render.item = function() {
                            return o(r.apply(this, arguments), i)
                        }
                    }
                    s.apply(this, arguments), this.$control.on("click", "." + e.className, function(e) {
                        if (e.preventDefault(), !n.isLocked) {
                            var i = t(e.currentTarget).parent();
                            n.setActiveItem(i), n.deleteSelection() && n.setCaret(n.items.length)
                        }
                    })
                }
            }()
        }
    }), H.define("restore_on_backspace", function(t) {
        var e = this;
        t.text = t.text || function(t) {
            return t[this.settings.labelField]
        }, this.onKeyDown = function() {
            var n = e.onKeyDown;
            return function(e) {
                var i, o;
                return e.keyCode === g && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1, i >= 0 && i < this.items.length) ? (o = this.options[this.items[i]], this.deleteSelection(e) && (this.setTextboxValue(t.text.apply(this, [o])), this.refreshOptions(!0)), void e.preventDefault()) : n.apply(this, arguments)
            }
        }()
    }), H
}),
function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = window.Slick || {};
    e = function() {
        function e(e, i) {
            var o, s = this;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, e) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !1,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, t.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = t(e), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = t(e).data("slick") || {}, s.options = t.extend({}, s.defaults, o, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, "undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = t.proxy(s.autoPlay, s), s.autoPlayClear = t.proxy(s.autoPlayClear, s), s.changeSlide = t.proxy(s.changeSlide, s), s.clickHandler = t.proxy(s.clickHandler, s), s.selectHandler = t.proxy(s.selectHandler, s), s.setPosition = t.proxy(s.setPosition, s), s.swipeHandler = t.proxy(s.swipeHandler, s), s.dragHandler = t.proxy(s.dragHandler, s), s.keyHandler = t.proxy(s.keyHandler, s), s.autoPlayIterator = t.proxy(s.autoPlayIterator, s), s.instanceUid = n++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0), s.checkResponsive(!0)
        }
        var n = 0;
        return e
    }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n, n = null;
        else if (n < 0 || n >= o.slideCount) return !1;
        o.unload(), "number" == typeof n ? 0 === n && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : i ? t(e).insertBefore(o.$slides.eq(n)) : t(e).insertAfter(o.$slides.eq(n)) : i === !0 ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }, e.prototype.animateSlide = function(e, n) {
        var i = {},
            o = this;
        o.animateHeight(), o.options.rtl === !0 && o.options.vertical === !1 && (e = -e), o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, n) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft), t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t), o.options.vertical === !1 ? (i[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(i))
            },
            complete: function() {
                n && n.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), o.options.vertical === !1 ? i[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function() {
            o.disableTransition(), n.call()
        }, o.options.speed))
    }, e.prototype.asNavFor = function(e) {
        var n = this,
            i = n.options.asNavFor;
        i && null !== i && (i = t(i).not(n.$slider)), null !== i && "object" == typeof i && i.each(function() {
            var n = t(this).slick("getSlick");
            n.unslicked || n.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(t) {
        var e = this,
            n = {};
        e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var t = this;
        t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }, e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, n, i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            for (n = '<ul class="' + i.options.dotsClass + '">', e = 0; e <= i.getDotCount(); e += 1) n += "<li>" + i.options.customPaging.call(this, i, e) + "</li>";
            n += "</ul>", i.$dots = t(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
            t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
        }), e.$slidesCache = e.$slides, e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), e.options.centerMode !== !0 && e.options.swipeToSlide !== !0 || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var t, e, n, i, o, s, r, a = this;
        if (i = document.createDocumentFragment(), s = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < a.options.rows; e++) {
                    var c = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var d = t * r + (e * a.options.slidesPerRow + n);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                i.appendChild(l)
            }
            a.$slider.html(i), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, n) {
        var i, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || t(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            o = null;
            for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? s < r.breakpoints[i] && (o = r.breakpoints[i]) : s > r.breakpoints[i] && (o = r.breakpoints[i]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || n) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = o), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
        }
    }, e.prototype.changeSlide = function(e, n) {
        var i, o, s, r = this,
            a = t(e.target);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = r.slideCount % r.options.slidesToScroll !== 0, i = s ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - o, !1, n);
                break;
            case "next":
                o = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + o, !1, n);
                break;
            case "index":
                var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, n), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(t) {
        var e, n, i = this;
        if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = n;
                    break
                }
                n = e[o]
            }
        return t
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpRows = function() {
        var t, e = this;
        e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
    }, e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, e.prototype.destroy = function(e) {
        var n = this;
        n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            t(this).attr("style", t(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
    }, e.prototype.disableTransition = function(t) {
        var e = this,
            n = {};
        n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
    }, e.prototype.fadeSlide = function(t, e) {
        var n = this;
        n.cssTransitions === !1 ? (n.$slides.eq(t).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(t).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), e && setTimeout(function() {
            n.disableTransition(t), e.call()
        }, n.options.speed))
    }, e.prototype.fadeSlideOut = function(t) {
        var e = this;
        e.cssTransitions === !1 ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }, e.prototype.getDotCount = function() {
        var t = this,
            e = 0,
            n = 0,
            i = 0;
        if (t.options.infinite === !0)
            for (; e < t.slideCount;) ++i, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0) i = t.slideCount;
        else
            for (; e < t.slideCount;) ++i, e = n + t.options.slidesToShow, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return i - 1
    }, e.prototype.getLeft = function(t) {
        var e, n, i, o = this,
            s = 0;
        return o.slideOffset = 0, n = o.$slides.first().outerHeight(!0), o.options.infinite === !0 ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll !== 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, s = (o.options.slidesToShow - (t - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, s = o.slideCount % o.options.slidesToScroll * n * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * n), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, s = 0), o.options.centerMode === !0 && o.options.infinite === !0 ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : o.options.centerMode === !0 && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = o.options.vertical === !1 ? t * o.slideWidth * -1 + o.slideOffset : t * n * -1 + s, o.options.variableWidth === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = i[0] ? i[0].offsetLeft * -1 : 0, o.options.centerMode === !0 && (i = o.slideCount <= o.options.slidesToShow || o.options.infinite === !1 ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = i[0] ? i[0].offsetLeft * -1 : 0, e += (o.$list.width() - i.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }, e.prototype.getNavigableIndexes = function() {
        var t, e = this,
            n = 0,
            i = 0,
            o = [];
        for (e.options.infinite === !1 ? t = e.slideCount : (n = e.options.slidesToScroll * -1, i = e.options.slidesToScroll * -1, t = 2 * e.slideCount); n < t;) o.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, n, i, o = this;
        return i = o.options.centerMode === !0 ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, o.options.swipeToSlide === !0 ? (o.$slideTrack.find(".slick-slide").each(function(e, s) {
            if (s.offsetLeft - i + t(s).outerWidth() / 2 > o.swipeLeft * -1) return n = s, !1
        }), e = Math.abs(t(n).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var n = this;
        n.changeSlide({
            data: {
                message: "index",
                index: parseInt(t)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var n = this;
        t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA()
    }, e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
            message: "previous"
        }, t.changeSlide), t.$nextArrow.on("click.slick", {
            message: "next"
        }, t.changeSlide))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(), t.options.autoplay === !0 && t.autoPlay()
    }, e.prototype.keyHandler = function(t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: "previous"
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            t("img[data-lazy]", e).each(function() {
                var e = t(this),
                    n = t(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        e.attr("src", n).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy").removeClass("slick-loading")
                        })
                    })
                }, i.src = n
            })
        }
        var n, i, o, s, r = this;
        r.options.centerMode === !0 ? r.options.infinite === !0 ? (o = r.currentSlide + (r.options.slidesToShow / 2 + 1), s = o + r.options.slidesToShow + 2) : (o = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), s = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (o = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, s = o + r.options.slidesToShow, r.options.fade === !0 && (o > 0 && o--, s <= r.slideCount && s++)), n = r.$slider.find(".slick-slide").slice(o, s), e(n), r.slideCount <= r.options.slidesToShow ? (i = r.$slider.find(".slick-slide"), e(i)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (i = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(i)) : 0 === r.currentSlide && (i = r.$slider.find(".slick-cloned").slice(r.options.slidesToShow * -1), e(i))
    }, e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(), t.$slideTrack.css({
            opacity: 1
        }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(), t.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(), t.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.paused = !1, t.autoPlay()
    }, e.prototype.postSlide = function(t) {
        var e = this;
        e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay === !0 && e.paused === !1 && e.autoPlay(), e.options.accessibility === !0 && e.initADA()
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }, e.prototype.progressiveLazyLoad = function() {
        var e, n, i = this;
        e = t("img[data-lazy]", i.$slider).length, e > 0 && (n = t("img[data-lazy]", i.$slider).first(), n.attr("src", null), n.attr("src", n.attr("data-lazy")).removeClass("slick-loading").load(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad(), i.options.adaptiveHeight === !0 && i.setPosition()
        }).error(function() {
            n.removeAttr("data-lazy"), i.progressiveLazyLoad()
        }))
    }, e.prototype.refresh = function(e) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow, o.options.infinite || (o.slideCount <= o.options.slidesToShow ? o.currentSlide = 0 : o.currentSlide > i && (o.currentSlide = i)), n = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {
            currentSlide: n
        }), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, n, i, o = this,
            s = o.options.responsive || null;
        if ("array" === t.type(s) && s.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in s)
                if (i = o.breakpoints.length - 1, n = s[e].breakpoint, s.hasOwnProperty(e)) {
                    for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1), i--;
                    o.breakpoints.push(n), o.breakpointSettings[n] = s[e].settings
                }
            o.breakpoints.sort(function(t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), e.options.autoplay === !0 && e.focusHandler()
    }, e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
        var i = this;
        return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, !(i.slideCount < 1 || t < 0 || t > i.slideCount - 1) && (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, e.prototype.setCSS = function(t) {
        var e, n, i = this,
            o = {};
        i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", o[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(o) : (o = {}, i.cssTransitions === !1 ? (o[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: "0px " + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + " 0px"
        })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, n = this;
        n.$slides.each(function(i, o) {
            e = n.slideWidth * i * -1, n.options.rtl === !0 ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }), n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function(e, n, i) {
        var o, s, r = this;
        if ("responsive" === e && "array" === t.type(n))
            for (s in n)
                if ("array" !== t.type(r.options.responsive)) r.options.responsive = [n[s]];
                else {
                    for (o = r.options.responsive.length - 1; o >= 0;) r.options.responsive[o].breakpoint === n[s].breakpoint && r.options.responsive.splice(o, 1), o--;
                    r.options.responsive.push(n[s])
                } else r.options[e] = n;
        i === !0 && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, e.prototype.setProps = function() {
        var t = this,
            e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
    }, e.prototype.setSlideClasses = function(t) {
        var e, n, i, o, s = this;
        n = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), s.options.centerMode === !0 ? (e = Math.floor(s.options.slidesToShow / 2), s.options.infinite === !0 && (t >= e && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = s.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && n.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= s.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, i = s.options.infinite === !0 ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? n.slice(i - (s.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, n, i, o = this;
        if (o.options.fade === !0 && (o.options.centerMode = !1), o.options.infinite === !0 && o.options.fade === !1 && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = o.options.centerMode === !0 ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - i; e -= 1) n = e - 1, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < i; e += 1) n = e, t(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                t(this).attr("id", "")
            })
        }
    }, e.prototype.setPaused = function(t) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
    }, e.prototype.selectHandler = function(e) {
        var n = this,
            i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, e.prototype.slideHandler = function(t, e, n) {
        var i, o, s, r, a = null,
            l = this;
        if (e = e || !1, (l.animating !== !0 || l.options.waitForAnimate !== !0) && !(l.options.fade === !0 && l.currentSlide === t || l.slideCount <= l.options.slidesToShow)) return e === !1 && l.asNavFor(t), i = t, a = l.getLeft(i), r = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? r : l.swipeLeft, l.options.infinite === !1 && l.options.centerMode === !1 && (t < 0 || t > l.getDotCount() * l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(r, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : l.options.infinite === !1 && l.options.centerMode === !0 && (t < 0 || t > l.slideCount - l.options.slidesToScroll) ? void(l.options.fade === !1 && (i = l.currentSlide, n !== !0 ? l.animateSlide(r, function() {
            l.postSlide(i)
        }) : l.postSlide(i))) : (l.options.autoplay === !0 && clearInterval(l.autoPlayTimer), o = i < 0 ? l.slideCount % l.options.slidesToScroll !== 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll !== 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, o]), s = l.currentSlide, l.currentSlide = o, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), l.options.fade === !0 ? (n !== !0 ? (l.fadeSlideOut(s), l.fadeSlide(o, function() {
            l.postSlide(o)
        })) : l.postSlide(o), void l.animateHeight()) : void(n !== !0 ? l.animateSlide(a, function() {
            l.postSlide(o)
        }) : l.postSlide(o)))
    }, e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var t, e, n, i, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), i < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 ? o.options.rtl === !1 ? "left" : "right" : i <= 360 && i >= 315 ? o.options.rtl === !1 ? "left" : "right" : i >= 135 && i <= 225 ? o.options.rtl === !1 ? "right" : "left" : o.options.verticalSwiping === !0 ? i >= 35 && i <= 135 ? "left" : "right" : "vertical"
    }, e.prototype.swipeEnd = function(t) {
        var e, n = this;
        if (n.dragging = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
        if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
            case "left":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(e), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                break;
            case "right":
                e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(e), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && t.type.indexOf("mouse") !== -1)) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, e.prototype.swipeMove = function(t) {
        var e, n, i, o, s, r = this;
        return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || s && 1 !== s.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, r.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), n = r.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), o = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), i = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === n || r.currentSlide >= r.getDotCount() && "left" === n) && (i = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + i * o : r.swipeLeft = e + i * (r.$list.height() / r.listWidth) * o, r.options.verticalSwiping === !0 && (r.swipeLeft = e + i * o), r.options.fade !== !0 && r.options.touchMove !== !1 && (r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))) : void 0)
    }, e.prototype.swipeStart = function(t) {
        var e, n = this;
        return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger("unslick", [e, t]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var t, e = this;
        t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, e.prototype.visibility = function() {
        var t = this;
        document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this;
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
            t(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + e.instanceUid + n
            })
        }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
            t(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + e.instanceUid + n,
                id: "slick-slide" + e.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
    }, e.prototype.activateADA = function() {
        var t = this;
        t.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.on("focus.slick blur.slick", "*", function(n) {
            n.stopImmediatePropagation();
            var i = t(this);
            setTimeout(function() {
                e.isPlay && (i.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
            }, 0)
        })
    }, t.fn.slick = function() {
        var t, n, i = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = i.length;
        for (t = 0; t < r; t++)
            if ("object" == typeof o || "undefined" == typeof o ? i[t].slick = new e(i[t], o) : n = i[t].slick[o].apply(i[t].slick, s), "undefined" != typeof n) return n;
        return i
    }
}),
function(t) {
    t(document).ready(function() {
        var e = 1200,
            n = 992,
            i = 768,
            o = 480,
            s = t(".ct-js-slick");
        t(".ct-js-slick").each(function() {
            var e = t(this).find(".item").first().height();
            t(this).css("height", e + "px")
        }), t().slick && s.length > 0 && s.each(function() {
            var s = t(this),
                r = parseInt(validatedata(s.attr("data-items"), 1), 10),
                a = parseInt(validatedata(s.attr("data-items-xs"), r), 10),
                l = parseInt(validatedata(s.attr("data-items-sm"), a), 10),
                c = parseInt(validatedata(s.attr("data-items-md"), l), 10),
                d = parseInt(validatedata(s.attr("data-items-lg"), c), 10),
                u = parseBoolean(s.attr("data-accessibility"), !0),
                p = parseBoolean(s.attr("data-adaptiveHeight"), !1),
                f = parseBoolean(s.attr("data-autoplay"), !1),
                h = parseBoolean(s.attr("data-arrows"), !0),
                g = parseBoolean(s.attr("data-centerMode"), !1),
                v = parseBoolean(s.attr("data-dots"), !1),
                m = parseBoolean(s.attr("data-draggable"), !0),
                y = parseBoolean(s.attr("data-fade"), !1),
                b = parseBoolean(s.attr("data-focusOnSelect"), !1),
                w = parseBoolean(s.attr("data-infinite"), !0),
                x = parseBoolean(s.attr("data-mobileFirst"), !0),
                T = parseBoolean(s.attr("data-pauseOnHover"), !0),
                k = parseBoolean(s.attr("data-pauseOnDotsHover"), !1),
                C = parseBoolean(s.attr("data-swipe"), !0),
                S = parseBoolean(s.attr("data-swipeToSlide"), !0),
                $ = parseBoolean(s.attr("data-touchMove"), !0),
                _ = parseBoolean(s.attr("data-useCSS"), !0),
                A = parseBoolean(s.attr("data-variableWidth"), !1),
                E = parseBoolean(s.attr("data-vertical"), !1),
                O = parseBoolean(s.attr("data-rtl"), !1),
                N = validatedata(s.attr("data-asNavFor")),
                D = validatedata(s.attr("data-appendArrows")),
                I = validatedata(s.attr("data-prevArrow"), '<button type="button" class="slick-nav slick-prev"></button>'),
                j = validatedata(s.attr("data-nextArrow"), '<button type="button" class="slick-nav slick-next"></button>'),
                P = validatedata(s.attr("data-centerPadding"), "50px"),
                L = validatedata(s.attr("data-cssEase"), "ease"),
                H = validatedata(s.attr("data-easing"), "linear"),
                F = validatedata(s.attr("data-lazyLoad"), "ondemand"),
                q = validatedata(s.attr("data-respondTo"), "window"),
                z = validatedata(s.attr("data-slide")),
                M = (validatedata(s.attr("data-animations"), !0), parseInt(validatedata(s.attr("data-edgeFriction"), .15), 10)),
                R = parseInt(validatedata(s.attr("data-initialSlide"), 0), 10),
                B = parseInt(validatedata(s.attr("data-autoplaySpeed"), 5e3), 10),
                W = parseInt(validatedata(s.attr("data-slidesToScroll"), 1), 10),
                U = parseInt(validatedata(s.attr("data-speed"), 300), 10),
                V = parseInt(validatedata(s.attr("data-touchThreshold"), 5), 10);
            if (s.attr("data-height")) {
                var X = s.attr("data-height") + "px";
                X.indexOf("%") > -1 ? (s.css("min-height", device_height * (parseInt(device_height, 10) / 100)), s.find(".slick-list").css("min-height", device_height * (parseInt(X, 10) / 100)), s.find(".slick-track").css("min-height", device_height * (parseInt(X, 10) / 100)), s.find(".item").each(function() {
                    t(this).css("min-height", device_height * (parseInt(X, 10) / 100))
                })) : (s.css("min-height", parseInt(X, 10) + "px"), s.find(".slick-list").css("min-height", parseInt(X, 10) + "px"), s.find(".slick-track").css("min-height", parseInt(X, 10) + "px"), s.find(".item").each(function() {
                    t(this).css("min-height", parseInt(X, 10) + "px")
                }))
            }
            s.slick({
                slidesToShow: r,
                accessibility: u,
                adaptiveHeight: p,
                autoplay: f,
                autoplaySpeed: B,
                arrows: h,
                asNavFor: N,
                appendArrows: D,
                prevArrow: I,
                nextArrow: j,
                centerMode: g,
                centerPadding: P,
                cssEase: L,
                dots: v,
                draggable: m,
                fade: y,
                focusOnSelect: b,
                easing: H,
                edgeFriction: M,
                infinite: w,
                initialSlide: R,
                lazyLoad: F,
                mobileFirst: x,
                pauseOnHover: T,
                pauseOnDotsHover: k,
                respondTo: q,
                slide: z,
                slidesToScroll: W,
                speed: U,
                swipe: C,
                swipeToSlide: S,
                touchMove: $,
                touchThreshold: V,
                useCSS: _,
                variableWidth: A,
                vertical: E,
                rtl: O
            }), s.hasClass("ct-slick--parallaxMode") && (s.on("beforeChange", function() {
                s.find(".item").css("background-attachment", "scroll")
            }), s.on("afterChange", function() {
                s.find(".item").css("background-attachment", "fixed")
            })), s.slick("setOption", "responsive", [{
                breakpoint: e,
                settings: {
                    slidesToShow: d
                }
            }], !0), s.slick("setOption", "responsive", [{
                breakpoint: n,
                settings: {
                    slidesToShow: c
                }
            }], !0), s.slick("setOption", "responsive", [{
                breakpoint: i,
                settings: {
                    slidesToShow: l
                }
            }], !0), s.slick("setOption", "responsive", [{
                breakpoint: o,
                settings: {
                    slidesToShow: a
                }
            }], !0), s.on("setPosition", function() {
                set_text_color(), set_font_size(), set_background(), set_height()
            })
        })
    })
}(jQuery),
function(t, e, n, i) {
    "use strict";

    function o(e, n) {
        this.element = t(e), this.settings = t.extend(!0, {}, r, n), this.cart = this.element.find("." + this.settings.cart), this.wishlist = this.element.find("." + this.settings.wishlist), this.product = this.element.find("." + this.settings.product), this._defaults = r, this._name = s, this.init()
    }
    var s = "ctshop",
        r = {
            cart: "ct-cart",
            product: "ct-product",
            product_title: "ct-product-title",
            product_price: "ct-product-price",
            product_button: "ct-product-button",
            product_image: "ct-product-image",
            product_wishlist: "ct-product-wishlist",
            wishlist: "ct-wishlist",
            currency: "$",
            currency_after_number: "false",
            permanent_cart_buttons: "false",
            display_total_value: "true",
            permanent_total_value: "false",
            animation: "fadeIn",
            empty_disable: "false",
            empty_text: "Your cart is empty",
            paypal: {
                business: "eavi.adv@gmail.com",
                currency_code: "USD",
                lc: "EN",
                cpp_cart_border_color: "",
                cpp_payflow_color: "",
                no_note: "0",
                no_shipping: "0",
                "return": "",
                cancel_return: ""
            },
            init: !1,
            before_add_to_cart: !1,
            after_add_to_cart: !1,
            remove_item_from_cart: !1,
            before_checkout: !1,
            after_clear_cart: !1,
            after_value_changes: !1,
            before_add_to_wishlist: !1,
            after_add_to_wishlist: !1,
            remove_item_from_wishlist: !1
        };
    t.extend(o.prototype, {
        init: function() {
            var n = this;
            if (n.cart = n.cart.append("<ol/>").find("ol"), n.settings.wishlist && (n.wishlist = n.wishlist.append("<ol/>").find("ol")), e.sessionStorage["ct-shopping-wishlist"]) {
                var i = n.wishlist.find("li").length;
                n.create_storage_wish(), n.remove_item(i, !0)
            }
            if (n.permanent_total(), n.permanent_cart_buttons(), e.sessionStorage["ct-shopping-cart"]) {
                n.create_storage_cart();
                var o = n.cart.find("li"),
                    s = o.find("." + n.settings.cart + "-input"),
                    r = o.length;
                "false" === n.settings.permanent_cart_buttons && n.add_cart_buttons(), "true" === n.settings.display_total_value && "false" === n.settings.permanent_total_value && n.append_total(), n.calculate_total_value(), n.quantity_change(s), n.remove_item(r)
            }
            n.settings.init && n.settings.init(), n.cart_empty(), n.product.each(function(e) {
                var i = t(this),
                    o = n.absolute_url() + i.find("." + n.settings.product_image).attr("src"),
                    s = i.find("." + n.settings.product_title),
                    r = i.find("." + n.settings.product_price),
                    a = i.find("." + n.settings.product_button),
                    l = s.text(),
                    c = r.text().replace(",", "").replace(/[^\d.]/g, "");
                if (n.settings.wishlist) {
                    var d = i.find("." + n.settings.product_wishlist);
                    d.on("click touchend", function(t) {
                        t.preventDefault(), n.settings.before_add_to_wishlist && n.settings.before_add_to_wishlist(), l = n.check_if_title(s, l), c = n.check_if_price(r, c);
                        var a, d = i.attr("data-id", l.replace(/ /g, "").replace(/\r\n|\r|\n/g, "").replace(/[^a-zA-Z 0-9]+/g, "") + c.replace(/\r\n|\r|\n/g, "").replace(/[^a-zA-Z 0-9]+/g, "") + "_" + (e + 1)).attr("data-id"),
                            u = n.wishlist.find("li"),
                            p = n.wishlist.find("[data-id=" + d + "]"),
                            f = p.attr("data-id"),
                            h = n.cart.find("[data-id=" + d + "]");
                        return h.length || 0 === u.length || f === d ? 0 !== u.length || h.length || n.add_to_wishlist(l, c, d, o) : n.add_to_wishlist(l, c, d, o), u = n.wishlist.find("li"), a = u.length, n.remove_item(a, !0), n.settings.after_add_to_wishlist && n.settings.after_add_to_wishlist(), !1
                    })
                }
                a.on("click touchend", function(a) {
                    a.preventDefault(), n.settings.before_add_to_cart && n.settings.before_add_to_cart(), l = n.check_if_title(s, l), c = n.check_if_price(r, c);
                    var d, u = i.attr("data-id", l.replace(/ /g, "").replace(/\r\n|\r|\n/g, "").replace(/[^a-zA-Z 0-9]+/g, "") + c.replace(/\r\n|\r|\n/g, "").replace(/[^a-zA-Z 0-9]+/g, "") + "_" + (e + 1)).attr("data-id"),
                        p = n.cart.find("li"),
                        f = n.cart.find("[data-id=" + u + "]"),
                        h = f.attr("data-id"),
                        g = p.find("." + n.settings.cart + "-input");
                    return 0 !== p.length ? h !== u ? n.add_to_cart(l, c, u, o) : f.find("input").val(function(t, e) {
                        return parseInt(e, 10) + 1
                    }) : (n.add_to_cart(l, c, u, o), "false" === n.settings.permanent_cart_buttons && n.add_cart_buttons(), "true" === n.settings.display_total_value && "false" === n.settings.permanent_total_value && n.append_total()), n.settings.wishlist && t("." + n.settings.wishlist).find("[data-id=" + u + "]").remove(), p = n.cart.find("li"), g = p.find("." + n.settings.cart + "-input"), d = p.length, n.quantity_change(g), n.calculate_total_value(), n.remove_item(d), n.settings.after_add_to_cart && n.settings.after_add_to_cart(), !1
                })
            })
        },
        add_to_wishlist: function(t, e, n, i) {
            var o = this;
            o.settings.product_image ? "true" === o.settings.currency_after_number ? o.wishlist.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><div class=" + o.settings.wishlist + "-left><img src=" + i + " /></div><div class=" + o.settings.wishlist + "-body><span class=" + o.settings.wishlist + "-name>" + t + "</span><span class=" + o.settings.wishlist + "-price>" + e + o.settings.currency + "</span><button class=" + o.settings.wishlist + "-remove>&times;</button><button class=" + o.settings.wishlist + "-add-to-cart>Add To Cart</button></div></li>") : o.wishlist.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><div class=" + o.settings.wishlist + "-left><img src=" + i + " /></div><div class=" + o.settings.wishlist + "-body><span class=" + o.settings.wishlist + "-name>" + t + "</span><span class=" + o.settings.wishlist + "-price>" + o.settings.currency + e + "</span><button class=" + o.settings.wishlist + "-remove>&times;</button><button class=" + o.settings.wishlist + "-add-to-cart>Add To Cart</button></div></li>") : "true" === o.settings.currency_after_number ? o.wishlist.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><span class=" + o.settings.wishlist + "-name>" + t + "</span><span class=" + o.settings.wishlist + "-price>" + e + o.settings.currency + "</span><button class=" + o.settings.wishlist + "-remove>&times;</button><button class=" + o.settings.wishlist + "-add-to-cart>Add To Cart</button></li>") : o.wishlist.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><span class=" + o.settings.wishlist + "-name>" + t + "</span><span class=" + o.settings.wishlist + "-price>" + o.settings.currency + e + "</span><button class=" + o.settings.wishlist + "-remove>&times;</button><button class=" + o.settings.wishlist + "-add-to-cart>Add To Cart</button></li>"),
                o.wishlist_add_to_cart(), o.wish_storage_set()
        },
        add_to_cart: function(t, e, n, i) {
            var o = this;
            o.settings.product_image ? "true" === o.settings.currency_after_number ? o.cart.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><div class=" + o.settings.cart + "-left><img src=" + i + " /></div><div class=" + o.settings.cart + "-body><span class=" + o.settings.cart + "-name>" + t + "</span><span class=" + o.settings.cart + "-price>" + e + o.settings.currency + '</span><input type="number" min="1" value="1" class=' + o.settings.cart + "-input><button class=" + o.settings.cart + "-remove>&times;</button></div></li>") : o.cart.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><div class=" + o.settings.cart + "-left><img src=" + i + " /></div><div class=" + o.settings.cart + "-body><span class=" + o.settings.cart + "-name>" + t + "</span><span class=" + o.settings.cart + "-price>" + o.settings.currency + e + '</span><input type="number" min="1" value="1" class=' + o.settings.cart + "-input><button class=" + o.settings.cart + "-remove>&times;</button></div></li>") : "true" === o.settings.currency_after_number ? o.cart.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><span class=" + o.settings.cart + "-name>" + t + "</span><span class=" + o.settings.cart + "-price>" + e + o.settings.currency + '</span><input type="number" min="1" value="1" class=' + o.settings.cart + "-input><button class=" + o.settings.cart + "-remove>&times;</button></li>") : o.cart.append('<li class="animated ' + o.settings.animation + '" data-id=' + n + "><span class=" + o.settings.cart + "-name>" + t + "</span><span class=" + o.settings.cart + "-price>" + o.settings.currency + e + '</span><input type="number" min="1" value="1" class=' + o.settings.cart + "-input><button class=" + o.settings.cart + "-remove>&times;</button></li>")
        },
        add_cart_buttons: function() {
            var t = this;
            t.cart.parent().append('<button class="' + t.settings.cart + '-clear">Clear Cart</button>'), t.cart.parent().append('<button type="submit" class="' + t.settings.cart + '-checkout">Checkout</button>'), t.clear_cart(), t.checkout_button()
        },
        checkout: function() {
            var e, n = this,
                i = {
                    cmd: "_cart",
                    upload: 1
                },
                o = t("<form />"),
                s = {
                    name: "item_name",
                    quantity: "quantity",
                    amount: "amount"
                };
            t.extend(i, n.settings.paypal), o.attr("action", "https://www.paypal.com/cgi-bin/webscr"), o.attr("method", "post"), o.attr("target", "_blank");
            for (var r in i) e = t('<input type="hidden" />'), e.attr("name", r), e.attr("value", i[r]), o.append(e);
            n.cart.find("li").each(function(e) {
                var i = t(this),
                    r = i.find("." + n.settings.cart + "-name").text(),
                    a = parseFloat(i.find("." + n.settings.cart + "-price").text().replace(/^\D+/g, "")),
                    l = i.find("input").val(),
                    c = {
                        name: t("<input />", {
                            type: "hidden",
                            name: s.name + "_" + (e + 1),
                            value: r
                        }),
                        amount: t("<input />", {
                            type: "hidden",
                            name: s.amount + "_" + (e + 1),
                            value: a
                        }),
                        quantity: t("<input />", {
                            type: "hidden",
                            name: s.quantity + "_" + (e + 1),
                            value: l
                        })
                    };
                o.append(c.name).append(c.amount).append(c.quantity)
            }), t("body").append(o), o.submit(), o.remove()
        },
        checkout_button: function() {
            var e = this;
            t("." + e.settings.cart + "-checkout").unbind().on("click", function() {

                // e.settings.before_checkout && e.settings.before_checkout(), e.checkout()
                //document.getElementsByClassName("select_payment").style.display = "block";
               

            })
        },
        remove_item: function(e, n) {
            var i = this,
                o = i.settings.cart,
                s = i.cart;
            n && (o = i.settings.wishlist, s = i.wishlist), t("." + o + "-remove").unbind().on("click", function() {
                var e = t(this),
                    o = s.find("li").length;
                e.closest("li").remove(), n ? (i.wish_storage_set(), 1 === o && i.wish_storage_clear(), i.settings.remove_item_from_wishlist && i.settings.remove_item_from_wishlist()) : (i.calculate_total_value(), i.storage_set(), 1 === o && (i.remove_cart_buttons(), i.remove_total(i.total), i.storage_clear()), i.settings.remove_item_from_cart && i.settings.remove_item_from_cart())
            })
        },
        clear_cart: function() {
            var e = this;
            t("." + e.settings.cart + "-clear").on("click", function() {
                e.cart.find("li").each(function() {
                    t(this).remove()
                }), e.remove_cart_buttons(), e.remove_total(e.total), e.storage_clear(), e.cart_empty(), e.settings.after_clear_cart && e.settings.after_clear_cart()
            })
        },
        remove_cart_buttons: function() {
            var t = this;
            "false" === t.settings.permanent_cart_buttons && t.cart.parent().find("button").remove()
        },
        check_if_title: function(t, e) {
            return 0 !== t.find("select").length ? e = 0 !== t.find("span").length ? t.find("span").text() + " - " + t.find("option:selected").val() : t.find("option:selected").text() : 0 !== t.find("input").length ? e = t.find("input").val() : t.is(":empty") && (e = t.val()), e
        },
        check_if_price: function(t, e) {
            return 0 !== t.find("select").length ? e = t.find("option:selected").val().replace(/^\D+/g, "") : 0 !== t.find("input").length && (e = t.find("input").val().replace(/^\D+/g, "")), e
        },
        permanent_cart_buttons: function() {
            var t = this;
            "true" === t.settings.permanent_cart_buttons && t.add_cart_buttons()
        },
        calculate_total_value: function(e) {
            var n = this,
                i = 0,
                o = 0;
            return n.cart.find("li").each(function() {
                var e = parseFloat(t(this).find("." + n.settings.cart + "-price").text().replace(/^\D+/g, "")),
                    s = t(this).find("input").val();
                o += e * s, i = parseFloat(o.toString()).toFixed(2)
            }), "true" === n.settings.display_total_value && ("true" === n.settings.currency_after_number ? n.total.html(i + n.settings.currency) : n.total.html(n.settings.currency + i)), n.cart_empty(), n.settings.after_value_changes && n.settings.after_value_changes(), n.storage_set(), i
        },
        quantity_change: function(t, e) {
            var n = this;
            t.change(function() {
                n.calculate_total_value(e)
            })
        },
        append_total: function() {
            var t = this;
            t.total = t.cart.parent().prepend('<span class="' + t.settings.cart + '-total">').find("." + t.settings.cart + "-total")
        },
        remove_total: function(t) {
            var e = this;
            "true" === e.settings.display_total_value && "false" === e.settings.permanent_total_value ? t.remove() : "true" === e.settings.permanent_total_value && "true" === e.settings.display_total_value && e.calculate_total_value(t)
        },
        permanent_total: function() {
            var t = this;
            "true" === t.settings.permanent_total_value && "true" === t.settings.display_total_value && (t.append_total(), "true" === t.settings.display_total_value && ("true" === t.settings.currency_after_number ? t.total.html("0" + t.settings.currency) : t.total.html(t.settings.currency + "0")))
        },
        storage_set: function() {
            var n = this,
                i = {
                    items: []
                };
            t(n.cart).find("li").each(function() {
                var e = t(this),
                    o = e.attr("data-id"),
                    s = e.find("." + n.settings.cart + "-name").text(),
                    r = e.find("." + n.settings.cart + "-price").text(),
                    a = e.find("input").val(),
                    l = e.find("img").attr("src"),
                    c = {
                        name: s,
                        id: o,
                        price: r,
                        input: a,
                        image: l
                    };
                i.items.push(c)
            }), e.sessionStorage.setItem("ct-shopping-cart", JSON.stringify(i))
        },
        storage_get: function() {
            var t = e.sessionStorage["ct-shopping-cart"];
            return t = JSON.parse(t)
        },
        storage_clear: function() {
            e.sessionStorage.removeItem("ct-shopping-cart")
        },
        wish_storage_set: function() {
            var n = this,
                i = {
                    items: []
                };
            t(n.wishlist).find("li").each(function() {
                var e = t(this),
                    o = e.attr("data-id"),
                    s = e.find("." + n.settings.wishlist + "-name").text(),
                    r = e.find("." + n.settings.wishlist + "-price").text(),
                    a = e.find("img").attr("src"),
                    l = {
                        name: s,
                        id: o,
                        price: r,
                        image: a
                    };
                i.items.push(l)
            }), e.sessionStorage.setItem("ct-shopping-wishlist", JSON.stringify(i))
        },
        wish_storage_get: function() {
            var t = e.sessionStorage["ct-shopping-wishlist"];
            return t = JSON.parse(t)
        },
        wish_storage_clear: function() {
            e.sessionStorage.removeItem("ct-shopping-wishlist")
        },
        create_storage_wish: function() {
            for (var t = this, e = t.wish_storage_get(), n = 0, i = e.items.length; n < i; n++) {
                var o = e.items[n].id,
                    s = e.items[n].name,
                    r = e.items[n].price,
                    a = e.items[n].image;
                t.settings.product_image ? t.wishlist.append('<li class="animated ' + t.settings.animation + '" data-id=' + o + "><div class=" + t.settings.wishlist + "-left><img src=" + a + " /></div><div class=" + t.settings.wishlist + "-body><span class=" + t.settings.wishlist + "-name>" + s + "</span><span class=" + t.settings.wishlist + "-price>" + r + "</span><button class=" + t.settings.wishlist + "-remove>&times;</button><button class=" + t.settings.wishlist + "-add-to-cart>Add To Cart</button></div></li>") : t.wishlist.append('<li class="animated ' + t.settings.animation + '" data-id=' + o + "><span class=" + t.settings.wishlist + "-name>" + s + "</span><span class=" + t.settings.wishlist + "-price>" + r + "</span><button class=" + t.settings.wishlist + "-remove>x</button><button class=" + t.settings.wishlist + "-add-to-cart>Add To Cart</button></li>")
            }
            t.wishlist_add_to_cart()
        },
        create_storage_cart: function() {
            for (var t = this, e = t.storage_get(), n = 0, i = e.items.length; n < i; n++) {
                var o = e.items[n].id,
                    s = e.items[n].name,
                    r = e.items[n].price,
                    a = e.items[n].image,
                    l = e.items[n].input;
                t.settings.product_image ? t.cart.append('<li class="animated ' + t.settings.animation + '" data-id=' + o + "><div class=" + t.settings.cart + "-left><img src=" + a + " /></div><div class=" + t.settings.cart + "-body><span class=" + t.settings.cart + "-name>" + s + "</span><span class=" + t.settings.cart + "-price>" + r + '</span><input type="number" min="1" value="' + l + '" class=' + t.settings.cart + "-input><button class=" + t.settings.cart + "-remove>&times;</button></div></li>") : t.cart.append('<li class="animated ' + t.settings.animation + '" data-id=' + o + "><span class=" + t.settings.cart + "-name>" + s + "</span><span class=" + t.settings.cart + "-price>" + r + '</span><input type="number" min="1" value="' + l + '" class=' + t.settings.cart + "-input><button class=" + t.settings.cart + "-remove>x</button></li>")
            }
        },
        cart_empty: function() {
            var e = this,
                n = e.settings.cart + "-empty";
            "false" === e.settings.empty_disable && (e.cart.find("li").length ? t("." + n).remove() : e.cart.parent().prepend('<span class="' + n + '">' + e.settings.empty_text + "</span>"))
        },
        wishlist_add_to_cart: function() {
            var e = this,
                n = e.wishlist.find("li");
            n.each(function() {
                var n = t(this),
                    i = n.find("." + e.settings.wishlist + "-add-to-cart");
                i.on("click touchend", function(t) {
                    var i, o = n.attr("data-id"),
                        s = n.find("." + e.settings.wishlist + "-name").text(),
                        r = n.find("." + e.settings.wishlist + "-price").text().replace(",", "").replace(/[^\d.]/g, ""),
                        a = n.find("img").attr("src"),
                        l = e.cart.find("li"),
                        c = e.cart.find("[data-id=" + o + "]"),
                        d = c.attr("data-id"),
                        u = l.find("." + e.settings.cart + "-input");
                    0 !== l.length ? d !== o && e.add_to_cart(s, r, o, a) : (e.add_to_cart(s, r, o, a), "false" === e.settings.permanent_cart_buttons && e.add_cart_buttons(), "true" === e.settings.display_total_value && "false" === e.settings.permanent_total_value && e.append_total()), l = e.cart.find("li"), u = l.find("." + e.settings.cart + "-input"), i = l.length, e.quantity_change(u), e.calculate_total_value(), e.remove_item(i), n.remove(), e.wish_storage_set()
                })
            })
        },
        absolute_url: function() {
            var t = "",
                n = e.location.href.split("/");
            return n.pop(), t = n.join("/") + "/"
        }
    }), t.fn[s] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + s) || t.data(this, "plugin_" + s, new o(this, e))
        })
    }
}(jQuery, window, document);