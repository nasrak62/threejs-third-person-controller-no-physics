import * as THREE from "three";

export type TCalculateCameraNewPositionArgs = {
  normalizedDirection: THREE.Vector3;
  distanceFromPlayer?: number;
  offset?: THREE.Vector3;
};
