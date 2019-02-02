function printInfo(e) {
    e.preventDefault()
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var userAge = document.getElementById('age').value
    var userGender = document.querySelector('input[name="sex"]:checked').value;
    var userLocation = document.getElementById('locations').value;
    var dietaryR = document.querySelector('.restriction:checked').value;
    alert("First Name: " + firstName + "\n" + "Last Name: " 
    + lastName + '\n' + "Age: " + userAge + "\n" + "Gender: "
    + userGender + "\n" + "Location: " + userLocation + "\n" +
    "Dietary Restrictions: " + dietaryR);
    document.getElementById('travel').reset();
   
}
document.getElementById("submit-button").addEventListener('click', printInfo)