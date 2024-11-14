import { getDoc } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { UtilsService } from '../services/utils.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const firebaseSvc = inject(FirebaseService);
  const utilsSvc = inject(UtilsService);

  return new Promise((resolve) => {
    firebaseSvc.getAuth().onAuthStateChanged((auth) => {
      if (!auth) resolve(true);
      else {
        utilsSvc.routerLinck('/main/home');
        resolve(false);
      }
    });
  });
};
