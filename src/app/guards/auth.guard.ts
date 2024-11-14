import { getDoc } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UtilsService } from '../services/utils.service';

export const authGuard: CanActivateFn = (route, state) => {
  const firebaseSvc = inject(FirebaseService);
  const utilsSvc = inject(UtilsService);

  return new Promise((resolve) => {
    let user = localStorage.getItem('user');

    firebaseSvc.getAuth().onAuthStateChanged((auth) => {
      if (auth) {
        if (user) resolve(true);
      } else {
        utilsSvc.routerLinck('/auth');
        resolve(false);
      }
    });
  });
};
