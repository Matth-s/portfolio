import React, { useState } from "react";
import IntroAnimation from "./IntroAnimation";

type AnimationProviderProps = {
  children: React.ReactNode;
};

const AnimationProvider = ({ children }: AnimationProviderProps) => {
  const [showAnimation, setShowAnimation] = useState<boolean>(true);

  if (showAnimation) {
    return <IntroAnimation setShowAnimation={() => setShowAnimation(false)} />;
  }

  return <main className="h-full w-full">{children}</main>;
};

export default AnimationProvider;
