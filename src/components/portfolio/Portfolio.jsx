import { useState, useEffect } from 'react';
import './portfolio.scss';
import Product from '../product/Product';
import { soloProjects, groupProjects } from '../../data';
import PortfolioList from '../portfolioList/PortfolioList';

export default function Portfolio() {
  const [selected, setSelected] = useState("Solo");
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'Solo',
      title: 'Solo Projects',
    },
    {
      id: 'Group',
      title: 'Group Projects',
    },
  ];

  useEffect(()=> {
    switch(selected){
      case "Solo":
        setData(soloProjects);
        break;
        case "Group":
        setData(groupProjects);
        break;
        default:
          setData(soloProjects);
    }
  }, [selected])

  return (
    <div className="portfolio" id="portfolio">
      <div className="pl_texts">
        <h2 className="pl_title">Portfolio</h2>
        <ul>
          {list.map((li) => (
          <PortfolioList title={li.title} id={li.id} active={selected === li.id} setSelected={setSelected}/>
          ))}
       </ul>
      </div>
      <div className="pl_list">
        {data.map((pro) => (
          <Product key={pro.id} img={pro.img} link={pro.link} />
        ))}
      </div>
    </div>
  )
}
