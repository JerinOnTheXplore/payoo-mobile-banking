document.getElementById('out-cash').style.display="none";


document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('out-cash').style.display="none";
    document.getElementById('money-add').style.display="block";
})
document.getElementById('cash-out-box').addEventListener('click',function(){
    document.getElementById('money-add').style.display="none";
    document.getElementById('out-cash').style.display="block";
})