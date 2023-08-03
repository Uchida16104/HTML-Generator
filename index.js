function composeElement(parentTag, index, childTag, type, name, cssText, input) {
    var element = document.createElement(childTag);
    element.setAttribute(type, name);
    if (parentTag != "html" || parentTag != "head" || childTag != "script" || childTag != "style" || childTag != "title") {
    element.style.cssText = cssText;
    }
    element.textContent = input;
    var parent = document.getElementsByTagName(parentTag)[index]
    parent.appendChild(element);
}
