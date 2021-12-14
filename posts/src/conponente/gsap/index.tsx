import * as React from 'react'
import { useEffect, useRef } from 'react'
import './index.scss'
import gsap from 'gsap'
export default function HeaderAnimation(): React.ReactElement {
    const TweenLite = new TimelineLite();
    // TweenLite.to('.move', 1, {x:100});
    // TweenLite.to('.move', 1, {y:120,delay: 1});//延迟1秒，接续前一个动画
    // TweenLite.to('.move', 1, {x:150,delay: 2});
    TweenLite.to('.move', 1, {y:0,delay: 3})//延迟1秒，接续前一个动画
    .to('.move', 1, {x:310,delay: 4})//延迟1秒，接续前一个动画
    .to('.move', 1, {y:300,delay: 5});//延迟1秒，接续前一个动画
    // TweenLite.to('.move', 1, {x:521,delay: 6});//延迟1秒，接续前一个动画
    // TweenLite.fromTo('.move', 3, {width:"50%"}, {width:200});//宽度从50%补间至200px
    // TweenLite.to(".green", 6, {
    //     physicsProps: {
    //         x: { velocity: 202, acceleration: 800 },
    //         y: { velocity: 601, friction: 0.0002 }
    //     },
    //     x: 900,
    //     y: 780,
    // });
    // TweenLite.to(".orange", 6, {
    //     physicsProps: {
    //         x: { velocity: 22, acceleration: 800 },
    //         y: { velocity: 60, friction: 0.0002 }
    //     },
    //     x: 350,
    //     y: 480,
    // });
    return (
        <div className='move'>
            <div className="box green"></div>
            {/* <div className="box orange"></div> */}
            {/* <svg height="200" width="100%">
                <path d="M100,0 C180,100, 20,100, 100,200" fill="none" id="path" stroke="green" stroke-width="3"></path>
            </svg> */}
        </div>
    )
}
