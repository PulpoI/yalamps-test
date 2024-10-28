"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { GenerateInitMaterial } from "./utils";
import * as THREE from "three";
export default function ModelLampCover(props: any) {
  const { lampCoverMaterial } = GenerateInitMaterial();
  const { nodes, materials } = useGLTF("/lamp-cover.glb");

  return (
    <group
      name="LampCoverGroup"
      {...props}
      dispose={null}
      scale={0.016}
      rotation={[1.75, 3.14, 0]}
      position={[0, -0.70, -0.1]}
    >
      <mesh
        name="mesh_0"
        geometry={(nodes.mesh_0 as THREE.Mesh).geometry}
        material={lampCoverMaterial}
      />
    </group>
  );
}

useGLTF.preload("/lamp-cover.glb");
