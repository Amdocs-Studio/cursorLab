'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
}

export default function CodeBlock({ code, language = 'bash', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-4 w-full max-w-full">
      {title && (
        <div className="bg-gray-800 text-gray-300 px-4 py-2 text-sm font-medium rounded-t-lg border-b border-gray-700">
          {title}
        </div>
      )}
      <div className="relative w-full max-w-full overflow-hidden">
        <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto max-w-full ${title ? 'rounded-b-lg' : 'rounded-lg'}`}>
          <code className="text-sm font-mono break-all whitespace-pre-wrap md:whitespace-pre md:break-normal">{code}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg opacity-0 group-hover:opacity-100 md:opacity-100 transition-opacity"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <Copy size={18} className="text-gray-400" />
          )}
        </button>
      </div>
    </div>
  )
}


