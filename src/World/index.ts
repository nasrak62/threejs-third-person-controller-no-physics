import * as THREE from "three";
import Game from "../Game";
import { createEnemie, createFloor, createLine, createPlayer } from "./utils";
import PlayerCamera from "../PlayerCamera";
import Player from "../Player";

export default class World {
  game: Game;
  playerCamera: PlayerCamera;
  line: THREE.Line<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.LineBasicMaterial,
    THREE.Object3DEventMap
  >;
  player: Player;
  floor: THREE.Mesh<
    THREE.PlaneGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;
  enemie: THREE.Mesh<
    THREE.BoxGeometry,
    THREE.MeshBasicMaterial,
    THREE.Object3DEventMap
  >;

  constructor() {
    this.game = new Game();
    this.player = new Player();

    const light = new THREE.AmbientLight(0x404040, 1.0); // soft white light
    this.game.scene.add(light);
    this.playerCamera = new PlayerCamera();

    this.line = createLine();
    this.game.scene.add(this.line);

    this.floor = createFloor();

    this.game.scene.add(this.floor);

    this.enemie = createEnemie();

    this.game.scene.add(this.enemie);
  }

  animate() {
    const points = this.line.geometry.attributes.position.array;
    const direction = this.player.getFrontDirection();

    points[3] = direction.x;
    points[4] = direction.y;
    points[5] = direction.z;

    this.line.geometry.attributes.position.needsUpdate = true;

    this.playerCamera.animate();
    // this.player.children.forEach((child, index) => {
    //   const number = (index - 0.5) * 0.01;
    //   child.position.x += number;
    //   child.rotation.x += number;
    // });
  }
}
