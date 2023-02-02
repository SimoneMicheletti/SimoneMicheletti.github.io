$(document).ready(function() {

    // URL DB
    const dbUrl = "https://progetto-stefano-481e3-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=C1H2uN0xkiToNC4rgJVHzpVpUkeN5lU2yeqVnqFv";
    let messaggiMostrati = [];

    // Funzione di input
    $('#send').on("click",function() {
        let messaggio = $("#text").val();
        $.ajax({
            type: "POST",
            url: dbUrl,
            data: JSON.stringify(messaggio),
            dataType: "json",
            success: function(response) {
                $("#text").val("");
            },
        });
    })
});