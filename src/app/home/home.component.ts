import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RegisterComponent, LoginComponent, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
