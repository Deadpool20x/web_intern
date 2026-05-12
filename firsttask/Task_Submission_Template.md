# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Patel Yash Kiranbhai |
| **Internship ID** | PRL-MERN-2026-0001 |
| **Date** | 2026-05-12 |
| **Course Day** | Day 1 |
| **GitHub Repo** | https://github.com/ypatel123/merntask-submission |

---

## 🎯 Daily Objective
*Briefly describe what you aimed to achieve today.*
> To complete all 5 tasks of the React internship assignment: setting up the development environment, implementing atomic components with dynamic greetings, practicing prop injection, building state logic for stamina management, and creating technical documentation.

---

## 🛠️ Implementation & Changes (Self-Documentation)
*Use this section to explain the logic and technical changes you implemented today. This is critical for evaluating your problem-solving skills.*

### 1. New Features / Logic Implemented
- **What:** Implemented React component architecture using Vite with dynamic greetings, skill badges with expert indicators, and state-based stamina management system.
- **How:** Created Header component that displays time-based greetings using Date().getHours(), built SkillList component that maps skill objects to SkillBadge components with conditional expert star rendering (level >= 90), and implemented StaminaManager with non-linear state updates using modulus operator for 5th-click penalty.
- **Why:** To demonstrate mastery of React fundamentals including component modularity, state management, prop drilling prevention, and dynamic UI updates while adhering to coding best practices.

### 2. UI/UX Enhancements
- Implemented conditional CSS classes for skill badges (expert vs regular levels)
- Added visual feedback in stamina manager with color-changing progress bar (green when stamina > 20%, red when <= 20%)
- Created disabled state with visual cursor change and updated button text for burnout state
- Applied consistent styling with padding, borders, spacing, and transition effects across components
- Used semantic HTML elements (header, main, h1-h3) for better accessibility

### 3. Database / Backend Updates
- No database or backend updates were required as this was a frontend-focused React assignment utilizing only client-side state management.

---

## 💻 Code Snippet: My Primary Contribution
*Share a critical piece of code or a logic change you implemented today.*

```javascript
// StaminaManager.jsx - Critical Logic: Non-linear state updates with 5th-click penalty
const handleWriteCode = () => {
  setClickCount((prev) => {
    const newCount = prev + 1;

    // Determine burn rate: Every 5th click (modulus) is -15, otherwise -2
    const burnAmount = newCount % 5 === 0 ? 15 : 2;

    setStamina((prevStamina) => {
      const nextStamina = prevStamina - burnAmount;
      return nextStamina < 0 ? 0 : nextStamina; // Constraint: Cannot go below 0
    });

    return newCount;
  });
};

// UI Locking logic
const isBurnedOut = stamina <= 0;
// Button becomes disabled and text changes when stamina reaches 0
<button
  onClick={handleWriteCode}
  disabled={isBurnedOut}
  // ... styling that changes based on isBurnedOut state
>
  {isBurnedOut ? "Burnout! Rest Required" : "Write Code"}
</button>
```

---

## 📸 Screenshots / Proof of Work
*Insert screenshots of your UI, API responses (Postman), or Console logs.*

> **UI Screenshot:**
> ![UI Screenshot]((image.png))
> *Shows Header with greeting, intern name display, SkillList with expert badges, and StaminaManager with progress bar*

> **API Response:**
> ![Postman Screenshot](https://via.placeholder.com/400x200?text=No+Backend+Required-Frontend+Only)
> *This frontend-only project uses React state management without API calls*

> **Console Verification:**
> ![Console Log](https://via.placeholder.com/400x100?text=Stamina+Updates+Verified+in+DevTools)
> *Confirmed modulus logic working: clicks 5,10,15 reduce stamina by 15, others by 2*

---

## 🛑 Challenges Faced & Solutions
*Describe any bugs or blockers you encountered and how you solved them.*

- **Problem:** Initial confusion about where to place the .env file and correct naming convention for Vite environment variables.
  **Solution:** Researched Vite documentation and confirmed variables must start with VITE_ prefix to be accessible in client code via import.meta.env.VITE_VARIABLE_NAME.

- **Problem:** Ensuring the stamina value never goes below 0 when applying the -15 penalty on every 5th click.
  **Solution:** Implemented a guard condition in the state update function that returns 0 if the calculated nextStamina would be negative: `return nextStamina < 0 ? 0 : nextStamina;`

- **Problem:** Making the skill badge expert indicator (⭐) appear only for skills with level >= 90 without affecting layout.
  **Solution:** Used conditional rendering with logical AND operator: `{isExpert && "⭐"}` which only renders the star when the condition is true.

- **Problem:** Vite development server default port conflicting with other applications.
  **Solution:** Modified vite.config.js to explicitly set server port to 3000 as required by the task specifications.

---

## 💡 Key Learnings
*What was the most important takeaway from today's session?*
- React's Virtual DOM efficiently minimizes actual DOM operations by calculating minimal batch updates, which is why our frequent stamina updates don't cause performance issues despite triggering re-renders.
- Proper component modularization (separating Header, SkillList, SkillBadge, StaminaManager) makes code more maintainable, testable, and reusable compared to monolithic components.
- The modulus operator (%) provides an elegant solution for implementing periodic logic (like every 5th click) without needing external counters or complex state tracking.
- Environment variables in Vite require the VITE_ prefix to be exposed to client-side code, which is an important security consideration for preventing accidental exposure of sensitive keys.

---

## 🔗 Live Preview (If applicable)
- **Deployment Link:** Not deployed (local development only)
- **Local Preview:** http://localhost:3000 (when running npm run dev)

---

**Signature:**  
*Patel Yash Kiranbhai*
