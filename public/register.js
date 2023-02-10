const registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value,
      email = document.getElementById('email').value,
      password= document.getElementById('password').value;
    try{
        const response = await axios.post('/api/v1/auth/register',{
            name,
            email,
            password
        })
        
        window.location.href = 'login.html';

        
        console.log(response)
    }catch(error){
        console.log(error)
    }
    })