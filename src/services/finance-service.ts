'use server';

/**
 * @fileOverview A service for fetching financial data.
 * This service is mocked to demonstrate how one would connect to a real financial API.
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
 * A mock function to simulate fetching data from a real-world financial API.
 * In a real application, you would replace this with a `fetch` call to an actual API endpoint.
 * @param endpoint The API endpoint to "fetch".
 * @returns A promise that resolves to a simulated API response.
 */
async function fetchFromFakeApi(endpoint: string): Promise<any> {
  console.log(`Simulating API call to: ${endpoint}`);

  // This part is for demonstration. We extract the ticker to generate a plausible mock price.
  // A real API would just return the data for the given ticker.
  const tickerMatch = endpoint.match(/symbol=([^&]+)/);
  if (tickerMatch && tickerMatch[1]) {
    const ticker = tickerMatch[1];
    const seed = stringToSeed(ticker);
    const timeSeed = new Date().getMinutes(); // Add time variance
    
    // Base prices for realism, you can adjust these
    const basePrices: { [key: string]: number } = {
      'GOOGL': 180 * 83, // Approx USD to INR
      'RELIANCE.BSE': 3000,
      'TATAMOTORS.BSE': 1000,
      'NIFTY50': 23000,
      'DEFAULT': 1500,
    };

    const basePrice = basePrices[ticker] || basePrices['DEFAULT'];
    const randomFactor = (pseudoRandom(seed + timeSeed) - 0.5) * 0.1; // +/- 5%
    const price = basePrice * (1 + randomFactor);

    // Simulate the structure of a real API response (e.g., from Alpha Vantage)
    return Promise.resolve({
      "Global Quote": {
        "01. symbol": ticker,
        "05. price": price.toFixed(2),
      },
    });
  }

  return Promise.reject(new Error("Invalid ticker in mock API call"));
}


/**
 * Gets the current price for a stock by simulating a call to a financial data API.
 * @param ticker The stock ticker symbol.
 * @returns A promise that resolves to the stock's price.
 */
export async function getStockPrice(ticker: string): Promise<number> {
  // IMPORTANT: In a real app, you would use a service like Alpha Vantage, IEX Cloud, or another
  // financial data provider. You would get an API key from them and place it here.
  const API_KEY = 'YOUR_API_KEY_HERE'; 
  const endpoint = `https://www.some-finance-api.com/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;
  
  try {
    // In a real app, the following lines would be active:
    // const response = await fetch(endpoint);
    // if (!response.ok) {
    //   throw new Error(`API call failed with status: ${response.status}`);
    // }
    // const data = await response.json();
    
    // For this demonstration, we use our mocked API fetcher instead:
    const data = await fetchFromFakeApi(endpoint);

    // The path to the price will depend on your chosen API's response structure.
    const priceString = data?.['Global Quote']?.['05. price'];
    const price = parseFloat(priceString);

    if (isNaN(price)) {
      throw new Error(`Invalid price data received for ${ticker}`);
    }

    return price;
  } catch (error) {
    console.error(`Error fetching stock price for ${ticker}:`, error);
    // As a fallback, we return a simple pseudo-random price to avoid crashing the app.
    const fallbackPrice = (pseudoRandom(stringToSeed(ticker)) * 2000) + 100;
    return parseFloat(fallbackPrice.toFixed(2));
  }
}
