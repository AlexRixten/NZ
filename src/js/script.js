import '../css/style.scss';

dragElement(document.getElementById("drag"));

function dragElement(element) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;

    if (document.getElementById(element.id + "element")) {
        document.getElementById(element.id + "element").onmousedown = dragMouseDown;
    } else {
        element.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        if (element.offsetTop - pos2 + element.offsetHeight <= element.parentNode.offsetHeight && element.offsetTop - pos2 >= 0) {
            element.style.top = (element.offsetTop - pos2) + "px";
        }

        if (element.offsetLeft - pos1 + element.offsetWidth <= element.parentNode.offsetWidth && element.offsetLeft - pos1 >= 0) {
            element.style.left = (element.offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}