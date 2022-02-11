import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './SampleArticleDB';
import Error from '../error/Error';
import Comments from './Comments';
import UpvoteSection from './UpvoteSection';
import AddComments from './AddComments';

function Article(props) {
    const { name } = useParams();
  
    //Temp storage of DB data (front end)
    const [articleData, setarticleData] = useState({ upvotes : 0, comments : [] });
    
    //Matching name parameter
    const article = articleContent.find(i => i.name === name);
    
    

    //Backend connection API fetch
    useEffect(() => {
       fetchAPI();
    }, [name]);

    //Backend connection API fetch
    async function fetchAPI() {
       const response = await fetch(`/api/article/${name}`);
       const body = await response.json();
       console.log(body);
       setarticleData(body);
       
    }
   
    //Article not exist in DB

    if(!article) return <Error /> //if the specified page not available

    //since we are using sampleContent as DB which is in array form so we used 'find' to iterate among DB
    return (
        <div>
            <h1 className='article'>{article.title}</h1>
            <UpvoteSection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
            <br></br> <br></br>
            <p className='desc'>{article.description}</p>
            <Comments comments={articleData.comments} />
            <AddComments name={name} setarticleData={setarticleData} />
        </div>
    );
}

export default Article;