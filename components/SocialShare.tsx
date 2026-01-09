import React from 'react';
import { Share2, Linkedin, Facebook as FacebookIcon, Twitter, Instagram } from 'lucide-react';

const SocialShare: React.FC = () => {
    // URL to share - update this to the actual production URL when known
    const shareUrl = "https://impactaithon2026.vercel.app/";
    const shareText = "Check out Impact AI Thon 2026! Join us for 24 hours of innovation. #ImpactAIThon #Hackathon";

    return (
        <div className="tooltip-container">
            <div className="button-content">
                <span className="text">Share</span>
                <Share2 className="share-icon" size={20} />
            </div>

            <div className="tooltip-content">
                <div className="social-icons">
                    <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon twitter"
                        aria-label="Share on Twitter"
                    >
                        <Twitter size={20} className="text-gray-800 group-hover:text-white" />
                    </a>
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon facebook"
                        aria-label="Share on Facebook"
                    >
                        <FacebookIcon size={20} className="text-gray-800" />
                    </a>
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon linkedin"
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin size={20} className="text-gray-800" />
                    </a>
                    <a
                        href="https://www.instagram.com/dac.ads.official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon instagram"
                        aria-label="Visit Instagram"
                    >
                        <Instagram size={20} className="text-gray-800" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialShare;
