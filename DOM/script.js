var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = document.querySelector("li");
var deleteBtn = document.getElementsByClassName("delete");


for(var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", removeParent, false);
}

const removeParent = (event) => {
	event.target.removeEventListener("click", removeParent, false);
  	event.target.parentNode.remove();
}

/* const lineThrough = (event) => {
	var a = event.target;
	
	if(count == 0) {
		
	    a.classList.add("done");

	} else {

		a.classList.toggle("done");
	}
	count++;

} */

// items.onclick = function(event){
// 	var target = getEventTarget(event);
// 	target.classList.toggle("done");
// }

const btnClick = () => {
	items.classList.toggle("done")
}

const inputLength = () => {
	return input.value.length;
}

const createListElement = () => {
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("delete"));
	deleteButton.classList.add("delete");
	deleteButton.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.innerHTML = li.innerHTML + " ";
	li.appendChild(deleteButton);
	li.setAttribute("onclick", "btnClick()")
	li.classList.add("task");
	ul.appendChild(li);
	input.value = "";
	
	btnClick();
}

const addListAfterClick = () => {
	if (inputLength() > 0) {
		createListElement();
	}
}

const addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);