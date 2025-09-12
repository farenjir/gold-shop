---
name: Accessibility Issue
about: Report an accessibility problem
title: '[A11Y] '
labels: accessibility
assignees: ''
---

## ♿ Accessibility Issue Report

## 📋 Issue Information

### Accessibility Problem Type

- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast
- [ ] Focus management
- [ ] Alternative text for images
- [ ] Form labels and validation
- [ ] Heading structure
- [ ] Link text clarity
- [ ] Video/audio captions
- [ ] Other (please specify)

### WCAG Level

- [ ] Level A (basic accessibility)
- [ ] Level AA (standard accessibility)
- [ ] Level AAA (enhanced accessibility)

### Severity Level

- [ ] Critical (blocks functionality)
- [ ] High (significant impact on usability)
- [ ] Medium (moderate impact)
- [ ] Low (minor impact)

## 🔍 Accessibility Details

### Description

Provide a clear description of the accessibility issue.

### Affected Areas

- [ ] Frontend (gold-shop)
- [ ] Admin Panel (gold-admin)
- [ ] Shared UI components
- [ ] Forms
- [ ] Navigation
- [ ] Content
- [ ] Media
- [ ] Other (please specify)

### User Impact

- **Affected Users**: [e.g., Screen reader users, keyboard-only users]
- **User Experience**: [e.g., Cannot complete checkout process]
- **Workaround Available**: [e.g., Yes, but requires mouse]
- **Frequency**: [e.g., Always occurs, sometimes occurs]

## 🧪 Testing Details

### Testing Environment

- **OS**: [e.g., Windows 10, macOS 12, Ubuntu 20.04]
- **Browser**: [e.g., Chrome 91, Firefox 89, Safari 14]
- **Assistive Technology**: [e.g., NVDA, JAWS, VoiceOver, TalkBack]
- **Screen Reader Version**: [e.g., NVDA 2021.1]
- **Browser Version**: [e.g., Chrome 91.0.4472.124]

### Testing Tools Used

- [ ] WAVE (Web Accessibility Evaluator)
- [ ] axe DevTools
- [ ] Lighthouse
- [ ] Color Contrast Analyzer
- [ ] Keyboard testing
- [ ] Screen reader testing
- [ ] Manual testing
- [ ] Other (please specify)

### Test Results

- **WCAG Violation**: [e.g., 1.4.3 Contrast (Minimum)]
- **Error Description**: [e.g., Text contrast ratio is 3.2:1, should be at least 4.5:1]
- **Element Affected**: [e.g., Button text "Add to Cart"]
- **Page/Component**: [e.g., Product page, checkout form]

## 📊 Technical Details

### HTML Structure

```html
<!-- Provide the relevant HTML code -->
<div class="button">Add to Cart</div>
```

### CSS Styling

```css
/* Provide the relevant CSS code */
.button {
  color: #666;
  background-color: #ccc;
}
```

### JavaScript Behavior

```javascript
// Provide relevant JavaScript code if applicable
document.addEventListener('keydown', function (e) {
  // Keyboard handling code
});
```

## 🔧 Suggested Solutions

### Proposed Fix

Describe your suggested solution for the accessibility issue.

### Alternative Solutions

List any alternative solutions you've considered.

### Implementation Notes

- **HTML Changes**: [e.g., Add proper heading structure]
- **CSS Changes**: [e.g., Improve color contrast]
- **JavaScript Changes**: [e.g., Add keyboard event handlers]
- **Content Changes**: [e.g., Add alternative text]

## 📋 WCAG Guidelines

### Specific Guidelines Violated

- [ ] 1.1.1 Non-text Content
- [ ] 1.3.1 Info and Relationships
- [ ] 1.3.2 Meaningful Sequence
- [ ] 1.4.1 Use of Color
- [ ] 1.4.2 Audio Control
- [ ] 1.4.3 Contrast (Minimum)
- [ ] 1.4.4 Resize Text
- [ ] 2.1.1 Keyboard
- [ ] 2.1.2 No Keyboard Trap
- [ ] 2.4.1 Bypass Blocks
- [ ] 2.4.2 Page Titled
- [ ] 2.4.3 Focus Order
- [ ] 2.4.4 Link Purpose
- [ ] 3.1.1 Language of Page
- [ ] 3.2.1 On Focus
- [ ] 3.2.2 On Input
- [ ] 4.1.1 Parsing
- [ ] 4.1.2 Name, Role, Value
- [ ] Other (please specify)

### Success Criteria

- **Current State**: [e.g., Fails 1.4.3 Contrast (Minimum)]
- **Target State**: [e.g., Passes 1.4.3 Contrast (Minimum)]
- **Test Method**: [e.g., Automated testing with axe DevTools]

## 🎯 Impact Assessment

### User Impact

- **Affected User Groups**: [e.g., Screen reader users, keyboard users]
- **Task Completion**: [e.g., Cannot complete checkout]
- **User Experience**: [e.g., Frustrating, confusing]
- **Workaround**: [e.g., Requires assistance from sighted user]

### Business Impact

- **Legal Compliance**: [e.g., ADA compliance risk]
- **User Retention**: [e.g., 5% of users cannot use the site]
- **Support Load**: [e.g., 10% increase in support tickets]
- **Reputation**: [e.g., Negative feedback on accessibility]

## 📋 Checklist

### Before Submitting

- [ ] I have verified this is a real accessibility issue
- [ ] I have tested with assistive technology
- [ ] I have provided WCAG guideline information
- [ ] I have suggested solutions
- [ ] I have provided reproduction steps

### Information Provided

- [ ] Clear description of the issue
- [ ] WCAG guideline violation
- [ ] Testing details
- [ ] Suggested solutions
- [ ] Impact assessment
- [ ] Technical details

## 🚀 Priority

### Urgency Level

- [ ] Critical (blocks core functionality)
- [ ] High (significant impact on usability)
- [ ] Medium (moderate impact)
- [ ] Low (minor impact)

### Reason for Priority

Explain why this accessibility issue needs attention.

## 📄 Additional Information

### Related Issues

- [ ] Related to issue #[number]
- [ ] Related to PR #[number]
- [ ] Related to commit [hash]
- [ ] No related issues

### Accessibility Testing

- [ ] I have tested with multiple screen readers
- [ ] I have tested with keyboard-only navigation
- [ ] I have tested with high contrast mode
- [ ] I have tested with zoom up to 200%
- [ ] I have tested with voice control

### Additional Context

Add any other context or information that might be helpful.

---

**Thank you for reporting this accessibility issue!** ♿

We appreciate your help in making GoldShop accessible to all users. We will investigate this issue and work to improve accessibility.
