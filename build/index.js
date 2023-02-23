"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data[0][0]);
let manUnitedWins = 0;
const { HomeWin, AwayWin } = MatchResult_1.MatchResult;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === HomeWin)
        manUnitedWins++;
    if (match[2] === 'Man United' && match[5] === AwayWin)
        manUnitedWins++;
}
console.log(`Man wins ${manUnitedWins}`);
