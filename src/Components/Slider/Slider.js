import './Slider.css';
import {useCallback, useEffect, useRef} from "react";

export default function Slider({imgs, auto = 5000}) {
    const intervalId = useRef(-1);
    const curr = useRef(0);
    const refs = useRef([...imgs.map(() => null)]);
    const dRef = useRef([...imgs.map(() => null)]);

    const inc = useCallback(function inc(val, byAuto = false) {
        refs.current[curr.current].classList.toggle("active");
        dRef.current[curr.current].classList.toggle("active");
        curr.current += val;
        curr.current %= imgs.length;
        if (curr.current < 0) curr.current = imgs.length + curr.current;
        refs.current[curr.current].classList.toggle("active");
        dRef.current[curr.current].classList.toggle("active");
        if (!byAuto) {
            clearInterval(intervalId.current);
            intervalId.current = setInterval(() => inc(1, true), auto);
        }
    }, [auto, imgs.length])

    useEffect(() => {
        refs.current[curr.current].classList.add("active");
        dRef.current[curr.current].classList.add("active");
        if (auto) {
            intervalId.current = setInterval(() => inc(1, true), auto);
            return () => clearInterval(intervalId.current);
        }
    }, [auto, inc]);

    return (
        <div className="Slider-cnt">
            <div className="Slider">
                {imgs.map((img, i) =>
                    <img ref={el => refs.current[i] = el} key={img} alt={"img" + i}
                         src={img} className={"Img"} loading={"lazy"}/>)}
            </div>
            <span className={"left"} onClick={() => inc(-1)}>{"<"}</span>
            <span className={"right"} onClick={() => inc(1)}>{">"}</span>
            <div className={"dots"}>
                {imgs.map((img, i) => <span ref={el => dRef.current[i] = el} key={img} className={"dot"}/>)}
            </div>
        </div>
    );
}
