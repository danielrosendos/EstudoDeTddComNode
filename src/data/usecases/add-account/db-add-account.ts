import {AddAccount, AddAccountModel, AccountModel, Encrypeter} from "./db-add-account-protocols";


export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypeter

  constructor(
    encrypter: Encrypeter
  ) {
    this.encrypter = encrypter
  }

  async add(account: AddAccountModel): Promise<AccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
