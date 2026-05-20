import { useState } from 'react';
import { BookOpen, Plus, X, Code, Users, FileText, Link, CheckCircle } from 'lucide-react';
import { UniversalNav } from './UniversalNav';

interface Quiz {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

interface NewCourse {
  name: string;
  description: string;
  language: string;
  quizzes: Quiz[];
}

interface Exercise {
  id: string;
  title: string;
  description: string;
  type: 'repository' | 'inline';
  repositoryUrl?: string;
  code?: string;
  assignedGroups: string[];
  language: string;
}

const STUDENT_GROUPS = ['Grupa A', 'Grupa B', 'Grupa C', 'Wszyscy studenci'];

interface InstructorPanelProps {
  onBack: () => void;
  onShowCourses: () => void;
  onShowExercises: () => void;
}

export function InstructorPanel({ onBack, onShowCourses, onShowExercises }: InstructorPanelProps) {
  const [activeTab, setActiveTab] = useState<'courses' | 'exercises'>('courses');
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [showExerciseModal, setShowExerciseModal] = useState(false);
  const [newCourse, setNewCourse] = useState<NewCourse>({
    name: '',
    description: '',
    language: 'Python',
    quizzes: []
  });
  const [newQuiz, setNewQuiz] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });
  const [newExercise, setNewExercise] = useState<Exercise>({
    id: '',
    title: '',
    description: '',
    type: 'inline',
    code: '',
    repositoryUrl: '',
    assignedGroups: [],
    language: 'Python'
  });
  const [courses, setCourses] = useState<NewCourse[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>([]);

  const handleAddQuiz = () => {
    if (newQuiz.question && newQuiz.options.every(opt => opt)) {
      setNewCourse({
        ...newCourse,
        quizzes: [...newCourse.quizzes, { ...newQuiz, id: Date.now().toString() }]
      });
      setNewQuiz({ question: '', options: ['', '', '', ''], correctAnswer: 0 });
    }
  };

  const handleRemoveQuiz = (quizId: string) => {
    setNewCourse({
      ...newCourse,
      quizzes: newCourse.quizzes.filter(q => q.id !== quizId)
    });
  };

  const handleSaveCourse = () => {
    if (newCourse.name && newCourse.description) {
      setCourses([...courses, newCourse]);
      setNewCourse({ name: '', description: '', language: 'Python', quizzes: [] });
      setShowCourseModal(false);
    }
  };

  const handleSaveExercise = () => {
    if (newExercise.title && newExercise.description && newExercise.assignedGroups.length > 0) {
      if (newExercise.type === 'repository' && !newExercise.repositoryUrl) return;
      if (newExercise.type === 'inline' && !newExercise.code) return;

      setExercises([...exercises, { ...newExercise, id: Date.now().toString() }]);
      setNewExercise({
        id: '',
        title: '',
        description: '',
        type: 'inline',
        code: '',
        repositoryUrl: '',
        assignedGroups: [],
        language: 'Python'
      });
      setShowExerciseModal(false);
    }
  };

  const toggleGroup = (group: string) => {
    if (newExercise.assignedGroups.includes(group)) {
      setNewExercise({
        ...newExercise,
        assignedGroups: newExercise.assignedGroups.filter(g => g !== group)
      });
    } else {
      setNewExercise({
        ...newExercise,
        assignedGroups: [...newExercise.assignedGroups, group]
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <UniversalNav
          title="Panel Wykładowcy"
          showBackButton
          onBack={onBack}
          showMainMenu
          activePage="instructor"
          onShowCourses={onShowCourses}
          onShowExercises={onShowExercises}
          onShowInstructorPanel={() => {}}
        />
      </div>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'courses'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <BookOpen size={20} />
              Kursy i Wykłady
            </div>
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'exercises'
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <Code size={20} />
              Ćwiczenia
            </div>
          </button>
        </div>

        {activeTab === 'courses' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Zarządzanie kursami</h2>
              <button
                onClick={() => setShowCourseModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Plus size={20} />
                Dodaj kurs
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen size={24} className="text-primary" />
                    </div>
                    <span className="px-2 py-1 text-xs bg-muted rounded-md">
                      {course.language}
                    </span>
                  </div>
                  <h3 className="mb-2">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <FileText size={16} />
                    {course.quizzes.length} quizów
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'exercises' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl">Zarządzanie ćwiczeniami</h2>
              <button
                onClick={() => setShowExerciseModal(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Plus size={20} />
                Dodaj ćwiczenie
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {exercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="p-6 rounded-lg border border-border bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="mb-2">{exercise.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {exercise.description}
                      </p>
                    </div>
                    <span className="px-2 py-1 text-xs bg-muted rounded-md">
                      {exercise.language}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      {exercise.type === 'repository' ? <Link size={16} /> : <Code size={16} />}
                      {exercise.type === 'repository' ? 'Repository' : 'Inline code'}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users size={16} />
                      {exercise.assignedGroups.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {showCourseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex justify-between items-center sticky top-0 bg-background">
              <h3 className="text-xl">Dodaj nowy kurs</h3>
              <button
                onClick={() => setShowCourseModal(false)}
                className="p-1 hover:bg-accent rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm mb-2">Nazwa kursu</label>
                <input
                  type="text"
                  value={newCourse.name}
                  onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="np. Programowanie I"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Opis</label>
                <textarea
                  value={newCourse.description}
                  onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="Krótki opis kursu"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Język programowania</label>
                <select
                  value={newCourse.language}
                  onChange={(e) => setNewCourse({ ...newCourse, language: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Python</option>
                  <option>Java</option>
                  <option>JavaScript</option>
                  <option>C++</option>
                  <option>Kotlin</option>
                  <option>SQL</option>
                </select>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="mb-4">Quizy</h4>

                <div className="space-y-4 mb-4">
                  <div>
                    <label className="block text-sm mb-2">Pytanie</label>
                    <input
                      type="text"
                      value={newQuiz.question}
                      onChange={(e) => setNewQuiz({ ...newQuiz, question: e.target.value })}
                      className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Treść pytania"
                    />
                  </div>

                  {newQuiz.options.map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="radio"
                        checked={newQuiz.correctAnswer === index}
                        onChange={() => setNewQuiz({ ...newQuiz, correctAnswer: index })}
                        className="w-4 h-4"
                      />
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...newQuiz.options];
                          newOptions[index] = e.target.value;
                          setNewQuiz({ ...newQuiz, options: newOptions });
                        }}
                        className="flex-1 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder={`Opcja ${index + 1}`}
                      />
                    </div>
                  ))}

                  <button
                    onClick={handleAddQuiz}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                  >
                    <Plus size={16} />
                    Dodaj quiz
                  </button>
                </div>

                {newCourse.quizzes.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground mb-2">Dodane quizy:</p>
                    {newCourse.quizzes.map((quiz) => (
                      <div
                        key={quiz.id}
                        className="flex items-start justify-between p-3 rounded-md bg-muted"
                      >
                        <div className="flex-1">
                          <p className="text-sm mb-1">{quiz.question}</p>
                          <p className="text-xs text-muted-foreground">
                            Poprawna odpowiedź: {quiz.options[quiz.correctAnswer]}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveQuiz(quiz.id)}
                          className="p-1 hover:bg-accent rounded-md transition-colors"
                        >
                          <X size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={handleSaveCourse}
                  className="flex-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Zapisz kurs
                </button>
                <button
                  onClick={() => setShowCourseModal(false)}
                  className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  Anuluj
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showExerciseModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border flex justify-between items-center sticky top-0 bg-background">
              <h3 className="text-xl">Dodaj nowe ćwiczenie</h3>
              <button
                onClick={() => setShowExerciseModal(false)}
                className="p-1 hover:bg-accent rounded-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm mb-2">Tytuł ćwiczenia</label>
                <input
                  type="text"
                  value={newExercise.title}
                  onChange={(e) => setNewExercise({ ...newExercise, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="np. Implementacja algorytmu sortowania"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Opis</label>
                <textarea
                  value={newExercise.description}
                  onChange={(e) => setNewExercise({ ...newExercise, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                  placeholder="Opisz zadanie"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Język programowania</label>
                <select
                  value={newExercise.language}
                  onChange={(e) => setNewExercise({ ...newExercise, language: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option>Python</option>
                  <option>Java</option>
                  <option>JavaScript</option>
                  <option>C++</option>
                  <option>Kotlin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-2">Typ ćwiczenia</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setNewExercise({ ...newExercise, type: 'inline' })}
                    className={`flex-1 p-3 rounded-md border transition-colors ${
                      newExercise.type === 'inline'
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <Code size={20} className="mx-auto mb-2" />
                    <p className="text-sm">Inline code</p>
                  </button>
                  <button
                    onClick={() => setNewExercise({ ...newExercise, type: 'repository' })}
                    className={`flex-1 p-3 rounded-md border transition-colors ${
                      newExercise.type === 'repository'
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:bg-accent'
                    }`}
                  >
                    <Link size={20} className="mx-auto mb-2" />
                    <p className="text-sm">Repository URL</p>
                  </button>
                </div>
              </div>

              {newExercise.type === 'repository' ? (
                <div>
                  <label className="block text-sm mb-2">URL repozytorium</label>
                  <input
                    type="url"
                    value={newExercise.repositoryUrl}
                    onChange={(e) => setNewExercise({ ...newExercise, repositoryUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://github.com/..."
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-sm mb-2">Kod ćwiczenia</label>
                  <textarea
                    value={newExercise.code}
                    onChange={(e) => setNewExercise({ ...newExercise, code: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                    rows={8}
                    placeholder="# Wpisz kod ćwiczenia..."
                  />
                </div>
              )}

              <div>
                <label className="block text-sm mb-2">Przypisz do grup</label>
                <div className="grid grid-cols-2 gap-2">
                  {STUDENT_GROUPS.map((group) => (
                    <button
                      key={group}
                      onClick={() => toggleGroup(group)}
                      className={`p-3 rounded-md border transition-colors text-sm ${
                        newExercise.assignedGroups.includes(group)
                          ? 'border-primary bg-primary/10'
                          : 'border-border hover:bg-accent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{group}</span>
                        {newExercise.assignedGroups.includes(group) && (
                          <CheckCircle size={16} className="text-primary" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={handleSaveExercise}
                  className="flex-1 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Zapisz ćwiczenie
                </button>
                <button
                  onClick={() => setShowExerciseModal(false)}
                  className="px-4 py-2 rounded-md border border-border hover:bg-accent transition-colors"
                >
                  Anuluj
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
