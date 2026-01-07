'use client'

import { Check } from 'lucide-react'

interface Task {
  id: string
  label: string
}

interface CheckboxTaskProps {
  task: Task
  checked: boolean
  onToggle: () => void
}

export default function CheckboxTask({ task, checked, onToggle }: CheckboxTaskProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onToggle}
          className="w-5 h-5 border-2 border-gray-300 rounded cursor-pointer appearance-none checked:bg-primary checked:border-primary transition-all"
        />
        {checked && (
          <Check size={14} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none" />
        )}
      </div>
      <span className={`flex-1 ${checked ? 'line-through text-gray-500' : 'text-gray-700 dark:text-gray-300'} group-hover:text-primary transition-colors`}>
        {task.label}
      </span>
    </label>
  )
}

