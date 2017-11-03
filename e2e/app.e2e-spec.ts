import { AlchemyPage } from './app.po';

describe('alchemy App', () => {
  let page: AlchemyPage;

  beforeEach(() => {
    page = new AlchemyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
