# Custom Cursor Effect with GSAP & Lenis

A modern, interactive custom cursor effect with smooth animations and scroll support. Features a multi-layered cursor with elastic animation that follows mouse movement with inverted colors for maximum visual impact.

---

**LINK**
: https://jawad-kourejo.github.io/animated-cursor-with-gsap/


## ✨ Features

- **Multi-layered Cursor**: Three concentric circles that move with elastic easing
- **Inverted Color Effect**: Uses `mix-blend-difference` for automatic color inversion based on background
- **Smooth Scrolling**: Integrated Lenis for buttery-smooth scroll experience
- **Responsive Design**: Works seamlessly across different screen sizes
- **High Performance**: Optimized animations using GSAP
- **Gradient Background**: Animated gradient with smooth color transitions

## 🎯 How It Works

The cursor system consists of three layers that follow your mouse movement with different delay times:

1. **Inner Circle** (20px) - Most responsive with 0.5s duration
2. **Mid Circle** (60px) - Moderate response with 1.7s duration  
3. **Outer Circle** (100px) - Slowest response with 3s duration

All animations use elastic easing (`elastic.out(1, 0.8)`) for a smooth, natural feel.

## 🛠️ Technologies Used

- **[GSAP](https://gsap.com/)** - Animation library for smooth cursor tracking
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **HTML5 & JavaScript** - Core web technologies

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cursor.git
cd cursor
```

2. Open `index.html` in your browser:
```bash
open index.html
```


## 📁 Project Structure

```
cursor/
├── index.html      # Main HTML file with Tailwind styles
├── script.js       # GSAP cursor animation logic
├── img/            # Image assets
└── README.md       # PROJECT INFORMATION
```

## 🎨 Customization

### Change Cursor Colors
Edit the cursor elements in `index.html`:
```html
<div class="cursorPointerMain mix-blend-difference bg-white"></div>
```

### Adjust Animation Speed
Modify the `duration` values in `script.js`:
```javascript
gsap.to(CursorVariableMain, {
    duration: 0.5,  // Faster = more responsive
    // ...
})
```

### Change Gradient Colors
Update the gradient in the `<style>` tag:
```css
background: repeating-linear-gradient(
  -45deg,
  #540b0e,
  #e63946,
  // Add your colors here
);
``` 

## 👤 Author

**JAWAD HUSSAIN KOUREJO**


---

**Enjoy the smooth cursor effect!** ✨
