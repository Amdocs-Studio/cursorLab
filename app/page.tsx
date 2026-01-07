'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, ChevronLeft, Copy, Check, Menu, X } from 'lucide-react'
import { labSections } from './data/lab-content'
import CodeBlock from './components/CodeBlock'
import CheckboxTask from './components/CheckboxTask'

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0)
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({})
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lab-progress')
    if (saved) {
      const data = JSON.parse(saved)
      setCompletedTasks(data.completedTasks || {})
      setCurrentSection(data.currentSection || 0)
    }
  }, [])

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('lab-progress', JSON.stringify({
      completedTasks,
      currentSection
    }))
  }, [completedTasks, currentSection])

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }))
  }

  const section = labSections[currentSection]
  const progress = (currentSection / (labSections.length - 1)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Cursor Workshop
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hands-On Lab Guide</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Section {currentSection + 1} of {labSections.length}
              </div>
              <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:sticky top-16 left-0 w-80 h-[calc(100vh-4rem)] bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 overflow-y-auto transition-transform duration-300 z-40`}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Lab Sections</h2>
            <nav className="space-y-2">
              {labSections.map((sec, idx) => {
                const sectionTasks = sec.tasks?.length || 0
                const completedCount = sec.tasks?.filter(t => completedTasks[t.id]).length || 0
                const isCompleted = sectionTasks > 0 && completedCount === sectionTasks

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentSection(idx)
                      setSidebarOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      currentSection === idx
                        ? 'bg-primary text-white shadow-lg'
                        : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium">{sec.title}</div>
                        <div className={`text-xs mt-1 ${
                          currentSection === idx ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {sec.duration}
                        </div>
                      </div>
                      {isCompleted && (
                        <Check size={20} className="text-green-500" />
                      )}
                    </div>
                    {sectionTasks > 0 && (
                      <div className="mt-2 text-xs">
                        <div className="flex items-center justify-between mb-1">
                          <span className={currentSection === idx ? 'text-white/80' : 'text-gray-500'}>
                            {completedCount}/{sectionTasks} tasks
                          </span>
                        </div>
                        <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500"
                            style={{ width: `${(completedCount / sectionTasks) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto">
          <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-medium">Section {currentSection + 1}</span>
                <span>•</span>
                <span>{section.duration}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              {section.subtitle && (
                <p className="text-xl text-gray-600 dark:text-gray-400">{section.subtitle}</p>
              )}
            </div>

            {/* Tasks Checklist */}
            {section.tasks && section.tasks.length > 0 && (
              <div className="mb-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Check size={20} />
                  Your Tasks
                </h3>
                <div className="space-y-2">
                  {section.tasks.map(task => (
                    <CheckboxTask
                      key={task.id}
                      task={task}
                      checked={completedTasks[task.id] || false}
                      onToggle={() => toggleTask(task.id)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Content Sections */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {section.content.map((content, idx) => (
                <div key={idx} className="mb-8">
                  {content.type === 'text' && content.value && (
                    <div className="markdown" dangerouslySetInnerHTML={{ __html: content.value }} />
                  )}
                  
                  {content.type === 'list' && (
                    <ul className="space-y-2 list-disc list-inside">
                      {content.items?.map((item, i) => (
                        <li key={i} className="leading-7" dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}

                  {content.type === 'code' && content.value && (
                    <CodeBlock
                      code={content.value}
                      language={content.language || 'bash'}
                      title={content.title}
                    />
                  )}

                  {content.type === 'callout' && content.value && (
                    <div className={`p-4 rounded-lg border-l-4 my-4 ${
                      content.variant === 'warning'
                        ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                        : content.variant === 'success'
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                        : 'bg-blue-50 dark:bg-blue-900/20 border-blue-500'
                    }`}>
                      <p className="font-medium mb-1">{content.title}</p>
                      <p className="text-sm">{content.value}</p>
                    </div>
                  )}

                  {content.type === 'steps' && (
                    <div className="space-y-4">
                      {content.steps?.map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{step.title}</h4>
                            {step.description && <p className="text-gray-600 dark:text-gray-400">{step.description}</p>}
                            {step.code && (
                              <CodeBlock
                                code={step.code}
                                language={step.language || 'bash'}
                              />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <ChevronLeft size={20} />
                Previous
              </button>
              
              <button
                onClick={() => setCurrentSection(Math.min(labSections.length - 1, currentSection + 1))}
                disabled={currentSection === labSections.length - 1}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
              >
                Next
                <ChevronRight size={20} />
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  )
}

