import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './searchBox.component.html',

})
export class SearchBoxComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    // se yama cuando esta instancia se destruye
    this.debouncerSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(300)
    )
      .subscribe(value => {
        this.onDebounce.emit(value)
      })
     console.log(this.initialValue2)
  }

  // es un tipo de observable del subject
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public initialValue2: string = '';
  @Input()
  public placeholder: string = '';
  //creas un nuevo observador
  @Output()
  onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();
  //con el evento key enter vas a invocar esta propiedad
  emitvalue(valor: string): void {
    this.onValue.emit(valor);
  }
  onKeyPress(searchTeam: string) {
    //console.log(searchTeam);
    this.debouncer.next(searchTeam);

  }

}
