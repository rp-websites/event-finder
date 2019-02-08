class EventBrite {
    constructor() {
        this.auth_token = '55ZGFOLZKUZFKSWRGQS6';
        this.order_by = 'date'
    }
	//Get all events List
    async getCategories() {
        const url = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.auth_token}`);
        const categories = await url.json();
        return {
            categories
        }
    }
	//Get events details
    async queryAPI(eventName, categories) {
        const url = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${eventName}&sort_by=${this.order_by}&categories=${categories}&token=${this.auth_token}`);
        const events = await url.json();
        return{
            events
        }
    }
}