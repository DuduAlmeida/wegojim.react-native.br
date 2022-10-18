# WEGOJIM

## Layoy

Open [FIGMA PROJECT](<https://www.figma.com/file/gh7gABaxGZKRDfCKAvVvN6/Untitled-(Copy)?node-id=0%3A1>) to access the project design.

## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployed at

Check out our [PRODUCTION URL](https://wegojim-7461a.web.app/) for more details.
We don't have a staging environment.

To make a new deploy, it is necessary to make a new build and then perform the deploy:
```bash
npm run build
# or
yarn build
```

```bash
#only authorized users can deploy
firebase deploy
```

## Database

Check out our [console for Firebase](https://console.firebase.google.com/u/1/project/wegojim-7461a/database/wegojim-7461a-default-rtdb/data) for more details.

## Jenkins automation

The deployment process will be automated using jenkins. It will be deployed into the AWS cloud using a [terraform repo](https://github.com/chierighini/aws-jenkins-terraform).

Once put in place it will be used for deployments and updates to firebase, by web hook triggers in github. Jenkins will only be put in place for demonstration purposes to reduce costs from the cloud provider.