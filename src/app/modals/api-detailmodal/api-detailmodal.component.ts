import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-api-detailmodal',
  templateUrl: './api-detailmodal.component.html',
  styleUrls: ['./api-detailmodal.component.scss']
})
export class ApiDetailmodalComponent implements OnInit, OnChanges{
  @Input() api: any;

  constructor(private element: ElementRef) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.api);
  }

  ngOnInit(): void {
    this.element.nativeElement.addEventListener('click', () =>{
      this.close()
    })
  };
  close(){
    this.element.nativeElement.classList.remove('show_modal')
    this.element.nativeElement.classList.add('hide_modal')
  }

}
