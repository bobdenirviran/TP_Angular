import { ConnectService } from './services/connect.service';
import { RouterModule } from '@angular/router'; // pour utiliser le router
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { HttpClientModule } from '@angular/common/http'; // pour faire les requetes ajax de service
import { FormsModule} from '@angular/forms'; // pour binder les données avec les formulaires
import { AppComponent } from './app.component';
import { MyeventComponent } from './myevent/myevent.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component'; // importer le composant
import { CategsComponent } from './categs/categs.component';
import { routes } from './routes';
import { ResumePipe } from './pipes/resume.pipe';
import { ColorDirective } from './directives/color.directives';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [ // component, Pipe, Directives
    AppComponent,
    MyeventComponent,
    HomeComponent,
    EventsComponent,
    CategsComponent,
    ResumePipe,
    ColorDirective,
    LoginComponent
  ],
  imports: [ // Modules
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( routes )
  ],
  providers: [ConnectService], // services globaux à utiliser sur tous les component
  bootstrap: [AppComponent] // composant sur lequel on démarre l'application
})
export class AppModule {}
