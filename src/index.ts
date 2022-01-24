import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.loadCsv('football.csv');
matchReader.load();

const summary = Summary.winAnalysisAndReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
