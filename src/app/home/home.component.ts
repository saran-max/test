import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  restarantObj: any = {
    name: '',
    images: []
  }

  constructor() {}

  ngOnInit(): void {}

  getFileDetails(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (event: any) => {
          console.log(event.target.result);
          this.restarantObj.images.push({ base64: event.target.result.toString()});
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
}

removeImage(i:number){
  this.restarantObj.images.splice(i,1);
}

}
