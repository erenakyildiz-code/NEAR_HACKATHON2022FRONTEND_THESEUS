
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes2 } from "./Shapes2";
import { transition } from "./settings";
import useMeasure from "react-use-measure";

export default function WeirdButton2(itemval) {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <MotionConfig transition={transition}>
      <Suspense fallback={null}>
              <Shapes2
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
                itemval={itemval}
              />
            </Suspense>
    </MotionConfig>
    
  );
}
