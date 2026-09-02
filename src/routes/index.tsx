import { createFileRoute } from "@tanstack/react-router";
import { Clock, MapPin, Leaf, Sun, DoorClosed, Wallet, Star } from "lucide-react";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { TextPlaceholder } from "@/components/TextPlaceholder";
import { ExampleMenu } from "@/components/ExampleMenu";
import { ExampleTextCard } from "@/components/ExampleTextCard";
import exempelInterior from "@/assets/exempel-interior.jpg";
import exempelRatt1 from "@/assets/exempel-ratt1.jpg";
import exempelRatt2 from "@/assets/exempel-ratt2.jpg";
import exempelCatering from "@/assets/exempel-catering.jpg";
import exempelUteservering from "@/assets/exempel-uteservering.jpg";
import exempelKaffe from "@/assets/exempel-kaffe.jpg";
import exempelGaster from "@/assets/exempel-gaster.jpg";
import exempelMatsal from "@/assets/exempel-matsal.jpg";

const EXEMPEL_CATERING = `Vi hjälper gärna till med mat till möten, fester och mindre tillställningar. Berätta hur många ni är och vilken typ av mat ni önskar, så tar vi fram ett förslag tillsammans.`;

const EXEMPEL_HISTORIA = `Bistro 13 startade som en liten idé om en plats där gäster kan äta gott utan krångel. Sedan dess har vi vuxit tillsammans med våra stamgäster i Lund.`;

const EXEMPEL_OM = `Hos oss möts du av en avslappnad bistro med plats både inne och ute. Vi lagar maten från grunden och tar gärna emot sällskap i vår privata matsal.`;

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bistro 13 – Sandgatan 10, Lund" },
      {
        name: "description",
        content:
          "Bistro 13, Sandgatan 10, 223 50 Lund. Uteservering, privat matsal, veganska alternativ. Mån–lör 10–17, sön 11–17. 100–200 kr per person.",
      },
      { property: "og:title", content: "Bistro 13 – Sandgatan 10, Lund" },
      {
        property: "og:description",
        content:
          "Uteservering, privat matsal och veganska alternativ. Mån–lör 10–17, sön 11–17. 100–200 kr per person.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Bistro 13",
          servesCuisine: "Bistro",
          priceRange: "100–200 kr",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Sandgatan 10",
            postalCode: "223 50",
            addressLocality: "Lund",
            addressCountry: "SE",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "68",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "10:00",
              closes: "17:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Sunday",
              opens: "11:00",
              closes: "17:00",
            },
          ],
        }),
      },
    ],
  }),
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
  { ikon: Sun, titel: "Uteservering" },
  { ikon: DoorClosed, titel: "Privat matsal" },
  { ikon: Leaf, titel: "Veganska alternativ" },
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
            <a href="#catering" className="hover:text-primary">
              Catering
            </a>
            <a href="#om-bistro-13" className="hover:text-primary">
              Om Bistro 13
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
              Bistro · Lund
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] font-bold tracking-tight sm:text-6xl">
              Bistro <span className="text-primary">13</span>
            </h1>
            <p className="mt-5 flex items-center gap-2 text-sm font-medium">
              <Star className="size-4 fill-primary text-primary" />
              4,9 / 5 i Google-betyg baserat på 68 recensioner
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
            hint="Ladda upp er egen bild"
            exampleSrc={exempelInterior}
            exampleAlt="Exempelbild: inbjudande bistromiljö"
            eager
            className="aspect-4/5 w-full md:aspect-3/4"
          />
        </div>
      </Section>

      {/* Tjänster */}
      <Section className="bg-secondary/50">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Hos oss finns</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {tjanster.map(({ ikon: Ikon, titel }) => (
            <div key={titel} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <Ikon className="size-6 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{titel}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* Meny */}
      <Section id="meny">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Meny</h2>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium">
            <Wallet className="size-4 text-primary" /> 100–200 kr per person
          </span>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ExampleMenu className="h-full" />
          <div className="grid gap-5">
            <ImagePlaceholder
              label="Egen bild"
              hint="Ladda upp er egen bild"
              exampleSrc={exempelRatt1}
              exampleAlt="Exempelbild: tallrik med säsongens grönsaker och bröd"
              className="aspect-4/3"
            />
            <ImagePlaceholder
              label="Egen bild"
              hint="Ladda upp er egen bild"
              exampleSrc={exempelRatt2}
              exampleAlt="Exempelbild: vegansk sallad och soppa"
              className="aspect-4/3"
            />
          </div>
        </div>
      </Section>

      {/* Catering */}
      <Section id="catering">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Catering</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <ExampleTextCard>{EXEMPEL_CATERING}</ExampleTextCard>
          <ImagePlaceholder
            label="Egen bild"
            hint="Ladda upp er egen bild"
            exampleSrc={exempelCatering}
            exampleAlt="Exempelbild: cateringbuffé med olika rätter"
            className="aspect-4/3"
          />
        </div>
      </Section>

      {/* Historia */}
      <Section className="bg-secondary/50">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <ImagePlaceholder
            label="Egen bild"
            hint="Ladda upp er egen bild"
            exampleSrc={exempelKaffe}
            exampleAlt="Exempelbild: kaffe bryggs i baren"
            className="aspect-4/3 md:order-last"
          />
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Historia</h2>
            <TextPlaceholder
              label="Lägg till egen text här"
              rows={8}
              className="mt-6"
              exampleText={EXEMPEL_HISTORIA}
            />
          </div>
        </div>
      </Section>

      {/* Om Bistro 13 */}
      <Section id="om-bistro-13">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Om Bistro 13</h2>
        <ExampleTextCard className="mt-6 max-w-3xl">{EXEMPEL_OM}</ExampleTextCard>
      </Section>

      {/* Galleri */}
      <Section id="galleri" className="bg-secondary/50">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Galleri</h2>
        <p className="mt-2 max-w-lg text-sm text-muted-foreground">
          Bilderna nedan är exempel för inspiration – klicka för att byta ut mot egna foton.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ImagePlaceholder
            label="Egen bild"
            hint="Ladda upp er egen bild"
            exampleSrc={exempelUteservering}
            exampleAlt="Exempelbild: uteservering med bord och stolar"
            className="aspect-square sm:col-span-2 sm:aspect-2/1"
          />
          <ImagePlaceholder
            label="Egen bild"
            exampleSrc={exempelMatsal}
            exampleAlt="Exempelbild: dukad privat matsal"
            className="aspect-square"
          />
          <ImagePlaceholder
            label="Egen bild"
            exampleSrc={exempelGaster}
            exampleAlt="Exempelbild: gäster vid ett bistrobord"
            className="aspect-square"
          />
          <ImagePlaceholder
            label="Egen bild"
            exampleSrc={exempelRatt2}
            exampleAlt="Exempelbild: vegansk rätt"
            className="aspect-square"
          />
          <ImagePlaceholder
            label="Egen bild"
            exampleSrc={exempelKaffe}
            exampleAlt="Exempelbild: kaffe i baren"
            className="aspect-square"
          />
        </div>
      </Section>

      {/* Kontakt */}
      <Section id="kontakt">
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
              <div className="flex gap-3">
                <Star className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold">Google-betyg</p>
                  <p className="text-muted-foreground">4,9 / 5 baserat på 68 recensioner</p>
                </div>
              </div>
            </div>
            <ImagePlaceholder
              label="Egen bild"
              hint="Ladda upp er egen bild"
              exampleSrc={exempelUteservering}
              exampleAlt="Exempelbild: uteservering på gatan"
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
              Uteservering · Privat matsal · Veganska alternativ
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
                <a href="#catering" className="hover:text-primary">
                  Catering
                </a>
              </li>
              <li>
                <a href="#om-bistro-13" className="hover:text-primary">
                  Om Bistro 13
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
          © {new Date().getFullYear()} Bistro 13
        </p>
      </footer>
    </main>
  );
}
