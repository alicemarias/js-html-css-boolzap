$(document).ready(function() {

  //funzione ricerca CONTATTI
  $('#look').keyup(function() {
    //valore input, con tutto minuscolo
    var ricercaContatto = $(this).val().toLowerCase();
    // variabile contatti
    var contatti = $('.contatto');
    //funzione per comparare ciò che cerchi con i nomi nella lista contatti
    //nomi contatti messi in minuscolo
    //mostro solo i nomi che trovo nella lista
    contatti.each(function() {
      var nomeContatto = $(this).find('.col .nome-contatto').text().toLowerCase();
      if(nomeContatto.includes(ricercaContatto)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

  });
  // quando clicco su aeroplanino per inviare mex
  $('button.invio-mex').click(function() {
    sendMessage();
    sendAnswer();
  });

  //quando premo invio mi manda il messaggio
  $('.input-messaggio input').keypress(function(event){
     if (event.which === 13) {
       sendMessage();
    // risposta utente dopo 2 secondi
    setTimeout(function(){
         sendAnswer();
     }, 2000);
     }
   });

  // funzione per creare e mandare messaggio
  function sendMessage() {
  var messaggio = $('.input-messaggio input').val();
  if(messaggio != '') {
    //clono template del massaggio
    var messaggioNuovo = $('.templates .messaggio').clone();
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
  // funzione risposta utente
  function sendAnswer() {
    //clono template del massaggio
    var messaggioRicevuto = $('.templates .messaggio').clone();
    // ci aggiungo testo "ok"
    messaggioRicevuto.find('.testo-messaggio').append('ok');
    // aggiungo classe inviato
    messaggioRicevuto.addClass('ricevuto');

    //inserisco orario messaggio di risposta
    var date = new Date();
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentTime = currentHours + ':' + currentMinutes;
    messaggioRicevuto.children('.tempo-messaggio').text(currentTime);

    // appendo  messaggio di risposta  alla chat
    $('.finestra-chat').append(messaggioRicevuto);
  }
});
