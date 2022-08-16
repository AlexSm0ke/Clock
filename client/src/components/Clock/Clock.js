import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timeThunk } from '../../redux/actions/timeAction';
import style from './Clock.module.css';

export default function Clock() {
  const time = useSelector((store) => store.time); // версия с использованием времени, полученного с API
  const dispatch = useDispatch();
    
  useEffect(() => {
    setInterval(() => {
      dispatch(timeThunk());
    }, 1)
  }, []);

// const [time, setTime] = useState({});  // версия с использованием времени компьютера

//   useEffect(() => {
//     setInterval(() => {
//       const now = new Date();
//       setTime({
//         milliSeconds: now.getMilliseconds(),
//         seconds: now.getSeconds(),
//         minute: now.getMinutes(),
//         hours: now.getHours(),
//       });   
//     }, 1)
//   }, []);
  
  return (
    <div className={style.clock}>
      <div className={style.clock__type_sec} style={{transform: `rotate(${0.006*(time.seconds*1000 + time.milliSeconds)}deg)`}}></div>
      <div className={style.clock__type_min} style={{transform: `rotate(${6*(time.minute + time.seconds/60)}deg)`}}></div>
      <div className={style.clock__type_hour} style={{transform: `rotate(${30*(time.hour + time.minute/60)}deg)`}}></div>
    </div>
  )
}
