import { Beer } from "../types";

export async function fetchBeers(page: number): Promise<Beer[]> {
  const perPage = 24;
  const apiUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(apiUrl);
    const data: Beer[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
