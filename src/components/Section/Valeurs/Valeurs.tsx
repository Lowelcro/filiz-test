import Card from "./Card/Card";
import Section from "../Section";

const Valeurs = () => {
  const cardDatas = [
    {
      key: 1,
      icon: "public/icons/coffee-icon.svg",
      title: "Passionné de Café",
      content:
        "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse.",
      alt: "tasse de café",
    },
    {
      key: 2,
      icon: "public/icons/cat-icon.svg",
      title: "Bien-être des Chats",
      content:
        "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent.",
      alt: "chat",
    },
    {
      key: 3,
      icon: "public/icons/plant-icon.svg",
      title: "Engagement Environnemental",
      content:
        "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets.",
      alt: "plante",
    },
  ];
  return (
    <Section>
      <h2>Nos valeurs</h2>
      <div className="Cards">
        {cardDatas.map((card) => (
          <Card
            key={card.key}
            icon={card.icon}
            title={card.title}
            content={card.content}
            alt={card.alt}
          />
        ))}
      </div>
    </Section>
  );
};

export default Valeurs;
