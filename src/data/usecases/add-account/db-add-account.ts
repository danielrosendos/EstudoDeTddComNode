import {AddAccount, AddAccountModel} from "../../../domain/usecases/add-account";
import {AccountModel} from "../../../domain/models/account";
import {Encrypeter} from "../../protocols/encrypter";


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
