# 👨‍💻 Blacksea Developer Guide

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ContactPopup/    # Contact form with validation
│   ├── DotBackground/   # Animated background
│   ├── Footer/          # Site footer
│   ├── Header/          # Section header
│   ├── Navbar/          # Navigation bar
│   └── ...
├── hooks/               # Custom React hooks
│   └── useContactForm.ts
├── pages/               # Page components
│   ├── Home/
│   ├── AboutUs/
│   └── Works/
├── schemas/             # Zod validation schemas
│   └── contactSchema.ts
├── stores/              # Zustand state stores
│   ├── contactStore.ts
│   └── languageStore.ts
├── translations/        # i18n translations
│   ├── en.ts
│   ├── fr.ts
│   └── types.ts
└── routes/              # React Router setup
```

---

## 🔧 State Management (Zustand)

### Contact Popup Store

```tsx
import { useContactStore } from '@/stores/contactStore';

function MyComponent() {
  const { isOpen, openContact, closeContact } = useContactStore();

  return (
    <>
      <button onClick={openContact}>Open Contact</button>
      {isOpen && <div>Contact form is open!</div>}
    </>
  );
}
```

### Language Store

```tsx
import { useLanguageStore } from '@/stores/languageStore';
import { Language } from '@/translations';

function MyComponent() {
  const { t, language, setLanguage } = useLanguageStore();

  return (
    <>
      <h1>{t.common.title}</h1>
      <button onClick={() => setLanguage(Language.EN)}>English</button>
      <button onClick={() => setLanguage(Language.FR)}>Français</button>
    </>
  );
}
```

---

## ✅ Form Validation (Zod)

### Create a Schema

```tsx
// src/schemas/myFormSchema.ts
import { z } from 'zod';

export const myFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be at least 18'),
});

export type MyFormData = z.infer<typeof myFormSchema>;
```

### Use in a Component

```tsx
import { useState } from 'react';
import { myFormSchema, MyFormData } from '@/schemas/myFormSchema';

function MyForm() {
  const [formData, setFormData] = useState<MyFormData>({
    name: '',
    email: '',
    age: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = myFormSchema.parse(formData);
      // Form is valid, proceed with submission
      console.log(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      {errors.name && <span className="error">{errors.name}</span>}
      {/* ... other fields */}
    </form>
  );
}
```

---

## 🎨 Component Patterns

### SMART Architecture

#### Smart Component (Container)
```tsx
// Has logic, uses hooks, manages state
function SmartComponent() {
  const { data, loading } = useFetchData();
  const { openContact } = useContactStore();

  if (loading) return <Spinner />;

  return <PresentationalComponent data={data} onAction={openContact} />;
}
```

#### Presentational Component
```tsx
// Pure UI, receives props, no hooks
interface Props {
  data: Data[];
  onAction: () => void;
}

function PresentationalComponent({ data, onAction }: Props) {
  return (
    <div>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
      <button onClick={onAction}>Action</button>
    </div>
  );
}
```

---

## 🌐 Internationalization (i18n)

### Add a New Translation

```tsx
// src/translations/en.ts
export const en: Translations = {
  common: {
    title: 'Welcome',
    // Add your new key here
    newKey: 'New translation',
  },
  // ...
};

// src/translations/fr.ts
export const fr: Translations = {
  common: {
    title: 'Bienvenue',
    // Add your new key here
    newKey: 'Nouvelle traduction',
  },
  // ...
};
```

### Use in Component

```tsx
function MyComponent() {
  const { t } = useLanguageStore();

  return <h1>{t.common.newKey}</h1>;
}
```

---

## 🎭 Animations (Framer Motion)

### Basic Animation

```tsx
import { motion } from 'framer-motion';

function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

### Scroll Animation

```tsx
import { motion } from 'framer-motion';

function ScrollAnimated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      Content appears on scroll
    </motion.div>
  );
}
```

### Hover Animation

```tsx
import { motion } from 'framer-motion';

function HoverAnimated() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Click me
    </motion.button>
  );
}
```

---

## 🎨 Styling (Tailwind CSS + DaisyUI)

### Tailwind Classes

```tsx
// Responsive design
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

// Flexbox
<div className="flex items-center justify-between gap-4">
  Content
</div>

// Grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  Content
</div>
```

### DaisyUI Components

```tsx
// Button
<button className="btn btn-primary">Primary Button</button>

// Card
<div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>Card content</p>
  </div>
</div>

// Modal (use ContactPopup pattern instead)
```

---

## 🧪 Custom Hooks

### Example: useContactForm

```tsx
// src/hooks/useContactForm.ts
import { useState } from 'react';
import { contactSchema, ContactFormData } from '@/schemas/contactSchema';

export function useContactForm(onSuccess?: () => void) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validatedData = contactSchema.parse(formData);
      // Submit logic here
      onSuccess?.();
    } catch (error) {
      // Handle errors
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSubmitting, handleChange, handleSubmit };
}
```

---

## 🚀 Performance Tips

### 1. Lazy Load Routes

```tsx
import { lazy, Suspense } from 'react';

const Works = lazy(() => import('@/pages/Works/Works'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Works />
    </Suspense>
  );
}
```

### 2. Memoize Expensive Computations

```tsx
import { useMemo } from 'react';

function MyComponent({ items }) {
  const sortedItems = useMemo(() => {
    return items.sort((a, b) => a.name.localeCompare(b.name));
  }, [items]);

  return <List items={sortedItems} />;
}
```

### 3. Use Zustand Selectors

```tsx
// ❌ Bad: Re-renders on any store change
const store = useContactStore();

// ✅ Good: Only re-renders when isOpen changes
const isOpen = useContactStore((state) => state.isOpen);
```

---

## 📋 Code Style Guidelines

### Component Naming

```tsx
// ✅ PascalCase for components
export function MyComponent() {}

// ✅ camelCase for functions and hooks
export function useMyHook() {}
export function formatDate() {}

// ✅ UPPER_CASE for constants
export const API_URL = 'https://api.example.com';
```

### File Organization

```tsx
// ✅ Imports order
import React from 'react';           // 1. React
import { motion } from 'framer-motion';  // 2. External libraries
import { useMyHook } from '@/hooks';     // 3. Internal absolute imports
import { MyComponent } from './MyComponent';  // 4. Relative imports
import type { MyType } from '@/types';   // 5. Type imports

// Component code
```

### TypeScript

```tsx
// ✅ Always type props
interface Props {
  title: string;
  count?: number;
  onClick: () => void;
}

function MyComponent({ title, count = 0, onClick }: Props) {
  return <button onClick={onClick}>{title}: {count}</button>;
}

// ✅ Use type inference when possible
const [count, setCount] = useState(0);  // Inferred as number

// ✅ Use explicit types when needed
const [user, setUser] = useState<User | null>(null);
```

---

## 🐛 Common Issues & Solutions

### Issue: Store not persisting

```tsx
// Make sure your store uses persist middleware
import { persist } from 'zustand/middleware';

export const useMyStore = create<MyState>()(
  persist(
    (set) => ({
      // state here
    }),
    {
      name: 'my-store-name',
    }
  )
);
```

### Issue: Form validation not working

```tsx
// Make sure to use try-catch with Zod
try {
  const validatedData = mySchema.parse(formData);
} catch (error) {
  if (error instanceof z.ZodError) {
    // Handle validation errors
  }
}
```

### Issue: TypeScript errors with translations

```tsx
// Make sure your translation keys match the type definition
// Check src/translations/types.ts for the structure
```

---

## 📚 Useful Resources

- **React Docs:** https://react.dev
- **TypeScript:** https://www.typescriptlang.org
- **Zustand:** https://docs.pmnd.rs/zustand
- **Zod:** https://zod.dev
- **Framer Motion:** https://www.framer.com/motion
- **Tailwind CSS:** https://tailwindcss.com
- **DaisyUI:** https://daisyui.com
- **React Router:** https://reactrouter.com

---

## 🤝 Contributing

1. Create a new branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Test your changes: `npm run build`
4. Lint your code: `npm run lint`
5. Commit: `git commit -m "feat: add my feature"`
6. Push: `git push origin feature/my-feature`
7. Create a Pull Request

---

## 📞 Need Help?

Check the [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md) for detailed information about the project architecture.

---

*Happy coding! 🎉*
