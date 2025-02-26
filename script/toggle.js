document.getElementById('out-cash').style.display="none";
document.getElementById('transaction-container').style.display="none";

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('out-cash').style.display="none";
    document.getElementById('money-add').style.display="block";
    document.getElementById('transaction-container').style.display="none";
})
document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('money-add').style.display="none";
    document.getElementById('out-cash').style.display="block";
    document.getElementById('transaction-container').style.display="none";
})

document.getElementById('transaction-box').addEventListener('click',function(){
    document.getElementById('money-add').style.display="none";
    document.getElementById('out-cash').style.display="none";
    document.getElementById('transaction-container').style.display="block";
})