const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer id="contact" class="footer">
      <div class="wrap">
        <div class="foot-grid">
          <div class="foot-brand">
            <a class="logo foot-logo" href="#/" aria-label="Vivéa — haut de page">
              <img
                src="/logo-vivea-h.png"
                alt="Vivéa — La Coopérative"
                class="foot-logo-img"
              />
            </a>
            <p>
              Organisation de Producteurs regroupant 160 producteurs de fruits et
              légumes sur toute l'île de La Réunion.
            </p>
            <p class="contact-note">
              Coordonnées (adresse, téléphone, email) à insérer.
            </p>
          </div>

          <nav class="foot-col" aria-label="Explorer">
            <h4>Explorer</h4>
            <a href="#op">L'OP Vivéa</a>
            <a href="#produits">Nos produits</a>
            <a href="#terroir">Où sont les producteurs ?</a>
            <a href="#bio">La gamme bio</a>
          </nav>

          <nav class="foot-col" aria-label="Espaces">
            <h4>Espaces</h4>
            <a href="#/espaces">Espace pro</a>
            <a href="#/espaces/adherent">Espace adhérent</a>
            <a href="#/terracoop">Terracoop</a>
          </nav>

          <nav class="foot-col" aria-label="Informations">
            <h4>Informer</h4>
            <a href="#">Actus Vivéa</a>
            <a href="#contact">Contactez-nous</a>
          </nav>
        </div>

        <div class="foot-bottom">
          <span>© {YEAR} Vivéa — OP de La Réunion</span>
          <span class="mock-note">Maquette de redesign — textes et visuels à valider</span>
          <span>
            <a href="#">Mentions légales</a> · <a href="#">Confidentialité</a>
          </span>
        </div>
      </div>
    </footer>
  );
}