! function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self).littlefoot = {})
}(this, function (e) {
  "use strict";
  var T = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t(e, t, n) {
    return e(n = {
      path: t,
      exports: {},
      require: function (e, t) {
        return function () {
          throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
        }(null == t && n.path)
      }
    }, n.exports), n.exports
  }
  var f = t(function (o) {
      var i, a, u, c, l, s, f, d, p, h, v, m, y, g, b, w, _, x, S, O, E, P, j;
      ! function () {
        var e, r, t = "object" == typeof T ? T : "object" == typeof self ? self : "object" == typeof this ? this : {};

        function n(n, r) {
          return n !== t && ("function" == typeof Object.create ? Object.defineProperty(n, "__esModule", {
              value: !0
            }) : n.__esModule = !0),
            function (e, t) {
              return n[e] = r ? r(e, t) : t
            }
        }
        e = n(t, n(o.exports)), r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function (e, t) {
          e.__proto__ = t
        } || function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
        }, i = function (e, t) {
          function n() {
            this.constructor = e
          }
          r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }, a = Object.assign || function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, u = function (e, t) {
          var n = {};
          for (o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
          return n
        }, c = function (e, t, n, r) {
          var o, i = arguments.length,
            a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
          if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
          else
            for (var u = e.length - 1; 0 <= u; u--)(o = e[u]) && (a = (i < 3 ? o(a) : 3 < i ? o(t, n, a) : o(t, n)) || a);
          return 3 < i && a && Object.defineProperty(t, n, a), a
        }, l = function (n, r) {
          return function (e, t) {
            r(e, t, n)
          }
        }, s = function (e, t) {
          if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
        }, f = function (e, a, u, c) {
          return new(u = u || Promise)(function (n, t) {
            function r(e) {
              try {
                i(c.next(e))
              } catch (e) {
                t(e)
              }
            }

            function o(e) {
              try {
                i(c.throw(e))
              } catch (e) {
                t(e)
              }
            }

            function i(e) {
              var t;
              e.done ? n(e.value) : ((t = e.value) instanceof u ? t : new u(function (e) {
                e(t)
              })).then(r, o)
            }
            i((c = c.apply(e, a || [])).next())
          })
        }, d = function (n, r) {
          var o, i, a, u = {
              label: 0,
              sent: function () {
                if (1 & a[0]) throw a[1];
                return a[1]
              },
              trys: [],
              ops: []
            },
            e = {
              next: t(0),
              throw: t(1),
              return: t(2)
            };
          return "function" == typeof Symbol && (e[Symbol.iterator] = function () {
            return this
          }), e;

          function t(t) {
            return function (e) {
              return function (t) {
                if (o) throw new TypeError("Generator is already executing.");
                for (; u;) try {
                  if (o = 1, i && (a = 2 & t[0] ? i.return : t[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                  switch (i = 0, a && (t = [2 & t[0], a.value]), t[0]) {
                    case 0:
                    case 1:
                      a = t;
                      break;
                    case 4:
                      return u.label++, {
                        value: t[1],
                        done: !1
                      };
                    case 5:
                      u.label++, i = t[1], t = [0];
                      continue;
                    case 7:
                      t = u.ops.pop(), u.trys.pop();
                      continue;
                    default:
                      if (!(a = 0 < (a = u.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                        u = 0;
                        continue
                      }
                      if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                        u.label = t[1];
                        break
                      }
                      if (6 === t[0] && u.label < a[1]) {
                        u.label = a[1], a = t;
                        break
                      }
                      if (a && u.label < a[2]) {
                        u.label = a[2], u.ops.push(t);
                        break
                      }
                      a[2] && u.ops.pop(), u.trys.pop();
                      continue
                  }
                  t = r.call(n, u)
                } catch (e) {
                  t = [6, e], i = 0
                } finally {
                  o = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {
                  value: t[0] ? t[1] : void 0,
                  done: !0
                }
              }([t, e])
            }
          }
        }, j = function (e, t, n, r) {
          void 0 === r && (r = n), e[r] = t[n]
        }, p = function (e, t) {
          for (var n in e) "default" === n || t.hasOwnProperty(n) || (t[n] = e[n])
        }, h = function (e) {
          var t = "function" == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            r = 0;
          if (n) return n.call(e);
          if (e && "number" == typeof e.length) return {
            next: function () {
              return e && r >= e.length && (e = void 0), {
                value: e && e[r++],
                done: !e
              }
            }
          };
          throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }, v = function (e, t) {
          var n = "function" == typeof Symbol && e[Symbol.iterator];
          if (!n) return e;
          var r, o, i = n.call(e),
            a = [];
          try {
            for (;
              (void 0 === t || 0 < t--) && !(r = i.next()).done;) a.push(r.value)
          } catch (e) {
            o = {
              error: e
            }
          } finally {
            try {
              r && !r.done && (n = i.return) && n.call(i)
            } finally {
              if (o) throw o.error
            }
          }
          return a
        }, m = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
          return e
        }, y = function () {
          for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
          for (var r = Array(e), o = 0, t = 0; t < n; t++)
            for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
          return r
        }, g = function (e) {
          return this instanceof g ? (this.v = e, this) : new g(e)
        }, b = function (e, t, n) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var o = n.apply(e, t || []),
            i = [],
            a = {};
          return r("next"), r("throw"), r("return"), a[Symbol.asyncIterator] = function () {
            return this
          }, a;

          function r(r) {
            o[r] && (a[r] = function (n) {
              return new Promise(function (e, t) {
                1 < i.push([r, n, e, t]) || u(r, n)
              })
            })
          }

          function u(e, t) {
            try {
              (n = o[e](t)).value instanceof g ? Promise.resolve(n.value.v).then(c, l) : s(i[0][2], n)
            } catch (e) {
              s(i[0][3], e)
            }
            var n
          }

          function c(e) {
            u("next", e)
          }

          function l(e) {
            u("throw", e)
          }

          function s(e, t) {
            e(t), i.shift(), i.length && u(i[0][0], i[0][1])
          }
        }, w = function (r) {
          var o, e = {};
          return t("next"), t("throw", function (e) {
            throw e
          }), t("return"), e[Symbol.iterator] = function () {
            return this
          }, e;

          function t(t, n) {
            e[t] = r[t] ? function (e) {
              return (o = !o) ? {
                value: g(r[t](e)),
                done: "return" === t
              } : n ? n(e) : e
            } : n
          }
        }, _ = function (c) {
          if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
          var e, t = c[Symbol.asyncIterator];
          return t ? t.call(c) : (c = h(c), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function () {
            return this
          }, e);

          function n(u) {
            e[u] = c[u] && function (a) {
              return new Promise(function (e, t) {
                var n, r, o, i;
                a = c[u](a), n = e, r = t, o = a.done, i = a.value, Promise.resolve(i).then(function (e) {
                  n({
                    value: e,
                    done: o
                  })
                }, r)
              })
            }
          }
        }, x = function (e, t) {
          return Object.defineProperty ? Object.defineProperty(e, "raw", {
            value: t
          }) : e.raw = t, e
        }, S = function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (null != e)
            for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t.default = e, t
        }, O = function (e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }, E = function (e, t) {
          if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
          return t.get(e)
        }, P = function (e, t, n) {
          if (!t.has(e)) throw new TypeError("attempted to set private field on non-instance");
          return t.set(e, n), n
        }, e("__extends", i), e("__assign", a), e("__rest", u), e("__decorate", c), e("__param", l), e("__metadata", s), e("__awaiter", f), e("__generator", d), e("__exportStar", p), e("__createBinding", j), e("__values", h), e("__read", v), e("__spread", m), e("__spreadArrays", y), e("__await", g), e("__asyncGenerator", b), e("__asyncDelegator", w), e("__asyncValues", _), e("__makeTemplateObject", x), e("__importStar", S), e("__importDefault", O), e("__classPrivateFieldGet", E), e("__classPrivateFieldSet", P)
      }()
    }),
    g = t(function (e, t) {
      t.__esModule = !0, t.getStyle = void 0, t.getStyle = function (e, t) {
        var n, r = ((null === (n = e.ownerDocument) || void 0 === n ? void 0 : n.defaultView) || window).getComputedStyle(e);
        return r.getPropertyValue(t) || r[t]
      }
    }),
    i = t(function (e, t) {
      t.__esModule = !0, t.pixels = void 0;
      var p = 96,
        h = 25.4,
        v = 72,
        m = 6;

      function y(e) {
        return e ? g.getStyle(e, "fontSize") || y(e.parentElement) : g.getStyle(window.document.documentElement, "fontSize")
      }
      t.pixels = function e(t, n) {
        var r, o, i, a, u, c, l = null !== (o = null === (r = null == n ? void 0 : n.ownerDocument) || void 0 === r ? void 0 : r.defaultView) && void 0 !== o ? o : window,
          s = l.document.documentElement || l.document.body,
          f = (a = t || "0", u = parseFloat(a), c = a.match(/[\d-.]+(\w+)$/), [u, (null !== (i = null == c ? void 0 : c[1]) && void 0 !== i ? i : "").toLowerCase()]),
          d = f[0];
        switch (f[1]) {
          case "rem":
            return d * e(y(window.document.documentElement));
          case "em":
            return d * e(y(n), null == n ? void 0 : n.parentElement);
          case "in":
            return d * p;
          case "q":
            return d * p / h / 4;
          case "mm":
            return d * p / h;
          case "cm":
            return d * p * 10 / h;
          case "pt":
            return d * p / v;
          case "pc":
            return d * p / m;
          case "vh":
            return (d * l.innerHeight || s.clientWidth) / 100;
          case "vw":
            return (d * l.innerWidth || s.clientHeight) / 100;
          case "vmin":
            return d * Math.min(l.innerWidth || s.clientWidth, l.innerHeight || s.clientHeight) / 100;
          case "vmax":
            return d * Math.max(l.innerWidth || s.clientWidth, l.innerHeight || s.clientHeight) / 100;
          default:
            return d
        }
      }
    });

  function v(e, t) {
    e.classList.add(t)
  }

  function b(e, t) {
    e.classList.remove(t)
  }

  function a(e) {
    var t;
    null !== (t = e.parentNode) && void 0 !== t && t.removeChild(e)
  }
  var u = "littlefoot-footnote__tooltip",
    m = "is-positioned-";

  function y(e) {
    var t = e.offsetHeight,
      n = e.getBoundingClientRect().top + t / 2;
    return {
      top: n,
      bottom: window.innerHeight - n
    }
  }

  function w(e) {
    var t = parseFloat(g.getStyle(e, "marginLeft")),
      n = e.offsetWidth - t;
    return (e.getBoundingClientRect().left + n / 2) / window.innerWidth
  }

  function _(e, t) {
    var n = 2 * parseInt(g.getStyle(e, "marginTop"), 10) + e.offsetHeight;
    return t.bottom < n && t.bottom < t.top ? "top" : "bottom"
  }
  var c = "is-active",
    l = "is-changing",
    x = "is-scrollable",
    S = function (e) {
      return !!e.parentElement
    };

  function O(e) {
    var t = e.id,
      f = e.button,
      d = e.content,
      n = e.host,
      p = e.popover,
      o = e.wrapper,
      r = !1,
      h = 0;
    return {
      id: t,
      activate: function (e) {
        var t;
        f.setAttribute("aria-expanded", "true"), v(f, l), v(f, c), f.insertAdjacentElement("afterend", p), p.style.maxWidth = document.body.clientWidth + "px", t = d, h = Math.round(i.pixels(g.getStyle(t, "maxHeight"), t)), null != e && e(p, f)
      },
      dismiss: function (e) {
        f.setAttribute("aria-expanded", "false"), v(f, l), b(f, c), b(p, c), null != e && e(p, f)
      },
      isActive: function () {
        return f.classList.contains(c)
      },
      isReady: function () {
        return !f.classList.contains(l)
      },
      isHovered: function () {
        return r
      },
      ready: function () {
        v(p, c), b(f, l)
      },
      remove: function () {
        a(p), b(f, l)
      },
      reposition: function () {
        var e, t, n, r, o, i, a, u, c, l, s;
        S(p) && (d.style.maxHeight = (a = p, u = h, c = y(f), l = _(a, c), s = parseInt(g.getStyle(a, "marginTop"), 10), Math.min(u, c[l] - s - 15) + "px"), o = _(e = p, y(t = f)), (i = e.dataset.footnotePosition) !== o && (e.dataset.footnotePosition = o, b(e, "" + m + i), v(e, "" + m + o), n = 100 * w(t) + "%", r = "top" === o ? "100%" : "0", e.style.transformOrigin = n + " " + r), p.offsetHeight < d.scrollHeight ? (v(p, x), d.setAttribute("tabindex", "0")) : (b(p, x), d.removeAttribute("tabindex")))
      },
      resize: function () {
        var e, t, n, r;
        S(p) && (p.style.left = (n = f, r = d.offsetWidth, -w(n) * r + parseInt(g.getStyle(n, "marginLeft"), 10) + n.offsetWidth / 2 + "px"), o.style.maxWidth = d.offsetWidth + "px", e = f, (t = p.querySelector("." + u)) && (t.style.left = 100 * w(e) + "%"))
      },
      startHovering: function () {
        r = !0
      },
      stopHovering: function () {
        r = !1
      },
      destroy: function () {
        return a(n)
      }
    }
  }
  var d = t(function (e, t) {
      t.__esModule = !0, t.throttle = void 0, t.throttle = function (r, o) {
        void 0 === o && (o = 0);
        var i, a = 0;
        return Object.assign(function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = Math.max(0, a + o - Date.now());
          n ? (clearTimeout(i), i = setTimeout(function () {
            a = Date.now(), r.apply(void 0, e)
          }, n)) : (a = Date.now(), r.apply(void 0, e))
        }, {
          cancel: function () {
            a = 0, clearTimeout(i)
          }
        })
      }
    }),
    p = 16,
    o = "is-fully-scrolled",
    h = function (r) {
      return function (e) {
        var t = e.currentTarget,
          n = -e.deltaY;
        0 < n && b(r, o), t && n <= 0 && n < t.clientHeight + t.scrollTop - t.scrollHeight && v(r, o)
      }
    };
  var E = "littlefoot-footnote__content",
    P = "littlefoot-footnote__wrapper",
    j = "footnote-print-only",
    A = "littlefoot-footnote__host",
    M = function (e) {
      return v(e, j)
    };

  function k(e, t) {
    return Array.from(e.querySelectorAll(t))
  }

  function D(e, t) {
    return e.querySelector("." + t) || e.firstElementChild || e
  }

  function H(e) {
    var t = document.createElement("div");
    return t.innerHTML = e, t.firstElementChild
  }

  function I(e) {
    return void 0 !== e
  }

  function L(e) {
    var t, n, r = (t = e, n = ":not(." + j + ")", Array.from(t.children).filter(function (e) {
        return 8 !== e.nodeType && (!n || e.matches(n))
      })),
      o = r.filter(function (e) {
        return "HR" === e.tagName
      });
    r.length === o.length && (o.concat(e).forEach(M), L(e.parentElement))
  }

  function s(e) {
    var t = e.parentElement;
    a(e);
    var n = null == t ? void 0 : t.innerHTML.replace("[]", "").replace("&nbsp;", " ").trim();
    t && !n && s(t)
  }

  function F(e, t) {
    var n = H(e.body.outerHTML);
    k(n, '[href$="#' + e.referenceId + '"]').forEach(s);
    var r = n.innerHTML.trim();
    return {
      original: e,
      data: {
        id: "" + (t + 1),
        number: t + 1,
        reference: "lf-" + e.referenceId,
        content: r.startsWith("<") ? r : "<p>" + r + "</p>"
      }
    }
  }
  var W = function (o) {
    var i = 0,
      a = null;
    return function (e) {
      var t = e.original,
        n = e.data,
        r = t.reference.closest(o);
      return i = a === r ? i + 1 : 1, a = r, {
        original: t,
        data: f.__assign(f.__assign({}, n), {
          number: i
        })
      }
    }
  };

  function n(e) {
    var t = /<%=?\s*(\w+?)\s*%>/g;
    return function (r) {
      return e.replace(t, function (e, t) {
        var n;
        return String(null !== (n = r[t]) && void 0 !== n ? n : "")
      })
    }
  }

  function R(e, t) {
    var s = n(e),
      f = n(t);
    return function (e) {
      var t = e.original,
        n = e.data,
        r = n.id,
        o = H('<span class="' + A + '">' + s(n) + "</span>"),
        i = o.firstElementChild;
      i.dataset.footnoteButton = "", i.dataset.footnoteId = r, i.dataset.footnoteNumber = "" + n.number;
      var a = H(f(n));
      a.dataset.footnotePopover = "", a.dataset.footnoteId = r;
      var u, c = D(a, P),
        l = D(a, E);
      return u = a, l.addEventListener("wheel", d.throttle(h(u), p)), {
        original: t,
        data: n,
        id: r,
        button: i,
        host: o,
        popover: a,
        content: l,
        wrapper: c
      }
    }
  }

  function C(e) {
    var i, a, u, c, l, t, n, r = e.allowDuplicates,
      o = e.anchorParentSelector,
      s = e.anchorPattern,
      f = e.buttonTemplate,
      d = e.contentTemplate,
      p = e.footnoteSelector,
      h = e.numberResetSelector,
      v = e.scope,
      m = (t = document, n = s, k(t, v + ' a[href*="#"]').filter(function (e) {
        return (e.href + e.rel).match(n)
      }).map((i = document, a = r, u = o, c = p, l = [], function (e) {
        var t = "#" + e.href.split("#")[1].replace(/[:.+~*[\]]/g, "\\$&"),
          n = k(i, t).find(function (e) {
            return a || !l.includes(e)
          }),
          r = null == n ? void 0 : n.closest(c);
        if (r) {
          l.push(r);
          var o = e.closest(u) || e;
          return {
            reference: o,
            referenceId: o.id || e.id,
            body: r
          }
        }
      })).filter(I).map(F).map(h ? W(h) : function (e) {
        return e
      }).map(R(f, d)));
    m.forEach(function (e) {
      var t, n, r = e.original,
        o = e.host;
      M(r.reference), M(r.body), L(r.body.parentElement), t = r.reference, n = o, t.insertAdjacentElement("beforebegin", n)
    });
    var y = m.map(O);
    return {
      footnotes: y,
      unmount: function () {
        y.forEach(function (e) {
          return e.destroy()
        }), k(document, "." + j).forEach(function (e) {
          return b(e, j)
        })
      }
    }
  }
  var z = {
    activateDelay: 100,
    activateOnHover: !1,
    allowDuplicates: !0,
    allowMultiple: !1,
    anchorParentSelector: "sup",
    anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
    dismissDelay: 100,
    dismissOnUnhover: !1,
    footnoteSelector: "li",
    hoverDelay: 250,
    numberResetSelector: "",
    scope: "",
    contentTemplate: '<aside class="littlefoot-footnote" id="fncontent:<% id %>"><div class="' + P + '"><div class="' + E + '"><% content %></div></div><div class="' + u + '"></div></aside>',
    buttonTemplate: '<button aria-label="Footnote <% number %>" class="littlefoot__button" id="<% reference %>" title="See Footnote <% number %>"/> <% number %> </button>'

    
  };

  function q(e, n) {
    function r(t) {
      return function (e) {
        e.isReady() && (e.dismiss(n.dismissCallback), setTimeout(e.remove, t))
      }
    }

    function o(e) {
      return function (t) {
        n.allowMultiple || a.filter(function (e) {
          return e.id !== t.id
        }).forEach(r(n.dismissDelay)), t.isReady() && (t.activate(n.activateCallback), t.reposition(), t.resize(), setTimeout(t.ready, e))
      }
    }

    function i(n) {
      return function (t) {
        var e = a.find(function (e) {
          return e.id === t
        });
        e && n(e)
      }
    }
    var a = e.footnotes,
      t = e.unmount;
    return {
      activate: function (e, t) {
        return i(o(t))(e)
      },
      dismiss: function (e, t) {
        return i(r(t))(e)
      },
      dismissAll: function () {
        return a.forEach(r(n.dismissDelay))
      },
      repositionAll: function () {
        return a.forEach(function (e) {
          return e.reposition()
        })
      },
      resizeAll: function () {
        return a.forEach(function (e) {
          return e.resize()
        })
      },
      toggle: i(function (e) {
        return (e.isActive() ? r(n.dismissDelay) : o(n.activateDelay))(e)
      }),
      hover: i(function (e) {
        e.startHovering(), n.activateOnHover && !e.isActive() && o(n.hoverDelay)(e)
      }),
      unhover: i(function (e) {
        e.stopHovering(), n.dismissOnUnhover && setTimeout(function () {
          return a.filter(function (e) {
            return !e.isHovered()
          }).forEach(r(n.dismissDelay))
        }, n.hoverDelay)
      }),
      unmount: t
    }
  }

  function U(e, t) {
    return e.target.closest(t)
  }

  function V(e) {
    return null == e ? void 0 : e.dataset.footnoteId
  }
  var r = t(function (e, t) {
      e.exports = function () {
        function e() {
          if (!(this instanceof e)) {
            return new e
          }
          this.size = 0;
          this.uid = 0;
          this.selectors = [];
          this.selectorObjects = {};
          this.indexes = Object.create(this.indexes);
          this.activeIndexes = []
        }
        var t = window.document.documentElement,
          n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector;
        e.prototype.matchesSelector = function (e, t) {
          return n.call(e, t)
        }, e.prototype.querySelectorAll = function (e, t) {
          return t.querySelectorAll(e)
        };
        var r = /^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        (e.prototype.indexes = []).push({
          name: "ID",
          selector: function e(t) {
            var n;
            if (n = t.match(r)) {
              return n[0].slice(1)
            }
          },
          element: function e(t) {
            if (t.id) {
              return [t.id]
            }
          }
        });
        var o = /^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;
        e.prototype.indexes.push({
          name: "CLASS",
          selector: function e(t) {
            var n;
            if (n = t.match(o)) {
              return n[0].slice(1)
            }
          },
          element: function e(t) {
            var n = t.className;
            if (n) {
              if (typeof n === "string") {
                return n.split(/\s/)
              } else if (typeof n === "object" && "baseVal" in n) {
                return n.baseVal.split(/\s/)
              }
            }
          }
        });
        var i = /^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g,
          p;
        if (e.prototype.indexes.push({
            name: "TAG",
            selector: function e(t) {
              var n;
              if (n = t.match(i)) {
                return n[0].toUpperCase()
              }
            },
            element: function e(t) {
              return [t.nodeName.toUpperCase()]
            }
          }), e.prototype.indexes["default"] = {
            name: "UNIVERSAL",
            selector: function () {
              return true
            },
            element: function () {
              return [true]
            }
          }, typeof window.Map === "function") {
          p = window.Map
        } else {
          p = function () {
            function e() {
              this.map = {}
            }
            e.prototype.get = function (e) {
              return this.map[e + " "]
            };
            e.prototype.set = function (e, t) {
              this.map[e + " "] = t
            };
            return e
          }()
        }
        var f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;

        function v(e, t) {
          e = e.slice(0).concat(e["default"]);
          var n = e.length,
            r, o, i, a, u = t,
            c, l, s = [];
          do {
            f.exec("");
            if (i = f.exec(u)) {
              u = i[3];
              if (i[2] || !u) {
                for (r = 0; r < n; r++) {
                  l = e[r];
                  if (c = l.selector(i[1])) {
                    o = s.length;
                    a = false;
                    while (o--) {
                      if (s[o].index === l && s[o].key === c) {
                        a = true;
                        break
                      }
                    }
                    if (!a) {
                      s.push({
                        index: l,
                        key: c
                      })
                    }
                    break
                  }
                }
              }
            }
          } while (i);
          return s
        }

        function a(e, t) {
          var n, r, o;
          for (n = 0, r = e.length; n < r; n++)
            if (o = e[n], t.isPrototypeOf(o)) return o
        }

        function m(e, t) {
          return e.id - t.id
        }
        return e.prototype.logDefaultIndexUsed = function () {}, e.prototype.add = function (e, t) {
          var n, r, o, i, a, u, c, l, s = this.activeIndexes,
            f = this.selectors,
            d = this.selectorObjects;
          if ("string" == typeof e) {
            for (d[(n = {
                id: this.uid++,
                selector: e,
                data: t
              }).id] = n, c = v(this.indexes, e), r = 0; r < c.length; r++) i = (l = c[r]).key, (a = function (e, t) {
              var n, r, o;
              for (n = 0, r = e.length; n < r; n++)
                if (o = e[n], t.isPrototypeOf(o)) return o
            }(s, o = l.index)) || ((a = Object.create(o)).map = new p, s.push(a)), o === this.indexes.default && this.logDefaultIndexUsed(n), (u = a.map.get(i)) || (u = [], a.map.set(i, u)), u.push(n);
            this.size++, f.push(e)
          }
        }, e.prototype.remove = function (e, t) {
          if ("string" == typeof e) {
            for (var n, r, o, i, a, u, c = this.activeIndexes, l = this.selectors = [], s = this.selectorObjects, f = {}, d = 1 === arguments.length, p = v(this.indexes, e), h = 0; h < p.length; h++)
              for (n = p[h], r = c.length; r--;)
                if (i = c[r], n.index.isPrototypeOf(i)) {
                  if (a = i.map.get(n.key))
                    for (o = a.length; o--;)(u = a[o]).selector !== e || !d && u.data !== t || (a.splice(o, 1), f[u.id] = !0);
                  break
                } for (h in f) delete s[h], this.size--;
            for (h in s) l.push(s[h].selector)
          }
        }, e.prototype.queryAll = function (e) {
          if (!this.selectors.length) return [];
          for (var t, n, r, o, i, a, u = {}, c = [], l = this.querySelectorAll(this.selectors.join(", "), e), s = 0, f = l.length; s < f; s++)
            for (r = l[s], t = 0, n = (o = this.matches(r)).length; t < n; t++) u[(a = o[t]).id] ? i = u[a.id] : (i = {
              id: a.id,
              selector: a.selector,
              data: a.data,
              elements: []
            }, u[a.id] = i, c.push(i)), i.elements.push(r);
          return c.sort(m)
        }, e.prototype.matches = function (e) {
          if (!e) return [];
          for (var t, n, r, o, i, a, u, c, l, s = this.activeIndexes, f = {}, d = [], p = 0, h = s.length; p < h; p++)
            if (a = (i = s[p]).element(e))
              for (t = 0, r = a.length; t < r; t++)
                if (u = i.map.get(a[t]))
                  for (n = 0, o = u.length; n < o; n++) !f[l = (c = u[n]).id] && this.matchesSelector(e, c.selector) && (f[l] = !0, d.push(c));
          return d.sort(m)
        }, e
      }()
    }),
    N = t(function (e, t) {
      ! function (e, u) {
        u = u && Object.prototype.hasOwnProperty.call(u, "default") ? u["default"] : u;
        var l = {},
          s = {},
          f = new WeakMap,
          d = new WeakMap,
          p = new WeakMap,
          n = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");

        function h(e, t, n) {
          var r = e[t];
          e[t] = function () {
            n.apply(e, arguments);
            return r.apply(e, arguments)
          };
          return e
        }

        function v(e, t, n) {
          var r = [];
          var o = t;
          do {
            if (o.nodeType !== 1) break;
            var i = e.matches(o);
            if (i.length) {
              var a = {
                node: o,
                observers: i
              };
              if (n) {
                r.unshift(a)
              } else {
                r.push(a)
              }
            }
          } while (o = o.parentElement);
          return r
        }

        function m() {
          f.set(this, true)
        }

        function y() {
          f.set(this, true);
          d.set(this, true)
        }

        function g() {
          return p.get(this) || null
        }

        function b(e, t) {
          if (!n) return;
          Object.defineProperty(e, "currentTarget", {
            configurable: true,
            enumerable: true,
            get: t || n.get
          })
        }

        function w(e) {
          try {
            e.eventPhase;
            return true
          } catch (e) {
            return false
          }
        }

        function c(e) {
          if (!w(e)) return;
          var t = e.eventPhase === 1 ? s : l;
          var n = t[e.type];
          if (!n) return;
          var r = v(n, e.target, e.eventPhase === 1);
          if (!r.length) return;
          h(e, "stopPropagation", m);
          h(e, "stopImmediatePropagation", y);
          b(e, g);
          for (var o = 0, i = r.length; o < i; o++) {
            if (f.get(e)) break;
            var a = r[o];
            p.set(e, a.node);
            for (var u = 0, c = a.observers.length; u < c; u++) {
              if (d.get(e)) break;
              a.observers[u].data.call(a.node, e)
            }
          }
          p["delete"](e);
          b(e)
        }

        function t(e, t, n) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var o = r.capture ? true : false;
          var i = o ? s : l;
          var a = i[e];
          if (!a) {
            a = new u;
            i[e] = a;
            document.addEventListener(e, c, o)
          }
          a.add(t, n)
        }

        function r(e, t, n) {
          var r = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var o = r.capture ? true : false;
          var i = o ? s : l;
          var a = i[e];
          if (!a) return;
          a.remove(t, n);
          if (a.size) return;
          delete i[e];
          document.removeEventListener(e, c, o)
        }

        function o(e, t, n) {
          return e.dispatchEvent(new CustomEvent(t, {
            bubbles: true,
            cancelable: true,
            detail: n
          }))
        }
        e.fire = o, e.off = r, e.on = t, Object.defineProperty(e, "__esModule", {
          value: true
        })
      }(t, r)
    }),
    B = 16,
    G = "[data-footnote-id]",
    $ = function (r, o) {
      return function (e) {
        var t = U(e, "[data-footnote-button]"),
          n = V(t);
        n ? r(n) : U(e, "[data-footnote-popover]") || o()
      }
    },
    Y = function (r) {
      return function (e) {
        e.preventDefault();
        var t = U(e, G),
          n = V(t);
        n && r(n)
      }
    },
    J = function (t) {
      return function (e) {
        27 !== e.keyCode && "Escape" !== e.key && "Esc" !== e.key || t()
      }
    },
    K = document.addEventListener,
    Q = document.removeEventListener,
    X = window.addEventListener,
    Z = window.removeEventListener;

  function ee(e) {
    void 0 === e && (e = {});
    var t, n, r, o, i, a, u, c = f.__assign(f.__assign({}, z), e),
      l = q(C(c), c),
      s = (n = $((t = l).toggle, t.dismissAll), r = J(t.dismissAll), o = d.throttle(t.repositionAll, B), i = d.throttle(t.resizeAll, B), a = Y(t.hover), u = Y(t.unhover), K("touchend", n), K("click", n), K("keyup", r), K("gestureend", o), X("scroll", o), X("resize", i), N.on("mouseover", G, a), N.on("mouseout", G, u), function () {
        Q("touchend", n), Q("click", n), Q("keyup", r), Q("gestureend", o), Z("scroll", o), Z("resize", i), N.off("mouseover", G, a), N.off("mouseout", G, u)
      });
    return {
      activate: function (e, t) {
        void 0 === t && (t = c.activateDelay), l.activate(e, t)
      },
      dismiss: function (e, t) {
        void 0 === t && (t = c.dismissDelay), void 0 === e ? l.dismissAll() : l.dismiss(e, t)
      },
      unmount: function () {
        s(), l.unmount()
      },
      getSetting: function (e) {
        return c[e]
      },
      updateSetting: function (e, t) {
        c[e] = t
      }
    }
  }
  e.default = ee, e.littlefoot = ee, Object.defineProperty(e, "__esModule", {
    value: !0
  })
});
å