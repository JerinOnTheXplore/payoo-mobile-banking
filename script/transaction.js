document.getElementById('transaction-box').addEventListener('click',function(event){
   event.preventDefault();
   const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = document.getElementById('pin').value;
    
   if(accountNumber.length === 11 && pinNumber.length === 4 && !isNaN(Number(pinNumber))){
    const container = document.getElementById('transaction-container');
   const p = document.createElement('p');
   p.innerText = `Jerin, 😄 ${accountNumber} account has successfully added ${convertedAmount}! Keep saving for the future!💰`;
   container.appendChild(p);
   
   }
   
   else{
    alert('invalid');
   }
   
})
document.getElementById('transaction-box').addEventListener('click', function(event){
    event.preventDefault();
    const cashoutAmount = document.getElementById('cashout-amount').value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const accountNumber = document.getElementById('cashout-account-number').value;
    
    const pinNumber = document.getElementById('cashout-pin').value;
    if(accountNumber.length === 11 && pinNumber.length === 4 && !isNaN(Number(pinNumber))){
        const container = document.getElementById('transaction-container');
        const p = document.createElement('p');
        p.innerText = `Jerin,😄 ${convertedCashoutAmount} has been withdrawn from account number ${accountNumber}! Plan your expenses wisely!✨`;
        container.appendChild(p);
    }
    else{
        return ;
    }
})