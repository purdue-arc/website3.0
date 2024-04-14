const TestimonialsSection = ({ testimonials }) => (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">What People Say About Us</h2>
        <div className="flex flex-wrap justify-center mt-6">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <div className="h-full bg-white rounded-lg shadow p-6">
                        <p className="text-gray-600 text-base">{testimonial.quote}</p>
                        <div className="mt-4">
                            <div className="font-bold text-gray-800">{testimonial.author}</div>
                            <div className="text-gray-600">{testimonial.position}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
export default TestimonialsSection;