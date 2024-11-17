/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/* -------------- */

const emailInput = document.querySelector(".user-email-input");
const passwordInput = document.querySelector(".user-password-input");

const errorMessage = document.querySelectorAll(".error-message");
const emailErrorMessage = errorMessage[0];
const passwordErrorMessage = errorMessage[1];

function handleInput() {
  if (this.value === user.id) {
    console.log("통과");
  } else {
    this.classlist;
  }
}

emailInput.addEventListener("input", handleInput);

/* -------------- */

//
const btnLogin = document.querySelector(".btn-login");

function nextPage() {
  if (emailInput.value === user.id && passwordInput.value === user.pw) {
    window.location.href = "/mission1/naver_login/welcome.html";
  }
}

btnLogin.addEventListener("click", nextPage);

//
// try {
//   function nextPage() {
//     if (emailInput[value] === user[id] && passwordInput[value] === user[pw]) {
//       window.location.href = "/mission1/naver_login/welcome.html";
//     }

//     if (emailInput[value] !== user[id] || passwordInput[value] !== user[pw]) {
//       throw new ReferenceError("해당 키 값이 존재하지 않습니다.");
//     }
//   }

//   btnLogin.addEventListener("click", nextPage);
// } catch {
//   console.log("error!!");

//   document.body.innerHTML = "뭔가 잘못됐어!!";
// }
/* ---------------------------------------------------------------------------------------- */
/*                 죄송합니다. 아무것도 되는 게 없지만 몇 시간에 걸쳐 뭔가를 한 결과입니다...                */
/* ---------------------------------------------------------------------------------------- */
