import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CellComponent } from './components/cell/cell.component';
import { PlayBoardComponent } from './components/play-board/play-board.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/layout/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { AppEffects } from './state/app.effects';
import { appView } from './state/app.reducer';
import { AppService } from './state/app.service';
import { AppActions } from './state/app.action';
import { AuthGuard } from './auth/auth-guard.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthService } from './auth/auth.service';

export const reducers = {
  appView: appView
}

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    PlayBoardComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SignUpComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, {}),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    AuthGuard,
    AppService,
    AppActions,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
