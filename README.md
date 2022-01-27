[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# wordle-helper

A simple dictionary utility for solving Wordle puzzles (e.g. on [powerlanguage.co.uk/wordle](https://www.powerlanguage.co.uk/wordle/)).

No, this is not meant for cheating. :) Try to solve it yourself first! This is purely a hobby project.

## stack

This utility uses the [Serverless Framework](https://github.com/serverless) to deploy a simple `httpApi` on AWS using `lambda` functions to retrieve English dictionary information.

### resources
- [httpApi event docs](https://www.serverless.com/framework/docs/providers/aws/events/http-api/)
- [serverless-http GitHub repository](https://github.com/dougmoscrop/serverless-http)

## todo
- [ ] programatically assign a custom domain name during deployment
- [ ] add support for other word lengths
- [ ] additional language support (?)

## usage

### getting started

- install dependencies: `npm install`
- run locally using [express.js](http://expressjs.com): `npm run watch` (for dev/testing)
- deploy to AWS: `npm run deploy`

### deployment

To deploy this application assumes you have AWS CLI crednetials already configured with required permissions. See Serverless Framework's [AWS Provider Documentation](https://www.serverless.com/framework/docs/providers/aws/) for details.

After running deploy, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service wordle-helper.zip file to S3 (711.23 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.................................
Serverless: Stack update finished...
Service Information
service: wordle-helper
stage: dev
region: us-east-1
stack: wordle-helper-dev
resources: 11
api keys:
  None
endpoints:
  ANY - https://xxxxxxx.execute-api.us-east-1.amazonaws.com
functions:
  api: wordle-helper-dev-api
layers:
  None
```
