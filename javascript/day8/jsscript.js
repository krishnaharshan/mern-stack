// alert("connected")

// example 1

// let hold = document.getElementById("changeTextButton");
// console.log(hold)
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this);
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph)
    paragraph.textContent = "The paragarph is changed.";
  });

// example 2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(citiesList);
    // console.log(citiesList.firstElementChild.firstChild);
    citiesList.firstElementChild.classList.add("highlight");
  });

// example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let ordertype = document.getElementById("coffeeType");
  ordertype.textContent = "Expresso";
  ordertype.style.backgroundColor = "blue";
  ordertype.style.Color = "white";
  ordertype.style.padding = "7px";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let removetask = document.getElementById("taskList");
    // removetask.lastElementChild.remove()
    removetask.firstElementChild.remove();
  });

// example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("krish is seeing you");
  });

// example 7
document.getElementById("teaList").addEventListener("click" ,
    function(event){
        // if(event.target && event.target.matches(".teaItem")){
        //     alert("You  selected: "+event.target.textContent);
        // }
        // console.log(event.target.textContent);
    }
);

// example 8

document.getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // alert("sumbited!");
    let message=document.getElementById("feedbackInput").value;
    console.log(message)
    document.getElementById("feedbackDisplay").textContent=`YOUR FEEDBACK IS ${message}`
  });


// example 9

document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent = "DOM IS FULLY LOADED";
});

// example 10
document.getElementById("toggleHighlight").addEventListener("click",function(){
  document.getElementById("descriptionText").classList.add("highlight");
});