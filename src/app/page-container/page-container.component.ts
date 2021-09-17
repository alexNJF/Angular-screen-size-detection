import { ScreenSizeService } from './../screen-size.service';
import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-page-container',
  templateUrl: './page-container.component.html',
  styleUrls: ['./page-container.component.scss']
})
export class PageContainerComponent implements OnInit {
  @ContentChild('Desktop') desktopRef: TemplateRef<any>;
  @ContentChild('Mobile') mobileRef: TemplateRef<any>;

  viewMode = 'Desktop'

  constructor(private screen:ScreenSizeService) { }
  ngOnInit(): void {
    this.screen.Size.subscribe((res:boolean)=>{
      console.log("RES: ",res);
      this.viewMode=res?'Mobile':'Desktop';
      console.log("viewMode: ",this.viewMode);
    })
  }

}
