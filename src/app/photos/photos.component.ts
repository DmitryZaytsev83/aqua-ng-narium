import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos = [
    {id: 1, src: 'assets/gallery/10.jpg'},
    {id: 2, src: 'assets/gallery/11.jpg'},
    {id: 3, src: 'assets/gallery/12.jpg'},
    {id: 4, src: 'assets/gallery/13.jpg'},
    {id: 5, src: 'assets/gallery/14.jpg'},
    {id: 6, src: 'assets/gallery/15.jpg'},
    {id: 7, src: 'assets/gallery/16.jpg'},
    {id: 8, src: 'assets/gallery/17.jpg'},
    {id: 9, src: 'assets/gallery/18.jpg'},
    {id: 10, src: 'assets/gallery/19.jpg'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
