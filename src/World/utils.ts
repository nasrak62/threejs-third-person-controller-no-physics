import * as THREE from "three";

export const createPlayer = () => {
  const group = new THREE.Group();
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const cubeFace = new THREE.Mesh(geometry, material);
  const cubeBody = new THREE.Mesh(geometry, material);
  const cubeNose = new THREE.Mesh(geometry, material);

  group.add(cubeFace);
  group.add(cubeBody);
  group.add(cubeNose);

  group.children[0].position.set(0, 0, 0);
  group.children[1].position.set(0, 1, 0);
  group.children[2].position.set(0, 1, -1);

  return group;
};

export const createEnemie = () => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
  const enemie = new THREE.Mesh(geometry, material);

  enemie.position.set(5, 0, 5);

  return enemie;
};

export const createLine = () => {
  const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 10, 0)];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x0000ff,
  });

  const line = new THREE.Line(lineGeometry, lineMaterial);

  return line;
};

export const createFloor = () => {
  const geometry = new THREE.PlaneGeometry(2000, 2000, 8, 8);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
  });

  const plane = new THREE.Mesh(geometry, material);

  plane.position.y = -1;
  plane.rotateX(-Math.PI / 2);

  return plane;
};
