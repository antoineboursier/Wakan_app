import TirageTemplate from "@/components/tirage-template"

export default function RuneCompletePage() {
  // Exemple de données pour les runes
  const mainRune = {
    symbol: "ᚷ",
    name: "Gebo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
  }

  const additionalRunes = [
    {
      symbol: "ᛒ",
      name: "Berkana",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
    },
    {
      symbol: "ᛖ",
      name: "Ehwaz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
    },
  ]

  return (
    <TirageTemplate
      type="rune"
      title="Ta rune du jour :"
      mainItem={mainRune}
      additionalItems={additionalRunes}
      isPremium={false}
    />
  )
}

