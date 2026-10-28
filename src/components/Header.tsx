import { For, Show, createSignal, onCleanup, onMount } from "solid-js";
import { NAV_ITEMS } from "../data";

export default function Header() {
  const [scrolled, setScrolled] = createSignal(false);
  const [open, setOpen] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    onCleanup(() => window.removeEventListener("scroll", onScroll));
  });

  return (
    <header class="site" classList={{ scrolled: scrolled() }}>
      <div class="wrap site-inner">
        <a class="logo" href="#/" aria-label="Vivéa — accueil">
          <img
            src="/logo-vivea-h.png"
            alt="Vivéa — La Coopérative"
            class="logo-img"
          />
        </a>

        <nav class="main" aria-label="Navigation principale">
          <For each={NAV_ITEMS}>{(it) => <a href={it.href}>{it.label}</a>}</For>
        </nav>

        <button
          type="button"
          class="burger"
          aria-label={open() ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open() ? "true" : "false"}
          onClick={() => setOpen(!open())}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <Show when={open()}>
        <nav class="mobile-panel" aria-label="Navigation mobile">
          <For each={NAV_ITEMS}>
            {(it) => (
              <a href={it.href} onClick={() => setOpen(false)}>
                {it.label}
              </a>
            )}
          </For>
          <div class="panel-ctas">
            <a
              class="btn btn-ghost"
              href="#/espaces/adherent"
              onClick={() => setOpen(false)}
            >
              Espace adhérent
            </a>
            <a class="btn btn-primary" href="#/espaces" onClick={() => setOpen(false)}>
              Espace pro
            </a>
          </div>
        </nav>
      </Show>
    </header>
  );
}