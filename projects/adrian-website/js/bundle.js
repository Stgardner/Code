! function (e) {
	function n(o) {
		if (t[o]) return t[o].exports;
		var r = t[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
	}
	var t = {};
	return n.m = e, n.c = t, n.p = "/", n(0)
}(function (e) {
	for (var n in e)
		if (Object.prototype.hasOwnProperty.call(e, n)) switch (typeof e[n]) {
			case "function":
				break;
			case "object":
				e[n] = function (n) {
					var t = n.slice(1),
						o = e[n[0]];
					return function (e, n, r) {
						o.apply(this, [e, n, r].concat(t))
					}
				}(e[n]);
				break;
			default:
				e[n] = e[e[n]]
		}
	return e
}([function (e, n, t) {
	t(1), e.exports = t(4)
}, function (e, n, t) {
	"use strict";
	t(3), t(2), t(5);
	var o = {
			r: !1,
			g: !1,
			b: !1
		},
		r = new Howl({
			src: ["/rgb3.mp3"],
			sprite: {
				b: [64, 6220],
				g: [7320, 6900],
				r: [15990, 6800]
			}
		}),
		a = function () {
			o = {
				r: !1,
				g: !1,
				b: !1
			}, u.classList.remove("black"), s.classList.remove("black"), l.classList.remove("black"), document.body.className = ""
		};
	r.on("end", a);
	var i = document.getElementById("R"),
		u = document.getElementById("R-fill"),
		d = document.getElementById("G"),
		s = document.getElementById("G-fill"),
		_ = document.getElementById("B"),
		l = document.getElementById("B-fill"),
		c = document.getElementById("info"),
		f = document.getElementById("overlay"),
		p = function (e) {
			e.preventDefault();
			var n = e.target.id.substr(0, 1).toLowerCase();
			n && !o[n] && (o[n] = r.play(n), u.classList.add("black"), s.classList.add("black"), l.classList.add("black"), document.body.classList.add(n))
		},
		m = function (e) {
			var n = e.target.id.substr(0, 1).toLowerCase();
			n && o[n] && (r.stop(o[n]), o[n] = !1, u.classList.remove("black"), s.classList.remove("black"), l.classList.remove("black"), document.body.classList.remove(n))
		};
	window.addEventListener("touchmove", function (e) {
		e.preventDefault()
	}), i.addEventListener("touchstart", p), i.addEventListener("touchmove", p), i.addEventListener("touchend", m), d.addEventListener("touchstart", p), d.addEventListener("touchend", m), _.addEventListener("touchstart", p), _.addEventListener("touchend", m), i.addEventListener("mouseenter", p), i.addEventListener("mouseleave", m), d.addEventListener("mouseenter", p), d.addEventListener("mouseleave", m), _.addEventListener("mouseenter", p), _.addEventListener("mouseleave", m), c.addEventListener("click", function () {
		f.classList.add("visible")
	}), f.addEventListener("click", function () {
		f.classList.remove("visible")
	})
}, function (e, n) {}, 2, function (e, n, t) {
	e.exports = t.p + "index.html"
}, function (e, n, t) {
	var o, r;
	(function (t) {
		/*!
		 *  howler.js v2.0.0-rc2
		 *  howlerjs.com
		 *
		 *  (c) 2013-2016, James Simpson of GoldFire Studios
		 *  goldfirestudios.com
		 *
		 *  MIT License
		 */
		! function () {
			"use strict";
			var a = function () {
				this.init()
			};
			a.prototype = {
				init: function () {
					var e = this || i;
					return e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
				},
				volume: function (e) {
					var n = this || i;
					if (e = parseFloat(e), n.ctx || p(), "undefined" != typeof e && e >= 0 && e <= 1) {
						if (n._volume = e, n._muted) return n;
						n.usingWebAudio && (n.masterGain.gain.value = e);
						for (var t = 0; t < n._howls.length; t++)
							if (!n._howls[t]._webAudio)
								for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
									var a = n._howls[t]._soundById(o[r]);
									a && a._node && (a._node.volume = a._volume * e)
								}
						return n
					}
					return n._volume
				},
				mute: function (e) {
					var n = this || i;
					n.ctx || p(), n._muted = e, n.usingWebAudio && (n.masterGain.gain.value = e ? 0 : n._volume);
					for (var t = 0; t < n._howls.length; t++)
						if (!n._howls[t]._webAudio)
							for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
								var a = n._howls[t]._soundById(o[r]);
								a && a._node && (a._node.muted = !!e || a._muted)
							}
					return n
				},
				unload: function () {
					for (var e = this || i, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
					return e.usingWebAudio && "undefined" != typeof e.ctx.close && (e.ctx.close(), e.ctx = null, p()), e
				},
				codecs: function (e) {
					return (this || i)._codecs[e]
				},
				_setup: function () {
					var e = this || i;
					return e.state = e.ctx ? e.ctx.state || "running" : "running", e._autoSuspend(), e.noAudio || e._setupCodecs(), e
				},
				_setupCodecs: function () {
					var e = this || i,
						n = "undefined" != typeof Audio ? new Audio : null;
					if (!n || "function" != typeof n.canPlayType) return e;
					var t = n.canPlayType("audio/mpeg;").replace(/^no$/, ""),
						o = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
						r = o && parseInt(o[0].split("/")[1], 10) < 33;
					return e._codecs = {
						mp3: !(r || !t && !n.canPlayType("audio/mp3;").replace(/^no$/, "")),
						mpeg: !!t,
						opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
						ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
						oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
						wav: !!n.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
						aac: !!n.canPlayType("audio/aac;").replace(/^no$/, ""),
						caf: !!n.canPlayType("audio/x-caf;").replace(/^no$/, ""),
						m4a: !!(n.canPlayType("audio/x-m4a;") || n.canPlayType("audio/m4a;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
						mp4: !!(n.canPlayType("audio/x-mp4;") || n.canPlayType("audio/mp4;") || n.canPlayType("audio/aac;")).replace(/^no$/, ""),
						weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
						webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
						dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, "")
					}, e
				},
				_enableMobileAudio: function () {
					var e = this || i,
						n = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
						t = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
					if (!e._mobileEnabled && e.ctx && (n || t)) {
						e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
						var o = function () {
							var n = e.ctx.createBufferSource();
							n.buffer = e._scratchBuffer, n.connect(e.ctx.destination), "undefined" == typeof n.start ? n.noteOn(0) : n.start(0), n.onended = function () {
								n.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchend", o, !0)
							}
						};
						return document.addEventListener("touchend", o, !0), e
					}
				},
				_autoSuspend: function () {
					var e = this;
					if (e.autoSuspend && e.ctx && "undefined" != typeof e.ctx.suspend && i.usingWebAudio) {
						for (var n = 0; n < e._howls.length; n++)
							if (e._howls[n]._webAudio)
								for (var t = 0; t < e._howls[n]._sounds.length; t++)
									if (!e._howls[n]._sounds[t]._paused) return e;
						return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
							e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () {
								e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
							}))
						}, 3e4), e
					}
				},
				_autoResume: function () {
					var e = this;
					if (e.ctx && "undefined" != typeof e.ctx.resume && i.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.state = "resuming", e.ctx.resume().then(function () {
						e.state = "running"
					}), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
				}
			};
			var i = new a,
				u = function (e) {
					var n = this;
					return e.src && 0 !== e.src.length ? void n.init(e) : void console.error("An array of source files must be passed with any new Howl.")
				};
			u.prototype = {
				init: function (e) {
					var n = this;
					return i.ctx || p(), n._autoplay = e.autoplay || !1, n._format = "string" != typeof e.format ? e.format : [e.format], n._html5 = e.html5 || !1, n._muted = e.mute || !1, n._loop = e.loop || !1, n._pool = e.pool || 5, n._preload = "boolean" != typeof e.preload || e.preload, n._rate = e.rate || 1, n._sprite = e.sprite || {}, n._src = "string" != typeof e.src ? e.src : [e.src], n._volume = void 0 !== e.volume ? e.volume : 1, n._duration = 0, n._state = "unloaded", n._sounds = [], n._endTimers = {}, n._queue = [], n._onend = e.onend ? [{
						fn: e.onend
					}] : [], n._onfade = e.onfade ? [{
						fn: e.onfade
					}] : [], n._onload = e.onload ? [{
						fn: e.onload
					}] : [], n._onloaderror = e.onloaderror ? [{
						fn: e.onloaderror
					}] : [], n._onpause = e.onpause ? [{
						fn: e.onpause
					}] : [], n._onplay = e.onplay ? [{
						fn: e.onplay
					}] : [], n._onstop = e.onstop ? [{
						fn: e.onstop
					}] : [], n._onmute = e.onmute ? [{
						fn: e.onmute
					}] : [], n._onvolume = e.onvolume ? [{
						fn: e.onvolume
					}] : [], n._onrate = e.onrate ? [{
						fn: e.onrate
					}] : [], n._onseek = e.onseek ? [{
						fn: e.onseek
					}] : [], n._webAudio = i.usingWebAudio && !n._html5, "undefined" != typeof i.ctx && i.ctx && i.mobileAutoEnable && i._enableMobileAudio(), i._howls.push(n), n._preload && n.load(), n
				},
				load: function () {
					var e = this,
						n = null;
					if (i.noAudio) return void e._emit("loaderror", null, "No audio support.");
					"string" == typeof e._src && (e._src = [e._src]);
					for (var t = 0; t < e._src.length; t++) {
						var o, r;
						if (e._format && e._format[t]) o = e._format[t];
						else {
							if (r = e._src[t], "string" != typeof r) {
								e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
								continue
							}
							o = /^data:audio\/([^;,]+);/i.exec(r), o || (o = /\.([^.]+)$/.exec(r.split("?", 1)[0])), o && (o = o[1].toLowerCase())
						}
						if (i.codecs(o)) {
							n = e._src[t];
							break
						}
					}
					return n ? (e._src = n, e._state = "loading", "https:" === window.location.protocol && "http:" === n.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new d(e), e._webAudio && _(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
				},
				play: function (e, n) {
					var t = this,
						o = null;
					if ("number" == typeof e) o = e, e = null;
					else {
						if ("string" == typeof e && "loaded" === t._state && !t._sprite[e]) return null;
						if ("undefined" == typeof e) {
							e = "__default";
							for (var r = 0, a = 0; a < t._sounds.length; a++) t._sounds[a]._paused && !t._sounds[a]._ended && (r++, o = t._sounds[a]._id);
							1 === r ? e = null : o = null
						}
					}
					var u = o ? t._soundById(o) : t._inactiveSound();
					if (!u) return null;
					if (o && !e && (e = u._sprite || "__default"), "loaded" !== t._state && !t._sprite[e]) return t._queue.push({
						event: "play",
						action: function () {
							t.play(t._soundById(u._id) ? u._id : void 0)
						}
					}), u._id;
					if (o && !u._paused) return n || setTimeout(function () {
						t._emit("play", u._id)
					}, 0), u._id;
					t._webAudio && i._autoResume();
					var d = u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3,
						s = (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - d,
						_ = 1e3 * s / Math.abs(u._rate);
					u._paused = !1, u._ended = !1, u._sprite = e, u._seek = d, u._start = t._sprite[e][0] / 1e3, u._stop = (t._sprite[e][0] + t._sprite[e][1]) / 1e3, u._loop = !(!u._loop && !t._sprite[e][2]);
					var l = u._node;
					if (t._webAudio) {
						var c = function () {
							t._refreshBuffer(u);
							var e = u._muted || t._muted ? 0 : u._volume;
							l.gain.setValueAtTime(e, i.ctx.currentTime), u._playStart = i.ctx.currentTime, "undefined" == typeof l.bufferSource.start ? u._loop ? l.bufferSource.noteGrainOn(0, d, 86400) : l.bufferSource.noteGrainOn(0, d, s) : u._loop ? l.bufferSource.start(0, d, 86400) : l.bufferSource.start(0, d, s), _ !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), _)), n || setTimeout(function () {
								t._emit("play", u._id)
							}, 0)
						};
						"loaded" === t._state ? c() : (t.once("load", c, u._id), t._clearTimer(u._id))
					} else {
						var f = function () {
								l.currentTime = d, l.muted = u._muted || t._muted || i._muted || l.muted, l.volume = u._volume * i.volume(), l.playbackRate = u._rate, setTimeout(function () {
									l.play(), _ !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), _)), n || t._emit("play", u._id)
								}, 0)
							},
							p = "loaded" === t._state && (window && window.ejecta || !l.readyState && i._navigator.isCocoonJS);
						if (4 === l.readyState || p) f();
						else {
							var m = function () {
								f(), l.removeEventListener(i._canPlayEvent, m, !1)
							};
							l.addEventListener(i._canPlayEvent, m, !1), t._clearTimer(u._id)
						}
					}
					return u._id
				},
				pause: function (e) {
					var n = this;
					if ("loaded" !== n._state) return n._queue.push({
						event: "pause",
						action: function () {
							n.pause(e)
						}
					}), n;
					for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
						n._clearTimer(t[o]);
						var r = n._soundById(t[o]);
						if (r && !r._paused) {
							if (r._seek = n.seek(t[o]), r._rateSeek = 0, r._paused = !0, n._stopFade(t[o]), r._node)
								if (n._webAudio) {
									if (!r._node.bufferSource) return n;
									"undefined" == typeof r._node.bufferSource.stop ? r._node.bufferSource.noteOff(0) : r._node.bufferSource.stop(0), n._cleanBuffer(r._node)
								} else isNaN(r._node.duration) && r._node.duration !== 1 / 0 || r._node.pause();
							arguments[1] || n._emit("pause", r._id)
						}
					}
					return n
				},
				stop: function (e, n) {
					var t = this;
					if ("loaded" !== t._state) return t._queue.push({
						event: "stop",
						action: function () {
							t.stop(e)
						}
					}), t;
					for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
						t._clearTimer(o[r]);
						var a = t._soundById(o[r]);
						if (a && !a._paused && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, t._stopFade(o[r]), a._node))
							if (t._webAudio) {
								if (!a._node.bufferSource) return t;
								"undefined" == typeof a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), t._cleanBuffer(a._node)
							} else isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause());
						a && !n && t._emit("stop", a._id)
					}
					return t
				},
				mute: function (e, n) {
					var t = this;
					if ("loaded" !== t._state) return t._queue.push({
						event: "mute",
						action: function () {
							t.mute(e, n)
						}
					}), t;
					if ("undefined" == typeof n) {
						if ("boolean" != typeof e) return t._muted;
						t._muted = e
					}
					for (var o = t._getSoundIds(n), r = 0; r < o.length; r++) {
						var a = t._soundById(o[r]);
						a && (a._muted = e, t._webAudio && a._node ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime) : a._node && (a._node.muted = !!i._muted || e), t._emit("mute", a._id))
					}
					return t
				},
				volume: function () {
					var e, n, t = this,
						o = arguments;
					if (0 === o.length) return t._volume;
					if (1 === o.length) {
						var r = t._getSoundIds(),
							a = r.indexOf(o[0]);
						a >= 0 ? n = parseInt(o[0], 10) : e = parseFloat(o[0])
					} else o.length >= 2 && (e = parseFloat(o[0]), n = parseInt(o[1], 10));
					var u;
					if (!("undefined" != typeof e && e >= 0 && e <= 1)) return u = n ? t._soundById(n) : t._sounds[0], u ? u._volume : 0;
					if ("loaded" !== t._state) return t._queue.push({
						event: "volume",
						action: function () {
							t.volume.apply(t, o)
						}
					}), t;
					"undefined" == typeof n && (t._volume = e), n = t._getSoundIds(n);
					for (var d = 0; d < n.length; d++) u = t._soundById(n[d]), u && (u._volume = e, o[2] || t._stopFade(n[d]), t._webAudio && u._node && !u._muted ? u._node.gain.setValueAtTime(e, i.ctx.currentTime) : u._node && !u._muted && (u._node.volume = e * i.volume()), t._emit("volume", u._id));
					return t
				},
				fade: function (e, n, t, o) {
					var r = this,
						a = Math.abs(e - n),
						u = e > n ? "out" : "in",
						d = a / .01,
						s = t / d;
					if ("loaded" !== r._state) return r._queue.push({
						event: "fade",
						action: function () {
							r.fade(e, n, t, o)
						}
					}), r;
					r.volume(e, o);
					for (var _ = r._getSoundIds(o), l = 0; l < _.length; l++) {
						var c = r._soundById(_[l]);
						if (c) {
							if (o || r._stopFade(_[l]), r._webAudio && !c._muted) {
								var f = i.ctx.currentTime,
									p = f + t / 1e3;
								c._volume = e, c._node.gain.setValueAtTime(e, f), c._node.gain.linearRampToValueAtTime(n, p)
							}
							var m = e;
							c._interval = setInterval(function (e, t) {
								m += "in" === u ? .01 : -.01, m = Math.max(0, m), m = Math.min(1, m), m = Math.round(100 * m) / 100, r._webAudio ? ("undefined" == typeof o && (r._volume = m), t._volume = m) : r.volume(m, e, !0), m === n && (clearInterval(t._interval), t._interval = null, r.volume(m, e), r._emit("fade", e))
							}.bind(r, _[l], c), s)
						}
					}
					return r
				},
				_stopFade: function (e) {
					var n = this,
						t = n._soundById(e);
					return t && t._interval && (n._webAudio && t._node.gain.cancelScheduledValues(i.ctx.currentTime), clearInterval(t._interval), t._interval = null, n._emit("fade", e)), n
				},
				loop: function () {
					var e, n, t, o = this,
						r = arguments;
					if (0 === r.length) return o._loop;
					if (1 === r.length) {
						if ("boolean" != typeof r[0]) return t = o._soundById(parseInt(r[0], 10)), !!t && t._loop;
						e = r[0], o._loop = e
					} else 2 === r.length && (e = r[0], n = parseInt(r[1], 10));
					for (var a = o._getSoundIds(n), i = 0; i < a.length; i++) t = o._soundById(a[i]), t && (t._loop = e, o._webAudio && t._node && t._node.bufferSource && (t._node.bufferSource.loop = e));
					return o
				},
				rate: function () {
					var e, n, t = this,
						o = arguments;
					if (0 === o.length) n = t._sounds[0]._id;
					else if (1 === o.length) {
						var r = t._getSoundIds(),
							a = r.indexOf(o[0]);
						a >= 0 ? n = parseInt(o[0], 10) : e = parseFloat(o[0])
					} else 2 === o.length && (e = parseFloat(o[0]), n = parseInt(o[1], 10));
					var u;
					if ("number" != typeof e) return u = t._soundById(n), u ? u._rate : t._rate;
					if ("loaded" !== t._state) return t._queue.push({
						event: "rate",
						action: function () {
							t.rate.apply(t, o)
						}
					}), t;
					"undefined" == typeof n && (t._rate = e), n = t._getSoundIds(n);
					for (var d = 0; d < n.length; d++)
						if (u = t._soundById(n[d])) {
							u._rateSeek = t.seek(n[d]), u._playStart = t._webAudio ? i.ctx.currentTime : u._playStart, u._rate = e, t._webAudio && u._node && u._node.bufferSource ? u._node.bufferSource.playbackRate.value = e : u._node && (u._node.playbackRate = e);
							var s = t.seek(n[d]),
								_ = (t._sprite[u._sprite][0] + t._sprite[u._sprite][1]) / 1e3 - s,
								l = 1e3 * _ / Math.abs(u._rate);
							!t._endTimers[n[d]] && u._paused || (t._clearTimer(n[d]), t._endTimers[n[d]] = setTimeout(t._ended.bind(t, u), l)), t._emit("rate", u._id)
						}
					return t
				},
				seek: function () {
					var e, n, t = this,
						o = arguments;
					if (0 === o.length) n = t._sounds[0]._id;
					else if (1 === o.length) {
						var r = t._getSoundIds(),
							a = r.indexOf(o[0]);
						a >= 0 ? n = parseInt(o[0], 10) : (n = t._sounds[0]._id, e = parseFloat(o[0]))
					} else 2 === o.length && (e = parseFloat(o[0]), n = parseInt(o[1], 10));
					if ("undefined" == typeof n) return t;
					if ("loaded" !== t._state) return t._queue.push({
						event: "seek",
						action: function () {
							t.seek.apply(t, o)
						}
					}), t;
					var u = t._soundById(n);
					if (u) {
						if (!("number" == typeof e && e >= 0)) {
							if (t._webAudio) {
								var d = t.playing(n) ? i.ctx.currentTime - u._playStart : 0,
									s = u._rateSeek ? u._rateSeek - u._seek : 0;
								return u._seek + (s + d * Math.abs(u._rate))
							}
							return u._node.currentTime
						}
						var _ = t.playing(n);
						_ && t.pause(n, !0), u._seek = e, u._ended = !1, t._clearTimer(n), _ && t.play(n, !0), !t._webAudio && u._node && (u._node.currentTime = e), t._emit("seek", n)
					}
					return t
				},
				playing: function (e) {
					var n = this;
					if ("number" == typeof e) {
						var t = n._soundById(e);
						return !!t && !t._paused
					}
					for (var o = 0; o < n._sounds.length; o++)
						if (!n._sounds[o]._paused) return !0;
					return !1
				},
				duration: function (e) {
					var n = this,
						t = n._duration,
						o = n._soundById(e);
					return o && (t = n._sprite[o._sprite][1] / 1e3), t
				},
				state: function () {
					return this._state
				},
				unload: function () {
					for (var e = this, n = e._sounds, t = 0; t < n.length; t++) {
						n[t]._paused || (e.stop(n[t]._id), e._emit("end", n[t]._id)), e._webAudio || (n[t]._node.src = "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=", n[t]._node.removeEventListener("error", n[t]._errorFn, !1), n[t]._node.removeEventListener(i._canPlayEvent, n[t]._loadFn, !1)), delete n[t]._node, e._clearTimer(n[t]._id);
						var o = i._howls.indexOf(e);
						o >= 0 && i._howls.splice(o, 1)
					}
					var r = !0;
					for (t = 0; t < i._howls.length; t++)
						if (i._howls[t]._src === e._src) {
							r = !1;
							break
						}
					return s && r && delete s[e._src], e._state = "unloaded", e._sounds = [], e = null, null
				},
				on: function (e, n, t, o) {
					var r = this,
						a = r["_on" + e];
					return "function" == typeof n && a.push(o ? {
						id: t,
						fn: n,
						once: o
					} : {
						id: t,
						fn: n
					}), r
				},
				off: function (e, n, t) {
					var o = this,
						r = o["_on" + e],
						a = 0;
					if (n) {
						for (a = 0; a < r.length; a++)
							if (n === r[a].fn && t === r[a].id) {
								r.splice(a, 1);
								break
							}
					} else if (e) o["_on" + e] = [];
					else {
						var i = Object.keys(o);
						for (a = 0; a < i.length; a++) 0 === i[a].indexOf("_on") && Array.isArray(o[i[a]]) && (o[i[a]] = [])
					}
					return o
				},
				once: function (e, n, t) {
					var o = this;
					return o.on(e, n, t, 1), o
				},
				_emit: function (e, n, t) {
					for (var o = this, r = o["_on" + e], a = r.length - 1; a >= 0; a--) r[a].id && r[a].id !== n && "load" !== e || (setTimeout(function (e) {
						e.call(this, n, t)
					}.bind(o, r[a].fn), 0), r[a].once && o.off(e, r[a].fn, r[a].id));
					return o
				},
				_loadQueue: function () {
					var e = this;
					if (e._queue.length > 0) {
						var n = e._queue[0];
						e.once(n.event, function () {
							e._queue.shift(), e._loadQueue()
						}), n.action()
					}
					return e
				},
				_ended: function (e) {
					var n = this,
						t = e._sprite,
						o = !(!e._loop && !n._sprite[t][2]);
					if (n._emit("end", e._id), !n._webAudio && o && n.stop(e._id, !0).play(e._id), n._webAudio && o) {
						n._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = i.ctx.currentTime;
						var r = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
						n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r)
					}
					return n._webAudio && !o && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, n._clearTimer(e._id), n._cleanBuffer(e._node), i._autoSuspend()), n._webAudio || o || n.stop(e._id), n
				},
				_clearTimer: function (e) {
					var n = this;
					return n._endTimers[e] && (clearTimeout(n._endTimers[e]), delete n._endTimers[e]), n
				},
				_soundById: function (e) {
					for (var n = this, t = 0; t < n._sounds.length; t++)
						if (e === n._sounds[t]._id) return n._sounds[t];
					return null
				},
				_inactiveSound: function () {
					var e = this;
					e._drain();
					for (var n = 0; n < e._sounds.length; n++)
						if (e._sounds[n]._ended) return e._sounds[n].reset();
					return new d(e)
				},
				_drain: function () {
					var e = this,
						n = e._pool,
						t = 0,
						o = 0;
					if (!(e._sounds.length < n)) {
						for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
						for (o = e._sounds.length - 1; o >= 0; o--) {
							if (t <= n) return;
							e._sounds[o]._ended && (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), t--)
						}
					}
				},
				_getSoundIds: function (e) {
					var n = this;
					if ("undefined" == typeof e) {
						for (var t = [], o = 0; o < n._sounds.length; o++) t.push(n._sounds[o]._id);
						return t
					}
					return [e]
				},
				_refreshBuffer: function (e) {
					var n = this;
					return e._node.bufferSource = i.ctx.createBufferSource(), e._node.bufferSource.buffer = s[n._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.value = e._rate, n
				},
				_cleanBuffer: function (e) {
					var n = this;
					if (n._scratchBuffer) {
						e.bufferSource.onended = null, e.bufferSource.disconnect(0);
						try {
							e.bufferSource.buffer = n._scratchBuffer
						} catch (t) {}
					}
					return e.bufferSource = null, n
				}
			};
			var d = function (e) {
				this._parent = e, this.init()
			};
			d.prototype = {
				init: function () {
					var e = this,
						n = e._parent;
					return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._muted = n._muted, e._rate = n._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = Math.round(Date.now() * Math.random()), n._sounds.push(e), e.create(), e
				},
				create: function () {
					var e = this,
						n = e._parent,
						t = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
					return n._webAudio ? (e._node = "undefined" == typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), e._node.gain.setValueAtTime(t, i.ctx.currentTime), e._node.paused = !0, e._node.connect(i.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(i._canPlayEvent, e._loadFn, !1), e._node.src = n._src, e._node.preload = "auto", e._node.volume = t * i.volume(), e._node.load()), e
				},
				reset: function () {
					var e = this,
						n = e._parent;
					return e._muted = n._muted, e._loop = n._loop, e._volume = n._volume, e._muted = n._muted, e._rate = n._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = Math.round(Date.now() * Math.random()), e
				},
				_errorListener: function () {
					var e = this;
					e._node.error && 4 === e._node.error.code && (i.noAudio = !0), e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorListener, !1)
				},
				_loadListener: function () {
					var e = this,
						n = e._parent;
					n._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(n._sprite).length && (n._sprite = {
						__default: [0, 1e3 * n._duration]
					}), "loaded" !== n._state && (n._state = "loaded", n._emit("load"), n._loadQueue()), n._autoplay && n.play(), e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1)
				}
			};
			var s = {},
				_ = function (e) {
					var n = e._src;
					if (s[n]) return e._duration = s[n].duration, void f(e);
					if (/^data:[^;]+;base64,/.test(n)) {
						for (var t = atob(n.split(",")[1]), o = new Uint8Array(t.length), r = 0; r < t.length; ++r) o[r] = t.charCodeAt(r);
						c(o.buffer, e)
					} else {
						var a = new XMLHttpRequest;
						a.open("GET", n, !0), a.responseType = "arraybuffer", a.onload = function () {
							var n = (a.status + "")[0];
							return "0" !== n && "2" !== n && "3" !== n ? void e._emit("loaderror", null, "Failed loading audio file with status: " + a.status + ".") : void c(a.response, e)
						}, a.onerror = function () {
							e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete s[n], e.load())
						}, l(a)
					}
				},
				l = function (e) {
					try {
						e.send()
					} catch (n) {
						e.onerror()
					}
				},
				c = function (e, n) {
					i.ctx.decodeAudioData(e, function (e) {
						e && n._sounds.length > 0 && (s[n._src] = e, f(n, e))
					}, function () {
						n._emit("loaderror", null, "Decoding audio data failed.")
					})
				},
				f = function (e, n) {
					n && !e._duration && (e._duration = n.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {
						__default: [0, 1e3 * e._duration]
					}), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue()), e._autoplay && e.play()
				},
				p = function () {
					i.noAudio = !1;
					try {
						"undefined" != typeof AudioContext ? i.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? i.ctx = new webkitAudioContext : i.usingWebAudio = !1
					} catch (e) {
						i.usingWebAudio = !1
					}
					if (!i.usingWebAudio)
						if ("undefined" != typeof Audio) try {
							var n = new Audio;
							"undefined" == typeof n.oncanplaythrough && (i._canPlayEvent = "canplay")
						} catch (e) {
							i.noAudio = !0
						} else i.noAudio = !0;
					try {
						var n = new Audio;
						n.muted && (i.noAudio = !0)
					} catch (e) {}
					var t = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
						o = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
						r = o ? parseInt(o[1], 10) : null;
					if (t && r && r < 9) {
						var a = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
						(i._navigator && i._navigator.standalone && !a || i._navigator && !i._navigator.standalone && !a) && (i.usingWebAudio = !1)
					}
					i.usingWebAudio && (i.masterGain = "undefined" == typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain(), i.masterGain.gain.value = 1, i.masterGain.connect(i.ctx.destination)), i._setup()
				};
			o = [], r = function () {
				return {
					Howler: i,
					Howl: u
				}
			}.apply(n, o), !(void 0 !== r && (e.exports = r)), n.Howler = i, n.Howl = u, "undefined" != typeof window ? (window.HowlerGlobal = a, window.Howler = i, window.Howl = u, window.Sound = d) : "undefined" != typeof t && (t.HowlerGlobal = a, t.Howler = i, t.Howl = u, t.Sound = d)
		}(),
		/*!
		 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
		 *  
		 *  howler.js v2.0.0-rc2
		 *  howlerjs.com
		 *
		 *  (c) 2013-2016, James Simpson of GoldFire Studios
		 *  goldfirestudios.com
		 *
		 *  MIT License
		 */
		function () {
			"use strict";
			HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (e) {
				var n = this;
				if (!n.ctx || !n.ctx.listener) return n;
				for (var t = n._howls.length - 1; t >= 0; t--) n._howls[t].stereo(e);
				return n
			}, HowlerGlobal.prototype.pos = function (e, n, t) {
				var o = this;
				return o.ctx && o.ctx.listener ? (n = "number" != typeof n ? o._pos[1] : n, t = "number" != typeof t ? o._pos[2] : t, "number" != typeof e ? o._pos : (o._pos = [e, n, t], o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]), o)) : o
			}, HowlerGlobal.prototype.orientation = function (e, n, t, o, r, a) {
				var i = this;
				if (!i.ctx || !i.ctx.listener) return i;
				var u = i._orientation;
				return n = "number" != typeof n ? u[1] : n, t = "number" != typeof t ? u[2] : t, o = "number" != typeof o ? u[3] : o, r = "number" != typeof r ? u[4] : r, a = "number" != typeof a ? u[5] : a, "number" != typeof e ? u : (i._orientation = [e, n, t, o, r, a], i.ctx.listener.setOrientation(e, n, t, o, r, a), i)
			}, Howl.prototype.init = function (e) {
				return function (n) {
					var t = this;
					return t._orientation = n.orientation || [1, 0, 0], t._stereo = n.stereo || null, t._pos = n.pos || null, t._pannerAttr = {
						coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : 360,
						coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : 360,
						coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : 0,
						distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : "inverse",
						maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : 1e4,
						panningModel: "undefined" != typeof n.panningModel ? n.panningModel : "HRTF",
						refDistance: "undefined" != typeof n.refDistance ? n.refDistance : 1,
						rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : 1
					}, t._onstereo = n.onstereo ? [{
						fn: n.onstereo
					}] : [], t._onpos = n.onpos ? [{
						fn: n.onpos
					}] : [], t._onorientation = n.onorientation ? [{
						fn: n.onorientation
					}] : [], e.call(this, n)
				}
			}(Howl.prototype.init), Howl.prototype.stereo = function (n, t) {
				var o = this;
				if (!o._webAudio) return o;
				if ("loaded" !== o._state) return o._queue.push({
					event: "stereo",
					action: function () {
						o.stereo(n, t)
					}
				}), o;
				var r = "undefined" == typeof Howler.ctx.createStereoPanner ? "spatial" : "stereo";
				if ("undefined" == typeof t) {
					if ("number" != typeof n) return o._stereo;
					o._stereo = n, o._pos = [n, 0, 0]
				}
				for (var a = o._getSoundIds(t), i = 0; i < a.length; i++) {
					var u = o._soundById(a[i]);
					if (u) {
						if ("number" != typeof n) return u._stereo;
						u._stereo = n, u._pos = [n, 0, 0], u._node && (u._pannerAttr.panningModel = "equalpower", u._panner && u._panner.pan || e(u, r), "spatial" === r ? u._panner.setPosition(n, 0, 0) : u._panner.pan.value = n), o._emit("stereo", u._id)
					}
				}
				return o
			}, Howl.prototype.pos = function (n, t, o, r) {
				var a = this;
				if (!a._webAudio) return a;
				if ("loaded" !== a._state) return a._queue.push({
					event: "pos",
					action: function () {
						a.pos(n, t, o, r)
					}
				}), a;
				if (t = "number" != typeof t ? 0 : t, o = "number" != typeof o ? -.5 : o, "undefined" == typeof r) {
					if ("number" != typeof n) return a._pos;
					a._pos = [n, t, o]
				}
				for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
					var d = a._soundById(i[u]);
					if (d) {
						if ("number" != typeof n) return d._pos;
						d._pos = [n, t, o], d._node && (d._panner && !d._panner.pan || e(d, "spatial"), d._panner.setPosition(n, t, o)), a._emit("pos", d._id)
					}
				}
				return a
			}, Howl.prototype.orientation = function (n, t, o, r) {
				var a = this;
				if (!a._webAudio) return a;
				if ("loaded" !== a._state) return a._queue.push({
					event: "orientation",
					action: function () {
						a.orientation(n, t, o, r)
					}
				}), a;
				if (t = "number" != typeof t ? a._orientation[1] : t, o = "number" != typeof o ? a._orientation[2] : o, "undefined" == typeof r) {
					if ("number" != typeof n) return a._orientation;
					a._orientation = [n, t, o]
				}
				for (var i = a._getSoundIds(r), u = 0; u < i.length; u++) {
					var d = a._soundById(i[u]);
					if (d) {
						if ("number" != typeof n) return d._orientation;
						d._orientation = [n, t, o], d._node && (d._panner || (d._pos || (d._pos = a._pos || [0, 0, -.5]), e(d, "spatial")), d._panner.setOrientation(n, t, o)), a._emit("orientation", d._id)
					}
				}
				return a
			}, Howl.prototype.pannerAttr = function () {
				var n, t, o, r = this,
					a = arguments;
				if (!r._webAudio) return r;
				if (0 === a.length) return r._pannerAttr;
				if (1 === a.length) {
					if ("object" != typeof a[0]) return o = r._soundById(parseInt(a[0], 10)), o ? o._pannerAttr : r._pannerAttr;
					n = a[0], "undefined" == typeof t && (r._pannerAttr = {
						coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : r._coneInnerAngle,
						coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : r._coneOuterAngle,
						coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : r._coneOuterGain,
						distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : r._distanceModel,
						maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : r._maxDistance,
						panningModel: "undefined" != typeof n.panningModel ? n.panningModel : r._panningModel,
						refDistance: "undefined" != typeof n.refDistance ? n.refDistance : r._refDistance,
						rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : r._rolloffFactor
					})
				} else 2 === a.length && (n = a[0], t = parseInt(a[1], 10));
				for (var i = r._getSoundIds(t), u = 0; u < i.length; u++)
					if (o = r._soundById(i[u])) {
						var d = o._pannerAttr;
						d = {
							coneInnerAngle: "undefined" != typeof n.coneInnerAngle ? n.coneInnerAngle : d.coneInnerAngle,
							coneOuterAngle: "undefined" != typeof n.coneOuterAngle ? n.coneOuterAngle : d.coneOuterAngle,
							coneOuterGain: "undefined" != typeof n.coneOuterGain ? n.coneOuterGain : d.coneOuterGain,
							distanceModel: "undefined" != typeof n.distanceModel ? n.distanceModel : d.distanceModel,
							maxDistance: "undefined" != typeof n.maxDistance ? n.maxDistance : d.maxDistance,
							panningModel: "undefined" != typeof n.panningModel ? n.panningModel : d.panningModel,
							refDistance: "undefined" != typeof n.refDistance ? n.refDistance : d.refDistance,
							rolloffFactor: "undefined" != typeof n.rolloffFactor ? n.rolloffFactor : d.rolloffFactor
						};
						var s = o._panner;
						s ? (s.coneInnerAngle = d.coneInnerAngle, s.coneOuterAngle = d.coneOuterAngle, s.coneOuterGain = d.coneOuterGain, s.distanceModel = d.distanceModel, s.maxDistance = d.maxDistance, s.panningModel = d.panningModel, s.refDistance = d.refDistance, s.rolloffFactor = d.rolloffFactor) : (o._pos || (o._pos = r._pos || [0, 0, -.5]), e(o, "spatial"))
					}
				return r
			}, Sound.prototype.init = function (e) {
				return function () {
					var n = this,
						t = n._parent;
					n._orientation = t._orientation, n._stereo = t._stereo, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this), n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
				}
			}(Sound.prototype.init), Sound.prototype.reset = function (e) {
				return function () {
					var n = this,
						t = n._parent;
					return n._orientation = t._orientation, n._pos = t._pos, n._pannerAttr = t._pannerAttr, e.call(this)
				}
			}(Sound.prototype.reset);
			var e = function (e, n) {
				n = n || "spatial", "spatial" === n ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.panningModel = e._pannerAttr.panningModel, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.value = e._stereo), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, !0).play(e._id)
			}
		}()
	}).call(n, function () {
		return this
	}())
}]));