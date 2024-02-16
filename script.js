import Particle from "./particles/particle.js";
import Electron from "./particles/electron.js";
import Hydrogen from "./particles/hydrogen.js";


const e = new Electron(100, 200);
e.velocityX = 100;

const h = new Hydrogen(100, 100);
h.velocityX = 100;


Particle.render();
