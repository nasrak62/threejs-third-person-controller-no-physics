import Game from "./Game";
import "./style.css";

const game = new Game();

game.init();

game.renderer.setAnimationLoop(game.animate.bind(game));
