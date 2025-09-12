---
name: Translation Issue
about: Report a translation or internationalization problem
title: '[I18N] '
labels: translation, internationalization
assignees: ''
---

## 🌍 Translation Issue Report

## 📋 Issue Information

### Translation Problem Type

- [ ] Missing translation
- [ ] Incorrect translation
- [ ] Outdated translation
- [ ] Inconsistent terminology
- [ ] Cultural adaptation needed
- [ ] RTL (Right-to-Left) support
- [ ] Date/time formatting
- [ ] Number formatting
- [ ] Currency formatting
- [ ] Other (please specify)

### Language

- [ ] English (en)
- [ ] Spanish (es)
- [ ] French (fr)
- [ ] German (de)
- [ ] Italian (it)
- [ ] Portuguese (pt)
- [ ] Chinese (zh)
- [ ] Japanese (ja)
- [ ] Korean (ko)
- [ ] Arabic (ar)
- [ ] Persian (fa)
- [ ] Other (please specify)

### Severity Level

- [ ] Critical (blocks usage)
- [ ] High (significant confusion)
- [ ] Medium (moderate confusion)
- [ ] Low (minor confusion)

## 🔍 Translation Details

### Description

Provide a clear description of the translation issue.

### Current State

Describe what the current translation says or what's missing.

### Expected State

Describe what the translation should say or include.

### Context

- **Component**: [e.g., Login form, Product page, Error message]
- **User Interface**: [e.g., Button text, Label, Tooltip]
- **Content Type**: [e.g., Static text, Dynamic content, Error message]
- **User Journey**: [e.g., Registration, Checkout, Support]

## 📊 Technical Details

### File Location

- **File Path**: [e.g., src/locales/en.json, src/components/Login.tsx]
- **Key**: [e.g., login.button.submit, error.validation.required]
- **Namespace**: [e.g., common, auth, products]
- **Version**: [e.g., v0.1.0]

### Current Translation

```json
{
  "login": {
    "button": {
      "submit": "Submit"
    }
  }
}
```

### Suggested Translation

```json
{
  "login": {
    "button": {
      "submit": "تأیید"
    }
  }
}
```

### Original Text

```text
Submit
```

### Target Language

```text
تأیید
```

## 🔧 Suggested Solutions

### Proposed Fix

Describe your suggested solution for the translation issue.

### Alternative Solutions

List any alternative solutions you've considered.

### Implementation Notes

- **Translation Changes**: [e.g., Update specific translation keys]
- **Cultural Adaptation**: [e.g., Adapt for cultural context]
- **Formatting Changes**: [e.g., Fix date/time formatting]
- **RTL Support**: [e.g., Add RTL layout support]

## 📋 Translation Standards

### Quality Guidelines

- [ ] Accurate translation
- [ ] Consistent terminology
- [ ] Cultural appropriateness
- [ ] Grammar and spelling correct
- [ ] Contextually appropriate
- [ ] Professional tone
- [ ] User-friendly language
- [ ] Brand voice maintained

### Technical Requirements

- [ ] Proper encoding (UTF-8)
- [ ] Special characters handled
- [ ] RTL support if needed
- [ ] Date/time formatting
- [ ] Number formatting
- [ ] Currency formatting
- [ ] Pluralization rules
- [ ] Gender agreement

## 🎯 Impact Assessment

### User Impact

- **Native Speakers**: [e.g., Cannot understand interface]
- **Non-native Speakers**: [e.g., Confused by incorrect translation]
- **User Experience**: [e.g., Poor user experience]
- **Task Completion**: [e.g., Cannot complete checkout]

### Business Impact

- **Market Reach**: [e.g., Cannot enter new market]
- [ ] **User Adoption**: [e.g., 30% drop in non-English users]
- [ ] **Support Load**: [e.g., 40% increase in support tickets]
- [ ] **Reputation**: [e.g., Negative feedback on translation quality]

## 📋 Checklist

### Before Submitting

- [ ] I have verified this is a real translation issue
- [ ] I have checked existing translations
- [ ] I have provided suggested improvements
- [ ] I have considered cultural context
- [ ] I have provided clear examples

### Information Provided

- [ ] Clear description of the issue
- [ ] Current vs expected translation
- [ ] Suggested solutions
- [ ] Impact assessment
- [ ] Technical details
- [ ] Examples provided

## 🚀 Priority

### Urgency Level

- [ ] Critical (blocks usage)
- [ ] High (significant confusion)
- [ ] Medium (moderate confusion)
- [ ] Low (minor confusion)

### Reason for Priority

Explain why this translation issue needs attention.

## 📄 Additional Information

### Related Issues

- [ ] Related to issue #[number]
- [ ] Related to PR #[number]
- [ ] Related to commit [hash]
- [ ] No related issues

### Translation History

- [ ] This is a new issue
- [ ] This issue has been getting worse
- [ ] This issue has been stable
- [ ] This issue has been improving

### Additional Context

Add any other context or information that might be helpful.

---

**Thank you for reporting this translation issue!** 🌍

We appreciate your help in improving the internationalization of GoldShop. We will investigate this issue and work to improve the translations.
