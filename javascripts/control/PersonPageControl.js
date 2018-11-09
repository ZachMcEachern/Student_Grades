var createPerson = (function() {

	function PersonPageControl() {
		// link the search button to a JS variable.
		var search_elm = document.getElementById('search_person_id');

		// define a new event handler for the search button.
		search_elm.addEventListener('click', function(event){
			//console.log("the search button was clicked and activated the eventHandler");
			// grabs the value that is in the text box when user clicks search.
			var student_ln = document.getElementById('ln_id').value;
			// searches through the Peron list and finds all students with matching last name
			var found_list = searchStudent(student_ln);

			// passes the array of found students to the list view.
			var list_view = new test.view.ListView(found_list);
		});

		// link the list item to a JS variable.
		var list_elm = document.getElementById('person_list_id');
		// gets the target that the click event happened on.
		function getEventTarget(e) {
				e = e || window.event;
				return e.target || e.srcElement;
		}
		// the onclick function handles what li item that is being clicked.
		list_elm.onclick = function(event) {
				var target = getEventTarget(event);
				//console.log("the list item was clicked and activated the eventHandler");
				// grab the name of the student that was clicked from the li.
				var student_name = target.innerHTML;

				// search the person_list to get the correct student.
				var grades_of_found_student = searchRecs(student_name)
				// send that list of grades to the TableView.
				var table_view = new test.view.TableView(grades_of_found_student);
		};

	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

	// searches all the persons in the list and tries to find those with the same last name given.
	function searchStudent(last_name) {
		//console.log("invoking the searchStudent function");
		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		// loop through listperson and add the found students to the found_students array.
		for (let person of listPerson) {
			if (person.getLastName() == last_name) {
				found_students.push(person);
			}
		}

		return found_students;
	}

	// return the report card of the student who's name was passed to the function.
	function searchRecs(student_full_name) {
		//console.log("invoking the searchRec function");
		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		// loop through the list of people until you find a match of the name given.
		for (let person of listPerson) {
			if (person.getString() == student_full_name) {
				return person.getReportCard();
			}
		}
	}

	return createPerson;

})();
