# LUMEN

> Your cursor, reimagined as a living light source.  
> Beautiful · Fluid · Endlessly customizable

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Utkarshry/cusor-lumen)

---

## ✨ Features

- Zero runtime dependencies — pure React + CSS
- 60 fps smooth glow that tracks your cursor
- Ambient particle field background
- Hover-state expansion & colour shift
- TypeScript, Next.js 15, Tailwind CSS
- One-click Vercel deploy

---

## 🚀 Local Development

```bash
# 1. Clone
git clone https://github.com/Utkarshry/cusor-lumen.git
cd cusor-lumen

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local   # then fill in your values

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploy to Vercel

1. Push this repo to GitHub (already done if you're reading this online).
2. Go to [vercel.com/new](https://vercel.com/new) → **Import** the `cusor-lumen` repository.
3. Add your environment variables (copy from `.env.example`).
4. Under **Domains**, point `cusor.me` to this deployment.
5. Hit **Deploy** — you're live!

### Initial Git setup (first-time)

```bash
git init
git add .
git commit -m "feat: LUMEN launch"
git remote add origin https://github.com/Utkarshry/cusor-lumen.git
git push -u origin main
```

---

## 🗂 Project Structure

```
cusor-lumen/
├── app/
│   ├── globals.css       # Tailwind base + CSS custom properties
│   ├── layout.tsx        # Root layout & metadata
│   └── page.tsx          # Home page / hero
├── components/
│   ├── LumenCursor.tsx   # Cursor glow system (core dot · ring · ambient)
│   └── ParticleField.tsx # Canvas particle field background
├── public/               # Static assets
├── .env.example          # Required env var template
├── vercel.json           # Vercel deployment config
└── next.config.ts        # Next.js config
```

---

## 🔑 Environment Variables

| Variable                  | Required | Description                                |
|---------------------------|----------|--------------------------------------------|
| `NEXT_PUBLIC_SITE_URL`    | No       | Canonical URL used for Open Graph metadata |

Copy `.env.example` → `.env.local` and fill in any values you need.

---

## 📄 License

MIT © LUMEN contributors
