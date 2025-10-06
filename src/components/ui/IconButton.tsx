import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import {
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  ArrowDownTrayIcon,
  ClockIcon,
  DocumentArrowUpIcon,
  XMarkIcon,
  CheckIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

// Map of icon names to components
const iconMap = {
  plus: PlusIcon,
  edit: PencilIcon,
  'trash-alt': TrashIcon,
  trash: TrashIcon,
  eye: EyeIcon,
  'file-excel': ArrowDownTrayIcon,
  download: ArrowDownTrayIcon,
  history: ClockIcon,
  upload: DocumentArrowUpIcon,
  close: XMarkIcon,
  check: CheckIcon,
  warning: ExclamationTriangleIcon,
  info: InformationCircleIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
  search: MagnifyingGlassIcon,
  filter: FunnelIcon,
  settings: AdjustmentsHorizontalIcon,
};

interface IconButtonProps {
  icon: keyof typeof iconMap;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'light';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = 'secondary',
  size = 'md',
  loading = false,
  disabled = false,
  tooltip,
  className,
  onClick,
  type = 'button',
}) => {
  const IconComponent = iconMap[icon];
  
  const baseClasses = 'inline-flex items-center justify-center rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
    danger: 'border-transparent text-white bg-danger-600 hover:bg-danger-700 focus:ring-danger-500',
    success: 'border-transparent text-white bg-success-600 hover:bg-success-700 focus:ring-success-500',
    warning: 'border-transparent text-white bg-warning-600 hover:bg-warning-700 focus:ring-warning-500',
    light: 'border-gray-200 text-gray-600 bg-gray-50 hover:bg-gray-100 focus:ring-gray-400',
  };
  
  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  };
  
  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const loadingSpinner = (
    <svg className={clsx('animate-spin', iconSizes[size])} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  return (
    <motion.button
      className={classes}
      disabled={disabled || loading}
      type={type}
      onClick={onClick}
      title={tooltip}
      whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
    >
      {loading ? loadingSpinner : <IconComponent className={iconSizes[size]} />}
    </motion.button>
  );
};

export default IconButton;