const inquirer = require('inquirer');
const exec = require('child_process').exec;
const chalk = require('chalk');


const chalk_error = chalk.bold.red;
const chalk_out = chalk.bold.green;
const chalk_update = chalk.bold.magenta;

inquirer
	.prompt([{
		name: 'mode',
		message: 'Dev mode or Prod mode?',
		type: 'list',
		choices: ['Dev', 'Prod',]
	},
	{
		name: 'task',
		message: 'Build Start or Serve?',
		type: 'list',
		choices: ['Build', 'Start', 'Serve']
	}])
	.then((answers) => {
		if (answers.mode === 'Dev') {
			if (answers.task === 'Build')
				execute('npm run build');
			else if (answers.task === 'Start')
				execute('npm run start');
			else if (answers.task === 'Serve')
				execute('npm run serve');
		} else {
			if (answers.task === 'Build')
				execute('npm run build:prod');
			else if (answers.task === 'Start')
				execute('npm run start:prod');
			else if (answers.task === 'Serve')
				execute('npm run serve:prod');
		}
	})
	.catch((error) => {
		if (error.isTtyError) {
			console.log('Error in environment');
		} else {
			console.log('Error:', error);
		}
	});

function execute(command) {
	const execute = exec(command, function (error) {
		if (error !== null) {
			console.log(chalk_error('Error: ', error));
		}
	});
	execute.stdout.on('data', data => {
		console.log(chalk_out(data));
	})
	execute.stderr.on('data', data => {
		console.log(chalk_update(data));
	})
}