document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, Name: "Product1", price: 34.99 },
    { id: 2, Name: "Product2", price: 12.99 },
    { id: 3, Name: "Product3", price: 45.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const Cartitems = document.getElementById("cart-items");
  const emptyCartitems = document.getElementById("empty-cart");
  const emptyCartMessage = document.getElementById("cart-total");
  const cartTotalMessage = document.getElementById("total-price");
  const checkoutbtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.Name} - $${product.price.toFixed(2)}</span>
    <button data-id="${product.id}">Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const prodouctid = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id == prodouctid);
      addcart(product);
    }
  });

  function addcart(product) {
    cart.push(product);
    renderCart();
  }

  function renderCart() {
    Cartitems.innerHTML = " ";
    let totalPrice = 0;
    if (cart.length > 0) {
      emptyCartitems.classList.add("hidden");
      emptyCartMessage.classList.remove("hidden");

      cart.forEach((item) => {
        totalPrice += item.price;
        const cartDiv = document.createElement("div");
        cartDiv.innerHTML = `
        ${item.Name} - $${item.price.toFixed(2)}
        
        `;
        Cartitems.appendChild(cartDiv);
      });
      cartTotalMessage.textContent = `$${totalPrice.toFixed(2)}`;
    } 
    else {
      emptyCartMessage.classList.remove("hidden");
      Cartitems.classList.remove('hidden')
       cartTotalMessage.textContent = 0.0;
    }
  }

  checkoutbtn.addEventListener('click',()=>{
    cart.length = 0;
    alert("Sucessfully checkout completed")
    renderCart();
  })
});
