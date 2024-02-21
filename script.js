import Particle from "./particles/particle.js";

import Electron from "./particles/electron.js";

import Hydrogen from "./particles/hydrogen.js";
import Helium from "./particles/helium.js";


const temp = /** @type {HTMLInputElement} */ (document.querySelector("input"));


let ps = 0;
Particle.render(() => {
  while (ps < innerWidth * innerHeight / 50000) {
    ps++;
    

    /** @type {[number, number]} */
    const pos = [0, 0];

    const power = (Math.random() - 0.5) * 100 + temp.valueAsNumber;
    const angle = Math.random() * Math.PI * 2;
    /** @type {[number, number]} */
    const v = [Math.sin(angle) * power, Math.cos(angle) * power];

    switch (Math.floor(Math.random() * 4)) {
      case 0:
        pos[0] = -50;
        pos[1] = Math.random() * innerHeight;

        v[0] = Math.abs(v[0]);
        break;
      case 1:
        pos[0] = innerWidth + 50;
        pos[1] = Math.random() * innerHeight;

        v[0] = -Math.abs(v[0]);
        break;
      case 2:
        pos[0] = Math.random() * innerWidth;
        pos[1] = -50;

        v[1] = Math.abs(v[1]);
        break;
      case 3:
        pos[0] = Math.random() * innerWidth;
        pos[1] = innerHeight + 50;

        v[1] = -Math.abs(v[1]);
        break;
    }


    /** @type {Particle?} */
    let p = null;
    if (Math.random() < 0.5) p = new Electron(...pos);
    else if (Math.random() < 0.9) p = new Hydrogen(...pos);
    else p = new Helium(...pos);

    p.velocityX = v[0];
    p.velocityY = v[1];
  }
}, (p) => {
  if (p.x < -50 || p.x > innerWidth + 50 || p.y < -50 || p.y > innerHeight + 50) {
    p.remove();
    ps--;
  }
});
