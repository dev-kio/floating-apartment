import { GroupProps, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import Bedroom from "./Bedroom";
import StudyRoom from "./StudyRoom";
import LivingRoom from "./LivingRoom";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";

export const FLOOR_SCALE = 0.3;
export const FLOOR_HEIGHT = FLOOR_SCALE * 5;
export const TOTAL_FLOORS = 3;

export default function Rooms(props: GroupProps) {
  const ref = useRef<THREE.Group>(null!);
  const tl = gsap.timeline();
  const studyRoomRef = useRef<THREE.Mesh>(null!);
  const bedroomRef = useRef<THREE.Mesh>(null!);

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (TOTAL_FLOORS - 1.5),
      },
      0
    );

    // Home Rotation
    tl.current.to(
      ref.current.rotation,
      {
        duration: 1,
        x: 0,
        y: Math.PI / 6,
        z: 0,
      },
      0
    );
    tl.current.to(
      ref.current.rotation,
      {
        duration: 1,
        x: 0,
        y: -Math.PI / 6,
        z: 0,
      },
      1
    );

    // Living Room movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 0,
        z: -1,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
      },
      1
    );
    // Study Room
    tl.current.from(
      studyRoomRef.current.position,
      {
        duration: 0.5,
        y: 0.5,
        x: 1,
        z: -2,
      },
      0.5
    );
    tl.current.from(
      studyRoomRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // Bedroom
    tl.current.from(
      bedroomRef.current.position,
      {
        duration: 1.5,
        y: 1.5,
      },
      0
    );

    tl.current.from(
      bedroomRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      bedroomRef.current.position,
      {
        duration: 0.5,
        z: -2,
      },
      1.5
    );
  }, [tl]);

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      rotation={[0, -Math.PI / 3, 0]}
      position={[1, FLOOR_SCALE, 0]}
    >
      <mesh ref={bedroomRef}>
        <Bedroom
          scale={FLOOR_SCALE}
          rotation-y={-Math.PI * 0.25}
          position-y={FLOOR_HEIGHT}
          position-z={-1}
        />
      </mesh>
      <mesh ref={studyRoomRef}>
        <StudyRoom
          scale={FLOOR_SCALE}
          rotation-y={-Math.PI * 0.25}
          position-y={0}
          position-z={0.5}
          position-x={-1}
        />
      </mesh>
      <LivingRoom
        scale={FLOOR_SCALE}
        rotation-y={-Math.PI * 0.25}
        position-y={-FLOOR_HEIGHT}
      />
    </group>
  );
}
