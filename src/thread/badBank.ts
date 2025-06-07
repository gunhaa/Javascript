class BadBank {
  private balance: number;
  constructor(initBalance: number) {
    this.balance = initBalance;
  }

  public withdraw(value: number): number {
    if (this.balance < value) {
      throw new Error("잔고보다 많은 출금 요청 발생");
    }
    console.log(`withdraw 실행 : ${this.balance}`);
    this.balance = this.balance - value;
    return this.balance;
  }

  public deposit(value: number): number {
    this.balance = this.balance + value;
    return this.balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}

export const badBank = new BadBank(10000);
