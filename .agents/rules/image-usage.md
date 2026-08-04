# IMAGE USAGE RULES

## HERO IMAGE (`01_hero_image.png`)
**Use only on:**
- Homepage Hero
- Event Landing Page
- Registration Success Page

**Placement:**
- Right side of Hero section.
- Leave the left side completely free for headings, description and CTA buttons.
- Never crop the children's faces.
- Maintain the full robot in view whenever possible.

---

## ROBOT MASCOT (`09_robot_mascot.png`)
**Use on:**
- About section
- Features section
- FAQ
- Contact section
- Registration sidebar
- Empty states
- 404 page
- Dashboard illustrations

**Never use as the Hero image.**

---

## ROBOTICS CLASSROOM IMAGE (`03_curriculum_image.png`)
**Use on:**
- Curriculum
- About Programme
- Gallery Preview
- Learning Experience

**Do not use on Contact or Footer.**

---

## AI LEARNING IMAGE (`04_ai_learning.png`)
**Use only when discussing:**
- Artificial Intelligence
- Machine Learning
- Technology
- Future Skills
- Innovation

**Never use for Registration.**

---

## CODING IMAGE (`06_coding.png`)
**Use in:**
- Coding Module
- Curriculum
- Student Projects
- Programming lessons
- Dashboard analytics

---

## ROBOTICS KIT IMAGE (`05_robotics_kit.png`)
**Use in:**
- Equipment
- What Students Will Learn
- Resources
- Programme Highlights
- Cards
- Pricing (if applicable)

---

## FACILITATOR IMAGE (`08_facilitator.png`)
**Use on:**
- Meet the Facilitators
- About A&I Tech
- Meet the Team
- Instructor Bio

**Do not use on Hero.**

---

## REGISTRATION BANNER (`02_registration_banner.png`)
**Use only on:**
- Registration Page
- Confirmation Page
- Parent Information
- Welcome Email

---

## GRADUATION IMAGE (`07_graduation.png`)
**Use on:**
- Certificate Page
- Success Page
- Testimonials
- Gallery
- Footer CTA

**Never use before registration.**

---

## CERTIFICATE BACKGROUND (`11_certificate_background.png`)
**Use only for:**
- PDF Certificates
- Certificate Preview
- Verification Page

**Do not use elsewhere.**

---

## HERO BACKGROUND (`10_hero_background.png`)
**Use behind:**
- Hero
- Section headers
- CTA banners

**Avoid repeating it more than twice.**

---

## ICONS (`13_icon_*.png` or Lucide equivalents)
- Use Lucide icons.
- Never generate AI icons.
- Icons should be consistent throughout the website.

---

## SECTION IMAGE MAPPING
- **Homepage Hero**: Hero Image
- **About**: Robot Mascot
- **Curriculum**: Robotics Classroom, AI Learning, Coding, Robotics Kit
- **Registration**: Registration Banner
- **Testimonials**: Graduation
- **Footer**: Robot Mascot
- **Dashboard**: Illustrations only. No large photographs.

---

## RESPONSIVE RULES
- **Desktop**: Large Hero Image.
- **Tablet**: Reduce Hero size.
- **Mobile**: Stack image below the heading. Maintain image quality. Do not crop faces. Keep robots visible.

---

## ACCESSIBILITY
- Provide `alt` text for every image.
- Lazy load all images except the Hero.
- Compress images.
- Use `next/image`.
- Never distort aspect ratio.

---

## TECHNICAL IMPLEMENTATION
- Use `next/image` for every image.
- Optimize all images.
- Convert all JPEG/PNG files to WebP where appropriate.
- Use responsive image sizes.
- Do not use CSS background images for photographs.
- Use `object-cover` for cards.
- Use `object-contain` for logos.
- Use `priority={true}` only for the Homepage Hero image.
- Lazy load every other image.
- Provide descriptive alt text.
- Never hardcode image dimensions.
- Use `aspect-ratio` utilities from Tailwind.
