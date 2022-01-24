"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchReader = MatchReader_1.MatchReader.loadCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winAnalysisAndReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
