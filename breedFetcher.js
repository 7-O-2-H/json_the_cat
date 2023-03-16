const request = require('request');
const query = process.argv[2];
const requestedUrl = `https://api.thecatapi.com/v1/breeds/search?q=${query}`;
request.get(requestedUrl, null, function(err, res, body) {
  if (err) {
    console.log('Error details: ' + err);
    return;
  }
  if (res.statusCode === 200) {
    if (res.body === '[]') {
   
      console.log("The requested breed is not in our database");
      return;

    }
    const data = JSON.parse(res.body);
    console.log(data[0].description);
  }
});
