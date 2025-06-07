export default class SharedBankV2 {
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
    let oldValue: number;
    let newValue: number;
    do {
      oldValue = Atomics.load(this.balanceView, 0);

      if (oldValue < value) {
        throw new Error("잔고보다 많은 출금 요청 발생");
      }

      newValue = oldValue - value;
      // oldValue일 때만 newValue로 변경 (CAS)
    } while (
      Atomics.compareExchange(this.balanceView, 0, oldValue, newValue) ===
      newValue
    );

    console.log(`withdraw 실행 후 잔고: ${newValue}`);
    return newValue;
  }

  public deposit(value: number): number {
    this.balanceView[0] = this.balanceView[0] + value;
    return this.balanceView[0];
  }

  public getBalance(): number {
    return this.balanceView[0];
  }
}
