import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Food {
  value: string;
  viewValue: string;
}
interface Categorie {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-vehicle',
  standalone: true,
  imports: [MatInputModule, MatSelectModule],
  templateUrl: './new-vehicle.component.html',
  styleUrl: './new-vehicle.component.scss',
})
export class NewVehicleComponent {
  foods: Food[] = [
    { value: 'benzin', viewValue: 'Benzin' },
    { value: 'diesel', viewValue: 'Dízel' },
    { value: 'gas', viewValue: 'Gáz' },
    { value: 'electricity', viewValue: 'Elektromos' },
  ];
  categories: Categorie[] = [
    { value: 'B', viewValue: 'B' },
    { value: 'C', viewValue: 'C' },
    { value: 'CE', viewValue: 'CE' },
  ];
}
