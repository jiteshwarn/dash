$(document).ready(function () {
    $(window).load(function () {
        $("#sprvalidationbtn").on("click", function () {
            var fourthColumn = $("tbody tr td:nth-child(4)");
            console.log(fourthColumn.length);
            $.each(fourthColumn, function (index, value) {
                var randomCollection = Math.floor(Math.random() * 10);
                if (randomCollection > 5) {
                    $(this).css("background-color", "green");
                }
                else {
                    $(this).css("background-color", "red");
                    $(this).parent().append("<span>response is null</span>")

                }
            });
        });
    });
});
