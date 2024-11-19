import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private showCarousel: boolean = false;

  constructor() { }

  getShowCarousel(): boolean{
    return this.showCarousel
  }

  setShowCarousel(show: boolean){
    this.showCarousel = show;
  }
}
