import { cT } from "../constants/general";

export const useTitle = (title: string) => {
    document.title = cT + title.replace('/', ' - ') ;
    return;
}