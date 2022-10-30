import "./Mover.css";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";

function Move({translate = [20, 20], children, width, height, style, trigRef = () => undefined, ...props}) {
    const moveRef = useRef(null);
    const prev = useRef([0, 0]);

    const movement = useCallback(function (x, y, enter = false) {
        const move = moveRef.current;
        [x, y] = [-(x - .5) * translate[0], -(y - .5) * translate[1]]
        if (enter || Math.abs(prev.current[0] - x) > 5 || Math.abs(prev.current[1] - y) > 5) {
            move.style.setProperty('--pos-from', [prev.current[0] + 'px', prev.current[1] + 'px']);
            move.style.animation = "none";
            move.getBoundingClientRect();
            move.style.animation = "enter 100ms ease-out";
        }
        prev.current = [x, y];
        move.style.transform = "translate(" + x + "px," + y + "px)";
    }, [translate]);

    useEffect(() => {
        trigRef(movement);
    }, [trigRef, movement]);

    const margin = translate[1] / 2 + 'px ' + translate[0] / 2 + 'px';
    return (
        <div ref={moveRef} className={"Move"}
             style={{...style, width, height, margin}} {...props}>
            {children}
        </div>
    );
}

function Mover({children, width, height, style, ...props}) {
    const [, doRefresh] = useState([]);
    const moverRef = useRef(null);
    const trigRefs = useMemo(() => [], []);

    const mm = useCallback(function (event, enter = false) {
        const [x, y] = [
            (event.pageX - moverRef.current.offsetLeft) / moverRef.current.offsetWidth,
            (event.pageY - moverRef.current.offsetTop) / moverRef.current.offsetHeight
        ];
        for (let trig of trigRefs) trig && trig(x, y, enter);
    }, [trigRefs]);

    useEffect(() => {
        const mover = moverRef.current;
        const resizeObserver = new ResizeObserver(() => doRefresh([]));
        resizeObserver.observe(mover);
        return () => resizeObserver.unobserve(mover);
    }, []);

    return (
        <div className={"Mover-cnt"}>
            <div ref={moverRef} className={"Mover"} style={{width, height, ...style}} {...props}
                 onMouseMove={event => mm(event)} onMouseEnter={event => mm(event, true)}>
                {children.map((child, i) => {
                    if (child.type === Move)
                        child = <Move {...child.props} key={i} trigRef={movement => trigRefs[i] = movement}/>;
                    return child;
                })}
            </div>
        </div>
    );
}

export {Mover, Move};
