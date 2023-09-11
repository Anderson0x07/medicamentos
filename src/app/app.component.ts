import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Drogueria';
  items = [
    {
      label: 'Medicamentos',
      icon: 'pi pi-truck',
      routerLink:"/"
    },
  ];
}
