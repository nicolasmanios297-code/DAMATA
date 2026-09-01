import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom' | number;
  className?: string;
  showText?: boolean;
  withGlow?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  withGlow = false,
}) => {
  let dimensionStyle: React.CSSProperties = {};
  let sizeClass = '';

  if (typeof size === 'number') {
    dimensionStyle = { width: `${size}px`, height: `${size}px` };
  } else {
    const sizeMap: Record<string, string> = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-24 h-24',
      xl: 'w-36 h-36',
      custom: '',
    };
    sizeClass = sizeMap[size] || 'w-12 h-12';
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Badge */}
      <div
        style={dimensionStyle}
        className={`relative rounded-full flex-shrink-0 transition-transform duration-300 ${sizeClass} ${
          withGlow ? 'shadow-[0_0_25px_rgba(242,125,38,0.45)]' : 'shadow-lg'
        }`}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Outer gold rim gradient */}
            <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DF9E48" />
              <stop offset="35%" stopColor="#FFF3C4" />
              <stop offset="65%" stopColor="#C47E20" />
              <stop offset="100%" stopColor="#874D08" />
            </linearGradient>

            {/* Red text gradient */}
            <linearGradient id="damataRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F53629" />
              <stop offset="45%" stopColor="#DE2317" />
              <stop offset="100%" stopColor="#9C0D05" />
            </linearGradient>

            {/* Orange pizza 3d gradient */}
            <linearGradient id="pizzaOrange" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FF9800" />
              <stop offset="60%" stopColor="#F57C00" />
              <stop offset="100%" stopColor="#E65100" />
            </linearGradient>

            {/* Green gourmet gradient */}
            <linearGradient id="gourmetGreen" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B5E20" />
              <stop offset="50%" stopColor="#2E7D32" />
              <stop offset="100%" stopColor="#4CAF50" />
            </linearGradient>

            {/* Circular text path */}
            <path
              id="topTextPath"
              d="M 50,200 A 150,150 0 1,1 350,200"
              fill="none"
            />
            <path
              id="bottomTextPath"
              d="M 350,200 A 150,150 0 0,1 50,200"
              fill="none"
            />
          </defs>

          {/* Outer Gold Textured Ring */}
          <circle cx="200" cy="200" r="195" fill="url(#goldRim)" stroke="#5c3405" strokeWidth="2" />
          
          {/* Inner Clean White Badge Canvas */}
          <circle cx="200" cy="200" r="184" fill="#FFFFFF" />

          {/* Top Circular Text: PASTAS • LASAGNA • ENSALADAS */}
          <text
            fill="#D32F2F"
            fontFamily="'Cinzel', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="6"
          >
            <textPath href="#topTextPath" startOffset="50%" textAnchor="middle">
              PASTAS  ★  LASAGNA  ★  ENSALADAS
            </textPath>
          </text>

          {/* Left Circular Text: DOMICILIO */}
          <path id="leftArc" d="M 45,200 A 155,155 0 0,0 120,325" fill="none" />
          <text
            fill="#E91E63"
            fontFamily="'Cinzel', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="21"
            letterSpacing="5"
          >
            <textPath href="#leftArc" startOffset="50%" textAnchor="middle">
              DOMICILIO
            </textPath>
          </text>

          {/* Right Circular Text: 312 884 76 20 */}
          <path id="rightArc" d="M 280,325 A 155,155 0 0,0 355,200" fill="none" />
          <text
            fill="#111111"
            fontFamily="'Cinzel', 'Impact', sans-serif"
            fontWeight="900"
            fontSize="22"
            letterSpacing="4"
          >
            <textPath href="#rightArc" startOffset="50%" textAnchor="middle">
              312 884 76 20
            </textPath>
          </text>

          {/* Chef Illustration Artwork */}
          <g transform="translate(110, 35)">
            {/* Chef Toque (White Hat) */}
            <path
              d="M 50,60 C 25,45 20,20 45,5 C 65,-10 115,-10 135,5 C 160,20 155,45 130,60 Z"
              fill="#FFFFFF"
              stroke="#D32F2F"
              strokeWidth="2.5"
            />
            {/* Hat pleats */}
            <path d="M 65,45 Q 85,20 90,8" stroke="#ECEFF1" strokeWidth="2" />
            <path d="M 90,45 Q 95,15 100,5" stroke="#ECEFF1" strokeWidth="2" />
            <path d="M 115,45 Q 105,20 100,8" stroke="#ECEFF1" strokeWidth="2" />

            {/* Hat Band */}
            <rect x="52" y="55" width="76" height="20" rx="3" fill="#FFFFFF" stroke="#D32F2F" strokeWidth="2.5" />

            {/* Chef Face & Skin */}
            <ellipse cx="90" cy="95" rx="36" ry="38" fill="#C6865A" />
            {/* Ears */}
            <circle cx="53" cy="95" r="7" fill="#B2744B" />
            <circle cx="127" cy="95" r="7" fill="#B2744B" />

            {/* Eyes */}
            <ellipse cx="76" cy="88" rx="6" ry="7" fill="#212121" />
            <ellipse cx="104" cy="88" rx="6" ry="7" fill="#212121" />
            <circle cx="74" cy="86" r="2" fill="#FFFFFF" />
            <circle cx="102" cy="86" r="2" fill="#FFFFFF" />
            
            {/* Eyebrows */}
            <path d="M 68,79 Q 76,75 84,79" stroke="#1F130B" strokeWidth="3" strokeLinecap="round" />
            <path d="M 96,79 Q 104,75 112,79" stroke="#1F130B" strokeWidth="3" strokeLinecap="round" />

            {/* Big Classic Chef Mustache */}
            <path
              d="M 90,105 C 80,95 62,98 62,110 C 62,116 75,115 90,108 C 105,115 118,116 118,110 C 118,98 100,95 90,105 Z"
              fill="#1F130B"
            />

            {/* Chef White Jacket & Collar */}
            <path
              d="M 40,126 L 140,126 L 155,160 L 25,160 Z"
              fill="#F8F9FA"
              stroke="#D32F2F"
              strokeWidth="2.5"
            />
            {/* Red neckerchief accent */}
            <polygon points="82,126 98,126 90,138" fill="#D32F2F" />
            <circle cx="72" cy="145" r="3" fill="#D32F2F" />
            <circle cx="108" cy="145" r="3" fill="#D32F2F" />
          </g>

          {/* Fresh Ingredients Cluster (Tomatoes, Corn, Herbs) */}
          <g transform="translate(125, 200)">
            {/* Red Tomatoes */}
            <circle cx="20" cy="22" r="14" fill="#E53935" stroke="#B71C1C" strokeWidth="1.5" />
            <circle cx="36" cy="25" r="12" fill="#D32F2F" stroke="#9A0007" strokeWidth="1.5" />
            {/* Tomato leaf */}
            <path d="M 20,9 Q 22,14 26,10 Q 20,7 20,9" fill="#2E7D32" />
            <path d="M 36,14 Q 38,18 42,15 Q 36,12 36,14" fill="#2E7D32" />

            {/* Golden Corn */}
            <path
              d="M 52,32 C 60,18 78,14 92,10 C 88,26 76,38 60,42 Z"
              fill="#FFD54F"
              stroke="#FFA000"
              strokeWidth="1.5"
            />
            {/* Corn leaves */}
            <path d="M 48,35 C 55,30 65,36 68,44 C 58,45 52,42 48,35 Z" fill="#66BB6A" />

            {/* Fresh Green Herb / Basil Sprig */}
            <path
              d="M 95,28 C 115,10 135,16 138,26 C 124,36 108,34 95,28 Z"
              fill="#2E7D32"
              stroke="#1B5E20"
              strokeWidth="1"
            />
          </g>

          {/* MAIN BRAND TITLE 1: DAMATA */}
          <g transform="translate(200, 215)" textAnchor="middle">
            <text
              x="0"
              y="0"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              letterSpacing="2"
              fill="#111111"
              fontWeight="900"
            >
              DAMATA
            </text>
            <text
              x="0"
              y="-2"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              letterSpacing="2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="10"
              fontWeight="900"
            >
              DAMATA
            </text>
            <text
              x="0"
              y="-2"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="68"
              letterSpacing="2"
              fill="url(#damataRed)"
              fontWeight="900"
            >
              DAMATA
            </text>
          </g>

          {/* MAIN BRAND TITLE 2: PIZZA */}
          <g transform="translate(200, 290)" textAnchor="middle">
            <text
              x="0"
              y="0"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="82"
              letterSpacing="3"
              fill="#1A0E05"
              fontWeight="900"
            >
              PIZZA
            </text>
            <text
              x="0"
              y="-3"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="82"
              letterSpacing="3"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="12"
              fontWeight="900"
            >
              PIZZA
            </text>
            <text
              x="0"
              y="-3"
              fontFamily="'Impact', 'Arial Black', sans-serif"
              fontSize="82"
              letterSpacing="3"
              fill="url(#pizzaOrange)"
              fontWeight="900"
            >
              PIZZA
            </text>
          </g>

          {/* Cursive Subtitle: Gourmet */}
          <g transform="translate(200, 342)" textAnchor="middle">
            <text
              x="0"
              y="0"
              fontFamily="'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive"
              fontSize="52"
              fontStyle="italic"
              fontWeight="bold"
              fill="#8B0000"
              stroke="#B71C1C"
              strokeWidth="6"
            >
              Gourmet
            </text>
            <text
              x="0"
              y="-2"
              fontFamily="'Brush Script MT', 'Dancing Script', 'Playfair Display', cursive"
              fontSize="52"
              fontStyle="italic"
              fontWeight="bold"
              fill="url(#gourmetGreen)"
              stroke="#1B5E20"
              strokeWidth="1.5"
            >
              Gourmet
            </text>
          </g>
        </svg>
      </div>

      {/* Brand Text Branding */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-serif italic font-black text-xl sm:text-2xl text-white tracking-wider uppercase leading-none">
              DAMATA
            </span>
            <span className="bg-[#F27D26] text-black font-black text-xs px-2 py-0.5 rounded uppercase tracking-wider font-mono">
              PIZZA
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-[#F27D26] font-semibold tracking-widest uppercase mt-0.5 flex items-center gap-1.5">
            <span>¡Sabor Único!</span>
            <span className="w-1 h-1 rounded-full bg-white/40"></span>
            <span className="text-white/60">Belén Rincón</span>
          </span>
        </div>
      )}
    </div>
  );
};
