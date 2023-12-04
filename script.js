$(function () {
    var scrollFunc = function(e) {
        var e = e || window.event;
        if(e.wheelDelta) {   
            if(e.wheelDelta > 0) { 
                $('#navTop').addClass('nav_scrolling');
            }
            if(e.wheelDelta < 0) {
                $('#navTop').removeClass('nav_scrolling');
            }
        }
    } 
    window.addEventListener('scroll', function () {
        var introduction_Height = $("#introduction").height();
        if ($(window).scrollTop() > introduction_Height) {
            window.addEventListener("wheel", scrollFunc);

        }else{
            window.removeEventListener("wheel", scrollFunc);
            $('#navTop').removeClass('nav_scrolling');

        }
    });  
    var uri = "https://myapi20231202211352.azurewebsites.net/api/Info";
    var web = "HomePage";
    uri = uri + "?id=" + web;
    $.ajax({
        type: 'GET',
        url: uri,
        dataType: "json",
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (data) {
            data = JSON.parse(data);
            $('#views').append(data.views);
        },
        error: function () {
            $('#views').append("#錯誤");
        }
    });
    setTimeout(function(){
        $.ajax({
            type: 'PUT',
            url: uri,
            dataType: "json",
            headers: {
                'Content-Type': 'application/json',
            },
            })
    },30000);

})
