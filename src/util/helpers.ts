export function parseText(message: string) {
	if (message.length > 100) {
		return `${message.substr(0, 100)}...`
	} else {
		return `${message}`

	}
}

export function parseDate(date: any) {
	const newDate =
		new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "short",
			day: "2-digit"
		}).format(new Date(date))
	return newDate
}

export function chooseIMG(name: string) {
	switch (name) {
		case "GW2-Items":
		case "GW2-Items-Server":
		case "SnipSnap-Barber":
		case "SnipSnap-Barber-Server":
		case "FernandoH-G.tech":
		case "Kern-County-Covid":
		default:
			return "https://avatars.githubusercontent.com/u/23583398?s=400&v=4"
	}
}