"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString
        .split('/')
        .map((value) => parseInt(value, 10));
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;