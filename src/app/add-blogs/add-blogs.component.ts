import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-blogs',
  templateUrl: './add-blogs.component.html',
  styleUrls: ['./add-blogs.component.css']
})
export class AddBlogsComponent implements OnInit {

  blog = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  btn = "Submit";
  id :any ;
  constructor( private blogservice : BlogService , private router : Router,private route: ActivatedRoute,) { }
  title = 'blog-appp';
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:any) => {
       var title = params['title'];
      var id = params['id'];
      var body = params['body'];
      // console.log("id",id);
      this.id = id ;
       if(id){
         this.btn = "Update";  
         this.blog.title = title;
         this.blog.description = body;
       }
    });
  }
  saveBlog(): void {
  
    if(this.id){
      var dataUpdate = {
        title: this.blog.title,
        body: this.blog.description,
        id:this.id
      };
      this.blogservice.update(dataUpdate).subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    }else{
      var data = {
        title: this.blog.title,
        body: this.blog.description,
      };
      console.log("data=>",data);
      this.blogservice.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  }
  newBlog(): void {
    this.submitted = false;
    this.blog = {
      title: '',
      description: '',
      published: false
    };
  }

}
