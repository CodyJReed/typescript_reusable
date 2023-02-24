import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.unitedWinsAnalysisAndReport("Team Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
