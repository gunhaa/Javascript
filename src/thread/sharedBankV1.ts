export default class SharedBankV1 {
  
  // 메모리는 공유되지만 동시성 이슈 발생

  private balanceView: Uint32Array;

  constructor(buffer: SharedArrayBuffer);
  constructor(buffer: SharedArrayBuffer, initBalance: number);

  constructor(buffer: SharedArrayBuffer, initBalance?: number) {
    const view = new Uint32Array(buffer);
    if (initBalance !== undefined) {
      view[0] = initBalance;
    }
    this.balanceView = view;
  }

  public withdraw(value: number): number {
    if (this.balanceView[0] < value) {
      throw new Error("잔고보다 많은 출금 요청 발생");
    }
    console.log(`withdraw 실행 : ${this.balanceView[0]}`);
    console.log(`view : ${this.balanceView}`);

    this.balanceView[0] = this.balanceView[0] - value;
    return this.balanceView[0];
  }

  public deposit(value: number): number {
    this.balanceView[0] = this.balanceView[0] + value;
    return this.balanceView[0];
  }

  public getBalance(): number {
    return this.balanceView[0];
  }
}

