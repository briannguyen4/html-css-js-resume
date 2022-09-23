export default class Contact {
    constructor(form) {
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.subject = form.elements["subject"].value;
        this.body = form.elements["message"].value;

    }

    fullName = "";
    email = "";
    subject = "";
    body = "";

    send() {
        console.info(this.formatMessage());
        document.getElementById("formInfo").innerHTML = "Currently not sending emails. Will be a feature in the next version.";
    }

    formatMessage(){
        return `To: ${this.fullName}
        Email: ${this.email}
        Subject: ${this.subject}
        Body: ${this.body}`
    }
}