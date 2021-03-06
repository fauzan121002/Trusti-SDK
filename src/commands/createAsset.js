const axios = require('axios');

const url = 'https://trusti.id/api/v1/public/assets/upload';
module.exports.createAsset = (apiKey, options) => {
  let formHeaders = options.getHeaders();
  return axios
    .post(url, options, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        ...formHeaders,
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
