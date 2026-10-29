import { describe, it, expect } from "vitest";
import type { Main } from "./carte.js"
import { evaluerMain } from "./poker.js"

const addition = (a: number, b: number): number => a + b;

describe("evaluerMain", () => {
  it("retourne la valeur de la carte la plus haute lorsqu'il n'y a aucune combinaison", () => {
    const main: Main = [
      { valeur: 9, enseigne: "trefle" },
      { valeur: 8, enseigne: "carreau" },
      { valeur: 10, enseigne: "coeur" },
      { valeur: 14, enseigne: "pique" },
      { valeur: 2, enseigne: "trefle" },
    ]
    expect(evaluerMain(main)).toBe(14);
  });
});

describe("evaluerMain", () => {
  it("retourne 30 lorsque la main contient un brelan", () => {
    const main: Main = [
      { valeur: 9, enseigne: "trefle" },
      { valeur: 9, enseigne: "carreau" },
      { valeur: 9, enseigne: "coeur" },
      { valeur: 14, enseigne: "pique" },
      { valeur: 2, enseigne: "trefle" },
    ]
    expect(evaluerMain(main)).toBe(30);
  });
});

describe("evaluerMain", () => {
  it("retourne 60 lorsque la main contient un carré", () => {
    const main: Main = [
      { valeur: 9, enseigne: "trefle" },
      { valeur: 9, enseigne: "carreau" },
      { valeur: 9, enseigne: "coeur" },
      { valeur: 9, enseigne: "pique" },
      { valeur: 2, enseigne: "trefle" },
    ]
    expect(evaluerMain(main)).toBe(60);
  });
});

describe("evaluerMain", () => {
  it("retourne 60 lorsque la main contient un carré", () => {
    const main: Main = [
        { valeur: 2, enseigne: "coeur" },
        { valeur: 7, enseigne: "coeur" },
        { valeur: 9, enseigne: "coeur" },
        { valeur: 11, enseigne: "coeur" },
        { valeur: 13, enseigne: "coeur" },
    ]
    expect(evaluerMain(main)).toBe(45);
  });
});

describe("evaluerMain", () => {
  it("retourne 60 lorsque la main contient un carré", () => {
    const main: Main = [
        { valeur: 5, enseigne: "trefle" },
        { valeur: 6, enseigne: "carreau" },
        { valeur: 7, enseigne: "coeur" },
        { valeur: 8, enseigne: "pique" },
        { valeur: 9, enseigne: "trefle" },
    ]
    expect(evaluerMain(main)).toBe(40);
  });
});