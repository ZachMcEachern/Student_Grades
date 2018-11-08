test = (function() {
	var person_set = new Array();

	function Person(fn, ln) {
		this.first_name = fn;
		this.last_name = ln;
	}
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
