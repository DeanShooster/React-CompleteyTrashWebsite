
interface IGIF{
    src: string;
    style?: any;
}

export const GIF = ({src} : IGIF) => {
    return (
        <div>
            <img alt='' src={src}/>
        </div>
    );
}