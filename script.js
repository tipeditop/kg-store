document.addEventListener("DOMContentLoaded", () => {
  const products = document.querySelectorAll(".product");
  products.forEach(product => {
    const button = product.querySelector("button");
    button.addEventListener("click", () => {
      const name = product.querySelector("h2").textContent;
      const price = product.querySelector("var").textContent;
      const img = product.querySelector("img").getAttribute("src");
      let cart = JSON.parse(localStorage.getItem("warenkorb")) || [];
      cart.push({ name, price, img });
      localStorage.setItem("warenkorb", JSON.stringify(cart));
      alert(`${name} wurde zum Warenkorb hinzugefügt!`);
    });
  });
});

function checkout() {
  const cart = JSON.parse(localStorage.getItem("warenkorb")) || [];
  if (cart.length === 0) {
    alert("Ihr Warenkorb ist leer.");
    return;
  }

  alert("Vielen Dank für Ihren Einkauf!");

  localStorage.removeItem("warenkorb");
  location.reload();
}
