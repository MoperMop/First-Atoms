/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
if (canvas === null) throw new Error("couldn't find canvas");

const ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d", {
  alpha: false,
}));


let deltaTime = 0;
let lastTime = Date.now();


let x = 0;


const draw = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  deltaTime = Math.min(Date.now() - lastTime, 1000) / 1000;
  lastTime = Date.now();


  ctx.fillStyle = "blue";


  ctx.fillRect(x += 100 * deltaTime, canvas.height / 2 - 50, 100, 100);



  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);