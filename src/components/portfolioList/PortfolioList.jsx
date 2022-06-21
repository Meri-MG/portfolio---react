import './portfolioList.scss'

export default function PortfolioList({title, active, setSelected, id}) {
  return (
    <li className={active ? "portfolio_list active" : "portfolio_list"} onClick={()=> setSelected(id)}>
      {title}
    </li>
  )
}
