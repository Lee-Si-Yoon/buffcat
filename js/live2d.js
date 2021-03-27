const mainpage = document.querySelector('.mainpage');
let vh = mainpage.offsetHeight;
let vw = mainpage.offsetWidth;

let app = new PIXI.Application({
  width: vw,
  height: vh,
});
mainpage.appendChild(app.view);

let img = new PIXI.Sprite.from("../img/maxresdefault.jpg");
//img.width = vw;
img.height = vh;
app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("../img/maxresdefault_dep.jpg");
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];
/*
window.onmousemove = function (e) {
  displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 10;
  displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 10;
};*/

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  displacementFilter.scale.x = scroll - scroll;
  displacementFilter.scale.y = scroll - scroll;
});