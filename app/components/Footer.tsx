export default function Footer() {
  return (
    <footer className="bg-belsy-black border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-belsy-purple font-display text-xl font-bold text-white">
                B
              </span>
              <span className="font-display text-xl font-bold">
                Belsy Language Academy
              </span>
            </div>
            <p className="mt-4 max-w-sm text-white/70">
              Languages & Global Skills. Transforme a sua fluência em
              protagonismo.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-belsy-yellow">
              Idiomas
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>Inglês</li>
              <li>Espanhol</li>
              <li>Francês (em breve)</li>
              <li>Italiano (em breve)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-belsy-yellow">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
              <li>
                <a
                  href="https://www.instagram.com/belsyacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-belsy-yellow"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/academybelsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-belsy-yellow"
                >
                  Linktree →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} Belsy Language Academy — todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
