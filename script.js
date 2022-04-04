document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/ab7sX4F.jpg')";
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	span.appendChild(document.createTextNode(input.value));
	li.appendChild(span);
	ul.appendChild(li);
	input.value = "";
	span.addEventListener("click",toggle);
	var delButton = document.createElement("button");
	delButton.innerText = "Delete"
	li.appendChild(delButton);
	delButton.classList.add("del-btn");
	delButton.addEventListener("click",del);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode===13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

//Underlining/cancelling the list
function toggle(){
		this.classList.toggle("done");
}
for(var i=0;i<li.length;i++){
	li[i].children[0].addEventListener("click",toggle);
}

//Adding delete buttons to list
function del(){
	this.parentNode.remove();
}
var delbtn = document.querySelectorAll(".del-btn");
for(var i=0;i<li.length;i++){
	delbtn[i].addEventListener("click",del);
}
// In the previous video you saw something interesting:
// Event listener syntax : 
// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

// You didn't see the function being called like this as you may have expected: 
// button.addEventListener("click", addListAfterClick());
// input.addEventListener("keypress", addListAfterKeypress(event));


// This is something called a callback function. When that line of javascript 
// runs, we don't want the addListAfterClick function to run because we are just
//  adding the event listener now to wait for click or keypress. We want to let 
//  it know though that we want this action to happen when a click happens. So the 
//  function now automatically gets run (gets added the ()) every time the click happens.
//   So we are passing a reference to the function without running it.