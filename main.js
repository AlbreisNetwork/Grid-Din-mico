window.onload = function() {
    if (document.getElementById('grid-conteiner'))
        gengrid('grid-conteiner', 'cell');
};
var tOut = false;
var milSec = 500;
window.onresize = function() {
    if (document.getElementById('grid-conteiner')) {
        // Cria um "delay" para o evento onresize para não ocorrer overflow na fila de animações
        if (tOut !== false)
            clearTimeout(tOut);
        tOut = setTimeout(gengrid, milSec);
    }
};