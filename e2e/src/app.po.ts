import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(
      by.css('holmes-root div mat-toolbar h1.holmes-app-name')
    ).getText() as Promise<string>;
  }
}
