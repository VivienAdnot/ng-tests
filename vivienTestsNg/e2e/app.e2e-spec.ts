import { VivienTestsNgPage } from './app.po';

describe('vivien-tests-ng App', () => {
  let page: VivienTestsNgPage;

  beforeEach(() => {
    page = new VivienTestsNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
