import React from "react";
import { NavLink } from "react-router-dom";
import "./myCss.css";
import { faBars } from "react-icons/fa";

export default function Navigation() {
  return (
    <div className="navigation">
      <img src="/assets/logo_small.png" alt="logo" />
      <faBars className="bars" />

      <ul className="navMenu">
        <NavLink to="/" exact activeClassName="nav-active" className="hover">
          <li>Accueil</li>
        </NavLink>

        <NavLink to="/Games" className="hover" activeClassName="nav-active">
          <li>Jeux</li>
        </NavLink>

        <NavLink to="/Register" className="hover" activeClassName="nav-active">
          <li>S'inscrire</li>
        </NavLink>

        <NavLink to="/Login" className="hover" activeClassName="nav-active">
          <li>Se Connecter</li>
        </NavLink>

        <NavLink to="/Account" className="hover" activeClassName="nav-active">
          <li>Compte</li>
        </NavLink>

        <NavLink to="/Contact" className="hover" activeClassName="nav-active">
          <li>Contactez-nous</li>
        </NavLink>
      </ul>
    </div>
  );
}
