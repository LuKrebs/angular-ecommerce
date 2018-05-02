import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private flashMessage: FlashMessagesService
  ) { }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(userData => {
          this.flashMessage.show('Seja bem vindo', {
            cssClass: 'alert-success fixed-flash-message', timeout: 100000
          });
          resolve(userData);
        })
        .catch(err => {
          this.flashMessage.show(err.message, {
            cssClass: 'alert-danger fixed-flash-message', timeout: 100000
          });
          resolve(err);
        })
    });
  }

  getAuth() {
    return this.afAuth.authState.map(auth => auth);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
