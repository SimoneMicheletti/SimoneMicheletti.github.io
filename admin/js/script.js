$(document).ready(function() {

    // URL DB
    const dbUrl = "https://progetto-stefano-481e3-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=C1H2uN0xkiToNC4rgJVHzpVpUkeN5lU2yeqVnqFv";
    let messaggiMostrati = [];

    // Funzione di output
    setInterval(() => {
        $.ajax({
            type: "GET",
            url: dbUrl,
            success: function(response) {
                $.each(response, function( idMessaggio, testoMessaggio ) {
                    if ($.inArray(idMessaggio,messaggiMostrati) === -1) {
                        $('#lista').append(`<li>${testoMessaggio}</li>`);
                        messaggiMostrati.push(idMessaggio);
                    }
                });
            },
        });
    }, 3000);
});