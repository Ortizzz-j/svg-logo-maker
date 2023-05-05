const SVG = require('./svg')
const {Triangle} = require('./shapes') 

test ('it should render an svgEl that is 300 by 200.', () => {
    const svg = new SVG();
    expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>`)
})

test ('it should append textEl with a text message and color', () => {
    const svg = new SVG();
    svg.setText('Red', 'blue')
    expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="150" font-size="50" text-anchor="middle" fill="blue">Red</text> </svg>`)
})

test ('it should render shape and color with text', () => {
    const shape = new Triangle();
    const svg = new SVG();
    svg.setText('Hey','red')
    shape.setColor('black')
    svg.setShape(shape)
    expect(svg.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 25 244, 182 56, 182" fill="black" /><text x="150" y="150" font-size="50" text-anchor="middle" fill="red">Hey</text> </svg>`)
}) 

test ('should throw error if text more than 3 characters', () => {
    const svg = new SVG();
    expect(() => svg.setText('four', 'blue')).toThrow(new Error('Cannot be more than 3 characters'))
})

