import { useNavigate } from "react-router";

import { homePage } from "../../../constants/routing";

import './index.scss';
import { cTLogo } from "../../../assets";

export const Logo = () => {
    const navigate = useNavigate();
    return (
        <div className="logo-container" onClick={()=> navigate(homePage)}>
            <img alt='' src={cTLogo}/>
        </div>
    );
}