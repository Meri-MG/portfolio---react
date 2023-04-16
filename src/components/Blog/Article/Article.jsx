import React,{useState,useEffect} from 'react'
import "../Blog.css"
import { Link,useParams } from 'react-router-dom'
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export default function Article() {

    const [data,setData] = useState([])
    const {userid} = useParams();
    useEffect(() => {
        let url = `http://localhost:3001/api/Dashboard/article/${userid}`;
        axios.get(url)
          .then((res) => {
            if (res.data.article) {
              setData(res.data.article);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
      
      const formattedDate = data.createdAt ? new Date(data.createdAt).toLocaleDateString("fr-FR") : '';

    return (
        <>
            <div className="container pb50">
                <div className="row">
                    <div className="col-md-9 mb40">
                        <article>
                            <div className="post-content">
                                <h3>{data.titre}</h3>
                                <ul className="post-meta list-inline">
                                    <li className="list-inline-item">
                                        <i className="fa fa-user-circle-o"></i> <a href="">Abdulhalim sami</a>
                                    </li>
                                    
                                    <li className="list-inline-item">
                                        <i className="fa fa-clock"></i> <a href=""> {formattedDate} </a>
                                    </li>

                                    <li className="list-inline-item">
                                        <i className="fa fa-code"></i> <a href="">Developpeur full stack</a>
                                    </li>
                                </ul>
                                { data.content && <ReactMarkdown children={data.content} />  }
                                <hr className="mb40" />
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
}
