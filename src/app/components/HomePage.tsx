import { ArrowRight, Users, Trophy, Zap, ClipboardList, CheckCircle, Copy, BookOpen, Code } from 'lucide-react';
import { UniversalNav } from './UniversalNav';

interface HomePageProps {
  mode?: 'web' | 'plugin';
  onShowCourses: () => void;
  onShowExercises: () => void;
  onShowInstructorPanel: () => void;
}

export function HomePage({ mode = 'web', onShowCourses, onShowExercises, onShowInstructorPanel }: HomePageProps) {
  if (mode === 'plugin') {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Samurai</h1>
            <button
              onClick={onShowInstructorPanel}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Panel wykładowcy
            </button>
          </div>
        </div>

        <main className="flex-1 overflow-auto">
          <div className="p-4 space-y-6">
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Kursy</h2>
                <button
                  onClick={onShowCourses}
                  className="text-sm text-primary hover:underline"
                >
                  Zobacz wszystkie
                </button>
              </div>
              <div className="space-y-2">
                <button
                  onClick={onShowCourses}
                  className="w-full p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                      <BookOpen className="text-blue-500" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium mb-0.5 group-hover:text-primary transition-colors">Wprowadzenie do Pythona</div>
                      <div className="text-xs text-muted-foreground">12 lekcji · Podstawy</div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
                <button
                  onClick={onShowCourses}
                  className="w-full p-4 rounded-lg border border-border hover:border-primary hover:bg-accent transition-all text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <BookOpen className="text-green-500" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium mb-0.5 group-hover:text-primary transition-colors">Programowanie w Java</div>
                      <div className="text-xs text-muted-foreground">15 lekcji · Średniozaawansowany</div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </button>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Ćwiczenia</h2>
                <button
                  onClick={onShowExercises}
                  className="text-sm text-primary hover:underline"
                >
                  Zobacz wszystkie
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={onShowExercises}
                  className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all text-left"
                >
                  <div className="flex flex-col gap-2">
                    <Code className="text-primary" size={20} />
                    <div>
                      <div className="text-sm font-medium">Python</div>
                      <div className="text-xs text-muted-foreground">5 zadań</div>
                    </div>
                  </div>
                </button>
                <button
                  onClick={onShowExercises}
                  className="p-3 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 transition-all text-left"
                >
                  <div className="flex flex-col gap-2">
                    <Code className="text-primary" size={20} />
                    <div>
                      <div className="text-sm font-medium">Java</div>
                      <div className="text-xs text-muted-foreground">5 zadań</div>
                    </div>
                  </div>
                </button>
              </div>
            </section>

            <section className="pt-4 border-t border-border">
              <div className="p-4 rounded-lg bg-muted/50">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="text-primary-foreground" size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium mb-1">Szybki start</div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Rozpocznij naukę od podstaw lub rozwiąż zadanie praktyczne
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={onShowCourses}
                        className="text-xs px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        Kursy
                      </button>
                      <button
                        onClick={onShowExercises}
                        className="text-xs px-3 py-1.5 rounded-md border border-border hover:bg-accent transition-colors"
                      >
                        Ćwiczenia
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <UniversalNav
        showMainMenu
        activePage="home"
        onShowCourses={onShowCourses}
        onShowExercises={onShowExercises}
        onShowInstructorPanel={onShowInstructorPanel}
      />

      <main>
        <section className="relative px-6 pt-20 pb-16 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              Naucz się programowania
              <span className="block text-primary mt-2">z odwróconą klasą</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Interaktywne kursy programowania z AI asystentem. Ucz się w swoim tempie, praktykuj na prawdziwych projektach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onShowCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Zobacz kursy
                <ArrowRight size={20} />
              </button>
              <button
                onClick={onShowExercises}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-border hover:bg-accent transition-colors"
              >
                <ClipboardList size={20} />
                Przeglądaj ćwiczenia
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">Interaktywna nauka</h3>
                <p className="text-sm text-muted-foreground">
                  Praktyczne przykłady i ćwiczenia w każdej lekcji
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">AI Asystent</h3>
                <p className="text-sm text-muted-foreground">
                  Otrzymuj natychmiastową pomoc i wyjaśnienia
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Trophy className="text-primary" size={24} />
                </div>
                <h3 className="mb-2">Śledź postępy</h3>
                <p className="text-sm text-muted-foreground">
                  Monitoruj swój rozwój i osiągnięcia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl mb-3">Praktyka czyni mistrza</h2>
              <p className="text-muted-foreground">
                Ćwicz programowanie na gotowych zadaniach
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">10</span>
                </div>
                <h3 className="mb-2">Gotowych zadań</h3>
                <p className="text-sm text-muted-foreground">
                  Python i Java dla różnych poziomów
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-600" size={32} />
                </div>
                <h3 className="mb-2">Podgląd kodu</h3>
                <p className="text-sm text-muted-foreground">
                  Zobacz pełny kod każdego zadania
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Copy className="text-orange-600" size={32} />
                </div>
                <h3 className="mb-2">Kopiuj i rozwiązuj</h3>
                <p className="text-sm text-muted-foreground">
                  Skopiuj kod do swojego środowiska
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={onShowExercises}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <ClipboardList size={20} />
                Zobacz wszystkie ćwiczenia
              </button>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
          <p>© 2026 Samurai. Platforma edukacyjna dla odwróconej klasy.</p>
        </div>
      </footer>
    </div>
  );
}
