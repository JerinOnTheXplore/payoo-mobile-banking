document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    // console.log(convertedMainBalance);
    
    if(accountNumber.length === 11){
        if(pinNumber.length === 4 && !isNaN(Number(pinNumber))){
            const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum; 
        }
        else{
            alert('Your pin number is invalid');
        }
    }
    else{
        alert('Your account number is invalid');
    }
})