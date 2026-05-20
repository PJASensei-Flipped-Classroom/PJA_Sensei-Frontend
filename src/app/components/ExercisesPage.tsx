import { useState } from 'react';
import { BookOpen, CheckCircle, Circle, Filter, ChevronLeft, Code } from 'lucide-react';
import { exercises, getExerciseStats } from '../data/exercises';
import { courses } from '../data/courses';
import { ExerciseViewer } from './ExerciseViewer';
import { UniversalNav } from './UniversalNav';

interface ExercisesPageProps {
  mode?: 'web' | 'plugin';
  onBack: () => void;
  onShowCourses: () => void;
  onShowInstructorPanel: () => void;
}

export function ExercisesPage({ mode = 'web', onBack, onShowCourses, onShowInstructorPanel }: ExercisesPageProps) {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [filterCourse, setFilterCourse] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<'all' | 'submitted' | 'pending'>('all');

  const stats = getExerciseStats();

  const filteredExercises = exercises.filter(ex => {
    const matchesCourse = filterCourse === 'all' || ex.courseId === filterCourse;
    const matchesStatus =
      filterStatus === 'all' ||
      (filterStatus === 'submitted' && ex.submitted) ||
      (filterStatus === 'pending' && !ex.submitted);
    return matchesCourse && matchesStatus;
  });

  if (selectedExercise) {
    return (
      <ExerciseViewer
        mode={mode}
        exerciseId={selectedExercise}
        onBack={() => setSelectedExercise(null)}
        onShowCourses={onShowCourses}
        onShowInstructorPanel={onShowInstructorPanel}
      />
    );
  }

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
            <h1 className="text-lg font-semibold">Ćwiczenia</h1>
          </div>
        </div>

        <div className="px-4 py-3 bg-muted/30 border-b border-border">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-card rounded-lg border border-border">
              <div className="text-lg font-bold text-primary">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Wszystkie</div>
            </div>
            <div className="p-2 bg-card rounded-lg border border-border">
              <div className="text-lg font-bold text-green-600">{stats.submitted}</div>
              <div className="text-xs text-muted-foreground">Oddane</div>
            </div>
            <div className="p-2 bg-card rounded-lg border border-border">
              <div className="text-lg font-bold text-muted-foreground">{stats.pending}</div>
              <div className="text-xs text-muted-foreground">Do oddania</div>
            </div>
          </div>
        </div>

        <div className="px-4 py-3 border-b border-border bg-background">
          <div className="flex gap-2">
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="flex-1 px-3 py-2 rounded-md border border-border bg-background text-sm"
            >
              <option value="all">Wszystkie kursy</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-2 rounded-md border border-border bg-background text-sm"
            >
              <option value="all">Wszystkie</option>
              <option value="submitted">Oddane</option>
              <option value="pending">Do oddania</option>
            </select>
          </div>
        </div>

        <main className="flex-1 overflow-auto p-4">
          {filteredExercises.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground text-sm">
              Brak ćwiczeń spełniających wybrane kryteria.
            </div>
          ) : (
            <div className="space-y-2">
              {filteredExercises.map((exercise) => {
                const course = courses.find(c => c.id === exercise.courseId);

                return (
                  <button
                    key={exercise.id}
                    onClick={() => setSelectedExercise(exercise.id)}
                    className="w-full p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all text-left group"
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        exercise.submitted
                          ? 'bg-green-500/10'
                          : 'bg-muted'
                      }`}>
                        {exercise.submitted ? (
                          <CheckCircle size={16} className="text-green-600" />
                        ) : (
                          <Code size={16} className="text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium mb-1 group-hover:text-primary transition-colors">
                          {exercise.title}
                        </div>
                        <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                          {exercise.instructions}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{course?.name}</span>
                          <span>·</span>
                          <span>{exercise.moduleName}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <UniversalNav
        title="Ćwiczenia"
        showBackButton
        onBack={onBack}
        showMainMenu
        activePage="exercises"
        onShowCourses={onShowCourses}
        onShowExercises={() => {}}
        onShowInstructorPanel={onShowInstructorPanel}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-4">Ćwiczenia programistyczne</h1>
          <p className="text-muted-foreground mb-6">
            Podgląd zadań programistycznych. Kod jest kopiowany do zewnętrznego środowiska do rozwiązania.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-primary mb-1">{stats.total}</div>
              <div className="text-sm text-muted-foreground">Wszystkie zadania</div>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">{stats.submitted}</div>
              <div className="text-sm text-muted-foreground">Oddane</div>
            </div>
            <div className="p-4 bg-card border border-border rounded-lg">
              <div className="text-2xl font-bold text-muted-foreground mb-1">{stats.pending}</div>
              <div className="text-sm text-muted-foreground">Do oddania</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-muted-foreground" />
              <span className="text-sm font-medium">Filtry:</span>
            </div>
            <select
              value={filterCourse}
              onChange={(e) => setFilterCourse(e.target.value)}
              className="px-3 py-1.5 rounded-md border border-border bg-background text-sm"
            >
              <option value="all">Wszystkie kursy</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>{course.name}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-1.5 rounded-md border border-border bg-background text-sm"
            >
              <option value="all">Wszystkie</option>
              <option value="submitted">Oddane</option>
              <option value="pending">Do oddania</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map((exercise) => {
            const course = courses.find(c => c.id === exercise.courseId);

            return (
              <button
                key={exercise.id}
                onClick={() => setSelectedExercise(exercise.id)}
                className="group p-5 bg-card border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  {exercise.submitted ? (
                    <div className="flex items-center gap-2 px-2 py-1 bg-green-50 text-green-700 rounded-md border border-green-200">
                      <CheckCircle size={16} />
                      <span className="text-xs font-medium">Oddane</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-2 py-1 bg-muted text-muted-foreground rounded-md border border-border">
                      <Circle size={16} />
                      <span className="text-xs font-medium">Do oddania</span>
                    </div>
                  )}
                </div>

                <h3 className="mb-2 group-hover:text-primary transition-colors">
                  {exercise.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {exercise.instructions}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{course?.name}</span>
                  <span>{exercise.moduleName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Brak ćwiczeń spełniających wybrane kryteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}
