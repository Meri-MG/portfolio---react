import React from 'react'
import "./notFound.css"
import { Link } from 'react-router-dom'
export default function notFound() {
  return (
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                404 Non trouvé</h2>
                <div class="error-details">
                Désolé, une erreur s'est produite, la page demandée n'a pas été trouvée !
                </div>
                <div class="error-actions">
                    <Link class="btn btn-default btn-lg" to="/">Retour a l'acceuil</Link>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}
