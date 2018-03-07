import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';


@Component({
    selector: 'editable',
    templateUrl: './editable-wrapper.component.html',
    styleUrls: ['./editable-wrapper.component.css']
  })
  
  export class EditableWrapperComponent implements OnInit{
    @ViewChild('innerContent') content: ElementRef;
    @Input('text') text: string;

    editEnabled: boolean = false;

    edit(){        
        this.editEnabled = !this.editEnabled;
    }    

    ngOnInit(){    

    }

  }
  