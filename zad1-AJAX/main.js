//https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php

$(document).ready(function() {

    $('#pobierz-dane').click(function(){

        $.get('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data){

            const daneProgramisty = $('<div id="dane-programisty"><div>');
            $(daneProgramisty).append('Imię: ').append(data.imie).append('</br>');
            $(daneProgramisty).append('Nazwisko: ').append(data.nazwisko).append('</br>');
            $(daneProgramisty).append('Zawód: ').append(data.zawod).append('</br>');
            $(daneProgramisty).append('Firma: ').append(data.firma).append('</br>');

            $('button').after(daneProgramisty);

        })
    })
})