import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicNavigationComponent } from '../public-navigation/public-navigation.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [PublicNavigationComponent, RouterOutlet],
  templateUrl: './public-layout.component.html',
  styleUrl: './public-layout.component.scss',
})
export class PublicLayoutComponent {}
