# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Architecture

This is a Next.js 15 application for creating customizable Japan prefecture maps with data visualization capabilities. The app is primarily in Traditional Chinese (zh-TW).

### Core Structure

**Context Management:**

- `CardContext` (`src/context/CardContext.tsx`) - Manages card templates, selection, and configuration. Contains predefined card types: travel-level, safety-index, population-density, and custom-data
- `MapContext` (`src/context/MapContext.tsx`) - Handles map state, prefecture colors, export settings, and UI controls

**Component Architecture:**

- Map visualization components in `src/components/` including `MapCanvas`, `MapTabs`, `ControlPanel`
- Card system with `CardDisplay`, `DraggableCard`, `EditableInfoCard`, `ProfileCard`
- Panel components: `LeftPanel`, `ControlPanel`, `AdSpace`

**Data Layer:**

- `src/data/prefectures.ts` - Prefecture definitions and data
- `src/data/rankings.ts` - Ranking data for different metrics
- `src/types/` - TypeScript definitions for cards and maps

**Key Features:**

- Interactive prefecture coloring and selection
- Drag-and-drop card positioning with html2canvas export
- Multiple export formats (PNG/JPG) and background modes
- Template-based card system with customizable legends
- Responsive design with Tailwind CSS

### App Router Structure

- `/` - Main map interface
- `/prefecture/[id]` - Individual prefecture pages
- `/templates` - Template selection page
- `/test` - Test/development page

## Assistant Behavior Preferences

Please follow these rules when responding:

- Use Traditional Chinese (`zh-TW`) for all outputs.
- Do not explain things unless explicitly asked to. Keep answers short and directly focused on the user's goal.
- Do not summarize or repeat information unless asked.
- Prioritize direct code output or specific instructions over general advice.
- Avoid excessive politeness or filler words. The user prefers clear and sharp responses.
- Adopt the user’s tone if they use sarcasm, humor, or casual speech.
- The user is technical and prefers to control everything manually. Don’t assume they need hand-holding.
<!-- - When the user asks to “幫我改”, provide only the modified part (not the full file) unless told otherwise. -->
- Adopt FAANG-level design principles when suggesting code architecture or abstractions.
  - Prioritize modularity, scalability, readability, and testability.
  - Use patterns and abstractions that would be acceptable in high-scale production code reviews.
  - Avoid one-off hacks or temporary fixes unless explicitly asked.
  - Optimize for long-term maintainability and clarity.

The application uses React 19, TypeScript, and Tailwind CSS 4 with custom SVG processing capabilities.
