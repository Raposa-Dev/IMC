import {Modal} from './modal.js'
import {AlertError} from './alertError.js'

Modal.form.onsubmit = (event) => {
  event.preventDefault();

  const height = Modal.inputHeight.value;
  const weight = Modal.inputWeight.value;
  const showAlertError = notNumber(weight) || notNumber(height);
  if(showAlertError) {
    AlertError.open()
    return
  }
  AlertError.close()
  const result = IMC(weight, height);
  const message = `Seu IMC é ${result}`;
  Modal.modalMessage.innerText = message;
  Modal.open();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

function notNumber(value){
  return isNaN(value) || value == ""
}
