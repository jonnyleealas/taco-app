// import { Express } from 'express';
// import typeORMConnect from '../databases/postgres/typeOrm';

// const appSetup = async (app: Express) => {
//   try {
//     await typeORMConnect();
//     console.log('Databases connected successfully!');

//     const APP_PORT = Number(process.env.APP_PORT) || 3000;
//     app.listen(APP_PORT, () => {
//       console.log(`Server started on port ${APP_PORT}`);
//     });

//   } catch (error) {
//     console.log('Unable to start the app!');
//     console.error(error);
//   }
// };

// export default appSetup;


import { Express } from 'express';
import typeORMConnect from '../databases/postgres/typeOrm';

const appSetup = async (app: Express) => {
  try {
    await typeORMConnect();
    console.log('Databases connected successfully!');
    
    // Note: Do not start the server here; it's handled elsewhere.
  } catch (error) {
    console.log('Unable to start the app!');
    console.error(error);
  }
};

export default appSetup;
