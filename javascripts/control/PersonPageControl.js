var createPerson = (function() {

// Option 1 - Use addEventListener to register event handler
	function PersonPageControl() {
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
		//console.log(frm); 
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