import PopupManager from "./popup";
import "./popup.scss";
import { createEl } from "./utils";

let isInitialized = false;
let manager = null;

/**
 * 
 * @param {Options} options 
 * @return {PopupManager}
 */
window.getOrCreatePopupManager = function (options) {
    if (isInitialized) {
        options && manager.updateOptions(options);
        return manager;
    }
    isInitialized = true;
    var el = createEl({ classes: ["popup-container"] });
    document.body.appendChild(el);

    manager = new PopupManager(el, options);
    return manager;
}
