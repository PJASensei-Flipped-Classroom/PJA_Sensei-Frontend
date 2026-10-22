import { BookOpen, User, Bell, ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { CognitoLoginButton } from './CognitoLoginButton';

interface UniversalNavProps {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
  middleContent?: ReactNode;
  rightActions?: ReactNode;
  showMainMenu?: boolean;
  activePage?: 'home' | 'courses' | 'exercises' | 'instructor';
  onShowCourses?: () => void;
  onShowExercises?: () => void;
  onShowInstructorPanel?: () => void;
}

export function UniversalNav({
  title = 'Samurai',
  showBackButton = false,
  onBack,
  middleContent,
  rightActions,
  showMainMenu = false,
  activePage,
  onShowCourses,
  onShowExercises,
  onShowInstructorPanel
}: UniversalNavProps) {
  return (
    <nav className="border-b border-border bg-background">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            {showBackButton && onBack && (
              <>
                <button
                  onClick={onBack}
                  className="p-2 rounded-md hover:bg-accent transition-colors"
                  title="Powrót"
                >
                  <ArrowLeft size={20} />
                </button>
                <div className="h-6 w-px bg-border" />
              </>
            )}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen size={20} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-bold">{title}</h1>
            </div>
            {middleContent}
          </div>
          <div className="flex items-center gap-2">
            {showMainMenu && (
              <>
                {onShowCourses && (
                  <button
                    onClick={onShowCourses}
                    className={`text-sm transition-colors hidden sm:block px-3 py-1.5 rounded-md ${
                      activePage === 'courses'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:text-primary'
                    }`}
                  >
                    Kursy
                  </button>
                )}
                {onShowExercises && (
                  <button
                    onClick={onShowExercises}
                    className={`text-sm transition-colors hidden sm:block px-3 py-1.5 rounded-md ${
                      activePage === 'exercises'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:text-primary'
                    }`}
                  >
                    Ćwiczenia
                  </button>
                )}
                {onShowInstructorPanel && (
                  <button
                    onClick={onShowInstructorPanel}
                    className={`text-sm transition-colors hidden sm:block px-3 py-1.5 rounded-md ${
                      activePage === 'instructor'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:text-primary'
                    }`}
                  >
                    Panel Wykładowcy
                  </button>
                )}
                <a
                  href="#o-nas"
                  className="text-sm hover:text-primary transition-colors hidden sm:block px-3 py-1.5"
                >
                  O nas
                </a>
                <CognitoLoginButton />
                <div className="h-6 w-px bg-border hidden sm:block" />
              </>
            )}
            {rightActions}
            <button className="p-2 rounded-md hover:bg-accent transition-colors" title="Powiadomienia">
              <Bell size={20} />
            </button>
            <button className="p-2 rounded-md hover:bg-accent transition-colors" title="Profil">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
