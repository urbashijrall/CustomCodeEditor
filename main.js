function run() {
    var html = document.getElementById('html-code').value;
    var css = document.getElementById('css-code').value;
    var js = document.getElementById('js-code').value;
    var output = document.getElementById('output-preview');
    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow.eval(js);
}

function handleTab(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        var textarea = event.target;
        var start = textarea.selectionStart;
        var end = textarea.selectionEnd;
        textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
}