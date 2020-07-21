<img src="https://github.com/fauzan121002/Trusti-SDK/blob/master/trusti.png" width="200" />

# Trusti SDK

Official NodeJS SDK for [Trusti](https://trusti.id)

## Overview

The Trusti NodeJS SDK provides the quickest / easiest path for interacting with the Trusti API

## Installation

```
npm install --save trustisdk
```

## Setup

To start, simply require the Trusti SDK and set up an instance with your Trusti Public API Keys. Don't know what your keys are? Check out your [Profile Page](https://trusti.id/profile).

```javascript
const trustiSDK = require('trustisdk').trustiClient;

const trusti = trustiSDK('<API - KEY>');
```

Quickly test that you can connect to the API with the following call:

```javascript
//await getAssetByCredential
(async () => {
  let response = await trusti.getUserDetail({
    pubkey: 'VEX5sYmkssvFZ3zWLYELao7mBWcCuB72kovDSDPBAFpECsMoVzW5N',
  });
  console.log(response);
})();
```

## Example Usage

Once you've set up your instance, using the Pinata SDK is easy. Simply call your desired function and handle the results of the promise.

- [createAsset](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/createAsset.js)
- [getAssetByCredential](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/getAssetByCredential.js)
- [getAssetList](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/getAssetList.js)
- [getAssetStatus](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/getAssetStatus.js)
- [getUserDetail](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/getUserDetail.js)
- [resetPassword](https://github.com/fauzan121002/Trusti-SDK/blob/master/test/resetPassword.js)

## Questions? Issues? Suggestions?

Feel free to file a github issue or email us at info@trusti.id

We'd love to hear from you!
