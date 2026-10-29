import type {Main, Carte, Enseigne} from "./carte.js"

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