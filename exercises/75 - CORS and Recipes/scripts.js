const baseEndPoint = 'http://www.recipepuppy.com/api';

async function fetchRecipes(query) {
  const res = fetch(`${baseEndPoint}?q=${query}`);
  const data = await res.json();
} 

fetchRecipes('pizza');