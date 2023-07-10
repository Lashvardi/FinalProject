export class ServiceUrlBuilder {
  private static DOMAIN_URL = 'https://rentcar.webwide.ge/';
  private static API_POSTFIX = 'api/';

  public static buildUrl(url: string) {
    return this.DOMAIN_URL + this.API_POSTFIX + url;
  }

  public static buildRootUrl(url: string) {
    return this.DOMAIN_URL + url;
  }
}
