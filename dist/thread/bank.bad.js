"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.badBank = void 0;
class BadBank {
    constructor(initBalance) {
        this.balance = initBalance;
    }
    withdraw(value) {
        if (this.balance < value) {
            throw new Error("잔고보다 많은 출금 요청 발생");
        }
        console.log(`withdraw 실행 : ${this.balance}`);
        this.balance = this.balance - value;
        return this.balance;
    }
    deposit(value) {
        this.balance = this.balance + value;
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
}
exports.badBank = new BadBank(10000);
