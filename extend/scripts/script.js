/*
    Student Name: Derrick Davis
    File Name: script.js
    Date:11/15/22
*/

function myFunction() {
  alert("I am an alert box!");
  var x = document.getElementById("first");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
