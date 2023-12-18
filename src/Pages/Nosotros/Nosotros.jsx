import React from 'react'
import milaSola from '../../assets/img/usMilasola.jpeg'
import milayvela from '../../assets/img/milayvela.jpeg'
import './style.css'
const Nosotros = () => {
  return (
    <div className="nosotros">
      <article className="top">
        <div className="text">
          <h3>Sobre Nosotros</h3>
        </div>
      </article>
      <section className="about-section">
        <h3>Nuestra Historia</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas fugit placeat ex aliquid dolor, rerum voluptatibus atque quasi ducimus, 
          perferendis molestiae eligendi aperiam deserunt nobis! Molestiae nemo iusto a veritatis? Lorem ipsum dolor sit, amet consectetur adipisicing 
          elit. Pariatur, maxime delectus totam accusamus repudiandae labore quis adipisci! Velit at dolorum nihil cumque ad magnam illum mollitia quia,
          placeat, veritatis quod.
        </p>
        <img src={milaSola} alt="Imagen 1"></img>
      </section>
      <section className="about-section">
        <h3>Nuestro Equipo</h3>
        <div className="team-content">
            <div className="team-text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                <p>Nulla ac nisl vel mauris malesuada fringilla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente fugiat cupiditate eos velit dolorum culpa sit ab cum, asperiores provident animi molestiae amet? Error explicabo totam nulla quasi, beatae voluptatibus? </p>
            </div>
            <img src={milayvela} alt='imagen-2'/>
          </div>

      </section>
    </div>
  )
}

export default Nosotros
