import { Routes} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [ // Constantes de routes appelées dans l'app module
    {
        path: "", // Toutes les routes autres que celles au-dessus
        component: LoginComponent // component appelé dans la route
    },
    {
        path: "home", // routes - url de la page appelée
        component: HomeComponent // component appelé dans la route
    },
    {
        path: "home/events", // routes - url de la page appelée
        component: EventsComponent // component appelé dans la route
    },
    {
        path: "home/events/:id_categ", // routes - url de la page appelée avec une donnée optionnelle
        component: EventsComponent // component appelé dans la route
    },
    {
        path: "**", // Toutes les routes autres que celles au-dessus
        redirectTo: "home" // component appelé dans la route
    }



]