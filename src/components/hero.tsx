import { hero } from "@/lib/content";
import { Reveal } from "@/components/ui/reveal";
import { Tag } from "@/components/ui/tag";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { ArrowRight, Play } from "@/components/ui/icons";
import { ApertureIris } from "@/components/aperture-iris";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-noise relative overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32"
    >
      {/* animated centerpiece — the aperture the product is named for */}
      <ApertureIris />

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-6 text-center sm:px-8">
        <Reveal variant="fade">
          <Tag>{hero.eyebrow}</Tag>
        </Reveal>

        <h1 className="display mt-8 max-w-[17ch] text-balance">
          <Reveal as="span" className="block" delay={60}>
            {hero.headlineLead}{" "}
          </Reveal>
          <Reveal as="span" className="block" delay={140}>
            <span className="font-serif italic text-accent">{hero.headlineAccent}</span>{" "}
            {hero.headlineTail}
          </Reveal>
        </h1>

        <Reveal delay={240} className="w-full">
          <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-text-secondary">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={340} className="w-full">
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.4}>
              <ButtonLink href={hero.ctaPrimary.href} size="lg">
                {hero.ctaPrimary.label}
                <ArrowRight width={18} height={18} />
              </ButtonLink>
            </Magnetic>
            <ButtonLink href={hero.ctaSecondary.href} variant="ghost" size="lg">
              <Play width={16} height={16} className="text-accent" />
              {hero.ctaSecondary.label}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal variant="fade" delay={460}>
          <div className="mt-12 flex items-center gap-3 text-sm text-muted">
            <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-success" />
            {hero.trustLine}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
