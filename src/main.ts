import * as THREE from "three";
import Game from "./Game";
import "./style.css";

const game = new Game();

game.font = await game.loadFonts();

game.init();

game.renderer.setAnimationLoop(game.animate.bind(game));

window.THREE = THREE;

window.player = game.getPlayer();
window.camera = game.getCamera();
