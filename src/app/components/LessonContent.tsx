import { BookOpen, Clock, CheckCircle, ArrowLeft, ArrowRight, ClipboardCheck } from 'lucide-react';
import { getLessonContent } from '../data/lessonContent';
import { getQuizForLesson } from '../data/quizzes';
import { Quiz } from './Quiz';

interface LessonContentProps {
  mode?: 'web' | 'plugin';
  courseId: string;
  lessonId: string;
}

export function LessonContent({ mode = 'web', courseId, lessonId }: LessonContentProps) {
  const lesson = getLessonContent(courseId, lessonId);
  const quiz = getQuizForLesson(lessonId);

  const containerPadding = mode === 'plugin' ? 'px-4 py-4' : 'px-6 py-8';
  const maxWidth = mode === 'plugin' ? 'max-w-3xl' : 'max-w-4xl';

  const headerSize = mode === 'plugin' ? 'text-xl' : 'text-3xl';
  const subHeaderSize = mode === 'plugin' ? 'text-base' : 'text-xl';
  const sectionMargin = mode === 'plugin' ? 'mb-4' : 'mb-8';
  const quizMargin = mode === 'plugin' ? 'mt-6' : 'mt-12';
  const navMargin = mode === 'plugin' ? 'mt-6 pt-4' : 'mt-12 pt-8';

  return (
    <main className="flex-1 overflow-y-auto">
      <div className={`${maxWidth} mx-auto ${containerPadding}`}>
        <div className={sectionMargin}>
          {mode === 'web' && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
              <BookOpen size={16} />
              <span>Podstawy Programowania</span>
            </div>
          )}
          <h1 className={`${headerSize} mb-2`}>{lesson.title}</h1>
          <p className={`text-muted-foreground ${mode === 'plugin' ? 'text-sm mb-2' : 'mb-4'}`}>{lesson.description}</p>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Clock size={mode === 'plugin' ? 14 : 16} className="text-muted-foreground" />
              <span className={mode === 'plugin' ? 'text-xs' : ''}>{lesson.duration}</span>
            </div>
          </div>
        </div>

        <div className={`${sectionMargin} ${mode === 'plugin' ? 'p-3' : 'p-4'} bg-accent rounded-lg`}>
          <h3 className={`${mode === 'plugin' ? 'mb-2 text-sm font-medium' : 'mb-3'}`}>Cele lekcji</h3>
          <ul className={mode === 'plugin' ? 'space-y-1' : 'space-y-2'}>
            {lesson.objectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle size={mode === 'plugin' ? 14 : 18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className={mode === 'plugin' ? 'text-xs' : 'text-sm'}>{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`prose prose-sm max-w-none ${mode === 'plugin' ? 'space-y-3' : 'space-y-6'}`}>
          {lesson.content.map((block, index) => {
            if (block.type === 'heading') {
              return (
                <h2 key={index} className={`${subHeaderSize} ${mode === 'plugin' ? 'mt-4 mb-2' : 'mt-8 mb-4'} first:mt-0`}>
                  {block.content}
                </h2>
              );
            }
            if (block.type === 'text') {
              return (
                <p key={index} className={`text-foreground/90 leading-relaxed ${mode === 'plugin' ? 'text-sm' : ''}`}>
                  {block.content}
                </p>
              );
            }
            if (block.type === 'code') {
              return (
                <div key={index} className={mode === 'plugin' ? 'my-2' : 'my-4'}>
                  <div className={`bg-muted rounded-lg ${mode === 'plugin' ? 'p-3' : 'p-4'} border border-border`}>
                    <pre className={mode === 'plugin' ? 'text-xs overflow-x-auto' : 'text-sm overflow-x-auto'}>
                      <code>{block.content}</code>
                    </pre>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>

        {quiz && (
          <div className={quizMargin}>
            <div className={`flex items-center gap-2 ${mode === 'plugin' ? 'mb-3' : 'mb-4'}`}>
              <ClipboardCheck className="text-primary" size={mode === 'plugin' ? 20 : 24} />
              <h2 className={mode === 'plugin' ? 'text-lg' : 'text-2xl'}>Sprawdź swoją wiedzę</h2>
            </div>
            <Quiz quiz={quiz} />
          </div>
        )}

        <div className={`${navMargin} border-t border-border flex items-center justify-between`}>
          <button className={`flex items-center gap-2 ${mode === 'plugin' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-md hover:bg-accent transition-colors`}>
            <ArrowLeft size={mode === 'plugin' ? 16 : 18} />
            {mode === 'plugin' ? 'Poprzednia' : 'Poprzednia lekcja'}
          </button>
          <button className={`flex items-center gap-2 ${mode === 'plugin' ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors`}>
            {mode === 'plugin' ? 'Następna' : 'Następna lekcja'}
            <ArrowRight size={mode === 'plugin' ? 16 : 18} />
          </button>
        </div>
      </div>
    </main>
  );
}
