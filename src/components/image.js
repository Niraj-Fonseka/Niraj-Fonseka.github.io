import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useControls } from "leva";
import React from 'react'
import niraj from './../niraj.jpeg'


const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.4
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Image() {
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
    easing: (t) => t
  });
  const props = useSpring({ xys, config });

  return (
    <div  ref={ref}>
      <animated.div
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={(e) => {
          const rect = ref.current.getBoundingClientRect();
          set(calc(e.clientX, e.clientY, rect));
        }}
       >
      <img style={{ borderRadius: "5px", marginTop: "100px" , boxShadow:"200px"}} src={niraj} height="325" width="300"  />
      </animated.div>
    </div>
  );
}
