'use server';

/**
 * @fileOverview A service for fetching financial data.
 * In a real application, this would interact with a real financial data API.
 */

/**
 * A simple hashing function to create a pseudo-random but deterministic seed from a string.
 * @param str The input string (e.g., a ticker symbol).
 * @returns A number to be used as a seed.
 */
function stringToSeed(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

/**
 * A simple pseudo-random number generator based on a seed.
 * @param seed The seed.
 * @returns A pseudo-random number between 0 and 1.
 */
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Gets a new "real-time" value for a stock based on its original value.
 * NOTE: This is a mock function and does not return real stock data.
 * It generates a new value with a slight random variation from the original.
 * @param ticker The stock ticker symbol (used for seeding randomness).
 * @param originalValue The original value of the holding.
 * @returns A promise that resolves to the new mock value.
 */
export async function getNewStockValue(ticker: string, originalValue: number): Promise<number> {
    const seed = stringToSeed(ticker);
    // Use the current minute to seed the random change
    const timeSeed = new Date().getMinutes();
    const changePercent = (pseudoRandom(seed + timeSeed) - 0.5) * 0.1; // +/- 5% change
    const newValue = originalValue * (1 + changePercent);
    return parseFloat(newValue.toFixed(2));
}

/**
 * Gets just the price for a stock.
 * NOTE: This is a mock function.
 * @param ticker The stock ticker symbol.
 * @returns A promise that resolves to the mock price.
 */
export async function getStockPrice(ticker: string): Promise<number> {
  const seed = stringToSeed(ticker);
  const timeSeed = new Date().getMinutes();
  const price = (pseudoRandom(seed) * 2000) + 100 + (pseudoRandom(timeSeed) * 10);
  return parseFloat(price.toFixed(2));
}
