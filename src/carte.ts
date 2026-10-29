export type Enseigne = "coeur" | "carreau" | "trefle" | "pique";
export type Carte = { valeur: number; enseigne: Enseigne };
export type Main = Carte[];