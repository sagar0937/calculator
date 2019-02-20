//ui vars
document.querySelector('.btn-block').addEventListener('click',calculateIntrest);

//interestFunction
function calculateIntrest(e) {
    const amount  = document.querySelector('#amount');
    const interest  = document.querySelector('#interest');
    const years  = document.querySelector('#years');
    const monthly_payment  = document.querySelector('#monthly-payment');
    const total_payment  = document.querySelector('#total-payment');
    const total_interest  = document.querySelector('#total-interest');

    const principal = parseFloat(amount.value);
    const calculateInterest = (parseFloat(interest.value)/100)/12;
    const calculatePayments = parseFloat(years.value)*12;

    // Compute monthly payment
  const x = Math.pow(1 + calculateInterest, calculatePayments);
  const monthly = (principal*x*calculateInterest)/(x-1);
  

  if(isFinite(monthly)) {
      
    document.querySelector('#loading').style.display = 'block';
    document.querySelector('#results').style.display = 'none';

    monthly_payment.value = monthly.toFixed(2);
    total_payment.value = (monthly * calculatePayments).toFixed(2);
    total_interest.value = ((monthly * calculatePayments)-principal).toFixed(2);
    setTimeout(function(){
        document.querySelector('#loading').style.display = 'none';
        document.querySelector('#results').style.display = 'block';
    },2000)
   
  
  } else {
    showError('Enter correct monthly payment n interest');
  }
 

    e.preventDefault();
}
function showError(msg){
    document.querySelector('#results').style.display = 'none';
    document.querySelector('#loading').style.display = 'none';
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const div = document.createElement('div');
    div.className = 'alert alert-danger' ;
    div.appendChild(document.createTextNode(msg));

    card.insertBefore(div,heading);

    setTimeout(function(){
       document.querySelector('.alert').remove();
    },3000)
}