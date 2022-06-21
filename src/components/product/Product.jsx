import './product.scss';

export default function Product({img, link}) {
  return (
    <div className="card">
      <div className="card_browser">
        <div className="card_circle"></div>
        <div className="card_circle"></div>
        <div className="card_circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt={img} className="card_img"/>
      </a>
    </div>
  )
}
