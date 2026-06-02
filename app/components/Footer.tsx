import { BelsyIcon } from "./brand/BrandMark";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-belsy-black py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <BelsyIcon variant="white" size={40} decorative />
              <span className="font-display text-xl font-extrabold">
                Belsy Language Academy
              </span>
            </div>
            <p className="mt-4 max-w-sm font-normal text-white/70">
              Languages &amp; Global Skills. Transforme a sua fluência em
              protagonismo.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-belsy-green">
              Idiomas
            </h3>
            <ul className="mt-4 space-y-2 font-normal text-white/70">
              <li>Inglês</li>
              <li>Espanhol</li>
              <li>Francês (em breve)</li>
              <li>Italiano (em breve)</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-belsy-green">
              Contato
            </h3>
            <ul className="mt-4 space-y-2 font-normal text-white/70">
              <li>
                <a
                  href="https://www.instagram.com/belsyacademy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-belsy-green"
                >
                  Instagram →
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/academybelsy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-belsy-green"
                >
                  Linktree →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm font-normal text-white/60">
          © {new Date().getFullYear()} Belsy Language Academy — todos os
          direitos reservados.
        </div>
      </div>
    </footer>
  );
}
