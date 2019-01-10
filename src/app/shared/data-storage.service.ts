import * as firebase from 'firebase'
import { Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

  constructor(private recipeService: RecipeService) {}

  saveToDb() {
    const recipes = this.recipeService.getRecipes()

    firebase.database().ref('/').set({ recipes })
  }

  loadFromDb() {
    firebase.database().ref('/')
      .on('value', (snapshot) => {
        const response = snapshot.val()

        this.recipeService.setRecipes(response.recipes)
      })
  }

}