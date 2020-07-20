const trustiSDK = require('../src/index.js').trustiClient;
const FormData = require('form-data');

const trusti = trustiSDK('<API - KEY>');

const form_data = new FormData();
form_data.append(
  'pubkey',
  'VEX5sYmkssvFZ3zWLYELao7mBWcCuB72kovDSDPBAFpECsMoVzW5N'
);

//await getAssetList
(async () => {
  let response = await trusti.getAssetList(form_data);
  console.log(response);
})();
