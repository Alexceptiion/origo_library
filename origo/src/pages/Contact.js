import React from "react";
import Navigation from "../components/Navigation";
import "../components/myCss.css";

export default function contact() {
  return (
    <div>
      <Navigation />
      <form className="contact-form">
        <h2>Contactez-nous</h2>
        <div className="form-content">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="nom *"
          />{" "}
          <br />
          <input type="text" id="phone" name="phone" placeholder="Téléphone" />
          <div className="email-content">
            <label id="not-mail">Email non valide</label> <br />
            <input type="mail" id="email" name="email" placeholder="email" />
          </div>
          <textarea
            id="subject"
            name="subject"
            placeholder="message *."
          ></textarea>
          <div>
          <input className="btn" type="submit" value="Envoyer" />
          </div>
        </div>
      </form>
    </div>
  );
}
