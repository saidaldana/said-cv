# CV — Said Rodrigo Aldana Sánchez

Currículum en una sola página HTML (listo para imprimir / PDF).

## Subir el proyecto a GitHub (primera vez)

En PowerShell, dentro de esta carpeta:

1. Inicia sesión en GitHub CLI (abre el navegador):

   ```bash
   gh auth login
   ```

   Elige **GitHub.com**, HTTPS, y autentícate.

2. Crea el repositorio remoto y sube el código (**elige otro nombre** si `said-cv` ya existe):

   ```bash
   gh repo create said-cv --public --source=. --remote=origin --description "CV — HTML estático" --push
   ```

   Si prefieres crear el repo vacío en [github.com/new](https://github.com/new) y luego enlazarlo:

   ```bash
   git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
   git push -u origin main
   ```

La identidad de Git para commits en **este** repo ya está configurada localmente. Si quieres usar otro correo para GitHub, ejecuta:

`git config user.email "tu@email.com"`

## Vercel (deploy sin errores)

Archivos que usa el pipeline:

| Archivo | Rol |
|--------|-----|
| `vercel.json` | `buildCommand`, `outputDirectory: public`, `framework: null` |
| `package.json` | `scripts.build` → copia a `public/` |
| `package-lock.json` | Instalación reproducible en Vercel (`npm ci` / `npm install`) |
| `scripts/copy-to-public.mjs` | Crea `public/index.html` desde la raíz |
| `.nvmrc` | Versión de Node en Vercel (20) |
| `index.html` | **Fuente** del sitio (edita este; GitHub Pages usa la raíz) |

- **`npm run build`**: genera `public/index.html` (la carpeta `public/` está en `.gitignore`).
- En el dashboard, si hace falta: **Framework: Other**, **Root**: `.`, **Build**: `npm run build`, **Output**: `public` (o automático vía `vercel.json`).

Tras un deploy, **`npm run start`** sirve `public/` como en producción.

## Ver en línea (GitHub Pages)

1. En el repositorio: **Settings → Pages**.
2. **Source**: Deploy from a branch.
3. **Branch**: `main` y carpeta **`/ (root)`**.
4. Guarda. En uno o dos minutos tendrás una URL tipo `https://TU-USUARIO.github.io/said-cv/`.

## Archivo principal

- `index.html` — abre este archivo en el navegador para vista previa local.
- `package.json` — scripts `dev`, `build`, `start`.
- `public/` — generado por `npm run build` (ignorado en git); no edites ahí.

## Edición local

Abre `index.html` con tu editor o arrástralo al navegador.
