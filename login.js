$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


// 회원가입 하기

// 1. 회원가입 버튼 함수 만들기
function register() {
    // 내용 체크 하기

    const checkResult = checkJoinFields();

    if(!checkResult){
        return;
    }

    // 회원가입 진행
    const usernameElement = document.getElementById("username");
    const emailElement = document.getElementById("email");
    const passwordElement = document.getElementById("password");

    const newUser = {
        username: usernameElement.value,
        email: emailElement.value,
        password: passwordElement.value,
    }

    console.log(newUser);



    // 회원가입 완료 메시지
    alert("회원가입이 완료 되었습니다.")
    // 페이지 이동
    // window.location.href = "이동페이지"
}

// 2. 회원가입 내용 체크 함수 만들기
function checkJoinFields(){

    // id들
    // username
    const usernameElement = document.getElementById("username");
    // email
    const emailElement = document.getElementById("email");
    // password
    const passwordElement = document.getElementById("password");
    // confirm-password
    const confirmPasswordElement = document.getElementById("confirmPassword");

    // 유저네임이 없으면 안됨
    if(usernameElement.value == ""){
        alert("username을 입력해주세요.");
        usernameElement.focuse();
        return false;
    }

    // 이메일이 없으면 안됨
    if(emailElement.value == ""){
        alert("email을 입력해주세요.");
        emailElement.focus();
        return false;
    }

    // 비밀번호가 없으면 안됨
    if(passwordElement.value == ""){
        alert("password을 입력해주세요.");
        passwordElement.focus();
        return false;
    }

    // 비밀번호 확인이 없으면 안됨
    if(confirmPasswordElement.value == ""){
        alert("confirmPassword을 입력해주세요.");
        confirmPasswordElement.focus();
        return false;
    }

    // 비밀번호와 비밀번호 확인이 동일해야함
    if (passwordElement.value !== confirmPasswordElement.value) {
        alert("비밀번호가 일치하지 않습니다.");
        confirmPasswordElement.focus();
        return false;
    }
    // 모두 통과 함
    return true;

}
// 로그인하기

// 1. 로그인 버튼 함수 만들기
function login() {

    const requestLogin= requestLoginFields();
        
    if (!requestLogin) {
          return;
    }
  
// id
    const loginUsernameElement = document.getElementById("loginUsername");
// password
    const loginPasswordElement = document.getElementById("loginPassword");

    const User = {
        loginUsername: loginUsernameElement.value,
        loginPassword: loginPasswordElement.value,
    }
    
    alert("로그인이 완료 되었습니다.")
}

// 2. 로그인 내용 체크 함수 만들기
function requestLoginFields(){
// 아이디가 없으면
    const loginUsernameElement = document.getElementById("loginUsername");

    const loginPasswordElement = document.getElementById("loginPassword");
    

    if (loginUsernameElement.value == "") {
        alert("아이디를 입력해주세요.");
        loginUsernameElement.focus();
        return false ;
    }

// 아이디가 존재하지 않으면


// 비밀번호가 틀리면
    if (loginPasswordElement.value == "") {
        alert("password을 입력해주세요.");
        loginPasswordElement.focus();
        return false ;
    }
    return true;

}
