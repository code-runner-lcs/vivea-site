import { For } from "solid-js";
import { ZONES } from "../data";

export default function Terroir() {
  return (
    <section id="terroir" class="section section--alt">
      <div class="wrap terroir-grid">
        <div class="terroir-copy" data-reveal="1">
          <p class="eyebrow">Le territoire</p>
          <h2 class="title">Où sont les producteurs ?</h2>
          <p class="lede">
            Des Hauts à la côte, les exploitations couvrent l'ensemble de l'île et
            s'organisent en bassins de production complémentaires.
          </p>
          <ul class="zones">
            <For each={ZONES}>
              {(z) => (
                <li class="zone">
                  <b>{z.name}</b>
                  <span>{z.communes}</span>
                </li>
              )}
            </For>
          </ul>
        </div>

        <div class="map-card" data-reveal="2">
          <svg
            class="island"
            viewBox="0 0 220 150"
            role="img"
            aria-label="Schéma indicatif de l'île de La Réunion"
          >
            <path
              class="isle"
              d="M24,64 C28,34 64,13 106,15 C146,17 184,33 191,64 C197,95 168,127 122,129 C78,131 20,99 24,64 Z"
            />
            <circle class="dot" cx="72" cy="32" r="3.4" />
            <text class="map-label" x="72" y="23" text-anchor="middle">
              Saint-Denis
            </text>
            <circle class="dot" cx="36" cy="50" r="3.4" />
            <text class="map-label" x="38" y="42" text-anchor="middle">
              Le Port
            </text>
            <circle class="dot" cx="172" cy="58" r="3.4" />
            <text class="map-label" x="168" y="49" text-anchor="middle">
              Saint-Benoît
            </text>
            <circle class="dot" cx="106" cy="122" r="3.4" />
            <text class="map-label" x="106" y="140" text-anchor="middle">
              Saint-Pierre
            </text>
            <circle class="dot dot--terra" cx="76" cy="78" r="3.4" />
            <text class="map-label" x="76" y="70" text-anchor="middle">
              Cilaos
            </text>
            <circle class="dot dot--terra" cx="130" cy="98" r="3.4" />
            <text class="map-label" x="134" y="112" text-anchor="middle">
              Le Tampon
            </text>
          </svg>
          <p class="map-caption">Schéma indicatif — île de La Réunion</p>
          <p class="map-legend">
            <span>Littoral</span>
            <span class="terra">Les Hauts</span>
          </p>
        </div>
      </div>
    </section>
  );
}