import { Check, Code2 } from 'lucide-react';
import { courses } from '../data/courses';

interface CourseSelectorProps {
  currentCourseId: string;
  onSelectCourse: (courseId: string) => void;
}

export function CourseSelector({ currentCourseId, onSelectCourse }: CourseSelectorProps) {
  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg overflow-hidden z-50">
      <div className="p-2">
        <div className="px-3 py-2 text-xs font-medium text-muted-foreground">
          Wybierz kurs
        </div>
        {courses.map((course) => {
          const isSelected = course.id === currentCourseId;
          const totalLessons = course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
          const completedLessons = course.modules.reduce(
            (sum, module) => sum + module.lessons.filter(l => l.completed).length,
            0
          );

          return (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course.id)}
              className={`w-full px-3 py-2.5 rounded-md flex items-start gap-3 hover:bg-accent transition-colors ${
                isSelected ? 'bg-accent' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                isSelected ? 'bg-primary' : 'bg-muted'
              }`}>
                <Code2 size={20} className={isSelected ? 'text-primary-foreground' : 'text-muted-foreground'} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">{course.name}</span>
                  {isSelected && <Check size={16} className="text-primary" />}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {course.description}
                </p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-muted-foreground">
                    {course.language}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {completedLessons}/{totalLessons} lekcji
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
