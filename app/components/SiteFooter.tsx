type FooterProps = {
  email?: string;
  phone?: string;
  address?: string;
  socials?: { label: string; href: string }[];
};

export default function SiteFooter({
  email,
  phone,
  address,
  socials,
}: FooterProps) {
  return (
    <footer className="w-full border-t border-foreground/10 py-8 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex flex-col gap-1 text-sm">
          {email ? (
            <span>
              Email:{" "}
              <a className="underline" href={`mailto:${email}`}>
                {email}
              </a>
            </span>
          ) : null}
          {phone ? (
            <span>
              Телефон:{" "}
              <a className="underline" href={`tel:${phone}`}>
                {phone}
              </a>
            </span>
          ) : null}
          {address ? <span>Адреса: {address}</span> : null}
        </div>
        {socials && socials.length ? (
          <div className="flex items-center gap-4 text-sm">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
