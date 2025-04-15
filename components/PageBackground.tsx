export default function PageBackground({ imagePath }: { imagePath: string }) {
    return (
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(180deg, var(--background-900, #18272E) 0%, rgba(45, 65, 92, 0.00) 50%, var(--background-900, #18272E) 100%),
            url(${imagePath}) center / cover no-repeat
          `
        }}
      />
    )
  }
  