import { For, Show } from "solid-js";
import { EXTRANET_URL, ESPACE_TABS, PRO_ITEMS } from "../data";

function ProPanel() {
  return (
    <div class="espace-panel" role="tabpanel" id="panel-pro" aria-labelledby="tab-pro">
      <div class="espace-banner">
        <img
          src="/img/espace-pro.jpg"
          alt="Barquettes de fruits et légumes Vivéa prêtes pour la distribution"
        />
      </div>
      <div class="espace-body">
        <h2 class="title">Espace pro Vivéa</h2>
        <p class="espace-slogan">Quantités, qualité, service</p>
        <ul class="pro-list">
          <For each={PRO_ITEMS}>
            {(it) => (
              <li>
                <strong>{it.t}</strong>
                <span>{it.d}</span>
              </li>
            )}
          </For>
        </ul>
        <div class="espace-actions">
          <a class="btn btn-primary" href="#contact">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}

function AdherentPanel() {
  return (
    <div
      class="espace-panel"
      role="tabpanel"
      id="panel-adherent"
      aria-labelledby="tab-adherent"
    >
      <div class="espace-banner">
        <img
          src="/img/espace-adherent.jpg"
          alt="Échanges entre producteurs Vivéa"
        />
      </div>
      <div class="espace-body">
        <h2 class="title">Espace adhérent Vivéa</h2>
        <p class="lede">Vous êtes adhérent Vivéa, accédez à votre extranet :</p>
        <div class="espace-actions">
          <a
            class="btn btn-primary"
            href={EXTRANET_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Accéder à l'extranet
            <span class="ext" aria-hidden="true">
              &nbsp;&#8599;
            </span>
          </a>
        </div>
        <p class="lede espace-note">
          Vous n'êtes pas encore adhérent et souhaitez le devenir ?
        </p>
        <div class="espace-actions">
          <a class="btn btn-ghost" href="#contact">
            Rejoignez-nous
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Espaces(props: {
  tab: "pro" | "adherent";
  onTab: (t: "pro" | "adherent") => void;
}) {
  return (
    <section class="espaces">
      <div class="wrap">
        <div class="page-head" data-reveal="1">
          <p class="eyebrow">Espaces connectés</p>
          <h1 class="title">Les espaces Vivéa</h1>
          <p class="lede">
            Professionnel de la distribution ou adhérent de l'OP : chaque profil a
            son point d'entrée — choisissez le vôtre.
          </p>
        </div>

        <div
          class="tabs"
          role="tablist"
          aria-label="Choisir un espace"
          data-reveal="1"
        >
          <For each={ESPACE_TABS}>
            {(t) => (
              <button
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={props.tab === t.id ? "true" : "false"}
                aria-controls={`panel-${t.id}`}
                classList={{ active: props.tab === t.id }}
                onClick={() => props.onTab(t.id)}
              >
                {t.label}
              </button>
            )}
          </For>
        </div>

        <Show when={props.tab === "pro"} fallback={<AdherentPanel />}>
          <ProPanel />
        </Show>
      </div>
    </section>
  );
}