let clientName =  document.getElementById('client-name');
let loveInterest = document.getElementById('love-interest');
let link = document.getElementById('link');
let result = document.getElementById('result');

let loveScore;

document.getElementById('calculate-btn').addEventListener('click', function(e){
    let x = clientName.value.length; 
    let y = loveInterest.value.length;
    let z = ((x + y)*5)/4 ; 


window.location.href=`/results.html?percent=${z}`;

   
});


const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  result.innerHTML = `${params.percent}%`
