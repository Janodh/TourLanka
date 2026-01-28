import Link from "next/link";
import "@/styles/Breadcrumbs.css";

export function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="crumb">
            {!isLast ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span className="current">{item.label}</span>
            )}
            {!isLast && <span className="separator">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

export default function IntroSection({ breadcrumbItems, title, text }) {
  return (
    <section className="intro-hero">
      <div className="intro-overlay">
        <Breadcrumbs items={breadcrumbItems} />
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
