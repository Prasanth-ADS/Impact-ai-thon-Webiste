import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const PosterModal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if the modal has been shown in this session
        const hasShownModal = sessionStorage.getItem('hasShownPosterModal');

        if (!hasShownModal) {
            // Small delay to ensure smoother entrance after site load
            const timer = setTimeout(() => {
                setIsOpen(true);
                sessionStorage.setItem('hasShownPosterModal', 'true');
            }, 500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 300); // Match animation duration
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    // Close on Esc key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
        };
        if (isOpen) window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
        >
            <div
                className={`magic-card relative w-[80vw] max-w-[350px] aspect-[3/4] p-[3px] shadow-2xl overflow-hidden transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100 animate-in fade-in zoom-in-95'}`}
            >
                {/* Content Container */}
                <div className="relative z-10 w-full h-full bg-[#0a1122] rounded-[17px] overflow-hidden group">
                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-3 right-3 z-30 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-colors backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="Close modal"
                    >
                        <X size={20} />
                    </button>

                    {/* Poster Image - using object-cover to 'crop' */}
                    <div className="w-full h-full">
                        <img
                            src="/Announcement.jpeg"
                            alt="Impact AI Thon Poster"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                handleClose();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PosterModal;
