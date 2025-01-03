import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helpers";
export const state = {
  recipe: {},
}; // this is the state object that will store the recipe data that will create state.recipe. This will be manipulated by lines 18-27.

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    //temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};
