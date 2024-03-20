/* eslint-disable react/no-unescaped-entities */
import Button from "../Button/Button";
import Section from "../Section";
import './Intro.scss';

const Intro = () => {
  return (
    <Section>
      <div className="Text_Content">
        <h2>Bienvenue<br/> chez Café Neko</h2>
        <h3>L'endroit où le café rencontre les ronronnements</h3>
        <p>
          Bienvenue dans notre univers où chaque tasse de café est accompagnée
          d'une dose d'amour félin.
        </p>
      <Button type="button" buttonText="Nous contacter" />
      </div>

      <img src="public/images/cat-hero-section.png" alt="chat devant un mug" />
    </Section>
  );
};

export default Intro;
