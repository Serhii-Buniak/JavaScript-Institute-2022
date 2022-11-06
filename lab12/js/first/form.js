var TriangleFunction;
(function (TriangleFunction) {
    TriangleFunction["Sin"] = "sin";
    TriangleFunction["Cos"] = "cos";
})(TriangleFunction || (TriangleFunction = {}));
var getFormValues = function () {
    var triangleFxEl = document.getElementById("function");
    var startEl = document.getElementById("start");
    var endEl = document.getElementById("end");
    var stepEl = document.getElementById("step");
    var triangleFx = triangleFxEl.value;
    var start = Number(startEl.value);
    var end = Number(endEl.value);
    var step = Number(stepEl.value);
    return {
        triangleFx: triangleFx,
        start: start,
        end: end,
        step: step
    };
};
