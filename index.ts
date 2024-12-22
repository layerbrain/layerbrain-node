// index.ts

export class Client {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.layerbrain.io";
  }

  // Placeholder method (to be expanded later)
  async getResource(resourceId: string): Promise<any> {
    throw new Error("Method not implemented yet.");
  }
}
