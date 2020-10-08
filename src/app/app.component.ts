import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public afAuth: AngularFireAuth,
    public oneSignal: OneSignal,
    public alertCtrl: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if(user){
          this.router.navigate(["/home"]);
        } else {
          this.router.navigate(["/login"]);
        }
      }, err => {
        this.router.navigate(["/login"]);
      }, () => {
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
    this.handlerNotifications();
  }

  //start handlerNotifications
  handlerNotifications() {
    this.oneSignal.startInit('edcf01f9-cc5b-4d5d-be8d-bc47ee2f2289', '55671949580');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
    // Notifcation was received in general
    this.oneSignal.handleNotificationReceived().subscribe(data => {
    let msg = data.payload.body;
    let title = data.payload.title;
    let additionalData = data.payload.additionalData;
    this.showAlert(title, msg, additionalData.task);
    });
    // Notification was really clicked/opened
    this.oneSignal.handleNotificationOpened().subscribe(data => {
    // Just a note that the data is a different place here!
    let additionalData = data.notification.payload.additionalData;
    this.showAlert('Notification opened', 'You already read this before', additionalData.task);
    });
    this.oneSignal.endInit();
    }
    async showAlert(title, msg, task) {
    const alert = await this.alertCtrl.create({
    header: title,
    subHeader: msg,
    buttons: [
    {
    text: `Action: ${task}`,
    handler: () => {
    // E.g: Navigate to a specific screen
    }
    }
    ]
    })
    alert.present();
    }
    //end


}
