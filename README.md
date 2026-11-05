# Palestra Grappling

Static site (HTML, CSS, JS). No build step. **Not deployed.** Nothing has been sent to Mike.

Do not host this on the Mac mini. Do not run the deploy command until Caleb says go.

## Still needed from Mike

Nothing below is invented on the page. Public spots say “to be announced” or “to follow”.

- Marietta seminar: gym / venue, date and time, topic, format (gi / no-gi), length, ticket price, and where tickets are sold
- Photos, rights-cleared: Mike headshot, Wallison portrait or action. No IBJJF, ADCC, or Flo screenshots
- Wallison’s surname
- Wallison’s Instagram
- Any other confirmed athletes (name and Instagram only once they are actually confirmed)
- Logo file. Until then the site uses a type wordmark. The browser icon is a letter P, not the logo. Mike’s concept, still undesigned: two ancient people in a wrestling stance, clean outline
- Agency Instagram, once it exists. It does not, so the page has no icon
- Phone, only if he wants it public. The questionnaire answer was “?”
- Confirmation that mike@palestra.com is a live mailbox
- Domain, in his order: palestra.com, palestragrappling.com, palestraseminars.com. Do not register one yet
- Whether inquiries should be stored somewhere, instead of opening the visitor’s mail app

Look-and-feel references on the questionnaire were blank. The current type and color are a working default he can reject.

## Deploy

From this folder, after `npx vercel login` once:

```bash
npx vercel deploy --yes
```

That is a preview. Production, still only after he says go:

```bash
npx vercel deploy --prod --yes
```

`vercel.json` only turns on clean URLs. There is no build command, no framework, and no functions. `script.js` stays a static file.

Spend cap: **$100**. Hosting a static site on Vercel Hobby is $0. Do not add paid products, databases, analytics add-ons, or AI Gateway. A domain is about $15/year and only after Mike picks one. Do not set a team-wide Vercel budget from this folder; that setting pauses every project on the account.

## What is real

From Mike Bell’s questionnaire (“Busness Palestra.docx”, attached to his 2026-10-12 email) and that email:

- Palestra / Palestra LLC, Atlanta, launching early next year
- “Provide quality grappling seminars with the best atmosphere to enjoy.”
- Kick Ass, Fun, Enjoyment
- The gym-owner pitch, including “we provide you with time”
- Mike Bell: promoted by Jeffery Boudreaux; Unit 2 competition team; 5.5 years; IBJJF 3rd Worlds, 2nd ×3 Pans, 3rd Pans, multiple Open 1sts; Atlanta Ultras; the “screwed over” reason
- Kenny Mullins: business and legal, hands-on site
- Wallison, first name only: No-Gi World Champion, 1st Pans, 3rd Adult Black Belt Gi Worlds; teaches the first seminar
- Email on the questionnaire: mike@palestra.com

## What the page does with the gaps

- Marietta is an announcement card. Instructor is Wallison. Every other fact is “To be announced”
- Portraits are monograms captioned “Portrait to follow”
- No second athlete card, no surname, no Instagram URL
- Contact opens the visitor’s email to mike@palestra.com. Nothing is stored on the site
