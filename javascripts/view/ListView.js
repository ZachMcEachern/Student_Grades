
test = ( function () {
	//
	function ListView(data) {
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
		
		// Option 1
		this.createChildNodeDOMApi();
		
		// Option 2
		// this.createChildNodeHandlebars(); 
	}

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
			
	if (window.testApp == undefined) {
		window.testApp = {};
	}

	if (window.testApp.view == undefined) {
		window.testApp.view = {}; 
	}
	
	window.testApp.view.ListView = ListView; 
	
	return window.testApp; 
})(); 