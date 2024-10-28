"use client";
import React, { useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { GenerateInitMaterial, GenerateAnimations } from "./utils";
import gsap, { Power4 } from "gsap";
import * as THREE from "three";

export default function ModelLamp(props: any) {
  const { nodes, materials } = useGLTF("/lamp.glb");
  const scene = useThree((state) => state.scene);
  const timeline = gsap.timeline({
    defaults: { duration: 2, ease: Power4.easeInOut },
  });
  
  const scroll = useScroll();

  const { lampMaterial, lampBaseMaterial, lampCoverMaterial } = GenerateInitMaterial();

  useLayoutEffect(() => {
    const animations = GenerateAnimations(
      scene,
      lampMaterial,
      lampBaseMaterial,
      lampCoverMaterial
    );
    animations.map((animation) => {
      timeline.to(
        animation.target,
        {
          ...animation.animationsProperties,
        },
        animation.pointTime
      );
    });
  }, []);

  useFrame(() => {
    timeline.seek(scroll.offset * timeline.duration());
  });

  return (
    <group
      name="LampGroup"
      {...props}
      dispose={null}
      scale={0.016}
      rotation={[1.75, 3.14, 0]}
      position={[0, 0, 0]}
    >
      <mesh
        name="mesh_0"
        geometry={(nodes.mesh_0 as THREE.Mesh).geometry}
        material={lampMaterial}
      />
    </group>
  );
}

useGLTF.preload("/lamp.glb");
