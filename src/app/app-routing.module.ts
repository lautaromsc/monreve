import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './components/example/example.component'
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [
 { path: 'example',component: ExampleComponent },
 { path: 'sidenav',component: SideNavComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
