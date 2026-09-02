type Item = {
  name: string;
  description?: string;
  price: string;
};

type Category = {
  title: string;
  items: Item[];
};

const CATEGORIES: Category[] = [
  {
    title: "Förrätter",
    items: [
      { name: "Soppa på säsongens grönsaker", description: "Serveras med nybakat bröd", price: "95 kr" },
      { name: "Toast skagen", description: "Räkor, dill och citron", price: "125 kr" },
      { name: "Råbiff", description: "Kapris, senapscrème och picklad lök", price: "145 kr" },
    ],
  },
  {
    title: "Huvudrätter",
    items: [
      { name: "Dagens fisk", description: "Med potatispuré och spenat", price: "195 kr" },
      { name: "Bistro-burgare", description: "Cheddar, tomat, sallad och pommes", price: "185 kr" },
      { name: "Svamps risotto", description: "Parmesan, örter och tryffelolja", price: "175 kr" },
      { name: "Confit de canard", description: "Rödkål, potatis och rödvinssås", price: "215 kr" },
    ],
  },
  {
    title: "Efterrätter",
    items: [
      { name: "Chokladfondant", description: "Med vaniljglass", price: "95 kr" },
      { name: "Crème brûlée", description: "Klassisk med karamelliserat socker", price: "85 kr" },
    ],
  },
  {
    title: "Drycker",
    items: [
      { name: "Husets rött / vitt", description: "Per glas", price: "95 kr" },
      { name: "Öl", description: "Ljus lager eller mörk ale", price: "75 kr" },
      { name: "Läsk", description: "Coca-Cola, Fanta, Sprite", price: "45 kr" },
      { name: "Kaffe / te", price: "35 kr" },
    ],
  },
];

type Props = {
  className?: string;
};

export function ExampleMenu({ className = "" }: Props) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 shadow-sm ${className}`}>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <h3 className="font-display text-xl font-semibold">Exempelmeny</h3>
        <span className="rounded-full bg-foreground/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-background">
          Exempel – byt ut
        </span>
      </div>

      <div className="space-y-6">
        {CATEGORIES.map((category) => (
          <div key={category.title}>
            <h4 className="border-b border-border/70 pb-2 font-display text-lg font-semibold text-primary">
              {category.title}
            </h4>
            <ul className="mt-2 divide-y divide-border/40">
              {category.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    {item.description && (
                      <p className="mt-0.5 text-sm text-muted-foreground">{item.description}</p>
                    )}
                  </div>
                  <span className="shrink-0 font-semibold tabular-nums text-foreground">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">
        Inspiration, ej riktig meny – byt ut rätter, priser och kategorier mot era egna.
      </p>
    </div>
  );
}
