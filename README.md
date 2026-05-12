<p align="center">
  <img src="./public/assets/banner/banner.png" alt="SHIELD Archive Icon" height="120" />
</p>

<p align="center">
  <strong>Strategic Hero Intelligence & Engagement Logistical Database</strong>
</p>

<p align="center">
  A high-performance tactical management engine for optimizing rosters<br>and monthly rotations within <strong>MARVEL Future Fight</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/milas-ai/shield-archive" alt="License" />
  <img src="https://img.shields.io/github/last-commit/milas-ai/shield-archive?style=flat-for-the-badge&color=cyan" alt="Last Commit" />
  <img src="https://img.shields.io/badge/Status-Active_Duty-brightgreen?style=flat-for-the-badge" alt="Status" />
</p>

<hr />

## 🎯 Overview

**SHIELD Archive** is a fan-made tactical engine designed for players of **MARVEL Future Fight (MFF)**. It addresses the complexity of managing large rosters across a variety of game modes with cyclical restrictions, specifically focusing on data control and logistical planning.

### 🔭 Live Terminal
Access the Archive here: **[milas-ai.github.io/shield-archive](https://milas-ai.github.io/shield-archive)**

---

## 🔥 Key Features `(v1.0.0)`

* **Database Backup System**:

    Integrated export/import system using `.json` files to sync your teams and roster data across devices.
* **Alliance Battle Planning**:

    Dedicated page for 28-day ABX/ABL rotations with automatic scroll and round-specific team structuring.
* **Advanced Roster Management**:
    * **Drag & Drop**: Rapid squad deployment utilizing `@dnd-kit`.
    * **Variant Tracking**: Full support for uniforms and skins per character.
    * **Tactical Filters**: Sort agents by Type, Side, Gender, Species, and custom Tags.
* **Hybrid UX**:
    * **Desktop**: High-density dashboard with fixed squad management.
    * **Mobile**: Optimized infinite-scroll experience with a smooth, animated "Back to Top" navigation.
    * **Landscape Support**: Auto-centering UI for horizontal mobile use.

---

## 🛠️ Technical Specifications

* **Framework**: [React 19](https://reactjs.org/) + [TypeScript](https://www.typescript.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **State**: [Zustand](https://github.com/pmndrs/zustand) with local persistence
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Drag & Drop**: [@dnd-kit/core](https://dndkit.com/)
* **Icons**: [Lucide React](https://lucide.dev/)

---

## 🗺️ Operations Roadmap

Tracking future logistical protocols and upcoming modules.

### Base Operations (Infrastructure)
- [ ] **S.H.I.E.L.D. Home Hub**: A central dashboard for tactical overview and quick-links.
- [ ] **Dynamic Tier List**: Real-time character ranking synchronized with the current meta.

### Combat Modules
- [x] **Alliance Battle Guide**: Full ABX/ABL structural data and team management.
- [ ] **Arena Terminal**: Dedicated support for *Team Battle Arena* and *Otherworld Battle* esquadrons.

### Gear & Training (Optimization)
- [ ] **Advanced Gear Protocols**: Support for Mighty and Brilliant CTP configurations.
- [ ] **Obelisk Guides**: Comprehensive guide for custom gear and obelisk optimization.
- [ ] **Better Character Editing UI**: Interactive editor with skill rotations and deeper information.

### Inventory Intelligence
- [ ] **Artifact Vault**: Specialized organization and filtering for character-specific artifacts.

---

## 💻 Local Installation

To deploy a local copy of the Archive:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/milas-ai/shield-archive.git
    cd shield-archive
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:5173` in your browser. 

---

## ⚖️ License & Intellectual Property

### Code License
The **SHIELD Archive** code is licensed under the **GPL-3.0 License**. You are free to modify and distribute the code, provided it remains under the same open-source protocol.

### Intellectual Property Disclaimer
**SHIELD Archive** is a fan-made tool and is in no way affiliated with, endorsed by, or connected to Marvel, Netmarble, or their respective partners. 

*   MARVEL, MARVEL FUTURE FIGHT, S.H.I.E.L.D., and all related character names and images are registered trademarks of Marvel Characters, Inc.

*   Game assets and data are copyright of Netmarble Corp.

*   All game content is used under the "Fan Content Policy" standard of trademark fair use. No copyright infringement is intended.


**Agents work on a volunteer basis. This tool does not generate revenue.** 

---
<p align="center"><em>
  "I figure someone's gotta do the dirty work in this man's war... and if I was one of the brass,
  <br>I might be too busy polishin' my medals to have any fun!" - Nick Fury (Sgt. Fury #10)
</em></p>
