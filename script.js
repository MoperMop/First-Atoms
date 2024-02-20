import Particle from "./particles/particle.js";

import Electron from "./particles/electron.js";

import Hydrogen from "./particles/hydrogen.js";
import Helium from "./particles/helium.js";


let ps = 0;
Particle.render(() => {
  while (ps < innerWidth * innerHeight / 50000) {
    ps++;
    

    /** @type {[number, number]} */
    const pos = [0, 0];
    /** @type {[number, number]} */
    const v = [(Math.random() - 0.5) * 1000, (Math.random() - 0.5) * 1000];
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
    switch (/** @type {0 | 1 | 2}*/ (Math.floor(Math.random() * 3))) {
      case 0: p = new Electron(...pos); break;
      case 1: p = new Hydrogen(...pos); break;
      case 2: p = new Helium(...pos); break;
    }
    p.velocityX = v[0];
    p.velocityY = v[1];
  }
});
