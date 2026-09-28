const Icon = ({ children, className }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    {children}
  </svg>
)

export const SearchIcon = () => (
  <Icon><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4.5 4.5" /></Icon>
)

export const CloseIcon = () => (
  <Icon><path d="m6 6 12 12M6 18 18 6" /></Icon>
)

export const ChevronIcon = ({ className }) => (
  <Icon className={className}><path d="m6 9 6 6 6-6" /></Icon>
)

export const ExternalLinkIcon = () => (
  <Icon><path d="M7 17 17 7M7 7h10v10" /></Icon>
)

export const ArrowLeftIcon = () => (
  <Icon><path d="M19 12H5m6-6-6 6 6 6" /></Icon>
)

export const BranchIcon = () => (
  <Icon>
    <rect x="9" y="3" width="6" height="5" rx="1" />
    <path d="M12 8v5M5 17v-4h14v4" />
    <rect x="2" y="17" width="6" height="4" rx="1" />
    <rect x="16" y="17" width="6" height="4" rx="1" />
  </Icon>
)
