import { useEffect } from 'react';
import { useLocation, useNavigate } from "react-router";
import { nestedUrlDestructuring } from '../utils/string';

export default function useNestedPathname(currentPage: string, setPageName: Function, nestedPagesMediaArray: any){
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(()=>{
        if(pathname === currentPage) setPageName(null);
        else{
            const nestedPageName: string = nestedUrlDestructuring(pathname);
            const nestedPage = nestedPagesMediaArray.find((page: any)=> nestedPageName === page.name);
            if(nestedPage) setPageName(nestedPage);
            else navigate(`${currentPage}./${nestedPageName}`);
        }
    },[pathname,currentPage,navigate,nestedPagesMediaArray,setPageName]);

    return null;
}