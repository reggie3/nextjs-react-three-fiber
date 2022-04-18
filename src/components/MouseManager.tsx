import { useThree } from "@react-three/fiber";
import { forwardRef, useImperativeHandle } from "react";
import * as THREE from "three";

const MouseManager = forwardRef((props, ref) => {
  const { camera, mouse } = useThree();

  useImperativeHandle(ref, () => ({
    getCoords: (): [number, number] => {
      var vector = new THREE.Vector3();
      var pos = new THREE.Vector3();
      vector.set(mouse.x, mouse.y, 1);
      vector.unproject(camera); // -1,1 => -screen width/2,screen width/2
      vector.sub(camera.position).normalize();
      var distance = -camera.position.z / vector.z;
      pos.copy(camera.position).add(vector.multiplyScalar(distance));

      // console.log({ pos });
      console.log(mouse.x, mouse.y);
      return [mouse.x, mouse.y];
    },
  }));

  return null;
});

MouseManager.displayName = "MouseManager";

export default MouseManager;
