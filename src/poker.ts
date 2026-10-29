import type {Main, Carte, Enseigne} from "./carte.js"

export const evaluerMain = (main: Main): number => {
    let max = 1;
    for(let i = 0;i<5;i++){
        let cpt = 0

        for(let y = 0;y < 5;y++){
            if(main[y]?.valeur === main[i]?.valeur) cpt++;
            if(cpt === 3) return 30
        }

        if(main[i].valeur > max) max = main[i]?.valeur
    }

    return max
} 