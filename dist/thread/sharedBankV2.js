"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SharedBankV2 {
    constructor(buffer, initBalance) {
        const view = new Uint32Array(buffer);
        if (initBalance !== undefined) {
            view[0] = initBalance;
        }
        this.balanceView = view;
    }
    withdraw(value) {
        let oldValue;
        let newValue;
        do {
            oldValue = Atomics.load(this.balanceView, 0);
            if (oldValue < value) {
                throw new Error("잔고보다 많은 출금 요청 발생");
            }
            newValue = oldValue - value;
            // oldValue일 때만 newValue로 변경 (CAS)
        } while (Atomics.compareExchange(this.balanceView, 0, oldValue, newValue) ===
            newValue);
        console.log(`withdraw 실행 후 잔고: ${newValue}`);
        return newValue;
    }
    deposit(value) {
        this.balanceView[0] = this.balanceView[0] + value;
        return this.balanceView[0];
    }
    getBalance() {
        return this.balanceView[0];
    }
}
exports.default = SharedBankV2;
