# Spendflo Status Page

Real-time system status and uptime monitoring for Spendflo services, powered by GitHub Actions and Pages.

<img src="./public/ss.png" alt="Spendflo Status Page" />

## Overview

This status page monitors the availability and performance of Spendflo's critical services:
- **V2 APIs** - Core API endpoints
- **V3 APIs** - Next-generation API services
- **Dashboard** - Web application interface

## How It Works

### Architecture

- **Hosting**: GitHub Pages with custom CNAME domain
- **Monitoring**: Automated health checks via GitHub Actions (runs every 24 hours)
- **Data Storage**: Health check logs committed directly to the repository
- **Incidents**: Managed through GitHub Issues with the `incident` label
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

### Monitoring Process

1. GitHub Actions workflow (`health-check.yml`) runs on a scheduled basis
2. Each service URL is tested with up to 3 retry attempts
3. Response status and response time are logged
4. Results are committed to `public/status/{service}_report.log`
5. Frontend displays the last 90 days of uptime data

## Configuration

### Monitored Services

Services are defined in `public/urls.cfg`:

```text
V2-Apis=https://api-v2.spendflo.com/health
V3-Apis=https://api-v2.spendflo.com/v3/q/health
Dashboard=https://app.spendflo.com/
```

### Monitoring Frequency

Adjust the cron schedule in `.github/workflows/health-check.yml`:

```yaml
on:
  schedule:
    - cron: "0 0 * * *"  # Daily at midnight UTC
```

### Repository URLs

The application fetches data from this repository. URLs are configured in:
- `src/incidents/hooks/useIncidents.tsx` - GitHub Issues API
- `src/services/hooks/useServices.tsx` - Status log files
- `src/services/hooks/useSystemStatus.tsx` - Status log files

Current configuration: `https://github.com/spendflo/fettle`

## Incident Management

### Creating an Incident

1. Go to the [Issues](https://github.com/spendflo/fettle/issues) tab
2. Create a new issue describing the incident
3. Add the `incident` label
4. The incident will automatically appear on the status page

### Closing an Incident

Close the issue when the incident is resolved. Closed incidents are still displayed in the incident history.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## Deployment

The status page automatically deploys via GitHub Actions when changes are pushed to the `main` branch. The workflow builds the Next.js static site and publishes it to GitHub Pages.

## License

This project is based on [Fettle](https://github.com/mehatab/fettle), an open-source status page solution.