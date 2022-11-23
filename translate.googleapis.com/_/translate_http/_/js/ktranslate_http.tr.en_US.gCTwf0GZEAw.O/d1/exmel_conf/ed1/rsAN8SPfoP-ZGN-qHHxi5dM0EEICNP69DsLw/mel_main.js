"use strict";
this.default_tr = this.default_tr || {};
(function(_) {
    var window = this;
    try {
        _.tg = function() {
            return _.u("Firefox") || _.u("FxiOS")
        };
        _.ug = function() {
            return (_.u("Chrome") || _.u("CriOS")) && !_.u("Edge") || _.u("Silk")
        };
        _.vg = function() {
            return _.u("Safari") && !(_.ug() || _.u("Coast") || _.u("Opera") || _.u("Edge") || _.u("Edg/") || _.u("OPR") || _.tg() || _.u("Silk") || _.u("Android"))
        };
        _.wg = function() {
            return _.u("Android") && !(_.ug() || _.tg() || _.u("Opera") || _.u("Silk"))
        };
        _.xg = _.tg();
        _.yg = _.Ea() || _.u("iPod");
        _.zg = _.u("iPad");
        _.Ag = _.wg();
        _.Bg = _.ug();
        _.Cg = _.vg() && !_.Fa();

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Lg, Mg, Ng, Pg, Vg, Xg, Yg, ch, eh, bh, fh, ih, jh, kh, ph, sh, th;
        _.Eg = function(a, b) {
            if (Dg) return a[Dg] |= b;
            if (void 0 !== a.Kb) return a.Kb |= b;
            Object.defineProperties(a, {
                Kb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            });
            return b
        };
        _.Fg = function(a) {
            var b;
            Dg ? b = a[Dg] : b = a.Kb;
            return null == b ? 0 : b
        };
        _.Gg = function(a, b) {
            Dg ? a[Dg] = b : void 0 !== a.Kb ? a.Kb = b : Object.defineProperties(a, {
                Kb: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };
        _.Hg = function(a) {
            _.Eg(a, 1);
            return a
        };
        _.Ig = function(a) {
            return !!(_.Fg(a) & 2)
        };
        _.Jg = function(a) {
            _.Eg(a, 16);
            return a
        };
        _.Kg = function(a, b) {
            _.Gg(b, (a | 0) & -51)
        };
        Lg = function(a, b) {
            _.Gg(b, (a | 18) & -41)
        };
        Mg = function(a) {
            return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
        };
        Ng = function(a) {
            var b = a.length;
            (b = b ? a[b - 1] : void 0) && Mg(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
        };
        Pg = function(a, b) {
            _.Og = b;
            a = new a(b);
            _.Og = void 0;
            return a
        };
        _.Tg = function(a) {
            switch (typeof a) {
                case "number":
                    return isFinite(a) ? a : String(a);
                case "object":
                    if (a)
                        if (Array.isArray(a)) {
                            if (0 !== (_.Fg(a) & 128)) return a = Array.prototype.slice.call(a), Ng(a), a
                        } else {
                            if (_.Qg && null != a && a instanceof Uint8Array) return Rg(a);
                            if (a instanceof Sg) {
                                var b = a.Za;
                                return null == b ? "" : "string" === typeof b ? b : a.Za = Rg(b)
                            }
                        }
            }
            return a
        };
        Vg = function(a, b, c, d) {
            if (null != a) {
                if (Array.isArray(a)) a = _.Ug(a, b, c, void 0 !== d);
                else if (Mg(a)) {
                    var e = {},
                        f;
                    for (f in a) e[f] = Vg(a[f], b, c, d);
                    a = e
                } else a = b(a, d);
                return a
            }
        };
        _.Ug = function(a, b, c, d) {
            var e = _.Fg(a);
            d = d ? !!(e & 16) : void 0;
            a = Array.prototype.slice.call(a);
            for (var f = 0; f < a.length; f++) a[f] = Vg(a[f], b, c, d);
            c(e, a);
            return a
        };
        Xg = function(a) {
            return a.ze === _.Wg ? a.toJSON() : _.Tg(a)
        };
        Yg = function(a, b) {
            a & 128 && Ng(b)
        };
        _.$g = function(a, b, c, d) {
            a.l && (a.l = void 0);
            if (b >= a.j || d) return Zg(a)[b] = c, a;
            a.wa[b + a.Ac] = c;
            (c = a.h) && b in c && delete c[b];
            return a
        };
        _.ah = function(a, b) {
            return null == a ? b : a
        };
        ch = function(a) {
            var b = _.Fg(a);
            if (b & 2) return a;
            a = _.Ob(a, bh);
            Lg(b, a);
            Object.freeze(a);
            return a
        };
        eh = function(a, b, c) {
            c = void 0 === c ? Lg : c;
            if (null != a) {
                if (_.Qg && a instanceof Uint8Array) return a.length ? new Sg(new Uint8Array(a)) : dh || (dh = new Sg(null));
                if (Array.isArray(a)) {
                    var d = _.Fg(a);
                    if (d & 2) return a;
                    if (b && !(d & 32) && (d & 16 || 0 === d)) return _.Gg(a, d | 2), a;
                    a = _.Ug(a, eh, c, !0);
                    b = _.Fg(a);
                    b & 4 && b & 2 && Object.freeze(a);
                    return a
                }
                return a.ze === _.Wg ? bh(a) : a
            }
        };
        bh = function(a) {
            if (_.Ig(a.wa)) return a;
            a = fh(a, !0);
            _.Eg(a.wa, 2);
            return a
        };
        fh = function(a, b) {
            var c = a.wa,
                d = _.Jg([]),
                e = a.constructor.h;
            e && d.push(e);
            0 !== (_.Fg(c) & 128) && Ng(d);
            b = b || _.Ig(a.wa) ? Lg : _.Kg;
            d = Pg(a.constructor, d);
            a.Cd && (d.Cd = a.Cd.slice());
            e = !!(_.Fg(c) & 16);
            for (var f = 0; f < c.length; f++) {
                var g = c[f];
                if (f === c.length - 1 && Mg(g))
                    for (var h in g) {
                        var l = +h;
                        if (Number.isNaN(l)) Zg(d)[l] = g[l];
                        else {
                            var m = g[h],
                                n = a.Va && a.Va[l];
                            n ? _.gh(d, l, ch(n), !0) : _.H(d, l, eh(m, e, b), !0)
                        }
                    } else l = f - a.Ac, (m = a.Va && a.Va[l]) ? _.gh(d, l, ch(m), !1) : _.H(d, l, eh(g, e, b), !1)
            }
            return d
        };
        _.hh = function(a) {
            if (!_.Ig(a.wa)) return a;
            var b = fh(a, !1);
            b.l = a;
            return b
        };
        ih = function(a, b) {
            if (Array.isArray(a)) {
                var c = _.Fg(a),
                    d = 1;
                !b || c & 2 || (d |= 16);
                (c & d) !== d && _.Gg(a, c | d)
            }
        };
        jh = {};
        kh = {};
        _.lh = function(a, b) {
            this.h = a === jh && b || "";
            this.j = kh
        };
        _.lh.prototype.Db = !0;
        _.lh.prototype.bb = function() {
            return this.h
        };
        _.mh = function(a) {
            return new _.lh(jh, a)
        };
        _.nh = function(a, b) {
            return _.Wc(a.V, b)
        };
        _.oh = function(a) {
            return a instanceof _.lh && a.constructor === _.lh && a.j === kh ? a.h : "type_error:Const"
        };
        ph = /^[\w+/_-]+[=]{0,2}$/;
        _.qh = function(a, b) {
            b = (b || _.t).document;
            return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ph.test(a) ? a : "" : ""
        };
        _.rh = function(a) {
            return _.qh("script[nonce]", a)
        };
        sh = function(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        };
        th = function(a) {
            return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
                return c + d.toUpperCase()
            })
        };
        _.uh = function(a) {
            if (a instanceof _.Wd) return a;
            var b = new _.Wd(_.ub);
            _.Vd(b, 2, a);
            return b
        };
        _.vh = function(a, b, c, d, e, f, g) {
            var h = new _.Sf;
            _.Vf.push(h);
            b && h.J("complete", b);
            h.oc("ready", h.ma);
            f && (h.o = Math.max(0, f));
            g && (h.O = g);
            h.send(a, c, d, e)
        };
        var wh, Rg;
        wh = {};
        _.xh = null;
        _.yh = _.Xb || _.Yb || !_.Cg && !_.C && "function" == typeof _.t.atob;
        Rg = function(a) {
            var b;
            void 0 === b && (b = 0);
            _.zh();
            b = wh[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    l = a[e + 2],
                    m = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | l >> 6];
                l = b[l & 63];
                c[f++] = m + g + h + l
            }
            m = 0;
            l = d;
            switch (a.length - e) {
                case 2:
                    m = a[e + 1], l = b[(m & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
            }
            return c.join("")
        };
        _.zh = function() {
            if (!_.xh) {
                _.xh = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    wh[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === _.xh[f] && (_.xh[f] = e)
                    }
                }
            }
        };
        var Ah;
        _.Qg = "undefined" !== typeof Uint8Array;
        Ah = {};
        var dh, Sg = function(a) {
            if (Ah !== Ah) throw Error("ea");
            this.Za = a;
            if (null != a && 0 === a.length) throw Error("fa");
        };
        Sg.prototype.bc = function() {
            return null == this.Za
        };
        var Dg = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol() : void 0;
        var Dh;
        _.Wg = {};
        Dh = [];
        _.Gg(Dh, 23);
        _.Ch = Object.freeze(Dh);
        _.Eh = function(a) {
            if (_.Ig(a.wa)) throw Error("ga");
        };
        var Zg;
        Zg = function(a) {
            return a.h || (a.h = a.wa[a.j + a.Ac] = {})
        };
        _.Fh = function(a, b, c) {
            return -1 === b ? null : b >= a.j ? a.h ? a.h[b] : void 0 : c && a.h && (c = a.h[b], null != c) ? c : a.wa[b + a.Ac]
        };
        _.H = function(a, b, c, d) {
            _.Eh(a);
            return _.$g(a, b, c, d)
        };
        _.Gh = function(a, b, c, d) {
            var e = d = void 0 === d ? !1 : d,
                f = _.Fh(a, c, e);
            var g = !1;
            var h = null == f || "object" !== typeof f || (g = Array.isArray(f)) || f.ze !== _.Wg ? g ? new b(f) : void 0 : f;
            h !== f && null != h && (_.$g(a, c, h, e), _.Eg(h.wa, _.Fg(a.wa) & -33));
            b = h;
            if (null == b) return b;
            _.Ig(a.wa) || (e = _.hh(b), e !== b && (b = e, _.$g(a, c, b, d)));
            return b
        };
        _.Hh = function(a, b, c) {
            _.Eh(a);
            null == c && (c = void 0);
            return _.$g(a, b, c)
        };
        _.gh = function(a, b, c, d) {
            _.Eh(a);
            if (null != c) {
                var e = _.Hg([]);
                for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].wa, f = f || _.Ig(e[g]);
                a.Va || (a.Va = {});
                a.Va[b] = c;
                c = e;
                f ? Dg ? c[Dg] && (c[Dg] &= -9) : void 0 !== c.Kb && (c.Kb &= -9) : _.Eg(c, 8)
            } else a.Va && (a.Va[b] = void 0), e = _.Ch;
            return _.$g(a, b, e, d)
        };
        _.I = function(a, b, c) {
            null == a && (a = _.Og);
            _.Og = void 0;
            var d = this.constructor.j || 0,
                e = 0 < d,
                f = this.constructor.h,
                g = !1;
            if (null == a) {
                a = f ? [f] : [];
                var h = !0;
                _.Gg(a, 48)
            } else {
                if (!Array.isArray(a)) throw Error();
                if (f && f !== a[0]) throw Error();
                var l = _.Eg(a, 0),
                    m = l;
                if (h = 0 !== (16 & m))(g = 0 !== (32 & m)) || (m |= 32);
                if (e)
                    if (128 & m) d = 0;
                    else {
                        if (0 < a.length) {
                            var n = a[a.length - 1];
                            if (Mg(n) && "g" in n) {
                                d = 0;
                                m |= 128;
                                delete n.g;
                                var p = !0,
                                    r;
                                for (r in n) {
                                    p = !1;
                                    break
                                }
                                p && a.pop()
                            }
                        }
                    }
                else if (128 & m) throw Error();
                l !== m && _.Gg(a, m)
            }
            this.Ac = (f ? 0 : -1) - d;
            this.Va = void 0;
            this.wa = a;
            a: {
                f = this.wa.length;d = f - 1;
                if (f && (f = this.wa[d], Mg(f))) {
                    this.h = f;
                    this.j = d - this.Ac;
                    break a
                }
                void 0 !== b && -1 < b ? (this.j = Math.max(b, d + 1 - this.Ac), this.h = void 0) : this.j = Number.MAX_VALUE
            }
            if (!e && this.h && "g" in this.h) throw Error("ia");
            if (c) {
                b = h && !g && !0;
                e = this.j;
                var q;
                for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.Ac, (d = a[g]) ? ih(d, b) : a[g] = _.Ch) : (q || (q = Zg(this)), (d = q[g]) ? ih(d, b) : q[g] = _.Ch)
            }
        };
        _.I.prototype.toJSON = function() {
            var a = this.wa;
            return _.Bh ? a : _.Ug(a, Xg, Yg)
        };
        _.Ih = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            return Pg(a, _.Jg(b))
        };
        _.I.prototype.ze = _.Wg;
        _.I.prototype.toString = function() {
            return this.wa.toString()
        };
        var Kh, Jh;
        _.J = function(a, b, c) {
            if ("string" === typeof b)(b = Jh(a, b)) && (a.style[b] = c);
            else
                for (var d in b) {
                    c = a;
                    var e = b[d],
                        f = Jh(c, d);
                    f && (c.style[f] = e)
                }
        };
        Kh = {};
        Jh = function(a, b) {
            var c = Kh[b];
            if (!c) {
                var d = sh(b);
                c = d;
                void 0 === a.style[d] && (d = (_.Yb ? "Webkit" : _.Xb ? "Moz" : _.C ? "ms" : null) + th(d), void 0 !== a.style[d] && (c = d));
                Kh[b] = c
            }
            return c
        };
        _.Lh = _.Xb ? "MozUserSelect" : _.Yb || _.Vb ? "WebkitUserSelect" : null;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        var Qh;
        _.Mh = {};
        _.Nh = function(a) {
            return a instanceof _.sc && a.constructor === _.sc ? a.h : "type_error:SafeUrl"
        };
        _.Oh = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        _.Ph = function(a) {
            if (a instanceof _.sc) return a;
            a = "object" == typeof a && a.Db ? a.bb() : String(a);
            _.Oh.test(a) || (a = "about:invalid#zClosurez");
            return _.tc(a)
        };
        Qh = {};
        _.Rh = function(a, b) {
            this.h = b === Qh ? a : "";
            this.Db = !0
        };
        _.Rh.prototype.toString = function() {
            return this.h.toString()
        };
        _.Rh.prototype.bb = function() {
            return this.h
        };
        _.Sh = {};
        _.sf = function() {
            throw Error("P");
        };
        _.sf.prototype.jf = null;
        _.sf.prototype.Ba = function() {
            return this.h
        };
        _.sf.prototype.toString = function() {
            return this.h
        };
        var Th = function() {
            _.sf.call(this)
        };
        _.z(Th, _.sf);
        Th.prototype.Vb = _.Sh;
        var Uh = function() {
            _.sf.call(this)
        };
        _.z(Uh, _.sf);
        Uh.prototype.Vb = _.Mh;
        Uh.prototype.jf = 1;
        Uh.prototype.j = function() {
            return new _.Rh(this.toString(), Qh)
        };
        _.Vh = function(a, b) {
            return null != a && a.Vb === b
        };
        var bi, Zh, Xh, Yh;
        _.K = function(a) {
            function b(c) {
                this.h = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.jf = d);
                return c
            }
        }(Th);
        _.Wh = function(a) {
            function b(c) {
                this.h = c
            }
            b.prototype = a.prototype;
            return function(c) {
                return new b(String(c))
            }
        }(Uh);
        _.L = function(a) {
            if (_.Vh(a, _.Sh)) {
                var b = String;
                a = String(a.Ba()).replace(Xh, "").replace(Yh, "&lt;");
                b = b(a).replace(Zh, _.$h)
            } else b = String(a).replace(_.ai, _.$h);
            return b
        };
        bi = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        };
        _.$h = function(a) {
            return bi[a]
        };
        _.ai = /[\x00\x22\x26\x27\x3c\x3e]/g;
        Zh = /[\x00\x22\x27\x3c\x3e]/g;
        Xh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
        Yh = /</g;

    } catch (e) {
        _._DumpException(e)
    }
    try {
        /*
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var ji, ki, mi, oi, qi, si, ti, ui, Ei, Gi, Ii, Ki, N, Qi, Si, Ti, Vi, Wi, Xi, Yi, Zi, $i, aj, bj, cj, dj, ej, fj, gj, jj, ij, lj, pi, ri, xi, nj, oj, qj, sj, uj, vj, wj, yj, Aj, Bj, Cj, Dj, Ej, Gj, Hj, Jj, Lj, Mj, Nj, Oj, Pj, Qj, Rj, Sj, Tj, Uj, Vj, Wj, Xj, mk, nk, ok, pk, qk, zi, tk, vk, wk, xk, zk, Ak, Bk, Ck, Dk, Gk, Fk, Hk, Jk, Kk, Lk, Mk, Nk, Ok, Pk, Rk, Sk, Uk, Vk, Xk, Yk, al, cl, el, gl, hl, jl, kl;
        ji = function(a, b) {
            a = a.split("%s");
            for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
            _.aa.call(this, c + a[d])
        };
        ki = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        };
        mi = function() {
            var a = li,
                b;
            for (b in a) return !1;
            return !0
        };
        _.ni = function(a) {
            var b = {},
                c;
            for (c in a) b[c] = a[c];
            return b
        };
        oi = function(a) {
            for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if ("]" == e) {
                    if (b) return !1;
                    b = !0
                } else if ("[" == e) {
                    if (!b) return !1;
                    b = !1
                } else if (!b && !c.test(e)) return !1
            }
            return b
        };
        qi = function(a) {
            return a.replace(_.zc, function(b, c, d, e) {
                var f = "";
                d = d.replace(/^(['"])(.*)\1$/, function(g, h, l) {
                    f = h;
                    return l
                });
                b = (pi(d) || _.uc).bb();
                return c + f + b + f + e
            })
        };
        si = function(a) {
            if (a instanceof _.sc) return 'url("' + _.Nh(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
            if (a instanceof _.lh) a = _.oh(a);
            else {
                a = String(a);
                var b = a.replace(_.Ac, "$1").replace(_.Ac, "$1").replace(_.zc, "url");
                if (_.yc.test(b)) {
                    if (b = !ri.test(a)) {
                        for (var c = b = !0, d = 0; d < a.length; d++) {
                            var e = a.charAt(d);
                            "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                        }
                        b = b && c && oi(a)
                    }
                    a = b ? qi(a) : "zClosurez"
                } else a = "zClosurez"
            }
            if (/[{;}]/.test(a)) throw new ji("Value does not allow [{;}], got: %s.", [a]);
            return a
        };
        ti = function(a) {
            return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
        };
        ui = function(a) {
            var b = {
                nonce: _.rh()
            };
            b = void 0 === b ? {} : b;
            a = _.Ab(a).toString();
            var c = "<script";
            b.id && (c += ' id="' + ti(b.id) + '"');
            b.nonce && (c += ' nonce="' + ti(b.nonce) + '"');
            b.type && (c += ' type="' + ti(b.type) + '"');
            return _.Ec(c + (">" + a + "\x3c/script>"))
        };
        _.vi = function(a) {
            if ("script" === a.tagName.toLowerCase()) throw Error("N");
            if ("style" === a.tagName.toLowerCase()) throw Error("O");
        };
        _.yi = function(a) {
            return _.ya(a) ? a instanceof _.sf ? _.wi(a) : xi("zSoyz") : xi(String(a))
        };
        _.Bi = function(a, b) {
            b = a(b || zi, void 0);
            a = _.nh(_.Pc(), "DIV");
            b = _.yi(b);
            _.Ai(a, b);
            1 == a.childNodes.length && (b = a.firstChild, 1 == b.nodeType && (a = b));
            return a
        };
        Ei = function(a, b, c) {
            var d = Array.prototype.slice.call(arguments);
            d.splice(0, 2);
            d = "l" + a.toString(16) + "i" + b.toString(16) + (d.length ? "-" + d.join("_") : "");
            _.Ci ? _.Ci.push(d) : _.Di(d)
        };
        Gi = function() {
            var a = _.Ih(Fi, '[null,null,null,null,null,"(function(){/*\\n\\n Copyright The Closure Library Authors.\\n SPDX-License-Identifier: Apache-2.0\\n*/\\n\'use strict\';var e\\u003dthis||self;function f(a){return a};var h;function k(a,c){this.g\\u003dc\\u003d\\u003d\\u003dl?a:\\"\\"}k.prototype.toString\\u003dfunction(){return this.g+\\"\\"};var l\\u003d{};function m(a){if(void 0\\u003d\\u003d\\u003dh){var c\\u003dnull;var b\\u003de.trustedTypes;if(b\\u0026\\u0026b.createPolicy){try{c\\u003db.createPolicy(\\"goog#html\\",{createHTML:f,createScript:f,createScriptURL:f})}catch(d){e.console\\u0026\\u0026e.console.error(d.message)}h\\u003dc}else h\\u003dc}a\\u003d(c\\u003dh)?c.createScriptURL(a):a;return new k(a,l)};/*\\n\\n SPDX-License-Identifier: Apache-2.0\\n*/\\nif(!function(){if(self.origin)return\\"null\\"\\u003d\\u003d\\u003dself.origin;if(\\"\\"!\\u003d\\u003dlocation.host)return!1;try{return window.parent.escape(\\"\\"),!1}catch(a){return!0}}())throw Error(\\"sandboxing error\\");\\nwindow.addEventListener(\\"message\\",function(a){var c\\u003da.ports[0];a\\u003da.data;var b\\u003da.callbackName.split(\\".\\"),d\\u003dwindow;\\"window\\"\\u003d\\u003d\\u003db[0]\\u0026\\u0026b.shift();for(var g\\u003d0;g\\u003cb.length-1;g++)d[b[g]]\\u003d{},d\\u003dd[b[g]];d[b[b.length-1]]\\u003dfunction(n){c.postMessage(JSON.stringify(n))};b\\u003ddocument.createElement(\\"script\\");a\\u003dm(a.url);b.src\\u003da instanceof k\\u0026\\u0026a.constructor\\u003d\\u003d\\u003dk?a.g:\\"type_error:TrustedResourceUrl\\";document.body.appendChild(b)},!0);}).call(this);\\n"]');
            if (!a) return null;
            a = _.Fh(a, 6);
            var b;
            null === a || void 0 === a ? b = null : b = _.Bb(a);
            return b
        };
        _.Hi = function(a) {
            return {
                display_language: a,
                key: "AIzaSyBWDj0QJvVIx8XOhRegXX5_SrRWxhT5Hs4"
            }
        };
        _.Ji = function(a) {
            var b = a.targetLanguages || [];
            return {
                sl: Ii(a.sourceLanguages || []),
                tl: Ii(b)
            }
        };
        Ii = function(a) {
            var b = {};
            a = _.v(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c.language] = c.name;
            return b
        };
        Ki = function(a) {
            _.M.call(this);
            a = a || {};
            this.id = a.id || this.Wb();
            this.Lf = a.Lf || "";
            this.we = a.we || null;
            this.xe = a.xe || null;
            this.ff = a.ff || !1;
            this.className = a.className || null;
            this.s = null
        };
        _.Oi = function() {
            for (var a in Object.prototype) {
                _.qc = function(d, e, f) {
                    for (var g in d) d[g] !== Object.prototype[g] && e.call(f, d[g], g, d)
                };
                break
            }
            var b = _.qb(),
                c = Li(Mi);
            c && "function" == typeof c && (1 == _.Ni ? c() : function e() {
                var f = document.readyState;
                "undefined" == _.kb(f) || "complete" == f || "interactive" == f || 2E4 <= _.qb() - b ? c() : window.setTimeout(e, 500)
            }())
        };
        _.Pi = function(a, b) {
            a.pa ? b() : (a.da || (a.da = []), a.da.push(b))
        };
        N = function(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        };
        N.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        N.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        N.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };
        N.prototype.translate = function(a, b) {
            a instanceof N ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
            return this
        };
        Qi = function(a) {
            return new N(a.x, a.y)
        };
        _.Ri = function(a, b, c, d) {
            a = d || a;
            b = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
            if (c && a.getElementsByClassName) {
                a = a.getElementsByClassName(c);
                if (b) {
                    d = {};
                    for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                    d.length = e;
                    return d
                }
                return a
            }
            a = a.getElementsByTagName(b || "*");
            if (c) {
                d = {};
                for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.ta(b.split(/\s+/), c) && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        };
        Si = function(a, b) {
            var c = b || document;
            if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
            else {
                c = document;
                var d = b || c;
                a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.Ri(c, "*", a, b)[0] || null
            }
            return a || null
        };
        Ti = function(a) {
            return a.scrollingElement ? a.scrollingElement : !_.Yb && _.Tc(a) ? a.documentElement : a.body || a.documentElement
        };
        _.Ui = function(a) {
            var b = Ti(a);
            a = a.parentWindow || a.defaultView;
            return _.C && a.pageYOffset != b.scrollTop ? new N(b.scrollLeft, b.scrollTop) : new N(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        };
        Vi = function(a) {
            if (a.rb && "function" == typeof a.rb) return a.rb();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (_.da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return _.Ha(a)
        };
        Wi = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
        _.wi = function(a) {
            if (a.Vb !== _.Sh) throw Error("Q");
            return _.Ec(a.toString())
        };
        Xi = function(a) {
            a.Hc = void 0;
            a.mc = function() {
                return a.Hc ? a.Hc : a.Hc = new a
            }
        };
        Yi = {};
        _.z(ji, _.aa);
        ji.prototype.name = "AssertionError";
        Zi = /&/g;
        $i = /</g;
        aj = />/g;
        bj = /"/g;
        cj = /'/g;
        dj = /\x00/g;
        ej = /[\x00&<>"']/;
        fj = function(a) {
            if (!ej.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Zi, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace($i, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(aj, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(bj, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(cj, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(dj, "&#0;"));
            return a
        };
        gj = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        _.hj = function(a, b) {
            var c = 0;
            a = (0, _.Rb)(String(a)).split(".");
            b = (0, _.Rb)(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = gj(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || gj(0 == f[2].length, 0 == g[2].length) || gj(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        };
        jj = function(a) {
            var b = ij;
            return Object.prototype.hasOwnProperty.call(b, "7.0") ? b["7.0"] : b["7.0"] = a("7.0")
        };
        ij = {};
        _.kj = function() {
            return jj(function() {
                return 0 <= _.hj(_.lc, "7.0")
            })
        };
        lj = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            command: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        };
        pi = function(a) {
            if (a instanceof _.sc) return a;
            a = "object" == typeof a && a.Db ? a.bb() : String(a);
            _.Oh.test(a) ? a = _.tc(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Wi) ? _.tc(a) : null);
            return a
        };
        _.mj = function(a) {
            return a instanceof _.wc && a.constructor === _.wc ? a.h : "type_error:SafeStyle"
        };
        ri = /\/\*/;
        xi = function(a) {
            return a instanceof _.Cc ? a : _.Ec(fj("object" == typeof a && a.Db ? a.bb() : String(a)))
        };
        nj = /^[a-zA-Z0-9-]+$/;
        oj = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
        _.pj = function(a) {
            if (!nj.test(a)) throw Error("A");
            if (a.toUpperCase() in oj) throw Error("A");
        };
        qj = function(a) {
            var b = xi(_.Gc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = xi(e), c.push(_.Dc(e).toString()))
                };
            a.forEach(d);
            return _.Ec(c.join(_.Dc(b).toString()))
        };
        _.rj = function(a) {
            return qj(Array.prototype.slice.call(arguments))
        };
        sj = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        };
        _.tj = function(a) {
            var b = "";
            if (a)
                for (var c in a)
                    if (Object.prototype.hasOwnProperty.call(a, c)) {
                        if (!nj.test(c)) throw Error("A");
                        var d = a[c];
                        if (null != d) {
                            var e = c;
                            if (d instanceof _.lh) d = _.oh(d);
                            else if ("style" == e.toLowerCase()) {
                                var f = d;
                                if (!_.ya(f)) throw Error("A");
                                if (!(f instanceof _.wc)) {
                                    d = void 0;
                                    var g = "";
                                    for (d in f)
                                        if (Object.prototype.hasOwnProperty.call(f, d)) {
                                            if (!/^[-_a-zA-Z0-9]+$/.test(d)) throw Error("z`" + d);
                                            var h = f[d];
                                            null != h && (h = Array.isArray(h) ? h.map(si).join(" ") : si(h), g += d + ":" + h + ";")
                                        }
                                    f = g ? new _.wc(g,
                                        _.vc) : _.xc
                                }
                                d = _.mj(f)
                            } else {
                                if (/^on/i.test(e)) throw Error("A");
                                if (e.toLowerCase() in sj)
                                    if (d instanceof _.Db) d = _.Ma(d).toString();
                                    else if (d instanceof _.sc) d = _.Nh(d);
                                else if ("string" === typeof d) d = (pi(d) || _.uc).bb();
                                else throw Error("A");
                            }
                            d.Db && (d = d.bb());
                            e = e + '="' + fj(String(d)) + '"';
                            b += " " + e
                        }
                    }
            return b
        };
        uj = function(a) {
            _.pj("body");
            var b = a;
            a = "<body" + _.tj({});
            null == b ? b = [] : Array.isArray(b) || (b = [b]);
            !0 === lj.body ? a += ">" : (b = _.rj(b), a += ">" + _.Dc(b).toString() + "</body>");
            return _.Ec(a)
        };
        _.Ai = function(a, b) {
            if ((0, _.Hc)())
                for (; a.lastChild;) a.removeChild(a.lastChild);
            a.innerHTML = _.Dc(b)
        };
        vj = function(a, b) {
            b = b instanceof _.sc ? b : _.Ph(b);
            a.action = _.Nh(b)
        };
        wj = function(a, b) {
            return new N(a.x - b.x, a.y - b.y)
        };
        _.xj = function(a) {
            return a.replace(/\xa0|[ \t]+/g, " ")
        };
        yj = function(a) {
            return a.replace(/[\s\xa0]+$/, "")
        };
        _.zj = function(a) {
            return a = fj(a)
        };
        Aj = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return "#" != c.charAt(0) || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        };
        Bj = /&([^;\s<&]+);?/g;
        Cj = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = _.t.document.createElement("div");
            return a.replace(Bj, function(d, e) {
                var f = b[d];
                if (f) return f;
                "#" == e.charAt(0) && (e = Number("0" + e.slice(1)), isNaN(e) || (f = String.fromCharCode(e)));
                f || (f = _.Ec(d + " "), _.Ai(c, f), f = c.firstChild.nodeValue.slice(0, -1));
                return b[d] = f
            })
        };
        Dj = function(a) {
            return -1 != a.indexOf("&") ? "document" in _.t ? Cj(a) : Aj(a) : a
        };
        _.Q = function(a) {
            return _.Qc(document, a)
        };
        Ej = function(a, b) {
            return (b || document).getElementsByTagName(String(a))
        };
        _.Fj = function(a, b, c) {
            return _.Yc(document, arguments)
        };
        Gj = function(a, b) {
            _.Xc(_.Oc(a), a, arguments, 1)
        };
        Hj = function(a, b) {
            b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
        };
        _.Ij = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        };
        Jj = function(a) {
            return _.ya(a) && 1 == a.nodeType
        };
        _.Kj = function(a) {
            return a.contentDocument || a.contentWindow.document
        };
        Lj = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        };
        Mj = {
            IMG: " ",
            BR: "\n"
        };
        Nj = function(a) {
            a = a.tabIndex;
            return "number" === typeof a && 0 <= a && 32768 > a
        };
        Oj = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        };
        Pj = function(a, b, c) {
            if (!(a.nodeName in Lj))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in Mj) b.push(Mj[a.nodeName]);
            else
                for (a = a.firstChild; a;) Pj(a, b, c), a = a.nextSibling
        };
        Qj = function(a) {
            var b = [];
            Pj(a, b, !0);
            a = b.join("");
            a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            a = a.replace(/\u200B/g, "");
            a = a.replace(/ +/g, " ");
            " " != a && (a = a.replace(/^\s*/, ""));
            return a
        };
        Rj = function(a) {
            var b = [];
            Pj(a, b, !1);
            return b.join("")
        };
        Sj = function(a, b, c) {
            this.promise = a;
            this.resolve = b;
            this.reject = c
        };
        Tj = function() {
            var a, b, c = new _.Wd(function(d, e) {
                a = d;
                b = e
            });
            return new Sj(c, a, b)
        };
        Uj = function(a) {
            if (a.Dc && "function" == typeof a.Dc) return a.Dc();
            if (!a.rb || "function" != typeof a.rb) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (_.da(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return ki(a)
                }
            }
        };
        Vj = function(a, b, c) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, c);
            else if (_.da(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, c);
            else
                for (var d = Uj(a), e = Vi(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        };
        Wj = function(a, b) {
            this.j = this.h = null;
            this.l = a || null;
            this.o = !!b
        };
        Xj = function(a) {
            a.h || (a.h = new Map, a.j = 0, a.l && _.nf(a.l, function(b, c) {
                a.add(_.Lc(b), c)
            }))
        };
        Wj.prototype.add = function(a, b) {
            Xj(this);
            this.l = null;
            a = Yj(this, a);
            var c = this.h.get(a);
            c || this.h.set(a, c = []);
            c.push(b);
            this.j += 1;
            return this
        };
        Wj.prototype.remove = function(a) {
            Xj(this);
            a = Yj(this, a);
            return this.h.has(a) ? (this.l = null, this.j -= this.h.get(a).length, this.h.delete(a)) : !1
        };
        Wj.prototype.bc = function() {
            Xj(this);
            return 0 == this.j
        };
        var Zj = function(a, b) {
            Xj(a);
            b = Yj(a, b);
            return a.h.has(b)
        };
        _.k = Wj.prototype;
        _.k.forEach = function(a, b) {
            Xj(this);
            this.h.forEach(function(c, d) {
                c.forEach(function(e) {
                    a.call(b, e, d, this)
                }, this)
            }, this)
        };
        _.k.Dc = function() {
            Xj(this);
            for (var a = Array.from(this.h.values()), b = Array.from(this.h.keys()), c = [], d = 0; d < b.length; d++)
                for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
            return c
        };
        _.k.rb = function(a) {
            Xj(this);
            var b = [];
            if ("string" === typeof a) Zj(this, a) && (b = b.concat(this.h.get(Yj(this, a))));
            else {
                a = Array.from(this.h.values());
                for (var c = 0; c < a.length; c++) b = b.concat(a[c])
            }
            return b
        };
        _.k.set = function(a, b) {
            Xj(this);
            this.l = null;
            a = Yj(this, a);
            Zj(this, a) && (this.j -= this.h.get(a).length);
            this.h.set(a, [b]);
            this.j += 1;
            return this
        };
        _.k.get = function(a, b) {
            if (!a) return b;
            a = this.rb(a);
            return 0 < a.length ? String(a[0]) : b
        };
        var ak = function(a, b, c) {
            a.remove(b);
            0 < c.length && (a.l = null, a.h.set(Yj(a, b), _.wa(c)), a.j += c.length)
        };
        Wj.prototype.toString = function() {
            if (this.l) return this.l;
            if (!this.h) return "";
            for (var a = [], b = Array.from(this.h.keys()), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = _.Kc(d);
                d = this.rb(d);
                for (var f = 0; f < d.length; f++) {
                    var g = e;
                    "" !== d[f] && (g += "=" + _.Kc(d[f]));
                    a.push(g)
                }
            }
            return this.l = a.join("&")
        };
        var bk = function(a) {
                var b = new Wj;
                b.l = a.l;
                a.h && (b.h = new Map(a.h), b.j = a.j);
                return b
            },
            Yj = function(a, b) {
                b = String(b);
                a.o && (b = b.toLowerCase());
                return b
            },
            ck = function(a, b) {
                b && !a.o && (Xj(a), a.l = null, a.h.forEach(function(c, d) {
                    var e = d.toLowerCase();
                    d != e && (this.remove(d), ak(this, e, c))
                }, a));
                a.o = b
            };
        Wj.prototype.s = function(a) {
            for (var b = 0; b < arguments.length; b++) Vj(arguments[b], function(c, d) {
                this.add(d, c)
            }, this)
        };
        var dk = /[#\/\?@]/g,
            ek = /[#\?]/g,
            fk = /[#\?:]/g,
            gk = /#/g,
            hk = function(a, b) {
                return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
            },
            ik = /[#\?@]/g,
            jk = function(a) {
                a = a.charCodeAt(0);
                return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
            },
            kk = function(a, b, c) {
                return "string" === typeof a ? (a = encodeURI(a).replace(b, jk), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
            },
            lk = function(a) {
                this.l = this.C = this.o = "";
                this.F = null;
                this.A = this.j = "";
                this.s = !1;
                var b;
                a instanceof lk ? (this.s = a.s, mk(this, a.o), this.C =
                    a.C, this.l = a.l, nk(this, a.F), this.j = a.j, ok(this, bk(a.h)), this.A = a.A) : a && (b = String(a).match(_.lf)) ? (this.s = !1, mk(this, b[1] || "", !0), this.C = hk(b[2] || ""), this.l = hk(b[3] || "", !0), nk(this, b[4]), this.j = hk(b[5] || "", !0), ok(this, b[6] || "", !0), this.A = hk(b[7] || "")) : (this.s = !1, this.h = new Wj(null, this.s))
            };
        lk.prototype.toString = function() {
            var a = [],
                b = this.o;
            b && a.push(kk(b, dk, !0), ":");
            var c = this.l;
            if (c || "file" == b) a.push("//"), (b = this.C) && a.push(kk(b, dk, !0), "@"), a.push(_.Kc(c).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.F, null != c && a.push(":", String(c));
            if (c = this.j) this.l && "/" != c.charAt(0) && a.push("/"), a.push(kk(c, "/" == c.charAt(0) ? ek : fk, !0));
            (c = this.h.toString()) && a.push("?", c);
            (c = this.A) && a.push("#", kk(c, gk));
            return a.join("")
        };
        lk.prototype.resolve = function(a) {
            var b = new lk(this),
                c = !!a.o;
            c ? mk(b, a.o) : c = !!a.C;
            c ? b.C = a.C : c = !!a.l;
            c ? b.l = a.l : c = null != a.F;
            var d = a.j;
            if (c) nk(b, a.F);
            else if (c = !!a.j) {
                if ("/" != d.charAt(0))
                    if (this.l && !this.j) d = "/" + d;
                    else {
                        var e = b.j.lastIndexOf("/"); - 1 != e && (d = b.j.slice(0, e + 1) + d)
                    }
                e = d;
                if (".." == e || "." == e) d = "";
                else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
                    d = 0 == e.lastIndexOf("/", 0);
                    e = e.split("/");
                    for (var f = [], g = 0; g < e.length;) {
                        var h = e[g++];
                        "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length &&
                            "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0)
                    }
                    d = f.join("/")
                } else d = e
            }
            c ? b.j = d : c = "" !== a.h.toString();
            c ? ok(b, bk(a.h)) : c = !!a.A;
            c && (b.A = a.A);
            return b
        };
        mk = function(a, b, c) {
            a.o = c ? hk(b, !0) : b;
            a.o && (a.o = a.o.replace(/:$/, ""))
        };
        nk = function(a, b) {
            if (b) {
                b = Number(b);
                if (isNaN(b) || 0 > b) throw Error("K`" + b);
                a.F = b
            } else a.F = null
        };
        ok = function(a, b, c) {
            b instanceof Wj ? (a.h = b, ck(a.h, a.s)) : (c || (b = kk(b, ik)), a.h = new Wj(b, a.s))
        };
        pk = function(a) {
            var b = Uj(a);
            if ("undefined" == typeof b) throw Error("M");
            var c = new Wj(null);
            a = Vi(a);
            for (var d = 0; d < b.length; d++) {
                var e = b[d],
                    f = a[d];
                Array.isArray(f) ? ak(c, e, f) : c.add(e, f)
            }
            return c
        };
        qk = {};
        _.rk = {};
        zi = {};
        _.sk = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
            }
            return b
        };
        tk = function(a, b, c, d) {
            this.top = a;
            this.right = b;
            this.bottom = c;
            this.left = d
        };
        tk.prototype.ceil = function() {
            this.top = Math.ceil(this.top);
            this.right = Math.ceil(this.right);
            this.bottom = Math.ceil(this.bottom);
            this.left = Math.ceil(this.left);
            return this
        };
        tk.prototype.floor = function() {
            this.top = Math.floor(this.top);
            this.right = Math.floor(this.right);
            this.bottom = Math.floor(this.bottom);
            this.left = Math.floor(this.left);
            return this
        };
        tk.prototype.round = function() {
            this.top = Math.round(this.top);
            this.right = Math.round(this.right);
            this.bottom = Math.round(this.bottom);
            this.left = Math.round(this.left);
            return this
        };
        tk.prototype.translate = function(a, b) {
            a instanceof N ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
            return this
        };
        var uk = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        };
        uk.prototype.ceil = function() {
            this.left = Math.ceil(this.left);
            this.top = Math.ceil(this.top);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        uk.prototype.floor = function() {
            this.left = Math.floor(this.left);
            this.top = Math.floor(this.top);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        uk.prototype.round = function() {
            this.left = Math.round(this.left);
            this.top = Math.round(this.top);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        uk.prototype.translate = function(a, b) {
            a instanceof N ? (this.left += a.x, this.top += a.y) : (this.left += a, "number" === typeof b && (this.top += b));
            return this
        };
        vk = function(a, b) {
            var c = _.Oc(a);
            return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
        };
        wk = function(a, b) {
            return vk(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
        };
        xk = function(a) {
            "number" == typeof a && (a += "px");
            return a
        };
        _.yk = function(a, b) {
            if (b instanceof N) {
                var c = b.x;
                b = b.y
            } else c = b, b = void 0;
            a.style.left = xk(c);
            a.style.top = xk(b)
        };
        zk = function(a) {
            a = a ? _.Oc(a) : document;
            return !_.C || 9 <= Number(_.oc) || _.Tc(_.Pc(a).V) ? a.documentElement : a.body
        };
        Ak = function(a) {
            try {
                return a.getBoundingClientRect()
            } catch (b) {
                return {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                }
            }
        };
        Bk = function(a) {
            if (_.C && !(8 <= Number(_.oc))) return a.offsetParent;
            var b = _.Oc(a),
                c = wk(a, "position"),
                d = "fixed" == c || "absolute" == c;
            for (a = a.parentNode; a && a != b; a = a.parentNode)
                if (11 == a.nodeType && a.host && (a = a.host), c = wk(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
            return null
        };
        Ck = function(a) {
            var b = _.Oc(a),
                c = new N(0, 0),
                d = zk(b);
            if (a == d) return c;
            a = Ak(a);
            b = _.Ui(_.Pc(b).V);
            c.x = a.left + b.x;
            c.y = a.top + b.y;
            return c
        };
        Dk = function(a) {
            for (var b = new tk(0, Infinity, Infinity, 0), c = _.Pc(a), d = c.V.body, e = c.V.documentElement, f = Ti(c.V); a = Bk(a);)
                if (!(_.C && 0 == a.clientWidth || _.Yb && 0 == a.clientHeight && a == d) && a != d && a != e && "visible" != wk(a, "overflow")) {
                    var g = Ck(a),
                        h = new N(a.clientLeft, a.clientTop);
                    g.x += h.x;
                    g.y += h.y;
                    b.top = Math.max(b.top, g.y);
                    b.right = Math.min(b.right, g.x + a.clientWidth);
                    b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
                    b.left = Math.max(b.left, g.x)
                }
            d = f.scrollLeft;
            f = f.scrollTop;
            b.left = Math.max(b.left, d);
            b.top = Math.max(b.top,
                f);
            c = _.Uc(_.bd(c) || window);
            b.right = Math.min(b.right, d + c.width);
            b.bottom = Math.min(b.bottom, f + c.height);
            return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
        };
        _.Ek = function(a, b) {
            var c = new N(0, 0),
                d = _.Vc(_.Oc(a));
            if (!_.Tb(d, "parent")) return c;
            do {
                if (d == b) var e = Ck(a);
                else e = Ak(a), e = new N(e.left, e.top);
                c.x += e.x;
                c.y += e.y
            } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
            return c
        };
        Gk = function(a) {
            var b = Fk;
            if ("none" != wk(a, "display")) return b(a);
            var c = a.style,
                d = c.display,
                e = c.visibility,
                f = c.position;
            c.visibility = "hidden";
            c.position = "absolute";
            c.display = "inline";
            a = b(a);
            c.display = d;
            c.position = f;
            c.visibility = e;
            return a
        };
        Fk = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight,
                d = _.Yb && !b && !c;
            return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ak(a), new _.Ic(a.right - a.left, a.bottom - a.top)) : new _.Ic(b, c)
        };
        _.R = function(a, b) {
            a.style.display = b ? "" : "none"
        };
        Hk = function(a) {
            return "rtl" == wk(a, "direction")
        };
        _.Ik = function(a, b, c) {
            a = a.style;
            _.Xb ? a.MozBoxSizing = c : _.Yb ? a.WebkitBoxSizing = c : a.boxSizing = c;
            a.width = Math.max(b.width, 0) + "px";
            a.height = Math.max(b.height, 0) + "px"
        };
        Jk = function(a, b) {
            if (/^\d+px?$/.test(b)) return parseInt(b, 10);
            var c = a.style.left,
                d = a.runtimeStyle.left;
            a.runtimeStyle.left = a.currentStyle.left;
            a.style.left = b;
            b = a.style.pixelLeft;
            a.style.left = c;
            a.runtimeStyle.left = d;
            return +b
        };
        Kk = function(a, b) {
            return (b = a.currentStyle ? a.currentStyle[b] : null) ? Jk(a, b) : 0
        };
        Lk = function(a) {
            if (_.C) {
                var b = Kk(a, "paddingLeft"),
                    c = Kk(a, "paddingRight"),
                    d = Kk(a, "paddingTop");
                a = Kk(a, "paddingBottom");
                return new tk(d, c, a, b)
            }
            b = vk(a, "paddingLeft");
            c = vk(a, "paddingRight");
            d = vk(a, "paddingTop");
            a = vk(a, "paddingBottom");
            return new tk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        Mk = {
            thin: 2,
            medium: 4,
            thick: 6
        };
        Nk = function(a, b) {
            if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
            b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
            return b in Mk ? Mk[b] : Jk(a, b)
        };
        Ok = function(a) {
            if (_.C && !(9 <= Number(_.oc))) {
                var b = Nk(a, "borderLeft"),
                    c = Nk(a, "borderRight"),
                    d = Nk(a, "borderTop");
                a = Nk(a, "borderBottom");
                return new tk(d, c, a, b)
            }
            b = vk(a, "borderLeftWidth");
            c = vk(a, "borderRightWidth");
            d = vk(a, "borderTopWidth");
            a = vk(a, "borderBottomWidth");
            return new tk(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
        };
        Pk = function(a) {
            if (null != a) switch (a.jf) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        };
        _.Qk = function(a, b) {
            return a && b && a.Lj && b.Lj ? a.Vb !== b.Vb ? !1 : a.toString() === b.toString() : a instanceof _.sf && b instanceof _.sf ? a.Vb != b.Vb ? !1 : a.toString() == b.toString() : a == b
        };
        Rk = {};
        Sk = {};
        _.Tk = function(a, b) {
            var c = Rk["key_a:"];
            if (void 0 === c || a > c) Rk["key_a:"] = a, Sk["key_a:"] = b;
            else if (a == c) throw Error("ka`a`");
        };
        Uk = function() {
            return ""
        };
        Vk = {
            "\x00": "\\0 ",
            "\b": "\\8 ",
            "\t": "\\9 ",
            "\n": "\\a ",
            "\v": "\\b ",
            "\f": "\\c ",
            "\r": "\\d ",
            '"': "\\22 ",
            "&": "\\26 ",
            "'": "\\27 ",
            "(": "\\28 ",
            ")": "\\29 ",
            "*": "\\2a ",
            "/": "\\2f ",
            ":": "\\3a ",
            ";": "\\3b ",
            "<": "\\3c ",
            "=": "\\3d ",
            ">": "\\3e ",
            "@": "\\40 ",
            "\\": "\\5c ",
            "{": "\\7b ",
            "}": "\\7d ",
            "\u0085": "\\85 ",
            "\u00a0": "\\a0 ",
            "\u2028": "\\2028 ",
            "\u2029": "\\2029 "
        };
        _.Wk = function(a) {
            return Vk[a]
        };
        Xk = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        };
        Yk = function(a) {
            return Xk[a]
        };
        _.Zk = function(a) {
            return _.Vh(a, _.Sh) ? a : a instanceof _.Cc ? (0, _.K)(_.Dc(a).toString()) : a instanceof _.Cc ? (0, _.K)(_.Dc(a).toString()) : (0, _.K)(String(String(a)).replace(_.ai, _.$h), Pk(a))
        };
        _.$k = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g;
        al = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
        _.bl = function(a) {
            return String(a).replace(al, Yk)
        };
        cl = /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i;
        _.dl = function(a) {
            _.Vh(a, qk) || _.Vh(a, _.rk) ? a = _.bl(a) : a instanceof _.sc ? a = _.bl(_.Nh(a)) : a instanceof _.sc ? a = _.bl(_.Nh(a)) : a instanceof _.Db ? a = _.bl(_.Ma(a).toString()) : a instanceof _.Db ? a = _.bl(_.Ma(a).toString()) : (a = String(a), a = cl.test(a) ? a.replace(al, Yk) : "about:invalid#zSoyz");
            return a
        };
        el = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
        _.fl = function(a) {
            _.Vh(a, qk) || _.Vh(a, _.rk) ? a = _.bl(a) : a instanceof _.sc ? a = _.bl(_.Nh(a)) : a instanceof _.sc ? a = _.bl(_.Nh(a)) : a instanceof _.Db ? a = _.bl(_.Ma(a).toString()) : a instanceof _.Db ? a = _.bl(_.Ma(a).toString()) : (a = String(a), a = el.test(a) ? a.replace(al, Yk) : "about:invalid#zSoyz");
            return a
        };
        gl = function(a) {
            return function() {
                return a
            }
        };
        hl = function(a, b) {
            for (var c = 0; c < b.length - 2; c += 3) {
                var d = b.charAt(c + 2);
                d = "a" <= d ? d.charCodeAt(0) - 87 : Number(d);
                d = "+" == b.charAt(c + 1) ? a >>> d : a << d;
                a = "+" == b.charAt(c) ? a + d & 4294967295 : a ^ d
            }
            return a
        };
        jl = function(a) {
            var b = il.split("."),
                c = Number(b[0]) || 0;
            a = _.sk(a);
            for (var d = c, e = 0; e < a.length; e++) d += a[e], d = hl(d, "+-a^+6");
            d = hl(d, "+-3^+b+-f");
            d ^= Number(b[1]) || 0;
            0 > d && (d = (d & 2147483647) + 2147483648);
            b = d % 1E6;
            return b.toString() + "." + (b ^ c)
        };
        kl = function() {
            var a = gl(String.fromCharCode(116)),
                b = gl(String.fromCharCode(107));
            a = [a(), a()];
            a[1] = b();
            return a.join("")
        };
        var ll = window.google && google.translate && google.translate._const,
            Mi, il, rl, vl, zl, Bl;
        ll || (ll = {
            _cac: "",
            _cam: "",
            _cest: new Date,
            _cjlc: "",
            _cl: "",
            _cuc: "",
            _cnad: !1,
            _cnal: {},
            Wl: "",
            _pah: "",
            _pas: "",
            _pbi: "",
            _pci: "",
            _phf: "",
            _pli: "",
            _plla: "",
            _pmi: "",
            _ps: "",
            _pta: "",
            _puh: ""
        });
        _.ml = window.google && window.google.translate && window.google.translate.v || "";
        _.S = ll._cl || "en";
        Mi = ll._cuc;
        _.nl = ll._cnad;
        _.ol = ll._cest;
        _.pl = ll._cnal || {};
        _.Ni = "lib" == ll._cam ? 1 : 0;
        _.ql = (ll._cac || "te") + (1 == _.Ni ? "_lib" : "");
        il = function() {
            function a(d) {
                return function() {
                    return d
                }
            }
            var b = String.fromCharCode(107),
                c = a(String.fromCharCode(116));
            b = a(b);
            c = [c(), c()];
            c[1] = b();
            return ll["_c" + c.join(b())] || ""
        }();
        rl = ll._pah || "";
        _.sl = ll._pas || "https://";
        _.tl = ll._pbi || "";
        _.ul = ll._pci || "";
        vl = ll._plla || "";
        _.wl = ll._pli || "";
        _.xl = ll._pmi || "";
        _.yl = ll._ps || "";
        zl = ll._puh || "";
        _.Al = "//" + zl + "/translate_suggestion?client=" + _.ql;
        Bl = "//" + rl + "/translate_voting?client=" + _.ql;
        _.Cl = "https://www.google.com/support/translate" + ("en" == _.S ? "" : "#googtrans/en/" + _.S);
        _.Dl = function(a) {
            var b = "Hc";
            if (a.Hc && a.hasOwnProperty(b)) return a.Hc;
            b = new a;
            return a.Hc = b
        };
        /*

        Math.uuid.js (v1.4)
        http://www.broofa.com
        mailto:robert@broofa.com
        Copyright (c) 2010 Robert Kieffer
        Dual licensed under the MIT and GPL licenses.
        */
        _.El = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
        var Hl, Ol, Pl, Ql, Rl;
        _.Fl = function(a) {
            for (var b = {}, c = 0; c < a.length; ++c) b[a[c]] = !0;
            return b
        };
        _.Gl = function(a) {
            this.j = a ? [a] : [];
            this.h = [0];
            this.l = !1
        };
        _.Gl.prototype.register = function(a) {
            if (this.l) return a || function() {};
            this.h.push(0);
            var b = this.h.length - 1;
            return (0, _.y)(function() {
                this.h[b]++;
                a && a.apply(null, arguments);
                Hl(this)
            }, this)
        };
        _.Gl.prototype.delay = function(a) {
            return this.l ? a : (0, _.y)(function() {
                if (this.l) a.apply(null, arguments);
                else {
                    var b = arguments;
                    this.j.push(function() {
                        a.apply(null, b)
                    })
                }
            }, this)
        };
        _.Gl.prototype.finish = function() {
            this.h[0] = 1;
            Hl(this)
        };
        Hl = function(a) {
            for (var b = 0; b < a.h.length; ++b)
                if (0 == a.h[b]) return;
            a.l = !0;
            for (b = 0; b < a.j.length; ++b) {
                var c = a.j[b];
                a.j[b] = null;
                c.call()
            }
            a.j = [];
            a.h = []
        };
        _.Il = function(a) {
            this.l = a;
            this.j = this.h = !1
        };
        _.Jl = function(a, b) {
            return (0, _.y)(function() {
                b && b.apply(null, arguments);
                this.j ? this.h || (this.l.call(), this.h = !0) : this.h = !0
            }, a)
        };
        _.Il.prototype.finish = function() {
            this.j || (this.j = !0, this.h && this.l.call())
        };
        var Kl = function(a, b, c) {
                this.h = b;
                this.C = a;
                this.A = c || 0;
                this.l = this.j = !1
            },
            Ll = function(a) {
                a.j || a.s()
            };
        Kl.prototype.s = function() {
            (this.j = (this.l = !!this.C.call()) || 0 >= --this.A) ? (this.h.call(null, this.l), this.o = 0) : this.o = window.setTimeout((0, _.y)(this.s, this), 30)
        };
        Kl.prototype.cancel = function() {
            this.o && window.clearTimeout(this.o);
            this.j = !0;
            this.h.call(null, this.l)
        };
        _.Ml = function(a, b) {
            return function() {
                a.dispatchEvent(b)
            }
        };
        _.Nl = function(a) {
            a = (0, _.Rb)(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        };
        Ol = function(a) {
            var b = [],
                c;
            for (c in a)
                if (a[c] !== Object.prototype[c]) {
                    var d = _.Kc(c);
                    if ("array" == _.kb(a[c]))
                        for (var e = 0; e < a[c].length; ++e) b.push(d + "=" + _.Kc(a[c][e]));
                    else b.push(d + "=" + _.Kc(a[c]))
                }
            return b.join("&")
        };
        _.Di = function(a, b) {
            b = b || {};
            b.nca = a;
            b.client = _.ql;
            _.ml && (b.logld = "v" + _.ml);
            var c = new Image;
            c.src = "//" + zl + "/gen204?" + Ol(b);
            c.onload = function() {
                c.onload = null
            }
        };
        Pl = function() {
            var a = {};
            try {
                for (var b in Object.prototype) {
                    var c = Object.prototype[b];
                    delete Object.prototype[b];
                    a[b] = c
                }
            } catch (d) {
                return {}
            }
            return a
        };
        Ql = function(a) {
            for (var b in a) Object.prototype[b] = a[b]
        };
        Rl = function(a) {
            for (var b in a)
                if (a[b] !== Object.prototype[b]) return !1;
            return !0
        };
        var Sl;
        _.Ci = null;
        Sl = function() {};
        Sl.prototype.attach = function(a, b, c) {
            for (var d in c) c[d] !== Object.prototype[d] && (b[d] = "function" === typeof c[d] ? c[d] : _.pb(Ei, a, Number(c[d])))
        };
        _.Tl = new Sl;
        var Fi = function(a) {
            _.I.call(this, a)
        };
        _.x(Fi, _.I);
        var Ul = function(a) {
                this.url = a;
                this.timeout = -1;
                this.l = this.j = "callback";
                this.h = this.Ec = null
            },
            Yl = function(a, b) {
                b = void 0 === b ? {} : b;
                a.h = Tj();
                var c = new lk(a.url),
                    d = new Map;
                a.l && d.set(a.l, a.j);
                c.h.s(pk(b), d);
                Vl(a).then(function() {
                    Wl(a, c.toString())
                }).then(function() {
                    return a.h.promise
                }).then(function() {
                    Xl(a)
                }, function() {
                    Xl(a)
                });
                0 < a.timeout && (a.o = setTimeout(function() {
                    a.h.reject("Timeout!")
                }, a.timeout));
                return a.h.promise
            },
            Wl = function(a, b) {
                var c = new MessageChannel;
                a.Ec.contentWindow.postMessage({
                        url: b,
                        callbackName: a.j
                    },
                    "*", [c.port2]);
                c.port1.onmessage = function(d) {
                    var e = {};
                    void 0 !== a.o && (clearTimeout(a.o), a.o = void 0);
                    void 0 === d.data && a.h.reject("Callback called, but no data received");
                    "string" !== typeof d.data && a.h.reject("Exploitation attempt! Data is not a string!");
                    try {
                        e = JSON.parse(d.data)
                    } catch (f) {
                        a.h.reject("Invalid Data received: " + f.message)
                    }
                    a.h.resolve(e)
                }
            },
            Vl = function(a) {
                var b = Tj(),
                    c = _.Wc(document, "IFRAME");
                if (!c.sandbox) throw Error("la");
                c.sandbox.value = "allow-scripts";
                c.style.display = "none";
                a.Ec = c;
                a = Gi();
                a = _.rj(_.Fc, uj(_.Ec(_.Dc(ui(a)).toString())));
                c.srcdoc = _.Dc(a);
                a = _.Fb("data:text/html;charset=UTF-8;base64," + btoa(_.Dc(a).toString()));
                c.src = _.Ma(a).toString();
                c.addEventListener("load", function() {
                    return b.resolve(c)
                }, !1);
                c.addEventListener("error", function(d) {
                    b.reject(d)
                }, !1);
                document.documentElement.appendChild(c);
                return b.promise
            },
            Xl = function(a) {
                null !== a.Ec && (document.documentElement.removeChild(a.Ec), a.Ec = null)
            };
        var Zl = function(a, b) {
            _.A.call(this);
            this.h = new lk(a);
            if (b)
                for (var c in b) b[c] !== Object.prototype[c] && this.h.h.set(c, b[c])
        };
        _.x(Zl, _.A);
        Zl.prototype.ub = function() {
            return !0
        };
        Zl.prototype.Wa = function() {
            return this.ub()
        };
        Zl.prototype.send = function() {
            return null
        };
        Zl.prototype.cancel = function() {};
        var $l = function(a, b, c, d) {
            Zl.call(this, a, b);
            this.l = null == d || !!d;
            a = this.j = new Ul(this.h);
            a.j = "callback";
            a.l = void 0 === c ? "callback" : c
        };
        _.x($l, Zl);
        $l.prototype.ub = function() {
            return this.l
        };
        $l.prototype.send = function(a, b) {
            a = Yl(this.j, a);
            a.then(b);
            return a
        };
        $l.prototype.cancel = function(a) {
            a.cancel()
        };
        var am = function(a, b) {
            Zl.call(this, a, b);
            this.l = {};
            this.j = this.o = 0;
            window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && (this.j = 1);
            !this.j && window.XDomainRequest && "file:" != window.location.protocol && (this.j = 2, this.h.h.set("u", window.location.href))
        };
        _.x(am, Zl);
        am.prototype.ub = function() {
            return !!this.j
        };
        am.prototype.send = function(a, b) {
            var c = Pl(),
                d = ++this.o,
                e = {},
                f = {};
            "q" in a && (f.q = a.q, delete a.q);
            a.mode = this.j;
            1 == this.j ? (e.hc = new _.Sf, _.D(e.hc, "complete", (0, _.y)(function() {
                e.sd || (e.hc.se() ? b(e.hc.Bd()) : (this.Fh(), b(null, e.hc.Bd() || null)), bm(this, d))
            }, this)), _.D(e.hc, "timeout", (0, _.y)(function() {
                e.sd || (this.Gh(), bm(this, d))
            }, this)), e.hc.send(this.h.toString() + "&" + Ol(a), "POST", Ol(f), {
                "Content-Type": "application/x-www-form-urlencoded"
            })) : (e.Ib = new XDomainRequest, e.Ib.timeout = 2E4, e.Ib.onload = (0, _.y)(function() {
                e.sd ||
                    (b(e.Ib.responseText), bm(this, d))
            }, this), e.Ib.onerror = (0, _.y)(function() {
                e.sd || (this.Fh(), b(null), bm(this, d))
            }, this), e.Ib.ontimeout = (0, _.y)(function() {
                e.sd || (this.Gh(), b(null), bm(this, d))
            }, this), e.Ib.open("POST", this.h.toString() + "&" + Ol(a)), e.Ib.send(Ol(f)));
            this.l[d] = e;
            Ql(c);
            return d
        };
        am.prototype.cancel = function(a) {
            var b = this.l[a];
            b && (b.sd = !0, b.Ib && b.Ib.abort(), bm(this, a))
        };
        var bm = function(a, b) {
            var c = a.l[b];
            c && (c.hc ? (c.hc.P(), c.hc = null) : c.Ib && (c.Ib = null), delete a.l[b])
        };
        am.prototype.L = function() {
            Zl.prototype.L.call(this);
            for (var a in this.l) this.cancel(a)
        };
        _.Tl.attach(17170, am.prototype, {
            Gh: 1,
            Fh: 2
        });
        var cm = function(a, b, c) {
            Zl.call(this, a, c);
            this.l = b.proxyIsSupported;
            this.o = b.proxySend;
            this.j = b.proxyCancel
        };
        _.x(cm, Zl);
        cm.prototype.ub = function() {
            return this.l()
        };
        cm.prototype.send = function(a, b) {
            return this.o(this.h.toString(), a, b)
        };
        cm.prototype.cancel = function(a) {
            this.j(a)
        };
        var dm = function(a, b) {
            _.A.call(this);
            this.j = a;
            this.h = b ? b : null
        };
        _.x(dm, _.A);
        var em = function(a) {
            if ("array" != _.kb(a)) var b = [
                [a, 200]
            ];
            else if (2 == a.length && "array" != _.kb(a[0]) && "array" != _.kb(a[1])) b = [
                [a[0], 200, a[1]],
                [a[1], 200, a[1]]
            ];
            else {
                b = [];
                for (var c = 0; c < a.length; ++c) b[c] = "array" != _.kb(a[c]) ? [a[c], 200] : [a[c][0], 200, a[c][1]]
            }
            return b
        };
        dm.prototype.o = function(a) {
            var b = this;
            return function(c) {
                if (c) try {
                    var d = c.indexOf("\x00");
                    0 <= d && (c = c.substr(0, d));
                    var e = JSON.parse(c)
                } catch (f) {
                    e = null, b.Rj()
                }
                e ? a(em(e), 200) : a([], 500)
            }
        };
        dm.prototype.l = function(a) {
            return function(b) {
                b ? a(em(b), 200) : a([], 500)
            }
        };
        dm.prototype.L = function() {
            _.A.prototype.L.call(this)
        };
        _.Tl.attach(47504, dm.prototype, {
            Rj: function() {
                _.Di("te_afbr")
            }
        });
        _.fm = function(a) {
            return a
        };
        _.gm = {
            0: "NO_ERROR",
            1: "UNKNOWN_ERROR",
            2: "JWT_TOKEN_CANNOT_PARSE",
            3: "JWT_TOKEN_MISS_PARAM",
            4: "JWT_TOKEN_INVALID_ISS",
            5: "JWT_TOKEN_INVALID",
            6: "INTERNAL_SERVER_ERROR",
            7: "OUT_OF_QUOTA",
            8: "INTERNAL_SERVER_ERROR"
        };
        _.im = function(a, b, c, d, e, f) {
            _.A.call(this);
            var g;
            b ? g = {
                client: b
            } : g = {
                anno: 3,
                client: _.ql,
                format: "html",
                v: "1.0"
            };
            c && (g.sp = c);
            g.key = a;
            _.ml && (g.logld = "v" + _.ml);
            this.A = d || null;
            this.Mc = e || null;
            this.h = null;
            this.j = {
                td: (0, _.y)(this.I, this),
                Of: 300
            };
            a = this.s = new dm(g, f);
            b = _.sl + vl;
            this.o = a.h ? new cm(b, a.h, {
                client: _.ql
            }) : new $l(b, {
                client: _.ql
            });
            a = this.s;
            if (a.h) {
                if (!a.h) throw Error("ma");
                a = [{
                    Fa: new cm(_.sl + rl + "/translate_a/t", a.h, a.j),
                    td: (0, _.y)(a.l, a),
                    ye: 1900,
                    Pf: 4294967295,
                    Nf: -1,
                    hg: 0,
                    fe: !1
                }]
            } else b = _.sl + rl, a = [{
                Fa: new am(b +
                    "/translate_a/t", a.j),
                td: (0, _.y)(a.o, a),
                ye: 30720,
                Pf: 4294967295,
                Nf: -1,
                hg: 0,
                fe: !1
            }, {
                Fa: new $l(b + "/translate_a/t", a.j, "cb", _.C && 7 >= _.lc),
                td: (0, _.y)(a.l, a),
                ye: 1900,
                Pf: 4294967295,
                Nf: -1,
                hg: 3,
                fe: !0
            }];
            this.C = new hm(a);
            this.l = !1;
            for (b = 0; b < a.length; ++b) this.l = this.l || a[b].Fa.ub();
            this.l || this.Sj()
        };
        _.x(_.im, _.A);
        _.im.prototype.I = function(a) {
            return function(b) {
                if (b) try {
                    var c = JSON.parse(b)
                } catch (d) {
                    c = null
                }
                a(c && c[1] || void 0)
            }
        };
        _.im.prototype.initialize = function(a) {
            this.F || (this.F = !0, this.C.start((0, _.y)(function(b) {
                b && (this.h = b, this.j.Fa = b.Fa);
                a()
            }, this)))
        };
        _.im.prototype.ub = function() {
            return this.l
        };
        _.im.prototype.Wa = function() {
            return null !== this.h && null !== this.h.Fa && this.h.Fa.Wa()
        };
        _.jm = function(a, b, c) {
            b = a.j.td(b);
            a.j.Fa.send({
                q: c.substring(0, a.j.Of),
                sl: "auto",
                tl: "en"
            }, b)
        };
        _.im.prototype.translate = function(a, b, c, d, e, f, g, h) {
            var l = this,
                m = this.h.td(a),
                n = {
                    q: b,
                    sl: c,
                    tl: d
                };
            n = _.fm(n);
            n.tc = e;
            f && (n.ctt = 1);
            g && (n.dom = 1);
            h && (n.sr = 1);
            n[kl()] = jl(b.join(""));
            return this.A ? this.A.j().then(function(p) {
                null != p && (n.jwtt = p, n.rurl = location.hostname);
                return l.h.Fa.send(n, (0, _.y)(km(m), l))
            }, function(p) {
                p && l.Mc && l.Mc(p)
            }) : this.h.Fa.send(n, m)
        };
        var km = function(a) {
                return function(b, c) {
                    if (c && this.Mc) {
                        try {
                            var d = JSON.parse(c).error_code
                        } catch (e) {
                            d = null
                        }
                        c = _.gm[1];
                        this.Mc(null == d ? c : _.gm[d] || c)
                    }
                    a(b)
                }
            },
            lm = function(a, b) {
                b instanceof _.Wd ? b.then(function(c) {
                    a.h.Fa.cancel(c)
                }) : a.h.Fa.cancel(b)
            },
            mm = function(a) {
                return a.h.fe ? a.h.ye - (new lk(a.h.Fa.h)).toString().length : a.h.ye
            };
        _.im.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.h && (this.h.Fa.P(), this.h.Fa = null);
            this.j.Fa = null;
            this.o.P();
            this.o = null
        };
        _.Tl.attach(7361, _.im.prototype, {
            Sj: function() {
                _.Di("te_au")
            }
        });
        var hm = function(a) {
            this.j = a
        };
        hm.prototype.start = function(a) {
            this.h = a;
            this.l = 0;
            nm(this)
        };
        var nm = function(a) {
            if (a.l >= a.j.length) a.h(null);
            else {
                var b = a.j[a.l++];
                b.rk ? Ll(new Kl((0, _.y)(b.Fa.Wa, b.Fa), (0, _.y)(function(c) {
                    c ? this.h(b) : nm(this)
                }, a), b.rk)) : b.Fa.Wa() ? a.h(b) : nm(a)
            }
        };
        var om = function() {
            this.h = []
        };
        om.prototype.add = function(a) {
            this.h.push(a)
        };
        var pm = function() {
            this.h = []
        };
        _.x(pm, om);
        pm.prototype.add = function(a) {
            if (a)
                for (; a(););
        };
        pm.mc = function() {
            return _.Dl(pm)
        };
        _.rm = function(a) {
            this.h = [];
            this.j = .5;
            qm(this, a);
            this.o = 0;
            this.l = !0;
            this.s = (0, _.y)(this.A, this)
        };
        _.x(_.rm, om);
        var qm = function(a, b) {
            1 < b ? a.j = 1 : .001 > b ? a.j = .001 : b && (a.j = b)
        };
        _.rm.prototype.add = function(a) {
            om.prototype.add.call(this, a);
            this.l && sm(this)
        };
        var sm = function(a) {
            a.l = !1;
            window.setTimeout(a.s, Math.min(a.o, 5E3))
        };
        _.rm.prototype.A = function() {
            var a = (new Date).getTime();
            do {
                this.h.length && (this.h[0] && this.h[0]() || this.h.shift());
                var b = !!this.h.length;
                var c = 95 * this.j + 5;
                var d = (new Date).getTime() - a
            } while (b && d < c);
            this.o = Math.ceil(d * (1 / this.j - 1)) + 1;
            b ? sm(this) : this.l = !0
        };
        var tm = _.Fl("A ABBR ACRONYM B BASEFONT BDO BIG CITE DFN EM FONT I INPUT NOBR LABEL Q S SMALL SPAN STRIKE STRONG SUB SUP TEXTAREA TT U VAR".split(" ")),
            um = _.Fl("APPLET AREA BASE FRAME FRAMESET HR LINK META NOFRAMES NOSCRIPT INPUT TEXTAREA TITLE".split(" ")),
            vm = _.Fl("BR CODE IMG KBD MAP OBJECT PARAM SCRIPT STYLE WBR svg".split(" ")),
            wm = _.Fl(["submit", "button"]);
        var xm;
        _.ym = function(a, b, c, d, e) {
            this.j = !!b;
            this.node = null;
            this.h = 0;
            this.qg = !1;
            this.l = !c;
            a && xm(this, a, d);
            this.depth = void 0 != e ? e : this.h || 0;
            this.j && (this.depth *= -1)
        };
        _.z(_.ym, _.Re);
        xm = function(a, b, c, d) {
            if (a.node = b) a.h = "number" === typeof c ? c : 1 != a.node.nodeType ? 0 : a.j ? -1 : 1;
            "number" === typeof d && (a.depth = d)
        };
        _.zm = function(a) {
            var b = a.j ? -1 : 1;
            a.h == b && (a.h = -1 * b, a.depth += a.h * (a.j ? -1 : 1))
        };
        _.ym.prototype.next = function() {
            if (this.qg) {
                if (!this.node || this.l && 0 == this.depth) return _.Se;
                var a = this.node;
                var b = this.j ? -1 : 1;
                if (this.h == b) {
                    var c = this.j ? a.lastChild : a.firstChild;
                    c ? xm(this, c) : xm(this, a, -1 * b)
                } else(c = this.j ? a.previousSibling : a.nextSibling) ? xm(this, c) : xm(this, a.parentNode, -1 * b);
                this.depth += this.h * (this.j ? -1 : 1)
            } else this.qg = !0;
            return (a = this.node) ? {
                value: a,
                done: !1
            } : _.Se
        };
        _.ym.prototype.splice = function(a) {
            var b = this.node,
                c = this.j ? 1 : -1;
            this.h == c && (this.h = -1 * c, this.depth += this.h * (this.j ? -1 : 1));
            this.j = !this.j;
            _.ym.prototype.next.call(this);
            this.j = !this.j;
            c = _.da(arguments[0]) ? arguments[0] : arguments;
            for (var d = c.length - 1; 0 <= d; d--) Hj(c[d], b);
            _.Ij(b)
        };
        var Bm = function(a, b) {
                this.l = _.C ? [] : null;
                this.j = [];
                this.done = !1;
                for (this.h = new _.ym(a, !1, b, 3 === a.nodeType ? 0 : 1, 1); a = a.parentNode;) Am(this, a, !0);
                this.j.push(!1);
                this.j.reverse();
                for (a = 1; a < this.j.length; ++a) null == this.j[a] && (this.j[a] = this.j[a - 1])
            },
            Am = function(a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = (b.style && b.style.whiteSpace || "").substring(0, 3);
                "pre" === d || !d && "PRE" === b.tagName ? a.j.push(!0) : d && "pre" !== d ? a.j.push(!1) : c ? a.j.push(null) : a.j.push(a.j[a.j.length - 1])
            },
            Cm = function(a) {
                return !!a.j[a.j.length - 1]
            };
        Bm.prototype.node = function() {
            return this.h.node
        };
        Bm.prototype.depth = function() {
            return this.h.depth
        };
        Bm.prototype.next = function() {
            try {
                this.l && 0 < this.l.length && -1 === this.h.h && this.l.length--; - 1 === this.h.h && this.j.length--;
                if (this.l && 0 < this.l.length && 1 !== this.h.h && !this.h.node.nextSibling) xm(this.h, this.l[this.l.length - 1], -1, this.h.depth - 1);
                else {
                    if (this.h.next().done) {
                        this.done = !0;
                        return
                    }
                    this.l && 1 === this.h.h && this.l.push(this.h.node)
                }
                1 === this.h.h && this.h.qg && Am(this, this.h.node)
            } catch (a) {
                this.Yj(a), this.done = !0
            }
        };
        _.Tl.attach(52754, Bm.prototype, {
            Yj: 1
        });
        var Dm;
        Dm = function() {
            return "[msg_undefined]"
        };
        _.T = {};
        (function() {
            var a = function(b) {
                return function() {
                    return b
                }
            };
            _.T = {
                af: a(0),
                Ne: a(1),
                wg: a(2),
                Bl: a(3),
                Hi: a(4),
                Bg: a(5),
                zi: a(45),
                Ai: a(6),
                Kg: a(7),
                nd: a(8),
                Ji: a(9),
                Ql: a(10),
                Ni: a(11),
                Mg: a(12),
                Nl: a(13),
                Ei: a(14),
                Ml: a(15),
                Ng: a(16),
                Sl: a(17),
                Li: a(18),
                Uk: a(19),
                Al: a(20),
                li: a(21),
                Fi: a(22),
                Hl: a(23),
                Gl: a(24),
                Ci: a(25),
                Rl: a(26),
                Ii: a(27),
                Di: a(28),
                Bi: a(29),
                Mi: a(30),
                Tk: a(32),
                Rk: a(33),
                Tl: a(34),
                fl: a(35),
                Zk: a(36),
                el: a(37),
                Gi: a(38),
                ql: a(39),
                Sk: a(40),
                Ze: a(41),
                Hg: a(46),
                Lg: a(47),
                Ag: a(48),
                zg: a(49),
                yg: a(50),
                Ki: a(51)
            }
        })();
        _.Em = function() {
            var a = Li("google.translate.m");
            if (a)
                for (var b in _.T)
                    if (_.T[b] !== Object.prototype[_.T[b]] && _.T[b]) {
                        var c = _.T[b]();
                        _.T[b] = a[c] ? a[c] : Dm
                    }
        };
        var Gm;
        _.Fm = function(a) {
            var b = a.Zc,
                c = a.Hh;
            a.Ah ? b = "<span style=\"display:inline-block;vertical-align:middle;height:15px; width:51px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader( src='" + String(b).replace(_.$k, _.Wk) + "',sizingMethod='scale');\"></span>" : (a = _.T.nd, b = '<img src="' + _.L(_.fl(b)) + '" width="37px" height="14px" style="padding-right: 3px" alt="Google ' + _.L(a) + '">');
            a = _.T.nd;
            return (0, _.K)('<span style="white-space:nowrap"><a class="goog-logo-link" href="' + _.L(_.dl(c)) + '" target="_blank">' + b +
                _.Zk(a) + "</a></span>")
        };
        Gm = function(a, b) {
            a = {
                Zc: a.Zc,
                dir: a.dir,
                Me: a.Me
            };
            var c = Sk["key_a:"];
            c || (c = Sk["key_a:"]);
            b = (c ? c : Uk)(a, b);
            return (0, _.K)(b)
        };
        _.Tk(0, function(a) {
            var b = a.Zc,
                c = _.T.nd,
                d = _.T.Ze;
            return (0, _.K)('<div id="goog-gt-tt" class="skiptranslate" dir="' + _.L(a.dir) + '"><div style="padding: 8px;"><div><div class="logo"><img src="' + _.L(_.fl(b)) + '" width="20" height="20" alt="Google ' + _.L(c) + '"/></div></div></div><div class="top" style="padding: 8px; float: left; width: 100%;"><h1 class="title gray">' + _.Zk(d) + '</h1></div><div class="middle" style="padding: 8px;"><div class="original-text"></div></div><div class="bottom" style="padding: 8px;"><div class="activity-links"></div><div class="started-activity-container"><hr style="color: #CCC; background-color: #CCC; height: 1px; border: none;"/><div class="activity-root"></div></div></div><div class="status-message"></div></div>')
        });
        var Hm = function(a) {
                var b = a.method,
                    c = a.dj,
                    d = a.dir,
                    e = _.T.Fi,
                    f = _.T.Ne;
                a = '<div class="translate-form"><div class="form-message"></div><form class="activity-form" action="' + _.L(_.dl(a.Oi)) + '" method="' + _.L(b) + '"><div class="form-buttons" style="text-align:' + (_.Qk(d, "rtl") ? "right" : "left") + '"><input class="activity-submit" type="button" value="' + _.L(e) + '"><input class="activity-cancel" type="button" value="' + _.L(f) + '"></div><div class="parameters"><input type="hidden" name="gtrans"/><input type="hidden" name="utrans"/><input type="hidden" name="hl"/><input type="hidden" name="text"/><input type="hidden" name="langpair"/><input type="hidden" name="oe" value="UTF-8"/>';
                b = c.length;
                for (d = 0; d < b; d++) a += '<input type="hidden" name="' + _.L(c[d]) + '"/>';
                return (0, _.K)(a + "</div></form></div>")
            },
            Im = function() {
                return (0, _.K)('<div><textarea class="contribute-original-text"></textarea><div class="activity-form-container"></div></div>')
            };
        var Jm = function() {};
        Xi(Jm);
        Jm.prototype.h = 0;
        var Qm, Rm;
        _.M = function(a) {
            _.E.call(this);
            this.h = a || _.Pc();
            this.ma = Km;
            this.X = null;
            this.tb = !1;
            this.l = null;
            this.I = void 0;
            this.N = this.F = this.C = null;
            this.Ha = !1
        };
        _.z(_.M, _.E);
        _.M.prototype.Ma = Jm.mc();
        var Km = null,
            Lm = function(a, b) {
                switch (a) {
                    case 1:
                        return b ? "disable" : "enable";
                    case 2:
                        return b ? "highlight" : "unhighlight";
                    case 4:
                        return b ? "activate" : "deactivate";
                    case 8:
                        return b ? "select" : "unselect";
                    case 16:
                        return b ? "check" : "uncheck";
                    case 32:
                        return b ? "focus" : "blur";
                    case 64:
                        return b ? "open" : "close"
                }
                throw Error("na");
            };
        _.M.prototype.Wb = function() {
            return this.X || (this.X = ":" + (this.Ma.h++).toString(36))
        };
        var Mm = function(a, b) {
            if (a.C && a.C.N) {
                var c = a.C.N,
                    d = a.X;
                d in c && delete c[d];
                c = a.C.N;
                if (null !== c && b in c) throw Error("x`" + b);
                c[b] = a
            }
            a.X = b
        };
        _.M.prototype.B = function() {
            return this.l
        };
        var Nm = function(a, b) {
                return a.l ? Si(b, a.l || a.h.V) : null
            },
            Om = function(a) {
                a.I || (a.I = new _.F(a));
                return a.I
            };
        _.M.prototype.Fe = function(a) {
            if (this.C && this.C != a) throw Error("pa");
            _.M.R.Fe.call(this, a)
        };
        _.M.prototype.T = function() {
            this.l = _.nh(this.h, "DIV")
        };
        _.M.prototype.Ca = function(a) {
            _.Pm(this, a)
        };
        _.Pm = function(a, b, c) {
            if (a.tb) throw Error("qa");
            a.l || a.T();
            b ? b.insertBefore(a.l, c || null) : a.h.V.body.appendChild(a.l);
            a.C && !a.C.tb || a.ka()
        };
        Qm = function(a, b) {
            if (a.tb) throw Error("qa");
            if (b && a.Dg(b)) {
                a.Ha = !0;
                var c = _.Oc(b);
                a.h && a.h.V == c || (a.h = _.Pc(b));
                a.Aa(b);
                a.ka()
            } else throw Error("ra");
        };
        _.k = _.M.prototype;
        _.k.Dg = function() {
            return !0
        };
        _.k.Aa = function(a) {
            this.l = a
        };
        _.k.ka = function() {
            this.tb = !0;
            Rm(this, function(a) {
                !a.tb && a.B() && a.ka()
            })
        };
        _.k.ia = function() {
            Rm(this, function(a) {
                a.tb && a.ia()
            });
            this.I && _.If(this.I);
            this.tb = !1
        };
        _.k.L = function() {
            this.tb && this.ia();
            this.I && (this.I.P(), delete this.I);
            Rm(this, function(a) {
                a.P()
            });
            !this.Ha && this.l && _.Ij(this.l);
            this.C = this.l = this.N = this.F = null;
            _.M.R.L.call(this)
        };
        _.U = function(a, b) {
            return a.Wb() + "." + b
        };
        Rm = function(a, b) {
            a.F && a.F.forEach(b, void 0)
        };
        _.M.prototype.Zf = function(a) {
            for (var b = []; this.F && 0 != this.F.length;) {
                var c = b,
                    d = c.push,
                    e = this.F ? this.F[0] || null : null,
                    f = a;
                if (e) {
                    var g = "string" === typeof e ? e : e.Wb();
                    this.N && g ? (e = this.N, e = (null !== e && g in e ? e[g] : void 0) || null) : e = null;
                    if (g && e) {
                        var h = this.N;
                        g in h && delete h[g];
                        _.va(this.F, e);
                        f && (e.ia(), e.l && _.Ij(e.l));
                        f = e;
                        if (null == f) throw Error("oa");
                        f.C = null;
                        _.M.R.Fe.call(f, null)
                    }
                }
                if (!e) throw Error("sa");
                d.call(c, e)
            }
            return b
        };
        _.z(Ki, _.M);
        _.k = Ki.prototype;
        _.k.Ce = function(a) {
            this.s = a
        };
        _.k.Nd = function() {
            if (!this.tb) throw Error("ta");
            if (!this.s) throw Error("ua");
        };
        _.k.dd = function() {};
        _.k.P = function() {
            this.pb() || (Ki.R.P.call(this), delete this.xe)
        };
        _.k.Oa = function() {
            return this.s
        };
        var Um = function() {
                _.E.call(this);
                this.l = "closure_frame" + Sm++;
                this.j = [];
                Tm[this.l] = this
            },
            Vm;
        _.z(Um, _.E);
        var Tm = {},
            Sm = 0,
            Wm = function(a, b) {
                var c = _.Pc(a);
                Vj(b, function(d, e) {
                    Array.isArray(d) || (d = [d]);
                    _.Nb(d, function(f) {
                        f = c.T("INPUT", {
                            type: "hidden",
                            name: e,
                            value: f
                        });
                        a.appendChild(f)
                    })
                })
            };
        _.k = Um.prototype;
        _.k.xa = null;
        _.k.sb = null;
        _.k.Wc = null;
        _.k.gk = 0;
        _.k.Jb = !1;
        _.k.Ke = !1;
        _.k.Jf = null;
        _.k.Fc = null;
        _.k.send = function(a, b, c, d) {
            if (this.Jb) throw Error("va");
            a = new lk(a);
            b = b ? b.toUpperCase() : "GET";
            c && (c = _.Mc(), a.h.set("zx", c));
            Vm || (Vm = _.Fj("FORM"), Vm.acceptCharset = "utf-8", c = Vm.style, c.position = "absolute", c.visibility = "hidden", c.top = c.left = "-10px", c.width = c.height = "10px", c.overflow = "hidden", document.body.appendChild(Vm));
            this.xa = Vm;
            "GET" == b && Wm(this.xa, a.h);
            d && Wm(this.xa, d);
            vj(this.xa, _.tc(a.toString()));
            this.xa.method = b;
            Xm(this);
            Ym(this)
        };
        var Zm = function(a, b) {
            if (a.Jb) throw Error("va");
            var c = new lk(b.action);
            a.xa = b;
            vj(a.xa, c.toString());
            Xm(a)
        };
        _.k = Um.prototype;
        _.k.abort = function() {
            if (this.Jb) {
                var a = $m(this);
                if (a)
                    if (_.id(a)) a.qb && _.pd(a.qb);
                    else if (a = _.wd(a)) {
                    var b = 0,
                        c;
                    for (c in a.h)
                        for (var d = a.h[c].concat(), e = 0; e < d.length; ++e) _.Bd(d[e]) && ++b
                }
                this.Ke = this.Jb = !1;
                this.dispatchEvent("abort");
                an(this)
            }
        };
        _.k.L = function() {
            this.Jb && this.abort();
            Um.R.L.call(this);
            this.sb && bn(this);
            Ym(this);
            delete this.s;
            this.Jf = this.xa = null;
            delete Tm[this.l]
        };
        _.k.se = function() {
            return this.Ke
        };
        _.k.isActive = function() {
            return this.Jb
        };
        _.k.Bd = function() {
            return this.Jf
        };
        var Xm = function(a) {
            a.Jb = !0;
            a.Wc = a.l + "_" + (a.gk++).toString(36);
            a.sb = _.Pc(a.xa).T("IFRAME", {
                name: a.Wc,
                id: a.Wc
            });
            _.C && 7 > Number(_.lc) && vj(a.sb, _.tc(_.oh(_.mh('javascript:""'))));
            var b = a.sb.style;
            b.visibility = "hidden";
            b.width = b.height = "10px";
            b.display = "none";
            _.Yb ? b.marginTop = b.marginLeft = "-10px" : (b.position = "absolute", b.top = b.left = "-10px");
            _.Pc(a.xa).V.body.appendChild(a.sb);
            b = a.Wc + "_inner";
            var c = _.Kj(a.sb);
            if (document.baseURI) {
                var d = _.zj(b);
                d = _.Ec('<head><base href="' + _.zj(document.baseURI) + '"></head><body><iframe id="' +
                    d + '" name="' + d + '"></iframe>')
            } else d = _.zj(b), d = _.Ec('<body><iframe id="' + d + '" name="' + d + '"></iframe>');
            c.write(_.Dc(d));
            _.D(c.getElementById(b), "load", a.h, !1, a);
            d = Ej("TEXTAREA", a.xa);
            for (var e = 0, f = d.length; e < f; e++) {
                var g = d[e].value;
                Rj(d[e]) != g && (_.ad(d[e], g), d[e].value = g)
            }
            d = c.importNode(a.xa, !0);
            d.target = b;
            d.action = a.xa.action;
            c.body.appendChild(d);
            e = Ej("SELECT", a.xa);
            f = Ej("SELECT", d);
            g = 0;
            for (var h = e.length; g < h; g++)
                for (var l = Ej("OPTION", e[g]), m = Ej("OPTION", f[g]), n = 0, p = l.length; n < p; n++) m[n].selected =
                    l[n].selected;
            e = Ej("INPUT", a.xa);
            f = Ej("INPUT", d);
            g = 0;
            for (h = e.length; g < h; g++)
                if ("file" == e[g].type && e[g].value != f[g].value) {
                    a.xa.target = b;
                    d = a.xa;
                    break
                }
            try {
                a.A = !1, d.submit(), c.close(), _.Xb && _.Rf(a.C, 250, a)
            } catch (r) {
                _.Ad(c.getElementById(b), "load", a.h, !1, a), c.close(), cn(a)
            }
        };
        Um.prototype.h = function() {
            _.Ad($m(this), "load", this.h, !1, this);
            try {
                var a = this.sb ? _.Kj($m(this)) : null;
                this.Jb = !1;
                try {
                    var b = a.body;
                    this.Jf = b.textContent || b.innerText
                } catch (e) {
                    var c = 1
                }
                var d;
                c || "function" != typeof this.s || (d = this.s(a)) && (c = 4);
                c ? cn(this) : (this.Ke = !0, this.dispatchEvent("complete"), this.dispatchEvent("success"), an(this))
            } catch (e) {
                cn(this)
            }
        };
        var cn = function(a) {
                a.A || (a.Ke = !1, a.Jb = !1, a.dispatchEvent("complete"), a.dispatchEvent("error"), an(a), a.A = !0)
            },
            an = function(a) {
                bn(a);
                Ym(a);
                a.xa = null;
                a.dispatchEvent("ready")
            },
            bn = function(a) {
                var b = a.sb;
                b && (b.onreadystatechange = null, b.onload = null, b.onerror = null, a.j.push(b));
                a.Fc && (_.t.clearTimeout(a.Fc), a.Fc = null);
                _.Xb ? a.Fc = _.Rf(a.o, 2E3, a) : a.o();
                a.sb = null;
                a.Wc = null
            };
        Um.prototype.o = function() {
            this.Fc && (_.t.clearTimeout(this.Fc), this.Fc = null);
            for (; 0 != this.j.length;) {
                var a = this.j.pop();
                _.Ij(a)
            }
        };
        var Ym = function(a) {
                a.xa && a.xa == Vm && _.Zc(a.xa)
            },
            $m = function(a) {
                return a.sb ? _.Kj(a.sb).getElementById(a.Wc + "_inner") : null
            };
        Um.prototype.C = function() {
            if (this.Jb) {
                var a = this.sb ? _.Kj($m(this)) : null;
                a && !_.Tb(a, "documentUri") ? (_.Ad($m(this), "load", this.h, !1, this), cn(this)) : _.Rf(this.C, 250, this)
            }
        };
        var fn = function(a, b, c, d, e, f) {
                if (_.$b && e) return dn(a);
                if (e && !d) return !1;
                if (!_.Xb) {
                    "number" === typeof b && (b = en(b));
                    var g = 17 == b || 18 == b || _.$b && 91 == b;
                    if ((!c || _.$b) && g || _.$b && 16 == b && (d || f)) return !1
                }
                if ((_.Yb || _.Vb) && d && c) switch (a) {
                    case 220:
                    case 219:
                    case 221:
                    case 192:
                    case 186:
                    case 189:
                    case 187:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                        return !1
                }
                if (_.C && d && b == a) return !1;
                switch (a) {
                    case 13:
                        return _.Xb ? f || e ? !1 : !(c && d) : !0;
                    case 27:
                        return !(_.Yb || _.Vb || _.Xb)
                }
                return _.Xb && (d || e || f) ? !1 : dn(a)
            },
            dn = function(a) {
                if (48 <=
                    a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (_.Yb || _.Vb) && 0 == a) return !0;
                switch (a) {
                    case 32:
                    case 43:
                    case 63:
                    case 64:
                    case 107:
                    case 109:
                    case 110:
                    case 111:
                    case 186:
                    case 59:
                    case 189:
                    case 187:
                    case 61:
                    case 188:
                    case 190:
                    case 191:
                    case 192:
                    case 222:
                    case 219:
                    case 220:
                    case 221:
                    case 163:
                    case 58:
                        return !0;
                    case 173:
                        return _.Xb;
                    default:
                        return !1
                }
            },
            en = function(a) {
                if (_.Xb) a = gn(a);
                else if (_.$b && _.Yb) switch (a) {
                    case 93:
                        a = 91
                }
                return a
            },
            gn = function(a) {
                switch (a) {
                    case 61:
                        return 187;
                    case 59:
                        return 186;
                    case 173:
                        return 189;
                    case 224:
                        return 91;
                    case 0:
                        return 224;
                    default:
                        return a
                }
            };
        var hn = function(a, b, c, d) {
            _.gd.call(this, d);
            this.type = "key";
            this.keyCode = a;
            this.charCode = b;
            this.repeat = c
        };
        _.z(hn, _.gd);
        var jn = function(a, b) {
            _.E.call(this);
            a && this.attach(a, b)
        };
        _.z(jn, _.E);
        _.k = jn.prototype;
        _.k.Nc = null;
        _.k.te = null;
        _.k.Hf = null;
        _.k.ue = null;
        _.k.fb = -1;
        _.k.cc = -1;
        _.k.bf = !1;
        var kn = {
                3: 13,
                12: 144,
                63232: 38,
                63233: 40,
                63234: 37,
                63235: 39,
                63236: 112,
                63237: 113,
                63238: 114,
                63239: 115,
                63240: 116,
                63241: 117,
                63242: 118,
                63243: 119,
                63244: 120,
                63245: 121,
                63246: 122,
                63247: 123,
                63248: 44,
                63272: 46,
                63273: 36,
                63275: 35,
                63276: 33,
                63277: 34,
                63289: 144,
                63302: 45
            },
            ln = {
                Up: 38,
                Down: 40,
                Left: 37,
                Right: 39,
                Enter: 13,
                F1: 112,
                F2: 113,
                F3: 114,
                F4: 115,
                F5: 116,
                F6: 117,
                F7: 118,
                F8: 119,
                F9: 120,
                F10: 121,
                F11: 122,
                F12: 123,
                "U+007F": 46,
                Home: 36,
                End: 35,
                PageUp: 33,
                PageDown: 34,
                Insert: 45
            },
            mn = _.$b && _.Xb;
        _.k = jn.prototype;
        _.k.rj = function(a) {
            if (_.Yb || _.Vb)
                if (17 == this.fb && !a.ctrlKey || 18 == this.fb && !a.altKey || _.$b && 91 == this.fb && !a.metaKey) this.cc = this.fb = -1; - 1 == this.fb && (a.ctrlKey && 17 != a.keyCode ? this.fb = 17 : a.altKey && 18 != a.keyCode ? this.fb = 18 : a.metaKey && 91 != a.keyCode && (this.fb = 91));
            fn(a.keyCode, this.fb, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? (this.cc = en(a.keyCode), mn && (this.bf = a.altKey)) : this.handleEvent(a)
        };
        _.k.tj = function(a) {
            this.cc = this.fb = -1;
            this.bf = a.altKey
        };
        _.k.handleEvent = function(a) {
            var b = a.h,
                c = b.altKey;
            if (_.C && "keypress" == a.type) {
                var d = this.cc;
                var e = 13 != d && 27 != d ? b.keyCode : 0
            } else(_.Yb || _.Vb) && "keypress" == a.type ? (d = this.cc, e = 0 <= b.charCode && 63232 > b.charCode && dn(d) ? b.charCode : 0) : ("keypress" == a.type ? (mn && (c = this.bf), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.cc, e = b.charCode) : (d = b.keyCode || this.cc, e = b.charCode || 0)) : (d = b.keyCode || this.cc, e = b.charCode || 0), _.$b && 63 == e && 224 == d && (d = 191));
            var f = d = en(d);
            d ? 63232 <= d && d in kn ? f = kn[d] : 25 == d && a.shiftKey &&
                (f = 9) : b.keyIdentifier && b.keyIdentifier in ln && (f = ln[b.keyIdentifier]);
            if (!_.Xb || "keypress" != a.type || fn(f, this.fb, a.shiftKey, a.ctrlKey, c, a.metaKey)) a = f == this.fb, this.fb = f, b = new hn(f, e, a, b), b.altKey = c, this.dispatchEvent(b)
        };
        _.k.B = function() {
            return this.Nc
        };
        _.k.attach = function(a, b) {
            this.ue && nn(this);
            this.Nc = a;
            this.te = _.D(this.Nc, "keypress", this, b);
            this.Hf = _.D(this.Nc, "keydown", this.rj, b, this);
            this.ue = _.D(this.Nc, "keyup", this.tj, b, this)
        };
        var nn = function(a) {
            a.te && (_.Bd(a.te), _.Bd(a.Hf), _.Bd(a.ue), a.te = null, a.Hf = null, a.ue = null);
            a.Nc = null;
            a.fb = -1;
            a.cc = -1
        };
        jn.prototype.L = function() {
            jn.R.L.call(this);
            nn(this)
        };
        var on;
        var pn = function(a, b, c) {
            Array.isArray(c) && (c = c.join(" "));
            var d = "aria-" + b;
            "" === c || void 0 == c ? (on || (c = {}, on = (c.atomic = !1, c.autocomplete = "none", c.dropeffect = "none", c.haspopup = !1, c.live = "off", c.multiline = !1, c.multiselectable = !1, c.orientation = "vertical", c.readonly = !1, c.relevant = "additions text", c.required = !1, c.sort = "none", c.busy = !1, c.disabled = !1, c.hidden = !1, c.invalid = "false", c)), c = on, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
        };
        var qn, rn, sn, tn, vn, xn;
        qn = function(a) {
            return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
        };
        rn = function(a) {
            return a.classList ? a.classList : qn(a).match(/\S+/g) || []
        };
        sn = function(a, b) {
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        };
        tn = function(a, b) {
            return a.classList ? a.classList.contains(b) : _.ta(rn(a), b)
        };
        _.un = function(a, b) {
            if (a.classList) a.classList.add(b);
            else if (!tn(a, b)) {
                var c = qn(a);
                sn(a, c + (0 < c.length ? " " + b : b))
            }
        };
        vn = function(a, b) {
            if (a.classList) Array.prototype.forEach.call(b, function(e) {
                _.un(a, e)
            });
            else {
                var c = {};
                Array.prototype.forEach.call(rn(a), function(e) {
                    c[e] = !0
                });
                Array.prototype.forEach.call(b, function(e) {
                    c[e] = !0
                });
                b = "";
                for (var d in c) b += 0 < b.length ? " " + d : d;
                sn(a, b)
            }
        };
        _.wn = function(a, b) {
            a.classList ? a.classList.remove(b) : tn(a, b) && sn(a, Array.prototype.filter.call(rn(a), function(c) {
                return c != b
            }).join(" "))
        };
        xn = function(a, b) {
            a.classList ? Array.prototype.forEach.call(b, function(c) {
                _.wn(a, c)
            }) : sn(a, Array.prototype.filter.call(rn(a), function(c) {
                return !_.ta(b, c)
            }).join(" "))
        };
        var yn = function() {},
            zn;
        Xi(yn);
        var An = {
            button: "pressed",
            checkbox: "checked",
            menuitem: "selected",
            menuitemcheckbox: "checked",
            menuitemradio: "checked",
            radio: "checked",
            tab: "selected",
            treeitem: "selected"
        };
        _.k = yn.prototype;
        _.k.ie = function() {};
        _.k.T = function(a) {
            return a.h.T("DIV", Bn(this, a).join(" "), a.Ba())
        };
        _.k.Pe = function() {
            return !0
        };
        _.k.xc = function(a, b) {
            b.id && Mm(a, b.id);
            b && b.firstChild ? Cn(a, b.firstChild.nextSibling ? _.wa(b.childNodes) : b.firstChild) : a.yc = null;
            var c = 0,
                d = this.lc(),
                e = this.lc(),
                f = !1,
                g = !1,
                h = _.wa(rn(b));
            h.forEach(function(l) {
                f || l != d ? g || l != e ? c |= Dn(this, l) : g = !0 : (f = !0, e == d && (g = !0));
                1 == Dn(this, l) && b.hasAttribute("tabindex") && Nj(b) && Oj(b, !1)
            }, this);
            a.za = c;
            f || (h.push(d), e == d && (g = !0));
            g || h.push(e);
            (a = a.sf) && h.push.apply(h, a);
            f && g && !a || sn(b, h.join(" "));
            return b
        };
        _.k.Ch = function(a) {
            null == a.ma && (a.ma = Hk(a.tb ? a.l : a.h.V.body));
            a.ma && this.Re(a.B(), !0);
            a.isEnabled() && this.hd(a, a.isVisible())
        };
        var En = function(a, b) {
            if (a = a.ie()) {
                var c = b.getAttribute("role") || null;
                a != c && (a ? b.setAttribute("role", a) : b.removeAttribute("role"))
            }
        };
        _.k = yn.prototype;
        _.k.Od = function(a, b) {
            var c = !b;
            b = _.C ? a.getElementsByTagName("*") : null;
            if (_.Lh) {
                if (c = c ? "none" : "", a.style && (a.style[_.Lh] = c), b) {
                    a = 0;
                    for (var d; d = b[a]; a++) d.style && (d.style[_.Lh] = c)
                }
            } else if (_.C && (c = c ? "on" : "", a.setAttribute("unselectable", c), b))
                for (a = 0; d = b[a]; a++) d.setAttribute("unselectable", c)
        };
        _.k.Re = function(a, b) {
            var c = this.lc() + "-SIsrTd";
            (a = a.B ? a.B() : a) && (b ? vn : xn)(a, [c])
        };
        _.k.Qe = function(a) {
            var b;
            return a.Ya & 32 && (b = a.B()) ? b.hasAttribute("tabindex") && Nj(b) : !1
        };
        _.k.hd = function(a, b) {
            var c;
            if (a.Ya & 32 && (c = a.B())) {
                if (!b && a.za & 32) {
                    try {
                        c.blur()
                    } catch (d) {}
                    a.za & 32 && a.nh(null)
                }(c.hasAttribute("tabindex") && Nj(c)) != b && Oj(c, b)
            }
        };
        _.k.Y = function(a, b) {
            _.R(a, b);
            a && pn(a, "hidden", !b)
        };
        _.k.ld = function(a, b, c) {
            var d = a.B();
            if (d) {
                var e = Fn(this, b);
                e && (a = a.B ? a.B() : a) && (c ? vn : xn)(a, [e]);
                this.Gb(d, b, c)
            }
        };
        _.k.Gb = function(a, b, c) {
            zn || (zn = {
                1: "disabled",
                8: "selected",
                16: "checked",
                64: "expanded"
            });
            b = zn[b];
            var d = a.getAttribute("role") || null;
            d && (d = An[d] || b, b = "checked" == b || "selected" == b ? d : b);
            b && pn(a, b, c)
        };
        _.k.Eg = function(a, b) {
            if (a && (_.Zc(a), b))
                if ("string" === typeof b) _.ad(a, b);
                else {
                    var c = function(d) {
                        if (d) {
                            var e = _.Oc(a);
                            a.appendChild("string" === typeof d ? e.createTextNode(d) : d)
                        }
                    };
                    Array.isArray(b) ? b.forEach(c) : !_.da(b) || "nodeType" in b ? c(b) : _.wa(b).forEach(c)
                }
        };
        _.k.lc = function() {
            return "VIpgJd-bMcfAe"
        };
        var Bn = function(a, b) {
                var c = a.lc(),
                    d = [c],
                    e = a.lc();
                e != c && d.push(e);
                c = b.za;
                for (e = []; c;) {
                    var f = c & -c;
                    e.push(Fn(a, f));
                    c &= ~f
                }
                d.push.apply(d, e);
                (a = b.sf) && d.push.apply(d, a);
                return d
            },
            Fn = function(a, b) {
                a.h || Gn(a);
                return a.h[b]
            },
            Dn = function(a, b) {
                if (!a.j) {
                    a.h || Gn(a);
                    var c = a.h,
                        d = {},
                        e;
                    for (e in c) d[c[e]] = e;
                    a.j = d
                }
                a = parseInt(a.j[b], 10);
                return isNaN(a) ? 0 : a
            },
            Gn = function(a) {
                var b = a.lc();
                a.h = {
                    1: b + "-OWB6Me",
                    2: b + "-ZmdkE",
                    4: b + "-auswjd",
                    8: b + "-gk6SMd",
                    16: b + "-barxie",
                    32: b + "-XpnDCe",
                    64: b + "-FNFY6c"
                }
            };
        var Hn = function() {};
        _.z(Hn, yn);
        Xi(Hn);
        _.k = Hn.prototype;
        _.k.ie = function() {
            return "button"
        };
        _.k.Gb = function(a, b, c) {
            switch (b) {
                case 8:
                case 16:
                    pn(a, "pressed", c);
                    break;
                default:
                case 64:
                case 1:
                    Hn.R.Gb.call(this, a, b, c)
            }
        };
        _.k.T = function(a) {
            var b = Hn.R.T.call(this, a);
            this.mg(b, a.Oa());
            var c = a.Ga();
            c && this.ob(b, c);
            a.Ya & 16 && this.Gb(b, 16, !!(a.za & 16));
            return b
        };
        _.k.xc = function(a, b) {
            b = Hn.R.xc.call(this, a, b);
            var c = this.Ga(b);
            a.Za = c;
            a.U = this.Oa(b);
            a.Ya & 16 && this.Gb(b, 16, !!(a.za & 16));
            return b
        };
        _.k.Ga = function() {};
        _.k.ob = function() {};
        _.k.Oa = function(a) {
            return a.title
        };
        _.k.mg = function(a, b) {
            a && (b ? a.title = b : a.removeAttribute("title"))
        };
        _.k.lc = function() {
            return "VIpgJd-LgbsSe"
        };
        var In = {
            Xe: "mousedown",
            Ye: "mouseup",
            Ig: "mousecancel",
            xl: "mousemove",
            zl: "mouseover",
            yl: "mouseout",
            vl: "mouseenter",
            wl: "mouseleave"
        };
        var Jn = function(a, b) {
                if (!a) throw Error("wa`" + a);
                if ("function" !== typeof b) throw Error("xa`" + b);
            },
            Kn = {};
        var V = function(a, b, c) {
            _.M.call(this, c);
            if (!b) {
                for (b = this.constructor; b;) {
                    var d = _.za(b);
                    if (d = Kn[d]) break;
                    b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor
                }
                b = d ? "function" === typeof d.mc ? d.mc() : new d : null
            }
            this.j = b;
            this.yc = void 0 !== a ? a : null
        };
        _.z(V, _.M);
        _.k = V.prototype;
        _.k.yc = null;
        _.k.za = 0;
        _.k.Ya = 39;
        _.k.ef = 255;
        _.k.Hb = !0;
        _.k.sf = null;
        _.k.Bf = !0;
        _.k.Ud = !1;
        var Mn = function(a) {
            a.tb && 0 != a.Bf && Ln(a, !1);
            a.Bf = !1
        };
        V.prototype.T = function() {
            var a = this.j.T(this);
            this.l = a;
            En(this.j, a);
            this.Ud || this.j.Od(a, !1);
            this.isVisible() || this.j.Y(a, !1)
        };
        V.prototype.Dg = function(a) {
            return this.j.Pe(a)
        };
        V.prototype.Aa = function(a) {
            this.l = a = this.j.xc(this, a);
            En(this.j, a);
            this.Ud || this.j.Od(a, !1);
            this.Hb = "none" != a.style.display
        };
        V.prototype.ka = function() {
            V.R.ka.call(this);
            var a = this.j,
                b = this.l;
            this.isVisible() || pn(b, "hidden", !this.isVisible());
            this.isEnabled() || a.Gb(b, 1, !this.isEnabled());
            this.Ya & 8 && a.Gb(b, 8, !!(this.za & 8));
            this.Ya & 16 && a.Gb(b, 16, !!(this.za & 16));
            this.Ya & 64 && a.Gb(b, 64, !!(this.za & 64));
            this.j.Ch(this);
            this.Ya & -2 && (this.Bf && Ln(this, !0), this.Ya & 32 && (a = this.B())) && (b = this.A || (this.A = new jn), b.attach(a), Om(this).J(b, "key", this.sj).J(a, "focus", this.ni).J(a, "blur", this.nh))
        };
        var Ln = function(a, b) {
            var c = Om(a),
                d = a.B();
            b ? (c.J(d, In.Xe, a.Af).J(d, [In.Ye, In.Ig], a.Cf).J(d, "mouseover", a.na).J(d, "mouseout", a.ta), a.O != _.ub && c.J(d, "contextmenu", a.O), _.C && !a.G && (a.G = new Nn(a), _.Pi(a, _.pb(_.ca, a.G)))) : (c.Fb(d, In.Xe, a.Af).Fb(d, [In.Ye, In.Ig], a.Cf).Fb(d, "mouseover", a.na).Fb(d, "mouseout", a.ta), a.O != _.ub && c.Fb(d, "contextmenu", a.O), _.C && (_.ca(a.G), a.G = null))
        };
        V.prototype.ia = function() {
            V.R.ia.call(this);
            this.A && nn(this.A);
            this.isVisible() && this.isEnabled() && this.j.hd(this, !1)
        };
        V.prototype.L = function() {
            V.R.L.call(this);
            this.A && (this.A.P(), delete this.A);
            delete this.j;
            this.G = this.sf = this.yc = null
        };
        V.prototype.Ba = function() {
            return this.yc
        };
        V.prototype.s = function(a) {
            this.j.Eg(this.B(), a);
            this.yc = a
        };
        var Cn = function(a, b) {
            a.yc = b
        };
        _.k = V.prototype;
        _.k.ai = function(a) {
            this.s(a)
        };
        _.k.isVisible = function() {
            return this.Hb
        };
        _.k.Y = function(a, b) {
            if (b || this.Hb != a && this.dispatchEvent(a ? "show" : "hide"))(b = this.B()) && this.j.Y(b, a), this.isEnabled() && this.j.hd(this, a), this.Hb = a
        };
        _.k.isEnabled = function() {
            return !(this.za & 1)
        };
        _.k.mb = function(a) {
            var b = this.C;
            b && "function" == typeof b.isEnabled && !b.isEnabled() || !On(this, 1, !a) || (a || (Pn(this, !1), Qn(this, !1)), this.isVisible() && this.j.hd(this, a), Rn(this, 1, !a, !0))
        };
        var Qn = function(a, b) {
            On(a, 2, b) && Rn(a, 2, b)
        };
        V.prototype.isActive = function() {
            return !!(this.za & 4)
        };
        var Pn = function(a, b) {
                On(a, 4, b) && Rn(a, 4, b)
            },
            Rn = function(a, b, c, d) {
                d || 1 != b ? a.Ya & b && c != !!(a.za & b) && (a.j.ld(a, b, c), a.za = c ? a.za | b : a.za & ~b) : a.mb(!c)
            },
            Sn = function(a) {
                if (a.tb && a.za & 32) throw Error("qa");
                a.za & 32 && Rn(a, 32, !1);
                a.Ya &= -33
            },
            Tn = function(a, b) {
                return !!(a.ef & b) && !!(a.Ya & b)
            },
            Un = function(a) {
                a.ef &= -256
            },
            On = function(a, b, c) {
                return !!(a.Ya & b) && !!(a.za & b) != c && (!(0 & b) || a.dispatchEvent(Lm(b, c))) && !a.pb()
            };
        V.prototype.na = function(a) {
            !Vn(a, this.B()) && this.dispatchEvent("enter") && this.isEnabled() && Tn(this, 2) && Qn(this, !0)
        };
        V.prototype.ta = function(a) {
            !Vn(a, this.B()) && this.dispatchEvent("leave") && (Tn(this, 4) && Pn(this, !1), Tn(this, 2) && Qn(this, !1))
        };
        V.prototype.O = _.ub;
        var Vn = function(a, b) {
            return !!a.relatedTarget && _.$c(b, a.relatedTarget)
        };
        _.k = V.prototype;
        _.k.Af = function(a) {
            this.isEnabled() && (Tn(this, 2) && Qn(this, !0), 0 != a.h.button || _.$b && a.ctrlKey || (Tn(this, 4) && Pn(this, !0), this.j && this.j.Qe(this) && this.B().focus()));
            this.Ud || 0 != a.h.button || _.$b && a.ctrlKey || a.preventDefault()
        };
        _.k.Cf = function(a) {
            this.isEnabled() && (Tn(this, 2) && Qn(this, !0), this.isActive() && this.Ee(a) && Tn(this, 4) && Pn(this, !1))
        };
        _.k.Ee = function(a) {
            if (Tn(this, 16)) {
                var b = !(this.za & 16);
                On(this, 16, b) && Rn(this, 16, b)
            }
            Tn(this, 8) && On(this, 8, !0) && Rn(this, 8, !0);
            Tn(this, 64) && (b = !(this.za & 64), On(this, 64, b) && Rn(this, 64, b));
            b = new _.dd("action", this);
            a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.l = a.l);
            return this.dispatchEvent(b)
        };
        _.k.ni = function() {
            Tn(this, 32) && On(this, 32, !0) && Rn(this, 32, !0)
        };
        _.k.nh = function() {
            Tn(this, 4) && Pn(this, !1);
            Tn(this, 32) && On(this, 32, !1) && Rn(this, 32, !1)
        };
        _.k.sj = function(a) {
            return this.isVisible() && this.isEnabled() && this.zf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
        };
        _.k.zf = function(a) {
            return 13 == a.keyCode && this.Ee(a)
        };
        if ("function" !== typeof V) throw Error("ya`" + V);
        if ("function" !== typeof yn) throw Error("za`" + yn);
        var Wn = _.za(V);
        Kn[Wn] = yn;
        Jn("VIpgJd-bMcfAe", function() {
            return new V(null)
        });
        var Nn = function(a) {
            _.A.call(this);
            this.j = a;
            this.h = !1;
            this.l = new _.F(this);
            _.Pi(this, _.pb(_.ca, this.l));
            a = this.j.l;
            this.l.J(a, In.Xe, this.s).J(a, In.Ye, this.A).J(a, "click", this.o)
        };
        _.z(Nn, _.A);
        var Xn = !_.C || 9 <= Number(_.oc);
        Nn.prototype.s = function() {
            this.h = !1
        };
        Nn.prototype.A = function() {
            this.h = !0
        };
        var Yn = function(a, b) {
            if (!Xn) return a.button = 0, a.type = b, a;
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
            return c
        };
        Nn.prototype.o = function(a) {
            if (this.h) this.h = !1;
            else {
                var b = a.h,
                    c = b.button,
                    d = b.type,
                    e = Yn(b, "mousedown");
                this.j.Af(new _.gd(e, a.currentTarget));
                e = Yn(b, "mouseup");
                this.j.Cf(new _.gd(e, a.currentTarget));
                Xn || (b.button = c, b.type = d)
            }
        };
        Nn.prototype.L = function() {
            this.j = null;
            Nn.R.L.call(this)
        };
        var Zn = function() {};
        _.z(Zn, Hn);
        Xi(Zn);
        _.k = Zn.prototype;
        _.k.ie = function() {};
        _.k.T = function(a) {
            Mn(a);
            Un(a);
            Sn(a);
            var b = a.h,
                c = b.T,
                d = {
                    "class": Bn(this, a).join(" "),
                    disabled: !a.isEnabled(),
                    title: a.Oa() || "",
                    value: a.Ga() || ""
                };
            a = (a = a.Ba()) ? ("string" === typeof a ? a : Array.isArray(a) ? a.map(Rj).join("") : Qj(a)).replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") : "";
            return c.call(b, "BUTTON", d, a || "")
        };
        _.k.Pe = function(a) {
            return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
        };
        _.k.xc = function(a, b) {
            Mn(a);
            Un(a);
            Sn(a);
            if (b.disabled) {
                var c = Fn(this, 1);
                _.un(b, c)
            }
            return Zn.R.xc.call(this, a, b)
        };
        _.k.Ch = function(a) {
            Om(a).J(a.B(), "click", a.Ee)
        };
        _.k.Od = function() {};
        _.k.Re = function() {};
        _.k.Qe = function(a) {
            return a.isEnabled()
        };
        _.k.hd = function() {};
        _.k.ld = function(a, b, c) {
            Zn.R.ld.call(this, a, b, c);
            (a = a.B()) && 1 == b && (a.disabled = c)
        };
        _.k.Ga = function(a) {
            return a.value
        };
        _.k.ob = function(a, b) {
            a && (a.value = b)
        };
        _.k.Gb = function() {};
        var $n = function(a, b, c) {
            V.call(this, a, b || Zn.mc(), c)
        };
        _.z($n, V);
        _.k = $n.prototype;
        _.k.Ga = function() {
            return this.Za
        };
        _.k.ob = function(a) {
            this.Za = a;
            this.j.ob(this.B(), a)
        };
        _.k.Oa = function() {
            return this.U
        };
        _.k.mg = function(a) {
            this.U = a;
            this.j.mg(this.B(), a)
        };
        _.k.L = function() {
            $n.R.L.call(this);
            delete this.Za;
            delete this.U
        };
        _.k.ka = function() {
            $n.R.ka.call(this);
            if (this.Ya & 32) {
                var a = this.B();
                a && Om(this).J(a, "keyup", this.zf)
            }
        };
        _.k.zf = function(a) {
            return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Ee(a) : 32 == a.keyCode
        };
        Jn("VIpgJd-LgbsSe", function() {
            return new $n(null)
        });
        var ao = function(a, b) {
            _.M.call(this);
            this.K = a || "";
            this.o = null;
            this.G = [];
            this.j = null;
            this.O = b || "GET";
            this.s = this.A = null
        };
        _.x(ao, _.M);
        ao.prototype.T = function() {
            var a = {
                Oi: this.K,
                method: this.O,
                dj: this.G,
                dir: _.kf.test(_.S) ? "rtl" : "ltr"
            };
            this.Aa(_.Bi(Hm, a))
        };
        ao.prototype.Aa = function(a) {
            this.l = a;
            this.j = Nm(this, "activity-form");
            a = Nm(this, "activity-submit");
            this.s = new $n("");
            Qm(this.s, a);
            a = Nm(this, "activity-cancel");
            this.o = new $n("");
            Qm(this.o, a)
        };
        ao.prototype.ka = function() {
            var a = Om(this);
            a.J(this.s, "action", (0, _.y)(this.U, this));
            a.J(this.o, "action", this.dispatchEvent.bind(this, "cancelled"))
        };
        ao.prototype.U = function() {
            var a = !0;
            this.A && (a = this.A());
            a && (a = new Um, _.D(a, "success", function() {
                this.dispatchEvent("successful")
            }), _.D(a, "error", function() {
                this.dispatchEvent("failed")
            }), Zm(a, this.j));
            this.dispatchEvent("submitted")
        };
        var bo = function(a, b) {
                for (var c in b) a.j[c] && (a.j[c].value = b[c])
            },
            co = function(a, b) {
                return a.j[b] ? a.j[b].value : ""
            };
        ao.prototype.L = function() {
            this.s = this.j = this.o = null;
            _.M.prototype.L.call(this)
        };
        var eo = function(a, b) {
            a.A = b
        };
        var fo = function() {};
        _.z(fo, yn);
        Xi(fo);
        _.k = fo.prototype;
        _.k.ie = function() {};
        _.k.xc = function(a, b) {
            Mn(a);
            Un(a);
            Sn(a);
            fo.R.xc.call(this, a, b);
            a.s(b.value);
            return b
        };
        _.k.T = function(a) {
            Mn(a);
            Un(a);
            Sn(a);
            return a.h.T("TEXTAREA", {
                "class": Bn(this, a).join(" "),
                disabled: !a.isEnabled()
            }, a.Ba() || "")
        };
        _.k.Pe = function(a) {
            return "TEXTAREA" == a.tagName
        };
        _.k.Re = function() {};
        _.k.Qe = function(a) {
            return a.isEnabled()
        };
        _.k.hd = function() {};
        _.k.ld = function(a, b, c) {
            fo.R.ld.call(this, a, b, c);
            (a = a.B()) && 1 == b && (a.disabled = c)
        };
        _.k.Gb = function() {};
        _.k.Eg = function(a, b) {
            a && (a.value = b)
        };
        _.k.lc = function() {
            return "VIpgJd-B7I4Od"
        };
        var go = function(a, b, c) {
            V.call(this, a, b || fo.mc(), c);
            Mn(this);
            this.Ud = !0;
            (b = this.B()) && this.j.Od(b, !0);
            this.Uc = "" != a;
            a || (this.yc = "")
        };
        _.z(go, V);
        var ho = !(_.C && !(11 <= Number(_.oc)));
        _.k = go.prototype;
        _.k.Xc = !1;
        _.k.pe = !1;
        _.k.Uc = !1;
        _.k.ac = 0;
        _.k.Jh = 0;
        _.k.Sf = 0;
        _.k.wh = !1;
        _.k.Ae = !1;
        _.k.gg = !1;
        _.k.fg = !1;
        _.k.fd = "";
        var io = function(a) {
                return a.o.top + a.o.bottom + a.Z.top + a.Z.bottom
            },
            jo = function(a) {
                var b = a.Sf,
                    c = a.B();
                b && c && a.Ae && (b -= io(a));
                return b
            },
            lo = function(a) {
                a.Sf = 50;
                ko(a)
            },
            mo = function(a) {
                a.Jh = 50;
                ko(a)
            };
        go.prototype.ob = function(a) {
            this.s(String(a))
        };
        go.prototype.Ga = function() {
            return this.B().value != this.fd || no(this) || this.Uc ? this.B().value : ""
        };
        go.prototype.s = function(a) {
            go.R.s.call(this, a);
            this.Uc = "" != a;
            ko(this)
        };
        go.prototype.mb = function(a) {
            go.R.mb.call(this, a);
            this.B().disabled = !a
        };
        var ko = function(a) {
                a.B() && a.K()
            },
            no = function(a) {
                return "placeholder" in a.B()
            },
            oo = function(a) {
                a.fd && (no(a) ? a.B().placeholder = a.fd : !a.B() || a.Uc || a.pe || (_.un(a.B(), "B7I4Od-LwH6nd-YPqjbf"), a.B().value = a.fd))
            };
        go.prototype.ka = function() {
            go.R.ka.call(this);
            var a = this.B();
            _.J(a, {
                overflowY: "hidden",
                overflowX: "auto",
                boxSizing: "border-box",
                MsBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box"
            });
            this.o = Lk(a);
            this.Z = Ok(a);
            Om(this).J(a, "scroll", this.K).J(a, "focus", this.K).J(a, "keyup", this.K).J(a, "mouseup", this.Ab).J(a, "blur", this.La);
            oo(this);
            ko(this)
        };
        var po = function(a) {
                if (!a.wh) {
                    var b = a.B().cloneNode(!1);
                    _.J(b, {
                        position: "absolute",
                        height: "auto",
                        top: "-9999px",
                        margin: "0",
                        padding: "1px",
                        border: "1px solid #000",
                        overflow: "hidden"
                    });
                    a.h.V.body.appendChild(b);
                    var c = b.scrollHeight;
                    b.style.padding = "10px";
                    var d = b.scrollHeight;
                    a.gg = d > c;
                    b.style.borderWidth = "10px";
                    a.fg = b.scrollHeight > d;
                    b.style.height = "100px";
                    100 != b.offsetHeight && (a.Ae = !0);
                    _.Ij(b);
                    a.wh = !0
                }
                b = a.B();
                isNaN(a.o.top) && (a.o = Lk(b), a.Z = Ok(b));
                c = a.B().scrollHeight;
                var e = a.B();
                d = e.offsetHeight - e.clientHeight;
                if (!a.gg) {
                    var f = a.o;
                    d -= f.top + f.bottom
                }
                a.fg || (e = Ok(e), d -= e.top + e.bottom);
                c += 0 < d ? d : 0;
                a.Ae ? c -= io(a) : (a.gg || (d = a.o, c += d.top + d.bottom), a.fg || (a = Ok(b), c += a.top + a.bottom));
                return c
            },
            qo = function(a, b) {
                a.ac != b && (a.ac = b, a.B().style.height = b + "px")
            },
            ro = function(a) {
                var b = a.B();
                b.style.height = "auto";
                var c = b.value.match(/\n/g) || [];
                b.rows = c.length + 1;
                a.ac = 0
            };
        go.prototype.La = function() {
            no(this) || (this.pe = !1, "" == this.B().value && (this.Uc = !1, oo(this)))
        };
        go.prototype.K = function(a) {
            if (!this.Xc) {
                var b = this.B();
                !no(this) && a && "focus" == a.type && (b.value == this.fd && this.fd && !this.pe && (_.wn(b, "B7I4Od-LwH6nd-YPqjbf"), b.value = ""), this.pe = !0, this.Uc = "" != b.value);
                var c = !1;
                this.Xc = !0;
                a = this.ac;
                if (b.scrollHeight) {
                    var d = !1,
                        e = !1,
                        f = po(this),
                        g = b.offsetHeight,
                        h = jo(this);
                    var l = this.Jh;
                    var m = this.B();
                    l && m && this.Ae && (l -= io(this));
                    h && f < h ? (qo(this, h), d = !0) : l && f > l ? (qo(this, l), b.style.overflowY = "", e = !0) : g != f ? qo(this, f) : this.ac || (this.ac = f);
                    d || e || !ho || (c = !0)
                } else ro(this);
                this.Xc = !1;
                c && (b = this.B(), this.Xc || (this.Xc = !0, (e = b.scrollHeight) ? (f = po(this), c = jo(this), c && f <= c || (d = this.o, b.style.paddingTop = d.top + 1 + "px", po(this) == f && (b.style.paddingTop = d.top + e + "px", b.scrollTop = 0, e = po(this) - e, e >= c ? qo(this, e) : qo(this, c)), b.style.paddingTop = d.top + "px")) : ro(this), this.Xc = !1));
                a != this.ac && this.dispatchEvent("resize")
            }
        };
        go.prototype.Ab = function() {
            var a = this.B(),
                b = a.offsetHeight;
            a.filters && a.filters.length && (a = a.filters.item("DXImageTransform.Microsoft.DropShadow")) && (b -= a.offX);
            b != this.ac && (this.ac = this.Sf = b)
        };
        var so = function(a, b) {
            Ki.call(this, a);
            this.G = !1;
            this.A = b || {};
            this.o = null
        };
        _.x(so, Ki);
        _.k = so.prototype;
        _.k.Ce = function(a) {
            Ki.prototype.Ce.call(this, a);
            Om(this).J(this.o.B(), "keydown", (0, _.y)(this.Oa().Id, this.Oa(), !1));
            this.G = this.Oa().pd;
            this.Nd()
        };
        _.k.Nd = function() {
            Ki.prototype.Nd.call(this);
            this.o.s(this.Oa().U);
            var a = this.Oa().kb(),
                b = this.Oa().oa();
            a && b && (bo(this.j, {
                gtrans: this.Oa().U,
                text: this.Oa().Pd(),
                hl: _.S,
                langpair: a + "|" + b
            }), bo(this.j, this.A));
            this.dispatchEvent("ready");
            this.o.B().focus()
        };
        _.k.dd = function() {
            this.Oa().Id(this.G)
        };
        _.k.T = function() {
            this.Aa(_.Bi(Im))
        };
        _.k.Aa = function(a) {
            this.l = a;
            a = Nm(this, "contribute-original-text");
            this.o = new go("");
            Qm(this.o, a);
            mo(this.o);
            lo(this.o);
            a = Nm(this, "activity-form-container");
            this.j = new ao(_.Al, "POST");
            this.j.G = ki(this.A);
            eo(this.j, (0, _.y)(function() {
                bo(this.j, {
                    utrans: (0, _.Rb)(this.o.Ga())
                });
                return co(this.j, "utrans") != co(this.j, "gtrans")
            }, this));
            this.j.Ca(a)
        };
        _.k.ka = function() {
            Ki.prototype.ka.call(this);
            var a = Om(this);
            a.J(this.j, "cancelled", (0, _.y)(function() {
                this.dispatchEvent("cancelled")
            }, this));
            a.J(this.j, "submitted", (0, _.y)(function() {
                var b = this.o.Ga();
                this.Oa().U = b && (0, _.Rb)(b);
                this.dispatchEvent("submitted");
                b = _.T.Gi;
                _.ad(this.Oa().Sc().B(), b)
            }, this))
        };
        _.k.L = function() {
            this.o && this.o.P();
            this.o = null;
            this.j && this.j.P();
            this.j = null;
            Ki.prototype.L.call(this)
        };
        var to = function(a) {
            _.E.call(this);
            this.ya = a;
            this.l = {};
            this.H = new _.F(this);
            this.j = null
        };
        _.x(to, _.E);
        to.prototype.attach = function() {};
        to.prototype.Fg = function() {};
        to.prototype.L = function() {
            this.H.P();
            this.H = null
        };
        var uo = function(a, b, c) {
            if (b = a.ya.j[b]) {
                c = c || "undefined" == typeof c;
                for (var d = 0; d < b.Xa.length; ++d) b.Xa[d] && a.zh(b.Xa[d], c)
            }
        };
        to.prototype.zh = function(a, b) {
            _.J(a, "backgroundColor", b ? "#E6ECF9" : "");
            _.J(a, "color", b ? "#000" : "")
        };
        var vo = function(a, b, c) {
            _.A.call(this);
            this.j = a;
            this.o = b || 0;
            this.l = c;
            this.h = (0, _.y)(this.oi, this)
        };
        _.z(vo, _.A);
        _.k = vo.prototype;
        _.k.md = 0;
        _.k.L = function() {
            vo.R.L.call(this);
            this.stop();
            delete this.j;
            delete this.l
        };
        _.k.start = function(a) {
            this.stop();
            this.md = _.Rf(this.h, void 0 !== a ? a : this.o)
        };
        _.k.stop = function() {
            this.isActive() && _.t.clearTimeout(this.md);
            this.md = 0
        };
        _.k.isActive = function() {
            return 0 != this.md
        };
        _.k.oi = function() {
            this.md = 0;
            this.j && this.j.call(this.l)
        };
        var li = {},
            wo = null,
            xo = function(a) {
                a = _.za(a);
                delete li[a];
                mi() && wo && wo.stop()
            },
            zo = function() {
                wo || (wo = new vo(function() {
                    yo()
                }, 20));
                var a = wo;
                a.isActive() || a.start()
            },
            yo = function() {
                var a = _.qb();
                _.qc(li, function(b) {
                    Ao(b, a)
                });
                mi() || zo()
            };
        var Bo = function() {
            _.E.call(this);
            this.h = 0;
            this.endTime = this.startTime = null
        };
        _.z(Bo, _.E);
        Bo.prototype.l = function() {
            this.j("begin")
        };
        Bo.prototype.xb = function() {
            this.j("end")
        };
        Bo.prototype.dd = function() {
            this.j("stop")
        };
        Bo.prototype.j = function(a) {
            this.dispatchEvent(a)
        };
        var Co = function(a, b, c, d) {
            Bo.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Aa");
            if (a.length != b.length) throw Error("Ba");
            this.o = a;
            this.I = b;
            this.duration = c;
            this.F = d;
            this.coords = [];
            this.progress = 0
        };
        _.z(Co, Bo);
        Co.prototype.play = function(a) {
            if (a || 0 == this.h) this.progress = 0, this.coords = this.o;
            else if (1 == this.h) return !1;
            xo(this);
            this.startTime = a = _.qb(); - 1 == this.h && (this.startTime -= this.duration * this.progress);
            this.endTime = this.startTime + this.duration;
            this.progress || this.l();
            this.j("play"); - 1 == this.h && this.j("resume");
            this.h = 1;
            var b = _.za(this);
            b in li || (li[b] = this);
            zo();
            Ao(this, a);
            return !0
        };
        Co.prototype.stop = function(a) {
            xo(this);
            this.h = 0;
            a && (this.progress = 1);
            Do(this, this.progress);
            this.dd();
            this.xb()
        };
        Co.prototype.kg = function(a) {
            this.progress = a;
            1 == this.h && (this.startTime = _.qb() - this.duration * this.progress, this.endTime = this.startTime + this.duration)
        };
        Co.prototype.L = function() {
            0 == this.h || this.stop(!1);
            this.j("destroy");
            Co.R.L.call(this)
        };
        var Ao = function(a, b) {
                b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
                a.progress = (b - a.startTime) / (a.endTime - a.startTime);
                1 < a.progress && (a.progress = 1);
                Do(a, a.progress);
                1 == a.progress ? (a.h = 0, xo(a), a.j("finish"), a.xb()) : 1 == a.h && a.C()
            },
            Do = function(a, b) {
                "function" === typeof a.F && (b = a.F(b));
                a.coords = Array(a.o.length);
                for (var c = 0; c < a.o.length; c++) a.coords[c] = (a.I[c] - a.o[c]) * b + a.o[c]
            };
        Co.prototype.C = function() {
            this.j("animate")
        };
        Co.prototype.j = function(a) {
            this.dispatchEvent(new Eo(a, this))
        };
        var Eo = function(a, b) {
            _.dd.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.state = b.h
        };
        _.z(Eo, _.dd);
        var Fo = function() {
            if (_.ac) {
                var a = /Windows NT ([0-9.]+)/;
                return (a = a.exec(_.Ba())) ? a[1] : "0"
            }
            return _.$b ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(_.Ba())) ? a[0].replace(/_/g, ".") : "10") : _.bc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(_.Ba())) ? a[1] : "") : _.cc || _.dc || _.ec ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(_.Ba())) ? a[1].replace(/_/g, ".") : "") : ""
        }();
        var Go = function(a) {
                return (a = a.exec(_.Ba())) ? a[1] : ""
            },
            Ho = function() {
                if (_.xg) return Go(/Firefox\/([0-9.]+)/);
                if (_.C || _.Vb || _.Ub) return _.lc;
                if (_.Bg) {
                    if (_.Fa() || _.u("Macintosh")) {
                        var a = Go(/CriOS\/([0-9.]+)/);
                        if (a) return a
                    }
                    return Go(/Chrome\/([0-9.]+)/)
                }
                if (_.Cg && !_.Fa()) return Go(/Version\/([0-9.]+)/);
                if (_.yg || _.zg) {
                    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(_.Ba())) return a[1] + "." + a[2]
                } else if (_.Ag) return (a = Go(/Android\s+([0-9.]+)/)) ? a : Go(/Version\/([0-9.]+)/);
                return ""
            }();
        var Io = function(a, b, c, d, e) {
            Co.call(this, b, c, d, e);
            this.element = a
        };
        _.z(Io, Co);
        Io.prototype.A = function() {};
        Io.prototype.C = function() {
            this.A();
            Io.R.C.call(this)
        };
        Io.prototype.xb = function() {
            this.A();
            Io.R.xb.call(this)
        };
        Io.prototype.l = function() {
            this.A();
            Io.R.l.call(this)
        };
        var Jo = function(a, b, c, d, e) {
            "number" === typeof b && (b = [b]);
            "number" === typeof c && (c = [c]);
            Io.call(this, a, b, c, d, e);
            if (1 != b.length || 1 != c.length) throw Error("Ca");
            this.s = -1
        };
        _.z(Jo, Io);
        var Ko = 1 / 1024;
        Jo.prototype.A = function() {
            var a = this.coords[0];
            if (Math.abs(a - this.s) >= Ko) {
                var b = this.element.style;
                "opacity" in b ? b.opacity = a : "MozOpacity" in b ? b.MozOpacity = a : "filter" in b && (b.filter = "" === a ? "" : "alpha(opacity=" + 100 * Number(a) + ")");
                this.s = a
            }
        };
        Jo.prototype.l = function() {
            this.s = -1;
            Jo.R.l.call(this)
        };
        Jo.prototype.xb = function() {
            this.s = -1;
            Jo.R.xb.call(this)
        };
        var Lo = function(a, b, c) {
            Jo.call(this, a, 1, 0, b, c)
        };
        _.z(Lo, Jo);
        Lo.prototype.l = function() {
            this.element.style.display = "";
            Lo.R.l.call(this)
        };
        Lo.prototype.xb = function() {
            this.element.style.display = "none";
            Lo.R.xb.call(this)
        };
        var Mo = function(a, b, c) {
            Jo.call(this, a, 0, 1, b, c)
        };
        _.z(Mo, Jo);
        Mo.prototype.l = function() {
            this.element.style.display = "";
            Mo.R.l.call(this)
        };
        var No = function() {
            _.M.call(this);
            this.j = null
        };
        _.x(No, _.M);
        No.prototype.T = function() {
            this.Aa(this.h.T("DIV", {
                "class": "status-message"
            }))
        };
        No.prototype.Aa = function(a) {
            this.l = a;
            a.style.display = "none"
        };
        var Po = function(a) {
                var b = c;
                var c = (0, _.y)(function() {
                    _.ad(this.B(), "");
                    b && b()
                }, a);
                c = (0, _.y)(a.o, a, 750, c);
                Oo(a, c)
            },
            Qo = function(a) {
                a.j && (a.j.stop(!0), a.j = null);
                _.ad(a.B(), "");
                a.Y(!1)
            },
            Oo = function(a, b) {
                a.j = new Mo(a.B(), 750);
                Om(a).oc(a.j, "begin", (0, _.y)(function() {
                    this.B().style.display = "block"
                }, a));
                Om(a).oc(a.j, "finish", (0, _.y)(function() {
                    this.j = null;
                    window.setTimeout(b, 2E3)
                }, a));
                a.j.play()
            };
        No.prototype.o = function(a, b) {
            this.isVisible() && (this.j = new Lo(this.B(), a), Om(this).oc(this.j, "finish", (0, _.y)(function() {
                b && b()
            }, this)), this.j.play())
        };
        No.prototype.Y = function(a) {
            this.B().style.display = a ? "block" : "none";
            this.B().style.opacity = a ? "1" : "0"
        };
        No.prototype.isVisible = function() {
            return "none" !== this.B().style.display && "0" !== this.B().style.opacity
        };
        var Ro = function(a, b) {
            _.E.call(this);
            this.s = new _.F(this);
            this.gd(a || null);
            b && (this.kd = b)
        };
        _.z(Ro, _.E);
        _.k = Ro.prototype;
        _.k.hb = null;
        _.k.pd = !0;
        _.k.Sg = null;
        _.k.zc = !1;
        _.k.Kf = -1;
        _.k.kd = "toggle_display";
        _.k.B = function() {
            return this.hb
        };
        _.k.gd = function(a) {
            if (this.zc) throw Error("Da");
            this.hb = a
        };
        _.k.Id = function(a) {
            if (this.zc) throw Error("Da");
            this.pd = a
        };
        _.k.isVisible = function() {
            return this.zc
        };
        _.k.Y = function(a) {
            this.Ma && this.Ma.stop();
            this.Ha && this.Ha.stop();
            if (a) {
                if (!this.zc && this.Se()) {
                    if (!this.hb) throw Error("Ea");
                    this.Qb();
                    a = _.Oc(this.hb);
                    if (this.pd)
                        if (this.s.J(a, "mousedown", this.Tf, !0), _.C) {
                            try {
                                var b = a.activeElement
                            } catch (d) {}
                            for (; b && "IFRAME" == b.nodeName;) {
                                try {
                                    var c = _.Kj(b)
                                } catch (d) {
                                    break
                                }
                                a = c;
                                b = a.activeElement
                            }
                            this.s.J(a, "mousedown", this.Tf, !0);
                            this.s.J(a, "deactivate", this.Oh)
                        } else this.s.J(a, "blur", this.Oh);
                    "toggle_display" == this.kd ? (this.hb.style.visibility = "visible", _.R(this.hb, !0)) : "move_offscreen" == this.kd && this.Qb();
                    this.zc = !0;
                    this.Kf = Date.now();
                    this.Ma ? (_.td(this.Ma, "end", this.Ph, !1, this), this.Ma.play()) : this.Ph()
                }
            } else So(this)
        };
        _.k.Qb = function() {};
        var So = function(a, b) {
            a.zc && a.dispatchEvent({
                type: "beforehide",
                target: b
            }) && (a.s && _.If(a.s), a.zc = !1, a.Ha ? (_.td(a.Ha, "end", _.pb(a.Vg, b), !1, a), a.Ha.play()) : a.Vg(b))
        };
        _.k = Ro.prototype;
        _.k.Vg = function(a) {
            "toggle_display" == this.kd ? this.Hj() : "move_offscreen" == this.kd && (this.hb.style.top = "-10000px");
            this.Vf(a)
        };
        _.k.Hj = function() {
            this.hb.style.visibility = "hidden";
            _.R(this.hb, !1)
        };
        _.k.Se = function() {
            return this.dispatchEvent("beforeshow")
        };
        _.k.Ph = function() {
            this.dispatchEvent("show")
        };
        _.k.Vf = function(a) {
            this.dispatchEvent({
                type: "hide",
                target: a
            })
        };
        _.k.Tf = function(a) {
            a = a.target;
            _.$c(this.hb, a) || To(this, a) || 150 > Date.now() - this.Kf || So(this, a)
        };
        _.k.Oh = function(a) {
            var b = _.Oc(this.hb);
            if ("undefined" != typeof document.activeElement) {
                if (a = b.activeElement, !a || _.$c(this.hb, a) || "BODY" == a.tagName || To(this, a)) return
            } else if (a.target != b) return;
            150 > Date.now() - this.Kf || So(this)
        };
        var To = function(a, b) {
            return _.Qb(a.Sg || [], function(c) {
                return b === c || _.$c(c, b)
            })
        };
        Ro.prototype.L = function() {
            Ro.R.L.call(this);
            this.s.P();
            _.ca(this.Ma);
            _.ca(this.Ha);
            delete this.hb;
            delete this.s;
            delete this.Sg
        };
        var Uo = function(a) {
            _.E.call(this);
            this.h = a;
            a = _.C ? "focusout" : "blur";
            this.j = _.D(this.h, _.C ? "focusin" : "focus", this, !_.C);
            this.l = _.D(this.h, a, this, !_.C)
        };
        _.z(Uo, _.E);
        Uo.prototype.handleEvent = function(a) {
            var b = new _.gd(a.h);
            b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
            this.dispatchEvent(b)
        };
        Uo.prototype.L = function() {
            Uo.R.L.call(this);
            _.Bd(this.j);
            _.Bd(this.l);
            delete this.h
        };
        var Vo = function() {};
        Vo.prototype.j = function() {};
        var Yo = function(a, b, c, d, e, f, g) {
                var h;
                if (h = c.offsetParent) {
                    var l = "HTML" == h.tagName || "BODY" == h.tagName;
                    if (!l || "static" != wk(h, "position")) {
                        var m = Ck(h);
                        if (!l) {
                            l = Hk(h);
                            var n;
                            if (n = l) {
                                n = _.Cg && 0 <= _.hj(Ho, 10);
                                var p;
                                if (p = _.fc) p = 0 <= _.hj(Fo, 10);
                                var r = _.Bg && 0 <= _.hj(Ho, 85);
                                n = _.Xb || n || p || r
                            }
                            l = n ? -h.scrollLeft : l && !_.Wb && "visible" != wk(h, "overflowX") ? h.scrollWidth - h.clientWidth - h.scrollLeft : h.scrollLeft;
                            m = wj(m, new N(l, h.scrollTop))
                        }
                    }
                }
                h = m || new N;
                m = Ck(a);
                l = Gk(a);
                m = new uk(m.x, m.y, l.width, l.height);
                if (l = Dk(a)) r = new uk(l.left,
                    l.top, l.right - l.left, l.bottom - l.top), l = Math.max(m.left, r.left), n = Math.min(m.left + m.width, r.left + r.width), l <= n && (p = Math.max(m.top, r.top), r = Math.min(m.top + m.height, r.top + r.height), p <= r && (m.left = l, m.top = p, m.width = n - l, m.height = r - p));
                l = _.Pc(a);
                p = _.Pc(c);
                l.V != p.V && (n = l.V.body, p = _.Ek(n, _.bd(p)), p = wj(p, Ck(n)), !_.C || 9 <= Number(_.oc) || _.Tc(l.V) || (p = wj(p, _.Ui(l.V))), m.left += p.x, m.top += p.y);
                a = Wo(a, b);
                b = m.left;
                a & 4 ? b += m.width : a & 2 && (b += m.width / 2);
                b = new N(b, m.top + (a & 1 ? m.height : 0));
                b = wj(b, h);
                e && (b.x += (a & 4 ? -1 : 1) * e.x,
                    b.y += (a & 1 ? -1 : 1) * e.y);
                var q;
                g && (q = Dk(c)) && (q.top -= h.y, q.right -= h.x, q.bottom -= h.y, q.left -= h.x);
                return Xo(b, c, d, f, q, g)
            },
            Xo = function(a, b, c, d, e, f) {
                a = Qi(a);
                var g = Wo(b, c);
                c = Gk(b);
                var h = new _.Ic(c.width, c.height);
                a = Qi(a);
                h = new _.Ic(h.width, h.height);
                var l = 0;
                if (d || 0 != g) g & 4 ? a.x -= h.width + (d ? d.right : 0) : g & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), g & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
                f && (e ? (d = h, g = 0, 65 == (f & 65) && (a.x < e.left || a.x >= e.right) && (f &= -2), 132 == (f & 132) && (a.y < e.top || a.y >= e.bottom) && (f &= -5), a.x < e.left &&
                    f & 1 && (a.x = e.left, g |= 1), f & 16 && (l = a.x, a.x < e.left && (a.x = e.left, g |= 4), a.x + d.width > e.right && (d.width = Math.min(e.right - a.x, l + d.width - e.left), d.width = Math.max(d.width, 0), g |= 4)), a.x + d.width > e.right && f & 1 && (a.x = Math.max(e.right - d.width, e.left), g |= 1), f & 2 && (g |= (a.x < e.left ? 16 : 0) | (a.x + d.width > e.right ? 32 : 0)), a.y < e.top && f & 4 && (a.y = e.top, g |= 2), f & 32 && (l = a.y, a.y < e.top && (a.y = e.top, g |= 8), a.y + d.height > e.bottom && (d.height = Math.min(e.bottom - a.y, l + d.height - e.top), d.height = Math.max(d.height, 0), g |= 8)), a.y + d.height > e.bottom &&
                    f & 4 && (a.y = Math.max(e.bottom - d.height, e.top), g |= 2), f & 8 && (g |= (a.y < e.top ? 64 : 0) | (a.y + d.height > e.bottom ? 128 : 0)), e = g) : e = 256, l = e);
                e = new uk(0, 0, 0, 0);
                e.left = a.x;
                e.top = a.y;
                e.width = h.width;
                e.height = h.height;
                a = l;
                if (a & 496) return a;
                _.yk(b, new N(e.left, e.top));
                h = new _.Ic(e.width, e.height);
                _.Jc(c, h) || _.Ik(b, h, "border-box");
                return a
            },
            Wo = function(a, b) {
                return (b & 8 && Hk(a) ? b ^ 4 : b) & -9
            };
        var Zo = function(a, b, c) {
            this.element = a;
            this.l = b;
            this.o = c
        };
        _.z(Zo, Vo);
        Zo.prototype.j = function(a, b, c) {
            Yo(this.element, this.l, a, b, void 0, c, this.o)
        };
        var $o = function(a, b) {
            this.h = a instanceof N ? a : new N(a, b)
        };
        _.z($o, Vo);
        $o.prototype.j = function(a, b, c) {
            Yo(zk(a), 0, a, b, this.h, c, null)
        };
        var ap = function(a, b) {
            this.A = b || void 0;
            Ro.call(this, a)
        };
        _.z(ap, Ro);
        ap.prototype.Qb = function() {
            if (this.A) {
                var a = !this.isVisible() && "move_offscreen" != this.kd,
                    b = this.B();
                a && (b.style.visibility = "hidden", _.R(b, !0));
                this.A.j(b, 8, this.Ij);
                a && _.R(b, !1)
            }
        };
        var W = function(a, b, c) {
            this.Z = c || (a ? _.Pc(_.Q(a)) : _.Pc());
            ap.call(this, this.Z.T("DIV", {
                style: "position:absolute;display:none;"
            }));
            this.rd = new N(1, 1);
            this.C = new _.af;
            this.I = null;
            a && this.attach(a);
            null != b && this.zb(b)
        };
        _.z(W, ap);
        var bp = [];
        _.k = W.prototype;
        _.k.Ra = null;
        _.k.className = "VIpgJd-suEOdc";
        _.k.bi = 500;
        _.k.yh = 0;
        _.k.attach = function(a) {
            a = _.Q(a);
            this.C.add(a);
            _.D(a, "mouseover", this.Te, !1, this);
            _.D(a, "mouseout", this.Tc, !1, this);
            _.D(a, "mousemove", this.eh, !1, this);
            _.D(a, "focus", this.de, !1, this);
            _.D(a, "blur", this.Tc, !1, this)
        };
        var dp = function(a, b) {
                if (b) b = _.Q(b), cp(a, b), a.C.remove(b);
                else {
                    for (var c = a.C.rb(), d = 0; b = c[d]; d++) cp(a, b);
                    a = a.C;
                    b = a.h;
                    b.j = {};
                    b.h.length = 0;
                    b.size = 0;
                    b.l = 0;
                    a.size = 0
                }
            },
            cp = function(a, b) {
                _.Ad(b, "mouseover", a.Te, !1, a);
                _.Ad(b, "mouseout", a.Tc, !1, a);
                _.Ad(b, "mousemove", a.eh, !1, a);
                _.Ad(b, "focus", a.de, !1, a);
                _.Ad(b, "blur", a.Tc, !1, a)
            };
        W.prototype.zb = function(a) {
            _.ad(this.B(), a)
        };
        W.prototype.gd = function(a) {
            var b = this.B();
            b && _.Ij(b);
            W.R.gd.call(this, a);
            a ? (b = this.Z.V.body, b.insertBefore(a, b.lastChild), _.ca(this.I), this.I = new Uo(this.B()), _.Pi(this, _.pb(_.ca, this.I)), _.D(this.I, "focusin", this.O, void 0, this), _.D(this.I, "focusout", this.Rb, void 0, this)) : (_.ca(this.I), this.I = null)
        };
        W.prototype.Pd = function() {
            return Qj(this.B())
        };
        var ep = function(a) {
            return a.X ? a.isVisible() ? 4 : 1 : a.ta ? 3 : a.isVisible() ? 2 : 0
        };
        W.prototype.Se = function() {
            if (!Ro.prototype.Se.call(this)) return !1;
            if (this.h)
                for (var a, b = 0; a = bp[b]; b++) _.$c(a.B(), this.h) || a.Y(!1);
            _.ua(bp, this);
            a = this.B();
            a.className = this.className;
            this.O();
            _.D(a, "mouseover", this.ne, !1, this);
            _.D(a, "mouseout", this.me, !1, this);
            fp(this);
            return !0
        };
        W.prototype.Vf = function() {
            _.va(bp, this);
            for (var a = this.B(), b, c = 0; b = bp[c]; c++) b.h && _.$c(a, b.h) && b.Y(!1);
            this.lh && this.lh.Rb();
            _.Ad(a, "mouseover", this.ne, !1, this);
            _.Ad(a, "mouseout", this.me, !1, this);
            this.h = void 0;
            0 == ep(this) && (this.Ab = !1);
            Ro.prototype.Vf.call(this)
        };
        W.prototype.Rf = function(a, b) {
            this.h == a && _.Ze(this.C.h, _.bf(this.h)) && (this.Ab || !this.em ? (this.Y(!1), this.isVisible() || (this.h = a, this.A = b || new gp(Qi(this.rd)), this.isVisible() && this.Qb(), this.Y(!0))) : this.h = void 0);
            this.X = void 0
        };
        W.prototype.Oj = function(a) {
            this.ta = void 0;
            if (a == this.h) {
                a = this.Z;
                var b = a.V;
                try {
                    var c = b && b.activeElement;
                    var d = c && c.nodeName ? c : null
                } catch (e) {
                    d = null
                }
                d = d && this.B() && a.h(this.B(), d);
                null != this.Ra && (this.Ra == this.B() || _.Ze(this.C.h, _.bf(this.Ra))) || d || this.ge && this.ge.Ra || this.Y(!1)
            }
        };
        var hp = function(a, b) {
            var c = _.Ui(a.Z.V);
            a.rd.x = b.clientX + c.x;
            a.rd.y = b.clientY + c.y
        };
        W.prototype.Te = function(a) {
            var b = ip(this, a.target);
            this.Ra = b;
            this.O();
            b != this.h && (this.h = b, jp(this, b), kp(this), hp(this, a))
        };
        var ip = function(a, b) {
            try {
                for (; b && !_.Ze(a.C.h, _.bf(b));) b = b.parentNode;
                return b
            } catch (c) {
                return null
            }
        };
        W.prototype.eh = function(a) {
            hp(this, a);
            this.Ab = !0
        };
        W.prototype.de = function(a) {
            this.Ra = a = ip(this, a.target);
            this.Ab = !0;
            if (this.h != a) {
                this.h = a;
                var b = new lp(this.Ra);
                this.O();
                jp(this, a, b);
                kp(this)
            }
        };
        var kp = function(a) {
            if (a.h)
                for (var b, c = 0; b = bp[c]; c++) _.$c(b.B(), a.h) && (b.ge = a, a.lh = b)
        };
        W.prototype.Tc = function(a) {
            var b = ip(this, a.target),
                c = ip(this, a.relatedTarget);
            b != c && (b == this.Ra && (this.Ra = null), fp(this), this.Ab = !1, !this.isVisible() || a.relatedTarget && _.$c(this.B(), a.relatedTarget) ? this.h = void 0 : this.Rb())
        };
        W.prototype.ne = function() {
            var a = this.B();
            this.Ra != a && (this.O(), this.Ra = a)
        };
        W.prototype.me = function(a) {
            var b = this.B();
            this.Ra != b || a.relatedTarget && _.$c(b, a.relatedTarget) || (this.Ra = null, this.Rb())
        };
        var jp = function(a, b, c) {
                a.X || (a.X = _.Rf((0, _.y)(a.Rf, a, b, c), a.bi))
            },
            fp = function(a) {
                a.X && (_.t.clearTimeout(a.X), a.X = void 0)
            };
        W.prototype.Rb = function() {
            2 == ep(this) && (this.ta = _.Rf((0, _.y)(this.Oj, this, this.h), this.yh))
        };
        W.prototype.O = function() {
            this.ta && (_.t.clearTimeout(this.ta), this.ta = void 0)
        };
        W.prototype.L = function() {
            this.Y(!1);
            fp(this);
            dp(this);
            this.B() && _.Ij(this.B());
            this.Ra = null;
            delete this.Z;
            W.R.L.call(this)
        };
        var gp = function(a, b) {
            $o.call(this, a, b)
        };
        _.z(gp, $o);
        gp.prototype.j = function(a, b, c) {
            b = zk(a);
            b = Dk(b);
            c = c ? new tk(c.top + 10, c.right, c.bottom, c.left + 10) : new tk(10, 0, 0, 10);
            Xo(this.h, a, 8, c, b, 9) & 496 && Xo(this.h, a, 8, c, b, 5)
        };
        var lp = function(a) {
            Zo.call(this, a, 5)
        };
        _.z(lp, Zo);
        lp.prototype.j = function(a, b, c) {
            var d = new N(10, 0);
            Yo(this.element, this.l, a, b, d, c, 9) & 496 && Yo(this.element, 4, a, 1, d, c, 5)
        };
        var mp = function() {
            W.call(this);
            this.ma = {};
            this.od = {};
            this.N = null;
            this.ee = !1;
            this.qd = this.j = this.K = null;
            this.na = {};
            this.H = new _.F(this);
            this.F = this.W = this.l = this.Sb = this.o = this.U = this.La = null;
            this.G = !0;
            this.Tb = []
        };
        _.x(mp, W);
        _.k = mp.prototype;
        _.k.Ca = function() {
            this.G = !1;
            var a = _.kf.test(_.S) ? "rtl" : "ltr";
            this.gd(_.Bi(Gm, {
                Zc: "https://www.gstatic.com/images/branding/product/1x/translate_24dp.png",
                am: "https://www.google.com/images/cleardot.gif",
                dm: _.ul,
                dir: a,
                Me: Bl
            }));
            this.className += " skiptranslate";
            this.B() && this.N && this.Sb && this.l.B() && this.K && this.F && (this.H.J(window, "resize", (0, _.y)(this.Qb, this)), this.H.J(this, "hide", (0, _.y)(this.kk, this)), this.Tb.length && (this.Pg.apply(this, this.Tb), this.Tb = []))
        };
        _.k.Pg = function(a) {
            for (var b = [], c = 0; c < arguments.length; ++c) {
                var d = arguments[c];
                if (d)
                    if (this.N || d.xe) {
                        var e = _.Fj("SPAN", {
                            "class": d.className || "activity-link"
                        });
                        _.ad(e, d.Lf || "");
                        b.push(e);
                        Gj(d.xe || this.N, e);
                        if (d.Ce && d.dd) {
                            var f = (0, _.y)(this.kj, this, d);
                            this.H.J(e, "click", f);
                            d.we && this.H.J(this.K, d.we, f)
                        }
                        d.id = d.id || d.Wb();
                        this.ma[d.id] && this.Wh(d);
                        this.ma[d.id] = d;
                        this.od[d.id] = e
                    } else this.Tb.push(d)
            }
            return b
        };
        _.k.Wh = function(a) {
            for (var b = 0; b < arguments.length; ++b) {
                var c = "string" === typeof arguments[b] || arguments[b] instanceof String ? arguments[b] : arguments[b].id,
                    d = this.ma[c],
                    e = this.od[c];
                d && e && (this.j && this.j.id === c && this.gf(), this.H.Fb(d, ["submitted", "cancelled"]), d.P(), this.na[c] && delete this.na[c], delete this.ma[c], delete this.od[c], _.Ij(e))
            }
        };
        _.k.kj = function(a) {
            if (this.K) {
                a != this.j && this.j && (Qo(this.l), this.j.dd.call(this.j), this.j.B() && (this.j.B().style.display = "none"), np(this, !1), this.j = null);
                np(this, !0);
                Qo(this.l);
                this.j = a;
                if (this.na[a.id]) {
                    var b = this.na[a.id];
                    var c = a.Nd
                } else a.Ca(), b = a.B(), c = a.Ce, this.H.J(a, ["submitted", "cancelled"], (0, _.y)(this.gf, this)), a.ff && (this.na[a.id] = b);
                Gj(this.K, b);
                c.call(a, this);
                a = new Mo(b, 100);
                this.H.oc(a, "finish", (0, _.y)(this.Qb, this, !0, !0));
                a.play()
            }
        };
        _.k.gf = function() {
            if (this.j)
                if (Qo(this.l), this.j.dd.call(this.j), this.j.B()) {
                    var a = new Lo(this.j.B(), 100);
                    this.H.oc(a, "finish", (0, _.y)(function() {
                        _.Ij(this.j.B());
                        this.j = null;
                        np(this, !1);
                        Qj(this.l.B()) && (Po(this.l), this.Qb(!0, !0))
                    }, this));
                    a.play()
                } else np(this, !1), this.j = null
        };
        _.k.Rf = function(a, b) {
            this.qd = a;
            W.prototype.Rf.call(this, a, b);
            this.B().style.display = "block"
        };
        _.k.Te = function(a) {
            if (!this.G) {
                var b = ip(this, a.target);
                this.Ra = b;
                this.O();
                b != this.h ? (this.h = b, jp(this, b), kp(this), hp(this, a)) : jp(this, b)
            }
        };
        _.k.kk = function() {
            Qo(this.l);
            this.ee && this.gf()
        };
        _.k.L = function() {
            for (var a in this.ma) this.Wh(a);
            this.H && this.H.P();
            this.H = null;
            this.l && this.l.P();
            this.F = this.Sb = this.qd = this.K = this.N = this.l = null;
            W.prototype.L.call(this)
        };
        var np = function(a, b) {
            a.ee = b;
            a.G = b;
            if (a.G) {
                var c = a.B();
                a.La = new N(c.offsetLeft, c.offsetTop)
            } else a.La && (null != (a.A || null) && ((a.A || null).h = a.La), _.yk(a.B(), a.La), a.La = null);
            a.N.style.display = b ? "none" : "inline-block";
            a.Sb.style.display = b ? "inline-block" : "none"
        };
        _.k = mp.prototype;
        _.k.Id = function(a) {
            if (this.isVisible()) {
                a = (this.pd = a) ? this.s.J : this.s.Fb;
                var b = _.Oc(this.B());
                a.call(this.s, b, "mousedown", this.Tf, !0)
            } else W.prototype.Id.call(this, a)
        };
        _.k.gd = function(a) {
            W.prototype.gd.call(this, a);
            if (a) {
                this.N = Si("activity-links", a);
                var b = Si("status-message", a);
                b && (this.l = new No, Qm(this.l, b));
                this.Sb = Si("started-activity-container", a);
                this.K = Si("activity-root", a);
                this.F = Si("original-text", a)
            }
        };
        _.k.Qb = function(a, b) {
            var c = Ck(document.body).y;
            if (this.A) {
                (this.A || null).h.y += c;
                W.prototype.Qb.call(this);
                var d = parseInt(this.B().style.left, 10);
                a = parseInt(this.B().style.top, 10) - (a ? 0 : c);
                b && (b = this.Ij || {}, a -= b.top || 10, d -= b.left || 10);
                a -= c;
                (this.A || null).h.y = a;
                (this.A || null).h.x = d;
                c = new N(d, a);
                _.yk(this.B(), c)
            }
        };
        _.k.Y = function(a) {
            W.prototype.Y.call(this, a)
        };
        _.k.pc = function(a) {
            this.o = a
        };
        _.k.sa = function(a) {
            this.W = a
        };
        _.k.zb = function(a) {
            a = a ? (0, _.Rb)(a) : "";
            this.F ? _.ad(this.F, a) : W.prototype.zb.call(this, a)
        };
        _.k.kb = function() {
            return this.o
        };
        _.k.Sc = function() {
            return this.l
        };
        _.k.oa = function() {
            return this.W
        };
        _.k.Pd = function() {
            return this.F ? Qj(this.F) : W.prototype.Pd.call(this)
        };
        _.k.Tc = function(a) {
            this.G || W.prototype.Tc.call(this, a)
        };
        _.k.ne = function(a) {
            this.G || W.prototype.ne.call(this, a)
        };
        _.k.me = function(a) {
            this.G || W.prototype.me.call(this, a)
        };
        var op = {
            set: function(a, b) {
                a.className = b
            },
            get: function(a) {
                a = a.className;
                return "string" === typeof a && a.match(/\S+/g) || []
            },
            add: function(a, b) {
                var c = op.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = c.length + d.length;
                op.Qg(c, d);
                op.set(a, c.join(" "));
                return c.length == e
            },
            remove: function(a, b) {
                var c = op.get(a),
                    d = Array.prototype.slice.call(arguments, 1),
                    e = op.hh(c, d);
                op.set(a, e.join(" "));
                return e.length == c.length - d.length
            },
            Qg: function(a, b) {
                for (var c = 0; c < b.length; c++) _.ta(a, b[c]) || a.push(b[c])
            },
            hh: function(a,
                b) {
                return a.filter(function(c) {
                    return !_.ta(b, c)
                })
            },
            lm: function(a, b, c) {
                for (var d = op.get(a), e = !1, f = 0; f < d.length; f++) d[f] == b && (d.splice(f--, 1), e = !0);
                e && (d.push(c), op.set(a, d.join(" ")));
                return e
            },
            Yl: function(a, b, c) {
                var d = op.get(a);
                "string" === typeof b ? _.va(d, b) : Array.isArray(b) && (d = op.hh(d, b));
                "string" !== typeof c || _.ta(d, c) ? Array.isArray(c) && op.Qg(d, c) : d.push(c);
                op.set(a, d.join(" "))
            },
            has: function(a, b) {
                return _.ta(op.get(a), b)
            },
            enable: function(a, b, c) {
                c ? op.add(a, b) : op.remove(a, b)
            },
            toggle: function(a, b) {
                var c = !op.has(a, b);
                op.enable(a, b, c);
                return c
            }
        };
        var pp = function(a, b) {
            to.call(this, a);
            b = b || {};
            this.D = {
                apiKey: b.apiKey || "",
                kc: b.kc || 1
            };
            this.h = null
        };
        _.x(pp, to);
        _.k = pp.prototype;
        _.k.attach = function(a, b) {
            b && (b.Wd = a, this.h.attach(b))
        };
        _.k.Fg = function(a) {
            a && dp(this.h, a)
        };
        _.k.ri = function() {
            var a = this.h.qd;
            if (a && void 0 !== a.Wd) {
                var b = a.Wd;
                a = this.ya.j[b];
                uo(this, this.j, !1);
                this.j = b;
                uo(this, b);
                this.h.pc(a.Gk);
                this.h.sa(a.Jk);
                var c = a.la;
                this.h.U = c && (0, _.Rb)(c);
                this.h.zb(a.text)
            }
            b = new CustomEvent("goog-gt-popupShown", {
                detail: {
                    Wd: b,
                    Lk: this.h
                }
            });
            window.document.body.dispatchEvent(b)
        };
        _.k.pi = function() {
            uo(this, this.j, !1)
        };
        _.k.ik = function() {
            this.ya.j[this.j].aj.dispatchEvent("updating")
        };
        _.k.L = function() {
            this.h.P();
            this.h = null;
            to.prototype.L.call(this)
        };
        _.k.zh = function(a, b) {
            op[b ? "add" : "remove"](a, "goog-text-highlight")
        };
        var qp = function(a) {
            this.A = a;
            this.o = this.j = this.s = this.l = -1;
            this.h = !1;
            this.F = 0;
            this.I = "";
            this.G = 0
        };
        qp.prototype.start = function() {
            if (!this.h) {
                this.h = !0;
                var a = [],
                    b;
                for (b = 0; 15 > b; b++) a[b] = _.El[0 | 62 * Math.random()];
                this.I = a.join("");
                this.F = 0;
                this.o = this.j = this.s = this.l = -1;
                this.G = _.qb();
                _.Rf(this.C, 1E4, this)
            }
        };
        qp.prototype.stop = function() {
            this.h && (this.h = !1, rp(this))
        };
        qp.prototype.C = function() {
            this.h && (rp(this), _.Rf(this.C, 1E3, this))
        };
        var rp = function(a) {
            var b = a.A.o,
                c = a.A.A,
                d = a.A.l,
                e = a.A.s;
            if (a.l != b || a.s != c || a.j != d || a.o != e) {
                var f = {};
                f.ct = b;
                f.cv = c;
                f.cts = d;
                f.cvs = e;
                f.sid = a.I;
                f.seq = a.F++;
                f.tat = _.qb() - a.G;
                if (0 <= a.l || 0 <= a.s || 0 <= a.j || 0 <= a.o) f.pt = a.l, f.pv = a.s, f.pts = a.j, f.pvs = a.o;
                _.Di("te_v", f);
                a.l = b;
                a.s = c;
                a.j = d;
                a.o = e
            }
        };
        var sp = function() {
            this.s = this.l = this.A = this.o = 0;
            this.h = [];
            this.j = null != _.t.IntersectionObserver ? new IntersectionObserver((0, _.y)(this.C, this)) : null
        };
        sp.prototype.attach = function(a, b) {
            this.l += b;
            var c = this.h.length;
            this.h.push(b);
            for (b = 0; b < a.length; ++b) {
                var d = a[b];
                Jj(d) ? (d[tp] = c, this.o += Qj(d).length, this.j && this.j.observe(d)) : this.Eh(d.nodeType)
            }
        };
        sp.prototype.reset = function() {
            this.s = this.l = this.A = this.o = 0;
            this.h = []
        };
        sp.prototype.C = function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (0 < c.intersectionRatio && null != c.target[tp]) {
                    this.A += Qj(c.target).length;
                    var d = c.target[tp];
                    this.s += this.h[d];
                    this.h[d] = 0;
                    c.target[tp] = void 0
                }
            }
        };
        _.Tl.attach(36546, sp.prototype, {
            Eh: 1
        });
        var tp = "_gt_" + Math.random().toString(36).substr(2);
        _.up = function(a, b) {
            _.A.call(this);
            a = a || {};
            this.D = _.ni(a);
            this.D.kc = a.kc;
            this.D.He = !!a.He;
            this.D.Ti = parseInt(a.Ti, 10) || 300;
            this.D.sk = a.sk;
            this.D.trackVisibility = a.trackVisibility || !1;
            this.s = 0;
            this.j = {};
            this.H = new _.F(this);
            this.l = new pp(this, this.D);
            b && (this.l.l = b || {});
            a = this.l;
            a.h = new mp({
                Ek: a.D.Ek
            });
            a.h.yh = 300;
            a.h.bi = 1E3;
            a.h.Id(!0);
            a.H.J(a.h, "show", (0, _.y)(a.ri, a));
            a.H.J(a.h, "hide", (0, _.y)(a.pi, a));
            a.D.kc && (b = new so({
                id: "contribute",
                Lf: _.T.li,
                we: "dblclick",
                ff: !0
            }, a.l), a.h.Pg(b), a.H.J(b, "submitted",
                (0, _.y)(a.ik, a)));
            a.h.Ca();
            this.o = this.h = null;
            this.D.trackVisibility && null != _.t.IntersectionObserver && (this.h = new sp, this.o = new qp(this.h))
        };
        _.x(_.up, _.A);
        var vp = function(a) {
            a.o && a.o.stop();
            for (var b in a.j) {
                var c = a,
                    d = b,
                    e = c.j[d];
                if (e) {
                    if (c.h)
                        for (var f = c.h, g = e.Xa, h = 0; h < g.length; ++h) {
                            var l = f,
                                m = g[h];
                            Jj(m) ? (m[tp] = void 0, l.j && l.j.unobserve(m)) : l.Eh(m.nodeType)
                        }
                    for (f = 0; f < e.Xa.length; ++f) e.Xa[f] && c.l.Fg(e.Xa[f]);
                    delete c.j[d]
                }
            }
            a.h && a.h.reset()
        };
        _.up.prototype.L = function() {
            vp(this);
            this.H.P();
            this.H = null;
            this.l.P();
            this.l = null
        };
        var wp = function(a) {
                for (var b = 0; b < a.length; ++b)
                    if (a[b] && a[b].node) return a[b].node;
                return null
            },
            Ap = function(a) {
                var b = wp(a);
                if (!b) return null;
                var c = [],
                    d = [],
                    e = [];
                b = new Bm(b, !0);
                var f = a[a.length - 1].node,
                    g = 0,
                    h = !1;
                do {
                    b.next();
                    var l = b.node();
                    if (!l) break;
                    var m = b.h.h,
                        n = b.depth();
                    for (1 == m && --n; g < a.length && !a[g].node;) ++g;
                    l == a[g].node || !h && 1 == m && (null != l && null == l.previousSibling ? 0 : !xp(yp(l))) ? (m = zp(l), d.push({
                            node: m,
                            zb: function() {}
                        }), e[d.length - 1] = n, l.parentNode && l.parentNode.insertBefore(m, l), l == a[g].node &&
                        (c[g++] = d.length - 1, h = !0)) : h = !1
                } while (l != f);
                return {
                    vg: e,
                    pk: c,
                    Jj: d
                }
            },
            xp = function(a) {
                return null != a && vm[a.tagName]
            },
            yp = function(a) {
                if (null == a) return null;
                for (a = a.previousSibling; null != a && null != a && 3 == a.nodeType && "" == (0, _.Rb)(Qj(a));) a = a.previousSibling;
                return a
            },
            Dp = function(a, b, c, d, e, f, g) {
                _.E.call(this);
                this.h = [];
                for (var h = 0; h < a.length; ++h) this.h.push("nodeType" in a[h] ? Bp(a[h]) : a[h]), Cp(a[h].node);
                this.l = b;
                this.G = d || 0;
                this.U = e || 0;
                this.C = c;
                this.ya = f || null;
                this.Pc = g || "transparent";
                this.K = this.I = this.O = !1;
                this.s = [];
                this.A = [];
                this.j = [];
                this.X = [];
                this.H = new _.F(this);
                this.o = this.N = !1
            },
            Bp, Cp, Lp, Jp, zp;
        _.x(Dp, _.E);
        var Gp = function(a) {
                if (!a) return !1;
                if (3 != a.nodeType || !_.C) return Ep in a && !!a[Ep];
                if (!a.parentNode) return !0;
                if (!(Fp in a.parentNode)) return !1;
                var b = a.parentNode[Fp];
                if (!b || !b[a.nodeValue]) return !1;
                b = b[a.nodeValue];
                for (var c = 0; c < b.length; ++c)
                    if (b[c] == a) return !0;
                return !1
            },
            Hp = function(a, b) {
                if (!a) return "";
                if ("TITLE" == a.tagName) return String(document.title);
                3 == a.nodeType ? b = "nodeValue" : b || (b = "value");
                return a.getAttribute && a.getAttribute(b) ? String(a.getAttribute(b)) : "string" === typeof a[b] ? String(a[b]) : ""
            };
        Dp.prototype.Ba = function() {
            return this.l
        };
        var Ip = function(a, b, c) {
                b = {
                    Qh: b,
                    Wf: c,
                    qa: []
                };
                a.j.push(b);
                return b
            },
            Kp = function(a) {
                if (!a.o && a.O && !a.I && !a.K) {
                    a.I = !0;
                    var b;
                    if (b = Jp(a.h)) {
                        b = a.h;
                        var c = a.j;
                        if (1 == b.length && b[0] && b[0].tg) {
                            for (var d = [], e = 0; e < c.length; ++e)
                                for (var f = 0; f < c[e].qa.length; ++f) d.push(c[e].qa[f].la);
                            b[0].zb(d.join(" "), b[0].node);
                            b = !0
                        } else b = !1;
                        b = !b
                    }
                    if (b && (b = Ap(a.h))) {
                        a.A = b.pk;
                        a.s = b.Jj;
                        d = a.h;
                        e = a.A;
                        f = a.s;
                        var g = b.vg;
                        c = [];
                        for (var h = 0; h < d.length; ++h)
                            if (c[h] = [], d[h].node && void 0 !== e[h])
                                for (var l = 0; l < f.length; ++l)
                                    if (!(g[l] > g[e[h]])) {
                                        if (g[l] ==
                                            g[e[h]]) {
                                            if (f[l].node.parentNode != f[e[h]].node.parentNode) continue
                                        } else {
                                            for (var m = g[e[h]] - g[l], n = f[e[h]].node.parentNode; m-- && n && n != f[l].node.parentNode;) n = n.parentNode;
                                            if (n != f[l].node.parentNode) continue
                                        }
                                        c[h].push(l)
                                    }
                        d = a.h;
                        e = a.j;
                        f = -1;
                        for (g = e.length - 1; 0 <= g; --g)
                            for (h = e[g], l = h.qa.length - 1; 0 <= l; --l)
                                if (m = h.qa[l], !(0 > m.ha) && d[m.ha] && d[m.ha].node)
                                    if (0 > f) m.re = _.Fl(c[m.ha]), f = c[m.ha][c[m.ha].length - 1];
                                    else
                                        for (n = c[m.ha].length - 1; 0 <= n; --n)
                                            if (c[m.ha][n] <= f) {
                                                m.re = _.Fl(c[m.ha].slice(0, n + 1));
                                                f = c[m.ha][n];
                                                break
                                            }
                        for (c =
                            e = 0; c < a.j.length; ++c) {
                            d = a.j[c];
                            f = a.h;
                            g = b.vg;
                            h = a.A;
                            l = "";
                            for (m = 0; m < d.qa.length; ++m)
                                if (n = d.qa[m], l += n.la, 0 > n.ha) {
                                    var p = -1,
                                        r = -1,
                                        q = h[d.qa[m - 1].ha];
                                    void 0 !== q && (p = g[q]);
                                    m < d.qa.length - 1 && (q = h[d.qa[m + 1].ha], void 0 !== q && (r = g[q]));
                                    if (0 <= p || 0 <= r) a: if (r = (0 > p || r < p) && m < d.qa.length - 1, p = d.qa[r ? m + 1 : m - 1], !(p.ha >= f.length || null == f[p.ha].node)) {
                                        q = n.la;
                                        n.la = "";
                                        if (/^ +$/.test(q) && (n = r ? p.la.charCodeAt(0) : p.la.charCodeAt(p.la.length - 1), 3584 <= n && 3711 >= n || 12288 <= n && 12351 >= n || 12352 <= n && 12543 >= n || 12784 <= n && 12799 >= n || 19968 <=
                                                n && 40959 >= n || 65280 <= n && 65519 >= n)) break a;
                                        p.la = r ? q + p.la : p.la + q
                                    }
                                }
                            f = l;
                            g = a.h;
                            h = a.s;
                            l = b.vg;
                            m = a.A;
                            n = [];
                            for (p = 0; p < d.qa.length && !(e >= h.length); ++p)
                                if (r = d.qa[p], r.re && !(0 > r.ha) && g[r.ha].node && r.la)
                                    if (e == m[r.ha] || e in r.re && (!(e + 1 in r.re) || e + 1 != m[r.ha])) {
                                        if (h[e] && h[e].node) {
                                            q = zp(h[e].node);
                                            n.push(q);
                                            for (var w = h[e].node, O = l[m[r.ha]] - l[e], P = q, Ca = g[r.ha].node.parentNode, fa = P; Ca && O--;) fa = Ca.cloneNode(!1), fa.appendChild(P), Ca = Ca.parentNode, P = fa;
                                            w.appendChild(fa);
                                            w = g[r.ha].node;
                                            g[r.ha].Le ? g[r.ha].Bh || q.appendChild(w) :
                                                (w = g[r.ha].node.cloneNode(!1), w.id && (w.id = ""), q.appendChild(w));
                                            g[r.ha].zb(r.la, w)
                                        }
                                    } else ++e, --p;
                            g = n;
                            n = a.h;
                            h = a.C;
                            if (d.Qh) h = d.Qh;
                            else {
                                m = n.length;
                                l = -1;
                                for (p = 0; p < d.qa.length; ++p) r = d.qa[p].ha, 0 <= r && n[r] && n[r].node && (l = Math.max(l, r), m = Math.min(m, r));
                                for (n = ""; m <= l; ++m) h[m] && (n += h[m]);
                                h = n
                            }
                            m = g;
                            n = h;
                            if (a.ya) {
                                if (3 != a.ya.D.kc) {
                                    g = a.X;
                                    h = g.push;
                                    l = a.ya;
                                    d = d.Wf;
                                    p = a;
                                    d = l.j[++l.s] = {
                                        id: l.s.toString(),
                                        aj: p,
                                        text: n,
                                        km: d || n,
                                        la: f,
                                        Gk: l.A,
                                        Jk: l.C,
                                        Xa: m
                                    };
                                    for (f = 0; f < m.length; ++f) m[f] && l.l.attach(d.id, m[f]);
                                    l.h && l.h.attach(m, n.length);
                                    l.o && l.o.start();
                                    h.call(g, d.id)
                                }
                            } else
                                for (d = 0; d < m.length; ++d) m[d].title = n
                        }
                        b = a.h;
                        for (c = 0; c < b.length; ++c) b[c].node && !b[c].Le && _.Ij(b[c].node);
                        b = a.h;
                        c = a.s;
                        a = a.A;
                        for (e = d = 0; e < c.length; ++e)
                            if (f = c[e].node) {
                                for (; d < b.length && e > a[d];) d++;
                                (d >= b.length || e != a[d]) && !f.firstChild && (_.Ij(f), c[e].node = null)
                            }
                    }
                }
            };
        Dp.prototype.restore = function() {
            if (this.I)
                if (this.I = !1, this.ya && vp(this.ya), this.X = [], Jp(this.s), 1 == this.h.length && this.h[0].tg) this.h[0].zb(this.C[0], this.h[0].node);
                else {
                    for (var a = 0, b = 0; b < this.s.length; ++b) {
                        var c = this.s[b].node;
                        if (c) {
                            for (; a < this.h.length && b > this.A[a];) {
                                var d = a++;
                                this.h[d].node && (Lp(this.h[d].node), this.h[d].node = null)
                            }
                            if (a < this.h.length && b == this.A[a] && this.h[a].node) {
                                this.h[a].Bh || (_.Zc(c), c.appendChild(this.h[a].node));
                                this.h[a].zb(this.C[a], this.h[a].node);
                                a++;
                                var e = c.parentNode;
                                if (e && 11 != e.nodeType)
                                    if (c.removeNode) c.removeNode(!1);
                                    else {
                                        for (; d = c.firstChild;) e.insertBefore(d, c);
                                        _.Ij(c)
                                    }
                            } else _.Ij(c)
                        }
                    }
                    this.s = []
                }
        };
        Dp.prototype.L = function() {
            _.E.prototype.L.call(this);
            this.restore();
            for (var a = 0; a < this.h.length; ++a) this.h[a].node && Lp(this.h[a].node);
            this.h = null
        };
        Cp = function(a) {
            if (a)
                if (3 == a.nodeType && _.C) {
                    Fp in a.parentNode && a.parentNode[Fp] || (a.parentNode[Fp] = {});
                    var b = a.parentNode[Fp];
                    b[a.nodeValue] || (b[a.nodeValue] = []);
                    b = b[a.nodeValue];
                    for (var c = 0; c < b.length; ++c)
                        if (b[c] == a) return;
                    b.push(a)
                } else a[Ep] = 1
        };
        Lp = function(a) {
            if (!a || 3 == a.nodeType && _.C) {
                var b = a.parentNode;
                if (b && Fp in b) {
                    var c = b[Fp];
                    if (c && a && c[a.nodeValue]) {
                        var d = c[a.nodeValue];
                        if (d)
                            for (var e = 0; e < d.length; ++e)
                                if (d[e] == a) {
                                    d.splice(e, 1);
                                    break
                                }
                        0 == d.length && delete c[a.nodeValue]
                    }
                    if (c && Rl(c)) try {
                        delete b[Fp]
                    } catch (f) {
                        b[Fp] = ""
                    }
                }
            } else if (Ep in a) try {
                delete a[Ep]
            } catch (f) {
                a[Ep] = ""
            }
        };
        Jp = function(a) {
            for (var b = 0; b < a.length; ++b) try {
                a[b].node && !a[b].node.parentNode && (a[b].node = null)
            } catch (c) {
                a[b].node = null
            }
            for (b = a.length - 1; 0 <= b && !a[b].node; --b);
            a.length = b + 1;
            return a.length
        };
        zp = function(a) {
            a = a.ownerDocument ? a.ownerDocument.createElement("font") : _.Wc(document, "font");
            Cp(a);
            a.style.verticalAlign = "inherit";
            return a
        };
        _.Mp = function() {
            this.j = {};
            this.h = {}
        };
        _.Mp.prototype.has = function(a, b) {
            return null != this.j[a] || null != this.h[a] || b && (a in this.j || a in this.h)
        };
        _.Mp.prototype.write = function(a, b) {
            this.h[a] = b
        };
        _.Mp.prototype.remove = function(a) {
            delete this.h[a];
            delete this.j[a]
        };
        _.Mp.prototype.bc = function() {
            return Rl(this.j)
        };
        var Ep = "_gt_" + Math.random().toString(36).substr(2),
            Fp = "_gtn_" + Math.random().toString(36).substr(2);
        (function() {
            function a(c) {
                document.title = c
            }
            var b = {};
            Bp = function(c, d) {
                if ("TITLE" == c.tagName) return {
                    node: c,
                    zb: a,
                    Le: !0,
                    Bh: !0,
                    tg: !0
                };
                if (3 == c.nodeType) return {
                    node: c,
                    zb: function(e, f) {
                        _.ad(f, e)
                    }
                };
                d || (d = "value");
                b[d] || (b[d] = function(e, f) {
                    f.setAttribute && f.setAttribute(d, e);
                    "string" === typeof e && (f[d] = e)
                });
                c = {
                    node: c,
                    zb: b[d],
                    Le: !0
                };
                "value" != d && (c.tg = !0);
                return c
            }
        })();
        var Np = function(a, b, c, d) {
                d = d.firstChild && 3 == d.firstChild.nodeType ? d.firstChild.nodeValue : Qj(d);
                d = {
                    ha: c,
                    la: Dj(d)
                };
                a.push(d);
                b[c] ? b[c].end = d : b[c] = {
                    start: d,
                    end: d
                };
                return d
            },
            Op = function(a) {
                for (var b, c = a.firstChild; c; c = b) b = c.nextSibling, 3 != c.nodeType && (c == a.firstChild ? a.parentNode && a.parentNode.insertBefore(c, a) : Hj(c, a), Op(c))
            };
        var Pp = function(a, b) {
                this.I = a || null;
                this.da = b || pm.mc();
                this.C = this.A = this.N = null;
                this.o = this.l = !1;
                this.s = null;
                this.h = [];
                this.j = 0
            },
            Qp = function(a, b) {
                a.l || (a.N = b)
            },
            Rp = function(a, b, c) {
                a.A = c ? (0, _.y)(b, c) : b
            },
            Sp = function(a, b, c) {
                a.C = c ? (0, _.y)(b, c) : b
            },
            Tp = function(a, b) {
                a.l || (a.l = !0, a.G = b, a.j++, a.s = a.N, a.F())
            };
        Pp.prototype.stop = function() {
            this.j++;
            this.l = !1;
            this.h = []
        };
        var Up = function(a) {
                if (!a.l) return null;
                for (var b = !1, c = 0; c < a.h.length; ++c)
                    if (a.h[c].target === a) {
                        a.h[c].ready = !1;
                        a.h[c].ii = a.j + 1;
                        b = !0;
                        break
                    }
                b || a.h.push({
                    target: a,
                    ready: !1,
                    ii: a.j + 1
                });
                return (0, _.y)(a.F, a, a, a.j + 1)
            },
            Vp = function(a) {
                if (!a.l) return !0;
                for (var b = 0; b < a.h.length; ++b)
                    if (a.h[b].target === a && a.h[b].ii == a.j) return a.h[b].ready;
                return !0
            };
        Pp.prototype.F = function(a, b) {
            if (this.l) {
                if (a)
                    for (var c = 0; c < this.h.length; ++c)
                        if (this.h[c].target === a) {
                            this.h[c].ready = !0;
                            break
                        }
                this.o || this.da.add((0, _.y)(this.K, this, b || this.j))
            }
        };
        Pp.prototype.K = function(a) {
            if (this.j != a) return !1;
            a = this.s;
            if (a == Wp) return this.stop(), this.A && this.A.call(this.I, this, this.G), !1;
            this.o = !0;
            try {
                var b = a.call(this.I, this, this.G);
                if (!b) throw Error();
            } catch (c) {
                this.stop();
                a = c;
                if (this.C) this.C.call(this.I, a, this, this.G);
                else throw a;
                return !1
            } finally {
                this.o = !1
            }
            b != Xp && (this.s = b, this.j++, this.F());
            return !1
        };
        var Xp = function() {},
            Wp = function() {};
        var Zp = function(a, b, c, d, e) {
                b = b || {};
                this.K = e || [];
                this.A = [];
                this.G = [];
                Yp(this, a || document.documentElement, void 0 === b.Yh || !!b.Yh);
                this.F = c || Dp;
                this.I = b.Qj;
                this.l = this.h = this.s = this.zd = null;
                this.C = !!b.Ok;
                this.pa = !!b.Nk;
                this.O = this.C ? 27 : 13;
                this.da = !0;
                this.N = [];
                this.o = new Pp(this, d)
            },
            $p = function(a, b, c, d) {
                a.o.l || (b = {
                    gi: b,
                    ci: c,
                    Xa: [],
                    Rh: [],
                    Bc: [],
                    textLength: 0,
                    size: 0,
                    continuous: !0
                }, a.zd = null, Qp(a.o, a.j), Rp(a.o, d), Sp(a.o, (0, _.y)(function(e) {
                    this.Xj(e);
                    d()
                }, a)), Tp(a.o, b))
            },
            aq = function(a, b) {
                return 0 < a.Xa.length ?
                    new b(a.Xa, a.Bc.join(""), a.Rh, a.textLength, a.size) : null
            },
            bq = function(a, b) {
                if (!a.l) return a.zd = aq(b, a.F), !0;
                if (!b.continuous && 0 < b.Xa.length) return a.zd = aq(b, a.F), !0;
                b.continuous = a.l.Mh;
                a: {
                    var c = a.l;
                    var d = a.O;
                    if (b.size > b.ci || b.textLength > b.gi) c = !1;
                    else {
                        var e = c.size,
                            f = c.text.length;
                        if (0 != b.Xa.length && (e += 1 == b.Xa.length ? b.size + d + d : b.size + d, f += b.textLength, e > b.ci || f > b.gi)) {
                            c = !1;
                            break a
                        }
                        b.size = e;
                        b.textLength = f;
                        b.Xa.push(c.node);
                        b.Rh.push(c.text);
                        d = b.Xa.length - 1;
                        0 == d ? b.Bc.push(c.rf) : (1 == d && (b.Bc[0] = "<a i=0>" +
                            b.Bc[0] + "</a>"), b.Bc.push("<a i=" + d + ">"), b.Bc.push(c.rf), b.Bc.push("</a>"));
                        c = !0
                    }
                }
                if (c) return a.l = null, !1;
                a.zd = aq(b, a.F);
                return !0
            },
            cq = function(a, b, c) {
                var d = Hp(b, c);
                d && (0, _.Rb)(_.xj(d)) && a.N.push({
                    node: b,
                    Qi: c,
                    text: d
                })
            },
            kq, hq, eq, gq, Yp, iq, fq, dq;
        Zp.prototype.j = function(a, b) {
            var c = this;
            if (this.l && bq(this, b)) return Wp;
            if (!this.h) {
                this.da = !!this.A.length;
                if (!this.A.length && (a = this.N.shift())) return this.l = {
                    Mh: !1,
                    node: Bp(a.node, a.Qi),
                    text: a.text,
                    rf: _.zj(a.text),
                    size: this.C ? _.Kc(a.text).length : a.text.length
                }, b.continuous = !1, bq(this, b), Wp;
                a = this.A.shift() || this.G.shift();
                if (!a) return this.l = null, bq(this, b), Wp;
                this.s = [a.Mk];
                this.h = new Bm(a.root)
            }
            this.h.next();
            if (this.h.done) return this.h = null, b.continuous = !1, this.j;
            a = this.h.node();
            var d = this.h.h.h;
            if (-1 == d) return dq(this), eq(a) || (b.continuous = !1), this.j;
            fq(this, a);
            d = 1 == d;
            var e = gq(a);
            if ((e || d) && this.da && !hq(a)) return Yp(this, a, iq(this), !0), _.zm(this.h.h), dq(this), this.j;
            if (d && iq(this) && (this.pa && cq(this, a, "title"), cq(this, a, "alt"), cq(this, a, "placeholder"), cq(this, a, "aria-label"), cq(this, a, "aria-placeholder"), cq(this, a, "aria-roledescription"), cq(this, a, "aria-valuetext"), Cm(this.h)))
                for (var f = a.firstChild; f;) {
                    if (3 == f.nodeType) {
                        var g = f.nodeValue.split("\n");
                        if (2 < g.length || 2 == g.length && "" != (0, _.Rb)(g[0]) &&
                            "" != (0, _.Rb)(g[1])) {
                            f.nodeValue = g[0];
                            for (var h = 1; h < g.length; ++h) {
                                var l = _.Oc(a).createElement("font");
                                this.K.push(l);
                                Hj(l, f);
                                f = l;
                                Hj(_.Oc(a).createTextNode("\n" + g[h]), f);
                                f = f.nextSibling
                            }
                        }
                    }
                    f = f.nextSibling
                }
            a.shadowRoot && Array.from(a.shadowRoot.childNodes).forEach(function(n) {
                Yp(c, n, iq(c))
            });
            if (e) {
                _.zm(this.h.h);
                if (iq(this)) {
                    var m = Hp(a);
                    if ((0, _.Rb)(_.xj(m)) && (this.l = {
                            Mh: !0,
                            node: Bp(a),
                            text: m,
                            rf: _.zj(m),
                            size: this.C ? _.Kc(m).length : m.length
                        }, bq(this, b))) return dq(this), Wp
                }
                dq(this);
                return this.j
            }
            if (d) {
                if (_.jq(a) ||
                    !a.firstChild && "IFRAME" != a.tagName) return b.continuous = b.continuous && !!vm[a.tagName], _.zm(this.h.h), dq(this), this.j;
                if ("IFRAME" == a.tagName) {
                    try {
                        a.src.match(/https?:\/\//) && _.mf(a.src.match(_.lf)[3] || null) != window.location.hostname || (m = _.Kj(a).documentElement) && Yp(this, m, iq(this))
                    } catch (n) {}
                    b.continuous = !1;
                    _.zm(this.h.h);
                    dq(this);
                    return this.j
                }
                iq(this) && eq(a) ? this.I && "A" == a.tagName && a.href && this.I(a) : b.continuous = !1;
                return this.j
            }
            _.zm(this.h.h);
            dq(this);
            return this.j
        };
        _.jq = function(a) {
            return Gp(a) || 3 != a.nodeType && (!a.tagName || um[a.tagName] || vm[a.tagName] || tn(a, "skiptranslate"))
        };
        kq = function(a) {
            var b = _.Oc(a);
            return b.defaultView && b.defaultView.getComputedStyle ? b.defaultView.getComputedStyle(a, null) : a.currentStyle
        };
        hq = function(a) {
            return 3 == a.nodeType ? !0 : 1 != a.nodeType ? !1 : a.offsetWidth && a.offsetHeight ? !0 : (a = kq(a), !!a && "none" != a.display && "hidden" != a.visibility)
        };
        eq = function(a) {
            if (3 == a.nodeType) return !0;
            if (1 != a.nodeType) return !1;
            var b = kq(a);
            return !!tm[a.tagName] && (!b || !b.display || "inline" == b.display)
        };
        gq = function(a) {
            return !!a && (3 == a.nodeType && "string" === typeof a.nodeValue || "TITLE" == a.tagName && "string" === typeof a.value || "TEXTAREA" == a.tagName && tn(a, "translate") || "INPUT" == a.tagName && (wm[a.type] || tn(a, "translate")))
        };
        Yp = function(a, b, c, d) {
            (d ? a.G : a.A).push({
                root: b,
                Mk: void 0 === c || c
            })
        };
        iq = function(a) {
            return a.s[a.s.length - 1]
        };
        fq = function(a, b) {
            b = !Gp(b) && (b.nodeType == Yi && iq(a) || !(tn(b, "notranslate") || b.attributes && b.attributes.translate && "no" == b.attributes.translate.value) && (tn(b, "translate") || !!b.attributes && !!b.attributes.translate && "yes" == b.attributes.translate.value || iq(a)));
            a.s.push(b)
        };
        dq = function(a) {
            a.s.pop()
        };
        _.Tl.attach(5762, Zp.prototype, {
            Xj: 1
        });
        var lq = function() {
            _.A.call(this);
            this.h = []
        };
        _.x(lq, _.A);
        lq.prototype.restore = function() {
            _.Rf(this.j, 0, this)
        };
        lq.prototype.j = function() {
            for (var a = 0; a < this.h.length; ++a) _.Ij(this.h[a]);
            this.h = []
        };
        lq.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.restore()
        };
        var mq = function(a) {
            var b = new _.af;
            Vj(a, function(c) {
                if (Jj(c)) b.add(c);
                else {
                    a: {
                        var d;
                        if (_.pc && (d = c.parentElement)) {
                            c = d;
                            break a
                        }
                        d = c.parentNode;c = Jj(d) ? d : null
                    }
                    null != c && b.add(c)
                }
            });
            return b
        };
        var nq = function(a) {
            this.j = !0;
            this.o = a;
            this.l = !1;
            this.h = []
        };
        nq.prototype.Ba = function() {
            return this.h.join("")
        };
        var oq = function(a, b) {
                this.s = a;
                this.o = !0;
                this.l = b;
                this.h = null;
                this.j = 0
            },
            pq = function(a, b) {
                return a.o ? (b((0, _.y)(a.A, a), a.s, a.l ? "en" : ""), !0) : !1
            };
        oq.prototype.A = function(a, b, c) {
            this.h = b;
            this.j = c;
            a()
        };
        var qq = function(a, b) {
                this.o = a;
                this.I = !!b;
                this.h = this.F = 0;
                this.s = this.l = -1;
                this.A = this.C = this.j = 0
            },
            tq = function(a, b, c) {
                a.I && (b -= 9);
                for (var d = "", e = 0, f = a.F; f < a.o.length; ++f) {
                    var g = a.o.charAt(f),
                        h = g.charCodeAt(0);
                    e++;
                    a.j += a.I ? 127 >= h ? 32 >= h || rq[h] ? 3 : 1 : 2047 >= h || 55296 <= h && 56319 >= h || 56320 <= h && 57343 >= h ? 6 : 9 : 1;
                    h = a.j >= b;
                    sq[g] ? (a.s = f, a.C = a.j, h = h || e > c) : " " == g && (a.l = f, a.A = a.j, h = h || e > c);
                    if (h) return 0 <= a.s ? (d = a.o.substring(a.h, a.s + 1), a.j -= a.C, a.h = a.s + 1, a.s >= a.l ? (a.l = -1, a.A = 0) : a.A -= a.C, a.s = -1, a.C = 0) : 0 <= a.l ? (d = a.o.substring(a.h,
                        a.l + 1), a.j -= a.A, a.h = a.l + 1, a.l = -1, a.A = 0) : (d = a.o.substring(a.h, f + 1), a.j = 0, a.h = f + 1, a.s = a.l = -1, a.A = a.C = 0), a.F = f + 1, d
                }
                a.h < a.o.length && (d = a.o.substring(a.h), a.h = a.o.length);
                return d
            },
            sq = _.Fl(". , ; : \\? !".split(" ")),
            rq = _.Fl([34, 35, 36, 37, 38, 43, 44, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 96, 123, 124, 125, 127]);
        var uq = function(a, b, c, d, e, f) {
                this.C = d || function() {};
                this.ma = f || function() {};
                this.O = !!e;
                this.l = a.h.Pf;
                this.o = 0;
                this.da = function() {};
                this.I = c;
                this.G = this.j = this.s = 0;
                this.h = null;
                this.K = 0;
                this.ta = !1;
                this.na = a.h.Nf;
                this.pa = [];
                this.U = 0;
                this.pb = a.h.fe;
                this.A = mm(a);
                this.La = this.O ? 1 : 6;
                this.Ma = a.h.hg;
                this.X = b;
                this.F = [];
                this.Z = a
            },
            vq = function(a, b) {
                var c = 0;
                a.da = (0, _.y)(function() {
                    ++c == this.F.length && b()
                }, a)
            },
            wq = function(a, b, c) {
                a.C = function() {};
                a.X = b;
                a.h = null;
                a.U = 0;
                a.F = [];
                a.da = function() {};
                a.I = c
            },
            xq = function(a,
                b, c) {
                if (0 == a.j && (a.j = b ? 860 : a.A, !c || c <= a.A)) {
                    a.s = a.j;
                    return
                }
                do b = a.j, a.j < a.A && (a.j *= a.La, a.j > a.A && (a.j = a.A)); while (b != a.j && c && a.j < c);
                a.s = a.j
            },
            yq = function(a, b) {
                var c = null != b,
                    d = !c && !a.ta;
                (d || c) && a.C(100, d, b)
            },
            zq = function(a) {
                return a.pb ? a.h.U : a.h.Ba().length
            },
            Aq = function(a, b, c, d, e) {
                return new Zp(a.X.shift(), {
                    Ok: a.pb,
                    Qj: b,
                    Yh: !0,
                    Nk: !!c
                }, function() {
                    var f = Array.prototype.slice.call(arguments);
                    return new Dp(f.shift(), f.shift(), f.shift(), f.shift(), f.shift(), c, d)
                }, a.I, e)
            },
            Dq = function(a, b, c) {
                if (0 < a.na && Bq(b) >=
                    a.na) return !0;
                if (zq(a) > a.j) {
                    if (0 < Bq(b)) return !0;
                    xq(a, c, zq(a));
                    for (var d = a.h.Ba(), e = new qq(d, a.pb), f; f = tq(e, a.j, a.l);)
                        if (b.l.push(new oq([f], !1)), a.o += f.length, a.l -= f.length, 0 >= a.l) {
                            b.I = d.substring(e.h);
                            break
                        } else xq(a, c);
                    Cq(b, a.h, !0);
                    a.h = null;
                    return !0
                }
                if (zq(a) > a.s) return !0;
                Cq(b, a.h, !0);
                a.s -= zq(a) + a.Ma;
                a.o += a.h.G;
                a.l -= a.h.G;
                a.h = null;
                return !1
            };
        var Eq = function(a, b) {
            _.A.call(this);
            this.o = b;
            this.l = {
                rootMargin: a
            };
            this.h = new IntersectionObserver((0, _.y)(this.j, this), this.l)
        };
        _.x(Eq, _.A);
        Eq.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.h = null
        };
        Eq.prototype.j = function(a) {
            for (var b = 0; b < a.length; b++)
                if (0 < a[b].intersectionRatio) {
                    this.o();
                    break
                }
        };
        var Fq = function(a, b, c, d, e, f, g, h) {
                this.l = a;
                this.h = b;
                this.C = [];
                this.I = null;
                this.j = c;
                this.o = d;
                this.W = e;
                this.K = f;
                this.O = g;
                this.F = this.s = null;
                this.A = h || null;
                this.da = this.N = !1;
                this.G = {}
            },
            Gq = function(a) {
                for (var b = new _.af, c = 0; c < a.length; c++) {
                    for (var d = a[c], e = new _.af, f = 0; f < d.h.length; f++) {
                        var g = d.h[f].node;
                        null != g && e.add(g)
                    }
                    d = Vi(e);
                    e = d.length;
                    for (f = 0; f < e; f++) b.add(d[f]);
                    b.size = b.h.size
                }
                return b
            };
        Fq.prototype.trackVisibility = function(a) {
            a = this.s = new Eq("200px", (0, _.y)(this.pb, this, a));
            var b = mq(Gq([].concat(this.h, this.C)));
            Vj(b, (0, _.y)(a.h.observe, a.h));
            a = this.F = new Eq("0px", (0, _.y)(this.X, this));
            b = mq(Gq([].concat(this.h, this.C)));
            Vj(b, (0, _.y)(a.h.observe, a.h))
        };
        Fq.prototype.pb = function(a) {
            this.s && (this.s.h.disconnect(), this.s = null);
            a()
        };
        Fq.prototype.X = function() {
            this.N = !0;
            Hq(this);
            !this.da && this.A && this.A.o()
        };
        var Hq = function(a) {
            a.F && (a.F.h.disconnect(), a.F = null)
        };
        Fq.prototype.pa = function() {
            this.N && !this.da && this.A && this.A.l();
            this.s && (this.s.h.disconnect(), this.s = null);
            Hq(this)
        };
        var Cq = function(a, b, c) {
                c ? (a.h.push(b), a.G[b.Ba()] = !0) : a.C.push(b)
            },
            Bq = function(a) {
                return a.h.length + a.C.length
            },
            Iq = function(a) {
                if (0 == a.l.length) {
                    for (var b = [], c = 0; c < a.h.length; ++c) b.push(a.h[c].Ba());
                    a.l.push(new oq(b, !1))
                }
            };
        Fq.prototype.translate = function(a) {
            function b() {
                d++;
                d == c && e()
            }
            Iq(this);
            for (var c = 0, d = 0, e = function() {}, f = this.j, g = this.o, h = this.W, l = this.K, m = this.O, n = 0; n < this.l.length; ++n) pq(this.l[n], function(p, r, q) {
                p = f.Z.translate(_.pb(p, b), r, q || g, h, ++f.U, l, m, f.O);
                f.pa.push(p);
                return p
            }) && c++;
            0 != c && (e = Up(a));
            return c
        };
        var Jq = function(a, b) {
            _.A.call(this);
            this.h = [];
            this.j = [];
            this.o = a;
            this.W = b
        };
        _.x(Jq, _.A);
        Jq.prototype.l = function(a) {
            var b = (0, _.Rb)(a.href);
            0 == b.indexOf("javascript:") || 0 <= b.indexOf("#") || (this.j.push(a.href), this.h.push(a), a.href = b + "#googtrans/" + this.o + "/" + this.W)
        };
        Jq.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.restore()
        };
        Jq.prototype.restore = function() {
            if (this.h.length) {
                for (var a = 0; a < this.h.length; ++a) this.h[a].href = this.j[a];
                this.h = [];
                this.j = []
            }
        };
        var Kq = function(a, b) {
            _.A.call(this);
            this.h = a;
            this.j = _.kf.test(b) ? "translated-rtl" : "translated-ltr";
            a = [].concat(this.h);
            for (b = 0; b < a.length; ++b) Jj(a[b]) && _.un(a[b], this.j)
        };
        _.x(Kq, _.A);
        Kq.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.restore()
        };
        Kq.prototype.restore = function() {
            for (var a = [].concat(this.h), b = 0; b < a.length; ++b) Jj(a[b]) && _.wn(a[b], this.j)
        };
        _.Lq = function(a, b, c, d, e, f, g, h, l, m) {
            _.A.call(this);
            this.C = a;
            this.od = b;
            this.ya = c || null;
            this.na = m || null;
            this.N = null;
            this.Ab = !!d;
            this.rd = e || "transparent";
            this.qd = !!f;
            this.I = [];
            this.ta = this.G = this.h = !1;
            this.j = h || new _.Mp;
            this.ge = !h;
            this.ma = g || pm.mc();
            this.Rb = new lq;
            this.La = this.Ha = this.K = !1;
            this.Sb = this.l = .5;
            this.Tb = .01;
            this.F = new _.rm(this.l);
            this.U = (this.A = this.Z = !!l) ? new MutationObserver((0, _.y)(this.vj, this)) : null;
            this.W = this.o = null;
            _.D(window, "blur", this.uh, !0, this);
            _.D(window, "focus", this.vh, !0,
                this)
        };
        _.x(_.Lq, _.A);
        _.k = _.Lq.prototype;
        _.k.kb = function() {
            return this.o ? this.o : ""
        };
        _.k.oa = function() {
            return this.W ? this.W : ""
        };
        _.k.Xi = function(a) {
            this.Tj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.k.ah = function(a) {
            this.Uj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.k.Yi = function(a) {
            this.Vj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.k.Zi = function(a) {
            this.Wj.apply(this, arguments);
            this.s && this.s(0, !1, 1)
        };
        _.k.translate = function(a, b, c, d, e) {
            if (d || a != this.o || b != this.W) Mq(this), this.ge && (this.j = new _.Mp);
            else if (this.h) return;
            this.s = c;
            this.de = e;
            this.A = this.Z;
            this.U && this.U.observe(document.body, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            });
            this.h = !0;
            this.o = a;
            this.W = b;
            this.Ab && (this.N = new Jq(a, b));
            this.La = "auto" == this.o;
            this.ya && (c = this.ya, a && (c.A = a), b && (c.C = b));
            this.Ma = new Kq(this.C, this.W);
            this.O = Nq(this);
            (a = this.C instanceof Node ? this.C : null) && Oq(a, this.W)
        };
        var Nq = function(a) {
            var b = new Pp(a, a.ma);
            Qp(b, a.th);
            Sp(b, (0, _.y)(a.Xi, a));
            Tp(b, new uq(a.od, [].concat(a.C), a.ma, a.s, a.A, a.de));
            return b
        };
        _.Lq.prototype.restore = function() {
            Mq(this);
            this.Rb.restore();
            var a = this.C instanceof Node ? this.C : null;
            a && Oq(a, this.kb())
        };
        _.Lq.prototype.L = function() {
            _.A.prototype.L.call(this);
            this.restore();
            _.Ad(window, "blur", this.uh, !0, this);
            _.Ad(window, "focus", this.vh, !0, this)
        };
        var Pq = function(a, b, c, d) {
            var e = a.j.bc(),
                f = new Pp(a, b.I);
            b.F.push(f);
            Rp(f, b.da);
            xq(b, e);
            Qp(f, d || a.ph);
            b = c || new Fq([], [], b, a.kb(), a.oa(), a.ta, a.G, a.na);
            Sp(f, a.Bj, a);
            a.A && Rp(f, b.pa, b);
            Tp(f, b)
        };
        _.k = _.Lq.prototype;
        _.k.Bj = function(a, b, c) {
            c.pa();
            this.G ? this.Zi(a) : this.Yi(a);
            c.j.da()
        };
        _.k.vh = function() {
            this.K = !1;
            this.X = 0;
            qm(this.F, this.l)
        };
        _.k.uh = function(a) {
            a.target == window && (this.K = !0, this.X = 0, qm(this.F, .01))
        };
        _.k.vj = function(a) {
            if (this.h && this.A) {
                for (var b = 0; b < a.length; b++)
                    if (a[b].target && a[b].target.className && "string" === typeof a[b].target.className && (0 <= a[b].target.className.indexOf("translate") || 0 == a[b].target.className.indexOf("goog-"))) return;
                this.ma.add((0, _.y)(this.wk, this))
            }
        };
        _.k.wk = function() {
            this.G = !0;
            this.O.stop();
            this.O = Nq(this);
            return !1
        };
        _.k.th = function(a, b) {
            vq(b, Up(a));
            Pq(this, b);
            return this.Ej
        };
        _.k.Ej = function(a, b) {
            if (!this.h) return Wp;
            if (!Vp(a)) return Xp;
            if (!this.A)
                for (a = 0; a < this.I.length; ++a) {
                    var c = (0, _.y)(this.Rg, this, b, this.I[a]);
                    b.I.add(c)
                }
            return this.Dj
        };
        _.k.oh = function(a, b) {
            if (this.X && !this.K) {
                a = (new Date).getTime() - this.X;
                var c = this.l;
                900 > a && .01 < c ? c = Math.max(.9 * c, .01) : 1100 < a && .5 > c && (c = Math.min(1.5 * c, .5));
                this.l = c;
                this.Ha ? this.Tb = .01 : this.Sb = this.l
            }
            this.G = this.h = !0;
            this.X = (new Date).getTime();
            this.ee != (a = document.body.innerText || document.body.textContent || document.body.innerHTML) ? (this.ee = a, a = !0) : a = !1;
            a ? (this.Ha = !1, this.l = this.Sb, this.K || qm(this.F, this.l), wq(b, [].concat(this.C), this.F), a = new Pp(this, this.F), Qp(a, this.th), Sp(a, (0, _.y)(this.ah, this)),
                Tp(a, b), this.O = a) : (this.Ha = !0, this.l = this.Tb, this.K || qm(this.F, this.l), a = new Pp(this, this.F), Qp(a, this.oh), Sp(a, (0, _.y)(this.ah, this)), Tp(a, b), this.O = a);
            return Wp
        };
        _.k.Dj = function(a, b) {
            if (!this.h) return Wp;
            this.G = this.h = !1;
            this.La ? yq(b, !0) : (yq(b), b.ma(b.o));
            if (this.qd) return this.oh;
            for (a = 0; a < b.F.length; ++a) b.F[a].stop();
            for (a = 0; a < b.pa.length; ++a) lm(b.Z, b.pa[a]);
            return Wp
        };
        var Rq = function(a, b, c) {
                a: {
                    var d = Qq(a),
                        e = a.ya,
                        f = a.rd,
                        g = a.Rb.h;b = Up(b);
                    if (!c.N) {
                        if (0 == c.X.length) {
                            0 == c.o && 0 == c.U && c.C(0, !0);
                            c = !1;
                            break a
                        }
                        c.N = Aq(c, d, e, f, g)
                    }
                    c.Ha = !0;$p(c.N, c.l, c.j, b);c = !0
                }
                return c ? a.ph : a.le
            },
            Qq = function(a) {
                return a.Ab ? (0, _.y)(a.N.l, a.N) : function() {}
            };
        _.k = _.Lq.prototype;
        _.k.ph = function(a, b) {
            if (!this.h) return Wp;
            var c = b.j;
            if (null == c.h) {
                if (!c.Ha) return Rq(this, a, b.j);
                if (!Vp(a)) return Xp;
                c.Ha = !1;
                c.h = c.N.zd || null;
                var d = c.h ? c.h : c.N = null;
                if (!d) return Rq(this, a, b.j);
                this.I.push(d);
                var e = d.Ba();
                if (this.j.has(e, !this.A) || null != b.G[e] && b.G[e]) return e = c.h.G, c.o += e, c.l -= e, c.h = null, this.A && Cq(b, d, !1), Rq(this, a, b.j);
                this.j.h[d.Ba()] = null
            }
            0 < Bq(b) && qm(this.F, .5);
            d = this.j.bc();
            return Dq(c, b, d) ? this.le : Rq(this, a, b.j)
        };
        _.k.le = function(a, b) {
            if (!this.h || 0 == Bq(b)) return Wp;
            Pq(this, b.j);
            return this.A ? (b.trackVisibility(Up(a)), this.Fj) : 0 == b.translate(a) ? Wp : this.rh
        };
        _.k.Fj = function(a, b) {
            return this.h ? Vp(a) ? 0 == b.translate(a) ? Wp : this.rh : Xp : Wp
        };
        _.k.Rg = function(a, b) {
            b.o && this.j.remove(b.l);
            if (!this.h) return !1;
            if (this.j.has(b.Ba(), !1)) {
                var c = this.j;
                if (c.has(b.l, !1)) {
                    var d = b.l,
                        e = c.h[d];
                    e || (e = c.j[d], c.h[d] = e);
                    b.j = e;
                    b.O = !0
                } else c.remove(b.l), b.o = !0;
                Kp(b)
            } else if (c = this.j, b.o) c.remove(b.l);
            else if (b.F) {
                d = b.F.replace(/<a /g, "<span ").replace(/\/a>/g, "/span>");
                b.O = !0;
                delete b.F;
                b.F = null;
                b.j = [];
                e = _.Wc(document, "div");
                _.R(e, !1);
                d = _.Ec(0 <= d.indexOf("<i>") ? d : "<b>" + d + "</b>");
                void 0 !== e.tagName && _.vi(e);
                e.innerHTML = _.Dc(d);
                document.body.appendChild(e);
                d = [];
                var f;
                for (f = e.firstChild; f; f = f.nextSibling)
                    if ("I" == f.tagName) var g = Ip(b, Qj(f), f.innerHTML);
                    else if ("B" == f.tagName) {
                    g || (g = Ip(b, "", ""));
                    if (1 == b.h.length) Np(g.qa, d, 0, f);
                    else {
                        var h = f;
                        var l = b.h;
                        g = g.qa;
                        for (var m = [], n = h.firstChild; n; n = p) {
                            var p = n.nextSibling;
                            Op(n)
                        }
                        for (p = h.firstChild; p; p = p.nextSibling) p.attributes && p.attributes.i ? (h = parseInt(p.attributes.i.nodeValue, 10), !isNaN(h) && 0 <= h && h < l.length && (l[h].Le && m[h] ? m[h].la += p.firstChild && 3 == p.firstChild.nodeType ? p.firstChild.nodeValue : Qj(p) : m[h] = Np(g, d,
                            h, p))) : 3 == p.nodeType && g.push({
                            ha: -1,
                            la: Dj(p.nodeValue)
                        });
                        null != g && 0 < g.length && -1 == g[0].ha && (1 == g.length ? g[0].ha = 0 : (g[1].la = g[0].la + g[1].la, g.shift()))
                    }
                    g = void 0
                }
                f = b.j;
                for (l = 0; l < f.length - 1; ++l) g = f[l], m = yj(g.qa[g.qa.length - 1].la), m = m.charCodeAt(m.length - 1), 12288 <= m && 12351 >= m || 65280 <= m && 65519 >= m || (g.qa[g.qa.length - 1].la += " ");
                _.Ij(e);
                for (e = 0; e < b.h.length; ++e) e < d.length && e < b.C.length && null != d[e] && (f = b.C[e], l = d[e].start, null != l && (g = f.substring(0, f.length - f.replace(/^[\s\xa0]+/, "").length), " " == g && (g = ""),
                    g && (l.la = g + l.la.replace(/^[\s\xa0]+/, ""))), l = d[e].end, null != l && (f = f.substring(yj(f).length), " " == f && (f = ""), f && (l.la = yj(l.la) + f)));
                1 != b.j.length || b.j[0].Wf || (b.j[0].Wf = b.l);
                c.write(b.l, b.j);
                Kp(b)
            }
            b.N || (this.La = !1);
            c = b.o ? !0 : void 0;
            a.K += b.G;
            null != c && (a.ta = !0);
            b = Math.min(Math.floor(100 * a.K / a.o), 100);
            if (a.G != b || c) a.G = b, a.O ? (a.C(a.G, !0, c), a.ma(a.K)) : a.C(a.G, !1, c);
            return !1
        };
        _.k.rh = function(a, b) {
            if (!this.h) return Wp;
            if (!Vp(a)) return Xp;
            if (1 < Bq(b)) {
                a = b.l[0];
                var c = b.h;
                if (a.l || 0 == c.length || null == a.h || 0 == a.h.length) a = null;
                else {
                    for (var d = [], e = [], f = 0; f < a.h.length && f < c.length; ++f) {
                        var g = a.h[f];
                        g && g[0] && 200 == g[1] || (e.push(c[f]), d.push(a.s[f]))
                    }
                    a = 0 < e.length ? {
                        xk: new oq(d, !0),
                        yk: e
                    } : null
                }
                a = a ? new Fq([a.xk], a.yk, b.j, b.o, b.W, b.K, b.O, b.A) : null;
                null != a && Pq(this, b.j, a, this.le)
            } else {
                a = !1;
                for (c = 0; c < b.l.length; ++c) d = b.l[c], d.l || 200 == d.j && d.h && d.h[0] ? d = d.o = !1 : (d.l = !0, d = d.o = !0), a = d || a;
                if (a) return this.le
            }
            d =
                this.kb();
            a = this.oa();
            if (1 < b.h.length)
                if (c = b.l[0], e = "auto" == d, d = b.h, 200 == c.j)
                    for (f = 0; f < c.h.length && f < d.length; ++f)
                        if ((g = c.h[f]) && 200 == g[1]) {
                            var h = g[2],
                                l = d[f],
                                m = l,
                                n = null != h && h == a;
                            m.F = g[0];
                            void 0 !== n && (m.K = n);
                            l.N = e && null == h
                        } else d[f].o = !0;
            else
                for (a = 0; a < d.length; ++a) d[a].o = !0;
            else {
                c = new nq("auto" == d);
                for (d = 0; d < b.l.length; ++d) f = b.l[d], e = a, 200 == f.j && f.h && f.h[0] ? (f = f.h[0], c.h.push(f[0]), f = f[2], c.j = c.j && null != f && f == e, null != f && (c.o = !1)) : 500 != f.j && (c.l = !0);
                null != b.I && (c.h.push(b.I), b.I = null);
                if (a = b.h[0]) d =
                    c.j, a.F = c.Ba(), void 0 !== d && (a.K = d), a.N = c.o, a.o = c.l
            }
            if (this.A) {
                a = (0, _.y)(this.Rg, this);
                for (c = 0; c < b.h.length; c++) a(b.j, b.h[c]);
                for (c = 0; c < b.C.length; c++) a(b.j, b.C[c]);
                Hq(b);
                b.da = !0;
                b.N && b.A && b.A.l()
            }
            return Wp
        };
        var Mq = function(a) {
                a.U && a.U.disconnect();
                a.na && a.na.reset();
                a.h && (a.O.stop(), a.h = !1, a.G = !1);
                if (a.I.length) {
                    for (var b = 0; b < a.I.length; ++b) a.I[b].P();
                    a.I = []
                }
                null != a.N && (a.N.restore(), a.N = null);
                null != a.Ma && (a.Ma.restore(), a.Ma = null)
            },
            Oq = function(a, b) {
                a.getAttribute("xml:lang") && a.setAttribute("xml:lang", b);
                a.getAttribute("lang") && a.setAttribute("lang", b)
            };
        _.Tl.attach(3046, _.Lq.prototype, {
            Tj: 1,
            Vj: 2,
            Uj: 3,
            Wj: 4
        });
        var Li = function(a) {
            if (a && (a = String(a), a = a.split("."), a.length)) {
                for (var b = window, c = 0; c < a.length; ++c) {
                    var d = a[c];
                    if (!(d && d in b)) return;
                    b = b[d]
                }
                return b
            }
        };

    } catch (e) {
        _._DumpException(e)
    }
    try {
        _.na("el_main");

        /*

         (The MIT License)

         Copyright (C) 2014 by Vitaly Puzrin

         Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to deal
         in the Software without restriction, including without limitation the rights
         to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:

         The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.

         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         THE SOFTWARE.

         -----------------------------------------------------------------------------
         Ported from zlib, which is under the following license
         https://github.com/madler/zlib/blob/master/zlib.h

         zlib.h -- interface of the 'zlib' general purpose compression library
           version 1.2.8, April 28th, 2013
           Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
           This software is provided 'as-is', without any express or implied
           warranty.  In no event will the authors be held liable for any damages
           arising from the use of this software.
           Permission is granted to anyone to use this software for any purpose,
           including commercial applications, and to alter it and redistribute it
           freely, subject to the following restrictions:
           1. The origin of this software must not be misrepresented; you must not
              claim that you wrote the original software. If you use this software
              in a product, an acknowledgment in the product documentation would be
              appreciated but is not required.
           2. Altered source versions must be plainly marked as such, and must not be
              misrepresented as being the original software.
           3. This notice may not be removed or altered from any source distribution.
           Jean-loup Gailly        Mark Adler
           jloup@gzip.org          madler@alumni.caltech.edu
           The data format used by the zlib library is described by RFCs (Request for
           Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
           (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
        */
        var Tq = function(a, b, c, d) {
                a = _.Fh(a, b, c);
                Array.isArray(a) || (a = _.Ch);
                b = _.Fg(a);
                b & 1 || _.Hg(a);
                d && (b & 2 || _.Eg(a, 2));
                return a
            },
            Uq = function(a, b) {
                return _.Tg(b)
            },
            Wq = function(a, b) {
                b.Cd && (a.Cd = b.Cd.slice());
                var c = b.Va;
                if (c) {
                    b = b.h;
                    for (var d in c) {
                        var e = c[d];
                        if (e) {
                            var f = !(!b || !b[d]),
                                g = +d;
                            if (Array.isArray(e)) {
                                if (e.length)
                                    for (f = Vq(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Wq(f[g], e[g])
                            } else throw Error("ja`" + _.kb(e) + "`" + e);
                        }
                    }
                }
            },
            Yq = function(a) {
                if (!a) return a;
                if ("object" === typeof a) {
                    if (_.Qg && null !=
                        a && a instanceof Uint8Array) return new Uint8Array(a);
                    if (a.ze === _.Wg) return Xq(a)
                }
                return a
            },
            Zq = function(a) {
                var b = {};
                a.forEach(function(c) {
                    b[c[0]] = c[1]
                });
                return function(c) {
                    return b[c.find(function(d) {
                        return d in b
                    })] || ""
                }
            },
            $q = function(a) {
                var b = _.Ba();
                if ("Internet Explorer" === a) {
                    if (_.Da())
                        if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
                        else {
                            a = "";
                            var c = /MSIE +([\d\.]+)/.exec(b);
                            if (c && c[1])
                                if (b = /Trident\/(\d.\d)/.exec(b), "7.0" == c[1])
                                    if (b && b[1]) switch (b[1]) {
                                        case "4.0":
                                            a = "8.0";
                                            break;
                                        case "5.0":
                                            a = "9.0";
                                            break;
                                        case "6.0":
                                            a = "10.0";
                                            break;
                                        case "7.0":
                                            a = "11.0"
                                    } else a = "7.0";
                                    else a = c[1];
                            b = a
                        }
                    else b = "";
                    return b
                }
                var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
                c = [];
                for (var e; e = d.exec(b);) c.push([e[1], e[2], e[3] || void 0]);
                b = Zq(c);
                switch (a) {
                    case "Opera":
                        if (_.u("Opera")) return b(["Version", "Opera"]);
                        if (_.u("OPR")) return b(["OPR"]);
                        break;
                    case "Microsoft Edge":
                        if (_.u("Edge")) return b(["Edge"]);
                        if (_.u("Edg/")) return b(["Edg"]);
                        break;
                    case "Chromium":
                        if (_.ug()) return b(["Chrome", "CriOS", "HeadlessChrome"])
                }
                return "Firefox" ===
                    a && _.tg() || "Safari" === a && _.vg() || "Android Browser" === a && _.wg() || "Silk" === a && _.u("Silk") ? (b = c[2]) && b[1] || "" : ""
            },
            ar = function(a) {
                a = $q(a);
                if ("" === a) return NaN;
                a = a.split(".");
                return 0 === a.length ? NaN : Number(a[0])
            },
            br = function() {
                var a = _.Ba(),
                    b = "";
                _.u("Windows") ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a = b.exec(a)) ? a[1] : "0.0") : _.Fa() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a = b.exec(a)) && a[1].replace(/_/g, ".")) : _.u("Macintosh") ? (b = /Mac OS X ([0-9_.]+)/, b = (a = b.exec(a)) ? a[1].replace(/_/g, ".") : "10") : -1 !=
                    _.Ba().toLowerCase().indexOf("kaios") ? (b = /(?:KaiOS)\/(\S+)/i, b = (a = b.exec(a)) && a[1]) : _.u("Android") ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a = b.exec(a)) && a[1]) : _.u("CrOS") && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a = b.exec(a)) && a[1]);
                return 0 <= _.hj(b || "", 12)
            },
            cr = function(a) {
                return _.Gh(a, this.kf, this.h, !0)
            },
            dr = function() {
                function a() {
                    e[0] = 1732584193;
                    e[1] = 4023233417;
                    e[2] = 2562383102;
                    e[3] = 271733878;
                    e[4] = 3285377520;
                    n = m = 0
                }

                function b(p) {
                    for (var r = g, q = 0; 64 > q; q += 4) r[q / 4] = p[q] << 24 | p[q + 1] << 16 | p[q + 2] << 8 | p[q +
                        3];
                    for (q = 16; 80 > q; q++) p = r[q - 3] ^ r[q - 8] ^ r[q - 14] ^ r[q - 16], r[q] = (p << 1 | p >>> 31) & 4294967295;
                    p = e[0];
                    var w = e[1],
                        O = e[2],
                        P = e[3],
                        Ca = e[4];
                    for (q = 0; 80 > q; q++) {
                        if (40 > q)
                            if (20 > q) {
                                var fa = P ^ w & (O ^ P);
                                var ee = 1518500249
                            } else fa = w ^ O ^ P, ee = 1859775393;
                        else 60 > q ? (fa = w & O | P & (w | O), ee = 2400959708) : (fa = w ^ O ^ P, ee = 3395469782);
                        fa = ((p << 5 | p >>> 27) & 4294967295) + fa + Ca + ee + r[q] & 4294967295;
                        Ca = P;
                        P = O;
                        O = (w << 30 | w >>> 2) & 4294967295;
                        w = p;
                        p = fa
                    }
                    e[0] = e[0] + p & 4294967295;
                    e[1] = e[1] + w & 4294967295;
                    e[2] = e[2] + O & 4294967295;
                    e[3] = e[3] + P & 4294967295;
                    e[4] = e[4] + Ca & 4294967295
                }

                function c(p, r) {
                    if ("string" === typeof p) {
                        p = unescape(encodeURIComponent(p));
                        for (var q = [], w = 0, O = p.length; w < O; ++w) q.push(p.charCodeAt(w));
                        p = q
                    }
                    r || (r = p.length);
                    q = 0;
                    if (0 == m)
                        for (; q + 64 < r;) b(p.slice(q, q + 64)), q += 64, n += 64;
                    for (; q < r;)
                        if (f[m++] = p[q++], n++, 64 == m)
                            for (m = 0, b(f); q + 64 < r;) b(p.slice(q, q + 64)), q += 64, n += 64
                }

                function d() {
                    var p = [],
                        r = 8 * n;
                    56 > m ? c(h, 56 - m) : c(h, 64 - (m - 56));
                    for (var q = 63; 56 <= q; q--) f[q] = r & 255, r >>>= 8;
                    b(f);
                    for (q = r = 0; 5 > q; q++)
                        for (var w = 24; 0 <= w; w -= 8) p[r++] = e[q] >> w & 255;
                    return p
                }
                for (var e = [], f = [], g = [], h = [128],
                        l = 1; 64 > l; ++l) h[l] = 0;
                var m, n;
                a();
                return {
                    reset: a,
                    update: c,
                    digest: d,
                    Vi: function() {
                        for (var p = d(), r = "", q = 0; q < p.length; q++) r += "0123456789ABCDEF".charAt(Math.floor(p[q] / 16)) + "0123456789ABCDEF".charAt(p[q] % 16);
                        return r
                    }
                }
            },
            er = function(a, b, c) {
                _.vh(a.url, function(d) {
                    d = d.target;
                    d.se() ? b(d.Bd()) : c(d.Sc())
                }, a.vk, a.body, a.dg, a.rg, a.withCredentials)
            },
            fr = function() {
                this.o = "https://play.google.com/log?format=json&hasfast=true";
                this.A = er;
                this.h = !1
            },
            gr = function(a) {
                for (var b = a.length; 0 <= --b;) a[b] = 0
            },
            hr = function(a, b, c,
                d, e) {
                this.fi = a;
                this.fj = b;
                this.ej = c;
                this.Wi = d;
                this.ck = e;
                this.xh = a && a.length
            },
            ir = function(a, b) {
                this.Yg = a;
                this.bd = 0;
                this.sc = b
            },
            jr = function(a, b) {
                a.ra[a.pending++] = b & 255;
                a.ra[a.pending++] = b >>> 8 & 255
            },
            kr = function(a, b, c) {
                a.Ja > 16 - c ? (a.Ta |= b << a.Ja & 65535, jr(a, a.Ta), a.Ta = b >> 16 - a.Ja, a.Ja += c - 16) : (a.Ta |= b << a.Ja & 65535, a.Ja += c)
            },
            lr = function(a, b, c) {
                kr(a, c[2 * b], c[2 * b + 1])
            },
            mr = function(a, b) {
                var c = 0;
                do c |= a & 1, a >>>= 1, c <<= 1; while (0 < --b);
                return c >>> 1
            },
            nr = function(a, b, c) {
                var d = Array(16),
                    e = 0,
                    f;
                for (f = 1; 15 >= f; f++) d[f] = e = e + c[f -
                    1] << 1;
                for (c = 0; c <= b; c++) e = a[2 * c + 1], 0 !== e && (a[2 * c] = mr(d[e]++, e))
            },
            or = function(a) {
                var b;
                for (b = 0; 286 > b; b++) a.ab[2 * b] = 0;
                for (b = 0; 30 > b; b++) a.Cc[2 * b] = 0;
                for (b = 0; 19 > b; b++) a.Na[2 * b] = 0;
                a.ab[512] = 1;
                a.ec = a.jd = 0;
                a.wb = a.matches = 0
            },
            pr = function(a) {
                8 < a.Ja ? jr(a, a.Ta) : 0 < a.Ja && (a.ra[a.pending++] = a.Ta);
                a.Ta = 0;
                a.Ja = 0
            },
            qr = function(a, b, c) {
                pr(a);
                jr(a, c);
                jr(a, ~c);
                X.Oc(a.ra, a.window, b, c, a.pending);
                a.pending += c
            },
            rr = function(a, b, c, d) {
                var e = 2 * b,
                    f = 2 * c;
                return a[e] < a[f] || a[e] === a[f] && d[b] <= d[c]
            },
            sr = function(a, b, c) {
                for (var d = a.va[c],
                        e = c << 1; e <= a.Zb;) {
                    e < a.Zb && rr(b, a.va[e + 1], a.va[e], a.depth) && e++;
                    if (rr(b, d, a.va[e], a.depth)) break;
                    a.va[c] = a.va[e];
                    c = e;
                    e <<= 1
                }
                a.va[c] = d
            },
            zr = function(a, b, c) {
                var d = 0;
                if (0 !== a.wb) {
                    do {
                        var e = a.ra[a.xd + 2 * d] << 8 | a.ra[a.xd + 2 * d + 1];
                        var f = a.ra[a.If + d];
                        d++;
                        if (0 === e) lr(a, f, b);
                        else {
                            var g = tr[f];
                            lr(a, g + 256 + 1, b);
                            var h = ur[g];
                            0 !== h && (f -= vr[g], kr(a, f, h));
                            e--;
                            g = 256 > e ? wr[e] : wr[256 + (e >>> 7)];
                            lr(a, g, c);
                            h = xr[g];
                            0 !== h && (e -= yr[g], kr(a, e, h))
                        }
                    } while (d < a.wb)
                }
                lr(a, 256, b)
            },
            Ar = function(a, b) {
                var c = b.Yg,
                    d = b.sc.fi,
                    e = b.sc.xh,
                    f = b.sc.Wi,
                    g, h = -1;
                a.Zb = 0;
                a.Vc = 573;
                for (g = 0; g < f; g++) 0 !== c[2 * g] ? (a.va[++a.Zb] = h = g, a.depth[g] = 0) : c[2 * g + 1] = 0;
                for (; 2 > a.Zb;) {
                    var l = a.va[++a.Zb] = 2 > h ? ++h : 0;
                    c[2 * l] = 1;
                    a.depth[l] = 0;
                    a.ec--;
                    e && (a.jd -= d[2 * l + 1])
                }
                b.bd = h;
                for (g = a.Zb >> 1; 1 <= g; g--) sr(a, c, g);
                l = f;
                do g = a.va[1], a.va[1] = a.va[a.Zb--], sr(a, c, 1), d = a.va[1], a.va[--a.Vc] = g, a.va[--a.Vc] = d, c[2 * l] = c[2 * g] + c[2 * d], a.depth[l] = (a.depth[g] >= a.depth[d] ? a.depth[g] : a.depth[d]) + 1, c[2 * g + 1] = c[2 * d + 1] = l, a.va[1] = l++, sr(a, c, 1); while (2 <= a.Zb);
                a.va[--a.Vc] = a.va[1];
                g = b.Yg;
                l = b.bd;
                d = b.sc.fi;
                e = b.sc.xh;
                f = b.sc.fj;
                var m = b.sc.ej,
                    n = b.sc.ck,
                    p, r = 0;
                for (p = 0; 15 >= p; p++) a.Ub[p] = 0;
                g[2 * a.va[a.Vc] + 1] = 0;
                for (b = a.Vc + 1; 573 > b; b++) {
                    var q = a.va[b];
                    p = g[2 * g[2 * q + 1] + 1] + 1;
                    p > n && (p = n, r++);
                    g[2 * q + 1] = p;
                    if (!(q > l)) {
                        a.Ub[p]++;
                        var w = 0;
                        q >= m && (w = f[q - m]);
                        var O = g[2 * q];
                        a.ec += O * (p + w);
                        e && (a.jd += O * (d[2 * q + 1] + w))
                    }
                }
                if (0 !== r) {
                    do {
                        for (p = n - 1; 0 === a.Ub[p];) p--;
                        a.Ub[p]--;
                        a.Ub[p + 1] += 2;
                        a.Ub[n]--;
                        r -= 2
                    } while (0 < r);
                    for (p = n; 0 !== p; p--)
                        for (q = a.Ub[p]; 0 !== q;) d = a.va[--b], d > l || (g[2 * d + 1] !== p && (a.ec += (p - g[2 * d + 1]) * g[2 * d], g[2 * d + 1] = p), q--)
                }
                nr(c, h, a.Ub)
            },
            Br = function(a,
                b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    h = 7,
                    l = 4;
                0 === f && (h = 138, l = 3);
                b[2 * (c + 1) + 1] = 65535;
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    ++g < h && m === f || (g < l ? a.Na[2 * m] += g : 0 !== m ? (m !== e && a.Na[2 * m]++, a.Na[32]++) : 10 >= g ? a.Na[34]++ : a.Na[36]++, g = 0, e = m, 0 === f ? (h = 138, l = 3) : m === f ? (h = 6, l = 3) : (h = 7, l = 4))
                }
            },
            Cr = function(a, b, c) {
                var d, e = -1,
                    f = b[1],
                    g = 0,
                    h = 7,
                    l = 4;
                0 === f && (h = 138, l = 3);
                for (d = 0; d <= c; d++) {
                    var m = f;
                    f = b[2 * (d + 1) + 1];
                    if (!(++g < h && m === f)) {
                        if (g < l) {
                            do lr(a, m, a.Na); while (0 !== --g)
                        } else 0 !== m ? (m !== e && (lr(a, m, a.Na), g--), lr(a, 16, a.Na), kr(a, g - 3, 2)) : 10 >=
                            g ? (lr(a, 17, a.Na), kr(a, g - 3, 3)) : (lr(a, 18, a.Na), kr(a, g - 11, 7));
                        g = 0;
                        e = m;
                        0 === f ? (h = 138, l = 3) : m === f ? (h = 6, l = 3) : (h = 7, l = 4)
                    }
                }
            },
            Dr = function(a) {
                var b = 4093624447,
                    c;
                for (c = 0; 31 >= c; c++, b >>>= 1)
                    if (b & 1 && 0 !== a.ab[2 * c]) return 0;
                if (0 !== a.ab[18] || 0 !== a.ab[20] || 0 !== a.ab[26]) return 1;
                for (c = 32; 256 > c; c++)
                    if (0 !== a.ab[2 * c]) return 1;
                return 0
            },
            Er = function(a, b, c) {
                a.ra[a.xd + 2 * a.wb] = b >>> 8 & 255;
                a.ra[a.xd + 2 * a.wb + 1] = b & 255;
                a.ra[a.If + a.wb] = c & 255;
                a.wb++;
                0 === b ? a.ab[2 * c]++ : (a.matches++, b--, a.ab[2 * (tr[c] + 256 + 1)]++, a.Cc[2 * (256 > b ? wr[b] : wr[256 + (b >>>
                    7)])]++);
                return a.wb === a.Dd - 1
            },
            Gr = function(a, b) {
                a.msg = Fr[b];
                return b
            },
            Hr = function(a) {
                for (var b = a.length; 0 <= --b;) a[b] = 0
            },
            Ir = function(a) {
                var b = a.state,
                    c = b.pending;
                c > a.ga && (c = a.ga);
                0 !== c && (X.Oc(a.Ed, b.ra, b.Fd, c, a.cd), a.cd += c, b.Fd += c, a.sg += c, a.ga -= c, b.pending -= c, 0 === b.pending && (b.Fd = 0))
            },
            Mr = function(a, b) {
                var c = 0 <= a.jb ? a.jb : -1,
                    d = a.M - a.jb,
                    e = 0;
                if (0 < a.level) {
                    2 === a.ea.lf && (a.ea.lf = Dr(a));
                    Ar(a, a.ve);
                    Ar(a, a.ce);
                    Br(a, a.ab, a.ve.bd);
                    Br(a, a.Cc, a.ce.bd);
                    Ar(a, a.Tg);
                    for (e = 18; 3 <= e && 0 === a.Na[2 * Jr[e] + 1]; e--);
                    a.ec += 3 *
                        (e + 1) + 14;
                    var f = a.ec + 3 + 7 >>> 3;
                    var g = a.jd + 3 + 7 >>> 3;
                    g <= f && (f = g)
                } else f = g = d + 5;
                if (d + 4 <= f && -1 !== c) kr(a, b ? 1 : 0, 3), qr(a, c, d);
                else if (4 === a.Ob || g === f) kr(a, 2 + (b ? 1 : 0), 3), zr(a, Kr, Lr);
                else {
                    kr(a, 4 + (b ? 1 : 0), 3);
                    c = a.ve.bd + 1;
                    d = a.ce.bd + 1;
                    e += 1;
                    kr(a, c - 257, 5);
                    kr(a, d - 1, 5);
                    kr(a, e - 4, 4);
                    for (f = 0; f < e; f++) kr(a, a.Na[2 * Jr[f] + 1], 3);
                    Cr(a, a.ab, c - 1);
                    Cr(a, a.Cc, d - 1);
                    zr(a, a.ab, a.Cc)
                }
                or(a);
                b && pr(a);
                a.jb = a.M;
                Ir(a.ea)
            },
            Y = function(a, b) {
                a.ra[a.pending++] = b
            },
            Nr = function(a, b) {
                a.ra[a.pending++] = b >>> 8 & 255;
                a.ra[a.pending++] = b & 255
            },
            Or = function(a, b) {
                var c =
                    a.Kh,
                    d = a.M,
                    e = a.lb,
                    f = a.Nh,
                    g = a.M > a.Qa - 262 ? a.M - (a.Qa - 262) : 0,
                    h = a.window,
                    l = a.uc,
                    m = a.Mb,
                    n = a.M + 258,
                    p = h[d + e - 1],
                    r = h[d + e];
                a.lb >= a.kh && (c >>= 2);
                f > a.S && (f = a.S);
                do {
                    var q = b;
                    if (h[q + e] === r && h[q + e - 1] === p && h[q] === h[d] && h[++q] === h[d + 1]) {
                        d += 2;
                        for (q++; h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && h[++d] === h[++q] && d < n;);
                        q = 258 - (n - d);
                        d = n - 258;
                        if (q > e) {
                            a.ad = b;
                            e = q;
                            if (q >= f) break;
                            p = h[d + e - 1];
                            r = h[d + e]
                        }
                    }
                } while ((b = m[b & l]) > g && 0 !== --c);
                return e <= a.S ? e : a.S
            },
            Rr = function(a) {
                var b =
                    a.Qa,
                    c;
                do {
                    var d = a.ji - a.S - a.M;
                    if (a.M >= b + (b - 262)) {
                        X.Oc(a.window, a.window, b, b, 0);
                        a.ad -= b;
                        a.M -= b;
                        a.jb -= b;
                        var e = c = a.qe;
                        do {
                            var f = a.head[--e];
                            a.head[e] = f >= b ? f - b : 0
                        } while (--c);
                        e = c = b;
                        do f = a.Mb[--e], a.Mb[e] = f >= b ? f - b : 0; while (--c);
                        d += b
                    }
                    if (0 === a.ea.Sa) break;
                    e = a.ea;
                    c = a.window;
                    f = a.M + a.S;
                    var g = e.Sa;
                    g > d && (g = d);
                    0 === g ? c = 0 : (e.Sa -= g, X.Oc(c, e.input, e.Kc, g, f), 1 === e.state.Ia ? e.ca = Pr(e.ca, c, g, f) : 2 === e.state.Ia && (e.ca = Qr(e.ca, c, g, f)), e.Kc += g, e.Lc += g, c = g);
                    a.S += c;
                    if (3 <= a.S + a.eb)
                        for (d = a.M - a.eb, a.fa = a.window[d], a.fa = (a.fa << a.Yb ^
                                a.window[d + 1]) & a.Xb; a.eb && !(a.fa = (a.fa << a.Yb ^ a.window[d + 3 - 1]) & a.Xb, a.Mb[d & a.uc] = a.head[a.fa], a.head[a.fa] = d, d++, a.eb--, 3 > a.S + a.eb););
                } while (262 > a.S && 0 !== a.ea.Sa)
            },
            Sr = function(a, b) {
                for (var c;;) {
                    if (262 > a.S) {
                        Rr(a);
                        if (262 > a.S && 0 === b) return 1;
                        if (0 === a.S) break
                    }
                    c = 0;
                    3 <= a.S && (a.fa = (a.fa << a.Yb ^ a.window[a.M + 3 - 1]) & a.Xb, c = a.Mb[a.M & a.uc] = a.head[a.fa], a.head[a.fa] = a.M);
                    0 !== c && a.M - c <= a.Qa - 262 && (a.ja = Or(a, c));
                    if (3 <= a.ja)
                        if (c = Er(a, a.M - a.ad, a.ja - 3), a.S -= a.ja, a.ja <= a.Qf && 3 <= a.S) {
                            a.ja--;
                            do a.M++, a.fa = (a.fa << a.Yb ^ a.window[a.M +
                                3 - 1]) & a.Xb, a.Mb[a.M & a.uc] = a.head[a.fa], a.head[a.fa] = a.M; while (0 !== --a.ja);
                            a.M++
                        } else a.M += a.ja, a.ja = 0, a.fa = a.window[a.M], a.fa = (a.fa << a.Yb ^ a.window[a.M + 1]) & a.Xb;
                    else c = Er(a, 0, a.window[a.M]), a.S--, a.M++;
                    if (c && (Mr(a, !1), 0 === a.ea.ga)) return 1
                }
                a.eb = 2 > a.M ? a.M : 2;
                return 4 === b ? (Mr(a, !0), 0 === a.ea.ga ? 3 : 4) : a.wb && (Mr(a, !1), 0 === a.ea.ga) ? 1 : 2
            },
            Tr = function(a, b) {
                for (var c, d;;) {
                    if (262 > a.S) {
                        Rr(a);
                        if (262 > a.S && 0 === b) return 1;
                        if (0 === a.S) break
                    }
                    c = 0;
                    3 <= a.S && (a.fa = (a.fa << a.Yb ^ a.window[a.M + 3 - 1]) & a.Xb, c = a.Mb[a.M & a.uc] = a.head[a.fa],
                        a.head[a.fa] = a.M);
                    a.lb = a.ja;
                    a.Uh = a.ad;
                    a.ja = 2;
                    0 !== c && a.lb < a.Qf && a.M - c <= a.Qa - 262 && (a.ja = Or(a, c), 5 >= a.ja && (1 === a.Ob || 3 === a.ja && 4096 < a.M - a.ad) && (a.ja = 2));
                    if (3 <= a.lb && a.ja <= a.lb) {
                        d = a.M + a.S - 3;
                        c = Er(a, a.M - 1 - a.Uh, a.lb - 3);
                        a.S -= a.lb - 1;
                        a.lb -= 2;
                        do ++a.M <= d && (a.fa = (a.fa << a.Yb ^ a.window[a.M + 3 - 1]) & a.Xb, a.Mb[a.M & a.uc] = a.head[a.fa], a.head[a.fa] = a.M); while (0 !== --a.lb);
                        a.Jc = 0;
                        a.ja = 2;
                        a.M++;
                        if (c && (Mr(a, !1), 0 === a.ea.ga)) return 1
                    } else if (a.Jc) {
                        if ((c = Er(a, 0, a.window[a.M - 1])) && Mr(a, !1), a.M++, a.S--, 0 === a.ea.ga) return 1
                    } else a.Jc =
                        1, a.M++, a.S--
                }
                a.Jc && (Er(a, 0, a.window[a.M - 1]), a.Jc = 0);
                a.eb = 2 > a.M ? a.M : 2;
                return 4 === b ? (Mr(a, !0), 0 === a.ea.ga ? 3 : 4) : a.wb && (Mr(a, !1), 0 === a.ea.ga) ? 1 : 2
            },
            Ur = function(a, b) {
                for (var c, d, e, f = a.window;;) {
                    if (258 >= a.S) {
                        Rr(a);
                        if (258 >= a.S && 0 === b) return 1;
                        if (0 === a.S) break
                    }
                    a.ja = 0;
                    if (3 <= a.S && 0 < a.M && (d = a.M - 1, c = f[d], c === f[++d] && c === f[++d] && c === f[++d])) {
                        for (e = a.M + 258; c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && c === f[++d] && d < e;);
                        a.ja = 258 - (e - d);
                        a.ja > a.S && (a.ja = a.S)
                    }
                    3 <= a.ja ? (c = Er(a, 1,
                        a.ja - 3), a.S -= a.ja, a.M += a.ja, a.ja = 0) : (c = Er(a, 0, a.window[a.M]), a.S--, a.M++);
                    if (c && (Mr(a, !1), 0 === a.ea.ga)) return 1
                }
                a.eb = 0;
                return 4 === b ? (Mr(a, !0), 0 === a.ea.ga ? 3 : 4) : a.wb && (Mr(a, !1), 0 === a.ea.ga) ? 1 : 2
            },
            Vr = function(a, b) {
                for (var c;;) {
                    if (0 === a.S && (Rr(a), 0 === a.S)) {
                        if (0 === b) return 1;
                        break
                    }
                    a.ja = 0;
                    c = Er(a, 0, a.window[a.M]);
                    a.S--;
                    a.M++;
                    if (c && (Mr(a, !1), 0 === a.ea.ga)) return 1
                }
                a.eb = 0;
                return 4 === b ? (Mr(a, !0), 0 === a.ea.ga ? 3 : 4) : a.wb && (Mr(a, !1), 0 === a.ea.ga) ? 1 : 2
            },
            Wr = function(a, b, c, d, e) {
                this.ij = a;
                this.bk = b;
                this.hk = c;
                this.ak = d;
                this.hj = e
            },
            Xr = function() {
                this.ea = null;
                this.status = 0;
                this.ra = null;
                this.Ia = this.pending = this.Fd = this.yb = 0;
                this.aa = null;
                this.Cb = 0;
                this.method = 8;
                this.Yc = -1;
                this.uc = this.ug = this.Qa = 0;
                this.window = null;
                this.ji = 0;
                this.head = this.Mb = null;
                this.Nh = this.kh = this.Ob = this.level = this.Qf = this.Kh = this.lb = this.S = this.ad = this.M = this.Jc = this.Uh = this.ja = this.jb = this.Yb = this.Xb = this.Df = this.qe = this.fa = 0;
                this.ab = new X.Pb(1146);
                this.Cc = new X.Pb(122);
                this.Na = new X.Pb(78);
                Hr(this.ab);
                Hr(this.Cc);
                Hr(this.Na);
                this.Tg = this.ce =
                    this.ve = null;
                this.Ub = new X.Pb(16);
                this.va = new X.Pb(573);
                Hr(this.va);
                this.Vc = this.Zb = 0;
                this.depth = new X.Pb(573);
                Hr(this.depth);
                this.Ja = this.Ta = this.eb = this.matches = this.jd = this.ec = this.xd = this.wb = this.Dd = this.If = 0
            },
            Zr = function(a, b) {
                if (!a || !a.state || 5 < b || 0 > b) return a ? Gr(a, -2) : -2;
                var c = a.state;
                if (!a.Ed || !a.input && 0 !== a.Sa || 666 === c.status && 4 !== b) return Gr(a, 0 === a.ga ? -5 : -2);
                c.ea = a;
                var d = c.Yc;
                c.Yc = b;
                if (42 === c.status)
                    if (2 === c.Ia) a.ca = 0, Y(c, 31), Y(c, 139), Y(c, 8), c.aa ? (Y(c, (c.aa.text ? 1 : 0) + (c.aa.nc ? 2 : 0) + (c.aa.jc ?
                        4 : 0) + (c.aa.name ? 8 : 0) + (c.aa.hf ? 16 : 0)), Y(c, c.aa.time & 255), Y(c, c.aa.time >> 8 & 255), Y(c, c.aa.time >> 16 & 255), Y(c, c.aa.time >> 24 & 255), Y(c, 9 === c.level ? 2 : 2 <= c.Ob || 2 > c.level ? 4 : 0), Y(c, c.aa.gm & 255), c.aa.jc && c.aa.jc.length && (Y(c, c.aa.jc.length & 255), Y(c, c.aa.jc.length >> 8 & 255)), c.aa.nc && (a.ca = Qr(a.ca, c.ra, c.pending, 0)), c.Cb = 0, c.status = 69) : (Y(c, 0), Y(c, 0), Y(c, 0), Y(c, 0), Y(c, 0), Y(c, 9 === c.level ? 2 : 2 <= c.Ob || 2 > c.level ? 4 : 0), Y(c, 3), c.status = 113);
                    else {
                        var e = 8 + (c.ug - 8 << 4) << 8;
                        e |= (2 <= c.Ob || 2 > c.level ? 0 : 6 > c.level ? 1 : 6 === c.level ? 2 :
                            3) << 6;
                        0 !== c.M && (e |= 32);
                        c.status = 113;
                        Nr(c, e + (31 - e % 31));
                        0 !== c.M && (Nr(c, a.ca >>> 16), Nr(c, a.ca & 65535));
                        a.ca = 1
                    }
                if (69 === c.status)
                    if (c.aa.jc) {
                        for (e = c.pending; c.Cb < (c.aa.jc.length & 65535) && (c.pending !== c.yb || (c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e)), Ir(a), e = c.pending, c.pending !== c.yb));) Y(c, c.aa.jc[c.Cb] & 255), c.Cb++;
                        c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e));
                        c.Cb === c.aa.jc.length && (c.Cb = 0, c.status = 73)
                    } else c.status = 73;
                if (73 === c.status)
                    if (c.aa.name) {
                        e = c.pending;
                        do {
                            if (c.pending ===
                                c.yb && (c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e)), Ir(a), e = c.pending, c.pending === c.yb)) {
                                var f = 1;
                                break
                            }
                            f = c.Cb < c.aa.name.length ? c.aa.name.charCodeAt(c.Cb++) & 255 : 0;
                            Y(c, f)
                        } while (0 !== f);
                        c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e));
                        0 === f && (c.Cb = 0, c.status = 91)
                    } else c.status = 91;
                if (91 === c.status)
                    if (c.aa.hf) {
                        e = c.pending;
                        do {
                            if (c.pending === c.yb && (c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e)), Ir(a), e = c.pending, c.pending === c.yb)) {
                                f = 1;
                                break
                            }
                            f = c.Cb < c.aa.hf.length ? c.aa.hf.charCodeAt(c.Cb++) &
                                255 : 0;
                            Y(c, f)
                        } while (0 !== f);
                        c.aa.nc && c.pending > e && (a.ca = Qr(a.ca, c.ra, c.pending - e, e));
                        0 === f && (c.status = 103)
                    } else c.status = 103;
                103 === c.status && (c.aa.nc ? (c.pending + 2 > c.yb && Ir(a), c.pending + 2 <= c.yb && (Y(c, a.ca & 255), Y(c, a.ca >> 8 & 255), a.ca = 0, c.status = 113)) : c.status = 113);
                if (0 !== c.pending) {
                    if (Ir(a), 0 === a.ga) return c.Yc = -1, 0
                } else if (0 === a.Sa && (b << 1) - (4 < b ? 9 : 0) <= (d << 1) - (4 < d ? 9 : 0) && 4 !== b) return Gr(a, -5);
                if (666 === c.status && 0 !== a.Sa) return Gr(a, -5);
                if (0 !== a.Sa || 0 !== c.S || 0 !== b && 666 !== c.status) {
                    d = 2 === c.Ob ? Vr(c, b) : 3 ===
                        c.Ob ? Ur(c, b) : Yr[c.level].hj(c, b);
                    if (3 === d || 4 === d) c.status = 666;
                    if (1 === d || 3 === d) return 0 === a.ga && (c.Yc = -1), 0;
                    if (2 === d && (1 === b ? (kr(c, 2, 3), lr(c, 256, Kr), 16 === c.Ja ? (jr(c, c.Ta), c.Ta = 0, c.Ja = 0) : 8 <= c.Ja && (c.ra[c.pending++] = c.Ta & 255, c.Ta >>= 8, c.Ja -= 8)) : 5 !== b && (kr(c, 0, 3), qr(c, 0, 0), 3 === b && (Hr(c.head), 0 === c.S && (c.M = 0, c.jb = 0, c.eb = 0))), Ir(a), 0 === a.ga)) return c.Yc = -1, 0
                }
                if (4 !== b) return 0;
                if (0 >= c.Ia) return 1;
                2 === c.Ia ? (Y(c, a.ca & 255), Y(c, a.ca >> 8 & 255), Y(c, a.ca >> 16 & 255), Y(c, a.ca >> 24 & 255), Y(c, a.Lc & 255), Y(c, a.Lc >> 8 & 255), Y(c,
                    a.Lc >> 16 & 255), Y(c, a.Lc >> 24 & 255)) : (Nr(c, a.ca >>> 16), Nr(c, a.ca & 65535));
                Ir(a);
                0 < c.Ia && (c.Ia = -c.Ia);
                return 0 !== c.pending ? 0 : 1
            },
            $r = function(a) {
                if (!(this instanceof $r)) return new $r(a);
                a = this.options = X.assign({
                    level: -1,
                    method: 8,
                    Si: 16384,
                    vc: 15,
                    dk: 8,
                    Ob: 0,
                    hi: ""
                }, a || {});
                a.raw && 0 < a.vc ? a.vc = -a.vc : a.jj && 0 < a.vc && 16 > a.vc && (a.vc += 16);
                this.qf = 0;
                this.msg = "";
                this.ended = !1;
                this.ud = [];
                this.ea = new as;
                this.ea.ga = 0;
                var b = this.ea;
                var c = a.level,
                    d = a.method,
                    e = a.vc,
                    f = a.dk,
                    g = a.Ob;
                if (b) {
                    var h = 1; - 1 === c && (c = 6);
                    0 > e ? (h = 0, e = -e) : 15 < e &&
                        (h = 2, e -= 16);
                    if (1 > f || 9 < f || 8 !== d || 8 > e || 15 < e || 0 > c || 9 < c || 0 > g || 4 < g) b = Gr(b, -2);
                    else {
                        8 === e && (e = 9);
                        var l = new Xr;
                        b.state = l;
                        l.ea = b;
                        l.Ia = h;
                        l.aa = null;
                        l.ug = e;
                        l.Qa = 1 << l.ug;
                        l.uc = l.Qa - 1;
                        l.Df = f + 7;
                        l.qe = 1 << l.Df;
                        l.Xb = l.qe - 1;
                        l.Yb = ~~((l.Df + 3 - 1) / 3);
                        l.window = new X.wc(2 * l.Qa);
                        l.head = new X.Pb(l.qe);
                        l.Mb = new X.Pb(l.Qa);
                        l.Dd = 1 << f + 6;
                        l.yb = 4 * l.Dd;
                        l.ra = new X.wc(l.yb);
                        l.xd = l.Dd;
                        l.If = 3 * l.Dd;
                        l.level = c;
                        l.Ob = g;
                        l.method = d;
                        if (b && b.state) {
                            b.Lc = b.sg = 0;
                            b.lf = 2;
                            c = b.state;
                            c.pending = 0;
                            c.Fd = 0;
                            0 > c.Ia && (c.Ia = -c.Ia);
                            c.status = c.Ia ? 42 : 113;
                            b.ca = 2 ===
                                c.Ia ? 0 : 1;
                            c.Yc = 0;
                            if (!bs) {
                                d = Array(16);
                                for (f = g = 0; 28 > f; f++)
                                    for (vr[f] = g, e = 0; e < 1 << ur[f]; e++) tr[g++] = f;
                                tr[g - 1] = f;
                                for (f = g = 0; 16 > f; f++)
                                    for (yr[f] = g, e = 0; e < 1 << xr[f]; e++) wr[g++] = f;
                                for (g >>= 7; 30 > f; f++)
                                    for (yr[f] = g << 7, e = 0; e < 1 << xr[f] - 7; e++) wr[256 + g++] = f;
                                for (e = 0; 15 >= e; e++) d[e] = 0;
                                for (e = 0; 143 >= e;) Kr[2 * e + 1] = 8, e++, d[8]++;
                                for (; 255 >= e;) Kr[2 * e + 1] = 9, e++, d[9]++;
                                for (; 279 >= e;) Kr[2 * e + 1] = 7, e++, d[7]++;
                                for (; 287 >= e;) Kr[2 * e + 1] = 8, e++, d[8]++;
                                nr(Kr, 287, d);
                                for (e = 0; 30 > e; e++) Lr[2 * e + 1] = 5, Lr[2 * e] = mr(e, 5);
                                cs = new hr(Kr, ur, 257, 286, 15);
                                ds = new hr(Lr,
                                    xr, 0, 30, 15);
                                es = new hr([], fs, 0, 19, 7);
                                bs = !0
                            }
                            c.ve = new ir(c.ab, cs);
                            c.ce = new ir(c.Cc, ds);
                            c.Tg = new ir(c.Na, es);
                            c.Ta = 0;
                            c.Ja = 0;
                            or(c);
                            c = 0
                        } else c = Gr(b, -2);
                        0 === c && (b = b.state, b.ji = 2 * b.Qa, Hr(b.head), b.Qf = Yr[b.level].bk, b.kh = Yr[b.level].ij, b.Nh = Yr[b.level].hk, b.Kh = Yr[b.level].ak, b.M = 0, b.jb = 0, b.S = 0, b.eb = 0, b.ja = b.lb = 2, b.Jc = 0, b.fa = 0);
                        b = c
                    }
                } else b = -2;
                if (0 !== b) throw Error(Fr[b]);
                a.Gj && (b = this.ea) && b.state && 2 === b.state.Ia && (b.state.aa = a.Gj);
                if (a.yd) {
                    var m;
                    "string" === typeof a.yd ? m = gs(a.yd) : "[object ArrayBuffer]" === hs.call(a.yd) ?
                        m = new Uint8Array(a.yd) : m = a.yd;
                    a = this.ea;
                    f = m;
                    g = f.length;
                    if (a && a.state)
                        if (m = a.state, b = m.Ia, 2 === b || 1 === b && 42 !== m.status || m.S) b = -2;
                        else {
                            1 === b && (a.ca = Pr(a.ca, f, g, 0));
                            m.Ia = 0;
                            g >= m.Qa && (0 === b && (Hr(m.head), m.M = 0, m.jb = 0, m.eb = 0), c = new X.wc(m.Qa), X.Oc(c, f, g - m.Qa, m.Qa, 0), f = c, g = m.Qa);
                            c = a.Sa;
                            d = a.Kc;
                            e = a.input;
                            a.Sa = g;
                            a.Kc = 0;
                            a.input = f;
                            for (Rr(m); 3 <= m.S;) {
                                f = m.M;
                                g = m.S - 2;
                                do m.fa = (m.fa << m.Yb ^ m.window[f + 3 - 1]) & m.Xb, m.Mb[f & m.uc] = m.head[m.fa], m.head[m.fa] = f, f++; while (--g);
                                m.M = f;
                                m.S = 2;
                                Rr(m)
                            }
                            m.M += m.S;
                            m.jb = m.M;
                            m.eb = m.S;
                            m.S = 0;
                            m.ja = m.lb = 2;
                            m.Jc = 0;
                            a.Kc = d;
                            a.input = e;
                            a.Sa = c;
                            m.Ia = b;
                            b = 0
                        }
                    else b = -2;
                    if (0 !== b) throw Error(Fr[b]);
                    this.Xl = !0
                }
            },
            is = function(a) {
                var b = {};
                b = b || {};
                b.jj = !0;
                b = new $r(b);
                b.push(a, !0);
                if (b.qf) throw b.msg || Fr[b.qf];
                return b.result
            },
            js = function(a) {
                var b = _.Q("goog-gt-thumbUpButton"),
                    c = _.Q("goog-gt-thumbUpIcon"),
                    d = _.Q("goog-gt-thumbUpIconFilled"),
                    e = _.Q("goog-gt-thumbDownButton"),
                    f = _.Q("goog-gt-thumbDownIcon"),
                    g = _.Q("goog-gt-thumbDownIconFilled");
                b.setAttribute("aria-pressed", "false");
                c.style.display = "";
                d.style.display =
                    "none";
                e.setAttribute("aria-pressed", "false");
                f.style.display = "";
                g.style.display = "none";
                switch (a) {
                    case "up":
                        b.setAttribute("aria-pressed", "true");
                        c.style.display = "none";
                        d.style.display = "";
                        break;
                    case "down":
                        e.setAttribute("aria-pressed", "true"), f.style.display = "none", g.style.display = ""
                }
                _.Q("goog-gt-votingInputVote").value = a
            },
            ks = function(a) {
                var b = _.Q("goog-gt-tt").dataset;
                return a.get(b.id)
            },
            ls = function(a, b) {
                ks(a) === b && (b = "");
                js(b);
                var c = _.Q("goog-gt-tt").dataset;
                a.set(c.id, b);
                _.Q("goog-gt-votingForm").submit()
            },
            Vq = function(a, b, c, d) {
                var e = _.Ig(a.wa);
                a.Va || (a.Va = {});
                var f = a.Va[c];
                var g = Tq(a, c, d, e);
                if (f) e || (Object.isFrozen(f) ? e || (f = Array.prototype.slice.call(f), a.Va[c] = f) : e && Object.freeze(f));
                else {
                    f = [];
                    var h = !!(_.Fg(a.wa) & 16),
                        l = _.Ig(g);
                    !e && l && (g = _.Hg(Array.prototype.slice.call(g)), _.$g(a, c, g, d));
                    for (var m = l, n = 0; n < g.length; n++) {
                        var p = g[n];
                        var r = b;
                        var q = h,
                            w = !1;
                        w = void 0 === w ? !1 : w;
                        q = void 0 === q ? !1 : q;
                        r = Array.isArray(p) ? new r(q ? _.Jg(p) : p) : w ? new r : void 0;
                        void 0 !== r && (m = m || _.Ig(p), f.push(r), l && _.Eg(r.wa, 2))
                    }
                    a.Va[c] =
                        f;
                    Object.isFrozen(g) || (b = _.Fg(g) | 33, _.Gg(g, m ? b & -9 : b | 8));
                    (e || e && l) && _.Eg(f, 2);
                    (e || e) && Object.freeze(f)
                }
                a = Tq(a, c, d, e);
                if (!e && a && !(_.Fg(a) & 8)) {
                    for (e = 0; e < f.length; e++) c = f[e], d = _.hh(c), c !== d && (f[e] = d, a[e] = f[e].wa);
                    _.Eg(a, 8)
                }
                return f
            },
            ms = function(a) {
                _.Bh = !0;
                try {
                    return JSON.stringify(a.toJSON(), Uq)
                } finally {
                    _.Bh = !1
                }
            },
            Xq = function(a) {
                var b = _.Ug(a.wa, Yq, _.Kg);
                _.Jg(b);
                _.Og = b;
                b = new a.constructor(b);
                _.Og = void 0;
                Wq(b, a);
                return b
            },
            ns = null,
            os = function() {
                ns && (_.Bd(ns), ns = null);
                _.Ci && _.Ci.length && _.Di(_.Ci.join(""));
                _.Ci = null
            },
            ps = function() {
                _.Ci && os();
                _.Ci = [];
                ns = _.D(window, "pagehide", function() {
                    os()
                })
            },
            rs = function(a, b) {
                b = qs(b || {}, a.l ? a.l.h() : {});
                a.j(null, b.Vb);
                return b.j()
            },
            ss = function(a) {
                return a instanceof _.Rh && a.constructor === _.Rh ? a.h : "type_error:SafeStyleSheet"
            },
            ts = function(a, b) {
                return a + Math.random() * (b - a)
            },
            us = function(a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.Vc(a.contentDocument) : null)
                } catch (b) {}
                return null
            },
            vs = function() {
                var a = _.gm[5];
                return new _.Wd(function(b, c) {
                    c(a)
                })
            },
            ws = function(a, b) {
                if (!b) return a;
                var c = a.indexOf("#");
                0 > c && (c = a.length);
                var d = a.indexOf("?");
                if (0 > d || d > c) {
                    d = c;
                    var e = ""
                } else e = a.substring(d + 1, c);
                a = [a.slice(0, d), e, a.slice(c)];
                c = a[1];
                a[1] = b ? c ? c + "&" + b : b : c;
                return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
            },
            xs = function(a, b) {
                var c = [];
                for (b = b || 0; b < a.length; b += 2) _.of(a[b], a[b + 1], c);
                return c.join("&")
            },
            ys = function(a, b) {
                var c = 2 == arguments.length ? xs(arguments[1], 0) : xs(arguments, 1);
                return ws(a, c)
            },
            zs = function(a, b, c) {
                c = null != c ? "=" + _.Kc(c) : "";
                return ws(a, b + c)
            },
            As = function(a, b, c) {
                for (; 0 <= (b = a.indexOf("format",
                        b)) && b < c;) {
                    var d = a.charCodeAt(b - 1);
                    if (38 == d || 63 == d)
                        if (d = a.charCodeAt(b + 6), !d || 61 == d || 38 == d || 35 == d) return b;
                    b += 7
                }
                return -1
            },
            Bs = /#|$/,
            Cs = /[?&]($|#)/,
            Ds = function(a, b) {
                _.E.call(this);
                this.o = a || 1;
                this.l = b || _.t;
                this.s = (0, _.y)(this.C, this);
                this.A = _.qb()
            };
        _.z(Ds, _.E);
        Ds.prototype.j = !1;
        Ds.prototype.h = null;
        var Es = function(a, b) {
            a.o = b;
            a.h && a.j ? (a.stop(), a.start()) : a.h && a.stop()
        };
        Ds.prototype.C = function() {
            if (this.j) {
                var a = _.qb() - this.A;
                0 < a && a < .8 * this.o ? this.h = this.l.setTimeout(this.s, this.o - a) : (this.h && (this.l.clearTimeout(this.h), this.h = null), this.dispatchEvent("tick"), this.j && (this.stop(), this.start()))
            }
        };
        Ds.prototype.start = function() {
            this.j = !0;
            this.h || (this.h = this.l.setTimeout(this.s, this.o), this.A = _.qb())
        };
        Ds.prototype.stop = function() {
            this.j = !1;
            this.h && (this.l.clearTimeout(this.h), this.h = null)
        };
        Ds.prototype.L = function() {
            Ds.R.L.call(this);
            this.stop();
            delete this.l
        };
        var Fs = function(a, b) {
                function c(l) {
                    for (; d < a.length;) {
                        var m = a.charAt(d++),
                            n = _.xh[m];
                        if (null != n) return n;
                        if (!/^[\s\xa0]*$/.test(m)) throw Error("da`" + m);
                    }
                    return l
                }
                _.zh();
                for (var d = 0;;) {
                    var e = c(-1),
                        f = c(0),
                        g = c(64),
                        h = c(64);
                    if (64 === h && -1 === e) break;
                    b(e << 2 | f >> 4);
                    64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
                }
            },
            Gs = function(a) {
                if (_.yh) return _.t.atob(a);
                var b = "";
                Fs(a, function(c) {
                    b += String.fromCharCode(c)
                });
                return b
            },
            Hs = function(a, b) {
                b = ss(b);
                _.C && void 0 !== a.cssText ? a.cssText = b : _.t.trustedTypes ? _.ad(a, b) : a.innerHTML =
                    b
            },
            Is = function(a, b) {
                b = _.Pc(b);
                var c = b.V;
                if (_.C && c.createStyleSheet) b = c.createStyleSheet(), Hs(b, a);
                else {
                    c = _.Ri(b.V, "HEAD")[0];
                    if (!c) {
                        var d = _.Ri(b.V, "BODY")[0];
                        c = b.T("HEAD");
                        d.parentNode.insertBefore(c, d)
                    }
                    d = b.T("STYLE");
                    var e;
                    (e = _.qh('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute("nonce", e);
                    Hs(d, a);
                    b.appendChild(c, d)
                }
            },
            Js = function(a) {
                return new _.Ic(a.offsetWidth, a.offsetHeight)
            },
            Ks = function(a, b) {
                _.Ik(a, b, "content-box")
            },
            Ls = function(a) {
                return a instanceof _.sf ? !!a.Ba() : !!a
            },
            Ms = function(a) {
                return a.replace(/<\//g,
                    "<\\/").replace(/\]\]>/g, "]]\\>")
            },
            Ns = function(a) {
                return _.Vh(a, _.rk) ? a.Ba() : a instanceof _.Db ? _.Ma(a).toString() : a instanceof _.Db ? _.bl(_.Ma(a).toString()) : "about:invalid#zSoyz"
            },
            Os = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|rgba|hsl|hsla|calc|max|min|cubic-bezier)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
            Ps = function(a) {
                _.Vh(a, _.Mh) ? a = Ms(a.Ba()) : null ==
                    a ? a = "" : a instanceof _.wc ? a = Ms(_.mj(a)) : a instanceof _.wc ? a = Ms(_.mj(a)) : a instanceof _.Rh ? a = Ms(ss(a)) : a instanceof _.Rh ? a = Ms(ss(a)) : (a = String(a), a = Os.test(a) ? a : "zSoyz");
                return a
            },
            Qs, Rs = function(a, b) {
                if ((_.C || _.Ub) && window.location.hostname != document.domain) {
                    Qs = Qs ? Qs + 1 : 1;
                    var c = "f" + Qs + "_" + _.qb().toString(36);
                    window[c] = function() {
                        window[c] = void 0;
                        a.src = "javascript:void(0)";
                        b && window.setTimeout(function() {
                            b()
                        }, 0)
                    };
                    a.src = "javascript:void(document.write(\"<script>document.domain='" + document.domain + "';parent['" +
                        c + "']();\x3c/script>\"))"
                } else b && b()
            },
            Ss = function(a, b) {
                return "auto" != a && "zh-CN" != a && a == b
            },
            Ts = function() {
                var a = window.location.hash.match(/google\.translate\.element\.sp=([^&]+)/);
                return a && a[1] ? a[1] : null
            },
            Us = function() {};
        Us.prototype.j = function() {};
        var Vs = function(a) {
                a = a.split(".");
                if (3 !== a.length) return !1;
                a = JSON.parse(Gs(a[1]));
                return null == a || !a.exp || 1E3 * a.exp < _.qb() ? !1 : !0
            },
            Ws = function(a) {
                this.h = a
            };
        _.x(Ws, Us);
        Ws.prototype.j = function() {
            return Vs(this.h) ? _.uh(this.h) : vs()
        };
        var Xs = function(a) {
            this.h = null;
            this.l = a
        };
        _.x(Xs, Us);
        Xs.prototype.j = function() {
            if (null != this.h && Vs(this.h)) return _.uh(this.h);
            this.h = null;
            return new _.Wd(function(a, b) {
                var c = this;
                this.l(function(d) {
                    c.h = d;
                    Vs(c.h) ? a(d) : b(_.gm[5])
                }, b)
            }, this)
        };
        var Ys = function(a) {
                return (0, _.K)('<span id="' + _.L(a.id) + '"></span>')
            },
            Zs = function(a) {
                var b = a.id,
                    c = a.Sh;
                return (0, _.K)(_.Zk(a.Th) + '<div id="' + _.L(b) + '"></div>' + _.Zk(c))
            },
            qs = function(a) {
                var b = a.id,
                    c = a.top,
                    d = a.left,
                    e = a.bottom,
                    f = a.right;
                return (0, _.Wh)("." + Ps(a.className) + " {z-index:9999999; overflow:visible; position:fixed; _position:absolute;" + (Ls(c) || _.Qk(c, 0) ? "top:" + Ps(c) + "px; _top:expression((" + Ps(c) + "+(hack1=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "top:auto;") + (Ls(d) ||
                    _.Qk(d, 0) ? "left:" + Ps(d) + "px; _left:expression((" + Ps(d) + "+(hack2=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "left:auto;") + (Ls(e) || _.Qk(e, 0) ? "bottom:" + Ps(e) + "px; _top:expression((-" + Ps(e) + "-document.getElementById('" + String(b).replace(_.$k, _.Wk) + "').offsetHeight+(hack3=document.documentElement.clientHeight||document.body.clientHeight)+(hack4=document.documentElement.scrollTop||document.body.scrollTop))+'px');" : "bottom:auto;") + (Ls(f) || _.Qk(f, 0) ? "right:" + Ps(f) + "px; _left:expression((-" +
                    Ps(f) + "-document.getElementById('" + String(b).replace(_.$k, _.Wk) + "').offsetWidth+(hack5=document.documentElement.clientWidth||document.body.clientWidth)+(hack6=document.documentElement.scrollLeft||document.body.scrollLeft))+'px');" : "right:auto;") + "}")
            },
            $s = function() {
                return (0, _.K)('<div class="goog-te-spinner-pos"><div class="goog-te-spinner-animation"><svg xmlns="http://www.w3.org/2000/svg" class="goog-te-spinner" width="96px" height="96px" viewBox="0 0 66 66"><circle class="goog-te-spinner-path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"/></svg></div></div>')
            },
            at = function() {
                _.M.call(this)
            };
        _.x(at, _.M);
        at.prototype.T = function() {
            this.Aa(_.Bi($s))
        };
        at.prototype.Aa = function(a) {
            this.l = a
        };
        var bt = function(a) {
                _.wn(a.B(), "goog-te-spinner-pos-show");
                _.wn(a.B().firstChild, "goog-te-spinner-animation-show")
            },
            ct = function() {
                this.h = new at;
                this.h.T();
                this.h.Ca();
                this.j = 0
            };
        ct.prototype.reset = function() {
            this.j = 0;
            bt(this.h)
        };
        ct.prototype.o = function() {
            if (0 == this.j++) {
                var a = this.h;
                _.un(a.B(), "goog-te-spinner-pos-show");
                _.un(a.B().firstChild, "goog-te-spinner-animation-show")
            }
        };
        ct.prototype.l = function() {
            0 == --this.j && bt(this.h)
        };
        var et = function(a) {
            _.I.call(this, a, -1, dt)
        };
        _.x(et, _.I);
        var dt = [2];
        var ft = function(a) {
            if (!a) return "";
            if (/^about:(?:blank|srcdoc)$/.test(a)) return window.origin || "";
            a = a.split("#")[0].split("?")[0];
            a = a.toLowerCase();
            0 == a.indexOf("//") && (a = window.location.protocol + a);
            /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
            var b = a.substring(a.indexOf("://") + 3),
                c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
            c = a.substring(0, a.indexOf("://"));
            if (!c) throw Error("Fa`" + a);
            if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !==
                c && "chrome-untrusted" !== c && "chrome" !== c && "app" !== c && "devtools" !== c) throw Error("Ga`" + c);
            a = "";
            var d = b.indexOf(":");
            if (-1 != d) {
                var e = b.substring(d + 1);
                b = b.substring(0, d);
                if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
            }
            return c + "://" + b + a
        };
        var ht = function(a, b, c) {
                var d = String(_.t.location.href);
                return d && a && b ? [b, gt(ft(d), a, c || null)].join(" ") : null
            },
            gt = function(a, b, c) {
                var d = [],
                    e = [];
                if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], _.Nb(d, function(h) {
                    e.push(h)
                }), it(e.join(" "));
                var f = [],
                    g = [];
                _.Nb(c, function(h) {
                    g.push(h.key);
                    f.push(h.value)
                });
                c = Math.floor((new Date).getTime() / 1E3);
                e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
                _.Nb(d, function(h) {
                    e.push(h)
                });
                a = it(e.join(" "));
                a = [c, a];
                0 == g.length || a.push(g.join(""));
                return a.join("_")
            },
            it = function(a) {
                var b =
                    dr();
                b.update(a);
                return b.Vi().toLowerCase()
            };
        var jt = {};
        var kt = function() {
            this.h = document || {
                cookie: ""
            }
        };
        _.k = kt.prototype;
        _.k.isEnabled = function() {
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!this.bc()) return !0;
            this.set("TESTCOOKIESENABLED", "1", {
                Ih: 60
            });
            if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
            this.remove("TESTCOOKIESENABLED");
            return !0
        };
        _.k.set = function(a, b, c) {
            var d = !1;
            if ("object" === typeof c) {
                var e = c.im;
                d = c.jm || !1;
                var f = c.domain || void 0;
                var g = c.path || void 0;
                var h = c.Ih
            }
            if (/[;=\s]/.test(a)) throw Error("Ha`" + a);
            if (/[;\r\n]/.test(b)) throw Error("Ia`" + b);
            void 0 === h && (h = -1);
            this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
        };
        _.k.get = function(a, b) {
            for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
                f = (0, _.Rb)(d[e]);
                if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
                if (f == a) return ""
            }
            return b
        };
        _.k.remove = function(a, b, c) {
            var d = void 0 !== this.get(a);
            this.set(a, "", {
                Ih: 0,
                path: b,
                domain: c
            });
            return d
        };
        _.k.Dc = function() {
            return lt(this).keys
        };
        _.k.rb = function() {
            return lt(this).values
        };
        _.k.bc = function() {
            return !this.h.cookie
        };
        var lt = function(a) {
            a = (a.h.cookie || "").split(";");
            for (var b = [], c = [], d, e, f = 0; f < a.length; f++) e = (0, _.Rb)(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
            return {
                keys: b,
                values: c
            }
        };
        var mt = function(a) {
                return !!jt.FPA_SAMESITE_PHASE2_MOD || !(void 0 === a || !a)
            },
            nt = function(a, b, c, d) {
                (a = _.t[a]) || (a = (new kt).get(b));
                return a ? ht(a, c, d) : null
            },
            ot = function(a, b) {
                b = void 0 === b ? !1 : b;
                var c = ft(String(_.t.location.href)),
                    d = [];
                var e = b;
                e = void 0 === e ? !1 : e;
                var f = _.t.__SAPISID || _.t.__APISID || _.t.__3PSAPISID || _.t.__OVERRIDE_SID;
                mt(e) && (f = f || _.t.__1PSAPISID);
                if (f) e = !0;
                else {
                    var g = new kt;
                    f = g.get("SAPISID") || g.get("APISID") || g.get("__Secure-3PAPISID") || g.get("SID");
                    mt(e) && (f = f || g.get("__Secure-1PAPISID"));
                    e = !!f
                }
                e && (e = (c = 0 == c.indexOf("https:") || 0 == c.indexOf("chrome-extension:") || 0 == c.indexOf("moz-extension:")) ? _.t.__SAPISID : _.t.__APISID, e || (e = new kt, e = e.get(c ? "SAPISID" : "APISID") || e.get("__Secure-3PAPISID")), (e = e ? ht(e, c ? "SAPISIDHASH" : "APISIDHASH", a) : null) && d.push(e), c && mt(b) && ((b = nt("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && d.push(b), (a = nt("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && d.push(a)));
                return 0 == d.length ? null : d.join(" ")
            };
        var pt = function(a) {
            this.h = this.j = this.l = a
        };
        pt.prototype.reset = function() {
            this.h = this.j = this.l
        };
        pt.prototype.Ga = function() {
            return this.j
        };
        var qt = function(a) {
            _.I.call(this, a)
        };
        _.x(qt, _.I);
        var st = function(a) {
            _.I.call(this, a, -1, rt)
        };
        _.x(st, _.I);
        var rt = [1];
        var tt = ["platform", "platformVersion", "architecture", "model", "uaFullVersion"];
        new st;
        var ut = function(a) {
            _.I.call(this, a)
        };
        _.x(ut, _.I);
        var wt = function(a) {
            _.I.call(this, a, 31, vt)
        };
        _.x(wt, _.I);
        var vt = [3, 20, 27];
        var yt = function(a) {
            _.I.call(this, a, 17, xt)
        };
        _.x(yt, _.I);
        var xt = [3, 5];
        var At = function(a) {
            _.I.call(this, a, 6, zt)
        };
        _.x(At, _.I);
        var zt = [5];
        var Bt = function(a) {
            _.I.call(this, a)
        };
        _.x(Bt, _.I);
        var Ct = new function(a, b) {
            this.h = a;
            this.kf = b;
            this.j = cr
        }(175237375, Bt);
        var Gt = function(a, b, c, d, e, f, g, h, l, m, n) {
            _.E.call(this);
            var p = this;
            this.j = [];
            this.La = "";
            this.na = !1;
            this.Ma = this.U = -1;
            this.ta = !1;
            this.F = this.l = null;
            this.A = 0;
            this.Sb = 1;
            this.rg = 0;
            this.X = !1;
            _.E.call(this);
            this.Ha = b || function() {};
            this.s = new Dt(a, f);
            this.Ab = d;
            this.ma = n;
            this.Tb = _.pb(ts, 0, 1);
            this.G = e || null;
            this.C = c || null;
            this.N = g || !1;
            this.O = l || null;
            this.withCredentials = !h;
            this.Z = f || !1;
            this.Rb = !this.Z && (65 <= ar("Chromium") || 45 <= ar("Firefox") || 12 <= ar("Safari") || _.Fa() && br()) && !!_.Vc() && !!_.Vc().navigator && !!_.Vc().navigator.sendBeacon;
            a = _.H(new ut, 1, 1);
            Et(this.s, a);
            this.o = new pt(1E4);
            this.h = new Ds(this.o.Ga());
            _.Pi(this, _.pb(_.ca, this.h));
            m = Ft(this, m);
            _.D(this.h, "tick", m, !1, this);
            this.I = new Ds(6E5);
            _.Pi(this, _.pb(_.ca, this.I));
            _.D(this.I, "tick", m, !1, this);
            this.N || this.I.start();
            this.Z || (_.D(document, "visibilitychange", function() {
                "hidden" === document.visibilityState && p.K()
            }), _.D(document, "pagehide", this.K, !1, this))
        };
        _.x(Gt, _.E);
        var Ft = function(a, b) {
            return b ? function() {
                b().then(function() {
                    a.flush()
                })
            } : function() {
                a.flush()
            }
        };
        Gt.prototype.L = function() {
            this.K();
            _.E.prototype.L.call(this)
        };
        var Ht = function(a) {
                a.G || (a.G = .01 > a.Tb() ? "https://www.google.com/log?format=json&hasfast=true" : "https://play.google.com/log?format=json&hasfast=true");
                return a.G
            },
            It = function(a, b) {
                a.o = new pt(1 > b ? 1 : b);
                Es(a.h, a.o.Ga())
            };
        Gt.prototype.log = function(a) {
            a = Xq(a);
            var b = this.Sb++;
            _.H(a, 21, b);
            _.Fh(a, 1) || _.H(a, 1, Date.now().toString());
            null != _.Fh(a, 15, !1) || _.H(a, 15, 60 * (new Date).getTimezoneOffset());
            this.l && (b = Xq(this.l), _.Hh(a, 16, b));
            for (; 1E3 <= this.j.length;) this.j.shift(), ++this.A;
            this.j.push(a);
            this.dispatchEvent(new Jt(a));
            this.N || this.h.j || this.h.start()
        };
        Gt.prototype.flush = function(a, b) {
            var c = this;
            if (0 === this.j.length) a && a();
            else if (this.X) Kt(this);
            else {
                var d = Date.now();
                if (this.Ma > d && this.U < d) b && b("throttled");
                else {
                    var e = Lt(this.s, this.j, this.A);
                    d = {};
                    var f = this.Ha();
                    f && (d.Authorization = f);
                    var g = Ht(this);
                    this.C && (d["X-Goog-AuthUser"] = this.C, g = zs(g, "authuser", this.C));
                    this.O && (d["X-Goog-PageId"] = this.O, g = zs(g, "pageId", this.O));
                    if (f && this.La === f) b && b("stale-auth-token");
                    else {
                        this.j = [];
                        this.h.j && this.h.stop();
                        this.A = 0;
                        var h = ms(e),
                            l;
                        this.F && this.F.ub() &&
                            (l = Promise.resolve(is(Uint8Array.from(_.sk(h)))));
                        var m = {
                                url: g,
                                body: h,
                                Ri: 1,
                                dg: d,
                                vk: "POST",
                                withCredentials: this.withCredentials,
                                rg: this.rg
                            },
                            n = function(q) {
                                c.o.reset();
                                Es(c.h, c.o.Ga());
                                if (q) {
                                    var w = null;
                                    try {
                                        var O = JSON.parse(q.replace(")]}'\n", ""));
                                        w = new At(O)
                                    } catch (P) {}
                                    w && (q = Number(_.ah(_.Fh(w, 1), "-1")), 0 < q && (c.U = Date.now(), c.Ma = c.U + q), w = Ct.j(w)) && (w = _.ah(_.Fh(w, 1), -1), -1 != w && (c.ta || It(c, w)))
                                }
                                a && a()
                            },
                            p = function(q, w) {
                                var O = Vq(e, wt, 3),
                                    P = c.o;
                                P.h = Math.min(3E5, 2 * P.h);
                                P.j = Math.min(3E5, P.h + Math.round(.2 * (Math.random() -
                                    .5) * P.h));
                                Es(c.h, c.o.Ga());
                                401 === q && f && (c.La = f);
                                void 0 === w && (w = 500 <= q && 600 > q || 401 === q || 0 === q);
                                w && (c.j = O.concat(c.j), c.N || c.h.j || c.h.start());
                                b && b("net-send-failed", q)
                            },
                            r = function() {
                                c.ma ? c.ma.send(m, n, p) : c.Ab(m, n, p)
                            };
                        l ? l.then(function(q) {
                            m.dg["Content-Encoding"] = "gzip";
                            m.dg["Content-Type"] = "application/binary";
                            m.body = q;
                            m.Ri = 2;
                            r()
                        }, function() {
                            r()
                        }) : r()
                    }
                }
            }
        };
        Gt.prototype.K = function() {
            this.na && Kt(this);
            this.flush()
        };
        var Kt = function(a) {
                Mt(a, function(b, c) {
                    b = zs(b, "format", "json");
                    b = _.Vc().navigator.sendBeacon(b, ms(c));
                    a.X && !b && (a.X = !1);
                    return b
                })
            },
            Mt = function(a, b) {
                if (0 !== a.j.length) {
                    var c = Ht(a);
                    for (var d = c.search(Bs), e = 0, f, g = []; 0 <= (f = As(c, e, d));) g.push(c.substring(e, f)), e = Math.min(c.indexOf("&", f) + 1 || d, d);
                    g.push(c.slice(e));
                    c = g.join("").replace(Cs, "$1");
                    c = ys(c, "auth", a.Ha(), "authuser", a.C || "0");
                    for (d = 0; 10 > d && a.j.length; ++d) {
                        e = a.j.slice(0, 32);
                        f = Lt(a.s, e, a.A);
                        if (!b(c, f)) break;
                        a.A = 0;
                        a.j = a.j.slice(e.length)
                    }
                    a.h.j &&
                        a.h.stop()
                }
            },
            Jt = function() {
                _.dd.call(this, "event-logged", void 0)
            };
        _.x(Jt, _.dd);
        var Dt = function(a, b) {
                this.l = b = void 0 === b ? !1 : b;
                this.j = this.locale = null;
                this.h = new yt;
                _.H(this.h, 2, a);
                b || (this.locale = document.documentElement.getAttribute("lang"));
                Et(this, new ut)
            },
            Et = function(a, b) {
                _.Hh(a.h, 1, b);
                _.Fh(b, 1) || _.H(b, 1, 1);
                a.l || (b = Nt(a), _.Fh(b, 5) || _.H(b, 5, a.locale));
                a.j && (b = Nt(a), _.Gh(b, st, 9) || _.Hh(b, 9, a.j))
            },
            Ot = function(a, b) {
                var c = void 0 === c ? tt : c;
                b(_.Vc(), c).then(function(d) {
                    a.j = d;
                    d = Nt(a);
                    _.Hh(d, 9, a.j);
                    return !0
                }).catch(function() {
                    return !1
                })
            },
            Nt = function(a) {
                a = _.Gh(a.h, ut, 1);
                var b = _.Gh(a,
                    qt, 11);
                b || (b = new qt, _.Hh(a, 11, b));
                return b
            },
            Lt = function(a, b, c) {
                c = void 0 === c ? 0 : c;
                a = Xq(a.h);
                a = _.H(a, 4, Date.now().toString());
                b = _.gh(a, 3, b);
                c && _.H(b, 14, c);
                return b
            };
        var Pt = function(a) {
                a.l = _.ml;
                return a
            },
            Rt = function(a) {
                a.j = new Qt;
                return a
            },
            St = function(a) {
                var b = new fr;
                b.o = "https://translate.googleapis.com/element/log?format=json&hasfast=true";
                b.s = a;
                return b
            },
            Tt = function(a) {
                a.h = !0;
                return a
            },
            Ut = function(a) {
                a.G = !0;
                return a
            },
            Vt = function(a) {
                var b = new Gt(1871, a.s ? a.s : ot, "0", a.A, a.o, !1, !1, a.G, void 0, void 0, a.C ? a.C : void 0);
                a.I && Et(b.s, a.I);
                if (a.l) {
                    var c = a.l,
                        d = Nt(b.s);
                    _.H(d, 7, c)
                }
                a.j && (b.F = a.j);
                a.F && ((c = a.F) ? (b.l || (b.l = new et), c = ms(c), _.H(b.l, 4, c)) : b.l && _.H(b.l, 4, void 0, !1));
                if (a.da) {
                    d = a.da;
                    b.l || (b.l = new et);
                    c = b.l;
                    if (null == d) d = _.Ch;
                    else {
                        var e = _.Fg(d);
                        1 !== (e & 1) && (Object.isFrozen(d) && (d = Array.prototype.slice.call(d)), _.Gg(d, e | 1))
                    }
                    _.H(c, 2, d)
                }
                a.h && (b.na = a.h && b.Rb);
                a.N && (c = a.N, b.ta = !0, It(b, c));
                a.K && Ot(b.s, a.K);
                return b
            };
        var X = {},
            Wt = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;
        X.assign = function(a) {
            for (var b = Array.prototype.slice.call(arguments, 1); b.length;) {
                var c = b.shift();
                if (c) {
                    if ("object" !== typeof c) throw new TypeError("Ja`" + c);
                    for (var d in c) Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d])
                }
            }
            return a
        };
        X.og = function(a, b) {
            if (a.length === b) return a;
            if (a.subarray) return a.subarray(0, b);
            a.length = b;
            return a
        };
        var Xt = {
                Oc: function(a, b, c, d, e) {
                    if (b.subarray && a.subarray) a.set(b.subarray(c, c + d), e);
                    else
                        for (var f = 0; f < d; f++) a[e + f] = b[c + f]
                },
                bh: function(a) {
                    var b, c;
                    var d = c = 0;
                    for (b = a.length; d < b; d++) c += a[d].length;
                    var e = new Uint8Array(c);
                    d = c = 0;
                    for (b = a.length; d < b; d++) {
                        var f = a[d];
                        e.set(f, c);
                        c += f.length
                    }
                    return e
                }
            },
            Yt = {
                Oc: function(a, b, c, d, e) {
                    for (var f = 0; f < d; f++) a[e + f] = b[c + f]
                },
                bh: function(a) {
                    return [].concat.apply([], a)
                }
            };
        X.Bk = function() {
            Wt ? (X.wc = Uint8Array, X.Pb = Uint16Array, X.ki = Int32Array, X.assign(X, Xt)) : (X.wc = Array, X.Pb = Array, X.ki = Array, X.assign(X, Yt))
        };
        X.Bk();
        var Zt = !0;
        try {
            new Uint8Array(1)
        } catch (a) {
            Zt = !1
        }
        for (var $t = new X.wc(256), au = 0; 256 > au; au++) $t[au] = 252 <= au ? 6 : 248 <= au ? 5 : 240 <= au ? 4 : 224 <= au ? 3 : 192 <= au ? 2 : 1;
        $t[254] = $t[254] = 1;
        var gs = function(a) {
            var b, c, d = a.length,
                e = 0;
            for (b = 0; b < d; b++) {
                var f = a.charCodeAt(b);
                if (55296 === (f & 64512) && b + 1 < d) {
                    var g = a.charCodeAt(b + 1);
                    56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)
                }
                e += 128 > f ? 1 : 2048 > f ? 2 : 65536 > f ? 3 : 4
            }
            var h = new X.wc(e);
            for (b = c = 0; c < e; b++) f = a.charCodeAt(b), 55296 === (f & 64512) && b + 1 < d && (g = a.charCodeAt(b + 1), 56320 === (g & 64512) && (f = 65536 + (f - 55296 << 10) + (g - 56320), b++)), 128 > f ? h[c++] = f : (2048 > f ? h[c++] = 192 | f >>> 6 : (65536 > f ? h[c++] = 224 | f >>> 12 : (h[c++] = 240 | f >>> 18, h[c++] = 128 | f >>> 12 & 63), h[c++] = 128 |
                f >>> 6 & 63), h[c++] = 128 | f & 63);
            return h
        };
        var Pr = {};
        Pr = function(a, b, c, d) {
            var e = a & 65535 | 0;
            a = a >>> 16 & 65535 | 0;
            for (var f; 0 !== c;) {
                f = 2E3 < c ? 2E3 : c;
                c -= f;
                do e = e + b[d++] | 0, a = a + e | 0; while (--f);
                e %= 65521;
                a %= 65521
            }
            return e | a << 16 | 0
        };
        for (var Qr = {}, bu, cu = [], du = 0; 256 > du; du++) {
            bu = du;
            for (var eu = 0; 8 > eu; eu++) bu = bu & 1 ? 3988292384 ^ bu >>> 1 : bu >>> 1;
            cu[du] = bu
        }
        Qr = function(a, b, c, d) {
            c = d + c;
            for (a ^= -1; d < c; d++) a = a >>> 8 ^ cu[(a ^ b[d]) & 255];
            return a ^ -1
        };
        var Fr = {};
        Fr = {
            2: "need dictionary",
            1: "stream end",
            0: "",
            "-1": "file error",
            "-2": "stream error",
            "-3": "data error",
            "-4": "insufficient memory",
            "-5": "buffer error",
            "-6": "incompatible version"
        };
        var ur = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
            xr = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
            fs = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
            Jr = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
            Kr = Array(576);
        gr(Kr);
        var Lr = Array(60);
        gr(Lr);
        var wr = Array(512);
        gr(wr);
        var tr = Array(256);
        gr(tr);
        var vr = Array(29);
        gr(vr);
        var yr = Array(30);
        gr(yr);
        var cs, ds, es, bs = !1;
        var Yr;
        Yr = [new Wr(0, 0, 0, 0, function(a, b) {
            var c = 65535;
            for (c > a.yb - 5 && (c = a.yb - 5);;) {
                if (1 >= a.S) {
                    Rr(a);
                    if (0 === a.S && 0 === b) return 1;
                    if (0 === a.S) break
                }
                a.M += a.S;
                a.S = 0;
                var d = a.jb + c;
                if (0 === a.M || a.M >= d)
                    if (a.S = a.M - d, a.M = d, Mr(a, !1), 0 === a.ea.ga) return 1;
                if (a.M - a.jb >= a.Qa - 262 && (Mr(a, !1), 0 === a.ea.ga)) return 1
            }
            a.eb = 0;
            if (4 === b) return Mr(a, !0), 0 === a.ea.ga ? 3 : 4;
            a.M > a.jb && Mr(a, !1);
            return 1
        }), new Wr(4, 4, 8, 4, Sr), new Wr(4, 5, 16, 8, Sr), new Wr(4, 6, 32, 32, Sr), new Wr(4, 4, 16, 16, Tr), new Wr(8, 16, 32, 32, Tr), new Wr(8, 16, 128, 128, Tr), new Wr(8, 32,
            128, 256, Tr), new Wr(32, 128, 258, 1024, Tr), new Wr(32, 258, 258, 4096, Tr)];
        var as = {};
        as = function() {
            this.input = null;
            this.Lc = this.Sa = this.Kc = 0;
            this.Ed = null;
            this.sg = this.ga = this.cd = 0;
            this.msg = "";
            this.state = null;
            this.lf = 2;
            this.ca = 0
        };
        var hs = Object.prototype.toString;
        $r.prototype.push = function(a, b) {
            var c = this.ea,
                d = this.options.Si;
            if (this.ended) return !1;
            var e = b === ~~b ? b : !0 === b ? 4 : 0;
            "string" === typeof a ? c.input = gs(a) : "[object ArrayBuffer]" === hs.call(a) ? c.input = new Uint8Array(a) : c.input = a;
            c.Kc = 0;
            c.Sa = c.input.length;
            do {
                0 === c.ga && (c.Ed = new X.wc(d), c.cd = 0, c.ga = d);
                a = Zr(c, e);
                if (1 !== a && 0 !== a) return this.xb(a), this.ended = !0, !1;
                if (0 === c.ga || 0 === c.Sa && (4 === e || 2 === e))
                    if ("string" === this.options.hi) {
                        var f = X.og(c.Ed, c.cd);
                        b = f;
                        f = f.length;
                        if (65537 > f && (b.subarray && Zt || !b.subarray)) b =
                            String.fromCharCode.apply(null, X.og(b, f));
                        else {
                            for (var g = "", h = 0; h < f; h++) g += String.fromCharCode(b[h]);
                            b = g
                        }
                        this.ud.push(b)
                    } else b = X.og(c.Ed, c.cd), this.ud.push(b)
            } while ((0 < c.Sa || 0 === c.ga) && 1 !== a);
            if (4 === e) return (c = this.ea) && c.state ? (d = c.state.status, 42 !== d && 69 !== d && 73 !== d && 91 !== d && 103 !== d && 113 !== d && 666 !== d ? a = Gr(c, -2) : (c.state = null, a = 113 === d ? Gr(c, -3) : 0)) : a = -2, this.xb(a), this.ended = !0, 0 === a;
            2 === e && (this.xb(0), c.ga = 0);
            return !0
        };
        $r.prototype.xb = function(a) {
            0 === a && (this.result = "string" === this.options.hi ? this.ud.join("") : X.bh(this.ud));
            this.ud = [];
            this.qf = a;
            this.msg = this.ea.msg
        };
        var Qt = function() {};
        Qt.prototype.ub = function() {
            try {
                return !!Uint8Array.from
            } catch (a) {
                return !1
            }
        };
        var gu = function() {
                this.h = fu()
            },
            fu = function() {
                return Vt(Pt(Rt(Tt(Ut(St(function() {
                    return null
                }))))))
            };
        gu.prototype.log = function(a) {
            var b = this.h;
            if (a instanceof wt) b.log(a);
            else {
                var c = new wt;
                a = ms(a);
                c = _.H(c, 8, a);
                b.log(c)
            }
        };
        var hu = new gu;
        var iu = function(a) {
            _.I.call(this, a)
        };
        _.x(iu, _.I);
        var ju = function(a) {
            _.I.call(this, a)
        };
        _.x(ju, _.I);
        var lu = function(a) {
            _.I.call(this, a, -1, ku)
        };
        _.x(lu, _.I);
        _.k = lu.prototype;
        _.k.kb = function() {
            return _.Fh(this, 16)
        };
        _.k.pc = function(a) {
            _.H(this, 16, a)
        };
        _.k.oa = function() {
            return _.Fh(this, 1)
        };
        _.k.sa = function(a) {
            _.H(this, 1, a)
        };
        _.k.jh = function() {
            return _.Fh(this, 53)
        };
        var ku = [26, 80];
        for (var mu, nu = Array(36), ou = 0, pu, qu = 0; 36 > qu; qu++) 8 == qu || 13 == qu || 18 == qu || 23 == qu ? nu[qu] = "-" : 14 == qu ? nu[qu] = "4" : (2 >= ou && (ou = 33554432 + 16777216 * Math.random() | 0), pu = ou & 15, ou >>= 4, nu[qu] = _.El[19 == qu ? pu & 3 | 8 : pu]);
        mu = nu.join("");
        var ru = function(a) {
                a = void 0 === a ? {} : a;
                this.Gf = void 0 === a.Gf ? mu : a.Gf;
                this.Md = this.Ld = null
            },
            vu = function(a) {
                var b = su(a, 7);
                tu(a, b);
                uu(b)
            },
            su = function(a, b) {
                var c = new lu;
                c = _.H(c, 50, _.S);
                var d = new iu;
                b = _.H(d, 1, b);
                b = _.H(b, 2, _.ql);
                a = _.H(b, 3, a.Gf);
                return _.Hh(c, 112, a)
            },
            uu = function(a) {
                var b = new wt;
                a = ms(a);
                b = _.H(b, 8, a);
                hu.log(b)
            },
            tu = function(a, b) {
                b.pc(a.Ld);
                b.sa(a.Md)
            };
        var wu = _.Dl(ru),
            xu = function(a, b, c, d, e, f, g, h, l, m, n) {
                _.A.call(this);
                this.ya = b || null;
                this.K = !!c;
                this.Pc = d || "transparent";
                this.I = f || "";
                b = g || {
                    fetchStart: 0,
                    cm: 0
                };
                a = b.fetchStart || 0;
                b = b.fetchEnd || 0;
                this.G = a && b ? b - a : 0;
                this.O = Date.now() - _.ol;
                this.s = !1;
                this.h = new _.im(e || "", void 0, f, l, m, n);
                this.N = new _.rm(1);
                this.A = new _.Mp;
                this.j = null;
                this.C = !0;
                this.l = null != _.t.IntersectionObserver;
                this.F = h || null;
                this.H = new _.F(this);
                e = new _.Gl;
                f = new _.Il((0, _.y)(this.h.initialize, this.h, e.register()));
                this.Rd = _.Jl(f, e.delay((0, _.y)(this.Rd,
                    this)));
                this.Qd = _.Jl(f, e.delay((0, _.y)(this.Qd, this)));
                this.Sd = _.Jl(f, e.delay((0, _.y)(this.Sd, this)));
                this.restore = _.Jl(f, e.delay((0, _.y)(this.restore, this)));
                f.finish();
                e.finish();
                e = su(wu, 1);
                f = new ju;
                f = _.H(f, 1, window.location.origin);
                h = _.Gh(e, iu, 112);
                _.Hh(h, 4, f);
                uu(e);
                performance && performance.mark && performance.mark("translate:initialized", void 0)
            };
        _.z(xu, _.A);
        _.Tl.attach(14097, xu.prototype, {
            Mf: function() {
                _.Di(this.h.ub() ? "te_afas" : "te_afau")
            }
        });
        _.k = xu.prototype;
        _.k.Ak = function(a) {
            this.l = a
        };
        _.k.Wa = function() {
            return this.h.ub()
        };
        _.k.Rd = function(a, b) {
            this.h.Wa() ? this.h.o.send(_.Hi(b), a) : (this.Mf(), a(null))
        };
        _.k.Qd = function(a) {
            var b = document.documentElement.lang;
            if (b) a(b);
            else if (this.h.Wa()) {
                b = new _.ym(document.body, !1, !1, 1, 1);
                for (var c = [], d = 0, e = this.h.j.Of; c.length + d < e;) {
                    var f = b.next();
                    if (f.done) break;
                    f = f.value;
                    1 == b.h && _.jq(f) ? _.zm(b) : 3 == f.nodeType && (f = (0, _.Rb)(_.xj(f.nodeValue))) && (c.push(f), d += f.length)
                }
                _.jm(this.h, a, c.join(" "))
            } else this.Mf(), a(null, !0)
        };
        _.k.Sd = function(a, b, c, d, e) {
            wu.Ld = a;
            wu.Md = b;
            var f = su(wu, 2);
            tu(wu, f);
            uu(f);
            f = {
                detail: {
                    sourceLanguage: a,
                    targetLanguage: b
                }
            };
            performance && performance.mark && performance.mark("translate:initiated", f);
            f = Date.now();
            ps();
            if (!a || Ss(a, b)) a = "auto";
            if (e || a != this.o || b != this.W) this.A = new _.Mp;
            this.o = a;
            this.W = b;
            this.h.Wa() ? (d = d || document.documentElement, this.j && this.j.P(), this.F.reset(), this.j = new _.Lq(d, this.h, this.ya, this.K, this.Pc, !0, this.N, this.A, this.l, this.F), this.j.ta = this.s, this.C = !0, this.j.translate(a, b,
                c, e, (0, _.y)(this.Zj, this, f, a, b))) : (this.Mf(), c(0, !1, !0))
        };
        _.k.si = function() {
            return !!this.j && this.j.h
        };
        _.k.Gg = function(a) {
            this.s = a
        };
        _.k.restore = function() {
            var a = su(wu, 3);
            tu(wu, a);
            uu(a);
            performance && performance.mark && performance.mark("translate:restored", void 0);
            ps();
            this.h.Wa() && this.j && this.j.restore()
        };
        _.k.L = function() {
            os();
            xu.R.L.call(this);
            this.h.P();
            this.j = this.h = null;
            this.A = new _.Mp
        };
        _.k.Zj = function(a, b, c, d) {
            this.C && (this.C = !1, b = {
                sl: b,
                tl: c,
                textlen: d
            }, this.s && (b.ctt = "1"), "" != this.I && (b.sp = this.I), b.ttt = Date.now() - a, b.ttl = this.O, this.G && (b.ttf = this.G), this.l && (b.sr = 1), _.Di("te_time", b))
        };
        var yu = function(a) {
            _.M.call(this, a);
            this.H = new _.F(this)
        };
        _.x(yu, _.M);
        yu.prototype.T = function() {
            var a = _.nh(this.h, "select");
            a.className = "goog-te-combo";
            a.setAttribute("aria-label", _.T.Hg);
            this.Aa(a)
        };
        yu.prototype.ka = function() {
            _.M.prototype.ka.call(this);
            this.Zg()
        };
        yu.prototype.Zg = function() {
            _.D(this.B(), "change", _.Ml(this, "change"));
            this.dispatchEvent("load")
        };
        yu.prototype.ia = function() {
            _.M.prototype.ia.call(this);
            this.H.P();
            this.H = null
        };
        var zu = function(a, b) {
            a.B().parentNode != b && (a.B().parentNode.removeChild(a.B()), b.appendChild(a.B()))
        };
        _.k = yu.prototype;
        _.k.Jd = function(a) {
            this.h.Zf(this.B());
            for (var b in a)
                if (a[b] !== Object.prototype[b]) {
                    var c = this.h.T("OPTION", {
                        value: b
                    });
                    this.h.qc(c, a[b]);
                    this.B().appendChild(c)
                }
            this.B().selectedIndex = 0
        };
        _.k.Ga = function() {
            return this.B().value
        };
        _.k.ob = function(a) {
            if (this.B().value != a)
                for (var b = 0, c; c = this.B().options.item(b); ++b)
                    if (c.value == a) {
                        this.B().selectedIndex = b;
                        break
                    }
        };
        _.k.Td = function(a) {
            if ("undefined" == _.kb(a)) return this.B().options.item(this.B().selectedIndex).text;
            for (var b = 0, c; c = this.B().options.item(b); ++b)
                if (c.value == a) return c.text
        };
        _.k.mb = function(a) {
            this.B().disabled = !a
        };
        var Au = function(a) {
            yu.call(this, a)
        };
        _.x(Au, yu);
        Au.prototype.Kd = function(a) {
            this.Jd.call(this, a)
        };
        var Bu = function(a, b) {
            yu.call(this, b);
            this.D = a && _.ni(a) || {};
            this.D.eg = this.D.eg || 11;
            this.D.Ie = 0 != this.D.Ie;
            this.D.Eb || (this.D.Eb = _.yl)
        };
        _.x(Bu, yu);
        _.k = Bu.prototype;
        _.k.be = function() {
            throw Error("Ka");
        };
        _.k.T = function() {
            this.be();
            this.A = this.B();
            this.o = _.Fj("IFRAME", {
                frameBorder: 0,
                "class": "goog-te-menu-frame skiptranslate",
                title: _.T.Hg
            });
            this.o.style.visibility = "visible";
            _.R(this.o, !1);
            document.body.appendChild(this.o)
        };
        _.k.Zg = function() {
            var a = _.kf.test(_.S) ? "rtl" : "ltr",
                b = _.Fb(this.D.Eb),
                c = _.U(this, "menuBody");
            this.H.J(this.o, "load", this.ti);
            Rs(this.o, (0, _.y)(function() {
                var d = _.Kj(this.o);
                var e = (0, _.K)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.L(Ns(b)) + '"></head><body scroll="no" style="margin:0px;overflow:hidden" dir="' + _.L(a) + '" marginHeight=0 marginWidth=0 leftMargin=0 topMargin=0 border=0><div id="' + _.L(c) + '" class="goog-te-menu"></div></body>');
                e = _.wi(e);
                d.write(_.Dc(e));
                d.close()
            }, this))
        };
        _.k.ti = function() {
            this.j = new _.Nc(_.Kj(this.o));
            this.O = this.j.B(_.U(this, "menuBody"));
            this.H.J(this.A, "click", this.wf);
            _.C ? this.H.J(this.o, "blur", this.ke) : this.H.J(us(this.o), "blur", this.ke);
            this.dispatchEvent("load")
        };
        _.k.ia = function() {
            yu.prototype.ia.call(this);
            _.Ij(this.o);
            this.A = this.Z = this.s = this.O = this.j = this.o = null
        };
        _.k.qh = function(a) {
            this.Za != a.currentTarget.value && (this.ob(a.currentTarget.value), this.dispatchEvent("change"));
            this.ke()
        };
        _.k.wf = function() {
            Cu(this);
            us(this.o).focus();
            this.na = !0
        };
        _.k.ke = function() {
            this.na && (this.na = !1, Cu(this, !1), _.Vc(_.Oc(this.A)).focus())
        };
        _.k.ag = function() {};
        _.k.bg = function() {};
        var Cu = function(a, b) {
            if ("undefined" == typeof b || b) {
                a.bg();
                b = _.Ek(a.A, window);
                var c = b.y + a.A.offsetHeight,
                    d = b.y - a.G.height,
                    e = b.x,
                    f = b.x + a.A.offsetWidth - a.G.width;
                if (_.C && !_.kj()) {
                    var g = document.body;
                    c -= g.offsetTop;
                    d -= g.offsetTop;
                    e -= g.offsetLeft;
                    f -= g.offsetLeft
                } else g = _.Ui(document), c -= g.y, d -= g.y, e -= g.x, f -= g.x;
                g = _.Uc(window);
                b.y = b.y <= g.height - a.G.height ? c : d;
                b.y > g.height - a.G.height && (b.y = g.height - a.G.height);
                0 > b.y && (b.y = 0);
                _.kf.test(_.S) ? b.x = 0 <= f ? f : e : b.x = e <= g.width - a.G.width ? e : f;
                b.x > g.width - a.G.width &&
                    (b.x = g.width - a.G.width);
                0 > b.x && (b.x = 0);
                _.yk(a.o, b);
                _.R(a.o, !0);
                Du(a)
            } else a.ag(), _.R(a.o, !1)
        };
        _.k = Bu.prototype;
        _.k.Ga = function() {
            return this.Za
        };
        _.k.Jd = function(a) {
            this.j.Zf(this.O);
            _.R(this.o, !0);
            this.ta = a;
            this.s = [];
            for (var b in a)
                if (a[b] !== Object.prototype[b])
                    if ("---" == a[b]) {
                        var c = {
                            link: this.j.T("DIV", {
                                className: "goog-te-menu2-separator",
                                value: b
                            }),
                            Mj: !0
                        };
                        this.s.push(c)
                    } else {
                        c = {
                            link: this.j.T("A", {
                                className: "goog-te-menu2-item-selected",
                                href: "javascript:void(0)",
                                value: b
                            })
                        };
                        this.s.push(c);
                        var d = this.j.T("DIV", {
                            style: "white-space:nowrap"
                        });
                        this.j.appendChild(c.link, d);
                        this.D.Ie && this.j.appendChild(d, this.j.T("SPAN", {
                            className: "indicator"
                        }, "\u203a"));
                        this.j.appendChild(d, this.j.T("SPAN", {
                            className: "text"
                        }, a[b]));
                        this.H.J(c.link, "click", this.qh)
                    }
            a = this.s.length - 1;
            a = Math.round((a - a % this.D.eg) / this.D.eg) + 1;
            this.Z = this.j.T("TABLE", {
                cellspacing: 0,
                cellpadding: 0,
                border: 0
            });
            c = this.j.T("TBODY");
            b = this.j.T("TR", {
                valign: "top"
            });
            this.O.className = "goog-te-menu2";
            this.j.appendChild(this.O, this.Z);
            this.j.appendChild(this.Z, c);
            this.j.appendChild(c, b);
            for (d = c = 0; c < a; ++c) {
                var e = this.j.T("TD");
                this.j.appendChild(b, e);
                for (var f = 0; 11 > f && d < this.s.length; ++f, ++d) this.j.appendChild(e,
                    this.s[d].link);
                c != a - 1 && (e = this.j.T("TD", {
                    "class": "goog-te-menu2-colpad"
                }, "\u00a0"), this.j.appendChild(b, e))
            }
            this.Za = null;
            this.ob(this.s[0].link.value);
            Du(this);
            _.R(this.o, !1)
        };
        _.k.Td = function(a) {
            return this.ta["undefined" == _.kb(a) ? this.Za : a]
        };
        _.k.cg = function() {};
        _.k.ob = function(a) {
            if (this.Za != a) {
                this.Td(a) && (this.Za = a, this.cg());
                for (var b = 0; b < this.s.length; ++b) {
                    var c = this.s[b];
                    c.Mj || (c.link.className = c.link.value == a && this.D.Ie ? "goog-te-menu2-item-selected" : "goog-te-menu2-item")
                }
            }
        };
        var Du = function(a) {
                Ks(a.O, Js(a.Z));
                Ks(a.o, Js(a.O));
                a.G = Js(a.o)
            },
            Eu = function(a, b) {
                Bu.call(this, a, b)
            };
        _.x(Eu, Bu);
        _.k = Eu.prototype;
        _.k.be = function() {
            var a = this.h.T("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.K = this.h.T("SPAN");
            a.appendChild(this.K);
            this.U = this.h.T("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                style: "background-image:url(" + _.ul + ");background-position:-14px 0px;border:none",
                width: 14,
                height: 14
            });
            a.appendChild(this.U);
            this.Aa(a)
        };
        _.k.ag = function() {
            _.J(this.U, "backgroundPosition", "-14px 0px")
        };
        _.k.bg = function() {
            _.J(this.U, "backgroundPosition", "0px 0px")
        };
        _.k.ia = function() {
            Bu.prototype.ia.call(this);
            this.U = this.K = null
        };
        _.k.cg = function() {
            this.h.qc(this.K, this.Td(this.Za) || "")
        };
        _.k.Kd = function(a) {
            this.Jd.call(this, a)
        };
        var Fu = function(a, b) {
            Bu.call(this, a, b)
        };
        _.x(Fu, Bu);
        _.k = Fu.prototype;
        _.k.be = function() {
            var a = this.h.T("a", {
                "aria-haspopup": "true"
            });
            a.className = "goog-te-menu-value";
            a.href = "javascript:void(0)";
            this.K = this.h.T("SPAN");
            a.appendChild(this.K);
            a.appendChild(this.h.T("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            a.appendChild(this.h.T("SPAN", {
                style: "border-left:1px solid #bbb"
            }, "\u200b"));
            a.appendChild(this.h.T("IMG", {
                src: "https://www.google.com/images/cleardot.gif",
                alt: "",
                width: 1,
                height: 1
            }));
            this.U = this.h.T("span", {
                style: "color:#767676",
                "aria-hidden": "true"
            }, "\u25bc");
            a.appendChild(this.U);
            this.Aa(a)
        };
        _.k.ag = function() {
            _.J(this.U, "color", "#9b9b9b")
        };
        _.k.bg = function() {
            _.J(this.U, "color", "#d5d5d5")
        };
        _.k.ia = function() {
            Bu.prototype.ia.call(this);
            this.U = this.K = null
        };
        _.k.cg = function() {
            this.h.qc(this.K, this.Td(this.Za) || "")
        };
        _.k.Kd = function(a) {
            this.Jd.call(this, a)
        };
        var Gu = function(a, b) {
            Bu.call(this, a, b);
            this.D.Ie = !1
        };
        _.x(Gu, Bu);
        Gu.prototype.be = function() {
            var a = _.nh(this.h, "div");
            a.className = "goog-te-button";
            var b = this.h.T("DIV", {
                style: "background: url(" + _.tl + ") repeat-x 0 -39px"
            });
            a.appendChild(b);
            this.K = _.nh(this.h, "button");
            b.appendChild(this.K);
            this.Aa(a)
        };
        Gu.prototype.ai = function(a) {
            _.Zc(this.K);
            this.K.appendChild(this.h.V.createTextNode(String(a + "\u00a0\u25bc")))
        };
        Gu.prototype.ia = function() {
            Bu.prototype.ia.call(this);
            this.K = null
        };
        Gu.prototype.qh = function(a) {
            this.ob(a.currentTarget.value);
            this.dispatchEvent("change");
            this.ke()
        };
        var Hu = function() {
            this.j = {};
            this.h = 0
        };
        Hu.prototype.l = function(a, b) {
            a = this.j[b];
            if (!a) return b;
            b = "";
            a.pg && (b += "<" + a.pg + a.attributes + ">");
            a.Ef && (b += a.Ef);
            a.pf && (b += "</" + a.pf + ">");
            return b
        };
        Hu.prototype.pg = function(a, b) {
            _.pj(a);
            return Iu(this, {
                pg: a,
                attributes: _.tj(b)
            })
        };
        Hu.prototype.pf = function(a) {
            _.pj(a);
            return Iu(this, {
                pf: a
            })
        };
        Hu.prototype.text = function(a) {
            return Iu(this, {
                Ef: _.zj(a)
            })
        };
        var Iu = function(a, b) {
            a.h++;
            var c = "{SafeHtmlFormatter:" + a.h + "_" + _.Mc() + "}";
            a.j[_.zj(c)] = b;
            return c
        };
        var Ju = function(a, b) {
            _.M.call(this, b);
            this.D = a && _.ni(a) || {};
            this.H = new _.F(this)
        };
        _.z(Ju, _.M);
        var Ku = {
            Ul: 0,
            nl: 1,
            Jl: 2
        };
        _.k = Ju.prototype;
        _.k.T = function() {
            var a = _.nh(this.h, "div");
            _.un(a, "skiptranslate");
            _.un(a, "goog-te-gadget");
            a.dir = _.kf.test(_.S) ? "rtl" : "ltr";
            _.R(a, !1);
            if (2 == this.D.Ic) {
                var b = Zs({
                    id: _.U(this, "targetLanguage"),
                    Th: "",
                    Sh: ""
                });
                _.Ai(a, _.yi(b))
            } else {
                b = new Hu;
                var c = _.Fm({
                        Ah: _.C && !_.kj(),
                        Zc: "https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png",
                        Hh: "https://translate.google.com"
                    }),
                    d = _.T,
                    e = d.Kg;
                c = _.wi(c);
                c = Iu(b, {
                    Ef: _.Dc(c).toString()
                });
                d = e.call(d, c);
                e = _.zj("SafeHtmlFormatter:");
                b = _.zj(d).replace(new RegExp("\\{" +
                    e + "[\\w&#;]+\\}", "g"), (0, _.y)(b.l, b, []));
                b = _.Ec(b);
                b = Zs({
                    id: _.U(this, "targetLanguage"),
                    Th: "",
                    Sh: 1 == this.D.Ic ? _.rj("\u00a0", "\u00a0", b) : b
                });
                _.Ai(a, _.yi(b))
            }
            this.Aa(a)
        };
        _.k.ka = function() {
            Ju.R.ka.call(this);
            this.o = 2 == this.D.Ic ? new Fu(null, this.h) : new Au(this.h);
            this.H.J(this.o, "change", _.Ml(this, "chg_tgt_lang"));
            this.H.J(this.o, "load", this.ui);
            var a = this.h.B(_.U(this, "targetLanguage"));
            if (2 == this.D.Ic) {
                var b = this.h.T("IMG", {
                    src: "https://www.google.com/images/cleardot.gif",
                    "class": "goog-te-gadget-icon",
                    alt: ""
                });
                b.style.backgroundImage = "url(" + _.ul + ")";
                b.style.backgroundPosition = "-65px 0px";
                var c = this.h.T("SPAN", {
                    style: "vertical-align: middle"
                });
                a.appendChild(b);
                a.appendChild(c);
                this.o.Ca(c);
                a.style.whiteSpace = "nowrap";
                a.className = "goog-te-gadget-simple"
            } else this.o.Ca(a), 1 == this.D.Ic && (a.style.display = "inline")
        };
        _.k.ui = function() {
            if (2 == this.D.Ic) {
                var a = this.o,
                    b = this.h.B(_.U(this, "targetLanguage"));
                a.H.Fb(a.A, "click", a.wf);
                a.A = b;
                a.H.J(a.A, "click", a.wf)
            }
            this.dispatchEvent("load")
        };
        _.k.ia = function() {
            Ju.R.ia.call(this);
            this.H.P();
            this.H = null;
            this.o.P();
            this.o = null
        };
        _.k.oa = function() {
            return this.o.Ga()
        };
        _.k.Nb = function(a) {
            this.o.Kd(a)
        };
        _.k.sa = function(a) {
            "" == a ? this.O && this.Nb(this.O) : this.K && this.Nb(this.K);
            this.o.ob(a)
        };
        _.k.Y = function(a) {
            _.R(this.B(), a)
        };
        _.k.mb = function(a) {
            this.o.mb(a)
        };
        _.k.lg = function(a, b) {
            this.O = a;
            this.K = b
        };
        var Lu = function(a, b) {
            _.M.call(this, b);
            this.D = a && _.ni(a) || {};
            this.D.Eb || (this.D.Eb = _.yl);
            this.H = new _.F(this)
        };
        _.z(Lu, _.M);
        var Mu = {
            Ol: 1,
            Pl: 2,
            Xk: 3,
            Wk: 4
        };
        _.k = Lu.prototype;
        _.k.T = function() {
            var a = _.nh(this.h, "div");
            this.Hb = !1;
            _.R(a, !1);
            var b = _.U(this, "container");
            b = (0, _.K)('<iframe id="' + _.L(b) + '" frameBorder=0 src="javascript:\'\'" class="goog-te-ftab-frame skiptranslate" style="visibility:visible"></iframe>');
            _.Ai(a, _.yi(b));
            this.Aa(a)
        };
        _.k.ka = function() {
            Lu.R.ka.call(this);
            var a = _.kf.test(_.S) ? "rtl" : "ltr",
                b = _.Fb(this.D.Eb),
                c = _.U(this, "translate");
            this.B().id = _.U(this, "floatContainer");
            var d = {
                id: this.B().id,
                className: "goog-te-ftab-float"
            };
            this.B().className += " goog-te-ftab-float";
            switch (this.D.he) {
                case 2:
                    var e = "goog-float-top";
                    d.top = 0;
                    d.right = 20;
                    break;
                case 3:
                    e = "goog-float-bottom";
                    d.bottom = 0;
                    d.right = 20;
                    break;
                case 4:
                    e = "goog-float-bottom";
                    d.bottom = 0;
                    d.left = 20;
                    break;
                default:
                    e = "goog-float-top", d.top = 0, d.left = 20
            }
            Is(rs(new _.rf, d), this.B());
            this.A = this.h.B(_.U(this, "container"));
            this.H.J(this.A, "load", this.vi);
            Rs(this.A, (0, _.y)(function() {
                var f = _.Kj(this.A);
                var g = e;
                var h = _.T.af;
                g = (0, _.K)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' + _.L(Ns(b)) + '"></head><body class="goog-te-ftab ' + _.L(g) + '" scroll="no" style="overflow:hidden" dir="' + _.L(a) + '"><a id="' + _.L(c) + '" href="javascript:void(0)" class="goog-te-ftab-link"><img src="' + _.L(_.fl("https://www.google.com/images/cleardot.gif")) +
                    '" style="background-image:url(' + _.L(_.fl(_.ul)) + ');background-position:-65px 0px"><span>' + _.Zk(h) + "</span></a></body>");
                g = _.wi(g);
                f.write(_.Dc(g));
                f.close()
            }, this))
        };
        _.k.vi = function() {
            this.j = (new _.Nc(_.Kj(this.A))).B(_.U(this, "translate"));
            this.H.J(this.j, "click", _.Ml(this, "clk_trans"));
            _.R(this.B(), !0);
            var a = Js(this.j);
            _.R(this.B(), !1);
            Ks(this.A, a);
            Ks(this.B(), a);
            this.dispatchEvent("load")
        };
        _.k.ia = function() {
            Lu.R.ia.call(this);
            this.H.P();
            this.H = null;
            _.Ij(this.A);
            this.j = this.A = null
        };
        _.k.isVisible = function() {
            return this.Hb
        };
        _.k.Y = function(a) {
            this.Hb = a;
            _.R(this.B(), a)
        };
        var Nu = function(a, b) {
            _.M.call(this, b);
            this.H = new _.F(this);
            this.D = a && _.ni(a) || {};
            this.D.Eb || (this.D.Eb = _.yl);
            this.D.ng = !1;
            _.J(this.h.V.body, "position", "relative");
            _.Ag || _.J(this.h.V.body, "minHeight", "100%");
            _.J(this.h.V.documentElement, "height", "100%");
            _.J(this.h.V.body, "top", "0px");
            _.C && (window._bannerquirkfixleft = -parseInt("0" + this.h.V.body.leftMargin, 10), window._bannerquirkfixtop = -parseInt("0" + this.h.V.body.topMargin, 10) - 40)
        };
        _.z(Nu, _.M);
        _.k = Nu.prototype;
        _.k.Ca = function() {
            var a = this.h.V.body.firstChild;
            _.Pm(this, a.parentNode, a)
        };
        _.k.T = function() {
            var a = _.nh(this.h, "div");
            this.Hb = !1;
            _.R(a, !1);
            _.un(a, "skiptranslate");
            var b = _.U(this, "container");
            b = (0, _.K)('<iframe id="' + _.L(b) + '" class="goog-te-banner-frame skiptranslate" frameBorder=0 src="javascript:\'\'" style="visibility:visible"></iframe>');
            _.Ai(a, _.yi(b));
            this.Aa(a)
        };
        _.k.ka = function() {
            Nu.R.ka.call(this);
            var a = _.kf.test(_.S) ? "rtl" : "ltr",
                b = _.Fb(this.D.Eb),
                c = _.U(this, "promptSection"),
                d = _.U(this, "confirm"),
                e = _.U(this, "progressSection"),
                f = _.U(this, "progressValue"),
                g = _.U(this, "cancel"),
                h = _.U(this, "finishSection"),
                l = _.U(this, "restore"),
                m = _.U(this, "errorSection"),
                n = _.U(this, "errorContent"),
                p = _.U(this, "close"),
                r = _.U(this, "noAutoPopup"),
                q, w = [];
            this.D.ng && w.push(Ys({
                id: _.U(this, "promptSourceLang")
            }));
            w.push(Ys({
                id: _.U(this, "promptTargetLang")
            }));
            var O = _.Ec(_.T.Ni.apply(null,
                w));
            w = [];
            this.D.ng && w.push(Ys({
                id: _.U(this, "finishSourceLang")
            }));
            w.push(Ys({
                id: _.U(this, "finishTargetLang")
            }));
            var P = _.Ec(_.T.Hi.apply(null, w));
            this.D.ei && (q = this.D.ei);
            this.A = this.h.B(_.U(this, "container"));
            this.H.J(this.A, "load", this.wi);
            Rs(this.A, (0, _.y)(function() {
                var Ca = _.Kj(this.A);
                var fa = q;
                var ee = _.T.nd,
                    gw = _.T.af,
                    hw = _.T.Ji,
                    iw = _.T.Ne,
                    jw = _.T.Mg,
                    kw = _.T.wg,
                    lw = _.T.wg;
                fa = (0, _.K)('<head><meta http-equiv="Content-Type" content="text/html; charset=UTF8"><link rel="stylesheet" type="text/css" href="' +
                    _.L(Ns(b)) + '"></head><body class="goog-te-banner" scroll="no" border=0 dir="' + _.L(a) + '"><table border=0 cellspacing=0 cellpadding=0 width=100% height=100%><tr valign=middle><td width=1 nowrap><a href="' + _.L(_.dl("https://translate.google.com")) + '" class="goog-logo-link" target="_blank"><img src="' + _.L(_.fl("https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_68x28dp.png")) + '" alt="Google ' + _.L(ee) + '"></a></td>' + (fa ? '<td width=1><img src="' + _.L(_.fl("https://www.google.com/images/cleardot.gif")) +
                        '" width="9" height="15" title="' + _.L(fa) + '" alt="' + _.L(fa) + '" style="background-image:url(' + _.L(_.fl(_.ul)) + ');background-position:-56px 0px;margin:0 4px"></td>' : "") + '<td class="goog-te-banner-margin"></td><td><table border=0 cellspacing=0 cellpadding=0 height=100%><tr id="' + _.L(c) + '" style="display:none" valign=middle><td nowrap><span class="goog-te-banner-content">' + _.Zk(O) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.L(d) + '"><b>' +
                    _.Zk(gw) + '</b></button></div></div></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.L(r) + '"></button></div></div></td></tr><tr id="' + _.L(e) + '" style="display:none" valign=middle><td><span class="goog-te-banner-content">' + _.Zk(hw) + '&nbsp;<span dir="ltr">(<b id="' + _.L(f) + '"></b>%)</span>&nbsp;<img src="' + _.L(_.fl(_.wl)) + '"></span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.L(g) + '">' + _.Zk(iw) +
                    '</button></div></div></td></tr><tr id="' + _.L(h) + '" style="display:none"><td><span class="goog-te-banner-content">' + _.Zk(P) + '</span></td><td class="goog-te-banner-margin"></td><td nowrap><div class="goog-te-button"><div><button id="' + _.L(l) + '">' + _.Zk(jw) + '</button></div></div></td></tr><tr id="' + _.L(m) + '" style="display:none" valign=middle><td><span id="' + _.L(n) + '" class="goog-te-banner-content"></span></td></tr></table></td><td class="goog-te-banner-margin"></td><td width=1 id="options"></td><td width=1><a id="' +
                    _.L(p) + '" class="goog-close-link" href="javascript:void(0)" title="' + _.L(kw) + '"><img src="' + _.L(_.fl("https://www.google.com/images/cleardot.gif")) + '" width="15" height="15" alt="' + _.L(lw) + '" style="background-image:url(' + _.L(_.fl(_.ul)) + ');background-position:-28px 0px"></a></td></tr></table></body>');
                fa = _.wi(fa);
                Ca.write(_.Dc(fa));
                Ca.close()
            }, this))
        };
        _.k.wi = function() {
            this.j = new _.Nc(_.Kj(this.A));
            Ou(this, _.T.Bg);
            if (this.D.Eb == _.yl) {
                var a = "url(" + _.tl + ")";
                _.J(this.j.V.body, "backgroundImage", a);
                for (var b = this.j.V.getElementsByTagName("button"), c = 0; c < b.length; ++c) {
                    var d = b[c].parentNode;
                    _.J(d, "backgroundImage", a);
                    _.J(d, "backgroundRepeat", "repeat-x");
                    _.J(d, "backgroundPosition", "0 -39px")
                }
            }
            this.D.ng && (this.s = new Eu(this.D, this.j));
            this.o = new Eu(this.D, this.j);
            this.G = new Gu(this.D, this.j);
            this.H.J(this.j.B(_.U(this, "confirm")), "click", _.Ml(this, "clk_confirm"));
            this.H.J(this.j.B(_.U(this, "cancel")), "click", _.Ml(this, "clk_cancel"));
            this.H.J(this.j.B(_.U(this, "restore")), "click", _.Ml(this, "clk_restore"));
            this.H.J(this.j.B(_.U(this, "close")), "click", _.Ml(this, "clk_close"));
            this.U = this.j.B(_.U(this, "noAutoPopup"));
            this.H.J(this.U, "click", _.Ml(this, "clk_no_ap"));
            this.s && this.H.J(this.s, "change", _.Ml(this, "chg_src_lang"));
            this.H.J(this.o, "change", _.Ml(this, "chg_tgt_lang"));
            this.H.J(this.G, "change", this.wj);
            a = new _.Gl((0, _.y)(this.xi, this));
            this.s && this.H.J(this.s,
                "load", a.register());
            this.H.J(this.o, "load", a.register());
            this.H.J(this.G, "load", a.register());
            a.finish();
            this.s && this.s.Ca(this.j.B(_.U(this, "promptSourceLang")));
            this.o.Ca(this.j.B(_.U(this, "promptTargetLang")));
            this.G.Ca(this.j.B("options"))
        };
        _.k.xi = function() {
            this.G.ai(_.T.Bi);
            this.G.Jd({
                turn_off_site: _.T.Mi,
                s1: "---",
                learn_more: _.T.Ai
            });
            this.dispatchEvent("load")
        };
        _.k.wj = function() {
            switch (this.G.Ga()) {
                case "learn_more":
                    window.open(_.Cl, "_blank");
                    break;
                case "turn_off_site":
                    this.dispatchEvent("clk_no_ap_site")
            }
        };
        _.k.ia = function() {
            this.Y(!1);
            Nu.R.ia.call(this);
            this.H.P();
            this.H = null;
            this.s && (this.s.P(), this.s = null);
            this.o.P();
            this.o = null;
            this.G.P();
            this.G = null;
            _.Ij(this.A);
            this.wd = this.j = null
        };
        _.k.kb = function() {
            return this.s ? this.s.Ga() : ""
        };
        _.k.oa = function() {
            return this.o.Ga()
        };
        _.k.Nb = function(a) {
            this.o.Kd(a)
        };
        _.k.pc = function(a) {
            this.s && this.s.ob(a);
            this.Z && this.Z[a] && this.j.qc(this.U, _.T.Li(this.Z[a]))
        };
        _.k.sa = function(a) {
            this.o.ob(a)
        };
        var Pu = function(a, b, c, d) {
            if (a.wd != b) {
                a.wd = b;
                if (0 == b) {
                    a.s && zu(a.s, a.j.B(_.U(a, "promptSourceLang")));
                    if (a.O) {
                        var e = a.oa();
                        a.Nb(a.O);
                        a.sa(e)
                    }
                    zu(a.o, a.j.B(_.U(a, "promptTargetLang")))
                } else 2 == b && (a.s && zu(a.s, a.j.B(_.U(a, "finishSourceLang"))), a.K && (e = a.oa(), a.Nb(a.K), a.sa(e)), zu(a.o, a.j.B(_.U(a, "finishTargetLang"))));
                e = {};
                e[-1] = a.j.B(_.U(a, "errorSection"));
                e[0] = a.j.B(_.U(a, "promptSection"));
                e[1] = a.j.B(_.U(a, "progressSection"));
                e[2] = a.j.B(_.U(a, "finishSection"));
                for (var f in e) e[f] !== Object.prototype[f] &&
                    _.R(e[f], f == b)
            }
            c && a.Y(!0);
            a.U.parentNode.parentNode.style.display = d ? "block" : "none"
        };
        Nu.prototype.isVisible = function() {
            return this.Hb
        };
        Nu.prototype.Y = function(a) {
            if (this.Hb != a) {
                this.Hb = a;
                if (_.C) var b = parseInt("0" + this.h.V.body.leftMargin, 10),
                    c = parseInt("0" + this.h.V.body.topMargin, 10);
                var d = "BackCompat" == this.h.V.compatMode;
                a ? (_.J(this.h.V.body, "top", "40px"), _.R(this.B(), !0), _.C && (_.kj() ? (window._bannerquirkfixleft = window._bannerquirkfixtop = 0, d && (this.h.V.body.topMargin = c + 40)) : d ? (this.h.V.body.topMargin = c + 40, window._bannerquirkfixleft = window._bannerquirkfixtop = 0) : (window._bannerquirkfixleft = -b, window._bannerquirkfixtop = -c - 40))) : (_.J(this.h.V.body,
                    "top", "0px"), _.R(this.B(), !1), d && 40 <= c && (this.h.V.body.topMargin = c - 40))
            }
        };
        Nu.prototype.kg = function(a) {
            this.j.qc(this.j.B(_.U(this, "progressValue")), a)
        };
        var Ou = function(a, b) {
            a.j.qc(a.j.B(_.U(a, "errorContent")), b)
        };
        Nu.prototype.lg = function(a, b) {
            this.O = a;
            this.K = b;
            this.Nb(a)
        };
        var Qu = function(a, b) {
            _.A.call(this);
            "string" == _.kb(a) && (b = a, a = {});
            "string" == _.kb(b) && (b = _.Q(String(b)));
            this.G = b;
            this.H = new _.F(this);
            this.X = this.Mc = this.K = void 0;
            this.O = new Map;
            this.N = _.Dl(ru);
            this.Xf(Object(a));
            this.ya = new _.up({
                apiKey: this.D.apiKey,
                kc: 1,
                He: !0,
                Ik: _.Al
            }, {
                client: _.ql,
                u: window.location.href
            });
            this.Ea = new xu(void 0, this.ya, void 0, void 0, this.D.apiKey, void 0, void 0, new ct, this.K, this.Mc, this.X);
            this.s = !1;
            this.H.J(window, "pagehide", this.P);
            this.Ff()
        };
        _.x(Qu, _.A);
        Qu.prototype.Xf = function(a) {
            this.ba = "auto";
            var b;
            !(b = window.parent != window) && (b = (!window.external || !window.external.googleToolbarVersion || 6.2 > parseFloat(window.external.googleToolbarVersion)) && (!window.gtbExternal || !window.gtbExternal.isTranslateEnabled || !window.gtbExternal.isTranslateEnabled())) && (b = navigator.appVersion && navigator.appVersion.match(/\sChrome\/((\d+)\.(\d+)\.[\d\.]+)\s/), b = !(b && b[2] && b[3] && 4001 <= 1E3 * Number(b[2]) + Number(b[3])));
            this.D = {
                cf: b,
                dh: !1,
                df: null,
                Vd: null,
                Gc: [],
                Qc: [],
                nf: !1,
                dc: !1,
                apiKey: "",
                fh: !1,
                tf: "",
                Ic: 0,
                Wg: !1
            };
            this.U = {
                Eb: _.yl,
                ei: "https://" == _.sl ? _.T.Ei : null
            };
            this.I = {
                Eb: _.yl,
                he: null
            };
            a && ("autoDisplay" in a && (this.D.cf = this.D.cf && !!a.autoDisplay), "multilanguagePage" in a && (this.D.dc = !!a.multilanguagePage), "gaTrack" in a && (this.D.fh = !!a.gaTrack), "layout" in a && (this.D.Ic = a.layout), a.pageLanguage && (this.D.Lb = _.Nl(a.pageLanguage)), a.includedLanguages && (this.D.Gc = a.includedLanguages.split(",")), a.excludedLanguages && (this.D.Qc = a.excludedLanguages.split(",")), this.D.Lb && (this.ba = this.D.Lb),
                a.key && (this.D.apiKey = a.key), a.gaId && (this.D.tf = a.gaId), this.I.he = Number(a.floatPosition) || this.I.he, "disableAutoTranslation" in a && (this.D.Wg = !!a.disableAutoTranslation), a.jwtToken && (this.K = new Ws(a.jwtToken)), a.jwtTokenProvider && (this.K = new Xs(a.jwtTokenProvider)), a.translateErrorHandler && (this.Mc = a.translateErrorHandler), a.remoteApiProxyHandlers && (this.X = a.remoteApiProxyHandlers));
            !this.D.Wg && Ru(this) && (this.D.dh = !0);
            this.o = {};
            if ((a = document.cookie.match(/(^|; )googtransopt=(.*?)(;|$)/)) && a[2])
                for (this.o = {}, a = _.Lc(a[2]).split("|"), b = 0; b < a.length; ++b) {
                    var c = a[b].split("=");
                    c[0] && (this.o[c[0]] = c[1])
                }
        };
        var Ru = function(a) {
                function b(f, g) {
                    if (f = _.Lc(f).match("^\\((([a-zA-Z\\-_]*)\\|)?([a-zA-Z\\-_]*)\\)|^/(([a-zA-Z\\-_]*)/)?([a-zA-Z\\-_]*)")) {
                        if (f[3]) return g.D.df = f[2], g.D.Vd = f[3], !0;
                        if (f[6]) return g.D.df = f[5], g.D.Vd = f[6], !0
                    }
                    return !1
                }
                var c = {
                        url: function() {
                            var f = window.location.href.match(/#.*googtrans(.*)/);
                            return f && f[1]
                        },
                        cookie: function() {
                            var f = document.cookie.match(/(^|; )googtrans=(.*?)(;|$)/);
                            return f && f[2]
                        }
                    },
                    d;
                for (d in c)
                    if (c[d] !== Object.prototype[d]) {
                        var e = c[d]();
                        if (e && b(e, a)) return d
                    }
                return ""
            },
            Su = function(a, b) {
                for (var c = window.location.hostname.split("."); 2 < c.length;) c.shift();
                c = ";domain=" + c.join(".");
                null != b ? a = a + "=" + b : (b = new Date, b.setTime(b.getTime() - 1), a = a + "=none;expires=" + b.toGMTString());
                a += ";path=/";
                document.cookie = a;
                try {
                    document.cookie = a + c
                } catch (d) {}
            },
            Tu = function(a, b) {
                var c = null;
                void 0 !== b && (c = void 0 !== a ? "/" + a + "/" + b : "/" + b);
                Su("googtrans", c)
            };
        Qu.prototype.xf = function(a) {
            this.W = _.Nl(_.S);
            this.vb = _.Ji(a || {});
            this.Da = {};
            this.F = {};
            a = !this.D.Gc.length;
            var b = _.Fl(this.D.Gc),
                c = _.Fl(this.D.Qc);
            this.Da[_.S] = "";
            this.F[_.S] = "";
            for (var d in this.vb.tl) this.vb.tl[d] === Object.prototype[d] || !(a || d in b) || d in c || (this.F[d] = this.vb.tl[d], d == this.D.Lb && !this.D.dc) || (this.Da[d] = this.vb.tl[d]);
            this.Da[_.S] || delete this.Da[_.S];
            this.F[_.S] || delete this.F[_.S];
            this.Je = _.ni(this.vb.sl)
        };
        Qu.prototype.vf = function(a) {
            a && (this.ba = _.Nl(a))
        };
        Qu.prototype.yf = function() {
            delete this.cb;
            if (this.vb) {
                this.ba = this.ba || this.D.df;
                this.W = this.D.Vd || this.W;
                var a = this.D.dh || this.D.cf && this.ba != this.W && !(this.ba in _.pl) && "1" != this.o.os && "1" != this.o["o" + this.ba];
                "zh-TW" == this.ba && (this.ba = "zh-CN");
                this.Je[this.ba] || (a = !1, this.ba = "auto");
                if (!this.Da[this.W])
                    if (a = !1, this.Da.en) this.W = "en";
                    else
                        for (var b in this.Da)
                            if (this.Da[b] !== Object.prototype[b]) {
                                this.W = b;
                                break
                            }
                if (this.j) {
                    b = this.Da;
                    var c = {
                            "": _.T.Ng
                        },
                        d;
                    for (d in b) b[d] !== Object.prototype[d] && (c[d] =
                        b[d]);
                    this.j.lg(c, this.F);
                    this.j.sa("")
                }!_.nl && a ? this.D.Vd ? _.Jl(this.C, this.A.delay((0, _.y)(this.Ge, this, !0, !0))).call() : (this.s = !0, _.Jl(this.C, this.A.delay((0, _.y)(this.Ge, this))).call(), _.Di("te_ap", {
                    sl: this.ba
                })) : (this.l && this.l.Y(!0), this.j && this.j.Y(!0));
                window.google.translate.TranslateService && this.mb(!1);
                this.C.finish()
            }
        };
        Qu.prototype.Ff = function() {
            this.cb = new _.Gl((0, _.y)(this.yf, this));
            this.A = new _.Gl((0, _.y)(this.uj, this));
            this.C = new _.Il((0, _.y)(this.Pj, this));
            this.h = new Nu(this.U);
            this.Ea.Rd(this.cb.register((0, _.y)(this.xf, this)), _.S);
            this.G ? (this.j = new Ju(this.D), this.H.J(this.j, "load", this.cb.register()), this.H.J(this.j, "chg_tgt_lang", _.Jl(this.C, this.A.delay((0, _.y)(this.qj, this)))), this.j.Ca(this.G)) : this.I.he && (this.l = new Lu(this.I), this.H.J(this.l, "load", this.cb.register()), this.H.J(this.l, "clk_trans",
                _.Jl(this.C, this.A.delay((0, _.y)(this.pj, this)))), this.l.Ca());
            !this.D.Lb && this.D.nf && this.Ea.Qd(this.cb.register((0, _.y)(this.vf, this)));
            this.cb.finish();
            _.Q("goog-gt-thumbUpButton") && (Uu(this), Vu(this), Wu(this))
        };
        var Uu = function(a) {
                var b = _.Q("goog-gt-thumbUpButton"),
                    c = a.O,
                    d = a.N;
                b.addEventListener("click", function() {
                    if ("up" === ks(c)) vu(d);
                    else {
                        var e = su(d, 5);
                        tu(d, e);
                        uu(e)
                    }
                    ls(c, "up")
                }, !1)
            },
            Vu = function(a) {
                var b = _.Q("goog-gt-thumbDownButton"),
                    c = a.O,
                    d = a.N;
                b.addEventListener("click", function() {
                    if ("down" === ks(c)) vu(d);
                    else {
                        var e = su(d, 6);
                        tu(d, e);
                        uu(e)
                    }
                    ls(c, "down")
                }, !1)
            },
            Wu = function(a) {
                var b = _.Q("goog-gt-tt"),
                    c = b.dataset,
                    d = _.Q("goog-gt-votingInputSrcLang"),
                    e = _.Q("goog-gt-votingInputTrgLang"),
                    f = _.Q("goog-gt-votingInputSrcText"),
                    g = _.Q("goog-gt-votingInputTrgText"),
                    h = _.Q("goog-gt-translation"),
                    l = a.O,
                    m = a.N;
                window.document.body.addEventListener("goog-gt-popupShown", function(n) {
                    var p = su(m, 4);
                    tu(m, p);
                    uu(p);
                    p = n.detail;
                    n = String(p.Wd);
                    p = p.Lk;
                    c.id = n;
                    n = l.get(n) || "";
                    js(n);
                    b.style.width = Math.max(Math.min(window.innerWidth - 16, 536), 288) + "px";
                    d.value = p.kb();
                    e.value = p.oa();
                    f.value = p.Pd();
                    g.value = p.U;
                    h && (h.innerText = p.U)
                }, !1)
            };
        _.k = Qu.prototype;
        _.k.uj = function() {
            var a = this.h,
                b = this.Je;
            a.s && a.s.Kd(b);
            a.Z = b;
            this.h.lg(this.Da, this.F);
            this.h.pc(this.ba);
            this.h.sa(this.W);
            this.H.J(this.h, "clk_confirm", this.mj);
            this.H.J(this.h, "clk_cancel", this.lj);
            this.H.J(this.h, "clk_restore", this.uf);
            this.H.J(this.h, "clk_close", this.je);
            this.H.J(this.h, "clk_no_ap", this.nj);
            this.H.J(this.h, "clk_no_ap_site", this.oj);
            this.H.J(this.h, "chg_src_lang", this.mh);
            this.H.J(this.h, "chg_tgt_lang", this.mh);
            this.j && this.j.Y(!0)
        };
        _.k.Pj = function() {
            this.H.J(this.h, "load", this.A.register());
            this.h.Ca();
            this.A.finish()
        };
        _.k.L = function() {
            this.Ea.restore();
            _.A.prototype.L.call(this);
            this.Ea.P();
            this.H.P();
            this.H = null;
            this.h && this.h.P();
            this.h = null;
            this.l && this.l.P();
            this.l = null;
            this.j && this.j.P();
            this.G = this.j = null
        };
        _.k.mj = function() {
            !this.h.isVisible() || !this.D.dc && Ss(this.ba, this.h.oa()) || (this.s && _.Di("te_apt", {
                sl: this.ba
            }), Xu(this, !1), this.j && this.j.sa(this.h.oa()))
        };
        _.k.lj = function() {
            this.h.isVisible() && (Yu(this), Pu(this.h, 0), this.j && this.j.sa(""))
        };
        _.k.uf = function() {
            this.h.isVisible() && (Yu(this), Pu(this.h, 0));
            this.j && this.j.sa("")
        };
        _.k.je = function() {
            this.h.isVisible() && (this.s && (this.s = !1, _.Di("te_apc", {
                sl: this.ba
            })), Yu(this), this.h.Y(!1), this.j && this.j.sa(""), this.l && this.l.Y(!0))
        };
        _.k.nj = function() {
            this.h.isVisible() && (this.o["o" + this.ba] = "1", _.Di("te_apr", {
                sl: this.ba
            }), this.s = !1, this.je())
        };
        _.k.oj = function() {
            if (this.h.isVisible()) {
                this.s = !1;
                this.o.os = "1";
                var a = null;
                if (this.o) {
                    a = [];
                    for (var b in this.o) this.o[b] !== Object.prototype[b] && a.push(b + "=" + this.o[b]);
                    a = a.join("|")
                }
                Su("googtransopt", a);
                this.je()
            }
        };
        _.k.mh = function() {
            this.h.isVisible() && (!this.D.dc && Ss(this.ba, this.h.oa()) ? this.uf() : (this.ba = this.h.kb() || this.ba, this.W = this.h.oa(), 2 == this.h.wd && (this.j && this.j.sa(this.h.oa()), Xu(this))))
        };
        _.k.Ge = function(a, b) {
            this.h.isVisible() || (this.l && this.l.Y(!1), a ? Xu(this, b) : Pu(this.h, 0, !0, this.s))
        };
        _.k.Ck = function(a, b) {
            _.Jl(this.C, this.A.delay((0, _.y)(this.Ge, this, a, b))).call()
        };
        _.k.pj = function() {
            this.Ge(2 == this.h.wd)
        };
        _.k.qj = function() {
            this.j.oa() ? !this.D.dc && Ss(this.ba, this.h.oa()) ? this.uf() : (this.W = this.j.oa(), this.h.sa(this.W), Xu(this)) : this.j.sa(this.W)
        };
        var Xu = function(a, b) {
            if (window.google.translate.TranslateService) try {
                window.google.translate.TranslateService.getInstance().restore()
            } catch (c) {}
            Tu(a.ba, a.W);
            a.s = !1;
            !b && a.ba in _.pl && _.Di("te_ape", {
                sl: a.ba
            });
            a.h.kg(0);
            Pu(a.h, 1, !0);
            a.Ea.Gg(!!b);
            window.setTimeout((0, _.y)(a.Ea.Sd, a.Ea, a.D.dc ? "auto" : a.ba, a.W, (0, _.y)(a.Z, a), void 0, void 0), 0);
            if (a.D.fh && window._gaq && window._gat) try {
                a.D.tf ? window._gat._getTracker(a.D.tf)._trackEvent("Google Website Translator", "Translate", a.W) : window._gat._getTrackerByName()._trackEvent("Google Website Translator",
                    "Translate", a.W)
            } catch (c) {}
        };
        Qu.prototype.Z = function(a, b, c) {
            "function" == typeof this.ma && this.ma();
            this.h.isVisible() && 1 == this.h.wd && (c ? (Yu(this), Pu(this.h, -1, !0), 2 == c ? Ou(this.h, _.T.zi) : Ou(this.h, _.T.Bg)) : (this.h.kg(a), b && (this.j && this.j.sa(this.W), this.h.pc(this.ba), Pu(this.h, 2))))
        };
        var Yu = function(a) {
            Tu();
            window.setTimeout((0, _.y)(a.Ea.restore, a.Ea, null), 0)
        };
        Qu.prototype.mb = function(a) {
            a || this.je();
            this.j && this.j.mb(a);
            this.l && this.l.Y(a)
        };
        _.Em();
        if (1 == _.Ni) {
            var Z = null,
                Zu = function(a) {
                    if (!Z) {
                        var b, c, d, e;
                        a && ("key" in a && (b = a.key), "serverParams" in a && (c = a.serverParams), "timeInfo" in a && (d = a.timeInfo), "remoteApiProxyHandlers" in a && (e = a.remoteApiProxyHandlers), (a = Ts()) && (c = a));
                        a = 0;
                        if ("te_lib" == _.ql || _.Zb) a = 3;
                        Z = new xu(void 0, new _.up({
                            apiKey: b,
                            kc: a,
                            He: !0,
                            trackVisibility: "tvis" == c
                        }), void 0, void 0, b, c, d, new ct, void 0, void 0, e);
                        Z.constructor = function() {};
                        Z.isAvailable = Z.Wa;
                        Z.getSupportedLanguages = Z.Rd;
                        Z.getPageLanguage = Z.Qd;
                        Z.setClickThrough = Z.Gg;
                        Z.translatePage =
                            Z.Sd;
                        Z.restore = Z.restore;
                        Z.isTranslating = Z.si;
                        Z.setCheckVisibility = Z.Ak
                    }
                    return Z
                };
            Zu.getInstance = function() {
                return Z
            };
            _.rb("google.translate.TranslateService", Zu);
            _.Di("te_li")
        } else {
            var $u = null,
                av = function(a, b) {
                    $u || ($u = new Qu(a, b), $u.constructor = function() {});
                    return $u
                };
            av.getInstance = function() {
                return $u
            };
            _.rb("google.translate.TranslateElement", av);
            Qu.prototype.dispose = Qu.prototype.P;
            Qu.prototype.showBanner = Qu.prototype.Ck;
            Qu.prototype.setEnabled = Qu.prototype.mb;
            _.rb("google.translate.TranslateElement.FloatPosition",
                Mu);
            Mu.TOP_LEFT = 1;
            Mu.TOP_RIGHT = 2;
            Mu.BOTTOM_RIGHT = 3;
            Mu.BOTTOM_LEFT = 4;
            _.rb("google.translate.TranslateElement.InlineLayout", Ku);
            Ku.VERTICAL = 0;
            Ku.HORIZONTAL = 1;
            Ku.SIMPLE = 2
        }
        _.Oi();

        _.pa();

    } catch (e) {
        _._DumpException(e)
    }
}).call(this, this.default_tr);
// Google Inc.