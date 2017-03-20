import { NgUntappdPage } from './app.po';

describe('ng-untappd App', () => {
  let page: NgUntappdPage;

  beforeEach(() => {
    page = new NgUntappdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
