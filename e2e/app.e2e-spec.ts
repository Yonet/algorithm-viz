import { AlgorithmVizPage } from './app.po';

describe('algorithm-viz App', () => {
  let page: AlgorithmVizPage;

  beforeEach(() => {
    page = new AlgorithmVizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
