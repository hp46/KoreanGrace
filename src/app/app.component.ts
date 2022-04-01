import { Component, Directive, HostBinding, HostListener}from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'church';

  //https://www.otcollect.com/collection/angular/page/WQAGx8Gm/how-to-make-a-toggle-menu-with-angular

  //default is false in mobile view
  @HostBinding('class.navbar-opened') navbarOpened = false;
 

  constructor(private translate: TranslateService )  {
    translate.setDefaultLang('en');
    translate.use('en');
  
  }

  changeLocale(locale:string) {
    this.translate.use(locale);
  }

  toggleNavbar() {
    this.navbarOpened = !this.navbarOpened;
  }

  toggleNavbarOff() {
    this.navbarOpened= false;
  }
}
