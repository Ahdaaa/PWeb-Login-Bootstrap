function validateForm(){
    const email = document.forms["form1"]["Username"].value;
    const pass = document.forms["form1"]["Password"].value;

    if (email == "" || pass == ""){
        alert("Please fill all the required data");
    } 
    else {
        alert("Success to login");
    }

}