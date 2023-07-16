function composeElement(tag, type, name, cssText, input) {
    var element = document.createElement(tag);
    element.setAttribute(type, name);
    element.style.cssText = cssText;
    element.textContent = input;
    document.body.appendChild(element);
}