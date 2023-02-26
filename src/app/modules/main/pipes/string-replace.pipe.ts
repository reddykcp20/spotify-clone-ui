import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringReplace',
})
export class StringReplacePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/ *\([^)]*\) */g, '');
  }
}
