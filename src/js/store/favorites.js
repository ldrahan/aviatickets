class Favorites {
	constructor() {
		this.favorites = [];
	}

	addToFavorites(ticket) {
		if (!this.favorites.includes(ticket)) {
			this.favorites.push(ticket);
		}
		console.log(this.favorites);
	}

	getFavorites() {
		return this.favorites;
	}
}

export const favorites = new Favorites();
export default favorites;
