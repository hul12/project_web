import { parseUrl } from "../../scripts/utils";
import template from "./game.component.html";
import { Component } from "../../scripts/component";
import { CardComponent } from "./card/card.component"
import "./game.component.css";

let environment = {
  api: {
    host: "http://localhost:8081",
  },
};




export class GameComponent extends Component {
  constructor() {
    super(template)
    let params = parseUrl();
    this._name = params.name;


    this.template = template;

    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }
  async init() {
    this._config = await this.fetchConfig();
    this._boardElement = document.querySelector(".cards");






          this._cards = [];
          this._cards = this._config.ids.map(id => new CardComponent(id));


          this._cards.forEach(card => {



            this._boardElement.appendChild(card.getElement());
            card.getElement().addEventListener(
                "click",
                function () {
                  this._flipCard(card);
                }.bind(this)
            );
          })

          this.start();

  }
  _appendCard(card) {
    this.card=card;
    this._boardElement.appendChild(card.getElement());

    card.getElement().addEventListener(
        "click",

        function () {
          this._flipCard(card);
        }.bind(this)
    );
  }
  start() {
    this._startTime = Date.now();
    let seconds = 0;

    document.querySelector("nav .navbar-title").textContent =
        `Player:${this._name} .Elapsed time:${seconds++}`;

    this._timer = setInterval(

        function () {

          document.querySelector("nav .navbar-title").textContent =
              `Player:${this._name} .Elapsed time:${seconds++}`;
        }.bind(this),
        1000
    );
  }
  async fetchConfig() {
    return fetch(`${environment.api.host}/board?size=${this._size}`).then(
        (response) => response.json()
    );
  }

  goToScore() {
    let timeElapsedInSeconds = Math.floor(
        (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);

    setTimeout(

        () => {
          let scorePage = './#score';
          window.location =
              `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
          }, 750);
  }
  _flipCard(card) {
    this.card=card;
    if (this._busy) {
      return;
    }

    if (card.flipped) {
      return;
    }


    card.flip();


    if (!this._flippedCard) {

      this._flippedCard = card;
    } else {

      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;


        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;


        setTimeout(

            function () {

              this._flippedCard.flip();
              card.flip();
              this._busy = false;


              this._flippedCard = null;
            }.bind(this),
            500
        );
      }
    }
  }
}


window.GameComponent = GameComponent;






