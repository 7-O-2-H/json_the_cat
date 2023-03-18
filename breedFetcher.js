const request = require('request');

const fetchBreedDescription = function(breedName, cb) {

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, null, function(err, res, body) {
    const data = JSON.parse(res.body);

    if (err) {
      cb(err, null);
      return;
    }

    if (res.statusCode === 200) {
      if (res.body === '[]') {
        
        cb(`${breedName} is not in our database`);
        return;
        
      }
    }
    
    cb(null, data[0].description);

  });

};

module.exports = { fetchBreedDescription };
