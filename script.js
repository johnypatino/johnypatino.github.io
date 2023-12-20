/*-------------- NavBar script ----------------*/
const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleMenu.addEventListener('click',()=> {
    navbarlinks.classList.toggle('active')
})

/*------------- Contact Me Form Script -----------*/

function emailSend() {
    var userName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var messageBody = "Email: " + email + "<br/> " + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jonathanpatinocs@gmail.com",
        Password : "13B7973CB332E998D4A79D3D237EC9620E49",
        To : 'jonathanpatinocs@gmail.com',
        From : 'jonathanpatinocs@gmail.com',
        Subject : "subject",
        Body : messageBody
    });
}