import inquirer from "inquirer";
let mytodolist =[]
let asktoAdd=true
while(asktoAdd)
    {
const newtask = await inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What would you like to add in your to do list?",
    },
    {
        type: 'confirm',
        name: 'addconfirm',
        message: "Do you want to Add more?",
        default:"false",
    },
]);
mytodolist.push(newtask.name)
asktoAdd=newtask.addconfirm;
console.log(mytodolist)

    }
       

