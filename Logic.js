var notes = [{"title":"Housekeeping", "date":new Date, "message": "clean the living room, organize bookshelf"}];

function Create(){
    //displays the note creation
    document.getElementById("Create").style.visibility="visible";
}

function Save(){
    //saves the notes created to a list
    console.log('saving');
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
    var date = new Date;
    notes.push({"title":title, "date":date,"message": message});
    //console.log(notes);

    //update saved notes section
    displayNotes();
}

function displayNotes(){
    //displayes the saved notes
    //clear the section remove all children elements of id notes
    var n = document.getElementById("notes");

    while (n.hasChildNodes()){
        n.removeChild(n.firstChild);
    }
    console.log('displaying');
    notes.forEach(element => {
        console.log(element);
        var message = document.createElement("h3");
        var title = document.createTextNode(element.title)
        message.appendChild(title);
        n.appendChild(message);
    });
}