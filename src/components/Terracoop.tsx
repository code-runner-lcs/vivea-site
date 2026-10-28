import { For } from "solid-js";
import { TERRACOOP_TEXT, TERRACOOP_NOTE } from "../data";

export default function Terracoop() {
  return (
    <section class="terra">
      <div class="wrap">
        <div class="page-head" data-reveal="1">
          <p class="eyebrow">Le groupe coopératif</p>
          <h1 class="title">TERRACOOP</h1>
        </div>

        <div class="terra-band" data-reveal="1">
          <img
            src="/img/terracoop-logo.png"
            alt="TERRA COOP — La Réunion paysanne"
          />
        </div>

        <div class="terra-grid" data-reveal="1">
          <div class="terra-copy">
            <For each={TERRACOOP_TEXT}>{(p) => <p class="lede">{p}</p>}</For>
          </div>

          <div class="terra-badge">
            <img
              src="/img/terracoop-badge.png"
              alt="Badge circulaire TERRA COOP — La Réunion paysanne"
            />
          </div>
        </div>

        <p class="terra-note" data-reveal="1">{TERRACOOP_NOTE}</p>
      </div>
    </section>
  );
}