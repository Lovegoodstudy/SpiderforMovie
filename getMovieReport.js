function getMovieReport(url) {
    var request = require('sync-request');

    var res = request('GET', url);

    try {
        let html = res.getBody().toString();
        var cheerio = require('cheerio'),
            $ = cheerio.load(html);

        let s = $('#link-report span').text();
        s = s.substring(0, s.length - 3);
        return s;
        //console.log(s);
    }
    catch (err)
    {
        return ''
    }    //console.log(html);
}

module.exports = {
    getMovieReport
}