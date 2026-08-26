// Reusable decorative SVG doodles

export function StarDoodle({
  size = 20,
  color = '#f4c430',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 L13.5 9 L20 9 L14.5 13.5 L16.5 20.5 L12 16.5 L7.5 20.5 L9.5 13.5 L4 9 L10.5 9 Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeartDoodle({
  size = 18,
  color = '#f9a8c9',
  className = '',
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
    </svg>
  );
}

export function TinyFlower({
  size = 24,
  petalColor = '#f4c430',
  centerColor = '#7c4a1e',
  className = '',
}: {
  size?: number;
  petalColor?: string;
  centerColor?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse
          key={i}
          cx={20 + Math.cos((angle * Math.PI) / 180) * 10}
          cy={20 + Math.sin((angle * Math.PI) / 180) * 10}
          rx="5"
          ry="7"
          fill={petalColor}
          transform={`rotate(${angle}, ${20 + Math.cos((angle * Math.PI) / 180) * 10}, ${20 + Math.sin((angle * Math.PI) / 180) * 10})`}
          opacity="0.9"
        />
      ))}
      {/* Center */}
      <circle cx="20" cy="20" r="6" fill={centerColor} />
      <circle cx="20" cy="20" r="3" fill={petalColor} opacity="0.4" />
    </svg>
  );
}

export function DaisyDoodle({
  size = 28,
  petalColor = '#ffffff',
  centerColor = '#f4c430',
  className = '',
}: {
  size?: number;
  petalColor?: string;
  centerColor?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <ellipse
          key={i}
          cx={20 + Math.cos((angle * Math.PI) / 180) * 11}
          cy={20 + Math.sin((angle * Math.PI) / 180) * 11}
          rx="4"
          ry="6"
          fill={petalColor}
          stroke="#e5e7eb"
          strokeWidth="0.5"
          transform={`rotate(${angle}, ${20 + Math.cos((angle * Math.PI) / 180) * 11}, ${20 + Math.sin((angle * Math.PI) / 180) * 11})`}
        />
      ))}
      <circle cx="20" cy="20" r="7" fill={centerColor} />
    </svg>
  );
}

export function ThreadLine({
  width = 120,
  color = '#7a9e7e',
  className = '',
}: {
  width?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={width}
      height={40}
      viewBox={`0 0 ${width} 40`}
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={`M 0,20 C ${width * 0.2},5 ${width * 0.4},35 ${width * 0.6},15 S ${width * 0.85},30 ${width},20`}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}

export function HandDrawnFrame({
  className = '',
  children,
  color = '#4a2c0a',
}: {
  className?: string;
  children?: React.ReactNode;
  color?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* SVG imperfect border */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M 8,8 C 8,6 195,5 195,8 C 197,8 197,192 195,194 C 194,197 8,196 6,194 C 4,193 5,10 8,8 Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {children}
    </div>
  );
}

export function DotPattern({
  className = '',
  color = '#f4c430',
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width="80"
      height="20"
      viewBox="0 0 80 20"
      className={className}
      aria-hidden="true"
    >
      {[0, 12, 24, 36, 48, 60, 72].map((x) => (
        <circle key={x} cx={x + 4} cy="10" r="2" fill={color} opacity="0.5" />
      ))}
    </svg>
  );
}

export function HandDrawnArrow({
  size = 40,
  color = '#4a2c0a',
  direction = 'down',
  className = '',
}: {
  size?: number;
  color?: string;
  direction?: 'down' | 'right';
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden="true"
      style={direction === 'right' ? { transform: 'rotate(-90deg)' } : {}}
    >
      <path
        d="M 20,4 C 22,10 19,18 20,28"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M 13,22 C 16,26 20,30 20,30 C 20,30 24,26 27,22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
}
