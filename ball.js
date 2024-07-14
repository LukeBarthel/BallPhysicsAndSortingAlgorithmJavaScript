class ball {
  constructor(x, y, diameter) {
    this.vibrancy = 150;

    this.position = createVector(x, y);
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector(0, 0.0981);
    this.diameter = diameter;
    this.radius = diameter / 2;
    this.color = createVector(
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255
    );
  }

  update() {
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  }

  show() {
    fill(this.color.x, this.color.y, this.color.z);
    circle(this.position.x, this.position.y, this.diameter);
  }
}
