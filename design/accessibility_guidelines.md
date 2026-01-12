# Accessibility Guidelines - VibeCheck.ai

## Color Contrast
*   **Text**: All body text must maintain a minimum contrast ratio of 4.5:1 against the background.
    *   *Primary Text*: White (#FFFFFF) on Black (#0a0a0a) = 21:1 (Pass)
    *   *Secondary Text*: Gray-300 (#d1d5db) on Black (#0a0a0a) = 13.6:1 (Pass)
*   **Large Text**: Headlines (18pt+) must maintain 3:1.
    *   *Gradient Text*: Ensure the lightest part of the gradient maintains contrast if on dark, or provide a fallback solid color for screen readers/high contrast mode.
*   **UI Components**: Borders and interactive elements should have 3:1 contrast.

## Focus States
*   All interactive elements (buttons, inputs, links) must have a visible focus state.
*   **Design Token**: `ring-2 ring-purple-500` (from Tailwind config).
*   Do not rely solely on color change; use outlines or shape changes.

## Screen Readers & ARIA
*   **Images**: All non-decorative images must have `alt` text. Decorative images (confetti, gradients) must have `alt=""`.
*   **Icons**: Interactive icons must have `aria-label` (e.g., `<button aria-label="Close settings">`).
*   **Charts**: Data visualizations must be accompanied by a table or text summary for screen reader users.
    *   *Radar Chart*: "A radar chart showing high scores in Casual tone (80/100) and low scores in Formal tone (20/100)."

## Motion
*   Respect `prefers-reduced-motion` media query.
*   Disable purely decorative animations (confetti, particles) if user prefers reduced motion.
*   Ensure essential animations (loading states) serve a clear purpose and are not excessive.
