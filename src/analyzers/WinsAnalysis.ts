import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    const { HomeWin, AwayWin } = MatchResult;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === HomeWin) wins++;
      if (match[2] === "Man United" && match[5] === AwayWin) wins++;
    }

    return `${this.team} won ${wins} games`
  }
}
