import type {Main, Carte, Enseigne} from "./carte.js"
import {contientGroupeDe, retourneLaPlusHauteValeur} from "./helpers.js"

export const evaluerMain = (main: Main): number => {
    if (contientGroupeDe(main, 4)) return 60;
    if (contientGroupeDe(main, 3)) return 30;
    return retourneLaPlusHauteValeur(main);
} 