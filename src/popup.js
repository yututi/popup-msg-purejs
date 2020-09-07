import { createEl } from "./utils"

/**
 * @typedef Options
 * @type {Object}
 * @property {string} position
 * @property {number} duration メッセージが非表示になるまでの時間(msec)
 */
const defaultOptions = {
    mode: "primary",
    duration: 4000
};

class Popup {

    /**
     * @param {String} message 
     * @param {Options} options 
     */
    constructor(message, options) {

        /**
         * @type {boolean}
         */
        this.removed = false;

        /**
         * @type {HTMLElement} popup element.
         */
        this.el = createEl({
            classes: ["popup-wrapper"],
            children: [
                createEl({
                    classes: ["popup", `popup--${options.mode}`],
                    children: [
                        createEl({ tag: "span", classes: ["popup__message"] }, el => el.textContent = message),
                        createEl({ classes: ["popup__close"] }, el => {
                            el.addEventListener("click", () => {
                                this.hide();
                            });
                        })
                    ]
                })
            ]
        });
    }

    show() {
        var inner = this.el.querySelector(".popup");
        if (inner) {
            // console.log(inner.scrollHeight)
            // console.log(Math.ceil(inner.getBoundingClientRect().height))
            this.el.style.height = inner.getBoundingClientRect().height + "px";
        }
        this.el.classList.add("popup-wrapper--show");
    }

    hide() {
        if (this.removed) return;
        this.removed = true;
        this.el.style.height = null;
        this.el.addEventListener("animationend", () => {
            this.el.remove();
        }, { once: true });
        this.el.classList.add("popup-wrapper--hide");
    }
}

/**
 * 
 */
class PopupManager {

    /**
     * 
     * @param {Options} options 
     */
    static init(options) {
        if (PopupManager.manager) {
            options && PopupManager.manager.updateOptions(options);
            return PopupManager.manager;
        }
        if(!document.body) throw new Error("Can not initialize before document load.")
        var el = createEl({ classes: ["popup-container"] });
        document.body.appendChild(el);

        PopupManager.manager = new PopupManager(el, options);
        return PopupManager.manager;
    }

    /**
     * 
     * @param {Options} options 
     */
    constructor(containerEl, options) {

        /**
         * @type {HTMLElement}
         */
        this.popupContainerEl = containerEl;

        /**
         * @type Options
         */
        this.globalOptions = Object.assign({}, defaultOptions, options);
    }

    /**
     * 指定されたメッセージをポップアップ表示します。
     * @param {String} message 
     * @param {Options} options 
     */
    showMessage(message = "", options = {}) {
        var localOptions = Object.assign({}, this.globalOptions, options);

        var popup = new Popup(message, localOptions);
        this.popupContainerEl.appendChild(popup.el);

        popup.show();
        setTimeout(() => { popup.hide() }, localOptions.duration);
    }

    /**
     * 
     * @param {Options} options 
     */
    updateOptions(options = {}) {
        this.globalOptions = Object.assign({}, this.globalOptions, options);
    }
}


/**
 * @type {PopupManager} シングルトンインスタンス
 */
PopupManager.manager = null;


export default PopupManager;