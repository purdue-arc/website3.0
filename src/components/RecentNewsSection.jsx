const RecentNewsSection = ({ news }) => (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {news.map((item, index) => (
                <div key={index} className="rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={item.image} alt={item.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{item.title}</div>
                        <p className="text-gray-700 text-base">
                            {item.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
export default RecentNewsSection
