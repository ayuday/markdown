---
title: Markdown Table, Markdown Table Syntax
keywords: Markdown Table, Markdown Table Syntax, Markdown Table Syntax
description: Detailed explanation of Markdown Table syntax, alignment, formatting, and complex table applications.
---

# Markdown Table Syntax

Tables are an important part of Markdown's extended syntax, used to display data in a structured way.

## Basic Table Syntax

### Simple Table

Use the pipe `|` to separate columns and `-` to create the header separator row:

```markdown
| Name  | Age | Occupation |
|-------|-----|------------|
| Zhang | 25  | Engineer   |
| Li    | 30  | Designer   |
| Wang  | 28  | Product Manager |
```

**Rendered Output:**

| Name  | Age | Occupation |
|-------|-----|------------|
| Zhang | 25  | Engineer   |
| Li    | 30  | Designer   |
| Wang  | 28  | Product Manager |

### Table Alignment

Use colons `:` to control column alignment:

```markdown
| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Content 1  | Content 1    | Content 1   |
| Content 2  | Content 2    | Content 2   |
| Content 3  | Content 3    | Content 3   |
```

**Rendered Output:**

| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| Content 1  | Content 1    | Content 1   |
| Content 2  | Content 2    | Content 2   |
| Content 3  | Content 3    | Content 3   |

## Alignment Details

### Alignment Syntax

| Syntax | Alignment | Example |
|--------|-----------|---------|
| `---`  | Left (default) | `|:------` |
| `:--:` | Center         | `|:-----:` |
| `--:`  | Right          | `|------:` |

### Numeric Data Tables

Right alignment is suitable for displaying numbers:

```markdown
| Product | Price | Sales | Revenue |
|:--------|------:|------:|--------:|
| A       | ¥99   | 1,250 | ¥123,750|
| B       | ¥199  | 856   | ¥170,344|
| C       | ¥299  | 432   | ¥129,168|
| **Total** |      | **2,538** | **¥423,262** |
```

**Rendered Output:**

| Product | Price | Sales | Revenue |
|:--------|------:|------:|--------:|
| A       | ¥99   | 1,250 | ¥123,750|
| B       | ¥199  | 856   | ¥170,344|
| C       | ¥299  | 432   | ¥129,168|
| **Total** |      | **2,538** | **¥423,262** |

## Formatting in Tables

### Inline Formatting

Table cells support Markdown inline formatting:

```markdown
| Feature      | Status      | Description                |
|-------------|-------------|----------------------------|
| **Login**   | ✅ Done     | Users can log in via email |
| *Register*  | 🚧 In Progress | Third-party registration supported |
| `Reset Password` | ❌ To Do | Reset password via email   |
| [User Center](/) | ⏳ Planned | User information management |
```

**Rendered Output:**

| Feature      | Status      | Description                |
|-------------|-------------|----------------------------|
| **Login**   | ✅ Done     | Users can log in via email |
| *Register*  | 🚧 In Progress | Third-party registration supported |
| `Reset Password` | ❌ To Do | Reset password via email   |
| [User Center](/) | ⏳ Planned | User information management |

### Code in Tables

```markdown
| Command | Function      | Example           |
|---------|--------------|-------------------|
| `ls`    | List files   | `ls -la`          |
| `cd`    | Change dir   | `cd /home/user`   |
| `mkdir` | Make dir     | `mkdir new-folder`|
| `rm`    | Remove files | `rm -rf folder/`  |
```

**Rendered Output:**

| Command | Function      | Example           |
|---------|--------------|-------------------|
| `ls`    | List files   | `ls -la`          |
| `cd`    | Change dir   | `cd /home/user`   |
| `mkdir` | Make dir     | `mkdir new-folder`|
| `rm`    | Remove files | `rm -rf folder/`  |

## Complex Table Examples

### Technology Comparison Table

```markdown
| Feature         | React | Vue | Angular |
|:---------------|:-----:|:---:|:-------:|
| **Learning Curve** | Medium | Easy | Hard |
| **Performance**    | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Ecosystem**      | Rich  | Good | Complete |
| **Enterprise Support** | Facebook | Independent | Google |
| **TypeScript**     | ✅    | ✅   | ✅ Built-in |
| **Community Activity** | Very High | High | Medium |
```

**Rendered Output:**

| Feature         | React | Vue | Angular |
|:---------------|:-----:|:---:|:-------:|
| **Learning Curve** | Medium | Easy | Hard |
| **Performance**    | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Ecosystem**      | Rich  | Good | Complete |
| **Enterprise Support** | Facebook | Independent | Google |
| **TypeScript**     | ✅    | ✅   | ✅ Built-in |
| **Community Activity** | Very High | High | Medium |

### API Documentation Table

```markdown
| Parameter | Type     | Required | Default   | Description                |
|-----------|----------|:--------:|-----------|----------------------------|
| `id`      | `number` | ✅       | -         | Unique user identifier     |
| `name`    | `string` | ✅       | -         | User name                  |
| `email`   | `string` | ✅       | -         | User email address         |
| `age`     | `number` | ❌       | `null`    | User age                   |
| `avatar`  | `string` | ❌       | `"/default.jpg"` | Avatar URL         |
| `status`  | `enum`   | ❌       | `"active"` | Account status: `active` \| `inactive` |
```

**Rendered Output:**

| Parameter | Type     | Required | Default   | Description                |
|-----------|----------|:--------:|-----------|----------------------------|
| `id`      | `number` | ✅       | -         | Unique user identifier     |
| `name`    | `string` | ✅       | -         | User name                  |
| `email`   | `string` | ✅       | -         | User email address         |
| `age`     | `number` | ❌       | `null`    | User age                   |
| `avatar`  | `string` | ❌       | `"/default.jpg"` | Avatar URL         |
| `status`  | `enum`   | ❌       | `"active"` | Account status: `active` \| `inactive` |

## Table Formatting Tips

### Using Emoji

```markdown
| OS      | Support | Note      |
|---------|:-------:|-----------|
| Windows | ✅      | Full support |
| macOS   | ✅      | Full support |
| Linux   | ⚠️      | Partial support |
| iOS     | ❌      | Not supported |
| Android | 🚧      | In development |
```

**Rendered Output:**

| OS      | Support | Note      |
|---------|:-------:|-----------|
| Windows | ✅      | Full support |
| macOS   | ✅      | Full support |
| Linux   | ⚠️      | Partial support |
| iOS     | ❌      | Not supported |
| Android | 🚧      | In development |

### Using Badges

```markdown
| Project | Status | Version |
|---------|--------|---------|
| React   | ![Stable](https://img.shields.io/badge/status-stable-green) | `v18.2.0` |
| Vue     | ![Stable](https://img.shields.io/badge/status-stable-green) | `v3.3.0`  |
| Angular | ![Beta](https://img.shields.io/badge/status-beta-orange)    | `v16.0.0` |
```

## Handling Empty Cells

### Empty Content Representation

```markdown
| Item | Q1   | Q2   | Q3   | Q4   |
|------|:----:|:----:|:----:|:----:|
| Revenue | 1M   | 1.2M | -    | -    |
| Expense | 800K | 900K | 950K | -    |
| Profit  | 200K | 300K |      |      |
```

**Rendered Output:**

| Item | Q1   | Q2   | Q3   | Q4   |
|------|:----:|:----:|:----:|:----:|
| Revenue | 1M   | 1.2M | -    | -    |
| Expense | 800K | 900K | 950K | -    |
| Profit  | 200K | 300K |      |      |

## Common Errors and Solutions

### 1. Misaligned Pipes

```markdown
❌ Incorrect:
| Name | Age|Occupation|
|------|----|----------|
|Zhang|25|Engineer|

✅ Correct:
| Name | Age | Occupation |
|------|-----|------------|
| Zhang | 25  | Engineer   |
```

### 2. Missing Separator Row

```markdown
❌ Incorrect:
| Name | Age | Occupation |
| Zhang | 25 | Engineer |

✅ Correct:
| Name | Age | Occupation |
|------|-----|------------|
| Zhang | 25  | Engineer   |
```

### 3. Column Count Mismatch

```markdown
❌ Incorrect:
| Name | Age | Occupation |
|------|-----|------------|
| Zhang | 25 |  ← Missing third column

✅ Correct:
| Name | Age | Occupation |
|------|-----|------------|
| Zhang | 25  | Engineer   |
```

### 4. Special Character Handling

```markdown
❌ Problem:
| Price | Description |
|-------|-------------|
| $100|tax included |  ← Pipe misused

✅ Solution:
| Price | Description |
|-------|-------------|
| $100 | tax included |
| $200 | Price\|tax included |  ← Escape the pipe
```

## Advanced Table Features

### Enhancing with HTML

```markdown
<table>
  <tr>
    <th colspan="2">Merged Column Header</th>
    <th>Normal Column</th>
  </tr>
  <tr>
    <td rowspan="2">Merged Row</td>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</table>
```

**Rendered Output:**

<table>
  <tr>
    <th colspan="2">Merged Column Header</th>
    <th>Normal Column</th>
  </tr>
  <tr>
    <td rowspan="2">Merged Row</td>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</table>

### Custom Table Styles

```markdown
<table style="width: 100%; border-collapse: collapse;">
  <tr style="background-color: #f0f0f0;">
    <th style="border: 1px solid #ddd; padding: 8px;">Product</th>
    <th style="border: 1px solid #ddd; padding: 8px;">Price</th>
  </tr>
  <tr>
    <td style="border: 1px solid #ddd; padding: 8px;">A</td>
    <td style="border: 1px solid #ddd; padding: 8px; color: red;">¥99</td>
  </tr>
</table>
```

## Practical Application Scenarios

### 1. Project Management

```markdown
## Task Progress Table

| Task | Owner | Start Date | End Date | Status | Completion |
|------|-------|------------|----------|:------:|:----------:|
| Requirement Analysis | Zhang | 2023-10-01 | 2023-10-07 | ✅ | 100% |
| UI Design | Li | 2023-10-08 | 2023-10-15 | 🚧 | 75% |
| Frontend Dev | Wang | 2023-10-16 | 2023-10-30 | ⏳ | 0% |
| Backend Dev | Zhao | 2023-10-16 | 2023-11-05 | ⏳ | 0% |
| Testing | Sun | 2023-11-06 | 2023-11-12 | ⏳ | 0% |
```

### 2. Product Comparison

```markdown
## Subscription Plan Comparison

| Feature | Free | Pro | Enterprise |
|---------|:----:|:---:|:----------:|
| **User Limit** | 5 | 50 | Unlimited |
| **Storage** | 1GB | 100GB | 1TB |
| **API Calls** | 1000/mo | 100k/mo | Unlimited |
| **Support** | Community | Email | Dedicated |
| **SLA** | - | 99.9% | 99.99% |
| **Price** | Free | ¥99/mo | ¥999/mo |
| | [Choose](/) | [Choose](/) | [Contact Sales](/) |
```

### 3. Financial Report

```markdown
## Monthly Financial Report

| Item | Jan | Feb | Mar | Total |
|------|-----:|-----:|-----:|------:|
| **Income** |     |     |     |      |
| Product Sales | 50,000 | 55,000 | 60,000 | 165,000 |
| Service Income | 20,000 | 22,000 | 25,000 | 67,000 |
| Other Income | 2,000 | 1,500 | 3,000 | 6,500 |
| *Subtotal* | *72,000* | *78,500* | *88,000* | *238,500* |
| **Expense** |     |     |     |      |
| Salaries | 30,000 | 30,000 | 30,000 | 90,000 |
| Office Rent | 8,000 | 8,000 | 8,000 | 24,000 |
| Marketing | 10,000 | 12,000 | 15,000 | 37,000 |
| *Subtotal* | *48,000* | *50,000* | *53,000* | *151,000* |
| **Net Profit** | **24,000** | **28,500** | **35,000** | **87,500** |
```

## Best Practices

### 1. Keep It Simple

```markdown
✅ Recommended: Simple and clear
| Item | Status |
|------|--------|
| A    | Done   |
| B    | In Progress |

❌ Not recommended: Information overload
| Project Name | Current Status | Detailed Description | Owner | Start Date | End Date | Notes |
```

### 2. Use Meaningful Headers

```markdown
✅ Recommended: Descriptive headers
| Programming Language | Difficulty | Application |

❌ Not recommended: Vague headers
| Item1 | Item2 | Item3 |
```

### 3. Use Alignment Appropriately

```markdown
✅ Recommended: Numbers right-aligned
| Product | Price | Quantity |
|:--------|------:|--------:|
| A       | ¥100  | 50      |

✅ Recommended: Text left-aligned
| Name | Department | Position |
|:-----|:-----------|:--------|
| Zhang | Tech      | Engineer |
```

## HTML Output

Markdown tables are converted to HTML:

```markdown
| Name | Age |
|------|-----|
| Zhang | 25 |
```

Becomes:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Zhang</td>
      <td>25</td>
    </tr>
  </tbody>
</table>
```

## Related Syntax

- [Basic Syntax Overview](/basic/overview) - Markdown basics
- [Extended Syntax Overview](/extended/) - More extensions
- [HTML Syntax](/advanced/html) - HTML enhancements

## Practice

Try creating the following tables:

1. A team member introduction table
2. A product price comparison table
3. A project progress tracking table
4. A tech stack evaluation table

## Recommended Tools

### Table Generators

- **Online tools**: Tables Generator, Markdown Tables Generator
- **Editor plugins**: VS Code Markdown Table, Typora Table Editing
- **Conversion tools**: Excel to Markdown, CSV to Markdown

### Table Beautification

- **CSS frameworks**: Bootstrap, Tailwind CSS
- **Table libraries**: DataTables, AG Grid
- **Markdown extensions**: markdown-it-table, remark-gfm 