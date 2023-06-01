import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }
  search(term : String){
    return 'i am search result:'
  }
}
