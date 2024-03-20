import { Component } from "../../scripts/component";
import template from "../welcome/welcome.component.html";
import "./welcome.component.css";



export class WelcomeComponent extends Component {
    constructor() {
        super(template)
        this.template = template;
    };
        /* method WelcomeComponent.init */
    init() {
        let form = document.querySelector("form.form-signin");

        form.addEventListener(
            "submit",

            // TODO #arrow-function: use arrow function instead.
            function (event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    let name = event.srcElement.querySelector("#nickname").value;
                    let size = parseInt(event.srcElement.querySelector("#size").value);

                    _startGame(name, size);
                }

            }.bind(this),
            false
        );

        return this;
    }

}
  // TODO #class: turn function into a method of WelcomeComponent
  function _startGame(name, size) {
    // TODO #spa: replace with './#game'
    let gamePage = "./#game";

    window.location = `${gamePage}?name=${name}&size=${size}`;
  }

