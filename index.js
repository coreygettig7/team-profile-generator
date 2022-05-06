const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const promptManager = () => {
    console.log(`Let's go ahead and build out your team!`);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the team manager's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the team manager's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the team manager's email address"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the team manager's office number"
        }
    ])
    .then(({ name, id, email, officeNumber }) => {
        this.Manager = new Manager(name, id, email, officeNumber);
    })
    .then(teamBuildPrompt)
};

const promptEngineer = () => {
    if (!this.Engineer) {
        this.Engineer = [];
    }

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter your engineer's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your engineer's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your engineer's email"
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter your engineer's GitHub username"
        }
    ])
    .then(({ name, id, email, github }) => {
        this.Engineer.push(new Engineer(name, id, email, github));
    })
    .then(teamBuildPrompt)
};

const promptIntern = () => {
    if (!this.Intern) {
        this.Intern = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter your intern's name"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter your intern's id"
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your intern's email"
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter your intern's school"
        }
    ])
    .then(({ name, id, email, school }) => {
        this.Intern.push(new Intern(name, id, email, school));
     })
    .then(teamBuildPrompt)
};

const teamBuildPrompt = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'teamMembers',
        message: "Would you like to add any more team members?",
        choices: ['Engineer', 'Intern', 'I do not want to add any more team members']
    })
    .then(data => {
        if (data.teamMembers === 'Engineer') {
            return promptEngineer();
        } 
        else if (data.teamMembers === 'Intern') {
            return promptIntern();
        }
        else {
            console.log('Here is your team!');
            console.log(this.Manager);
            console.log(this.Engineer);
            console.log(this.Intern);
        }
    })
};

promptManager();