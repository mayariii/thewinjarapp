import React from 'react';
import { PlusIcon } from '@heroicons/react/solid'

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
  <button
      type="button"
      className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      {...props}
  >
    {label}
    <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
  </button>
  );
};
