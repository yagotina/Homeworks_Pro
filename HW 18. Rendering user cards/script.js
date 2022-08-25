const roles = {
	admin: "https://cdn-icons-png.flaticon.com/512/1424/1424453.png",
	student: "https://cdn-icons-png.flaticon.com/512/1424/1424424.png",
	lector: "https://cdn-icons-png.flaticon.com/512/1424/1424450.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922522.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922661.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922565.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "https://cdn-icons-png.flaticon.com/512/2922/2922719.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
	constructor(img, name, age, role) {
		this.img = img;
		this.name = name;
		this.age = age;
		this.role = role;
	}
	
	render() {
		return `<div class="user__info">
					<div class="user__info--data">
						<img src="${this.img}" alt="${this.name}" height="50">
						<div class="user__naming">
							<p>Name: <b>${this.name}</b></p>
							<p>Age: <b>${this.age}</b></p>
						</div>
					</div>
					<div class="user__info--role ${this.role}">
						<img src="${roles[this.role]}" alt="${this.role}" height="25">
						<p>${this.role}</p>
					</div>
				</div>`;
	}

	renderCourses(courseList) {
		return `<div class="user__courses ${this.adminInfo ? 'admin--info' : ''}">
					${this.renderCourseItems(courseList)} 
				</div>`;
	}

	renderCourseItems(courseList) {
		return courseList.map(course => this.getCourseItems(course)).join('');
	}
	
	getCourseItems(course) {
		return `<p class="user__courses--course ${this.role}">${course.title} 
					<span class="${this.getGradation(course.mark)}">
						${this.getGradation(course.mark)}
					</span>
				</p>`
	}
	
	getGradation(mark) {
		let grad;
		for(let key in gradation) {
			switch (true) {
				case (mark >= key):
					grad = gradation[key];
					break;
			}
		}
		return grad ? grad : 'not satisfactory';
	}
};

class Student extends User {
	constructor(img, name, age, role) {
		super(img, name, age, role);
	}
}

class Admin extends User {
	constructor(img, name, age, role) {
		super(img, name, age, role);
		this.adminInfo = true;
	}

	getCourseItems(course) {
		return `<div class="user__courses--course ${this.role}">
					<p>Title: <b>${course.title}</b></p>
					<p>Admin's score: 
						<span class="${this.getGradation(course.score)}">
							${this.getGradation(course.score)}
						</span>
					</p>
					<p>Lector: <b>${course.lector}</b></p>
				</div>`
	}
}

class Lector extends User {
	constructor(img, name, age, role) {
		super(img, name, age, role);
		this.adminInfo = true;
	}

	getCourseItems(course) {
		return `<div class="user__courses--course ${this.role}">
					<p>Title: <b>${course.title}</b></p>
					<p>Lector's score: 
						<span class="${this.getGradation(course.score)}">
							${this.getGradation(course.score)}
						</span>
					</p>
					<p>Average student's score: 
						<span class="${this.getGradation(course.studentsScore)}">
							${this.getGradation(course.studentsScore)}
						</span>
					</p>
				</div>`
	}
}

let list = users.map(user => {
	let classRole = user.role === 'student' ? Student : user.role === 'admin' ? Admin : Lector;
	let userRender = new classRole(user.img, user.name, user.age, user.role);
	
	return `<div class="user">
				${userRender.render()}
				${user.hasOwnProperty("courses") ? userRender.renderCourses(user.courses) : ''}
			</div>`;
})
.join('');

document.write(`
	<div class="users">
		${list}
	</div>
`);