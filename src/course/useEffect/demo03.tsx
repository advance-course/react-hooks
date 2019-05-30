import React, { useState, useRef, useEffect } from 'react';
import anime from 'animejs';
import './style.scss';

export default function AnimateDemo() {
  const [anime01, setAnime01] = useState(false);
  const [anime02, setAnime02] = useState(false);
  const element = useRef<any>();

  useEffect(() => {
    anime01 && animate01();
  }, [anime01]);

  useEffect(() => {
    anime02 && animate02();
  }, [anime02]);

  function animate01() {
    if (element) {
      anime({
        targets: element.current,
        translateX: 400,
        backgroundColor: '#FF8F42',
        borderRadius: ['0%', '50%'],
        complete: () => {
          setAnime01(false);
        }
      })
    }
  }

  function animate02() {
    if (element) {
      anime({
        targets: element.current,
        translateX: 0,
        backgroundColor: '#FFF',
        borderRadius: ['50%', '0%'],
        easing: 'easeInOutQuad',
        complete: () => {
          setAnime02(false);
        }
      })
    }
  }

  function clickHandler() {
    setAnime01(true);
    setTimeout(setAnime02.bind(null, true), 500);
  }

  return (
    <div className="container" onClick={clickHandler}>
      <div className="el" ref={element} />
    </div>
  )
}