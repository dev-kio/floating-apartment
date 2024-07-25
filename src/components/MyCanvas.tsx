import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Rooms from "./Rooms";
import { Cards } from "./Cards";

export default function MyCanvas() {
  return (
    <div className="w-screen h-screen max-w-[100%]">
      <Canvas
        shadows
        camera={{
          position: [-1, 1, 4],
          fov: 50,
        }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} castShadow />
        <OrbitControls enableZoom={false} />
        <Environment preset="sunset" />
        <ScrollControls pages={3} damping={0.25}>
          <Cards />
          <Rooms />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
