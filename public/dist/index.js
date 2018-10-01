function renderIndex() {
  return `
  <div>
  <img class='imgDart' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sPQodN67Cw1BfsreAcnIvsz99HPSZTX0MKGkMaSOPnfXRPdH' >
  </div>`
}

function renderProduct(product) {
  return `
  <div class="container"><div class="row area-produto">
    <div class="col-lg-10 produto produtoItem" data-id="${product.id}">
      <div class = "single-product-wrapper" >
      <h6>${product.title}</h6>
        <div class='product-img'>
          <img class='imagens'src='${product.thumbnail}' alt=''>
        </div>
        <div class='product-description'>
          <p class='product-price'> R$ ${product.price}</p>
          <div class='hover-content'>
            <div class='add-to-cart-btn'>
             <button onclick='addProduct()' type='button'>Add to cart</button>
            </div> 
          </div> 
          </div> 
          </div> 
        </div> 
      </div> 
    </div>
    `;
}

function renderProductsList(products) {
  return `
  <div class='container'><div class='row'>
  ${products.map((product =>`<div class='col-lg-2 produto' data-id='${product.id}'>
      <div class = 'single-product-wrapper' >
        <div class='product-img'>
          <img class='imagens'src='${product.thumbnail}' alt="">
        </div>
        <div class='product-description'><h6>${product.title}</h6>
          <p class='product-price'> R$ ${product.price}</p>
          <div class='hover-content'>
            <div class='add-to-cart-btn'>
              <a href='product/${product.id}' class='btn essence-btn'>View Product</a> 
            </div> 
          </div> 
        </div> 
      </div> 
    </div>`)).join("")}</div></div>
  `;
}

function addProduct() {
  
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById('my-car').innerHTML = localStorage.clickcount;

}