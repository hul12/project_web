import { parseUrl } from "../../scripts/utils";
import { Component } from "../../scripts/component";

import template from "./score.component.html";
import "./score.component.css";

export class ScoreComponent extends Component  {
    constructor(){
        super(template)

    // TODO #extends: call super(template)
    let params = parseUrl();
    // TODO #import-html: assign template to this.template
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
    this.template = template;
    }
    init() {
        document.getElementById("name").innerText = this.name;
        document.getElementById("size").innerText = this.size;
        document.getElementById("time").innerText = this.time;
    };
  }

  // TODO #export-functions: remove this line
  // put component in global scope, to be runnable right from the HTML.
  window.ScoreComponent = ScoreComponent;





