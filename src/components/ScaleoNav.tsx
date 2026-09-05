import { Link } from "@tanstack/react-router";

export function ScaleoNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-lg font-black text-primary-foreground">
            S
          </span>
          <span className="text-lg font-bold tracking-tight text-primary-deep">
            Scale <span className="text-primary-glow">on</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium">
          <Link
            to="/builder"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 bg-accent text-accent-foreground" }}
          >
            Builder
          </Link>
          <Link
            to="/addons"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 bg-accent text-accent-foreground" }}
          >
            Add-ons
          </Link>
          <Link
            to="/site"
            className="rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            activeProps={{ className: "rounded-lg px-3 py-2 bg-accent text-accent-foreground" }}
          >
            My site
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function ScaleoFooter() {
  return (
    <footer className="border-t border-border/70 bg-muted/40 py-8">
      <div className="mx-auto max-w-6xl px-5 text-sm text-muted-foreground">
        Scale on — every local shop online, in its own language.
      </div>
    </footer>
  );
}
