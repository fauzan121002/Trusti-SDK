const trustiSDK = require('../src/index.js').trustiClient;
const FormData = require('form-data');
const fs = require('fs');

const trusti = trustiSDK('<API - KEY>');

const newFile = fs.createReadStream(__dirname + '/SDK.txt');

const form_data = new FormData();
form_data.append(
  'pubkey',
  'VEX5sYmkssvFZ3zWLYELao7mBWcCuB72kovDSDPBAFpECsMoVzW5N'
);
form_data.append('fil', newFile);
form_data.append('asset_name', 'Test from SDK');
form_data.append('addt_meta', '{}');
form_data.append('multiple_signature', 0);
form_data.append('ipfs_upload', 0);
form_data.append('email_recipient', 'fauzanapprover1@gmail.com');
form_data.append('approver', 's');
form_data.append('approverTambahan', 0);
form_data.append('add_email_sign', '[]'); //array in json format
form_data.append('add_approver', '[]'); //array in json format

//await createAsset
(async () => {
  let response = await trusti.createAsset(form_data);
  console.log(response);
})();
