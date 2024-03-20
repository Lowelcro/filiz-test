import './Card.scss';

interface CardContent {
    icon: string,
    title: string,
    content: string,
    alt: string
}

const Card = ({ icon, title, content, alt}: CardContent) => {
  return <div className="Card">
    <img className="Card_Icon" src={icon} alt={alt} />
    <h3 className="Card_Title">{title}</h3>
    <p className="Card_Text">{content}</p>
  </div>;
};

export default Card;