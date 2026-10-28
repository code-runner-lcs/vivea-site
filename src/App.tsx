import { Match, Show, Switch, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Missions from "./components/Missions";
import Produits from "./components/Produits";
import Terroir from "./components/Terroir";
import BioBand from "./components/BioBand";
import CtaPro from "./components/CtaPro";
import Espaces from "./components/Espaces";
import Terracoop from "./components/Terracoop";
import Footer from "./components/Footer";

type Page = "home" | "espaces" | "terracoop";
type Tab = "pro" | "adherent";

interface Route {
  page: Page;
  anchor: string | null;
  tab: Tab;
}

/**
 * Routage hash minimal (sans dépendance) :
 *   "" | "#op" | "#produits" …      → page accueil (avec ancre éventuelle)
 *   "#/espaces"                     → page espaces, onglet "pro"
 *   "#/espaces/adherent"            → page espaces, onglet "adherent"
 *   "#/terracoop"                   → page Terracoop
 */
function parseHash(): Route {
  const h = window.location.hash;
  if (h.startsWith("#/espaces")) {
    return {
      page: "espaces",
      anchor: null,
      tab: h.includes("adherent") ? "adherent" : "pro",
    };
  }
  if (h.startsWith("#/terracoop")) {
    return { page: "terracoop", anchor: null, tab: "pro" };
  }
  const rest = h.slice(1);
  const anchor = rest.length > 0 && /^[a-z-]+$/.test(rest) ? rest : null;
  return { page: "home", anchor, tab: "pro" };
}

function HomeMain() {
  return (
    <main>
      <Hero />
      <Missions />
      <Produits />
      <Terroir />
      <BioBand />
      <CtaPro />
    </main>
  );
}

export default function App() {
  const [route, setRoute] = createSignal<Route>(parseHash());
  let io: IntersectionObserver | undefined;
  let prevPage: Page | null = null;

  const observeReveals = () => {
    if (!io) return;
    document
      .querySelectorAll("[data-reveal]:not(.revealed)")
      .forEach((el) => io!.observe(el));
  };

  onMount(() => {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("revealed");
            io!.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );

    const onHash = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHash);
    onCleanup(() => {
      window.removeEventListener("hashchange", onHash);
      io?.disconnect();
    });
  });

  createEffect(() => {
    const r = route();

    // Titre de document selon la page
    document.title =
      r.page === "espaces"
        ? "Espaces pro & adhérent — Vivéa · La Réunion"
        : r.page === "terracoop"
          ? "Terracoop — La Réunion paysanne · Vivéa"
          : "Vivéa — Organisation de Producteurs · La Réunion";

    // Ré-observer les éléments [data-reveal] après un changement de page
    // (Show remonte le DOM : les nouveaux éléments ne sont pas encore observés)
    queueMicrotask(observeReveals);

    if (r.page === "home") {
      if (r.anchor) {
        const a = r.anchor;
        const go = () =>
          (document.getElementById(a) as HTMLElement | null)?.scrollIntoView({
            block: "start",
          });
        queueMicrotask(go);
        setTimeout(go, 80); // filet de sécurité si le DOM n'est pas encore peint
      } else if (prevPage !== null && prevPage !== "home") {
        window.scrollTo({ top: 0 });
      }
    }
    prevPage = r.page;
  });

  const onTab = (t: Tab) => {
    setRoute({ ...route(), tab: t });
    history.replaceState(null, "", `#/espaces/${t}`);
  };

  return (
    <div id="top">
      <Header />
      <Switch>
        <Match when={route().page === "espaces"}>
          <main>
            <Espaces tab={route().tab} onTab={onTab} />
          </main>
        </Match>
        <Match when={route().page === "terracoop"}>
          <main>
            <Terracoop />
          </main>
        </Match>
        <Match when={true}>
          <HomeMain />
        </Match>
      </Switch>
      <Footer />
    </div>
  );
}