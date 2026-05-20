import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { CoursesPage } from './components/CoursesPage';
import { ExercisesPage } from './components/ExercisesPage';
import { InstructorPanel } from './components/InstructorPanel';
import { Navigation } from './components/Navigation';
import { Sidebar } from './components/Sidebar';
import { LessonContent } from './components/LessonContent';
import { AIChat } from './components/AIChat';
import { courses } from './data/courses';
import { Monitor, Smartphone } from 'lucide-react';

type ViewMode = 'home' | 'courses' | 'course' | 'exercises' | 'instructor';
type AppMode = 'web' | 'plugin';

export default function App() {
  const [mode, setMode] = useState<AppMode>('web');
  const [viewMode, setViewMode] = useState<ViewMode>('home');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState('intro-programming');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSelectCourse = (courseId: string) => {
    setSelectedCourse(courseId);
    setViewMode('course');
    const newCourse = courses.find(c => c.id === courseId);
    if (newCourse && newCourse.modules.length > 0 && newCourse.modules[0].lessons.length > 0) {
      setSelectedLesson(newCourse.modules[0].lessons[0].id);
    }
  };

  const handleShowCourses = () => {
    setViewMode('courses');
    setIsChatOpen(false);
  };

  const handleShowExercises = () => {
    setViewMode('exercises');
    setIsChatOpen(false);
  };

  const handleShowInstructorPanel = () => {
    setViewMode('instructor');
    setIsChatOpen(false);
  };

  const handleBackToHome = () => {
    setViewMode('home');
    setSelectedCourse(null);
    setIsChatOpen(false);
  };

  const ModeToggle = () => (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-card border border-border rounded-md p-1 shadow-lg">
      <button
        onClick={() => setMode('web')}
        className={`p-2 rounded transition-colors ${mode === 'web' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
        title="Web mode"
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => setMode('plugin')}
        className={`p-2 rounded transition-colors ${mode === 'plugin' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
        title="Plugin mode"
      >
        <Smartphone size={16} />
      </button>
    </div>
  );

  if (viewMode === 'instructor') {
    return (
      <>
        <ModeToggle />
        <InstructorPanel
          onBack={handleBackToHome}
          onShowCourses={handleShowCourses}
          onShowExercises={handleShowExercises}
        />
      </>
    );
  }

  if (viewMode === 'exercises') {
    return (
      <>
        <ModeToggle />
        <ExercisesPage
          mode={mode}
          onBack={handleBackToHome}
          onShowCourses={handleShowCourses}
          onShowInstructorPanel={handleShowInstructorPanel}
        />
      </>
    );
  }

  if (viewMode === 'courses') {
    return (
      <>
        <ModeToggle />
        <CoursesPage
          mode={mode}
          onSelectCourse={handleSelectCourse}
          onBack={handleBackToHome}
          onShowExercises={handleShowExercises}
          onShowInstructorPanel={handleShowInstructorPanel}
        />
      </>
    );
  }

  if (viewMode === 'home') {
    return (
      <>
        <ModeToggle />
        <HomePage
          mode={mode}
          onShowCourses={handleShowCourses}
          onShowExercises={handleShowExercises}
          onShowInstructorPanel={handleShowInstructorPanel}
        />
      </>
    );
  }

  const currentCourse = courses.find(c => c.id === selectedCourse) || courses[0];

  const handleCourseChange = (courseId: string) => {
    setSelectedCourse(courseId);
    const newCourse = courses.find(c => c.id === courseId);
    if (newCourse && newCourse.modules.length > 0 && newCourse.modules[0].lessons.length > 0) {
      setSelectedLesson(newCourse.modules[0].lessons[0].id);
    }
  };

  return (
    <>
      <ModeToggle />
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation
          mode={mode}
          currentCourse={currentCourse}
          onToggleChat={() => setIsChatOpen(!isChatOpen)}
          onCourseChange={handleCourseChange}
          onBackToHome={handleBackToHome}
          onShowExercises={handleShowExercises}
          onShowInstructorPanel={handleShowInstructorPanel}
        />
        <div className="flex-1 flex overflow-hidden">
          <Sidebar
            mode={mode}
            course={currentCourse}
            selectedLesson={selectedLesson}
            onSelectLesson={setSelectedLesson}
          />
          <LessonContent
            mode={mode}
            courseId={selectedCourse}
            lessonId={selectedLesson}
          />
          <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
      </div>
    </>
  );
}