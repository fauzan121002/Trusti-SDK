const axios = require('axios');

const url = 'https://trusti.id/api/v1/public/users/detail/';
module.exports.getUserDetail = (apiKey, options) => {
  return axios
    .post(url + options.pubkey, options, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      }
      return err;
    });
};
