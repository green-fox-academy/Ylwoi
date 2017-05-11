/**
 * Created by cw on 2017-05-11.
 */
window.onload = function () {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var list = JSON.parse(httpRequest.response);
            console.log(list);

            list.data.forEach(function (obj) {
                var pic = document.createElement('img');
                pic.setAttribute('src', obj.images.original_still.url);
                document.body.appendChild(pic);
                pic.addEventListener('click',function () {
                    pic.setAttribute('src', obj.images.original.url);
                })
            })
        }
    };

    httpRequest.open('GET','http://api.giphy.com/v1/gifs/search?q=goku&api_key=dc6zaTOxFJmzC&limit=16');
    httpRequest.send();
};