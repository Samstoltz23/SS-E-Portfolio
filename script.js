//template_hecmjif
//service_qdhngdm
//-10dBvubUG7zjCqyA

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_qdhngdm",
      "template_hecmjif",
      event.target,
      "-10dBvubUG7zjCqyA",
    )
    .then(() => {
      console.log("this worked");
    });
}
