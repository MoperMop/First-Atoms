import Electron from "./particles/electron.js";
import Particle from "./particles/particle.js";
import Proton from "./particles/proton.js";


const p = new Proton(100, 100);
p.velocityX = 100;

const e = new Electron(100, 200);
e.velocityX = 100;


Particle.render();
