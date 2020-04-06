var notes = [];

function Create(){
    //displays the note creation
    document.getElementById("Create").style.visibility="visible";
}

function Save(){
    //saves the notes created to a list
    console.log('saving');
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;
    console.log(title);
    console.log(message);
}