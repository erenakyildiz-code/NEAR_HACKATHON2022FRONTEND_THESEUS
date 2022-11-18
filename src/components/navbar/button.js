
import { Suspense, useState } from "react";
import { motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";
import BUTTONSCLASS from "./BUTTONCLASS.scss";

export default function WeirdButton({ isSignedIn, helloNEAR, wallet }) {
  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return(<MotionConfig transition={transition}>
        <div className="BUTTONSCLASS">
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.2 },
          press: { scale: 1.1 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => wallet.signIn()}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
        >
          <div className="container">
            
            <Suspense fallback={null}>
              
            <div className="pink blush" />
          <div className="blue blush" />
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
          
          Log in
        </motion.div>
        
      </motion.button>
      </div>
    </MotionConfig>)
  }
  else{
    return(<MotionConfig transition={transition}>
      <div className="BUTTONSCLASS">
    <motion.button
      ref={ref}
      initial={false}
      animate={isHover ? "hover" : "rest"}
      whileTap="press"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.2 },
        press: { scale: 1.1 }
      }}
      onHoverStart={() => {
        resetMousePosition();
        setIsHover(true);
      }}
      onHoverEnd={() => {
        resetMousePosition();
        setIsHover(false);
      }}
      onTapStart={() => setIsPress(true)}
      onTap={() => wallet.signOut()}
      onTapCancel={() => setIsPress(false)}
      onPointerMove={(e) => {
        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      }}
    >
      <motion.div
        className="shapes"
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
      >
        <div className="container">
          <Suspense fallback={null}>
            
          </Suspense>
        </div>
      </motion.div>
      <motion.div
        variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
        className="label2"
      >
        Log out
      </motion.div>
    </motion.button>
    </div>
  </MotionConfig>)
  }
  
 
}
