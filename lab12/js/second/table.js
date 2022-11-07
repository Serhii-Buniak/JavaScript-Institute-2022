var buttonEl = document.getElementById("calculate");
var totolSumEl = document.getElementById("total");
var tbody = document.getElementById("table-body");
var selectName = document.getElementById("name");
var productDict = {};
var rows = tbody.getElementsByTagName("tr");
for (var index = 0; index < rows.length; index++) {
    var row = rows[index];
    var cells = row.getElementsByTagName("td");
    var nameValue = cells[0].innerText;
    productDict[nameValue] = {
        name: cells[0],
        price: cells[1],
        count: cells[2],
        sum: cells[3],
    };
}
buttonEl.addEventListener("click", function (e) {
    e.preventDefault();
    var _a = getFormValues2(), name = _a.name, price = _a.price, count = _a.count;
    productDict[name].price.innerText = price.toString();
    productDict[name].count.innerText = count.toString();
    productDict[name].sum.innerText = (price * count).toString();
    var sum = 0;
    for (var key in productDict) {
        sum += +productDict[key].sum.innerText;
        console.log(sum);
    }
    totolSumEl.innerText = sum.toString();
});
