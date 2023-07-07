
import { AnimatedTitleHeader } from '../../../components/AnimatedTitleHeader';

import './index.scss';

export const AddonIntro = () => {
    return (
        <div className="addon-intro-container">
            <AnimatedTitleHeader title='Addons'/>
            <p>Addons are a third party software program or script that is added to a program to give it additional features and abilities.</p>
            <p><b>ArenaNet</b> approved the use of addons which reads public game logs and do not modify game play. Therefor you do not need to fear the use of any addons in this website.</p>
            <ul>
                <h3>Why use an addon?</h3>
                <li>Addons can improve your game play and especially group game play as it shows basic data such as: DPS, boons and mechanics.</li>
                <li><b>Convenience:</b> Automatic log uploads , the ability to see group kill proofs , self healing and clears.</li>
                <li><b>Improved HUD:</b> Better marking, instance mechanics timer and open world watch.</li>
            </ul>
        </div>
    );
}