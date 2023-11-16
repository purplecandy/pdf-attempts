```
pnpm install
```

Install external dependencies

```
pnpx playwright install
```

[WkHTML Binaries](https://wkhtmltopdf.org/downloads.html#stable)

To generate the PDFs

```
pnpm generate --tool playwright --url 3

pnpm generate --tool wkhtml --url 3
```
