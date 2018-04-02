import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeWelcomeComponent } from './recipe-welcome/recipe-welcome.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';

const recipeRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeWelcomeComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
    ]}
];

@NgModule({
  imports: [ RouterModule.forChild(recipeRoutes) ],
  exports: [ RouterModule ],
  providers: [ AuthGuard ]
})
export class RecipesRoutingModule {
}
