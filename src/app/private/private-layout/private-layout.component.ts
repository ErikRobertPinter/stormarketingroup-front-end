import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss',
})
export class PrivateLayoutComponent {}
