import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',

})
export class SearchBoxComponent {



  @Input()
  public placeholder :string='';
  //creas un nuevo observador
  @Output()
  onValue = new EventEmitter<string>();
  //con el evento key enter vas a invocar esta propiedad
  emitvalue(valor:string):void{
    this.onValue.emit(valor);
  }

}
