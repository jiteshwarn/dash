var reportClearQuestStatusObject = (function () {

    var sprvalidationbtnElement, fourthColumnElement;

    var init = function () {
        cacheElements();
        loadClearQuestTable();
        bindEvents();
    };

    var cacheElements = function () {
        sprvalidationbtnElement = $("#sprvalidationbtn");

    };

    var bindEvents = function () {
        sprvalidationbtnElement.on("click", function () {
            fourthColumnElement = $(".status");
            checkSPRstatus();
            $(sprvalidationbtnElement).unbind( "click" );
        });
    };

    var checkSPRstatus = function () {
        $.each(fourthColumnElement, function (index, value) {
            var randomCollection = Math.floor(Math.random() * 10);
            if (randomCollection > 5) {
                $(this).css("background-color", "green");
            }
            else {
                $(this).css("background-color", "red");
                $(this).parent().append("<span>response is null</span>")

            }
        });
    };
    var loadClearQuestTable = function () {
        getDataObj.getClearQuestdata()
            .then(function (clearQuestdata) {
                var rows = "";
                $.each(clearQuestdata, function (index, value) {
                    rows += "<tr><td>" + value["SerialNumber"] + "</td><td>" + value["SPR#"] + "</td><td>" + value["Submitter"] + "</td><td class='status'></td></tr>";
                });
                $("tbody").append(rows);
            }, function (error) {
                console.log(error);
            })

    }
    return {
        init: init
    }
})();
reportClearQuestStatusObject.init();