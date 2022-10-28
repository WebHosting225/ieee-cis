import "./Mover.css";
import {cloneElement, useEffect, useRef} from "react";

function Move({sensitivity, children, innerRef, width, height, style, ...props}) {
    return (
        <div ref={innerRef} className={"Move"} style={{width: width, height:height, ...style}} {...props}>
            {children}
        </div>
    );
}

function Mover({children, width, height, style, ...props}) {
    const moveRefs = useRef([]);

    useEffect(() => {
        console.log(moveRefs.current);
    }, []);

    return (
        <div className={"Mover"} style={{width: width, height:height, ...style}} {...props}>
            {children.map((child, i) => {
                if (child.type === Move) {
                    child = <Move innerRef={el => moveRefs.current[i] = el} key={i} {...child.props}/>;
                }
                return child;
            })}
        </div>
    );
}

export {Mover, Move};
