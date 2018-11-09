var createPerson = (function() {

// Option 1 - Use addEventListener to register event handler
	function PersonPageControl() {
		/* Prof's code
		var add_elm = document.getElementById('add_person_id');

		// define the event handler for Add button
		add_elm.addEventListener('click', function(event) {

			// Get the input and create a Person (model) object.
			var fn = document.getElementById('fn_id').value;
			var ln = document.getElementById('ln_id').value;
			console.log(test);
			var p_obj = new test.model.Person(fn, ln);
			p_obj.add(p_obj);

			// Create the view
  			var list_view = new test.view.ListView(p_obj.getAllPerson());
		});
*/
		// THIS IS MY NEW STUFF THAT I AM ADDING.

		// link the search button to a JS variable.
		var search_elm = document.getElementById('search_person_id');

		// define a new event handler for the search button.
		search_elm.addEventListener('click', function(event){
			console.log("the search button was clicked and activated the eventHandler");
			// grabs the value that is in the text box when user clicks search.
			var student_ln = document.getElementById('ln_id').value;
			console.log(student_ln);
			console.log(test);
			// searches through the Peron list and finds all students with matching last name?
			var found_list = searchStudent(student_ln);
			console.log("found_list");
			console.log(found_list);

			// create the view... HOW????
			var list_view = new test.view.ListView(found_list);
		});

		// link the list item to a JS variable.
		var list_elm = document.getElementById('person_list_id');
		function getEventTarget(e) {
				e = e || window.event;
				return e.target || e.srcElement;
		}
		// the onclick function handles what li item that is being clicked.
		list_elm.onclick = function(event) {
				var target = getEventTarget(event);
				alert(target.innerHTML);

				console.log("the list item was clicked and activated the eventHandler");

				// grab the name of the student that was clicked from the li.
				var student_name = target.innerHTML;
				console.log(student_name);

				// search the person_list to get the correct student.
				var grades_of_found_student = searchRecs(student_name)
				console.log(grades_of_found_student);
				// send that list of grades to the TableView.
				var table_view = new test.view.TableView(grades_of_found_student);
		};

/* this was the event listener that we tried.
		// define a new event handler for the search button.
		list_elm.addEventListener('click', function(event){

			console.log("the list item was clicked and activated the eventHandler");

			// grab the grades from the student that was clicked within the list.
			var student_name = target.innerHTML;
			console.log(student_name);
			// put those grades into an array of grades which it should already be in.

			// send that list of grades to the TableView.
			var list_view = new test.view.TableView(found_list);
		});
		*/
	}

	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

/*
// Option 2 - Use onSubmit attribute to register event handler
	function createPerson(event) {
		console.log('Invoking createPerson() handler.');
		event.preventDefault();
		//
		var p_obj = new test.model.Person();

		var frm = event.target;
		console.log(frm);
		var elms = frm.elements;
		for (i=0; i<elms.length; i++) {
			if (elms[i].getAttribute('data-attr') != undefined) {
				var prop_name = elms[i].getAttribute('data-attr');
				console.log(prop_name);
				p_obj[prop_name] = elms[i].value;
			}
		}
		//
		p_obj.add(p_obj);
		// Create the view
  		var list_view = new test.view.ListView(p_obj.getAllPerson());

	}
	*/

	function searchStudent(last_name) {
		console.log("invoking the searchStudent function");
		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		for (let person of listPerson) {
			if (person.getLastName() == last_name) {
				found_students.push(person);
				console.log(found_students);
			}
		}

		return found_students;
	}

	function searchRecs(student_full_name) {
		console.log("invoking the searchRec function");
		var found_students = new Array();

		var p_obj = new test.model.Person();
		var listPerson = p_obj.getAllPerson();

		for (let person of listPerson) {
			if (person.getString() == student_full_name) {
				console.log("Name match");
				return person.getReportCard();
			}
		}
	}

	return createPerson;

})()
