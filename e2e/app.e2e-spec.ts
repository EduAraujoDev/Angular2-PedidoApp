import { Angular2PedidoAppPage } from './app.po';

describe('angular2-pedido-app App', function() {
  let page: Angular2PedidoAppPage;

  beforeEach(() => {
    page = new Angular2PedidoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
