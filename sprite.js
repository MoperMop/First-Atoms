export default class Sprite {
  static canvas = /** @type {HTMLCanvasElement} */
    (document.querySelector("canvas"));
  static ctx = /** @type {CanvasRenderingContext2D} */
    (Sprite.canvas.getContext("2d"));

  static #lastTime = Date.now();
  static deltaTime = 0;


  static render() {
    const render = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      deltaTime = Math.min(Date.now() - lastTime, 1000) / 1000;
      lastTime = Date.now();


      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }
}