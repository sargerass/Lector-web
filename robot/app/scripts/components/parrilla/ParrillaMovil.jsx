import React from 'react'
import '../../../styles/sass/components/_parrilla-movil.scss'

const ParrillaMovil = () => (
  <div className="parrilla-movil">
    <div className="parrilla-movil__promotional-header">
      <h1>Ilimitados</h1>
      <h2>Datos libres</h2>
      <p className="extra">(comparte 40 GB)</p>
    </div>
    <div className="parrilla-movil__content">
      <div className="parrilla-movil-item">
        <p className="parrilla-movil-item__header">Apps Ilimitadas</p>
        <img
          src={require('../../../images/parrilla/movil/8_apps.png')}
          alt="eight apps"
        />
        <p className="parrilla-movil-item__footer">Ilimitadas en 4G</p>
      </div>
      <div className="parrilla-movil-item">
        <p className="parrilla-movil-item__header parrilla-movil-item__header--call-and-sms">
          Llamadas y mensajes
        </p>
        <p className="parrilla-movil-item__footer parrilla-movil-item__footer--call-and-sms">
          Ilimitados
        </p>
      </div>
      <div className="parrilla-movil-item">
        <div className="content megas">
          <div className="megas">Megas Internacionales</div>
          <p>
            12 GB Libres + Whatsapp <br />
            solo texto
          </p>
        </div>
      </div>
      <div className="priceContent">
        <p className="cargofijo">Precio Embajador</p>
        <div className="new">S/ 139.93</div>
        <div className="regularPrice">Precio regular: S/ 199.90</div>
      </div>
    </div>
  </div>
)

// export default ParrillaMovil
modules.export.ParrillaMovil = ParrillaMovil;
