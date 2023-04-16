import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import './Dashboard.css';

export default function EditArticle() {
  const { userid } = useParams();

  const [titre, setTitre] = useState('');
  const [content, setContent] = useState('');
  const [successMsg,setSuccessMsg] = useState("")
  const [errorMsg,setErrormsg] = useState("")
        const [data,setData] = useState([])
        const mdParser = new MarkdownIt(/* Markdown-it options */);

  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };



  useEffect(() => {
    let url = `http://localhost:3001/api/Dashboard/article/${userid}`;
    axios.get(url)
      .then((res) => {
        if (res.data.article) {
          setTitre(res.data.article.titre)
          setContent(res.data.article.content)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault()

    let url = `http://localhost:3001/api/Dashboard/editArticle/${userid}`;

    const data = {
        titre : titre,
        content : content
    }
    

    axios.patch(url,data)
    .then(res => {
        if(res.data.updatedArticle)
        {
            setSuccessMsg("l'article est mise a jour");
        }


    })

    .catch((err) => {
        setErrormsg(err.response.data.message)
    })




  }












  return (
    <div className='container mt-4'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='titre'>Titre:</label>
          <input
            type='text'
            id='titre'
            className='form-control'
            value={titre}
            onChange={handleTitreChange}
          />
        </div>
    
  
        <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <MdEditor
                                    value={content}
                                    renderHTML={(text) => mdParser.render(text)}
                                    onChange={({text}) => setContent(text)}
                                    style={{height: '400px', width : "800px"}}
                                />
                            </div>

        <div className="form-group">
        
        <input type="submit" value="mise a jour" />
        </div>

    <div className="form-group">
    <p style={{color: errorMsg ? "red" : "green"}}>{errorMsg ? errorMsg : null}</p>
        <p style={{color:  "green"}}>{successMsg ? successMsg : null}</p>
    </div>

      </form>
    </div>
  );
}
