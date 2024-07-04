let Balance = 110000;
function log() {
  let name = document.getElementById("name").value;
  let psd = document.getElementById("psd").value;

  if (name === "" || psd === "") {
    alert("Please enter Username or Password");
  } else {
    window.location.href = "acountdtl.html";
  }
}
let liElements = document.querySelectorAll("li");

liElements.forEach(function (li) {
  li.addEventListener("click", function () {
    let value = this.innerText;

    if (value <= Balance) {
      alert("Please take your cash");
      alert("Thank You For Using ATM ❤😍");
    } else if (value === "Other Amount") {
      window.location.href = "input.html";
    } else if (value === "BALANCE ENQUIRY") {
      alert(`Your Available balance is ${Balance} ❤😍`);
      alert("Thank You For Using ATM ❤😍");

    }
    
    else {
      alert("Sorry! You do not have enough balance");
      alert("Thank You For Using ATM ❤😍");

    }
  });
});
let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let inputValue = (input.value);

    if (inputValue <= Balance) {
        if(inputValue%500!=0){
            alert("Enter the value of multipl of 500")
        }else{
      alert("Please take your cash")}
      alert("Thank You For Using ATM ❤😍");

    } else {
      alert("No balance available");
      alert("Thank You For Using ATM ❤😍");

    }
  });
