import React from 'react';

export default function GoogleMap() {
    return (
        <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-teal-500/10 relative">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15531.428741305419!2d74.7214713!3d13.3556012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca3aa0c5ef9c3%3A0xe1c7e997a4a905ef!2sMilagres%20Cross%20Island%2C%20Kurssa%20kuduru%2C%20Harady%2C%20Karnataka%20576114!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="absolute inset-0 border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TAM-BoSa Resort Location"
            ></iframe>
            <div className="absolute top-4 left-4 right-4 bg-white rounded-lg p-4 shadow-xl flex items-start gap-4 z-10 w-[90%] md:w-[80%] max-w-[320px]">
                <div>
                    <h3 className="text-teal-900 font-bold text-lg leading-tight">Island Nest</h3>
                    <p className="text-gray-600 text-xs mt-1">Milagres Cross Island, Kurssa kuduru, Harady, Karnataka 576114</p>
                    <div className="flex items-center gap-1 mt-2">
                        <span className="text-sm font-bold text-gray-800">5.0</span>
                        <span className="text-yellow-500 text-sm">★</span>
                        <span className="text-xs text-blue-600 hover:underline cursor-pointer ml-1">(6) ⓘ</span>
                    </div>
                </div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 ml-auto mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
            </div>
        </div>
    );
}
