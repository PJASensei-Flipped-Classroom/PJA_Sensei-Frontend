export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  name: string;
  description: string;
  language: string;
  modules: Module[];
}

export const courses: Course[] = [
  {
    id: 'programming-1',
    name: 'Programowanie I',
    description: 'Podstawy programowania w języku Python dla początkujących',
    language: 'Python',
    modules: [
      {
        id: 'basics',
        title: 'Podstawy Programowania',
        lessons: [
          { id: 'intro-programming', title: 'Wprowadzenie do programowania', duration: '15 min', completed: true },
          { id: 'variables', title: 'Zmienne i typy danych', duration: '20 min', completed: true },
          { id: 'operators', title: 'Operatory', duration: '18 min', completed: false },
          { id: 'control-flow', title: 'Instrukcje warunkowe', duration: '25 min', completed: false },
        ]
      },
      {
        id: 'loops',
        title: 'Pętle i Iteracje',
        lessons: [
          { id: 'for-loop', title: 'Pętla for', duration: '20 min', completed: false },
          { id: 'while-loop', title: 'Pętla while', duration: '15 min', completed: false },
          { id: 'loop-exercises', title: 'Ćwiczenia - pętle', duration: '30 min', completed: false },
        ]
      },
      {
        id: 'functions',
        title: 'Funkcje',
        lessons: [
          { id: 'function-basics', title: 'Podstawy funkcji', duration: '22 min', completed: false },
          { id: 'parameters', title: 'Parametry i argumenty', duration: '18 min', completed: false },
          { id: 'return-values', title: 'Wartości zwracane', duration: '20 min', completed: false },
          { id: 'scope', title: 'Zasięg zmiennych', duration: '25 min', completed: false },
        ]
      },
      {
        id: 'data-structures',
        title: 'Struktury Danych',
        lessons: [
          { id: 'arrays', title: 'Tablice', duration: '25 min', completed: false },
          { id: 'lists', title: 'Listy', duration: '20 min', completed: false },
          { id: 'dictionaries', title: 'Słowniki', duration: '22 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'java-oop',
    name: 'Programowanie Obiektowe',
    description: 'Zaawansowane koncepcje OOP w języku Java',
    language: 'Java',
    modules: [
      {
        id: 'java-basics',
        title: 'Podstawy Java',
        lessons: [
          { id: 'java-intro', title: 'Wprowadzenie do Java', duration: '18 min', completed: false },
          { id: 'java-syntax', title: 'Składnia i struktura programu', duration: '22 min', completed: false },
          { id: 'java-variables', title: 'Zmienne i typy danych w Java', duration: '20 min', completed: false },
          { id: 'java-operators', title: 'Operatory w Java', duration: '15 min', completed: false },
        ]
      },
      {
        id: 'oop-fundamentals',
        title: 'Podstawy OOP',
        lessons: [
          { id: 'classes-objects', title: 'Klasy i obiekty', duration: '25 min', completed: false },
          { id: 'constructors', title: 'Konstruktory', duration: '20 min', completed: false },
          { id: 'methods', title: 'Metody', duration: '22 min', completed: false },
          { id: 'encapsulation', title: 'Enkapsulacja', duration: '18 min', completed: false },
        ]
      },
      {
        id: 'inheritance',
        title: 'Dziedziczenie i Polimorfizm',
        lessons: [
          { id: 'inheritance-basics', title: 'Podstawy dziedziczenia', duration: '25 min', completed: false },
          { id: 'method-overriding', title: 'Nadpisywanie metod', duration: '20 min', completed: false },
          { id: 'polymorphism', title: 'Polimorfizm', duration: '28 min', completed: false },
          { id: 'abstract-classes', title: 'Klasy abstrakcyjne', duration: '22 min', completed: false },
        ]
      },
      {
        id: 'interfaces',
        title: 'Interfejsy',
        lessons: [
          { id: 'interface-basics', title: 'Wprowadzenie do interfejsów', duration: '20 min', completed: false },
          { id: 'multiple-inheritance', title: 'Wielodziedziczenie przez interfejsy', duration: '25 min', completed: false },
          { id: 'default-methods', title: 'Metody domyślne', duration: '18 min', completed: false },
        ]
      },
      {
        id: 'collections',
        title: 'Kolekcje w Java',
        lessons: [
          { id: 'arraylist', title: 'ArrayList', duration: '22 min', completed: false },
          { id: 'hashmap', title: 'HashMap', duration: '25 min', completed: false },
          { id: 'collections-framework', title: 'Collections Framework', duration: '30 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'web-development',
    name: 'Tworzenie Stron WWW',
    description: 'HTML, CSS i JavaScript - kompletny kurs front-end',
    language: 'JavaScript',
    modules: [
      {
        id: 'html-basics',
        title: 'Podstawy HTML',
        lessons: [
          { id: 'html-intro', title: 'Wprowadzenie do HTML', duration: '20 min', completed: false },
          { id: 'html-tags', title: 'Podstawowe znaczniki', duration: '25 min', completed: false },
          { id: 'html-forms', title: 'Formularze HTML', duration: '30 min', completed: false },
        ]
      },
      {
        id: 'css-basics',
        title: 'Podstawy CSS',
        lessons: [
          { id: 'css-intro', title: 'Wprowadzenie do CSS', duration: '20 min', completed: false },
          { id: 'css-selectors', title: 'Selektory CSS', duration: '25 min', completed: false },
          { id: 'css-layout', title: 'Flexbox i Grid', duration: '35 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'databases',
    name: 'Bazy Danych',
    description: 'SQL i projektowanie relacyjnych baz danych',
    language: 'SQL',
    modules: [
      {
        id: 'sql-basics',
        title: 'Podstawy SQL',
        lessons: [
          { id: 'sql-intro', title: 'Wprowadzenie do baz danych', duration: '18 min', completed: false },
          { id: 'sql-select', title: 'Zapytania SELECT', duration: '25 min', completed: false },
          { id: 'sql-joins', title: 'Łączenie tabel (JOIN)', duration: '30 min', completed: false },
        ]
      },
      {
        id: 'database-design',
        title: 'Projektowanie Baz Danych',
        lessons: [
          { id: 'normalization', title: 'Normalizacja', duration: '28 min', completed: false },
          { id: 'relationships', title: 'Relacje między tabelami', duration: '25 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'algorithms',
    name: 'Algorytmy i Struktury Danych',
    description: 'Optymalizacja kodu i efektywne rozwiązywanie problemów',
    language: 'Python',
    modules: [
      {
        id: 'algorithms-intro',
        title: 'Wprowadzenie do Algorytmów',
        lessons: [
          { id: 'complexity', title: 'Złożoność algorytmów', duration: '25 min', completed: false },
          { id: 'sorting', title: 'Algorytmy sortowania', duration: '30 min', completed: false },
          { id: 'searching', title: 'Algorytmy wyszukiwania', duration: '22 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'mobile-dev',
    name: 'Programowanie Mobilne',
    description: 'Tworzenie aplikacji na Android z Kotlin',
    language: 'Kotlin',
    modules: [
      {
        id: 'kotlin-basics',
        title: 'Podstawy Kotlin',
        lessons: [
          { id: 'kotlin-intro', title: 'Wprowadzenie do Kotlin', duration: '20 min', completed: false },
          { id: 'kotlin-syntax', title: 'Składnia języka', duration: '25 min', completed: false },
        ]
      },
      {
        id: 'android-basics',
        title: 'Podstawy Android',
        lessons: [
          { id: 'android-intro', title: 'Architektura Android', duration: '30 min', completed: false },
          { id: 'activities', title: 'Activities i Intents', duration: '28 min', completed: false },
        ]
      }
    ]
  },
  {
    id: 'data-science',
    name: 'Data Science',
    description: 'Analiza danych i uczenie maszynowe w Python',
    language: 'Python',
    modules: [
      {
        id: 'pandas-intro',
        title: 'Biblioteka Pandas',
        lessons: [
          { id: 'pandas-basics', title: 'Podstawy Pandas', duration: '25 min', completed: false },
          { id: 'data-manipulation', title: 'Manipulacja danymi', duration: '30 min', completed: false },
        ]
      },
      {
        id: 'ml-intro',
        title: 'Uczenie Maszynowe',
        lessons: [
          { id: 'ml-basics', title: 'Wprowadzenie do ML', duration: '28 min', completed: false },
          { id: 'supervised-learning', title: 'Uczenie nadzorowane', duration: '35 min', completed: false },
        ]
      }
    ]
  }
];
