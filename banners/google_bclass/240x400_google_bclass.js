(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"240x400_google_bclass_atlas_P_", frames: [[636,607,46,52],[443,0,478,338],[0,0,441,604],[443,340,280,211],[684,607,37,29],[398,641,40,31],[398,606,42,33],[636,661,50,39],[636,553,52,52],[923,0,96,96],[443,553,191,239],[725,523,191,239],[500,794,110,37],[398,794,100,352],[918,523,103,352],[0,606,221,192],[636,764,221,192],[923,205,67,104],[223,606,173,242],[923,98,67,105],[0,800,110,28],[500,958,514,63],[0,850,306,132],[725,340,272,181],[923,311,37,21]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BODY = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BODY2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.COIN = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.COIN1 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.COIN2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.COIN3 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.COIN4 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.COIN5 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.EYES1 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.EYES2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.google = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.NOSE2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.NOSE3 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.PEN1 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.PEN2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.PEN3 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.PEN4 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.PEN5 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Sberbanksvg = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.SHADOW = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.TAIL1 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.TAIL2 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.TAIL3 = function() {
	this.spriteSheet = ss["240x400_google_bclass_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Tween28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TAIL2();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-25.1,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.1,75.5,50.3);


(lib.Tween27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TAIL2();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-25.1,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.7,-25.1,75.5,50.3);


(lib.Tween26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TAIL1();
	this.instance.parent = this;
	this.instance.setTransform(-42.4,-18.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-18.3,85,36.7);


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.TAIL1();
	this.instance.parent = this;
	this.instance.setTransform(-42.4,-18.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-18.3,85,36.7);


(lib.Tween24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN4();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-7.2,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Tween23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN4();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-7.2,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Tween22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN5();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-13.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.3,26.7,26.7);


(lib.Tween21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN5();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-13.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.3,26.7,26.7);


(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.scene_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyqfLMAAAg+VMAlVAAAMAAAA+Vg");
	this.shape.setTransform(119.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.scene_2, new cjs.Rectangle(0,0,239,399), null);


(lib.sber2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sberbanksvg();
	this.instance.parent = this;
	this.instance.setTransform(-55,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-14,110,28);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BODY();
	this.instance.parent = this;
	this.instance.setTransform(-61.2,-83.8,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-83.8,122.4,167.6);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BODY();
	this.instance.parent = this;
	this.instance.setTransform(-61.2,-83.8,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-83.8,122.4,167.6);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN4();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-7.2,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN4();
	this.instance.parent = this;
	this.instance.setTransform(-7.2,-7.2,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-7.2,14.5,14.5);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN5();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-13.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.3,26.7,26.7);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN5();
	this.instance.parent = this;
	this.instance.setTransform(-13.3,-13.3,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-13.3,26.7,26.7);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN1();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN2();
	this.instance.parent = this;
	this.instance.setTransform(-30.6,-26.6,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.6,-26.6,61.4,53.3);


(lib.right_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NOSE3();
	this.instance.parent = this;
	this.instance.setTransform(0,74,0.278,0.278);

	this.instance_1 = new lib.EYES1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(20,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.right_eye, new cjs.Rectangle(0,0,73,171.7), null);


(lib.left_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NOSE2();
	this.instance.parent = this;
	this.instance.setTransform(44,73,0.278,0.278);

	this.instance_1 = new lib.EYES2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.left_eye, new cjs.Rectangle(0,0,71.8,170.7), null);


(lib.had = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PEN3();
	this.instance.parent = this;
	this.instance.setTransform(55,24,0.278,0.278);

	this.instance_1 = new lib.PEN4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(12,0,0.278,0.278);

	this.instance_2 = new lib.PEN5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,24,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.had, new cjs.Rectangle(0,0,73.6,67.2), null);


(lib.logo_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.google();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.824,0.824);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_g, new cjs.Rectangle(0,0,90.7,30.5), null);


(lib.eye_blick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.eye_blick, new cjs.Rectangle(0,0,46,52), null);


(lib.dark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dark, new cjs.Rectangle(0,0,240,400), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbA9IAAgwIgbAAIgZAwIgRAAIAcg0QgLgFgGgHQgHgIABgMQAAgRALgKQAMgKASAAIAnAAIAAB5gAgOgoQgHAGAAALQAAALAHAGQAGAHAMgBIAXAAIAAguIgXAAQgMgBgGAHg");
	this.shape.setTransform(138.1,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggAvQgMgOAAgWIAAgVQAAgWAMgOQANgPAUAAQAUAAAMALQANAKgBATIAAAAIgQAAQAAgMgHgIQgIgHgNAAQgNAAgIALQgIALAAAQIAAAVQAAARAIAKQAIAMANAAQANAAAIgIQAHgHAAgNIAQAAIAAAAQABARgNAMQgMALgUAAQgUAAgNgPg");
	this.shape_1.setTransform(127.8,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrA9IAAh5IARAAIAAAyIAdAAQATAAALAKQAKAIAAARQAAAPgKALQgLAKgTAAgAgaAvIAdAAQAMABAGgHQAGgGAAgKQAAgLgGgGQgGgGgMAAIgdAAg");
	this.shape_2.setTransform(117.3,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA9IAAhrIgnAAIAAgOIBdAAIAAAOIgnAAIAABrg");
	this.shape_3.setTransform(106.6,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkA9IgLggIgxAAIgMAgIgRAAIAwh5IAMAAIAuB5gAgTAQIAoAAIgVg2IAAAAg");
	this.shape_4.setTransform(96.1,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggAvQgMgOAAgWIAAgVQAAgWAMgOQANgPAUAAQAUAAAMALQANAKgBATIAAAAIgQAAQAAgMgHgIQgIgHgNAAQgNAAgIALQgIALAAAQIAAAVQAAARAIAKQAIAMANAAQANAAAIgIQAHgHAAgNIAQAAIAAAAQABARgNAMQgMALgUAAQgUAAgNgPg");
	this.shape_5.setTransform(85.4,21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdA9IAAhbIAAgBIg5BcIgRAAIAAh5IARAAIAABcIAAAAIA5hcIARAAIAAB5g");
	this.shape_6.setTransform(73.8,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdA9IAAhrIg5AAIAABrIgRAAIAAh5IBbAAIAAB5g");
	this.shape_7.setTransform(61.6,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAlA9IgMggIgxAAIgLAgIgRAAIAvh5IAMAAIAvB5gAgTAQIAoAAIgUg2IgBAAg");
	this.shape_8.setTransform(50.1,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA1QgOgJABgRIAAAAIAPAAQAAAJAJAHQAIAHANAAQAOAAAIgHQAIgGAAgKQAAgLgHgGQgIgEgPAAIgOAAIAAgNIAOAAQAPABAHgGQAHgGAAgJQAAgJgIgHQgHgFgOAAQgMAAgIAFQgIAGAAAJIgPAAIgBAAQAAgPANgJQAMgJATAAQAUAAANAJQAMAJAAAQQAAAJgGAHQgFAGgKAFQALACAGAHQAGAHAAALQAAAQgNAKQgOAJgUAAQgTAAgNgJg");
	this.shape_9.setTransform(38.7,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009B54").s().p("At/DVIAAmpIb/AAIAAGpg");
	this.shape_10.setTransform(89.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta, new cjs.Rectangle(0,0,179.2,42.6), null);


(lib.copy_fin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66767C").s().p("ABBBrIgUg3IhZAAIgUA3IgdAAIBSjVIAYAAIBRDVgAgjAcIBHAAIgjhgIgBAAg");
	this.shape.setTransform(194.1,60.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66767C").s().p("AA9BrIAAi+IhMAAIAABOQAAA6gQAbQgOAbgkAAIgHAAIAAgXIAFAAQAVAAAJgVQAJgVAAgvIAAhlICFAAIAADVg");
	this.shape_1.setTransform(172.8,60.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66767C").s().p("AhGBrIAAjVICLAAIAAAXIhuAAIAABFIBhAAIAAAWIhhAAIAABMIBwAAIAAAXg");
	this.shape_2.setTransform(155.3,60.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66767C").s().p("ABNCFIAAg1IiZAAIAAA1IgYAAIgFhLIATAAQALgNAJgYQAKgZABgqIAEhWICAAAIAAC+IAdAAIgDBLgAgaguQgCAjgHAZQgIAbgLARIBmAAIAAinIhHAAg");
	this.shape_3.setTransform(134.2,63);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66767C").s().p("Ag9BUQgYgaAAgnIAAglQAAgnAYgaQAXgaAlAAQAmAAAYAaQAZAaAAAnIAAAlQAAAngZAaQgYAagmAAQglAAgXgagAgphCQgPATAAAdIAAAlQAAAeAPASQAPATAZAAQAaAAAQgSQAQgTAAgeIAAglQAAgdgQgTQgQgTgaAAQgZAAgPATg");
	this.shape_4.setTransform(105.2,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66767C").s().p("AhABrIAAjVICBAAIAAAXIhlAAIAAC+g");
	this.shape_5.setTransform(87.5,60.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66767C").s().p("AhGBrIAAjVICLAAIAAAXIhuAAIAABFIBhAAIAAAWIhhAAIAABMIBwAAIAAAXg");
	this.shape_6.setTransform(70.5,60.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66767C").s().p("Ag9BUQgYgaAAgnIAAglQAAgnAYgaQAXgaAlAAQAmAAAYAaQAZAaAAAnIAAAlQAAAngZAaQgYAagmAAQglAAgXgagAgphCQgPATAAAdIAAAlQAAAeAPASQAPATAZAAQAaAAAQgSQAQgTAAgeIAAglQAAgdgQgTQgQgTgaAAQgZAAgPATg");
	this.shape_7.setTransform(50.5,60.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66767C").s().p("AhJBrIAAjVIBFAAQAhAAASAPQATAOAAAdQAAAOgJAMQgJALgPAFQATAEALAOQALAPAAAUQABAdgUAPQgSAQghAAgAgtBUIAxAAQAUAAALgKQALgJAAgSQAAgTgKgKQgIgLgUAAIg1AAgAgtgPIAuAAQAQAAAKgJQAKgJAAgPQAAgSgLgIQgKgJgUAAIgpAAg");
	this.shape_8.setTransform(31.2,60.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66767C").s().p("Ag5BUQgWgZAAgoIAAglQAAgnAWgaQAXgaAjAAQAkAAAWAUQAVATAAAgIgBABIgbAAQAAgXgOgNQgNgNgYAAQgXAAgOAUQgPATAAAdIAAAlQAAAdAPAUQAOATAXAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegVAVQgWAUgkAAQgjAAgXgag");
	this.shape_9.setTransform(11.9,60.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66767C").s().p("AhMBrIAAjVIAdAAIAABYIA0AAQAiAAATARQATAPAAAdQAAAdgTARQgTASgiAAgAgvBUIA0AAQAVAAALgMQALgLAAgSQAAgRgLgMQgLgLgVAAIg0AAg");
	this.shape_10.setTransform(184.2,22.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66767C").s().p("Ag5BUQgWgZAAgoIAAglQAAgnAWgaQAXgaAjAAQAkAAAWAUQAVATAAAgIgBABIgbAAQAAgXgOgNQgNgNgYAAQgXAAgOAUQgPATAAAdIAAAlQAAAdAPAUQAOATAXAAQAYAAANgNQAOgNAAgXIAbAAIABABQAAAegVAVQgWAUgkAAQgjAAgXgag");
	this.shape_11.setTransform(164.9,22.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66767C").s().p("AhGBrIAAjVICLAAIAAAXIhuAAIAABFIBhAAIAAAWIhhAAIAABMIBwAAIAAAXg");
	this.shape_12.setTransform(147.3,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66767C").s().p("AgOBrIAAi+IhEAAIAAgXIClAAIAAAXIhFAAIAAC+g");
	this.shape_13.setTransform(128.8,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66767C").s().p("AA0CJIAAiiIgBAAIhmCiIgcAAIAAjVIAcAAIAACiIABABIBmijIAdAAIAADVgAgfhrQgLgLAAgRIAAgBIAXAAQAAAKAEAFQAGAHAJAAQALAAAFgHQAGgFgBgKIAXAAIAAABQAAARgLALQgNALgUgBQgSABgNgLg");
	this.shape_14.setTransform(109.3,19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66767C").s().p("Ag9BUQgYgaAAgnIAAglQAAgnAYgaQAXgaAlAAQAmAAAYAaQAZAaAAAnIAAAlQAAAngZAaQgYAagmAAQglAAgXgagAgphCQgPATAAAdIAAAlQAAAeAPASQAPATAZAAQAaAAAQgSQAQgTAAgeIAAglQAAgdgQgTQgQgTgaAAQgZAAgPATg");
	this.shape_15.setTransform(88.4,22.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66767C").s().p("AhMBrIAAjVICCAAIAAAXIhlAAIAAA+IA0AAQAiAAATARQATARAAAdQAAAdgTASQgTASgiAAgAgvBUIA0AAQAVAAALgMQALgNAAgSQAAgRgLgMQgLgLgVAAIg0AAg");
	this.shape_16.setTransform(69.3,22.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66767C").s().p("AhGBrIAAjVICLAAIAAAXIhuAAIAABFIBhAAIAAAWIhhAAIAABMIBwAAIAAAXg");
	this.shape_17.setTransform(43.9,22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66767C").s().p("AA0BrIAAheIhnAAIAABeIgcAAIAAjVIAcAAIAABhIBnAAIAAhhIAdAAIAADVg");
	this.shape_18.setTransform(23.5,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_fin, new cjs.Rectangle(0,0,205.9,81.2), null);


(lib.copy_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape.setTransform(174.8,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAnBVIg+hNIgTAAIAABNIgYAAIAAipIAYAAIAABLIASAAIA8hLIAZAAIAAAAIhBBSIBGBXIAAAAg");
	this.shape_1.setTransform(160.3,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApBtIAAiAIAAgBIhRCBIgYAAIAAipIAYAAIAACBIABAAIBQiBIAYAAIAACpgAgYhWQgKgJABgNIAAAAIASAAQAAAHAEAFQAEAEAHABQAJgBAEgEQAEgFAAgHIASAAIAAAAQAAANgJAJQgJAJgRAAQgOAAgKgJg");
	this.shape_2.setTransform(143,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBDQgUgVABgfIAAgdQgBgfAUgVQASgVAeAAQAeAAAUAVQASAVABAfIAAAdQgBAfgSAVQgUAVgeAAQgeAAgSgVgAggg1QgMAPAAAYIAAAdQAAAYAMAPQAMAPAUAAQAVAAAMgPQAMgPAAgYIAAgdQAAgYgMgPQgMgPgVAAQgUAAgMAPg");
	this.shape_3.setTransform(126.3,13.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBVIAAiXIg2AAIAAgSICDAAIAAASIg2AAIAACXg");
	this.shape_4.setTransform(111.1,13.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgtBDQgSgUAAggIAAgdQAAggASgUQASgVAcAAQAdAAARAQQARAPAAAZIgBABIgWAAQAAgSgKgKQgLgLgTAAQgSAAgMAQQgLAQAAAXIAAAdQAAAXALAQQAMAQASAAQATAAALgLQAKgKAAgSIAWAAIABAAQAAAYgRARQgSAQgcAAQgcAAgSgVg");
	this.shape_5.setTransform(96.7,13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBWIgFAAIABgSIAFAAIAGABQAIgBAEgEQADgEAFgKIAEgJIg5h+IAaAAIAhBPIAIAVIAAAAIAnhkIAbAAIg8CNQgHAPgHAIQgIAHgSAAIgHAAg");
	this.shape_6.setTransform(81.4,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBvAAIAAASIhYAAIAAA3IBOAAIAAARIhOAAIAAA9IBaAAIAAASg");
	this.shape_7.setTransform(67.5,13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AApBVIAAhLIhSAAIAABLIgWAAIAAipIAWAAIAABNIBSAAIAAhNIAXAAIAACpg");
	this.shape_8.setTransform(51.2,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmBVIAAhDIgmAAIgjBDIgZAAIAohJQgQgGgJgLQgIgLAAgRQAAgYAQgOQAQgNAbAAIA3AAIAACpgAgVg5QgJAIAAAQQAAAPAJAKQAKAIARAAIAgAAIAAhCIggAAQgRAAgKAJg");
	this.shape_9.setTransform(171.1,-16.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape_10.setTransform(156.1,-16.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABOBqIAAgpIiyAAIAAiqIAXAAIAACYIA6AAIAAiYIAWAAIAACYIA5AAIAAiYIAXAAIAACXIASAAIgCA8g");
	this.shape_11.setTransform(137.2,-14.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBvAAIAAASIhYAAIAAA3IBOAAIAAARIhOAAIAAA9IBaAAIAAASg");
	this.shape_12.setTransform(118.7,-16.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7BVIAAipIA4AAQAaAAAPALQAPAMAAAXQAAALgHAJQgIAJgLAEQAPAEAJALQAJALAAAQQAAAYgPAMQgQAMgaAAgAgkBDIAnAAQAQAAAJgIQAJgHAAgPQAAgPgIgIQgHgJgPAAIgrAAgAgkgMIAlAAQANAAAIgHQAIgHAAgNQAAgNgJgHQgJgHgPAAIghAAg");
	this.shape_13.setTransform(103.6,-16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgwBDQgUgVAAgfIAAgdQAAgfAUgVQASgVAeAAQAeAAAUAVQATAVAAAfIAAAdQAAAfgTAVQgUAVgeAAQgeAAgSgVgAggg1QgMAPAAAYIAAAdQAAAYAMAPQAMAPAUAAQAUAAANgPQAMgPAAgYIAAgdQAAgYgMgPQgNgPgUAAQgUAAgMAPg");
	this.shape_14.setTransform(87.4,-16.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAxBVIAAiXIg9AAIAAA+QAAAugMAWQgMAVgcAAIgHAAIAAgSIAFAAQAQAAAIgRQAHgQAAgmIAAhQIBrAAIAACpg");
	this.shape_15.setTransform(69.9,-16.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBLQgTgMAAgZIABAAIAWAAQAAANALAJQAMAKASAAQAUAAAMgJQAMgJAAgOQAAgQgLgHQgLgIgVAAIgUAAIAAgRIAUAAQAVAAAJgIQAKgHAAgOQAAgNgKgIQgLgJgUAAQgQAAgMAJQgLAIAAAMIgWAAIAAAAQgBgVASgNQASgNAaAAQAdAAASANQARAMAAAYQAAAMgIAJQgIAKgOAGQAQAEAJAKQAIAKAAAPQAAAXgTANQgSAOgeAAQgaAAgTgNg");
	this.shape_16.setTransform(54,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_1_3, new cjs.Rectangle(40.6,-35,144.1,65.3), null);


(lib.copy_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape.setTransform(165.3,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqBVIAAhLIhTAAIAABLIgWAAIAAipIAWAAIAABNIBTAAIAAhNIAWAAIAACpg");
	this.shape_1.setTransform(149,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBDQgTgVAAgfIAAgdQAAgfATgVQATgVAeAAQAeAAATAVQAUAVAAAfIAAAdQAAAfgUAVQgTAVgeAAQgeAAgTgVgAggg1QgMAPAAAYIAAAdQAAAYAMAPQAMAPAUAAQAVAAAMgPQANgPAAgYIAAgdQAAgYgNgPQgMgPgVAAQgUAAgMAPg");
	this.shape_2.setTransform(132.3,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape_3.setTransform(110.4,48.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBVIAAiXIg9AAIAAA+QAAAugMAWQgMAVgcAAIgHAAIAAgSIAFAAQAQAAAIgRQAHgQAAgmIAAhQIBrAAIAACpg");
	this.shape_4.setTransform(93.3,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBLQgTgMAAgZIABAAIAWAAQAAANALAJQAMAKASAAQAUAAAMgJQAMgJAAgOQAAgQgLgHQgLgIgVAAIgUAAIAAgRIAUAAQAVAAAJgIQAKgHAAgOQAAgNgKgIQgLgJgUAAQgQAAgMAJQgLAIAAAMIgWAAIAAAAQgBgVASgNQASgNAaAAQAdAAASANQARAMAAAYQAAAMgIAJQgIAKgOAGQAQAEAJAKQAIAKAAAPQAAAXgTANQgSAOgeAAQgaAAgTgNg");
	this.shape_5.setTransform(77.4,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBvAAIAAASIhYAAIAAA3IBOAAIAAARIhOAAIAAA9IBaAAIAAASg");
	this.shape_6.setTransform(63.1,48.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAxBVIAAiXIg9AAIAAA+QAAAugMAWQgMAVgcAAIgHAAIAAgSIAFAAQAQAAAIgRQAHgQAAgmIAAhQIBrAAIAACpg");
	this.shape_7.setTransform(46,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA8BVIAAipIAXAAIAACpgAhSBVIAAipIAWAAIAABDIArAAQAaAAAQAOQAOANAAAXQAAAXgPAPQgPAOgaAAgAg8BDIArAAQARAAAIgKQAIgKABgOQAAgOgJgJQgIgKgRAAIgrAAg");
	this.shape_8.setTransform(27.9,48.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag7BVIAAipIA4AAQAaAAAPALQAPAMAAAXQAAALgHAJQgIAJgLAEQAPAEAJALQAJALAAAQQAAAYgPAMQgQAMgaAAgAgkBDIAnAAQAQAAAJgIQAJgHAAgPQAAgPgIgIQgHgJgPAAIgrAAgAgkgMIAlAAQANAAAIgHQAIgHAAgNQAAgNgJgHQgJgHgPAAIghAAg");
	this.shape_9.setTransform(10.1,48.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8BVIAAipIAXAAIAABFIApAAQAbAAAPAOQAQAMAAAXQAAAXgQAOQgPAOgbAAgAglBDIApAAQARAAAJgJQAIgKAAgOQAAgOgIgJQgJgIgRAAIgpAAg");
	this.shape_10.setTransform(119.6,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLBVIAAiXIg2AAIAAgSICDAAIAAASIg2AAIAACXg");
	this.shape_11.setTransform(104.5,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAmBVIAAhDIgmAAIgjBDIgZAAIAohJQgQgGgJgLQgIgLAAgRQAAgYAQgOQAQgNAbAAIA3AAIAACpgAgVg5QgJAIAAAQQAAAPAJAKQAKAIARAAIAgAAIAAhCIggAAQgRAAgKAJg");
	this.shape_12.setTransform(89.3,18.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AApBVIAAiXIhSAAIAACXIgXAAIAAipICBAAIAACpg");
	this.shape_13.setTransform(73.5,18.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxBDQgSgVAAgfIAAgdQAAgfASgVQATgVAeAAQAeAAATAVQATAVAAAfIAAAdQAAAfgTAVQgTAVgeAAQgeAAgTgVgAggg1QgMAPAAAYIAAAdQAAAYAMAPQAMAPAUAAQAUAAANgPQANgPAAgYIAAgdQAAgYgNgPQgNgPgUAAQgUAAgMAPg");
	this.shape_14.setTransform(56.7,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_1_2, new cjs.Rectangle(0,0,175.2,65.3), null);


(lib.copy_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmBVIAAhDIgmAAIgjBDIgZAAIAohJQgQgGgJgLQgIgLAAgRQAAgYAQgOQAQgNAbAAIA3AAIAACpgAgVg5QgJAIAAAQQAAAPAJAKQAKAIARAAIAgAAIAAhCIggAAQgRAAgKAJg");
	this.shape.setTransform(137.5,48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag9BVIAAipIBBAAQAbAAAQAOQAPAOAAAXQAAAXgPANQgQAOgbAAIgpAAIAABEgAglAAIApAAQARAAAJgKQAIgJAAgOQAAgOgIgKQgJgJgRAAIgpAAg");
	this.shape_1.setTransform(123.2,48.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape_2.setTransform(107.1,48.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA+BqIAAgqIh7AAIAAAqIgTAAIgEg8IAPAAQAJgKAIgUQAHgTABghIAEhFIBlAAIAACXIAYAAIgDA8gAgVgkQgBAbgGAVQgGAVgJANIBRAAIAAiFIg4AAg");
	this.shape_3.setTransform(90.2,50.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBVIAAhLIhSAAIAABLIgWAAIAAipIAWAAIAABNIBSAAIAAhNIAYAAIAACpg");
	this.shape_4.setTransform(72.7,48.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBvAAIAAASIhYAAIAAA3IBOAAIAAARIhOAAIAAA9IBaAAIAAASg");
	this.shape_5.setTransform(57.8,48.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAxBVIAAiXIg9AAIAAA+QAAAugMAWQgMAVgcAAIgHAAIAAgSIAFAAQAQAAAIgRQAHgQAAgmIAAhQIBrAAIAACpg");
	this.shape_6.setTransform(40.8,48.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA0BVIgQgsIhHAAIgQAsIgXAAIBCipIASAAIBBCpgAgcAWIA5AAIgchNIgBAAg");
	this.shape_7.setTransform(25.3,48.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAnBVIg9hNIgUAAIAABNIgYAAIAAipIAYAAIAABLIASAAIA7hLIAaAAIAAAAIhBBSIBHBXIgBAAg");
	this.shape_8.setTransform(10.8,48.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA+BqIAAgqIh7AAIAAAqIgTAAIgEg8IAPAAQAJgKAIgUQAHgTABghIAEhFIBlAAIAACXIAYAAIgDA8gAgVgkQgBAbgGAVQgGAVgJANIBRAAIAAiFIg4AAg");
	this.shape_9.setTransform(110.5,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBDQgUgVABgfIAAgdQgBgfAUgVQASgVAeAAQAeAAAUAVQASAVABAfIAAAdQgBAfgSAVQgUAVgeAAQgeAAgSgVgAggg1QgMAPAAAYIAAAdQAAAYAMAPQAMAPAUAAQAUAAANgPQAMgPAAgYIAAgdQAAgYgMgPQgNgPgUAAQgUAAgMAPg");
	this.shape_10.setTransform(93.3,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AApBVIAAiXIhSAAIAACXIgXAAIAAipICBAAIAACpg");
	this.shape_11.setTransform(76.6,18.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAJIAAgRIA5AAIAAARg");
	this.shape_12.setTransform(64.7,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBLQgTgMAAgZIABAAIAWAAQAAANALAJQAMAKASAAQAUAAAMgJQAMgJAAgOQAAgQgLgHQgLgIgVAAIgUAAIAAgRIAUAAQAVAAAJgIQAKgHAAgOQAAgNgKgIQgLgJgUAAQgQAAgMAJQgLAIAAAMIgWAAIAAAAQgBgVASgNQASgNAaAAQAdAAASANQARAMAAAYQAAAMgIAJQgIAKgOAGQAQAEAJAKQAIAKAAAPQAAAXgTANQgSAOgeAAQgaAAgTgNg");
	this.shape_13.setTransform(53.2,18.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AApBVIAAiBIAAAAIhSCBIgWAAIAAipIAWAAIAACBIABAAIBRiBIAYAAIAACpg");
	this.shape_14.setTransform(36.7,18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.copy_1_1, new cjs.Rectangle(0,0,147.8,65.3), null);


(lib.color1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8D6EE").s().p("AgcBDIAAiFIA5AAIAACFg");
	this.shape.setTransform(15,26.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#627278").s().p("AgdBDIAAiFIA7AAIAACFg");
	this.shape_1.setTransform(3,26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#75AE45").s().p("AgdBDIAAiFIA7AAIAACFg");
	this.shape_2.setTransform(3,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF9164").s().p("AgcBDIAAiFIA5AAIAACFg");
	this.shape_3.setTransform(15,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8D85B").s().p("AgcBDIAAiFIA5AAIAACFg");
	this.shape_4.setTransform(26.6,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D5513D").s().p("AgcBDIAAiFIA5AAIAACFg");
	this.shape_5.setTransform(26.6,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.color1, new cjs.Rectangle(0,0,29.6,33.2), null);


(lib.coin4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin4, new cjs.Rectangle(0,0,13.9,10.9), null);


(lib.coin3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin3, new cjs.Rectangle(0,0,11.7,9.2), null);


(lib.coin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin2, new cjs.Rectangle(0,0,11.1,8.6), null);


(lib.coin1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.COIN();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.coin1, new cjs.Rectangle(0,0,10.3,8.1), null);


(lib.busines_klass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66767C").s().p("AgjArQgNgQAAgZIAAgEQAAgYANgQQAOgSAYABQAUAAANALQANAMAAASIAAABIgUAAQAAgLgHgHQgIgIgLABQgQgBgHAMQgHAMAAARIAAAEQAAASAHAMQAHALAQAAQAKAAAIgGQAIgGAAgKIATAAIABABQAAAPgOAMQgOAMgSgBQgYAAgOgRg");
	this.shape.setTransform(178.4,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66767C").s().p("AgjArQgNgQAAgZIAAgEQAAgYANgQQAOgSAYABQAUAAANALQANAMAAASIAAABIgUAAQAAgLgHgHQgIgIgLABQgQgBgHAMQgHAMAAARIAAAEQAAASAHAMQAHALAQAAQAKAAAIgGQAIgGAAgKIATAAIABABQAAAPgOAMQgOAMgSgBQgYAAgOgRg");
	this.shape_1.setTransform(166.7,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66767C").s().p("AgmAzQgJgKAAgQQAAgQANgJQAOgJAVAAIAYAAIAAgLQgBgLgGgGQgGgFgMAAQgIAAgHAEQgGAFAAAIIgUAAIgBgBQgBgNANgKQANgKATAAQATAAAMAKQAMAKAAATIAAA2IABANIADALIgWAAIgCgJIAAgIQgHAIgJAFQgJAHgLgBQgRAAgKgJgAgTALQgHAGgBAIQAAAJAGAEQAEAEAJAAQALABAKgHQAIgFAEgIIAAgTIgZAAQgLAAgIAHg");
	this.shape_2.setTransform(154.6,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66767C").s().p("AAgA6IAAhiIgmAAIAAAgQAAAigJAQQgJAQgWAAIgGAAIAAgSIAEAAQAMAAAEgLQAFgLAAgaIAAgxIBQAAIAABzg");
	this.shape_3.setTransform(142.1,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66767C").s().p("AAYA6IgmgyIgOAAIAAAyIgVAAIAAhzIAVAAIAAAxIAMAAIAlgxIAZAAIABAAIguA3IAxA8IAAAAg");
	this.shape_4.setTransform(131.5,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66767C").s().p("AgjArQgNgQAAgZIAAgEQAAgYANgQQAOgSAYABQAUAAANALQANAMAAASIAAABIgUAAQAAgLgHgHQgIgIgLABQgQgBgHAMQgHAMAAARIAAAEQAAASAHAMQAHALAQAAQAKAAAIgGQAIgGAAgKIATAAIABABQAAAPgOAMQgOAMgSgBQgYAAgOgRg");
	this.shape_5.setTransform(113.7,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66767C").s().p("AghAsQgPgQAAgaIAAgEQAAgZAPgQQAPgQATAAQAYAAAMAOQAMAOAAAXIAAANIhLAAIAAAAQAAARAIALQAJAKANAAQALAAAIgCQAIgDAGgGIAIAOQgGAGgKAEQgKAEgPAAQgXAAgOgQgAgQgiQgIAJgBANIAAABIA1AAIAAgCQAAgNgHgJQgHgHgNAAQgKgBgHAJg");
	this.shape_6.setTransform(102,19.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66767C").s().p("AAaA6IAAgyIgzAAIAAAyIgVAAIAAhzIAVAAIAAAyIAzAAIAAgyIAVAAIAABzg");
	this.shape_7.setTransform(89.9,19.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66767C").s().p("AgfAzQgOgKABgRIAAAAIAUAAQAAAIAHAGQAHAGAKAAQAMAAAGgFQAHgGAAgIQAAgJgGgEQgFgFgMAAIgTAAIAAgQIATAAQALAAAFgEQAFgEAAgJQAAgGgGgGQgFgFgMAAQgJAAgGAFQgHAFAAAIIgUAAIAAgBQgBgPANgIQANgKARAAQAVAAALAJQAMAIAAAQQAAAIgFAHQgFAGgIAEQAKADAFAGQAFAIAAAJQAAAQgNAKQgMAJgVAAQgSAAgNgJg");
	this.shape_8.setTransform(78,19.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66767C").s().p("AAaA6IAAhRIAAAAIgzBRIgVAAIAAhzIAVAAIAABRIAAAAIAzhRIAVAAIAABzg");
	this.shape_9.setTransform(66.2,19.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66767C").s().p("Ag3BOIAAibIBfAAIAAAQIhKAAIAAAuIAlAAQAaAAANANQAOALAAAWQAAAVgOANQgOANgZAAgAgiA+IAlAAQAQAAAIgJQAIgKAAgNQAAgMgIgJQgIgJgQAAIglAAg");
	this.shape_10.setTransform(53.4,17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.busines_klass, new cjs.Rectangle(44,0,142.2,33), null);


(lib.bord1_black = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-121,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bord1_black, new cjs.Rectangle(-121,35,478,338), null);


(lib.body_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BODY2();
	this.instance.parent = this;
	this.instance.setTransform(-39.2,-29.6,0.281,0.281);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.body_2, new cjs.Rectangle(-39.2,-29.6,78.6,59.2), null);


(lib.monster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// COIN
	this.instance = new lib.coin1();
	this.instance.parent = this;
	this.instance.setTransform(52.1,255,1,1,0,0,0,5.1,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({y:258.8},0).wait(1).to({rotation:-5.1,x:50.8,y:259.5},0).wait(1).to({rotation:-22.2,x:46.6,y:261.7},0).wait(1).to({rotation:-43.6,x:41.3,y:264.6},0).wait(1).to({rotation:-56.4,x:38.1,y:266.2},0).wait(1).to({regX:5,rotation:-60,x:37.1,y:266.7},0).wait(1).to({regX:5.1,rotation:-51.8,x:39.2,y:265.5},0).wait(1).to({rotation:-26.6,x:45.3,y:262.1},0).wait(1).to({rotation:-5.8,x:50.3,y:259.4},0).wait(1).to({rotation:0,x:51.7,y:258.6},0).to({y:258.2},1).wait(1).to({rotation:-8.2,x:49.6,y:259.6},0).wait(1).to({rotation:-33.4,x:43.2,y:263.8},0).wait(1).to({rotation:-54.2,x:37.9,y:267.3},0).wait(1).to({regX:5,rotation:-60,x:36.4,y:268.3},0).wait(1).to({regX:5.1,rotation:-51.8,x:38.6,y:267},0).wait(1).to({rotation:-26.6,x:45.2,y:263.1},0).wait(1).to({rotation:-5.8,x:50.6,y:260.1},0).wait(1).to({rotation:0,x:52.1,y:259.2},0).to({y:259.6},1).wait(1).to({rotation:-8.2,x:50.2,y:260.8},0).wait(1).to({rotation:-33.4,x:44.6,y:264.6},0).wait(1).to({rotation:-54.2,x:39.9,y:267.6},0).wait(1).to({regX:5,rotation:-60,x:38.5,y:268.5},0).wait(1).to({regX:5.1,rotation:-51.8,x:40.6,y:267.5},0).wait(1).to({rotation:-26.6,x:46.8,y:264.4},0).wait(1).to({rotation:-5.8,x:51.9,y:261.9},0).wait(1).to({rotation:0,x:53.3,y:261.2},0).to({y:261.4},1).wait(1).to({rotation:-8.2,x:51.6,y:262.8},0).wait(1).to({rotation:-33.4,x:46.3,y:267.2},0).wait(1).to({rotation:-54.2,x:42,y:270.7},0).wait(1).to({regX:5,rotation:-60,x:40.7,y:271.7},0).wait(1).to({regX:5.1,rotation:-51.8,x:42.7,y:270.7},0).wait(1).to({rotation:-26.6,x:48.7,y:267.9},0).wait(1).to({rotation:-5.8,x:53.6,y:265.6},0).wait(1).to({rotation:0,x:54.9,y:265},0).to({y:266},1).wait(1).to({rotation:-8.2,x:53.2,y:267.2},0).wait(1).to({rotation:-33.4,x:47.9,y:271.1},0).wait(1).to({rotation:-54.2,x:43.6,y:274.2},0).wait(1).to({regX:5,rotation:-60,x:42.3,y:275.1},0).wait(1).to({regX:5.1,rotation:-51.8,x:44.3,y:274},0).wait(1).to({rotation:-26.6,x:50.3,y:270.6},0).wait(1).to({rotation:-5.8,x:55.2,y:267.9},0).wait(1).to({rotation:0,x:56.6,y:267.2},0).to({x:57.2,y:267.1},1).wait(1).to({rotation:-8.2,x:55.2,y:268.1},0).wait(1).to({rotation:-33.4,x:49.1,y:271.4},0).wait(1).to({rotation:-54.2,x:44.2,y:274.1},0).wait(1).to({regX:5,rotation:-60,x:42.7,y:274.8},0).wait(1).to({regX:5.1,rotation:-51.8,x:44.8,y:273.7},0).wait(1).to({rotation:-26.6,x:50.9,y:270.5},0).wait(1).to({rotation:-5.8,x:56,y:268},0).wait(1).to({rotation:0,x:57.4,y:267.3},0).wait(1).to({regX:5,rotation:-60,x:42.7,y:276.6},4).wait(1).to({regX:5.1,rotation:-51.8,x:44.8,y:275.2},0).wait(1).to({rotation:-26.6,x:50.9,y:271.3},0).wait(1).to({rotation:-5.8,x:56,y:268.1},0).wait(1).to({rotation:0,x:57.4,y:267.3},0).wait(1).to({regX:5,rotation:-60,x:42.3,y:276},4).wait(1).to({regX:5.1,rotation:-51.8,x:44.2,y:274.7},0).wait(1).to({rotation:-26.6,x:50,y:271},0).wait(1).to({rotation:-5.8,x:54.7,y:268.1},0).wait(1).to({rotation:0,x:56,y:267.3},0).to({y:266.3},5).wait(1).to({rotation:-8.2,x:53.9,y:267.2},0).wait(1).to({rotation:-33.4,x:47.7,y:270.4},0).wait(1).to({rotation:-54.2,x:42.5,y:272.9},0).wait(1).to({regX:5,rotation:-60,x:41,y:273.7},0).wait(1).to({regX:5.1,rotation:-51.8,x:43,y:272.3},0).wait(1).to({rotation:-26.6,x:48.9,y:268.3},0).wait(1).to({rotation:-5.8,x:53.9,y:265},0).wait(1).to({rotation:0,x:55.2,y:264.2},0).wait(1).to({regX:5,rotation:-60,x:39.4,y:270.4},4).wait(1).to({regX:5.1,rotation:-51.8,x:41.3,y:269},0).wait(1).to({rotation:-26.6,x:47,y:264.9},0).wait(1).to({rotation:-5.8,x:51.6,y:261.6},0).wait(1).to({rotation:0,x:52.9,y:260.7},0).wait(1).to({regX:5,rotation:-60,x:37.5,y:267.6},4).wait(1).to({regX:5.1,rotation:-51.8,x:39.5,y:266.3},0).wait(1).to({rotation:-26.6,x:45.6,y:262.3},0).wait(1).to({rotation:-5.8,x:50.5,y:259},0).wait(1).to({rotation:0,x:51.9,y:258.2},0).to({x:52.1,y:255},1).wait(1).to({rotation:-8.2,x:50,y:256.6},0).wait(1).to({rotation:-33.4,x:43.8,y:261.6},0).wait(1).to({rotation:-54.2,x:38.6,y:265.7},0).wait(1).to({regX:5,rotation:-60,x:37.1,y:266.8},0).wait(1).to({regX:5.1,rotation:-44.8,x:40.9,y:264.6},0).wait(1).to({rotation:-10.9,x:49.4,y:260},0).wait(1).to({rotation:0,x:52.1,y:258.5},0).wait(1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).to({x:37.1,y:266.8},1).wait(1).to({regX:5.1,rotation:-44.8,x:40.9,y:264.6},0).wait(1).to({rotation:-10.9,x:49.4,y:260},0).wait(1).to({rotation:0,x:52.1,y:258.5},0).wait(1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).wait(1).to({regX:5.1,rotation:-26.6,x:45.2,y:261.8},0).wait(1).to({rotation:0,x:51.4,y:258.3},0).to({x:52.1,y:258.5},1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).to({x:37.1,y:266.8},1).wait(1).to({regX:5.1,rotation:-44.8,x:40.9,y:264.6},0).wait(1).to({rotation:-10.9,x:49.4,y:260},0).wait(1).to({rotation:0,x:52.1,y:258.5},0).wait(1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).wait(1).to({regX:5.1,rotation:-26.6,x:45.2,y:261.8},0).wait(1).to({rotation:0,x:51.4,y:258.3},0).to({x:52.1,y:258.5},1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).to({x:37.1,y:266.8},1).wait(1).to({regX:5.1,rotation:-44.8,x:40.9,y:264.6},0).wait(1).to({rotation:-10.9,x:49.4,y:260},0).wait(1).to({rotation:0,x:52.1,y:258.5},0).wait(1).to({regX:5,rotation:-60,x:37.5,y:266.3},4).wait(1).to({regX:5.1,rotation:-26.6,x:45.2,y:261.8},0).wait(1).to({rotation:0,x:51.4,y:258.3},0).wait(1));

	// COIN1
	this.instance_1 = new lib.coin2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,260.3,1,1,0,0,0,5.5,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({y:264.1},0).wait(1).to({regX:5.6,rotation:-3.8,x:49,y:264.5},0).wait(1).to({rotation:-16.6,x:46.9,y:265.7},0).wait(1).to({rotation:-32.7,x:44.2,y:267.2},0).wait(1).to({rotation:-42.3,x:42.6,y:268.2},0).wait(1).to({regX:5.5,rotation:-45,x:42.2,y:268.5},0).wait(1).to({regX:5.6,rotation:-38.8,x:43.2,y:267.8},0).wait(1).to({rotation:-19.9,x:46.1,y:265.9},0).wait(1).to({rotation:-4.3,x:48.6,y:264.4},0).wait(1).to({regX:5.5,rotation:0,x:49.1,y:263.9},0).to({y:263.5},1).wait(1).to({regX:5.6,rotation:-6.2,x:48.1,y:264.4},0).wait(1).to({rotation:-25.1,x:44.8,y:267.1},0).wait(1).to({rotation:-40.7,x:42.2,y:269.3},0).wait(1).to({regX:5.5,rotation:-45,x:41.4,y:270},0).wait(1).to({regX:5.6,rotation:-38.8,x:42.6,y:269.2},0).wait(1).to({rotation:-19.9,x:46,y:266.9},0).wait(1).to({rotation:-4.3,x:48.9,y:265.1},0).wait(1).to({regX:5.5,rotation:0,x:49.5,y:264.5},0).to({y:264.9},1).wait(1).to({regX:5.6,rotation:-6.2,x:48.7,y:265.7},0).wait(1).to({rotation:-25.1,x:46.2,y:267.9},0).wait(1).to({rotation:-40.7,x:44.1,y:269.7},0).wait(1).to({regX:5.5,rotation:-45,x:43.6,y:270.3},0).wait(1).to({regX:5.6,rotation:-38.8,x:44.6,y:269.7},0).wait(1).to({rotation:-19.9,x:47.6,y:268.1},0).wait(1).to({rotation:-4.3,x:50.2,y:266.9},0).wait(1).to({regX:5.5,rotation:0,x:50.7,y:266.5},0).to({y:266.7},1).wait(1).to({regX:5.6,rotation:-6.2,x:50.1,y:267.6},0).wait(1).to({rotation:-25.1,x:48,y:270.5},0).wait(1).to({rotation:-40.7,x:46.3,y:272.8},0).wait(1).to({regX:5.5,rotation:-45,x:45.8,y:273.5},0).wait(1).to({regX:5.6,rotation:-38.8,x:46.7,y:273},0).wait(1).to({rotation:-19.9,x:49.5,y:271.7},0).wait(1).to({rotation:-4.3,x:51.9,y:270.6},0).wait(1).to({regX:5.5,rotation:0,x:52.3,y:270.3},0).to({y:271.3},1).wait(1).to({regX:5.6,rotation:-6.2,x:51.7,y:272.1},0).wait(1).to({rotation:-25.1,x:49.6,y:274.4},0).wait(1).to({rotation:-40.7,x:47.9,y:276.3},0).wait(1).to({regX:5.5,rotation:-45,x:47.4,y:276.9},0).wait(1).to({regX:5.6,rotation:-38.8,x:48.3,y:276.2},0).wait(1).to({rotation:-19.9,x:51.1,y:274.4},0).wait(1).to({rotation:-4.3,x:53.5,y:272.9},0).wait(1).to({regX:5.5,rotation:0,x:54,y:272.5},0).to({x:54.6,y:272.4},1).wait(1).to({regX:5.6,rotation:-6.2,x:53.7,y:272.9},0).wait(1).to({rotation:-25.1,x:50.8,y:274.7},0).wait(1).to({rotation:-40.7,x:48.4,y:276.1},0).wait(1).to({regX:5.5,rotation:-45,x:47.8,y:276.6},0).wait(1).to({regX:5.6,rotation:-38.8,x:48.8,y:275.9},0).wait(1).to({rotation:-19.9,x:51.7,y:274.3},0).wait(1).to({rotation:-4.3,x:54.3,y:273},0).wait(1).to({regX:5.5,rotation:0,x:54.8,y:272.6},0).wait(1).to({rotation:-45,x:47.8,y:278.3},4).wait(1).to({regX:5.6,rotation:-38.8,x:48.8,y:277.5},0).wait(1).to({rotation:-19.9,x:51.7,y:275.1},0).wait(1).to({rotation:-4.3,x:54.3,y:273.1},0).wait(1).to({regX:5.5,rotation:0,x:54.8,y:272.6},0).wait(1).to({rotation:-45,x:47.4,y:277.7},4).wait(1).to({regX:5.6,rotation:-38.8,x:48.2,y:276.9},0).wait(1).to({rotation:-19.9,x:50.8,y:274.8},0).wait(1).to({rotation:-4.3,x:53,y:273.1},0).wait(1).to({regX:5.5,rotation:0,x:53.4,y:272.6},0).to({y:271.6},5).wait(1).to({regX:5.6,rotation:-6.2,x:52.4,y:272.1},0).wait(1).to({rotation:-25.1,x:49.3,y:273.7},0).wait(1).to({rotation:-40.7,x:46.7,y:275},0).wait(1).to({regX:5.5,rotation:-45,x:46,y:275.4},0).wait(1).to({regX:5.6,rotation:-38.8,x:47,y:274.5},0).wait(1).to({rotation:-19.9,x:49.8,y:272.1},0).wait(1).to({rotation:-4.3,x:52.1,y:270.1},0).wait(1).to({regX:5.5,rotation:0,x:52.6,y:269.5},0).wait(1).to({rotation:-45,x:44.5,y:272.1},4).wait(1).to({regX:5.6,rotation:-38.8,x:45.3,y:271.2},0).wait(1).to({rotation:-19.9,x:47.8,y:268.7},0).wait(1).to({rotation:-4.3,x:49.9,y:266.6},0).wait(1).to({regX:5.5,rotation:0,x:50.3,y:266},0).wait(1).to({rotation:-45,x:42.5,y:269.4},4).wait(1).to({regX:5.6,rotation:-38.8,x:43.5,y:268.5},0).wait(1).to({rotation:-19.9,x:46.4,y:266},0).wait(1).to({rotation:-4.3,x:48.8,y:264},0).wait(1).to({regX:5.5,rotation:0,x:49.3,y:263.5},0).to({x:49.5,y:260.3},1).wait(1).to({regX:5.6,rotation:-6.2,x:48.5,y:261.5},0).wait(1).to({rotation:-25.1,x:45.4,y:264.9},0).wait(1).to({rotation:-40.7,x:42.8,y:267.7},0).wait(1).to({regX:5.5,rotation:-45,x:42.1,y:268.6},0).wait(1).to({regX:5.6,rotation:-33.6,x:44.1,y:267.3},0).wait(1).to({rotation:-8.2,x:48.3,y:264.6},0).wait(1).to({regX:5.5,rotation:0,x:49.5,y:263.8},0).wait(1).to({rotation:-45,x:42.5,y:268},4).to({x:42.1,y:268.6},1).wait(1).to({regX:5.6,rotation:-33.6,x:44.1,y:267.3},0).wait(1).to({rotation:-8.2,x:48.3,y:264.6},0).wait(1).to({regX:5.5,rotation:0,x:49.5,y:263.8},0).wait(1).to({rotation:-45,x:42.5,y:268},4).wait(1).to({regX:5.6,rotation:-19.9,x:46.1,y:265.5},0).wait(1).to({regX:5.5,rotation:0,x:48.8,y:263.6},0).to({x:49.5,y:263.8},1).to({rotation:-45,x:42.5,y:268},4).to({x:42.1,y:268.6},1).wait(1).to({regX:5.6,rotation:-33.6,x:44.1,y:267.3},0).wait(1).to({rotation:-8.2,x:48.3,y:264.6},0).wait(1).to({regX:5.5,rotation:0,x:49.5,y:263.8},0).wait(1).to({rotation:-45,x:42.5,y:268},4).wait(1).to({regX:5.6,rotation:-19.9,x:46.1,y:265.5},0).wait(1).to({regX:5.5,rotation:0,x:48.8,y:263.6},0).to({x:49.5,y:263.8},1).to({rotation:-45,x:42.5,y:268},4).to({x:42.1,y:268.6},1).wait(1).to({regX:5.6,rotation:-33.6,x:44.1,y:267.3},0).wait(1).to({rotation:-8.2,x:48.3,y:264.6},0).wait(1).to({regX:5.5,rotation:0,x:49.5,y:263.8},0).wait(1).to({rotation:-45,x:42.5,y:268},4).wait(1).to({regX:5.6,rotation:-19.9,x:46.1,y:265.5},0).wait(1).to({regX:5.5,rotation:0,x:48.8,y:263.6},0).wait(1));

	// COIN2
	this.instance_2 = new lib.coin3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(49.8,265.5,1,1,0,0,0,5.8,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:269.3},0).wait(1).to({regY:4.6,rotation:-2.5,x:49.6,y:269.6},0).wait(1).to({rotation:-11.1,x:49,y:270.3},0).wait(1).to({rotation:-21.8,x:48.3,y:271.1},0).wait(1).to({rotation:-28.2,x:47.8,y:271.7},0).wait(1).to({regY:4.7,rotation:-30,x:47.7,y:271.8},0).wait(1).to({regY:4.6,rotation:-25.9,x:47.8,y:271.4},0).wait(1).to({rotation:-13.3,x:48.6,y:270.3},0).wait(1).to({rotation:-2.9,x:49.3,y:269.4},0).wait(1).to({regY:4.5,rotation:0,x:49.4,y:269.1},0).to({y:268.7},1).wait(1).to({regY:4.6,rotation:-4.1,x:49.1,y:269.5},0).wait(1).to({rotation:-16.7,x:48,y:271.4},0).wait(1).to({rotation:-27.1,x:47.2,y:272.9},0).wait(1).to({regY:4.7,rotation:-30,x:46.9,y:273.4},0).wait(1).to({regY:4.6,rotation:-25.9,x:47.2,y:272.8},0).wait(1).to({rotation:-13.3,x:48.5,y:271.3},0).wait(1).to({rotation:-2.9,x:49.5,y:270},0).wait(1).to({regY:4.5,rotation:0,x:49.8,y:269.7},0).to({y:270.1},1).wait(1).to({regY:4.6,rotation:-4.1,x:49.7,y:270.7},0).wait(1).to({rotation:-16.7,x:49.4,y:272.1},0).wait(1).to({rotation:-27.1,x:49.1,y:273.3},0).wait(1).to({regY:4.7,rotation:-30,y:273.6},0).wait(1).to({regY:4.6,rotation:-25.9,x:49.3,y:273.3},0).wait(1).to({rotation:-13.3,x:50.1,y:272.5},0).wait(1).to({rotation:-2.9,x:50.8,y:271.9},0).wait(1).to({regY:4.5,rotation:0,x:51,y:271.7},0).to({y:271.9},1).wait(1).to({regY:4.6,rotation:-4.1,x:51.1,y:272.7},0).wait(1).to({rotation:-16.7,y:274.7},0).wait(1).to({rotation:-27.1,x:51.2,y:276.4},0).wait(1).to({regY:4.7,rotation:-30,x:51.3,y:276.8},0).wait(1).to({regY:4.6,rotation:-25.9,x:51.4,y:276.6},0).wait(1).to({rotation:-13.3,x:52,y:276.1},0).wait(1).to({rotation:-2.9,x:52.5,y:275.6},0).wait(1).to({regY:4.5,rotation:0,x:52.6,y:275.5},0).to({y:276.5},1).wait(1).to({regY:4.6,rotation:-4.1,x:52.7,y:277.1},0).wait(1).to({rotation:-16.7,y:278.6},0).wait(1).to({rotation:-27.1,x:52.8,y:279.9},0).wait(1).to({regY:4.7,rotation:-30,x:52.9,y:280.2},0).wait(1).to({regY:4.6,rotation:-25.9,x:53,y:279.8},0).wait(1).to({rotation:-13.3,x:53.6,y:278.8},0).wait(1).to({rotation:-2.9,x:54.2,y:277.9},0).wait(1).to({regY:4.5,rotation:0,x:54.3,y:277.7},0).to({x:54.9,y:277.6},1).wait(1).to({regY:4.6,rotation:-4.1,x:54.7,y:278},0).wait(1).to({rotation:-16.7,x:53.9,y:278.9},0).wait(1).to({rotation:-27.1,x:53.4,y:279.7},0).wait(1).to({regY:4.7,rotation:-30,x:53.3,y:279.9},0).wait(1).to({regY:4.6,rotation:-25.9,x:53.4,y:279.5},0).wait(1).to({rotation:-13.3,x:54.2,y:278.7},0).wait(1).to({rotation:-2.9,x:54.9,y:277.9},0).wait(1).to({regY:4.5,rotation:0,x:55.1,y:277.8},0).wait(1).to({regY:4.7,rotation:-30,x:53.3,y:281.7},4).wait(1).to({regY:4.6,rotation:-25.9,x:53.4,y:281},0).wait(1).to({rotation:-13.3,x:54.2,y:279.5},0).wait(1).to({rotation:-2.9,x:54.9,y:278.1},0).wait(1).to({regY:4.5,rotation:0,x:55.1,y:277.8},0).wait(1).to({regY:4.7,rotation:-30,x:52.9,y:281.1},4).wait(1).to({regY:4.6,rotation:-25.9,y:280.5},0).wait(1).to({rotation:-13.3,x:53.3,y:279.2},0).wait(1).to({rotation:-2.9,x:53.6,y:278.1},0).wait(1).to({regY:4.5,rotation:0,x:53.7,y:277.8},0).to({y:276.8},5).wait(1).to({regY:4.6,rotation:-4.1,x:53.4,y:277.1},0).wait(1).to({rotation:-16.7,x:52.5,y:277.9},0).wait(1).to({rotation:-27.1,x:51.7,y:278.6},0).wait(1).to({regY:4.7,rotation:-30,x:51.5,y:278.8},0).wait(1).to({regY:4.6,rotation:-25.9,x:51.6,y:278.1},0).wait(1).to({rotation:-13.3,x:52.3,y:276.4},0).wait(1).to({rotation:-2.9,x:52.8,y:275},0).wait(1).to({regY:4.5,rotation:0,x:52.9,y:274.7},0).wait(1).to({regY:4.7,rotation:-30,x:50,y:275.5},4).wait(1).to({regY:4.6,rotation:-25.9,y:274.8},0).wait(1).to({rotation:-13.3,x:50.3,y:273},0).wait(1).to({rotation:-2.9,x:50.6,y:271.6},0).wait(1).to({regY:4.5,rotation:0,y:271.2},0).wait(1).to({regY:4.7,rotation:-30,x:48,y:272.7},4).wait(1).to({regY:4.6,rotation:-25.9,x:48.2,y:272.1},0).wait(1).to({rotation:-13.3,x:48.9,y:270.4},0).wait(1).to({rotation:-2.9,x:49.5,y:269},0).wait(1).to({regY:4.5,rotation:0,x:49.6,y:268.7},0).to({x:49.8,y:265.5},1).wait(1).to({regY:4.6,rotation:-4.1,x:49.5,y:266.5},0).wait(1).to({rotation:-16.7,x:48.6,y:269.1},0).wait(1).to({rotation:-27.1,x:47.8,y:271.3},0).wait(1).to({regY:4.7,rotation:-30,x:47.6,y:271.9},0).wait(1).to({regY:4.6,rotation:-22.4,x:48.1,y:271.1},0).wait(1).to({rotation:-5.5,x:49.4,y:269.5},0).wait(1).to({regY:4.5,rotation:0,x:49.8,y:269},0).wait(1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).to({x:47.6,y:271.9},1).wait(1).to({regY:4.6,rotation:-22.4,x:48.1,y:271.1},0).wait(1).to({rotation:-5.5,x:49.4,y:269.5},0).wait(1).to({regY:4.5,rotation:0,x:49.8,y:269},0).wait(1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).wait(1).to({regY:4.6,rotation:-13.3,x:48.6,y:269.9},0).wait(1).to({regY:4.5,rotation:0,x:49.1,y:268.8},0).to({x:49.8,y:269},1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).to({x:47.6,y:271.9},1).wait(1).to({regY:4.6,rotation:-22.4,x:48.1,y:271.1},0).wait(1).to({rotation:-5.5,x:49.4,y:269.5},0).wait(1).to({regY:4.5,rotation:0,x:49.8,y:269},0).wait(1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).wait(1).to({regY:4.6,rotation:-13.3,x:48.6,y:269.9},0).wait(1).to({regY:4.5,rotation:0,x:49.1,y:268.8},0).to({x:49.8,y:269},1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).to({x:47.6,y:271.9},1).wait(1).to({regY:4.6,rotation:-22.4,x:48.1,y:271.1},0).wait(1).to({rotation:-5.5,x:49.4,y:269.5},0).wait(1).to({regY:4.5,rotation:0,x:49.8,y:269},0).wait(1).to({regY:4.7,rotation:-30,x:48,y:271.4},4).wait(1).to({regY:4.6,rotation:-13.3,x:48.6,y:269.9},0).wait(1).to({regY:4.5,rotation:0,x:49.1,y:268.8},0).wait(1));

	// COIN3
	this.instance_3 = new lib.coin4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(51,272.4,1,1,0,0,0,7,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({y:276.2},0).wait(1).to({regX:6.9,rotation:-1.3,x:50.8},0).wait(1).to({rotation:-5.5,x:50.6,y:276},0).wait(1).to({rotation:-10.9,x:50.4,y:275.9},0).wait(1).to({rotation:-14.1,x:50.3,y:275.8},0).wait(1).to({regX:7,regY:5.5,rotation:-15},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:50.2,y:275.7},0).wait(1).to({rotation:-6.6,x:50.3,y:275.8},0).wait(1).to({rotation:-1.4,x:50.4,y:276},0).wait(1).to({regX:7,rotation:0,x:50.6},0).to({y:275.6},1).wait(1).to({regX:6.9,rotation:-2.1,x:50.4,y:275.8},0).wait(1).to({rotation:-8.4,x:50,y:276.6},0).wait(1).to({rotation:-13.6,x:49.6,y:277.2},0).wait(1).to({regX:7,regY:5.5,rotation:-15,y:277.4},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,y:277.2},0).wait(1).to({rotation:-6.6,x:50.2,y:276.9},0).wait(1).to({rotation:-1.4,x:50.7,y:276.6},0).wait(1).to({regX:7,rotation:0,x:51},0).to({y:277},1).wait(1).to({regX:6.9,rotation:-2.1,y:277.1},0).wait(1).to({rotation:-8.4,x:51.4,y:277.3},0).wait(1).to({rotation:-13.6,x:51.6,y:277.5},0).wait(1).to({regX:7,regY:5.5,rotation:-15,x:51.7,y:277.6},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:51.6,y:277.7},0).wait(1).to({rotation:-6.6,x:51.8,y:278.1},0).wait(1).to({rotation:-1.4,x:52,y:278.5},0).wait(1).to({regX:7,rotation:0,x:52.2,y:278.6},0).to({y:278.8},1).wait(1).to({regX:6.9,rotation:-2.1,x:52.4,y:279.1},0).wait(1).to({rotation:-8.4,x:53.1,y:279.9},0).wait(1).to({rotation:-13.6,x:53.7,y:280.6},0).wait(1).to({regX:7,regY:5.5,rotation:-15,x:53.9,y:280.8},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:53.8,y:280.9},0).wait(1).to({rotation:-6.6,x:53.7,y:281.6},0).wait(1).to({rotation:-1.4,y:282.2},0).wait(1).to({regX:7,rotation:0,x:53.8,y:282.4},0).to({y:283.4},1).wait(1).to({regX:6.9,rotation:-2.1,x:54,y:283.5},0).wait(1).to({rotation:-8.4,x:54.7,y:283.8},0).wait(1).to({rotation:-13.6,x:55.3,y:284.1},0).wait(1).to({regX:7,regY:5.5,rotation:-15,x:55.5,y:284.2},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:55.4},0).wait(1).to({rotation:-6.6,x:55.3,y:284.3},0).wait(1).to({rotation:-1.4,x:55.4,y:284.5},0).wait(1).to({regX:7,rotation:0,x:55.5,y:284.6},0).to({x:56.1,y:284.5},1).wait(1).to({regX:6.9,rotation:-2.1,x:55.9,y:284.4},0).wait(1).to({rotation:-8.4,y:284.1},0).wait(1).to({rotation:-13.6,y:283.9},0).wait(1).to({regX:7,regY:5.5,rotation:-15},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:55.8},0).wait(1).to({rotation:-6.6,x:55.9,y:284.2},0).wait(1).to({rotation:-1.4,x:56.1,y:284.6},0).wait(1).to({regX:7,rotation:0,x:56.3,y:284.7},0).wait(1).to({regY:5.5,rotation:-15,x:55.9,y:285.7},4).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:55.8,y:285.4},0).wait(1).to({rotation:-6.6,x:55.9,y:285},0).wait(1).to({rotation:-1.4,x:56.1,y:284.7},0).wait(1).to({regX:7,rotation:0,x:56.3},0).wait(1).to({regY:5.5,rotation:-15,x:55.5,y:285.1},4).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:55.3,y:284.9},0).wait(1).to({rotation:-6.6,x:55,y:284.8},0).wait(1).to({rotation:-1.4,x:54.8,y:284.7},0).wait(1).to({regX:7,rotation:0,x:54.9},0).to({y:283.7},5).wait(1).to({regX:6.9,rotation:-2.1,x:54.7,y:283.5},0).wait(1).to({rotation:-8.4,x:54.5,y:283.1},0).wait(1).to({rotation:-13.6,x:54.2,y:282.8},0).wait(1).to({regX:7,regY:5.5,rotation:-15},0).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:54,y:282.5},0).wait(1).to({rotation:-6.6,y:282},0).wait(1).to({rotation:-1.4,y:281.6},0).wait(1).to({regX:7,rotation:0,x:54.1},0).wait(1).to({regY:5.5,rotation:-15,x:52.6,y:279.5},4).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:52.4,y:279.2},0).wait(1).to({rotation:-6.6,x:52,y:278.6},0).wait(1).to({rotation:-1.4,x:51.7,y:278.2},0).wait(1).to({regX:7,rotation:0,x:51.8,y:278.1},0).wait(1).to({regY:5.5,rotation:-15,x:50.7,y:276.7},4).wait(1).to({regX:6.9,regY:5.4,rotation:-12.9,x:50.5,y:276.5},0).wait(1).to({rotation:-6.6,x:50.6,y:276},0).wait(1).to({rotation:-1.4,x:50.7,y:275.6},0).wait(1).to({regX:7,rotation:0,x:50.8},0).to({x:51,y:272.4},1).wait(1).to({regX:6.9,rotation:-2.1,x:50.8,y:272.9},0).wait(1).to({rotation:-8.4,x:50.6,y:274.3},0).wait(1).to({rotation:-13.6,x:50.3,y:275.5},0).wait(1).to({regX:7,regY:5.5,rotation:-15,y:275.9},0).wait(1).to({regX:6.9,regY:5.4,rotation:-11.2,y:275.8},0).wait(1).to({rotation:-2.7,x:50.7},0).wait(1).to({regX:7,rotation:0,x:51,y:275.9},0).wait(1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).to({x:50.3,y:275.9},1).wait(1).to({regX:6.9,regY:5.4,rotation:-11.2,y:275.8},0).wait(1).to({rotation:-2.7,x:50.7},0).wait(1).to({regX:7,rotation:0,x:51,y:275.9},0).wait(1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).wait(1).to({regX:6.9,regY:5.4,rotation:-6.6,x:50.3,y:275.5},0).wait(1).to({regX:7,rotation:0,y:275.7},0).to({x:51,y:275.9},1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).to({x:50.3,y:275.9},1).wait(1).to({regX:6.9,regY:5.4,rotation:-11.2,y:275.8},0).wait(1).to({rotation:-2.7,x:50.7},0).wait(1).to({regX:7,rotation:0,x:51,y:275.9},0).wait(1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).wait(1).to({regX:6.9,regY:5.4,rotation:-6.6,x:50.3,y:275.5},0).wait(1).to({regX:7,rotation:0,y:275.7},0).to({x:51,y:275.9},1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).to({x:50.3,y:275.9},1).wait(1).to({regX:6.9,regY:5.4,rotation:-11.2,y:275.8},0).wait(1).to({rotation:-2.7,x:50.7},0).wait(1).to({regX:7,rotation:0,x:51,y:275.9},0).wait(1).to({regY:5.5,rotation:-15,x:50.7,y:275.4},4).wait(1).to({regX:6.9,regY:5.4,rotation:-6.6,x:50.3,y:275.5},0).wait(1).to({regX:7,rotation:0,y:275.7},0).wait(1));

	// TAIL3
	this.instance_4 = new lib.TAIL3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(47,273,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163));

	// PEN1
	this.instance_5 = new lib.Tween17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(210,157.7,1.754,1.754);

	this.instance_6 = new lib.Tween18("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(176.7,147.7);

	this.instance_7 = new lib.Tween5("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(176.7,147.7);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(178.3,150.4);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(171.7,139.4,1,1,-8);
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(176.7,147.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},17).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_10}]},16).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},5).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_7}]},21).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},2).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({startPosition:0},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:208.9,y:157.4},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:205.2,y:156.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:198.1,y:154.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:187.8,y:151},0).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(25).to({_off:false},0).to({_off:true,x:178.3,y:150.4},2).wait(106).to({_off:false,x:176.7,y:147.7},0).to({_off:true,x:178.3,y:150.4},2).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},2).wait(1).to({rotation:-1.5,x:177,y:148.3},0).wait(1).to({rotation:-2.8,x:176,y:146.6},0).wait(1).to({rotation:-4.2,x:174.8,y:144.6},0).to({_off:true},1).wait(102).to({_off:false,rotation:0,x:178.3,y:150.4},2).wait(1).to({rotation:-1.5,x:177,y:148.3},0).wait(1).to({rotation:-2.8,x:176,y:146.6},0).wait(1).to({rotation:-4.2,x:174.8,y:144.6},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).wait(1).to({rotation:-7.6,x:171.9,y:139.7},0).wait(1).to({rotation:-6.5,x:172.6,y:140.9},0).wait(1).to({rotation:-4.5,x:173.9,y:143},0).wait(1).to({rotation:-2,x:175.4,y:145.5},0).to({_off:true},1).wait(103).to({_off:false,rotation:-8,x:171.7,y:139.4},0).wait(1).to({rotation:-7.6,x:171.9,y:139.7},0).wait(1).to({rotation:-6.5,x:172.6,y:140.9},0).wait(1).to({rotation:-4.5,x:173.9,y:143},0).wait(1).to({rotation:-2,x:175.4,y:145.5},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({_off:false},0).to({startPosition:0},2).wait(16).to({startPosition:0},0).wait(1).to({y:147.6},0).wait(1).to({x:176.9},0).wait(1).to({rotation:-0.1,x:177.3},0).wait(1).to({rotation:-0.2,x:178,y:147.5},0).wait(1).to({rotation:-0.3,x:178.9,y:147.4},0).wait(1).to({rotation:-0.5,x:180.4,y:147.2},0).wait(1).to({rotation:-0.8,x:182.4,y:147},0).wait(1).to({rotation:-1.2,x:185,y:146.7},0).wait(1).to({rotation:-1.5,x:187.6,y:146.4},0).wait(1).to({rotation:-1.8,x:189.6,y:146.2},0).wait(1).to({rotation:-2,x:190.9,y:146},0).wait(1).to({rotation:-2.1,x:191.8,y:145.9},0).wait(1).to({rotation:-2.2,x:192.3},0).wait(1).to({x:192.6},0).wait(1).to({regX:0.1,regY:0.1,x:192.7},0).wait(5).to({startPosition:0},0).to({regX:0,regY:0,x:195.4,y:148.1},2).wait(1).to({rotation:-4.3,x:193.8,y:146.5},0).wait(1).to({rotation:-5.9,x:192.5,y:145.2},0).wait(1).to({rotation:-7.9,x:191,y:143.6},0).wait(1).to({regX:0.1,regY:0.2,rotation:-12.7,x:187.2,y:139.9},0).wait(1).to({regX:0,regY:0,rotation:-12,x:187.6,y:140.2},0).wait(1).to({rotation:-9.7,x:189.4,y:142.1},0).wait(1).to({rotation:-5.7,x:192.5,y:145.2},0).wait(1).to({rotation:-2.2,x:195.4,y:148.1},0).wait(1).to({rotation:-4.3,x:193.8,y:146.5},0).wait(1).to({rotation:-5.9,x:192.5,y:145.2},0).wait(1).to({rotation:-7.9,x:191,y:143.6},0).wait(1).to({regX:0.1,regY:0.2,rotation:-12.7,x:187.2,y:139.9},0).wait(1).to({regX:0,regY:0,rotation:-12,x:187.5,y:140.2},0).wait(1).to({rotation:-9.7,x:189.1,y:141.8},0).wait(1).to({rotation:-5.7,x:191.8,y:144.6},0).wait(1).to({regX:0.1,regY:0.1,rotation:-2.2,x:194.4,y:147.2},0).to({x:192.7,y:145.9},3).wait(9).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:192.2,y:145.8},0).wait(1).to({rotation:-2,x:191,y:146},0).wait(1).to({rotation:-1.7,x:188.7,y:146.2},0).wait(1).to({rotation:-1.2,x:185.4,y:146.6},0).wait(1).to({rotation:-0.7,x:181.7,y:147},0).wait(1).to({rotation:-0.3,x:178.7,y:147.4},0).wait(1).to({rotation:-0.1,x:177.1,y:147.5},0).wait(1).to({rotation:0,x:176.7,y:147.7},0).to({_off:true},21).wait(11).to({_off:false},0).to({startPosition:0},2).wait(17));

	// PEN2
	this.instance_11 = new lib.Tween19("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(39.9,157.7,1.754,1.754);

	this.instance_12 = new lib.Tween20("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(79.7,147.7);

	this.instance_13 = new lib.Tween4("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(79.7,147.7);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(76.9,150.4);
	this.instance_14._off = true;

	this.instance_15 = new lib.Tween2("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(80.8,140.5,1,1,15);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(79.7,147.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},17).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},16).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},5).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},9).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_13}]},21).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},2).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({startPosition:0},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:41.1,y:157.4},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:45.5,y:156.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:53.9,y:154.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:66.2,y:151},0).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(25).to({_off:false},0).to({_off:true,x:76.9,y:150.4},2).wait(106).to({_off:false,x:79.7,y:147.7},0).to({_off:true,x:76.9,y:150.4},2).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(25).to({_off:false},2).wait(1).to({rotation:2.9,x:77.7,y:148.5},0).wait(1).to({rotation:5.2,x:78.3,y:146.9},0).wait(1).to({rotation:7.9,x:78.9,y:145.2},0).to({_off:true},1).wait(102).to({_off:false,rotation:0,x:76.9,y:150.4},2).wait(1).to({rotation:2.9,x:77.7,y:148.5},0).wait(1).to({rotation:5.2,x:78.3,y:146.9},0).wait(1).to({rotation:7.9,x:78.9,y:145.2},0).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(31).to({_off:false},0).wait(1).to({rotation:14.4,x:80.7,y:140.8},0).wait(1).to({rotation:12.2,x:80.5,y:141.8},0).wait(1).to({rotation:8.4,x:80.2,y:143.6},0).wait(1).to({rotation:3.8,x:79.9,y:145.8},0).to({_off:true},1).wait(103).to({_off:false,rotation:15,x:80.8,y:140.5},0).wait(1).to({rotation:14.4,x:80.7,y:140.8},0).wait(1).to({rotation:12.2,x:80.5,y:141.8},0).wait(1).to({rotation:8.4,x:80.2,y:143.6},0).wait(1).to({rotation:3.8,x:79.9,y:145.8},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(36).to({_off:false},0).to({startPosition:0},2).wait(16).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:79.9},0).wait(1).to({rotation:-0.1,x:80.3},0).wait(1).to({rotation:-0.2,x:81,y:147.8},0).wait(1).to({rotation:-0.3,x:81.9,y:147.9},0).wait(1).to({rotation:-0.5,x:83.4,y:148.1},0).wait(1).to({rotation:-0.8,x:85.5,y:148.4},0).wait(1).to({rotation:-1.2,x:88.1,y:148.7},0).wait(1).to({rotation:-1.5,x:90.7,y:149},0).wait(1).to({rotation:-1.8,x:92.7,y:149.3},0).wait(1).to({rotation:-2,x:94,y:149.4},0).wait(1).to({rotation:-2.1,x:94.9,y:149.5},0).wait(1).to({rotation:-2.2,x:95.4,y:149.6},0).wait(1).to({x:95.7},0).wait(1).to({regX:0.1,regY:0.1,x:95.8,y:149.7},0).wait(5).to({startPosition:0},0).to({x:92.8,y:153.4},2).wait(1).to({regX:0,regY:0,rotation:-1,x:93.9,y:151.5},0).wait(1).to({rotation:-0.1,x:94.9,y:150.1},0).wait(1).to({rotation:1.1,x:96,y:148.4},0).wait(1).to({regX:0.1,regY:0.1,rotation:4,x:99,y:144.4},0).wait(1).to({regX:0,regY:0,rotation:3.6,x:98.5,y:144.8},0).wait(1).to({rotation:2.2,x:97.1,y:146.8},0).wait(1).to({rotation:-0.2,x:94.8,y:150.2},0).wait(1).to({regX:0.1,regY:0.1,rotation:-2.2,x:92.8,y:153.4},0).wait(1).to({regX:0,regY:0,rotation:-1,x:93.9,y:151.5},0).wait(1).to({rotation:-0.1,x:94.9,y:150.1},0).wait(1).to({rotation:1.1,x:96,y:148.4},0).wait(1).to({regX:0.1,regY:0.1,rotation:4,x:99,y:144.4},0).wait(1).to({regX:0,regY:0,rotation:3.6,x:98.5,y:144.9},0).wait(1).to({rotation:2.2,x:97.1,y:147},0).wait(1).to({rotation:-0.2,x:94.8,y:150.6},0).wait(1).to({rotation:-2.2,x:92.8,y:153.8},0).to({regX:0.1,regY:0.1,x:95.8,y:149.7},3).wait(9).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:95.3,y:149.6},0).wait(1).to({rotation:-2,x:94,y:149.4},0).wait(1).to({rotation:-1.7,x:91.7,y:149.1},0).wait(1).to({rotation:-1.2,x:88.4,y:148.7},0).wait(1).to({rotation:-0.7,x:84.7,y:148.2},0).wait(1).to({rotation:-0.3,x:81.8,y:147.9},0).wait(1).to({rotation:-0.1,x:80.1,y:147.7},0).wait(1).to({rotation:0,x:79.7},0).to({_off:true},21).wait(11).to({_off:false},0).to({startPosition:0},2).wait(17));

	// PEN3
	this.instance_17 = new lib.had();
	this.instance_17.parent = this;
	this.instance_17.setTransform(124.5,49,1.754,1.754,0,0,0,36.9,33.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({regX:36.8,scaleX:1.73,scaleY:1.73,x:124.4,y:50.2},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:124.8,y:54.2},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:125.5,y:61.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:126.6,y:73.3},0).wait(1).to({scaleX:1,scaleY:1,x:127.8,y:85.6},0).wait(17).to({regX:36.9,scaleX:1.1,x:128},2).wait(1).to({regX:36.8,scaleX:1.02,x:127.8},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.67,x:127.9},0).wait(1).to({scaleX:0.69,x:127.8},0).wait(1).to({scaleX:0.75,x:127.9},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.99},0).wait(1).to({regX:36.9,scaleX:1.1,x:128},0).to({regX:36.8,scaleX:1,x:127.8},2).wait(18).to({x:128},0).wait(1).to({rotation:-0.1,x:128.4},0).wait(1).to({rotation:-0.2,x:128.9},0).wait(1).to({rotation:-0.3,x:129.7},0).wait(1).to({rotation:-0.5,x:130.9},0).wait(1).to({rotation:-0.8,x:132.7,y:85.7},0).wait(1).to({rotation:-1.2,x:134.9},0).wait(1).to({rotation:-1.5,x:137.1},0).wait(1).to({rotation:-1.8,x:138.8},0).wait(1).to({rotation:-2,x:139.9},0).wait(1).to({rotation:-2.1,x:140.6},0).wait(1).to({rotation:-2.2,x:141},0).wait(1).to({x:141.2,y:85.6},0).wait(1).to({x:141.3,y:85.7},0).wait(5).to({regX:36.9,scaleX:1.13,x:141.5,y:85.6},2).wait(1).to({regX:36.8,scaleX:1.03,x:141.3},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.85,x:141.4},0).wait(1).to({regX:36.9,scaleX:0.61,x:141.5,y:85.7},0).wait(1).to({regX:36.8,scaleX:0.64,x:141.4,y:85.6},0).wait(1).to({scaleX:0.76,y:85.7},0).wait(1).to({scaleX:0.96,y:85.6},0).wait(1).to({regX:36.9,scaleX:1.13,x:141.5},0).wait(1).to({regX:36.8,scaleX:1.03,x:141.3},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.85,x:141.4},0).wait(1).to({regX:36.9,scaleX:0.61,x:141.5,y:85.7},0).wait(1).to({regX:36.8,scaleX:0.65,x:141.4,y:85.6},0).wait(1).to({scaleX:0.77,y:85.7},0).wait(1).to({scaleX:0.98,x:141.3},0).wait(1).to({regY:33.5,scaleX:1.16,y:85.6},0).to({regY:33.6,scaleX:1,y:85.7},3).wait(10).to({x:141},0).wait(1).to({rotation:-2,x:140},0).wait(1).to({rotation:-1.7,x:138.1},0).wait(1).to({rotation:-1.2,x:135.2,y:85.6},0).wait(1).to({rotation:-0.7,x:132.1},0).wait(1).to({rotation:-0.3,x:129.7},0).wait(1).to({rotation:-0.1,x:128.2},0).wait(1).to({rotation:0,x:127.8},0).wait(21).to({regX:36.9,scaleX:1.1,x:128},2).wait(1).to({regX:36.8,scaleX:1.02,x:127.8},0).wait(1).to({scaleX:0.95},0).wait(1).to({scaleX:0.87},0).wait(1).to({scaleX:0.67,x:127.9},0).wait(1).to({scaleX:0.69,x:127.8},0).wait(1).to({scaleX:0.75,x:127.9},0).wait(1).to({scaleX:0.86},0).wait(1).to({scaleX:0.99},0).wait(1).to({regX:36.9,scaleX:1.1,x:128},0).to({regX:36.8,scaleX:1,x:127.8},2).wait(17));

	// COIN5
	this.instance_18 = new lib.Tween21("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(123.5,183.5,1.754,1.754);

	this.instance_19 = new lib.Tween22("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(127.3,162.3);

	this.instance_20 = new lib.Tween11("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(127.3,162.3);
	this.instance_20._off = true;

	this.instance_21 = new lib.Tween12("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(143.9,162.5,1,1,-2.2,0,0,0.1,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_18}]},3).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},46).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},3).to({state:[{t:this.instance_21}]},9).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_19}]},21).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({startPosition:0},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:123.6,y:182.8},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:124,y:180.4},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:124.8,y:176},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:126,y:169.4},0).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(54).to({_off:false},0).wait(1).to({x:127.4},0).wait(1).to({x:127.6},0).wait(1).to({rotation:-0.1,x:128},0).wait(1).to({rotation:-0.2,x:128.6},0).wait(1).to({rotation:-0.3,x:129.7},0).wait(1).to({rotation:-0.5,x:131.1},0).wait(1).to({rotation:-0.8,x:133.3,y:162.4},0).wait(1).to({rotation:-1.2,x:136},0).wait(1).to({rotation:-1.5,x:138.6},0).wait(1).to({rotation:-1.8,x:140.7},0).wait(1).to({rotation:-2,x:142.1},0).wait(1).to({rotation:-2.1,x:143},0).wait(1).to({rotation:-2.2,x:143.5},0).wait(1).to({x:143.8},0).to({_off:true},1).wait(43).to({_off:false,rotation:0,x:127.3,y:162.3},0).to({_off:true},21).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(69).to({_off:false},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:143.4,y:162.3},0).wait(1).to({rotation:-2,x:142.2},0).wait(1).to({rotation:-1.7,x:139.8},0).wait(1).to({rotation:-1.2,x:136.4},0).wait(1).to({rotation:-0.7,x:132.6,y:162.2},0).wait(1).to({rotation:-0.3,x:129.5},0).wait(1).to({rotation:-0.1,x:127.8},0).to({_off:true},1).wait(51));

	// NOSE2
	this.instance_22 = new lib.left_eye();
	this.instance_22.parent = this;
	this.instance_22.setTransform(123.6,183.5,1.754,1.754,0,0,0,54.4,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(4).to({regX:35.9,regY:85.4,scaleX:1.73,scaleY:1.73,x:91.7,y:207.1},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:93.7,y:203.6},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:97.4,y:196.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:102.9,y:187.1},0).wait(1).to({regX:54.3,regY:71.3,scaleX:1,scaleY:1,x:127.3,y:162.3},0).wait(17).to({regY:71.4,rotation:-3.2,y:162.4},2).wait(1).to({regX:35.9,regY:85.4,rotation:-0.8,x:109.1,y:176.6},0).wait(1).to({rotation:1.1,x:108.7,y:176},0).wait(1).to({rotation:3.3,x:108.2,y:175.3},0).wait(1).to({regX:54.4,regY:71.3,rotation:9.2,x:127.4,y:162.3},0).wait(1).to({regX:35.9,regY:85.4,rotation:8.7,x:107,y:173.4},0).wait(1).to({rotation:6.9,x:107.4,y:174.1},0).wait(1).to({rotation:3.8,x:108,y:175.1},0).wait(1).to({rotation:-0.1,x:108.9,y:176.4},0).wait(1).to({regX:54.3,regY:71.4,rotation:-3.2,x:127.3,y:162.4},0).to({regY:71.3,rotation:0,y:162.3},2).wait(17).to({regX:35.9,regY:85.4,x:109,y:176.4},0).wait(1).to({x:109.2},0).wait(1).to({rotation:-0.1,x:109.6},0).wait(1).to({rotation:-0.2,x:110.3,y:176.5},0).wait(1).to({rotation:-0.3,x:111.4},0).wait(1).to({rotation:-0.5,x:112.9,y:176.6},0).wait(1).to({rotation:-0.8,x:115.1,y:176.7},0).wait(1).to({rotation:-1.2,x:117.9,y:176.9},0).wait(1).to({rotation:-1.5,x:120.6,y:177},0).wait(1).to({rotation:-1.8,x:122.8,y:177.1},0).wait(1).to({rotation:-2,x:124.2,y:177.2},0).wait(1).to({rotation:-2.1,x:125.1},0).wait(1).to({rotation:-2.2,x:125.6,y:177.3},0).wait(1).to({x:125.9},0).wait(1).to({regX:54.4,regY:71.4,x:143.9,y:162.5},0).wait(5).to({rotation:-6.7,x:144},2).wait(1).to({regX:35.9,regY:85.4,rotation:-4.3,x:126.5,y:177.8},0).wait(1).to({rotation:-2.4,x:126,y:177.3},0).wait(1).to({rotation:0,x:125.4,y:176.5},0).wait(1).to({regX:54.4,regY:71.4,rotation:5.7,x:143.9,y:162.5},0).wait(1).to({regX:35.9,regY:85.4,rotation:4.9,x:124.2,y:174.9},0).wait(1).to({rotation:2.1,x:124.9,y:175.8},0).wait(1).to({rotation:-2.6,x:126,y:177.3},0).wait(1).to({regX:54.4,regY:71.4,rotation:-6.7,x:144,y:162.5},0).wait(1).to({regX:35.9,regY:85.4,rotation:-4.3,x:126.5,y:177.8},0).wait(1).to({rotation:-2.4,x:126,y:177.3},0).wait(1).to({rotation:0,x:125.4,y:176.5},0).wait(1).to({regX:54.4,regY:71.4,rotation:5.7,x:143.9,y:162.5},0).wait(1).to({regX:35.9,regY:85.4,rotation:4.9,x:124.2,y:174.9},0).wait(1).to({rotation:1.9,x:124.9,y:175.9},0).wait(1).to({rotation:-3.1,x:126.1,y:177.5},0).wait(1).to({regX:54.3,regY:71.4,rotation:-7.5,x:143.9,y:162.6},0).to({regX:54.4,rotation:-2.2,y:162.5},3).wait(10).to({regX:35.9,regY:85.4,x:125.5,y:177.2},0).wait(1).to({rotation:-2,x:124.3,y:177.1},0).wait(1).to({rotation:-1.7,x:121.8,y:177},0).wait(1).to({rotation:-1.2,x:118.3,y:176.8},0).wait(1).to({rotation:-0.7,x:114.3,y:176.6},0).wait(1).to({rotation:-0.3,x:111.2,y:176.4},0).wait(1).to({rotation:-0.1,x:109.4,y:176.3},0).wait(1).to({regX:54.3,regY:71.3,rotation:0,x:127.3,y:162.3},0).wait(21).to({regY:71.4,rotation:-3.2,y:162.4},2).wait(1).to({regX:35.9,regY:85.4,rotation:-0.8,x:109.1,y:176.6},0).wait(1).to({rotation:1.1,x:108.7,y:176},0).wait(1).to({rotation:3.3,x:108.2,y:175.3},0).wait(1).to({regX:54.4,regY:71.3,rotation:9.2,x:127.4,y:162.3},0).wait(1).to({regX:35.9,regY:85.4,rotation:8.7,x:107,y:173.4},0).wait(1).to({rotation:6.9,x:107.4,y:174.1},0).wait(1).to({rotation:3.8,x:108,y:175.1},0).wait(1).to({rotation:-0.1,x:108.9,y:176.4},0).wait(1).to({regX:54.3,regY:71.4,rotation:-3.2,x:127.3,y:162.4},0).to({regY:71.3,rotation:0,y:162.3},2).wait(17));

	// NOSE3
	this.instance_23 = new lib.right_eye();
	this.instance_23.parent = this;
	this.instance_23.setTransform(123.6,183.5,1.754,1.754,0,0,0,18.4,71.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(4).to({regX:36.5,regY:85.9,scaleX:1.73,scaleY:1.73,x:155.1,y:208},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:154,y:204.4},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:151.8,y:197.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:148.8,y:187.7},0).wait(1).to({regX:18.3,regY:71.3,scaleX:1,scaleY:1,x:127.3,y:162.3},0).wait(17).to({regX:18.4,rotation:4.2,x:127.4},2).wait(1).to({regX:36.5,regY:85.9,rotation:1.6,x:145.1,y:177.4},0).wait(1).to({rotation:-0.5,x:145.6,y:176.8},0).wait(1).to({rotation:-2.9,x:146.2,y:176},0).wait(1).to({regX:18.4,regY:71.3,rotation:-9.2,x:127.4,y:162.3},0).wait(1).to({regX:36.5,regY:85.9,rotation:-8.7,x:147.5,y:174},0).wait(1).to({rotation:-6.8,x:147.1,y:174.6},0).wait(1).to({rotation:-3.4,x:146.3,y:175.8},0).wait(1).to({rotation:0.8,x:145.3,y:177.1},0).wait(1).to({regX:18.4,regY:71.3,rotation:4.2,x:127.4,y:162.3},0).to({regX:18.3,rotation:0,x:127.3},2).wait(17).to({regX:36.5,regY:85.9,x:145.6,y:176.9},0).wait(1).to({x:145.8},0).wait(1).to({rotation:-0.1,x:146.2},0).wait(1).to({rotation:-0.2,x:146.9},0).wait(1).to({rotation:-0.3,x:148,y:176.8},0).wait(1).to({rotation:-0.5,x:149.5,y:176.7},0).wait(1).to({rotation:-0.8,x:151.7},0).wait(1).to({rotation:-1.2,x:154.4,y:176.6},0).wait(1).to({rotation:-1.5,x:157.2,y:176.5},0).wait(1).to({rotation:-1.8,x:159.3,y:176.4},0).wait(1).to({rotation:-2,x:160.8,y:176.3},0).wait(1).to({rotation:-2.1,x:161.7},0).wait(1).to({rotation:-2.2,x:162.2},0).wait(1).to({x:162.5},0).wait(1).to({regX:18.4,regY:71.4,x:143.9,y:162.5},0).wait(5).to({rotation:1.7},2).wait(1).to({regX:36.5,regY:85.9,rotation:-1,x:162.3,y:176.7},0).wait(1).to({rotation:-3.2,x:162.8,y:175.9},0).wait(1).to({rotation:-5.9,x:163.4,y:175},0).wait(1).to({regX:18.4,regY:71.4,rotation:-12.5,x:143.9,y:162.5},0).wait(1).to({regX:36.5,regY:85.9,rotation:-11.5,x:164.5,y:173},0).wait(1).to({rotation:-8.3,x:163.9,y:174.2},0).wait(1).to({rotation:-3,x:162.7,y:176},0).wait(1).to({regX:18.4,regY:71.4,rotation:1.7,x:143.9,y:162.5},0).wait(1).to({regX:36.5,regY:85.9,rotation:-1,x:162.3,y:176.7},0).wait(1).to({rotation:-3.2,x:162.8,y:175.9},0).wait(1).to({rotation:-5.9,x:163.4,y:175},0).wait(1).to({regX:18.4,regY:71.4,rotation:-12.5,x:143.9,y:162.5},0).wait(1).to({regX:36.5,regY:85.9,rotation:-11.5,x:164.5,y:173},0).wait(1).to({rotation:-8.3,x:163.9,y:174.2},0).wait(1).to({rotation:-3,x:162.7,y:176},0).wait(1).to({regX:18.4,regY:71.4,rotation:1.7,x:143.9,y:162.5},0).to({rotation:-2.2},3).wait(10).to({regX:36.5,regY:85.9,x:162.1,y:176.3},0).wait(1).to({rotation:-2,x:160.9},0).wait(1).to({rotation:-1.7,x:158.4,y:176.4},0).wait(1).to({rotation:-1.2,x:154.9,y:176.5},0).wait(1).to({rotation:-0.7,x:151,y:176.7},0).wait(1).to({rotation:-0.3,x:147.8,y:176.8},0).wait(1).to({rotation:-0.1,x:146},0).wait(1).to({regX:18.3,regY:71.3,rotation:0,x:127.3,y:162.3},0).wait(21).to({regX:18.4,rotation:4.2,x:127.4},2).wait(1).to({regX:36.5,regY:85.9,rotation:1.6,x:145.1,y:177.4},0).wait(1).to({rotation:-0.5,x:145.6,y:176.8},0).wait(1).to({rotation:-2.9,x:146.2,y:176},0).wait(1).to({regX:18.4,regY:71.3,rotation:-9.2,x:127.4,y:162.3},0).wait(1).to({regX:36.5,regY:85.9,rotation:-8.7,x:147.5,y:174},0).wait(1).to({rotation:-6.8,x:147.1,y:174.6},0).wait(1).to({rotation:-3.4,x:146.3,y:175.8},0).wait(1).to({rotation:0.8,x:145.3,y:177.1},0).wait(1).to({regX:18.4,regY:71.3,rotation:4.2,x:127.4,y:162.3},0).to({regX:18.3,rotation:0,x:127.3},2).wait(17));

	// COIN4
	this.instance_24 = new lib.Tween23("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(123.3,127.2,1.754,1.754);

	this.instance_25 = new lib.Tween24("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(127.2,130.2);

	this.instance_26 = new lib.Tween13("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(127.2,130.2);
	this.instance_26._off = true;

	this.instance_27 = new lib.Tween14("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(142.5,130.3,1,1,-2.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[{t:this.instance_24}]},3).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},46).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},35).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(3).to({startPosition:0},0).wait(1).to({scaleX:1.73,scaleY:1.73,x:123.4},0).wait(1).to({scaleX:1.65,scaleY:1.65,x:123.8,y:127.6},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:124.6,y:128.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:125.8,y:129.1},0).to({_off:true},1).wait(155));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(54).to({_off:false},0).wait(1).to({x:127.3},0).wait(1).to({x:127.5},0).wait(1).to({rotation:-0.1,x:127.8},0).wait(1).to({rotation:-0.2,x:128.4},0).wait(1).to({rotation:-0.3,x:129.4},0).wait(1).to({rotation:-0.5,x:130.8},0).wait(1).to({rotation:-0.8,x:132.7,y:130.3},0).wait(1).to({rotation:-1.2,x:135.2},0).wait(1).to({rotation:-1.5,x:137.7},0).wait(1).to({rotation:-1.8,x:139.6},0).wait(1).to({rotation:-2,x:140.9},0).wait(1).to({rotation:-2.1,x:141.7},0).wait(1).to({rotation:-2.2,x:142.2},0).wait(1).to({x:142.4},0).to({_off:true},1).wait(43).to({_off:false,rotation:0,x:127.2,y:130.2},0).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(69).to({_off:false},0).wait(35).to({startPosition:0},0).wait(1).to({x:142.1},0).wait(1).to({rotation:-2,x:140.9},0).wait(1).to({rotation:-1.7,x:138.7},0).wait(1).to({rotation:-1.2,x:135.6,y:130.2},0).wait(1).to({rotation:-0.7,x:132.1},0).wait(1).to({rotation:-0.3,x:129.2},0).wait(1).to({rotation:-0.1,x:127.6},0).to({_off:true},1).wait(51));

	// TAIL1
	this.instance_28 = new lib.Tween25("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(94.5,291.3);

	this.instance_29 = new lib.Tween26("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(102.4,289.5,1,1,-14.4,0,0,0,0.1);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.9,x:95,y:291.2},0).wait(1).to({rotation:-1.8,x:95.4,y:291.1},0).wait(1).to({rotation:-2.6,x:95.9,y:291},0).wait(1).to({rotation:-3.3,x:96.3,y:290.9},0).wait(1).to({rotation:-4,x:96.7,y:290.8},0).wait(1).to({rotation:-4.7,x:97,y:290.7},0).wait(1).to({rotation:-5.2,x:97.3,y:290.6},0).wait(1).to({rotation:-5.8,x:97.6},0).wait(1).to({rotation:-6.3,x:97.9,y:290.5},0).wait(1).to({rotation:-6.8,x:98.2,y:290.4},0).wait(1).to({rotation:-7.3,x:98.4},0).wait(1).to({rotation:-7.7,x:98.7,y:290.3},0).wait(1).to({rotation:-8.1,x:98.9},0).wait(1).to({rotation:-8.5,x:99.1,y:290.2},0).wait(1).to({rotation:-8.9,x:99.3},0).wait(1).to({rotation:-9.2,x:99.5,y:290.1},0).wait(1).to({rotation:-9.6,x:99.7},0).wait(1).to({rotation:-9.9,x:99.9},0).wait(1).to({rotation:-10.2,x:100,y:290},0).wait(1).to({rotation:-10.4,x:100.2},0).wait(1).to({rotation:-10.7,x:100.3},0).wait(1).to({rotation:-11,x:100.5,y:289.9},0).wait(1).to({rotation:-11.2,x:100.6},0).wait(1).to({rotation:-11.4,x:100.7},0).wait(1).to({rotation:-11.6,x:100.8,y:289.8},0).wait(1).to({rotation:-11.9,x:101},0).wait(1).to({rotation:-12,x:101.1},0).wait(1).to({rotation:-12.2,x:101.2},0).wait(1).to({rotation:-12.4,x:101.3},0).wait(1).to({rotation:-12.6,x:101.4,y:289.7},0).wait(1).to({rotation:-12.7},0).wait(1).to({rotation:-12.9,x:101.5},0).wait(1).to({rotation:-13,x:101.6},0).wait(1).to({rotation:-13.1,x:101.7},0).wait(1).to({rotation:-13.3,y:289.6},0).wait(1).to({rotation:-13.4,x:101.8},0).wait(1).to({rotation:-13.5,x:101.9},0).wait(1).to({rotation:-13.6},0).wait(1).to({rotation:-13.7,x:102},0).wait(1).to({rotation:-13.8},0).wait(1).to({rotation:-13.9,x:102.1},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14},0).wait(1).to({rotation:-14.1,x:102.2,y:289.5},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.2},0).wait(1).to({x:102.3},0).wait(1).to({rotation:-14.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:102.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(70).to({_off:false,rotation:0,x:94.5,y:291.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-0.2,x:94.6},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.5,x:94.7,y:291.2},0).wait(1).to({rotation:-0.7,x:94.9},0).wait(1).to({rotation:-1,x:95},0).wait(1).to({rotation:-1.4,x:95.2,y:291.1},0).wait(1).to({rotation:-1.8,x:95.4},0).wait(1).to({rotation:-2.3,x:95.7,y:291},0).wait(1).to({rotation:-2.8,x:96,y:290.9},0).wait(1).to({rotation:-3.5,x:96.4},0).wait(1).to({rotation:-4.4,x:96.8,y:290.8},0).wait(1).to({rotation:-5.3,x:97.4,y:290.6},0).wait(1).to({rotation:-6.4,x:97.9,y:290.5},0).wait(1).to({rotation:-7.5,x:98.6,y:290.4},0).wait(1).to({rotation:-8.6,x:99.2,y:290.2},0).wait(1).to({rotation:-9.7,x:99.8,y:290.1},0).wait(1).to({rotation:-10.6,x:100.3,y:290},0).wait(1).to({rotation:-11.4,x:100.7,y:289.9},0).wait(1).to({rotation:-12.1,x:101.1,y:289.8},0).wait(1).to({rotation:-12.6,x:101.4,y:289.7},0).wait(1).to({rotation:-13.1,x:101.6},0).wait(1).to({rotation:-13.5,x:101.8,y:289.6},0).wait(1).to({rotation:-13.8,x:102},0).wait(1).to({rotation:-14,x:102.1},0).wait(1).to({rotation:-14.2,x:102.2,y:289.5},0).wait(1).to({rotation:-14.3,x:102.3},0).wait(1).to({rotation:-14.4},0).wait(1).to({x:102.4},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(60).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,x:102.3,y:289.4},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.2,y:289.5},0).wait(1).to({rotation:-14.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0.1,rotation:-14,y:289.6},0).wait(1).to({regY:0,rotation:-13.5,x:101.9},0).wait(1).to({rotation:-12.9,x:101.6},0).wait(1).to({rotation:-12.3,x:101.3,y:289.7},0).wait(1).to({rotation:-11.7,x:101,y:289.8},0).wait(1).to({rotation:-11.1,x:100.6,y:289.9},0).wait(1).to({rotation:-10.5,x:100.3},0).wait(1).to({rotation:-10,x:100,y:290},0).wait(1).to({rotation:-9.4,x:99.7,y:290.1},0).wait(1).to({rotation:-8.9,x:99.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.3,x:99.1,y:290.2},0).wait(1).to({rotation:-7.8,x:98.8,y:290.3},0).wait(1).to({rotation:-7.3,x:98.5},0).wait(1).to({rotation:-6.8,x:98.2,y:290.4},0).wait(1).to({rotation:-6.4,x:98},0).wait(1).to({rotation:-5.9,x:97.7,y:290.5},0).wait(1).to({rotation:-5.5,x:97.5},0).wait(1).to({rotation:-5.1,x:97.3,y:290.6},0).wait(1).to({rotation:-4.8,x:97.1},0).wait(1).to({rotation:-4.4,x:96.9,y:290.7},0).wait(1).to({rotation:-4.1,x:96.7},0).wait(1).to({rotation:-3.8,x:96.6},0).wait(1).to({rotation:-3.5,x:96.4,y:290.8},0).wait(1).to({rotation:-3.3,x:96.3},0).wait(1).to({rotation:-3,x:96.1},0).wait(1).to({rotation:-2.8,x:96,y:290.9},0).wait(1).to({rotation:-2.6,x:95.9},0).wait(1).to({rotation:-2.4,x:95.8},0).wait(1).to({rotation:-2.2,x:95.7},0).wait(1).to({rotation:-2,x:95.6,y:291},0).wait(1).to({rotation:-1.8,x:95.5},0).wait(1).to({rotation:-1.7,x:95.4},0).wait(1).to({rotation:-1.5,x:95.3},0).wait(1).to({rotation:-1.4,x:95.2},0).wait(1).to({rotation:-1.3,x:95.1},0).wait(1).to({rotation:-1.1,y:291.1},0).wait(1).to({rotation:-1,x:95},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.8,x:94.9},0).wait(1).to({rotation:-0.7},0).wait(1).to({x:94.8},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.5,x:94.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.4,y:291.2},0).wait(1).to({rotation:-0.3,x:94.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.2},0).wait(1).to({x:94.5},0).wait(1).to({rotation:-0.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(32).to({_off:false,regY:0.1,rotation:-14.4,x:102.4,y:289.5},0).wait(1));

	// TAIL2
	this.instance_30 = new lib.Tween27("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(82.8,297.1);

	this.instance_31 = new lib.Tween28("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(92.5,298,1,1,-14.4,0,0,0,0.1);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.9,x:83.4,y:297.2},0).wait(1).to({rotation:-1.8,x:84},0).wait(1).to({rotation:-2.6,x:84.5,y:297.3},0).wait(1).to({rotation:-3.3,x:85},0).wait(1).to({rotation:-4,x:85.5},0).wait(1).to({rotation:-4.7,x:85.9,y:297.4},0).wait(1).to({rotation:-5.2,x:86.3},0).wait(1).to({rotation:-5.8,x:86.7,y:297.5},0).wait(1).to({rotation:-6.3,x:87},0).wait(1).to({rotation:-6.8,x:87.3},0).wait(1).to({rotation:-7.3,x:87.7,y:297.6},0).wait(1).to({rotation:-7.7,x:87.9},0).wait(1).to({rotation:-8.1,x:88.2},0).wait(1).to({rotation:-8.5,x:88.5},0).wait(1).to({rotation:-8.9,x:88.7,y:297.7},0).wait(1).to({rotation:-9.2,x:89},0).wait(1).to({rotation:-9.6,x:89.2},0).wait(1).to({rotation:-9.9,x:89.4},0).wait(1).to({rotation:-10.2,x:89.6},0).wait(1).to({rotation:-10.4,x:89.8},0).wait(1).to({rotation:-10.7,x:90,y:297.8},0).wait(1).to({rotation:-11,x:90.1},0).wait(1).to({rotation:-11.2,x:90.3},0).wait(1).to({rotation:-11.4,x:90.5},0).wait(1).to({rotation:-11.6,x:90.6},0).wait(1).to({rotation:-11.9,x:90.7},0).wait(1).to({rotation:-12,x:90.9},0).wait(1).to({rotation:-12.2,x:91,y:297.9},0).wait(1).to({rotation:-12.4,x:91.1},0).wait(1).to({rotation:-12.6,x:91.2},0).wait(1).to({rotation:-12.7,x:91.3},0).wait(1).to({rotation:-12.9,x:91.4},0).wait(1).to({rotation:-13,x:91.5},0).wait(1).to({rotation:-13.1,x:91.6},0).wait(1).to({rotation:-13.3,x:91.7},0).wait(1).to({rotation:-13.4,x:91.8},0).wait(1).to({rotation:-13.5},0).wait(1).to({rotation:-13.6,x:91.9},0).wait(1).to({rotation:-13.7,x:92,y:298},0).wait(1).to({rotation:-13.8},0).wait(1).to({rotation:-13.9,x:92.1},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14,x:92.2},0).wait(1).to({rotation:-14.1},0).wait(1).to({x:92.3},0).wait(1).to({rotation:-14.2},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.3,x:92.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:92.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(70).to({_off:false,rotation:0,x:82.8,y:297.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-0.2,x:82.9},0).wait(1).to({rotation:-0.4,x:83},0).wait(1).to({rotation:-0.5,x:83.1},0).wait(1).to({rotation:-0.7,x:83.3},0).wait(1).to({rotation:-1,x:83.4,y:297.2},0).wait(1).to({rotation:-1.4,x:83.7},0).wait(1).to({rotation:-1.8,x:83.9},0).wait(1).to({rotation:-2.3,x:84.3},0).wait(1).to({rotation:-2.8,x:84.7,y:297.3},0).wait(1).to({rotation:-3.5,x:85.1},0).wait(1).to({rotation:-4.4,x:85.7,y:297.4},0).wait(1).to({rotation:-5.3,x:86.3},0).wait(1).to({rotation:-6.4,x:87,y:297.5},0).wait(1).to({rotation:-7.5,x:87.8,y:297.6},0).wait(1).to({rotation:-8.6,x:88.6},0).wait(1).to({rotation:-9.7,x:89.3,y:297.7},0).wait(1).to({rotation:-10.6,x:89.9,y:297.8},0).wait(1).to({rotation:-11.4,x:90.4},0).wait(1).to({rotation:-12.1,x:90.9,y:297.9},0).wait(1).to({rotation:-12.6,x:91.3},0).wait(1).to({rotation:-13.1,x:91.6},0).wait(1).to({rotation:-13.5,x:91.8},0).wait(1).to({rotation:-13.8,x:92,y:298},0).wait(1).to({rotation:-14,x:92.2},0).wait(1).to({rotation:-14.2,x:92.3},0).wait(1).to({rotation:-14.3,x:92.4},0).wait(1).to({rotation:-14.4},0).wait(1).to({x:92.5},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(60).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,x:92.4,y:297.9},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-14.3},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.2,x:92.3},0).wait(1).to({rotation:-14.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0.1,rotation:-14,y:298},0).wait(1).to({regY:0,rotation:-13.5,x:91.9,y:297.8},0).wait(1).to({rotation:-12.9,x:91.5},0).wait(1).to({rotation:-12.3,x:91.1,y:297.7},0).wait(1).to({rotation:-11.7,x:90.7},0).wait(1).to({rotation:-11.1,x:90.3},0).wait(1).to({rotation:-10.5,x:89.9,y:297.6},0).wait(1).to({rotation:-10,x:89.5},0).wait(1).to({rotation:-9.4,x:89.1},0).wait(1).to({rotation:-8.9,x:88.7,y:297.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.3,x:88.4},0).wait(1).to({rotation:-7.8,x:88,y:297.4},0).wait(1).to({rotation:-7.3,x:87.7},0).wait(1).to({rotation:-6.8,x:87.4},0).wait(1).to({rotation:-6.4,x:87.1},0).wait(1).to({rotation:-5.9,x:86.8,y:297.3},0).wait(1).to({rotation:-5.5,x:86.5},0).wait(1).to({rotation:-5.1,x:86.2},0).wait(1).to({rotation:-4.8,x:86},0).wait(1).to({rotation:-4.4,x:85.7,y:297.2},0).wait(1).to({rotation:-4.1,x:85.5},0).wait(1).to({rotation:-3.8,x:85.3},0).wait(1).to({rotation:-3.5,x:85.1},0).wait(1).to({rotation:-3.3,x:85},0).wait(1).to({rotation:-3,x:84.8,y:297.1},0).wait(1).to({rotation:-2.8,x:84.6},0).wait(1).to({rotation:-2.6,x:84.5},0).wait(1).to({rotation:-2.4,x:84.3},0).wait(1).to({rotation:-2.2,x:84.2},0).wait(1).to({rotation:-2,x:84.1},0).wait(1).to({rotation:-1.8,x:84},0).wait(1).to({rotation:-1.7,x:83.9},0).wait(1).to({rotation:-1.5,x:83.8,y:297},0).wait(1).to({rotation:-1.4,x:83.7},0).wait(1).to({rotation:-1.3,x:83.6},0).wait(1).to({rotation:-1.1,x:83.5},0).wait(1).to({rotation:-1,x:83.4},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-0.8,x:83.3},0).wait(1).to({rotation:-0.7},0).wait(1).to({x:83.2},0).wait(1).to({rotation:-0.6,x:83.1},0).wait(1).to({rotation:-0.5},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.4,x:83},0).wait(1).to({rotation:-0.3},0).wait(1).to({startPosition:0},0).wait(1).to({x:82.9},0).wait(1).to({rotation:-0.2},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-0.1,x:82.8},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(32).to({_off:false,regY:0.1,rotation:-14.4,x:92.5,y:298},0).wait(1));

	// Layer 2
	this.instance_32 = new lib.body_2();
	this.instance_32.parent = this;
	this.instance_32.setTransform(150.3,290.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(4).to({skewX:1.7,skewY:1.3,x:150.5,y:290.2},0).wait(1).to({scaleX:1,skewX:3.2,skewY:2.5,x:150.8,y:289.9},0).wait(1).to({skewX:4.7,skewY:3.6,x:151,y:289.6},0).wait(1).to({skewX:6,skewY:4.7,x:151.2,y:289.3},0).wait(1).to({skewX:7.2,skewY:5.6,x:151.4,y:289.1},0).wait(1).to({scaleX:1,skewX:8.4,skewY:6.5,x:151.6,y:288.8},0).wait(1).to({skewX:9.4,skewY:7.3,x:151.7,y:288.6},0).wait(1).to({skewX:10.4,skewY:8.1,x:151.9,y:288.4},0).wait(1).to({skewX:11.4,skewY:8.8,x:152,y:288.2},0).wait(1).to({skewX:12.2,skewY:9.5,x:152.2,y:288},0).wait(1).to({scaleX:1,skewX:13.1,skewY:10.2,x:152.3,y:287.9},0).wait(1).to({skewX:13.9,skewY:10.8,x:152.4,y:287.7},0).wait(1).to({skewX:14.6,skewY:11.4,x:152.5,y:287.5},0).wait(1).to({skewX:15.3,skewY:11.9,x:152.7,y:287.4},0).wait(1).to({skewX:15.9,skewY:12.4,x:152.8,y:287.3},0).wait(1).to({skewX:16.6,skewY:12.9,x:152.9,y:287.1},0).wait(1).to({skewX:17.2,skewY:13.4,y:287},0).wait(1).to({skewX:17.7,skewY:13.8,x:153,y:286.9},0).wait(1).to({scaleX:1,skewX:18.3,skewY:14.2,x:153.1,y:286.8},0).wait(1).to({skewX:18.8,skewY:14.6,x:153.2,y:286.7},0).wait(1).to({skewX:19.2,skewY:15,x:153.3,y:286.6},0).wait(1).to({skewX:19.7,skewY:15.3,y:286.5},0).wait(1).to({skewX:20.1,skewY:15.7,x:153.4,y:286.4},0).wait(1).to({skewX:20.5,skewY:16,x:153.5,y:286.3},0).wait(1).to({skewX:20.9,skewY:16.3,y:286.2},0).wait(1).to({skewX:21.3,skewY:16.6,x:153.6,y:286.1},0).wait(1).to({skewX:21.6,skewY:16.9},0).wait(1).to({skewX:22,skewY:17.1,x:153.7,y:286},0).wait(1).to({skewX:22.3,skewY:17.4,x:153.8,y:285.9},0).wait(1).to({skewX:22.6,skewY:17.6},0).wait(1).to({skewX:22.9,skewY:17.8,y:285.8},0).wait(1).to({skewX:23.1,skewY:18,x:153.9,y:285.7},0).wait(1).to({scaleX:1,skewX:23.4,skewY:18.2},0).wait(1).to({skewX:23.6,skewY:18.4,x:154,y:285.6},0).wait(1).to({skewX:23.8,skewY:18.6},0).wait(1).to({skewX:24,skewY:18.7},0).wait(1).to({skewX:24.2,skewY:18.9,x:154.1,y:285.5},0).wait(1).to({skewX:24.4,skewY:19},0).wait(1).to({skewX:24.6,skewY:19.1,y:285.4},0).wait(1).to({skewX:24.7,skewY:19.3},0).wait(1).to({skewX:24.9,skewY:19.4,x:154.2},0).wait(1).to({skewX:25,skewY:19.5,y:285.3},0).wait(1).to({skewX:25.1,skewY:19.6},0).wait(1).to({skewX:25.3,skewY:19.7},0).wait(1).to({skewX:25.4},0).wait(1).to({skewX:25.5,skewY:19.8},0).wait(1).to({skewY:19.9,x:154.3,y:285.2},0).wait(1).to({skewX:25.6},0).wait(1).to({skewX:25.7,skewY:20},0).wait(2).to({skewX:25.8,skewY:20.1},0).wait(2).to({skewX:25.9},0).wait(1).to({skewY:20.2},0).wait(3).to({regX:0.2,regY:0.1,x:154.4,y:285.1},0).wait(2).to({regX:0,regY:0,x:154.2,y:285},0).wait(1).to({x:154.3,y:285.1},0).wait(1).to({skewX:25.8,skewY:20.1,x:154.5,y:285.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:25.6,skewY:20,x:154.7,y:285.4},0).wait(1).to({skewX:25.5,x:154.9,y:285.5},0).wait(1).to({skewX:25.4,skewY:19.9,x:155.1,y:285.7},0).wait(1).to({scaleX:1,x:155.2,y:285.8},0).wait(1).to({skewX:25.3,x:155.3},0).wait(1).to({regX:0.1,regY:0.1,x:155.4,y:286.1},0).wait(1).to({regX:0,regY:0,skewX:24.3,skewY:19.1,x:155.1,y:286},0).wait(1).to({skewX:23.2,skewY:18.2,x:154.9,y:286.2},0).wait(1).to({skewX:22.2,skewY:17.4,x:154.7,y:286.3},0).wait(1).to({skewX:21.1,skewY:16.6,x:154.4,y:286.5},0).wait(1).to({skewX:20.1,skewY:15.8,x:154.2,y:286.6},0).wait(1).to({scaleX:1,skewX:19,skewY:14.9,x:154,y:286.7},0).wait(1).to({skewX:18,skewY:14.1,x:153.7,y:286.9},0).wait(1).to({skewX:17,skewY:13.3,x:153.5,y:287},0).wait(1).to({skewX:16,skewY:12.5,x:153.3,y:287.2},0).wait(1).to({skewX:15,skewY:11.8,x:153.1,y:287.3},0).wait(1).to({skewX:14.1,skewY:11,x:152.9,y:287.4},0).wait(1).to({skewX:13.1,skewY:10.3,x:152.7,y:287.5},0).wait(1).to({skewX:12.3,skewY:9.6,x:152.5,y:287.6},0).wait(1).to({scaleX:1,skewX:11.5,skewY:9,x:152.3,y:287.8},0).wait(1).to({skewX:10.7,skewY:8.4,x:152.1,y:287.9},0).wait(1).to({skewX:9.9,skewY:7.8,x:152,y:288},0).wait(1).to({scaleY:1,skewX:9.3,skewY:7.3,x:151.8,y:288.1},0).wait(1).to({skewX:8.6,skewY:6.7,x:151.7},0).wait(1).to({skewX:8,skewY:6.3,x:151.5,y:288.2},0).wait(1).to({skewX:7.4,skewY:5.8,x:151.4,y:288.3},0).wait(1).to({skewX:6.9,skewY:5.4,x:151.3,y:288.4},0).wait(1).to({skewX:6.3,skewY:5,x:151.2},0).wait(1).to({skewX:5.9,skewY:4.6,x:151.1,y:288.5},0).wait(1).to({skewX:5.4,skewY:4.3,x:151,y:288.6},0).wait(1).to({skewX:5,skewY:3.9,x:150.9},0).wait(1).to({skewX:4.6,skewY:3.6,x:150.8,y:288.7},0).wait(1).to({skewX:4.2,skewY:3.3,x:150.7},0).wait(1).to({skewX:3.9,skewY:3.1,y:288.8},0).wait(1).to({scaleX:1,skewX:3.6,skewY:2.8,x:150.6},0).wait(1).to({skewX:3.3,skewY:2.6,x:150.5,y:288.9},0).wait(1).to({skewX:3,skewY:2.4},0).wait(1).to({skewX:2.7,skewY:2.2,x:150.4},0).wait(1).to({skewX:2.5,skewY:2,x:150.3,y:289},0).wait(1).to({skewX:2.3,skewY:1.8},0).wait(1).to({skewX:2.1,skewY:1.6},0).wait(1).to({skewX:1.9,skewY:1.5,x:150.2},0).wait(1).to({skewX:1.7,skewY:1.3,y:289.1},0).wait(1).to({skewX:1.5,skewY:1.2,x:150.1},0).wait(1).to({skewX:1.3,skewY:1.1},0).wait(1).to({skewX:1.2,skewY:0.9},0).wait(1).to({skewX:1.1,skewY:0.8,x:150,y:289.2},0).wait(1).to({skewX:0.9,skewY:0.7},0).wait(1).to({skewX:0.8,skewY:0.6},0).wait(1).to({skewX:0.7},0).wait(1).to({skewX:0.6,skewY:0.5,x:149.9},0).wait(1).to({skewX:0.5,skewY:0.4},0).wait(2).to({skewX:0.4,skewY:0.3},0).wait(1).to({skewX:0.3,skewY:0.2,y:289.3},0).wait(2).to({rotation:0.2,skewX:0,skewY:0,x:149.8},0).wait(2).to({rotation:0.1},0).wait(3).to({rotation:0},0).wait(4).to({x:150,y:289.4},0).wait(2).to({rotation:0.1},0).wait(1).to({rotation:0.2},0).wait(1).to({rotation:0,skewX:0.4,skewY:0.3,y:289.3},0).wait(1).to({skewX:0.6,skewY:0.5,x:150.1},0).wait(1).to({skewX:0.9,skewY:0.7,y:289.2},0).wait(1).to({skewX:1.3,skewY:1,x:150.2},0).wait(1).to({skewX:1.8,skewY:1.4,x:150.3,y:289.1},0).wait(1).to({skewX:2.4,skewY:1.9,x:150.4,y:289},0).wait(1).to({scaleX:1,skewX:3.2,skewY:2.5,x:150.5,y:288.9},0).wait(1).to({skewX:4.1,skewY:3.2,x:150.6,y:288.7},0).wait(1).to({skewX:5.1,skewY:4,x:150.8,y:288.6},0).wait(1).to({skewX:6.4,skewY:5,x:151,y:288.4},0).wait(1).to({scaleX:1,skewX:7.8,skewY:6.1,x:151.3,y:288.1},0).wait(1).to({skewX:9.5,skewY:7.4,x:151.6,y:287.8},0).wait(1).to({skewX:11.4,skewY:8.9,x:151.9,y:287.5},0).wait(1).to({scaleX:1,skewX:13.5,skewY:10.5,x:152.2,y:287.2},0).wait(1).to({skewX:15.5,skewY:12.1,x:152.6,y:286.9},0).wait(1).to({skewX:17.4,skewY:13.5,x:152.9,y:286.6},0).wait(1).to({scaleX:1,skewX:19.1,skewY:14.8,x:153.2,y:286.3},0).wait(1).to({skewX:20.5,skewY:16,x:153.4,y:286},0).wait(1).to({skewX:21.7,skewY:16.9,x:153.6,y:285.8},0).wait(1).to({skewX:22.7,skewY:17.7,x:153.8,y:285.7},0).wait(1).to({scaleX:1,skewX:23.5,skewY:18.3,x:153.9,y:285.5},0).wait(1).to({skewX:24.2,skewY:18.8,x:154,y:285.4},0).wait(1).to({skewX:24.7,skewY:19.2,x:154.1},0).wait(1).to({skewX:25.1,skewY:19.6,x:154.2,y:285.3},0).wait(1).to({skewX:25.4,skewY:19.8,y:285.2},0).wait(1).to({skewX:25.7,skewY:20,x:154.3},0).wait(1).to({skewX:25.8,skewY:20.1},0).wait(1).to({skewX:25.9,skewY:20.2},0).wait(1).to({regX:0.2,regY:0.1,x:154.4,y:285.1},0).wait(1));

	// BODY
	this.instance_33 = new lib.BODY();
	this.instance_33.parent = this;
	this.instance_33.setTransform(69,159,0.278,0.278);

	this.instance_34 = new lib.Tween15("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(130.2,326.7,1,1,0,0,0,0,83.9);
	this.instance_34._off = true;

	this.instance_35 = new lib.Tween16("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(128.7,326.7,1,1.008,0,7.3,0,0,83.9);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).to({state:[{t:this.instance_34}]},54).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},35).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_34}]},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(54).to({_off:false},0).wait(1).to({regY:0,y:242.8},0).wait(1).to({skewX:0.1,x:130.4},0).wait(1).to({skewX:0.3,x:130.6},0).wait(1).to({scaleY:1,skewX:0.6,x:130.9,y:242.7},0).wait(1).to({skewX:1,x:131.5},0).wait(1).to({scaleY:1,skewX:1.7,x:132.3},0).wait(1).to({scaleY:1,skewX:2.6,x:133.5,y:242.6},0).wait(1).to({scaleY:1,skewX:3.8,x:135},0).wait(1).to({scaleY:1.01,skewX:5,x:136.5,y:242.7},0).wait(1).to({scaleY:1.01,skewX:5.9,x:137.6},0).wait(1).to({skewX:6.5,x:138.4},0).wait(1).to({scaleY:1.01,skewX:6.9,x:138.9,y:242.8},0).wait(1).to({skewX:7.1,x:139.2},0).wait(1).to({skewX:7.2,x:139.3},0).to({_off:true},1).wait(43).to({_off:false,regY:83.9,scaleY:1,skewX:0,x:130.2,y:326.7},0).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(69).to({_off:false},0).wait(35).to({startPosition:0},0).wait(1).to({regY:0,skewX:7.1,x:139.1,y:242.8},0).wait(1).to({scaleY:1.01,skewX:6.5,x:138.4,y:242.7},0).wait(1).to({scaleY:1.01,skewX:5.5,x:137.1},0).wait(1).to({scaleY:1,skewX:4,x:135.2,y:242.6},0).wait(1).to({scaleY:1,skewX:2.3,x:133.1,y:242.7},0).wait(1).to({scaleY:1,skewX:1,x:131.4},0).wait(1).to({scaleY:1,skewX:0.2,x:130.5,y:242.8},0).to({_off:true},1).wait(51));

	// SHADOW
	this.instance_36 = new lib.SHADOW();
	this.instance_36.parent = this;
	this.instance_36.setTransform(45,310,0.278,0.278);

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-9.9,277.7,369.5);


(lib.most_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// scene
	this.csi = new lib.monster();
	this.csi.parent = this;
	this.csi.setTransform(123.7,162.8,0.891,0.891,0,0,0,125.7,189.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#009B53").s().p("AwpbxMAAAg3iMAhUAAAMAAAA3ig");
	this.shape.setTransform(121.3,202.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.csi}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.most_scene, new cjs.Rectangle(-0.7,-15.3,247.6,395.9), null);


(lib.logo_s = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sber2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(55,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_s, new cjs.Rectangle(0,0,110,28), null);


// stage content:
(lib._240x400_google_bclass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.monster.csi.gotoAndStop(1);
	}
	this.frame_82 = function() {
		this.monster.csi.gotoAndPlay(2);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(81).call(this.frame_82).wait(226));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("Ayv/PMAlfAAAMAAAA+fMglfAAAg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(308));

	// dark
	this.instance = new lib.dark();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(297).to({_off:false},0).to({alpha:1},10).wait(1));

	// copy2
	this.copy2 = new lib.copy_1_2();
	this.copy2.parent = this;
	this.copy2.setTransform(118.6,353.6,1,1,0,0,0,87.6,32.6);
	this.copy2.alpha = 0;
	this.copy2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy2).wait(38).to({_off:false},0).to({alpha:1},10).wait(26).to({x:118.9},0).to({x:118.6,alpha:0},8).to({_off:true},1).wait(225));

	// copy
	this.instance_1 = new lib.copy_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.9,353.6,1,1,0,0,0,73.9,32.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},9).wait(18).to({alpha:0},10).to({_off:true},1).wait(270));

	// eye_1 copy
	this.instance_2 = new lib.eye_blick();
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.9,120.7,1.7,1.7,0,0,180,22.9,25.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48).to({_off:false},0).to({alpha:0.398},3).to({alpha:0},10).to({_off:true},1).wait(246));

	// eye_1
	this.instance_3 = new lib.eye_blick();
	this.instance_3.parent = this;
	this.instance_3.setTransform(58.7,118.3,1.7,1.7,0,0,0,23,25.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({alpha:0.398},3).to({alpha:0},10).to({_off:true},1).wait(246));

	// black_2
	this.instance_4 = new lib.bord1_black();
	this.instance_4.parent = this;
	this.instance_4.setTransform(123,72.7,1,1.451,180,0,0,128,186.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({y:-47.3},42).wait(1).to({scaleY:1.58,y:-173.2,alpha:0},3).to({_off:true},1).wait(223));

	// black_1
	this.instance_5 = new lib.bord1_black();
	this.instance_5.parent = this;
	this.instance_5.setTransform(123,245.6,1,1.244,0,0,0,128,186.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({y:218.6},42).wait(1).to({scaleY:1.42,y:539.6,alpha:0},3).to({_off:true},1).wait(223));

	// logo2
	this.instance_6 = new lib.logo_g();
	this.instance_6.parent = this;
	this.instance_6.setTransform(422.4,364.3,1,1,0,0,0,45.4,15.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168).to({_off:false},0).wait(1).to({regX:45.3,x:402.4},0).wait(1).to({x:376.3},0).wait(1).to({x:344},0).wait(1).to({x:308.7},0).wait(1).to({x:275.9},0).wait(1).to({x:249.1},0).wait(1).to({x:228.6},0).wait(1).to({x:213.3},0).wait(1).to({x:202.1},0).wait(1).to({x:194},0).wait(1).to({x:188.4},0).wait(1).to({x:184.9},0).wait(1).to({x:182.9},0).wait(1).to({regX:45.4,x:182.4},0).wait(126));

	// logo1
	this.instance_7 = new lib.logo_s();
	this.instance_7.parent = this;
	this.instance_7.setTransform(313,364,1,1,0,0,0,55,14);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168).to({_off:false},0).wait(1).to({x:293.1},0).wait(1).to({x:267},0).wait(1).to({x:234.7},0).wait(1).to({x:199.4},0).wait(1).to({x:166.6},0).wait(1).to({x:139.8},0).wait(1).to({x:119.3},0).wait(1).to({x:104},0).wait(1).to({x:92.8},0).wait(1).to({x:84.7},0).wait(1).to({x:79.1},0).wait(1).to({x:75.6},0).wait(1).to({x:73.6},0).wait(1).to({x:73},0).wait(126));

	// cta
	this.instance_8 = new lib.cta();
	this.instance_8.parent = this;
	this.instance_8.setTransform(363.6,307.3,1,1,0,0,0,89.6,21.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(168).to({_off:false},0).wait(1).to({x:343.7},0).wait(1).to({x:317.6},0).wait(1).to({x:285.3},0).wait(1).to({x:250},0).wait(1).to({x:217.2},0).wait(1).to({x:190.4},0).wait(1).to({x:169.9},0).wait(1).to({x:154.6},0).wait(1).to({x:143.4},0).wait(1).to({x:135.3},0).wait(1).to({x:129.7},0).wait(1).to({x:126.2},0).wait(1).to({x:124.2},0).wait(1).to({x:123.6},0).wait(126));

	// copy_f
	this.instance_9 = new lib.copy_fin();
	this.instance_9.parent = this;
	this.instance_9.setTransform(363,168.6,1,1,0,0,0,103,40.6);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(168).to({_off:false},0).wait(1).to({regX:103.7,regY:41.2,x:343.8,y:169.2},0).wait(1).to({x:317.7},0).wait(1).to({x:285.4},0).wait(1).to({x:250.1},0).wait(1).to({x:217.3},0).wait(1).to({x:190.5},0).wait(1).to({x:170},0).wait(1).to({x:154.7},0).wait(1).to({x:143.5},0).wait(1).to({x:135.4},0).wait(1).to({x:129.8},0).wait(1).to({x:126.3},0).wait(1).to({x:124.3},0).wait(1).to({regX:103,regY:40.6,x:123,y:168.6},0).wait(33).to({alpha:0},8).to({_off:true},1).wait(84));

	// fin1
	this.instance_10 = new lib.color1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(284.8,55.9,1,1,0,0,0,14.8,16.6);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).wait(1).to({x:264.9},0).wait(1).to({x:238.8},0).wait(1).to({x:206.5},0).wait(1).to({x:171.2},0).wait(1).to({x:138.4},0).wait(1).to({x:111.6},0).wait(1).to({x:91.1},0).wait(1).to({x:75.8},0).wait(1).to({x:64.6},0).wait(1).to({x:56.5},0).wait(1).to({x:50.9},0).wait(1).to({x:47.4},0).wait(1).to({x:45.4},0).wait(1).to({x:44.8},0).wait(45).to({scaleX:1.01,scaleY:1.01,x:45.9,y:57.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:50.4,y:61.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:61.4,y:73.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:85.3,y:97.9},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:108.4,y:121.8},0).wait(1).to({scaleX:1.52,scaleY:1.52,x:117,y:130.7},0).wait(1).to({regX:14.9,regY:16.8,scaleX:1.54,scaleY:1.54,x:118.9,y:132.9},0).wait(75));

	// fin2
	this.instance_11 = new lib.busines_klass();
	this.instance_11.parent = this;
	this.instance_11.setTransform(362.9,55.1,1,1,0,0,0,92.9,17.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(168).to({_off:false},0).wait(1).to({regX:115.5,regY:17.4,x:365.6,y:55.4},0).wait(1).to({x:339.5},0).wait(1).to({x:307.2},0).wait(1).to({x:271.9},0).wait(1).to({x:239.1},0).wait(1).to({x:212.3},0).wait(1).to({x:191.8},0).wait(1).to({x:176.5},0).wait(1).to({x:165.3},0).wait(1).to({x:157.2},0).wait(1).to({x:151.6},0).wait(1).to({x:148.1},0).wait(1).to({x:146.1},0).wait(1).to({regX:92.9,regY:17.1,x:122.9,y:55.1},0).wait(42).to({regX:115.5,regY:17.4,scaleX:1,scaleY:1,x:145.4,y:56.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:144.7,y:59.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:143.6,y:67.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:141.4,y:80.6},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:137.4,y:104.7},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:131.6,y:141.3},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:126.8,y:170.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:124.4,y:184.8},0).wait(1).to({scaleX:1.51,scaleY:1.51,x:123.4,y:191.1},0).wait(1).to({regX:92.8,regY:17.3,scaleX:1.52,scaleY:1.52,x:88.8,y:192.3},0).wait(75));

	// scene3
	this.instance_12 = new lib.scene_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(359.5,200.6,1,1,0,0,0,119.5,199.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(168).to({_off:false},0).wait(1).to({x:339.6},0).wait(1).to({x:313.5},0).wait(1).to({x:281.2},0).wait(1).to({x:245.9},0).wait(1).to({x:213.1},0).wait(1).to({x:186.3},0).wait(1).to({x:165.8},0).wait(1).to({x:150.5},0).wait(1).to({x:139.3},0).wait(1).to({x:131.2},0).wait(1).to({x:125.6},0).wait(1).to({x:122.1},0).wait(1).to({x:120.1},0).wait(1).to({x:119.5},0).wait(126));

	// copy3
	this.instance_13 = new lib.copy_1_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(120.6,370.5,1,1,0,0,0,112.6,14.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(82).to({_off:false},0).to({alpha:1},9).to({_off:true},91).wait(126));

	// monster
	this.monster = new lib.most_scene();
	this.monster.parent = this;
	this.monster.setTransform(111.4,279.3,1.829,1.829,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.monster).wait(38).to({regY:200.1,scaleX:0.87,scaleY:0.87,x:116.4,y:247.3},0).to({regY:200,scaleX:1.14,scaleY:1.14,x:120.1,y:200},42).wait(228));

	// green_podl
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#009B53").s().p("EgXRAkVMAAAhIpMAujAAAMAAABIpg");
	this.shape_1.setTransform(149,232.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},83).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,1.8,498,807.7);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/240x400_google_bclass_atlas_P_.png", id:"240x400_google_bclass_atlas_P_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;