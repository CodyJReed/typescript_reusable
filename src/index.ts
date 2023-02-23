import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;

const { HomeWin, AwayWin } = MatchResult;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === HomeWin) manUnitedWins++;
  if (match[2] === "Man United" && match[5] === AwayWin) manUnitedWins++;
}

console.log(`Man wins ${manUnitedWins}`);
