---
title: Markdown 数学公式指南
description: 详细讲解如何在 Markdown 中插入和渲染 LaTeX 数学公式，适用于学术、技术文档场景。
---

# 数学公式

Markdown 支持通过 LaTeX 语法嵌入数学公式，为技术文档、学术论文和教学材料提供专业的数学表达能力。

## LaTeX 数学语法基础

### 行内公式

使用单个美元符号 `$` 包围公式：

```markdown
这是一个行内公式：$E = mc^2$，它是爱因斯坦的质能方程。

圆的面积公式是 $A = \pi r^2$，其中 $r$ 是半径。

二次方程的解为：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
```

**渲染效果**：

这是一个行内公式：$E = mc^2$，它是爱因斯坦的质能方程。

圆的面积公式是 $A = \pi r^2$，其中 $r$ 是半径。

二次方程的解为：$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

### 块级公式

使用双美元符号 `$$` 包围公式，公式会单独成行并居中显示：

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

**渲染效果**：

$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$

$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

## 基本数学元素

### 上标和下标

```markdown
<!-- 上标 -->
$x^2$, $e^{i\pi}$, $2^{10}$

<!-- 下标 -->
$x_1$, $a_{ij}$, $\log_2 n$

<!-- 组合使用 -->
$x_1^2$, $a_{i,j}^{(k)}$, $\sum_{i=1}^n x_i^2$
```

**渲染效果**：

$x^2$, $e^{i\pi}$, $2^{10}$

$x_1$, $a_{ij}$, $\log_2 n$

$x_1^2$, $a_{i,j}^{(k)}$, $\sum_{i=1}^n x_i^2$

### 分数

```markdown
<!-- 基本分数 -->
$\frac{1}{2}$, $\frac{a}{b}$, $\frac{x+y}{x-y}$

<!-- 连分数 -->
$\frac{1}{1 + \frac{1}{2 + \frac{1}{3 + \cdots}}}$

<!-- 复杂分数 -->
$\frac{\partial^2 f}{\partial x^2}$, $\frac{d}{dx}\left(\frac{1}{x}\right)$
```

**渲染效果**：

$\frac{1}{2}$, $\frac{a}{b}$, $\frac{x+y}{x-y}$

$\frac{1}{1 + \frac{1}{2 + \frac{1}{3 + \cdots}}}$

$\frac{\partial^2 f}{\partial x^2}$, $\frac{d}{dx}\left(\frac{1}{x}\right)$

### 根号

```markdown
<!-- 平方根 -->
$\sqrt{2}$, $\sqrt{x^2 + y^2}$

<!-- n次根 -->
$\sqrt[3]{8}$, $\sqrt[n]{x}$

<!-- 复杂根式 -->
$\sqrt{\frac{a}{b}}$, $\sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}$
```

**渲染效果**：

$\sqrt{2}$, $\sqrt{x^2 + y^2}$

$\sqrt[3]{8}$, $\sqrt[n]{x}$

$\sqrt{\frac{a}{b}}$, $\sqrt{1 + \sqrt{1 + \sqrt{1 + \cdots}}}$

## 符号和运算符

### 希腊字母

```markdown
<!-- 小写希腊字母 -->
$\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$

$\iota$, $\kappa$, $\lambda$, $\mu$, $\nu$, $\xi$, $\pi$, $\rho$

$\sigma$, $\tau$, $\upsilon$, $\phi$, $\chi$, $\psi$, $\omega$

<!-- 大写希腊字母 -->
$\Alpha$, $\Beta$, $\Gamma$, $\Delta$, $\Epsilon$, $\Zeta$, $\Eta$, $\Theta$

$\Lambda$, $\Xi$, $\Pi$, $\Sigma$, $\Phi$, $\Psi$, $\Omega$
```

**渲染效果**：

$\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\zeta$, $\eta$, $\theta$

$\iota$, $\kappa$, $\lambda$, $\mu$, $\nu$, $\xi$, $\pi$, $\rho$

$\sigma$, $\tau$, $\upsilon$, $\phi$, $\chi$, $\psi$, $\omega$

$\Alpha$, $\Beta$, $\Gamma$, $\Delta$, $\Epsilon$, $\Zeta$, $\Eta$, $\Theta$

$\Lambda$, $\Xi$, $\Pi$, $\Sigma$, $\Phi$, $\Psi$, $\Omega$

### 运算符

```markdown
<!-- 基本运算 -->
$+$, $-$, $\times$, $\div$, $\pm$, $\mp$

<!-- 关系运算 -->
$=$, $\neq$, $<$, $>$, $\leq$, $\geq$, $\ll$, $\gg$

<!-- 逻辑运算 -->
$\land$, $\lor$, $\lnot$, $\implies$, $\iff$

<!-- 集合运算 -->
$\in$, $\notin$, $\subset$, $\supset$, $\cup$, $\cap$, $\emptyset$

<!-- 其他符号 -->
$\infty$, $\partial$, $\nabla$, $\propto$, $\approx$, $\equiv$
```

**渲染效果**：

$+$, $-$, $\times$, $\div$, $\pm$, $\mp$

$=$, $\neq$, $<$, $>$, $\leq$, $\geq$, $\ll$, $\gg$

$\land$, $\lor$, $\lnot$, $\implies$, $\iff$

$\in$, $\notin$, $\subset$, $\supset$, $\cup$, $\cap$, $\emptyset$

$\infty$, $\partial$, $\nabla$, $\propto$, $\approx$, $\equiv$

## 高级数学结构

### 求和与积分

```markdown
<!-- 求和 -->
$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$$

<!-- 积分 -->
$$\int_a^b f(x) dx$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$

$$\iint_D f(x,y) \, dx \, dy$$

$$\iiint_V f(x,y,z) \, dx \, dy \, dz$$

<!-- 极限 -->
$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$
```

**渲染效果**：

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{k=0}^{\infty} \frac{x^k}{k!} = e^x$$

$$\int_a^b f(x) dx$$

$$\oint_C \mathbf{F} \cdot d\mathbf{r}$$

$$\iint_D f(x,y) \, dx \, dy$$

$$\iiint_V f(x,y,z) \, dx \, dy \, dz$$

$$\lim_{n \to \infty} \left(1 + \frac{1}{n}\right)^n = e$$

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty$$

### 矩阵和行列式

```markdown
<!-- 基本矩阵 -->
$$
\begin{matrix}
a & b \\
c & d
\end{matrix}
$$

<!-- 带括号的矩阵 -->
$$
\begin{pmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{pmatrix}
$$

<!-- 行列式 -->
$$
\begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc
$$

<!-- 方程组 -->
$$
\begin{cases}
x + y = 1 \\
2x - y = 0
\end{cases}
$$

<!-- 大型矩阵 -->
$$
\begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}
$$
```

**渲染效果**：

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

### 多行公式

```markdown
<!-- 对齐的多行公式 -->
$$
\begin{align}
f(x) &= ax^2 + bx + c \\
&= a(x^2 + \frac{b}{a}x) + c \\
&= a(x + \frac{b}{2a})^2 + c - \frac{b^2}{4a}
\end{align}
$$

<!-- 分情况讨论 -->
$$
f(x) = \begin{cases}
x^2 & \text{if } x \geq 0 \\
-x^2 & \text{if } x < 0
\end{cases}
$$

<!-- 带编号的公式 -->
$$
E = mc^2 \tag{1}
$$

$$
F = ma \tag{2}
$$
```

**渲染效果**：

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

## 字体和样式

### 数学字体

```markdown
<!-- 粗体 -->
$\mathbf{A}$, $\mathbf{x}$, $\boldsymbol{\alpha}$

<!-- 斜体（默认） -->
$A$, $x$, $\alpha$

<!-- 黑板粗体 -->
$\mathbb{R}$, $\mathbb{C}$, $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$

<!-- 花体 -->
$\mathcal{A}$, $\mathcal{B}$, $\mathcal{F}$, $\mathcal{L}$

<!-- 脚本体 -->
$\mathscr{A}$, $\mathscr{B}$, $\mathscr{F}$, $\mathscr{L}$

<!-- 等宽字体 -->
$\mathtt{text}$, $\mathtt{ABC}$

<!-- 罗马体 -->
$\mathrm{d}x$, $\mathrm{sin}$, $\mathrm{cos}$
```

**渲染效果**：

$\mathbf{A}$, $\mathbf{x}$, $\boldsymbol{\alpha}$

$A$, $x$, $\alpha$

$\mathbb{R}$, $\mathbb{C}$, $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$

$\mathcal{A}$, $\mathcal{B}$, $\mathcal{F}$, $\mathcal{L}$

$\mathscr{A}$, $\mathscr{B}$, $\mathscr{F}$, $\mathscr{L}$

$\mathtt{text}$, $\mathtt{ABC}$

$\mathrm{d}x$, $\mathrm{sin}$, $\mathrm{cos}$

### 大小控制

```markdown
<!-- 不同大小 -->
$\tiny{tiny}$ $\small{small}$ $\normalsize{normal}$ $\large{large}$ $\Large{Large}$ $\LARGE{LARGE}$ $\huge{huge}$

<!-- 在公式中的应用 -->
$$\Large \sum_{i=1}^{n} \small x_i = \normalsize X$$
```

**渲染效果**：

$\tiny{tiny}$ $\small{small}$ $\normalsize{normal}$ $\large{large}$ $\Large{Large}$ $\LARGE{LARGE}$ $\huge{huge}$

$$\Large \sum_{i=1}^{n} \small x_i = \normalsize X$$

## 特殊符号和标记

### 箭头

```markdown
<!-- 单向箭头 -->
$\leftarrow$, $\rightarrow$, $\uparrow$, $\downarrow$

<!-- 双向箭头 -->
$\leftrightarrow$, $\updownarrow$

<!-- 长箭头 -->
$\longleftarrow$, $\longrightarrow$, $\longleftrightarrow$

<!-- 双线箭头 -->
$\Leftarrow$, $\Rightarrow$, $\Leftrightarrow$

<!-- 特殊箭头 -->
$\mapsto$, $\to$, $\gets$, $\hookrightarrow$, $\leadsto$
```

**渲染效果**：

$\leftarrow$, $\rightarrow$, $\uparrow$, $\downarrow$

$\leftrightarrow$, $\updownarrow$

$\longleftarrow$, $\longrightarrow$, $\longleftrightarrow$

$\Leftarrow$, $\Rightarrow$, $\Leftrightarrow$

$\mapsto$, $\to$, $\gets$, $\hookrightarrow$, $\leadsto$

### 上标和装饰

```markdown
<!-- 帽子 -->
$\hat{a}$, $\widehat{abc}$

<!-- 波浪线 -->
$\tilde{a}$, $\widetilde{abc}$

<!-- 横线 -->
$\bar{a}$, $\overline{abc}$

<!-- 下划线 -->
$\underline{abc}$

<!-- 向量箭头 -->
$\vec{a}$, $\overrightarrow{AB}$

<!-- 点 -->
$\dot{a}$, $\ddot{a}$, $\dddot{a}$
```

**渲染效果**：

$\hat{a}$, $\widehat{abc}$

$\tilde{a}$, $\widetilde{abc}$

$\bar{a}$, $\overline{abc}$

$\underline{abc}$

$\vec{a}$, $\overrightarrow{AB}$

$\dot{a}$, $\ddot{a}$, $\dddot{a}$

## 复杂公式示例

### 物理公式

```markdown
<!-- 薛定谔方程 -->
$$i\hbar\frac{\partial}{\partial t}\Psi(\mathbf{r},t) = \hat{H}\Psi(\mathbf{r},t)$$

<!-- 麦克斯韦方程组 -->
$$
\begin{align}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\mathbf{J} + \mu_0\epsilon_0\frac{\partial \mathbf{E}}{\partial t}
\end{align}
$$

<!-- 洛伦兹变换 -->
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

**渲染效果**：

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

### 数学定理

```markdown
<!-- 傅里叶变换 -->
$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

<!-- 泰勒展开 -->
$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

<!-- 欧拉公式 -->
$$e^{i\theta} = \cos\theta + i\sin\theta$$

<!-- 高斯积分 -->
$$\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}} \quad (a > 0)$$

<!-- 贝叶斯定理 -->
$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$
```

**渲染效果**：

$$\mathcal{F}\{f(t)\} = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt$$

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x-a)^n$$

$$e^{i\theta} = \cos\theta + i\sin\theta$$

$$\int_{-\infty}^{\infty} e^{-ax^2} dx = \sqrt{\frac{\pi}{a}} \quad (a > 0)$$

$$P(A|B) = \frac{P(B|A)P(A)}{P(B)}$$

### 算法复杂度

```markdown
<!-- 时间复杂度 -->
$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

<!-- 递推关系 -->
$$T(n) = \begin{cases}
1 & \text{if } n = 1 \\
2T(n/2) + O(n) & \text{if } n > 1
\end{cases}$$

<!-- 主定理 -->
$$T(n) = aT(n/b) + f(n)$$
其中，$a \geq 1$，$b > 1$，$f(n)$ 是渐近正函数。
```

**渲染效果**：

$$O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$$

$$T(n) = \begin{cases}
1 & \text{if } n = 1 \\
2T(n/2) + O(n) & \text{if } n > 1
\end{cases}$$

$$T(n) = aT(n/b) + f(n)$$
其中，$a \geq 1$，$b > 1$，$f(n)$ 是渐近正函数。

## 数学公式最佳实践

### 编写建议

```markdown
✅ 推荐做法：

1. **使用语义化命令**：
   - 使用 `\sin`、`\cos`、`\log` 而不是 `sin`、`cos`、`log`
   - 使用 `\mathrm{d}x` 表示微分

2. **保持间距合理**：
   - 在运算符周围添加适当空格：`\,`（小空格）、`\;`（中空格）、`\quad`（大空格）

3. **使用括号匹配**：
   - 自动调整大小：`\left(\right)`、`\left[\right]`、`\left\{\right\}`

4. **公式对齐**：
   - 使用 `align` 环境对齐等号
   - 使用 `&` 标记对齐点

❌ 避免做法：

1. 过长的公式不换行
2. 缺少必要的括号
3. 不一致的符号使用
4. 忽略语法错误检查
```

### 常见错误修正

```markdown
<!-- ❌ 错误写法 -->
$sin(x)$，$log(x)$，$max(a,b)$

<!-- ✅ 正确写法 -->
$\sin(x)$，$\log(x)$，$\max(a,b)$

<!-- ❌ 错误写法 -->
$(\frac{a}{b})$

<!-- ✅ 正确写法 -->
$\left(\frac{a}{b}\right)$

<!-- ❌ 错误写法 -->
$x=1+2+3+...+n$

<!-- ✅ 正确写法 -->
$x = 1 + 2 + 3 + \cdots + n$
```

### 可访问性考虑

```markdown
为了提高公式的可访问性：

1. **添加文字描述**：
   $$E = mc^2$$
   > 这是爱因斯坦的质能方程，表示能量等于质量乘以光速的平方。

2. **使用替代文本**：
   在复杂公式后添加简化说明

3. **避免仅用颜色区分**：
   使用不同的符号或样式来区分概念

4. **保持公式简洁**：
   将复杂公式拆分为多个步骤
```

## 支持的数学环境

### Markdown 处理器支持

| 处理器 | 数学支持 | 语法 | 配置要求 |
|--------|----------|------|----------|
| **GitHub** | ✅ | `$...$`, `$$...$$` | 自动支持 |
| **GitLab** | ✅ | `$...$`, `$$...$$` | 需要启用 |
| **VitePress** | ✅ | `$...$`, `$$...$$` | 插件配置 |
| **Jekyll** | ✅ | `$...$`, `$$...$$` | MathJax/KaTeX |
| **Hugo** | ✅ | `$...$`, `$$...$$` | 主题支持 |

### VitePress 配置示例

```javascript
// .vitepress/config.js
export default {
  markdown: {
    math: true
  }
}
```

### 渲染引擎

```markdown
常用的数学公式渲染引擎：

1. **MathJax**：
   - 功能最完整，支持全套 LaTeX
   - 渲染质量高，但加载较慢

2. **KaTeX**：
   - 渲染速度快
   - 支持常用数学语法
   - 体积较小

3. **MathML**：
   - 原生浏览器支持
   - 语法复杂，通常自动生成
```

## 相关语法

- [嵌入HTML](/zh/advanced/html) - HTML增强功能
- [流程图](/zh/advanced/diagrams) - 图表绘制
- [最佳实践](/zh/advanced/best-practices) - 文档编写建议

## 工具和资源

### 在线编辑器

- **LaTeX Live**: 实时预览LaTeX公式
- **MathJax Demo**: 测试MathJax渲染
- **KaTeX Demo**: KaTeX公式测试
- **Desmos**: 图形化数学表达式

### 公式编辑工具

- **MathType**: 专业数学公式编辑器
- **LaTeX Workshop** (VS Code): LaTeX编写插件
- **MathQuill**: 可视化数学编辑器
- **Wiris**: 在线数学公式编辑器

### 参考资源

- **LaTeX Math Symbols**: 数学符号参考表
- **Detexify**: 手写识别LaTeX符号
- **MathJax Documentation**: 官方文档
- **KaTeX Supported Functions**: 支持的函数列表

通过掌握数学公式语法，您可以在技术文档中优雅地表达复杂的数学概念和公式。 