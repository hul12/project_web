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

    // ...
    this.template = template;

    // save player name & game ize
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }
  async init() {
    this._config = await this.fetchConfig();
    this._boardElement = document.querySelector(".cards");
    // fetch the cards configuration from the server

        // TODO #arrow-function: use arrow function instead.


          // create cards out of the config
          this._cards = [];
          this._cards = this._config.ids.map(id => new CardComponent(id));


          this._cards.forEach(card => {


            // TODO #let-const: extract function _appendCard (ie: copy its body here and remove the function)
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
        // TODO #arrow-function: use arrow function instead.
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
        // TODO #arrow-function: use arrow function instead.
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

    // flip the card
    card.flip();

    // if flipped first card of the pair
    if (!this._flippedCard) {
      // keep this card flipped and wait for the second card of the pair
      this._flippedCard = card;
    } else {
      // second card of the pair flipped...

      // if cards are the same
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;

        // reset flipped card for the next turn.
        this._flippedCard = null;

        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;

        // cards did not match
        // wait a short amount of time before hiding both cards
        setTimeout(
            // TODO #arrow-function: use arrow function instead.
            function () {
              // hide the cards
              this._flippedCard.flip();
              card.flip();
              this._busy = false;

              // reset flipped card for the next turn.
              this._flippedCard = null;
            }.bind(this),
            500
        );
      }
    }
  }
}


window.GameComponent = GameComponent;






