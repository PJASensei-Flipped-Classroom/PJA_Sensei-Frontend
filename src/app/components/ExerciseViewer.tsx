import { ArrowLeft, CheckCircle, Circle, Copy, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { getExerciseById } from '../data/exercises';
import { courses } from '../data/courses';
import { UniversalNav } from './UniversalNav';

interface ExerciseViewerProps {
  mode?: 'web' | 'plugin';
  exerciseId: string;
  onBack: () => void;
  onShowCourses?: () => void;
  onShowInstructorPanel?: () => void;
}

export function ExerciseViewer({ mode = 'web', exerciseId, onBack, onShowCourses, onShowInstructorPanel }: ExerciseViewerProps) {
  const [copied, setCopied] = useState(false);
  const exercise = getExerciseById(exerciseId);

  if (!exercise) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Nie znaleziono ćwiczenia.</p>
          <button
            onClick={onBack}
            className="mt-4 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Powrót
          </button>
        </div>
      </div>
    );
  }

  const course = courses.find(c => c.id === exercise.courseId);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(exercise.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (mode === 'plugin') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onBack}
              className="p-1 hover:bg-accent rounded transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            {exercise.submitted ? (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded border border-green-200">
                <CheckCircle size={14} />
                <span className="text-xs font-medium">Oddane</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 px-2 py-1 bg-muted text-muted-foreground rounded border border-border">
                <Circle size={14} />
                <span className="text-xs font-medium">Do oddania</span>
              </div>
            )}
          </div>
          <div className="text-xs text-muted-foreground mb-1">
            {course?.name} / {exercise.moduleName}
          </div>
          <h1 className="text-lg font-semibold">{exercise.title}</h1>
        </div>

        <main className="flex-1 overflow-auto p-4 space-y-4">
          <div className="p-4 bg-accent/50 rounded-lg border border-border">
            <div className="text-sm font-medium mb-2">Polecenie</div>
            <p className="text-sm text-foreground/90 leading-relaxed">{exercise.instructions}</p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium">Kod do rozwiązania</div>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-border hover:bg-accent transition-colors text-sm"
              >
                <Copy size={14} />
                <span>{copied ? 'Skopiowano!' : 'Kopiuj'}</span>
              </button>
            </div>
            <div className="bg-muted rounded-lg p-3 border border-border overflow-x-auto">
              <pre className="text-xs">
                <code className="text-foreground">{exercise.code}</code>
              </pre>
            </div>
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="text-sm font-medium mb-2">💡 Informacja</div>
            <ul className="space-y-1.5 text-xs text-foreground/90">
              <li>• Skopiuj kod do swojego środowiska</li>
              <li>• Rozwiąż zadanie zgodnie z poleceniem</li>
              <li>• Prześlij rozwiązanie przez platformę</li>
            </ul>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <UniversalNav
          title="Ćwiczenia"
          showBackButton
          onBack={onBack}
          showMainMenu
          activePage="exercises"
          onShowCourses={onShowCourses}
          onShowExercises={() => {}}
          onShowInstructorPanel={onShowInstructorPanel}
          rightActions={
            exercise.submitted ? (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-md border border-green-200">
                <CheckCircle size={18} />
                <span className="text-sm font-medium">Oddane</span>
              </div>
            ) : (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-muted text-muted-foreground rounded-md border border-border">
                <Circle size={18} />
                <span className="text-sm font-medium">Do oddania</span>
              </div>
            )
          }
        />
      </div>

      <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
            <span>{course?.name}</span>
            <span>/</span>
            <span>{exercise.moduleName}</span>
          </div>
          <h1 className="text-3xl mb-4">{exercise.title}</h1>
        </div>

        <div className="mb-8 p-6 bg-accent/50 rounded-lg border border-border">
          <h2 className="text-xl mb-3">Polecenie</h2>
          <p className="text-foreground/90 leading-relaxed">{exercise.instructions}</p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">Kod do rozwiązania</h2>
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
            >
              <Copy size={16} />
              <span className="text-sm">{copied ? 'Skopiowano!' : 'Kopiuj kod'}</span>
            </button>
          </div>
          <div className="bg-muted rounded-lg p-4 border border-border">
            <pre className="text-sm overflow-x-auto">
              <code className="text-foreground">{exercise.code}</code>
            </pre>
          </div>
        </div>

        <div className="p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="font-medium mb-3">💡 Informacja</h3>
          <ul className="space-y-2 text-sm text-foreground/90">
            <li>• To jest <strong>tylko podgląd</strong> ćwiczenia z bazy danych</li>
            <li>• Skopiuj kod do swojego środowiska programistycznego (VS Code, PyCharm, IntelliJ)</li>
            <li>• Rozwiąż zadanie zgodnie z poleceniem</li>
            <li>• Prześlij rozwiązanie przez platformę zewnętrzną do sprawdzenia</li>
            <li>• Status "Oddane" pojawi się po zatwierdzeniu przez prowadzącego</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
