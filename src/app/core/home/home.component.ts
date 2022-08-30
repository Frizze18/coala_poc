import { Component, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SortByPipePipe } from 'src/app/pipes/sort-by-pipe.pipe';
import { FetchApiService } from 'src/app/services/fetch-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  @ViewChild('modal') modal!: TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

   result!:any[];
   searchText = '';
   headers = [ 'API', 'Category', 'DESCRIPTION']
   filterCors = false;
   filterHttps!: boolean;
  orgininalList!: any[];
  sortingOrder: 'asc'| 'desc' = 'asc';
  selectedRow: any;


  constructor(private fetchApiService: FetchApiService, private sortBy: SortByPipePipe) {
    this.fetchFromAPI();
  }
  ngOnInit(): void {
  }
  fetchFromAPI(){
    this.fetchApiService.getPosts().subscribe((response:any)=> {this.result = response.entries;});

  }
  sortResults(sortValue: string){
   return this.sortBy.transform(this.result, this.sortingOrder, sortValue);
  }

  filterList(){
    this.orgininalList = this.result;
    // Blir ju konstigt om jag gör exakt likadant. men kanske kan skicka in namnet på checkboxen som en input men då måste jag ha en mer generisk pipe..
    if(this.filterHttps === true){
      let copy = [...this.result];
      let test = copy.filter((el) => {
        return el.Https.includes(true)
      });
      this.result = test
    }

  }
  goToDetailsView(api:any){
    this.selectedRow = api;
    let view = this.modal.createEmbeddedView(null);
    this.container.insert(view);
    this.modal.elementRef.nativeElement.previousElementSibling.classList.remove('hide_modal')
    this.modal.elementRef.nativeElement.previousElementSibling.classList.add('show_modal');
  }
  closeModal(){
    this.container.clear()
    this.selectedRow = null;
  }
}
