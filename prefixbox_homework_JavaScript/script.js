const saleCheckBox = document.querySelector(".sale");
const select = document.querySelector(".order");
const container = document.querySelector(".products");
const productsArray = Array.from(container.querySelectorAll(".product"));

saleCheckBox.addEventListener("change", (event) => {
  const isChecked = event.target.checked;

  productsArray.forEach((product) => {
    const hasOldPrice = product.querySelector(".product-old-price");

    if (isChecked) {
      product.style.display = hasOldPrice ? "" : "none";
    } else {
      product.style.display = "";
    }
  });
});

select.addEventListener("change", () => {
  const mode = select.value;

  productsArray.sort((a, b) => {
    const nameA = a.querySelector(".product-name").textContent;
    const nameB = b.querySelector(".product-name").textContent;

    const getPrice = (el) => {
      const priceText = el.querySelector(".product-price").textContent;
      // replace anything that's not a digit and convert to number
      return parseFloat(priceText.replace(/[^0-9]/g, ""));
    };

    const priceA = getPrice(a);
    const priceB = getPrice(b);

    switch (mode) {
      case "0":
        return priceA - priceB;
      case "1":
        return priceB - priceA;
      case "2":
        return nameA.localeCompare(nameB);
      case "3":
        return nameB.localeCompare(nameA);
      default:
        return 0;
    }
  });

  productsArray.forEach((product) => {
    container.appendChild(product);
  });
});
