# Panuu — Last Little Letter ❤️

GitHub Pages-ready static site.

Includes:
- Hinglish, cute/funny/blushy tone
- User-provided meme
- User-provided HIM audio
- Honest poll
- Funny "why don't you like me back?" quiz
- One-chance message that respects that she is not ready
- Final call button that opens the phone dialer after a user tap
- Full-screen final animation/confetti

## Publish
Upload `index.html`, `style.css`, `script.js`, and the whole `assets` folder to the root of a GitHub repository.

Then:
Settings → Pages → Deploy from a branch → main → /(root) → Save.

## IMPORTANT: call button
The browser cannot silently or automatically place a phone call without the user's interaction. The current button is a `tel:` link with a placeholder number.

Before publishing, open `index.html` and replace:
`tel:+91XXXXXXXXXX`
with the real number you want the button to call.

## Audio
The supplied HIM MP3 is included as `assets/him.mp3`. Browsers generally block autoplay, so the site starts the music after the visitor taps the first button.
