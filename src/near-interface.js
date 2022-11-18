/* Talking with a contract often involves transforming data, we recommend you to encapsulate that logic into a class */


export class HelloNEAR {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;    
  }

  async getGreeting(account) {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_user_balance',args: { user_account: account}  });
  }
  async getTotalBalance() {
    return await this.wallet.viewMethod({ contractId: this.contractId, method: 'get_total_balance'});
  }

  async deposit(amount) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'deposit_balance', deposit: amount});
  }
  async withdraw(amountx) {
    return await this.wallet.callMethod({ contractId: this.contractId, method: 'withdraw_balance', args:{amount: amountx} });
  }
  async admin_stake(){
    accountid = "ft.examples.testnet";
    return await this.wallet.callMethod({contractId:this.contractId,method: 'stake', args:{pool: accountid}});
  }
  async admin_unstake(){
    accountid = "ft.examples.testnet";
    return await this.wallet.callMethod({contractId:this.contractId,method: 'unstake', args:{pool: accountid}});
  }
  async purchase_all(tokenID){
    return await this.wallet.callMethod({contractId: this.contractId,method: 'purchase', args:{token_account: tokenID}});
  }
  async start_launch_met1(tokenID, amountToSell){
    await this.wallet.batch({contractId: tokenID,method: ['storage_deposit','ft_mint'], args: [{account_id: this.contractId}, {receiver_id: this.contractId, amount: amountToSell}],deposit: ["1250000000000000000000","100000000000000010000000"]})
  }
  async start_launch_met2(tokenID, amountToSell){
    await this.wallet.callMethod({contractId: this.contractId,method: 'start_launch', args:{account_of_token: tokenID, amount_to_sell:amountToSell}})
  }
  async get_launch(x){
    return await this.wallet.viewMethod({contractId: this.contractId, method: 'get_tokens',  args:{account: x}});
  }
  async get_remaining(x){
    return await this.wallet.viewMethod({contractId: x, method: 'ft_balance_of', args:{account_id: this.contractId}});
  }
  async get_allocations(account,pp){
    return await this.wallet.callMethod({contractId: this.contractId, method: 'purchase', args:{token_account: account}, deposit: pp});
  }
}