import * as THREE from "three";
import { TCalculateCameraNewPositionArgs } from "./types";

export const BASE_DISTANCE = 10;
export const BASE_OFFSET = new THREE.Vector3(0, 5, 0);

export const calculateCameraNewPosition = ({
  normalizedDirection,
  distanceFromPlayer = BASE_DISTANCE,
  offset = BASE_OFFSET,
}: TCalculateCameraNewPositionArgs) => {
  const newPosition = normalizedDirection.multiplyScalar(distanceFromPlayer);

  return newPosition.add(offset);
};
