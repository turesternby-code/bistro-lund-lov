import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Leaf, Sun, DoorClosed, Wallet } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/")({
  component: Index,
});

const ADRESS = "Sandgatan 10, 223 50 Lund";
const KARTLANK = "https://www.google.com/maps/search/?api=1&query=Sandgatan+10,+223+50+Lund";

const oppettider = [
  { dag: "Måndag", tid: "10–17" },
  { dag: "Tisdag", tid: "10–17" },
  { dag: "Onsdag", tid: "10–17" },
  { dag: "Torsdag", tid: "10–17" },
  { dag: "Fredag", tid: "10–17" },
  { dag: "Lördag", tid: "10–17" },
  { dag: "Söndag", tid: "11–17" },
];

const tjanster = [
  {
    ikon: Sun,
    titel: "Uteservering",
    text: "Sitt ute när vädret tillåter – några steg från Sandgatan i centrala Lund.",
  },
  {
    ikon: DoorClosed,
    titel: "Privat matsal",
    text: "Egen matsal för sällskap som vill sitta lite mer avskilt.",
  },
  {
    ikon: Leaf,
    titel: "Veganska alternativ",
    text: "Vi har vegansk mat på menyn, inte bara som undantag.",
  },
];

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 sm:px-8 md:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main>
      {/* Topp */}
      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <span className="font-display text-lg font-bold tracking-tight">
            Bistro <span className="text-primary">13</span>
          </span>
          <nav className="hidden gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#meny" className="hover:text-primary">
              Meny
            </a>
            <a href="#om-oss" className="hover:text-primary">
              Om oss
            </a>
            <a href="#galleri" className="hover:text-primary">
              Galleri
            </a>
            <a href="#kontakt" className="hover:text-primary">
              Kontakt
            </a>
          </nav>
          <a
            href={KARTLANK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
          >
            Hitta hit
          </a>
        </div>
      </header>

      {/* Hero */}
      <Section className="pt-12 md:pt-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/70">
              Bistro i Lund sedan hörnet av Sandgatan
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              Bistro <span className="text-primary">13</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Ärlig bistromat i centrala Lund. Uteservering när solen är framme, privat matsal för
              sällskapet och veganska alternativ varje dag.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={KARTLANK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MapPin className="size-4" /> Vägbeskrivning
              </a>
              <a
                href="#meny"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
              >
                Se menyn
              </a>
            </div>
            <dl className="mt-10 grid gap-4 border-t border-border pt-6 text-sm sm:grid-cols-3">
              <div>
                <dt className="text-muted-foreground">Adress</dt>
                <dd className="mt-1 font-medium">{ADRESS}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Öppet</dt>
                <dd className="mt-1 font-medium">Mån–lör 10–17, sön 11–17</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Prisklass</dt>
                <dd className="mt-1 font-medium">100–200 kr per person</dd>
              </div>
            </dl>
          </div>
          <ImagePlaceholder
            label="Hero-bild"
            hint="Föreslagen: fasaden eller ett dukat bord, liggande format"
            className="aspect-4/5 w-full md:aspect-3/4"
          />
        </div>
      </Section>

      {/* Tjänster */}
      <Section className="bg-secondary/50">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Hos oss kan ni</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tjanster.map(({ ikon: Ikon, titel, text }) => (
            <div key={titel} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Ikon className="size-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{titel}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Meny */}
      <Section id="meny">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Menyn i korthet</h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Ett smakprov på hur vi tänker. Dagens utbud kan variera – fråga oss gärna på plats.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium">
            <Wallet className="size-4 text-primary" /> 100–200 kr per person
          </span>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            {[
              {
                rubrik: "Till att börja med",
                rader: [
                  "Dagens soppa med bröd och smör",
                  "Rostad rotfruktssalva, syrad lök (vegansk)",
                  "Charkbricka att dela",
                ],
              },
              {
                rubrik: "Lite större",
                rader: [
                  "Bistrobiff med rödvinssky och pommes",
                  "Dagens fisk med brynt smör och dill",
                  "Örtbakad kikärtsgryta (vegansk)",
                ],
              },
              {
                rubrik: "Sött till kaffet",
                rader: ["Chokladtryffelkaka", "Äppelkaka med vaniljkräm", "Dagens bakverk"],
              },
            ].map((grupp) => (
              <div key={grupp.rubrik}>
                <h3 className="font-display text-xl font-semibold text-primary">{grupp.rubrik}</h3>
                <ul className="mt-3 divide-y divide-border/70">
                  {grupp.rader.map((rad) => (
                    <li key={rad} className="py-2.5 text-sm">
                      {rad}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p className="text-xs text-muted-foreground">
              Menyn är ett exempel på vårt utbud och uppdateras löpande. Har du allergier – berätta
              för oss när du är här.
            </p>
          </div>
          <div className="grid gap-5">
            <ImagePlaceholder label="Rätt från menyn" className="aspect-4/3" />
            <ImagePlaceholder label="Dagens bakverk" className="aspect-4/3" />
          </div>
        </div>
      </Section>

      {/* Om oss */}
      <Section id="om-oss" className="bg-secondary/50">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <ImagePlaceholder
            label="Bild på oss i köket"
            hint="Personal, kök eller detaljer från lokalen"
            className="aspect-4/3 md:order-last"
          />
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Vår historia</h2>
            <p className="mt-5 text-muted-foreground">
              Bistro 13 ligger på Sandgatan 10, ett stenkast från Lunds centrum. Vi ville skapa en
              plats där man kan äta gott utan krångel – oavsett om det är en snabb lunch mellan
              möten eller ett långt bord med vänner.
            </p>
            <p className="mt-4 text-muted-foreground">
              Köket är enkelt och ärligt. Vi lagar mat vi själva vill äta, håller priserna nere och
              ser till att det alltid finns något vegansk på menyn. När vädret tillåter flyttar vi
              ut serveringen, och för den som vill sitta mer avskilt finns vår privata matsal.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Välkommen in, mån–lör 10–17 och sön 11–17.
            </p>
          </div>
        </div>
      </Section>

      {/* Galleri */}
      <Section id="galleri">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Galleri</h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Här fyller vi på med egna bilder från restaurangen. Platserna nedan väntar på era foton.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImagePlaceholder label="Uteserveringen" className="aspect-square sm:col-span-2 sm:aspect-2/1" />
          <ImagePlaceholder label="Matsalen" className="aspect-square" />
          <ImagePlaceholder label="Privata matsalen" className="aspect-square" />
          <ImagePlaceholder label="Detalj från bordet" className="aspect-square" />
          <ImagePlaceholder label="Vegansk rätt" className="aspect-square" />
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="kontakt" className="bg-secondary/50">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Hitta hit</h2>
            <div className="mt-6 space-y-5 text-sm">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Adress</p>
                  <p className="text-muted-foreground">{ADRESS}</p>
                  <a
                    href={KARTLANK}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-medium text-primary underline underline-offset-4"
                  >
                    Öppna vägbeskrivning
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Wallet className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Prisklass</p>
                  <p className="text-muted-foreground">100–200 kr per person</p>
                </div>
              </div>
            </div>
            <ImagePlaceholder
              label="Bild på entrén"
              hint="Hjälper gästen att känna igen stället"
              className="mt-8 aspect-16/9"
            />
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-primary" />
              <h3 className="text-xl font-semibold">Öppettider</h3>
            </div>
            <ul className="mt-4 divide-y divide-border/70 text-sm">
              {oppettider.map(({ dag, tid }) => (
                <li key={dag} className="flex justify-between py-2.5">
                  <span>{dag}</span>
                  <span className="font-medium tabular-nums">{tid}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Vi tar emot gäster i mån av plats. Bordsbokning sker inte via webbplatsen.
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-5 py-12 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 sm:grid-cols-3">
          <div>
            <p className="font-display text-lg font-bold">
              Bistro <span className="text-primary">13</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Bistro i centrala Lund med uteservering, privat matsal och veganska alternativ.
            </p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Besök oss</p>
            <p className="mt-2 text-muted-foreground">{ADRESS}</p>
            <p className="mt-1 text-muted-foreground">Mån–lör 10–17 · Sön 11–17</p>
          </div>
          <div className="text-sm">
            <p className="font-semibold">Genvägar</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>
                <a href="#meny" className="hover:text-primary">
                  Meny
                </a>
              </li>
              <li>
                <a href="#om-oss" className="hover:text-primary">
                  Om oss
                </a>
              </li>
              <li>
                <a href="#galleri" className="hover:text-primary">
                  Galleri
                </a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-primary">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 w-full max-w-6xl text-xs text-muted-foreground">
          © {new Date().getFullYear()} Bistro 13, Lund. Bilder läggs till av restaurangen.
        </p>
      </footer>
    </main>
  );
}
