// 웹 페이지로부터 두 수가 오기를 기다린다.

onmessage = function (e) {
    var multiple = 0;
    var first = parseInt(e.data.first);
    var second = parseInt(e.data.second);
    multiple = first * second;

    this.postMessage(multiple);
}
