import type {Main, Carte, Enseigne} from "./carte.js"

export const evaluerMain = (main: Main): number => {
    let max = 1;
    for(let i = 0;i<5;i++){
        if(main[i].valeur > max) max = main[i]?.valeur
    }

    return max
} 