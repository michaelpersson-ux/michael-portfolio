"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import pig from "../../public/pig.lottie";

const Player = () => {
  //const [lottieLoaded, setLottieLoaded] = React.useState(true);

  return (
    <>
      <div
        className={
          "animate-in fade-in-0 linear-ease duration-1000"
          //+ (lottieLoaded ? "" : " hidden")
        }
      >
        <DotLottieReact
          src={pig}
          loop
          autoplay
          speed={1}
          height={400}
          width={350}
          renderConfig={{ autoResize: false }}
        />
      </div>
    </>
  );
};
export default Player;
