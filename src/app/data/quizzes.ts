export interface QuizQuestion {
  id: string;
  question: string;
  code?: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Quiz {
  lessonId: string;
  title: string;
  questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
  {
    lessonId: 'control-flow',
    title: 'Test: Instrukcje warunkowe',
    questions: [
      {
        id: 'q1',
        question: 'Co zostanie wypisane na ekranie?',
        code: 'wiek = 17\n\nif wiek >= 18:\n    print("Pełnoletni")\nelse:\n    print("Niepełnoletni")',
        options: ['Pełnoletni', 'Niepełnoletni', 'Błąd', 'Nic'],
        correctAnswer: 1,
        explanation: 'Warunek wiek >= 18 jest fałszywy (17 < 18), więc wykona się blok else.'
      },
      {
        id: 'q2',
        question: 'Która instrukcja jest poprawna?',
        options: [
          'if x = 10:',
          'if x == 10:',
          'if (x = 10):',
          'if x equals 10:'
        ],
        correctAnswer: 1,
        explanation: 'W Pythonie operator porównania to ==, a nie =. Operator = służy do przypisania.'
      },
      {
        id: 'q3',
        question: 'Co zostanie wypisane?',
        code: 'ocena = 75\n\nif ocena >= 90:\n    print("A")\nelif ocena >= 80:\n    print("B")\nelif ocena >= 70:\n    print("C")\nelse:\n    print("D")',
        options: ['A', 'B', 'C', 'D'],
        correctAnswer: 2,
        explanation: 'Ocena 75 spełnia warunek ocena >= 70, więc wypisze "C".'
      },
      {
        id: 'q4',
        question: 'Co zwróci to wyrażenie: True and False?',
        options: ['True', 'False', 'None', 'Błąd'],
        correctAnswer: 1,
        explanation: 'Operator "and" zwraca True tylko gdy oba warunki są prawdziwe. True and False = False.'
      },
      {
        id: 'q5',
        question: 'Co zostanie wypisane?',
        code: 'x = 5\ny = 10\n\nif x > 3 and y < 15:\n    print("OK")\nelse:\n    print("NIE")',
        options: ['OK', 'NIE', 'Błąd', 'True'],
        correctAnswer: 0,
        explanation: 'x > 3 (5 > 3) jest prawdą i y < 15 (10 < 15) jest prawdą, więc całe wyrażenie jest prawdziwe.'
      }
    ]
  },
  {
    lessonId: 'variables',
    title: 'Test: Zmienne i typy danych',
    questions: [
      {
        id: 'q1',
        question: 'Który typ danych jest używany dla wartości 3.14?',
        options: ['int', 'float', 'str', 'bool'],
        correctAnswer: 1,
        explanation: 'Liczby z częścią dziesiętną są typu float (liczba zmiennoprzecinkowa).'
      },
      {
        id: 'q2',
        question: 'Co zostanie wypisane?',
        code: 'x = "10"\ny = "20"\nprint(x + y)',
        options: ['30', '1020', 'Błąd', '10 20'],
        correctAnswer: 1,
        explanation: 'Operator + dla stringów wykonuje konkatenację (łączenie), nie dodawanie matematyczne.'
      },
      {
        id: 'q3',
        question: 'Która nazwa zmiennej jest niepoprawna w Pythonie?',
        options: ['moja_zmienna', '_zmienna', '2zmienna', 'zmienna2'],
        correctAnswer: 2,
        explanation: 'Nazwy zmiennych nie mogą zaczynać się od cyfry. Muszą zaczynać się od litery lub podkreślenia.'
      },
      {
        id: 'q4',
        question: 'Jaki będzie typ zmiennej x?',
        code: 'x = True',
        options: ['str', 'int', 'bool', 'float'],
        correctAnswer: 2,
        explanation: 'True i False to wartości typu bool (boolean - logiczny).'
      }
    ]
  },
  {
    lessonId: 'for-loop',
    title: 'Test: Pętla for',
    questions: [
      {
        id: 'q1',
        question: 'Ile razy wykona się ta pętla?',
        code: 'for i in range(5):\n    print(i)',
        options: ['4', '5', '6', 'Nieskończoność'],
        correctAnswer: 1,
        explanation: 'range(5) generuje liczby od 0 do 4, czyli 5 liczb. Pętla wykona się 5 razy.'
      },
      {
        id: 'q2',
        question: 'Jakie liczby wygeneruje range(2, 6)?',
        options: ['2, 3, 4, 5, 6', '2, 3, 4, 5', '1, 2, 3, 4, 5', '3, 4, 5, 6'],
        correctAnswer: 1,
        explanation: 'range(2, 6) generuje liczby od 2 (włącznie) do 6 (wyłącznie), czyli: 2, 3, 4, 5.'
      },
      {
        id: 'q3',
        question: 'Co zostanie wypisane?',
        code: 'owoce = ["jabłko", "banan"]\nfor owoc in owoce:\n    print(owoc)',
        options: ['jabłko banan', 'jabłko\nbanan', '["jabłko", "banan"]', 'Błąd'],
        correctAnswer: 1,
        explanation: 'Pętla for przejdzie przez każdy element listy i wypisze go w osobnej linii.'
      }
    ]
  },
  {
    lessonId: 'java-variables',
    title: 'Test: Zmienne w Java',
    questions: [
      {
        id: 'q1',
        question: 'Która deklaracja zmiennej jest poprawna w Java?',
        options: [
          'int x = 10',
          'int x = 10;',
          'x = 10;',
          'integer x = 10;'
        ],
        correctAnswer: 1,
        explanation: 'W Javie każda instrukcja musi kończyć się średnikiem. Typ int pisze się małą literą.'
      },
      {
        id: 'q2',
        question: 'Jaki typ danych użyjesz do przechowania tekstu "Hello"?',
        options: ['char', 'text', 'String', 'string'],
        correctAnswer: 2,
        explanation: 'String (z wielką literą S) to typ do przechowywania tekstu w Javie.'
      },
      {
        id: 'q3',
        question: 'Co oznacza słowo kluczowe "final"?',
        options: [
          'Zmienna lokalna',
          'Zmienna stała (nie można zmienić wartości)',
          'Zmienna globalna',
          'Zmienna publiczna'
        ],
        correctAnswer: 1,
        explanation: 'final oznacza stałą - raz przypisaną wartość nie można zmienić.'
      },
      {
        id: 'q4',
        question: 'Co zostanie wypisane?',
        code: 'int x = 5;\nint y = 2;\nSystem.out.println(x / y);',
        options: ['2.5', '2', '3', 'Błąd'],
        correctAnswer: 1,
        explanation: 'Dzielenie dwóch liczb typu int daje wynik int (dzielenie całkowite). 5/2 = 2.'
      }
    ]
  },
  {
    lessonId: 'classes-objects',
    title: 'Test: Klasy i obiekty',
    questions: [
      {
        id: 'q1',
        question: 'Czym jest klasa w programowaniu obiektowym?',
        options: [
          'Konkretna instancja obiektu',
          'Szablon/plan dla obiektów',
          'Metoda w obiekcie',
          'Zmienna globalna'
        ],
        correctAnswer: 1,
        explanation: 'Klasa to szablon lub plan, który definiuje właściwości i zachowania obiektów.'
      },
      {
        id: 'q2',
        question: 'Jak tworzymy nowy obiekt klasy Student?',
        options: [
          'Student student1 = Student();',
          'new Student student1;',
          'Student student1 = new Student();',
          'create Student student1;'
        ],
        correctAnswer: 2,
        explanation: 'Aby utworzyć obiekt używamy: TypKlasy nazwZmiennej = new TypKlasy();'
      },
      {
        id: 'q3',
        question: 'Co to jest obiekt?',
        options: [
          'Szablon dla klas',
          'Konkretna instancja klasy',
          'Typ danych',
          'Metoda klasy'
        ],
        correctAnswer: 1,
        explanation: 'Obiekt to konkretna instancja (egzemplarz) utworzona na podstawie klasy.'
      }
    ]
  }
];

export const getQuizForLesson = (lessonId: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.lessonId === lessonId);
};
