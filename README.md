# Platform Engineering Roadmap

An opinionated roadmap to become a Platform Engineer, including AI, ML, and AI agent practices for SRE and platform work.

Visit [https://platform-engineering-roadmap.mbianchi.dev/](https://platform-engineering-roadmap.mbianchi.dev/) to have an overview.

The roadmap is inspired by [Teivah's SRE roadmap](https://github.com/teivah/sre-roadmap), but my idea is a bit different.

In time, I created something similar to [roadmap.sh](https://roadmap.sh/) but for Platform Engineers.

## Explore the roadmap

The topic atlas groups the roadmap into **Individual Skills**, **Certifications**, and **Company Level**. Branch connections show categories, not prerequisites or a mandatory learning order.

- Expand a branch or use **Show more topics** to browse beyond its preview.
- Search topic names, descriptions, key areas, and resource titles. Multiple search terms must all match the same topic.
- Open a topic to read its key areas and resources alongside the atlas on wide screens, or in a dedicated reading view on smaller screens.
- Share the topic's URL, such as [`#topic=cloud-native`](https://platform-engineering-roadmap.mbianchi.dev/#topic=cloud-native). Browser Back and Forward preserve topic navigation. Use **Back to roadmap** or press Escape from the reading pane to return.

## Run locally

Use Node.js 22 (the CI version) or a supported newer LTS release.

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite. See [CONTRIBUTING.md](CONTRIBUTING.md#development-setup) for build and test commands. The site remains a static React/Vite application; no backend, account, or external font service is required.

## About me 

I have been a Platform Engineer even before the name was out there, fighting Conway Law, dealing with team topologies (yes, before the book).

It was called DevOps Engineering before and previously Operations, but deep down we were already building the foundations of automation, pipelines, infrastructure and everything that turned out to be Platform Engineering.

Why did I build this website? Just because.

![A picture from mbianchidev's Platform's Engineering Inferno talk from DevOps Days Amsterdam](platform-engineering-inferno.jpg)

This picture is from one of my talks, at DevOpsDay Amsterdam 2024 - Platform Engineering's Inferno - you can find a video [here](https://www.youtube.com/watch?v=dWn48x4v34Q).

_Note: This repo also contains a [Platform Engineering Manifesto](platform-engineering-manifesto.md) which is playfully inspired by the Agile Manifesto._

## Contributing

I want this roadmap to be useful to the largest amount of people and if you want to help you are very welcome. 

Any contribution matters, may that be an input, a feedback or even a PR.

## Deployment

The site is deployed to GitHub Pages from `main` by [the Pages workflow](.github/workflows/deploy.yml). The custom domain is declared in [`public/CNAME`](public/CNAME), and Vite builds root-relative asset URLs because the site is served from the custom domain root.

## License

Usual MIT, we love that.

## Note

The previous readme content can be found in [LEGACY.md](LEGACY.md) all new updates will be in the interactive website instead.
