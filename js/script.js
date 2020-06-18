$(document).ready(function() {
  // quando clicco su aeroplanino per inviare mex
  $('button.invio-mex').click(function() {
    sendMessage();
  });
  // funzione per creare e mandare messaggio
  function sendMessage() {
  var messaggio = $('.input-messaggio input').val();
  if(messaggio != '') {
    //clono template del massaggio
    var messaggioNuovo = $('.conversazioni .messaggio').clone();
    // ci agiungo testo della input
    messaggioNuovo.children('.testo-messaggio').text(messaggio);
    // aggiungo classe inviato
    messaggioNuovo.addClass('inviato');

    //inserisco orario messaggio
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentTime = currentHours + ':' + currentMinutes;
    messaggioNuovo.children('.tempo-messaggio').text(currentTime);

    // appendo nuovo messagio alla chat
    $('.finestra-chat').append(messaggioNuovo);

    //faccio scrollare la chat
    $('.finestra-chat').scrollTop($('.finestra-chat').height());

    //cancello testo  input
    $('.input-messaggio input').val('');
  }
  }
});
