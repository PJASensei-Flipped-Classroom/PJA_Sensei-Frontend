import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'assistant',
    content: 'Cześć! Jestem twoim asystentem AI w nauce programowania. Mogę pomóc ci:\n\n• Wyjaśnić trudne koncepcje z lekcji\n• Odpowiedzieć na pytania o kod\n• Pomóc debugować problemy\n• Podać dodatkowe przykłady\n\nSpróbuj napisać: "Wyjaśnij mi pętle for" lub "Co to jest dziedziczenie?"',
    timestamp: new Date()
  }
];

const quickPrompts = [
  'Wyjaśnij mi pętle for',
  'Co to jest klasa?',
  'Jak działają zmienne w Java?',
  'Czym jest dziedziczenie?',
  'Różnica między Python a Java',
];

export function AIChat({ isOpen, onClose }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickPrompts, setShowQuickPrompts] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (messageText?: string) => {
    const textToSend = messageText || input;
    if (!textToSend.trim()) return;

    setShowQuickPrompts(false);

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: getAIResponse(textToSend),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Pytania o zmienne
    if (lowerQuestion.includes('zmienna') || lowerQuestion.includes('variable')) {
      if (lowerQuestion.includes('java')) {
        return '💡 **Zmienne w Java**\n\nW Javie zmienne muszą mieć określony typ:\n\n```java\nint wiek = 20;\nString imie = "Anna";\ndouble wzrost = 1.75;\nboolean jestStudentem = true;\n```\n\nPamiętaj:\n• Typ określasz przy deklaracji\n• Używaj camelCase dla nazw\n• final oznacza stałą';
      }
      return '💡 **Zmienne w Python**\n\nZmienna to nazwany kontener na wartość:\n\n```python\nwiek = 20\nimie = "Anna"\nwzrost = 1.75\n```\n\nPython automatycznie rozpoznaje typ!';
    }

    // Pytania o pętle
    if (lowerQuestion.includes('pętla') || lowerQuestion.includes('pętle') || lowerQuestion.includes('loop') || lowerQuestion.includes('for')) {
      if (lowerQuestion.includes('java')) {
        return '🔄 **Pętle w Java**\n\n```java\n// Pętla for\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\n// For-each\nfor (String owoc : owoce) {\n    System.out.println(owoc);\n}\n\n// While\nwhile (warunek) {\n    // kod\n}\n```';
      }
      return '🔄 **Pętle w Python**\n\n```python\n# Pętla for z range\nfor i in range(5):\n    print(i)\n\n# Iterowanie po liście\nfor owoc in owoce:\n    print(owoc)\n\n# Pętla while\nwhile warunek:\n    # kod\n```';
    }

    // Pytania o funkcje
    if (lowerQuestion.includes('funkcja') || lowerQuestion.includes('funkcje') || lowerQuestion.includes('function') || lowerQuestion.includes('metoda')) {
      if (lowerQuestion.includes('java')) {
        return '⚙️ **Metody w Java**\n\n```java\npublic int dodaj(int a, int b) {\n    return a + b;\n}\n\npublic void wyswietl(String tekst) {\n    System.out.println(tekst);\n}\n```\n\nPamiętaj o typie zwracanym (void jeśli nic nie zwracamy)!';
      }
      return '⚙️ **Funkcje w Python**\n\n```python\ndef powitanie(imie):\n    return f"Cześć, {imie}!"\n\ndef dodaj(a, b):\n    return a + b\n```\n\nFunkcje = wielokrotne użycie kodu! 🎯';
    }

    // Pytania o klasy/OOP
    if (lowerQuestion.includes('klasa') || lowerQuestion.includes('class') || lowerQuestion.includes('obiekt') || lowerQuestion.includes('object')) {
      return '🏗️ **Klasy i Obiekty**\n\n```java\npublic class Student {\n    String imie;\n    int wiek;\n    \n    void przedstawSie() {\n        System.out.println("Jestem " + imie);\n    }\n}\n\nStudent student1 = new Student();\nstudent1.imie = "Anna";\nstudent1.przedstawSie();\n```\n\nKlasa = szablon 📋\nObiekt = konkretna instancja 🎯';
    }

    // Pytania o dziedziczenie
    if (lowerQuestion.includes('dziedziczenie') || lowerQuestion.includes('inheritance') || lowerQuestion.includes('extends')) {
      return '🌳 **Dziedziczenie**\n\n```java\nclass Osoba {\n    String imie;\n}\n\nclass Student extends Osoba {\n    String nrIndeksu;\n}\n```\n\nStudent dziedziczy wszystko z Osoba!\n\n✅ Ponowne użycie kodu\n✅ Hierarchia klas\n✅ Łatwiejsza rozbudowa';
    }

    // Pytania o interfejsy
    if (lowerQuestion.includes('interfejs') || lowerQuestion.includes('interface')) {
      return '📋 **Interfejsy**\n\nInterfejs = kontrakt dla klasy\n\n```java\ninterface Rysowalne {\n    void rysuj();\n}\n\nclass Kolo implements Rysowalne {\n    public void rysuj() {\n        System.out.println("Rysuję koło");\n    }\n}\n```\n\nDefiniuje CO robić, nie JAK! 🎯';
    }

    // Pytania o listy/tablice
    if (lowerQuestion.includes('lista') || lowerQuestion.includes('list') || lowerQuestion.includes('array') || lowerQuestion.includes('tablica')) {
      if (lowerQuestion.includes('java') || lowerQuestion.includes('arraylist')) {
        return '📚 **ArrayList w Java**\n\n```java\nArrayList<String> lista = new ArrayList<>();\nlista.add("element");\nlista.get(0);\nlista.size();\nlista.remove(0);\n```\n\nDynamiczny rozmiar! Nie musisz z góry określać wielkości.';
      }
      return '📚 **Listy w Python**\n\n```python\nlista = ["jabłko", "banan"]\nlista.append("wiśnia")\nprint(lista[0])\nlen(lista)\nlista.remove("banan")\n```\n\nListy są mutowalne - możesz je zmieniać! ✏️';
    }

    // Pytania o operatory
    if (lowerQuestion.includes('operator')) {
      return '➕ **Operatory**\n\n**Arytmetyczne:** +, -, *, /, %, **\n**Porównania:** ==, !=, <, >, <=, >=\n**Logiczne:** and, or, not\n\n```python\nx = 10\ny = 3\nprint(x + y)   # 13\nprint(x % y)   # 1 (reszta)\nprint(x > y)   # True\n```';
    }

    // Pytania ogólne
    if (lowerQuestion.includes('jak') || lowerQuestion.includes('co to') || lowerQuestion.includes('czym jest')) {
      return '🤔 Masz pytanie o konkretny temat? Mogę pomóc z:\n\n• Zmiennymi i typami danych\n• Pętlami (for, while)\n• Funkcjami/metodami\n• Klasami i obiektami\n• Dziedziczeniem\n• Interfejsami\n• Listami i ArrayList\n\nSpytaj konkretnie, np. "Wyjaśnij pętle for" 💡';
    }

    // Domyślna odpowiedź
    return '💭 Ciekawe pytanie! Mogę pomóc, jeśli doprecyzujesz:\n\n• O jaki język chodzi? (Python/Java)\n• Czego dotyczy pytanie?\n• Masz problem z konkretnym kodem?\n\nAlbo po prostu zapytaj: "Wyjaśnij [temat]" 😊';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="w-96 border-l border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles size={18} className="text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-medium">AI Asystent</h3>
            <p className="text-xs text-muted-foreground">Zawsze gotowy pomóc</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1 rounded-md hover:bg-accent transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              message.role === 'assistant'
                ? 'bg-accent border border-primary/20'
                : 'bg-primary'
            }`}>
              {message.role === 'assistant' ? (
                <Bot size={18} className="text-primary" />
              ) : (
                <User size={18} className="text-primary-foreground" />
              )}
            </div>
            <div className={`flex-1 ${message.role === 'user' ? 'text-right' : ''}`}>
              <div
                className={`inline-block px-4 py-2 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-accent'
                }`}
              >
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {message.timestamp.toLocaleTimeString('pl-PL', {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        ))}

        {showQuickPrompts && messages.length === 1 && (
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground text-center">Popularne pytania:</p>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(prompt)}
                  className="px-3 py-1.5 text-xs bg-muted hover:bg-accent rounded-full transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-accent border border-primary/20 flex items-center justify-center">
              <Bot size={18} className="text-primary" />
            </div>
            <div className="bg-accent px-4 py-2 rounded-lg">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Zadaj pytanie..."
            className="flex-1 px-4 py-2 bg-input-background rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Naciśnij Enter aby wysłać wiadomość
        </p>
      </div>
    </div>
  );
}
