var getFormValues2 = function () {
    var nameEl = document.getElementById("name");
    var priceEl = document.getElementById("price");
    var countEl = document.getElementById("count");
    var name = nameEl.value;
    var price = Number(priceEl.value);
    var count = Number(countEl.value);
    return {
        name: name,
        price: price,
        count: count
    };
};
