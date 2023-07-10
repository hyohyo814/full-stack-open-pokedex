name: Health Check Periodic
on:
  schedule:
    - cron: '*/30 * * * *'

jobs:
  url-health-check:
    runs-on: ubuntu-20.04
    steps:
      - uses: jtalk/url-health-check-action@v3
        with:
          url: https://hyohyo-pokedex.fly.dev/health
          max-attempts: 3
          retry-delay: 10s
