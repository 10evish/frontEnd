import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-blogs',
  templateUrl: './get-blogs.component.html',
  styleUrls: ['./get-blogs.component.css']
})
export class GetBlogsComponent implements OnInit {

  blogs: any;
  currentBlog :any;
  currentIndex = -1;
  title = '';
  constructor(private blogService: BlogService,private router: Router) { }
  ngOnInit(): void {
    this.retrieveBlogs();
  }
  retrieveBlogs(): void {
    this.blogs = [];
    this.currentBlog =[];
    this.blogService.getAll()
      .subscribe(
        data => {
          this.blogs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveBlogs();
    this.currentBlog = null;
    this.currentIndex = -1;
  }
  setActiveBlogs(blog:any, index:any): void {
    this.currentBlog = blog;
    this.currentIndex = index;
  }
  edit(blog:any){
    console.log(blog);
    this.router.navigate(['/add'], {
      queryParams: { title : blog.title , body : blog.body , id:blog._id}
   });
  }
  remove(id:any){
    console.log("id",id);
    var data ={ id : id};
    this.blogService.delete(data).subscribe(
      response => {
        console.log(response);
        alert("Data Successfully Delete");
        this.retrieveBlogs();
      },
      error => {
        console.log(error);
      });;
  }

}
