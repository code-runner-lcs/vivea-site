export default function Hero() {
  return (
    <section class="hero" aria-label="Introduction">
      <div class="wrap hero-grid">
        <div class="hero-copy" data-reveal="1">
          <p class="eyebrow">Organisation de Producteurs · La Réunion</p>
          <h1>
            Des fruits et légumes de La Réunion, cultivés par{" "}
            <em>160 producteurs</em>.
          </h1>
          <p class="lede">
            Vivéa fédère et accompagne les producteurs de l'île : mise en marché,
            exigence de qualité et conseil, pour donner aux fruits et légumes
            réunionnais leur juste place — du champ à la table.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#produits">
              Découvrir nos produits
            </a>
            <a class="link-arrow" href="#terroir">
              Où sont les producteurs ?
            </a>
          </div>
        </div>

        <figure class="hero-visual" data-reveal="2">
          <div class="poster">
            <p class="poster-label">«&nbsp;Du champ à la table, à La Réunion.&nbsp;»</p>
            <p class="poster-stat">
              <b>160</b> producteurs
              <span class="dotsep" aria-hidden="true" />
              sur toute l'île
            </p>
            <div class="poster-actions">
              <a class="btn btn-cream" href="#/espaces">
                Espace pro
              </a>
              <a class="btn btn-light" href="#/espaces/adherent">
                Espace adhérent
              </a>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}