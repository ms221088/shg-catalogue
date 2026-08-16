# How to update this website (no HTML editing needed)

## Adding / editing a product
Open **`data-products.js`**. Every product is one `{ ... }` block inside the
`PRODUCTS` array. To add a new one:

1. Copy an existing block (or the TEMPLATE at the top of the file).
2. Paste it into the `PRODUCTS` list, with a comma after the previous item.
3. Fill in:
   - `category` and `subcategory` — these are lists, so you can give more
     than one, e.g. `category: ["food", "home-decor"]`
   - `block` — must match a key from `data-blocks.js` (e.g. `"salarpur"`)
   - `title` — Hindi and English name
   - `details` — as many `{ hi: "...", en: "..." }` lines as you want
     (price, contact, address, etc.)
   - `image` — path to the photo, e.g. `"images/my-photo.jpg"`
4. Save the file. Done — the card, the filters, and search all update by
   themselves. **You never need to open products.html.**

## Adding / editing a service
Same process, in **`data-services.js`** and the `SERVICES` array.

## Adding a brand-new category or subcategory
If you use a `category` or `subcategory` value that doesn't exist yet
(e.g. `"electronics"`), also add one line for it in `PRODUCT_LABELS`
(top of `data-products.js`) or `SERVICE_LABELS` (top of `data-services.js`)
so the filter dropdown shows a proper Hindi/English name instead of the
raw code:

```js
electronics: { hi: "इलेक्ट्रॉनिक्स", en: "Electronics" }
```

If you forget this step, the filter still works — it just shows the raw
value as its label until you add one.

## Adding a brand-new block (विकासखण्ड)
Add one line to **`data-blocks.js`**. It's shared by both Products and
Services, and only shows up in a page's dropdown once you actually use it
on an item there — so the two pages never get out of sync.

## Adding images
1. Put the image file in the `images/` folder, next to the HTML files.
2. Reference it as `image: "images/your-file-name.jpg"` in the product or
   service's entry.
3. Keep filenames without spaces (use `-` or nothing) to avoid link issues.

## What changed from the old version, and why

- **Hindi search now works.** The old search only checked a hidden
  English-only `data-name` value. Search now checks both the Hindi and
  English title *and* every detail line on every item, so typing in either
  language finds the right cards, no matter which language is displayed.
- **One file to edit, not three.** Previously, adding an item meant writing
  a `<div class="card">` block by hand *and* separately keeping the
  category/subcategory `<option>` lists in sync — if you forgot the
  dropdown option, the item became unfindable by filters. Now the dropdown
  options are generated automatically from whatever is actually in the
  data file, so that can't happen.
- **Small CSS bug fixed.** The footer disclaimer text-size rule was
  accidentally nested inside another rule in `style.css` and was silently
  being ignored by the browser; it's now a normal top-level rule.
- **"Active page" highlight in the menu now actually works.** It used to
  run before the header (and its menu links) had finished loading, so it
  never had anything to highlight. It now runs after the header is loaded.

## Files at a glance
| File | What it's for |
|---|---|
| `data-products.js` | All product content + category/subcategory labels |
| `data-services.js` | All service content + category/subcategory labels |
| `data-blocks.js` | Shared list of block (विकासखण्ड) names |
| `catalogue.js` | Builds the filter dropdowns, cards, and search — don't normally need to touch this |
| `lang.js` | Hindi/English toggle logic (unchanged) |
| `script.js` | Mobile menu, back button, active nav highlight |
| `style.css` | All styling |
| `header.html` / `footer.html` | Shared header/footer, included on every page |
| `index.html` / `products.html` / `services.html` / `about.html` / `contact.html` | The actual pages |
