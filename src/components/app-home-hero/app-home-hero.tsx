import {FunctionalComponent} from '@stencil/core';

export const HomeMap: FunctionalComponent = () => {
  return (
    <section class="b-section b-section--map mt-2 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-4">Lugar</h2>
            <p>
              Ven a uno de los lugares más iconicos de la ciudad de Monterrey,
              NL, México y encuentra todo lo necesaría para tu éxito.
            </p>
          </div>
        </div>
      </div>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.7984425984873!2d-100.29059748402473!3d25.677975383674777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866295621fe2800d%3A0x1757019e3ef84417!2sCintermex%2C+Av+Fundidora+501%2C+Obrera%2C+64010+Monterrey%2C+N.L.!5e0!3m2!1sen!2smx!4v1533307549390"
          width="600" height="450" frameBorder="0" style={{border: 0}}
          allowFullScreen></iframe>
      </div>
    </section>
  );
};
