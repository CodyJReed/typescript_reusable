"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
let manUnitedWins = 0;
const { HomeWin, AwayWin } = MatchResult_1.MatchResult;
for (let match of reader.data) {
    if (match[1] === "Man United" && match[5] === HomeWin)
        manUnitedWins++;
    if (match[2] === "Man United" && match[5] === AwayWin)
        manUnitedWins++;
}
console.log(`Man wins ${manUnitedWins}`);
