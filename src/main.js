function storedata() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Get stored email from localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password'); // For comparison

    // Prevent form submission (default behavior)
    event.preventDefault();
    let object = {localStorage,window}
    let count = 1
    if (email && password) {
        if (email === storedEmail && password === storedPassword) {
            alert("WE HAVE YOUR CREDENTIALS");
        } else {
            // Save new email and password in localStorage
            localStorage.setItem('email:' + email, [email,password]);
            // localStorage.setItem('password', );
            // alert("Credentials saved");
            object[email] = password;
            
        }
    } else {
        alert("Please enter both email and password");
    }
    console.log(object)
}
