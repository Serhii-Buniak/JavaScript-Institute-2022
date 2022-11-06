var getFormValues2 = function () {
    var productEl = document.getElementById("product");
    var priceEl = document.getElementById("price");
    var countEl = document.getElementById("count");
    var product = productEl.value;
    var price = Number(priceEl.value);
    var count = Number(countEl.value);
    return {
        product: product,
        price: price,
        count: count
    };
};
