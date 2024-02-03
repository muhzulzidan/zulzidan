// src/components/ShareButton.tsx

import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import { Facebook, Link, Linkedin, Share, Twitter } from 'lucide-react';

const ShareButton = () => {
    const handleCopyLink = () => {
        // Logic for copying link to clipboard
        navigator.clipboard.writeText(window.location.href);
    };

    const handleShareTwitter = () => {
        // Logic for sharing on Twitter
        window.open(`https://twitter.com/share?url=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    const handleShareFacebook = () => {
        // Logic for sharing on Facebook
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    const handleShareLinkedIn = () => {
        // Logic for sharing on LinkedIn
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className='gap-2 w-fit '>
                    Share 
                    <Share size={20} className='text-stone-50'/> 
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>Share Options</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem className='flex gap-2' onClick={handleCopyLink}> <Link size={15} /> Copy link</DropdownMenuItem>
                <DropdownMenuItem className='flex gap-2' onClick={handleShareTwitter}><Twitter size={15} /> Share on Twitter</DropdownMenuItem>
                <DropdownMenuItem className='flex gap-2' onClick={handleShareFacebook}><Facebook size={15} /> Share on Facebook</DropdownMenuItem>
                <DropdownMenuItem className='flex gap-2' onClick={handleShareLinkedIn}><Linkedin size={15}/> Share on LinkedIn</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ShareButton;
