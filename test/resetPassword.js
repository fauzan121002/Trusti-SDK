const trustiSDK = require('../src/index.js').trustiClient;

const trusti = trustiSDK('<API - KEY>');

// await getAssetByCredential
(async () => {
  const response = await trusti.resetPassword({
    email: 'developerfauzan@gmail.com',
  });

  console.log(response);
})();
