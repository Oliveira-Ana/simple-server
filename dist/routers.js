page('/', index);
page('/products', products);
// page('/product/:produtctId', product);

page();

function index() {
  $("main").html(renderIndex());
  $("#btnProducts").html("<a href='/products'><h2>Produtos</h2></a>");
}

async function products() {
  const listProducts = await getProducts()
  $("main").html(renderProductsList(listProducts));
  $("#btnProducts").html("<a href='/'><h2> Home </h2></a>");
}

// async function product(context) {
//   const mercadoLivreProduct = await getProduct(context.params.productId);
//   $("main").html(renderProducts(mercadoLivreProduct));
//   $("#btnProducts").html("<a href='/'>Home</a>");
//  }

let produtos = [];

function erro() {
  console.log("erro");
}

function loadingProducts(data) {
  produtos = data.results;
  renderProductsList();
}

function getProducts() {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=star wars`

  $.ajax({
    type: "GET",
    url: url,
    success: loadingProducts,
    error: erro
  });
}

// function getProduct(id) {
//   return fetch(`https://api.mercadolibre.com/items/${id}?
//     access_token=APP_USR-2203506221789612-092014-4da1823b26643e8947e11e50342db4aa-315570596`)
//     .then((response) => response.json())
//     .then((json) => json);
//  }

// function getProducts() {
//   const url = `https://api.mercadolibre.com/items/${id}`

//   $.ajax({
//     type: "GET",
//     url: url,
//     success: loadingProducts,
//     error: erro
//   });
// }