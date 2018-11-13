import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLocation'
})
export class SearchLocationPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    if (pipeModifier && pipeData) {
      return pipeData.filter(eachItem => {
        return (
          eachItem['locationName'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
          eachItem['address'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
          eachItem['zipcode'].toLowerCase().includes(pipeModifier.toLowerCase())
        );
      });
    } else {
      return pipeData;
    }
  }
}
