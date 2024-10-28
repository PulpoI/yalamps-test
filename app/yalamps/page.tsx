import { Suspense } from "react";
import Labels from "@/components/labels";
import SceneLamp from "@/components/models/scene-lamp";

export default async function Home() {
  return (
    <>
      <div id={"bg_container"} className={""}>
        <div className={"wrapper"}>
          <Labels />
          <Suspense fallback={null}>
            <SceneLamp />
          </Suspense>
        </div>
      </div>
    </>
  );
}
