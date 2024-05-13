import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path : '', component: AppComponent , data: {titreComponent : 'App'}},
  {path :'test', component: TestComponent, data : {titreComponent : 'Test'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
