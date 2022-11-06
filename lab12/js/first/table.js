var calculateBtnEl = document.getElementById("calculate");
var tableFunctionEl = document.getElementById("table-function");
var tBody = document.getElementById("table-body");
calculateBtnEl.addEventListener("click", function (e) {
    e.preventDefault();
    tBody.innerHTML = "";
    var _a = getFormValues(), start = _a.start, end = _a.end, step = _a.step, triangleFx = _a.triangleFx;
    tableFunctionEl.innerHTML = triangleFx;
    for (var degrees = start; degrees <= end; degrees += step) {
        var radians = toRadians(degrees);
        var functionResult = void 0;
        switch (triangleFx) {
            case TriangleFunction.Sin:
                functionResult = Math.sin(radians);
                break;
            case TriangleFunction.Cos:
                functionResult = Math.cos(radians);
                break;
            default:
                throw new Error("not TriangleFunction");
        }
        var tr = document.createElement("tr");
        var tdDegree = document.createElement("td");
        var tdRadian = document.createElement("td");
        var tdFunction = document.createElement("td");
        tdDegree.innerText = degrees.toString();
        tdRadian.innerText = radians.toString();
        tdFunction.innerText = functionResult.toString();
        tr.appendChild(tdDegree);
        tr.appendChild(tdRadian);
        tr.appendChild(tdFunction);
        tBody.appendChild(tr);
    }
});
var toRadians = function (degrees) {
    if (degrees < 0) {
        degrees += 360;
    }
    return degrees / 180 * Math.PI;
};
