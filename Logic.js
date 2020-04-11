//Things to do:  add time, clean up code, add more styling

var notes = [{"title":"Housekeeping", "date":new Date, "message": "clean the living room, organize bookshelf"}];

function Create(){
    //displays the note creation
    document.getElementById("Read").style.visibility="hidden";
    hideRead();
    document.getElementById("Create").style.visibility="visible";
}

function Save(){
    //make sure all fields are filled
    //saves the notes created to a list
    console.log('saving');
    var notFilled = checkForm();

    if(!notFilled){
        var title = document.getElementById("title").value;
        var message = document.getElementById("message").value;
        var date = new Date;
        notes.unshift({"title":title, "date":date,"message": message});
    
        //update saved notes section
        displayNotes();
    
        //clear the note title and message
        document.getElementById("title").value="";
        document.getElementById("message").value="";
    }
}

function displayNotes(){
    //displayes the saved notes
    //clear the section remove all children elements of id notes
    document.getElementById("Read").style.visibility="hidden";
    var n = document.getElementById("notes");

    while (n.hasChildNodes()){
        n.removeChild(n.firstChild);
    }
    console.log('displaying');
    notes.forEach(element => {
        //console.log(element);
        var card = document.createElement("div");
        card.className = "card";
        card.id = notes.indexOf(element);
        var idd = notes.indexOf(element);//this was added so each card can have it's own evnt listener
        //card.onclick = clickCard;

        var divs = document.createElement("div");
        divs.className = "card-body"; 

        var title = document.createElement("h5");
        title.className = "card-title";
        var heading = document.createTextNode(element.title);
        title.appendChild(heading);

        var time = document.createElement("h6");
        time.className="card-subtitle";
        var date = document.createTextNode(element.date.toDateString());
        time.appendChild(date);

        divs.appendChild(title);
        divs.appendChild(time);
        card.appendChild(divs);
        n.appendChild(card);
        document.getElementById(idd).addEventListener("click", function(){clickCard(element)});
    });
}

function checkForm(){
    //checks both title and message
    var title = document.getElementById("title").value;
    console.log(title)
    var message = document.getElementById("message").value;
    if (title == "" || message == ""){
        alert("Fields are empty");
        return true;
    }
    return false;
}

function clickCard(element){
    //loads note when clicked
    console.log("clicking");
    console.log(element);
    readNote(element);
}

function readNote(element){
    //creates the note
    hideRead();
    var n = document.getElementById("Read");

    //card
    var card = document.createElement("div");
        card.className = "card";
        card.id = notes.indexOf(element);
        var idd = notes.indexOf(element);
        //card.onclick = clickCard;

        var divs = document.createElement("div");
        divs.className = "card-body"; 
        divs.id = "card-content";

        var title = document.createElement("h5");
        title.className = "card-title";
        var heading = document.createTextNode(element.title);
        title.appendChild(heading);

        var time = document.createElement("h6");
        time.className="card-subtitle";
        var date = document.createTextNode(element.date);
        time.id = "note_created";
        time.appendChild(date);

        var message = document.createElement("p");
        message.className = "card-body";
        message.id= "note_message";
        var mes = document.createTextNode(element.message);
        message.appendChild(mes);

        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-danger";
        var del = document.createTextNode("Delete");
        deleteBtn.id="delete";
        deleteBtn.appendChild(del);
        deleteBtn.onclick = function(){deleteNote(idd)};


        var editBtn = document.createElement("edit");
        editBtn.className = "btn btn-success";
        var edit = document.createTextNode("Edit");
        editBtn.id = 'edit';
        editBtn.appendChild(edit);
        editBtn.onclick = function(){editNote(idd)};


        divs.appendChild(title);
        divs.appendChild(time);
        divs.appendChild(message);
        divs.appendChild(editBtn);
        divs.appendChild(deleteBtn);
        card.appendChild(divs);
        n.appendChild(card);
        document.getElementById("Create").style.visibility="hidden";
        document.getElementById("Read").style.visibility="visible";
}

function hideRead(){
    //hides the note clicked
    var n = document.getElementById("Read");

    while (n.hasChildNodes()){
        n.removeChild(n.firstChild);
    }
}


function deleteNote(index){
    //deletes the note
    //console.log('delete');
    notes.pop(index);
    //hide the individual note and refresh the displaynotes
    displayNotes();
    hideRead();
}

function editNote(index){
    //edit text in note and update the date
    //somehow change it to a textarea where card body class is
    console.log('edit');
    var textarea = document.createElement("textarea");
    var edit_message = document.createTextNode(notes[index].message);
    textarea.id="textarea";
    textarea.appendChild(edit_message);

    var row = document.createElement("div");
    row.className = "row";
    row.id="edit_row";

    var saveBtn = document.createElement("button");
    var save = document.createTextNode("Save");
    saveBtn.onclick = function(){saveEdit(index)};
    saveBtn.id = "save";
    saveBtn.appendChild(save);
    row.appendChild(saveBtn);

    var cc = document.getElementById("card-content");
    cc.appendChild(textarea);
    cc.append(row);

    //delete time, and message
    document.getElementById("note_created").remove();
    document.getElementById("edit").remove();
    document.getElementById("delete").remove();
    document.getElementById("note_message").remove();
}

function saveEdit(index){
    //update the date in database and on screen
    var update_message = document.getElementById("textarea").value;
    notes[index].message = update_message;

    notes[index].date = new Date;

    displayNotes();

    //delete textarea and save btn
    document.getElementById("save").remove();
    document.getElementById("edit_row").remove();
    document.getElementById("textarea").remove();
    console.log("saving updated note");
}