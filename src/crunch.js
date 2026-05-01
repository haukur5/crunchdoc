class CrunchCollection {
    constructor(elements) {
        this.elements = Array.from(elements);
    }

    addClass(className) {
        this.elements.forEach((el) => el.classList.add(className));
        return this;
    }

    removeClass(className) {
        this.elements.forEach((el) => el.classList.remove(className));
        return this;
    }
    
    toggleClass(className) {
        this.elements.forEach((el) => el.classList.toggle(className));
        return this;
    }

    attr(name, value) {
        if (value === undefined) {
            return this.elements[0].getAttribute(name);
        } else {
            this.elements.forEach(el => el.setAttribute(name, value));
            return this;
        }
    }

    text(value) {
        if (value === undefined) {
            return this.elements[0].textContent;
        } else {
            this.elements.forEach(el => el.textContent = value);
            return this;
        }
    }
}

function crunch(selector) {
    const elements = document.querySelectorAll(selector);
    return new CrunchCollection(elements);
}

window.crunch = crunch;

export {crunch, CrunchCollection};