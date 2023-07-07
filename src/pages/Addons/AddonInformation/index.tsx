import { useOutletContext } from "react-router";


export const AddonInformation = () => {

    const addon = useOutletContext();

    console.log(addon)

    return (
        <div>
            test..
        </div>
    );
}