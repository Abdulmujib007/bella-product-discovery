const BellaIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" className="mx-auto mb-6">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f8fafc" />
        <stop offset="100%" stopColor="#e2e8f0" />
      </linearGradient>
    </defs>
    <circle
      cx="20"
      cy="20"
      r="18"
      fill="url(#iconGradient)"
      stroke="#cbd5e1"
      strokeWidth="1"
    />
    <path
      d="M12 16c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.2-1.8-4-4-4h-8c-2.2 0-4 1.8-4 4z"
      fill="#94a3b8"
      opacity="0.6"
    />
    <circle cx="20" cy="18" r="3" fill="#64748b" />
  </svg>
);
export default BellaIcon;
