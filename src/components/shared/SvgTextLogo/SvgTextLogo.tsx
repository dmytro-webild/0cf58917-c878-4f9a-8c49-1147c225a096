import React from 'react';

interface SvgTextLogoProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string | number;
  letterSpacing?: number;
  className?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  fontSize = 48,
  fontFamily = 'Arial, sans-serif',
  fontWeight = 'bold',
  letterSpacing = 0,
  className = '',
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const width = textLength * charWidth + letterSpacing * (textLength - 1) + 20;
  const height = fontSize + 20;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x={10}
        y={fontSize + 5}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="currentColor"
        dominantBaseline="auto"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;