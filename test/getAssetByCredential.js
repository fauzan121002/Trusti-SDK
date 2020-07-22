const trustiSDK = require('../src/index.js').trustiClient;
const FormData = require('form-data');

const trusti = trustiSDK('<API - KEY>');

const form_data = new FormData();
form_data.append('credentials', '<credentials>');

//await getAssetByCredential
(async () => {
  let response = await trusti.getAssetByCredential(form_data);
  console.log(response);
})();
