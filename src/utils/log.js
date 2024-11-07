const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ ❕ Cảnh Báo ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ ❕ Lỗi ] » ') + data);
			break;
		default:
			console.log(chalk.magenta(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.yellow('[ Ryo ] » ') + data);
			break;
		case "error":
			console.log(chalk.red('[ Rimuru ] » ') + data);
			break;
		default:
			console.log(chalk.green(`[ LOADER ] » `) + data);
			break;
	}
}

module.exports.logtext = (data, option) => {
	var text;
	switch (option) {
		case "warn":
			text = '[ ❕ Cảnh Báo ] » ' + data
			break;
		case "error":
			text = '[ ❕ Lỗi ] » ' + data
			break;
		default:
			text = `[ ${option} ] » ` + data
			break;
	}

	return text
}