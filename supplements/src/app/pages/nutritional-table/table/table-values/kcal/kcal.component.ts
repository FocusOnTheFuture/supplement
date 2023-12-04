import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-kcal',
  templateUrl: './kcal.component.html',
  styleUrls: ['./kcal.component.css']
})
export class KcalComponent {
  @Input()
  labelTitle = '';
  
  @Input()
  labelValue = '';

  @Input()
  labelVD = '';
}
