# 🎨 Quick Design Reference Guide

## Icon Component Usage

### Import Statement
```javascript
import { IconName } from 'lucide-react';
```

### Basic Usage
```jsx
<IconName className="w-6 h-6" strokeWidth={2} />
```

### In Colored Container
```jsx
<div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
  <BookOpen className="w-8 h-8" strokeWidth={2} />
</div>
```

---

## Button Patterns

### Primary Gradient Button
```jsx
<button className="btn-primary">
  <Phone className="w-5 h-5" />
  Call Now
</button>
```

### Blue Gradient Button
```jsx
<button className="btn-gradient-blue">
  <Send className="w-5 h-5" />
  Submit
</button>
```

### Gold Gradient Button
```jsx
<button className="btn-gradient-gold">
  <Star className="w-5 h-5" />
  Premium
</button>
```

### Secondary Button
```jsx
<button className="btn-secondary">
  <MapPin className="w-5 h-5" />
  Visit
</button>
```

---

## Badge Patterns

```jsx
<span className="badge-new">New</span>
<span className="badge-success">Verified</span>
<span className="badge-info">Info</span>
```

---

## Card Patterns

### Premium Card (with hover lift)
```jsx
<div className="card-premium p-8">
  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
    <Trophy className="w-8 h-8" strokeWidth={2} />
  </div>
  <h3 className="text-xl font-bold text-slate-900 mb-3">Title</h3>
  <p className="text-slate-600">Description text here</p>
</div>
```

### Soft Card
```jsx
<div className="card-soft">
  Content here
</div>
```

### Glass Card
```jsx
<div className="glass-card p-6">
  Glassmorphism content
</div>
```

---

## Input Patterns

### Modern Input
```jsx
<input 
  type="text"
  placeholder="Enter name"
  className="input-modern"
/>
```

### Modern Select
```jsx
<select className="input-modern">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Modern Textarea
```jsx
<textarea 
  className="input-modern resize-none"
  rows="5"
  placeholder="Your message..."
></textarea>
```

---

## Common Icon Combinations

### Contact Section
```jsx
import { MapPin, Phone, Mail } from 'lucide-react';

<MapPin className="w-6 h-6" />  // Location
<Phone className="w-6 h-6" />   // Phone
<Mail className="w-6 h-6" />    // Email
```

### Academic Section
```jsx
import { BookOpen, GraduationCap, Award } from 'lucide-react';

<BookOpen className="w-8 h-8" />      // Academics
<GraduationCap className="w-8 h-8" /> // Graduation
<Award className="w-8 h-8" />         // Achievement
```

### Features Section
```jsx
import { Shield, Target, Users, Heart } from 'lucide-react';

<Shield className="w-8 h-8" />  // Safety
<Target className="w-8 h-8" />  // Goals
<Users className="w-8 h-8" />   // Community
<Heart className="w-8 h-8" />   // Care
```

---

## Color Combinations

### Emerald (Primary)
```jsx
<div className="bg-emerald-50 text-emerald-600">
  <BookOpen className="w-8 h-8" />
</div>
```

### Blue (Info)
```jsx
<div className="bg-blue-50 text-blue-600">
  <Info className="w-8 h-8" />
</div>
```

### Amber (Warning/Gold)
```jsx
<div className="bg-amber-50 text-amber-600">
  <Star className="w-8 h-8" />
</div>
```

### Pink (Childhood)
```jsx
<div className="bg-pink-50 text-pink-600">
  <Baby className="w-8 h-8" />
</div>
```

---

## Responsive Icon Sizes

```jsx
// Small (buttons, inline)
<Icon className="w-4 h-4" />

// Medium (buttons with text)
<Icon className="w-5 h-5" />

// Large (feature cards)
<Icon className="w-8 h-8" />

// Extra Large (hero sections)
<Icon className="w-12 h-12" />
```

---

## Animation Classes

### Hover Lift
```jsx
<div className="transform hover:-translate-y-2 transition duration-300">
  Content
</div>
```

### Scale on Hover
```jsx
<button className="hover:scale-105 transition duration-300">
  Button
</button>
```

### Fade In
```jsx
<div className="animate-fadeIn">
  Content
</div>
```

---

## Complete Example

```jsx
import { BookOpen, ArrowRight } from 'lucide-react';

<div className="card-premium p-8">
  {/* Icon Container */}
  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
    <BookOpen className="w-8 h-8" strokeWidth={2} />
  </div>
  
  {/* Badge */}
  <span className="badge-success mb-3">New Course</span>
  
  {/* Content */}
  <h3 className="text-xl font-bold text-slate-900 mb-3">
    Academic Excellence
  </h3>
  <p className="text-slate-600 mb-6">
    Comprehensive curriculum for holistic development.
  </p>
  
  {/* CTA Button */}
  <button className="btn-gradient-blue">
    Learn More
    <ArrowRight className="w-5 h-5" />
  </button>
</div>
```

---

**Quick Tip:** Always use `strokeWidth={2}` for consistent icon weight across the site!
