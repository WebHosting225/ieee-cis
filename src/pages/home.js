import './home.css';
import Slider from "../Components/Slider/Slider";
import {Mover, Move} from "../Components/Mover/Mover";
import importAll from "../tools/importAll";

const slImgs = importAll(require.context("../slider/", false));

export default function Home() {
    return (
        <div id={"home"}>
            <Slider comps={Object.keys(slImgs).map(
                (key, i) => <img key={key} srcSet={slImgs[key]} alt={'img' + i}/>
            )}/>
            <Mover style={{padding: 20}}>
                <Move translate={[60, 75]}>
                    <img style={{width: "35vw"}} src="/static/images/mover/myhc_89683.jpg" alt={"3"}/>
                </Move>
                <Move>
                    <img style={{width: "45vw"}} src="/static/images/mover/itsAllHere.jpeg" alt={"2"}/>
                </Move>
                <Move translate={[30, 30]}>
                    <img style={{width: "45vw"}} src="/static/images/mover/video-archive.jpg" alt={"1"}/>
                </Move>
            </Mover>
            <p>
                <span className={"dat"}><abbr>Brief</abbr></span>
                <b>IEEE Computational Intelligence Society (CIS)</b> is a professional society of IEEE focusing on the
                theory, design, application, and development of biologically and linguistically motivated computational
                paradigms emphasising neural networks, connection systems, genetic algorithms, evolutionary
                programming, fuzzy systems, and hybrid intelligent systems in which these paradigms are contained.
            </p>
        </div>
    );
}
