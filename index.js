import Contact from "./Contact.js";

const formInfo = document.getElementById("formInfo");

const showMessage = message => {
    formInfo.innerHTML = "<p>" + message + "</p>";
}

let hasJob = false;
if(hasJob) {
    showMessage("Thanks for visiting, I'm currently employed.")
} else {
    showMessage("Currently looking for a position, feel free to reach out!")
}

let today = new Date();

const contactForm = document.getElementById("contactForm");

const sendMessage = (e) => {
    e.preventDefault();
    const contact = new Contact(contactForm);
    contact.send();
}

contactForm.addEventListener("submit", sendMessage);

const experiences = document.getElementsByClassName("experience");
for (let experience of experiences) {
    experience.addEventListener("mouseenter", (e) => {
        e.target.style = "background-color: #81808c";
    });
    experience.addEventListener("mouseleave", (e) => {
        e.target.style = "";
    });
}




