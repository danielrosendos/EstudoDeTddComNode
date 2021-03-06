import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypeter,
  AddAccountRepository
} from "./db-add-account-protocols";


export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypeter
  private readonly addAccountRepository: AddAccountRepository

  constructor(
    encrypter: Encrypeter,
    addAccountRepository: AddAccountRepository
  ) {
    this.encrypter = encrypter
    this.addAccountRepository = addAccountRepository
  }

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password)
    const account = await this.addAccountRepository.add(
      Object.assign({}, accountData, { password: hashedPassword})
    )
    return account
  }
}
