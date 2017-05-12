import { CircularRoutesPage } from './app.po';

describe('circular-routes App', () => {
  let page: CircularRoutesPage;

  beforeEach(() => {
    page = new CircularRoutesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
