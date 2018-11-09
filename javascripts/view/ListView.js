
test = ( function () {
	//
	function ListView(data) {
		console.log("data");
		console.log(data);
		var ul_node = document.getElementById('person_list_id');
		this.root = ul_node;
		this.content = data;

		this.createChildNodeHandlebars = function() {
			console.log('Invoking createChildNodeHandlebars method');
			//console.log(this.root);
			var source = document.getElementById('p-list-template').innerHTML;
			var template = Handlebars.compile(source);
			var context = {'people' : this.content};
			//console.log(context);
			var html_str = template(context);
			//console.log(html_str);
			this.root.innerHTML = html_str;
		}
		this.createChildNodeHandlebars();
	}

		// this is the View module for the table grade layout.
		// the data being passed to this would be the array of grades.
		function TableView(data) {
			console.log("data");
			console.log(data);

			//need to change to table stuff.
			var table_node = document.getElementById('grade_table_id');
			this.root = table_node;
			this.content = data;

			this.createChildNodeHandlebars = function() {
				console.log('Invoking createChildNodeHandlebars method');
				//console.log(this.root);
				var source = document.getElementById('s-grade-template').innerHTML;
				var template = Handlebars.compile(source);
				var context = {'grade' : this.content};
				//console.log(context);
				var html_str = template(context);
				//console.log(html_str);
				this.root.innerHTML = html_str;
			}
			this.createChildNodeHandlebars();
		}

		// Option 1
		//this.createChildNodeDOMApi();

		// Option 2


/*
	ListView.prototype.createChildNodeDOMApi = function() {
		// empty child nodes
		while (this.root.firstChild) {
			this.root.removeChild(this.root.firstChild);
		}
		//
		for (i=0; i<this.content.length; i++) {
			var li_node = document.createElement('li');
			var li_content = document.createTextNode(this.content[i].getString());
			li_node.appendChild(li_content);
			this.root.appendChild(li_node);
		}
	}
	*/

	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {};
	}

	window.testApp.view.ListView = ListView;

	return window.testApp;
})();
