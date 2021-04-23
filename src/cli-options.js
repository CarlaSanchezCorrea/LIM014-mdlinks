const fetch = require('node-fetch');

 const totalLinks = (array) => {
    const total = array.length;
    return total;
  };
  
   const uniqueLinks = (array) => {
    const unique = [...new Set(array.map((link) => link.href))];
    return unique.length;
  };
  
  const validateLink = (arrayLinks) => {
    const arr = arrayLinks.map((link) => fetch(link.href)
      .then((url) => ({
        status: url.status,
        statusText: url.statusText === 'OK' ? 'OK' : 'Fail',
        ...link,
      }))
      .catch((url) => ({
        status: url.status ? url.status : 'Not defined',
        statusText: 'Fail',
        ...link,
      })));
    return Promise.all(arr);
  };

  module.exports = {totalLinks, uniqueLinks}