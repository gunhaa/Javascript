import Database from "./database";

export const cpuBound = async (ms: number): Promise<string> => {
  const start = Date.now();
  const result = await ioBound();
  while (Date.now() - start < ms) {
    // busy-waiting
  }
  return result;
};

export const ioBound = async (): Promise<string> => {
    const db = new Database();
    // const result = await db.findSomething();
    const result = db.findSomething();
    return result;
}