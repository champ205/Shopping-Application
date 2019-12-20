import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('Cake', 'Its yummy!', 'https://storage.needpix.com/rsynced_images/cake-1971552_1280.jpg'),
    new Recipe('Another Cake', 'Its yummy!', 'https://storage.needpix.com/rsynced_images/cake-1971552_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
