
$(document).ready(function() {
    console.log( "ready!" );
    $('#send').on("click",function() {
        let messaggio = $("#text").val();
        $.ajax({
            type: "POST",
            url: "https://progetto-stefano-481e3-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=C1H2uN0xkiToNC4rgJVHzpVpUkeN5lU2yeqVnqFv",
            data: messaggio,
            dataType: "json",
            success: function(data) {
                console.log(data);;
            },
        });
    })
});
