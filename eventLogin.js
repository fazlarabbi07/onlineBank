document.getElementById('btnSubmit').addEventListener('click', function clickBtnSubmit(){
   const userEmail=document.getElementById('userEmail')
   const userPasswprd=document.getElementById('userPassword')
   if(userEmail.value==='fazla@bank.com' && userPasswprd.value==='1')
   {
    window.location.href = 'bankPage.html';
   }
   else
   {alert(" Login Failed");}
})