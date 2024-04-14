const EventsSection = ({ events }) => (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {events.map((event, index) => (
                <div key={index} className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={event.image} alt={event.name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{event.name}</div>
                        <p className="text-gray-700 text-base">{event.description}</p>
                        <p className="text-gray-600 text-sm">Date: {event.date}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
export default EventsSection;