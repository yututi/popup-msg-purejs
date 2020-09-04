/**
 * html要素を作成する。
 * @param {Object} elementOptions
 * @param {String} elementOptions.tag
 * @param {String[]} elementOptions.classes 
 * @param {HTMLElement[]} elementOptions.children
 * @param {onCreate} onCreate
 * 
 * @return {HTMLElement} 
 */
export function createEl({ tag = "div", classes = [], children = [] }, onCreate) {
    var el = document.createElement(tag);
    classes.forEach(clazz => { el.classList.add(clazz) });
    children.forEach(child => { el.appendChild(child) });
    onCreate && onCreate(el);
    return el;
}

/**
 * @callback onCreate
 * @param {HTMLElement} element
 * @return {void}
 */