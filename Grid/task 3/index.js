const boardScroll = document.getElementsByClassName('board');

for (let index = 0; index < boardScroll.length; index++) {
    const element = boardScroll[index];

    if (element.value >= 6) {
        boardScroll.style.overflow = 'none';
    }
}