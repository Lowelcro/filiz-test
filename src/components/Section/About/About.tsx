/* eslint-disable react/no-unescaped-entities */
import Section from "../Section";
import './About.scss';

const About = () => {
  return (
    <Section>
    <img src="public/images/image-about-us.png" alt="tasse de café dans les mains" />
    <div className="Text_Content">

      <h2>Qui sommes-nous ? </h2>
      <p>
        Bienvenue chez Café Neko, l'endroit où le café et les chats se
        rencontrent pour créer une expérience unique en son genre.
      </p>
      <p>
        Chez Café Neko, nous sommes passionnés par deux choses : le café de
        qualité et le bien-être des chats. Fondé par des amoureux des félins et
        des aficionados du café, Café Neko est bien plus qu'un simple café.
        C'est un refuge pour les amoureux des chats, un havre de paix où l'on
        peut savourer une bonne tasse de café tout en câlinant nos adorables
        résidents à quatre pattes.
      </p>
      </div>
    </Section>
  );
};

export default About;
