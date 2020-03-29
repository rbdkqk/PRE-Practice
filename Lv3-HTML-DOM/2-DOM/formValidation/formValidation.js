function validationCheck() {
    let inputID = document.getElementById("ID").value;
    valueOfID(inputID);
    let inputPassword = document.getElementById("password").value;
    valueOfPassword(inputPassword);
    let passwordAgain = document.getElementById("passwordCheck").value;
    checkPassword(passwordAgain, inputPassword);
    let inputEMail = document.getElementById("email").value;
    valueOfEMail(inputEMail);
    let eMailAgain = document.getElementById("emailCheck").value;
    checkEMail(eMailAgain, inputEMail);
}

function valueOfID(selectedID) {
    if (selectedID. = null) {
        document.getElementById("message-ID").textContent = "ID를 입력하세요.";
    } else if (selectedID.length < 6) {
        document.getElementById("message-ID").textContent = "ID는 6자리 이상이어야 합니다.";
    } else {
        document.getElementById("message-ID").textContent = String(selectedID) + " 은(는) 사용할 수 있습니다.";
    }
}   // 스페이스바만 눌러서 빈 칸을 줘도, 한글을 넣어도, '사용할 수 있는 ID' 가 나옴.
// 영문하고 숫자만 사용할 수 있게 하려면 '정규표현식'을 써야 하는 듯?
// 내 능력 밖인 것 같음. 일단 이정도에서 만족하고 넘어가자.

function valueOfPassword(selectedPassword) {
    if (selectedPassword == "") {
        document.getElementById("message-password").textContent = "비밀번호를 입력하세요.";
    } else if (selectedPassword.length < 8) {
        document.getElementById("message-password").textContent = "비밀번호는 8자리 이상이어야 합니다.";
    } else {
        document.getElementById("message-password").textContent = "입력하신 비밀번호는 사용할 수 있습니다.";
    }
}

function checkPassword(passwordWannaCheck, passwordChosen) {
    if (passwordWannaCheck == "") {
        document.getElementById("message-passwordCheck").textContent = "같은 비밀번호를 다시 입력하세요.";
    } else if (passwordWannaCheck == passwordChosen) {
        document.getElementById("message-passwordCheck").textContent = "동일한 비밀번호를 입력하셨습니다.";
    } else {
        document.getElementById("message-passwordCheck").textContent = "입력하신 비밀번호와 동일한지 확인하세요.";
    }
}


function valueOfEMail(selectedEMail) {
    if (selectedEMail == "") {
        document.getElementById("message-email").textContent = "E-Mail 주소를 입력하세요.";
    } else if (selectedEMail.indexOf('@') != -1 && selectedEMail.indexOf('.') != -1) {
        document.getElementById("message-email").textContent = "입력하신 E-Mail 주소는 사용할 수 있습니다.";
    } else {
        document.getElementById("message-email").textContent = "유효한 E-Mail 주소를 입력해 주세요.";
    }
}


function checkEMail(eMailWannaCheck, eMailChosen) {
    if (eMailWannaCheck == "") {
        document.getElementById("message-emailCheck").textContent = "같은 E-Mail 주소를 다시 입력하세요.";
    } else if (!(eMailWannaCheck.indexOf('@') != -1 && eMailWannaCheck.indexOf('.') != -1)) {
        document.getElementById("message-emailCheck").textContent = "유효한 E-Mail 주소를 입력해 주세요.";
    } else if (eMailWannaCheck == eMailChosen) {
        document.getElementById("message-emailCheck").textContent = "동일한 E-Mail 주소를 입력하셨습니다.";
    } else {
        document.getElementById("message-emailCheck").textContent = "E-Mail 주소가 동일한지 확인해 주세요.";
    }
}