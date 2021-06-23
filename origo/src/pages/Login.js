import React from "react";

export default function Login() {
  return (
    <div className="container">
      <div>
        <h2>Content de te revoir!</h2>
        <p>Salut, veuillez vous connecter pour continuer</p>

        <div className="email-content">
          <input type="mail" id="email" name="email" placeholder="email" />
        </div>

        <div className="pseudo-content">
          <input
            type="password"
            id="email"
            name="password"
            placeholder="Mot de passe(?)"
          />
        </div>
        <a href="#">Mot de passe oublié ?</a>

        <div>
          <input className="btn" type="submit" value="Se connecter" />
        </div>

        <p>Se connecter avec:</p>
        <a class="btn btn-primary" href="www.facebook.com" role="button">
          <i class="fab fa-facebook-f"></i>
        </a>

        <a class="btn btn-primary" href="#" role="button">
          <i class="fab fa-google"></i>
        </a>

        <p>Vous n'avez pas de compte?</p>
        <a href="Register">Crééer un compte</a>
      </div>
    </div>
  );
}
