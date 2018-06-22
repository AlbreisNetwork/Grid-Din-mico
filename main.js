var gridSettings = {
  containerId: 'grid-conteiner', 
  cellClass: 'cell',
  cols: 15,  // Quantidade máxima de colunas
  cw: 300, // Largura mímina da coluna e células
  margin: 10, // Margin entre as células
  padding: 10 // Padding das células
}
window.onload = function() {
    if (document.getElementById('grid-conteiner'))
        gengrid(gridSettings);
};
var tOut = false;
var milSec = 500;
window.onresize = function() {
    if (document.getElementById('grid-conteiner')) {
        // Cria um "delay" para o evento onresize para não ocorrer overflow na fila de animações
        if (tOut !== false)
            clearTimeout(tOut);
        tOut = setTimeout(gengrid(gridSettings), milSec);
    }
};