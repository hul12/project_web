import { Router } from "./app/scripts/router";
import { WelcomeComponent } from "./app/scripts/welcome";
import { GameComponent } from "./app/scripts/game";
import { ScoreComponent } from "./app/scripts/score";
const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);

router.register("", {
        component: WelcomeComponent,
        templateUrl: "/src/app/views/welcome.html",
         });
router.register("game", {
            component: GameComponent,
            templateUrl: "/src/app/views/game.html",
        });
router.register("score", {
            component: ScoreComponent,
            templateUrl: "/src/app/views/score.html",
        });
