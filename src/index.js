import _PopupManager from "./popup";
import "./popup.scss";
import { createEl } from "./utils";

let isInitialized = false;
let manager = null;

/**
 * 
 * @param {Options} options 
 * @return {_PopupManager}
 */
export const PopupManager = {
    init: (options = {}) => {
        if (isInitialized) {
            options && manager.updateOptions(options);
            return manager;
        }
        isInitialized = true;
        var el = createEl({ classes: ["popup-container"] });
        document.body.appendChild(el);

        manager = new _PopupManager(el, options);
        return manager;
    }
}
