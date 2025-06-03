export default class Database {
  findSomething = (): Promise<string> =>
    new Promise(resolve => setTimeout(() => resolve('db working fin'), 1000));
};
