import { MessageSquare, ChevronDown, ClipboardList, ChevronLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Course } from '../data/courses';
import { CourseSelector } from './CourseSelector';
import { UniversalNav } from './UniversalNav';

interface NavigationProps {
  mode?: 'web' | 'plugin';
  currentCourse: Course;
  onToggleChat: () => void;
  onCourseChange: (courseId: string) => void;
  onBackToHome: () => void;
  onShowExercises?: () => void;
  onShowInstructorPanel?: () => void;
}

export function Navigation({ mode = 'web', currentCourse, onToggleChat, onCourseChange, onBackToHome, onShowExercises, onShowInstructorPanel }: NavigationProps) {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
        setIsSelectorOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (mode === 'plugin') {
    return (
      <div className="border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="p-1 hover:bg-accent rounded transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex-1 px-3">
            <div className="text-sm font-medium truncate">{currentCourse.name}</div>
          </div>
          <button
            onClick={onToggleChat}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            title="AI Assistant"
          >
            <MessageSquare size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <UniversalNav
      showBackButton
      onBack={onBackToHome}
      showMainMenu
      activePage="courses"
      onShowCourses={() => {}}
      onShowExercises={onShowExercises}
      onShowInstructorPanel={onShowInstructorPanel}
      middleContent={
        <div className="relative" ref={selectorRef}>
          <button
            onClick={() => setIsSelectorOpen(!isSelectorOpen)}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
          >
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm font-medium">{currentCourse.name}</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
          {isSelectorOpen && (
            <CourseSelector
              currentCourseId={currentCourse.id}
              onSelectCourse={(courseId) => {
                onCourseChange(courseId);
                setIsSelectorOpen(false);
              }}
            />
          )}
        </div>
      }
      rightActions={
        <button
          onClick={onToggleChat}
          className="p-2 rounded-md hover:bg-accent transition-colors"
          title="AI Assistant"
        >
          <MessageSquare size={20} />
        </button>
      }
    />
  );
}
