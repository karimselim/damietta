// components/AFrameScene.tsx
import { useEffect } from "react";

const AFrameScene: React.FC = () => {
  useEffect(() => {
    const handleDoubleClick = () => {
      const sky = document.querySelector("#sky") as HTMLElement;
      const currentSrc = sky.getAttribute("src");

      const modelSceneOne = document.querySelector(
        "#modelSceneOne"
      ) as HTMLElement;
      const modelSceneTwo = document.querySelector(
        "#modelSceneTwo"
      ) as HTMLElement;
      const modelSceneThree = document.querySelector(
        "#modelSceneThree"
      ) as HTMLElement;

      let nextSrc;

      // Lazy loading for models based on the current scene
      if (currentSrc === "first.jpg") {
        nextSrc = "second.jpg";
        modelSceneOne.setAttribute("visible", "false");
        modelSceneTwo.setAttribute("visible", "true");
      } else if (currentSrc === "second.jpg") {
        nextSrc = "third.jpg";
        modelSceneTwo.setAttribute("visible", "false");
        modelSceneThree.setAttribute("visible", "true");
      } else {
        nextSrc = "first.jpg";
        modelSceneThree.setAttribute("visible", "false");
        modelSceneOne.setAttribute("visible", "true");
      }

      // Start fade-out effect
      sky.setAttribute(
        "animation__fadeout",
        "property: material.opacity; from: 1; to: 0; dur: 1000"
      );

      // Wait for fade-out to complete, then switch image and fade back in
      setTimeout(() => {
        sky.setAttribute("src", nextSrc);
        // Start fade-in effect
        sky.setAttribute(
          "animation__fadein",
          "property: material.opacity; from: 0; to: 1; dur: 1000"
        );
        // Remove animation attributes after fade-in completes
        setTimeout(() => {
          sky.removeAttribute("animation__fadeout");
          sky.removeAttribute("animation__fadein");
        }, 1000); // Duration matches fade-in animation
      }, 1000); // Duration matches fade-out animation
    };

    document.addEventListener("dblclick", handleDoubleClick);
    return () => {
      document.removeEventListener("dblclick", handleDoubleClick);
    };
  }, []);

  return (
    <a-scene
      embedded
      style={{ height: "100vh", width: "100vw", margin: 0, overflow: "hidden" }}
    >
      {/* Sky element for background images */}
      <a-sky id="sky" src="first.jpg" material="opacity: 1"></a-sky>

      {/* Entities for each scene */}
      <a-entity
        id="modelSceneOne"
        position="0 1 -3"
        scale="0.5 0.5 0.5"
        rotation="0 45 0"
        visible="true"
      ></a-entity>
      <a-entity
        id="modelSceneTwo"
        position="1 1 -4"
        scale="0.7 0.7 0.7"
        rotation="0 -30 0"
        visible="false"
      ></a-entity>
      <a-entity
        id="modelSceneThree"
        position="-1 1 -5"
        scale="0.6 0.6 0.6"
        rotation="0 90 0"
        visible="false"
      ></a-entity>
    </a-scene>
  );
};

export default AFrameScene;
