(function (lib, img, cjs, ss, an) {
  var p; // shortcut to reference prototypes
  lib.webFontTxtInst = {};
  var loadedTypekitCount = 0;
  var loadedGoogleCount = 0;
  var gFontsUpdateCacheList = [];
  var tFontsUpdateCacheList = [];
  lib.ssMetadata = [];

  lib.updateListCache = function (cacheList) {
    for (var i = 0; i < cacheList.length; i++) {
      if (cacheList[i].cacheCanvas) cacheList[i].updateCache();
    }
  };

  lib.addElementsToCache = function (textInst, cacheList) {
    var cur = textInst;
    while (cur != exportRoot) {
      if (cacheList.indexOf(cur) != -1) break;
      cur = cur.parent;
    }
    if (cur != exportRoot) {
      var cur2 = textInst;
      var index = cacheList.indexOf(cur);
      while (cur2 != cur) {
        cacheList.splice(index, 0, cur2);
        cur2 = cur2.parent;
        index++;
      }
    } else {
      cur = textInst;
      while (cur != exportRoot) {
        cacheList.push(cur);
        cur = cur.parent;
      }
    }
  };

  lib.gfontAvailable = function (family, totalGoogleCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

    loadedGoogleCount++;
    if (loadedGoogleCount == totalGoogleCount) {
      lib.updateListCache(gFontsUpdateCacheList);
    }
  };

  lib.tfontAvailable = function (family, totalTypekitCount) {
    lib.properties.webfonts[family] = true;
    var txtInst = (lib.webFontTxtInst && lib.webFontTxtInst[family]) || [];
    for (var f = 0; f < txtInst.length; ++f)
      lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

    loadedTypekitCount++;
    if (loadedTypekitCount == totalTypekitCount) {
      lib.updateListCache(tFontsUpdateCacheList);
    }
  };
  // symbols:
  // helper functions:

  function mc_symbol_clone() {
    var clone = this._cloneProps(
      new this.constructor(this.mode, this.startPosition, this.loop)
    );
    clone.gotoAndStop(this.currentFrame);
    clone.paused = this.paused;
    clone.framerate = this.framerate;
    return clone;
  }

  function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
    var prototype = cjs.extend(symbol, cjs.MovieClip);
    prototype.clone = mc_symbol_clone;
    prototype.nominalBounds = nominalBounds;
    prototype.frameBounds = frameBounds;
    return prototype;
  }

  (lib.pencil = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#3EB696").p("AAAh3IAADv");
    this.shape.setTransform(1.5, 4.2);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#3EB696").p("AAAh3IAADv");
    this.shape_1.setTransform(-1.5, 4.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#3EB696").s().p("AgTARIATghIAUAhg");
    this.shape_2.setTransform(0, -14.2);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f()
      .s("#3EB696")
      .ss(2, 0, 1)
      .p("AAoCgIhPAAIAAjvIAnhQIAoBQg");

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({
          state: [
            { t: this.shape_3 },
            { t: this.shape_2 },
            { t: this.shape_1 },
            { t: this.shape },
          ],
        })
        .wait(1)
    );
  }).prototype = getMCSymbolPrototype(
    lib.pencil,
    new cjs.Rectangle(-5, -17, 10, 34.2),
    null
  );

  (lib.flow = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // レイヤー 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#3EB696").p("AAHAhQgNghAAgl");
    this.shape.setTransform(-17.3, 3.8);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  }).prototype = getMCSymbolPrototype(
    lib.flow,
    new cjs.Rectangle(-19, -18.5, 37.5, 37),
    null
  );

  // stage content:
  (lib.pencil_Canvas = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // 5
    this.instance = new lib.flow();
    this.instance.parent = this;
    this.instance.setTransform(22.4, 22.5, 1, 1, -157.5, 0, 0, -0.1, -0.1);
    this.instance.alpha = 0;
    this.instance._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance)
        .wait(43)
        .to({ _off: false }, 0)
        .to({ alpha: 0.602 }, 1)
        .to({ alpha: 0.449 }, 2)
        .to({ alpha: 0.301 }, 2)
        .to({ alpha: 0.148 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(8)
    );

    // 4
    this.instance_1 = new lib.flow();
    this.instance_1.parent = this;
    this.instance_1.setTransform(22.3, 22.2, 1, 1, 180);
    this.instance_1.alpha = 0;
    this.instance_1._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_1)
        .wait(42)
        .to({ _off: false }, 0)
        .to({ alpha: 0.699 }, 1)
        .to({ alpha: 0.531 }, 2)
        .to({ alpha: 0.352 }, 2)
        .to({ alpha: 0.18 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(9)
    );

    // 3
    this.instance_2 = new lib.flow();
    this.instance_2.parent = this;
    this.instance_2.setTransform(22.3, 22.2, 1, 1, 157.5);
    this.instance_2.alpha = 0;
    this.instance_2._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_2)
        .wait(41)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ alpha: 0.801 }, 0)
        .to({ alpha: 0.602 }, 2)
        .to({ alpha: 0.398 }, 2)
        .to({ alpha: 0.199 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(10)
    );

    // 2
    this.instance_3 = new lib.flow();
    this.instance_3.parent = this;
    this.instance_3.setTransform(22.2, 22.1, 1, 1, 135);
    this.instance_3.alpha = 0;
    this.instance_3._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_3)
        .wait(40)
        .to({ _off: false }, 0)
        .to({ alpha: 0.898 }, 1)
        .to({ alpha: 0.68 }, 2)
        .to({ alpha: 0.449 }, 2)
        .to({ alpha: 0.219 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(11)
    );

    // 1
    this.instance_4 = new lib.flow();
    this.instance_4.parent = this;
    this.instance_4.setTransform(22.1, 22, 1, 1, 112.5);
    this.instance_4.alpha = 0;
    this.instance_4._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_4)
        .wait(39)
        .to({ _off: false }, 0)
        .to({ alpha: 1 }, 1)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(12)
    );

    // 5
    this.instance_5 = new lib.flow();
    this.instance_5.parent = this;
    this.instance_5.setTransform(22.1, 22, 1, 1, 90);
    this.instance_5.alpha = 0;
    this.instance_5._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_5)
        .wait(50)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 22.3, y: 21.8, alpha: 1 }, 0)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(1)
    );

    // 4
    this.instance_6 = new lib.flow();
    this.instance_6.parent = this;
    this.instance_6.setTransform(22, 22, 1, 1, 67.5);
    this.instance_6.alpha = 0;
    this.instance_6._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_6)
        .wait(49)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 22.2, y: 21.8, alpha: 1 }, 0)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(2)
    );

    // 3
    this.instance_7 = new lib.flow();
    this.instance_7.parent = this;
    this.instance_7.setTransform(22, 22, 1, 1, 45);
    this.instance_7.alpha = 0;
    this.instance_7._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_7)
        .wait(48)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ x: 22.1, y: 21.9, alpha: 1 }, 0)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(3)
    );

    // 2
    this.instance_8 = new lib.flow();
    this.instance_8.parent = this;
    this.instance_8.setTransform(22, 22, 1, 1, 22.5);
    this.instance_8.alpha = 0;
    this.instance_8._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_8)
        .wait(47)
        .to({ _off: false }, 0)
        .wait(1)
        .to({ y: 21.9, alpha: 1 }, 0)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(4)
    );

    // 1
    this.instance_9 = new lib.flow();
    this.instance_9.parent = this;
    this.instance_9.setTransform(22, 22);
    this.instance_9._off = true;

    this.timeline.addTween(
      cjs.Tween.get(this.instance_9)
        .wait(47)
        .to({ _off: false }, 0)
        .to({ alpha: 0.75 }, 2)
        .to({ alpha: 0.5 }, 2)
        .to({ alpha: 0.25 }, 2)
        .to({ alpha: 0 }, 2)
        .wait(5)
    );

    // pencil
    this.instance_10 = new lib.pencil();
    this.instance_10.parent = this;
    this.instance_10.setTransform(22, 22);

    this.timeline.addTween(
      cjs.Tween.get(this.instance_10)
        .wait(1)
        .to({ rotation: 0.6 }, 0)
        .wait(1)
        .to({ rotation: 3.3 }, 0)
        .wait(1)
        .to({ rotation: 11.2 }, 0)
        .wait(1)
        .to({ rotation: 16 }, 0)
        .wait(1)
        .to({ rotation: 17.2 }, 0)
        .wait(1)
        .to({ rotation: 18.3 }, 0)
        .wait(1)
        .to({ rotation: 19.2 }, 0)
        .wait(1)
        .to({ rotation: 19.8 }, 0)
        .wait(1)
        .to({ rotation: 20 }, 0)
        .to({ rotation: 0 }, 10)
        .wait(1)
        .to({ rotation: -2.8 }, 0)
        .wait(1)
        .to({ rotation: -6.8 }, 0)
        .wait(1)
        .to({ rotation: -10.9 }, 0)
        .wait(1)
        .to({ rotation: -14.2 }, 0)
        .wait(1)
        .to({ rotation: -16 }, 0)
        .wait(1)
        .to({ rotation: -16.8 }, 0)
        .wait(1)
        .to({ rotation: -17.4 }, 0)
        .wait(1)
        .to({ rotation: -17.7 }, 0)
        .wait(1)
        .to({ rotation: -18.4 }, 0)
        .wait(1)
        .to({ rotation: -20 }, 0)
        .to({ rotation: 0 }, 10)
        .wait(1)
        .to({ rotation: 31.2 }, 0)
        .wait(1)
        .to({ rotation: 50.9 }, 0)
        .wait(1)
        .to({ rotation: 69.1 }, 0)
        .wait(1)
        .to({ rotation: 87.4 }, 0)
        .wait(1)
        .to({ rotation: 107.4 }, 0)
        .wait(1)
        .to({ rotation: 142.3 }, 0)
        .wait(1)
        .to({ rotation: 199.5 }, 0)
        .wait(1)
        .to({ rotation: 261.3 }, 0)
        .wait(1)
        .to({ rotation: 306.6 }, 0)
        .wait(1)
        .to({ rotation: 326.9 }, 0)
        .wait(1)
        .to({ rotation: 336.3 }, 0)
        .wait(1)
        .to({ rotation: 342.6 }, 0)
        .wait(1)
        .to({ rotation: 347.1 }, 0)
        .wait(1)
        .to({ rotation: 350.5 }, 0)
        .wait(1)
        .to({ rotation: 353.1 }, 0)
        .wait(1)
        .to({ rotation: 355 }, 0)
        .wait(1)
        .to({ rotation: 356.4 }, 0)
        .wait(1)
        .to({ rotation: 357.3 }, 0)
        .wait(1)
        .to({ rotation: 357.9 }, 0)
        .wait(1)
        .to({ rotation: 358 }, 0)
        .wait(1)
    );
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(39, 27, 10, 34);
  // library properties:
  lib.properties = {
    width: 128,
    height: 128,
    fps: 32,
    color: "#c6e5cb",
    opacity: 1.0,
    webfonts: {},
    manifest: [],
    preloads: [],
  };
})(
  (lib = lib || {}),
  (images = images || {}),
  (createjs = createjs || {}),
  (ss = ss || {}),
  (AdobeAn = AdobeAn || {})
);
var lib, images, createjs, ss, AdobeAn;
