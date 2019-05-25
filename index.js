const Function=require('./functions');
const Action=require('./action');
const inquirer=require('inquirer');

Action.Figlet('Calculator')


var questions = [{
  name: 'Operations',
  type: 'list',
  message: 'Which operation do you want to do',
  choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
}]

inquirer.prompt(questions).then((answers) => {
  if(answers.Operations=='Addition'){
    Function.Addition();
  }
  else if(answers.Operations=='Subtraction'){
    Function.Subtraction();
  }
  else if(answers.Operations=='Division'){
    Function.Multiplication();    
  }
  else if(answers.Operations=='Multiplication'){
    Function.Division();
  }
});