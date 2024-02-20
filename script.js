import Particle from "./particles/particle.js";

import Electron from "./particles/electron.js";

import Hydrogen from "./particles/hydrogen.js";
import Helium from "./particles/helium.js";


new Helium(300, 100).velocityRotation = Math.PI / 2;
new Hydrogen(100, 100);
new Hydrogen(100, 200);
new Electron(200, 100);
new Electron(200, 200);


Particle.render();
