class SVG {
    constructor() {
        this.textEl = '',
        this.shapeEl = ''
    }
    render() {
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }
    setText(logoName, tColor) {
        this.textEl = `<text x="150" y="150" font-size="50" text-anchor="middle" fill="${tColor}">${logoName}</text> `
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

module.exports = SVG;