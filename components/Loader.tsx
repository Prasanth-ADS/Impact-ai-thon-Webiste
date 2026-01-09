import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#050a14] z-50">
            <div className="loader-wrapper scale-[0.4] sm:scale-75 md:scale-100 transition-transform duration-300">
                <span className="loader-letter">I</span>
                <span className="loader-letter">M</span>
                <span className="loader-letter">P</span>
                <span className="loader-letter">A</span>
                <span className="loader-letter">C</span>
                <span className="loader-letter">T</span>
                <span className="loader-letter">-</span>
                <span className="loader-letter">A</span>
                <span className="loader-letter">I</span>
                <span className="loader-letter">-</span>
                <span className="loader-letter">T</span>
                <span className="loader-letter">H</span>
                <span className="loader-letter">O</span>
                <span className="loader-letter">N</span>
                <span className="loader-letter">&nbsp;</span>
                <span className="loader-letter">2</span>
                <span className="loader-letter">0</span>
                <span className="loader-letter">2</span>
                <span className="loader-letter">6</span>
                <div className="loader" />
            </div>
        </div>
    );
};

export default Loader;
