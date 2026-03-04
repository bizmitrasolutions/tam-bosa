"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

export function OptimizedImage({ className, alt, ...props }: ImageProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {/* Minimal Premium Skeleton Loader */}
            {isLoading && (
                <div className="absolute inset-0 bg-teal-950/10 animate-pulse z-0 flex items-center justify-center pointer-events-none">
                    {/* Subtle spinner matching TAM-BoSa aesthetics */}
                    <div className="w-6 h-6 rounded-full border border-teal-900/20 border-t-primary animate-spin" />
                </div>
            )}

            <Image
                alt={alt}
                onLoad={() => setIsLoading(false)}
                className={`transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isLoading ? "opacity-0" : "opacity-100"
                    } ${className || ""}`}
                {...props}
            />
        </>
    );
}
