"use client";

import React from "react";
import { useGLTF,  } from "@react-three/drei";
import { GenerateInitMaterial } from "./utils";
import * as THREE from "three";
export default function ModelLampBase(props: any) {
  const {  lampBaseMaterial  } = GenerateInitMaterial();
  const { nodes, materials } = useGLTF("/lamp-base.glb");

  return (
    <group
      name="LampBaseGroup"
      {...props}
      dispose={null}
      scale={0.016}
      rotation={[1.75, 3.14, 0]}
      position={[0, -0.70, -0.1]}
    >
      <mesh
        name="mesh_0" 
        geometry={(nodes.mesh_0 as THREE.Mesh).geometry}
        material={lampBaseMaterial}
      />
    </group>
  );
}

useGLTF.preload("/lamp-base.glb");
