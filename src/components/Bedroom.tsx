import { MeshProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Bedroom(props: MeshProps) {
  const { scene } = useGLTF("/models/bedroom.glb");

  return (
    <>
      <mesh {...props}>
        <primitive object={scene} />
      </mesh>
    </>
  );
}
