class MyButton extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "Hi...This is customized element";
    }

}
customElements.define('my-button', MyButton);