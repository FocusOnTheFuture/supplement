import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mark-category',
  templateUrl: './mark-category.component.html',
  styleUrls: ['./mark-category.component.css']
})
export class MarkCategoryComponent {
  @Input()
  label:string = '';
}
