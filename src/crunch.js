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
        const duration = options.duration ?? 400;
        const easing = options.easing ?? 'ease';
        this.elements.forEach(el => {
            el.style.transition = `all ${duration}ms ${easing}`;
            Object.entries(properties).forEach(([key, value]) => {
                el.style[key] = value;
            });
        });
        return this;
    }

    validation(rules) {
        const errors = {};
        this.elements.forEach(form => {
            Object.entries(rules).forEach(([fieldName, fieldRules]) => {
                const field = form.querySelector(`[name="${fieldName}"]`);
                if (!field) return;
                const value = field.value;
                if (fieldRules.required && !value) {
                    errors[fieldName] = `${fieldName} is required`;
                    return;
                }
                if (fieldRules.minLength && value.length < fieldRules.minLength) {
                    errors[fieldName] = `${fieldName} must be at least ${fieldRules.minLength} characters`;
                    return;
                }
                if (fieldRules.maxLength && value.length > fieldRules.maxLength) {
                    errors[fieldName] = `${fieldName} must be at most ${fieldRules.maxLength} characters`;
                    return;
                }
                if (fieldRules.pattern && !fieldRules.pattern.test(value)) {
                    errors[fieldName] = `${fieldName} is invalid`;
                }
            });
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
        return this;
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
