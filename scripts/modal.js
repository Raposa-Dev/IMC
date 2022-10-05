export const Modal = {
  form: document.querySelector("main form"),
  inputWeight: document.querySelector("#weight"),
  inputHeight: document.querySelector("#height"),
  btn: document.querySelector("#input-wrapper button"),

  modalWrapper: document.querySelector(".wrapper-modal"),
  modalMessage: document.querySelector(".modal .title"),
  btnClose: document.querySelector("button.close"),
  open() {
    Modal.modalWrapper.classList.add("open");
  },
  close() {
    Modal.modalWrapper.classList.remove("open");
  },
};

Modal.btnClose.onclick = () => Modal.close();

window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(){Modal.close()}  ;

