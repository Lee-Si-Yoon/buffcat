const mainPage = document.querySelector('.mainpage');

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0xeeeeee, 
  resolution: window.devicePixelRatio || 1,
});

mainPage.appendChild(app.view);

// holder to store the aliens
const aliens = [];

const totalDudes = 1;

for (let i = 0; i < totalDudes; i++) {
  // create a new Sprite that uses the image name that we just generated as its source
  const dude = PIXI.Sprite.from("../img/cat1.png");
  const dude1 = PIXI.Sprite.from("../img/cat2.png");
  const dude2 = PIXI.Sprite.from("../img/cat3.png");
  // set the anchor point so the texture is centerd on the sprite
  dude.anchor.set(0.5);
  dude1.anchor.set(0.5);
  dude2.anchor.set(0.5);

  // set a random scale for the dude - no point them all being the same size!
  dude.scale.set(0.2 + Math.random() * 0.3);
  dude1.scale.set(0.3 + Math.random() * 0.3);
  dude2.scale.set(0.8 + Math.random() * 0.3);

  // finally lets set the dude to be at a random position..
  dude.x = Math.random() * app.screen.width;
  dude.y = Math.random() * app.screen.height;
  dude1.x = Math.random() * app.screen.width;
  dude2.y = Math.random() * app.screen.height;
  dude1.x = Math.random() * app.screen.width;
  dude2.y = Math.random() * app.screen.height;
          //dude.tint = Math.random() * 0xffffff;
  // create some extra properties that will control movement :
  // create a random direction in radians. This is a number between 0 and PI*2 which is the equivalent of 0 - 360 degrees
  dude.direction = Math.random() * Math.PI * 2;
  dude1.direction = Math.random() * Math.PI * 2;
  dude2.direction = Math.random() * Math.PI * 2;

  // this number will be used to modify the direction of the dude over time
  dude.turningSpeed = Math.random() - 0.5;
  dude1.turningSpeed = Math.random() - 0.5;
  dude2.turningSpeed = Math.random() - 0.5;

  // create a random speed for the dude between 2 - 4
  dude.speed = 1 + Math.random() * 1;
  dude1.speed = 1 + Math.random() * 1;
  dude2.speed = 1 + Math.random() * 1;

  // finally we push the dude into the aliens array so it it can be easily accessed later
  aliens.push(dude);
  aliens.push(dude1);
  aliens.push(dude2);
  app.stage.addChild(dude);
  app.stage.addChild(dude1);
  app.stage.addChild(dude2);
}

// create a bounding box for the little dudes
const dudeBoundsPadding = 100;
const dudeBounds = new PIXI.Rectangle(
  -dudeBoundsPadding, 
  -dudeBoundsPadding,
  app.screen.width + dudeBoundsPadding * 2,
  app.screen.height + dudeBoundsPadding * 2
);

app.ticker.add(() => {
  // iterate through the dudes and update their position
  for (let i = 0; i < aliens.length; i++) {
    const dude = aliens[i];
    dude.direction += dude.turningSpeed * 0.01;
    dude.x += Math.sin(dude.direction) * dude.speed;
    dude.y += Math.cos(dude.direction) * dude.speed;
    dude.rotation = -dude.direction - Math.PI / 2;

    // wrap the dudes by testing their bounds...
    if (dude.x < dudeBounds.x) {
      dude.x += dudeBounds.width;
    } else if (dude.x > dudeBounds.x + dudeBounds.width) {
      dude.x -= dudeBounds.width;
    }

    if (dude.y < dudeBounds.y) {
      dude.y += dudeBounds.height;
    } else if (dude.y > dudeBounds.y + dudeBounds.height) {
      dude.y -= dudeBounds.height;
    }
  }
});


function moveToSub(){
  const subpage = document.querySelector(".subpage");
  subpage.scrollIntoView({behavior: "smooth"});
}

window.setTimeout(moveToSub, 4000);