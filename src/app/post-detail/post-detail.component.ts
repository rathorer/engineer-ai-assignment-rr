import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Post } from '../post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post:any;
  postJson: string;
  constructor(private dialogRef: MatDialogRef<PostDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public postDetails: any) { 
      this.post = postDetails;
    }
  ngOnInit() {
    this.postJson = JSON.stringify(this.post, null, 2);
  }
  close():void{
    this.dialogRef.close();
  }
}
