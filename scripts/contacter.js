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
  document.getElementById("submitBtn").innerHTML = `<div class="loader"></div>`;
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
    document.getElementById(
      "submitBtn"
    ).innerHTML = `<div> Submitted </div> <div id="svgCheck">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="ipSCheckOne0">
                  <g fill="none" stroke-linejoin="round" stroke-width="4">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M24 44a19.94 19.94 0 0 0 14.142-5.858A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142A19.94 19.94 0 0 0 24 4A19.94 19.94 0 0 0 9.858 9.858A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142A19.94 19.94 0 0 0 24 44Z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      d="m16 24l6 6l12-12"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSCheckOne0)"
              />
            </svg>
          </div>`;
  } else {
    alert("Something went wrong. Please try again");
  }
  resetForm();
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
