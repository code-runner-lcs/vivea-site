import { For, Show } from "solid-js";
import { PRODUITS } from "../data";

export default function Produits() {
  return (
    <section id="produits" class="section">
      <div class="wrap">
        <div class="head-row" data-reveal="1">
          <div>
            <p class="eyebrow">Filières &amp; produits</p>
            <h2 class="title">Nos produits</h2>
          </div>
          <span class="link-muted">Catalogue complet — à connecter</span>
        </div>

        <ul class="pgrid" data-reveal="1">
          <For each={PRODUITS}>
            {(p) => (
              <li class="ptile" classList={{ featured: !!p.accent }}>
                <img
                  class="ptile-bg"
                  src={p.img}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
                <span class="ptile-veil" aria-hidden="true"></span>
                <h3 class="name">{p.name}</h3>
                <Show when={p.note}>
                  <p class="note">{p.note}</p>
                </Show>
                <p class="tags">
                  <span class="tag" classList={{ "tag--accent": !!p.accent }}>
                    {p.tag}
                  </span>
                </p>
                <span class="arrow" aria-hidden="true">
                  &rarr;
                </span>
              </li>
            )}
          </For>
        </ul>
      </div>
    </section>
  );
}