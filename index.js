const path = require('path')
const fs = require('fs');
const questions = require('./library/questions');
const SVG = require('./library/svg');
const {Triangle, Circle, Square} = require('./library/shapes');
const inquirer = require('inquirer')


function init(){
    inquirer 
        .prompt(questions)
        .then(data => {
            console.log(data)
            let shape;
            if(data.shape === 'Triangle'){
                shape = new Triangle()
            }
            else if(data.shape === 'Circle'){
                shape = new Circle()
            }
            else if(data.shape === 'Square'){
                shape = new Square()
            }
            shape.setColor(data.color)
            const svg = new SVG()
            svg.setShape(shape)
            svg.setText(data.logoName)
            writeToFile('logo.svg', svg.render())
        })
} 

init();

function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


// The code gets run and file created with the index. Only thing would be to make the file come out with a unique name for each logo so they dont get duplicated.