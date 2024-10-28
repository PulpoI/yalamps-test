"use client";
import { Canvas } from "@react-three/fiber";
import React from "react";
import ModelLamp from "./model-lamp";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import ModelLampBase from "./model-lamp-base";
import ModelLampCover from "./model-lamp-cover";

export default function SceneLamp() {
  return (
    <div className={"container-3d"}>
      <Canvas className={"canvas"} camera={{ fov: 35, position: [0, 2, 10] }}>
        <ambientLight intensity={1} color={0xffffff} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={8}
          color={0xffffff}
        />
        <directionalLight
          position={[-10, 5, 10]}
          intensity={1.5}
          color={0xffffff}
          castShadow
        />
        <directionalLight
          position={[0, 20, -10]}
          intensity={5}
          color={"#ffcc00"}
        />
        <ScrollControls pages={8} damping={0.4}>
          <ModelLamp />
          <ModelLampBase />
          <ModelLampCover />
        </ScrollControls>
        <OrbitControls
          target={[0, 2, 0]}
          enableZoom={false}
          enableRotate={false}
        />
        <Environment files={"./snowy_park_01_1k.hdr"} blur={0.5} />
      </Canvas>
    </div>
  );
}
