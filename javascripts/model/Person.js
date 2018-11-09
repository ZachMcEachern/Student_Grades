test = (function() {
	var person_set = new Array();

	function Person(fn, ln) {
		this.first_name = fn;
		this.last_name = ln;
		this.report_card = [];

		this.add = function(classgrade){
			this.report_card.push(classgrade);
		};
	}

	function Grade(cn, lg){
		this.class_name = cn;
		this.letter_grade = lg;
	}

	//Create student name and grades for Amy Gonzalez
	var student1 = new Person('Amy','Gonzalez');
	student1.add(new Grade('Social Studies','B'));
	student1.add(new Grade('Math','A'));
	student1.add(new Grade('Language Arts','B'));
	student1.add(new Grade('Science','A'));

	//Create student name and grades for Tony Gonzalez
	var student2 = new Person('Tony','Gonzalez');
	student2.add(new Grade('Social Studies','A'));
	student2.add(new Grade('Math','A'));
	student2.add(new Grade('Language Arts','A'));
	student2.add(new Grade('Science','A'));

	//Create student name and grades for Brett Gonzalez
	var student3 = new Person('Brett','Gonzalez');
	student3.add(new Grade('Social Studies','C'));
	student3.add(new Grade('Math','B'));
	student3.add(new Grade('Language Arts','B'));
	student3.add(new Grade('Science','A'));

	// Create Array of Students
	var student_list = new Array();

	student_list.push(student1);
 	student_list.push(student2);
 	student_list.push(student3);
 	console.log(student_list);
	//
	Person.prototype.getString = function() {
		return this.first_name + " " + this.last_name;
	}

	// return the last name of Person
	Person.prototype.getLastName = function () {
		return this.last_name;
	}

	// return the list of Person objects created
	Person.prototype.getAllPerson = function() {
		return person_set;
	}
	// add the newly created Person object to the list
	Person.prototype.add = function(p_obj) {
		person_set.push(p_obj);
		// console.log(person_set);
	}

	Person.prototype.searchStudent = function(last_name) {
		var found_students = new Array();

		for (let person of person_set) {
			if (person.getLastName() == last_name) {
				found_students.push(person);
			}
		}

		return found_students;
	}

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.model == undefined) {
		window.testApp.model = {};
	}

	window.testApp.model.Person = Person;

	return window.testApp;
})();
