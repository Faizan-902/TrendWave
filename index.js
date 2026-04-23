var cartCount = 0;
var helperBtn = document.getElementById("helper");

const buttons = document.getElementsByClassName("cart-btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var quantityInput = this.parentElement.querySelector(".quantity-box");
        var qty = parseInt(quantityInput.value) || 1;
        cartCount += qty;
        helperBtn.textContent = "🛒 " + cartCount;

        this.textContent = "Added ✓";
        this.style.backgroundColor = "#2e8b57";
        var btn = this;
        setTimeout(function () {
            btn.textContent = "Add to Cart";
            btn.style.backgroundColor = "";
        }, 1200);
    });
}
