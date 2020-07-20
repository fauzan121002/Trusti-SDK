const trustiSDK = require('../src/index.js').trustiClient;

const trusti = trustiSDK('<API - KEY>');

//await getAssetByCredential
(async () => {
  let response = await trusti.getUserDetail({
    pubkey: 'VEX5sYmkssvFZ3zWLYELao7mBWcCuB72kovDSDPBAFpECsMoVzW5N',
  });
  console.log(response);
})();
