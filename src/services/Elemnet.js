export class Elemnet {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  drowing(elemnet) {
    const ctx = this.ctx;
    switch (elemnet.type) {
      case "image":
        const { image, x, y, width, height } = elemnet;
        ctx.drowImage(image, x, y, width, height);
        break;
    }
  }

  image(img, x, y, width, height) {
    return { type: "image", image: img, x, y, width, height, id };
  }
}
