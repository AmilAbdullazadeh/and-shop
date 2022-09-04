import Swal from "sweetalert2";
//Primaryalert
export function Primaryalert() {
  Swal.fire({
    title: "Congratulations!",
    icon: "success",
    allowOutsideClick: false,
    confirmButtonText: "ok",
    cancelButtonColor: "#6259ca",
    text: "Your message has been succesfully sent",
  });
}
//Warningalert
export function Warningalert() {
  Swal.fire({
    title: "Alert",
    icon: "warning",
    allowOutsideClick: false,
    showCancelButton: true,
    cancelButtonText: "Stay This page",
    confirmButtonText: "Exit",
    cancelButtonColor: "#6259ca",
    text: "Waring alert",
  });
}
//Dangeralert
export function Dangeralert() {
  Swal.fire({
    title: "Alert",
    icon: "error",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Danger alert",
  });
}
//Infoalert
export function Infoalert() {
  Swal.fire({
    title: "Alert",
    icon: "info",
    allowOutsideClick: false,
    confirmButtonText: "Exit",
    showCancelButton: "true",
    cancelButtonText: "Stay This page",
    cancelButtonColor: "#6259ca",
    text: "Info alert",
  });
}
//Primaryalertbutton
export function Primaryalertbutton() {
  Swal.fire({
    text: "Your message",
    allowOutsideClick: false,
    confirmButtonText: "ok",
  });
}
//Secondaryalertbutton
export function Secondaryalertbutton() {
  Swal.fire({
    title: "Your message",
    text: "Your message",
    allowOutsideClick: false,
    confirmButtonText: "ok",
  });
}
//Infoalertbutton with images
export function Infoalertbutton() {
  (async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          allowOutsideClick: false,
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  })();
}
//Warningalertbutton
export function Warningalertbutton() {
  Swal.fire({
    title: "Your message",
    allowOutsideClick: false,
    text: "Your message(close after 2seconds)",
    showConfirmButton: false,
    timer: 2000,
  });
}
