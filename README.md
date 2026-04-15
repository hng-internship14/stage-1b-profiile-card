# 🚀 HNG Stage 1B – Profile Card Component

## 📌 Project Overview

This project is my submission for the **HNG Internship Stage 1B Frontend Task**.

The objective was to build a **testable, accessible, and responsive Profile Card component** using only **HTML, CSS, and vanilla JavaScript**, while following strict requirements for **semantic structure, accessibility, and automated testability**.

This component simulates a modern user profile card as seen in real-world applications, with a strong focus on **clean UI/UX and performance**.

---

## 🎯 What I Built

I developed a **modern, responsive Profile Card UI** that includes:

* User avatar (profile image)
* Full name
* Short professional bio
* Live current time (displayed as readable time)
* Social media links (Twitter, GitHub, LinkedIn)
* Hobbies list
* Dislikes list

---

## 🧪 Testability (data-testid)

All required `data-testid` attributes were implemented exactly as specified to ensure compatibility with automated tests.

### ✅ Implemented Test IDs:

* `test-profile-card`
* `test-user-name`
* `test-user-bio`
* `test-user-time`
* `test-user-avatar`
* `test-user-social-links`
* `test-user-social-twitter`
* `test-user-social-github`
* `test-user-social-linkedin`
* `test-user-hobbies`
* `test-user-dislikes`

📌 Note:
The **current time in milliseconds (`Date.now()`) is present in the DOM (hidden)** to satisfy test requirements, while a **readable time format is displayed for better user experience**.

---

## ⚙️ Implementation Approach

### 1. Semantic HTML

I used proper semantic elements to improve structure and accessibility:

* `<article>` → Profile card container
* `<header>` → User identity section
* `<figure>` & `<img>` → Avatar image
* `<nav>` → Social links
* `<section>` → Hobbies & Dislikes
* `<ul>` / `<li>` → Lists

---

### 2. Styling (CSS)

The UI is designed with a **modern and minimal aesthetic**:

* Soft shadows and rounded corners
* Clean spacing and layout hierarchy
* Responsive Flexbox layout
* Pill-style social buttons
* Subtle background gradients

---

### 3. Time Handling (JavaScript)

* Displays **current time in HH:MM:SS format**
* Updates every second using `setInterval`
* Maintains **millisecond timestamp internally** for testing

---

### 4. Accessibility Features

* Meaningful `alt` text for images
* Keyboard-accessible links
* Visible focus states
* Proper semantic structure for screen readers
* External links secured with:

  * `target="_blank"`
  * `rel="noopener noreferrer"`

---

## 📱 Responsiveness

The layout adapts across all screen sizes:

| Device  | Behavior                      |
| ------- | ----------------------------- |
| Mobile  | Fully stacked layout          |
| Tablet  | Balanced spacing              |
| Desktop | Avatar aligned beside content |

✔ No overflow issues
✔ Flexible layout for long content

---

## 🛠️ Tech Stack

* HTML5
* CSS3 (Flexbox)
* Vanilla JavaScript (ES6)

---

## 🚀 How to Run

1. Clone or download the repository
2. Open `index.html` in your browser

OR

Use a Live Server extension in VS Code for development.

---

## 🔗 Live Demo

👉 *[https://hng-internship14.github.io/stage-1b-profiile-card/]*

---

## 📌 Key Highlights

* Fully testable with strict `data-testid` compliance
* Clean, production-like UI
* Accessible and semantic HTML structure
* Real-time clock functionality
* Responsive across all devices

---

## 🙌 Conclusion

This project demonstrates my ability to:

* Build structured and semantic UI components
* Follow strict frontend specifications
* Implement accessible and responsive designs
* Separate **UI presentation from system data**
* Write clean and maintainable code using vanilla JavaScript

---

**Thank you for reviewing my submission 🚀**
