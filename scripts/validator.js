const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

const validateString = (str) => {
  const regex = /^[a-zA-Z0-9]{5,10}$/;
  return regex.test(str);
};

document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const contact = document.getElementById("contact");
  const message = document.getElementById("message");

  name.style.border = "1px solid var(--primary-color)";
  email.style.border = "1px solid var(--primary-color)";
  subject.style.border = "1px solid var(--primary-color)";
  contact.style.border = "1px solid var(--primary-color)";

  if (!name.value) {
    name.style.border = "2px solid red";
  }

  if (!email.value) {
    email.style.border = "2px solid red";
  }
  if (!subject.value) {
    subject.style.border = "2px solid red";
  }
  if (!contact.value) {
    contact.style.border = "2px solid red";
  }
  if (!message.value) {
    message.style.border = "2px solid red";
  }
});
