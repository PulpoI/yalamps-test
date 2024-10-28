"use client";
import Image from "next/image";
import BackgroundHome from "@/public/bg-hero-dark.png";
import { useState } from "react";

export default function Background() {
  return (
    <Image
      src={BackgroundHome}
      alt="background"
      width={1440}
      height={100}
      quality={100}
      className="absolute top-0 left-0 w-screen mt-0 lg:mt-0"
    />
  );
}
