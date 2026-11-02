import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'colored';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'colored',
  className = '',
}) => {
  // Height configurations corresponding to standard nav and hero ratios
  const heightClass =
    size === 'sm' ? 'h-11 sm:h-12' : size === 'lg' ? 'h-16 sm:h-20 md:h-22' : 'h-13 sm:h-16';

  return (
    <div className={`inline-flex items-center ${className}`}>
      {variant === 'light' ? (
        // For dark backgrounds (such as footer or dark bars), wrap in a clean white container to preserve brand colors
        <div className="bg-white rounded-xl px-2 py-1 shadow-sm inline-flex items-center justify-center">
          <img
            src="/assets/futurejobs-logo.png"
            alt="Future Jobs - Skilled People | Stronger Businesses"
            className={`${heightClass} w-auto object-contain`}
          />
        </div>
      ) : (
        <img
          src="/assets/futurejobs-logo.png"
          alt="Future Jobs - Skilled People | Stronger Businesses"
          className={`${heightClass} w-auto object-contain`}
        />
      )}
    </div>
  );
};
