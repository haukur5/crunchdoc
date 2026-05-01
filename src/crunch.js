class CrunchResult {
    constructor(elements) {
        this.elements = elements;
    }

    addClass(className) {
        this.elements.forEach(el => el.classList.add(className));
        return this;
    }

    removeClass(className) {
        this.elements.forEach(el => el.classList.remove(className));
        return this;
    }

    toggleClass(className) {
        this.elements.forEach(el => el.classList.toggle(className));
        return this;
    }

    attr(name, value) {
        if (value === undefined) {
            return this.elements[0].getAttribute(name);
        }
        this.elements.forEach(el => el.setAttribute(name, value));
        return this;
    }

    text(value) {
        if (value === undefined) {
            return this.elements[0].textContent;
        }
        this.elements.forEach(el => el.textContent = value);
        return this;
    }

    on(event, handler) {
        this.elements.forEach(el => el.addEventListener(event, handler));
        return this;
    }

    siblings(selector) {
        const result = [];
        this.elements.forEach(el => {
            if (!el.parentNode) return;
            Array.from(el.parentNode.children).forEach(child => {
                if (child === el) return;
                if (selector && !child.matches(selector)) return;
                if (!result.includes(child)) result.push(child);
            });
        });
        return new CrunchResult(result);
    }

    ancestor(selector) {
        const result = [];
        this.elements.forEach(el => {
            let parent = el.parentElement;
            while (parent) {
                if (!selector || parent.matches(selector)) {
                    if (!result.includes(parent)) result.push(parent);
                }
                parent = parent.parentElement;
            }
        });
        return new CrunchResult(result);
    }

    animate(properties, options = {}) {
        const toMs = v => {
            if (typeof v === 'number') return v;
            if (typeof v === 'string') {
                if (v.endsWith('ms')) return parseFloat(v);
                if (v.endsWith('s')) return parseFloat(v) * 1000;
                return parseFloat(v) || 0;
            }
            return 0;
        };
        const animOptions = {
            duration: options.duration ?? 400,
            delay: toMs(options.delay ?? 0),
            easing: options.easing ?? 'ease',
            iterations: options.iterationCount === 'infinite' ? Infinity : (options.iterationCount ?? 1),
            fill: options.fillMode ?? 'none',
        };
        this.elements.forEach(el => el.animate(properties, animOptions));
        return this;
    }

    validation(rules) {
        const errors = {};
        const form = this.elements[0];
        if (!form) return errors;
        Object.entries(rules).forEach(([fieldName, validators]) => {
            const field = form.querySelector(`[name="${fieldName}"]`);
            if (!field) return;
            const value = field.value;
            for (const { message, valid } of validators) {
                if (!valid(value, form)) {
                    errors[fieldName] = message;
                    break;
                }
            }
        });
        return errors;
    }

    append(content) {
        this.elements.forEach(el => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('beforeend', content);
            } else if (content instanceof Node) {
                el.appendChild(content.cloneNode(true));
            }
        });
        return this;
    }

    prepend(content) {
        this.elements.forEach(el => {
            if (typeof content === 'string') {
                el.insertAdjacentHTML('afterbegin', content);
            } else if (content instanceof Node) {
                el.insertBefore(content.cloneNode(true), el.firstChild);
            }
        });
        return this;
    }

    remove() {
        this.elements.forEach(el => el.remove());
    }

    first() {
        return new CrunchResult(this.elements.length > 0 ? [this.elements[0]] : []);
    }

    last() {
        return new CrunchResult(this.elements.length > 0 ? [this.elements[this.elements.length - 1]] : []);
    }
}

function crunch(selector) {
    const elements = document.querySelectorAll(selector);
    return new CrunchResult(elements);
}

window.crunch = crunch;
