/**
 * Created by cw on 2017-05-11.
 */
window.onload = function () {
    var httpReq = new XMLHttpRequest();

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4 && httpReq.status == 200) {
            var arr = JSON.parse(httpReq.response);
            arr.response.docs.forEach(function (article) {
                var headline = document.createElement('h1');
                var snippet = document.createElement('p');
                var date = document.createElement('p');
                var link = document.createElement('a');

                headline.textContent = article.headline.main;
                snippet.textContent = article.snippet;
                date.textContent = article.pub_date;
                link.textContent = headline.textContent;
                link.setAttribute('href', article.web_url);

                document.body.appendChild(headline);
                document.body.appendChild(snippet);
                document.body.appendChild(date);
                document.body.appendChild(link);
            })
        }
    };

    httpReq.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api_key=98c5cc104c324f02b8795e9b1b2989ba');
    httpReq.send();
};