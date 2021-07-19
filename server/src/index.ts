import { app } from './app';

const start = async () => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
  });
};

start();
