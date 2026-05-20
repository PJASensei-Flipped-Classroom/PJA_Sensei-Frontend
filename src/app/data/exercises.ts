export interface Exercise {
  id: string;
  courseId: string;
  moduleName: string;
  title: string;
  submitted: boolean;
  instructions: string;
  code: string;
}

export const exercises: Exercise[] = [
  {
    id: 'ex-python-1',
    courseId: 'programming-1',
    moduleName: 'Podstawy Programowania',
    title: 'Kalkulator wieku',
    submitted: true,
    instructions: 'Napisz program, który pobierze rok urodzenia użytkownika i wyświetli jego wiek. Utwórz zmienną rok_urodzenia, oblicz wiek i wyświetl komunikat "Masz X lat".',
    code: '# Kalkulator wieku\n\nrok_urodzenia = 2000\naktualny_rok = 2026\n\n# Oblicz wiek\nwiek = aktualny_rok - rok_urodzenia\n\n# Wyświetl wynik\nprint(f"Masz {wiek} lat")'
  },
  {
    id: 'ex-python-2',
    courseId: 'programming-1',
    moduleName: 'Podstawy Programowania',
    title: 'Sprawdzanie parzystości',
    submitted: true,
    instructions: 'Napisz program sprawdzający czy liczba jest parzysta czy nieparzysta. Użyj operatora modulo (%) i instrukcji if-else.',
    code: '# Sprawdzanie parzystości\n\nliczba = 10\n\nif liczba % 2 == 0:\n    print("Liczba jest parzysta")\nelse:\n    print("Liczba jest nieparzysta")'
  },
  {
    id: 'ex-python-3',
    courseId: 'programming-1',
    moduleName: 'Podstawy Programowania',
    title: 'System ocen',
    submitted: false,
    instructions: 'Stwórz system przydzielający oceny na podstawie punktów (90-100: 5, 80-89: 4, 70-79: 3, 60-69: 2, 0-59: 1). Użyj instrukcji if-elif-else.',
    code: '# System ocen\n\npunkty = 85\n\nif punkty >= 90:\n    print("Ocena: 5")\nelif punkty >= 80:\n    print("Ocena: 4")\nelif punkty >= 70:\n    print("Ocena: 3")\nelif punkty >= 60:\n    print("Ocena: 2")\nelse:\n    print("Ocena: 1")'
  },
  {
    id: 'ex-python-4',
    courseId: 'programming-1',
    moduleName: 'Pętle i Iteracje',
    title: 'Tabliczka mnożenia',
    submitted: false,
    instructions: 'Wyświetl tabliczkę mnożenia dla liczby 7 (od 1 do 10). Użyj pętli for z range(1, 11).',
    code: '# Tabliczka mnożenia dla 7\n\nliczba = 7\n\nfor i in range(1, 11):\n    wynik = liczba * i\n    print(f"{liczba} x {i} = {wynik}")'
  },
  {
    id: 'ex-python-5',
    courseId: 'programming-1',
    moduleName: 'Pętle i Iteracje',
    title: 'Suma liczb',
    submitted: false,
    instructions: 'Oblicz sumę wszystkich liczb od 1 do 100. Użyj pętli for i zmiennej suma.',
    code: '# Suma liczb od 1 do 100\n\nsuma = 0\n\nfor i in range(1, 101):\n    suma += i\n\nprint(f"Suma liczb od 1 do 100: {suma}")'
  },
  {
    id: 'ex-java-1',
    courseId: 'java-oop',
    moduleName: 'Podstawy Java',
    title: 'Hello World z imieniem',
    submitted: false,
    instructions: 'Stwórz program wyświetlający powitanie z imieniem. Utwórz zmienną String i wyświetl komunikat "Witaj, [imię]!".',
    code: 'public class Main {\n    public static void main(String[] args) {\n        String imie = "Anna";\n        System.out.println("Witaj, " + imie + "!");\n    }\n}'
  },
  {
    id: 'ex-java-2',
    courseId: 'java-oop',
    moduleName: 'Podstawy Java',
    title: 'Kalkulator prostokąta',
    submitted: false,
    instructions: 'Oblicz pole i obwód prostokąta o długości 10 i szerokości 5. Wyświetl oba wyniki.',
    code: 'public class Main {\n    public static void main(String[] args) {\n        int dlugosc = 10;\n        int szerokosc = 5;\n        \n        int pole = dlugosc * szerokosc;\n        int obwod = 2 * (dlugosc + szerokosc);\n        \n        System.out.println("Pole: " + pole);\n        System.out.println("Obwód: " + obwod);\n    }\n}'
  },
  {
    id: 'ex-java-3',
    courseId: 'java-oop',
    moduleName: 'Podstawy OOP',
    title: 'Klasa Książka',
    submitted: false,
    instructions: 'Stwórz klasę Ksiazka z polami (tytul, autor, rokWydania) i metodą wyswietlInfo(). Utwórz obiekt i wywołaj metodę.',
    code: 'public class Ksiazka {\n    String tytul;\n    String autor;\n    int rokWydania;\n    \n    void wyswietlInfo() {\n        System.out.println("Tytuł: " + tytul);\n        System.out.println("Autor: " + autor);\n        System.out.println("Rok wydania: " + rokWydania);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Ksiazka ksiazka1 = new Ksiazka();\n        ksiazka1.tytul = "Wiedźmin";\n        ksiazka1.autor = "Andrzej Sapkowski";\n        ksiazka1.rokWydania = 1990;\n        \n        ksiazka1.wyswietlInfo();\n    }\n}'
  },
  {
    id: 'ex-java-4',
    courseId: 'java-oop',
    moduleName: 'Podstawy OOP',
    title: 'Konstruktor klasy Student',
    submitted: false,
    instructions: 'Utwórz klasę Student z konstruktorem i metodą czyZaliczyl() (średnia >= 3.0). Przetestuj w main.',
    code: 'public class Student {\n    String imie;\n    String nrIndeksu;\n    double srednia;\n    \n    public Student(String imie, String nrIndeksu, double srednia) {\n        this.imie = imie;\n        this.nrIndeksu = nrIndeksu;\n        this.srednia = srednia;\n    }\n    \n    public boolean czyZaliczyl() {\n        return srednia >= 3.0;\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student student1 = new Student("Jan", "12345", 3.5);\n        \n        if (student1.czyZaliczyl()) {\n            System.out.println(student1.imie + " zaliczył!");\n        } else {\n            System.out.println(student1.imie + " nie zaliczył.");\n        }\n    }\n}'
  },
  {
    id: 'ex-python-6',
    courseId: 'programming-1',
    moduleName: 'Funkcje',
    title: 'Funkcja dodawania',
    submitted: false,
    instructions: 'Napisz funkcję dodaj(a, b) która zwraca sumę dwóch liczb. Wywołaj funkcję z różnymi wartościami.',
    code: '# Funkcja dodawania\n\ndef dodaj(a, b):\n    return a + b\n\n# Test funkcji\nwynik1 = dodaj(5, 3)\nwynik2 = dodaj(10, 20)\n\nprint(f"5 + 3 = {wynik1}")\nprint(f"10 + 20 = {wynik2}")'
  }
];

export const getExercisesByCourse = (courseId: string): Exercise[] => {
  return exercises.filter(ex => ex.courseId === courseId);
};

export const getExerciseById = (exerciseId: string): Exercise | undefined => {
  return exercises.find(ex => ex.id === exerciseId);
};

export const getExerciseStats = () => {
  const total = exercises.length;
  const submitted = exercises.filter(ex => ex.submitted).length;

  return {
    total,
    submitted,
    pending: total - submitted,
    percentage: Math.round((submitted / total) * 100)
  };
};
