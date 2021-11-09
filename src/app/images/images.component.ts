import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
listOfImages = [
  "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg",
  "https://cdn.pixabay.com/photo/2014/08/29/09/28/sunrise-430694__480.jpg",
  "https://thumbs.dreamstime.com/b/sun-burst-11235.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"
];

  constructor() { }

  ngOnInit(): void {
  }

}
