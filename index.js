function composeElement(parentTag, index, childTag, type, name, cssText, input) {
    var element = document.createElement(childTag);
    element.setAttribute(type, name);
    element.style.cssText = cssText;
    element.textContent = input;
    var parent = document.getElementsByTagName(parentTag)[index]
    parent.appendChild(element);
}
