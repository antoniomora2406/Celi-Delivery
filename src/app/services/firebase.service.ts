import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { User } from '../models/user.module';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
  addDoc,
  collection,
} from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, uploadString,ref, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);

  //======================Autenticacion ==================

  getAuth() {
    return getAuth();
  }

  //======================Acceder ==================
  signIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  signUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //======================Actializar usuario ==================
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }

  //======================Enviar email para restablecer la contraseña ==================
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  //======================Cerrar Sesión ==================
  signOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLinck('/auth');
  }

  //======================Base de Datos ==================
  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }

  //======================Obtnener un documento ==================
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }

  //======================Agregar un documento ==================

  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  //======================Almacenamiento ==================

  async uploadImage(path: string, data_url: string){
    await uploadString(ref(getStorage(), path), data_url, 'data_url');
    return await getDownloadURL(ref(getStorage(), path));
  }
}
