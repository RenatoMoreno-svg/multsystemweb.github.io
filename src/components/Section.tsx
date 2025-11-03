import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  containerClassName?: string;
}

export function Section({ 
  id, 
  className = "", 
  children,
  containerClassName = "container-custom"
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
}

interface SectionWithBackgroundProps extends SectionProps {
  backgroundClassName?: string;
}

export function SectionWithBackground({ 
  id, 
  className = "", 
  children,
  containerClassName = "container-custom relative z-10",
  backgroundClassName = ""
}: SectionWithBackgroundProps) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {backgroundClassName && (
        <div className={`absolute inset-0 ${backgroundClassName}`} />
      )}
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  );
}
