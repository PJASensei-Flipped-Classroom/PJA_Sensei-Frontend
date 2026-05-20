import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, Circle, PlayCircle, ClipboardCheck } from 'lucide-react';
import { Course } from '../data/courses';
import { getQuizForLesson } from '../data/quizzes';

interface SidebarProps {
  mode?: 'web' | 'plugin';
  course: Course;
  selectedLesson: string;
  onSelectLesson: (lessonId: string) => void;
}

export function Sidebar({ mode = 'web', course, selectedLesson, onSelectLesson }: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([course.modules[0]?.id || '']);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const sidebarWidth = mode === 'plugin' ? 'w-64' : 'w-80';
  const padding = mode === 'plugin' ? 'p-3' : 'p-4';
  const spacing = mode === 'plugin' ? 'space-y-1' : 'space-y-2';

  const buttonPadding = mode === 'plugin' ? 'px-3 py-2' : 'px-4 py-3';
  const iconSize = mode === 'plugin' ? 16 : 18;

  return (
    <aside className={`${sidebarWidth} border-r border-border bg-card overflow-y-auto`}>
      <div className={padding}>
        <h2 className={mode === 'plugin' ? 'mb-3 text-sm font-medium' : 'mb-4'}>Plan Kursu</h2>
        <div className={spacing}>
          {course.modules.map((module) => {
            const isExpanded = expandedModules.includes(module.id);
            const completedCount = module.lessons.filter(l => l.completed).length;
            const totalCount = module.lessons.length;

            return (
              <div key={module.id} className="rounded-lg border border-border overflow-hidden">
                <button
                  onClick={() => toggleModule(module.id)}
                  className={`w-full ${buttonPadding} flex items-center justify-between hover:bg-accent transition-colors`}
                >
                  <div className="flex items-center gap-2">
                    {isExpanded ? <ChevronDown size={iconSize} /> : <ChevronRight size={iconSize} />}
                    <span className={`font-medium ${mode === 'plugin' ? 'text-xs' : 'text-sm'}`}>{module.title}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {completedCount}/{totalCount}
                  </span>
                </button>
                {isExpanded && (
                  <div className="border-t border-border bg-background/50">
                    {module.lessons.map((lesson) => {
                      const hasQuiz = !!getQuizForLesson(lesson.id);

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => onSelectLesson(lesson.id)}
                          className={`w-full ${buttonPadding} flex items-center gap-2 hover:bg-accent transition-colors ${
                            selectedLesson === lesson.id ? 'bg-accent' : ''
                          }`}
                        >
                          {lesson.completed ? (
                            <CheckCircle2 size={iconSize} className="text-green-500 flex-shrink-0" />
                          ) : selectedLesson === lesson.id ? (
                            <PlayCircle size={iconSize} className="text-primary flex-shrink-0" />
                          ) : (
                            <Circle size={iconSize} className="text-muted-foreground flex-shrink-0" />
                          )}
                          <div className="flex-1 text-left min-w-0">
                            <div className={`${mode === 'plugin' ? 'text-xs' : 'text-sm'} flex items-center gap-1.5`}>
                              <span className="truncate">{lesson.title}</span>
                              {hasQuiz && (
                                <ClipboardCheck size={mode === 'plugin' ? 12 : 14} className="text-primary flex-shrink-0" title="Zawiera test" />
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">{lesson.duration}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
