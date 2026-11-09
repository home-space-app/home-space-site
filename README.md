# Home Space Site

Product site for Home Space.

## Designs

The designs live in Penpot, the single source of truth, and are not kept in this repository.

- The site itself: the Penpot file **Web Site** ([open](https://design.penpot.app/?screen=workspace&team-id=d3aee43a-8d21-8092-8008-e8ca87f0cb91&project-id=124ca123-b2be-80ce-8008-e8cc36166a1c&file-id=d3aee43a-8d21-8092-8008-e94f65479b3a&page-id=d3aee43a-8d21-8092-8008-e94f65479b3b)).
- The app designs shown on the site (desktop, web, Android and iOS): the Penpot file **Home Space Client**, one page per platform. The colour tokens in `src/styles.css` mirror its token set `core` plus `mode/light` and `mode/dark`.

Home Space Client pages:

- [Desktop](https://design.penpot.app/?screen=workspace&team-id=d3aee43a-8d21-8092-8008-e8ca87f0cb91&project-id=124ca123-b2be-80ce-8008-e8cc36166a1c&file-id=124ca123-b2be-80ce-8008-e8e7873acf90&page-id=124ca123-b2be-80ce-8008-e8e7873acf91)
- [Web](https://design.penpot.app/?screen=workspace&team-id=d3aee43a-8d21-8092-8008-e8ca87f0cb91&project-id=124ca123-b2be-80ce-8008-e8cc36166a1c&file-id=124ca123-b2be-80ce-8008-e8e7873acf90&page-id=a1e49826-f19a-8041-8008-e92a55d71661)
- [Android](https://design.penpot.app/?screen=workspace&team-id=d3aee43a-8d21-8092-8008-e8ca87f0cb91&project-id=124ca123-b2be-80ce-8008-e8cc36166a1c&file-id=124ca123-b2be-80ce-8008-e8e7873acf90&page-id=a1e49826-f19a-8041-8008-e92a486bc5c1)
- [iOS](https://design.penpot.app/?screen=workspace&team-id=d3aee43a-8d21-8092-8008-e8ca87f0cb91&project-id=124ca123-b2be-80ce-8008-e8cc36166a1c&file-id=124ca123-b2be-80ce-8008-e8e7873acf90&page-id=a1e49826-f19a-8041-8008-e92a50a1d5a8)

## SEO assets

`src/og-image.png` (social preview, 1200×630) and `src/apple-touch-icon.png` are generated from `tools/og-image.html` and `src/favicon.svg`. Regenerate them after changing the hero copy or the web screenshots:

```sh
node tools/render-og.js
```

When the page content changes, update `<lastmod>` in `src/sitemap.xml`.
