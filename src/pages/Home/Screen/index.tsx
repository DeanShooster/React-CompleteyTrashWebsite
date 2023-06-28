import { IMedia, homePageScreens } from "../../../constants/media";
import useWindowSize from "../../../hooks/useWindowSize";

import { Frame } from "./Frame";
import { Slider } from "./Slider";

import './index.scss';

export const Screen = () => {
    const { windowSize , screenSize } = useWindowSize();
    const isDesktop = windowSize >= screenSize.ipad;

    return (
        <div className="screen-container">
            {isDesktop ? homePageScreens.map((screen: IMedia , index: number)=>{
                return <Frame key={index} data={screen}/>;
            }): <Slider />}
        </div>
    );
}