import map from 'lodash/map';
import head from 'lodash/head';
import isElement from 'lodash/isElement';
import isString from 'lodash/isString';

/**
 * Component Super Class
 * @class Component
 */
export default class Component {
    /**
     * Creates an instance of Component.
     * @param {string} id The ID of the component.
     *
     * @memberof Component
     */
    constructor(id) {
        if (isString(id)) {
            this.componentId = isString(id) ? id : '';
        } else {
            throw new Error('[Component Class] Requires argument for `super()` to be a String. eg. `super("C01")`');
        }
    }

    /**
     * Tests for the existance of a component/s.
     *
     * @returns {boolean} If the element exists.
     * @memberof Component
     */
    exists() {
        this.elements = document.querySelectorAll(`[data-component-id='${this.componentId.toUpperCase()}']`);
        return isElement(head(this.elements));
    }

    /**
     * @returns {Node|*}
     * @constructor
     */
    GetElement() {
        return head(this.elements);
    }

    /**
     * @returns {NodeList|*}
     * @constructor
     */
    GetElements() {
        return this.elements;
    }

    /**
     * Static Module Method
     *
     * @param id
     * @param className
     * @constructor
     */
    static Module(id, className) {
        const componentId = isString(id) ? id : '';
        const elements = document.querySelectorAll(`[data-component-id='${componentId.toUpperCase()}']`);
        map(elements, element => new className(element));
    }
}