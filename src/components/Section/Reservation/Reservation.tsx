/* eslint-disable react/no-unescaped-entities */
import Section from "../Section";
import Form from "./Form";

const Reservation = () => {
  return (
    <Section>
      <div className="Text_Content">
        <h2>Réservez votre table !</h2>
        <p>
          Réservez dès maintenant votre table pour une expérience caféinée
          inoubliable en compagnie de nos adorables chats. Plongez dans
          l'ambiance apaisante de Café Chatouille et laissez-vous séduire par
          nos délices caféinés et nos compagnons félins. Réservez dès
          aujourd'hui et préparez-vous à vivre un moment magique de détente et
          de plaisir.
        </p>
      </div>
      <Form />
    </Section>
  );
};

export default Reservation;
