import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CryptoPulse Single-File Crypto Converter" },
      {
        name: "description",
        content:
          "Download a self-contained HTML, CSS and vanilla JS crypto converter with live rates, market overview and 7-day charts.",
      },
      { property: "og:title", content: "CryptoPulse Single-File Crypto Converter" },
      {
        property: "og:description",
        content:
          "One downloadable HTML file: live crypto to fiat converter, market list and canvas price chart in pure vanilla JS.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">CryptoPulse — single file build</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              HTML, CSS and vanilla JS in one downloadable file. Live rates from CoinGecko.
            </p>
          </div>
          <a
            href="/cryptopulse.html"
            download="cryptopulse.html"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Download cryptopulse.html
          </a>
        </header>

        <div className="mt-8 overflow-hidden rounded-xl border border-border">
          <iframe
            src="/cryptopulse.html"
            title="CryptoPulse preview"
            className="h-[900px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
