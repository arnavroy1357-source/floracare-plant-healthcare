# 🌿 FloraCare: Plant Health & Biology Lab

An interactive plant-health education website

FloraCare shows how plant biology and computer science can work together. A user selects the symptoms they see on a plant, and the app gives possible explanations and suggested next steps. It also includes a biology lab, a photosynthesis explorer, a plant care guide and a watering planner.

---

## Important: what FloraCare is (and is not)

- It is a **rule-based system**. A person wrote the rules in JavaScript, such as "if the user selects _yellowing_, suggest checking soil moisture and light".
- It is **not machine learning** and **does not analyse the uploaded photo**. The photo is only shown as a preview for reference.
- Results are **preliminary observations**, not diagnoses. One symptom can have many causes.
- There is no numerical "AI confidence" score, because the app does not calculate one.

---

## Features

| Section                      | What it does                                                                                                          |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Plant Health Scanner**     | Upload a leaf photo (JPG, PNG or WEBP), select symptoms and an optional plant type, then get a combined assessment.   |
| **Sample Cases**             | Three demonstration cases (Yellow Leaf, Spotted Leaf, Wilting Plant) that fill in symptoms automatically.             |
| **Biology Lab**              | Photosynthesis, chlorophyll, transpiration and plant stress, with a labelled plant diagram.                           |
| **Photosynthesis Explorer**  | Change light, water and CO₂ to see which factor may be limiting. It is qualitative and does not calculate real rates. |
| **Plant Care Guide**         | Light, water, soil and "watch for" notes for 36 plants, plus care tips.                                               |
| **Watering Routine Planner** | A rough watering-gap estimate based on plant, season and pot size.                                                    |
| **How It Works**             | The Input → Processing → Output steps, and rule-based logic vs machine learning.                                      |
| **Computer Science Corner**  | A short, syntax-highlighted `if / else` example.                                                                      |

---

## Files

```
FloraCare/
├── index.html    ← page structure and content
├── style.css     ← design system and layout
├── script.js     ← data, rules and interactivity
├── README.md     ← this file

```

**Technology:** HTML5, CSS3 and vanilla JavaScript only. There is no framework, build step, backend, login or database.

---

## How to run

### Option 1: Open the file directly

1. Put the three files in one folder.
2. Double-click `index.html`, or right-click it and choose **Open with → Chrome** (or Edge).

### Option 2: VS Code

1. Open the folder in VS Code (**File → Open Folder**).
2. Right-click `index.html` and choose **Reveal in File Explorer** and open it, **or** install the _Live Server_ extension, then right-click `index.html` and choose **Open with Live Server**.

**Works offline.** The page uses optional Google Fonts. If you have no internet, it automatically falls back to Georgia and system fonts.

**Recommended browsers:** latest Chrome or Edge.

---

## How the code is organised

**`script.js`** is arranged in clearly labelled parts:

1. **Data:** the biology rules (`SYMPTOMS`, `COMBINATIONS`, `SAMPLES`, `PLANT_CARE`, `WATER_BASE`)
2. **Helpers:** safe DOM helpers (text is set with `textContent`, never injected as HTML)
3. **Image handling:** validation, preview, drag and drop, replace and remove
4. **Assessment:** the rule engine and result rendering
5. **Sample cases**
6. **Photosynthesis explorer**, then **Plant care guide and watering planner**
7. **Navigation and start-up**

**Privacy:** images are previewed locally in your browser. Nothing is uploaded, sent to a server or stored.

---

## Customising

### Add or edit a symptom rule

In `script.js`, edit the `SYMPTOMS` object. Each symptom has a `label`, a `cause` explanation and a list of `steps`. For a new symptom, also add a matching checkbox in `index.html` with the same `value`.

### Add a plant to the care guide

1. Add an entry to `PLANT_CARE` in `script.js` using the `care(...)` helper.
2. Add its typical watering gap in days to `WATER_BASE`, for example `[2, 3]`.
3. Add its key to a group in `PLANT_GROUPS` so it appears in the dropdowns.

### Change colours

Edit the CSS custom properties at the top of `style.css` (`:root { ... }`).

## Known limitations

- It does not read or classify the photo.
- It covers six common symptoms only, and the guidance is general.
- Plant care and watering information is a general school-level guideline. Real needs depend on climate, soil, pot size and plant age.
- A real AI plant-disease detector would need thousands of labelled images, training, testing and accuracy evaluation.

---

## Ideas for future versions

- A trained machine-learning model for leaf images
- A quiz mode and a rule inspector that shows which rules fired
- More symptoms and regional-language support

---

## Credits

Created for the **Biology × Computer Science Exhibition** by the FloraCare team.

_Team members: [Name 1], [Name 2], [Name 3], [Name 4], [Name 5]_ · _Class [__]_
