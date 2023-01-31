import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import {DisplaybookComponent} from './Components/displaybook/displaybook.component'
import { OpenviewbookComponent } from './Components/openviewbook/openviewbook.component';
import { CartComponent } from './Components/cart/cart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'login',component:SigninComponent},
  {path:'dashboard',component:DashboardComponent,
    children:[
    {path:'display',component:DisplaybookComponent},
    {path:'openbook',component:OpenviewbookComponent},
    {path:'cart',component:CartComponent},
    {path:'wishlist',component:WishlistComponent},
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
