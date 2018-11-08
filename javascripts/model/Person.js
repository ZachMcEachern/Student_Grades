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
	
	// return the list of Person objects created
	Person.prototype.getAllPerson = function() {
		return person_set; 
	}
	// add the newly created Person object to the list 	
	Person.prototype.add = function(p_obj) {
		person_set.push(p_obj); 
		// console.log(person_set); 
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