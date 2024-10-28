import { transform } from "next/dist/build/swc";
import * as THREE from "three";
const colors = {
  lamp: "#ffffff",
  base: "#d06910",
  cover: "#ac9064",
};

export const GenerateInitMaterial = () => {
  const lampMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.7,
    roughness: 0.4,
    transparent: true,
    opacity: 1,
    transmission: 0.1,
    envMapIntensity: 0.8,
    clearcoat: 0.5,
    clearcoatRoughness: 0.6,
  });

  const lampBaseMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd06910,
    metalness: 0.9,
    roughness: 0.2,
    transparent: false,
    opacity: 1,
    transmission: 0.5,
    envMapIntensity: 0.8,
    clearcoat: 0.5,
    clearcoatRoughness: 0.3,
  });

  const lampCoverMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xd07910,
    metalness: 0.9,
    roughness: 0.2,
    transparent: false,
    opacity: 1,
    transmission: 0.5,
    envMapIntensity: 0.8,
    clearcoat: 0.5,
    clearcoatRoughness: 0.3,
  });

  return {
    lampMaterial,
    lampBaseMaterial,
    lampCoverMaterial,
  };
};

export const GenerateAnimations = (
  scene: any,
  lampMaterial: any,
  lampBaseMaterial: any,
  lampCoverMaterial: any
) => {
  const Animations = [
    // init animation - PAGE 0
    // lamp
    {
      target: scene.getObjectByName("LampGroup").position,
      pointTime: 0.2,
      animationsProperties: {
        y: 1.2,
        z: 1.4,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampGroup").rotation,
      pointTime: 0.2,
      animationsProperties: {
        z: 6,
        x: 1.4,
        y: 3.7,
        onUpdate: () => {},
      },
    },
    // base lamp
    {
      target: scene.getObjectByName("LampBaseGroup").position,
      pointTime: 0.3,
      animationsProperties: {
        y: 0.1,
        x: 0.7,
        z: 0.1,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampBaseGroup").rotation,
      pointTime: 0.2,
      animationsProperties: {
        z: -6,
        x: 1.8,
        y: 3.7,
        onUpdate: () => {},
      },
    },
    // cover lamp
    {
      target: scene.getObjectByName("LampCoverGroup").position,
      pointTime: 0.3,
      animationsProperties: {
        y: -0.7,
        x: 1.2,
        z: -0.5,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampCoverGroup").rotation,
      pointTime: 0.2,
      animationsProperties: {
        z: -6,
        x: 0.9,
        y: 3.9,
        onUpdate: () => {},
      },
    },

    // background
    {
      target: document.getElementById("bg_container"),
      pointTime: 0,
      animationsProperties: {
        backgroundPosition: "0 100%",
        duration: 2,
        onUpdate: () => {},
      },
    },
    // title
    {
      target: document.getElementById("Title_Hero"),
      pointTime: 0.5,
      animationsProperties: {
        top: "-100%",
        transform: "scale(0.4)",
        onUpdate: () => {},
      },
    },
    // subtitle hero
    {
      target: document.getElementById("Subtitle_Hero"),
      pointTime: 0.5,
      animationsProperties: {
        opacity: 1,
        bottom: "10%",
        right: "50%",
        onUpdate: () => {},
      },
    },

    // the lamp is disassembled - PAGE 1
    // lamp
    {
      target: scene.getObjectByName("LampGroup").position,
      pointTime: 2,
      animationsProperties: {
        x: 2.96,
        z: 1.392,
        y: 0.4,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampGroup").rotation,
      pointTime: 2,
      animationsProperties: {
        z: -6,
        x: 1.9,
        y: 3.22,
        onUpdate: () => {},
      },
    },
    // base lamp
    {
      target: scene.getObjectByName("LampBaseGroup").position,
      pointTime: 2,
      animationsProperties: {
        x: 3,
        z: 1.2,
        y: -0.3,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampBaseGroup").rotation,
      pointTime: 2,
      animationsProperties: {
        z: 6,
        x: 1.9,
        y: 3.22,
        onUpdate: () => {},
      },
    },
    {
      target: colors,
      pointTime: 2.5,
      animationsProperties: {
        lamp: "#FFC645",
        onUpdate: () => {
          lampMaterial.color.set(
            new THREE.Color(colors.lamp.replace(",1)", ")"))
          );
          lampMaterial.needsUpdate = true;
        },
      },
    },
    // cover lamp
    {
      target: scene.getObjectByName("LampCoverGroup").position,
      pointTime: 2,
      animationsProperties: {
        x: 3,
        z: 1.2,
        y: -0.3,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampCoverGroup").rotation,
      pointTime: 2,
      animationsProperties: {
        z: 6,
        x: 1.9,
        y: 3.22,
        onUpdate: () => {},
      },
    },
    // text
    {
      target: document.getElementById("Card_1"),
      pointTime: 2.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    // background
    {
      target: document.getElementById("bg_container"),
      pointTime: 2,
      animationsProperties: {
        backgroundPosition: "0 150%",
        duration: 2,
        onUpdate: () => {},
      },
    },
    // subtitle hero
    {
      target: document.getElementById("Subtitle_Hero"),
      pointTime: 2.5,
      animationsProperties: {
        opacity: 1,
        bottom: "90%",
        right: "150%",
        onUpdate: () => {},
      },
    },
    // the lamp is assembled - PAGE 2
    // lamp
    {
      target: scene.getObjectByName("LampGroup").position,
      pointTime: 4,
      animationsProperties: {
        y: -1,
        onUpdate: () => {},
      },
    },
    // base lamp
    {
      target: scene.getObjectByName("LampBaseGroup").position,
      pointTime: 4,
      animationsProperties: {
        y: -1.6,
        onUpdate: () => {},
      },
    },
    // cover lamp
    {
      target: scene.getObjectByName("LampCoverGroup").position,
      pointTime: 4,
      animationsProperties: {
        y: -1.6,
        onUpdate: () => {},
      },
    },

    // text
    {
      target: document.getElementById("Card_2"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 1,
        left: "65%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Card_1"),
      pointTime: 4.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
    // background
    {
      target: document.getElementById("bg_container"),
      pointTime: 4,
      animationsProperties: {
        backgroundPosition: "0 200%",
        duration: 2,
        onUpdate: () => {},
      },
    },

    // the lamp is enlarged and positioned to the right - PAGE 3
    // lamp
    {
      target: scene.getObjectByName("LampGroup").position,
      pointTime: 6,
      animationsProperties: {
        y: 5,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampGroup").rotation,
      pointTime: 6,
      animationsProperties: {
        z: 6,
        onUpdate: () => {},
      },
    },
    // base lamp
    {
      target: scene.getObjectByName("LampBaseGroup").position,
      pointTime: 6,
      animationsProperties: {
        y: 5,
        duration: 2.5,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampBaseGroup").rotation,
      pointTime: 6,
      animationsProperties: {
        z: -6,
        onUpdate: () => {},
      },
    },
    // cover lamp
    {
      target: scene.getObjectByName("LampCoverGroup").position,
      pointTime: 6,
      animationsProperties: {
        y: 5,
        duration: 3,
        onUpdate: () => {},
      },
    },
    {
      target: scene.getObjectByName("LampCoverGroup").rotation,
      pointTime: 6,
      animationsProperties: {
        z: -6,
        duration: 3,
        onUpdate: () => {},
      },
    },
    // text
    {
      target: document.getElementById("Card_3"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 1,
        left: "25%",
        onUpdate: () => {},
      },
    },
    {
      target: document.getElementById("Card_2"),
      pointTime: 6.5,
      animationsProperties: {
        opacity: 0,
        left: "50%",
        duration: 0.5,
        onUpdate: () => {},
      },
    },
  ];

  return Animations;
};
