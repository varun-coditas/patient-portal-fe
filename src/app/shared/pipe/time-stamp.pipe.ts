import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamp',
  standalone: true,
})
export class TimeStampPipe implements PipeTransform {
  transform(value: Date): string {
    if (!value) return '';
    let hours = value.getHours();
    const minutes = value.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight
    const formattedTime =
      hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ' ' + ampm;
    return formattedTime;
  }
}
