import React from 'react'
//Erreur 404 : la page est introuvable
function Page404() {
  return (
    <>



      <br /><br /> <br /><br /><br /><br /><br /><br />
      <section className="content ">
        <div className="error-page">
          <h2 className="headline text-success"> 404</h2>
          <div className="error-content">
            <h3><i className="fas fa-exclamation-triangle text-success" /> Oops!.</h3>
            <p>
              Nous n'avons pas pu trouvé la page que vous cherchez.

            </p>


          </div>

        </div>

      </section>


    </>
  )
}

export default Page404
