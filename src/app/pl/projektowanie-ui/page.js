import Hero from "@/app/components/sections/Hero"

export default function UiDesignPage() {
  return (
    <>
      <Hero data={heroData}/>
    </>
  )
}

const heroData = {
	heading: "**Projektowanie UI** – poznaj ładniejszą siostrę UX",
	img: {
		asset: {
			altText:
				"ASDASDasd",
			url: "/UiHero.png",
			metadata: {
				dimensions: {
					height: 1152,
					width: 1929,
				},
			},
		},
	},
	breadcrumbs: [{
		name: "Projektowanie UX",
		link: "/projektowanie-ux"
	}]
}