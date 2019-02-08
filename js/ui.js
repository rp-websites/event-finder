class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCategories();
    }
	//Push Events List to Select
    printCategories() {
        const categoriesList = eventbrite.getCategories()
            .then(data => {
                const allCategories = data.categories.categories;
                const select = document.getElementById('category');
                allCategories.forEach(category => {
                    const option = document.createElement('option');
                    option.innerText = category.name;
                    option.value = category.id;
                    select.appendChild(option)
                });
            })
            .catch(error => {
                console.log(error)
            })
    }
	//Validate fields
    printMessage(message, classNames) {
        const errorTag = document.createElement('p');
        errorTag.innerText = message;
        errorTag.className = classNames;
        document.getElementById('search-events').appendChild(errorTag);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 2000)
    }
	//Print events details as a result
    eventItems(events) {
        const dataEvents = events.events.events;
        const banner = document.getElementById('result');
        let html = '';
        dataEvents.forEach(event => {
            html += `
                 <div class="col-md-4 col-sm-6 mt-4">
                    <div class="card">
                         <a href="${event.url}">
                            <img src="${event.logo.url}" class="img-fluid mb-2"/>
                         </a>
                         <div class="card-body">
                            <div class="card-text">
                                <h3 class="card-title text-center"><a href="${event.url}">${event.name.text}</a></h3>
                                <p class="lead text-info">Event Information:</p>
                                <p>${event.description.text.substring(0, 200)}...</p>
                                <span class="badge badge-primary">Currency: ${event.currency}</span>
                                <span class="badge badge-secondary">Date & Time: ${event.start.local}</span>
                                <a href="${event.url}" target="_blank" class="btn btn-primary btn-block mt-4">Get Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>`
            banner.innerHTML = html;
        });
    }
}
