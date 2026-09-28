# Interview Questions

Flashcards for preparing for a Senior Full-stack (backend-focused) interview: Node.js, TypeScript, React, REST, GraphQL, AWS, messaging, Docker/Kubernetes, testing, observability, Elixir → Node.js migration and CV-based questions. Every card is available in English and Polish.

A static page with no build step and no dependencies.

## Features

- 185 cards in 22 topics, with answers written as short bullet points
- **Explain in depth** on most technical cards: a longer explanation that teaches the topic from scratch, for when the bullet points aren't enough
- Switch between English and Polish (EN / PL)
- Search across questions and answers in both languages, and filter by topic
- Mark cards as known, with a progress bar per filtered deck
- **Hide known cards** to review only what is left
- Shuffle, plus keyboard shortcuts: `Space` shows the answer, `E` opens the in-depth explanation, `←` / `→` change card
- Progress, language and the hide-known setting are stored in the browser's `localStorage`

## Project structure

```
index.html          UI and logic
questions.js        Card data (TOPICS + FLASHCARDS)
nginx.conf          nginx config used by the Docker image
Dockerfile          nginx:stable-alpine image serving the static files
docker-compose.yml  Compose / Portainer stack definition
```

## Run locally

**Option 1: open the file.** Double-click `index.html`. The cards are loaded with a plain `<script>` tag (not `fetch`), so this works from `file://`.

**Option 2: local web server.**

```bash
npx serve .
# or
python3 -m http.server 8084
```

Then open http://localhost:8084.

**Option 3: Docker.**

```bash
docker compose up -d --build
```

Then open http://localhost:8084. To stop it, run `docker compose down`.

To use plain Docker without Compose:

```bash
docker build -t interview-questions .
docker run -d --name interview-questions -p 8084:80 --restart unless-stopped interview-questions
```

## Deploy on a home server with Portainer

### Option A: stack from the Git repository (recommended)

1. In Portainer go to **Stacks → Add stack**.
2. Name it `interview-questions` and choose **Repository**.
3. Fill in:
   - Repository URL: `https://github.com/umfy/interview-questions`
   - Repository reference: `refs/heads/main`
   - Compose path: `docker-compose.yml`
   - If the repository is private, turn on **Authentication** and enter your GitHub username and a personal access token with read access to the repo.
4. Optional: turn on **GitOps updates** (polling or webhook), so Portainer rebuilds and redeploys after every push.
5. Click **Deploy the stack**.

The app is then served at `http://<server-ip>:8084`.

To update it by hand after a push, open the stack and click **Pull and redeploy**. Tick **Re-pull image** (or **Force rebuild**, depending on your Portainer version) so the new files are built into the image.

### Option B: build the image on the server

```bash
git clone https://github.com/umfy/interview-questions.git
cd interview-questions
docker build -t interview-questions:latest .
```

Then, in Portainer, create a stack with the **Web editor** that uses the prebuilt image:

```yaml
services:
  interview-questions:
    image: interview-questions:latest
    container_name: interview-questions
    ports:
      - "8084:80"
    restart: unless-stopped
```

### Changing the port

Edit the left side of the port mapping in `docker-compose.yml`, for example `"3000:80"`. If you put the app behind a reverse proxy (Nginx Proxy Manager, Traefik, Caddy), point the proxy at the container's port `80`.

## Editing questions

All cards live in `questions.js`:

```js
{
  id: "event-loop",            // unique and stable; "known" progress is stored by id
  topic: "Node.js",            // must match an id in TOPICS
  en: { q: "Question?", a: ["Point one", "Point two with `code`"] },
  pl: { q: "Pytanie?",  a: ["Punkt pierwszy", "Punkt drugi z `kodem`"] }
}
```

- Text in backticks is shown as code.
- Optional `more: [...]` next to `a` (in both `en` and `pl`) adds the **Explain in depth** section. Each entry is one block: a paragraph (`**bold**`, `*italic*` and `code` work inside), a list (every line starts with `- `), or a code block (starts with ` ```js ` and ends with ` ``` `). Cards without `more` just don't show the button.
- Add a new topic to `TOPICS` with an English and a Polish label. The topic list in the UI follows the order of `TOPICS`.
- Changing a card's `id` resets its "known" status.
