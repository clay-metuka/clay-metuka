import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-text pt-12 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10">
        <div className="mb-10 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-3 md:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt=""
              width={72}
              height={72}
              className="mb-5 rounded-full"
            />
            <Image
              src="/images/clay_metuka_text_white.png"
              alt="Clay Metuka"
              width={160}
              height={32}
              className="mb-5 h-auto w-[160px]"
            />
            <p className="max-w-[300px] font-body text-sm leading-relaxed text-sand/75">
              Handmade ceramic vessels for Jewish life, shaped with love in
              Israel.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.instagram.com/claymetuka/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 transition-colors hover:text-teal-light"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a
                href="https://www.facebook.com/claymetuka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 transition-colors hover:text-teal-light"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'd%20love%20to%20learn%20more%20about%20your%20work."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sand/70 transition-colors hover:text-teal-light"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[3px] text-teal-muted">
              Explore
            </div>
            {[
              { href: "/gallery", label: "Gallery" },
              { href: "/story", label: "Story" },
              { href: "/commission", label: "Commission" },
              { href: "/care", label: "Care" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="block py-1.5 font-body text-sm text-sand/70 transition-colors hover:text-sand/90"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Connect — hidden on mobile (FAB is the implicit action; no tappable button on mobile) */}
          <div className="hidden md:block">
            <div className="mb-5 font-body text-[10px] font-semibold uppercase tracking-[3px] text-teal-muted">
              Connect
            </div>
            <p className="mb-4 font-body text-sm leading-relaxed text-sand/70">
              Message me on WhatsApp or fill out the commission form.
            </p>
            <a
              href="https://wa.me/972522552693?text=Hi%20Metuka!%20I'd%20love%20to%20learn%20more%20about%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-[4px] bg-[#25D366] px-5 py-2.5 font-body text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom — stack on mobile (cleaner) and pad-right at sm+ to clear the WhatsApp FAB */}
        <div className="flex flex-col items-start gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pr-20 lg:pr-0">
          <span className="font-body text-xs text-sand/70">
            Made with love in Israel
          </span>
          <span className="font-heading text-sm italic text-sand/70">
            Ritual. Rooted. Handmade.
          </span>
        </div>
      </div>
    </footer>
  );
}
