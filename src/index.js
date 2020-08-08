const createAsset = require('./commands/createAsset.js').createAsset;
const getAssetByCredential = require('./commands/getAssetByCredential.js')
  .getAssetByCredential;
const getAssetList = require('./commands/getAssetList.js').getAssetList;
const getAssetStatus = require('./commands/getAssetStatus.js').getAssetStatus;
const getUserDetail = require('./commands/getUserDetail.js').getUserDetail;

module.exports.trustiClient = (apiKey) => {
  const client = {};
  client.createAsset = (options) => {
    return createAsset(apiKey, options);
  };

  client.getAssetByCredential = (options) => {
    return getAssetByCredential(apiKey, options);
  };

  client.getAssetList = (options) => {
    return getAssetList(apiKey, options);
  };

  client.getAssetStatus = (options) => {
    return getAssetStatus(apiKey, options);
  };

  client.getUserDetail = (options) => {
    return getUserDetail(apiKey, options);
  };

  return client;
};
