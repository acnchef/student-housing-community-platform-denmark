import { ReactNode } from 'react';

type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-secondary-start to-secondary-end p-6 shadow-card transition-all hover:shadow-medium border border-softYellow border-opacity-20">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-midnight">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-dawn">{title}</h3>
      <p className="text-dawn opacity-80">{description}</p>
    </div>
  );
}
