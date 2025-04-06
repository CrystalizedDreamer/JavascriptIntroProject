function validateForm() {
    let x = document.forms["myForm"]["FormControlInput1"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    let y = document.forms["myForm"]["FormControlInput2"].value;
    if (y == "") {
      alert("Well, Say something!");
      return false;
    }
    return true;
  }
  //This is a validation script for the Email Field

  //This is a tentative validation for the textarea but I cannot seem to get it to function the way I would like
  //Assistance must be sought in order to rectify this 
  //Alright, after several attempts over the course of 3 weeks, I cannot figure out why the alerts are being overidden so I will
  //need to reconsult with the main team. in THEORY this script should have worked