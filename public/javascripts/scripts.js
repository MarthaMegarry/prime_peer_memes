/**
 * Created by Mothra on 9/1/15.
 */
$(document).ready(function(){
    $('#button').on('click', '.submit', function (e) {
        e.preventDefault();
        console.log("entered this click");
        var message = $(this).parent().parent().serializeArray()[0];
        var id = $(this).parent().siblings('img').attr('id');
        var obj = {"message": message.val(), "id": id};
        $.ajax({
            type: "POST",
            url: '/postMessage',
            data: obj,
            complete: function () {
                console.log("post complete")
            },
            success: function (data) {
                console.log(data);
                console.log("sent: ", data);
            },
            error: function () {
                console.log("error");
            }
        })
    });
});
