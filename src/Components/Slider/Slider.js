import './Slider.css';
import {useCallback, useEffect, useRef} from "react";

export default function Slider({comps, auto = 3500}) {
    const sliderRef = useRef(null);
    const intervalId = useRef(-1);
    const curr = useRef(0);
    const refs = useRef([]);
    const dRef = useRef([]);
    const swipe = useRef([0, 0]);

    const inc = useCallback(function inc(val, byAuto = false) {
        if (val > 0) refs.current[curr.current].style.animation = "slide-out-x-l var(--anim-time)";
        else refs.current[curr.current].style.animation = "slide-out-x-r var(--anim-time)";
        refs.current[curr.current].classList.toggle("active");
        dRef.current[curr.current].classList.toggle("active");
        curr.current += val;
        curr.current %= comps.length;
        if (curr.current < 0) curr.current = comps.length + curr.current;
        refs.current[curr.current].classList.toggle("active");
        dRef.current[curr.current].classList.toggle("active");
        if (val > 0) refs.current[curr.current].style.animation = "slide-in-x-r var(--anim-time)";
        else refs.current[curr.current].style.animation = "slide-in-x-l var(--anim-time)";
        if (!byAuto) {
            clearInterval(intervalId.current);
            intervalId.current = setInterval(() => inc(1, true), auto);
        }
    }, [auto, comps.length])

    useEffect(() => {
        refs.current[curr.current].classList.add("active");
        dRef.current[curr.current].classList.add("active");
        if (auto) {
            intervalId.current = setInterval(() => inc(1, true), auto);
            return () => clearInterval(intervalId.current);
        }
    }, [auto, inc]);

    return (
        <div className="Slider-cnt"
             onTouchStart={ev => swipe.current[0] = swipe.current[1] = ev.targetTouches[0].clientX}
             onTouchMove={ev => swipe.current[1] = ev.targetTouches[0].clientX}
             onTouchEnd={() => {
                 const cross = swipe.current[1] - swipe.current[0];
                 const min = 50;
                 if (cross > min) inc(-1);
                 else if (cross < -min) inc(1);
             }}>
            <ul ref={sliderRef} className="Slider">
                {comps.map((comp, i) =>
                    <li ref={el => refs.current[i] = el} key={i} className={"comp"}>{comp}</li>)}
            </ul>
            <span className={"left"} onClick={() => inc(-1)}/>
            <span className={"right"} onClick={() => inc(1)}/>
            <div className={"dots"}>
                {comps.map((img, i) => <span ref={el => dRef.current[i] = el} key={i} className={"dot"}/>)}
            </div>
        </div>
    );
}
