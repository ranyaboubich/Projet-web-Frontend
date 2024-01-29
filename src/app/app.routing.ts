import {RouterModule, Routes} from "@angular/router";
import {DetailsComponent} from "./Details/details/details.component";
import {LibraryComponent} from "./Library/library/library.component";
import {LoginComponent} from "./Login/login/login.component";
import {EventComponent} from "./Events/event/event.component";
import {HomeComponent} from "./Home/home/home.component";
import {SigninComponent} from "./SignIn/signin/signin.component";
import {AdminComponent} from "./Admin/admin/admin.component";
import {AuthGuard} from "./Login/auth.guard";

const APP_ROUTING: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'events', component: EventComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  ];
export const ROUTING = RouterModule.forRoot(APP_ROUTING);
