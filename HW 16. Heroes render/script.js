let marvelHeroes = [
	{
		name: "Thor"
	},
	{
		name: "Spider Man"
	},
];

let dcHeroes = [
	{
		name: "Superman"
	},
	{
		name: "Batman"
	},
	{
		name: "Deadpool"
	},
];

Array.prototype.heroesRender = function(folder) {
    let trs = this.map(hero =>`
        <tr>
            <td>${hero.name}</td>
            <td>
                <img src="images/${folder}/${hero.name.toLowerCase().replaceAll(' ', '')}.svg">
            </td>
        </tr>
    `)
    .join('');

    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Icon</th>
                </tr>
            </thead>
            <tbody>
                ${trs}
            </tbody>
        </table>
    `);
};

dcHeroes.heroesRender('dc');
marvelHeroes.heroesRender('marvel');