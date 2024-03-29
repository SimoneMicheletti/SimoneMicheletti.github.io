$(document).ready(function() {

    // URL DB
    const dbUrl = "https://progetto-stefano-481e3-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=C1H2uN0xkiToNC4rgJVHzpVpUkeN5lU2yeqVnqFv";
    let messaggiMostrati = [];
    let zIndex = 0;

    // Funzione di output
    setInterval(() => {
        $.ajax({
            type: "GET",
            url: dbUrl,
            success: function(response) {
                $.each(response, function( idMessaggio, testoMessaggio ) {
                    if ($.inArray(idMessaggio,messaggiMostrati) === -1) {
                        let secondi = Math.floor(Math.random() * (20 - 15 + 1) + 15);
                        let top = Math.floor(Math.random() * (window.innerHeight - 0 + 1) + 0);
                        $('#lista').append(
                            `<div class="messaggio" id="${idMessaggio}" style="
                                top: ${top}px;
                                animation: move ${secondi}s linear infinite;
                                z-index: ${zIndex}
                            ">${testoMessaggio}</div>`
                        );
                        messaggiMostrati.push(idMessaggio);
                    }
                    zIndex++;
                });
            },
        });
    }, 3000);
});