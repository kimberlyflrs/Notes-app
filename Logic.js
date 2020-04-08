var notes = [{"title":"Housekeeping", "date":new Date, "message": "clean the living room, organize bookshelf"}];

function Create(){
    //displays the note creation
    document.getElementById("Create").style.visibility="visible";
}

function Save(){
    //make sure all fields are filled
    //saves the notes created to a list
    console.log('saving');
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

function displayNotes(){
    //displayes the saved notes
    //clear the section remove all children elements of id notes
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
        var idd = notes.indexOf(element);
        //card.onclick = clickCard;

        var divs = document.createElement("div");
        divs.className = "card-body"; 

        var title = document.createElement("h5");
        title.className = "card-title";
        var heading = document.createTextNode(element.title);
        title.appendChild(heading);

        var time = document.createElement("h6");
        time.className="card-subtitle";
        var date = document.createTextNode(element.date);
        time.appendChild(date);

        divs.appendChild(title);
        divs.appendChild(time);
        card.appendChild(divs);
        n.appendChild(card);
        document.getElementById(idd).addEventListener("click", function(){clickCard(element)});
    });
}

function displaySaved(note){
    //show the display element
    console.log(note);
}

function checkForm(){
    //checks all
}

function clickCard(element){
    //loads note when clicked
    console.log("clicking");
    console.log(element);
}