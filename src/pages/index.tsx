import styles from "../styles/Home.module.css";
import Background from "../components/Background";
import Boxes from "../components/Boxes";
import MouseManager from "../components/MouseManager";
import { Canvas, useThree } from "@react-three/fiber";
import OrthographicCamera from "../components/OrthographicCamera";
import { useState, useRef } from "react";
import { Box } from "@react-three/drei";

export default function Home() {
  const mouseManagerRef = useRef();
  const [clickPositions, setClickPositions] = useState<
    [number, number, number][]
  >([]);

  const onClick = (e) => {
    // console.log("canvas click point", e.point);
    // const xPos = e.clientX - e.currentTarget.offsetLeft;
    // const yPos = e.clientY - e.currentTarget.offsetTop;
    // console.log({ xPos, yPos });
    if (mouseManagerRef.current) {
      const [x, y] = mouseManagerRef.current.getCoords();

      setClickPositions((prev) => [...prev, [x, y, 0]]);
    }
  };

  return (
    <div
      style={{
        padding: "2rem",
        backgroundColor: "blue",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas style={{ backgroundColor: "white" }} shadows onClick={onClick}>
        <OrthographicCamera />
        {/* <ambientLight /> */}
        <pointLight position={[0, 4, 2]} />
        <pointLight position={[0, -4, 2]} color="purple" />
        <spotLight
          args={["#ff0044", 1.5, 7, Math.PI / 4, 0.4]}
          position={[0, 4, 2]}
          castShadow
        />
        <Background />
        <Boxes />
        <MouseManager ref={mouseManagerRef} />
        {clickPositions.map((clickPosition, index) => {
          return (
            <Box key={index} args={[0.1, 0.1, 0.1]} position={clickPosition} />
          );
        })}
      </Canvas>
    </div>
  );
}
