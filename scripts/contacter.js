const name = document.getElementById("nameField");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

document.getElementById("submitBtn").addEventListener("click", () => {
  const dataToSend = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
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
  console.log(data);
};
