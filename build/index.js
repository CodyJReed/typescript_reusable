"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
const { HomeWin, AwayWin } = MatchResult_1.MatchResult;
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === HomeWin)
        manUnitedWins++;
    if (match[2] === "Man United" && match[5] === AwayWin)
        manUnitedWins++;
}
console.log(`Man wins ${manUnitedWins}`);
