import React from "react";
import "../components/myCss.css";

export default function Register() {
  return (
    <div className="container">
      <div>
        <h2>Devenez membre de Origo</h2>
        <p>
          Inscrivez-vous gratuitement en 2 secondes! On ne postera rien sans
          votre accord.
        </p>
      </div>

      <div>
        <p>Ou</p>
      </div>

      <div className="email-content">
        <input type="mail" id="email" name="email" placeholder="email(?)" />
      </div>

      <div className="pseudo-content">
        <input type="text" id="email" name="pseudo" placeholder="Pseudo(?)" />
      </div>

      <div className="pseudo-content">
        <input
          type="password"
          id="email"
          name="password"
          placeholder="Mot de passe(?)"
        />
      </div>

      <div>
        <input type="checkbox"></input>
        <label class="form-check-label" for="flexCheckDefault">
          J'accepte les <strong>Conditions Générales d'Utilisations</strong>
        </label>
      </div>

      <div>
        <input className="btn" type="submit" value="Créer mon Compte" />
      </div>

      <div className="finDePageRegister">
        <p>Vous avez déjà un compte?</p>
        <a href="Login">Connexion</a>
      </div>
    </div>
  );
}
