export function BackgroundShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <svg className="absolute left-10 top-10 opacity-10" width="120" height="120">
        <circle cx="60" cy="60" r="60" fill="#f43f5e" />
      </svg>
      <svg className="absolute right-20 top-24 opacity-10" width="80" height="80">
        <rect width="80" height="80" fill="#2563eb" />
      </svg>
      <svg className="absolute left-1/2 bottom-20 opacity-10" width="100" height="100">
        <polygon points="50,0 100,100 0,100" fill="#fbbf24" />
      </svg>
      <svg className="absolute right-16 bottom-32 opacity-10" width="70" height="70">
        <polygon points="35,0 70,35 35,70 0,35" fill="#10b981" />
      </svg>
      <svg className="absolute left-1/4 bottom-10 opacity-20" width="40" height="40">
        <circle cx="30" cy="30" r="30" fill="#a21caf" />
      </svg>
    </div>
  );
}
