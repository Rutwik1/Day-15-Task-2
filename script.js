function submitForm() {
    // get input values
    let firstName = document.getElementById("userFirstName").value;
    let lastName = document.getElementById("userLastName").value;
    let userAddress = document.getElementById("userAddress").value;
    let userPincode = document.getElementById("userPincode").value;
  
    // function to get value of gender (radio buttons)
    function displayRadioValue() {
      var ele = document.getElementsByName("gender-choice");
      var gender = "";
      count = 0;
  
      for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
          count += 1;
          gender = ele[i].value;
        }
      }
      if (count === 0) {
        return "";
      } else {
        return gender;
      }
    }
    var genderChoice = displayRadioValue();
  
    //function to get food choices (checkbox)
    function displayCheckBoxValue() {
      var ele = document.getElementsByName("choiceOfFood");
  
      var choices = [];
      for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
          var temp = ele[i].value;
          choices.push(temp);
        }
      }
      if (choices.length < 2) {
        return "";
      } else {
        return choices.join(", ");
      }
    }
    var foodChoice = displayCheckBoxValue();
  
    let userState = document.getElementById("userState").value;
    let userCountry = document.getElementById("userCountry").value;
  
    //function to check required input values
    function inputValidation() {
      if (firstName === "") {
        alert("Enter First Name");
      }
      if (lastName === "") {
        alert("Enter Last Name");
      }
      if (userAddress === "") {
        alert("Enter Address");
      }
      if (userPincode === "") {
        alert("Enter Pincode");
      }
      if (genderChoice === "") {
        alert("Select Gender");
      }
      if (foodChoice === "") {
        alert("Select atleast TWO foods.");
      }
      if (userState === "") {
        alert("Enter State");
      }
      if (userCountry === "") {
        alert("Enter Country");
      }
    }
    inputValidation();
  
    //add input values to table
    function addValuesToTable() {
      let tableEntry = document.createElement("tr");
      tableEntry.innerHTML = `<td>${firstName}</td>
  <td>${lastName}</td>
  <td>${userAddress}</td>
  <td>${userPincode}</td>
  <td>${genderChoice}</td>
  <td>${foodChoice}</td>
  <td>${userState}</td>
  <td>${userCountry}</td>`;
  
      let tableBody = document.getElementById("table-body");
      tableBody.appendChild(tableEntry);
    }
    addValuesToTable();
  
    var formReset = document.getElementById("survey-form").reset();
  }