import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-with-text-border',
  standalone: true,
  imports: [],
  templateUrl: './box-with-text-border.component.html',
  styleUrl: './box-with-text-border.component.scss',
})
export class BoxWithTextBorderComponent {
  @Input() arrayOfThingsToDisplayInTheMiddle: string[] = [];

  @Input() textToDisplayAsBorder: string = 'test';

  @Input() amountOfTimesToRepeatBorderText: number = 4;
}
