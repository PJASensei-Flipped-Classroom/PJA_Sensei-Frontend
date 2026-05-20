import { BookOpen, ArrowRight, ChevronLeft } from 'lucide-react';
import { courses } from '../data/courses';
import { UniversalNav } from './UniversalNav';

interface CoursesPageProps {
  mode?: 'web' | 'plugin';
  onSelectCourse: (courseId: string) => void;
  onBack: () => void;
  onShowExercises: () => void;
  onShowInstructorPanel: () => void;
}

export function CoursesPage({ mode = 'web', onSelectCourse, onBack, onShowExercises, onShowInstructorPanel }: CoursesPageProps) {
  if (mode === 'plugin') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1 hover:bg-accent rounded transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <h1 className="text-lg font-semibold">Kursy</h1>
          </div>
        </div>

        <main className="flex-1 overflow-auto p-4">
          <div className="space-y-3">
            {courses.map((course) => {
              const totalLessons = course.modules.reduce(
                (sum, module) => sum + module.lessons.length,
                0
              );
              const completedLessons = course.modules.reduce(
                (sum, module) => sum + module.lessons.filter(l => l.completed).length,
                0
              );
              const progress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

              const colorMap: Record<string, { bg: string; icon: string; progress: string }> = {
                'python-basics': { bg: 'bg-blue-500/10', icon: 'text-blue-500', progress: 'bg-blue-500' },
                'java-programming': { bg: 'bg-green-500/10', icon: 'text-green-500', progress: 'bg-green-500' },
              };
              const colors = colorMap[course.id] || { bg: 'bg-primary/10', icon: 'text-primary', progress: 'bg-primary' };

              return (
                <button
                  key={course.id}
                  onClick={() => onSelectCourse(course.id)}
                  className="w-full p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all text-left group"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <BookOpen className={colors.icon} size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium mb-0.5 group-hover:text-primary transition-colors">{course.name}</div>
                      <div className="text-xs text-muted-foreground line-clamp-2">{course.description}</div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{totalLessons} lekcji</span>
                    <span>·</span>
                    <span className="px-1.5 py-0.5 bg-muted rounded">{course.language}</span>
                    {progress > 0 && (
                      <>
                        <span>·</span>
                        <span className={colors.icon}>{progress}%</span>
                      </>
                    )}
                  </div>

                  {progress > 0 && (
                    <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full ${colors.progress} transition-all`} style={{ width: `${progress}%` }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <UniversalNav
        title="Kursy"
        showBackButton
        onBack={onBack}
        showMainMenu
        activePage="courses"
        onShowCourses={() => {}}
        onShowExercises={onShowExercises}
        onShowInstructorPanel={onShowInstructorPanel}
      />

      <main className="px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="text-4xl mb-4">Dostępne kursy</h1>
            <p className="text-lg text-muted-foreground">
              Wybierz kurs odpowiedni dla Twojego poziomu i zainteresowań
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const totalLessons = course.modules.reduce(
                (sum, module) => sum + module.lessons.length,
                0
              );
              const completedLessons = course.modules.reduce(
                (sum, module) => sum + module.lessons.filter(l => l.completed).length,
                0
              );

              return (
                <button
                  key={course.id}
                  onClick={() => onSelectCourse(course.id)}
                  className="group relative flex flex-col p-6 rounded-lg border border-border bg-card hover:shadow-lg hover:border-primary/50 transition-all duration-200 text-left"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                    <span className="px-2 py-1 text-xs bg-muted rounded-md">
                      {course.language}
                    </span>
                  </div>

                  <h3 className="mb-2 group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {totalLessons} lekcji
                    </span>
                    {completedLessons > 0 && (
                      <span className="text-primary">
                        {Math.round((completedLessons / totalLessons) * 100)}% ukończono
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight size={20} className="text-primary" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
