page('/', index);
page('/products', products);
page('/product/:productId', product);
page();

function index() {
  $('main').html(renderIndex());
  $('#btn-products').html("<a href='/products'><h2>Product</h2></a>");
}

async function products() {
  const mlProducts = await getProducts();
  $('main').html(renderProductsList(mlProducts));
  $('#btn-products').html("<a href='/'><h2>Home></h2</a>");
}

async function product(context) {
  const mlProduct = await getProductItem(context.params.productId);
  $('main').html(renderProduct(mlProduct));
  $('#btn-products').html("<a href='/'><h2>Home</h2></a>");
}

function getProducts() {
  return fetch('https://api.mercadolibre.com/sites/MLB/search?q=star wars')
    .then((response) => response.json())
    .then((json) => json.results);
}

function getProductItem(id) {
  return fetch(`https://api.mercadolibre.com/items/${id}?
    access_token=APP_USR-2203506221789612-092014-4da1823b26643e8947e11e50342db4aa-315570596`)
    .then((response) => response.json())
    .then((json) => json);
}