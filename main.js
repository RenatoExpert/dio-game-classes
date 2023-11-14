function input(question) {
	return new Promise(resolve => {
		let readline = require("readline").createInterface({
			input: process.stdin,
			output: process.stdout
		});
		readline.question(question, answer => {
			readline.close();
			resolve(answer);
		});
	});
}

class Hero {
	constructor(name, age, job) {
		this.name = name;
		this.age = age;
		this.job = job;
		this.resource = job == "mago" ? "magia":
				job == "guerreiro" ? "espada":
				job == "monge" ? "artes marciais":
				job == "ninja" ? "shuriken":
				new Error();
	}
	attack() {
		console.log(`o ${this.job} atacou usando ${this.resource}`);
	}
}

(async () => {
	let name = await input("Hero name: ");
	let age = await input("Hero age: ");
	let job = await input("Hero job: ");
	let hero = new Hero(name, age, job);
	console.log(hero);
	hero.attack();
})();
