import React from 'react';
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

// Map FontAwesome icon classes to Heroicons
const iconMap: Record<string, React.ComponentType<any>> = {
  'fas fa-plus': PlusIcon,
  'far fa-plus': PlusIcon,
  'fas fa-edit': PencilIcon,
  'far fa-edit': PencilIcon,
  'fas fa-trash-alt': TrashIcon,
  'far fa-trash-alt': TrashIcon,
  'fas fa-trash': TrashIcon,
  'fas fa-eye': EyeIcon,
  'far fa-eye': EyeIcon,
  'far fa-file-excel': ArrowDownTrayIcon,
  'fas fa-file-excel': ArrowDownTrayIcon,
  'fas fa-download': ArrowDownTrayIcon,
  'fas fa-history': ClockIcon,
  'far fa-history': ClockIcon,
  'fas fa-upload': DocumentArrowUpIcon,
  'fas fa-times': XMarkIcon,
  'fas fa-check': CheckIcon,
  'fas fa-exclamation-triangle': ExclamationTriangleIcon,
  'fas fa-info-circle': InformationCircleIcon,
  'fas fa-chevron-left': ChevronLeftIcon,
  'fas fa-chevron-right': ChevronRightIcon,
  'fas fa-chevron-up': ChevronUpIcon,
  'fas fa-chevron-down': ChevronDownIcon,
  'fas fa-search': MagnifyingGlassIcon,
  'fas fa-filter': FunnelIcon,
  'fas fa-cog': AdjustmentsHorizontalIcon,
  'fas fa-cogs': AdjustmentsHorizontalIcon,
};

interface ButtonIconProps {
  loading?: boolean;
  iconClass?: string;
  className?: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ loading, iconClass, className = '' }) => {
  if (loading) {
    return (
      <svg 
        className={`animate-spin h-5 w-5 ${className}`} 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  }

  if (iconClass) {
    const IconComponent = iconMap[iconClass];
    if (IconComponent) {
      return <IconComponent className={`h-5 w-5 ${className}`} />;
    }
    
    // Fallback to FontAwesome icon if not mapped
    return <i className={`${iconClass} ${className}`} />;
  }

  return null;
};

export default ButtonIcon;
