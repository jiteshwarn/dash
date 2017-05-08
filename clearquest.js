$(document).ready(function () {
    
    $.ajax({
        type: 'GET',
        url: 'https://api.myjson.com/bins/10v3kl',
        // url:"https://defectmanagement.health.ge.com/cqweb/",
        dataType: 'json',
        success: function (data) {
            var rows="";
            $.each(data, function (index, value) {
                rows+="<tr><td>" + value["SerialNumber"] + "</td><td>" + value["SPR#"] + "</td><td>" + value["Submitter"] + "</td><td></td></tr>";
                //
               // $("tbody").append("<tr><td>" + value["SerialNumber"] + "</td><td>" + value["SPR#"] + "</td><td>" + value["Submitter"] + "</td><td></td></tr>")

            });
            $("tbody").append(rows);
        }
    });
});