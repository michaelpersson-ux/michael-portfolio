"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { LoaderCircle } from "lucide-react";
import pig from "../../public/pig.lottie";

const Player = () => {
  const [lottieLoaded, setLottieLoaded] = React.useState(true);

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
          height={400}
          width={350}
          renderConfig={{ autoResize: true }}
        />
      </div>
      {/*       <div
        className={
          "flex grow justify-center items-center h-full" + (lottieLoaded ? " hidden" : "")
        }
      >
        <LoaderCircle className="animate-spin" />
      </div> */}
    </>
  );
};
export default Player;
