(function (window) {
  function h() {
    function j() {
      var a = f[i],
        b = o.scrollTop || window.pageYOffset || l.scrollTop || 0,
        g = this,
        c = g._width,
        e = g._height;
      h(a, 0);
      l.appendChild(f);
      k(f, 80);
      a.height = o.scrollHeight + "px";
      g = l.appendChild(g.cloneNode(!0));
      g.width = c;
      g.height = e;
      a = g[i];
      a.position = "absolute";
      a.border = "8px solid #FFF";
      a.top = o.clientHeight / 2 + b + "px";
      a.left = m(o.clientWidth / 2) + "px";
      a.marginLeft = -m((c + 16) / 2) + "px";
      a.marginTop = -m((e + 16) / 2) + "px";
      f.onclick = function () {
        l.removeChild(g);
        l.removeChild(f)
      }
    }

    function h(a, b) {
      a.opacity =
        a.MozOpacity = a.KhtmlOpacity = b / 100;
      a.filter = "alpha(opacity=" + b + ")"
    }

    function k(a, b) {
      var c = a[i],
        e = 0,
        f = window.setInterval(function () {
          if ((b || 100) <= (e += 10)) window.clearInterval(f), q();
          h(c, e)
        }, 20)
    }

    function q() {
      var a = new Image,
        b = a[i];
      a.onload = e;
      a.onerror = w;
      a.className = "float-left";
      a.src = "img/gallery/" + (s < 10 ? "0" : "") + s++ + ".jpg";
      b[t] = "16px";
      h(b, 0);
      b.cursor = "pointer"
    }

    function e() {
      var a = this.width,
        b = this.height;
      this._width = a;
      this._height = b;
      u.insertBefore(this, v);
      c < b ? (this.setAttribute("height", c), this.setAttribute("width", m(a * c / b))) : c < a &&
        (this.setAttribute("width", c), this.setAttribute("height", a = m(a * b / c)), this[i][t] = c - a + 16 + "px");
      this.onclick = j;
      k(this)
    }

    function w() {
      q = function () {}
    }
    var i = "style",
      t = "marginTop",
      m = window.Math.round,
      p = window.document,
      o = p.documentElement,
      l = p.body,
      x = p.getElementById("main"),
      f = p.createElement("div"),
      u = x.getElementsByTagName("div")[0],
      v = u.getElementsByTagName("br")[0],
      c = 190,
      s = 0;
    v[i].clear = "left";
    f.id = "canvas";
    q()
  }
  if (window.addEventListener) window.addEventListener("load", h, !1);
  else if (window.attachEvent) window.attachEvent("onload", h);
  else window.onload = h
})(this, "onload", "addEventListener", "attachEvent", "getElementsByTagName", "setAttribute");
