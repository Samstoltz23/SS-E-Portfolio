//template_hecmjif
//service_qdhngdm
//-10dBvubUG7zjCqyA

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "template_hecmjif",
      "service_qdhngdm",
      event.target,
      "-10dBvubUG7zjCqyA",
    )
    .then(() => {
      console.log("this worked");
    });
}
