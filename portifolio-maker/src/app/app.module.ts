import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EditorComponent } from './components/editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';

//Custom Services
import { AuthService } from './services/auth.service'
import { PortifolioGeneratorService } from './services/portifolio-generator.service'

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environments';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    AuthService,
    PortifolioGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
