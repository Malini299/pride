function validateForm() {
    var x = document.forms["myForm"]["Fname"].value;
    if (x == "") {
    alert("fill name");
    return false;
    }
    
}
