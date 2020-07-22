import { clean, connect, disconnect, seed } from './utils';

const main = async () => {
  try {
    await connect();
    await clean();
    await seed();
    await disconnect();
  } catch (err) {
    console.error(err);
  }
};

void main();
