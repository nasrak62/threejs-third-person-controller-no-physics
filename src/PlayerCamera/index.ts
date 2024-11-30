import Game from "../Game";
import { calculateCameraNewPosition } from "./utils";

export default class PlayerCamera {
  game: Game;
  movementFactor: number;

  constructor() {
    this.game = new Game();
    this.movementFactor = 0.1;

    window.addEventListener("mousemove", this.handleMouseMove.bind(this));
  }

  handleMouseMove(event: MouseEvent) {
    const player = this.game.getPlayer();
    const movementX = event.movementX;
    const movementY = event.movementY;
    const yValue = movementX * this.game.deltaTime * this.movementFactor;

    player.model.rotation.y -= yValue;
  }

  animate() {
    const player = this.game.getPlayer();
    const camera = this.game.getCamera();
    const normalizedDirection = player.getBackDirection();
    const newPosition = calculateCameraNewPosition({
      normalizedDirection,
    });

    camera.position.lerp(newPosition, 0.7);
    camera.lookAt(player.model.position);
  }
}
