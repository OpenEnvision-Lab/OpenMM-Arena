<div align="center">

<img src="docs/logo.png" alt="OpenMM-Arena Logo" width="200"/>

# OpenMM-Arena

### *A Comprehensive Compendium for Multimodal Artificial Intelligence Research*

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Website](https://img.shields.io/badge/Website-Live-0077B6)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Papers](https://img.shields.io/badge/Papers-2000+-2563eb)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Models](https://img.shields.io/badge/Arena_Models-46-f59e0b)](https://openenvision-lab.github.io/OpenMM-Arena/t2i/arena.html)
[![Benchmarks](https://img.shields.io/badge/Benchmarks-100+-059669)](https://openenvision-lab.github.io/OpenMM-Arena/)
[![Datasets](https://img.shields.io/badge/Datasets-90+-8b5cf6)](https://openenvision-lab.github.io/OpenMM-Arena/)

**The definitive, taxonomically organized knowledge base that unifies seven converging research frontiers of multimodal AI — spanning 2000+ papers, 46 arena-ranked models, 100+ benchmarks, and 90+ datasets — providing researchers with a single, authoritative cross-domain reference.**

[**Explore the Website**](https://openenvision-lab.github.io/OpenMM-Arena/) · [**Arena Leaderboard**](https://openenvision-lab.github.io/OpenMM-Arena/t2i/arena.html) · [**Star on GitHub**](https://github.com/OpenEnvision-Lab/OpenMM-Arena)

</div>

---

## Overview

The field of multimodal artificial intelligence has witnessed an unprecedented convergence of historically independent research traditions. **OpenMM-Arena** serves as the centralized knowledge base that organizes, maps, bridges, and catalogues this expansive landscape across **seven research pillars**:

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

> **2000+ Papers** · **7 Research Pillars** · **46 Arena-Ranked Models** · **100+ Benchmarks** · **90+ Datasets** · **11 Source Repositories**

---

## Seven Research Pillars

### [Text-to-Image Generation](docs/T2I.md)

> 250+ papers · 46 arena-ranked models · 6 sub-domains

The progressive evolution of text-conditioned visual synthesis — from GANs through diffusion models to autoregressive transformers. Covers foundational models (FLUX.2, Seedream, Imagen 3), controllable generation (ControlNet, GLIGEN), text-guided editing (InstructPix2Pix, DreamBooth), safety & bias, and comprehensive arena leaderboards with 3.9M+ human votes.

**Sub-domains:** Models & Face Synthesis · Control & Composition · Editing & Personalization · Safety & Applications · Cross-Modal Extensions · Arena & Benchmarks

---

### [Text-to-Video Generation](docs/T2V.md)

> 200+ papers · 25+ datasets · 3 sub-domains

Foundation text-to-video models from GANs to diffusion transformers — covering Sora, Wan 2.1, Veo 2, CogVideoX, and the latest controllable and efficient video synthesis approaches. Includes long video generation, temporal coherence, and large-scale video-text datasets.

**Sub-domains:** Foundation T2V Models · Controllable Synthesis · Benchmarks & Datasets

---

### [Image-to-Video Generation](docs/T2V.md#image-to-video)

> 170+ papers · 20+ applications · 2 sub-domains

Image animation, character-driven video synthesis, talking head generation, video editing, motion transfer, audio synthesis for video, and enhancement techniques. Bridges static imagery with temporal dynamics through learned motion priors. *(Covered within the T2V deep-dive document.)*

**Sub-domains:** Animation & Portraits · Video Editing

---

### [3D Vision](docs/3D_VISION.md)

> 500+ papers · 6 sub-domains

3D Gaussian Splatting, Neural Radiance Fields (NeRF), text/image-to-3D generation, LLM-3D understanding, NeRF-SLAM, GS-SLAM, visual/LiDAR SLAM, robotics manipulation, navigation, and localization. Extends generative AI into the spatial domain.

**Sub-domains:** 3D Gaussian Splatting · NeRF · NeRF-SLAM · GS-SLAM · LLM-3D · Robotics

---

### [4D Spatial Intelligence](docs/4D_VISION.md)

> 500+ papers · 6 sub-domains

The temporal dimension of 3D understanding — depth & camera pose estimation, dense 3D/4D point tracking, scene reconstruction, 4D dynamic scenes via deformable NeRFs and 4DGS, human-centric motion capture, and physics-based simulation.

**Sub-domains:** Geometry & Depth · 3D/4D Tracking · Reconstruction · Dynamic Scenes · Human-Centric · Physics-Based

---

### [Unified Multimodal Models](docs/UNIFIED.md)

> 120+ models · 30+ benchmarks · 3 sub-domains

Architectures that jointly understand and generate across modalities — diffusion-based unified models, autoregressive MLLMs with pixel & semantic encoding, hybrid AR-diffusion architectures, and any-to-any systems. Plus evaluation benchmarks and training corpora.

**Sub-domains:** Models & Architectures · Datasets & Training Corpora · Evaluation & Benchmarks

---

### [World Models](docs/WORLD_MODELS.md)

> 200+ papers · 6 theory themes · 6 sub-domains

Structured environment dynamics for game simulation, autonomous driving, embodied manipulation, model-based RL, video generation as world simulation, and theoretical foundations. From Ha & Schmidhuber to Sora, Cosmos, and Genie.

**Sub-domains:** Theory & Surveys · Game Simulation · Video Generation · LiDAR Generation · Occupancy Generation · Embodied AI

---

## Arena Leaderboard Spotlight

> Source: [LM Arena](https://lmarena.ai/leaderboard/text-to-image) · **3.9M+ human preference votes** · **46 models** · Updated February 2026

| Rank | Model | Organization | Elo Score | License |
|:----:|-------|-------------|:---------:|:-------:|
| **1** | **GPT-Image-1.5** | OpenAI | **1248** | Proprietary |
| **2** | **Gemini-3-Pro Image 2K** | Google | **1237** | Proprietary |
| **3** | **Gemini-3-Pro Image** | Google | **1233** | Proprietary |
| 4 | Grok Imagine Image | xAI | 1174 | Proprietary |
| 5 | FLUX.2 Max | Black Forest Labs | 1169 | Proprietary |
| 6 | Grok Imagine Image Pro | xAI | 1166 | Proprietary |
| 7 | FLUX.2 Flex | Black Forest Labs | 1158 | Proprietary |
| 8 | Gemini 2.5 Flash Image | Google | 1157 | Proprietary |
| 9 | FLUX.2 Pro | Black Forest Labs | 1156 | Proprietary |
| 10 | HunyuanImage 3.0 | Tencent | 1151 | Community |

**[View Full Leaderboard (46 Models) →](docs/ARENA.md)**

### Key Insights

| Observation | Detail |
|:------------|:-------|
| **Proprietary Dominance** | Top 5 held by OpenAI, Google, and xAI |
| **Rapid Progress** | GPT-Image-1.5 (1248) vs GPT-Image-1 (1115) — 133 Elo improvement in one family |
| **Open-Weight Closing Gap** | Qwen-Image (Apache 2.0, Elo 1139) at rank 15; FLUX.2 Klein 4B (Apache 2.0, Elo 1021) |
| **Chinese Model Rise** | Alibaba, ByteDance, Tencent occupy multiple top-20 positions |

---

## Documentation Structure

```
OpenMM-Arena/
├── README.md                    ← You are here (main overview)
├── docs/
│   ├── T2I.md                   ← Text-to-Image deep dive
│   ├── T2V.md                   ← Text-to-Video deep dive
│   ├── 3D_VISION.md             ← 3D Vision deep dive
│   ├── 4D_VISION.md             ← 4D Spatial Intelligence deep dive
│   ├── UNIFIED.md               ← Unified Multimodal Models deep dive
│   ├── WORLD_MODELS.md          ← World Models deep dive
│   ├── ARENA.md                 ← Arena Leaderboard & Rankings
│   │
│   ├── index.html               ← Website landing page
│   ├── style.css                ← Design system
│   ├── script.js                ← Interactive features
│   ├── t2i.html / t2v.html ... ← Pillar hub pages
│   ├── t2i/ t2v/ i2v/ ...      ← Sub-domain pages
│   └── logo.png                 ← Project logo
└── logo.png
```

| Document | Content | Papers |
|:---------|:--------|:------:|
| [**T2I.md**](docs/T2I.md) | Foundational models, face synthesis, controllable generation, editing, safety, cross-modal extensions | 250+ |
| [**T2V.md**](docs/T2V.md) | Foundation T2V, controllable synthesis, I2V animation, video editing, benchmarks | 370+ |
| [**3D_VISION.md**](docs/3D_VISION.md) | 3DGS, NeRF, SLAM, LLM-3D understanding, robotics | 500+ |
| [**4D_VISION.md**](docs/4D_VISION.md) | Depth estimation, tracking, reconstruction, dynamic scenes, human motion, physics | 500+ |
| [**UNIFIED.md**](docs/UNIFIED.md) | Diffusion, autoregressive, hybrid, any-to-any unified models, evaluation | 120+ |
| [**WORLD_MODELS.md**](docs/WORLD_MODELS.md) | Theory, game sim, driving, video gen, embodied AI, MBRL | 200+ |
| [**ARENA.md**](docs/ARENA.md) | LM Arena & Artificial Analysis leaderboards, 46 ranked models, metrics | 46 models |

---

## Benchmarks & Metrics

### Evaluation Benchmarks

| Category | Key Benchmarks |
|:---------|:---------------|
| **Multimodal Understanding** | General-Bench, MMMU, MM-Vet v2, MMBench, SEED-Bench-2, GQA |
| **Image Generation** | GenExam, KRIS-Bench, WISE, DreamBench++, T2I-CompBench++, GenAI-Bench, TIFA, HEIM |
| **World Models** | WorldScore, WorldSimBench, PhyWorld, Newton, WorldGym, EWMBench |
| **Interleaved Generation** | UniBench, OpenING, ISG, MMIE |
| **Arena Rankings** | LM Arena T2I (3.9M votes), Artificial Analysis T2I (15 categories) |

### Quantitative Metrics

| Metric | Full Name | Primary Domain |
|:-------|:----------|:---------------|
| **FID** | Frechet Inception Distance | Image Generation |
| **CLIP Score** | CLIP-based Alignment Score | T2I Alignment |
| **VQAScore** | VQA-based Score | T2I Faithfulness |
| **HPSv2** | Human Preference Score v2 | Human Preference |
| **ImageReward** | Image Reward | Human Preference |
| **LPIPS** | Learned Perceptual Image Patch Similarity | Image Quality |
| **TIFA** | Text-to-Image Faithfulness Assessment | Faithfulness |
| **DSG** | Davidsonian Scene Graph | Compositionality |
| **SSIM** | Structural Similarity Index | Image Quality |

---

## Datasets

> 90+ datasets across all modalities

| Category | Key Datasets | Scale |
|:---------|:-------------|:------|
| **Multimodal Understanding** | LAION-5B, DataComp, Infinity-MM, Cambrian-10M | 5.9B → 10M |
| **Text-to-Image** | LAION-Aesthetics, PixelProse, PD12M, CC-12M, SAM | 120M → 11M |
| **Image Editing** | ByteMorph-6M, UltraEdit, AnyEdit, ImgEdit | 6M → 1.2M |
| **Interleaved** | OmniCorpus (8B), OBELICS (141M), Multimodal C4 (101M) | 8B → 101M |
| **Video-Text** | WebVid-10M, InternVid, HD-VILA-100M, Panda-70M | 100M → 10M |

---

## Source Repositories

OpenMM-Arena systematically consolidates knowledge from **11 foundational open-source repositories**:

| Repository | Domain | Maintainer |
|:-----------|:-------|:-----------|
| [Awesome-Text-to-Image](https://github.com/Yutong-Zhou-cv/Awesome-Text-to-Image) | Text-to-Image | Yutong Zhou *et al.* |
| [Awesome-T2V-Generation](https://github.com/soraw-ai/Awesome-Text-to-Video-Generation) | Text-to-Video | soraw-ai |
| [Awesome-Video-Diffusion](https://github.com/showlab/Awesome-Video-Diffusion) | Video Diffusion | ShowLab |
| [Awesome-3DGS](https://github.com/MrNeRF/awesome-3D-gaussian-splatting) | 3D Gaussian Splatting | MrNeRF |
| [Awesome-3DReconstruction](https://github.com/openMVG/awesome_3DReconstruction_list) | 3D Reconstruction | OpenMVG |
| [Awesome-LLM-3D](https://github.com/ActiveVisionLab/Awesome-LLM-3D) | LLM-3D | ActiveVisionLab |
| [Awesome-3D-Vision](https://github.com/Hardy-Uint/awesome-3D-vision) | 3D Vision | Hardy-Uint |
| [Awesome-NeRF-3DGS-SLAM](https://github.com/3D-Vision-World/awesome-NeRF-and-3DGS-SLAM) | NeRF & 3DGS SLAM | 3D-Vision-World |
| [Awesome-4D-SI](https://github.com/yukangcao/Awesome-4D-Spatial-Intelligence) | 4D Spatial Intelligence | Yukang Cao |
| [Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) | World Models | Siqiao Huang *et al.* |
| [Awesome-Unified-MM](https://github.com/AIDC-AI/Awesome-Unified-Multimodal-Models) | Unified Multimodal | AIDC-AI / Zhang *et al.* |

---

## Features

| Feature | Description |
|:--------|:------------|
| **2000+ Papers** | The most comprehensive multimodal AI paper collection, meticulously organized with citations and venues |
| **Taxonomic Organization** | Navigate from high-level pillars through sub-domains to individual papers |
| **Arena Leaderboards** | Real-time rankings from 3.9M+ human preference votes with Elo scores |
| **Smart Search & Filter** | Real-time search, sortable tables, year-based filtering, keyboard shortcuts |
| **Dark Mode** | Full dark mode support with carefully designed color scheme |
| **Responsive Design** | Optimized for desktop, tablet, and mobile browsing |
| **Continuously Updated** | New papers from CVPR, ICLR, NeurIPS, ECCV, and arXiv added regularly |
| **Open Source** | MIT licensed, community-driven, contributions welcome |

---

## Quick Start

**Browse online:** Visit [**openenvision-lab.github.io/OpenMM-Arena**](https://openenvision-lab.github.io/OpenMM-Arena/)

**Run locally:**
```bash
git clone https://github.com/OpenEnvision-Lab/OpenMM-Arena.git
cd OpenMM-Arena/docs
# Open index.html in your browser, or:
python -m http.server 8000
# Then visit http://localhost:8000
```

**Keyboard shortcuts** (on the website):
| Key | Action |
|:---:|:-------|
| `Cmd/Ctrl + K` | Search papers |
| `D` | Toggle dark mode |
| `[` | Toggle sidebar |
| `?` | Show all shortcuts |

---

## Contributing

We welcome contributions from the research community! You can help by:

- **Adding papers**: Submit a PR with new papers in any of the 7 pillars
- **Updating leaderboards**: Help keep arena rankings current
- **Fixing errors**: Report or fix citation errors, broken links, or categorization issues
- **Suggesting improvements**: Open an issue with ideas for better organization

---

## Citation

If you find **OpenMM-Arena** useful for your research, please consider citing:

```bibtex
@misc{openmmarena2025,
    title     = {OpenMM-Arena: A Comprehensive Compendium for Multimodal AI Research},
    author    = {OpenMM-Arena Contributors},
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
