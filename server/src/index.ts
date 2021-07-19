import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  await mongoose.connect('mongodb://db:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(() => {
    console.log('mongodb working');
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
  });
};

start();
