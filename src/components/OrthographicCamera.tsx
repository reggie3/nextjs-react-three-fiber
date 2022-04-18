import { OrthographicCamera as DreiOrthographicCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

const viewSize = 10;

const OrthographicCamera = (props) => {
  const cameraRef = useRef<THREE.Camera>();
  const { size } = useThree();

  useEffect(() => {
    const aspectRatio = size.width / size.height;
    cameraRef.current.left = (-aspectRatio * viewSize) / 2;
    cameraRef.current.right = (aspectRatio * viewSize) / 2;
    cameraRef.current.top = viewSize / 2;
    cameraRef.current.bottom = -viewSize / 2;
    cameraRef.current.updateProjectionMatrix();
  }, [size]);

  return (
    <DreiOrthographicCamera
      makeDefault
      {...props}
      ref={cameraRef}
      position={[0, 0, 20]}
    ></DreiOrthographicCamera>
  );
};

export default OrthographicCamera;
