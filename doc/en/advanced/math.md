---
title: Markdown Math Formula Guide
description: A detailed guide on how to insert and render LaTeX math formulas in Markdown, suitable for academic and technical documentation.
---

# Math Formulas

Markdown supports embedding math formulas using LaTeX syntax, providing professional mathematical expression capabilities for technical documents, academic papers, and teaching materials.

## Basic LaTeX Math Syntax

### Inline Formulas

Use single dollar signs `$` to enclose formulas:

```markdown
This is an inline formula: $E = mc^2$, which is Einstein's mass-energy equation.

The area of a circle is $A = \pi r^2$, where $r$ is the radius.

The solution to the quadratic equation: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
```

**Rendered Output:**

This is an inline formula: $E = mc^2$, which is Einstein's mass-energy equation.

The area of a circle is $A = \pi r^2$, where $r$ is the radius.

The solution to the quadratic equation: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### Block Formulas

Use double dollar signs `$$` to enclose formulas, which will be displayed on a separate centered line:

```markdown
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$
```

**Rendered Output:**

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

## Basic Math Elements

### Superscripts and Subscripts

```markdown
<!-- Superscripts -->
$x^2$, $e^{i\pi}$, $2^{10}$

<!-- Subscripts -->
$x_1$, $a_{ij}$, $\log_2 n$

<!-- Combined -->
$x_1^2$, $a_{i,j}^{(k)}$, $\sum_{i=1}^n x_i^2$
```

**Rendered Output:**

$x^2$, $e^{i\pi}$, $2^{10}$

$x_1$, $a_{ij}$, $\log_2 n$

$x_1^2$, $a_{i,j}^{(k)}$, $\sum_{i=1}^n x_i^2$

### Fractions

```markdown
<!-- Basic fractions -->
$\frac{1}{2}$, $\frac{a}{b}$, $\frac{x+y}{x-y}$

<!-- Continued fractions -->
$\frac{1}{1 + \frac{1}{2 + \frac{1}{3 + \cdots}}}$

<!-- Complex fractions -->
$\frac{\partial^2 f}{\partial x^2}$, $\frac{d}{dx}\left(\frac{1}{x}\right)$
```

**Rendered Output:**

$\frac{1}{2}$, $\frac{a}{b}$, $\frac{x+y}{x-y}$

$\frac{1}{1 + \frac{1}{2 + \frac{1}{3 + \cdots}}}$

$\frac{\partial^2 f}{\partial x^2}$, $\frac{d}{dx}\left(\frac{1}{x}\right)$

### Square Roots

```markdown
<!-- Square roots -->
$\sqrt{2}$, $\sqrt{x^2 + y^2}$

<!-- n-th roots -->
$\sqrt[3]{8}$, $\sqrt[n]{x}$

<!-- Complex roots -->
$\sqrt{\frac{a}{b}}$, $\sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}$
```

**Rendered Output:**

$\sqrt{2}$, $\sqrt{x^2 + y^2}$

$\sqrt[3]{8}$, $\sqrt[n]{x}$

$\sqrt{\frac{a}{b}}$, $\sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}$

## Symbols and Operators

### Greek Letters

```markdown
<!-- Lowercase Greek letters -->
$\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$

$\iota$, $\kappa$, $\lambda$, $\mu$, $\nu$, $\xi$, $\pi$, $\rho$

$\sigma$, $\tau$, $\upsilon$, $\phi$, $\chi$, $\psi$, $\omega$

<!-- Uppercase Greek letters -->
$\Alpha$, $\Beta$, $\Gamma$, $\Delta$, $\Epsilon$, $\Zeta$, $\Eta$, $\Theta$

$\Lambda$, $\Xi$, $\Pi$, $\Sigma$, $\Phi$, $\Psi$, $\Omega$
```

**Rendered Output:**

$\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$

$\iota$, $\kappa$, $\lambda$, $\mu$, $\nu$, $\xi$, $\pi$, $\rho$

$\sigma$, $\tau$, $\upsilon$, $\phi$, $\chi$, $\psi$, $\omega$

$\Alpha$, $\Beta$, $\Gamma$, $\Delta$, $\Epsilon$, $\Zeta$, $\Eta$, $\Theta$

$\Lambda$, $\Xi$, $\Pi$, $\Sigma$, $\Phi$, $\Psi$, $\Omega$

### Operators

```markdown
<!-- Basic operations -->
$+$, $-$, $\times$, $\div$, $\pm$, $\mp$

<!-- Relational operations -->
$=$, $\neq$, $<$, $>$, $\leq$, $\geq$, $\ll$, $\gg$

<!-- Logical operations -->
$\land$, $\lor$, $\lnot$, $\implies$, $\iff$

<!-- Set operations -->
$\in$, $\notin$, $\subset$, $\supset$, $\cup$, $\cap$, $\emptyset$

<!-- Other symbols -->
$\infty$, $\partial$, $\nabla$, $\propto$, $\approx$, $\equiv$
```

**Rendered Output:**

$+$, $-$, $\times$, $\div$, $\pm$, $\mp$

$=$, $\neq$, $<$, $>$, $\leq$, $\geq$, $\ll$, $\gg$

$\land$, $\lor$, $\lnot$, $\implies$, $\iff$

$\in$, $\notin$, $\subset$, $\supset$, $\cup$, $\cap$, $\emptyset$

$\infty$, $\partial$, $\nabla$, $\propto$, $\approx$, $\equiv$

## Advanced Math Structures

### Summation and Integration

```markdown
<!-- Summation -->
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$$

<!-- Integration -->
$$\int_a^b f(x) dx$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$

$$\iint_D f(x,y) \, dx \, dy$$

$$\iiint_V f(x,y,z) \, dx \, dy \, dz$$

<!-- Limits -->
$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$
```

**Rendered Output:**

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$$

$$\int_a^b f(x) dx$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$

$$\iint_D f(x,y) \, dx \, dy$$

$$\iiint_V f(x,y,z) \, dx \, dy \, dz$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$

### Matrices and Determinants

```markdown
<!-- Basic matrix -->
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$

<!-- Matrix with parentheses -->
$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
$$

<!-- Determinant -->
$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

<!-- System of equations -->
$$
\begin{cases}
x + y = 1 \\
2x - y = 0
\end{cases}
$$

<!-- Large matrix -->
$$
\begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}
$$
```

**Rendered Output:**

$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$

$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
$$

$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

$$
\begin{cases}
x + y = 1 \\
2x - y = 0
\end{cases}
$$

$$
\begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}
$$

### Multi-line Formulas

```markdown
<!-- Aligned multi-line formulas -->
$$
\begin{align}
f(x) &= ax^2 + bx + c \\
&= a(x^2 + \frac{b}{a}x) + c \\
&= a(x + \frac{b}{2a})^2 + c - \frac{b^2}{4a}
\end{align}
$$

<!-- Piecewise cases -->
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$

<!-- Numbered formulas -->
$$
E = mc^2 \tag{1}
$$

$$
F = ma \tag{2}
$$
```

**Rendered Output:**

$$
\begin{align}
f(x) &= ax^2 + bx + c \\
&= a(x^2 + \frac{b}{a}x) + c \\
&= a(x + \frac{b}{2a})^2 + c - \frac{b^2}{4a}
\end{align}
$$

$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$

$$
E = mc^2 \tag{1}
$$

$$
F = ma \tag{2}
$$

## Fonts and Styles

### Math Fonts

```markdown
<!-- Bold -->
$\mathbf{A}$, $\mathbf{x}$, $\boldsymbol{\alpha}$

<!-- Italic (default) -->
$A$, $x$, $\alpha$

<!-- Blackboard bold -->
$\mathbb{R}$, $\mathbb{C}$, $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$

<!-- Calligraphic -->
$\mathcal{A}$, $\mathcal{B}$, $\mathcal{F}$, $\mathcal{L}$

<!-- Script -->
$\mathscr{A}$, $\mathscr{B}$, $\mathscr{F}$, $\mathscr{L}$

<!-- Monospace -->
$\mathtt{text}$, $\mathtt{ABC}$

<!-- Roman -->
$\mathrm{d}x$, $\mathrm{sin}$, $\mathrm{cos}$
```

**Rendered Output:**

$\mathbf{A}$, $\mathbf{x}$, $\boldsymbol{\alpha}$

$A$, $x$, $\alpha$

$\mathbb{R}$, $\mathbb{C}$, $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$

$\mathcal{A}$, $\mathcal{B}$, $\mathcal{F}$, $\mathcal{L}$

$\mathscr{A}$, $\mathscr{B}$, $\mathscr{F}$, $\mathscr{L}$

$\mathtt{text}$, $\mathtt{ABC}$

$\mathrm{d}x$, $\mathrm{sin}$, $\mathrm{cos}$

### Size Control

```markdown
<!-- Different sizes -->
$\tiny{tiny}$ $\small{small}$ $\normalsize{normal}$ $\large{large}$ $\Large{Large}$ $\LARGE{LARGE}$ $\huge{huge}$

<!-- Usage in formulas -->
$$\Large \sum_{i=1}^{n} \small x_i = \normalsize X$$
```

**Rendered Output:**

$\tiny{tiny}$ $\small{small}$ $\normalsize{normal}$ $\large{large}$ $\Large{Large}$ $\LARGE{LARGE}$ $\huge{huge}$

$$\Large \sum_{i=1}^{n} \small x_i = \normalsize X$$

## Special Symbols and Marks

### Arrows

```markdown
<!-- Single arrows -->
$\leftarrow$, $\rightarrow$, $\uparrow$, $\downarrow$

<!-- Double arrows -->
$\leftrightarrow$, $\updownarrow$

<!-- Long arrows -->
$\longleftarrow$, $\longrightarrow$, $\longleftrightarrow$

<!-- Double line arrows -->
$\Leftarrow$, $\Rightarrow$, $\Leftrightarrow$

<!-- Special arrows -->
$\mapsto$, $\to$, $\gets$, $\hookrightarrow$, $\leadsto$
```

**Rendered Output:**

$\leftarrow$, $\rightarrow$, $\uparrow$, $\downarrow$

$\leftrightarrow$, $\updownarrow$

$\longleftarrow$, $\longrightarrow$, $\longleftrightarrow$

$\Leftarrow$, $\Rightarrow$, $\Leftrightarrow$

$\mapsto$, $\to$, $\gets$, $\hookrightarrow$, $\leadsto$

### Superscripts and Decorations

```markdown
<!-- Hat -->
$\hat{a}$, $\widehat{abc}$

<!-- Tilde -->
$\tilde{a}$, $\widetilde{abc}$

<!-- Overline -->
$\bar{a}$, $\overline{abc}$

<!-- Underline -->
$\underline{abc}$

<!-- Vector arrow -->
$\vec{a}$, $\overrightarrow{AB}$

<!-- Dot -->
$\dot{a}$, $\ddot{a}$, $\dddot{a}$
```

**Rendered Output:**

$\hat{a}$, $\widehat{abc}$

$\tilde{a}$, $\widetilde{abc}$

$\bar{a}$, $\overline{abc}$

$\underline{abc}$

$\vec{a}$, $\overrightarrow{AB}$

$\dot{a}$, $\ddot{a}$, $\dddot{a}$

## Complex Formula Examples

### Physics Formulas

```markdown
<!-- Schrödinger equation -->
$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

<!-- Maxwell's equations -->
$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

<!-- Lorentz transformation -->
$$
\begin{pmatrix}
ct' \\
x' \\
y' \\
z'
\end{pmatrix} = 
\begin{pmatrix}
\gamma & -\gamma v/c & 0 & 0 \\
-\gamma v/c & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
ct \\
x \\
y \\
z
\end{pmatrix}
$$
```

**Rendered Output:**

$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

$$
\begin{pmatrix}
ct' \\
x' \\
y' \\
z'
\end{pmatrix} = 
\begin{pmatrix}
\gamma & -\gamma v/c & 0 & 0 \\
-\gamma v/c & \gamma & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
ct \\
x \\
y \\
z
\end{pmatrix}
$$

### Mathematical Theorems

```markdown
<!-- Fourier transform -->
$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

<!-- Taylor expansion -->
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

<!-- Euler's formula -->
$$e^{i\theta} = \cos\theta + i\sin\theta$$

<!-- Gaussian integral -->
$$\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}} \quad (a > 0)$$

<!-- Bayes' theorem -->
$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$
```

**Rendered Output:**

$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

$$e^{i\theta} = \cos\theta + i\sin\theta$$

$$\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}} \quad (a > 0)$$

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

### Algorithm Complexity

```markdown
<!-- Time complexity -->
$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

<!-- Recurrence relation -->
$$T(n) = \begin{cases}
1 & \text{if } n = 1 \\
2T(n/2) + O(n) & \text{if } n > 1
\end{cases}$$

<!-- Master theorem -->
$$T(n) = aT(n/b) + f(n)$$
Where $a \geq 1$, $b > 1$, $f(n)$ is an asymptotically positive function.
```

**Rendered Output:**

$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

$$T(n) = \begin{cases}
1 & \text{if } n = 1 \\
2T(n/2) + O(n) & \text{if } n > 1
\end{cases}$$

$$T(n) = aT(n/b) + f(n)$$
Where $a \geq 1$, $b > 1$, $f(n)$ is an asymptotically positive function.

## Best Practices for Math Formulas

### Writing Suggestions

```markdown
✅ Recommended:

1. **Use semantic commands**:
   - Use `\sin`, `\cos`, `\log` instead of `sin`, `cos`, `log`
   - Use `\mathrm{d}x` for differentials

2. **Keep spacing reasonable**:
   - Add appropriate spaces around operators: `\,` (thin space), `\;` (medium space), `\quad` (large space)

3. **Use matching brackets**:
   - Auto-size: `\left(\right)`, `\left[\right]`, `\left\{\right\}`

4. **Align formulas**:
   - Use the `align` environment to align equal signs
   - Use `&` to mark alignment points

❌ Avoid:

1. Not breaking long formulas into lines
2. Missing necessary brackets
3. Inconsistent symbol usage
4. Ignoring syntax error checks
```

### Common Error Corrections

```markdown
<!-- ❌ Incorrect -->
$sin(x)$, $log(x)$, $max(a,b)$

<!-- ✅ Correct -->
$\sin(x)$, $\log(x)$, $\max(a,b)$

<!-- ❌ Incorrect -->
$(\frac{a}{b})$

<!-- ✅ Correct -->
$\left(\frac{a}{b}\right)$

<!-- ❌ Incorrect -->
$x=1+2+3+...+n$

<!-- ✅ Correct -->
$x = 1 + 2 + 3 + \cdots + n$
```

### Accessibility Considerations

```markdown
To improve formula accessibility:

1. **Add text descriptions**:
   $$E = mc^2$$
   > This is Einstein's mass-energy equation, meaning energy equals mass times the speed of light squared.

2. **Use alternative text**:
   Add simplified explanations after complex formulas

3. **Avoid using color alone for distinction**:
   Use different symbols or styles to distinguish concepts

4. **Keep formulas concise**:
   Break complex formulas into multiple steps
```

## Supported Math Environments

### Markdown Processor Support

| Processor | Math Support | Syntax | Configuration |
|-----------|-------------|--------|---------------|
| **GitHub** | ✅ | `$...$`, `$$...$$` | Automatic |
| **GitLab** | ✅ | `$...$`, `$$...$$` | Needs to be enabled |
| **VitePress** | ✅ | `$...$`, `$$...$$` | Plugin config |
| **Jekyll** | ✅ | `$...$`, `$$...$$` | MathJax/KaTeX |
| **Hugo** | ✅ | `$...$`, `$$...$$` | Theme support |

### VitePress Configuration Example

```javascript
// .vitepress/config.js
export default {
  markdown: {
    math: true
  }
}
```

### Rendering Engines

```markdown
Common math formula rendering engines:

1. **MathJax**:
   - Most complete, supports full LaTeX
   - High rendering quality, but slower loading

2. **KaTeX**:
   - Fast rendering
   - Supports common math syntax
   - Smaller size

3. **MathML**:
   - Native browser support
   - Complex syntax, usually auto-generated
```

## Related Syntax

- [HTML Embedding](/advanced/html) - HTML enhancements
- [Diagrams](/advanced/diagrams) - Chart drawing
- [Best Practices](/advanced/best-practices) - Writing recommendations

## Tools and Resources

### Online Editors

- **LaTeX Live**: Real-time preview of LaTeX formulas
- **MathJax Demo**: Test MathJax rendering
- **KaTeX Demo**: KaTeX formula testing
- **Desmos**: Graphical math expressions

### Formula Editing Tools

- **MathType**: Professional math formula editor
- **LaTeX Workshop** (VS Code): LaTeX writing plugin
- **MathQuill**: Visual math editor
- **Wiris**: Online math formula editor

### Reference Resources

- **LaTeX Math Symbols**: Math symbol reference table
- **Detexify**: Handwritten LaTeX symbol recognition
- **MathJax Documentation**: Official documentation
- **KaTeX Supported Functions**: Supported function list

By mastering math formula syntax, you can elegantly express complex mathematical concepts and formulas in technical documentation. 