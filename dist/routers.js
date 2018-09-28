page('/', index);
page('/products', products);
page();

function index() {
  $("main").html(renderIndex());
  $("#btnProducts").html("<a href='/products'>Produtos</a>");
}

async function products() {
  const listProducts = await getProducts()
  $("main").html(renderProductsList(listProducts));
  $("#btnProducts").html("<a href='/'> Home </a>");
}

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

