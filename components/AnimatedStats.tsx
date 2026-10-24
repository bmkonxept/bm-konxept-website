
type Stat = {
  value: number;
  suffix: string;
  label: string;
};

type AnimatedStatsProps = {
  stats: Stat[];
};

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-white/10">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group relative px-6 py-8 text-center sm:px-8 sm:py-6"
        >
          <div className="absolute inset-5 rounded-3xl bg-gold/[0.04] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative">
            <div className="text-5xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-gold sm:text-6xl lg:text-7xl">
              {stat.value}
              {stat.suffix}
            </div>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40 sm:text-xs">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
