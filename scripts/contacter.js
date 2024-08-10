import { regex } from "../lib/regex.js";

const nameField = document.getElementById("nameField");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const messageField = document.getElementById("message");

document.getElementById("submitBtn").addEventListener("click", (e) => {
  const name = nameField.value;
  const message = messageField.value;
  const email = emailField.value;
  const phone = phoneField.value;

  // validate the form input
  if (!validateInput(name, email, phone, message)) return;

  e.target.disabled = true;

  const dataToSend = {
    name: name,
    email: email,
    phone: phone,
    message: message,
  };
  notify(dataToSend);
});

const notify = async (data) => {
  const response = await fetch(
    "https://contact-backend.whitetree-ac90122e.australiaeast.azurecontainerapps.io",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const responseData = await response.json();
  if (response.ok) {
    document.getElementById("alertSuccess").style.display = "flex";
    document.getElementById("submitBtn").innerHTML = "Submitted";
    resetForm();
  }
};

const validateInput = (name, email, phone, message) => {
  const validEmail = regex.email.test(email);
  const validPhone = regex.phone.test(phone);
  const validName = regex.name.test(name);
  const validMessage = regex.message.test(message);

  if (!validName) error.setError("nameField", "Please enter a valid name");
  if (!validEmail) error.setError("email", "Please enter a valid email");
  if (!validPhone) error.setError("phone", "Please enter a valid phone number");
  if (!validMessage) error.setError("message", "Please enter a valid message");

  if (validEmail && validPhone && validMessage && validName) return true;
  return false;
};

const validate = {
  name: (data) => {
    return regex.name.test(data);
  },
  email: (data) => {
    return regex.email.test(data);
  },
  phone: (data) => {
    return regex.phone.test(data);
  },
  message: (data) => {
    return regex.message.test(data);
  },
};

const error = {
  setError: (element, error) => {
    document.getElementById(element).style.border = "1px solid red";
    document.getElementById(`${element}Error`).innerHTML = error;
  },
  removeError: (element) => {
    document.getElementById(element).style.border =
      "1px solid var(--secondary-color)";
    document.getElementById(`${element}Error`).innerHTML = "";
  },
};

// Error clearer
document.querySelectorAll(".inputField").forEach((element) => {
  element.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "nameField":
        if (validate.name(e.target.value)) error.removeError("nameField");
        break;
      case "email":
        if (validate.email(e.target.value)) error.removeError("email");
        break;
      case "phone":
        if (validate.phone(e.target.value)) error.removeError("phone");
        break;
      case "message":
        if (validate.message(e.target.value)) error.removeError("message");
        break;
    }
  });
});

const resetForm = () => {
  nameField.value = "";
  emailField.value = "";
  phoneField.value = "";
  messageField.value = "";
};
