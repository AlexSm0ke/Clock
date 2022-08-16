import React, { useEffect, useState } from 'react';
import style from './Clock.module.css';

export default function Clock() {

const [time, setTime] = useState({});

  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      setTime({
        milliSeconds: now.getMilliseconds(),
        seconds: now.getSeconds(),
        minute: now.getMinutes(),
        hours: now.getHours(),
      });   
    }, 1)
  }, []);
  
  return (
    <div className={style.clock}>
      <div className={style.clock__type_sec} style={{transform: `rotate(${0.006*(time.seconds*1000 + time.milliSeconds)}deg)`}}></div>
      <div className={style.clock__type_min} style={{transform: `rotate(${6*(time.minute + time.seconds/60)}deg)`}}></div>
      <div className={style.clock__type_hour} style={{transform: `rotate(${30*(time.hour + time.minute/60)}deg)`}}></div>
    </div>
  )
}
