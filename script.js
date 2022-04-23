function myFunction() {
  let myEmail = document.getElementById("myEmail").value;
  alert("Thank you for your details. We will be in touch via <" + myEmail + "> shortly."); 
}

function dice() {
  userChoice=prompt("What is your choice: `historian`, `developer` or `entrepreneurship`?");
  if (userChoice === "historian") {
    alert("You are winner 🎉")
  } else if (userChoice === "developer") {
    alert("Game over, please try again!")
  } else if (userChoice === "entrepreneurship"){
    alert("Game over, please try one more time")
  } else {
    alert("Wrong value⚠️. Try again!")
  }
}

let userNames=[];


function listNames() {
  for(i=0;i<userNames.length;i++) {
    document.getElementById("main").innerHTML=userNames.toString();
  }
}

function addToEnd() {
  let clientSubject =userNames.push(prompt("Enter Subject Name"));
  let clientResults = parseInt(prompt("Enter Subject Score"));
  document.getElementById("name").innerHTML+=clientSubject+",";
  let outputScore = document.getElementById("score").innerHTML+=clientResults+",";
  listNames();

}