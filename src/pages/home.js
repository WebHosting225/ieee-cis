import Slider from "../Components/Slider/Slider";
import {Mover, Move} from "../Components/Mover/Mover";

export default function Home () {
    return (
        <>
            <Slider imgs={[
                "https://images.unsplash.com/photo-1535378620166-273708d44e4c",
                "https://images.unsplash.com/photo-1563968743333-044cef800494",
                "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
                "https://images.unsplash.com/photo-1616161560417-66d4db5892ec",
            ]}/>

            {/*<Mover width={400} height={500}>*/}
            {/*    <h1>Hii</h1>*/}
            {/*    <Move width={100} height={100}>*/}
            {/*        <h1>1</h1>*/}
            {/*    </Move>*/}
            {/*    <Move width={200} height={100}>*/}
            {/*        <h1>2</h1>*/}
            {/*    </Move>*/}
            {/*</Mover>*/}
        </>
    );
}
