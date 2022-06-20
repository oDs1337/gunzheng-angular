import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  #apiURL = "http://[::1]:3000/gunzhengs?filter=%7B%0A%20%20%22offset%22%3A%200%2C%0A%20%20%22limit%22%3A%20100%2C%0A%20%20%22skip%22%3A%200%2C%0A%20%20%22order%22%3A%20%22string%22%2C%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22additionalProp1%22%3A%20%7B%7D%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22id%22%3A%20true%2C%0A%20%20%20%20%22title%22%3A%20true%2C%0A%20%20%20%20%22description%22%3A%20true%2C%0A%20%20%20%20%22image%22%3A%20true%2C%0A%20%20%20%20%22link%22%3A%20true%2C%0A%20%20%20%20%22date%22%3A%20true%2C%0A%20%20%20%20%22author%22%3A%20true%0A%20%20%7D%0A%7D"


  constructor(private http: HttpClient) { }

  getPosts(){
    this.http.get<Post[]>(this.#apiURL).subscribe((res) => {
      console.log(res)
    })
  }
}
