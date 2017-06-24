import { NgrxExamplePage } from './app.po';

describe('ngrx-example App', () => {
  let page: NgrxExamplePage;

  beforeEach(() => {
    page = new NgrxExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
