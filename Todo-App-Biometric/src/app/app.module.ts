import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginpagePage } from '../pages/loginpage/loginpage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettersandgettersProvider } from '../providers/settersandgetters/settersandgetters';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { UtilityProvider } from '../providers/utility/utility';
import { AppService } from '../services/app.service';
import { HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginpagePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettersandgettersProvider,
    FingerprintAIO,
    UtilityProvider,
    AppService
  ]
})
export class AppModule {}
