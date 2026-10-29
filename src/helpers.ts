import type {Main,} from "./carte.js"

export const retourneLaPlusHauteValeur = (main: Main): number =>{
    let max = 0;
    for (const carte of main) {
        if (carte.valeur > max) max = carte.valeur;
    }
    return max;
};

const compteLesCartesParValeur = (main: Main, valeur: number): number => {
    let compteur = 0;
    for (const carte of main) {
        if (carte.valeur === valeur) compteur++;
    }
    return compteur;
};

export const contientGroupeDe = (main: Main, taille: number): boolean => {
    for (const carte of main) {
        if (compteLesCartesParValeur(main, carte.valeur) === taille) return true;
    }
    return false;
};

export const estUneCouleur = (main: Main): boolean => {
    const premiereEnseigne = main[0]?.enseigne;
    for (const carte of main) {
        if (carte.enseigne !== premiereEnseigne) return false;
    }
    return true;
};

const retourneLaPlusBasseValeur = (main: Main): number => {
    let min = 15;
    for (const carte of main) {
        if (carte.valeur < min) min = carte.valeur;
    }
    return min;
};

export const estUneSuite = (main: Main): boolean =>
    retourneLaPlusHauteValeur(main) - retourneLaPlusBasseValeur(main) === 4;