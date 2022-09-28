// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
// import { flatMap, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(localStorage.getItem('session')!=null) {
//         return true;
//       }else {
//         this.routes.navigate(['/login'])
//       }
//     return false;
//   }
  
// }
