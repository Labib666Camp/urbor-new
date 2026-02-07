import React from 'react';

const About = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl font-bold text-slate-900 mb-8">This is Urbor</h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
                    A passionate team dedicated to solving one of the most pressing climate challenges of our time.
                </p>

                <img src="/assets/media/team_photo.jpg" alt="Urbor Team" className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl mb-16" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mb-32">
                    {/* Existing Team/Activity Images */}
                    <img src="/assets/media/team_1.jpg" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/team_2.png" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />

                    {/* New Images */}
                    <img src="/assets/media/activities/IMG_1907.JPG" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/activities/IMG_1934.JPG" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/activities/IMG_1916.JPG" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/activities/78ce5696072a4bd1ad9c225c0f77c071.webp" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/activities/IMG_1918.JPG" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <img src="/assets/media/activities/7cb217603173487e99d9a1aeca24f003.webp" alt="Field Activity" className="rounded-2xl shadow-md w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500" />

                    {/* Videos (Placed Last) */}
                    <div className="rounded-2xl overflow-hidden shadow-lg group aspect-square relative grayscale hover:grayscale-0 transition-all duration-500">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/assets/media/activities/fun-1.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg group aspect-square relative grayscale hover:grayscale-0 transition-all duration-500">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/assets/media/activities/fun-2.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg group aspect-square relative grayscale hover:grayscale-0 transition-all duration-500">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/assets/media/activities/fun-3.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="bg-slate-100 rounded-2xl flex items-center justify-center p-8 text-center text-slate-500 font-medium aspect-square">
                        More Memories...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
