(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00
};



lib.ssMetadata = [
		{name:"cx5_v2_240x400_white_atlas_", frames: [[123,444,80,40],[0,0,300,250],[205,444,73,30],[0,252,220,117],[222,252,94,94],[123,371,147,71],[0,371,121,110]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.с_1_white = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.car3 = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.car_pek = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.koleso = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lens = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["cx5_v2_240x400_white_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.zone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#68AEDF").s().p("A1oI0IgeriQHQA5C8iHQGak6FgAyQFfAyCjAkQCiAlCuhQQDriVFKA0IgxLoQkqgjjaCKQiuBQiigkQijgllfgyQlggymaE7Qh4BVjwAAQh0AAiSgUg");
	this.shape.setTransform(127.4,87.6);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.koleso();
	this.instance.setTransform(-47,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,94,94);


(lib.town1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F3F3F").s().p("AmlDnQgUgDgNgKQgSgMAAgdQAAgdAQgVQAPgUAXAAQAWAAAPAVQAQAUAAAdQAAAdgOANQgNAKgUACQABAeAFAOIgPABQADgTgDgagA3HEGQAFgTAAgaQgTgGgMgLQgQgOAEgdIAAgFIADgKQAGgTANgNQASgTAWAEQAWACAMAXQAOAWgEAdQgEAdgPAKQgOAJgVgBQgCAeADAPgAQxCPQgUgDgNgJQgSgNAAgdQAAgdAQgUQAQgVAWABQAWgBAPAVQAQAVAAAdQAAAdgOAMQgNALgUACQABAeAFAOIgPAAQADgTgDgagAtjCoQACgKAAgPQgLgCgHgGQgJgHACgQQABgPAJgLQAJgKAMABQAMABAIAMQAHAMgBAQQgCAPgIAGQgHAFgLAAQAAAQACAIgAvXCeQACgKAAgOQgLgDgHgFQgJgIACgPQABgPAJgLQAJgLAMACQAMABAIALQAHAMgBAQQgCAPgIAGQgHAFgLABQAAAQACAHgAEQgTQgVAAgOgIQgTgJgEgdQgEgdAMgWQAOgXAVgDQAWgDASASQATATAEAcQAEAdgMAOQgLAMgUAFQAFAbAIAOIgQACQABgSgHgYgAWchvQAIgRAEgbQgTgIgKgMQgOgQAIgdQAHgbAVgQQAVgQAVAGQAVAGAJAYQALAYgIAcQgIAcgRAIQgOAHgUgEQgHAeABAPg");
	this.shape.setTransform(36.9,-91.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AzLEwQAFgPABgVQgPgFgJgJQgMgNAEgXQAEgWAQgOQAPgOASAEQAQACAKATQAJATgFAXQgEAXgMAHQgMAGgQgBQgDAYACALgAtUArQgHAAgEgDQgHgEgBgJQAAgKAFgHQAFgHAHgBQAHAAAGAGQAFAGABAKQABAKgEAEQgFAEgGABQABAKACAEIgFABQABgGgCgJgA6XAoQACgFABgKQgHgBgDgEQgGgGACgJQACgHAHgGQAGgGAHABQAHACAEAHQAEAGgCAKQgCAJgFADQgFADgGgBQgCAKABAFgAGEi3QgKABgHgDQgKgFgDgNQgCgOAFgLQAFgLAKgDQALgCAJAIQAKAIADAOQADAOgGAHQgEAGgKADQAEAOAEAGIgHACQgBgJgEgMgAZyjlQAFgIAEgMQgIgFgDgHQgFgJAGgNQAGgMALgGQALgFAKAEQAJAFACAMQADANgGAMQgHANgIACQgIACgJgEQgGAOgBAHg");
	this.shape_1.setTransform(43.2,-86.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#585858").s().p("Ah5DkQgPgBgKgHQgOgIgBgWQgBgVAKgQQALgQAQgBQARgBAMAPQANAOABAVQABAWgJAKQgJAIgPACQADAXAEAKIgMABQACgOgEgTgAE5BTQgQgCgLgHQgPgKgCgYQAAgXAMgRQAMgQASgBQASgBAOARQAOAOAAAYQACAYgLALQgKAIgRADQACAZAFALIgNABQACgPgEgWgAtoBCQgLgBgIgFQgKgGgBgPQgBgQAIgLQAIgMAMAAQALAAAJAJQAKALAAAPQACAQgHAHQgHAGgLACQACAQADAHIgIABQACgKgDgOgAqNA6QgLgBgIgEQgKgGgBgQQgBgPAIgMQAIgKAMAAQALgBAJAJQAKAKAAAQQACAPgHAHQgHAGgLACQACAQADAIIgIAAQACgJgDgPgAi5A3QAEgKABgOQgLgDgGgHQgIgIADgNQAEgQAKgJQAKgJAMADQALACAGAMQAHANgDANQgEAQgIAEQgIAFgLgCQgCAQABAJgANUg9QAEgQgCgVQgQgEgLgIQgOgLACgYQABgYAOgQQAOgRASACQASABAMASQAMARgBAYQgCAYgMAKQgKAIgRAAQgBAZAEAMgAExieQgRgBgLgIQgPgJgBgYQgBgXAMgSQANgSASgBQASAAANAQQAOAQABAYQABAZgLAKQgKAJgRADQACAYAFAMIgMAAQACgPgEgWg");
	this.shape_2.setTransform(65.5,-95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AdjEgIAmgRIAEAMIgBgOIAagNIAFAIIABgKIAzgZIgeApIgQAAIAMAGIgRAXIgYgJIATAPIgaAjgAxjDkIASAEIgRgLIAFgnIALABIgLgIIAKhPIAZBCIgLASIAPgJIAOAkIgbAVIAegLIAWA4IhbAMgA8SDfIAYgrIANAJIgKgPIARgeIAJAFIgGgKIAhg9IgBA9IgPAMIAPgDIAAAhIgdAIIAcACIgBA0gA4eDYIAKgmIAMAEIgLgIIAGgbIAIACIgGgGIANg1IALAuIgJAMIALgFIAGAaIgTAMIAVgEIAKAngA/fCnIASgfIAJAGIgHgKIAMgWIAHAEIgFgHIAZgsIgBAsIgLAIIALgBIgBAXIgVAHIAVAAIgBAbIgCAKgARZCNIAfg8IATALIgPgSIAVgpIAMAFIgIgNIArhRIABBRIgUAPIAUgEIAAAuIgmAMIAnACIAABFgAq4BaIAMgwIAPAEIgOgKIAJgiIAJACIgHgFIAQhEIAPA8IgMAMIAOgEIAIAeIgaAQIAcgGIANAzgAYZAGIAtgwIAPARIgJgWIAfgiIAKAIIgEgPIA/hFIgVBQIgXAKIAUABIgLAsIgoADIAkAKIgRBCgAo+ApIANgnIANAGIgLgIIAKgbIAIACIgHgIIAUg2IAHAyIgLAMIANgFIADAdIgVAIIAWgDIAHArgAE6g6IAVAHIgTgPIAJgtIAOADIgMgMIAUhbIAXBQIgQAUIATgJIAMAsIgiAWIAlgIIATBAIhrAEgAHuipIAMgvIAPAEIgNgKIAIgiIAKADIgJgIIARhEIAPA8IgMAOIAOgGIAIAgIgZAQIAbgGIAMAygANHjQIANgoIANAGIgLgKIAJgbIAIACIgGgHIATg3IAIAzIgLALIAMgEIAEAcIgWALIAXgDIAGAqg");
	this.shape_3.setTransform(81.4,-94.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.047)").s().p("AuTBVQgxgFgCgIQgDgJAugGQAtgGBEgBQBCAAAxAFQAxAFAAAHQgBAGg0ADQg0ADg5AGQgdADgbAAQgbAAgYgDgAJRBOQgGgHAygQQAzgQBNgOQBOgPA7gGQA7gEAGAHQAGAHgtAKIh7AYIiOAaQgnAHgRAAQgLAAgDgDgAm1gcQgxgFgEgLQgEgMAsgMQAsgMBDgFQBDgFAxAFQAyAEABAKQAAAKgzAHQgzAIg4ALQgpAJgmAAIgcgCg");
	this.shape_4.setTransform(1.3,-71.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.247)").ss(0.3,1,1).p("AFoFYQhkkdlbiJQiRg5i+gqQBQAKBmAIQBwAIGlh4QGnh4EQBPQA7ARAagLQACgCADgBAw1j1QEoACD9AsQA2AJA0ANQAAAAAAAAAmuiGQAFABAFAAAmuiGQAFABAFABAm9iIQAHABAIAB");
	this.shape_5.setTransform(-49,-60.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.149)").s().p("AMCHlI3qjRQDkmhGnjqIAFgDQE5jPEdghQEdghFEAdQFFAdDBBlQDCBlDLEAQDLD+AGDuQAGDugGApgEgjFACwIAAnpQEoACD9ArQA2AKA0ANIAAAAIAAAAIAAALIAZAAIgZgLQC+ApCRA6QFdCKBkEcgA41jIIAAgBIgJgBIAJACgA4+jKIgQgCIAQACg");
	this.shape_6.setTransform(67.8,-53.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.2)").s().p("AAnFYQhikdldiJQiRg5i+gqQBQAKBmAIQBwAIGnh4QGlh4EQBPQA7ARAagLQmnDqjkGggArviGIAKABIAAABIgKgCgArnimIAAgLIAZALg");
	this.shape_7.setTransform(-17,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.9,-134.2,450.3,268.6);


(lib.tag03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAeIgPgeIAAAoIgRAAIAAhSIARAAIAUAxQAJgUALgdIARAAIABBSIgSAAIAAgoIgUArIgFgNg");
	this.shape.setTransform(211.1,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOApIgQgpIgNARIAAAYIgQAAIAAhSIAQAAIAAAVIAAAJIAAADIAAACIAAADIAFgGIAFgHIAPgZIATAAIgWAcIAZA2g");
	this.shape_1.setTransform(202.5,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTA1QgJgFgHgIQgFgIgDgKQgCgKAAgMQAAgLACgKQADgKAFgHQAHgKAJgEQAJgFAKABQALgBAKAFQAIAFAHAIQAFAHADALQACAKAAALQAAAYgLAQQgGAIgIAFQgKAFgLAAQgKAAgJgFgAgKgfQgFACgDAHQgDAEAAAGQgCAGAAAGQAAAOAFAJQADAHAFADQAFACAFAAQAGAAAFgCQAFgEADgFQADgFABgGQABgGAAgHQAAgGgBgGQgBgFgDgFQgHgMgMgBQgFAAgFAEg");
	this.shape_2.setTransform(188.8,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA1QgJgFgGgIQgFgIgDgKQgCgKgBgMQABgLACgKQADgKAFgHQAGgKAJgEQAJgFALABQALgBAKAFQAIAFAHAIQAFAHADALQADAKAAALQAAAYgMAQQgGAIgIAFQgKAFgLAAQgLAAgJgFgAgKgfQgFACgDAHQgDAEAAAGQgCAGAAAGQAAAOAFAJQADAHAFADQAFACAFAAQAGAAAFgCQAFgEADgFQACgFACgGQABgGAAgHQAAgGgBgGQgCgFgCgFQgGgMgNgBQgFAAgFAEg");
	this.shape_3.setTransform(178.1,11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAA3IAAhPIgTAAIAAgQQAKgBAGgDQADgEACgGIASAAIAABtg");
	this.shape_4.setTransform(169.4,11);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBGIAyiLIAVAAIgyCLg");
	this.shape_5.setTransform(163.3,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAcIAFgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBIABgJIAAg4IBGAAIAABTIgWAAIAAg/IgaAAIAAAkQAAAPgHAHQgIAHgQAAg");
	this.shape_6.setTransform(154.8,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA0QgLgFgJgLIARgOQAGAHAIADQAHAEAHgBQAKABAGgEQAFgEAAgHQAAgGgEgDQgEgEgIAAIgMAAIAAgTIAKAAQAHAAADgEQADgDAAgFQAAgFgEgDQgFgEgIAAQgGABgFACQgFACgFAFIgQgPQAHgIAKgEQAKgFAKABQAIAAAHACQAHABAFAEQAHAEADAGQADAHAAAHQAAAIgDAHQgDAFgHAEQAJABAEAGQAFAGAAAJQAAAKgEAGQgDAHgHAGQgHADgIACQgIADgIAAQgNAAgLgGg");
	this.shape_7.setTransform(140.7,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNAXIADgtIAYAAIgOAtg");
	this.shape_8.setTransform(134,16.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA3QABgaAIgXQAIgUAPgUIg4AAIAAgUIBTAAIAAAVQgTASgJAVQgJAWAAAbg");
	this.shape_9.setTransform(126.9,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAkQgHgIgBgNQAAgHADgFQACgEAFgDQAFgDAGgBQAGgCAGAAIAJABIAJACIAAgHQAAgGgEgEQgEgDgIAAIgKABIgKADIgHgMQAHgEAHgCQAHgBAGAAQAPgBAIAIQAEADACAGQADAFAAAHIAAA3IgQAAIAAgIQgLALgKAAQgOgBgIgHgAgGACIgFACIgFAFIgBAFQAAAIAEADQAEADAIABQAFgBAFgCQAFgDAEgFIAAgNIgJgCIgJgBIgGAAg");
	this.shape_10.setTransform(113.7,12.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AghApIAAhSIAkAAIAMABIAIADQAJAFAAAMQAAAGgDAEQgCAEgFADQAGADADACQADAFAAAHQAAAOgIAHQgIAGgPAAgAgQAaIAYAAQAEAAADgDQADgDAAgEQAAgEgDgDQgDgCgEAAIgYAAgAgQgHIAXAAQAEAAACgCQADgEAAgDQAAgFgDgCQgCgDgEAAIgXAAg");
	this.shape_11.setTransform(105.4,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARApIAAg3IgfA3IgSAAIAAhSIAQAAIAAA3IAfg3IASAAIAABSg");
	this.shape_12.setTransform(96.6,12.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AglAcIAFgBIADgDIABgEIAAgFIAAg5IBBAAIABBSIgRAAIAAhEIggAAIAAArQAAAOgGAHQgGAGgOABg");
	this.shape_13.setTransform(87.4,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AARApIAAhEIghAAIAABEIgQAAIAAhSIBBAAIAABSg");
	this.shape_14.setTransform(78.7,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAoQgIgDgEgHQgGgGgBgIQgDgIAAgIQAAgIADgHQABgIAGgGQAEgHAIgDQAGgDAIAAQAIAAAHADQAHADAGAHQAEAGADAIQACAHAAAIQAAAJgCAHQgDAIgEAGQgGAHgHADQgHAEgIAAQgIAAgGgEgAgIgYQgEACgDAFIgDAIIgBAJIABAKIADAJQADAEAEADQAEACAEAAQAFAAAEgCQAEgDACgFQADgEABgEQABgFAAgFQABgKgGgHQgCgFgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_15.setTransform(69.9,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgHApIABhCIgVAAIAAgQIA3AAIAAAQIgUAAIgBBCg");
	this.shape_16.setTransform(62.1,12.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIAtIALgBQAFgBADgDQAEgDACgEQABgFAAgIIAAgBQgFAFgFADQgGACgDAAQgJAAgGgEQgHgDgEgIQgDgFgCgJQgCgFAAgKQAAgIACgHQACgIAEgFQAJgOAQAAQAFAAAFADQAFACAEAFIAAgIIARAAIAABKQAAAKgDAHQgCAIgFAEQgEAFgIACQgHADgJAAgAgNgjQgEAHAAANQAAAPAEAGQAFAIAIgBQAFAAAFgCQAEgDAFgFIAAgiQgIgKgLgBQgIABgFAGg");
	this.shape_17.setTransform(50.1,13.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOAoQgIgDgFgHQgEgGgCgIQgDgIAAgIQAAgIADgHQACgIAEgGQAFgHAIgDQAGgDAIAAQAIAAAHADQAHADAGAHQAEAGACAIQADAHAAAIQAAAJgDAHQgCAIgEAGQgGAHgHADQgHAEgIAAQgIAAgGgEgAgIgYQgEACgDAFIgDAIIgBAJIABAKIADAJQADAEAEADQAEACAEAAQAFAAAEgCQAEgDACgFQADgEABgEQABgFABgFQAAgKgGgHQgCgFgEgCQgFgCgEAAQgEAAgEACg");
	this.shape_18.setTransform(41.5,12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQApIgIgOIgEgIIgEgJIgCAHIgGAKIgIAOIgTAAIAbgpIgZgpIATAAIAHAMIAFALIACAGIADgGIAFgLIAHgMIATAAIgZApIAaApg");
	this.shape_19.setTransform(33,12.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAoQgGgDgFgIQgFgFgCgIQgDgHAAgJQAAgHADgIQACgIAFgGQAEgHAHgDQAHgDAHAAQAJAAAIADQAHAEAGAHIgKAMQgFgFgFgDQgFgCgFAAQgDAAgEACQgEACgDAFIgDAIIgBAJIABAKIADAJQADAEAEADQAEACADAAQAFgBAFgCQAEgCAFgGIALALQgGAHgIAEQgHAFgJAAQgHAAgHgEg");
	this.shape_20.setTransform(24.8,12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAkQgHgIgBgNQAAgHADgFQACgEAFgDQAFgDAGgBQAGgCAGAAIAJABIAJACIAAgHQAAgGgEgEQgEgDgIAAIgKABIgKADIgHgMQAHgEAHgCQAHgBAGAAQAPgBAIAIQAEADACAGQADAFAAAHIAAA3IgQAAIAAgIQgLALgKAAQgOgBgIgHgAgGACIgFACIgFAFIgBAFQAAAIAEADQAEADAIABQAFgBAFgCQAFgDAEgFIAAgNIgJgCIgJgBIgGAAg");
	this.shape_21.setTransform(16.4,12.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA3IAAhtIAtAAQARgBAJAKQAKAJAAARQAAALgEAIQgFAGgJADQgIAFgLAAIgbAAIAAApgAgXAAIAbAAQAKAAAFgFQAFgFAAgJQAAgJgFgGQgGgEgJAAIgbAAg");
	this.shape_22.setTransform(7.6,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,259,21.7);


(lib.tag02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBIIAAg4IAAgOIAAgHIAAgEIgDAFIgGAHIgsBFIgXAAIAAh8IAZAAIAAA0IAAAOIAAAIIAAAFIADgGIAGgJIAqhAIAZAAIAAB8gAgZhHIAOAAQACAFADACQADACADAAQAEAAADgCQADgCABgFIAOAAQgCALgGAGQgHAFgKAAQgVAAgEgWg");
	this.shape.setTransform(268.2,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA+IAAg3IAAgMIAAgJIAAgFIgDAGIgGAJIgsBCIgXAAIAAh8IAZAAIAAA1IAAAOIAAAIIAAAEIADgFIAGgJIAqhBIAZAAIAAB8g");
	this.shape_1.setTransform(254.8,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZA+IAAg0IgxAAIAAA0IgaAAIAAh8IAaAAIAAAxIAxAAIAAgxIAaAAIAAB8g");
	this.shape_2.setTransform(241.3,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsA+IAAh8IBWAAIAAAZIg8AAIAAAWIAiAAIAAAWIgiAAIAAAfIA/AAIAAAYg");
	this.shape_3.setTransform(229.1,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5AsQAHAAAEgHQAEgGAAgNIAAhRIBkAAIAAB8IgaAAIAAhjIgxAAIAAA6QAAAOgDAKQgCAJgFAEQgDAEgIABQgHACgMAAg");
	this.shape_4.setTransform(215.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgLA+IAAhjIgkAAIAAgZIBfAAIAAAZIgkAAIAABjg");
	this.shape_5.setTransform(203.5,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAgA+IgKgcIgsAAIgKAcIgbAAIAwh8IAXAAIAwB8gAANALIgIgWIgEgKIgBgJIgBAJIgEAKIgJAWIAbAAg");
	this.shape_6.setTransform(191.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYA+IAAgsIgaAAQgLAAgIgDQgIgCgGgFQgGgGgEgFQgDgIAAgKIAAgpIAbAAIAAApQAAAIAEAEQAFAFAJAAIAbAAIAAg6IAZAAIAAB8g");
	this.shape_7.setTransform(177.9,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgsA+IAAh8IBWAAIAAAZIg8AAIAAAWIAiAAIAAAWIgiAAIAAAfIA/AAIAAAYg");
	this.shape_8.setTransform(166.5,16.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAZA+IAAhiIgxAAIAABiIgaAAIAAh8IBlAAIAAB8g");
	this.shape_9.setTransform(153.7,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgyA+IAAh8IA4AAQAJABAHACQAHACAFADQAGAFADAGQADAGAAAJQAAAIgDAGQgEAHgGAEQAJADAEAFQAFAHAAAKQAAAKgEAIQgDAHgGAFQgGAFgIADQgIACgKAAgAgZAnIAgAAQAJAAAEgFQAFgDAAgJQAAgIgFgEQgEgEgJAAIggAAgAgZgOIAfAAQAIAAADgEQAEgDAAgFQAAgGgEgEQgEgDgIAAIgeAAg");
	this.shape_10.setTransform(140.9,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYA+Iggg8IgUAXIAAAlIgZAAIAAh8IAZAAIAAAkIAAAMIgBAJIAEgFIAHgJIAggrIAfAAIglAsIAvBQg");
	this.shape_11.setTransform(123.1,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAgA+IgKgcIgsAAIgKAcIgbAAIAxh8IAWAAIAwB8gAANALIgHgWIgFgKIgBgJIgBAJIgEAKIgJAWIAbAAg");
	this.shape_12.setTransform(109.3,16.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyA+IAAh8IBWAAIAAAZIg9AAIAAAXIAhAAQAKAAAIACQAHADAGAEQAMAIAAATQAAAKgEAIQgDAHgGAFQgGAFgIADQgIACgKAAgAgZAnIAgAAQAJAAAEgFQAFgDAAgJQAAgIgFgEQgEgEgJAAIggAAg");
	this.shape_13.setTransform(96.4,16.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAaBIIAAg4IAAgOIAAgHIAAgEIgDAFIgGAHIgsBFIgXAAIAAh8IAZAAIAAA0IAAAOIAAAIIAAAFIADgGIAGgJIAqhAIAZAAIAAB8gAgZhHIAOAAQACAFADACQADACADAAQAEAAADgCQADgCABgFIAOAAQgCALgGAGQgHAFgKAAQgVAAgEgWg");
	this.shape_14.setTransform(77.8,15.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAoA+IAAh8IAZAAIAAB8gAhAA+IAAh8IAaAAIAAAtIAbAAQALAAAGADQAIACAGAFQAHAFADAHQADAHAAAKQAAAUgMAKQgGAFgIADQgHACgIAAgAgmAmIAdAAQAJAAACgEQAFgEAAgIQAAgIgEgEQgDgFgJAAIgdAAg");
	this.shape_15.setTransform(63.3,16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAZA+IAAg0IgxAAIAAA0IgaAAIAAh8IAaAAIAAAxIAxAAIAAgxIAaAAIAAB8g");
	this.shape_16.setTransform(48.4,16.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag5AsQAHAAAEgHQAEgGAAgNIAAhRIBkAAIAAB8IgaAAIAAhjIgxAAIAAA6QAAAOgDAKQgCAJgFAEQgDAEgIABQgHACgMAAg");
	this.shape_17.setTransform(34.3,16.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWA7QgLgEgHgKQgOgRAAgcQAAgNAEgLQADgLAHgJQAOgUAaAAQAOAAAKAGQAKAEAIAKQAGAJAEALQADALAAANQAAANgDALQgEAMgHAJQgHAKgKAEQgLAFgNABQgMgBgKgFgAgMgkQgFAEgEAGQgEAFgCAIQgBAGAAAHQAAAIABAGIAGAMQAHANAOABQAHAAAHgDQAFgEAEgHQADgEABgIQADgGAAgIQAAgHgDgGQgBgHgDgGQgIgNgPAAQgGAAgGADg");
	this.shape_18.setTransform(21.5,16.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAZA+IAAhiIgxAAIAABiIgaAAIAAh8IBlAAIAAB8g");
	this.shape_19.setTransform(8.3,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,4.5,277.6,23.9);


(lib.slider = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.car3();
	this.instance.setTransform(49.8,-15.4,0.937,0.937,0,-7.4,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.с_1_white();
	this.instance_1.setTransform(-23.9,-10.9,0.977,0.977,-9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-23.7,83.6,51.4);


(lib.pin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAoAAQAAAQgMAMQgMAMgQAAQgPAAgMgMQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPg");
	this.shape.setTransform(4,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D12F37").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQALAMABAPQgBAQgLAMQgMALgQABQgPgBgMgLg");
	this.shape_1.setTransform(4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,10,10);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121,110);


(lib.lens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lens();
	this.instance.setTransform(-73.5,-35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-35.5,147,71);


(lib.gaugeAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAMIAjgtIAcAUIghAvg");
	this.shape.setTransform(3.2,3.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,7);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tag01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkBYIAAhQIAAgHIAAgFIAAgFIAAgRIgIAMIgDAHIg8BfIgWAAIAAiYIAXAAIAABgIAAAGIgBAGIAAAFIAHgLIAGgKIA5hcIAXAAIAACYgAgJhAQgFgCgEgDQgEgDgDgEIgFgLIAQAAQACAFAEADQAEACAFAAQAGAAAEgCQAFgDACgFIAPAAQgDAMgIAGQgIAGgOAAQgDAAgGgBg");
	this.shape.setTransform(112,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBMIAAhNIAAgHIAAgHIAAgGIAAgQIgIAMIgDAHIg8BeIgWAAIAAiYIAXAAIAABhIAAAGIgBAGIAAAFIAGgLIAHgKIA5hdIAXAAIAACYg");
	this.shape_1.setTransform(96.6,39.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKBMIAAiBIgtAAIAAgXIBvAAIAAAXIgtAAIAACBg");
	this.shape_2.setTransform(82.3,39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAxBMIAAiYIAXAAIAACYgAhHBMIAAiYIAWAAIAAA6IApAAQAJAAAKADQAJADAHAGQAHAGADAIQAEAIAAAMQgBAXgNANQgNAMgVAAgAgxA2IAqAAQAKABAHgIQAHgGAAgNQAAgNgGgGQgHgIgLAAIgqAAg");
	this.shape_3.setTransform(67.1,39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BMIAAiYIA/AAQAXAAANANQANANAAAXQAAAPgGALQgGAJgMAFQgLAGgQAAIgmAAIAAA5gAghAAIAnAAQANgBAIgGQAGgHAAgNQAAgNgHgHQgHgGgNAAIgnAAg");
	this.shape_4.setTransform(51.5,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBMIgqhMIgdAgIAAAsIgWAAIAAiYIAWAAIAAA1IAAAQIAAAJIASgUIArg6IAaAAIgtA5IA3Bfg");
	this.shape_5.setTransform(37.1,39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBMIAAiBIgtAAIAAgXIBvAAIAAAXIgtAAIAACBg");
	this.shape_6.setTransform(22.6,39.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwA2QgQgVAAghQAAgPAEgNQAEgOAIgLQAJgNAMgGQANgGAOAAQAQAAAMAGQAMAGAJANQAQAVAAAgQAAAQgEANQgEAOgIALQgJAMgMAHQgNAGgPAAQgfAAgRgZgAgfgkQgFAHgCAKQgDAJAAAKQAAALADAJQACAKAFAHQAGAKAIAFQAIAEAJAAQAKAAAIgEQAJgFAFgJQAFgIACgKQADgJAAgLQAAgKgDgJQgCgKgFgHQgMgTgUAAQgUAAgLATg");
	this.shape_7.setTransform(8.4,39.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAiBMIgSgeIgJgQIgHgOIgFALIgLATIgRAeIgbAAIAwhNIgthLIAcAAIANAZIAKARIAGAPIAIgPIAJgRIAOgZIAbAAIgsBLIAvBNg");
	this.shape_8.setTransform(243.5,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAjBMIAAhNIAAgHIABgHIAAgGIAAgQIgHAMIgFAHIg7BeIgWAAIAAiYIAWAAIAABhIAAAGIAAAGIAAAFIAGgLIAHgKIA4hdIAYAAIAACYg");
	this.shape_9.setTransform(228.6,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAiBMIgqhMIgdAgIAAAsIgWAAIAAiYIAWAAIAAA1IAAAQIAAAJIASgUIArg6IAaAAIgtA5IA3Bfg");
	this.shape_10.setTransform(214,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAjBMIAAhNIAAgHIABgHIAAgGIAAgQIgHAMIgFAHIg7BeIgWAAIAAiYIAWAAIAABhIAAAGIAAAGIAAAFIAGgLIAHgKIA4hdIAYAAIAACYg");
	this.shape_11.setTransform(198.4,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhCA7QAGAAAEgEQADgCACgFIACgIIABgMIAAhqIBzAAIAACYIgXAAIAAiAIhFAAIAABGIgBAcQgBALgDAFQgEAKgJAEQgJAEgOABg");
	this.shape_12.setTransform(182.5,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBMIAAiYIBhAAIAAAXIhKAAIAAAmIArAAIAAAVIgrAAIAAAwIBOAAIAAAWg");
	this.shape_13.setTransform(168.7,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag4BMIAAiYIA+AAQAUABAMAJQAGAGADAHQADAIAAAKQAAAKgFAIQgFAHgJAFQAMAEAHAIQAHAJAAANQAAAYgOALQgNAMgaAAgAghA3IAmAAQAPAAAGgGQAIgHgBgMQAAgNgHgGQgHgHgNAAIgnAAgAghgPIAmAAQAKAAAGgEQAGgGAAgJQAAgKgFgGQgFgEgMAAIgmAAg");
	this.shape_14.setTransform(154.8,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAjBMIAAg8IgiAAIgdA8IgaAAIAfg/QgRgDgJgKQgIgLAAgTQAAgVAOgNQAHgFAJgDQAIgEAMAAIBBAAIAACYgAgagwQgIAHAAAMQAAAMAHAHQAHAGANAAIAqAAIAAgxIgqAAQgNAAgGAFg");
	this.shape_15.setTransform(133.9,14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhCA7QAGAAAEgEQADgCACgFIACgIIABgMIAAhqIBzAAIAACYIgXAAIAAiAIhFAAIAABGIgBAcQgBALgDAFQgEAKgJAEQgJAEgOABg");
	this.shape_16.setTransform(118.6,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAxBXIAAgVIhiAAIAAAUIgWAAIAAgtIAJAAQAHgCADgKQADgKAAgSIAAhXIBsAAIAACAIANAAIAAAtgAgaANIgBAHIgCAIIgCAIIgEAGIBIAAIAAhoIg/AAg");
	this.shape_17.setTransform(103.5,15.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAjBMIAAhEIhFAAIAABEIgXAAIAAiYIAXAAIAAA/IBFAAIAAg/IAXAAIAACYg");
	this.shape_18.setTransform(82.1,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAqBMIgMgkIg8AAIgMAkIgZAAIA3iYIAXAAIA4CYgAAWATIgLghIgJgWIgCgOIgLAkIgMAhIAtAAg");
	this.shape_19.setTransform(66.8,14.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAwBXIAAgVIhhAAIAAAUIgWAAIAAgtIAKAAQAGgCADgKQADgKAAgSIAAhXIBsAAIAACAIANAAIAAAtgAgaANIgBAHIgCAIIgCAIIgDAGIBHAAIAAhoIg/AAg");
	this.shape_20.setTransform(51.4,15.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgPBOIgPgGQgIgDgHgFQgGgFgEgFIARgQQAIAJAJAFQAKAEALAAQAQAAAIgGQAIgGAAgOQAAgLgHgGQgHgFgOAAIgMAAIAAgVIAMAAQAKAAAGgFQAGgGAAgKQAAgGgDgDQgCgEgFgEQgDgCgGgBIgIgBQgIAAgIADQgIAEgGAHIgSgQQALgLALgEQAMgGAOAAQAJAAAJACQAJADAHAFQAJAFAEAJQAEAHAAALQAAAMgFAIQgFAIgJAFQAMADAHAIQAGAJAAANQAAANgEAKQgEAIgJAHQgHAFgKADQgLADgLAAQgHAAgIgBg");
	this.shape_21.setTransform(36.5,14.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgwA3QgQgWAAghQAAgPAEgNQAEgOAIgLQAJgNAMgGQANgGAOAAQAQAAAMAGQAMAGAJANQAQAVAAAgQAAAQgEANQgEAOgIAMQgJALgMAHQgNAGgPAAQgfAAgRgYgAgfgkQgFAHgCAKQgDAJAAAKQAAALADAJQACAKAFAHQAGAKAIAFQAIAEAJAAQAKAAAIgEQAJgFAFgJQAFgIACgKQADgJAAgLQAAgKgDgJQgCgKgFgHQgMgTgUAAQgUAAgLATg");
	this.shape_22.setTransform(22.5,14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVBJQgMgHgJgLQgIgMgDgNQgFgOAAgQQAAgPAFgOQADgNAIgLQAJgNAMgGQANgGANAAQATAAANAHQANAIAHAOIgTANQgHgKgIgFQgHgEgLAAQgIAAgJAEQgIAFgFAJQgEAIgDAJQgCAKAAAKQAAALACAJQADAKAEAIQAFAJAIAFQAJAEAIAAQALAAAIgFQAJgFAGgJIATAMQgIAPgNAIQgNAHgTAAQgNAAgNgGg");
	this.shape_23.setTransform(7.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,0.4,253.9,52.6);


(lib.model = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhLBMIASghQAOAIAOAEQAOAEAOAAQASAAALgIQAJgIABgPQgBgHgCgFQgCgGgFgEQgEgDgGgCQgFgBgIAAQgSAAgRALIgkgLIAHheIB8AAIAAAkIhZAAIgDAgQAIgEAKgCQAJgCALAAQAeAAARAQQARARABAbQAAARgGAOQgGANgLAJQgLAIgNAEQgOAFgQAAQgpgBghgTg");
	this.shape.setTransform(108.5,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AglASIAAgjIBLAAIAAAjg");
	this.shape_1.setTransform(93.8,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlBeIgRgcIgLgUIgJgRIgGAOIgNAXIgRAcIgtAAIA8hfIg5hcIAtAAIAOAYIAMAVIAHARIAIgRIAMgVIAOgYIAtAAIg5BcIA8Bfg");
	this.shape_2.setTransform(78.6,17.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBaQgQgIgLgPQgUgaAAgpQAAgTAFgRQAGgRAKgOQAMgOAPgHQAQgIASAAQAYAAASALQARAKAKAVIgjAQQgGgKgIgGQgJgEgLAAQgKAAgJAEQgJAFgFAKQgGAIgCAKQgCAKAAALQAAALACALQADAJAFAIQAGAKAJAGQAJAEAJAAQALAAAJgFQAJgHAHgLIAhATQgLAUgSALQgRALgYAAQgTAAgPgHg");
	this.shape_3.setTransform(60,17.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwBeIgOgqIhEAAIgOAqIgpAAIBIi7IAjAAIBIC7gAAVAQIgNggIgFgRIgDgNIgDANIgGARIgMAgIAqAAg");
	this.shape_4.setTransform(32.5,17.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLBeIAAi7IA7AAQAsAAAYAYQAYAYAAAtQAAAVgGASQgIARgMAMQgNAOgTAFQgRAHgUAAgAglA5IASAAQAaAAAPgPQAPgOAAgcQAAgcgNgOQgOgPgcAAIgTAAg");
	this.shape_5.setTransform(13.2,17.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJBeIAAgiIBPheIANgQIAJgJIgRABIgUAAIg7AAIAAgjICMAAIAAAiIhOBfIgNAOIgJAKIARgBIAUAAIBBAAIAAAjg");
	this.shape_6.setTransform(-6.4,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAwBeIgOgqIhEAAIgOAqIgpAAIBIi7IAjAAIBIC7gAAVAQIgNggIgFgRIgDgNIgDANIgGARIgMAgIAqAAg");
	this.shape_7.setTransform(-26.1,17.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AglAMIgIgOIgFgPIAAAGIAAAMIAAAVIAABGIglAAIAAi7IAlAAIAnBVQAIAPADAPIAGgQIAHgOIAmhVIAlAAIAAC7IgmAAIAAhGIAAgIIAAgNIABgSIgGAPIgIAOIglBUg");
	this.shape_8.setTransform(-47.7,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,0,180.9,33.8);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghgzIAWAAIAAAEQADgDAEgBQAEgCADAAQAIAAAGADQAGAEAEAGQADAGACAHQABAHAAAJQAAAIgBAFQgCAHgEAFQgDAHgHADQgFADgIAAQgDAAgEgCQgEgBgDgDIAAAXIgWAKgAgGggIgFAFIAAAcQAEAGAHAAQAGAAADgFQAEgDAAgKQAAgXgNAAQgDAAgDACg");
	this.shape.setTransform(159.1,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAlQgGgDgFgGQgFgGgCgGQgCgIAAgIQAAgHACgHQACgHAFgGQAFgGAGgDQAHgEAHAAQAQAAAKANQAEAGADAHQACAHAAAHQAAAIgCAIQgDAGgEAGQgFAGgHADQgGADgIAAQgHAAgHgDgAgKgOQgDAFAAAJIABAIIACAFQACAEADACQACACADAAQADAAADgCQADgCACgEQADgFAAgIIgBgGIgCgHQgCgDgDgBQgDgCgDAAQgGgBgEAGg");
	this.shape_1.setTransform(150.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAlQgHgCgFgHQgFgFgCgHQgDgIAAgIQAAgHADgIQACgGAFgGQAFgHAIgCQAGgEAHAAQAKAAAHAFQAJAFAFAIIgOAOQgHgMgLABQgGgBgEAHIgDAGIgBAHIABAIIADAGQAFAHAFAAQAGAAAEgDQAFgCAEgGIANANQgGAJgJAEQgHAEgKAAQgGAAgHgDg");
	this.shape_2.setTransform(142.3,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghgzIAWAAIAAAEQADgDAEgBQAEgCADAAQAIAAAGADQAGAEAEAGQADAGACAHQABAHABAJQgBAIgBAFQgCAHgEAFQgEAHgGADQgFADgIAAQgDAAgEgCQgEgBgDgDIAAAXIgWAKgAgGggIgFAFIAAAcQAEAGAHAAQAGAAADgFQADgDABgKQAAgXgNAAQgDAAgDACg");
	this.shape_3.setTransform(134.2,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTA1IALgcIgfhNIAXAAIANAmIADAJIAAAGIACgGIADgJIANgmIAWAAIgoBpg");
	this.shape_4.setTransform(125.4,14.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AALAnIgNgkIgKAMIAAAYIgVAAIAAhNIAVAAIAAAMIAAAIIAAAJIADgGIAFgGIALgQIAYAAIgUAZIAXAzg");
	this.shape_5.setTransform(117.2,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANAnIAAgrIgXArIgXAAIAAhNIAVAAIAAAqIAXgqIAWAAIABBNg");
	this.shape_6.setTransform(104.1,13);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGAnIAIgCIAFgDQADgCABgDIABgJQgDAEgEABIgHACQgIAAgGgDQgGgEgEgHIgFgMQgBgFgBgJQABgIABgHQACgHAEgFQADgHAHgDQAFgDAIAAQADAAAEABQAEACADADIAAgEIAWAAIAAA/QgBAUgGAKQgEAFgHADQgGADgKABgAgIgdQgEAFAAAKQAAAVAMAAQAEAAADgBQADgCACgDIAAgcQgEgHgIAAQgFAAgDAFg");
	this.shape_7.setTransform(95.2,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAmQgHgDgFgGQgFgGgCgHQgDgHAAgJQAAgPAJgLQAFgHAHgDQAGgEAGAAQAIAAAHAEQAGADAEAHQAEAGACAGQADAHAAAHIgBADIAAAEIgtAAQABAGAEAEQAEAEAFAAIAIgBQAEgBACgDIAPAMQgFAGgIADQgHADgJAAQgHAAgGgCgAANgHQAAgHgEgDQgDgFgGAAQgEAAgEAFQgDADgBAHIAZAAIAAAAg");
	this.shape_8.setTransform(87.2,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAmAAIALABIAIACQAIAFAAAMQAAAFgCAEQgDAEgFACQAGADADACQADAFAAAGQAAANgIAGQgHAHgOAAgAgMAVIARAAQAEAAACgCQACgCAAgEQAAgDgCgCQgCgCgEAAIgRAAgAgMgJIAQAAQAEAAABgCQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgCgBQgBgCgEAAIgQAAg");
	this.shape_9.setTransform(78.8,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAhQgEgEgCgFQgCgFAAgHQAAgGACgFQACgDAFgEQAFgDAFgBQAGgCAGAAIAHACIAHACIAAgEQAAgFgEgCQgDgEgFAAQgEABgFABIgKAEIgIgPQAHgDAHgCQAIgDAFAAQAHAAAGADQAGABAEADQAFAEACAFQACAFAAAHIAAAzIgUAAIAAgFIgIAFQgFABgDAAQgNABgIgIgAgJAFQgDACAAAFQAAAGADACQADADAGAAQAIAAAFgHIAAgKIgHgDIgGgBQgGABgDACg");
	this.shape_10.setTransform(70.1,13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVA0IAAgsIgpAAIAAAsIgVAAIAAhnIAVAAIAAAoIApAAIAAgoIAVAAIAABng");
	this.shape_11.setTransform(60.5,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D11437").s().p("Aq4B9QgeAAAAgfIAAi8QAAgeAeAAIVxAAQAeAAAAAeIAAC8QAAAfgeAAg");
	this.shape_12.setTransform(110.3,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A3102B").s().p("Aq4B9QgeAAAAgfIAAi8QAAgeAeAAIVxAAQAeAAAAAeIAAC8QAAAfgeAAg");
	this.shape_13.setTransform(110.3,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,0,145.5,25);


(lib.car_pek_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car_pek();
	this.instance.setTransform(-122,-65);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122,-65,220,117);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAmQgHgDgFgGQgFgGgCgHQgDgHAAgJQAAgPAJgLQAFgHAHgDQAGgEAGAAQAIAAAHAEQAGADAEAHQAEAGACAGQADAHAAAHIgBADIAAAEIgtAAQABAGAEAEQAEAEAFAAIAIgBQAEgBACgDIAPAMQgFAGgIADQgHADgJAAQgHAAgGgCgAANgHQAAgHgEgDQgDgFgGAAQgEAAgEAFQgDADgBAHIAZAAIAAAAg");
	this.shape.setTransform(157.2,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5AnIAAhNIAVAAIAAA8IAbAAIAAg8IATAAIAAA8IAbAAIAAg8IAUAAIAABNg");
	this.shape_1.setTransform(146.5,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAVAAIAAAdIASAAQAIAAAGACQAGACADAEQACABABAEQACAEAAAFQAAANgIAGQgHAHgPAAgAgMAVIARAAQAFAAACgCQACgCAAgEQAAgDgCgCQgCgCgFAAIgRAAg");
	this.shape_2.setTransform(135.6,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAaIAFgBIACgDQACgDAAgGIAAg0IBCAAIAABOIgVAAIAAg8IgYAAIAAAiQAAAOgIAGQgHAIgPAAg");
	this.shape_3.setTransform(126.5,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAlQgGgDgFgGQgFgGgCgGQgCgIAAgIQAAgHACgHQACgHAFgGQAFgGAGgDQAHgEAHAAQAQAAAKANQAEAGADAHQACAHAAAHQAAAIgCAIQgDAGgEAGQgFAGgHADQgGADgIAAQgHAAgHgDgAgKgOQgDAFAAAJIABAIIACAFQACAEADACQACACADAAQADAAADgCQADgCACgEQADgFAAgIIgBgGIgCgHQgCgDgDgBQgDgCgDAAQgGgBgEAGg");
	this.shape_4.setTransform(118,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA2QgHgDgFgGQgFgGgCgHQgDgHAAgJQABgWAFgPQAEgQAIgFIAGgDIAEgBIAEgBIAHgBIAKgEQAEgCABgBIARAAQgBAHgFAFQgEAGgIACIgFABIgJACIgJADQgDABgCADQgBADgBAEIAAADQAEgDAFgCIAGgBQAIAAAGADQAGAEAFAGQADAGABAEQACAGAAAIQAAAIgCAIQgDAGgEAGQgFAGgGADQgHADgHAAQgHAAgGgCgAgLAAQgDAFAAALIABAIIACAFQACAEADACQACACAEAAQACAAADgCQADgCACgEQADgFABgIIgBgIIgDgHQgCgBgDgBQgCgCgDAAQgHgBgEAEg");
	this.shape_5.setTransform(109.8,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANA2IAAgtIgXAtIgXAAIAAhNIAVAAIAAAqIAXgqIAWAAIABBNgAgVg1IAMAAQABAEADACQACABADAAQADAAACgBQADgCABgEIAMAAQgCAJgGAFQgFAEgIAAQgRAAgEgSg");
	this.shape_6.setTransform(96.8,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAhQgEgEgCgFQgCgFAAgHQAAgGACgFQACgDAFgEQAFgDAFgBQAGgCAGAAIAHACIAHACIAAgEQAAgFgEgCQgDgEgFAAQgEABgFABIgKAEIgIgPQAHgDAHgCQAIgDAFAAQAHAAAGADQAGABAEADQAFAEACAFQACAFAAAHIAAAzIgUAAIAAgFIgIAFQgFABgDAAQgNABgIgIgAgJAFQgDACAAAFQAAAGADACQADADAGAAQAIAAAFgHIAAgKIgHgDIgGgBQgGABgDACg");
	this.shape_7.setTransform(88.1,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AANAnIAAggIgZAAIAAAgIgVAAIAAhNIAVAAIAAAdIAZAAIAAgdIAUAAIABBNg");
	this.shape_8.setTransform(79.7,13);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAnQgEAAgEgDIgHgGIgHgIIAPgJQAEAFAFADQADAEAFAAIAEgBIAEgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBIABgEIgBgGIgDgDIgNAAIAAgMIAMAAIAEgDQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIgEgDIgFgCIgCAAQgLABgFAKIgPgKQAGgIAHgFQAIgFAKAAQAEAAAGACQAFABAFADQAGADADAEQACAFABAGQAAAGgCAEQgCAEgFACQAEABADAEQACAEAAAGIAAADIgBADQgCAKgJAFQgIAFgMgBIgKgBg");
	this.shape_9.setTransform(71.4,13);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjA0IAagpIgog+IAYAAIAPAZIAGALIAEAKIAFgKIAGgLIAPgZIAYAAIhABng");
	this.shape_10.setTransform(62.2,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D11437").s().p("Aq4B9QgeAAAAgfIAAi8QAAgeAeAAIVxAAQAeAAAAAeIAAC8QAAAfgeAAg");
	this.shape_11.setTransform(110.3,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A3102B").s().p("Aq4B9QgeAAAAgfIAAi8QAAgeAeAAIVxAAQAeAAAAAeIAAC8QAAAfgeAAg");
	this.shape_12.setTransform(110.3,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,0,145.5,25);


(lib.arrow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-12.9,-16.2,-1,-1.3).s().p("ABMBmQjRgHhOjdQBoDLC2AAIgfgdQBPAZBZALIinArg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-12.7,42.4,25.6);


(lib.ащт2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0)"],[0,1],-0.6,-8.6,0.7,7.9).s().p("Ay/CiIAAlDMAl/AAAIAAFDg");
	this.shape.setTransform(-28.4,-90.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-155);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AzCfcMAAAg+3MAmFAAAMAAAA+3g");
	this.shape_1.setTransform(-28.7,-28);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150.6,-229.2,300.7,402.6);


(lib.replayArr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEDEQgsAAgogTIgBAAQgigRgZgcQgagdgNgkIAAAAQgBgEACgDIAAAAQABgEAEgBIAAgBIATgHQACgBADABIAEACIABAAIADAEQAVA8A6AcQA5AcA6gVQA8gWAcg5QAbg5gVg7QgVg8g6gbQg5gcg6AVQgZAJgUAQIArgFIABAAQAEgBADADIAAAAQADACABAFIAAAAIACAQIAAAAQAAAEgDAEIABAAQgDADgEAAIAAAAIhmANQgDAAgCgBIAAAAIgEgDIAAgBIgCgFIgEhmQgBgEADgDQADgDAEAAIARgBQAEgBADADIAAAAQADADABAEIACArQAagXAjgNIABAAQAlgMAjACQAnACAjARIABABQBHAiAaBKIABABQAbBKgjBIIgBACQgQAigdAZQgcAagkAMQggALgfAAIAAAAg");
	this.shape.setTransform(17.9,18.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.8,39.4);


(lib.town = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.town1("synched",0);
	this.instance.setTransform(-20.8,90.3,1,1,-3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.2,-66.1,454.7,150.2);


(lib.tag02Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// tag03
	this.instance = new lib.tag03();
	this.instance.setTransform(152.5,33.1,1,1,0,0,0,132.5,10.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:132.5,alpha:1},4,cjs.Ease.get(1)).wait(5));

	// tag02
	this.instance_1 = new lib.tag02();
	this.instance_1.setTransform(130.6,12,1,1,0,0,0,110.6,12);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({x:110.6,y:10.5,alpha:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.4,4.5,277.6,39.4);


(lib.tag_Animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(50).call(this.frame_50).wait(1));

	// tag01
	this.instance = new lib.tag01();
	this.instance.setTransform(-13.8,13.1,1,1,0,0,0,91.9,19.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(26));

	// model
	this.instance_1 = new lib.model();
	this.instance_1.setTransform(2.4,-22.9,1,1,0,0,0,61.2,12);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:15.8,alpha:1},16,cjs.Ease.get(1)).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.8,-34.9,180.9,33.8);


(lib.path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Layer 4
	this.instance = new lib.slider();
	this.instance.setTransform(4.8,58.2,1,1,15,0,0,14.9,6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:6.2,scaleX:1,scaleY:1,rotation:3.1,guide:{path:[4.9,58.1,16,59.5,25.2,59.3]}},4).to({regX:15,rotation:-19,guide:{path:[25.1,59.3,35.5,59,43,56.8]}},4).to({regX:14.9,scaleX:1,scaleY:1,rotation:-23.7,guide:{path:[43.1,56.8,50,54.8,54.6,51,57.8,48.8,61,46.8]}},4).to({regX:15,regY:6.3,scaleX:1,scaleY:1,rotation:-16.5,guide:{path:[61,46.7,70.3,40.8,79.1,36.6]}},4).to({regY:6.2,rotation:9.5,guide:{path:[79,36.5,97.2,27.8,113.5,26.3]}},7).to({scaleX:1,scaleY:1,rotation:16.8,guide:{path:[113.6,26.4,120.9,25.7,127.9,26.5,134,27.1,139.5,27.8]}},5).to({scaleX:1,scaleY:1,rotation:19.7,guide:{path:[139.5,27.7,144.8,28.4,149.6,29.1]}},2).to({scaleX:1,scaleY:1,rotation:15.6,guide:{path:[149.6,29.1,161.2,30.8,169.9,32.5]}},4).to({regX:15.1,regY:6.1,scaleX:1,scaleY:1,rotation:8.3,guide:{path:[170,32.5,174.1,33.4,177.5,34.2,178.6,34.5,179.6,34.7]}},2).to({regY:6.2,scaleX:1,scaleY:1,rotation:-11.3,guide:{path:[179.5,34.7,187.7,36.3,194.6,34.3]}},3).to({regX:15,rotation:-10.1,guide:{path:[194.7,34.2,201,32.4,206.3,27.6,209.3,26,212.5,24.7]}},4).to({regX:15.1,scaleX:1,scaleY:1,rotation:8.6,guide:{path:[212.4,24.7,226.1,19,242.2,18]}},6).wait(1));

	// Layer 6
	this.instance_1 = new lib.pin();
	this.instance_1.setTransform(255.8,30,1,1,0,0,0,4,4);

	this.instance_2 = new lib.pin();
	this.instance_2.setTransform(0,69,1,1,0,0,0,4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(50));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AiSKjIAA1EICUAAIAAVEg");
	var mask_graphics_1 = new cjs.Graphics().p("AiTKjIAA1EIDUAAIAAVEg");
	var mask_graphics_2 = new cjs.Graphics().p("AiVKjIAA1EIEUAAIAAVEg");
	var mask_graphics_3 = new cjs.Graphics().p("AipKjIAA1EIFTAAIAAVEg");
	var mask_graphics_4 = new cjs.Graphics().p("AjJKjIAA1EIGTAAIAAVEg");
	var mask_graphics_5 = new cjs.Graphics().p("AjpKjIAA1EIHTAAIAAVEg");
	var mask_graphics_6 = new cjs.Graphics().p("AkJKjIAA1EIITAAIAAVEg");
	var mask_graphics_7 = new cjs.Graphics().p("AkpKjIAA1EIJTAAIAAVEg");
	var mask_graphics_8 = new cjs.Graphics().p("AlJKjIAA1EIKTAAIAAVEg");
	var mask_graphics_9 = new cjs.Graphics().p("AllKjIAA1EILLAAIAAVEg");
	var mask_graphics_10 = new cjs.Graphics().p("AmBKjIAA1EIMDAAIAAVEg");
	var mask_graphics_11 = new cjs.Graphics().p("AmdKjIAA1EIM7AAIAAVEg");
	var mask_graphics_12 = new cjs.Graphics().p("Am5KjIAA1EINzAAIAAVEg");
	var mask_graphics_13 = new cjs.Graphics().p("AnVKjIAA1EIOrAAIAAVEg");
	var mask_graphics_14 = new cjs.Graphics().p("AnxKjIAA1EIPjAAIAAVEg");
	var mask_graphics_15 = new cjs.Graphics().p("AoNKjIAA1EIQbAAIAAVEg");
	var mask_graphics_16 = new cjs.Graphics().p("AopKjIAA1EIRTAAIAAVEg");
	var mask_graphics_17 = new cjs.Graphics().p("ApFKjIAA1EISLAAIAAVEg");
	var mask_graphics_18 = new cjs.Graphics().p("ApiKjIAA1EITFAAIAAVEg");
	var mask_graphics_19 = new cjs.Graphics().p("Ap+KjIAA1EIT9AAIAAVEg");
	var mask_graphics_20 = new cjs.Graphics().p("AqaKjIAA1EIU1AAIAAVEg");
	var mask_graphics_21 = new cjs.Graphics().p("Aq2KjIAA1EIVtAAIAAVEg");
	var mask_graphics_22 = new cjs.Graphics().p("ArSKjIAA1EIWlAAIAAVEg");
	var mask_graphics_23 = new cjs.Graphics().p("AruKjIAA1EIXdAAIAAVEg");
	var mask_graphics_24 = new cjs.Graphics().p("AsKKjIAA1EIYVAAIAAVEg");
	var mask_graphics_25 = new cjs.Graphics().p("AsmKjIAA1EIZNAAIAAVEg");
	var mask_graphics_26 = new cjs.Graphics().p("AtCKjIAA1EIaFAAIAAVEg");
	var mask_graphics_27 = new cjs.Graphics().p("AteKjIAA1EIa9AAIAAVEg");
	var mask_graphics_28 = new cjs.Graphics().p("At6KjIAA1EIb1AAIAAVEg");
	var mask_graphics_29 = new cjs.Graphics().p("AuWKjIAA1EIctAAIAAVEg");
	var mask_graphics_30 = new cjs.Graphics().p("AuyKjIAA1EIdlAAIAAVEg");
	var mask_graphics_31 = new cjs.Graphics().p("AvOKjIAA1EIedAAIAAVEg");
	var mask_graphics_32 = new cjs.Graphics().p("AvqKjIAA1EIfVAAIAAVEg");
	var mask_graphics_33 = new cjs.Graphics().p("AwGKjIAA1EMAgNAAAIAAVEg");
	var mask_graphics_34 = new cjs.Graphics().p("AwiKjIAA1EMAhFAAAIAAVEg");
	var mask_graphics_35 = new cjs.Graphics().p("Aw+KjIAA1EMAh9AAAIAAVEg");
	var mask_graphics_36 = new cjs.Graphics().p("AxaKjIAA1EMAi1AAAIAAVEg");
	var mask_graphics_37 = new cjs.Graphics().p("Ax2KjIAA1EMAjtAAAIAAVEg");
	var mask_graphics_38 = new cjs.Graphics().p("AySKjIAA1EMAklAAAIAAVEg");
	var mask_graphics_39 = new cjs.Graphics().p("AyuKjIAA1EMAldAAAIAAVEg");
	var mask_graphics_40 = new cjs.Graphics().p("AzKKjIAA1EMAmVAAAIAAVEg");
	var mask_graphics_41 = new cjs.Graphics().p("AzmKjIAA1EMAnNAAAIAAVEg");
	var mask_graphics_42 = new cjs.Graphics().p("A0CKjIAA1EMAoFAAAIAAVEg");
	var mask_graphics_43 = new cjs.Graphics().p("A0eKjIAA1EMAo9AAAIAAVEg");
	var mask_graphics_44 = new cjs.Graphics().p("A06KjIAA1EMAp1AAAIAAVEg");
	var mask_graphics_45 = new cjs.Graphics().p("A1WKjIAA1EMAqtAAAIAAVEg");
	var mask_graphics_46 = new cjs.Graphics().p("A1yKjIAA1EMArlAAAIAAVEg");
	var mask_graphics_47 = new cjs.Graphics().p("A2OKjIAA1EMAsdAAAIAAVEg");
	var mask_graphics_48 = new cjs.Graphics().p("A2qKjIAA1EMAtVAAAIAAVEg");
	var mask_graphics_49 = new cjs.Graphics().p("A3GKjIAA1EMAuOAAAIAAVEg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.7,y:30}).wait(1).to({graphics:mask_graphics_1,x:-14.9,y:30}).wait(1).to({graphics:mask_graphics_2,x:-15,y:30}).wait(1).to({graphics:mask_graphics_3,x:-13.3,y:30}).wait(1).to({graphics:mask_graphics_4,x:-10.5,y:30}).wait(1).to({graphics:mask_graphics_5,x:-7.6,y:30}).wait(1).to({graphics:mask_graphics_6,x:-4.7,y:30}).wait(1).to({graphics:mask_graphics_7,x:-1.8,y:30}).wait(1).to({graphics:mask_graphics_8,x:1.5,y:30}).wait(1).to({graphics:mask_graphics_9,x:4.1,y:30}).wait(1).to({graphics:mask_graphics_10,x:6.7,y:30}).wait(1).to({graphics:mask_graphics_11,x:9.3,y:30}).wait(1).to({graphics:mask_graphics_12,x:11.9,y:30}).wait(1).to({graphics:mask_graphics_13,x:14.5,y:30}).wait(1).to({graphics:mask_graphics_14,x:17.2,y:30}).wait(1).to({graphics:mask_graphics_15,x:19.8,y:30}).wait(1).to({graphics:mask_graphics_16,x:22.4,y:30}).wait(1).to({graphics:mask_graphics_17,x:25,y:30}).wait(1).to({graphics:mask_graphics_18,x:27.6,y:30}).wait(1).to({graphics:mask_graphics_19,x:30.2,y:30}).wait(1).to({graphics:mask_graphics_20,x:32.9,y:30}).wait(1).to({graphics:mask_graphics_21,x:35.5,y:30}).wait(1).to({graphics:mask_graphics_22,x:38.1,y:30}).wait(1).to({graphics:mask_graphics_23,x:40.7,y:30}).wait(1).to({graphics:mask_graphics_24,x:43.3,y:30}).wait(1).to({graphics:mask_graphics_25,x:45.9,y:30}).wait(1).to({graphics:mask_graphics_26,x:48.5,y:30}).wait(1).to({graphics:mask_graphics_27,x:51.2,y:30}).wait(1).to({graphics:mask_graphics_28,x:53.8,y:30}).wait(1).to({graphics:mask_graphics_29,x:56.4,y:30}).wait(1).to({graphics:mask_graphics_30,x:59,y:30}).wait(1).to({graphics:mask_graphics_31,x:61.6,y:30}).wait(1).to({graphics:mask_graphics_32,x:64.2,y:30}).wait(1).to({graphics:mask_graphics_33,x:66.8,y:30}).wait(1).to({graphics:mask_graphics_34,x:69.5,y:30}).wait(1).to({graphics:mask_graphics_35,x:72.1,y:30}).wait(1).to({graphics:mask_graphics_36,x:74.7,y:30}).wait(1).to({graphics:mask_graphics_37,x:77.3,y:30}).wait(1).to({graphics:mask_graphics_38,x:79.9,y:30}).wait(1).to({graphics:mask_graphics_39,x:82.5,y:30}).wait(1).to({graphics:mask_graphics_40,x:85.1,y:30}).wait(1).to({graphics:mask_graphics_41,x:87.8,y:30}).wait(1).to({graphics:mask_graphics_42,x:90.4,y:30}).wait(1).to({graphics:mask_graphics_43,x:93,y:30}).wait(1).to({graphics:mask_graphics_44,x:95.6,y:30}).wait(1).to({graphics:mask_graphics_45,x:98.2,y:30}).wait(1).to({graphics:mask_graphics_46,x:100.8,y:30}).wait(1).to({graphics:mask_graphics_47,x:103.5,y:30}).wait(1).to({graphics:mask_graphics_48,x:106.1,y:30}).wait(1).to({graphics:mask_graphics_49,x:118.6,y:30}).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("A0SDEQGMA5CtiHQF8k4FGAyQFFAyCWAkQCWAlCihQQDdiYE6A5");
	this.shape.setTransform(129.9,50.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AxyKDQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIAAAAIgCgDIAAAAIAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAAAAIAAgBIAAAAIAAABIAAAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAIAAABIgXgCIAAAAIgEAAIAAAAIgWgCIAAAAIAAAAIAAAAIgCgEIAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIAAAAIg4gHIAAAAIABAAIgFgBIgBAAIAAAAIABAAIAAAAIAFABIgBAAIA4AHIAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIAAAAIACAEIAAAAIAAAAIAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAABgBgBIAAAAIg4gGIAAAAIAAAAIgFgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAAAIgBgDIAAAAIAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIAAAAIACgBIAAAAIgCABIAAAAQAAABgBAAQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAAAIgSgDIgHgBIAAAAIgZgDIAAAAIAAgBIAAAAIgBgDIAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAIg7gKIAAAAIAAAAIAAAAIAAAAIAAAAIA7AKIAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIAAAAIABADIAAAAIAAABIAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIAAAAIg8gKIAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIAAAAIgBgEIAAAAIAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAIAAAAIADgBIAAAAIgDABIAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAIAAAAIAAAAIgygKIAAAAIAAgBIAAAAIAAAAIAAAAIAAgDIAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAIg5gOIAAAAIA5AOIAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAIAAADIAAAAIAAAAIAAAAIAAABIAAAAIgCADIAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIg6gPIAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAAAIgBgDIAAAAIAAgBIAAAAIAAAAIAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABgBAAIAAAAIAAAAIAAAAIAAABIAAAAIgxgOIAAAAIAAgCIAAAAIAAgCIAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAAAIAAAAIg5gTIAAAAIAAAAIAAAAIAAAAIAAAAIA5ATIAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAIAAAAIAAACIAAAAIAAACIAAAAIAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAIAAAAQAAAAAAAAQgBAAAAABQgBAAAAgBQgBAAAAAAIAAAAIg5gTIAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIAAAAIgBgEIAAAAIAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAgBABIAAAAIAAAAIgUgHIAAAAIAAgdQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg6QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIAAAAQABAAAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIAAgyQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBIAAAAIAAAAIAAAAIAvAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA6AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAyAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAABAAIAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAlAAIAAAOQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIAAAzQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAAxQAAABgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAA7QAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAAyQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIAAAzQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAAxQAAABgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAA5QAAABAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAAyQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAIAAAzQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIAAAAQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABABAAQAAABAAAAQAAABABAAIAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABIAAAAIAAAEIgtgJIAAAAIAAgBIAAAAIgBgCIAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIAAAAIg7gLIgBAAIAAAAIABAAIAAAAIA7ALQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAAAIABACIAAAAIAAABIAAAAIAAAAIgCAEIAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAIg7gKQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAAAIACgDIAAAAIACgCIAAAAIgCACIAAAAIgCADIAAAAIgxgJIAAgBIAAAAIAAgBIAAAAIgBgDIAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBgBIAAAAIg6gJIgBgBIAAAAIABABIAAAAIA6AJQABABAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAAAIABADIAAAAIAAABIAAAAIAAABIAAAAIgCACIAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAAAgBgBIAAAAIg7gKQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIAAAAIgBgEIAAAAIAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBIAAAAQgBABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIAAAAIAAAAIgxgIIAAgBIAAgBIAAAAIgBgDIAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIAAAAIg6gKIgBgBIAAAAIABABIAAAAIA6AKQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAAAAIABADIAAAAIAAABIAAAAIAAABIgCADIAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBAAIAAAAIg7gKQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAgBIACgCIAAAAIgCACIAAAAIgigFIAFAAIgFAAIAAAAIAAgBIAAAAIgBgDIAAAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIAAAAQgfgFgfgCIAAAAIAAAAIAAAAIAAAAIAAAAQAfACAfAFIAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAAAIAAAAIABADIAAAAIAAABIAAAAIAAAAIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAgBIAAAAQgfgEgegBIAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAIAAAAIAAAAIAAAAIAAAAIAAAAQAAAAgBAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAIgygBIAAAAIgCgDIAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAgBIAAAAQggABgeADIAAAAQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAAAAABIAAAAIgBADIAAAAIAAAAIAAAAQgaADgYAFIAAAAIAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIAAAAQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAAIAAAAIgBADIAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAABIAAAAQgdAFgdAIIAAAAQAAAAgBAAQAAABgBAAQAAgBgBAAQAAAAgBAAIAAAAIgCgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIAAAAQAdgJAegFIAAAAQgeAFgdAJIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIAAAAIAAACIAAAAIAAACIAAAAIAAABQgYAHgXAJIAAAAIgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAAQgcALgbAOIAAAAQAAABgBAAQAAAAgBABQAAAAAAABQAAAAAAABIAAAAIgBABIAAAAIABACIAAAAQgWAMgVAOIAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAIgBgBIAAAAIABABIAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIAAAAIgMAIIAAAAIgBAAIAAAAQgUAKgUAIIAAAAQgBAAAAAAQgBABAAAAQgBgBAAAAQgBAAAAAAIAAAAIgDgCIAAAAIAAgBIAAgBIAAAAIAAgCIAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAAAAQAUgIAUgKIAAAAIAMgIIAAAAIAAAAIAAAAIAAAAIAAAAIgMAIIAAAAQgUAKgUAIIAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIAAAAIAAACIAAAAIAAABIAAAAIAAABQgXAJgXAHIAAAAIAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIAAAAIAAAAIAAAAIAAAAIAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAABABIAAAAIAAAAIgBAEIAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIAAAAQgeAIgeAEIAAAAQgBABAAAAQgBAAAAgBQAAAAgBAAQAAAAgBAAIAAAAIgCgDIAAAAIAAgBIAAAAIAAAAIABgEIAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAQAdgEAdgJIAAAAIACAAIAAAAIgCAAIAAAAQgdAJgdAEIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAIAAAAIgBAEIAAAAIAAAAIAAAAIAAABQgZADgZAAIAAAAIAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAQgeAAgegEIAAAAIgBgBIAAAAIABABIAAAAQAeAEAeAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAAAIgCAEIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgfAAgfgFIAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIAAAAIgBgEIAAAAIAAAAQAAgBAAAAQABgBAAAAQAAAAAAgBQABAAAAgBIAAAAIAAAAIAAAAIAAAAIAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAABIAAAAIAAAAIgdgGIAAAAIgLgCIAAAAIABgBIAAAAIAAgBIAAAAIgBgDIAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBQgBAAAAAAIAAAAIg8gMIAAAAIgBgBIAAAAIABABIAAAAIA8AMIAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAAAAIABADIAAAAIAAABIAAAAIgBABIAAAAIgBACIAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAAIg8gMIAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBIAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAAAIAAgBIACgDIAAAAIAAAAIAAAAIAAAAIAAAAIgCADIAAAAIgygKIAAAAIAAgBIAAAAIAAgCIAAAAQgBgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBIAAAAIg7gLIAAAAIgBAAIAAAAIABAAIAAAAIA7ALIAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAABABIAAAAIAAACIAAAAIAAABIAAAAIAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABIAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBgBIAAAAIg7gLIAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAIAAAAIgBgEIAAAAIAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAIAAAAIACgBIAAAAIgCABIAAAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIAAAAIAAAAIgwgIIAAAAIAAgBIAAAAIgBgDIAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAIAAAAIg6gKIAAAAIgBAAIAAAAIABAAIAAAAIA6AKIAAAAQAAAAABAAQAAABAAAAQABAAAAAAQAAABABAAIAAAAIABADIAAAAIAAABIAAAAIAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABAAAAIAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAAIg6gKIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIAAAAIgxgIIAAAAIAAgBIAAAAIgBgCIAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIAAAAIg6gJIAAAAIgBgBIAAAAIABABIAAAAIA6AJIAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAAAABIAAAAIABACIAAAAIAAABIAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAgBAAIAAAAIg6gJIAAAAQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAAAIAAAAIACgDIAAAAIgCADIAAAAIgqgHIAAAAIAAgBIAAAAIgBgDIAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIAAAAQgegEgegBIAAAAIAAgBIAAAAIAAABIAAAAQAeABAeAEIAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAIAAAAIABADIAAAAIAAABIAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAAAQgegEgegCIAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAIAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAAAIACgDIAAAAIACgCIAAAAIgCACIAAAAIgCADIAAAAQgZgBgZABIAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAIAAAAIAAAAIAAAAIAAAAIAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABIAAAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIAAAAQgeACgeAFIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAAAIAAgBIAAAAIABgCIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAQAegFAegBIAAAAQgeABgeAFIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIAAAAIgBACIAAAAIAAABIAAAAQgYAEgZAFIAAAAIgBgCIAAAAIABACIAAAAIAAABQABABAAAAQAAAAAAABQAAAAgBABQAAAAAAABIAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIAAAAQgcAGgdAJIAAAAQgBAAAAAAQgBABAAAAQgBgBAAAAQgBAAAAAAIAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAAAIgBgCIAAAAIABgCIAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAAAAQAdgJAdgHIAAAAIAAAAIAAAAIAAAAIAAAAQgdAHgdAJIAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAAIgBACIAAAAIABACIAAAAIgvARIAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIAAAAIgCgBIAAAAIACABIAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAAAgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIAAAAQgbALgbANIAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAIAAgCIAAAAIAAgCIAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIAAAAQAbgOAcgKIAAAAIAAAAIAAAAIAAAAIAAAAQgcAKgbAOIAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIAAAAIAAACIAAAAIAAACIAAAAIgsAXIAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAAAIAAAAIAAAAIAAAAIAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBABIAAAAIgzAdIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAAIgDgCIAAAAIAAAAIgBgCIAAAAIABgCIAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAAAAIA0gdIAAAAIAAgBIAAAAIAAABIAAAAIg0AdIAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIAAAAIgBACIAAAAIABACIAAAAIAAAAIgqAbIAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBIAAAAIgBAAIAAAAIABAAIAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAABIAAAAIgwAhIAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAIAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIAAAAIgBgDIAAAAIAAgBIAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAIAAAAIAwgiIAAAAIADgBIAAAAIgDABIAAAAIgwAiIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIAAAAIAAABIAAAAIABADIAAAAIgoAdIAAAAIgDgBIAAAAIAAgBIAAAAIAAABIAAAAIADABIAAAAIABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAABIAAAAIguAkIAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIAAAAIAAAAIgBgDIAAAAIAAAAIAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAAAAIAuglIAAAAIADgBIAAAAIgDABIAAAAIguAlIAAAAQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAAAAIAAAAIAAAAIABADIAAAAIgHAFIAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAgBgBIAAAAIAAAAIAAAAIAAAAIAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABIAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIAAAAQgZASgdAOIAAAAQAAAAgBAAQAAAAgBABQAAAAgBgBQAAAAgBAAIAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIAAAAIAAgDIAAAAIAAgBIAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAAAAQAdgOAZgRIAAAAQgZARgdAOIAAAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABIAAAAIAAABIAAAAIAAADIAAAAQgWAKgZAIIAAAAIAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIAAAAIgCgBIAAAAIACABIAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAAAIAAAAIAAAEIAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIAAAAQgbAJgfAHIAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIAAAAIgCgDIAAAAIAAAAIAAgBIAAAAIABgDIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAQAegHAbgIIAAAAQgbAIgeAHIAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIAAAAIgBADIAAAAIAAABIAAAAIAAAAQgXAFgaADIAAAAIAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAgBgBAAIAAAAIgBgBIAAAAIABABIAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAIAAAAIAAABIgBADIAAAAQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIAAAAQgdAEgfABIAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAIAAAAIgBgDIAAAAIAAgBIAAAAIAAAAIABgDIAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIAAAAQAegCAdgDIAAAAQgdADgeACIAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABIAAAAIgBADIAAAAIAAAAIAAAAIAAABIgxABIAAAAIAAgBIAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAIAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAIAAAAIg8gCIAAAAIAAAAIAAAAIAAAAIAAAAIA8ACIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAABIAAAAIgCADIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAIg8gBgAx0J5IACgBIAAAAIgCABgAu/J0IgBAAIAAAAIABAAgAvAJ0IAAAAIAAAAIAAAAgAtNJcIAAAAIAAAAIAAAAgAtMJbIAAAAgA1hJbIAAAAIAAAAIAAAAgA3aJBIABAAIAAAAIgBAAgA3YJBIAAAAIAAAAIAAAAgArfInIABgBIAAAAIgBABgA5NIeIABgBIAAAAIgBABgA5LIeIgBgBIAAAAIABABgAndF1IABAAIAAAAIgBAAgAncF1IAAAAIAAAAIAAAAgAHvFxIABgBIAAAAIgBABgAKmFkIgBAAIAAAAIABAAgAGBFaIABgBIAAAAIgBABgAMPE3IACgBIAAAAIgCABgACWEuIACAAIAAAAIgCAAgAj9EfIgBAAIAAAAIABAAgAAhEcIACgBIAAAAIgCABgAiGEOIgCgBIAAAAIACABgAWBDzIACgBIAAAAIgCABgAULDfIACgBIAAAAIgCABgAPvDcIgBAAIAAAAIABAAgAPuDcIAAAAIAAAAIAAAAgASiDSIAAAAIAAAAIAAAAgASiDSIACgBIAAAAIgCABgA5pH8QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgA5pGDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgANEEiQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBIAAAAIgBgCIAAAAIABgBIAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAAAAQAbgOAcgLIAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABIAAAAIABAAIgBADIAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIAAAAQgcAMgbANIAAAAIgCABIAAAAIgBAAgAZmEcQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg9QAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAgA5pEMQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAQnDdQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAAAIAAAAIAAAAIABgDIAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAAAAQAegDAggBIAAAAQAAABABAAQAAAAABAAQAAAAAAAAQABABAAAAIAAAAIACADIAAAAIAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAIAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIAAAAQgfABgeADIAAAAIAAAAIAAAAIgEgBgAZmCjQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg8QAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIAAAAgA5pCUQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAZmAsQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAIAAg5QAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBIAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAA5QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAgA5pAbQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg6QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA6QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAZmhKQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg9QAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAgA5phaQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAZmjDQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg8QAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIAAAAgA5pjSQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAZmk6QAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAAAIAAg7QAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAgBIAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAA7QAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAgA5plLQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBgAZmmyQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg9QAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAAAIAAA9QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBABIAAAAIAAAAgA5pnCQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAIAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAZmorQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBgBAAAAIAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAIAAg8QAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAIAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAIAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIAAAAIAAA8QAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAAAIAAAAgA5po6QAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAg8QAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAAAAIADABIAAAAIAAAAIAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAAAAABIAAAAIAAA8QAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBABIAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAIAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAgAYAp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAWIp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAUQp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgASYp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAQgp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAOop5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAMwp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAK4p5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAJAp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAHIp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAFQp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgADYp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgABgp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAgWp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA6AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAiOp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAkGp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAl+p5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAn2p5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgApup5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgArmp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAtep5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAvWp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAxOp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgAzGp5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgA0+p5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgA22p5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAgA4up5QAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAABAAIAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIAAAAIA8AAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAAAQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAg");
	mask_1.setTransform(128.9,7.7);

	// Layer 9
	this.instance_3 = new lib.town();
	this.instance_3.setTransform(153.4,5.2);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:58.4},49).wait(1));

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AwKDYQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQAfgBAdgDQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgdADggABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAxCDZIg8gEQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAgBABAAIA7AEQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABIAAAAgAy6DQIg6gHQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAABIA7AHQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQAAABgBAAIgDABIgBAAgAuTDPQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAdgFAcgHQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgbAHgfAGIAAAAIgEgBgAsfCwQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAdgLAZgOQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgaAPgdALIgCAAIgCgBgAq8B7QAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAuglQAAAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIguAlIgDABIgBAAgApfAzQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAxgiQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgwAhIgDABIgBAAgAn9gNQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIA0gdQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAABABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIg0AdIgCAAIgCAAgAIDgvQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAdAFAeAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAAAABABQgBABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAQgfAAgegFgAJ6gvQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAdgEAdgIQABAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgeAJgeAEIgBAAIgDgBgAHRg5Ig8gNQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAIA8ANQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAgBABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgBAAgAmUhFQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAbgOAcgKQAAAAABAAQAAgBABAAQAAABABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQgbALgbANIgCAAIgCAAgALuhOQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQAVgIAUgLIAMgIQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgMAIIAAAAQgVALgUAIIgDAAIgCAAgAFahSIg7gLQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIA7ALQABAAAAAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgDABIgBAAgADkhnIg5gKQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAIA7AKQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDABIgBAAgAkmhxQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAdgJAdgHQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAQgcAGgdAJIgCABIgCgBgABwh6Ig6gJQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAABIA7AJQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAABIgDABIgBAAgANXiHQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAagOAcgLQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgcAMgbANIgCABIgCAAgAiyiMQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAegFAegCQABAAAAABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgeACgeAFIAAAAIgDgBgAABiMQgcgEgdgCQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAfACAbAEQABAAAAAAQABAAAAABQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgEABIAAAAgAPGi1QAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAgBQgBAAAAgBQABAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAdgIAegGQABgBAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgdAFgdAJIgCAAIgCgBgAT0jIQgfgEgdgBQgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAeACAfAEQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgDABIAAAAgAQ8jMQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAdgDAggBQAAABAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgfABgdADIgBAAIgDgBg");
	this.shape_1.setTransform(126.9,50.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-48.2,331.2,138.9);


(lib.lights = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lens_1();
	this.instance.setTransform(-64.1,3.2,1.041,1.041,0,0,0,-0.1,-0.1);
	this.instance.alpha = 0.359;
	this.instance.compositeOperation = "lighter";

	this.instance_1 = new lib.lens_1();
	this.instance_1.setTransform(42,0,1.34,1.34);
	this.instance_1.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.5,-47.5,281.1,95.1);


(lib.koleso_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},25,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47,-47,94,94);


(lib.gauge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuAgIAAgaQAAgGgCgBQgCgEgFAAIgEAAIgDADIgCACIAAAFIAAAbIgJAAIAAgaQAAgGgCgBQgCgEgGAAIgEAAIgCADIgCACIgBAFIAAAbIgHAAIAAgtIAHAAIAAAEIAFgEQADgBAEAAQAEAAADACQAEABACAEIAGgFQAEgCAEAAQAEAAADABIAFAEQACADABAEIABAHIAAAbgAgbAgIgLgXIgHAJIAAAOIgJAAIAAg6IAJgFIAAAlIAPgTIAKAAIgMAOIAPAfg");
	this.shape.setTransform(149.1,38.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer 21
	this.txt = new cjs.Text("0", "18px 'Arial'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 22;
	this.txt.lineWidth = 46;
	this.txt.setTransform(141.8,27.4);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(50));

	// Layer 14
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgzAAQAigVAggaIAlAvQgjAZgkAYg");
	this.shape_1.setTransform(162.6,60.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},4).wait(46));

	// Layer 13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpgKQAegPAWgPIAfAxQgXAPggARg");
	this.shape_2.setTransform(154.9,64.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},8).wait(42));

	// Layer 12
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtgMQAdgLAkgSIAaA0QglASghANg");
	this.shape_3.setTransform(147,68.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},12).wait(38));

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgrgSQAmgJAegLIATA4QgjALgmAKg");
	this.shape_4.setTransform(136.8,72.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},16).wait(34));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpgWQApgFAdgIIANA5QglAIgmAFg");
	this.shape_5.setTransform(128,74.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},19).wait(31));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglgaQAngCAdgDIAHA6QgoAEggABg");
	this.shape_6.setTransform(119,75.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},22).wait(28));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglAbIAGg6QAkAFAhAAIgBA6QglgBglgEg");
	this.shape_7.setTransform(107.5,75.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},25).wait(25));

	// Layer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpAWIAMg4QAiAHAlAFIgHA5QgjgEgpgJg");
	this.shape_8.setTransform(98.7,74.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},28).wait(22));

	// Layer 6
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtARIASg3QAkANAlAIIgNA4QgogJgmgNg");
	this.shape_9.setTransform(89.6,72.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},31).wait(19));

	// Layer 17
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdATIAXg1IAkAPIgWA2g");
	this.shape_10.setTransform(80.6,69.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},34).wait(16));

	// Layer 15
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbASIAagzIAdAOIgYA1g");
	this.shape_11.setTransform(76.1,67.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},37).wait(13));

	// Layer 20
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcARIAcgzIAdAQIgbA0g");
	this.shape_12.setTransform(72.1,65.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},40).wait(10));

	// Layer 18
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAPIAegxIAdASIgeAyIgdgTg");
	this.shape_13.setTransform(68.2,63.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},43).wait(7));

	// Layer 19
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeANIAhguIAcASIgfAxIgegVg");
	this.shape_14.setTransform(64.3,60.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).to({_off:true},46).wait(4));

	// Layer 16
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAMIAjgtIAcAUIghAvg");
	this.shape_15.setTransform(60.6,58.2);

	this.instance = new lib.gaugeAnim();
	this.instance.setTransform(60.6,58.3,1,1,0,0,0,3.2,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[{t:this.instance}]},49).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuJHJIi0o0IF2hpICQiBICOj+IXnBIIkKOzIvQCsg");
	mask.setTransform(119.8,48.3);

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKHWIAAh3IAlAAIAAB3gABlFaIAVgCIAGA8IgUACgAh+GRIAHg7IAUACIgIA8gADNFKIAUgDIAMA6IgUAEgAj6F6IAOg6IAUAFIgPA6gAEyExIATgGIASA4IgTAHgAlyFUIAVg4IATAHIgVA4gAGUEMIATgIIAYA3IgSAIgAnkEhIAbg2IASAJIgcA2gAHxDeIASgKIAeA0IgRAKgAAAEPIAAhdQiIAAh+gsIgcBSIgKgEIAdhSQiGguhuhXIg0BBIgIgGIA6hJIAEAEQBvBXCFAvQCFAvCLAAQCNAACDgtQCCguBuhWIAEgDIA/BMIgIAGIg4hGQhuBWiBAtIAdBUIgJADIgdhTQh9AriJAAIAABdgApQDfIAigyIAQALIghAzgAJKCmIAQgMIAkAwIgRANgAqzCSIAngtIAPAMIgnAugAKcBlIAPgOIAoAtIgPAOgAgLB5IAAgFIAGAAIAAhfQABgHAFgBIAkAAQADABADACQACACAAADIAAAjQAGAAAFACQAFADABAGIAAAKQgBAUACACQADAFAFgBQAEABAEgFQADgCgCgDIgJgrQgBgIACgCQgGgOgHgFIADgEQANAGAHAQIACAFIgEABQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABIAJAqQABAGgDAGQgGAHgJAAQgKAAgFgIQgDgFABgVIAAgJQAAgDgJgBIAAA0IAIAAIAAAFgAABA5IAkAAIAAgkIgkAAgAhOBDIAvgbIAAA9gAsNA5IAtgoIANAOIgsApgALnAcIANgPIAsApIgNAOgAMpgyIAMgRIAxAkIgNAQgAtbgoIAxgjIALARIgwAjgAoZgoQgHgMAAgSQAAgSAHgMQAKgNAQAAQASAAAIANQAIALAAATQAAASgIALQgJAOgRAAQgRAAgJgNgAoThGQAAAOAEAGQAFALALAAQAVAAgBgfQABgOgEgHQgFgLgMAAQgUAAAAAggAHwgdIAAhAIgOAAIAAgJQAPAAABgLIALAAIAABUgANjiJIAKgSIA0AfIgKARgAudiTIA1gcIAKARIg1AdgAOUjlIAIgTIA3AZIgIASgAvSkFIA4gWIAHASIg3AXgAmWk0QgGABgEgFQgEgFgBgFIAAgzQABgGAEgEQAEgFAGAAIBHAAQAGAAAEAFQAFAEgBAGIAAAzQABAFgFAFQgEAFgGgBgAlolIIAFAKIAKAAIgXg7IgKAAIgXA7IAKAAIAFgKgAO6lHIAHgTIA4ATIgGATgAl/lSIAKgcIAKAcgAv4l9IA5gPIAGATIg7AQgAj5mQIAAhGIAdAAQAXAAAAAXQAAAKgGAGQgHAGgKgBIgTAAIAAAagAjvm0IATAAQAMABABgMQgBgNgMAAIgTAAgAkWmQIAAhGIAKAAIAABGgAk0mQIgOgbIgQAAIAAAbIgKAAIAAhGIAfAAQAJAAAHAGQAGAFAAALQAAAQgPAEIAOAcgAlSm1IAVAAQAMAAAAgLQAAgMgMAAIgVAAgAmJmQIAAg7IgUAAIAAgLIA0AAIAAALIgVAAIAAA7g");
	this.shape_16.setTransform(112.5,53.7);

	this.shape_16.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(50));

	// Layer 3
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.098)"],[0,1],4.1,-33.7,4.1,7.7).s().p("AmDGoQi0hMiKiKQgzgzgrg4QgigugdgxQggg1gZg8QhPi6AAjLIAAgIIC5AAIAAAIQAACGAqB+QApB6BMBnIAADTQAuApAxAjQAcAUAdASQBHAsBKAeQCpBFC3AAQCwAACkhAQCeg9CDhzIAAjLQBahnAviDQAviDAAiRIAAgIIC/AAIAAAIQAADLhPC6QhLCxiLCKQiKCKi0BMQi5BPjLAAQjKAAi5hPg");
	this.shape_17.setTransform(112.9,38.4);

	this.shape_17.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-11.4,233,119.5);


(lib.car_animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.koleso_animated("synched",0,false);
	this.instance.setTransform(-38.6,23.3,0.091,0.345,0,0,0,-0.6,0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66));

	// Layer 6
	this.instance_1 = new lib.lights();
	this.instance_1.setTransform(-176.1,-13.6,0.908,0.908,0,0,0,-0.1,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(24));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah+F2Iibi9IBkhGIA3g3QASkxBYiBIDpCHIBGJlg");
	mask.setTransform(-111.8,30);

	// Layer 2
	this.instance_2 = new lib.koleso_animated("synched",0,false);
	this.instance_2.setTransform(-104.1,31.1,0.296,0.596,0,0,0,-0.4,0.1);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({regX:-0.5,scaleX:0.29,scaleY:0.59,x:-104.2,startPosition:24},0).to({regX:-0.8,scaleX:0.33,scaleY:0.59,x:-105.4,startPosition:25},11).wait(31));

	// Layer 1
	this.instance_3 = new lib.car_pek_1();
	this.instance_3.setTransform(-130,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(66));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiXCXQg2gzgMhcQgMhaBCg6QBCg5BeAAQBbAABCA5QBCA6AABSQAABPhGA3QhHA4hWAHIgUABQhLAAgxgvg");
	this.shape.setTransform(-114.1,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiYCXQg5g0gMhbQgLhaBDg6QBDg5BfAAQBdAABDA5QBDA6AABSQAABPhGA3QhGA4hYAHIgUABQhNAAgzgvg");
	this.shape_1.setTransform(-114.3,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiaCXQg7g0gMhbQgMhaBEg6QBFg5BhAAQBeAABEA5QBEA6AABSQAABPhFA4QhGA3haAHIgUABQhPAAg1gvg");
	this.shape_2.setTransform(-114.5,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AibCYQg9g1gNhbQgLhaBFg6QBFg5BjAAQBgAABFA5QBFA6AABSQAABPhFA4QhFA4hdAGIgUABQhQAAg3gug");
	this.shape_3.setTransform(-114.7,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AicCXQhAg0gMhcQgMhZBGg6QBHg5BkAAQBiAABGA5QBGA6AABRQAABPhEA4QhFA4hgAHIgSABQhTAAg5gvg");
	this.shape_4.setTransform(-114.9,45.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AieCXQhCg0gMhcQgMhZBHg6QBIg5BlAAQBkAABHA5QBIA6AABRQAABPhEA4QhEA5hjAGIgTABQhUAAg7gvg");
	this.shape_5.setTransform(-115,45.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AifCXQhEg0gNhcQgMhZBIg6QBKg5BnAAQBlAABIA5QBJA6AABRQAABPhEA5QhEA4hkAHIgTAAQhWAAg9gvg");
	this.shape_6.setTransform(-115.2,45.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AihCXQhGg0gNhcQgMhZBJg6QBLg5BoAAQBnAABJA5QBKA6AABRQAABPhDA5QhDA4hnAHIgUAAQhXAAg/gvg");
	this.shape_7.setTransform(-115.4,45.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiiCXQhIg1gNhbQgNhaBLg6QBLg5BqAAQBpAABKA5QBLA6AABSQAABPhCA4QhDA5hpAHIgTABQhaAAhBgwg");
	this.shape_8.setTransform(-115.6,45.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AijCXQhLg1gNhbQgNhaBMg6QBNg5BrAAQBrAABLA5QBMA6AABSQAABPhCA4QhCA5hrAHIgTABQhdAAhCgwg");
	this.shape_9.setTransform(-115.8,45.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AilCXQhMg1gOhbQgNhaBNg6QBOg5BtAAQBsAABMA5QBOA6AABSQAABPhCA5QhCA4htAHIgTABQheAAhFgwg");
	this.shape_10.setTransform(-115.9,45.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AimCXQhPg1gOhbQgNhaBOg6QBPg5BvAAQBuAABNA5QBPA6AABSQAABPhCA5QhBA5hvAGIgUABQhgAAhGgwg");
	this.shape_11.setTransform(-116.1,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},24).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252,-55,220,119.8);


(lib.arrowAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.arrow2("synched",0);
	this.instance.setTransform(12.3,-12.2,0.834,0.834,63.1,0,0,0.1,-16);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1,rotation:-6,x:12.2,y:-4.3,alpha:1},7,cjs.Ease.get(-1)).to({regY:-15.9,scaleX:1.01,rotation:0.3},2,cjs.Ease.get(-1)).to({regX:0,regY:-16,scaleX:1,rotation:6.9,x:12.1},2,cjs.Ease.get(1)).to({scaleX:1.03,rotation:1.3,y:-4.4},2,cjs.Ease.get(-1)).to({scaleX:1.05,rotation:-4.3,y:-4.3},2,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.83,scaleY:0.83,rotation:63.1,x:12.3,y:-12.2,alpha:0},6,cjs.Ease.get(-1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.5,-26.8,61.9,39.6);


(lib.replayArrStaticAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (exportRoot.currentFrame >= 319)
		{
			this.stop();
		}
	}
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(1));

	// Layer 1
	this.instance = new lib.replayArr();
	this.instance.setTransform(17.9,18.7,1,1,0,0,0,17.9,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},14).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.8,39.4);


(lib.replayArrAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer 1
	this.instance = new lib.replayArr();
	this.instance.setTransform(17.9,18.7,1,1,0,0,0,17.9,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-90,y:18.6},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.8,39.4);


(lib.replayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.replayArrStaticAnim();
	this.instance.setTransform(18.9,19.7,1,1,0,0,0,18.9,19.7);

	this.instance_1 = new lib.replayArrAnim();
	this.instance_1.setTransform(17.9,18.7,1,1,0,0,0,17.9,18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(17.2,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.8,39.4);


// stage content:



(lib.cx5_v2_240x400_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		AddFont("LettersLaughingattheirExecution", "LettersLaughingbyQuantizedandCalibrated.woff", "normal", "normal");
		AddExit(this.exitBtn);
		
		var Game = function () {
			this.isActive = false;
			this.isTrigered = false;
			this.cnt_auto = 0;
			this.iddleTimer = setTimeout(autopilot, 5000);
			exportRoot.tank.txt.font = "normal 16px LettersLaughingattheirExecution";
			this.init();
		}
		
		Game.prototype.reset = function () {
			exportRoot.gameCTA.alpha = exportRoot.arrow.alpha = 1;
			exportRoot.gotoAndStop(0);
		}
		
		Game.prototype.init = function () {
			stage.addEventListener("stagemousemove", onStageMouseOver);
			exportRoot.zone.on("mouseover", function () {
				exportRoot.game.isActive = true
			})
			exportRoot.zone.on("mouseout", function () {
				exportRoot.game.isActive = false
			})
			exportRoot.tank.txt.text = 0;
			exportRoot.car.gotoAndStop(1);
			exportRoot.tank.gotoAndStop(1);
		}
		
		function onStageMouseOver() {
			clearTimeout(exportRoot.game.iddleTimer);
			stage.addEventListener("stagemousemove", onMouseMove);
			stage.removeEventListener("stagemousemove", onStageMouseOver);
			createjs.Tween.get(exportRoot.arrow).to({
				alpha: 0
			}, 300, createjs.Ease.quadInOut);
			createjs.Tween.get(exportRoot.gameCTA).to({
				alpha: 0
			}, 300, createjs.Ease.quadInOut).call(function () {
				exportRoot.gameTag.gotoAndPlay(1);
			});
		}
		
		function onTick() {
			var p = exportRoot.game.cnt_auto * 2
			exportRoot.tank.txt.text = Math.floor(794 / 100 * p);
			exportRoot.car.gotoAndStop(Math.floor(p / 2));
			exportRoot.tank.gotoAndStop(Math.floor(p / 2));
			exportRoot.game.cnt_auto++
			if (p >= 99) {
				exportRoot.gotoAndPlay(1);
				stage.removeEventListener("tick", onTick);
			}
		
		}
		
		function autopilot() {
			stage.addEventListener("tick", onTick);
			stage.removeEventListener("stagemousemove", onStageMouseOver);
			createjs.Tween.get(exportRoot.arrow).to({
				alpha: 0
			}, 300, createjs.Ease.quadInOut);
			createjs.Tween.get(exportRoot.gameCTA).to({
				alpha: 0
			}, 300, createjs.Ease.quadInOut).call(function () {
				exportRoot.gameTag.gotoAndPlay(1);
			});
		}
		
		function onMouseMove() {
			if (exportRoot.game.isActive) {
				var z = exportRoot.zone;
				var p = (stage.mouseX - z.x) / 200 * 100;
				if (p < 0) {
					p = 0
				};
				if (p > 99) {
					p = 100
				};
				
				exportRoot.tank.txt.text = Math.floor(794 / 100 * p);
				exportRoot.car.gotoAndStop(Math.floor(p / 2));
				exportRoot.tank.gotoAndStop(Math.floor(p / 2));
				if (p >= 95) {
					exportRoot.gotoAndPlay(1);
					stage.removeEventListener("stagemousemove", onMouseMove);
				}
			}
		}
		
		this.game = new Game();
	}
	this.frame_72 = function() {
		this.stop();
		this.arrBtn.addEventListener("click", onReplay.bind(this));
		
		function onReplay() {
			this.game.reset();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(72).call(this.frame_72).wait(3));

	// replay
	this.arrBtn = new lib.replayBtn();
	this.arrBtn.setTransform(218.3,366.7,0.356,0.342,0,0,0,18.1,19.3);
	this.arrBtn.alpha = 0;
	this.arrBtn._off = true;
	new cjs.ButtonHelper(this.arrBtn, 0, 1, 2, false, new lib.replayBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.arrBtn).wait(61).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(3));

	// Layer 3
	this.zone = new lib.zone();
	this.zone.setTransform(24.6,171.6,0.768,0.852,0,0,0,0.2,61.3);
	new cjs.ButtonHelper(this.zone, 0, 1, 2, false, new lib.zone(), 3);

	this.timeline.addTween(cjs.Tween.get(this.zone).wait(75));

	// exit
	this.exitBtn = new lib.exit();
	this.exitBtn.setTransform(120,200,0.8,1.6,0,0,0,150,125);
	new cjs.ButtonHelper(this.exitBtn, 0, 1, 2, false, new lib.exit(), 3);

	this.timeline.addTween(cjs.Tween.get(this.exitBtn).wait(75));

	// btn
	this.btnn = new lib.btn();
	this.btnn.setTransform(120.1,366.5,0.024,0.148,0,0,0,109,12.5);
	this.btnn._off = true;
	new cjs.ButtonHelper(this.btnn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnn).wait(13).to({_off:false},0).to({scaleX:1,scaleY:1,x:120},9).to({regX:109.1,regY:12.6,scaleX:1.07,scaleY:1.07,x:120.1,y:366.6},3).to({regX:109,regY:12.5,scaleX:1,scaleY:1,x:121,y:366.5},3).wait(47));

	// CTA
	this.gameCTA = new lib.CTA();
	this.gameCTA.setTransform(121,366.5,1,1,0,0,0,109,12.5);
	new cjs.ButtonHelper(this.gameCTA, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.gameCTA).to({_off:true},1).wait(74));

	// logo
	this.instance = new lib.logo_1();
	this.instance.setTransform(41,38.5,0.479,0.482,0,0,0,60.6,55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75));

	// arrow
	this.arrow = new lib.arrowAnim();
	this.arrow.setTransform(12.4,238.5,1,1,0,111.3,-68.7,15.4,27.2);

	this.timeline.addTween(cjs.Tween.get(this.arrow).to({_off:true},1).wait(74));

	// path
	this.car = new lib.path();
	this.car.setTransform(116.9,185.3,0.769,0.769,0,0,0,128.1,35.2);

	this.timeline.addTween(cjs.Tween.get(this.car).to({_off:true},1).wait(74));

	// gameTag
	this.gameTag = new lib.tag02Anim();
	this.gameTag.setTransform(102.1,366.6,0.8,0.8,0,0,0,115.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.gameTag).to({_off:true},1).wait(74));

	// tag
	this.instance_1 = new lib.tag_Animated();
	this.instance_1.setTransform(92.6,128.6,0.79,0.79);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).wait(70));

	// cx5
	this.instance_2 = new lib.car_animated("synched",0,false);
	this.instance_2.setTransform(282,193,0.338,0.338);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,x:262,y:248,alpha:1,startPosition:25},25,cjs.Ease.get(1)).wait(49));

	// Layer 2
	this.tank = new lib.gauge();
	this.tank.setTransform(121.3,288.7,0.991,0.991,0,0,0,116.8,54.3);

	this.timeline.addTween(cjs.Tween.get(this.tank).to({_off:true},1).wait(74));

	// bg2
	this.instance_3 = new lib.ащт2("synched",0);
	this.instance_3.setTransform(150,245);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(74));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2C2C2C","#000000"],[0,1],-9.7,34,0,-9.7,34,210.1).s().p("Ay+fkMAAAg/GMAl9AAAMAAAA/Gg");
	this.shape.setTransform(121.5,198.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.9,196.1,356.4,404);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;