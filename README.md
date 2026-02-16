<div align="center">

<img src="docs/logo.png" alt="OpenMM-Arena Logo" width="200"/>

# OpenMM-Arena

### *A Comprehensive Compendium for Multimodal Artificial Intelligence Research*

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Website](https://img.shields.io/badge/Website-Live-0077B6)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![GitHub stars](https://img.shields.io/github/stars/OpenEnvision-Lab/OpenMM-Arena?style=social)](https://github.com/OpenEnvision-Lab/OpenMM-Arena/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/OpenEnvision-Lab/OpenMM-Arena?style=social)](https://github.com/OpenEnvision-Lab/OpenMM-Arena/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/OpenEnvision-Lab/OpenMM-Arena?style=social)](https://github.com/OpenEnvision-Lab/OpenMM-Arena/watchers)

[![Papers](https://img.shields.io/badge/Papers-2000+-2563eb)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Models](https://img.shields.io/badge/Arena_Models-46-f59e0b)](https://openenvision-lab.github.io/OpenMM-Arena/t2i/arena.html)
[![Benchmarks](https://img.shields.io/badge/Benchmarks-100+-059669)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Datasets](https://img.shields.io/badge/Datasets-90+-8b5cf6)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Research Pillars](https://img.shields.io/badge/Research_Pillars-7-e11d48)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Last Updated](https://img.shields.io/badge/Updated-Feb_2026-22c55e)](https://openenvision-lab.github.io/OpenMM-Arena/)

**A systematically curated and taxonomically organized knowledge base that unifies seven converging research frontiers of multimodal AI — encompassing 2000+ papers, 46 arena-ranked models, 100+ benchmarks, and 90+ datasets — providing researchers with a single, authoritative cross-disciplinary reference.**

[**Explore the Compendium**](https://openenvision-lab.github.io/OpenMM-Arena/) · [**Arena Leaderboard**](https://openenvision-lab.github.io/OpenMM-Arena/arena.html) · [**Technical Blogs**](https://openenvision-lab.github.io/OpenMM-Arena/blog.html) · [**Star on GitHub**](https://github.com/OpenEnvision-Lab/OpenMM-Arena)

---

**If you find this resource valuable for your research, please consider giving us a** :star: **to increase its visibility.**

</div>

---

## Table of Contents

- [Overview](#overview)
- [Seven Research Pillars](#seven-research-pillars)
- [Arena Leaderboard Spotlight](#arena-leaderboard-spotlight)
- [Benchmarks & Evaluation Metrics](#benchmarks--evaluation-metrics)
- [Datasets](#datasets)
- [Documentation Structure](#documentation-structure)
- [Source Repositories](#source-repositories)
- [Key Features](#key-features)
- [Quick Start](#quick-start)
- [Contributing](#contributing)
- [Citation](#citation)

---

## Overview

The field of multimodal artificial intelligence has undergone an unprecedented convergence of historically disparate research traditions. **Text-to-image synthesis** and **text-to-video generation** have evolved from nascent subfields into foundational pillars of generative AI, while **image-to-video generation** bridges static visual content with temporal dynamics through learned motion priors. **3D vision** — underpinned by Neural Radiance Fields, 3D Gaussian Splatting, LLM-driven scene understanding, and visual SLAM — extends generative modeling into the spatial domain. **4D spatial intelligence** introduces the temporal axis through depth estimation, dense 3D/4D tracking, and physics-grounded simulation. These areas intersect profoundly with **world models** that seek to learn predictive environment dynamics, and **unified multimodal architectures** that dissolve the boundary between visual perception and generation.

**OpenMM-Arena** serves as a definitive, centralized knowledge base that systematically organizes, cross-references, and catalogues this expansive and rapidly growing literature across **seven research pillars**:

```
                              ┌──────────────────────────────────────┐
                              │         OpenMM-Arena                 │
                              │   Multimodal AI Research Compendium  │
                              └──────────────┬───────────────────────┘
                                             │
              ┌──────────┬──────────┬────────┼────────┬──────────┬──────────┐
              ▼          ▼          ▼        ▼        ▼          ▼          ▼
         ┌─────────┐┌─────────┐┌────────┐┌──────┐┌──────┐┌──────────┐┌────────┐
         │  T2I    ││  T2V    ││  I2V   ││  3D  ││  4D  ││ Unified  ││ World  │
         │ 250+    ││ 200+    ││ 170+   ││ 500+ ││ 500+ ││ 120+     ││ 200+   │
         │ papers  ││ papers  ││ papers ││papers││papers││ models   ││ papers │
         └────┬────┘└────┬────┘└───┬────┘└──┬───┘└──┬───┘└────┬─────┘└───┬────┘
              │          │         │        │       │         │          │
              ▼          ▼         ▼        ▼       ▼         ▼          ▼
          Models     Foundation  Animation  3DGS   Depth   Diffusion   Theory
          Control    Controllable Editing   NeRF   Tracking  AR        Games
          Editing    Benchmarks  Portraits  SLAM   Recon    Hybrid     Driving
          Safety     Datasets    Transfer   LLM-3D Dynamic  Any2Any   Embodied
          Arena                             Robot  Human    Eval       Sim
          Benchmarks                        Nav    Physics  Datasets   MBRL
```

> **2000+ Papers** · **7 Research Pillars** · **46 Arena-Ranked Models** · **100+ Benchmarks** · **90+ Datasets** · **73 Curated Blog Posts** · **11 Source Repositories**

---

## Seven Research Pillars

### [Text-to-Image Generation](docs/T2I.md)

> 250+ papers · 46 arena-ranked models · 6 sub-domains

The progressive evolution of text-conditioned image synthesis — from generative adversarial networks through denoising diffusion models to autoregressive transformers. Encompasses foundational architectures (FLUX.2, Seedream 3.0, GPT-Image, Imagen 3), controllable generation via spatial and semantic conditioning (ControlNet, GLIGEN), text-guided editing and subject-driven personalization (InstructPix2Pix, DreamBooth), safety and bias mitigation, and comprehensive arena leaderboards derived from 3.9M+ human preference votes.

**Sub-domains:** Models & Face Synthesis · Control & Composition · Editing & Personalization · Safety & Applications · Cross-Modal Extensions · Arena & Benchmarks

---

### [Text-to-Video Generation](docs/T2V.md)

> 200+ papers · 25+ datasets · 3 sub-domains

Foundation video synthesis models spanning GANs to diffusion transformers — covering Sora, Wan 2.1, Veo 2, CogVideoX, and contemporary controllable and efficient video generation approaches. Addresses long-form video synthesis, temporal coherence benchmarks, and large-scale video-text corpora.

**Sub-domains:** Foundation T2V Models · Controllable & Efficient Synthesis · Benchmarks & Datasets

---

### [Image-to-Video Generation](docs/T2V.md#image-to-video)

> 170+ papers · 20+ applications · 2 sub-domains

The synthesis of dynamic video sequences from static images via learned motion priors — encompassing image animation, character-driven video synthesis, talking-head generation, temporally consistent video editing, motion transfer, and audio-driven synthesis. *(Documented within the T2V reference.)*

**Sub-domains:** Animation & Portraits · Video Editing & Enhancement

---

### [3D Vision](docs/3D_VISION.md)

> 500+ papers · 6 sub-domains

A comprehensive survey spanning 3D Gaussian Splatting, Neural Radiance Fields (NeRF), text/image-to-3D generation, LLM-driven 3D understanding, NeRF-SLAM, GS-SLAM, visual and LiDAR SLAM, robotic manipulation, autonomous navigation, and spatial localization. Extends generative AI into the spatial domain, forging connections to real-time robotics and embodied agents.

**Sub-domains:** 3D Gaussian Splatting · NeRF & Generation · NeRF-SLAM · GS-SLAM · LLM-3D Understanding · Robotics & Navigation

---

### [4D Spatial Intelligence](docs/4D_VISION.md)

> 500+ papers · 6 sub-domains

The temporal dimension of 3D understanding — monocular and multi-view depth estimation, camera pose recovery, dense 3D/4D point tracking, scene reconstruction, 4D dynamic scenes via deformable NeRFs and 4D Gaussian Splatting, human-centric motion capture, and physics-grounded simulation.

**Sub-domains:** Geometry & Depth · 3D/4D Tracking · Reconstruction · Dynamic Scenes · Human-Centric · Physics-Based Simulation

---

### [Unified Multimodal Models](docs/UNIFIED.md)

> 120+ models · 30+ benchmarks · 3 sub-domains

Architectures that jointly perform visual understanding and generation within a single parametric framework — diffusion-based unified models, autoregressive multimodal LLMs with pixel and semantic encoding, hybrid AR-diffusion architectures, and any-to-any paradigms. Complemented by comprehensive evaluation benchmarks and curated training corpora.

**Sub-domains:** Models & Architectures · Datasets & Training Corpora · Evaluation & Benchmarks

---

### [World Models](docs/WORLD_MODELS.md)

> 200+ papers · 6 theory themes · 6 sub-domains

Learned environment dynamics for game simulation, autonomous driving, embodied manipulation, model-based reinforcement learning, video generation as world simulation, and theoretical underpinnings. Traces the lineage from Ha & Schmidhuber's seminal formulation through contemporary systems such as Sora, NVIDIA Cosmos, and Genie.

**Sub-domains:** Theory & Surveys · Game Simulation · Video Generation · LiDAR Generation · Occupancy Generation · Embodied AI

---

## Arena Leaderboard Spotlight

> Source: [LM Arena](https://lmarena.ai/leaderboard/text-to-image) · **3.9M+ human preference votes** · **46 models** · Updated February 2026

| Rank | Model | Organization | Elo Score | License |
|:----:|-------|-------------|:---------:|:-------:|
| **1** | **GPT-Image-1.5** | OpenAI | **1248** | Proprietary |
| **2** | **Gemini-3-Pro Image 2K** | Google | **1237** | Proprietary |
| **3** | **Seedream 3.0** | ByteDance | **1233** | Proprietary |
| 4 | Grok Imagine Image | xAI | 1174 | Proprietary |
| 5 | FLUX.2 Max | Black Forest Labs | 1169 | Proprietary |
| 6 | Grok Imagine Image Pro | xAI | 1166 | Proprietary |
| 7 | FLUX.2 Flex | Black Forest Labs | 1158 | Proprietary |
| 8 | Gemini 2.5 Flash Image | Google | 1157 | Proprietary |
| 9 | FLUX.2 Pro | Black Forest Labs | 1156 | Proprietary |
| 10 | HunyuanImage 3.0 | Tencent | 1151 | Community |

**[View Complete Leaderboard (46 Models) &rarr;](docs/ARENA.md)**

### Key Observations

| Finding | Analysis |
|:--------|:---------|
| **Proprietary-model dominance** | The top five positions are held by OpenAI, Google, ByteDance, and xAI, indicating that proprietary training infrastructure and data remain decisive advantages |
| **Rapid intra-family progress** | GPT-Image-1.5 (Elo 1248) surpasses GPT-Image-1 (Elo 1115) by 133 points — a substantial within-family improvement |
| **Narrowing open-weight gap** | Qwen-Image (Apache 2.0, Elo 1139, rank 15) and FLUX.2 Klein 4B (Apache 2.0, Elo 1021) demonstrate that open-weight models are increasingly competitive |
| **Growing Chinese-lab presence** | Models from Alibaba, ByteDance, and Tencent now occupy multiple top-20 positions, reflecting significant investment in multimodal generation research |

---

## Benchmarks & Evaluation Metrics

### Evaluation Benchmarks

| Category | Representative Benchmarks |
|:---------|:--------------------------|
| **Multimodal Understanding** | General-Bench, MMMU, MM-Vet v2, MMBench, SEED-Bench-2, GQA |
| **Image Generation Quality** | GenExam, KRIS-Bench, WISE, DreamBench++, T2I-CompBench++, GenAI-Bench, TIFA, HEIM |
| **World Model Evaluation** | WorldScore, WorldSimBench, PhyWorld, Newton, WorldGym, EWMBench |
| **Interleaved Generation** | UniBench, OpenING, ISG, MMIE |
| **Human-Preference Rankings** | LM Arena T2I (3.9M votes), Artificial Analysis T2I (15 style categories) |

### Quantitative Metrics

| Metric | Full Name | Primary Domain |
|:-------|:----------|:---------------|
| **FID** | Fréchet Inception Distance | Image Generation Quality |
| **CLIP Score** | CLIP-based Text–Image Alignment Score | Text-to-Image Faithfulness |
| **VQAScore** | VQA-based Compositional Score | T2I Semantic Faithfulness |
| **HPSv2** | Human Preference Score v2 | Human Preference Alignment |
| **ImageReward** | Image Reward Model | Human Preference Alignment |
| **LPIPS** | Learned Perceptual Image Patch Similarity | Perceptual Image Quality |
| **TIFA** | Text-to-Image Faithfulness Assessment | Attribute Faithfulness |
| **DSG** | Davidsonian Scene Graph | Compositional Correctness |
| **SSIM** | Structural Similarity Index Measure | Structural Image Quality |

---

## Datasets

> 90+ datasets catalogued across all modalities

| Category | Representative Datasets | Approximate Scale |
|:---------|:------------------------|:------------------|
| **Multimodal Understanding** | LAION-5B, DataComp, Infinity-MM, Cambrian-10M | 5.9B – 10M samples |
| **Text-to-Image** | LAION-Aesthetics, PixelProse, PD12M, CC-12M, SAM | 120M – 11M samples |
| **Image Editing** | ByteMorph-6M, UltraEdit, AnyEdit, ImgEdit | 6M – 1.2M samples |
| **Interleaved Multimodal** | OmniCorpus (8B), OBELICS (141M), Multimodal C4 (101M) | 8B – 101M samples |
| **Video-Text** | WebVid-10M, InternVid, HD-VILA-100M, Panda-70M | 100M – 10M samples |

---

## Documentation Structure

```
OpenMM-Arena/
├── README.md                    ← This document (project overview)
├── docs/
│   ├── T2I.md                   ← Text-to-Image: in-depth reference
│   ├── T2V.md                   ← Text-to-Video & Image-to-Video: in-depth reference
│   ├── 3D_VISION.md             ← 3D Vision: in-depth reference
│   ├── 4D_VISION.md             ← 4D Spatial Intelligence: in-depth reference
│   ├── UNIFIED.md               ← Unified Multimodal Models: in-depth reference
│   ├── WORLD_MODELS.md          ← World Models: in-depth reference
│   ├── ARENA.md                 ← Arena Leaderboard: full rankings & analysis
│   │
│   ├── index.html               ← Website: landing page
│   ├── blog.html                ← Website: curated technical blog posts (73 posts)
│   ├── arena.html               ← Website: interactive arena leaderboards
│   ├── style.css                ← Website: design system
│   ├── script.js                ← Website: interactive features & search
│   ├── sitemap.xml              ← Website: SEO sitemap
│   ├── robots.txt               ← Website: crawler directives
│   ├── 404.html                 ← Website: custom error page
│   ├── t2i.html / t2v.html ... ← Website: pillar hub pages
│   ├── t2i/ t2v/ i2v/ ...      ← Website: sub-domain detail pages
│   └── blog/                    ← Website: all blog posts page
```

| Document | Content Scope | Coverage |
|:---------|:-------------|:--------:|
| [**T2I.md**](docs/T2I.md) | Foundational architectures, face synthesis, controllable generation, editing, safety, cross-modal extensions, arena rankings | 250+ papers |
| [**T2V.md**](docs/T2V.md) | Foundation T2V models, controllable synthesis, I2V animation, video editing, benchmarks, datasets | 370+ papers |
| [**3D_VISION.md**](docs/3D_VISION.md) | 3D Gaussian Splatting, NeRF, SLAM, LLM-3D understanding, robotics, navigation | 500+ papers |
| [**4D_VISION.md**](docs/4D_VISION.md) | Depth estimation, 3D/4D tracking, reconstruction, dynamic scenes, human motion, physics simulation | 500+ papers |
| [**UNIFIED.md**](docs/UNIFIED.md) | Diffusion, autoregressive, hybrid, any-to-any unified models, evaluation benchmarks | 120+ models |
| [**WORLD_MODELS.md**](docs/WORLD_MODELS.md) | Theory, game simulation, autonomous driving, video generation, embodied AI, MBRL | 200+ papers |
| [**ARENA.md**](docs/ARENA.md) | LM Arena & Artificial Analysis leaderboards, 46 ranked models, Elo methodology | 46 models |

---

## Source Repositories

OpenMM-Arena systematically consolidates and cross-references knowledge from **11 foundational open-source repositories**:

| Repository | Primary Domain | Maintainer |
|:-----------|:--------------|:-----------|
| [Awesome-Text-to-Image](https://github.com/Yutong-Zhou-cv/Awesome-Text-to-Image) | Text-to-Image Generation | Yutong Zhou *et al.* |
| [Awesome-T2V-Generation](https://github.com/soraw-ai/Awesome-Text-to-Video-Generation) | Text-to-Video Generation | soraw-ai |
| [Awesome-Video-Diffusion](https://github.com/showlab/Awesome-Video-Diffusion) | Video Diffusion Models | ShowLab |
| [Awesome-3DGS](https://github.com/MrNeRF/awesome-3D-gaussian-splatting) | 3D Gaussian Splatting | MrNeRF |
| [Awesome-3DReconstruction](https://github.com/openMVG/awesome_3DReconstruction_list) | 3D Reconstruction | OpenMVG |
| [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) | LLM-3D Understanding | ActiveVisionLab |
| [Awesome-3D-Vision](https://github.com/Hardy-Uint/awesome-3D-vision) | 3D Vision (General) | Hardy-Uint |
| [Awesome-NeRF-3DGS-SLAM](https://github.com/3D-Vision-World/awesome-NeRF-and-3DGS-SLAM) | NeRF & 3DGS-based SLAM | 3D-Vision-World |
| [Awesome-4D-SI](https://github.com/yukangcao/Awesome-4D-Spatial-Intelligence) | 4D Spatial Intelligence | Yukang Cao |
| [Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | World Models | Siqiao Huang *et al.* |
| [Awesome-Unified-MM](https://github.com/AIDC-AI/Awesome-Unified-Multimodal-Models) | Unified Multimodal Models | AIDC-AI / Zhang *et al.* |

---

## Key Features

| Feature | Description |
|:--------|:------------|
| **2000+ Papers Catalogued** | Among the most comprehensive multimodal AI paper collections available — meticulously organized with full bibliographic citations, arXiv links, and venue information |
| **Taxonomic Organization** | Navigate a carefully structured hierarchy — from high-level research pillars through thematic sub-domains to individual papers, with principled categorization by chronological era and methodological paradigm |
| **Arena Leaderboards** | Real-time rankings derived from 3.9M+ human preference votes — enabling head-to-head model comparison via Elo scores, win rates, and comprehensive performance statistics |
| **73 Curated Blog Posts** | An anthology of authoritative technical blog posts from leading AI laboratories (BFL, Google DeepMind, OpenAI, Meta AI, NVIDIA, Stability AI, ByteDance, and others) |
| **Smart Search & Filtering** | Real-time search, sortable tables, year-based filtering, and keyboard shortcuts for efficient navigation |
| **Dark Mode** | Full dark-mode support with a carefully designed color scheme preserving readability and contrast |
| **Responsive Design** | Optimized for desktop, tablet, and mobile viewing with collapsible sidebar navigation |
| **Continuously Updated** | Maintained in pace with the latest developments — new publications from CVPR, ICLR, NeurIPS, ECCV, and arXiv are integrated regularly |
| **Open Source** | Released under the MIT License — community-driven, with contributions welcome from the global research community |

---

## Quick Start

**Browse online (recommended):**

> Visit [**openenvision-lab.github.io/OpenMM-Arena**](https://openenvision-lab.github.io/OpenMM-Arena/)

**Run locally:**

```bash
git clone https://github.com/OpenEnvision-Lab/OpenMM-Arena.git
cd OpenMM-Arena/docs
python -m http.server 8000
# Navigate to http://localhost:8000 in your browser
```

**Keyboard shortcuts** (on the website):

| Key | Action |
|:---:|:-------|
| `Cmd/Ctrl + K` | Open global search |
| `D` | Toggle dark mode |
| `[` | Toggle sidebar |
| `?` | Display all shortcuts |

---

## Contributing

We welcome contributions from the research community. There are several ways to participate:

- **Adding papers** — Submit a pull request incorporating new publications into any of the seven research pillars
- **Updating leaderboards** — Help maintain current arena rankings as new models are evaluated
- **Correcting errors** — Report or resolve citation errors, broken links, or taxonomic misclassifications
- **Proposing improvements** — Open an issue with suggestions for better organization or new content areas
- **Disseminating the resource** — Star the repository, share on academic and social platforms, and cite in your publications

### Increasing Visibility

If you find OpenMM-Arena valuable for your research, please consider:

1. **Starring this repository** to increase its visibility within the GitHub community
2. **Sharing on academic platforms** — Twitter/X, Reddit [r/MachineLearning](https://www.reddit.com/r/MachineLearning/), Hacker News, Papers With Code
3. **Citing in your publications** — see the [Citation](#citation) section below
4. **Cross-referencing** — if you maintain a related awesome list or survey, consider linking to OpenMM-Arena

---

## Recommended GitHub Topics

> For repository maintainers: please add these topics in the GitHub repository settings to maximize discoverability.

`multimodal-ai` `text-to-image` `text-to-video` `image-to-video` `3d-vision` `4d-vision` `world-models` `diffusion-models` `generative-ai` `computer-vision` `deep-learning` `awesome-list` `neural-radiance-fields` `gaussian-splatting` `research-papers` `benchmark` `leaderboard` `arena` `survey` `paper-collection`

---

## Citation

If you find **OpenMM-Arena** useful for your research, please consider citing:

```bibtex
@misc{openmmarena2025,
    title     = {OpenMM-Arena: A Comprehensive Compendium for Multimodal AI Research},
    author    = {Juanxi Tian},
    year      = {2025},
    journal   = {GitHub repository},
    url       = {https://github.com/OpenEnvision-Lab/OpenMM-Arena}
}
```

<details>
<summary><b>Cite foundational works</b></summary>

```bibtex
@inproceedings{zhou2023vision,
  title     = {Vision + Language Applications: A Survey},
  author    = {Zhou, Yutong and Shimada, Nobutaka},
  booktitle = {CVPRW},
  year      = {2023}
}

@misc{huang2025awesomeworldmodels,
  title  = {Awesome-World-Models},
  author = {Siqiao Huang},
  year   = {2025},
  url    = {https://github.com/knightnemo/Awesome-World-Models}
}

@article{zhang2025unified,
  title   = {Unified Multimodal Understanding and Generation Models},
  author  = {Zhang, Xinjie and others},
  journal = {arXiv preprint arXiv:2505.02567},
  year    = {2025}
}
```

</details>

---

<div align="center">

**OpenMM-Arena** belongs to **OpenEnvision Lab**

*Curated with scholarly rigor for the multimodal AI research community*

Last updated: February 2026

[Website](https://openenvision-lab.github.io/OpenMM-Arena/) · [GitHub](https://github.com/OpenEnvision-Lab/OpenMM-Arena) · [Issues](https://github.com/OpenEnvision-Lab/OpenMM-Arena/issues)

</div>
