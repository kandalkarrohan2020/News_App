import Card from "./card"
import './App.css'
import { useState,useEffect } from "react";


export default function CardContainer ({category}) {
    const[articles,setArticles] = useState([]);

    useEffect(()=> {
     const key = "2bf8066cff344d05b7510b7d90b349a8";

     
     const url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`;
     fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
   },[category]);

    return(
        <div className="card-container">
            {articles.map((news,index)=>{
                return <Card key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}  />
            })}
       </div>
    )
}