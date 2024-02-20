import Particle from "./particles/particle.js";

import Electron from "./particles/electron.js";

import Hydrogen from "./particles/hydrogen.js";
import Helium from "./particles/helium.js";


const v = Math.random() * 100 + 200;
const d = (Math.random() - 0.5) * 100;
const ed = (Math.random() - 0.5) * 100;
new Helium(innerWidth / 2, innerHeight / 2).velocityY = d;
new Electron(innerWidth / 2 + 200, innerHeight / 2).velocityY = v - d / 2 + ed;
new Electron(innerWidth / 2 - 200, innerHeight / 2).velocityY = -v - d / 2 - ed;


Particle.render();
