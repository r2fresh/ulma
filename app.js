var express = require('express')
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

var http = require('http')
var querystring = require('querystring')

//app.set('views', path.join(__dirname, 'views'));

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'))
})

app.post('/test', function(req, res) {

    console.log('call test')

    // // An object of options to indicate where to post to
    //  var post_options = {
    //      host: 'http://rt.molit.go.kr',
    //      //port: '80',
    //      path: '/srh/getGugunListAjax.do',
    //      method: 'POST',
    //      headers: {
    //          'Content-Type': 'application/x-www-form-urlencoded',
    //          'Content-Length': Buffer.byteLength(post_data)
    //      }
    //  };
    //
    //  // Set up the request
    //  var post_req = http.request(post_options, function(res) {
    //      res.setEncoding('utf8');
    //      res.on('data', function (chunk) {
    //          console.log('Response: ' + chunk);
    //      });
    //  });
    //
    //  // post the data
    //  post_req.write(post_data);
    //  post_req.end();

    //  var data = querystring.stringify({
    //   username: yourUsernameValue,
    //   password: yourPasswordValue
    // });

    var returnData;

    var postData = querystring.stringify({
        menuGubun:'A',
        srhType:'TOT',
        houseType:1,
        srhYear:2015,
        srhPeriod:1,
        gubunCode:'LAND',
        sidoCode:11,
    })

    var options = {
        host: 'rt.molit.go.kr',
        //port: null,
        path: '/srh/getGugunListAjax.do',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
            //'Content-Length': Buffer.byteLength(postData, 'utf8')
        }
    };

    var req2 = http.request(options, function(res1) {
        res1.setEncoding('utf8');
        res1.on('data', function (chunk) {
            console.log("body: " + chunk);

            const buf1 = new Buffer(chunk);

            //returnData = chunk;
            //res.end( decoder.write(chunk) );

            // 전달 되는 값으 head값을 utf-8로 해줘야 한글이 깨지지 않는다
            // 참고 사이트
            // http://gakari.tistory.com/entry/Nodejs-responseend-한글-깨짐-현상-해결법
            // https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers
            res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
            res.end( chunk );
        });
    });

    req2.write(postData);
    req2.end();



})

app.use(express.static('public'));

app.listen(app.get('port'));
