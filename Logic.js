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
    console.log('displaying');
    notes.forEach(element => {
        console.log(element);
    });
}