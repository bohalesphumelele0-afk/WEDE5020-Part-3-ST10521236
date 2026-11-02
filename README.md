# Ubuntu Youth Foundation Website

**Module:** Web Development (Introduction) – WEDE5020
**Student:** Sphumelele Sibusiso Bohale
**Student number:** ST10521236
**Repository:** _(paste your GitHub repository link here)_

---

## 1. About the Project

The Ubuntu Youth Foundation is a non-profit organisation that was established in 2015 to support
disadvantaged youth in Gauteng through mentorship, skills training and community projects. The
organisation works with young people between the ages of 15 and 25, together with the educators,
sponsors and volunteers who make the programs possible.

This website was built as the Portfolio of Evidence for WEDE5020. It gives the foundation an online
presence where visitors can read about the organisation, browse the programs on offer, sign up as a
volunteer or sponsor, and get in touch with either office.

### Website Goals and Objectives

- Increase awareness of the foundation's programs among youth, educators and sponsors.
- Attract volunteers and sponsors through a simple enquiry form.
- Provide clear contact details and office locations for the public.
- Build credibility for the foundation with a professional and consistent online presence.

---

## 2. Website Structure

| Page | File | Purpose |
|------|------|---------|
| Home | `index.html` | Hero banner, welcome message, summary of what the foundation does |
| About Us | `about.html` | History, mission, vision and the team behind the foundation |
| Programs | `programs.html` | Mentorship, skills training and community projects |
| Volunteer | `enquiry.html` | Volunteer/sponsor enquiry form and success stories |
| Contact | `contact.html` | Office details, message form and Google Map embed |

### File Structure

```
ubuntu-youth-foundation/
├── index.html
├── about.html
├── programs.html
├── enquiry.html
├── contact.html
├── css/
│   └── style.css
├── images/
│   ├── logo.png
│   ├── mentoring-140.jpg
│   ├── mentoring-220.jpg
│   ├── mentoring-331.jpg
│   ├── workshop-210.jpg
│   └── workshop-324.jpg
├── screenshots/
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
└── README.md
```

---

## 3. Part 2 – CSS Styling and Responsive Design

Part 2 focused on the visual design of the website. All five pages are now linked to one external
stylesheet (`css/style.css`), so the whole site shares one visual identity. No inline or internal
styles are used anywhere in the project.

### 3.1 External Stylesheet

The stylesheet is divided into numbered sections with comments (reset, variables, base styles,
layout helpers, buttons, header, hero, cards, forms, footer, media queries) so that it is easy to
follow and maintain. CSS custom properties (variables) are declared once in `:root` and reused
throughout the file, which keeps the number of selectors down and makes the colour scheme easy to
change in one place.

### 3.2 Colour Scheme

The colours follow the warm orange and teal scheme that was approved in the Part 1 proposal.

| Variable | Hex | Used for |
|----------|-----|----------|
| `--teal-dark` | `#0f4d4a` | Footer, call-to-action band, headings, avatars |
| `--teal` | `#17726c` | Card accents, focus states, borders |
| `--teal-tint` | `#e6f1ef` | Hero background, testimonial panel, hover states |
| `--orange` | `#b4520e` | Buttons and active navigation link |
| `--orange-bright` | `#e8811f` | Decorative borders, underlines, hover accents |
| `--ink` | `#1d2b29` | Heading text |
| `--body-text` | `#4c5a58` | Body text |
| `--page` | `#f5faf9` | Alternating section backgrounds |

Text and background combinations were checked so that the contrast stays readable, and the orange is
used as an accent rather than for long passages of text.

### 3.3 Typography

- **Headings:** Nunito (imported from Google Fonts), with `Segoe UI` and Tahoma as fallbacks.
- **Body text:** `Segoe UI` as proposed in Part 1, with Tahoma, Geneva and Verdana as fallbacks.
- A type scale is applied using `rem` units: `h1` 2.5rem, `h2` 1.85rem, `h3` 1.15rem, body 1rem.
- `line-height` of 1.65 on body text and 1.2 on headings, plus a small negative `letter-spacing` on
  headings, keeps the text comfortable to read.
- Paragraph width is limited with `max-width` (for example `60ch`) so that lines do not become too
  long to read on wide screens.

### 3.4 Layout

- **Flexbox** is used for the header bar, the navigation list and the hero buttons.
- **CSS Grid** is used for the hero split layout, the highlight cards, the programs, the team
  members, the mission/vision panels, the form layouts and the footer columns.
- Spacing is handled with consistent padding and `gap` values instead of manual margins on every
  element.

### 3.5 Interactive States (Pseudo-classes)

| Element | `:hover` | `:focus` | `:active` |
|---------|----------|----------|-----------|
| Navigation links | Tinted background and colour change | Orange outline | Dark teal background |
| Buttons | Darker background | Teal outline offset from the button | Button shifts down 2px |
| Form fields | Border changes to teal | Teal border with a soft glow | – |
| Cards / programs | Shadow appears, accent colour changes, card lifts | – | – |
| Footer and contact links | Colour change and underline | Visible outline | – |

Focus states were kept visible (rather than removed) so that the site can still be navigated with a
keyboard.

### 3.6 Responsive Design

| Breakpoint | Screen | What changes |
|-----------|--------|--------------|
| Default | Desktop (above 992px) | Multi-column grids, horizontal navigation, split hero |
| `max-width: 992px` | Tablet | Root font size drops to 95%, navigation wraps and centres under the logo, hero and about sections become single column, three-column grids become two columns, form layouts stack, map height reduces |
| `max-width: 600px` | Mobile | Root font size drops to 90%, headings scale down, navigation becomes a full-width stacked menu, every grid becomes a single column, buttons become full width, hero image scales to 82% and the decorative ring is hidden, map height reduces again |

Relative units are used throughout: `rem` for font sizes and spacing, `%` for widths, `ch` for line
length and `vw` inside the `sizes` attribute of the responsive images.

**Responsive images:** the hero and about images use the `srcset` and `sizes` attributes so that the
browser can download a smaller file on smaller screens. Every image also inherits
`max-width: 100%; height: auto;` from the CSS reset, so no image overflows its container.

```html
<img src="images/mentoring-331.jpg"
     srcset="images/mentoring-140.jpg 140w, images/mentoring-220.jpg 220w, images/mentoring-331.jpg 331w"
     sizes="(max-width: 600px) 80vw, (max-width: 992px) 45vw, 330px"
     alt="A mentor helping a young learner during a creative workshop">
```

---

## 4. Testing Evidence

The website was tested in Google Chrome using the browser Developer Tools (F12 → Toggle device
toolbar) at the following screen sizes:

- **Desktop:** 1440 × 900
- **Tablet:** iPad Air (820 × 1180)
- **Mobile:** iPhone SE (375 × 667)

### Desktop View

![Desktop view of the home page](screenshots/desktop.png)

### Tablet View

![Tablet view of the home page](screenshots/tablet.png)

### Mobile View

![Mobile view of the home page](screenshots/mobile.png)

The layout adjusts at each breakpoint: the navigation changes from a horizontal menu to a centred
wrapped menu and then to a stacked menu, the multi-column grids collapse to a single column, and the
images scale down without overflowing the page.

---

## 5. How to View the Website

1. Download or clone the repository.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or right-click it and choose **Open with Live Server**.

An internet connection is recommended the first time, so that the Google Font and the Google Map
embed can load. The site still works without them because fallback fonts are specified.

---

## 6. Changelog

### Part 2 – 17 September 2026

**Corrections based on Part 1 feedback**

| # | Change | Reason |
|---|--------|--------|
| 1 | Removed the `<script src="js/script.js">` reference from `index.html` | The file did not exist in the repository, so the browser returned a 404 error. JavaScript will be added properly in Part 3. |
| 2 | Moved the hero section inside the `<main>` element on `index.html` | The hero was sitting outside `<main>`, which broke the semantic structure of the page. |
| 3 | Added `<meta name="description">` and `<meta name="author">` to all five pages | Improves SEO and identifies the author of the work. |
| 4 | Added a favicon link to all five pages | The site had no favicon in Part 1. |
| 5 | Added images with descriptive `alt` text | Part 1 had no images at all, so the pages had no visual content. |
| 6 | Converted the email address and phone number into `mailto:` and `tel:` links | Visitors can now contact the foundation in one click instead of copying the details. |
| 7 | Added a `title` attribute to the Google Map `<iframe>` | Screen readers had no way of describing the embedded map. |
| 8 | Removed inline `width`, `height` and `style` attributes from the map `<iframe>` | Presentation belongs in the external stylesheet, not in the HTML. |
| 9 | Replaced the plain paragraph testimonials with `<blockquote>` and `<cite>` elements | More appropriate semantic HTML for quoted material. |
| 10 | Wrapped form controls in `<div class="field">` and marked the message fields as `required` | Improves the layout and the validation of both forms. |
| 11 | Escaped the ampersand in "Founder &amp; Director" and added `aria-label` to the navigation | Corrects invalid HTML characters and improves accessibility. |
| 12 | _(Add any other point your lecturer raised in the Part 1 feedback here)_ | |

**New work for Part 2**

- Created the external stylesheet `css/style.css` and linked it to all five pages.
- Added a CSS reset and a set of default styles (font family, font size, colours, spacing).
- Defined the colour palette and font stacks as CSS variables in `:root`.
- Applied a full typography scale using relative units.
- Built the desktop layout with CSS Grid and Flexbox, including a new split hero section.
- Styled the header, navigation, buttons, cards, programs, forms, testimonials, map and footer.
- Added `:hover`, `:focus` and `:active` states to navigation links, buttons, cards and form fields.
- Added a call-to-action band to the home and programs pages.
- Added a tablet breakpoint at 992px and a mobile breakpoint at 600px.
- Added responsive images with `srcset` and `sizes`, plus a `prefers-reduced-motion` media query.
- Added responsive testing screenshots and updated this README.

### Part 1 – _(add your original Part 1 date)_

- Created the website proposal and the sitemap.
- Built the HTML structure for all five pages.
- Added the organisation content, navigation, contact form and enquiry form.
- Set up the GitHub repository, README and initial changelog.

---

## 7. Media Used

| File | Description | Source |
|------|-------------|--------|
| `images/logo.png` | Foundation logo used in the header and as the favicon | _(confirm the source of this file)_ |
| `images/mentoring-*.jpg` | Mentor and learner during a creative activity | _(confirm the source and licence of this photo)_ |
| `images/workshop-*.jpg` | Learners taking part in a hands-on workshop | _(confirm the source and licence of this photo)_ |

---
[Ubuntu Youth] Part 3

Overview

Ubuntu Youth is a community driven website aimed at empowering youth through mentoring, skills development and volunteering. This project was created as part of the Web Development (WEDE5020) module.

index.html

Home page with main objectives, recent activity and objectives.

about.html

Ubuntu Youth background, vision and team.

programs.html

All the mentorship programs available to youth including a live search tool.

enquiry.html

Interactive enquiry form with live generated responses via JavaScript.

contact.html

A general contact form with form validation via JavaScript.

robots.txt & sitemap.xml

SEO crawler guidelines.

Changelog Part 3

Part 2 Changes based on feedback

Header, Footer & Spacing

Improved styling by making headers, footers and spacing consistent throughout the website using CSS (css/style.css).

Improved HTML

Changed repeated div tags to more semantic tags to improve accessibility. Tags used include , , ,  and .

Form

Improved form by adding labels with for attributes. All forms on the contact.html & enquiry.html have been labelled.

Image Alt Tags

Updated images so that all alt tags were present and complete.

Part 3

JavaScript form validation

Added form validation in contact.html & enquiry.html using JavaScript (js/script.js) to ensure users have entered information in the form and have a valid e-mail address.

Custom JavaScript

Added custom JavaScript to enquiry.html to generate dynamic responses based on what the user inputs. If the user chooses to volunteer, sponsor or general enquiry a dynamic response will be generated.

Live filtering

Added a filter script to programs.html which allows users to filter the youth programs.

SEO

Added robots.txt & sitemap.xml to the root of the project. All pages have unique title tags, meta name="description" and meta name="keywords".

Deployment

Fully deployed the repository.

SEO

All pages have meta descriptions with keywords related to youth development in South Africa.

Headings have been used to help parse the page. Pages are structured with h1, h2 & h3 headings.

Images have alt text.

Robots.txt has been added to point to the sitemap.xml.


Mozilla Developer Network (MDN) (2026). JavaScript Guide: Client-side form validation. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed: October 2026].

OpenStreetMap Contributors (2026). OpenStreetMap. [online] Available at: https://www.openstreetmap.org/ [Accessed: October 2026].

The Independent Institute of Education (Pty) Ltd (2026). WEDE5020 Module Manual & POE Guidelines. IIE: Johannesburg.

World Wide Web Consortium (2026). HTML5 Accessibility. [online] Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ [Accessed: October 2026].

## 8. References

The Independent Institute of Education. 2026. *Web Development (Introduction) WEDE5020 Module Manual*. Johannesburg: The IIE.

Mozilla Developer Network. 2026. *CSS: Cascading Style Sheets*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 17 September 2026].

Mozilla Developer Network. 2026. *The Image Embed element (img)*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img [Accessed 17 September 2026].

Mozilla Developer Network. 2026. *Using media queries*. [Online]. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 17 September 2026].

CSS-Tricks. 2026. *A Complete Guide to Flexbox*. [Online]. Available at: https://css-tricks.com/snippets/css/a-guide-to-flexbox/ [Accessed 17 September 2026].

CSS-Tricks. 2026. *A Complete Guide to CSS Grid*. [Online]. Available at: https://css-tricks.com/snippets/css/complete-guide-grid/ [Accessed 17 September 2026].

W3Schools. 2026. *CSS Responsive Web Design*. [Online]. Available at: https://www.w3schools.com/css/css_rwd_intro.asp [Accessed 17 September 2026].

Google Fonts. 2026. *Nunito*. [Online]. Available at: https://fonts.google.com/specimen/Nunito [Accessed 17 September 2026].

Nielsen Norman Group. 2025. *Web design usability principles*. [Online]. Available at: https://www.nngroup.com/ [Accessed 17 September 2026].

_(Keep any other references you used in Part 1 and add the source of your images here.)_

Mozilla Developer Network (MDN) (2026). JavaScript Guide: Client-side form validation. [online] Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation [Accessed: October 2026].

OpenStreetMap Contributors (2026). OpenStreetMap. [online] Available at: https://www.openstreetmap.org/ [Accessed: October 2026].

The Independent Institute of Education (Pty) Ltd (2026). WEDE5020 Module Manual & POE Guidelines. IIE: Johannesburg.

World Wide Web Consortium (2026). HTML5 Accessibility. [online] Available at: https://www.w3.org/WAI/standards-guidelines/wcag/ [Accessed: October 2026].
