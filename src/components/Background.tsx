import { Box, Plane } from "@react-three/drei";
import React, { useState } from "react";

const Background = (props: any) => {
  return (
    <group>
      <Plane {...props} args={[6, 9, 1]} position={[0, 0, 0]} receiveShadow>
        <meshStandardMaterial color="teal" />
      </Plane>
    </group>
  );
};

export default Background;
