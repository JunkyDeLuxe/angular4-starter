import { RouterModule, Routes } from '@angular/router';

/** modules **/
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent }
];

export const routing = RouterModule.forRoot(routes);
