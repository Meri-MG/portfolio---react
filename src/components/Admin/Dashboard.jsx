import React,{useState,useEffect} from 'react'
import { useParams,Link } from 'react-router-dom'
import "./Dashboard.css"
import Nav from "./Nav"
import { BiTrash } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import axios from 'axios';

export default function Dashboard() {
    const {userid} = useParams();


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

    const handleDelete = (id) => {
      let url = `http://localhost:3001/api/Dashboard/deleteArticle/${id}`;
      axios.delete(url)
        .then(res => {
          if (res.data.deletedArticle) {
            setData(prevData => prevData.filter(article => article._id !== id));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    

    return (
      <>
        <Nav/>
        <div className="Dashboard">
          <div class="page-content page-container" id="page-content">
            <div class="padding">
              <div class="row container d-flex justify-content-center">
                <div class="col-lg-8 grid-margin stretch-card">
                  <div class="card">
                    <div class="card-body">
                      <p class="card-description">
                        blog cards 
                      </p>
                      <div class="table-responsive">
                        <table class="table">
                          <thead>
                            <tr>
                              <th>id</th>
                              <th>Tittre</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.map((article) => (
                              <tr key={article._id}>
                                <td>{article._id}</td>
                                <td>{article.titre}</td>
                                <td>
                                  <button onClick={() => handleDelete(article._id)} class="badge badge-danger" style={{marginRight : "10px"}} ><BiTrash/></button>
                                  <Link to={`/editArticle/${article._id}`} class="badge badge-success"><BiEdit/></Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}
