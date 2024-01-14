// Inspired by:
// Shattering Images
// Szenia Zadvornykh https://codepen.io/zadvorsky/pen/abaeOK
// triangulation using https://github.com/ironwallaby/delaunay

const TWO_PI = Math.PI * 2;

var images = [],
  imageIndex = 0;

var image,
  imageWidth = 1500,
  imageHeight = 900;

var vertices = [],
  indices = [],
  fragments = [];

var container = document.getElementById("container");

var clickPosition = [];

const glassSounds = [
  "sound/41348__datasoundsample__glass-shatter.wav",
  "sound/203375__c_rogers__glass-shattering_01.ogg",
  "sound/321139__jsbarrett__breaking-glass.wav",
];

// Bat
const bat = new Image();
bat.src = "img/bat.svg";
bat.style.zIndex = 10000;
bat.width = 400;
bat.style.position = "absolute";
bat.style.display = "none";
container.appendChild(bat);

let isShattering = false;

const infoContainer = document.getElementById("info");
const startButton = document.getElementById("start");

window.onload = function () {
  TweenMax.set(container, { perspective: 500 });

  TweenMax.fromTo(infoContainer, 1, { alpha:0, rotation: 45, y: -1000 }, { alpha:1, rotation: 0, y: 0, ease: Back.easeOut });
  infoContainer.style.display = 'inline-block';
  startButton.onclick = start;

  // images from reddit/r/wallpapers
  var urls = [
      "img/zuck.webp",
      "img/x-musk.png",
      "img/the-Frugal-Architect.png",
      "img/macron.png",
      "img/The-Techno-Optimist-Manifesto-Andreessen-Horowitz.png",
      "img/trump.png",
    ],
    image,
    loaded = 0;

  // very quick and dirty hack to load and display the first image asap
  images[0] = image = new Image();
  image.onload = function () {
    if (++loaded === 1) {
      //placeImage();
      for (var i = 1; i < urls.length; i++) {
        images[i] = image = new Image();

        image.src = urls[i];
      }
    }
  };
  image.src = urls[0];
};

function start() {
  TweenMax.fromTo(infoContainer, 0.5, { rotation: 0, y: 0 }, { rotation: -45, y: 600, alpha:0, ease: Back.easeIn, onComplete: function() {
    infoContainer.remove();

    placeImage();

    onmousemove = (event) => {
      bat.style.display = "block";
      bat.style.left = event.pageX - 240 + "px";
      bat.style.top = event.pageY - 420 + "px";
    };
  }});
}

function placeImage() {
  isShattering = false;
  imageIndex++;

  if (imageIndex === images.length) imageIndex = 0;

  image = images[imageIndex];
  document.body.addEventListener("click", imageClickHandler);
  container.appendChild(image);
  TweenMax.fromTo(image, 0.75, { y: -1000 }, { y: 0, ease: Back.easeOut });
}

function imageClickHandler(event) {
  if (isShattering) {
    return false;
  }

  isShattering = true;

  var box = image.getBoundingClientRect(),
    top = box.top,
    left = box.left;

  clickPosition[0] = event.clientX - left - 100;
  clickPosition[1] = event.clientY - top - 200;

  TweenMax.fromTo(
    bat,
    0.2,
    { rotation: 0 },
    {
      rotation: -100,
      ease: Back.easeOut,
      onComplete: function () {
        triangulate();
        shatter();
        TweenMax.fromTo(
          bat,
          1,
          { rotation: -100 },
          { rotation: 0, ease: Back.easeOut }
        );
      },
    }
  );
}

function triangulate() {
  var rings = [
      { r: 50, c: 12 },
      { r: 150, c: 12 },
      { r: 300, c: 12 },
      { r: 1200, c: 12 },
      { r: 2000, c: 12 }, // very large in case of corner clicks
    ],
    x,
    y,
    centerX = clickPosition[0],
    centerY = clickPosition[1];

  vertices.push([centerX, centerY]);

  rings.forEach(function (ring) {
    var radius = ring.r,
      count = ring.c,
      variance = radius * 0.25;

    for (var i = 0; i < count; i++) {
      x =
        Math.cos((i / count) * TWO_PI) * radius +
        centerX +
        randomRange(-variance, variance);
      y =
        Math.sin((i / count) * TWO_PI) * radius +
        centerY +
        randomRange(-variance, variance);
      vertices.push([x, y]);
    }
  });

  vertices.forEach(function (v) {
    v[0] = clamp(v[0], 0, imageWidth);
    v[1] = clamp(v[1], 0, imageHeight);
  });

  indices = Delaunay.triangulate(vertices);
}

function shatter() {
  const sound = new Audio(glassSounds[Math.round(randomRange(0, 2))]);
  sound.addEventListener("canplaythrough", (event) => {
    sound.play();
  });

  var p0, p1, p2, fragment;

  var tl0 = new TimelineMax({ onComplete: shatterCompleteHandler });

  for (var i = 0; i < indices.length; i += 3) {
    p0 = vertices[indices[i + 0]];
    p1 = vertices[indices[i + 1]];
    p2 = vertices[indices[i + 2]];

    fragment = new Fragment(p0, p1, p2);

    var dx = fragment.centroid[0] - clickPosition[0],
      dy = fragment.centroid[1] - clickPosition[1],
      d = Math.sqrt(dx * dx + dy * dy),
      rx = 30 * sign(dy),
      ry = 90 * -sign(dx),
      delay = d * 0.001 * randomRange(0.9, 1.1);

    fragment.canvas.style.zIndex = Math.floor(d).toString();

    var tl1 = new TimelineMax();

    tl1.to(fragment.canvas, 1, {
      z: -500,
      rotationX: rx,
      rotationY: ry,
      ease: Cubic.easeIn,
    });
    tl1.to(fragment.canvas, 0.4, { alpha: 0 }, 0.6);

    tl0.insert(tl1, delay);

    fragments.push(fragment);
    container.appendChild(fragment.canvas);
  }

  container.removeChild(image);
}

function shatterCompleteHandler() {
  // add pooling?
  fragments.forEach(function (f) {
    container.removeChild(f.canvas);
  });
  fragments.length = 0;
  vertices.length = 0;
  indices.length = 0;

  placeImage();
}

//////////////
// MATH UTILS
//////////////

function randomRange(min, max) {
  return min + (max - min) * Math.random();
}

function clamp(x, min, max) {
  return x < min ? min : x > max ? max : x;
}

function sign(x) {
  return x < 0 ? -1 : 1;
}

//////////////
// FRAGMENT
//////////////

Fragment = function (v0, v1, v2) {
  this.v0 = v0;
  this.v1 = v1;
  this.v2 = v2;

  this.computeBoundingBox();
  this.computeCentroid();
  this.createCanvas();
  this.clip();
};
Fragment.prototype = {
  computeBoundingBox: function () {
    var xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]),
      xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]),
      yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]),
      yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

    this.box = {
      x: xMin,
      y: yMin,
      w: xMax - xMin,
      h: yMax - yMin,
    };
  },
  computeCentroid: function () {
    var x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3,
      y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

    this.centroid = [x, y];
  },
  createCanvas: function () {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.box.w;
    this.canvas.height = this.box.h;
    this.canvas.style.width = this.box.w + "px";
    this.canvas.style.height = this.box.h + "px";
    this.canvas.style.left = this.box.x + "px";
    this.canvas.style.top = this.box.y + "px";
    this.ctx = this.canvas.getContext("2d");
  },
  clip: function () {
    this.ctx.translate(-this.box.x, -this.box.y);
    this.ctx.beginPath();
    this.ctx.moveTo(this.v0[0], this.v0[1]);
    this.ctx.lineTo(this.v1[0], this.v1[1]);
    this.ctx.lineTo(this.v2[0], this.v2[1]);
    this.ctx.closePath();
    this.ctx.clip();
    this.ctx.drawImage(image, 0, 0);
  },
};
