import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';
import { Post } from '../post';
import {MatDialogConfig, MatDialog} from "@angular/material";
import { PostDetailComponent } from '../post-detail/post-detail.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataService: DataService, private dialog:MatDialog) { }
  posts: Post[];
  selectedPost: Post;
  postsData:any[];
  filterTitle: string;
  filterType:string = "sw";
  ngOnInit() {
    this.dataService.getData().subscribe(posts=>{
      this.postsData = posts;
      this.posts = posts["hits"];
      console.log(this.posts);
    })
  }
  onSelect(post:Post):void{
    this.selectedPost = post;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.maxHeight = "600px";
    //dialogConfig.width = "600px";
    dialogConfig.data = this.selectedPost;
    let dialogRef = this.dialog.open(PostDetailComponent, dialogConfig); 
  }
  onFilter(title:string):void{
    var unfilteredPosts = this.postsData["hits"];

    var filterMethod = this.filterType === "co"? 
      x=>x.title.toLowerCase().includes(this.filterTitle.toLowerCase())
      : x=>x.title.toLowerCase().startsWith(this.filterTitle.toLowerCase());
      
    if(this.filterTitle){
      var posts = unfilteredPosts.filter(x => {
        return filterMethod(x);
      });
      this.posts = posts;
    } else{
      this.posts = this.postsData["hits"];
    }
  }
}
