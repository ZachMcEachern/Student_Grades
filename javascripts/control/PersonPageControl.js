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
			var found_list = test.model.Person.searchStudent(student_ln);

			// create the view... HOW????
			var list_view = new test.view.ListView(found_list);
		});
	}
	// make sure the page is fully loaded before registering event handler
	window.addEventListener('load', function(event) {
		PersonPageControl();
	});

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

	return createPerson;

})()
