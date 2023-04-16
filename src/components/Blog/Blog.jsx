import React,{useState,useEffect} from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Blog() {

    const [data,setData] = useState([])



    useEffect(() => {
        let url = "http://localhost:3001/api/Dashboard";
        axios.get(url)
          .then((res) => {
            if (res.data.articles) {
              setData(res.data.articles);
            }
          })
          .catch((err) => {
         console.log(err);
          });
      }, []);

  return (
      <>
    <div className="retour">
    <Link  className='btnBack' to="/"><i class="fa-regular fa-circle-left fa-2xl"></i></Link>
    </div>
    <div id="main-content" class="blog-page">
    <div class="container mt-4">
        <div class="row clearfix">
            <div class="col-lg-8 col-md-12 left-box">



                
    {data.map((article) => (
  <div className="card single_post" key={article._id}>
    <div className="body">
      <div className="img-post">
      </div>
      <h3><a href={`article/${article._id}`}>{article.titre}</a></h3>
    </div>
    <div className="footer">
      <div className="actions">
        <a href={`article/${article._id}`} className="btn btn-outline-secondary">Continue Reading</a>
      </div>
    </div>
  </div>
))}


              


          
                                        
                           
            </div>
         
        </div>

    </div>
</div>
    </>
  )
}
