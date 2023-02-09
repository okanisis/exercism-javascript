// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { endianness } from "os";

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const days = 7;
  const beginIdx = week < 2 ? 0 : (week - 1) * days;
  const endIdx = beginIdx + days;
  const counts = birdsPerDay.slice(beginIdx, endIdx);

  let sum = 0;
  for (let i = 0; i < counts.length; i++) {
    sum += counts[i];
  }
  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let i = 0;
  birdsPerDay.forEach(function(day) {
    if (i % 2 === 0) {
      birdsPerDay[i] = day + 1;
    }
    i++;
  });
  return birdsPerDay;
}
