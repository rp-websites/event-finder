const eventbrite = new EventBrite();
const ui = new UI();

//Variables


//Event Listeners
document.getElementById('submitBtn').addEventListener('click', searchEvents);

//Functions
function searchEvents(e) {
    e.preventDefault();

    const eventName = document.getElementById('event-name').value;
    const eventCat = document.getElementById('category').value;

    if (eventName === '') {
        ui.printMessage('Fields are mandatory', 'alert alert-danger mt-4 text-center');
    } else {
        eventbrite.queryAPI(eventName, eventCat)
            .then(events => {
                ui.eventItems(events);
            })


    }


}
