/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
if (canvas === null) throw new Error("couldn't find canvas");

const ctx = /** @type {CanvasRenderingContext2D} */ (canvas.getContext("2d", {
  alpha: false,
}));


const draw = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  ctx.fillStyle = "blue";
  ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);


  requestAnimationFrame(draw);
}


draw();