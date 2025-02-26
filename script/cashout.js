document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const accountNumber = document.getElementById('cashout-account-number').value;
    
    const pinNumber = document.getElementById('cashout-pin').value;
    
    const cashoutMainBalance = document.getElementById('main-balance').innerText;
    const convertedCashoutMainBalance = parseFloat(cashoutMainBalance);

    if(accountNumber.length === 11){
        if(pinNumber.length === 4 && !isNaN(Number(pinNumber))){
            const sub = convertedCashoutMainBalance - convertedCashoutAmount;
        document.getElementById('main-balance').innerText = sub; 
        }
        else{
            alert('Your pin number is invalid');
        }
    }
    else{
        alert('Your account number is invalid');
    }
})