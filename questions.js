// Flashcard data for index.html.
// Each card: { id, topic, en: { q, a: [points] }, pl: { q, a: [points] } }.
// `id` is stored in localStorage for "known" progress – keep it stable when editing a card.
// Wrap code in backticks to render it as `code`.

const TOPICS = [
  { id: "Interview", en: "Interview", pl: "Rozmowa" },
  { id: "JavaScript", en: "JavaScript", pl: "JavaScript" },
  { id: "TypeScript", en: "TypeScript", pl: "TypeScript" },
  { id: "Node.js", en: "Node.js", pl: "Node.js" },
  { id: "React", en: "React", pl: "React" },
  { id: "REST", en: "REST APIs", pl: "REST API" },
  { id: "GraphQL", en: "GraphQL", pl: "GraphQL" },
  { id: "Security", en: "Security & auth", pl: "Bezpieczeństwo i auth" },
  { id: "Databases", en: "Databases", pl: "Bazy danych" },
  { id: "Architecture", en: "Architecture & scale", pl: "Architektura i skala" },
  { id: "Messaging", en: "Events & messaging", pl: "Zdarzenia i kolejki" },
  { id: "AWS", en: "AWS", pl: "AWS" },
  { id: "Containers", en: "Docker, Kubernetes, Helm", pl: "Docker, Kubernetes, Helm" },
  { id: "CI/CD", en: "CI/CD", pl: "CI/CD" },
  { id: "Testing", en: "Testing", pl: "Testowanie" },
  { id: "Observability", en: "Observability", pl: "Obserwowalność" },
  { id: "Elixir & migration", en: "Elixir & migration", pl: "Elixir i migracja" },
  { id: "Elasticsearch", en: "Elasticsearch", pl: "Elasticsearch" },
  { id: "CV: Redge", en: "CV: Redge", pl: "CV: Redge" },
  { id: "CV: OPEGIEKA", en: "CV: OPEGIEKA", pl: "CV: OPEGIEKA" },
  { id: "CV: Gestamp", en: "CV: Gestamp", pl: "CV: Gestamp" },
  { id: "Collaboration", en: "Collaboration", pl: "Współpraca" }
];

const FLASHCARDS = [
  // ───────────────────────── Interview ─────────────────────────
  {
    id: "intro", topic: "Interview",
    en: {
      q: "Walk me through your background.",
      a: [
        "8 years full-stack: TypeScript, Node.js, Vue 2/3, React / React Native",
        "Redge (2023–now): VOD & IPTV on web, Android/iOS, Android TV/Apple TV, Smart TV; Node.js + Express + PostgreSQL REST APIs; App Store / Google Play releases",
        "OPEGIEKA: ZONE geospatial system – Vue 3 + Pinia + OpenLayers, Node.js REST APIs (Swagger), PostgreSQL, Docker, Kubernetes",
        "Gestamp: factory CMMS built end-to-end – Vue, Node.js, MongoDB, Ionic client",
        "Strengths: end-to-end ownership, tested code (Jest, Vitest), AI-assisted engineering"
      ]
    },
    pl: {
      q: "Opowiedz o swoim doświadczeniu.",
      a: [
        "8 lat full-stack: TypeScript, Node.js, Vue 2/3, React / React Native",
        "Redge (2023–obecnie): VOD i IPTV na web, Android/iOS, Android TV/Apple TV, Smart TV; REST API w Node.js + Express + PostgreSQL; wydania w App Store / Google Play",
        "OPEGIEKA: system geoprzestrzenny ZONE – Vue 3 + Pinia + OpenLayers, REST API w Node.js (Swagger), PostgreSQL, Docker, Kubernetes",
        "Gestamp: CMMS dla fabryki od A do Z – Vue, Node.js, MongoDB, klient Ionic",
        "Mocne strony: odpowiedzialność end-to-end, testowany kod (Jest, Vitest), praca z AI"
      ]
    }
  },
  {
    id: "why-role", topic: "Interview",
    en: {
      q: "Why this role?",
      a: [
        "Backend focus – I want to go deeper into Node.js/TypeScript at scale",
        "High-traffic platform for a large US company → distributed systems, performance",
        "Elixir → Node.js migration matches my experience improving existing codebases",
        "Independence and ownership fit how I already work"
      ]
    },
    pl: {
      q: "Dlaczego ta rola?",
      a: [
        "Nacisk na backend – chcę pogłębić Node.js/TypeScript w dużej skali",
        "Platforma o dużym ruchu dla dużej firmy z USA → systemy rozproszone, wydajność",
        "Migracja Elixir → Node.js pasuje do mojego doświadczenia w ulepszaniu istniejącego kodu",
        "Samodzielność i odpowiedzialność – tak już pracuję"
      ]
    }
  },
  {
    id: "why-leave", topic: "Interview",
    en: {
      q: "Why are you looking to change jobs?",
      a: [
        "Pull, not push: growth toward backend and high-scale systems",
        "Want exposure to event-driven architecture and cloud at scale",
        "Keep it positive – never criticise the current employer"
      ]
    },
    pl: {
      q: "Dlaczego szukasz nowej pracy?",
      a: [
        "Przyciąga mnie nowe, a nie uciekam od starego: rozwój w stronę backendu i dużej skali",
        "Chcę pracować z architekturą zdarzeniową i chmurą w dużej skali",
        "Pozytywnie – bez krytykowania obecnego pracodawcy"
      ]
    }
  },
  {
    id: "gaps", topic: "Interview",
    en: {
      q: "Which requirements do you not fully meet yet?",
      a: [
        "Not on CV: AWS, GraphQL, Elixir/Phoenix, Elasticsearch, Datadog/Splunk, Helm",
        "Transferable: Docker + Kubernetes, REST contract design, Sentry, PostgreSQL/MongoDB",
        "Plan: hands-on side project (Node + GraphQL on AWS: ECS/Lambda, SQS, S3), Elixir basics for reading the legacy code",
        "Rule: say what I have studied vs. operated in production – never overstate"
      ]
    },
    pl: {
      q: "Których wymagań jeszcze w pełni nie spełniasz?",
      a: [
        "Nie ma w CV: AWS, GraphQL, Elixir/Phoenix, Elasticsearch, Datadog/Splunk, Helm",
        "Przenoszalne: Docker + Kubernetes, projektowanie kontraktów REST, Sentry, PostgreSQL/MongoDB",
        "Plan: projekt praktyczny (Node + GraphQL na AWS: ECS/Lambda, SQS, S3), podstawy Elixira do czytania starego kodu",
        "Zasada: rozróżniam to, czego się uczyłem, od tego, co utrzymywałem na produkcji – bez przesady"
      ]
    }
  },
  {
    id: "ask-them", topic: "Interview",
    en: {
      q: "Do you have any questions for us?",
      a: [
        "Team: size, who owns what, how work is split with the US client",
        "Migration: which Elixir services first, how parity is verified, timeline",
        "Stack: which AWS services, message broker, observability tools",
        "Process: deploy frequency, on-call, code review, timezone overlap",
        "Success: what should I deliver in the first 3 months?"
      ]
    },
    pl: {
      q: "Czy masz do nas jakieś pytania?",
      a: [
        "Zespół: wielkość, kto za co odpowiada, podział pracy z klientem z USA",
        "Migracja: które usługi Elixir najpierw, jak weryfikowana jest zgodność, harmonogram",
        "Stack: które usługi AWS, jaki broker wiadomości, narzędzia obserwowalności",
        "Proces: częstotliwość wdrożeń, dyżury, code review, wspólne godziny z USA",
        "Sukces: co powinienem dostarczyć w pierwszych 3 miesiącach?"
      ]
    }
  },
  {
    id: "ai-dev", topic: "Interview",
    en: {
      q: "How do you use AI tools like Claude Code or Copilot?",
      a: [
        "Boilerplate, refactors, test scaffolding, exploring unfamiliar code",
        "First-pass review of my own diff before opening a PR",
        "I review every line – I own the change, not the tool",
        "Keep changes small; tests are the safety net",
        "No secrets or client data in prompts; follow team policy"
      ]
    },
    pl: {
      q: "Jak korzystasz z narzędzi AI, np. Claude Code czy Copilot?",
      a: [
        "Boilerplate, refaktoryzacje, szkielety testów, poznawanie nieznanego kodu",
        "Wstępny przegląd własnego diffa przed otwarciem PR",
        "Przeglądam każdą linię – to ja odpowiadam za zmianę, nie narzędzie",
        "Małe zmiany; testy jako siatka bezpieczeństwa",
        "Żadnych sekretów ani danych klienta w promptach; zgodnie z polityką zespołu"
      ]
    }
  },

  // ───────────────────────── JavaScript ─────────────────────────
  {
    id: "promise-order", topic: "JavaScript",
    en: {
      q: "Microtasks vs macrotasks – what is logged first: `setTimeout(fn, 0)` or `Promise.resolve().then(fn)`?",
      a: [
        "Promise callback runs first",
        "Microtasks: `.then/catch/finally`, `await` continuations, `queueMicrotask` (Node: `process.nextTick` runs even before them)",
        "Macrotasks: `setTimeout`, `setInterval`, I/O callbacks, UI events",
        "After each macrotask the whole microtask queue is drained",
        "Endless microtasks can starve timers and I/O"
      ]
    },
    pl: {
      q: "Mikrozadania vs makrozadania – co wypisze się pierwsze: `setTimeout(fn, 0)` czy `Promise.resolve().then(fn)`?",
      a: [
        "Najpierw callback Promise",
        "Mikrozadania: `.then/catch/finally`, kontynuacje `await`, `queueMicrotask` (Node: `process.nextTick` jeszcze wcześniej)",
        "Makrozadania: `setTimeout`, `setInterval`, callbacki I/O, zdarzenia UI",
        "Po każdym makrozadaniu opróżniana jest cała kolejka mikrozadań",
        "Nieskończone mikrozadania mogą zagłodzić timery i I/O"
      ]
    }
  },
  {
    id: "closure", topic: "JavaScript",
    en: {
      q: "What is a closure? Give a practical use.",
      a: [
        "Function + access to variables of the scope where it was defined",
        "Variables live as long as the function referencing them",
        "Uses: private state (counter factory), callbacks, memoization, debounce",
        "Pitfall: can keep large objects alive → memory leaks"
      ]
    },
    pl: {
      q: "Czym jest domknięcie? Podaj praktyczne zastosowanie.",
      a: [
        "Funkcja + dostęp do zmiennych z zakresu, w którym ją zdefiniowano",
        "Zmienne żyją tak długo, jak odwołująca się do nich funkcja",
        "Zastosowania: prywatny stan (fabryka licznika), callbacki, memoizacja, debounce",
        "Pułapka: może trzymać duże obiekty w pamięci → wycieki"
      ]
    }
  },
  {
    id: "let-const", topic: "JavaScript",
    en: {
      q: "`var` vs `let` vs `const` – and what is hoisting?",
      a: [
        "`var`: function-scoped, redeclarable, hoisted and initialised to `undefined`",
        "`let`/`const`: block-scoped, hoisted but in the Temporal Dead Zone until declared → `ReferenceError`",
        "`const` blocks reassignment, not mutation (`const obj` can still change)",
        "Function declarations are fully hoisted; function expressions are not",
        "Default to `const`, `let` when reassigning, never `var`"
      ]
    },
    pl: {
      q: "`var` vs `let` vs `const` – i czym jest hoisting?",
      a: [
        "`var`: zakres funkcji, można ponownie deklarować, hoistowany i inicjowany jako `undefined`",
        "`let`/`const`: zakres blokowy, hoistowane, ale w Temporal Dead Zone do deklaracji → `ReferenceError`",
        "`const` blokuje ponowne przypisanie, nie mutację (`const obj` można zmieniać)",
        "Deklaracje funkcji są hoistowane w całości; wyrażenia funkcyjne nie",
        "Domyślnie `const`, `let` przy ponownym przypisaniu, nigdy `var`"
      ]
    }
  },
  {
    id: "this-binding", topic: "JavaScript",
    en: {
      q: "How is `this` determined in JavaScript?",
      a: [
        "Decided at call time, not definition time",
        "`obj.method()` → `obj`; plain call → `undefined` (strict) / global object",
        "`new Fn()` → the new instance; `call/apply/bind` → explicit value",
        "Arrow functions have no own `this` – they take it from the enclosing scope",
        "Pitfall: passing `obj.method` as a callback loses `this` → use `bind` or an arrow"
      ]
    },
    pl: {
      q: "Jak ustalana jest wartość `this` w JavaScript?",
      a: [
        "W momencie wywołania, nie definicji",
        "`obj.method()` → `obj`; zwykłe wywołanie → `undefined` (strict) / obiekt globalny",
        "`new Fn()` → nowa instancja; `call/apply/bind` → jawnie podana wartość",
        "Funkcje strzałkowe nie mają własnego `this` – biorą je z otaczającego zakresu",
        "Pułapka: przekazanie `obj.method` jako callbacku gubi `this` → `bind` albo strzałka"
      ]
    }
  },
  {
    id: "prototypes", topic: "JavaScript",
    en: {
      q: "Explain prototypal inheritance.",
      a: [
        "Every object has a hidden `[[Prototype]]` link",
        "Property lookup walks the chain until found or `null`",
        "Methods on `Fn.prototype` are shared by all instances",
        "`class` is syntax sugar over prototypes; `extends` links the chains",
        "`Object.create(proto)` creates an object with a given prototype"
      ]
    },
    pl: {
      q: "Wyjaśnij dziedziczenie prototypowe.",
      a: [
        "Każdy obiekt ma ukryte łącze `[[Prototype]]`",
        "Szukanie właściwości idzie w górę łańcucha aż do znalezienia lub `null`",
        "Metody w `Fn.prototype` są współdzielone przez wszystkie instancje",
        "`class` to lukier składniowy na prototypy; `extends` łączy łańcuchy",
        "`Object.create(proto)` tworzy obiekt z podanym prototypem"
      ]
    }
  },
  {
    id: "equality", topic: "JavaScript",
    en: {
      q: "`==` vs `===` vs `Object.is`?",
      a: [
        "`==` coerces types (`'1' == 1` → true, `null == undefined` → true)",
        "`===` no coercion – default choice",
        "`Object.is`: like `===` but `NaN` equals `NaN`, `+0` ≠ `-0`",
        "Objects compare by reference in all three"
      ]
    },
    pl: {
      q: "`==` vs `===` vs `Object.is`?",
      a: [
        "`==` konwertuje typy (`'1' == 1` → true, `null == undefined` → true)",
        "`===` bez konwersji – wybór domyślny",
        "`Object.is`: jak `===`, ale `NaN` równa się `NaN`, `+0` ≠ `-0`",
        "Obiekty porównywane są przez referencję we wszystkich trzech"
      ]
    }
  },
  {
    id: "copying", topic: "JavaScript",
    en: {
      q: "Shallow vs deep copy – how do you deep-copy an object?",
      a: [
        "Shallow: new outer object, nested objects shared (`{...obj}`, `Object.assign`)",
        "Deep: nested data copied too",
        "`structuredClone(obj)` – built-in; handles Date, Map, Set, cycles; not functions/classes",
        "`JSON.parse(JSON.stringify())` loses Date, undefined, Map, functions, fails on cycles",
        "Often better: immutable updates – copy only the changed path"
      ]
    },
    pl: {
      q: "Płytka vs głęboka kopia – jak zrobić głęboką kopię obiektu?",
      a: [
        "Płytka: nowy obiekt zewnętrzny, zagnieżdżone współdzielone (`{...obj}`, `Object.assign`)",
        "Głęboka: kopiowane także dane zagnieżdżone",
        "`structuredClone(obj)` – wbudowane; obsługuje Date, Map, Set, cykle; nie funkcje/klasy",
        "`JSON.parse(JSON.stringify())` gubi Date, undefined, Map, funkcje, pada na cyklach",
        "Często lepiej: niemutowalne aktualizacje – kopiuj tylko zmienianą ścieżkę"
      ]
    }
  },
  {
    id: "promise-combinators", topic: "JavaScript",
    en: {
      q: "`Promise.all` vs `allSettled` vs `race` vs `any`?",
      a: [
        "`all`: resolves with all values; rejects on first rejection (others keep running)",
        "`allSettled`: waits for all, returns `{status, value|reason}` – never rejects",
        "`race`: settles with the first settled promise (good for timeouts)",
        "`any`: first fulfilled; rejects with `AggregateError` if all fail",
        "`await` in a loop = sequential; `Promise.all` = parallel; limit concurrency with `p-limit` or batching"
      ]
    },
    pl: {
      q: "`Promise.all` vs `allSettled` vs `race` vs `any`?",
      a: [
        "`all`: zwraca wszystkie wartości; odrzuca przy pierwszym błędzie (reszta dalej działa)",
        "`allSettled`: czeka na wszystkie, zwraca `{status, value|reason}` – nigdy nie odrzuca",
        "`race`: wynik pierwszego zakończonego (przydatne do timeoutów)",
        "`any`: pierwszy spełniony; `AggregateError`, gdy wszystkie zawiodą",
        "`await` w pętli = sekwencyjnie; `Promise.all` = równolegle; ograniczenie współbieżności przez `p-limit` lub batchowanie"
      ]
    }
  },
  {
    id: "debounce-throttle", topic: "JavaScript",
    en: {
      q: "Debounce vs throttle?",
      a: [
        "Debounce: run once after calls stop for X ms (search input, autosave)",
        "Throttle: run at most once per X ms (scroll, resize, mousemove)",
        "Both implemented with a closure over a timer / timestamp"
      ]
    },
    pl: {
      q: "Debounce vs throttle?",
      a: [
        "Debounce: wykonaj raz po X ms od ostatniego wywołania (wyszukiwarka, autozapis)",
        "Throttle: wykonuj najwyżej raz na X ms (scroll, resize, mousemove)",
        "Oba zaimplementowane domknięciem na timerze / znaczniku czasu"
      ]
    }
  },
  {
    id: "esm-cjs", topic: "JavaScript",
    en: {
      q: "ES Modules vs CommonJS?",
      a: [
        "CJS: `require`/`module.exports`, synchronous, resolved at runtime",
        "ESM: `import`/`export`, static → tree-shaking, top-level `await`, async loading",
        "Node picks via `.mjs`/`.cjs` or `\"type\": \"module\"` in package.json",
        "ESM can import CJS; CJS needs dynamic `import()` for ESM (newer Node allows `require(esm)`)"
      ]
    },
    pl: {
      q: "ES Modules vs CommonJS?",
      a: [
        "CJS: `require`/`module.exports`, synchroniczne, rozwiązywane w runtime",
        "ESM: `import`/`export`, statyczne → tree-shaking, top-level `await`, ładowanie asynchroniczne",
        "Node wybiera po `.mjs`/`.cjs` lub `\"type\": \"module\"` w package.json",
        "ESM może importować CJS; CJS potrzebuje dynamicznego `import()` dla ESM (nowszy Node pozwala na `require(esm)`)"
      ]
    }
  },
  {
    id: "map-object", topic: "JavaScript",
    en: {
      q: "When use `Map`/`Set` instead of plain objects/arrays? What are `WeakMap`s for?",
      a: [
        "`Map`: any key type, keeps insertion order, `.size`, fast frequent add/delete, no prototype keys",
        "`Set`: unique values, O(1) `has` vs O(n) `array.includes`",
        "`WeakMap`/`WeakSet`: keys are objects held weakly → garbage-collected; for metadata/caches per object",
        "Plain objects: fixed-shape records, JSON-serialisable"
      ]
    },
    pl: {
      q: "Kiedy `Map`/`Set` zamiast obiektów/tablic? Do czego `WeakMap`?",
      a: [
        "`Map`: klucze dowolnego typu, zachowuje kolejność, `.size`, szybkie dodawanie/usuwanie, brak kluczy z prototypu",
        "`Set`: unikalne wartości, `has` O(1) vs `array.includes` O(n)",
        "`WeakMap`/`WeakSet`: klucze-obiekty trzymane słabo → mogą zostać zebrane przez GC; metadane/cache per obiekt",
        "Zwykłe obiekty: rekordy o stałym kształcie, serializowalne do JSON"
      ]
    }
  },

  // ───────────────────────── TypeScript ─────────────────────────
  {
    id: "type-vs-interface", topic: "TypeScript",
    en: {
      q: "`type` vs `interface`?",
      a: [
        "Both describe object shapes; mostly interchangeable",
        "`interface`: declaration merging, `extends`, slightly better error messages",
        "`type`: unions, intersections, tuples, mapped/conditional types, primitives aliases",
        "Common rule: `interface` for public object contracts, `type` for everything else – be consistent"
      ]
    },
    pl: {
      q: "`type` vs `interface`?",
      a: [
        "Oba opisują kształt obiektu; w większości zamienne",
        "`interface`: łączenie deklaracji, `extends`, nieco czytelniejsze błędy",
        "`type`: unie, przecięcia, krotki, typy mapowane/warunkowe, aliasy prymitywów",
        "Częsta zasada: `interface` dla publicznych kontraktów obiektów, `type` dla reszty – ważna spójność"
      ]
    }
  },
  {
    id: "any-unknown-never", topic: "TypeScript",
    en: {
      q: "`any` vs `unknown` vs `never`?",
      a: [
        "`any`: disables type checking – avoid",
        "`unknown`: safe top type – must narrow before use (ideal for `JSON.parse`, `catch (e)`)",
        "`never`: no possible value – functions that throw, exhaustive `switch` checks",
        "`void`: function returns nothing useful"
      ]
    },
    pl: {
      q: "`any` vs `unknown` vs `never`?",
      a: [
        "`any`: wyłącza sprawdzanie typów – unikać",
        "`unknown`: bezpieczny typ nadrzędny – trzeba zawęzić przed użyciem (idealny dla `JSON.parse`, `catch (e)`)",
        "`never`: brak możliwej wartości – funkcje rzucające wyjątek, wyczerpujący `switch`",
        "`void`: funkcja nie zwraca nic użytecznego"
      ]
    }
  },
  {
    id: "generics", topic: "TypeScript",
    en: {
      q: "What are generics? Give an example with a constraint.",
      a: [
        "Type parameters – reuse logic while preserving types",
        "`function first<T>(arr: T[]): T | undefined`",
        "Constraint: `function getId<T extends { id: string }>(x: T)`",
        "`keyof`: `function pluck<T, K extends keyof T>(obj: T, key: K): T[K]`",
        "Defaults: `type ApiResponse<T = unknown> = { data: T }`"
      ]
    },
    pl: {
      q: "Czym są generyki? Podaj przykład z ograniczeniem.",
      a: [
        "Parametry typów – wielokrotne użycie logiki z zachowaniem typów",
        "`function first<T>(arr: T[]): T | undefined`",
        "Ograniczenie: `function getId<T extends { id: string }>(x: T)`",
        "`keyof`: `function pluck<T, K extends keyof T>(obj: T, key: K): T[K]`",
        "Domyślne: `type ApiResponse<T = unknown> = { data: T }`"
      ]
    }
  },
  {
    id: "utility-types", topic: "TypeScript",
    en: {
      q: "Which built-in utility types do you use most?",
      a: [
        "`Partial<T>`, `Required<T>`, `Readonly<T>`",
        "`Pick<T, K>`, `Omit<T, K>` – DTOs from entities",
        "`Record<K, V>` – dictionaries",
        "`ReturnType<F>`, `Parameters<F>`, `Awaited<P>`",
        "`NonNullable<T>`, `Exclude<U, X>`, `Extract<U, X>`"
      ]
    },
    pl: {
      q: "Których wbudowanych typów narzędziowych używasz najczęściej?",
      a: [
        "`Partial<T>`, `Required<T>`, `Readonly<T>`",
        "`Pick<T, K>`, `Omit<T, K>` – DTO z encji",
        "`Record<K, V>` – słowniki",
        "`ReturnType<F>`, `Parameters<F>`, `Awaited<P>`",
        "`NonNullable<T>`, `Exclude<U, X>`, `Extract<U, X>`"
      ]
    }
  },
  {
    id: "narrowing", topic: "TypeScript",
    en: {
      q: "What are discriminated unions and type narrowing?",
      a: [
        "Union with a shared literal field: `{ status: 'ok'; data: T } | { status: 'error'; error: string }`",
        "Checking the field narrows the type in each branch",
        "Other narrowing: `typeof`, `instanceof`, `in`, truthiness",
        "Custom guard: `function isUser(x: unknown): x is User`",
        "Exhaustiveness: `default: const _x: never = value` → compile error when a case is missing"
      ]
    },
    pl: {
      q: "Czym są unie dyskryminowane i zawężanie typów?",
      a: [
        "Unia ze wspólnym polem literałowym: `{ status: 'ok'; data: T } | { status: 'error'; error: string }`",
        "Sprawdzenie pola zawęża typ w każdej gałęzi",
        "Inne zawężanie: `typeof`, `instanceof`, `in`, truthiness",
        "Własny guard: `function isUser(x: unknown): x is User`",
        "Wyczerpywalność: `default: const _x: never = value` → błąd kompilacji, gdy brakuje przypadku"
      ]
    }
  },
  {
    id: "structural-typing", topic: "TypeScript",
    en: {
      q: "TypeScript uses structural typing – what does that mean?",
      a: [
        "Compatibility is by shape, not by name",
        "Any object with the required properties fits the type",
        "Excess property check only for fresh object literals",
        "Need nominal IDs (`UserId` vs `OrderId`)? → branded types: `string & { __brand: 'UserId' }`"
      ]
    },
    pl: {
      q: "TypeScript stosuje typowanie strukturalne – co to znaczy?",
      a: [
        "Zgodność typów wynika z kształtu, nie z nazwy",
        "Każdy obiekt z wymaganymi polami pasuje do typu",
        "Sprawdzanie nadmiarowych pól tylko dla świeżych literałów obiektów",
        "Potrzebne nominalne ID (`UserId` vs `OrderId`)? → typy brandowane: `string & { __brand: 'UserId' }`"
      ]
    }
  },
  {
    id: "runtime-validation", topic: "TypeScript",
    en: {
      q: "Why is TypeScript not enough to validate API input?",
      a: [
        "Types are erased at compile time – no runtime checks",
        "Request bodies, env vars, 3rd-party responses are `unknown` at runtime",
        "Validate at boundaries with a schema: Zod, Valibot, class-validator, JSON Schema (Ajv)",
        "Zod: `const User = z.object({...}); type User = z.infer<typeof User>` – one source of truth"
      ]
    },
    pl: {
      q: "Dlaczego TypeScript nie wystarcza do walidacji danych wejściowych API?",
      a: [
        "Typy są usuwane przy kompilacji – brak sprawdzania w runtime",
        "Body żądań, zmienne środowiskowe, odpowiedzi zewnętrznych API to w runtime `unknown`",
        "Walidacja na granicach schematem: Zod, Valibot, class-validator, JSON Schema (Ajv)",
        "Zod: `const User = z.object({...}); type User = z.infer<typeof User>` – jedno źródło prawdy"
      ]
    }
  },
  {
    id: "enums", topic: "TypeScript",
    en: {
      q: "Enums vs string literal unions?",
      a: [
        "Enums generate runtime JS; numeric enums accept any number",
        "Union `'draft' | 'published'` – zero runtime cost, great inference",
        "Need values at runtime? `const Status = {...} as const; type Status = typeof Status[keyof typeof Status]`",
        "Prefer unions / `as const` objects in most codebases"
      ]
    },
    pl: {
      q: "Enumy vs unie literałów tekstowych?",
      a: [
        "Enumy generują kod JS; numeryczne enumy akceptują dowolną liczbę",
        "Unia `'draft' | 'published'` – zero kosztu w runtime, dobra inferencja",
        "Potrzebne wartości w runtime? `const Status = {...} as const; type Status = typeof Status[keyof typeof Status]`",
        "W większości projektów lepsze unie / obiekty `as const`"
      ]
    }
  },
  {
    id: "advanced-types", topic: "TypeScript",
    en: {
      q: "Explain mapped and conditional types (and `infer`).",
      a: [
        "Mapped: iterate keys – `{ [K in keyof T]?: T[K] }` (this is `Partial`)",
        "Modifiers: `readonly`, `?`, remove with `-readonly`, `-?`; key remap with `as`",
        "Conditional: `T extends U ? X : Y`; distributes over unions",
        "`infer` extracts a type: `T extends Promise<infer R> ? R : T`",
        "Template literal types: `on${Capitalize<E>}` → `onClick`"
      ]
    },
    pl: {
      q: "Wyjaśnij typy mapowane i warunkowe (oraz `infer`).",
      a: [
        "Mapowane: iteracja po kluczach – `{ [K in keyof T]?: T[K] }` (to jest `Partial`)",
        "Modyfikatory: `readonly`, `?`, usuwanie przez `-readonly`, `-?`; zmiana kluczy przez `as`",
        "Warunkowe: `T extends U ? X : Y`; rozkładają się na unie",
        "`infer` wyciąga typ: `T extends Promise<infer R> ? R : T`",
        "Typy template literal: `on${Capitalize<E>}` → `onClick`"
      ]
    }
  },
  {
    id: "satisfies", topic: "TypeScript",
    en: {
      q: "What does `satisfies` do vs a type annotation or `as`?",
      a: [
        "`const x: T = ...` – checks and widens to `T` (loses literal info)",
        "`const x = ... satisfies T` – checks against `T` but keeps the narrow inferred type",
        "`as T` – assertion, no real check; avoid except at trusted boundaries",
        "Typical use: config objects, route maps"
      ]
    },
    pl: {
      q: "Co robi `satisfies` w porównaniu z adnotacją typu lub `as`?",
      a: [
        "`const x: T = ...` – sprawdza i poszerza do `T` (traci informację o literałach)",
        "`const x = ... satisfies T` – sprawdza zgodność z `T`, ale zachowuje wąski wywnioskowany typ",
        "`as T` – asercja, bez realnego sprawdzenia; unikać poza zaufanymi granicami",
        "Typowe użycie: obiekty konfiguracyjne, mapy tras"
      ]
    }
  },
  {
    id: "ts-strict", topic: "TypeScript",
    en: {
      q: "How would you introduce strict TypeScript into an existing codebase?",
      a: [
        "`strict: true` enables `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`…",
        "JS → TS: `allowJs` + `checkJs`, migrate file by file, starting with shared types and API boundaries",
        "Existing TS: enable flags one by one, fix per module; `// @ts-expect-error` with a ticket, not `any`",
        "Also useful: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`",
        "Type-check in CI (`tsc --noEmit`) so it cannot regress"
      ]
    },
    pl: {
      q: "Jak wprowadziłbyś strict TypeScript do istniejącego projektu?",
      a: [
        "`strict: true` włącza `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`…",
        "JS → TS: `allowJs` + `checkJs`, migracja plik po pliku, od wspólnych typów i granic API",
        "Istniejący TS: włączaj flagi po kolei, poprawiaj moduł po module; `// @ts-expect-error` z ticketem, nie `any`",
        "Przydatne też: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`",
        "Sprawdzanie typów w CI (`tsc --noEmit`), żeby nie było regresji"
      ]
    }
  },
  // ───────────────────────── Node.js ─────────────────────────
  {
    id: "javascript-runtime", topic: "Node.js",
    en: {
      q: "How does the Node.js event loop work?",
      a: [
        "Single JS thread + libuv; I/O is non-blocking",
        "Phases: timers → pending callbacks → poll (I/O) → check (`setImmediate`) → close callbacks",
        "Network I/O uses OS async APIs (epoll/kqueue/IOCP)",
        "fs, `dns.lookup`, crypto, zlib use the libuv thread pool (default 4, `UV_THREADPOOL_SIZE`)",
        "`process.nextTick` and promise microtasks run between each callback",
        "CPU-heavy sync code blocks every request in the process"
      ]
    },
    pl: {
      q: "Jak działa pętla zdarzeń w Node.js?",
      a: [
        "Jeden wątek JS + libuv; I/O nieblokujące",
        "Fazy: timers → pending callbacks → poll (I/O) → check (`setImmediate`) → close callbacks",
        "I/O sieciowe przez asynchroniczne API systemu (epoll/kqueue/IOCP)",
        "fs, `dns.lookup`, crypto, zlib korzystają z puli wątków libuv (domyślnie 4, `UV_THREADPOOL_SIZE`)",
        "`process.nextTick` i mikrozadania Promise wykonują się między każdym callbackiem",
        "Ciężki synchroniczny kod CPU blokuje wszystkie żądania w procesie"
      ]
    }
  },
  {
    id: "nexttick-setimmediate", topic: "Node.js",
    en: {
      q: "`process.nextTick` vs `setImmediate` vs `setTimeout(fn, 0)`?",
      a: [
        "`nextTick`: before any other microtask, right after the current operation",
        "Promise `.then`: microtask, after nextTick queue",
        "`setImmediate`: check phase, after poll (I/O)",
        "`setTimeout(0)`: timers phase (min ~1 ms); order vs `setImmediate` random in main module, `setImmediate` first inside I/O callbacks",
        "Recursive `nextTick` can starve I/O – prefer `setImmediate` for yielding"
      ]
    },
    pl: {
      q: "`process.nextTick` vs `setImmediate` vs `setTimeout(fn, 0)`?",
      a: [
        "`nextTick`: przed innymi mikrozadaniami, zaraz po bieżącej operacji",
        "Promise `.then`: mikrozadanie, po kolejce nextTick",
        "`setImmediate`: faza check, po poll (I/O)",
        "`setTimeout(0)`: faza timers (min ~1 ms); kolejność względem `setImmediate` losowa w module głównym, w callbacku I/O `setImmediate` pierwszy",
        "Rekurencyjny `nextTick` może zagłodzić I/O – do oddania sterowania lepszy `setImmediate`"
      ]
    }
  },
  {
    id: "node-fit", topic: "Node.js",
    en: {
      q: "When is Node.js a good fit, and when a poor one?",
      a: [
        "Good: I/O-bound APIs, BFFs, real-time (WebSockets), streaming, serverless",
        "Good: shared TypeScript with frontend, huge npm ecosystem",
        "Poor: CPU-heavy work (video transcoding, ML, big computations) on the main thread",
        "Mitigate: worker threads, job queue + workers, or a service in another language"
      ]
    },
    pl: {
      q: "Kiedy Node.js to dobry wybór, a kiedy zły?",
      a: [
        "Dobry: API ograniczone przez I/O, BFF, real-time (WebSockets), streaming, serverless",
        "Dobry: wspólny TypeScript z frontendem, ogromny ekosystem npm",
        "Zły: ciężka praca CPU (transkodowanie wideo, ML, duże obliczenia) w głównym wątku",
        "Rozwiązania: worker threads, kolejka zadań + workery lub usługa w innym języku"
      ]
    }
  },
  {
    id: "cpu-work", topic: "Node.js",
    en: {
      q: "`worker_threads` vs `child_process` vs `cluster`?",
      a: [
        "`worker_threads`: threads in the same process, own event loop, share memory via `SharedArrayBuffer`; for CPU tasks",
        "`child_process`: separate OS process (`spawn`, `fork`, `exec`); run other programs, full isolation",
        "`cluster`: fork N processes sharing one port – use all CPU cores",
        "In containers/K8s usually one process per pod and scale replicas instead of `cluster`"
      ]
    },
    pl: {
      q: "`worker_threads` vs `child_process` vs `cluster`?",
      a: [
        "`worker_threads`: wątki w tym samym procesie, własna pętla zdarzeń, wspólna pamięć przez `SharedArrayBuffer`; do zadań CPU",
        "`child_process`: osobny proces systemowy (`spawn`, `fork`, `exec`); uruchamianie innych programów, pełna izolacja",
        "`cluster`: fork N procesów na jednym porcie – wykorzystanie wszystkich rdzeni",
        "W kontenerach/K8s zwykle jeden proces na pod i skalowanie replik zamiast `cluster`"
      ]
    }
  },
  {
    id: "streams", topic: "Node.js",
    en: {
      q: "How would you process a multi-gigabyte upload in Node.js?",
      a: [
        "Stream it – never buffer the whole file in memory",
        "Use `stream.pipeline()` (handles errors + cleanup) and respect backpressure",
        "Enforce size/type limits early; validate records incrementally",
        "Better for big files: presigned URL → client uploads straight to S3",
        "Heavy processing → return `202 Accepted` + job ID, process in a worker, expose status"
      ]
    },
    pl: {
      q: "Jak przetworzyłbyś w Node.js plik o rozmiarze kilku GB?",
      a: [
        "Strumieniowo – nigdy nie buforuj całego pliku w pamięci",
        "`stream.pipeline()` (obsługuje błędy i sprzątanie) oraz respektowanie backpressure",
        "Wczesne limity rozmiaru/typu; walidacja rekordów przyrostowo",
        "Lepiej dla dużych plików: presigned URL → klient wysyła prosto do S3",
        "Ciężkie przetwarzanie → `202 Accepted` + ID zadania, przetwarzanie w workerze, endpoint statusu"
      ]
    }
  },
  {
    id: "backpressure", topic: "Node.js",
    en: {
      q: "What is backpressure in streams?",
      a: [
        "Consumer slower than producer → data piles up in memory",
        "`writable.write()` returns `false` when the buffer exceeds `highWaterMark`",
        "Producer should pause until the `'drain'` event",
        "`pipe()` / `pipeline()` handle it automatically",
        "Ignoring it → unbounded memory growth, OOM crashes"
      ]
    },
    pl: {
      q: "Czym jest backpressure w strumieniach?",
      a: [
        "Odbiorca wolniejszy niż producent → dane gromadzą się w pamięci",
        "`writable.write()` zwraca `false`, gdy bufor przekroczy `highWaterMark`",
        "Producent powinien wstrzymać się do zdarzenia `'drain'`",
        "`pipe()` / `pipeline()` obsługują to automatycznie",
        "Ignorowanie → nieograniczony wzrost pamięci, awarie OOM"
      ]
    }
  },
  {
    id: "express", topic: "Node.js",
    en: {
      q: "How do you structure an Express API so it stays maintainable?",
      a: [
        "Layers: routes/controllers (HTTP) → services (business logic) → repositories (DB)",
        "Controllers: validate input, call service, map result to response",
        "Services are framework-agnostic → easy to unit test",
        "Cross-cutting in middleware: auth, logging, request ID, rate limiting",
        "One central error handler; config validated at startup",
        "Organise by feature/module, not by technical type, once the app grows"
      ]
    },
    pl: {
      q: "Jak zorganizować API w Expressie, żeby było łatwe w utrzymaniu?",
      a: [
        "Warstwy: trasy/kontrolery (HTTP) → serwisy (logika biznesowa) → repozytoria (DB)",
        "Kontrolery: walidacja wejścia, wywołanie serwisu, mapowanie na odpowiedź",
        "Serwisy niezależne od frameworka → łatwe testy jednostkowe",
        "Sprawy przekrojowe w middleware: auth, logowanie, request ID, rate limiting",
        "Jeden centralny handler błędów; konfiguracja walidowana przy starcie",
        "Przy większej aplikacji podział na moduły/funkcje, nie typy techniczne"
      ]
    }
  },
  {
    id: "middleware", topic: "Node.js",
    en: {
      q: "How does Express middleware work?",
      a: [
        "Function `(req, res, next)` run in registration order",
        "Either ends the response or calls `next()`",
        "`next(err)` skips to error middleware `(err, req, res, next)` – 4 args",
        "Scoped: app-level, router-level, route-level",
        "Order matters: body parser before routes, error handler last"
      ]
    },
    pl: {
      q: "Jak działa middleware w Expressie?",
      a: [
        "Funkcja `(req, res, next)` wykonywana w kolejności rejestracji",
        "Albo kończy odpowiedź, albo wywołuje `next()`",
        "`next(err)` przeskakuje do middleware błędów `(err, req, res, next)` – 4 argumenty",
        "Zakres: aplikacja, router, pojedyncza trasa",
        "Kolejność ma znaczenie: parser body przed trasami, handler błędów na końcu"
      ]
    }
  },
  {
    id: "async-errors", topic: "Node.js",
    en: {
      q: "How do you handle errors from async route handlers?",
      a: [
        "Express 4: rejected promises are not caught → wrap handlers (`asyncHandler`) or `express-async-errors`",
        "Express 5: rejected promises forwarded to error middleware automatically",
        "Custom error classes (`NotFoundError`, `ValidationError`) → mapped to status codes centrally",
        "Log unexpected errors with request ID; return generic 500 without stack traces",
        "Process-level: `unhandledRejection` / `uncaughtException` → log and exit, let orchestrator restart"
      ]
    },
    pl: {
      q: "Jak obsługiwać błędy z asynchronicznych handlerów tras?",
      a: [
        "Express 4: odrzucone Promise nie są łapane → wrapper (`asyncHandler`) lub `express-async-errors`",
        "Express 5: odrzucone Promise trafiają do middleware błędów automatycznie",
        "Własne klasy błędów (`NotFoundError`, `ValidationError`) → centralne mapowanie na kody statusu",
        "Nieoczekiwane błędy logowane z request ID; ogólne 500 bez stack trace",
        "Poziom procesu: `unhandledRejection` / `uncaughtException` → log i wyjście, orkiestrator restartuje"
      ]
    }
  },
  {
    id: "express-vs-nest", topic: "Node.js",
    en: {
      q: "Express vs NestJS vs Fastify – which would you choose?",
      a: [
        "Express: minimal, unopinionated, huge ecosystem; structure is up to you",
        "Fastify: faster, built-in JSON Schema validation/serialisation, plugin system, good TS",
        "NestJS: opinionated – modules, DI, decorators, guards/pipes; runs on Express or Fastify",
        "Nest pays off in large teams / many services; Express/Fastify for small, focused services",
        "Choice driven by team conventions and consistency across services"
      ]
    },
    pl: {
      q: "Express vs NestJS vs Fastify – co byś wybrał?",
      a: [
        "Express: minimalny, bez narzuconej struktury, ogromny ekosystem; struktura zależy od nas",
        "Fastify: szybszy, wbudowana walidacja/serializacja JSON Schema, system pluginów, dobry TS",
        "NestJS: narzuca strukturę – moduły, DI, dekoratory, guardy/pipe'y; działa na Express lub Fastify",
        "Nest opłaca się w dużych zespołach / wielu usługach; Express/Fastify dla małych usług",
        "Wybór wg konwencji zespołu i spójności między usługami"
      ]
    }
  },
  {
    id: "graceful-shutdown", topic: "Node.js",
    en: {
      q: "How do you implement graceful shutdown in a Node service?",
      a: [
        "Listen for `SIGTERM` (sent by Docker/Kubernetes)",
        "Fail readiness probe → stop receiving new traffic",
        "`server.close()` – finish in-flight requests",
        "Stop queue consumers, close DB pools / Redis connections",
        "Hard timeout (below K8s `terminationGracePeriodSeconds`, default 30 s) then `process.exit`",
        "Run node as PID 1 carefully: `CMD [\"node\", ...]` exec form or `--init`/tini so signals arrive"
      ]
    },
    pl: {
      q: "Jak zaimplementować graceful shutdown w usłudze Node?",
      a: [
        "Nasłuch na `SIGTERM` (wysyłany przez Docker/Kubernetes)",
        "Readiness probe zaczyna zwracać błąd → brak nowego ruchu",
        "`server.close()` – dokończenie trwających żądań",
        "Zatrzymanie konsumentów kolejek, zamknięcie puli DB / połączeń Redis",
        "Twardy timeout (poniżej `terminationGracePeriodSeconds` w K8s, domyślnie 30 s), potem `process.exit`",
        "Node jako PID 1: `CMD [\"node\", ...]` w formie exec lub `--init`/tini, żeby sygnały docierały"
      ]
    }
  },
  {
    id: "node-config", topic: "Node.js",
    en: {
      q: "How do you manage configuration and secrets in a Node service?",
      a: [
        "12-factor: config from environment variables, same image for every env",
        "Validate at startup (Zod / envalid) → fail fast on missing values",
        "Secrets from a secret store (AWS Secrets Manager, SSM, K8s Secrets), never in git or images",
        "`.env` only for local dev; never log secrets",
        "Typed config object passed around instead of `process.env` everywhere"
      ]
    },
    pl: {
      q: "Jak zarządzasz konfiguracją i sekretami w usłudze Node?",
      a: [
        "12-factor: konfiguracja ze zmiennych środowiskowych, ten sam obraz dla każdego środowiska",
        "Walidacja przy starcie (Zod / envalid) → szybki błąd przy brakach",
        "Sekrety z magazynu sekretów (AWS Secrets Manager, SSM, K8s Secrets), nigdy w git ani obrazach",
        "`.env` tylko lokalnie; nigdy nie logować sekretów",
        "Typowany obiekt konfiguracji zamiast `process.env` w całym kodzie"
      ]
    }
  },
  {
    id: "node-memory-leak", topic: "Node.js",
    en: {
      q: "A Node service's memory keeps growing until it crashes. How do you debug it?",
      a: [
        "Confirm: heap/RSS metrics over time, OOMKilled events",
        "Common causes: unbounded caches/maps, listeners never removed, timers, closures holding big objects, global arrays",
        "Reproduce under load; take heap snapshots (`--inspect`, Chrome DevTools, `--heapsnapshot-signal`) and compare",
        "Look for retained object counts growing between snapshots",
        "Fix: LRU with max size/TTL, remove listeners, `WeakMap`; add memory alerts"
      ]
    },
    pl: {
      q: "Pamięć usługi Node rośnie aż do awarii. Jak to debugujesz?",
      a: [
        "Potwierdzenie: metryki heap/RSS w czasie, zdarzenia OOMKilled",
        "Typowe przyczyny: nieograniczone cache/mapy, nieusuwane listenery, timery, domknięcia z dużymi obiektami, globalne tablice",
        "Odtworzenie pod obciążeniem; heap snapshoty (`--inspect`, Chrome DevTools, `--heapsnapshot-signal`) i porównanie",
        "Szukam obiektów, których liczba rośnie między snapshotami",
        "Naprawa: LRU z limitem/TTL, usuwanie listenerów, `WeakMap`; alerty na pamięć"
      ]
    }
  },
  {
    id: "event-loop-lag", topic: "Node.js",
    en: {
      q: "Latency spikes across all endpoints of a Node API. What might be blocking the event loop?",
      a: [
        "Sync CPU work: big `JSON.parse/stringify`, sorting huge arrays, regex backtracking (ReDoS)",
        "Sync APIs: `fs.readFileSync`, `crypto.pbkdf2Sync`, `zlib` sync",
        "Thread-pool saturation: many fs/crypto/dns calls with only 4 threads",
        "Measure: `perf_hooks.monitorEventLoopDelay`, APM event-loop lag metric, `--cpu-prof` / clinic.js flame graphs",
        "Fix: async variants, streaming, pagination, offload to worker threads"
      ]
    },
    pl: {
      q: "Skoki opóźnień na wszystkich endpointach API w Node. Co może blokować pętlę zdarzeń?",
      a: [
        "Synchroniczna praca CPU: duże `JSON.parse/stringify`, sortowanie ogromnych tablic, backtracking regex (ReDoS)",
        "API synchroniczne: `fs.readFileSync`, `crypto.pbkdf2Sync`, `zlib` sync",
        "Nasycenie puli wątków: dużo wywołań fs/crypto/dns przy 4 wątkach",
        "Pomiar: `perf_hooks.monitorEventLoopDelay`, metryka event-loop lag w APM, flame graphy `--cpu-prof` / clinic.js",
        "Naprawa: wersje asynchroniczne, streaming, paginacja, worker threads"
      ]
    }
  },
  {
    id: "node-security", topic: "Node.js",
    en: {
      q: "How do you harden a Node.js API?",
      a: [
        "Validate all input (schema); parameterised queries → no SQL/NoSQL injection",
        "`helmet` security headers, strict CORS, rate limiting, body size limits",
        "AuthN + AuthZ on every endpoint (check resource ownership → no IDOR)",
        "Dependencies: lockfile, `npm audit` / Dependabot / Snyk in CI",
        "Avoid `eval`, unsafe regex, prototype pollution (`__proto__` in merged JSON)",
        "Run as non-root, secrets out of code, no stack traces in responses"
      ]
    },
    pl: {
      q: "Jak zabezpieczasz API w Node.js?",
      a: [
        "Walidacja całego wejścia (schemat); zapytania parametryzowane → brak SQL/NoSQL injection",
        "Nagłówki `helmet`, restrykcyjny CORS, rate limiting, limity rozmiaru body",
        "AuthN + AuthZ na każdym endpoincie (sprawdzanie właściciela zasobu → brak IDOR)",
        "Zależności: lockfile, `npm audit` / Dependabot / Snyk w CI",
        "Unikać `eval`, niebezpiecznych regexów, prototype pollution (`__proto__` w scalanym JSON)",
        "Uruchamianie jako nie-root, sekrety poza kodem, brak stack trace w odpowiedziach"
      ]
    }
  },

  // ───────────────────────── React ─────────────────────────
  {
    id: "react-render", topic: "React",
    en: {
      q: "How does React rendering and reconciliation work?",
      a: [
        "UI = f(state): components return elements from props + state",
        "State change → component and its children re-render (by default)",
        "Render phase builds a new tree; React diffs it with the previous one (reconciliation)",
        "Commit phase applies only the DOM changes",
        "Different element type → subtree remounted; `key` identifies list items",
        "Re-render ≠ DOM update"
      ]
    },
    pl: {
      q: "Jak działa renderowanie i rekoncyliacja w React?",
      a: [
        "UI = f(stan): komponenty zwracają elementy na podstawie propsów i stanu",
        "Zmiana stanu → rerender komponentu i jego dzieci (domyślnie)",
        "Faza render buduje nowe drzewo; React porównuje je z poprzednim (rekoncyliacja)",
        "Faza commit nakłada tylko zmiany w DOM",
        "Inny typ elementu → poddrzewo montowane od nowa; `key` identyfikuje elementy listy",
        "Rerender ≠ aktualizacja DOM"
      ]
    }
  },
  {
    id: "react-hooks-rules", topic: "React",
    en: {
      q: "What are the rules of hooks, and why do they exist?",
      a: [
        "Call hooks only at the top level – not in conditions, loops or nested functions",
        "Call only from components or custom hooks",
        "Why: React tracks hook state by call order on each render",
        "Enforced by `eslint-plugin-react-hooks`"
      ]
    },
    pl: {
      q: "Jakie są zasady hooków i dlaczego istnieją?",
      a: [
        "Wywołuj hooki tylko na najwyższym poziomie – nie w warunkach, pętlach, zagnieżdżonych funkcjach",
        "Tylko w komponentach lub własnych hookach",
        "Dlaczego: React śledzi stan hooków po kolejności wywołań w każdym renderze",
        "Pilnuje tego `eslint-plugin-react-hooks`"
      ]
    }
  },
  {
    id: "use-effect", topic: "React",
    en: {
      q: "How do you use `useEffect` correctly?",
      a: [
        "For syncing with external systems: subscriptions, timers, DOM APIs, network",
        "Dependency array: every reactive value used inside; `[]` = on mount only",
        "Return a cleanup → runs before next effect and on unmount",
        "Fetching: ignore stale responses (`AbortController` / flag) to avoid race conditions",
        "Not for derived state – compute during render; not for event logic – use handlers",
        "StrictMode runs effects twice in dev to surface missing cleanups"
      ]
    },
    pl: {
      q: "Jak poprawnie używać `useEffect`?",
      a: [
        "Do synchronizacji z systemami zewnętrznymi: subskrypcje, timery, API DOM, sieć",
        "Tablica zależności: każda reaktywna wartość użyta w środku; `[]` = tylko przy montowaniu",
        "Zwróć funkcję cleanup → przed kolejnym efektem i przy odmontowaniu",
        "Fetch: ignoruj nieaktualne odpowiedzi (`AbortController` / flaga) – unikanie wyścigów",
        "Nie dla stanu pochodnego – licz w renderze; nie dla logiki zdarzeń – handlery",
        "StrictMode w dev uruchamia efekty dwa razy, żeby wykryć brak cleanupu"
      ]
    }
  },
  {
    id: "react-memo", topic: "React",
    en: {
      q: "`React.memo` vs `useMemo` vs `useCallback` – when do you use them?",
      a: [
        "`React.memo(Comp)`: skip re-render if props are shallow-equal",
        "`useMemo`: cache an expensive computed value / stable object reference",
        "`useCallback`: stable function reference (to keep a memoised child from re-rendering)",
        "Only after measuring (React Profiler) – memoisation has its own cost",
        "React Compiler can automate this in newer setups"
      ]
    },
    pl: {
      q: "`React.memo` vs `useMemo` vs `useCallback` – kiedy ich używasz?",
      a: [
        "`React.memo(Comp)`: pomija rerender, gdy propsy są płytko równe",
        "`useMemo`: cache kosztownej wartości / stabilna referencja obiektu",
        "`useCallback`: stabilna referencja funkcji (żeby zmemoizowane dziecko się nie renderowało)",
        "Dopiero po pomiarze (React Profiler) – memoizacja też kosztuje",
        "React Compiler może to automatyzować w nowszych projektach"
      ]
    }
  },
  {
    id: "react-keys", topic: "React",
    en: {
      q: "Why do list items need a `key`, and why not use the array index?",
      a: [
        "Key tells React which item is which between renders",
        "Stable unique ID → correct reuse of DOM and component state",
        "Index as key breaks on reorder/insert/delete: state and inputs attach to wrong items",
        "Index is OK only for static lists that never change order",
        "Changing a `key` deliberately forces a remount (reset state)"
      ]
    },
    pl: {
      q: "Dlaczego elementy listy potrzebują `key` i czemu nie indeks tablicy?",
      a: [
        "Klucz mówi Reactowi, który element jest którym między renderami",
        "Stabilne unikalne ID → poprawne ponowne użycie DOM i stanu komponentu",
        "Indeks psuje się przy zmianie kolejności/wstawianiu/usuwaniu: stan i inputy trafiają do złych elementów",
        "Indeks OK tylko dla statycznych list",
        "Celowa zmiana `key` wymusza ponowne zamontowanie (reset stanu)"
      ]
    }
  },
  {
    id: "react-state", topic: "React",
    en: {
      q: "Local state vs Context vs a global store (Zustand/Redux)?",
      a: [
        "Local `useState`/`useReducer`: owned by one component or small subtree – default",
        "Lift state up to the nearest common parent when siblings need it",
        "Context: rarely-changing cross-cutting values (theme, auth, locale); every consumer re-renders on change",
        "Store (Zustand/Redux Toolkit): shared, frequently updated client state; selectors limit re-renders",
        "Server data → TanStack Query / RTK Query, not a global store"
      ]
    },
    pl: {
      q: "Stan lokalny vs Context vs globalny store (Zustand/Redux)?",
      a: [
        "Lokalny `useState`/`useReducer`: należy do jednego komponentu lub małego poddrzewa – domyślnie",
        "Podnieś stan do najbliższego wspólnego rodzica, gdy potrzebuje go rodzeństwo",
        "Context: rzadko zmieniane wartości przekrojowe (motyw, auth, język); każdy konsument rerenderuje się przy zmianie",
        "Store (Zustand/Redux Toolkit): współdzielony, często zmieniany stan kliencki; selektory ograniczają rerendery",
        "Dane z serwera → TanStack Query / RTK Query, nie globalny store"
      ]
    }
  },
  {
    id: "server-state", topic: "React",
    en: {
      q: "Why use TanStack Query (React Query) for server data?",
      a: [
        "Server state ≠ client state: async, shared, can become stale",
        "Gives caching by query key, deduping, background refetch, retries",
        "Loading/error states, pagination, infinite queries out of the box",
        "Mutations + invalidation / optimistic updates",
        "Removes most hand-written `useEffect` fetching"
      ]
    },
    pl: {
      q: "Dlaczego TanStack Query (React Query) do danych z serwera?",
      a: [
        "Stan serwerowy ≠ stan kliencki: asynchroniczny, współdzielony, może się zdezaktualizować",
        "Cache po kluczu zapytania, deduplikacja, odświeżanie w tle, ponowienia",
        "Stany ładowania/błędu, paginacja, infinite queries od ręki",
        "Mutacje + invalidacja / optimistic updates",
        "Eliminuje większość ręcznego fetchowania w `useEffect`"
      ]
    }
  },
  {
    id: "controlled-inputs", topic: "React",
    en: {
      q: "Controlled vs uncontrolled components?",
      a: [
        "Controlled: value in React state, updated via `onChange` – single source of truth",
        "Uncontrolled: DOM keeps the value, read via `ref` / `FormData` / `defaultValue`",
        "Controlled: instant validation, conditional UI; costs a re-render per keystroke",
        "Large forms: React Hook Form (uncontrolled under the hood) + Zod schema"
      ]
    },
    pl: {
      q: "Komponenty kontrolowane vs niekontrolowane?",
      a: [
        "Kontrolowane: wartość w stanie React, aktualizowana przez `onChange` – jedno źródło prawdy",
        "Niekontrolowane: wartość trzyma DOM, odczyt przez `ref` / `FormData` / `defaultValue`",
        "Kontrolowane: natychmiastowa walidacja, warunkowe UI; kosztem rerenderu przy każdym znaku",
        "Duże formularze: React Hook Form (pod spodem niekontrolowany) + schemat Zod"
      ]
    }
  },
  {
    id: "error-boundaries", topic: "React",
    en: {
      q: "What are error boundaries?",
      a: [
        "Components that catch render errors in their subtree and show a fallback UI",
        "Class component with `getDerivedStateFromError` / `componentDidCatch` (or `react-error-boundary`)",
        "Do not catch: event handlers, async code, SSR, errors in the boundary itself",
        "Place around routes/widgets; report to Sentry in `componentDidCatch`"
      ]
    },
    pl: {
      q: "Czym są error boundaries?",
      a: [
        "Komponenty łapiące błędy renderowania w poddrzewie i pokazujące UI zastępcze",
        "Komponent klasowy z `getDerivedStateFromError` / `componentDidCatch` (lub `react-error-boundary`)",
        "Nie łapią: handlerów zdarzeń, kodu asynchronicznego, SSR, błędów samej granicy",
        "Wokół tras/widżetów; raportowanie do Sentry w `componentDidCatch`"
      ]
    }
  },
  {
    id: "custom-hooks", topic: "React",
    en: {
      q: "What makes a good custom hook?",
      a: [
        "Extracts reusable stateful logic, not UI (`useDebounce`, `useAuth`, `useMediaQuery`)",
        "Name starts with `use`; follows the rules of hooks",
        "Each call has its own independent state",
        "Small, clear return value; testable with `renderHook`"
      ]
    },
    pl: {
      q: "Co cechuje dobry własny hook?",
      a: [
        "Wydziela wielokrotną logikę ze stanem, nie UI (`useDebounce`, `useAuth`, `useMediaQuery`)",
        "Nazwa zaczyna się od `use`; przestrzega zasad hooków",
        "Każde wywołanie ma własny, niezależny stan",
        "Mała, czytelna wartość zwracana; testowalny przez `renderHook`"
      ]
    }
  },
  {
    id: "react-vs-vue", topic: "React",
    en: {
      q: "You have mostly Vue experience. How does React differ?",
      a: [
        "Reactivity: Vue tracks dependencies via proxies (fine-grained); React re-runs the component function on state change",
        "State: Vue mutates `ref`/`reactive`; React needs immutable updates (`setState(new)`)",
        "Templates + directives vs JSX (plain JS: `map`, ternaries)",
        "`computed` ≈ `useMemo` (or just compute in render); `watch` ≈ `useEffect`",
        "`v-model` ≈ controlled input; slots ≈ `children`/render props; Pinia ≈ Zustand",
        "Concepts transfer: components, props down / events up, composables ≈ custom hooks"
      ]
    },
    pl: {
      q: "Masz głównie doświadczenie z Vue. Czym różni się React?",
      a: [
        "Reaktywność: Vue śledzi zależności przez proxy (precyzyjnie); React ponownie wykonuje funkcję komponentu przy zmianie stanu",
        "Stan: w Vue mutujemy `ref`/`reactive`; React wymaga niemutowalnych aktualizacji (`setState(new)`)",
        "Szablony + dyrektywy vs JSX (zwykły JS: `map`, operator trójargumentowy)",
        "`computed` ≈ `useMemo` (lub liczenie w renderze); `watch` ≈ `useEffect`",
        "`v-model` ≈ kontrolowany input; sloty ≈ `children`/render props; Pinia ≈ Zustand",
        "Koncepcje się przenoszą: komponenty, props w dół / eventy w górę, composables ≈ własne hooki"
      ]
    }
  },
  {
    id: "react-experience", topic: "React",
    en: {
      q: "How much hands-on React experience do you have?",
      a: [
        "React + React Native at Redge, alongside Vue 2/3 – Vue has been the larger share",
        "React Native mobile/TV apps with Zustand for state",
        "Name one concrete feature I built in React and what I learned",
        "Deep TypeScript and component-architecture experience transfers directly"
      ]
    },
    pl: {
      q: "Jak duże masz praktyczne doświadczenie z Reactem?",
      a: [
        "React + React Native w Redge, obok Vue 2/3 – Vue stanowił większą część",
        "Aplikacje React Native mobile/TV ze stanem w Zustand",
        "Podaj jedną konkretną funkcję zbudowaną w React i czego się nauczyłeś",
        "Głębokie doświadczenie z TypeScriptem i architekturą komponentów przenosi się wprost"
      ]
    }
  },
  {
    id: "react-concurrent", topic: "React",
    en: {
      q: "What are Suspense, `useTransition` and concurrent rendering?",
      a: [
        "Concurrent rendering (React 18+): renders can be interrupted, urgent updates first",
        "`useTransition` / `startTransition`: mark updates as non-urgent (e.g. filtering a big list) – input stays responsive",
        "`useDeferredValue`: lagging copy of a value for expensive children",
        "`Suspense`: declarative loading fallback for lazy components and data (framework/Query support)",
        "`React.lazy` + `Suspense` → code splitting"
      ]
    },
    pl: {
      q: "Czym są Suspense, `useTransition` i renderowanie współbieżne?",
      a: [
        "Renderowanie współbieżne (React 18+): render można przerwać, pilne aktualizacje najpierw",
        "`useTransition` / `startTransition`: oznaczenie aktualizacji jako niepilnej (np. filtrowanie dużej listy) – input pozostaje responsywny",
        "`useDeferredValue`: opóźniona kopia wartości dla kosztownych dzieci",
        "`Suspense`: deklaratywny fallback ładowania dla leniwych komponentów i danych (wsparcie frameworka/Query)",
        "`React.lazy` + `Suspense` → code splitting"
      ]
    }
  },
  {
    id: "ssr-next", topic: "React",
    en: {
      q: "CSR vs SSR vs SSG – when would you use Next.js (or Nuxt)?",
      a: [
        "CSR (SPA): HTML shell + JS; simple hosting, weaker SEO and first paint",
        "SSR: HTML rendered per request → fast first paint, SEO, then hydration",
        "SSG: HTML at build time → CDN-fast; ISR re-generates pages periodically",
        "Next.js App Router: React Server Components – server-only components, less JS shipped",
        "Nuxt = same idea for Vue (SSR/SSG, file routing, server routes)",
        "Cost: server infra, hydration mismatches, caching complexity"
      ]
    },
    pl: {
      q: "CSR vs SSR vs SSG – kiedy Next.js (lub Nuxt)?",
      a: [
        "CSR (SPA): szkielet HTML + JS; prosty hosting, słabsze SEO i pierwsze wyświetlenie",
        "SSR: HTML renderowany na żądanie → szybkie pierwsze wyświetlenie, SEO, potem hydracja",
        "SSG: HTML przy buildzie → szybkość CDN; ISR okresowo regeneruje strony",
        "Next.js App Router: React Server Components – komponenty tylko na serwerze, mniej JS",
        "Nuxt = to samo dla Vue (SSR/SSG, routing plikowy, trasy serwerowe)",
        "Koszt: infrastruktura serwera, niezgodności hydracji, złożoność cache"
      ]
    }
  },
  {
    id: "react-native", topic: "React",
    en: {
      q: "How does React Native work under the hood?",
      a: [
        "JS runs on Hermes engine; renders real native views, not a WebView",
        "Old architecture: async JSON bridge between JS and native",
        "New architecture: JSI (direct JS↔C++ calls), Fabric renderer, TurboModules (lazy native modules)",
        "Platform code: `Platform.OS`, `.ios.tsx` / `.android.tsx` files",
        "TV: `react-native-tvos`, focus-based navigation on Android TV / Apple TV"
      ]
    },
    pl: {
      q: "Jak działa React Native od środka?",
      a: [
        "JS działa na silniku Hermes; renderuje prawdziwe natywne widoki, nie WebView",
        "Stara architektura: asynchroniczny most JSON między JS a natywnym kodem",
        "Nowa architektura: JSI (bezpośrednie wywołania JS↔C++), renderer Fabric, TurboModules (leniwe moduły natywne)",
        "Kod per platforma: `Platform.OS`, pliki `.ios.tsx` / `.android.tsx`",
        "TV: `react-native-tvos`, nawigacja fokusem na Android TV / Apple TV"
      ]
    }
  },
  {
    id: "react-perf", topic: "React",
    en: {
      q: "A React page feels slow. How do you investigate and fix it?",
      a: [
        "Measure first: React DevTools Profiler, Chrome Performance, Web Vitals (LCP, INP, CLS)",
        "Too many re-renders → move state down, split context, selectors, `memo`",
        "Long lists → virtualisation (`react-window`, TanStack Virtual)",
        "Big bundle → code splitting (`lazy`), tree-shaking, analyse with bundle analyser",
        "Slow data → caching (TanStack Query), pagination, prefetching",
        "Expensive work → `useMemo`, `useTransition`, web worker"
      ]
    },
    pl: {
      q: "Strona w React działa wolno. Jak to diagnozujesz i naprawiasz?",
      a: [
        "Najpierw pomiar: React DevTools Profiler, Chrome Performance, Web Vitals (LCP, INP, CLS)",
        "Za dużo rerenderów → stan niżej, podział contextu, selektory, `memo`",
        "Długie listy → wirtualizacja (`react-window`, TanStack Virtual)",
        "Duży bundle → code splitting (`lazy`), tree-shaking, analiza bundle analyzerem",
        "Wolne dane → cache (TanStack Query), paginacja, prefetch",
        "Kosztowne obliczenia → `useMemo`, `useTransition`, web worker"
      ]
    }
  },
  // ───────────────────────── REST APIs ─────────────────────────
  {
    id: "rest-principles", topic: "REST",
    en: {
      q: "What makes an API RESTful?",
      a: [
        "Resources as nouns: `/orders/123`, not `/getOrder`",
        "HTTP methods carry the action: GET, POST, PUT, PATCH, DELETE",
        "Stateless: every request carries its own auth/context",
        "Meaningful status codes; consistent error format (e.g. RFC 9457 Problem Details)",
        "Cacheable responses; uniform interface (HATEOAS rarely used in practice)"
      ]
    },
    pl: {
      q: "Co sprawia, że API jest RESTful?",
      a: [
        "Zasoby jako rzeczowniki: `/orders/123`, a nie `/getOrder`",
        "Akcję niesie metoda HTTP: GET, POST, PUT, PATCH, DELETE",
        "Bezstanowość: każde żądanie niesie własną autoryzację/kontekst",
        "Znaczące kody statusu; spójny format błędów (np. RFC 9457 Problem Details)",
        "Odpowiedzi cache'owalne; jednolity interfejs (HATEOAS rzadko w praktyce)"
      ]
    }
  },
  {
    id: "status-codes", topic: "REST",
    en: {
      q: "Which HTTP status codes do you use, and when?",
      a: [
        "200 OK, 201 Created (+ `Location`), 202 Accepted (async job), 204 No Content",
        "304 Not Modified (ETag match)",
        "400 malformed, 422 validation failed, 404 not found, 409 conflict (duplicate / version)",
        "401 = not authenticated, 403 = authenticated but not allowed",
        "429 Too Many Requests (+ `Retry-After`)",
        "500 bug, 502 bad upstream, 503 unavailable/overloaded, 504 upstream timeout"
      ]
    },
    pl: {
      q: "Jakich kodów statusu HTTP używasz i kiedy?",
      a: [
        "200 OK, 201 Created (+ `Location`), 202 Accepted (zadanie asynchroniczne), 204 No Content",
        "304 Not Modified (zgodny ETag)",
        "400 błędne żądanie, 422 walidacja nie przeszła, 404 brak zasobu, 409 konflikt (duplikat / wersja)",
        "401 = brak uwierzytelnienia, 403 = uwierzytelniony, ale bez uprawnień",
        "429 Too Many Requests (+ `Retry-After`)",
        "500 błąd, 502 zły upstream, 503 niedostępny/przeciążony, 504 timeout upstreamu"
      ]
    }
  },
  {
    id: "http-methods", topic: "REST",
    en: {
      q: "PUT vs PATCH – and which methods are safe and idempotent?",
      a: [
        "PUT: replace the whole resource at a known URI; idempotent",
        "PATCH: partial update; not guaranteed idempotent (JSON Merge Patch vs JSON Patch)",
        "Safe (no side effects): GET, HEAD, OPTIONS",
        "Idempotent: GET, PUT, DELETE, HEAD, OPTIONS – repeating gives the same state",
        "POST: neither → needs idempotency keys for safe retries",
        "Document null vs omitted field semantics for PATCH"
      ]
    },
    pl: {
      q: "PUT vs PATCH – oraz które metody są bezpieczne i idempotentne?",
      a: [
        "PUT: zastąpienie całego zasobu pod znanym URI; idempotentny",
        "PATCH: częściowa zmiana; idempotentność niegwarantowana (JSON Merge Patch vs JSON Patch)",
        "Bezpieczne (bez efektów ubocznych): GET, HEAD, OPTIONS",
        "Idempotentne: GET, PUT, DELETE, HEAD, OPTIONS – powtórzenie daje ten sam stan",
        "POST: ani jedno, ani drugie → klucze idempotencji dla bezpiecznych ponowień",
        "Udokumentować różnicę null vs brak pola w PATCH"
      ]
    }
  },
  {
    id: "idempotency-keys", topic: "REST",
    en: {
      q: "A client retries a POST payment after a timeout. How do you prevent a double charge?",
      a: [
        "Client sends `Idempotency-Key` header (UUID) per logical operation",
        "Server stores key + request hash + response (Redis/DB, with TTL)",
        "Same key again → return stored response, do not re-execute",
        "Same key, different body → 422/409",
        "Concurrent duplicates: unique constraint or lock on the key"
      ]
    },
    pl: {
      q: "Klient ponawia POST płatności po timeoucie. Jak zapobiec podwójnemu obciążeniu?",
      a: [
        "Klient wysyła nagłówek `Idempotency-Key` (UUID) na logiczną operację",
        "Serwer zapisuje klucz + hash żądania + odpowiedź (Redis/DB, z TTL)",
        "Ten sam klucz ponownie → zwracamy zapisaną odpowiedź, bez ponownego wykonania",
        "Ten sam klucz, inne body → 422/409",
        "Równoległe duplikaty: unikalne ograniczenie lub blokada na kluczu"
      ]
    }
  },
  {
    id: "pagination", topic: "REST",
    en: {
      q: "Offset vs cursor pagination?",
      a: [
        "Offset (`?limit=20&offset=40`): simple, random page access",
        "Offset cons: slow at large offsets (DB scans skipped rows), duplicates/skips when data changes",
        "Cursor (`?after=<opaque>`): `WHERE (created_at, id) < (...) ORDER BY ... LIMIT n` – uses an index",
        "Cursor pros: stable, fast at any depth; cons: no jump to page N",
        "High-traffic feeds / infinite scroll → cursor"
      ]
    },
    pl: {
      q: "Paginacja offsetowa vs kursorowa?",
      a: [
        "Offset (`?limit=20&offset=40`): prosta, dostęp do dowolnej strony",
        "Wady offsetu: wolna przy dużych offsetach (DB skanuje pominięte wiersze), duplikaty/pominięcia przy zmianach danych",
        "Kursor (`?after=<opaque>`): `WHERE (created_at, id) < (...) ORDER BY ... LIMIT n` – korzysta z indeksu",
        "Zalety kursora: stabilny, szybki na każdej głębokości; wada: brak skoku do strony N",
        "Feedy o dużym ruchu / infinite scroll → kursor"
      ]
    }
  },
  {
    id: "api-versioning", topic: "REST",
    en: {
      q: "How do you version and evolve a public API without breaking clients?",
      a: [
        "Prefer additive changes: new optional fields/endpoints are non-breaking",
        "Breaking: removing/renaming fields, changing types, new required input",
        "Versioning: URL (`/v2`) – most common; or header / media type",
        "Deprecation: `Deprecation`/`Sunset` headers, usage metrics, migration period",
        "Clients should ignore unknown fields (tolerant reader)"
      ]
    },
    pl: {
      q: "Jak wersjonować i rozwijać publiczne API bez psucia klientów?",
      a: [
        "Preferuj zmiany addytywne: nowe opcjonalne pola/endpointy nie psują",
        "Psujące: usunięcie/zmiana nazwy pól, zmiana typów, nowe wymagane wejście",
        "Wersjonowanie: URL (`/v2`) – najczęściej; albo nagłówek / media type",
        "Wycofywanie: nagłówki `Deprecation`/`Sunset`, metryki użycia, okres migracji",
        "Klienci powinni ignorować nieznane pola (tolerant reader)"
      ]
    }
  },
  {
    id: "rest-resource", topic: "REST",
    en: {
      q: "Design endpoints for creating, listing and updating inspection orders.",
      a: [
        "`POST /inspection-orders` → 201 + `Location: /inspection-orders/{id}`",
        "`GET /inspection-orders?buildingId=&status=&cursor=` – filters + pagination",
        "`GET /inspection-orders/{id}` → 200 / 404",
        "`PATCH /inspection-orders/{id}` – partial update; state transitions validated (409 on invalid)",
        "Nested when owned: `GET /buildings/{id}/inspection-orders`",
        "Validation → 422 with field errors; authZ per building owner; OpenAPI docs"
      ]
    },
    pl: {
      q: "Zaprojektuj endpointy do tworzenia, listowania i edycji zleceń inspekcji.",
      a: [
        "`POST /inspection-orders` → 201 + `Location: /inspection-orders/{id}`",
        "`GET /inspection-orders?buildingId=&status=&cursor=` – filtry + paginacja",
        "`GET /inspection-orders/{id}` → 200 / 404",
        "`PATCH /inspection-orders/{id}` – częściowa zmiana; walidacja przejść stanu (409 przy błędnym)",
        "Zagnieżdżenie przy własności: `GET /buildings/{id}/inspection-orders`",
        "Walidacja → 422 z błędami pól; autoryzacja wg właściciela budynku; dokumentacja OpenAPI"
      ]
    }
  },
  {
    id: "http-caching", topic: "REST",
    en: {
      q: "How does HTTP caching work?",
      a: [
        "`Cache-Control`: `max-age`, `s-maxage` (CDN), `no-cache` (revalidate), `no-store`, `private`/`public`",
        "Validation: `ETag` → client sends `If-None-Match` → `304 Not Modified`",
        "Or `Last-Modified` / `If-Modified-Since`",
        "`Vary` header: cache key depends on e.g. `Accept-Encoding`, `Authorization`",
        "Static assets: content-hashed filenames + long `max-age, immutable`",
        "Never cache personalised responses in shared caches"
      ]
    },
    pl: {
      q: "Jak działa cache HTTP?",
      a: [
        "`Cache-Control`: `max-age`, `s-maxage` (CDN), `no-cache` (rewalidacja), `no-store`, `private`/`public`",
        "Walidacja: `ETag` → klient wysyła `If-None-Match` → `304 Not Modified`",
        "Albo `Last-Modified` / `If-Modified-Since`",
        "Nagłówek `Vary`: klucz cache zależy np. od `Accept-Encoding`, `Authorization`",
        "Statyczne pliki: nazwy z hashem treści + długie `max-age, immutable`",
        "Nigdy nie cache'uj spersonalizowanych odpowiedzi we współdzielonych cache"
      ]
    }
  },
  {
    id: "cors", topic: "REST",
    en: {
      q: "What is CORS and how do you configure it?",
      a: [
        "Browser rule: JS can call another origin only if the server allows it",
        "Server returns `Access-Control-Allow-Origin` (+ Methods, Headers, Credentials)",
        "Non-simple requests (JSON body, custom headers, PUT/DELETE) trigger an `OPTIONS` preflight",
        "`*` cannot be used with credentials (cookies) – whitelist origins",
        "CORS protects users in browsers – it is not API authentication"
      ]
    },
    pl: {
      q: "Czym jest CORS i jak go konfigurujesz?",
      a: [
        "Zasada przeglądarki: JS może wołać inny origin tylko za zgodą serwera",
        "Serwer zwraca `Access-Control-Allow-Origin` (+ Methods, Headers, Credentials)",
        "Żądania nieproste (body JSON, własne nagłówki, PUT/DELETE) wywołują preflight `OPTIONS`",
        "`*` nie działa z credentials (cookies) – lista dozwolonych originów",
        "CORS chroni użytkowników w przeglądarce – to nie jest uwierzytelnianie API"
      ]
    }
  },
  {
    id: "rate-limiting", topic: "REST",
    en: {
      q: "How would you implement rate limiting for an API running on many instances?",
      a: [
        "Algorithms: fixed window, sliding window, token bucket (allows bursts), leaky bucket",
        "Shared counter in Redis (atomic `INCR` + `EXPIRE` or Lua script) – works across instances",
        "Key by API key / user ID / IP; different limits per plan or endpoint",
        "Respond `429` + `Retry-After`, `RateLimit-*` headers",
        "Also at the edge: API Gateway, WAF, CDN"
      ]
    },
    pl: {
      q: "Jak zaimplementować rate limiting dla API działającego na wielu instancjach?",
      a: [
        "Algorytmy: fixed window, sliding window, token bucket (pozwala na skoki), leaky bucket",
        "Wspólny licznik w Redis (atomowe `INCR` + `EXPIRE` lub skrypt Lua) – działa między instancjami",
        "Klucz wg API key / ID użytkownika / IP; różne limity per plan lub endpoint",
        "Odpowiedź `429` + `Retry-After`, nagłówki `RateLimit-*`",
        "Także na brzegu: API Gateway, WAF, CDN"
      ]
    }
  },
  {
    id: "contract-sync", topic: "REST",
    en: {
      q: "How do you keep frontend and backend types in sync?",
      a: [
        "Single source of truth for the contract",
        "OpenAPI → generate TS client/types (`openapi-typescript`, Orval)",
        "GraphQL schema → GraphQL Code Generator",
        "Monorepo: shared types/Zod schemas package; or tRPC for TS-only stacks",
        "Still validate at runtime on the server; contract tests in CI; breaking changes versioned"
      ]
    },
    pl: {
      q: "Jak utrzymujesz zgodność typów między frontendem a backendem?",
      a: [
        "Jedno źródło prawdy dla kontraktu",
        "OpenAPI → generowany klient/typy TS (`openapi-typescript`, Orval)",
        "Schemat GraphQL → GraphQL Code Generator",
        "Monorepo: wspólna paczka typów/schematów Zod; lub tRPC przy stacku tylko TS",
        "Nadal walidacja w runtime na serwerze; testy kontraktowe w CI; zmiany psujące wersjonowane"
      ]
    }
  },
  {
    id: "openapi", topic: "REST",
    en: {
      q: "How did you use Swagger / OpenAPI?",
      a: [
        "Documented Node.js REST APIs for the ZONE frontend at OPEGIEKA",
        "Spec: paths, schemas, auth, examples; Swagger UI for try-it-out",
        "Code-first (annotations / Zod → spec) vs design-first (spec → code)",
        "Enables generated clients, request validation, mock servers, contract tests"
      ]
    },
    pl: {
      q: "Jak korzystałeś ze Swagger / OpenAPI?",
      a: [
        "Dokumentowałem REST API w Node.js dla frontendu ZONE w OPEGIEKA",
        "Specyfikacja: ścieżki, schematy, auth, przykłady; Swagger UI do testowania",
        "Code-first (adnotacje / Zod → spec) vs design-first (spec → kod)",
        "Umożliwia generowanie klientów, walidację żądań, mock serwery, testy kontraktowe"
      ]
    }
  },

  // ───────────────────────── GraphQL ─────────────────────────
  {
    id: "graphql-basics", topic: "GraphQL",
    en: {
      q: "Explain the core concepts of GraphQL.",
      a: [
        "Strongly typed schema (SDL): types, fields, `Query`, `Mutation`, `Subscription`",
        "Client asks for exactly the fields it needs; one endpoint (`POST /graphql`)",
        "Resolvers: `(parent, args, context, info)` – one per field, can hit any data source",
        "`context`: per-request data – user, DataLoaders, DB clients",
        "Introspection → tooling, codegen, GraphiQL",
        "Node servers: Apollo Server, GraphQL Yoga, Mercurius (Fastify)"
      ]
    },
    pl: {
      q: "Wyjaśnij podstawowe koncepcje GraphQL.",
      a: [
        "Silnie typowany schemat (SDL): typy, pola, `Query`, `Mutation`, `Subscription`",
        "Klient pyta o dokładnie te pola, których potrzebuje; jeden endpoint (`POST /graphql`)",
        "Resolvery: `(parent, args, context, info)` – po jednym na pole, dowolne źródło danych",
        "`context`: dane per żądanie – użytkownik, DataLoadery, klienci DB",
        "Introspekcja → narzędzia, codegen, GraphiQL",
        "Serwery Node: Apollo Server, GraphQL Yoga, Mercurius (Fastify)"
      ]
    }
  },
  {
    id: "graphql-rest", topic: "GraphQL",
    en: {
      q: "GraphQL vs REST – when would you pick each?",
      a: [
        "GraphQL: many clients with different data needs (web, mobile, TV), nested related data, no over/under-fetching",
        "GraphQL: typed schema → great DX and codegen; evolves without versions",
        "REST: simple CRUD, public APIs, file uploads, HTTP caching/CDN out of the box",
        "GraphQL costs: N+1, query cost limits, caching harder, field-level authZ, monitoring per operation",
        "Common mix: GraphQL gateway/BFF over REST/gRPC microservices"
      ]
    },
    pl: {
      q: "GraphQL vs REST – kiedy co wybrać?",
      a: [
        "GraphQL: wielu klientów o różnych potrzebach (web, mobile, TV), zagnieżdżone dane, brak over/under-fetchingu",
        "GraphQL: typowany schemat → świetne DX i codegen; ewolucja bez wersji",
        "REST: prosty CRUD, publiczne API, upload plików, cache HTTP/CDN od ręki",
        "Koszty GraphQL: N+1, limity kosztu zapytań, trudniejszy cache, autoryzacja per pole, monitoring per operacja",
        "Częsty miks: gateway/BFF GraphQL nad mikroserwisami REST/gRPC"
      ]
    }
  },
  {
    id: "graphql-n-plus-one", topic: "GraphQL",
    en: {
      q: "What is the N+1 problem in GraphQL and how does DataLoader solve it?",
      a: [
        "Query 10 posts, each with `author` → 1 query for posts + 10 for authors",
        "DataLoader collects all `.load(id)` calls in one tick → one batched `WHERE id IN (...)`",
        "Also caches per request (dedupes same ID)",
        "Create new DataLoaders per request (in `context`) – never share across users",
        "Batch function must return results in the same order as keys"
      ]
    },
    pl: {
      q: "Czym jest problem N+1 w GraphQL i jak rozwiązuje go DataLoader?",
      a: [
        "Zapytanie o 10 postów z `author` → 1 zapytanie o posty + 10 o autorów",
        "DataLoader zbiera wywołania `.load(id)` z jednego ticku → jedno zapytanie `WHERE id IN (...)`",
        "Dodatkowo cache per żądanie (deduplikacja tego samego ID)",
        "Nowe DataLoadery per żądanie (w `context`) – nigdy wspólne między użytkownikami",
        "Funkcja batch musi zwrócić wyniki w tej samej kolejności co klucze"
      ]
    }
  },
  {
    id: "graphql-security", topic: "GraphQL",
    en: {
      q: "How do you protect a GraphQL API from abusive queries?",
      a: [
        "Depth limit and query complexity/cost analysis",
        "Max page size on list fields (`first: 100`)",
        "Persisted queries / operation allow-list for first-party clients",
        "Timeouts, rate limiting per client (by cost, not request count)",
        "AuthZ in resolvers / business layer – every field reachable via many paths",
        "Consider disabling introspection in prod; mask internal errors"
      ]
    },
    pl: {
      q: "Jak chronić API GraphQL przed nadużyciami?",
      a: [
        "Limit głębokości i analiza złożoności/kosztu zapytań",
        "Maks. rozmiar strony na polach-listach (`first: 100`)",
        "Persisted queries / lista dozwolonych operacji dla własnych klientów",
        "Timeouty, rate limiting per klient (wg kosztu, nie liczby żądań)",
        "Autoryzacja w resolverach / warstwie biznesowej – pole osiągalne wieloma ścieżkami",
        "Rozważ wyłączenie introspekcji na produkcji; maskowanie błędów wewnętrznych"
      ]
    }
  },
  {
    id: "graphql-errors", topic: "GraphQL",
    en: {
      q: "How are errors handled in GraphQL?",
      a: [
        "Response usually HTTP 200 with `data` and `errors` array – partial success possible",
        "Failed nullable field → `null` + error; non-null field error bubbles up to nearest nullable parent",
        "`extensions.code` for machine-readable codes (`UNAUTHENTICATED`, `BAD_USER_INPUT`)",
        "Expected business errors often modelled in schema: union `CreateUserResult = User | ValidationError`",
        "Monitoring must parse `errors`, not rely on HTTP status"
      ]
    },
    pl: {
      q: "Jak obsługiwane są błędy w GraphQL?",
      a: [
        "Zwykle HTTP 200 z `data` i tablicą `errors` – możliwy częściowy sukces",
        "Błąd pola nullable → `null` + błąd; błąd pola non-null wędruje do najbliższego nullable rodzica",
        "`extensions.code` jako kody maszynowe (`UNAUTHENTICATED`, `BAD_USER_INPUT`)",
        "Oczekiwane błędy biznesowe często w schemacie: unia `CreateUserResult = User | ValidationError`",
        "Monitoring musi analizować `errors`, a nie status HTTP"
      ]
    }
  },
  {
    id: "graphql-caching", topic: "GraphQL",
    en: {
      q: "How do you cache GraphQL responses?",
      a: [
        "HTTP caching is hard: single POST endpoint, varying queries",
        "Client: normalised cache by `__typename` + `id` (Apollo Client, urql)",
        "Automatic Persisted Queries over GET → CDN-cacheable",
        "Server: response cache with cache hints (`@cacheControl`), per-resolver caching (Redis), DataLoader per request",
        "Watch for personalised data – cache scope `PRIVATE`"
      ]
    },
    pl: {
      q: "Jak cache'ować odpowiedzi GraphQL?",
      a: [
        "Cache HTTP trudny: jeden endpoint POST, różne zapytania",
        "Klient: znormalizowany cache po `__typename` + `id` (Apollo Client, urql)",
        "Automatic Persisted Queries przez GET → cache w CDN",
        "Serwer: cache odpowiedzi z podpowiedziami (`@cacheControl`), cache resolverów (Redis), DataLoader per żądanie",
        "Uwaga na dane spersonalizowane – zakres cache `PRIVATE`"
      ]
    }
  },
  {
    id: "graphql-schema-evolution", topic: "GraphQL",
    en: {
      q: "How do you evolve a GraphQL schema without versioning?",
      a: [
        "Add fields freely – clients only get what they ask for",
        "Deprecate with `@deprecated(reason: ...)`, track field usage, remove later",
        "Nullability: output fields nullable give flexibility; making a field non-null → nullable is breaking for clients",
        "New required arguments/input fields are breaking – add as optional",
        "Schema checks in CI against real client operations (e.g. GraphQL Inspector, Apollo checks)"
      ]
    },
    pl: {
      q: "Jak rozwijać schemat GraphQL bez wersjonowania?",
      a: [
        "Pola dodajemy swobodnie – klient dostaje tylko to, o co pyta",
        "Wycofywanie przez `@deprecated(reason: ...)`, śledzenie użycia pól, późniejsze usunięcie",
        "Nullowalność: pola wyjściowe nullable dają elastyczność; zmiana non-null → nullable psuje klientów",
        "Nowe wymagane argumenty/pola wejściowe psują – dodawaj jako opcjonalne",
        "Sprawdzanie schematu w CI względem realnych operacji klientów (np. GraphQL Inspector, Apollo checks)"
      ]
    }
  },
  {
    id: "graphql-federation", topic: "GraphQL",
    en: {
      q: "How does GraphQL work with many microservices (federation / BFF)?",
      a: [
        "Apollo Federation: each service owns a subgraph; router composes a supergraph",
        "Entities shared by key: `type User @key(fields: \"id\")`, extended by other subgraphs",
        "Alternative: schema stitching, or a single BFF that calls REST services",
        "Router handles query planning; each team deploys its subgraph independently",
        "Cost: composition checks, distributed tracing across subgraphs"
      ]
    },
    pl: {
      q: "Jak GraphQL działa z wieloma mikroserwisami (federacja / BFF)?",
      a: [
        "Apollo Federation: każda usługa ma swój subgraph; router składa supergraph",
        "Encje współdzielone po kluczu: `type User @key(fields: \"id\")`, rozszerzane przez inne subgraphy",
        "Alternatywy: schema stitching lub jeden BFF wołający usługi REST",
        "Router planuje zapytania; każdy zespół wdraża swój subgraph niezależnie",
        "Koszt: sprawdzanie kompozycji, rozproszony tracing między subgraphami"
      ]
    }
  },
  {
    id: "graphql-subscriptions", topic: "GraphQL",
    en: {
      q: "How do GraphQL subscriptions work, and how do you scale them?",
      a: [
        "Long-lived connection, usually WebSocket (`graphql-ws` protocol) or SSE",
        "Server pushes events matching the subscription selection",
        "Multiple instances → shared pub/sub (Redis, SNS/SQS, Kafka) so any node can publish",
        "Sticky sessions / connection-aware load balancing; auth on connection init",
        "For simple cases, polling or plain SSE may be enough"
      ]
    },
    pl: {
      q: "Jak działają subskrypcje GraphQL i jak je skalować?",
      a: [
        "Długotrwałe połączenie, zwykle WebSocket (protokół `graphql-ws`) lub SSE",
        "Serwer wypycha zdarzenia pasujące do selekcji subskrypcji",
        "Wiele instancji → wspólny pub/sub (Redis, SNS/SQS, Kafka), żeby każdy węzeł mógł publikować",
        "Sticky sessions / load balancing świadomy połączeń; auth przy inicjacji połączenia",
        "W prostych przypadkach wystarczy polling lub zwykłe SSE"
      ]
    }
  },
  {
    id: "graphql-experience", topic: "GraphQL",
    en: {
      q: "What is your GraphQL experience?",
      a: [
        "Honest: my delivered projects used REST; GraphQL is not production experience yet",
        "Know the model: schema, resolvers, DataLoader, errors, security limits",
        "REST contract design, OpenAPI and typed clients transfer directly",
        "Ramp-up: building a small Apollo/Yoga server with codegen and DataLoader"
      ]
    },
    pl: {
      q: "Jakie masz doświadczenie z GraphQL?",
      a: [
        "Szczerze: w dostarczonych projektach był REST; GraphQL to jeszcze nie doświadczenie produkcyjne",
        "Znam model: schemat, resolvery, DataLoader, błędy, limity bezpieczeństwa",
        "Projektowanie kontraktów REST, OpenAPI i typowane klienty przenoszą się wprost",
        "Nadrabianie: mały serwer Apollo/Yoga z codegenem i DataLoaderem"
      ]
    }
  },

  // ───────────────────────── Security & auth ─────────────────────────
  {
    id: "oauth2", topic: "Security",
    en: {
      q: "Explain OAuth 2.0 and OpenID Connect.",
      a: [
        "OAuth 2.0 = delegated authorisation (access to resources), not identity",
        "Roles: resource owner, client, authorisation server, resource server",
        "Authorization Code + PKCE: SPAs and mobile apps (no client secret)",
        "Client Credentials: service-to-service",
        "Access token (short-lived) + refresh token (long-lived, rotated)",
        "OIDC adds identity on top: ID token (JWT), `/userinfo`"
      ]
    },
    pl: {
      q: "Wyjaśnij OAuth 2.0 i OpenID Connect.",
      a: [
        "OAuth 2.0 = delegowana autoryzacja (dostęp do zasobów), nie tożsamość",
        "Role: właściciel zasobu, klient, serwer autoryzacji, serwer zasobów",
        "Authorization Code + PKCE: SPA i aplikacje mobilne (bez client secret)",
        "Client Credentials: komunikacja usługa–usługa",
        "Access token (krótko żyjący) + refresh token (długo żyjący, rotowany)",
        "OIDC dodaje tożsamość: ID token (JWT), `/userinfo`"
      ]
    }
  },
  {
    id: "jwt", topic: "Security",
    en: {
      q: "How do JWTs work, and what are their trade-offs?",
      a: [
        "`header.payload.signature`, base64url – signed, not encrypted (payload readable)",
        "HS256 = shared secret; RS256/ES256 = private key signs, public key (JWKS) verifies",
        "Stateless: verify without DB lookup → scales well",
        "Hard to revoke → short expiry (5–15 min) + refresh token rotation / denylist",
        "Always verify `alg`, `exp`, `iss`, `aud`; no secrets in payload",
        "Browser storage: httpOnly Secure SameSite cookie (XSS-safe) vs memory; avoid localStorage"
      ]
    },
    pl: {
      q: "Jak działa JWT i jakie ma wady i zalety?",
      a: [
        "`header.payload.signature`, base64url – podpisany, nie szyfrowany (payload czytelny)",
        "HS256 = wspólny sekret; RS256/ES256 = klucz prywatny podpisuje, publiczny (JWKS) weryfikuje",
        "Bezstanowy: weryfikacja bez zapytania do DB → dobrze się skaluje",
        "Trudno unieważnić → krótki czas życia (5–15 min) + rotacja refresh tokenów / denylista",
        "Zawsze sprawdzaj `alg`, `exp`, `iss`, `aud`; bez sekretów w payloadzie",
        "W przeglądarce: cookie httpOnly Secure SameSite (odporne na XSS) vs pamięć; unikać localStorage"
      ]
    }
  },
  {
    id: "authz-models", topic: "Security",
    en: {
      q: "Authentication vs authorisation – how do you model permissions?",
      a: [
        "AuthN = who you are (401); AuthZ = what you may do (403)",
        "RBAC: roles → permissions; simple, can explode with many roles",
        "ABAC / policy-based: rules on attributes (owner, tenant, region)",
        "Always check resource ownership server-side → prevents IDOR",
        "Centralise checks in a policy layer, not scattered in controllers"
      ]
    },
    pl: {
      q: "Uwierzytelnianie vs autoryzacja – jak modelujesz uprawnienia?",
      a: [
        "AuthN = kim jesteś (401); AuthZ = co możesz (403)",
        "RBAC: role → uprawnienia; proste, ale mnożą się role",
        "ABAC / polityki: reguły na atrybutach (właściciel, tenant, region)",
        "Zawsze sprawdzaj właściciela zasobu po stronie serwera → brak IDOR",
        "Centralizacja w warstwie polityk, nie rozproszona po kontrolerach"
      ]
    }
  },
  {
    id: "owasp", topic: "Security",
    en: {
      q: "Which web vulnerabilities do you guard against, and how?",
      a: [
        "Broken access control / IDOR → ownership checks on every request",
        "Injection → parameterised queries, ORM, schema validation",
        "XSS → framework escaping, no `dangerouslySetInnerHTML`/`v-html` with user data, CSP",
        "CSRF (cookie auth) → SameSite cookies, CSRF tokens",
        "SSRF → allow-list outbound URLs, block metadata IPs",
        "Vulnerable deps, secrets in code, missing rate limits, verbose errors"
      ]
    },
    pl: {
      q: "Przed jakimi podatnościami webowymi się chronisz i jak?",
      a: [
        "Błędna kontrola dostępu / IDOR → sprawdzanie własności przy każdym żądaniu",
        "Injection → zapytania parametryzowane, ORM, walidacja schematem",
        "XSS → escapowanie frameworka, brak `dangerouslySetInnerHTML`/`v-html` z danymi użytkownika, CSP",
        "CSRF (auth przez cookie) → cookies SameSite, tokeny CSRF",
        "SSRF → lista dozwolonych URL wychodzących, blokada IP metadanych",
        "Podatne zależności, sekrety w kodzie, brak rate limitów, zbyt szczegółowe błędy"
      ]
    }
  },
  {
    id: "file-security", topic: "Security",
    en: {
      q: "What do you consider when implementing user file uploads?",
      a: [
        "Limit size; check real content type (magic bytes), not filename or client MIME",
        "Store outside the app/web root (S3), random generated keys",
        "AuthZ on upload and download; short-lived presigned URLs",
        "Malware scanning if files are shared; strip metadata from images if needed",
        "Serve with `Content-Disposition: attachment` / separate domain to avoid XSS",
        "Built this in ZONE: user-uploaded files for buildings/inspections"
      ]
    },
    pl: {
      q: "Na co zwracasz uwagę przy implementacji uploadu plików?",
      a: [
        "Limit rozmiaru; sprawdzanie rzeczywistego typu (magic bytes), nie nazwy ani MIME od klienta",
        "Przechowywanie poza aplikacją/webrootem (S3), losowe generowane klucze",
        "Autoryzacja przy wysyłaniu i pobieraniu; krótko żyjące presigned URL",
        "Skanowanie antywirusowe przy plikach współdzielonych; usuwanie metadanych ze zdjęć w razie potrzeby",
        "Serwowanie z `Content-Disposition: attachment` / osobna domena – ochrona przed XSS",
        "Budowałem to w ZONE: pliki użytkowników dla budynków/inspekcji"
      ]
    }
  },

  // ───────────────────────── Databases ─────────────────────────
  {
    id: "sql-indexes", topic: "Databases",
    en: {
      q: "How do database indexes work and when do they help?",
      a: [
        "Default B-tree: fast `=`, range, `ORDER BY`, prefix `LIKE 'abc%'`",
        "Composite `(a, b)`: usable for `a` and `a + b`, not `b` alone (leftmost prefix)",
        "Covering index (`INCLUDE`) → index-only scan; partial index (`WHERE status = 'active'`)",
        "Postgres extras: GIN (JSONB, full-text, arrays), GiST (geo/PostGIS), BRIN (huge time-series)",
        "Cost: slower writes, more storage; low-selectivity columns rarely benefit",
        "Verify with `EXPLAIN (ANALYZE, BUFFERS)`"
      ]
    },
    pl: {
      q: "Jak działają indeksy w bazie danych i kiedy pomagają?",
      a: [
        "Domyślny B-tree: szybkie `=`, zakresy, `ORDER BY`, prefiks `LIKE 'abc%'`",
        "Złożony `(a, b)`: działa dla `a` i `a + b`, nie dla samego `b` (lewy prefiks)",
        "Indeks pokrywający (`INCLUDE`) → index-only scan; indeks częściowy (`WHERE status = 'active'`)",
        "Postgres: GIN (JSONB, full-text, tablice), GiST (geo/PostGIS), BRIN (ogromne szeregi czasowe)",
        "Koszt: wolniejsze zapisy, więcej miejsca; kolumny o niskiej selektywności rzadko zyskują",
        "Weryfikacja przez `EXPLAIN (ANALYZE, BUFFERS)`"
      ]
    }
  },
  {
    id: "slow-query", topic: "Databases",
    en: {
      q: "An endpoint is slow because of a database query. What do you do?",
      a: [
        "Find it: APM traces, `pg_stat_statements`, slow query log",
        "`EXPLAIN ANALYZE`: seq scans on big tables, bad row estimates, sorts spilling to disk",
        "Fix: add/adjust index, rewrite query, select only needed columns, paginate",
        "Check for N+1 from ORM; batch or join",
        "Stale stats → `ANALYZE`; bloat → vacuum",
        "Still heavy → cache, read replica, denormalise / materialised view"
      ]
    },
    pl: {
      q: "Endpoint jest wolny przez zapytanie do bazy. Co robisz?",
      a: [
        "Znalezienie: trace'y APM, `pg_stat_statements`, slow query log",
        "`EXPLAIN ANALYZE`: seq scany na dużych tabelach, złe szacunki wierszy, sortowania na dysku",
        "Naprawa: dodanie/zmiana indeksu, przepisanie zapytania, tylko potrzebne kolumny, paginacja",
        "Sprawdzenie N+1 z ORM; batch lub join",
        "Nieaktualne statystyki → `ANALYZE`; bloat → vacuum",
        "Dalej ciężko → cache, replika do odczytu, denormalizacja / widok zmaterializowany"
      ]
    }
  },
  {
    id: "transactions", topic: "Databases",
    en: {
      q: "Explain ACID and transaction isolation levels.",
      a: [
        "ACID: Atomicity, Consistency, Isolation, Durability",
        "Read Committed (Postgres default): sees only committed data; non-repeatable reads possible",
        "Repeatable Read: stable snapshot for the whole transaction",
        "Serializable: as if run one by one; may fail → retry on serialization error",
        "Lost updates → `SELECT ... FOR UPDATE`, optimistic locking (`version` column), or atomic `UPDATE ... SET x = x + 1`",
        "Keep transactions short; no external HTTP calls inside"
      ]
    },
    pl: {
      q: "Wyjaśnij ACID i poziomy izolacji transakcji.",
      a: [
        "ACID: Atomowość, Spójność, Izolacja, Trwałość",
        "Read Committed (domyślny w Postgres): widzi tylko zatwierdzone dane; możliwe niepowtarzalne odczyty",
        "Repeatable Read: stały snapshot na całą transakcję",
        "Serializable: jakby wykonywane po kolei; może się nie udać → ponowienie przy błędzie serializacji",
        "Utracone aktualizacje → `SELECT ... FOR UPDATE`, optimistic locking (kolumna `version`) lub atomowe `UPDATE ... SET x = x + 1`",
        "Krótkie transakcje; bez zewnętrznych wywołań HTTP w środku"
      ]
    }
  },
  {
    id: "orm-n-plus-one", topic: "Databases",
    en: {
      q: "Which ORMs have you used, and what are the trade-offs?",
      a: [
        "Node options: Prisma (schema-first, typed client), TypeORM (decorators, Active Record/Data Mapper), Sequelize, Drizzle (SQL-like, typed), Knex (query builder)",
        "Pros: types, migrations, less boilerplate",
        "Cons: hidden N+1 (lazy relations), inefficient generated SQL, leaky abstraction",
        "Mitigate: eager loading / `include`, log SQL in dev, raw SQL for hot paths",
        "Mongo: Mongoose schemas + validation"
      ]
    },
    pl: {
      q: "Z jakich ORM korzystałeś i jakie mają wady i zalety?",
      a: [
        "Opcje w Node: Prisma (schema-first, typowany klient), TypeORM (dekoratory, Active Record/Data Mapper), Sequelize, Drizzle (składnia bliska SQL, typowany), Knex (query builder)",
        "Zalety: typy, migracje, mniej boilerplate",
        "Wady: ukryte N+1 (leniwe relacje), nieefektywny wygenerowany SQL, przeciekająca abstrakcja",
        "Zaradzenie: eager loading / `include`, logowanie SQL w dev, surowy SQL na gorących ścieżkach",
        "Mongo: schematy Mongoose + walidacja"
      ]
    }
  },
  {
    id: "connection-pooling", topic: "Databases",
    en: {
      q: "Why does connection pooling matter, and what goes wrong at scale?",
      a: [
        "Opening a Postgres connection is expensive (process per connection)",
        "Pool (`pg.Pool`) reuses a fixed set of connections per instance",
        "Pitfall: pool size × instances > `max_connections` → errors under autoscaling",
        "Fix: external pooler (PgBouncer, RDS Proxy), smaller per-instance pools",
        "Lambda: each concurrent execution holds a connection → RDS Proxy",
        "Always release connections (use `pool.query` or `try/finally client.release()`)"
      ]
    },
    pl: {
      q: "Dlaczego pula połączeń jest ważna i co psuje się w dużej skali?",
      a: [
        "Otwarcie połączenia z Postgres jest kosztowne (proces na połączenie)",
        "Pula (`pg.Pool`) ponownie używa stałego zbioru połączeń na instancję",
        "Pułapka: rozmiar puli × instancje > `max_connections` → błędy przy autoskalowaniu",
        "Rozwiązanie: zewnętrzny pooler (PgBouncer, RDS Proxy), mniejsze pule na instancję",
        "Lambda: każde współbieżne wykonanie trzyma połączenie → RDS Proxy",
        "Zawsze zwalniaj połączenia (`pool.query` lub `try/finally client.release()`)"
      ]
    }
  },
  {
    id: "sql-vs-nosql", topic: "Databases",
    en: {
      q: "PostgreSQL vs MongoDB – how do you choose?",
      a: [
        "Postgres: relational data, joins, constraints, strong transactions; JSONB for flexible parts",
        "MongoDB: document model, flexible schema, data read together stored together, easy horizontal sharding",
        "Mongo supports multi-document transactions, but design to avoid needing them",
        "Choose by access patterns and consistency needs, not hype",
        "Used both: Postgres at Redge/OPEGIEKA, MongoDB for Gestamp CMMS"
      ]
    },
    pl: {
      q: "PostgreSQL vs MongoDB – jak wybierasz?",
      a: [
        "Postgres: dane relacyjne, joiny, ograniczenia, silne transakcje; JSONB dla elastycznych części",
        "MongoDB: model dokumentowy, elastyczny schemat, dane czytane razem przechowywane razem, łatwy sharding",
        "Mongo wspiera transakcje wielodokumentowe, ale lepiej projektować tak, by ich nie potrzebować",
        "Wybór wg wzorców dostępu i wymagań spójności, nie mody",
        "Używałem obu: Postgres w Redge/OPEGIEKA, MongoDB w CMMS Gestamp"
      ]
    }
  },
  {
    id: "mongo-modeling", topic: "Databases",
    en: {
      q: "MongoDB: when to embed vs reference documents?",
      a: [
        "Embed: one-to-few, always read together, owned by parent (address in user)",
        "Reference: one-to-many unbounded, many-to-many, shared or independently updated data",
        "16 MB document limit – unbounded arrays are an anti-pattern",
        "Model for queries; add compound indexes matching filter + sort",
        "`$lookup` exists but frequent joins hint at a relational model"
      ]
    },
    pl: {
      q: "MongoDB: kiedy osadzać, a kiedy referencjonować dokumenty?",
      a: [
        "Osadzanie: jeden-do-kilku, zawsze czytane razem, własność rodzica (adres w użytkowniku)",
        "Referencja: jeden-do-wielu bez limitu, wiele-do-wielu, dane współdzielone lub zmieniane niezależnie",
        "Limit dokumentu 16 MB – nieograniczone tablice to antywzorzec",
        "Model pod zapytania; indeksy złożone zgodne z filtrem + sortowaniem",
        "`$lookup` istnieje, ale częste joiny sugerują model relacyjny"
      ]
    }
  },
  {
    id: "zero-downtime-migrations", topic: "Databases",
    en: {
      q: "How do you run schema migrations with zero downtime?",
      a: [
        "Expand → migrate → contract; old and new app versions must both work",
        "Rename column: add new → dual-write → backfill in batches → switch reads → drop old",
        "Add columns nullable / with default; avoid long table locks",
        "Postgres: `CREATE INDEX CONCURRENTLY`; add FK/NOT NULL as `NOT VALID` then `VALIDATE`",
        "Migrations versioned in git, run in CI/CD before or with deploy, never destructive in the same release"
      ]
    },
    pl: {
      q: "Jak wykonywać migracje schematu bez przestojów?",
      a: [
        "Expand → migrate → contract; stara i nowa wersja aplikacji muszą działać",
        "Zmiana nazwy kolumny: nowa kolumna → podwójny zapis → backfill partiami → przełączenie odczytów → usunięcie starej",
        "Nowe kolumny nullable / z domyślną wartością; unikać długich blokad tabel",
        "Postgres: `CREATE INDEX CONCURRENTLY`; FK/NOT NULL jako `NOT VALID`, potem `VALIDATE`",
        "Migracje wersjonowane w git, uruchamiane w CI/CD przed lub z wdrożeniem, nigdy destrukcyjne w tym samym wydaniu"
      ]
    }
  },
  {
    id: "db-scaling", topic: "Databases",
    en: {
      q: "How do you scale a relational database under growing load?",
      a: [
        "First: indexes, query fixes, connection pooling, caching",
        "Vertical scaling – simplest, has limits",
        "Read replicas for read-heavy traffic (watch replication lag → read-your-writes)",
        "Partitioning big tables (by time/tenant) for maintenance and pruning",
        "Sharding: last resort – cross-shard queries and transactions get hard",
        "Offload: search → Elasticsearch, analytics → warehouse, hot keys → Redis"
      ]
    },
    pl: {
      q: "Jak skalować relacyjną bazę danych przy rosnącym obciążeniu?",
      a: [
        "Najpierw: indeksy, poprawki zapytań, pula połączeń, cache",
        "Skalowanie pionowe – najprostsze, ma limity",
        "Repliki do odczytu przy dużym ruchu odczytów (uwaga na opóźnienie replikacji → read-your-writes)",
        "Partycjonowanie dużych tabel (po czasie/tenancie) dla utrzymania i pruningu",
        "Sharding: ostateczność – zapytania i transakcje między shardami są trudne",
        "Odciążenie: wyszukiwanie → Elasticsearch, analityka → hurtownia, gorące klucze → Redis"
      ]
    }
  },
  // ───────────────────────── Architecture ─────────────────────────
  {
    id: "architecture-scale", topic: "Architecture",
    en: {
      q: "Traffic to your service grows 10×. What do you check and change?",
      a: [
        "Measure: p95/p99 latency, error rate, CPU/memory, DB load, queue depth – find the bottleneck",
        "Stateless app instances → horizontal scaling behind a load balancer, autoscaling",
        "Caching: CDN for static/public, Redis for hot reads",
        "DB: indexes, pooling, read replicas",
        "Move slow work to queues/workers; timeouts, rate limits, backpressure",
        "Load test (k6) before the traffic arrives; graceful degradation plan"
      ]
    },
    pl: {
      q: "Ruch w Twojej usłudze rośnie 10×. Co sprawdzasz i zmieniasz?",
      a: [
        "Pomiar: opóźnienia p95/p99, błędy, CPU/pamięć, obciążenie DB, długość kolejek – szukam wąskiego gardła",
        "Bezstanowe instancje → skalowanie poziome za load balancerem, autoskalowanie",
        "Cache: CDN dla statycznych/publicznych, Redis dla gorących odczytów",
        "DB: indeksy, pula połączeń, repliki do odczytu",
        "Wolna praca do kolejek/workerów; timeouty, rate limity, backpressure",
        "Testy obciążeniowe (k6) przed wzrostem ruchu; plan degradacji funkcji"
      ]
    }
  },
  {
    id: "caching", topic: "Architecture",
    en: {
      q: "Which caching strategies do you know, and how do you handle invalidation?",
      a: [
        "Cache-aside (lazy): read cache → miss → DB → write cache; most common",
        "Write-through: write cache + DB together; write-behind: cache first, DB async",
        "Invalidation: TTL, delete on write, event-based, versioned keys",
        "Stampede on expiry → locking/single-flight, jittered TTL, stale-while-revalidate",
        "Layers: browser → CDN → app memory (LRU) → Redis → DB",
        "Never cache without knowing the acceptable staleness"
      ]
    },
    pl: {
      q: "Jakie znasz strategie cache i jak radzisz sobie z invalidacją?",
      a: [
        "Cache-aside (leniwy): odczyt z cache → brak → DB → zapis do cache; najczęstszy",
        "Write-through: zapis do cache i DB razem; write-behind: najpierw cache, DB asynchronicznie",
        "Invalidacja: TTL, usuwanie przy zapisie, zdarzenia, wersjonowane klucze",
        "Stampede przy wygaśnięciu → blokada/single-flight, TTL z jitterem, stale-while-revalidate",
        "Warstwy: przeglądarka → CDN → pamięć aplikacji (LRU) → Redis → DB",
        "Nie cache'uj bez ustalenia akceptowalnej nieaktualności"
      ]
    }
  },
  {
    id: "stateless-scaling", topic: "Architecture",
    en: {
      q: "What does it mean for a service to be stateless, and why does it matter?",
      a: [
        "No request depends on in-memory data of a specific instance",
        "Sessions, caches, locks, uploads → Redis / DB / S3",
        "Any instance can serve any request → easy horizontal scaling, rolling deploys, crash recovery",
        "Horizontal (more instances) vs vertical (bigger instance) scaling",
        "WebSockets are stateful → sticky sessions + shared pub/sub"
      ]
    },
    pl: {
      q: "Co znaczy, że usługa jest bezstanowa i dlaczego to ważne?",
      a: [
        "Żadne żądanie nie zależy od danych w pamięci konkretnej instancji",
        "Sesje, cache, blokady, uploady → Redis / DB / S3",
        "Każda instancja obsłuży każde żądanie → łatwe skalowanie poziome, rolling deploy, odporność na awarie",
        "Skalowanie poziome (więcej instancji) vs pionowe (większa instancja)",
        "WebSockety są stanowe → sticky sessions + wspólny pub/sub"
      ]
    }
  },
  {
    id: "cap", topic: "Architecture",
    en: {
      q: "What is the CAP theorem and eventual consistency?",
      a: [
        "During a network partition you choose Consistency or Availability",
        "CP: reject/timeout rather than return stale data (banking balance)",
        "AP: stay up, return possibly stale data, reconcile later (feeds, likes, catalogue)",
        "Eventual consistency: replicas converge if no new writes",
        "PACELC: even without partitions → latency vs consistency trade-off"
      ]
    },
    pl: {
      q: "Czym jest twierdzenie CAP i eventual consistency?",
      a: [
        "Przy partycji sieci wybierasz Spójność albo Dostępność",
        "CP: odrzuć/timeout zamiast zwracać nieaktualne dane (saldo konta)",
        "AP: działaj dalej, zwracaj możliwie nieaktualne dane, uzgodnij później (feedy, lajki, katalog)",
        "Eventual consistency: repliki się zbiegają, gdy brak nowych zapisów",
        "PACELC: nawet bez partycji → kompromis opóźnienie vs spójność"
      ]
    }
  },
  {
    id: "microservices", topic: "Architecture",
    en: {
      q: "Modular monolith vs microservices?",
      a: [
        "Monolith: one deploy, local calls, ACID transactions, easy debugging",
        "Microservices: independent deploy/scale, team ownership, tech freedom, fault isolation",
        "Microservice costs: network failures, distributed data consistency, tracing, versioning, infra",
        "Start with clear module boundaries; split when team size, scaling or deploy cadence justify it",
        "Each service owns its data – no shared database"
      ]
    },
    pl: {
      q: "Modularny monolit vs mikroserwisy?",
      a: [
        "Monolit: jedno wdrożenie, wywołania lokalne, transakcje ACID, łatwe debugowanie",
        "Mikroserwisy: niezależne wdrożenia/skalowanie, własność zespołów, swoboda technologii, izolacja awarii",
        "Koszty mikroserwisów: awarie sieci, spójność rozproszonych danych, tracing, wersjonowanie, infrastruktura",
        "Zacznij od czytelnych granic modułów; dziel, gdy uzasadnia to wielkość zespołu, skalowanie lub tempo wdrożeń",
        "Każda usługa ma własne dane – bez wspólnej bazy"
      ]
    }
  },
  {
    id: "consistency", topic: "Architecture",
    en: {
      q: "How do you keep data consistent across services without distributed transactions (Saga)?",
      a: [
        "Saga: sequence of local transactions, each with a compensating action",
        "Choreography: services react to each other's events – loose, harder to follow",
        "Orchestration: central coordinator (e.g. AWS Step Functions) – explicit flow, easier to monitor",
        "Every step idempotent; explicit states (`PENDING`, `CONFIRMED`, `CANCELLED`)",
        "Avoid 2PC in microservices – blocking and fragile"
      ]
    },
    pl: {
      q: "Jak utrzymać spójność danych między usługami bez transakcji rozproszonych (Saga)?",
      a: [
        "Saga: sekwencja lokalnych transakcji, każda z akcją kompensującą",
        "Choreografia: usługi reagują na zdarzenia innych – luźno, trudniej śledzić",
        "Orkiestracja: centralny koordynator (np. AWS Step Functions) – jawny przepływ, łatwiejszy monitoring",
        "Każdy krok idempotentny; jawne stany (`PENDING`, `CONFIRMED`, `CANCELLED`)",
        "Unikaj 2PC w mikroserwisach – blokujące i kruche"
      ]
    }
  },
  {
    id: "resilience", topic: "Architecture",
    en: {
      q: "How do you make calls to other services resilient?",
      a: [
        "Timeouts on every outbound call (no default infinite waits)",
        "Retries only for transient errors, exponential backoff + jitter, capped attempts; only idempotent ops",
        "Circuit breaker: stop calling a failing dependency, fail fast, probe to recover (e.g. `opossum`)",
        "Bulkhead: separate pools/limits so one dependency cannot exhaust everything",
        "Fallbacks: cached/default data, graceful degradation",
        "Beware retry storms – retry at one layer only"
      ]
    },
    pl: {
      q: "Jak uodpornić wywołania innych usług?",
      a: [
        "Timeouty na każdym wywołaniu wychodzącym (bez nieskończonego czekania)",
        "Ponowienia tylko przy błędach przejściowych, wykładniczy backoff + jitter, limit prób; tylko operacje idempotentne",
        "Circuit breaker: przestań wołać padającą zależność, szybki błąd, próby powrotu (np. `opossum`)",
        "Bulkhead: osobne pule/limity, żeby jedna zależność nie wyczerpała wszystkiego",
        "Fallbacki: dane z cache/domyślne, łagodna degradacja",
        "Uwaga na burze ponowień – ponawiaj tylko w jednej warstwie"
      ]
    }
  },
  {
    id: "queues", topic: "Architecture",
    en: {
      q: "When do you move work from the HTTP request into a queue + worker?",
      a: [
        "Slow (> a few seconds), bursty, retryable or not needed for the response",
        "Examples: emails, notifications, PDFs, image/video processing, 3rd-party sync",
        "API returns `202 Accepted` + job ID; status endpoint or push notification",
        "Workers: idempotent, limited concurrency, retries with backoff, DLQ",
        "Monitor queue depth and age of oldest message; autoscale workers on it",
        "Node options: SQS, BullMQ (Redis), RabbitMQ"
      ]
    },
    pl: {
      q: "Kiedy przenosisz pracę z żądania HTTP do kolejki + workera?",
      a: [
        "Wolna (> kilka sekund), skokowa, możliwa do ponowienia lub niepotrzebna do odpowiedzi",
        "Przykłady: e-maile, powiadomienia, PDF, przetwarzanie obrazów/wideo, synchronizacja z zewnętrznymi systemami",
        "API zwraca `202 Accepted` + ID zadania; endpoint statusu lub powiadomienie push",
        "Workery: idempotentne, ograniczona współbieżność, ponowienia z backoffem, DLQ",
        "Monitoring długości kolejki i wieku najstarszej wiadomości; autoskalowanie workerów",
        "Opcje w Node: SQS, BullMQ (Redis), RabbitMQ"
      ]
    }
  },
  {
    id: "pdf-scale", topic: "Architecture",
    en: {
      q: "Design PDF generation for 100,000 users without overloading the API.",
      a: [
        "API/scheduler only enqueues jobs (one per user or per batch) – no rendering in request handlers",
        "Queue (SQS) → autoscaled workers (ECS/Lambda) with controlled concurrency",
        "Idempotent job key (`userId + period`) → safe retries, no duplicates",
        "Upload results to S3; notify user (email/push) with a presigned link",
        "Retries + DLQ; progress tracked in DB",
        "Monitor throughput, failures, cost; reuse browser instances if using Puppeteer"
      ]
    },
    pl: {
      q: "Zaprojektuj generowanie PDF dla 100 000 użytkowników bez przeciążania API.",
      a: [
        "API/scheduler tylko kolejkuje zadania (per użytkownik lub partia) – bez renderowania w handlerach",
        "Kolejka (SQS) → autoskalowane workery (ECS/Lambda) z kontrolowaną współbieżnością",
        "Idempotentny klucz zadania (`userId + okres`) → bezpieczne ponowienia, brak duplikatów",
        "Wyniki do S3; powiadomienie użytkownika (e-mail/push) z presigned linkiem",
        "Ponowienia + DLQ; postęp śledzony w DB",
        "Monitoring przepustowości, błędów, kosztów; przy Puppeteerze ponowne użycie instancji przeglądarki"
      ]
    }
  },
  {
    id: "large-file", topic: "Architecture",
    en: {
      q: "Design a reliable pipeline for processing large uploaded files (e.g. CSV imports).",
      a: [
        "Client uploads directly to S3 via presigned URL (multipart for big files)",
        "S3 event → queue → worker; job record with status in DB",
        "Stream-parse, validate row by row, write in batches",
        "Collect invalid rows into an error report instead of failing everything",
        "Checkpoints for resume; idempotent writes (upsert by natural key)",
        "Status endpoint / notification when done"
      ]
    },
    pl: {
      q: "Zaprojektuj niezawodny proces przetwarzania dużych plików (np. import CSV).",
      a: [
        "Klient wysyła prosto do S3 przez presigned URL (multipart dla dużych plików)",
        "Zdarzenie S3 → kolejka → worker; rekord zadania ze statusem w DB",
        "Parsowanie strumieniowe, walidacja wiersz po wierszu, zapis partiami",
        "Błędne wiersze do raportu błędów zamiast przerywania całości",
        "Punkty kontrolne do wznowienia; idempotentne zapisy (upsert po kluczu naturalnym)",
        "Endpoint statusu / powiadomienie po zakończeniu"
      ]
    }
  },
  {
    id: "notification-system", topic: "Architecture",
    en: {
      q: "Design a notification system (push, email, SMS, in-app) for millions of users.",
      a: [
        "Producers publish domain events (`OrderShipped`) → notification service",
        "Service: resolve recipients, user preferences/opt-outs, templates + i18n",
        "Fan-out to per-channel queues (SNS → SQS) → channel workers → providers (APNs/FCM, SES, SMS gateway)",
        "Dedupe by idempotency key; rate-limit per user and per provider; quiet hours",
        "Retries with backoff, DLQ, provider failover",
        "Store notification log + delivery status (in-app inbox, analytics)"
      ]
    },
    pl: {
      q: "Zaprojektuj system powiadomień (push, e-mail, SMS, in-app) dla milionów użytkowników.",
      a: [
        "Producenci publikują zdarzenia domenowe (`OrderShipped`) → usługa powiadomień",
        "Usługa: wyznacza odbiorców, preferencje/wypisania, szablony + i18n",
        "Fan-out do kolejek per kanał (SNS → SQS) → workery kanałów → dostawcy (APNs/FCM, SES, bramka SMS)",
        "Deduplikacja po kluczu idempotencji; rate limit per użytkownik i dostawca; godziny ciszy",
        "Ponowienia z backoffem, DLQ, przełączanie dostawców",
        "Log powiadomień + status dostarczenia (skrzynka in-app, analityka)"
      ]
    }
  },
  {
    id: "realtime", topic: "Architecture",
    en: {
      q: "Polling vs long polling vs SSE vs WebSockets?",
      a: [
        "Polling: simple, wasteful, delayed updates",
        "Long polling: server holds request until data – fallback option",
        "SSE: server → client stream over HTTP, auto-reconnect, text only – great for notifications/feeds",
        "WebSockets: full-duplex, low latency – chat, collaboration, live games",
        "Scaling: stateful connections → sticky LB, shared pub/sub (Redis), connection limits",
        "Mobile push (APNs/FCM) when the app is closed"
      ]
    },
    pl: {
      q: "Polling vs long polling vs SSE vs WebSockets?",
      a: [
        "Polling: prosty, marnotrawny, opóźnione aktualizacje",
        "Long polling: serwer trzyma żądanie aż do danych – opcja zapasowa",
        "SSE: strumień serwer → klient przez HTTP, auto-reconnect, tylko tekst – świetne do powiadomień/feedów",
        "WebSockets: full-duplex, niskie opóźnienia – czat, współpraca, gry na żywo",
        "Skalowanie: stanowe połączenia → sticky LB, wspólny pub/sub (Redis), limity połączeń",
        "Push mobilny (APNs/FCM), gdy aplikacja jest zamknięta"
      ]
    }
  },
  {
    id: "bff", topic: "Architecture",
    en: {
      q: "What is the Backend-for-Frontend (BFF) pattern?",
      a: [
        "A backend tailored to one client type (web, mobile, TV)",
        "Aggregates calls to many services → fewer round trips for the client",
        "Shapes payloads per device (TVs need smaller responses, different images)",
        "Handles auth/session for the client; owned by the frontend team",
        "Risk: duplicated logic across BFFs – keep business rules in domain services",
        "GraphQL is often used as a single flexible BFF"
      ]
    },
    pl: {
      q: "Czym jest wzorzec Backend-for-Frontend (BFF)?",
      a: [
        "Backend dopasowany do jednego typu klienta (web, mobile, TV)",
        "Agreguje wywołania wielu usług → mniej zapytań po stronie klienta",
        "Dopasowuje odpowiedzi do urządzenia (TV potrzebuje mniejszych odpowiedzi, innych obrazów)",
        "Obsługuje auth/sesję klienta; należy do zespołu frontendu",
        "Ryzyko: zduplikowana logika w wielu BFF – reguły biznesowe w usługach domenowych",
        "GraphQL często jako jeden elastyczny BFF"
      ]
    }
  },

  // ───────────────────────── Events & messaging ─────────────────────────
  {
    id: "event-driven", topic: "Messaging",
    en: {
      q: "What is event-driven architecture? Pros and cons?",
      a: [
        "Services publish events (facts: `UserRegistered`) – consumers react independently",
        "Event (something happened) vs command (do something, one handler)",
        "Pros: loose coupling, easy to add consumers, absorbs spikes, async scaling",
        "Cons: eventual consistency, harder debugging/tracing, duplicate & out-of-order messages",
        "Needs: schema contracts, correlation IDs, idempotent consumers, DLQs"
      ]
    },
    pl: {
      q: "Czym jest architektura sterowana zdarzeniami? Zalety i wady?",
      a: [
        "Usługi publikują zdarzenia (fakty: `UserRegistered`) – konsumenci reagują niezależnie",
        "Zdarzenie (coś się stało) vs komenda (zrób coś, jeden handler)",
        "Zalety: luźne powiązania, łatwe dodawanie konsumentów, amortyzacja skoków, asynchroniczne skalowanie",
        "Wady: eventual consistency, trudniejsze debugowanie/tracing, duplikaty i zła kolejność",
        "Potrzebne: kontrakty schematów, correlation ID, idempotentni konsumenci, DLQ"
      ]
    }
  },
  {
    id: "delivery-semantics", topic: "Messaging",
    en: {
      q: "At-most-once vs at-least-once vs exactly-once delivery?",
      a: [
        "At-most-once: ack before processing – may lose messages",
        "At-least-once: ack after processing – may duplicate (SQS standard, Kafka default setup)",
        "Exactly-once end-to-end is practically impossible across systems",
        "Real answer: at-least-once + idempotent consumer = effectively-once",
        "Idempotency: processed-message table with unique ID, upserts, conditional writes"
      ]
    },
    pl: {
      q: "Dostarczanie at-most-once vs at-least-once vs exactly-once?",
      a: [
        "At-most-once: potwierdzenie przed przetworzeniem – można zgubić wiadomości",
        "At-least-once: potwierdzenie po przetworzeniu – możliwe duplikaty (SQS standard, typowo Kafka)",
        "Exactly-once end-to-end między systemami praktycznie niemożliwe",
        "Właściwa odpowiedź: at-least-once + idempotentny konsument = effectively-once",
        "Idempotencja: tabela przetworzonych wiadomości z unikalnym ID, upserty, zapisy warunkowe"
      ]
    }
  },
  {
    id: "events", topic: "Messaging",
    en: {
      q: "What failure cases do you design for in an event-driven system?",
      a: [
        "Duplicates → idempotent consumers",
        "Out-of-order → ordering key/partition, version numbers, ignore older events",
        "Poison messages → limited retries → DLQ + alert + replay tooling",
        "Consumer down/slow → backlog; monitor lag and age of oldest message",
        "Schema changes → backward-compatible, versioned events (schema registry)",
        "Lost events on publish → transactional outbox"
      ]
    },
    pl: {
      q: "Jakie awarie uwzględniasz w systemie sterowanym zdarzeniami?",
      a: [
        "Duplikaty → idempotentni konsumenci",
        "Zła kolejność → klucz porządkujący/partycja, numery wersji, ignorowanie starszych zdarzeń",
        "Trujące wiadomości → ograniczone ponowienia → DLQ + alert + narzędzia do replay",
        "Konsument padł/wolny → zaległości; monitoring lagu i wieku najstarszej wiadomości",
        "Zmiany schematu → zgodne wstecz, wersjonowane zdarzenia (schema registry)",
        "Utracone zdarzenia przy publikacji → transactional outbox"
      ]
    }
  },
  {
    id: "outbox", topic: "Messaging",
    en: {
      q: "What is the transactional outbox pattern?",
      a: [
        "Problem (dual write): DB commit succeeds, publish to broker fails (or vice versa)",
        "Write business row + event row into an `outbox` table in the same DB transaction",
        "Relay publishes outbox rows to the broker (polling or CDC, e.g. Debezium), marks them sent",
        "Gives at-least-once publishing → consumers must be idempotent",
        "Inbox pattern on the consumer side for dedupe"
      ]
    },
    pl: {
      q: "Czym jest wzorzec transactional outbox?",
      a: [
        "Problem (podwójny zapis): commit w DB się udaje, publikacja do brokera nie (lub odwrotnie)",
        "Zapis wiersza biznesowego + zdarzenia do tabeli `outbox` w tej samej transakcji",
        "Relay publikuje wiersze outbox do brokera (polling lub CDC, np. Debezium) i oznacza jako wysłane",
        "Daje publikację at-least-once → konsumenci muszą być idempotentni",
        "Wzorzec inbox po stronie konsumenta do deduplikacji"
      ]
    }
  },
  {
    id: "message-ordering", topic: "Messaging",
    en: {
      q: "How do you guarantee message ordering?",
      a: [
        "Global ordering does not scale – order only per entity (per order ID, per user)",
        "Kafka: same key → same partition → ordered for one consumer in the group",
        "SQS FIFO: `MessageGroupId`; ordered within group, deduplication ID (5-min window)",
        "Parallelism = number of partitions / message groups",
        "Consumers can also check entity version and drop stale events"
      ]
    },
    pl: {
      q: "Jak zagwarantować kolejność wiadomości?",
      a: [
        "Globalna kolejność się nie skaluje – kolejność tylko per encja (per zamówienie, per użytkownik)",
        "Kafka: ten sam klucz → ta sama partycja → kolejność dla jednego konsumenta w grupie",
        "SQS FIFO: `MessageGroupId`; kolejność w grupie, deduplication ID (okno 5 min)",
        "Równoległość = liczba partycji / grup wiadomości",
        "Konsument może też sprawdzać wersję encji i odrzucać stare zdarzenia"
      ]
    }
  },
  {
    id: "kafka-vs-queue", topic: "Messaging",
    en: {
      q: "Kafka vs SQS / RabbitMQ – what is the difference?",
      a: [
        "Queue (SQS, RabbitMQ): message consumed once, then deleted; work distribution",
        "Log (Kafka, Kinesis): append-only, retained; many consumer groups read independently at their own offset",
        "Kafka: replay history, very high throughput, ordering per partition; more ops (MSK helps)",
        "RabbitMQ: flexible routing (exchanges), priorities, low latency",
        "SQS: fully managed, near-zero ops, visibility timeout, DLQ built in"
      ]
    },
    pl: {
      q: "Kafka vs SQS / RabbitMQ – czym się różnią?",
      a: [
        "Kolejka (SQS, RabbitMQ): wiadomość konsumowana raz, potem usuwana; dystrybucja pracy",
        "Log (Kafka, Kinesis): tylko dopisywanie, przechowywany; wiele grup konsumentów czyta niezależnie od swojego offsetu",
        "Kafka: odtwarzanie historii, bardzo duża przepustowość, kolejność per partycja; więcej utrzymania (MSK pomaga)",
        "RabbitMQ: elastyczny routing (exchange'e), priorytety, niskie opóźnienia",
        "SQS: w pełni zarządzany, prawie zero utrzymania, visibility timeout, wbudowane DLQ"
      ]
    }
  },
  {
    id: "cqrs", topic: "Messaging",
    en: {
      q: "What are CQRS and event sourcing?",
      a: [
        "CQRS: separate write model (commands) from read model (queries), each optimised",
        "Read models often built from events (e.g. into Elasticsearch/Redis)",
        "Event sourcing: store the sequence of events as the source of truth; state = replay",
        "Pros: full audit history, temporal queries, rebuildable projections",
        "Cons: complexity, eventual consistency, event versioning – use only where it pays off"
      ]
    },
    pl: {
      q: "Czym są CQRS i event sourcing?",
      a: [
        "CQRS: rozdzielenie modelu zapisu (komendy) od modelu odczytu (zapytania), każdy zoptymalizowany",
        "Modele odczytu często budowane ze zdarzeń (np. do Elasticsearch/Redis)",
        "Event sourcing: sekwencja zdarzeń jako źródło prawdy; stan = odtworzenie",
        "Zalety: pełna historia audytowa, zapytania w czasie, odbudowywalne projekcje",
        "Wady: złożoność, eventual consistency, wersjonowanie zdarzeń – tylko gdzie się opłaca"
      ]
    }
  },

  // ───────────────────────── AWS ─────────────────────────
  {
    id: "aws-honesty", topic: "AWS",
    en: {
      q: "What is your experience with AWS?",
      a: [
        "Honest: no production AWS listed on my CV – I have not operated it at scale",
        "Transferable: Docker images, Kubernetes deployments, CI/CD, PostgreSQL, production monitoring",
        "Know the core mapping: ECS/EKS ≈ what I ran on K8s, S3 for files, SQS/SNS for messaging, RDS for Postgres",
        "Plan: hands-on project + AWS Developer Associate-level material"
      ]
    },
    pl: {
      q: "Jakie masz doświadczenie z AWS?",
      a: [
        "Szczerze: w CV nie ma produkcyjnego AWS – nie utrzymywałem go w dużej skali",
        "Przenoszalne: obrazy Docker, wdrożenia Kubernetes, CI/CD, PostgreSQL, monitoring produkcji",
        "Znam mapowanie: ECS/EKS ≈ to, co uruchamiałem na K8s, S3 na pliki, SQS/SNS do komunikacji, RDS dla Postgresa",
        "Plan: projekt praktyczny + materiały na poziomie AWS Developer Associate"
      ]
    }
  },
  {
    id: "aws-core", topic: "AWS",
    en: {
      q: "Name the core AWS services you would use for a typical Node.js backend.",
      a: [
        "Compute: EC2, ECS/Fargate, EKS, Lambda",
        "Storage/DB: S3, RDS/Aurora (Postgres), DynamoDB, ElastiCache (Redis)",
        "Messaging: SQS, SNS, EventBridge, Kinesis/MSK",
        "Edge/networking: CloudFront, Route 53, ALB, API Gateway, VPC",
        "Security: IAM, Secrets Manager, KMS, Cognito, WAF",
        "Ops: CloudWatch (logs, metrics, alarms), X-Ray, CloudFormation/CDK"
      ]
    },
    pl: {
      q: "Wymień podstawowe usługi AWS dla typowego backendu w Node.js.",
      a: [
        "Obliczenia: EC2, ECS/Fargate, EKS, Lambda",
        "Dane: S3, RDS/Aurora (Postgres), DynamoDB, ElastiCache (Redis)",
        "Komunikacja: SQS, SNS, EventBridge, Kinesis/MSK",
        "Brzeg/sieć: CloudFront, Route 53, ALB, API Gateway, VPC",
        "Bezpieczeństwo: IAM, Secrets Manager, KMS, Cognito, WAF",
        "Operacje: CloudWatch (logi, metryki, alarmy), X-Ray, CloudFormation/CDK"
      ]
    }
  },
  {
    id: "aws-compute", topic: "AWS",
    en: {
      q: "EC2 vs ECS/Fargate vs EKS vs Lambda – how do you choose?",
      a: [
        "EC2: full control of VMs; you manage OS, patching, scaling",
        "ECS on Fargate: run containers without managing servers – good default for Node APIs",
        "EKS: managed Kubernetes – when you need K8s ecosystem/portability (Helm charts)",
        "Lambda: event-driven functions, pay per request, scales to zero; limits apply",
        "Long-running, steady traffic → containers; spiky/event glue → Lambda"
      ]
    },
    pl: {
      q: "EC2 vs ECS/Fargate vs EKS vs Lambda – jak wybierasz?",
      a: [
        "EC2: pełna kontrola nad VM; zarządzasz systemem, łatkami, skalowaniem",
        "ECS na Fargate: kontenery bez zarządzania serwerami – dobry domyślny wybór dla API w Node",
        "EKS: zarządzany Kubernetes – gdy potrzebny ekosystem K8s/przenośność (charty Helm)",
        "Lambda: funkcje sterowane zdarzeniami, płatność za wywołanie, skalowanie do zera; są limity",
        "Długotrwały, stały ruch → kontenery; skoki/klej zdarzeń → Lambda"
      ]
    }
  },
  {
    id: "lambda", topic: "AWS",
    en: {
      q: "What are AWS Lambda's limits and pitfalls?",
      a: [
        "Max 15 min execution, up to 10 GB memory (CPU scales with memory), payload limits (6 MB sync)",
        "Cold starts: init on new execution environment – keep bundles small, init outside handler, provisioned concurrency",
        "Concurrency limit per account/region; reserved concurrency per function",
        "DB connections explode with concurrency → RDS Proxy or DynamoDB",
        "Stateless; `/tmp` is ephemeral",
        "Triggers: API Gateway, SQS (batch, partial failures), S3, EventBridge, schedules"
      ]
    },
    pl: {
      q: "Jakie są limity i pułapki AWS Lambda?",
      a: [
        "Maks. 15 min wykonania, do 10 GB pamięci (CPU rośnie z pamięcią), limity payloadu (6 MB sync)",
        "Cold starty: inicjalizacja nowego środowiska – małe bundle, inicjalizacja poza handlerem, provisioned concurrency",
        "Limit współbieżności per konto/region; reserved concurrency per funkcja",
        "Połączenia DB rosną ze współbieżnością → RDS Proxy lub DynamoDB",
        "Bezstanowa; `/tmp` jest ulotne",
        "Wyzwalacze: API Gateway, SQS (partie, częściowe błędy), S3, EventBridge, harmonogramy"
      ]
    }
  },
  {
    id: "sqs-sns-eventbridge", topic: "AWS",
    en: {
      q: "SQS vs SNS vs EventBridge vs Kinesis?",
      a: [
        "SQS: queue, pull-based, one consumer group; visibility timeout, DLQ; Standard (at-least-once) or FIFO",
        "SNS: pub/sub push fan-out to many subscribers (SQS, Lambda, HTTP, email, mobile push)",
        "SNS → multiple SQS = classic fan-out with durable buffers per consumer",
        "EventBridge: event bus with content-based routing rules, schema registry, SaaS/AWS events, scheduler",
        "Kinesis: ordered stream with shards and replay – high-volume telemetry/analytics"
      ]
    },
    pl: {
      q: "SQS vs SNS vs EventBridge vs Kinesis?",
      a: [
        "SQS: kolejka, pobieranie (pull), jedna grupa konsumentów; visibility timeout, DLQ; Standard (at-least-once) lub FIFO",
        "SNS: pub/sub, wypychanie (push) do wielu subskrybentów (SQS, Lambda, HTTP, e-mail, push mobilny)",
        "SNS → wiele SQS = klasyczny fan-out z trwałym buforem per konsument",
        "EventBridge: szyna zdarzeń z regułami routingu po treści, schema registry, zdarzenia SaaS/AWS, scheduler",
        "Kinesis: uporządkowany strumień z shardami i replay – duże wolumeny telemetrii/analityki"
      ]
    }
  },
  {
    id: "sqs-details", topic: "AWS",
    en: {
      q: "How does an SQS consumer work (visibility timeout, DLQ)?",
      a: [
        "Consumer polls (`ReceiveMessage`, long polling up to 20 s), batches up to 10",
        "Received message becomes invisible for the visibility timeout",
        "Delete after successful processing; otherwise it reappears → retry",
        "Visibility timeout > processing time (extend for long jobs)",
        "`maxReceiveCount` exceeded → moved to DLQ; redrive after fix",
        "Scale workers on `ApproximateNumberOfMessagesVisible` / `ApproximateAgeOfOldestMessage`"
      ]
    },
    pl: {
      q: "Jak działa konsument SQS (visibility timeout, DLQ)?",
      a: [
        "Konsument odpytuje (`ReceiveMessage`, long polling do 20 s), partie do 10",
        "Odebrana wiadomość staje się niewidoczna na czas visibility timeout",
        "Usunięcie po udanym przetworzeniu; inaczej wraca → ponowienie",
        "Visibility timeout > czas przetwarzania (wydłużanie przy długich zadaniach)",
        "Przekroczone `maxReceiveCount` → trafia do DLQ; redrive po naprawie",
        "Skalowanie workerów wg `ApproximateNumberOfMessagesVisible` / `ApproximateAgeOfOldestMessage`"
      ]
    }
  },
  {
    id: "s3", topic: "AWS",
    en: {
      q: "What should a backend developer know about S3?",
      a: [
        "Object storage: bucket + key, not a filesystem; strongly consistent reads after write",
        "Presigned URLs: client uploads/downloads directly with temporary permissions",
        "Multipart upload for large files (required > 5 GB)",
        "Event notifications → SQS/SNS/Lambda/EventBridge for processing pipelines",
        "Storage classes + lifecycle rules (Standard → IA → Glacier)",
        "Block public access; serve via CloudFront (Origin Access Control)"
      ]
    },
    pl: {
      q: "Co backend developer powinien wiedzieć o S3?",
      a: [
        "Magazyn obiektowy: bucket + klucz, nie system plików; silna spójność odczytu po zapisie",
        "Presigned URL: klient wysyła/pobiera bezpośrednio z tymczasowymi uprawnieniami",
        "Multipart upload dla dużych plików (wymagany > 5 GB)",
        "Powiadomienia o zdarzeniach → SQS/SNS/Lambda/EventBridge dla potoków przetwarzania",
        "Klasy przechowywania + reguły cyklu życia (Standard → IA → Glacier)",
        "Blokada dostępu publicznego; serwowanie przez CloudFront (Origin Access Control)"
      ]
    }
  },
  {
    id: "iam", topic: "AWS",
    en: {
      q: "How does IAM work, and what are best practices?",
      a: [
        "Principals (users, roles) + policies (JSON: Effect, Action, Resource, Condition)",
        "Default deny; explicit deny wins",
        "Services use roles, not access keys (ECS task role, Lambda execution role, IRSA on EKS)",
        "Least privilege: specific actions on specific resource ARNs",
        "No long-lived keys; SSO for humans; MFA; CloudTrail audit"
      ]
    },
    pl: {
      q: "Jak działa IAM i jakie są dobre praktyki?",
      a: [
        "Podmioty (użytkownicy, role) + polityki (JSON: Effect, Action, Resource, Condition)",
        "Domyślnie odmowa; jawna odmowa wygrywa",
        "Usługi używają ról, nie kluczy dostępu (ECS task role, Lambda execution role, IRSA na EKS)",
        "Najmniejsze uprawnienia: konkretne akcje na konkretnych ARN",
        "Brak długo żyjących kluczy; SSO dla ludzi; MFA; audyt w CloudTrail"
      ]
    }
  },
  {
    id: "vpc", topic: "AWS",
    en: {
      q: "Explain basic AWS networking: VPC, subnets, security groups.",
      a: [
        "VPC: private network; subnets per Availability Zone",
        "Public subnet: route to Internet Gateway (load balancers)",
        "Private subnet: apps and DBs; outbound via NAT Gateway",
        "Security groups: stateful, instance-level allow rules (e.g. DB only from app SG)",
        "NACLs: stateless, subnet-level",
        "Spread across ≥ 2 AZs for high availability"
      ]
    },
    pl: {
      q: "Wyjaśnij podstawy sieci w AWS: VPC, podsieci, security groups.",
      a: [
        "VPC: prywatna sieć; podsieci per strefa dostępności (AZ)",
        "Podsieć publiczna: trasa do Internet Gateway (load balancery)",
        "Podsieć prywatna: aplikacje i bazy; ruch wychodzący przez NAT Gateway",
        "Security groups: stanowe reguły allow na poziomie instancji (np. DB tylko z SG aplikacji)",
        "NACL: bezstanowe, na poziomie podsieci",
        "Rozłożenie na ≥ 2 AZ dla wysokiej dostępności"
      ]
    }
  },
  {
    id: "dynamodb", topic: "AWS",
    en: {
      q: "How do you design a DynamoDB table?",
      a: [
        "Start from access patterns, not entities",
        "Partition key (distribution) + optional sort key (range queries, ordering)",
        "Avoid hot partitions – high-cardinality keys",
        "GSIs for other access patterns (eventually consistent)",
        "Single-table design: multiple entity types, generic `PK`/`SK` keys",
        "Conditional writes for idempotency/optimistic locking; TTL for expiry; Streams for CDC"
      ]
    },
    pl: {
      q: "Jak zaprojektować tabelę DynamoDB?",
      a: [
        "Zacznij od wzorców dostępu, nie encji",
        "Klucz partycji (rozkład) + opcjonalny klucz sortowania (zapytania zakresowe, kolejność)",
        "Unikaj gorących partycji – klucze o dużej kardynalności",
        "GSI dla innych wzorców dostępu (eventually consistent)",
        "Single-table design: wiele typów encji, ogólne klucze `PK`/`SK`",
        "Zapisy warunkowe dla idempotencji/optimistic locking; TTL do wygasania; Streams jako CDC"
      ]
    }
  },
  {
    id: "aws-deploy-node", topic: "AWS",
    en: {
      q: "How would you deploy a containerised Node.js API on AWS?",
      a: [
        "CI builds Docker image → pushes to ECR",
        "ECS Fargate service in private subnets, ≥ 2 AZs, behind an ALB (health checks)",
        "RDS Postgres (Multi-AZ), ElastiCache Redis, S3 for files",
        "Config via env vars, secrets from Secrets Manager / SSM; task role for AWS access",
        "Autoscaling on CPU / request count; rolling or blue/green deploy (CodeDeploy)",
        "CloudWatch logs + alarms (or Datadog agent); infrastructure as code (CDK/Terraform)"
      ]
    },
    pl: {
      q: "Jak wdrożyłbyś skonteneryzowane API w Node.js na AWS?",
      a: [
        "CI buduje obraz Docker → wysyła do ECR",
        "Usługa ECS Fargate w prywatnych podsieciach, ≥ 2 AZ, za ALB (health checki)",
        "RDS Postgres (Multi-AZ), ElastiCache Redis, S3 na pliki",
        "Konfiguracja przez zmienne środowiskowe, sekrety z Secrets Manager / SSM; task role do dostępu do AWS",
        "Autoskalowanie wg CPU / liczby żądań; rolling lub blue/green (CodeDeploy)",
        "Logi + alarmy w CloudWatch (lub agent Datadog); infrastruktura jako kod (CDK/Terraform)"
      ]
    }
  },
  {
    id: "iac", topic: "AWS",
    en: {
      q: "What is Infrastructure as Code, and which tools do you know?",
      a: [
        "Infrastructure defined in versioned code → reviewable, repeatable, same for every env",
        "CloudFormation: AWS-native YAML/JSON stacks",
        "CDK: CloudFormation generated from TypeScript – natural fit for a TS team",
        "Terraform: multi-cloud, state file, `plan` → `apply`",
        "Avoid manual console changes (drift)"
      ]
    },
    pl: {
      q: "Czym jest Infrastructure as Code i jakie narzędzia znasz?",
      a: [
        "Infrastruktura w wersjonowanym kodzie → review, powtarzalność, identyczna w każdym środowisku",
        "CloudFormation: natywne stosy AWS w YAML/JSON",
        "CDK: CloudFormation generowany z TypeScriptu – naturalny wybór dla zespołu TS",
        "Terraform: multi-cloud, plik stanu, `plan` → `apply`",
        "Unikać ręcznych zmian w konsoli (drift)"
      ]
    }
  },
  // ───────────────────────── Docker & Kubernetes ─────────────────────────
  {
    id: "docker", topic: "Containers",
    en: {
      q: "What does Docker give a team, and what does it not solve?",
      a: [
        "Image = app + runtime + dependencies → same artefact in dev, CI, prod",
        "Fast, isolated, reproducible environments; easy local deps via Compose",
        "Container vs VM: shares host kernel → lighter, faster start; weaker isolation",
        "Does not solve: orchestration, scaling, secrets, observability, architecture"
      ]
    },
    pl: {
      q: "Co Docker daje zespołowi, a czego nie rozwiązuje?",
      a: [
        "Obraz = aplikacja + runtime + zależności → ten sam artefakt w dev, CI, prod",
        "Szybkie, izolowane, powtarzalne środowiska; łatwe lokalne zależności przez Compose",
        "Kontener vs VM: współdzieli jądro hosta → lżejszy, szybszy start; słabsza izolacja",
        "Nie rozwiązuje: orkiestracji, skalowania, sekretów, obserwowalności, architektury"
      ]
    }
  },
  {
    id: "docker-layers", topic: "Containers",
    en: {
      q: "Image vs container – and how does layer caching work?",
      a: [
        "Image: read-only template made of layers; container: running instance + writable layer",
        "Each Dockerfile instruction = a layer, cached by content",
        "Change in one layer invalidates all following layers",
        "So copy `package.json` + lockfile and `npm ci` before copying source code",
        "Containers are ephemeral – persistent data in volumes / external storage"
      ]
    },
    pl: {
      q: "Obraz vs kontener – i jak działa cache warstw?",
      a: [
        "Obraz: szablon tylko do odczytu z warstw; kontener: uruchomiona instancja + warstwa zapisywalna",
        "Każda instrukcja Dockerfile = warstwa, cache'owana wg zawartości",
        "Zmiana w jednej warstwie unieważnia wszystkie kolejne",
        "Dlatego najpierw `package.json` + lockfile i `npm ci`, potem kod źródłowy",
        "Kontenery są ulotne – trwałe dane w wolumenach / zewnętrznym magazynie"
      ]
    }
  },
  {
    id: "dockerfile-node", topic: "Containers",
    en: {
      q: "What does a production-ready Dockerfile for a Node.js app look like?",
      a: [
        "Multi-stage: build stage (dev deps, `tsc`) → slim runtime stage (prod deps + `dist`)",
        "Small pinned base: `node:22-alpine` / `-slim` / distroless",
        "`npm ci --omit=dev` for reproducible installs; `.dockerignore` (node_modules, .git, .env)",
        "Run as non-root: `USER node`",
        "`NODE_ENV=production`; exec form `CMD [\"node\", \"dist/main.js\"]` so SIGTERM reaches Node",
        "No secrets in the image; `HEALTHCHECK` or orchestrator probes"
      ]
    },
    pl: {
      q: "Jak wygląda produkcyjny Dockerfile dla aplikacji Node.js?",
      a: [
        "Multi-stage: etap build (zależności dev, `tsc`) → lekki etap runtime (zależności prod + `dist`)",
        "Mały, przypięty obraz bazowy: `node:22-alpine` / `-slim` / distroless",
        "`npm ci --omit=dev` dla powtarzalnych instalacji; `.dockerignore` (node_modules, .git, .env)",
        "Uruchamianie jako nie-root: `USER node`",
        "`NODE_ENV=production`; forma exec `CMD [\"node\", \"dist/main.js\"]`, żeby SIGTERM trafiał do Node",
        "Brak sekretów w obrazie; `HEALTHCHECK` lub sondy orkiestratora"
      ]
    }
  },
  {
    id: "docker-compose", topic: "Containers",
    en: {
      q: "What do you use Docker Compose for?",
      a: [
        "Define multi-container local environments in `compose.yaml`",
        "App + Postgres + Redis + LocalStack (fake AWS) with one `docker compose up`",
        "Networks, volumes, env files, `depends_on` with health checks",
        "Also handy for integration tests in CI",
        "Not a production orchestrator – that is ECS/Kubernetes"
      ]
    },
    pl: {
      q: "Do czego używasz Docker Compose?",
      a: [
        "Definicja lokalnych środowisk wielokontenerowych w `compose.yaml`",
        "Aplikacja + Postgres + Redis + LocalStack (lokalny AWS) jednym `docker compose up`",
        "Sieci, wolumeny, pliki env, `depends_on` z health checkami",
        "Przydatny też do testów integracyjnych w CI",
        "Nie jest produkcyjnym orkiestratorem – od tego ECS/Kubernetes"
      ]
    }
  },
  {
    id: "k8s-basics", topic: "Containers",
    en: {
      q: "Explain the main Kubernetes objects.",
      a: [
        "Pod: smallest unit – one or more containers sharing network/storage",
        "Deployment → ReplicaSet → Pods: desired replica count, rolling updates, rollback",
        "Service: stable virtual IP/DNS + load balancing to pods (ClusterIP, NodePort, LoadBalancer)",
        "Ingress: HTTP routing from outside (host/path → service), TLS",
        "ConfigMap / Secret: configuration injected as env vars or files",
        "Namespace: isolation; HPA: autoscaling; Job/CronJob: batch work"
      ]
    },
    pl: {
      q: "Wyjaśnij główne obiekty Kubernetesa.",
      a: [
        "Pod: najmniejsza jednostka – jeden lub więcej kontenerów ze wspólną siecią/dyskiem",
        "Deployment → ReplicaSet → Pody: docelowa liczba replik, rolling update, rollback",
        "Service: stały wirtualny IP/DNS + load balancing do podów (ClusterIP, NodePort, LoadBalancer)",
        "Ingress: routing HTTP z zewnątrz (host/ścieżka → service), TLS",
        "ConfigMap / Secret: konfiguracja wstrzykiwana jako zmienne lub pliki",
        "Namespace: izolacja; HPA: autoskalowanie; Job/CronJob: zadania wsadowe"
      ]
    }
  },
  {
    id: "k8s-probes", topic: "Containers",
    en: {
      q: "Liveness vs readiness vs startup probes?",
      a: [
        "Liveness: is the process healthy? Fails → container restarted",
        "Readiness: can it take traffic? Fails → removed from Service endpoints, not restarted",
        "Startup: slow boot – delays the other probes until it passes",
        "Liveness must not check dependencies (DB down ≠ restart all pods → cascading failure)",
        "Readiness may check critical deps; fail it during graceful shutdown"
      ]
    },
    pl: {
      q: "Sondy liveness vs readiness vs startup?",
      a: [
        "Liveness: czy proces jest zdrowy? Błąd → restart kontenera",
        "Readiness: czy może przyjmować ruch? Błąd → usunięty z endpointów Service, bez restartu",
        "Startup: wolny start – wstrzymuje pozostałe sondy do sukcesu",
        "Liveness nie powinna sprawdzać zależności (DB padła ≠ restart wszystkich podów → kaskadowa awaria)",
        "Readiness może sprawdzać krytyczne zależności; przy graceful shutdown zwraca błąd"
      ]
    }
  },
  {
    id: "k8s-resources", topic: "Containers",
    en: {
      q: "What are resource requests/limits and how does autoscaling work in Kubernetes?",
      a: [
        "Requests: guaranteed amount – used by the scheduler",
        "Limits: max; exceed memory → OOMKilled, exceed CPU → throttled",
        "Node.js: set `--max-old-space-size` below the memory limit",
        "HPA: scales replicas on CPU/memory or custom metrics (RPS, queue depth via KEDA)",
        "Cluster Autoscaler / Karpenter adds nodes when pods cannot be scheduled"
      ]
    },
    pl: {
      q: "Czym są requests/limits zasobów i jak działa autoskalowanie w Kubernetesie?",
      a: [
        "Requests: gwarantowana ilość – używana przez scheduler",
        "Limits: maksimum; przekroczenie pamięci → OOMKilled, CPU → throttling",
        "Node.js: `--max-old-space-size` poniżej limitu pamięci",
        "HPA: skaluje repliki wg CPU/pamięci lub metryk własnych (RPS, długość kolejki przez KEDA)",
        "Cluster Autoscaler / Karpenter dodaje węzły, gdy pody nie mieszczą się"
      ]
    }
  },
  {
    id: "helm", topic: "Containers",
    en: {
      q: "What is Helm and how do you use it?",
      a: [
        "Package manager for Kubernetes; a chart = templated manifests + `values.yaml`",
        "Release = installed chart instance with revision history",
        "Per-env overrides: `values-staging.yaml`, `values-prod.yaml`, `--set`",
        "`helm upgrade --install app ./chart -f values-prod.yaml`; `helm rollback app 3`",
        "`helm template` / `helm diff` to review rendered manifests before deploying",
        "Often driven by GitOps (Argo CD / Flux)"
      ]
    },
    pl: {
      q: "Czym jest Helm i jak go używasz?",
      a: [
        "Menedżer pakietów dla Kubernetesa; chart = szablony manifestów + `values.yaml`",
        "Release = zainstalowana instancja chartu z historią rewizji",
        "Nadpisania per środowisko: `values-staging.yaml`, `values-prod.yaml`, `--set`",
        "`helm upgrade --install app ./chart -f values-prod.yaml`; `helm rollback app 3`",
        "`helm template` / `helm diff` do przejrzenia wyrenderowanych manifestów przed wdrożeniem",
        "Często sterowany przez GitOps (Argo CD / Flux)"
      ]
    }
  },

  // ───────────────────────── CI/CD ─────────────────────────
  {
    id: "cicd", topic: "CI/CD",
    en: {
      q: "What stages would you put in a CI/CD pipeline for a Node.js service?",
      a: [
        "`npm ci` with cache → lint → type-check (`tsc --noEmit`)",
        "Unit tests → integration tests (DB in container) with coverage",
        "Security: `npm audit`/Snyk, secret scanning, image scan (Trivy)",
        "Build Docker image tagged with commit SHA → push to registry",
        "Deploy to staging → smoke/e2e tests → prod (manual approval or automatic)",
        "Post-deploy health checks, automatic rollback on failure"
      ]
    },
    pl: {
      q: "Jakie etapy umieściłbyś w pipeline CI/CD usługi Node.js?",
      a: [
        "`npm ci` z cache → lint → sprawdzanie typów (`tsc --noEmit`)",
        "Testy jednostkowe → integracyjne (DB w kontenerze) z pokryciem",
        "Bezpieczeństwo: `npm audit`/Snyk, skanowanie sekretów, skan obrazu (Trivy)",
        "Budowa obrazu Docker otagowanego SHA commita → push do rejestru",
        "Wdrożenie na staging → smoke/e2e → produkcja (ręczna akceptacja lub automatycznie)",
        "Health checki po wdrożeniu, automatyczny rollback przy błędzie"
      ]
    }
  },
  {
    id: "deploy-strategies", topic: "CI/CD",
    en: {
      q: "Rolling vs blue/green vs canary deployments?",
      a: [
        "Rolling: replace instances gradually; cheap; both versions live at once",
        "Blue/green: full new env, switch traffic at once; instant rollback; 2× resources",
        "Canary: small % of traffic to new version, watch metrics, increase gradually",
        "Feature flags: decouple deploy from release; kill switch; gradual rollout per user",
        "All require backward-compatible DB changes and APIs"
      ]
    },
    pl: {
      q: "Wdrożenia rolling vs blue/green vs canary?",
      a: [
        "Rolling: stopniowa wymiana instancji; tanio; obie wersje działają jednocześnie",
        "Blue/green: całe nowe środowisko, przełączenie ruchu naraz; natychmiastowy rollback; 2× zasoby",
        "Canary: mały % ruchu do nowej wersji, obserwacja metryk, stopniowe zwiększanie",
        "Feature flagi: oddzielenie wdrożenia od wydania; kill switch; stopniowe włączanie per użytkownik",
        "Wszystkie wymagają zgodnych wstecz zmian w DB i API"
      ]
    }
  },
  {
    id: "branching", topic: "CI/CD",
    en: {
      q: "Trunk-based development vs GitFlow?",
      a: [
        "Trunk-based: short-lived branches, merge to main daily, feature flags for unfinished work",
        "Enables continuous delivery, fewer merge conflicts",
        "GitFlow: long-lived develop/release/hotfix branches – suits versioned releases (mobile apps)",
        "Either way: small PRs, required review + green CI, protected main"
      ]
    },
    pl: {
      q: "Trunk-based development vs GitFlow?",
      a: [
        "Trunk-based: krótko żyjące gałęzie, merge do main codziennie, feature flagi dla niedokończonych prac",
        "Umożliwia continuous delivery, mniej konfliktów",
        "GitFlow: długo żyjące gałęzie develop/release/hotfix – pasuje do wersjonowanych wydań (aplikacje mobilne)",
        "W obu: małe PR, wymagane review + zielone CI, chroniony main"
      ]
    }
  },

  // ───────────────────────── Testing ─────────────────────────
  {
    id: "testing-pyramid", topic: "Testing",
    en: {
      q: "How do you balance unit, integration and end-to-end tests?",
      a: [
        "Unit: many, fast – pure logic, edge cases",
        "Integration: API + real DB/queue in containers – where most backend bugs hide",
        "E2E: few – critical user journeys only (Playwright/Cypress)",
        "Test behaviour, not implementation details",
        "Deterministic: no real time/network; isolated data per test",
        "Backend services often favour a 'testing trophy' – heavier on integration"
      ]
    },
    pl: {
      q: "Jak rozkładasz testy jednostkowe, integracyjne i end-to-end?",
      a: [
        "Jednostkowe: dużo, szybkie – czysta logika, przypadki brzegowe",
        "Integracyjne: API + prawdziwa DB/kolejka w kontenerach – tu kryje się większość błędów backendu",
        "E2E: mało – tylko kluczowe ścieżki użytkownika (Playwright/Cypress)",
        "Testuj zachowanie, nie szczegóły implementacji",
        "Deterministycznie: bez prawdziwego czasu/sieci; izolowane dane per test",
        "Usługi backendowe często wg 'testing trophy' – więcej testów integracyjnych"
      ]
    }
  },
  {
    id: "api-testing", topic: "Testing",
    en: {
      q: "How do you test a Node.js REST API?",
      a: [
        "Export the app without `listen()` → call it with `supertest`",
        "Real Postgres via Testcontainers / Docker Compose; migrate once, truncate or transaction per test",
        "Mock only external 3rd-party HTTP (`nock`, MSW) – not your own DB",
        "Cover: happy path, validation (422), auth (401/403), not found, conflicts",
        "Fake timers / injected clock for time-dependent logic"
      ]
    },
    pl: {
      q: "Jak testujesz REST API w Node.js?",
      a: [
        "Eksport aplikacji bez `listen()` → wywołania przez `supertest`",
        "Prawdziwy Postgres przez Testcontainers / Docker Compose; migracja raz, truncate lub transakcja per test",
        "Mockuj tylko zewnętrzne HTTP (`nock`, MSW) – nie własną bazę",
        "Pokrycie: happy path, walidacja (422), auth (401/403), brak zasobu, konflikty",
        "Fałszywe timery / wstrzykiwany zegar dla logiki zależnej od czasu"
      ]
    }
  },
  {
    id: "mocking", topic: "Testing",
    en: {
      q: "When should you mock, and when not?",
      a: [
        "Mock: slow/unreliable/external boundaries – payments, email, 3rd-party APIs, time, randomness",
        "Don't mock: the unit under test, simple value objects, your own DB in integration tests",
        "Types: stub (canned answer), spy (records calls), mock (expectations), fake (working in-memory impl)",
        "Over-mocking → tests pass while production breaks; brittle on refactors",
        "Dependency injection makes swapping easy"
      ]
    },
    pl: {
      q: "Kiedy mockować, a kiedy nie?",
      a: [
        "Mockuj: wolne/niestabilne/zewnętrzne granice – płatności, e-mail, zewnętrzne API, czas, losowość",
        "Nie mockuj: testowanej jednostki, prostych obiektów wartości, własnej DB w testach integracyjnych",
        "Rodzaje: stub (gotowa odpowiedź), spy (zapisuje wywołania), mock (oczekiwania), fake (działająca implementacja w pamięci)",
        "Nadmiar mocków → testy przechodzą, a produkcja się psuje; kruchość przy refaktorze",
        "Wstrzykiwanie zależności ułatwia podmianę"
      ]
    }
  },
  {
    id: "contract-testing", topic: "Testing",
    en: {
      q: "What is contract testing?",
      a: [
        "Verifies that provider and consumer agree on the API contract – without full e2e",
        "Consumer-driven (Pact): consumer tests record expectations → provider verifies them in CI",
        "Schema-based: validate responses against OpenAPI / GraphQL schema",
        "Catches breaking changes before deploy",
        "Very useful during a migration: new Node service must satisfy the old service's contract"
      ]
    },
    pl: {
      q: "Czym są testy kontraktowe?",
      a: [
        "Sprawdzają, czy dostawca i konsument zgadzają się co do kontraktu API – bez pełnego e2e",
        "Consumer-driven (Pact): testy konsumenta zapisują oczekiwania → dostawca weryfikuje je w CI",
        "Oparte o schemat: walidacja odpowiedzi względem OpenAPI / schematu GraphQL",
        "Wyłapują zmiany psujące przed wdrożeniem",
        "Bardzo przydatne przy migracji: nowa usługa Node musi spełnić kontrakt starej"
      ]
    }
  },
  {
    id: "jest-vitest", topic: "Testing",
    en: {
      q: "Jest vs Vitest?",
      a: [
        "Near-identical API (`describe`, `it`, `expect`, `vi.fn` ≈ `jest.fn`)",
        "Vitest: Vite-powered, native ESM + TS, very fast watch mode; natural for Vite/Vue projects",
        "Jest: mature, huge ecosystem, default in many Node/React Native setups; ESM/TS need config (ts-jest/babel/swc)",
        "Used both: Jest at Gestamp/OPEGIEKA, Vitest at OPEGIEKA"
      ]
    },
    pl: {
      q: "Jest vs Vitest?",
      a: [
        "Prawie identyczne API (`describe`, `it`, `expect`, `vi.fn` ≈ `jest.fn`)",
        "Vitest: oparty na Vite, natywny ESM + TS, bardzo szybki watch; naturalny dla projektów Vite/Vue",
        "Jest: dojrzały, ogromny ekosystem, domyślny w wielu projektach Node/React Native; ESM/TS wymagają konfiguracji (ts-jest/babel/swc)",
        "Używałem obu: Jest w Gestamp/OPEGIEKA, Vitest w OPEGIEKA"
      ]
    }
  },
  {
    id: "frontend-testing", topic: "Testing",
    en: {
      q: "How do you test React components?",
      a: [
        "React Testing Library: render, interact like a user, assert on visible output",
        "Query by role/label/text (`getByRole('button', { name: 'Save' })`), not CSS classes",
        "`userEvent` for interactions; `findBy*` / `waitFor` for async",
        "Mock network with MSW, not component internals",
        "Vue equivalent: Vue Test Utils / Testing Library for Vue"
      ]
    },
    pl: {
      q: "Jak testujesz komponenty React?",
      a: [
        "React Testing Library: render, interakcja jak użytkownik, asercje na widocznym wyniku",
        "Zapytania po roli/etykiecie/tekście (`getByRole('button', { name: 'Save' })`), nie klasach CSS",
        "`userEvent` do interakcji; `findBy*` / `waitFor` dla asynchroniczności",
        "Mock sieci przez MSW, nie wnętrza komponentu",
        "Odpowiednik w Vue: Vue Test Utils / Testing Library for Vue"
      ]
    }
  },
  {
    id: "test-flaky", topic: "Testing",
    en: {
      q: "How do you fix a flaky test?",
      a: [
        "Reproduce: run in a loop, in random order, under CI-like load",
        "Usual causes: timing/arbitrary sleeps, shared state between tests, test order, real network, time zones/dates",
        "Replace sleeps with waiting for a condition; fake timers",
        "Isolate data per test; clean up resources",
        "Quarantine temporarily with a ticket – blind retries only hide the bug"
      ]
    },
    pl: {
      q: "Jak naprawiasz niestabilny (flaky) test?",
      a: [
        "Odtworzenie: uruchamianie w pętli, w losowej kolejności, pod obciążeniem jak w CI",
        "Typowe przyczyny: timing/sztywne sleepy, współdzielony stan, kolejność testów, prawdziwa sieć, strefy czasowe/daty",
        "Sleepy zamienić na czekanie na warunek; fałszywe timery",
        "Izolowane dane per test; sprzątanie zasobów",
        "Tymczasowa kwarantanna z ticketem – ślepe ponowienia tylko ukrywają błąd"
      ]
    }
  },
  {
    id: "load-testing", topic: "Testing",
    en: {
      q: "How would you load test an API before a high-traffic launch?",
      a: [
        "Define goals: target RPS, p95/p99 latency, error-rate SLO",
        "Tools: k6, Artillery, Gatling, Locust",
        "Realistic scenarios and data; production-like env; ramp-up, soak and spike tests",
        "Watch the whole system: app CPU/memory/event-loop lag, DB, cache hit ratio, queues",
        "Find the first bottleneck, fix, repeat"
      ]
    },
    pl: {
      q: "Jak przeprowadziłbyś test obciążeniowy API przed startem z dużym ruchem?",
      a: [
        "Cele: docelowe RPS, opóźnienia p95/p99, SLO błędów",
        "Narzędzia: k6, Artillery, Gatling, Locust",
        "Realistyczne scenariusze i dane; środowisko podobne do produkcji; testy ramp-up, soak i spike",
        "Obserwacja całego systemu: CPU/pamięć/event-loop lag aplikacji, DB, cache hit ratio, kolejki",
        "Znajdź pierwsze wąskie gardło, napraw, powtórz"
      ]
    }
  },
  {
    id: "production-ready", topic: "Testing",
    en: {
      q: "What does production-grade software mean to you?",
      a: [
        "Tested critical paths; CI blocks regressions",
        "Clear contracts and input validation",
        "Observability: structured logs, metrics, traces, alerts",
        "Resilience: timeouts, retries, graceful shutdown, health checks",
        "Security: authZ, secrets management, dependency scanning",
        "Safe delivery: repeatable deploys, rollback, feature flags, docs/runbooks"
      ]
    },
    pl: {
      q: "Co oznacza dla Ciebie oprogramowanie gotowe na produkcję?",
      a: [
        "Przetestowane kluczowe ścieżki; CI blokuje regresje",
        "Jasne kontrakty i walidacja wejścia",
        "Obserwowalność: logi strukturalne, metryki, trace'y, alerty",
        "Odporność: timeouty, ponowienia, graceful shutdown, health checki",
        "Bezpieczeństwo: autoryzacja, zarządzanie sekretami, skanowanie zależności",
        "Bezpieczne dostarczanie: powtarzalne wdrożenia, rollback, feature flagi, dokumentacja/runbooki"
      ]
    }
  },

  // ───────────────────────── Observability ─────────────────────────
  {
    id: "observability", topic: "Observability",
    en: {
      q: "What would you monitor on a high-traffic API?",
      a: [
        "Golden signals: latency (p50/p95/p99), traffic (RPS), errors (5xx rate), saturation (CPU, memory, pool, event-loop lag)",
        "RED per endpoint: Rate, Errors, Duration",
        "Dependencies: DB latency, cache hit ratio, queue depth/age, 3rd-party errors",
        "Business KPIs: sign-ups, playback starts, orders",
        "Alert on user-facing symptoms (SLO burn), not on every CPU spike"
      ]
    },
    pl: {
      q: "Co monitorowałbyś w API o dużym ruchu?",
      a: [
        "Złote sygnały: opóźnienie (p50/p95/p99), ruch (RPS), błędy (odsetek 5xx), nasycenie (CPU, pamięć, pula, event-loop lag)",
        "RED per endpoint: Rate, Errors, Duration",
        "Zależności: opóźnienia DB, cache hit ratio, długość/wiek kolejki, błędy zewnętrznych usług",
        "KPI biznesowe: rejestracje, starty odtwarzania, zamówienia",
        "Alerty na objawy odczuwalne przez użytkownika (spalanie SLO), nie na każdy skok CPU"
      ]
    }
  },
  {
    id: "three-pillars", topic: "Observability",
    en: {
      q: "Logs vs metrics vs traces – and how do you connect them?",
      a: [
        "Logs: discrete events with context – debugging detail",
        "Metrics: cheap numeric time series – dashboards, alerts",
        "Traces: one request across services as spans – where time is spent",
        "Correlate via trace ID / request ID in every log line and propagated headers (W3C `traceparent`)",
        "OpenTelemetry: vendor-neutral SDK → export to Datadog, Splunk, X-Ray, Jaeger"
      ]
    },
    pl: {
      q: "Logi vs metryki vs trace'y – i jak je połączyć?",
      a: [
        "Logi: pojedyncze zdarzenia z kontekstem – szczegóły do debugowania",
        "Metryki: tanie szeregi liczbowe – dashboardy, alerty",
        "Trace'y: jedno żądanie przez wiele usług jako spany – gdzie ucieka czas",
        "Korelacja przez trace ID / request ID w każdej linii logu i propagowane nagłówki (W3C `traceparent`)",
        "OpenTelemetry: niezależne od dostawcy SDK → eksport do Datadog, Splunk, X-Ray, Jaeger"
      ]
    }
  },
  {
    id: "structured-logging", topic: "Observability",
    en: {
      q: "What makes logging useful in production?",
      a: [
        "Structured JSON (pino in Node – fast, low overhead) to stdout",
        "Consistent fields: timestamp, level, service, env, requestId/traceId, userId",
        "Levels used properly: error = needs action, warn, info = business events, debug off in prod",
        "Never log secrets, tokens, PII – redact",
        "Log the error with stack once, at the boundary – not at every layer"
      ]
    },
    pl: {
      q: "Co sprawia, że logowanie jest użyteczne na produkcji?",
      a: [
        "Strukturalny JSON (pino w Node – szybki, mały narzut) na stdout",
        "Spójne pola: timestamp, level, service, env, requestId/traceId, userId",
        "Poziomy stosowane świadomie: error = wymaga działania, warn, info = zdarzenia biznesowe, debug wyłączony na produkcji",
        "Nigdy sekretów, tokenów, danych osobowych – redakcja",
        "Błąd ze stackiem logowany raz, na granicy – nie w każdej warstwie"
      ]
    }
  },
  {
    id: "datadog", topic: "Observability",
    en: {
      q: "What does Datadog offer, and how would you instrument a Node service with it?",
      a: [
        "SaaS observability: APM/tracing, metrics, logs, dashboards, monitors, RUM, synthetics",
        "Node: `dd-trace` initialised first (`--require dd-trace/init`) → auto-instruments Express, pg, Redis, HTTP",
        "Agent (sidecar/DaemonSet) collects traces, metrics, logs",
        "Unified tagging: `env`, `service`, `version` → correlate deploys with errors",
        "Log–trace correlation by injecting trace IDs into pino logs",
        "Monitors on latency/error rate; SLO tracking"
      ]
    },
    pl: {
      q: "Co oferuje Datadog i jak zinstrumentowałbyś nim usługę Node?",
      a: [
        "Obserwowalność SaaS: APM/tracing, metryki, logi, dashboardy, monitory, RUM, testy syntetyczne",
        "Node: `dd-trace` inicjalizowany jako pierwszy (`--require dd-trace/init`) → automatyczna instrumentacja Express, pg, Redis, HTTP",
        "Agent (sidecar/DaemonSet) zbiera trace'y, metryki, logi",
        "Ujednolicone tagi: `env`, `service`, `version` → korelacja wdrożeń z błędami",
        "Korelacja logów z trace'ami przez wstrzykiwanie trace ID do logów pino",
        "Monitory na opóźnienia/błędy; śledzenie SLO"
      ]
    }
  },
  {
    id: "splunk", topic: "Observability",
    en: {
      q: "What is Splunk, and how do you search logs in it?",
      a: [
        "Log indexing and search platform (plus Observability Cloud for metrics/APM)",
        "Data sent via forwarders or HTTP Event Collector; organised in indexes, sourcetypes",
        "SPL example: `index=api service=orders status>=500 | stats count by endpoint`",
        "`timechart`, `top`, `rex` (regex field extraction), `eval`, `where`",
        "Saved searches → alerts and dashboards; structured JSON logs make field extraction easy"
      ]
    },
    pl: {
      q: "Czym jest Splunk i jak przeszukuje się w nim logi?",
      a: [
        "Platforma indeksowania i przeszukiwania logów (plus Observability Cloud dla metryk/APM)",
        "Dane przez forwardery lub HTTP Event Collector; zorganizowane w indeksy, sourcetype'y",
        "Przykład SPL: `index=api service=orders status>=500 | stats count by endpoint`",
        "`timechart`, `top`, `rex` (wyciąganie pól regexem), `eval`, `where`",
        "Zapisane wyszukiwania → alerty i dashboardy; logi w JSON ułatwiają wyciąganie pól"
      ]
    }
  },
  {
    id: "sentry", topic: "Observability",
    en: {
      q: "How have you used Sentry?",
      a: [
        "Error tracking at Redge across web and mobile/TV clients",
        "Groups exceptions into issues with stack traces, breadcrumbs, device/browser, release",
        "Source maps uploaded in CI → readable stack traces for minified code",
        "Release tracking → spot regressions after a deploy; alerts on new/spiking issues",
        "Complements APM (Datadog): Sentry = errors, APM = performance and system health"
      ]
    },
    pl: {
      q: "Jak korzystałeś z Sentry?",
      a: [
        "Śledzenie błędów w Redge dla klientów webowych i mobile/TV",
        "Grupuje wyjątki w issues ze stack trace, breadcrumbami, urządzeniem/przeglądarką, wersją",
        "Source mapy wysyłane w CI → czytelne stack trace dla zminifikowanego kodu",
        "Śledzenie wydań → wykrywanie regresji po wdrożeniu; alerty na nowe/rosnące błędy",
        "Uzupełnia APM (Datadog): Sentry = błędy, APM = wydajność i zdrowie systemu"
      ]
    }
  },
  {
    id: "slo", topic: "Observability",
    en: {
      q: "What are SLIs, SLOs, SLAs and error budgets?",
      a: [
        "SLI: measured indicator – % of requests < 300 ms, % successful",
        "SLO: internal target – 99.9% successful over 30 days",
        "SLA: contract with customers, with penalties – looser than SLO",
        "Error budget = 100% − SLO (99.9% → ~43 min/month); spent → slow down releases, fix reliability",
        "Alert on burn rate, not single errors"
      ]
    },
    pl: {
      q: "Czym są SLI, SLO, SLA i budżet błędów?",
      a: [
        "SLI: mierzony wskaźnik – % żądań < 300 ms, % udanych",
        "SLO: wewnętrzny cel – 99,9% udanych w 30 dni",
        "SLA: umowa z klientem, z karami – luźniejsza niż SLO",
        "Budżet błędów = 100% − SLO (99,9% → ~43 min/miesiąc); wyczerpany → mniej wydań, praca nad niezawodnością",
        "Alerty na tempo spalania budżetu, nie pojedyncze błędy"
      ]
    }
  },
  {
    id: "incident", topic: "Observability",
    en: {
      q: "Error rate spikes in production right after a deploy. What do you do?",
      a: [
        "Mitigate first: roll back or disable the feature flag – debug later",
        "Communicate: incident channel, status, who is on it",
        "Scope: which endpoints/regions/clients; correlate with deploy version, dashboards, traces, Sentry",
        "Verify recovery with metrics",
        "Blameless postmortem: timeline, root cause, action items (test, alert, guardrail)"
      ]
    },
    pl: {
      q: "Odsetek błędów na produkcji rośnie zaraz po wdrożeniu. Co robisz?",
      a: [
        "Najpierw ograniczenie skutków: rollback lub wyłączenie feature flagi – debugowanie później",
        "Komunikacja: kanał incydentu, status, kto się zajmuje",
        "Zakres: które endpointy/regiony/klienci; korelacja z wersją wdrożenia, dashboardami, trace'ami, Sentry",
        "Potwierdzenie powrotu do normy metrykami",
        "Postmortem bez szukania winnych: oś czasu, przyczyna, zadania (test, alert, zabezpieczenie)"
      ]
    }
  },
  // ───────────────────────── Elixir & migration ─────────────────────────
  {
    id: "elixir-basics", topic: "Elixir & migration",
    en: {
      q: "What are the key characteristics of Elixir?",
      a: [
        "Functional, dynamically typed, runs on the Erlang VM (BEAM)",
        "Immutable data; transformations via pipe operator `|>`",
        "Pattern matching everywhere: `{:ok, user} = fetch_user(id)`, function clauses",
        "Convention: return `{:ok, value}` / `{:error, reason}` tuples (≈ Result type)",
        "Tooling: Mix (build), Hex (packages), ExUnit (tests)"
      ]
    },
    pl: {
      q: "Jakie są kluczowe cechy Elixira?",
      a: [
        "Funkcyjny, dynamicznie typowany, działa na maszynie wirtualnej Erlanga (BEAM)",
        "Niemutowalne dane; transformacje operatorem pipe `|>`",
        "Pattern matching wszędzie: `{:ok, user} = fetch_user(id)`, klauzule funkcji",
        "Konwencja: krotki `{:ok, value}` / `{:error, reason}` (≈ typ Result)",
        "Narzędzia: Mix (build), Hex (pakiety), ExUnit (testy)"
      ]
    }
  },
  {
    id: "beam-otp", topic: "Elixir & migration",
    en: {
      q: "Explain BEAM processes, OTP and 'let it crash'.",
      a: [
        "BEAM processes: very lightweight (millions), isolated memory, communicate by message passing",
        "Preemptive scheduler across all CPU cores – one busy process cannot block others",
        "GenServer: process holding state, handles calls/casts (in-memory state, caches, workers)",
        "Supervisors restart crashed children per strategy (`one_for_one`, …) → 'let it crash'",
        "Contrast with Node: one thread per process, cooperative – blocking code hurts everyone"
      ]
    },
    pl: {
      q: "Wyjaśnij procesy BEAM, OTP i 'let it crash'.",
      a: [
        "Procesy BEAM: bardzo lekkie (miliony), izolowana pamięć, komunikacja przez wiadomości",
        "Wywłaszczający scheduler na wszystkich rdzeniach – jeden zajęty proces nie blokuje innych",
        "GenServer: proces trzymający stan, obsługuje call/cast (stan w pamięci, cache, workery)",
        "Supervisory restartują padnięte procesy wg strategii (`one_for_one`, …) → 'let it crash'",
        "Kontrast z Node: jeden wątek na proces, kooperacyjnie – blokujący kod szkodzi wszystkim"
      ]
    }
  },
  {
    id: "phoenix", topic: "Elixir & migration",
    en: {
      q: "What is Phoenix, and what are its main parts?",
      a: [
        "Web framework for Elixir (≈ Express/Nest role, more batteries included)",
        "Plug: composable middleware pipeline (≈ Express middleware)",
        "Router → controllers; contexts group business logic",
        "Ecto: DB layer – schemas, changesets (validation), migrations, queries (≈ ORM + Zod)",
        "Channels / PubSub: real-time over WebSockets; LiveView: server-rendered interactive UI",
        "Absinthe: GraphQL for Elixir"
      ]
    },
    pl: {
      q: "Czym jest Phoenix i jakie ma główne elementy?",
      a: [
        "Framework webowy dla Elixira (rola ≈ Express/Nest, więcej wbudowanych funkcji)",
        "Plug: składany pipeline middleware (≈ middleware w Express)",
        "Router → kontrolery; konteksty grupują logikę biznesową",
        "Ecto: warstwa DB – schematy, changesety (walidacja), migracje, zapytania (≈ ORM + Zod)",
        "Channels / PubSub: real-time przez WebSockety; LiveView: interaktywne UI renderowane na serwerze",
        "Absinthe: GraphQL dla Elixira"
      ]
    }
  },
  {
    id: "elixir-to-node-mapping", topic: "Elixir & migration",
    en: {
      q: "Migrating from Elixir to Node.js: which Elixir features need a different solution in Node?",
      a: [
        "Supervisors/restarts → Kubernetes/ECS restarts, health checks, process-level crash handling",
        "GenServer in-memory state → Redis / DB (Node instances should be stateless)",
        "Phoenix Channels/PubSub → WebSockets (ws/Socket.IO) + Redis pub/sub or managed service",
        "Lightweight concurrent processes → async I/O, queues + workers, worker threads for CPU",
        "Pattern matching / tagged tuples → TS discriminated unions, Result types",
        "Ecto changesets → Zod schemas + ORM/query builder; Oban jobs → BullMQ/SQS"
      ]
    },
    pl: {
      q: "Migracja z Elixira do Node.js: które cechy Elixira wymagają innego rozwiązania w Node?",
      a: [
        "Supervisory/restarty → restarty Kubernetes/ECS, health checki, obsługa awarii procesu",
        "Stan GenServera w pamięci → Redis / DB (instancje Node powinny być bezstanowe)",
        "Phoenix Channels/PubSub → WebSockety (ws/Socket.IO) + Redis pub/sub lub usługa zarządzana",
        "Lekkie współbieżne procesy → asynchroniczne I/O, kolejki + workery, worker threads dla CPU",
        "Pattern matching / krotki z tagami → unie dyskryminowane w TS, typy Result",
        "Changesety Ecto → schematy Zod + ORM/query builder; zadania Oban → BullMQ/SQS"
      ]
    }
  },
  {
    id: "migration", topic: "Elixir & migration",
    en: {
      q: "How would you migrate an Elixir service to Node.js without a big-bang rewrite?",
      a: [
        "Strangler fig: proxy/gateway in front, move one endpoint or capability at a time",
        "Discovery first: behaviour, contracts, data ownership, jobs, integrations, SLAs",
        "Parity/contract tests written against the old service, reused for the new one",
        "Route traffic gradually (flags / % rollout); keep instant rollback to Elixir",
        "Compare error rates and latency per route; retire old code only when stable"
      ]
    },
    pl: {
      q: "Jak zmigrowałbyś usługę z Elixira do Node.js bez przepisywania wszystkiego naraz?",
      a: [
        "Strangler fig: proxy/gateway z przodu, przenoszenie po jednym endpoincie lub funkcji",
        "Najpierw rozpoznanie: zachowanie, kontrakty, własność danych, zadania, integracje, SLA",
        "Testy zgodności/kontraktowe pisane na starej usłudze, użyte ponownie dla nowej",
        "Stopniowe przełączanie ruchu (flagi / % rollout); natychmiastowy powrót do Elixira",
        "Porównanie błędów i opóźnień per trasa; usuwanie starego kodu dopiero po stabilizacji"
      ]
    }
  },
  {
    id: "migration-parity", topic: "Elixir & migration",
    en: {
      q: "How do you prove the new Node.js service behaves exactly like the old one?",
      a: [
        "Shadow traffic: mirror real requests to the new service, discard its responses, diff them",
        "Record/replay production request samples against both",
        "Contract tests + golden-file tests on response shape, status codes, error formats",
        "Compare side effects: DB writes, emitted events, emails",
        "Watch edge cases: null handling, date/time zones, number precision, sorting, error messages",
        "Dashboards comparing both versions during rollout"
      ]
    },
    pl: {
      q: "Jak udowodnić, że nowa usługa Node.js działa dokładnie jak stara?",
      a: [
        "Shadow traffic: kopia prawdziwych żądań do nowej usługi, odrzucenie jej odpowiedzi, porównanie",
        "Nagranie/odtworzenie próbek żądań z produkcji na obu",
        "Testy kontraktowe + golden files dla kształtu odpowiedzi, kodów statusu, formatu błędów",
        "Porównanie efektów ubocznych: zapisy w DB, emitowane zdarzenia, e-maile",
        "Przypadki brzegowe: null, daty/strefy czasowe, precyzja liczb, sortowanie, komunikaty błędów",
        "Dashboardy porównujące obie wersje w trakcie przełączania"
      ]
    }
  },
  {
    id: "migration-data", topic: "Elixir & migration",
    en: {
      q: "During the migration, how do you handle the database both services use?",
      a: [
        "Phase 1: both services share the DB – one owner for schema changes (migrations in one place)",
        "Only one service writes a given table at a time; the other reads",
        "Later: split into the new service's own DB via CDC/backfill + dual-read verification",
        "Avoid dual writes from app code without an outbox",
        "Keep schema changes backward compatible for both codebases"
      ]
    },
    pl: {
      q: "Jak w trakcie migracji obsłużyć bazę używaną przez obie usługi?",
      a: [
        "Faza 1: obie usługi współdzielą DB – jeden właściciel zmian schematu (migracje w jednym miejscu)",
        "Daną tabelę zapisuje w danym momencie tylko jedna usługa; druga czyta",
        "Później: wydzielenie własnej bazy nowej usługi przez CDC/backfill + weryfikację podwójnym odczytem",
        "Unikać podwójnych zapisów z kodu aplikacji bez outboxa",
        "Zmiany schematu zgodne wstecz dla obu kodów"
      ]
    }
  },
  {
    id: "elixir-gap", topic: "Elixir & migration",
    en: {
      q: "You have not worked with Elixir. How will you migrate code you cannot read yet?",
      a: [
        "Honest: Elixir/Phoenix is not hands-on experience for me",
        "Reading level is quick to reach: syntax, pattern matching, Plug/Ecto, OTP basics",
        "Tests and behaviour matter more than language – I reimplement contracts, not syntax",
        "Pair with engineers who know the Elixir services; document findings",
        "Experience improving existing codebases (Redge) applies directly"
      ]
    },
    pl: {
      q: "Nie pracowałeś z Elixirem. Jak zmigrujesz kod, którego jeszcze nie umiesz czytać?",
      a: [
        "Szczerze: Elixir/Phoenix to nie jest moje praktyczne doświadczenie",
        "Poziom czytania osiąga się szybko: składnia, pattern matching, Plug/Ecto, podstawy OTP",
        "Testy i zachowanie ważniejsze niż język – odtwarzam kontrakty, nie składnię",
        "Praca w parze z osobami znającymi usługi Elixir; dokumentowanie ustaleń",
        "Doświadczenie z ulepszaniem istniejącego kodu (Redge) przenosi się wprost"
      ]
    }
  },

  // ───────────────────────── Elasticsearch ─────────────────────────
  {
    id: "elasticsearch", topic: "Elasticsearch",
    en: {
      q: "When would you use Elasticsearch, and what should not live only there?",
      a: [
        "Full-text search with relevance scoring, fuzzy matching, autocomplete",
        "Faceted filtering and aggregations; log analytics",
        "Near real-time (refresh ~1 s) – not immediately consistent",
        "Treat as a derived index: source of truth stays in Postgres/DynamoDB",
        "Must be rebuildable by reindexing from the primary store"
      ]
    },
    pl: {
      q: "Kiedy użyć Elasticsearch i czego nie trzymać wyłącznie w nim?",
      a: [
        "Wyszukiwanie pełnotekstowe z oceną trafności, fuzzy matching, autouzupełnianie",
        "Filtrowanie fasetowe i agregacje; analityka logów",
        "Prawie real-time (refresh ~1 s) – nie natychmiast spójny",
        "Traktuj jako indeks pochodny: źródło prawdy zostaje w Postgres/DynamoDB",
        "Musi dać się odbudować przez reindeksację z głównej bazy"
      ]
    }
  },
  {
    id: "es-inverted-index", topic: "Elasticsearch",
    en: {
      q: "How does Elasticsearch search text so fast?",
      a: [
        "Inverted index: term → list of documents containing it",
        "Analyzer at index and query time: tokenizer + filters (lowercase, stemming, stop words, synonyms)",
        "Relevance: BM25 scoring (term frequency, rarity, field length)",
        "`text` fields are analysed (full-text); `keyword` fields exact (filters, sorting, aggregations)",
        "Mapping cannot be changed for existing fields → new index + reindex"
      ]
    },
    pl: {
      q: "Jak Elasticsearch tak szybko przeszukuje tekst?",
      a: [
        "Indeks odwrócony: termin → lista dokumentów, które go zawierają",
        "Analyzer przy indeksowaniu i zapytaniu: tokenizer + filtry (małe litery, stemming, stop words, synonimy)",
        "Trafność: scoring BM25 (częstość terminu, rzadkość, długość pola)",
        "Pola `text` analizowane (pełny tekst); `keyword` dokładne (filtry, sortowanie, agregacje)",
        "Mapowania istniejących pól nie można zmienić → nowy indeks + reindeksacja"
      ]
    }
  },
  {
    id: "es-query", topic: "Elasticsearch",
    en: {
      q: "Query context vs filter context in Elasticsearch?",
      a: [
        "`bool` query: `must`, `should`, `must_not`, `filter`",
        "Query context (`must`, `should`): affects relevance score – for full-text `match`",
        "Filter context (`filter`, `must_not`): yes/no, no scoring, cached – for `term`, `range`, status, dates",
        "Put exact conditions in `filter` for speed",
        "Deep pagination: `search_after` + PIT instead of large `from`/`size`"
      ]
    },
    pl: {
      q: "Query context vs filter context w Elasticsearch?",
      a: [
        "Zapytanie `bool`: `must`, `should`, `must_not`, `filter`",
        "Query context (`must`, `should`): wpływa na ocenę trafności – dla pełnotekstowego `match`",
        "Filter context (`filter`, `must_not`): tak/nie, bez scoringu, cache'owany – dla `term`, `range`, statusów, dat",
        "Dokładne warunki w `filter` dla szybkości",
        "Głęboka paginacja: `search_after` + PIT zamiast dużego `from`/`size`"
      ]
    }
  },
  {
    id: "es-cluster", topic: "Elasticsearch",
    en: {
      q: "What are shards and replicas in Elasticsearch?",
      a: [
        "Index split into primary shards → spread data and query load across nodes",
        "Primary shard count fixed at creation (change via reindex / split)",
        "Replicas: copies of shards → high availability + more read throughput",
        "Too many small shards waste resources; aim roughly for 10–50 GB per shard",
        "Cluster health: green / yellow (replicas unassigned) / red (primary missing)"
      ]
    },
    pl: {
      q: "Czym są shardy i repliki w Elasticsearch?",
      a: [
        "Indeks dzielony na shardy główne → rozkład danych i zapytań na węzły",
        "Liczba shardów głównych ustalana przy tworzeniu (zmiana przez reindex / split)",
        "Repliki: kopie shardów → wysoka dostępność + większa przepustowość odczytu",
        "Zbyt wiele małych shardów marnuje zasoby; orientacyjnie 10–50 GB na shard",
        "Stan klastra: green / yellow (nieprzypisane repliki) / red (brak shardu głównego)"
      ]
    }
  },
  {
    id: "es-sync", topic: "Elasticsearch",
    en: {
      q: "How do you keep Elasticsearch in sync with the primary database?",
      a: [
        "Event-driven: on change publish event (outbox) → indexer consumer updates ES",
        "CDC: Debezium / DynamoDB Streams → indexer",
        "Avoid synchronous dual writes in the request path (partial failures)",
        "Idempotent upserts by document ID; version field to drop stale updates",
        "Zero-downtime reindex: build new index → switch alias → delete old",
        "Periodic reconciliation job for drift"
      ]
    },
    pl: {
      q: "Jak utrzymać Elasticsearch w synchronizacji z główną bazą?",
      a: [
        "Zdarzeniowo: przy zmianie publikacja zdarzenia (outbox) → konsument-indekser aktualizuje ES",
        "CDC: Debezium / DynamoDB Streams → indekser",
        "Unikać synchronicznych podwójnych zapisów w ścieżce żądania (częściowe awarie)",
        "Idempotentne upserty po ID dokumentu; pole wersji do odrzucania starych aktualizacji",
        "Reindeksacja bez przestoju: nowy indeks → przełączenie aliasu → usunięcie starego",
        "Okresowy job uzgadniający rozbieżności"
      ]
    }
  },

  // ───────────────────────── CV: Redge ─────────────────────────
  {
    id: "redge-story", topic: "CV: Redge",
    en: {
      q: "Tell me about a feature you delivered across multiple platforms at Redge.",
      a: [
        "Structure (STAR): Situation → Task → Action → Result",
        "Context: VOD/IPTV product on web, Android/iOS, Android TV/Apple TV, Smart TV",
        "My part: API contract with Node.js/Express + PostgreSQL, client implementation in Vue/React/React Native",
        "Platform differences handled: TV focus navigation, older Smart TV browsers, store release timing",
        "Verification: tests, device testing matrix, Sentry after release",
        "Prepare one concrete example with a measurable result"
      ]
    },
    pl: {
      q: "Opowiedz o funkcji, którą dostarczyłeś w Redge na wiele platform.",
      a: [
        "Struktura (STAR): Sytuacja → Zadanie → Działanie → Rezultat",
        "Kontekst: produkt VOD/IPTV na web, Android/iOS, Android TV/Apple TV, Smart TV",
        "Mój udział: kontrakt API w Node.js/Express + PostgreSQL, implementacja klientów w Vue/React/React Native",
        "Obsłużone różnice: nawigacja fokusem na TV, starsze przeglądarki Smart TV, terminy wydań w sklepach",
        "Weryfikacja: testy, macierz urządzeń, Sentry po wydaniu",
        "Przygotuj jeden konkretny przykład z mierzalnym efektem"
      ]
    }
  },
  {
    id: "video-streaming", topic: "CV: Redge",
    en: {
      q: "How does video on demand streaming work end-to-end?",
      a: [
        "Transcode source into multiple bitrates/resolutions (ladder)",
        "Package into short segments + manifest: HLS (`.m3u8`, Apple) / MPEG-DASH (`.mpd`)",
        "Deliver via CDN; player picks bitrate adaptively (ABR) based on bandwidth",
        "DRM: Widevine (Android/Chrome), FairPlay (Apple), PlayReady (Smart TV/Windows); license server",
        "Backend concerns: entitlements/auth, catalogue APIs, playback sessions, concurrency limits",
        "Metrics: startup time, rebuffering ratio, playback errors"
      ]
    },
    pl: {
      q: "Jak działa streaming wideo na żądanie od początku do końca?",
      a: [
        "Transkodowanie źródła do wielu bitrate'ów/rozdzielczości (drabinka)",
        "Pakowanie w krótkie segmenty + manifest: HLS (`.m3u8`, Apple) / MPEG-DASH (`.mpd`)",
        "Dostarczanie przez CDN; odtwarzacz adaptacyjnie wybiera bitrate (ABR) wg przepustowości",
        "DRM: Widevine (Android/Chrome), FairPlay (Apple), PlayReady (Smart TV/Windows); serwer licencji",
        "Backend: uprawnienia/auth, API katalogu, sesje odtwarzania, limity równoczesnych odtworzeń",
        "Metryki: czas startu, odsetek buforowania, błędy odtwarzania"
      ]
    }
  },
  {
    id: "release-process", topic: "CV: Redge",
    en: {
      q: "What did managing iOS and Android app releases involve?",
      a: [
        "Signing: iOS certificates + provisioning profiles; Android upload key / Play App Signing",
        "Builds, version/build numbers, TestFlight and Play internal/closed testing tracks",
        "Store listings, review submission; staged rollout on Google Play, phased release on App Store",
        "Handling rejections: read guideline cited, fix or clarify in Resolution Center, resubmit",
        "Coordinate app versions with backend – old app versions stay in use, so APIs must stay compatible (forced update if needed)"
      ]
    },
    pl: {
      q: "Na czym polegało zarządzanie wydaniami aplikacji iOS i Android?",
      a: [
        "Podpisywanie: certyfikaty iOS + profile provisioning; klucz uploadu Android / Play App Signing",
        "Buildy, numery wersji/buildów, TestFlight i ścieżki testów wewnętrznych/zamkniętych w Google Play",
        "Opisy w sklepach, zgłoszenie do review; stopniowe wydanie w Google Play, phased release w App Store",
        "Odrzucenia: analiza wskazanej wytycznej, poprawka lub wyjaśnienie w Resolution Center, ponowne zgłoszenie",
        "Koordynacja wersji z backendem – stare wersje aplikacji nadal działają, więc API musi być zgodne (w razie potrzeby wymuszona aktualizacja)"
      ]
    }
  },
  {
    id: "device-compat", topic: "CV: Redge",
    en: {
      q: "How do you keep one product working across browsers, phones and TVs?",
      a: [
        "Explicit support matrix (browsers, OS versions, TV models/years)",
        "Build targets via Browserslist: transpile + polyfills for old Smart TV engines",
        "Feature detection, not user-agent sniffing; isolate platform code behind adapters",
        "TV specifics: remote/focus navigation, limited memory/CPU, 10-foot UI",
        "Test on real representative devices; error monitoring per platform (Sentry)",
        "Shared API contract and business logic → fewer platform-specific regressions"
      ]
    },
    pl: {
      q: "Jak utrzymać jeden produkt działający na przeglądarkach, telefonach i telewizorach?",
      a: [
        "Jawna macierz wsparcia (przeglądarki, wersje OS, modele/roczniki TV)",
        "Cele buildu przez Browserslist: transpilacja + polyfille dla starych silników Smart TV",
        "Wykrywanie funkcji, nie user-agenta; kod platformowy za adapterami",
        "Specyfika TV: nawigacja pilotem/fokusem, mało pamięci/CPU, UI oglądane z kanapy",
        "Testy na prawdziwych reprezentatywnych urządzeniach; monitoring błędów per platforma (Sentry)",
        "Wspólny kontrakt API i logika biznesowa → mniej regresji specyficznych dla platform"
      ]
    }
  },
  {
    id: "legacy-improvement", topic: "CV: Redge",
    en: {
      q: "How did you improve the reliability of an existing codebase without stopping feature work?",
      a: [
        "Boy-scout rule: refactor the code you touch for a feature",
        "Add tests around risky flows (playback, catalogue) before changing them",
        "Small, reviewable PRs; incremental TypeScript typing",
        "Use Sentry data to prioritise the most frequent real errors",
        "Make tech debt visible in the backlog with impact, not as a separate 'rewrite' project"
      ]
    },
    pl: {
      q: "Jak poprawiałeś niezawodność istniejącego kodu bez zatrzymywania prac nad funkcjami?",
      a: [
        "Zasada skauta: refaktoryzuję kod, którego dotykam przy funkcji",
        "Testy wokół ryzykownych ścieżek (odtwarzanie, katalog) przed zmianami",
        "Małe PR łatwe do review; stopniowe typowanie w TypeScript",
        "Dane z Sentry do priorytetyzacji najczęstszych realnych błędów",
        "Dług techniczny widoczny w backlogu z opisem wpływu, a nie jako osobny projekt 'przepisania'"
      ]
    }
  },

  // ───────────────────────── CV: OPEGIEKA ─────────────────────────
  {
    id: "zone-story", topic: "CV: OPEGIEKA",
    en: {
      q: "Describe the ZONE system and your contribution.",
      a: [
        "Geospatial web system for buildings and inspections, built by a large team",
        "Frontend: Vue 3 + Pinia + TailwindCSS, maps with OpenLayers",
        "Features: adding buildings, ordering chimney inspections, managing uploaded files",
        "Backend: Node.js REST APIs with PostgreSQL, documented in Swagger",
        "Delivery: Docker + Kubernetes; tests with Jest and Vitest",
        "Be precise about what I designed vs. what the team owned"
      ]
    },
    pl: {
      q: "Opisz system ZONE i swój wkład.",
      a: [
        "Geoprzestrzenny system webowy do obsługi budynków i inspekcji, rozwijany przez duży zespół",
        "Frontend: Vue 3 + Pinia + TailwindCSS, mapy w OpenLayers",
        "Funkcje: dodawanie budynków, zamawianie przeglądów kominiarskich, zarządzanie przesłanymi plikami",
        "Backend: REST API w Node.js z PostgreSQL, dokumentowane w Swagger",
        "Dostarczanie: Docker + Kubernetes; testy w Jest i Vitest",
        "Precyzyjnie: co projektowałem sam, a co należało do zespołu"
      ]
    }
  },
  {
    id: "geo-data", topic: "CV: OPEGIEKA",
    en: {
      q: "How do you keep a map with many objects fast?",
      a: [
        "Load only the current viewport: API accepts a bounding box (`?bbox=`) + zoom",
        "Spatial index on the backend (e.g. PostGIS GiST) for bbox queries",
        "Clustering at low zoom; simplify geometries",
        "Vector tiles for very large datasets",
        "Debounce map move events; cache tiles/responses"
      ]
    },
    pl: {
      q: "Jak utrzymać szybkość mapy z dużą liczbą obiektów?",
      a: [
        "Ładowanie tylko widocznego obszaru: API przyjmuje bounding box (`?bbox=`) + zoom",
        "Indeks przestrzenny na backendzie (np. PostGIS GiST) dla zapytań bbox",
        "Klasteryzacja przy małym zoomie; upraszczanie geometrii",
        "Kafle wektorowe dla bardzo dużych zbiorów",
        "Debounce zdarzeń przesuwania mapy; cache kafli/odpowiedzi"
      ]
    }
  },

  // ───────────────────────── CV: Gestamp ─────────────────────────
  {
    id: "gestamp-story", topic: "CV: Gestamp",
    en: {
      q: "Tell me about the CMMS you built at Gestamp.",
      a: [
        "Maintenance system for a factory in Września, designed and built end-to-end",
        "Modules: failure reports, employee and shift schedules, daily summaries",
        "Stack: Vue + Node.js REST + MongoDB; Ionic client for the shop floor",
        "Worked with project managers and maintenance staff to map real workflows",
        "Modelled failure lifecycle as explicit states (reported → assigned → fixed → closed)",
        "Jest tests around critical flows as the system grew in a live factory"
      ]
    },
    pl: {
      q: "Opowiedz o systemie CMMS zbudowanym w Gestamp.",
      a: [
        "System utrzymania ruchu dla fabryki we Wrześni, zaprojektowany i zbudowany od A do Z",
        "Moduły: zgłoszenia awarii, pracownicy i grafiki zmian, dzienne podsumowania",
        "Stack: Vue + REST w Node.js + MongoDB; klient Ionic na halę produkcyjną",
        "Współpraca z kierownikami projektu i działem utrzymania ruchu przy mapowaniu procesów",
        "Cykl życia awarii jako jawne stany (zgłoszona → przypisana → naprawiona → zamknięta)",
        "Testy Jest wokół kluczowych ścieżek w miarę rozwoju systemu w działającej fabryce"
      ]
    }
  },
  {
    id: "ownership", topic: "CV: Gestamp",
    en: {
      q: "What does end-to-end ownership mean to you?",
      a: [
        "Understand the user problem, not just the ticket",
        "Design API + data model, implement backend and client",
        "Tests, review, release, documentation",
        "Watch it in production (errors, usage) and follow up",
        "Clearly separate my part from the wider team's in examples"
      ]
    },
    pl: {
      q: "Co oznacza dla Ciebie odpowiedzialność end-to-end?",
      a: [
        "Zrozumienie problemu użytkownika, nie tylko ticketu",
        "Projekt API + modelu danych, implementacja backendu i klienta",
        "Testy, review, wydanie, dokumentacja",
        "Obserwacja na produkcji (błędy, użycie) i dalsze działania",
        "W przykładach jasno oddzielam swój wkład od pracy zespołu"
      ]
    }
  },

  // ───────────────────────── Collaboration ─────────────────────────
  {
    id: "code-review", topic: "Collaboration",
    en: {
      q: "What do you look for in a code review?",
      a: [
        "Correctness and edge cases first, then security, then tests",
        "Design fits the codebase; readable naming; no unnecessary complexity",
        "Big PR: understand intent/design first, ask to split if needed",
        "Label comments: blocking vs suggestion vs nit; explain why",
        "Automate style (ESLint/Prettier) – humans review logic",
        "Review fast; praise good solutions"
      ]
    },
    pl: {
      q: "Na co zwracasz uwagę w code review?",
      a: [
        "Najpierw poprawność i przypadki brzegowe, potem bezpieczeństwo, potem testy",
        "Projekt pasuje do kodu; czytelne nazwy; brak zbędnej złożoności",
        "Duży PR: najpierw zrozumienie celu/projektu, w razie potrzeby prośba o podział",
        "Oznaczanie komentarzy: blokujące vs sugestia vs drobiazg; uzasadnienie",
        "Styl automatycznie (ESLint/Prettier) – ludzie przeglądają logikę",
        "Szybkie review; docenianie dobrych rozwiązań"
      ]
    }
  },
  {
    id: "communication", topic: "Collaboration",
    en: {
      q: "Tell me about a time you disagreed with a technical or product decision.",
      a: [
        "Use STAR with a real example",
        "Start from the shared goal; bring data/trade-offs, not opinions",
        "Listen to constraints (deadline, business priority)",
        "Disagree and commit once decided; document the risk",
        "End with the outcome and what I learned"
      ]
    },
    pl: {
      q: "Opowiedz o sytuacji, gdy nie zgadzałeś się z decyzją techniczną lub produktową.",
      a: [
        "STAR z prawdziwym przykładem",
        "Wychodzę od wspólnego celu; przynoszę dane/kompromisy, nie opinie",
        "Słucham ograniczeń (termin, priorytet biznesowy)",
        "Po decyzji: disagree and commit; ryzyko udokumentowane",
        "Na koniec: rezultat i czego się nauczyłem"
      ]
    }
  },
  {
    id: "mentoring", topic: "Collaboration",
    en: {
      q: "How do you help less experienced developers grow?",
      a: [
        "Ask what they tried first; guide with questions instead of giving the answer",
        "Pair programming on hard parts; explain reasoning, not just the fix",
        "Code review as teaching: link docs, show alternatives",
        "Give ownership of well-scoped tasks with support",
        "Have one concrete example ready"
      ]
    },
    pl: {
      q: "Jak pomagasz rozwijać się mniej doświadczonym programistom?",
      a: [
        "Pytam, co już próbowali; prowadzę pytaniami zamiast dawać odpowiedź",
        "Programowanie w parach przy trudnych częściach; tłumaczę tok rozumowania, nie tylko poprawkę",
        "Code review jako nauka: linki do dokumentacji, alternatywy",
        "Odpowiedzialność za dobrze określone zadania ze wsparciem",
        "Miej gotowy jeden konkretny przykład"
      ]
    }
  },
  {
    id: "remote-us", topic: "Collaboration",
    en: {
      q: "How do you work effectively with a remote US-based team?",
      a: [
        "Use the overlap hours (afternoon in Poland) for meetings and unblocking",
        "Async by default: clear written updates, PR descriptions, decision docs",
        "Ask questions early and batch them before the overlap window",
        "Over-communicate status and risks; no silent blockers",
        "Proactive – the client should not have to chase me"
      ]
    },
    pl: {
      q: "Jak efektywnie pracujesz ze zdalnym zespołem z USA?",
      a: [
        "Wspólne godziny (popołudnie w Polsce) na spotkania i odblokowywanie",
        "Domyślnie asynchronicznie: jasne pisemne aktualizacje, opisy PR, dokumenty decyzji",
        "Pytania zadaję wcześnie i zbieram je przed wspólnym oknem",
        "Aktywnie komunikuję status i ryzyka; bez cichych blokerów",
        "Proaktywność – klient nie powinien musieć mnie gonić"
      ]
    }
  },
  {
    id: "mistake", topic: "Collaboration",
    en: {
      q: "Tell me about a mistake you made in production.",
      a: [
        "Pick a real, moderate example – own it, no blaming",
        "What happened and impact",
        "How I detected and mitigated it quickly",
        "Root cause and the fix",
        "What changed afterwards: test, alert, checklist, process"
      ]
    },
    pl: {
      q: "Opowiedz o błędzie, który popełniłeś na produkcji.",
      a: [
        "Wybierz prawdziwy, umiarkowany przykład – bierz odpowiedzialność, bez obwiniania",
        "Co się stało i jaki był wpływ",
        "Jak szybko to wykryłem i ograniczyłem skutki",
        "Przyczyna i poprawka",
        "Co zmieniło się potem: test, alert, checklista, proces"
      ]
    }
  },
  {
    id: "estimation", topic: "Collaboration",
    en: {
      q: "How do you estimate work and handle a deadline you will miss?",
      a: [
        "Break work into small pieces; estimate ranges, name unknowns",
        "Spike/prototype to reduce big uncertainties",
        "Include tests, review, deployment, not just coding",
        "Missing a deadline: tell early, explain why, offer options (cut scope, move date, add help)",
        "Never surprise stakeholders on the last day"
      ]
    },
    pl: {
      q: "Jak szacujesz pracę i co robisz, gdy nie zdążysz na termin?",
      a: [
        "Podział na małe części; szacunki w przedziałach, nazwane niewiadome",
        "Spike/prototyp, żeby zmniejszyć duże niepewności",
        "Wliczam testy, review, wdrożenie, nie tylko kodowanie",
        "Zagrożony termin: mówię wcześnie, wyjaśniam przyczynę, daję opcje (mniejszy zakres, nowa data, pomoc)",
        "Nigdy nie zaskakuję interesariuszy w ostatnim dniu"
      ]
    }
  },
  {
    id: "poland-languages", topic: "Collaboration",
    en: {
      q: "Where are you based, and how would you rate your languages?",
      a: [
        "Based in Poznań, Poland – meets the location requirement",
        "Polish: native",
        "English: advanced – daily technical communication, docs, reviews",
        "Have an example of a technical discussion or presentation in English ready"
      ]
    },
    pl: {
      q: "Gdzie mieszkasz i jak oceniasz znajomość języków?",
      a: [
        "Mieszkam w Poznaniu – spełniam wymóg lokalizacji",
        "Polski: ojczysty",
        "Angielski: zaawansowany – codzienna komunikacja techniczna, dokumentacja, review",
        "Przygotuj przykład technicznej dyskusji lub prezentacji po angielsku"
      ]
    }
  },
  {
    id: "learning", topic: "Collaboration",
    en: {
      q: "How do you learn a technology you have not used in production?",
      a: [
        "Official docs for core concepts first",
        "Small project close to the real use case",
        "Read existing production code and tests in the team",
        "Ask focused questions; pair with someone experienced",
        "Be clear about what I have studied vs. operated in production"
      ]
    },
    pl: {
      q: "Jak uczysz się technologii, której nie używałeś na produkcji?",
      a: [
        "Najpierw oficjalna dokumentacja podstawowych koncepcji",
        "Mały projekt bliski realnemu zastosowaniu",
        "Czytanie istniejącego kodu produkcyjnego i testów w zespole",
        "Konkretne pytania; praca w parze z doświadczoną osobą",
        "Jasno rozróżniam to, czego się uczyłem, od tego, co utrzymywałem na produkcji"
      ]
    }
  },
];
