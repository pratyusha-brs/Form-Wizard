// Date and time picker
let dateToday = new Date();

$(function () {
  $("#date_picker").dtpicker({ minDate: dateToday });
});
 

function validation() {
  var phoneNumberInput = document.getElementById("phone_number");
  var phoneNumber = phoneNumberInput.value;

  // Regular expression for a valid phone number (simple example for illustration)
  var phoneRegex = /^\+91 \d{10}$/;

  if (!phoneRegex.test(phoneNumber)) {
    //alert("Invalid phone number. Please enter a valid phone number.");
    phoneNumberInput.style.borderColor = "red";
    phoneNumberInput.classList.add("error");
    return false;
  } else {
    // Remove error message and reset border
    phoneNumberInput.classList.remove("error");
    return true;
  }
}