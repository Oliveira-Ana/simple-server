function renderIndex() {
  return `
  <div>
  <img class='imgDart' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sPQodN67Cw1BfsreAcnIvsz99HPSZTX0MKGkMaSOPnfXRPdH" >
  </div>`
}
function renderProductsList() {
  return `<div class="container"><div class="row">${produtos.map(product => `
  <div class="col-lg-2 produto" data-i md="${product.id}">
    <div class="single-product-wrapper">
      <div class="product-img">
        <img class="imagens" src="${product.thumbnail}" alt="">
      </div>
      <div class="product-description">
        <h6>${product.title}</h6>
        <p class="product-price">R$${product.price}</p>
        <div class="hover-content">
          <div class="add-to-cart-btn">
            <a href="product/${product.id}" class="btn essence-btn">Comprar</a>            
          </div>
        </div>
      </div>
    </div>
  </div>
  `).join("")}</div></div>`
}
// function renderProductsItem() {
//   return `<div class="container"><div class="row"> 
//   <div class="col-lg-2 produto" data-i md="${product.id}">
//     <div class="single-product-wrapper">
//       <div class="product-img">
//         <img class="imagens" src="${product.thumbnail}" alt="">
//       </div>
//       <div class="product-description">
//         <h6>${product.title}</h6>
//         <p class="product-price">R$${product.price}</p>
//         <div class="hover-content">
//           <div class="add-to-cart-btn">
//             <button class="btn essence-btn">Adicionar ao carrinho</button>  
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   </div></div>`
// }

