

document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;
    
    if(accountNumber.length === 11){
        if(pinNumber.length === 4 && !isNaN(Number(pinNumber))){
            window.location.href = "./welcomeindex.html" ; 
        }
        else{
            alert('Your pin number is invalid');
        }
    }
    else{
        alert('Your account number is invalid');
    }
})