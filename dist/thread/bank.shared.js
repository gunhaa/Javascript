"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SharedBank {
    constructor(buffer, initBalance) {
        const view = new Uint32Array(buffer);
        if (initBalance !== undefined) {
            view[0] = initBalance;
        }
        this.balanceView = view;
    }
    withdraw(value) {
        if (this.balanceView[0] < value) {
            throw new Error("잔고보다 많은 출금 요청 발생");
        }
        console.log(`withdraw 실행 : ${this.balanceView[0]}`);
        console.log(`view : ${this.balanceView}`);
        this.balanceView[0] = this.balanceView[0] - value;
        return this.balanceView[0];
    }
    deposit(value) {
        this.balanceView[0] = this.balanceView[0] + value;
        return this.balanceView[0];
    }
    getBalance() {
        return this.balanceView[0];
    }
}
exports.default = SharedBank;
