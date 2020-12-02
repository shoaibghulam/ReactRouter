import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Gallery = () => {
   
    const [getImages,setImages]= useState({
      images:[],
    });
    const imagesShow=()=>{
        axios.get('https://api.unsplash.com/photos/random?count=30&client_id=5JzE06xEixBJhF9sYAkMZabNGxM7qdPBMlJX2ZNpGq8').then(function(response){
     
           setImages({
              images:response.data,
              isloading:false,
            })
          }.bind(this)).catch(function(error){
            console.log(error);
          }).finally(function(){
            console.log("Complate")
          })
       
}
useEffect(()=>{
    imagesShow()
},[])
const pic=(
<div>
    {getImages.images.map((data)=>{
        return <a href={data.urls.regular}><img src={data.urls.thumb} width="200px" height="200px" className="gallery-thumb"/></a>
    })}
</div>
);
    return (
        <div>
       {pic}
           
        </div>
    );
};

export default Gallery;