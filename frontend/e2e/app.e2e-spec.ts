import { AppPage } from './app.po';

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display login message', () => {
    page.navigateTo();
    // expect(compiled.querySelector('.card-header').textContent).toContain('Lépjen be');
    expect(page.getLoginTitle()).toContain('Lépjen be');
  });
});
