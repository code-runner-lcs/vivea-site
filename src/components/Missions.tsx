import { For } from "solid-js";
import { MISSIONS } from "../data";

export default function Missions() {
  return (
    <section id="op" class="section">
      <div class="wrap op-grid">
        <div class="op-intro" data-reveal="1">
          <p class="eyebrow">L'organisation</p>
          <h2 class="title">Le rôle d'une OP</h2>
          <p class="lede">
            En tant qu'Organisation de Producteurs, VIVÉA concentre l'offre de ses
            adhérents pour la mettre en marché de façon structurée : volumes, qualité,
            régularité — au service des producteurs comme des acheteurs.
          </p>
          <a class="link-arrow" href="#produits">
            Découvrir nos produits
          </a>
        </div>

        <div class="missions" data-reveal="1">
          <For each={MISSIONS}>
            {(m) => (
              <article class="mission">
                <span class="mission-num" aria-hidden="true">
                  {m.num}
                </span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}