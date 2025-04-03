import TirageTemplate from "@/components/tirage-template"

export default function RunePage() {
  // Exemple de données pour une rune
  const mainRune = {
    symbol: "ᚠ",
    name: "Fehu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a tortor est. Suspendisse bibendum dapibus tortor id pulvinar. Nulla laoreet lorem et lacus gravida, quis tempus ex porta. Duis rutrum tincidunt erat. Nulla non tempor magna. Phasellus eget tristique leo. Vestibulum tempus quam at diam tempus pulvinar.",
  }

  return <TirageTemplate type="rune" title="Ta rune du jour :" mainItem={mainRune} isPremium={false} />
}

