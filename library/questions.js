const questions = [
        {
            type: 'list',
            message: 'What shape would you like to make your logo?',
            name: 'shape',
            choices:['Triangle', 'Circle', 'Square']
        },
        {
            type: 'input',
            message: 'What color is your logo?',
            name: 'color'
        },
        {
            type: 'maxlength-input',
            message: 'What text would you like for your logo? -max length 3 characters',
            name: 'logoName',
            validate: (text) => {
                if(text.length <= 3){
                    return true;
                }
                return 'Text must not exceed 3 characters!'
            }
        },
        {
            type : 'input',
            message: 'What color would you like your text to be?',
            name: 'tColor'
        }
    ];


module.exports = questions;