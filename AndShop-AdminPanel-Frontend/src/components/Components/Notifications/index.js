import { toast, Slide, Flip } from "react-toastify";
import Swal from "sweetalert2";

export const success = (msg) => {
  toast.success(<p className="text-white tx-16 mb-0">{msg}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
  });
};

export const error = (msg) => {
  toast.error(<p className="text-white tx-16 mb-0">{msg}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
  });
};

export const warn = (msg) => {
  toast.warn(<p className="text-white tx-16 mb-0">{msg}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
  });
};

export const info = (msg) => {
  toast.error(<p className="text-white tx-16 mb-0">{msg}</p>, {
    position: toast.POSITION.TOP_RIGHT,
    hideProgressBar: true,
    autoClose: 5000,
    theme: "colored",
  });
};

export const swatSuccess = (msg) => {
  Swal.fire({
    title: msg,
    icon: "success",
    showConfirmButton: false,
    timer: 3000,
  });
};

export const swatCancel = () => {
  Swal.fire({
    title: "Changes are not saved",
    icon: "info",
    showConfirmButton: false,
    timer: 2000,
  });
};

export const swatPopup = (result) => {
  return (result = Swal.fire({
    title: "Are you sure You want to Delete This Record",
    text: "You won't be able to revert this!",
    icon: "warning",
    showDenyButton: true,
    confirmButtonColor: "red",
    denyButtonColor: "green",
    denyButtonText: "Cancel",
    confirmButtonText: "Yes, delete it!",
  }));
};
