import TirageTemplate from "@/components/tirage-template"

export default function TarotCompletePage() {
  // Exemple de données pour les cartes de tarot
  const mainCard = {
    symbol: "🃟",
    name: "La Papesse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
  }

  const additionalCards = [
    {
      symbol: "🃑",
      name: "Le Bateleur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
    },
    {
      symbol: "🃛",
      name: "L'Empereur",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
    },
    {
      symbol: "🃝",
      name: "La Justice",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
    },
  ]

  return (
    <TirageTemplate
      type="tarot"
      title="Ta carte du jour :"
      mainItem={mainCard}
      additionalItems={additionalCards}
      isPremium={false}
    />
  )
}

