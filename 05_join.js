const form = document.querySelector('form');
const users = ['admin', 'test', 'chloe', 'ssafy'];


document.getElementById('id_check').addEventListener('click', function(){
    const id = document.getElementById('id').value; 
    const msg = document.getElementById('msg');

    console.log('확인해유~' +id);

    if (users.includes(id)){
        msg.innerHTML='이미 존재하는 회원입니다.';
    }else{
        msg.innerHTML='사용 가능한 아이디입니다!';
        msg.className = "correct";
    }
})

form.addEventListener('submit', function(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = formData.get('id'); 
    const pw = formData.get('pw');
    const pw_check = formData.get('pw_check')

    if (msg.className === 'correct'){

        if (pw === pw_check){
            alert(id+ '님, 회원가입을 축하합니다~!')
        }else {
            document.getElementById('pw').value = ''
            document.getElementById('pw_check').value = ''
            alert('비밀번호가 일치하지 않습니다!')
        }
    }else{
        document.getElementById('pw').value = ''
        document.getElementById('pw_check').value = ''
        alert('아이디 중복 검사를 해주세요!')
    }
})

form.addEventListener('reset', (event) => document.getElementById("join").reset)
