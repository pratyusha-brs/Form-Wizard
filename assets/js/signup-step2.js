// Validation for the form 2 [radio buttons and dropdown] for signup-step2.html
function validate() {
    let plan = document.forms['myform']['plan'].value
    let sel_opt = document.forms['myform']['sel_opt'].value
  
    if (plan == '') {
      document.getElementById('error1').innerHTML = 'Please select anyone'
  
      return false
    } else if (plan == 'a' || plan == 'b' || plan == 'c') {
      document.getElementById('error1').innerHTML = ''
    }
  
    if (sel_opt == 'Select an Option') {
      document.getElementById('error2').innerHTML = 'Please select anyone'
      return false
    } else if (sel_opt == 'a' || sel_opt == 'b' || sel_opt == 'c') {
      document.getElementById('error2').innerHTML = ''
    }
  }
  
  
  
  var citiesByState = {
    'AP': ['Kakinada', 'Rajahmundry','visakapatanam','Vijayawada'],
    'HYD': ['Hyderabad','Warangal', 'Nizamabad','Karimnagar','Khammam','Ramagundam','Mahbubnagar']
  }
  
  
  function populateCities() {
    var stateSelect = document.getElementById('state');
    var citySelect = document.getElementById('city');
  
    // Clear existing cities
    citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
  
    // Get selected state
    var selectedState = stateSelect.value;
  
    // Populate cities based on the selected state
    if (citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(function(city) {
            addCityOption(citySelect, city);
        });
    }
  }
  
  function addCityOption(selectElement, city) {
    var option = document.createElement('option');
    option.value = city.toLowerCase().replace(/\s/g, '_');                            
    // Convert to lowercase and replace spaces with underscores
    option.text = city;
    selectElement.add(option);
  }