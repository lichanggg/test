var notetext = document.getElementById("note_text");
		var addbutton = document.getElementById("add_button");
		var clearbutton = document.getElementById("clear_button");
		var stickies = document.getElementById("stickies");
		var noteList = [];
		var note = [];
		//当点击addbutton按钮时，
        window.onload = function(){
        	if (localStorage["notes"]) {
        	noteList = JSON.parse(localStorage["notes"]);
        	for(var i = 0; i < noteList.length;i++){
        		var liNode = document.createElement("li");
        		var spanNode = document.createElement("span");
        		spanNode.className = "sticky";
        		spanNode.innerHTML = noteList[i]["note"];
        		liNode.appendChild(spanNode);
                liNode.ondblclick = deleteNote;
        		stickies.appendChild(liNode);
        	}
        }
        
    }

    function deleteNote(){
    	noteList = JSON.parse(localStorage["notes"]);
    	noteList.splice(this.title,1);
    	localStorage["notes"] = JSON.stringify(noteList);
    	this.parentNode.removeChild(this);
    }

		addbutton.onclick = function() {
			note = {};
			if(localStorage["notes"]){
                noteList = JSON.parse(localStorage["notes"]);
               
			}
			   note["note"] = notetext.value
			   noteList.push(note);
			   localStorage["notes"] = JSON.stringify(noteList);

			    var liNode = document.createElement("li");
        		var spanNode = document.createElement("span");
        		spanNode.className = "sticky";
        		spanNode.innerHTML = notetext.value;
        		liNode.appendChild(spanNode);
        		liNode.title = noteList.length - 1;
        		liNode.ondblclick = deleteNote;
        		stickies.appendChild(liNode);
		}