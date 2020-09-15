// form js

const init = function () {
  document.getElementById('button-cancel').addEventListener('click', reset);
  document.getElementById('button-send').addEventListener('click', send);

}
const reset = function (ev) { }

const send = function (ev) {
  ev.preventDefault();
  ev.stopPropagation();

  let ret = validate();

  if (ret) {
    //good to go 
    document.getElementById('form-user').onsubmit();

  } else {
    //bad user
    let err = document.querySelector('.error');
    err.setAttribute('data-errormsg', ....missing ${ input, placeholder });
  }
}
const validate = function (ev) {
  let valid = false;
  //check or radio button grouped by name
  let chk = document.getElementById('input-alive');
  //.checked .value

  // select
  let select = document.getElementById('input-age')
  //.selectedIndex .option .length .selectedValue .value

  //input for text,email,tel,color,number
  let first = document.getElementById(input - first);
  let last = document.getElementById(input - last);
  let email = document.getElementById(input - email);

  //. value, .defaultValue,
  //return a boolean  an object with details about the failure
  return true;

}