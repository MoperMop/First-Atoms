import Particle from "./particles/particle.js";

import Electron from "./particles/electron.js";

import Hydrogen from "./particles/hydrogen.js";
import Helium from "./particles/helium.js";


const h = new Hydrogen(100, 100);
h.velocityX = 100;

const e = new Electron(100, 200);
e.velocityX = 100;

const he = new Helium(100, 300);
he.velocityX = 100;
he.velocityRotation = Math.PI;


Particle.render();
