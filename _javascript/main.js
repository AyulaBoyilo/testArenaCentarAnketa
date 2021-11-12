// Anketa
document.querySelector('#submit-form').addEventListener('click', function(e){

  // old sheet
  // const url = 'https://script.google.com/macros/s/AKfycbwT0lI-n24QHIHzWp8Bxj7ZyseWheOx0r8xDKW9RMC8N11zj8MJ3hvuHuOeqdeGGCjaLQ/exec';

  // newsletter
  const url = 'https://script.google.com/macros/s/AKfycbyXU69gHVOY7yYXzOp7s_RnDRd7pzFm8RntJnDq8zGsrbw-6sM1g_r5-UnpqXWO7idx/exec';
  

  e.preventDefault();

  if(document.getElementById('pravila').checked && document.getElementById('newsletter').checked) {

      document.querySelector('#submit-form').classList.add('is-hidden');
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');

      console.log($('form#anketaArena').serializeJSON());

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#anketaArena').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg').classList.remove('is-hidden');
  }

});