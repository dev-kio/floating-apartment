import { MeshProps } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function StudyRoom(props: MeshProps) {
  const { scene } = useGLTF("/models/studyroom.glb");

  return (
    <>
      <mesh {...props}>
        <primitive object={scene} />
      </mesh>
    </>
  );
}
