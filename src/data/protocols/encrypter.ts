export interface Encrypeter {
  encrypt (value: string): Promise<string>
}
