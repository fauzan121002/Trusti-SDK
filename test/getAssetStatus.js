const trustiSDK = require('../src/index.js').trustiClient;
const FormData = require('form-data');

const trusti = trustiSDK('<API - KEY>');

const form_data = new FormData();
form_data.append('credentials', 'F0AFD02D-024D-4A61-891F-376D3C849562');

//await getAssetByCredential
(async () => {
  let response = await trusti.getAssetStatus(form_data);
  console.log(response);
})();
