var buttonEl = document.getElementById("calculate");
var tbody = document.getElementById("table-body");
var rows = tbody.getElementsByTagName("tr");
var rowsRecord = {};
buttonEl.addEventListener("click", function (e) {
    e.preventDefault();
    var _a = getFormValues2(), product = _a.product, price = _a.price, count = _a.count;
});
