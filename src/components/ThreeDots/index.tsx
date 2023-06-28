
interface IThreeDots{
    color?: string;
}

export const ThreeDots = ({color} : IThreeDots) => {
    return (
        <svg 
            stroke={color || "white"} fill={color || "white"} 
            strokeWidth="0" viewBox="0 0 16 16" 
            height="1.25rem" width="1.25rem" 
            xmlns="http://www.w3.org/2000/svg"><path 
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
        </svg>
    );
}