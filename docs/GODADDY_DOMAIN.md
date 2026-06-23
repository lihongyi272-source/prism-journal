# GoDaddy Domain Connection Guide

Target domain: `lenswithprisms.org`

## Recommended Setup

Use Vercel as the deployment host and keep GoDaddy as the registrar.

In Vercel:

1. Open the PRISM project.
2. Go to **Settings** → **Domains**.
3. Add `lenswithprisms.org`.
4. Add `www.lenswithprisms.org`.
5. Vercel will show the exact DNS records to create.

In GoDaddy:

1. Open the domain DNS management page.
2. Add or edit the apex/root record for `lenswithprisms.org` according to the exact A record shown by Vercel.
3. Add or edit the `www` record according to the exact CNAME target shown by Vercel.
4. Save changes.
5. Return to Vercel and wait for domain verification.

## Typical Record Shape

Use Vercel's dashboard as the source of truth, but the records usually follow this shape:

```text
Type: A
Name: @
Value: value shown by Vercel
TTL: default

Type: CNAME
Name: www
Value: value shown by Vercel
TTL: default
```

## Timing

GoDaddy states most DNS changes are visible within about an hour, but global propagation can take up to 48 hours.

## Official References

- Vercel custom domains: https://vercel.com/docs/domains/working-with-domains/add-a-domain
- GoDaddy CNAME records: https://www.godaddy.com/help/add-a-cname-record-19236
- GoDaddy A records: https://www.godaddy.com/help/add-an-a-record-19238
