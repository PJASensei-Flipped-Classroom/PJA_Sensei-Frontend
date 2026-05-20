interface LessonBlock {
  type: 'text' | 'code' | 'heading';
  content: string;
  language?: string;
}

export interface LessonData {
  title: string;
  duration: string;
  description: string;
  objectives: string[];
  content: LessonBlock[];
}

export const pythonLessons: Record<string, LessonData> = {
  'intro-programming': {
    title: 'Wprowadzenie do programowania',
    duration: '15 min',
    description: 'Poznaj podstawowe pojęcia związane z programowaniem i dowiedz się, czym jest kod, kompilator i interpreter.',
    objectives: [
      'Zrozumienie czym jest programowanie',
      'Poznanie różnicy między kompilacją a interpretacją',
      'Napisanie pierwszego programu',
    ],
    content: [
      { type: 'heading', content: 'Czym jest programowanie?' },
      { type: 'text', content: 'Programowanie to proces tworzenia zestawu instrukcji, które mówią komputerowi, jak wykonać określone zadanie. Te instrukcje są zapisywane w języku programowania, który komputer może zrozumieć i wykonać.' },
      { type: 'text', content: 'Programiści (również nazywani developerami) piszą kod używając różnych języków programowania takich jak Python, JavaScript, Java, C++, i wiele innych. Każdy język ma swoją składnię i zastosowania.' },
      { type: 'heading', content: 'Pierwszy program - "Hello World"' },
      { type: 'text', content: 'Tradycyjnie, pierwszym programem jaki pisze się w nowym języku to program wyświetlający tekst "Hello World". Oto przykład w języku Python:' },
      { type: 'code', content: 'print("Hello World")\nprint("Witaj w świecie programowania!")', language: 'python' },
      { type: 'heading', content: 'Kompilacja vs Interpretacja' },
      { type: 'text', content: 'Języki programowania można podzielić na kompilowane i interpretowane:' },
      { type: 'text', content: '• Języki kompilowane (np. C, C++, Java) - kod źródłowy jest tłumaczony na kod maszynowy przed uruchomieniem' },
      { type: 'text', content: '• Języki interpretowane (np. Python, JavaScript) - kod jest wykonywany linia po linii podczas uruchomienia' },
      { type: 'heading', content: 'Ćwiczenie praktyczne' },
      { type: 'text', content: 'Spróbuj zmodyfikować powyższy kod, aby wyświetlić swoje imię:' },
      { type: 'code', content: 'print("Cześć, mam na imię [Twoje imię]")', language: 'python' },
    ]
  },
  'variables': {
    title: 'Zmienne i typy danych',
    duration: '20 min',
    description: 'Naucz się jak przechowywać i manipulować danymi w programie używając zmiennych.',
    objectives: [
      'Zrozumienie pojęcia zmiennej',
      'Poznanie podstawowych typów danych',
      'Umiejętność deklarowania i używania zmiennych',
    ],
    content: [
      { type: 'heading', content: 'Co to jest zmienna?' },
      { type: 'text', content: 'Zmienna to nazwany kontener, który przechowuje wartość w pamięci komputera. Możesz myśleć o zmiennej jak o pudełku z etykietą, w którym możesz przechowywać różne rzeczy.' },
      { type: 'code', content: 'wiek = 20\nimie = "Anna"\nwzrost = 1.75', language: 'python' },
      { type: 'heading', content: 'Podstawowe typy danych' },
      { type: 'text', content: '• int (liczby całkowite): 1, 42, -10' },
      { type: 'text', content: '• float (liczby zmiennoprzecinkowe): 3.14, -0.5, 2.0' },
      { type: 'text', content: '• str (tekst): "Hello", \'Python\'' },
      { type: 'text', content: '• bool (wartości logiczne): True, False' },
      { type: 'code', content: 'liczba_calkowita = 42\nliczba_zmiennoprzecinkowa = 3.14\ntekst = "Programowanie"\nczy_prawda = True', language: 'python' },
    ]
  },
  'operators': {
    title: 'Operatory',
    duration: '18 min',
    description: 'Poznaj różne rodzaje operatorów w Pythonie i dowiedz się, jak wykonywać operacje matematyczne i logiczne.',
    objectives: [
      'Zrozumienie operatorów arytmetycznych',
      'Poznanie operatorów porównania',
      'Umiejętność używania operatorów logicznych',
    ],
    content: [
      { type: 'heading', content: 'Operatory arytmetyczne' },
      { type: 'text', content: 'Python oferuje standardowe operatory matematyczne:' },
      { type: 'text', content: '• + (dodawanie), - (odejmowanie), * (mnożenie), / (dzielenie)' },
      { type: 'text', content: '• // (dzielenie całkowite), % (modulo), ** (potęgowanie)' },
      { type: 'code', content: 'a = 10\nb = 3\n\nprint(a + b)  # 13\nprint(a - b)  # 7\nprint(a * b)  # 30\nprint(a / b)  # 3.333...\nprint(a // b) # 3\nprint(a % b)  # 1\nprint(a ** b) # 1000', language: 'python' },
      { type: 'heading', content: 'Operatory porównania' },
      { type: 'text', content: 'Operatory porównania zwracają wartość True lub False:' },
      { type: 'text', content: '• == (równe), != (różne), > (większe), < (mniejsze), >= (większe lub równe), <= (mniejsze lub równe)' },
      { type: 'code', content: 'x = 5\ny = 10\n\nprint(x == y)  # False\nprint(x != y)  # True\nprint(x < y)   # True\nprint(x >= 5)  # True', language: 'python' },
      { type: 'heading', content: 'Operatory logiczne' },
      { type: 'text', content: 'Służą do łączenia warunków logicznych:' },
      { type: 'text', content: '• and (i), or (lub), not (negacja)' },
      { type: 'code', content: 'wiek = 20\nma_prawo_jazdy = True\n\nprint(wiek >= 18 and ma_prawo_jazdy)  # True\nprint(wiek < 18 or ma_prawo_jazdy)    # True\nprint(not ma_prawo_jazdy)             # False', language: 'python' },
    ]
  },
  'control-flow': {
    title: 'Instrukcje warunkowe',
    duration: '25 min',
    description: 'Naucz się kontrolować przepływ programu używając instrukcji warunkowych if, elif i else.',
    objectives: [
      'Zrozumienie instrukcji if',
      'Używanie elif i else',
      'Tworzenie zagnieżdżonych warunków',
    ],
    content: [
      { type: 'heading', content: 'Instrukcja if' },
      { type: 'text', content: 'Instrukcja if pozwala wykonać kod tylko wtedy, gdy określony warunek jest prawdziwy:' },
      { type: 'code', content: 'wiek = 20\n\nif wiek >= 18:\n    print("Jesteś pełnoletni")', language: 'python' },
      { type: 'text', content: 'Zwróć uwagę na wcięcie (indentację) - w Pythonie jest ono obowiązkowe i określa blok kodu należący do instrukcji if.' },
      { type: 'heading', content: 'Instrukcje elif i else' },
      { type: 'text', content: 'elif (else if) pozwala sprawdzić kolejne warunki, a else wykonuje kod gdy żaden warunek nie jest spełniony:' },
      { type: 'code', content: 'ocena = 85\n\nif ocena >= 90:\n    print("Ocena: 5")\nelif ocena >= 80:\n    print("Ocena: 4")\nelif ocena >= 70:\n    print("Ocena: 3")\nelse:\n    print("Ocena: 2")', language: 'python' },
      { type: 'heading', content: 'Zagnieżdżone warunki' },
      { type: 'text', content: 'Możesz umieszczać instrukcje if wewnątrz innych instrukcji if:' },
      { type: 'code', content: 'wiek = 20\nma_bilet = True\n\nif wiek >= 18:\n    if ma_bilet:\n        print("Wejście dozwolone")\n    else:\n        print("Kup bilet")\nelse:\n    print("Jesteś za młody")', language: 'python' },
    ]
  },
  'for-loop': {
    title: 'Pętla for',
    duration: '20 min',
    description: 'Poznaj pętlę for, która pozwala iterować po sekwencjach i powtarzać kod określoną liczbę razy.',
    objectives: [
      'Zrozumienie działania pętli for',
      'Używanie funkcji range()',
      'Iterowanie po listach i napisach',
    ],
    content: [
      { type: 'heading', content: 'Podstawy pętli for' },
      { type: 'text', content: 'Pętla for w Pythonie służy do iterowania po elementach sekwencji (lista, napis, zakres liczb):' },
      { type: 'code', content: 'for i in range(5):\n    print(i)\n# Wypisze: 0, 1, 2, 3, 4', language: 'python' },
      { type: 'heading', content: 'Funkcja range()' },
      { type: 'text', content: 'range() generuje sekwencję liczb. Może przyjmować 1, 2 lub 3 argumenty:' },
      { type: 'code', content: 'range(5)        # 0, 1, 2, 3, 4\nrange(2, 8)     # 2, 3, 4, 5, 6, 7\nrange(0, 10, 2) # 0, 2, 4, 6, 8', language: 'python' },
      { type: 'heading', content: 'Iterowanie po listach' },
      { type: 'text', content: 'Pętla for świetnie nadaje się do przeglądania elementów listy:' },
      { type: 'code', content: 'owoce = ["jabłko", "banan", "wiśnia"]\n\nfor owoc in owoce:\n    print(f"Lubię {owoc}")', language: 'python' },
      { type: 'heading', content: 'Iterowanie po napisach' },
      { type: 'text', content: 'Możesz iterować po każdym znaku w napisie:' },
      { type: 'code', content: 'imie = "Anna"\n\nfor litera in imie:\n    print(litera)', language: 'python' },
    ]
  },
  'function-basics': {
    title: 'Podstawy funkcji',
    duration: '22 min',
    description: 'Naucz się tworzyć i wywoływać funkcje w Pythonie.',
    objectives: [
      'Zrozumienie czym jest funkcja',
      'Definiowanie własnych funkcji',
      'Wywoływanie funkcji',
    ],
    content: [
      { type: 'heading', content: 'Czym jest funkcja?' },
      { type: 'text', content: 'Funkcja to nazwany blok kodu, który wykonuje określone zadanie. Funkcje pozwalają na ponowne wykorzystanie kodu i lepszą organizację programu.' },
      { type: 'heading', content: 'Definiowanie funkcji' },
      { type: 'text', content: 'W Pythonie funkcje definiujemy używając słowa kluczowego def:' },
      { type: 'code', content: 'def powitanie():\n    print("Witaj w świecie funkcji!")\n    print("Funkcje są potężne!")', language: 'python' },
      { type: 'heading', content: 'Wywoływanie funkcji' },
      { type: 'text', content: 'Aby wykonać funkcję, wywoływamy ją po nazwie z nawiasami:' },
      { type: 'code', content: 'def powitanie():\n    print("Cześć!")\n\npowitanie()  # Wywołanie funkcji\npowitanie()  # Możemy wywołać wielokrotnie', language: 'python' },
      { type: 'heading', content: 'Zalety używania funkcji' },
      { type: 'text', content: '• Unikanie powtarzania kodu (DRY - Don\'t Repeat Yourself)' },
      { type: 'text', content: '• Lepsza organizacja i czytelność kodu' },
      { type: 'text', content: '• Łatwiejsze testowanie i debugowanie' },
      { type: 'text', content: '• Możliwość wielokrotnego użycia w różnych miejscach programu' },
    ]
  },
  'arrays': {
    title: 'Tablice',
    duration: '25 min',
    description: 'Poznaj tablice (listy) w Pythonie - podstawową strukturę danych do przechowywania kolekcji elementów.',
    objectives: [
      'Tworzenie i modyfikowanie list',
      'Dostęp do elementów listy',
      'Podstawowe operacje na listach',
    ],
    content: [
      { type: 'heading', content: 'Czym jest lista?' },
      { type: 'text', content: 'Lista to uporządkowana kolekcja elementów, która może przechowywać różne typy danych. Listy są mutowalne - możemy je modyfikować po utworzeniu.' },
      { type: 'code', content: 'owoce = ["jabłko", "banan", "wiśnia"]\nliczby = [1, 2, 3, 4, 5]\nmieszana = [1, "tekst", 3.14, True]', language: 'python' },
      { type: 'heading', content: 'Dostęp do elementów' },
      { type: 'text', content: 'Elementy listy indeksujemy od 0. Możemy też używać ujemnych indeksów (od końca):' },
      { type: 'code', content: 'owoce = ["jabłko", "banan", "wiśnia"]\n\nprint(owoce[0])   # "jabłko"\nprint(owoce[1])   # "banan"\nprint(owoce[-1])  # "wiśnia" (ostatni element)\nprint(owoce[-2])  # "banan" (przedostatni)', language: 'python' },
      { type: 'heading', content: 'Modyfikowanie list' },
      { type: 'text', content: 'Możemy dodawać, usuwać i zmieniać elementy:' },
      { type: 'code', content: 'owoce = ["jabłko", "banan"]\n\n# Dodawanie\nowoce.append("wiśnia")       # ["jabłko", "banan", "wiśnia"]\nowoce.insert(1, "pomarańcza") # ["jabłko", "pomarańcza", "banan", "wiśnia"]\n\n# Usuwanie\nowoce.remove("banan")  # Usuwa pierwszy "banan"\ndel owoce[0]           # Usuwa element na indeksie 0\n\n# Zmiana\nowoce[0] = "gruszka"   # Zmienia pierwszy element', language: 'python' },
      { type: 'heading', content: 'Długość listy' },
      { type: 'text', content: 'Funkcja len() zwraca liczbę elementów:' },
      { type: 'code', content: 'owoce = ["jabłko", "banan", "wiśnia"]\nprint(len(owoce))  # 3', language: 'python' },
    ]
  },
};


export const javaLessons: Record<string, LessonData> = {
  'java-intro': {
    title: 'Wprowadzenie do Java',
    duration: '18 min',
    description: 'Poznaj język Java, jego historię i podstawowe cechy. Dowiedz się, dlaczego Java jest jednym z najpopularniejszych języków programowania.',
    objectives: [
      'Poznanie historii i zastosowań języka Java',
      'Zrozumienie koncepcji JVM i JDK',
      'Napisanie pierwszego programu w Java',
    ],
    content: [
      { type: 'heading', content: 'Czym jest Java?' },
      { type: 'text', content: 'Java to obiektowy język programowania stworzony w 1995 roku przez firmę Sun Microsystems. Jest to jeden z najpopularniejszych języków na świecie, używany do tworzenia aplikacji webowych, mobilnych (Android), systemów enterprise i wielu innych.' },
      { type: 'text', content: 'Główną zaletą Javy jest zasada "Write Once, Run Anywhere" (WORA) - kod napisany raz może działać na różnych platformach bez modyfikacji.' },
      { type: 'heading', content: 'JVM, JRE i JDK' },
      { type: 'text', content: '• JVM (Java Virtual Machine) - wirtualna maszyna wykonująca kod Java' },
      { type: 'text', content: '• JRE (Java Runtime Environment) - środowisko do uruchamiania aplikacji Java' },
      { type: 'text', content: '• JDK (Java Development Kit) - zestaw narzędzi do tworzenia aplikacji Java' },
      { type: 'heading', content: 'Pierwszy program w Java' },
      { type: 'text', content: 'Każdy program w Java zaczyna się od klasy. Oto klasyczny przykład "Hello World":' },
      { type: 'code', content: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World!");\n        System.out.println("Witaj w świecie Java!");\n    }\n}', language: 'java' },
      { type: 'text', content: 'W przeciwieństwie do Pythona, Java wymaga jawnego określenia klasy i metody main jako punktu wejścia do programu.' },
    ]
  },
  'java-syntax': {
    title: 'Składnia i struktura programu',
    duration: '22 min',
    description: 'Poznaj podstawową składnię języka Java i zrozum strukturę programu.',
    objectives: [
      'Zrozumienie struktury klasy',
      'Poznanie konwencji nazewnictwa',
      'Umiejętność pisania komentarzy',
    ],
    content: [
      { type: 'heading', content: 'Struktura programu Java' },
      { type: 'text', content: 'Każdy program w Java składa się z klas. Klasa zawiera metody, a metody zawierają instrukcje:' },
      { type: 'code', content: 'public class MojProgram {\n    // Metoda główna - punkt wejścia\n    public static void main(String[] args) {\n        // Instrukcje programu\n        System.out.println("Witaj!");\n    }\n}', language: 'java' },
      { type: 'heading', content: 'Konwencje nazewnictwa' },
      { type: 'text', content: '• Klasy: PascalCase (np. MojaKlasa, Student, KalkulatorNaukowy)' },
      { type: 'text', content: '• Metody i zmienne: camelCase (np. mojaMetoda, liczbaStudentow)' },
      { type: 'text', content: '• Stałe: UPPER_CASE (np. MAX_WARTOSC, PI)' },
      { type: 'heading', content: 'Komentarze' },
      { type: 'text', content: 'Java obsługuje trzy rodzaje komentarzy:' },
      { type: 'code', content: '// Komentarz jednoliniowy\n\n/* Komentarz\n   wieloliniowy */\n\n/**\n * Komentarz dokumentacyjny (Javadoc)\n * @author Imię Nazwisko\n */', language: 'java' },
      { type: 'heading', content: 'Średniki i nawiasy' },
      { type: 'text', content: 'W Javie każda instrukcja kończy się średnikiem (;), a bloki kodu otaczamy nawiasami klamrowymi {}.' },
    ]
  },
  'java-variables': {
    title: 'Zmienne i typy danych w Java',
    duration: '20 min',
    description: 'Naucz się deklarować zmienne i poznaj podstawowe typy danych w języku Java.',
    objectives: [
      'Zrozumienie typów prymitywnych',
      'Deklaracja i inicjalizacja zmiennych',
      'Poznanie typów referencyjnych',
    ],
    content: [
      { type: 'heading', content: 'Typy prymitywne' },
      { type: 'text', content: 'Java oferuje 8 typów prymitywnych:' },
      { type: 'text', content: '• byte, short, int, long - liczby całkowite' },
      { type: 'text', content: '• float, double - liczby zmiennoprzecinkowe' },
      { type: 'text', content: '• char - pojedynczy znak' },
      { type: 'text', content: '• boolean - wartość logiczna (true/false)' },
      { type: 'code', content: 'int wiek = 20;\ndouble wzrost = 1.75;\nchar ocena = \'A\';\nboolean jestStudentem = true;', language: 'java' },
      { type: 'heading', content: 'Deklaracja zmiennych' },
      { type: 'text', content: 'W Javie musisz jawnie określić typ zmiennej:' },
      { type: 'code', content: 'int liczba;          // Deklaracja\nliczba = 42;         // Inicjalizacja\n\nint inna = 100;      // Deklaracja + inicjalizacja', language: 'java' },
      { type: 'heading', content: 'String - typ referencyjny' },
      { type: 'text', content: 'String to najczęściej używany typ referencyjny do przechowywania tekstu:' },
      { type: 'code', content: 'String imie = "Jan";\nString nazwisko = "Kowalski";\nString pelneImie = imie + " " + nazwisko;', language: 'java' },
      { type: 'heading', content: 'Stałe' },
      { type: 'text', content: 'Używamy słowa kluczowego final do tworzenia stałych:' },
      { type: 'code', content: 'final double PI = 3.14159;\nfinal int MAX_STUDENTOW = 30;', language: 'java' },
    ]
  },
  'java-operators': {
    title: 'Operatory w Java',
    duration: '15 min',
    description: 'Poznaj różne rodzaje operatorów dostępne w języku Java.',
    objectives: [
      'Używanie operatorów arytmetycznych',
      'Poznanie operatorów przypisania',
      'Zrozumienie operatorów inkrementacji i dekrementacji',
    ],
    content: [
      { type: 'heading', content: 'Operatory arytmetyczne' },
      { type: 'text', content: 'Java oferuje standardowe operatory matematyczne:' },
      { type: 'code', content: 'int a = 10, b = 3;\n\nSystem.out.println(a + b);  // 13\nSystem.out.println(a - b);  // 7\nSystem.out.println(a * b);  // 30\nSystem.out.println(a / b);  // 3 (dzielenie całkowite)\nSystem.out.println(a % b);  // 1 (reszta z dzielenia)', language: 'java' },
      { type: 'heading', content: 'Operatory przypisania' },
      { type: 'text', content: 'Skrócone formy operacji i przypisania:' },
      { type: 'code', content: 'int x = 10;\nx += 5;  // x = x + 5;  -> 15\nx -= 3;  // x = x - 3;  -> 12\nx *= 2;  // x = x * 2;  -> 24\nx /= 4;  // x = x / 4;  -> 6', language: 'java' },
      { type: 'heading', content: 'Inkrementacja i dekrementacja' },
      { type: 'text', content: 'Specjalne operatory do zwiększania/zmniejszania wartości o 1:' },
      { type: 'code', content: 'int licznik = 0;\nlicznik++;  // Post-inkrementacja: licznik = 1\n++licznik;  // Pre-inkrementacja: licznik = 2\nlicznik--;  // Post-dekrementacja: licznik = 1\n--licznik;  // Pre-dekrementacja: licznik = 0', language: 'java' },
      { type: 'text', content: 'Różnica między pre- a post- jest widoczna gdy używamy wartości w wyrażeniu:' },
      { type: 'code', content: 'int a = 5;\nint b = a++;  // b = 5, a = 6\nint c = ++a;  // c = 7, a = 7', language: 'java' },
    ]
  },
  'classes-objects': {
    title: 'Klasy i obiekty',
    duration: '25 min',
    description: 'Naucz się podstaw programowania obiektowego - jak tworzyć klasy i obiekty w języku Java.',
    objectives: [
      'Zrozumienie koncepcji klasy i obiektu',
      'Umiejętność tworzenia własnych klas',
      'Tworzenie instancji obiektów',
    ],
    content: [
      { type: 'heading', content: 'Co to jest klasa?' },
      { type: 'text', content: 'Klasa to szablon lub plan, który definiuje właściwości (pola) i zachowania (metody) obiektów. Można myśleć o klasie jak o przepisie na ciastka - przepis opisuje, jak powinno wyglądać ciastko, ale samo w sobie nie jest ciastkiem.' },
      { type: 'heading', content: 'Co to jest obiekt?' },
      { type: 'text', content: 'Obiekt to konkretna instancja klasy. Jeśli klasa to przepis, obiekt to gotowe ciastko upieczone według tego przepisu. Możemy utworzyć wiele obiektów z jednej klasy.' },
      { type: 'code', content: 'public class Student {\n    String imie;\n    String nazwisko;\n    int wiek;\n    \n    void przedstawSie() {\n        System.out.println("Cześć, jestem " + imie + " " + nazwisko);\n    }\n}', language: 'java' },
      { type: 'heading', content: 'Tworzenie obiektów' },
      { type: 'text', content: 'Aby utworzyć obiekt, używamy słowa kluczowego new:' },
      { type: 'code', content: 'public class Main {\n    public static void main(String[] args) {\n        Student student1 = new Student();\n        student1.imie = "Jan";\n        student1.nazwisko = "Kowalski";\n        student1.wiek = 20;\n        \n        student1.przedstawSie();\n    }\n}', language: 'java' },
      { type: 'text', content: 'W tym przykładzie utworzyliśmy obiekt student1 typu Student, ustawiliśmy jego właściwości i wywołaliśmy metodę przedstawSie().' },
    ]
  },
  'inheritance-basics': {
    title: 'Podstawy dziedziczenia',
    duration: '25 min',
    description: 'Poznaj mechanizm dziedziczenia, który pozwala tworzyć nowe klasy na bazie istniejących.',
    objectives: [
      'Zrozumienie koncepcji dziedziczenia',
      'Tworzenie klas pochodnych',
      'Używanie słowa kluczowego extends',
    ],
    content: [
      { type: 'heading', content: 'Czym jest dziedziczenie?' },
      { type: 'text', content: 'Dziedziczenie to mechanizm, który pozwala nowej klasie (klasie pochodnej) przejąć właściwości i metody z istniejącej klasy (klasy bazowej). Jest to jedna z fundamentalnych zasad programowania obiektowego.' },
      { type: 'heading', content: 'Klasa bazowa i pochodna' },
      { type: 'text', content: 'Definiujemy klasę bazową, a następnie tworzymy klasy pochodne używając słowa kluczowego extends:' },
      { type: 'code', content: '// Klasa bazowa\nclass Osoba {\n    String imie;\n    String nazwisko;\n    \n    void przedstawSie() {\n        System.out.println("Jestem " + imie + " " + nazwisko);\n    }\n}\n\n// Klasa pochodna\nclass Student extends Osoba {\n    String nrIndeksu;\n    \n    void studiuje() {\n        System.out.println("Studiuję na uczelni");\n    }\n}', language: 'java' },
      { type: 'heading', content: 'Wykorzystanie dziedziczenia' },
      { type: 'text', content: 'Klasa Student dziedziczy wszystkie pola i metody z klasy Osoba:' },
      { type: 'code', content: 'Student student = new Student();\nstudent.imie = "Anna";          // Z klasy Osoba\nstudent.nazwisko = "Kowalska";  // Z klasy Osoba\nstudent.nrIndeksu = "12345";    // Z klasy Student\n\nstudent.przedstawSie();  // Metoda z klasy Osoba\nstudent.studiuje();      // Metoda z klasy Student', language: 'java' },
      { type: 'heading', content: 'Zalety dziedziczenia' },
      { type: 'text', content: '• Ponowne wykorzystanie kodu' },
      { type: 'text', content: '• Tworzenie hierarchii klas' },
      { type: 'text', content: '• Łatwiejsza rozbudowa i utrzymanie kodu' },
    ]
  },
  'interface-basics': {
    title: 'Wprowadzenie do interfejsów',
    duration: '20 min',
    description: 'Poznaj interfejsy - kontrakt określający, jakie metody musi implementować klasa.',
    objectives: [
      'Zrozumienie czym jest interfejs',
      'Definiowanie interfejsów',
      'Implementacja interfejsów w klasach',
    ],
    content: [
      { type: 'heading', content: 'Czym jest interfejs?' },
      { type: 'text', content: 'Interfejs to kontrakt, który określa jakie metody klasa musi implementować. Interfejs definiuje "co" klasa powinna robić, ale nie określa "jak" to robić.' },
      { type: 'heading', content: 'Definiowanie interfejsu' },
      { type: 'text', content: 'Interfejs tworzymy używając słowa kluczowego interface:' },
      { type: 'code', content: 'public interface Rysowalne {\n    void rysuj();\n    void usun();\n}', language: 'java' },
      { type: 'heading', content: 'Implementacja interfejsu' },
      { type: 'text', content: 'Klasa implementuje interfejs używając słowa kluczowego implements:' },
      { type: 'code', content: 'public class Kolo implements Rysowalne {\n    private double promien;\n    \n    public Kolo(double promien) {\n        this.promien = promien;\n    }\n    \n    @Override\n    public void rysuj() {\n        System.out.println("Rysuję koło o promieniu " + promien);\n    }\n    \n    @Override\n    public void usun() {\n        System.out.println("Usuwam koło");\n    }\n}', language: 'java' },
      { type: 'heading', content: 'Używanie interfejsów' },
      { type: 'text', content: 'Interfejsy pozwalają na polimorfizm - możemy traktować różne obiekty w jednolity sposób:' },
      { type: 'code', content: 'Rysowalne figura1 = new Kolo(5.0);\nRysowalne figura2 = new Prostokat(10.0, 20.0);\n\nfigura1.rysuj();  // Wywoła metodę z klasy Kolo\nfigura2.rysuj();  // Wywoła metodę z klasy Prostokat', language: 'java' },
      { type: 'heading', content: 'Zalety interfejsów' },
      { type: 'text', content: '• Definiują kontrakt dla klas' },
      { type: 'text', content: '• Umożliwiają wielodziedziczenie funkcjonalności' },
      { type: 'text', content: '• Wspierają luźne powiązanie między klasami' },
    ]
  },
  'arraylist': {
    title: 'ArrayList',
    duration: '22 min',
    description: 'Poznaj ArrayList - dynamiczną kolekcję w Javie, która automatycznie zmienia rozmiar.',
    objectives: [
      'Zrozumienie różnicy między tablicą a ArrayList',
      'Tworzenie i modyfikowanie ArrayList',
      'Podstawowe operacje na ArrayList',
    ],
    content: [
      { type: 'heading', content: 'Czym jest ArrayList?' },
      { type: 'text', content: 'ArrayList to dynamiczna struktura danych, która może zmieniać rozmiar w trakcie działania programu. W przeciwieństwie do zwykłych tablic, ArrayList automatycznie rośnie gdy dodajemy elementy.' },
      { type: 'heading', content: 'Tworzenie ArrayList' },
      { type: 'text', content: 'Aby użyć ArrayList, musimy zaimportować klasę i określić typ elementów:' },
      { type: 'code', content: 'import java.util.ArrayList;\n\npublic class Main {\n    public static void main(String[] args) {\n        // ArrayList przechowujący Stringi\n        ArrayList<String> owoce = new ArrayList<>();\n        \n        // ArrayList przechowujący liczby całkowite\n        ArrayList<Integer> liczby = new ArrayList<>();\n    }\n}', language: 'java' },
      { type: 'heading', content: 'Podstawowe operacje' },
      { type: 'text', content: 'ArrayList oferuje wiele przydatnych metod:' },
      { type: 'code', content: 'ArrayList<String> owoce = new ArrayList<>();\n\n// Dodawanie elementów\nowoce.add("jabłko");\nowoce.add("banan");\nowoce.add("wiśnia");\n\n// Dostęp do elementu\nString pierwszy = owoce.get(0);  // "jabłko"\n\n// Rozmiar listy\nint rozmiar = owoce.size();  // 3\n\n// Usuwanie elementu\nowoce.remove("banan");\nowoce.remove(0);  // Usuwa element na indeksie 0\n\n// Sprawdzanie czy lista zawiera element\nboolean maJablko = owoce.contains("jabłko");', language: 'java' },
      { type: 'heading', content: 'Iterowanie po ArrayList' },
      { type: 'text', content: 'Możemy użyć pętli for lub for-each:' },
      { type: 'code', content: 'ArrayList<String> owoce = new ArrayList<>();\nowoce.add("jabłko");\nowoce.add("banan");\n\n// Pętla for-each\nfor (String owoc : owoce) {\n    System.out.println(owoc);\n}\n\n// Zwykła pętla for\nfor (int i = 0; i < owoce.size(); i++) {\n    System.out.println(owoce.get(i));\n}', language: 'java' },
    ]
  }
};

export const getLessonContent = (courseId: string, lessonId: string): LessonData => {
  const defaultLesson: LessonData = {
    title: 'Lekcja',
    duration: '15 min',
    description: 'Treść lekcji będzie wkrótce dostępna.',
    objectives: ['Zrozumienie tematu'],
    content: [
      { type: 'heading', content: 'Treść w przygotowaniu' },
      { type: 'text', content: 'Ta lekcja jest obecnie w trakcie przygotowywania. Wróć tu wkrótce!' }
    ]
  };

  if (courseId === 'programming-1') {
    return pythonLessons[lessonId] || defaultLesson;
  } else if (courseId === 'java-oop') {
    return javaLessons[lessonId] || defaultLesson;
  }

  return defaultLesson;
};
