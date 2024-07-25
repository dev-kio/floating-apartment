import { MeshProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function LivingRoom(props: MeshProps) {
  const { scene } = useGLTF("/models/livingroom.glb");

  return (
    <>
      <mesh {...props}>
        <primitive object={scene} />
      </mesh>
    </>
  );
}
