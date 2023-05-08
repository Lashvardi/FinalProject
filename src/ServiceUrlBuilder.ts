export class ServiceUrlBuilder {
  private static DOMAIN_URL = 'https://localhost:7149/';
  private static API_POSTFIX = 'api/';

  public static buildUrl(url: string) {
    return this.DOMAIN_URL + this.API_POSTFIX + url;
  }

  public static buildRootUrl(url: string) {
    return this.DOMAIN_URL + url;
  }
}
