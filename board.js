function main() {
    function board_create() {
        var board = document.getElementById("container");
        board.style.borderColor = 'black';
        board.style.borderStyle = 'solid';
        board.style.width = '550px';
        board.style.height = '550px';
        board.style.margin = 'auto';
        board.style.marginBottom = '50px';
        board.style.marginTop = '50px';
        board.style.display = 'flex';
        board.style.flexWrap = 'wrap';
        board.style.paddingRight = '50px';
        board.style.paddingTop = '50px';
        board.style.backgroundColor = 'black';
    }
    function cell_create() {
        var cell = document.createElement("div");
        cell.className = 'cell';
        container.append(cell);
        cell.style.width = '44px';
        cell.style.height = '44px';
        cell.style.borderColor = 'black';
        cell.style.borderStyle = 'solid';
        cell.style.margin = '0px';
        cell.style.padding = '0px';
        cell.style.display = 'flex';
        cell.style.justifyContent = 'center';
        cell.style.alignItems = 'center';
        cell.style.textEmphasisColor = 'white';
        cell.style.color = 'white';

    }
    window.onload = board_create();
    for (let n = 0; n < 121; n++) {
        window.onload = cell_create();
    };
    var masCell = document.querySelectorAll(".cell");
    for (let i = 0; (i < masCell.length); i++) {
        if (i % 2 == 0) {
            masCell[i].style.background = 'black'
        }
        else {
            masCell[i].style.background = 'white'
        }
    }

    for (let i = 101; i <= 120; i++) {
        masCell[i].style.background = 'black';
    }
    for (let i = 2; i <= 11; i++) {
        masCell[i].style.background = 'black';
    }
    for (let i = 21; i <= 121; i = i + 11) {
        masCell[i].style.background = 'black';
    }
    for (let i = 0; i <= 111; i = i + 11) {
        masCell[i].style.background = 'black';
        masCell[i + 1].style.background = 'black';
    }
    for (let i = 2; i <= 9; i++) {
        masCell[i].innerHTML = String.fromCharCode(i + 95).toUpperCase();
        masCell[i + 99].innerHTML = String.fromCharCode(i + 95).toUpperCase();
    }
    var num = 1;
    for (let i = 12; i <= 99; i = i + 11) {
        masCell[i].innerHTML = num;
        masCell[i + 9].innerHTML = num;
        num++;
    }

}

main();