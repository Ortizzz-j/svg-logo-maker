
class Shape { constructor(){
    this.color = '';
    }
    setColor(color){this.color = color}
};




class Triangle extends Shape{
    render(){
        return `<polygon points="150, 25 244, 182 56, 182" fill="${this.color}" />`
    }
};

class Circle extends Shape{
    render(){
        `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
};

class Square extends Shape{
    render(){
        `<rect x="45" y="30" width = "200" height = "150" style = "fill:${this.color}"/>`
    }
}







/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<polygon points="150, 25 244, 182 56, 182" fill="blue" />

<text x="150" y="150" font-size="50" text-anchor="middle" fill="white">SVG</text>

<rect x="45" y="30" width = "200" height = "150" style = "fill:red"/>

<text x="150" y="115" font-size="60" text-anchor="middle" fill="white">SVG</text>

<circle cx="150" cy="100" r="80" fill="green" />

<text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg> */

module.exports = {Triangle, Circle, Square}