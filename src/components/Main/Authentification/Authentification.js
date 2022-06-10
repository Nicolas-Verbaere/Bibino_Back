import React from 'react';
import './Authentification.scss';

function Authentification() {
    return (
        <section className="container">
            <form className="connection" action="" method="get">
                <label className="connection_email" for="email">
                    Email
                </label>
                <input type="email" name="email" id="email" required></input>
                <label className="connection_password" for="password">
                    Mot De Passe
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required
                ></input>
            </form>
            {/* ------------------------------------------------------------ */}
            <form className="register" action="" method="post">
                <div>
                    <label for="email"> Email* </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                    ></input>
                    <label for="password"> Mot De Passe* </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                    ></input>
                    <label for="password"> Confirmation* </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        required
                    ></input>
                    <fieldset>
                        <legend>Civilité*</legend>
                        <div>
                            <input type="radio" id="man" name="gender"></input>
                            <label for="man">M.</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="woman"
                                name="gender"
                            ></input>
                            <label for="woman">Mme.</label>
                        </div>
                    </fieldset>
                    <select name="day" size="l">
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                        <option>04</option>
                        <option>05</option>
                        <option>06</option>
                    </select>
                    <label for="name"> Nom* </label>
                    <input type="text" name="nom" id="nom" required></input>
                    <label for="name"> Prénom* </label>
                    <input
                        type="text"
                        name="prenom"
                        id="prenom"
                        required
                    ></input>
                </div>
            </form>
        </section>
    );
}

export default React.memo(Authentification);
