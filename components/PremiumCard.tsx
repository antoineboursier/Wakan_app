import { Icon } from "@iconify/react";

type PremiumCardProps = {
  price?: string;
  title?: string;
  description?: string;
  subtext?: string;
};

export default function PremiumCard({
  price = "2€/mois",
  title = "Accès premium",
  description = "Débloque tout, sans mauvaise surprise.",
  subtext = "Et bien sûr, c'est sans engagement.",
}: PremiumCardProps) {
  return (
    <div className="w-full border-2 border-dashed border-[--accent-900] rounded-xl p-4 mb-8 card-glass">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[--text-secondary] mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-[--accent-900]">{price}</h3>
          <p className="text-[--accent-700] font-bold mb-1">{description}</p>
          <p className="text-[--accent-500] text-para">{subtext}</p>
        </div>
        <Icon
          icon="fa:arrow-up"
          className="w-6 h-6"
          style={{
            color: "var(--text-primary)",
            transform: "rotate(90deg)",
          }}
        />
      </div>
    </div>
  );
}
