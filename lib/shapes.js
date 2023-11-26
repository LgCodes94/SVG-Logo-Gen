class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="160" y="100" width="300" height="300" fill="${this.shapeColor}"/>`;
  }
}

module.exports = { Triangle, Circle, Square };
