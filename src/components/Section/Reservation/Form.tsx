import { useState } from "react";
import Button from "../Button/Button";

const Form = () => {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
  });
  const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (lastname.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastname: "Veuillez renseigner votre nom",
      }));
      return;
    }
    if (firstname.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstname: "Veuillez renseigner votre prénom",
      }));
      return;
    }
    if (phone.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Veuillez renseigner votre numéro de téléphone",
      }));
      return;
    }
    if (email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Veuillez renseigner votre email",
      }));
      return;
    }
    if (!isValidEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email invalide",
      }));
      return;
    }
    console.log("Données envoyées:", { lastname, firstname, phone, email });
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form_Element">
        <label htmlFor="lastname">Nom*</label>
        <input
          id="lastname"
          type="text"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, lastname: "" }));
          }}
        />
        {errors.lastname && <span className="Error">{errors.lastname}</span>}
      </div>

      <div className="Form_Element">
        <label htmlFor="firstname">Prénom*</label>
        <input
          id="firstname"
          type="text"
          value={firstname}
          onChange={(e) => {
            setFirstname(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, firstname: "" }));
          }}
        />
        {errors.firstname && <span className="Error">{errors.firstname}</span>}
      </div>

      <div className="Form_Element">
        <label htmlFor="phone">N° de téléphone*</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
          }}
        />
        {errors.phone && <span className="Error">{errors.phone}</span>}
      </div>

      <div className="Form_Element">
        <label htmlFor="email">Adresse email*</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
          }}
        />
        {errors.email && <span className="Error">{errors.email}</span>}
      </div>
      <Button type="submit" buttonText="Envoyer" />
    </form>
  );
};

export default Form;
