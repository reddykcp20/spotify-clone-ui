import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    var minutes = Math.floor(value / 60000);
    var seconds = ((value % 60000) / 1000).toFixed(0);
    return minutes + ':' + seconds;
  }
}
