const {Triangle, Circle, Square} = require('./shapes')

describe('shape', () =>{
    it('should take the color + shape and render the corresponding render()', () => {
        const triangle = new Triangle()
        triangle.setColor('green')
        expect(triangle.render()).toEqual(`<polygon points="150, 25 244, 182 56, 182" fill="green" />`)
    })
})
describe('shape', () =>{
    it('should take the color + shape and render the corresponding render()', () => {
        const circle = new Circle()
        circle.setColor('green')
        expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green"/>`)
    })
})
describe('shape', () =>{
    it('should take the color + shape and render the corresponding render()', () => {
        const square = new Square()
        square.setColor('green')
        expect(square.render()).toEqual(`<rect x="45" y="30" width="200" height="150" fill="green"/>`)
    })
})