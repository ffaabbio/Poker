import type { Main } from "./carte.js"
import { contientGroupeDe, retourneLaPlusHauteValeur, estUneCouleur, estUneSuite } from "./helpers.js"

export const evaluerMain = (main: Main): number => {
    if (contientGroupeDe(main, 4)) return 60;
    if (estUneCouleur(main)) return 45;
    if (estUneSuite(main)) return 40;
    if (contientGroupeDe(main, 3)) return 30;
    return retourneLaPlusHauteValeur(main);
} 