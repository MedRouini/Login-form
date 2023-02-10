const loginForm = document.getElementById('login-form')
loginForm.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const email=document.getElementById('email').value,
          password = document.getElementById('password').value;
    
    try{
        const response = await axios.post('/api/v1/auth/login',{
            email,
            password
        })
        localStorage.setItem('token',response.data.token);
        window.location.href = 'dashboard.html';
    }catch(error){
        alert(error.response.data.msg)
    }
})