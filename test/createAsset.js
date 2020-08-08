const trustiSDK = require('../src/index.js').trustiClient;
const FormData = require('form-data');
const fs = require('fs');

const trusti = trustiSDK('324234');

const newFile = fs.createReadStream(__dirname + '/SDK.txt');

const form_data = new FormData();

form_data.append(
  'pubkey',
  "VEX7dBsTJd1cQfXFR3Ts1PnreqiccpNhYsjaTdfyVmwK1duV2rnJh"
);

form_data.append('fil', newFile);
form_data.append('asset_name', 'Test from SDK');

let addt_meta = {
  serial: "SN 12345",
  color: "red",
  price: "$25"
};

form_data.append('addt_meta',JSON.stringify(addt_meta));

//or

// form_data.append('addt_meta',`
//   {
//     "serial": "SN 12345",
//     "color": "red",
//     "price": "$25"
//   }
// `);


form_data.append('multiple_signature', 1); // 0 (false) , 1 (true)

let participant = [
  {
    email: "fauzanapprover@gmail.com",
    status: "signer"
  }
]

form_data.append('participant',JSON.stringify(participant));

//or

// form_data.append('participant',`[
//   {
//     "email": "fauzanapprover@gmail.com",
//     "status": "signer"
//   }
// ]
// `);

form_data.append('ipfs_upload', 0); // 0 (false) , 1 (true)


//await createAsset
(async () => {
  let response = await trusti.createAsset(form_data);
  console.log(response);
})();
