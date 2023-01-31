import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl='http://localhost:3000/api/v1'
  constructor(private httpClient:HttpClient) { }
  postService(url:string,requestData:any,token: boolean=true, httpOptions:any={}){
    return this.httpClient.post(this.baseurl+url,requestData,token && httpOptions)
  }
  getService(url:string,token: boolean=true, httpOptions:any={}){
    return this.httpClient.get(this.baseurl+url,token && httpOptions)
  }
  putService(url: string,requestData:any, token: boolean = true, httpOptions: any = {}){
    return this.httpClient.put(this.baseurl + url,requestData, token && httpOptions)
  }
}
