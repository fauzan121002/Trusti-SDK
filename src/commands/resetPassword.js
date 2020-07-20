const axios = require('axios');

const url = 'https://trusti.id/api/v1/public/users/reset-password/';
module.exports.resetPassword = (apiKey, options) => {
  return axios
    .post(url, options, {
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
