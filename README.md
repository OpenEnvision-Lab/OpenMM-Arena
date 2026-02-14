<div align="center">

<img src="logo.png" alt="OpenMM-Arena Logo" width="180"/>

# 🏟️ OpenMM-Arena

### *A Comprehensive Compendium for Multimodal Artificial Intelligence Research*

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Website](https://img.shields.io/badge/Website-OpenMM--Arena-0077B6)](./docs/index.html)
[![Papers](https://img.shields.io/badge/Papers-500+-2563eb)](./docs/index.html)
[![Benchmarks](https://img.shields.io/badge/Benchmarks-50+-059669)](./docs/index.html#benchmarks)

**A meticulously curated, taxonomically organized knowledge base that unifies the research landscapes of Text-to-Image Synthesis, World Models, and Unified Multimodal Understanding & Generation — providing researchers with a single, authoritative reference encompassing models, architectures, benchmarks, datasets, and theoretical foundations.**

[🌐 Website](./docs/index.html) · [📖 Paper Catalogue](#-text-to-image-generation) · [📊 Benchmarks](#-benchmarks-metrics--evaluation-protocols) · [💾 Datasets](#-datasets--training-corpora) · [🧠 Theory](#-theory-explainability--position-papers)

---

*Systematically consolidated from three foundational repositories:*

[Awesome-Text-to-Image](https://github.com/Yutong-Zhou-cv/Awesome-Text-to-Image) · [Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models) · [Awesome-Unified-Multimodal-Models](https://github.com/AIDC-AI/Awesome-Unified-Multimodal-Models)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Survey Papers & Foundational References](#-survey-papers--foundational-references)
- [Text-to-Image Generation](#-text-to-image-generation)
  - [Foundational T2I — Diffusion & Transformer Era (2024–2025)](#foundational-t2i--diffusion--transformer-era-20242025)
  - [Foundational T2I — Latent Diffusion & GAN Era (2022–2023)](#foundational-t2i--latent-diffusion--gan-era-20222023)
  - [Text-to-Face Synthesis](#text-to-face-synthesis)
  - [Controllable Generation](#controllable-generation)
  - [Prompt Engineering & Optimization](#prompt-engineering--optimization)
  - [Evaluation, Safety & Bias](#evaluation-safety--bias)
- [Unified Multimodal Models](#-unified-multimodal-understanding--generation)
  - [Diffusion-Based Unified Models](#diffusion-based-unified-models)
  - [Autoregressive MLLM — Pixel & Semantic Encoding](#autoregressive-mllm--pixel--semantic-encoding)
  - [Hybrid Encoding & AR-Diffusion Architectures](#hybrid-encoding--ar-diffusion-architectures)
  - [Any-to-Any Multimodal Models](#any-to-any-multimodal-models)
- [World Models](#-world-models)
  - [Foundation World Models](#foundation-world-models)
  - [Game Simulation](#game-simulation)
  - [Autonomous Driving](#autonomous-driving)
  - [Embodied AI](#embodied-ai--manipulation-navigation--locomotion)
  - [World Models × VLAs & MBRL](#world-models--vlas--model-based-rl)
  - [Scientific World Models](#scientific-world-models)
- [Cross-Modal Synthesis & Transfer](#-cross-modal-synthesis--transfer)
- [Benchmarks, Metrics & Evaluation Protocols](#-benchmarks-metrics--evaluation-protocols)
- [Community Arena Leaderboards](#-community-arena-leaderboards)
  - [LM Arena T2I Leaderboard](#lm-arena-text-to-image-leaderboard)
  - [Artificial Analysis T2I Arena](#artificial-analysis-text-to-image-arena)
- [Datasets & Training Corpora](#-datasets--training-corpora)
- [Theory, Explainability & Position Papers](#-theory-explainability--position-papers)
- [Quantitative Metrics Reference](#-quantitative-metrics-reference)
- [Acknowledgements](#-acknowledgements)
- [Citation](#-citation)

---

## 🔭 Overview

The landscape of multimodal artificial intelligence has undergone transformative advances, converging multiple historically independent research traditions — text-to-image synthesis, world modeling, and unified multimodal understanding-generation — into a cohesive and rapidly evolving field. **OpenMM-Arena** serves as the definitive, centralized knowledge base that:

- 🔍 **Organizes** the rapidly growing body of multimodal research across all application domains, providing a navigable, taxonomically principled structure
- 🗺️ **Maps** architectural paradigms from GANs through Diffusion Models to Autoregressive Transformers, capturing each generation's distinctive contributions
- 🤝 **Bridges** communities working on text-to-image synthesis, world models, embodied AI, and unified multimodal systems through a shared reference vocabulary
- 📊 **Catalogues** benchmarks, datasets, and quantitative metrics for rigorous, reproducible comparison across methods and modalities
- 🚀 **Tracks** state-of-the-art developments from foundation models through application-specific innovations at the research frontier

> **Scope.** This compendium covers the period from the early GAN-based text-to-image methods (c. 2016) through the latest foundation world models and unified multimodal architectures (2025), with particular emphasis on the post-diffusion era (2022–present).

---

## 📑 Survey Papers & Foundational References

### Text-to-Image & Vision-Language Surveys
| Title | Domain | Venue | Year |
|-------|--------|-------|------|
| **Vision + Language Applications: A Survey** | T2I / V&L | CVPRW | 2023 |
| **Holistic Evaluation of Text-To-Image Models** | Evaluation | NeurIPS | 2023 |

### World Model Surveys
| Title | Domain | Venue | Year |
|-------|--------|-------|------|
| **Is Sora a World Simulator? A Comprehensive Survey on General World Models and Beyond** | General | arXiv | 2024 |
| **A Comprehensive Survey on World Models for Embodied AI** | Embodied | arXiv | 2024 |
| **A Survey of World Models for Autonomous Driving** | Driving | arXiv | 2024 |
| **3D and 4D World Modeling: A Survey** | 3D/4D | arXiv | 2024 |
| **Understanding World or Predicting Future? A Comprehensive Survey of World Models** | General | arXiv | 2024 |
| **From Masks to Worlds: A Hitchhiker's Guide to World Models** | General | arXiv | 2024 |
| **World Models: The Safety Perspective** | Safety | arXiv | 2024 |
| **Exploring the Evolution of Physics Cognition in Video Generation: A Survey** | Physics | arXiv | 2024 |
| **A Survey: Learning Embodied Intelligence from Physical Simulators and World Models** | Embodied | arXiv | 2024 |

### Unified Multimodal Model Surveys
| Title | Venue | Year |
|-------|-------|------|
| **Unified Multimodal Understanding and Generation Models: Advances, Challenges, and Opportunities** | arXiv | 2025 |

---

## 🎨 Text-to-Image Generation

> *The progressive evolution of text-conditioned visual synthesis has traversed three paradigmatic epochs: adversarial training (GAN era), denoising diffusion, and autoregressive next-token prediction. Each generation has brought dramatic improvements in photorealistic fidelity, compositional reasoning, and fine-grained controllability.*

### Foundational T2I — Diffusion & Transformer Era (2024–2025)
| Model | Title | Venue | Year | Resources |
|-------|-------|-------|------|-----------|
| **Imagen 3** ⭐ | Imagen 3 | Google DeepMind | 2024 | [Paper](https://arxiv.org/) |
| **PixArt-α** ⭐ | Fast Training of Diffusion Transformer for Photorealistic Text-to-Image Synthesis | ICLR | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **PixArt-Σ** | Weak-to-Strong Training of Diffusion Transformer for 4K Text-to-Image Generation | arXiv | 2024 | [Paper](https://arxiv.org/) |
| **SDXL-Lightning** ⭐ | Progressive Adversarial Diffusion Distillation | arXiv | 2024 | [Paper](https://arxiv.org/) · [HF](https://huggingface.co/) |
| **Kolors** | Effective Training of Diffusion Model for Photorealistic Text-to-Image Synthesis | Kuaishou | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **MARS** | Mixture of Auto-Regressive Models for Fine-grained Text-to-Image Synthesis | arXiv | 2024 | [Paper](https://arxiv.org/) |
| **Kandinsky 3** | Text-to-Image Synthesis for Multifunctional Generative Framework | EMNLP | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **RealCompo** ⭐ | Dynamic Equilibrium between Realism and Compositionality | arXiv | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **ECLIPSE** | A Resource-Efficient Text-to-Image Prior for Image Generations | CVPR | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Ranni** | Taming Text-to-Image Diffusion for Accurate Instruction Following | CVPR | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **DiffusionGPT** | LLM-Driven Text-to-Image Generation System | arXiv | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Playground v2.5** | Three Insights towards Enhancing Aesthetic Quality in T2I Generation | arXiv | 2024 | [Paper](https://arxiv.org/) |

### Foundational T2I — Latent Diffusion & GAN Era (2022–2023)
| Model | Title | Venue | Year | Resources |
|-------|-------|-------|------|-----------|
| **Stable Diffusion (LDM)** ⭐⭐ | High-Resolution Image Synthesis with Latent Diffusion Models | CVPR | 2022 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Imagen** | Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding | NeurIPS | 2022 | [Paper](https://arxiv.org/) |
| **DALL·E 2** | Hierarchical Text-Conditional Image Generation with CLIP Latents | arXiv | 2022 | [Paper](https://arxiv.org/) |
| **Parti** | Scaling Autoregressive Models for Content-Rich Text-to-Image Generation | TMLR | 2022 | [Paper](https://arxiv.org/) |
| **ControlNet** ⭐⭐ | Adding Conditional Control to Text-to-Image Diffusion Models | ICCV | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **GLIGEN** | Open-Set Grounded Text-to-Image Generation | CVPR | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Attend-and-Excite** ⭐ | Attention-Based Semantic Guidance for Text-to-Image Diffusion Models | arXiv | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **GALIP** | Generative Adversarial CLIPs for Text-to-Image Synthesis | CVPR | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Muse** | Text-To-Image Generation via Masked Generative Transformers | arXiv | 2023 | [Paper](https://arxiv.org/) |
| **StyleDrop** ⭐ | Text-to-Image Generation in Any Style | arXiv | 2023 | [Paper](https://arxiv.org/) |
| **Prompt-Free Diffusion** ⭐⭐ | Taking "Text" out of Text-to-Image Diffusion Models | arXiv | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Visual ChatGPT** ⭐⭐ | Talking, Drawing and Editing with Visual Foundation Models | arXiv | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |

### Text-to-Face Synthesis

> *A specialized subfield focusing on generating and manipulating human facial imagery from textual descriptions, encompassing both 2D face synthesis and emerging 3D animatable avatar generation.*

| Model | Title | Venue | Year | Resources |
|-------|-------|-------|------|-----------|
| **PreciseControl** | Enhancing Text-To-Image Diffusion Models with Fine-Grained Attribute Control | ECCV | 2024 | [Paper](https://arxiv.org/) |
| **CosmicMan** | A Text-to-Image Foundation Model for Humans | CVPR | 2024 | [Paper](https://arxiv.org/) |
| **DreamFace** | Progressive Generation of Animatable 3D Faces under Text Guidance | SIGGRAPH | 2023 | [Paper](https://arxiv.org/) |
| **Collaborative Diffusion** | Multi-Modal Face Generation and Editing | CVPR | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **AnyFace** | Free-style Text-to-Face Synthesis and Manipulation | CVPR | 2022 | [Paper](https://arxiv.org/) |
| **TediGAN** | Text-Guided Diverse Image Generation and Manipulation | CVPR | 2021 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |

### Controllable Generation
| Model | Title | Venue | Year | Resources |
|-------|-------|-------|------|-----------|
| **ControlNet** ⭐⭐ | Adding Conditional Control to Text-to-Image Diffusion Models | ICCV | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Uni-ControlNet** | All-in-One Control to Text-to-Image Diffusion Models | arXiv | 2023 | [Paper](https://arxiv.org/) |
| **GLIGEN** | Open-Set Grounded Text-to-Image Generation | CVPR | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Multi-Concept Customization** ⭐ | Multi-Concept Customization of Text-to-Image Diffusion | CVPR | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **DreamBooth** | Fine Tuning Text-to-Image Diffusion for Subject-Driven Generation | CVPR | 2023 | [Paper](https://arxiv.org/) |
| **Blended Latent Diffusion** ⭐⭐ | Blended Latent Diffusion | SIGGRAPH | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |

### Prompt Engineering & Optimization
| Title | Venue | Year | Resources |
|-------|-------|------|-----------|
| **PromptCharm: Text-to-Image Generation through Multi-modal Prompting and Refinement** | CHI | 2024 | [Paper](https://arxiv.org/) |
| **BeautifulPrompt: Towards Automatic Prompt Engineering for Text-to-Image Synthesis** | EMNLP | 2023 | [Paper](https://arxiv.org/) |
| **Optimizing Prompts for Text-to-Image Generation** | arXiv | 2022 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Design Guidelines for Prompt Engineering Text-to-Image Generative Models** | CHI | 2022 | [Paper](https://arxiv.org/) |

### Evaluation, Safety & Bias
| Title | Focus | Venue | Year | Resources |
|-------|-------|-------|------|-----------|
| **Rich Human Feedback for Text-to-Image Generation** (Best Paper) | Human Feedback | CVPR | 2024 | [Paper](https://arxiv.org/) |
| **OpenBias: Open-set Bias Detection in Text-to-Image Generative Models** | Bias & Fairness | CVPR | 2024 | [Paper](https://arxiv.org/) |
| **SafeGen: Mitigating Unsafe Content Generation in T2I Models** | Safety | arXiv | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **DIAGNOSIS: Detecting Unauthorized Data Usages in T2I Diffusion Models** | Data Privacy | ICLR | 2024 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |
| **Holistic Evaluation of Text-To-Image Models** ⭐⭐ | Holistic Evaluation | NeurIPS | 2023 | [Paper](https://arxiv.org/) · [Code](https://github.com/) |

---

## 🔮 Unified Multimodal Understanding & Generation

> *The pursuit of unified multimodal models represents a fundamental paradigm shift: rather than maintaining separate systems for visual understanding and visual generation, these architectures learn both capabilities within a shared representational space. Approaches are organized by backbone architecture (diffusion, autoregressive, hybrid) and visual tokenization strategy (pixel, semantic, learnable query, hybrid encoding).*

### Diffusion-Based Unified Models
| Model | Title | Date | Code |
|-------|-------|------|------|
| **UniModel** | A Visual-Only Framework for Unified Multimodal Understanding and Generation | 2025/11 | — |
| **Lavida-O** | Elastic Large Masked Diffusion Models for Unified Multimodal Understanding and Generation | 2025/09 | [Code](https://github.com/) |
| **MMaDA** | Multimodal Large Diffusion Language Models | 2025/05 | [Code](https://github.com/Gen-Verse/MMaDA) |
| **Muddit** | Liberating Generation Beyond Text-to-Image with a Unified Discrete Diffusion Model | 2025/05 | [Code](https://github.com/M-E-AGI-Lab/Muddit) |
| **FUDOKI** | Discrete Flow-based Unified Understanding and Generation via Kinetic-Optimal Velocities | 2025/05 | — |
| **UniDisc** | Unified Multimodal Discrete Diffusion | 2025/03 | [Code](https://github.com/alexanderswerdlow/unidisc) |
| **Dual Diffusion** | Dual Diffusion for Unified Image Generation and Understanding | 2024/12 | [Code](https://github.com/zijieli-Jlee/Dual-Diffusion) |

### Autoregressive MLLM — Pixel & Semantic Encoding
| Model | Encoding | Title | Venue | Date |
|-------|----------|-------|-------|------|
| **MammothModa2** | Semantic | A Unified AR-Diffusion Framework for Multimodal Understanding and Generation | arXiv | 2025/11 |
| **Emu3.5** | Pixel | Native Multimodal Models are World Learners | arXiv | 2025/10 |
| **Ming-UniVision** | Semantic | Joint Image Understanding and Generation with a Unified Continuous Tokenizer | arXiv | 2025/10 |
| **OneCat** | Pixel | Decoder-Only Auto-Regressive Model for Unified Understanding and Generation | arXiv | 2025/09 |
| **Qwen-Image** | Semantic | Qwen-Image Technical Report | arXiv | 2025/08 |
| **X-Omni** | Semantic | Reinforcement Learning Makes Discrete AR Image Generative Models Great Again | arXiv | 2025/07 |
| **Ovis-U1** | Semantic | Ovis-U1 Technical Report | arXiv | 2025/06 |
| **OmniGen2** | Semantic | Exploration to Advanced Multimodal Generation | arXiv | 2025/06 |
| **Tar** | Semantic | Vision as a Dialect: Unifying Visual Understanding and Generation via Text-Aligned Representations | arXiv | 2025/06 |
| **UniWorld** | Semantic | High-Resolution Semantic Encoders for Unified Visual Understanding and Generation | arXiv | 2025/06 |
| **Selftok** | Pixel | Discrete Visual Tokens of Autoregression, by Diffusion, and for Reasoning | arXiv | 2025/05 |
| **TokLIP** | Pixel | Marry Visual Tokens to CLIP for Multimodal Comprehension and Generation | arXiv | 2025/05 |
| **Harmon** | Pixel | Harmonizing Visual Representations for Unified Multimodal Understanding and Generation | arXiv | 2025/03 |
| **UGen** | Pixel | Unified Autoregressive Multimodal Model with Progressive Vocabulary Learning | arXiv | 2025/03 |
| **DualToken** | Semantic | Towards Unifying Visual Understanding and Generation with Dual Visual Vocabularies | arXiv | 2025/03 |
| **UniTok** | Semantic | A Unified Tokenizer for Visual Generation and Understanding | arXiv | 2025/02 |
| **QLIP** | Semantic | Text-Aligned Visual Tokenization Unifies AR Multimodal Understanding and Generation | arXiv | 2025/02 |
| **Liquid** | Semantic | Language Models are Scalable and Unified Multi-modal Generators | arXiv | 2024/12 |
| **MetaMorph** | Semantic | Multimodal Understanding and Generation via Instruction Tuning | arXiv | 2024/12 |
| **SynerGen-VL** | Pixel | Towards Synergistic Image Understanding and Generation with Vision Experts and Token Folding | arXiv | 2024/12 |
| **ILLUME** | Semantic | Illuminating Your LLMs to See, Draw, and Self-Enhance | arXiv | 2024/12 |
| **PUMA** | Semantic | Empowering Unified MLLM with Multi-granular Visual Generation | arXiv | 2024/10 |
| **Emu3** | Pixel | Next-Token Prediction is All You Need | arXiv | 2024/09 |
| **VILA-U** | Semantic | Unified Foundation Model Integrating Visual Understanding and Generation | ICLR | 2024/09 |
| **ANOLE** | Pixel | An Open, Autoregressive, Native Large Multimodal Model for Interleaved Image-Text Generation | arXiv | 2024/07 |
| **Chameleon** | Pixel | Mixed-Modal Early-Fusion Foundation Models | arXiv | 2024/05 |
| **Emu2** | Semantic | Generative Multimodal Models are In-Context Learners | CVPR | 2023/12 |
| **LaVIT** | Semantic | Unified Language-Vision Pretraining in LLM with Dynamic Discrete Visual Tokenization | ICLR | 2023/09 |

### Hybrid Encoding & AR-Diffusion Architectures
| Model | Architecture | Title | Venue | Date |
|-------|-------------|-------|-------|------|
| **TUNA** | AR + Diffusion | Taming Unified Visual Representations for Native Unified Multimodal Models | arXiv | 2025/12 |
| **EMMA** | AR + Diffusion | Efficient Multimodal Understanding, Generation, and Editing with a Unified Architecture | arXiv | 2025/12 |
| **Skywork UniPic 2.0** | Query Enc. | Building Kontext Model with Online RL for Unified Multimodal Model | arXiv | 2025/09 |
| **Show-o2** | AR + Diffusion | Improved Native Unified Multimodal Models | arXiv | 2025/06 |
| **OpenUni** | Query Enc. | A Simple Baseline for Unified Multimodal Understanding and Generation | arXiv | 2025/05 |
| **MindOmni** | Hybrid Enc. | Unleashing Reasoning Generation in Vision Language Models with RGPO | arXiv | 2025/05 |
| **Mogao** | AR + Diffusion | An Omni Foundation Model for Interleaved Multi-Modal Generation | arXiv | 2025/05 |
| **BAGEL** | AR + Diffusion | Emerging Properties in Unified Multimodal Pretraining | arXiv | 2025/05 |
| **BLIP3-o** | Query Enc. | A Family of Fully Open Unified Multimodal Models | arXiv | 2025/05 |
| **VARGPT-v1.1** | Hybrid Enc. | Improve Visual AR Large Unified Model via Iterative Instruction Tuning and RL | arXiv | 2025/04 |
| **UniToken** | Hybrid Enc. | Harmonizing Multimodal Understanding and Generation through Unified Visual Encoding | CVPRW | 2025/04 |
| **OmniMamba** | Hybrid Enc. | Efficient and Unified Multimodal Understanding and Generation via State Space Models | arXiv | 2025/03 |
| **Janus-Pro** | Hybrid Enc. | Unified Multimodal Understanding and Generation with Data and Model Scaling | arXiv | 2025/01 |
| **VARGPT** | Hybrid Enc. | Unified Understanding and Generation in a Visual Autoregressive MLLM | arXiv | 2025/01 |
| **LMFusion** | AR + Diffusion | Adapting Pretrained Language Models for Multimodal Generation | arXiv | 2024/12 |
| **JanusFlow** | AR + Flow | Harmonizing Autoregression and Rectified Flow for Unified Multimodal Understanding | arXiv | 2024/11 |
| **TokenFlow** | Hybrid Enc. | Unified Image Tokenizer for Multimodal Understanding and Generation | CVPR | 2024/12 |
| **Show-o** | AR + Diffusion | One Single Transformer to Unify Multimodal Understanding and Generation | ICLR | 2024/08 |
| **Transfusion** | AR + Diffusion | Predict the Next Token and Diffuse Images with One Multi-Modal Model | ICLR | 2024/08 |
| **MonoFormer** | AR + Diffusion | One Transformer for Both Diffusion and Autoregression | arXiv | 2024/09 |
| **SEED-X** | Query Enc. | Multimodal Models with Unified Multi-granularity Comprehension and Generation | arXiv | 2024/04 |

### Any-to-Any Multimodal Models

> *Models capable of processing and generating across arbitrary modality combinations — text, image, audio, video, and speech — within a single unified framework.*

| Model | Title | Venue | Date | Code |
|-------|-------|-------|------|------|
| **Qwen3-Omni** | Qwen3-Omni Technical Report | arXiv | 2025/09 | [Code](https://github.com/QwenLM/Qwen3-Omni) |
| **Ming-Omni** | A Unified Multimodal Model for Perception and Generation | arXiv | 2025/06 | [Code](https://github.com/inclusionAI/Ming) |
| **M2-omni** | Advancing Omni-MLLM for Comprehensive Modality Support | arXiv | 2025/02 | — |
| **OmniFlow** | Any-to-Any Generation with Multi-Modal Rectified Flows | CVPR | 2024/12 | [Code](https://github.com/jacklishufan/OmniFlows) |
| **Spider** | Any-to-Many Multimodal LLM | arXiv | 2024/11 | — |
| **AnyGPT** | Unified Multimodal LLM with Discrete Sequence Modeling | arXiv | 2024/02 | [Code](https://github.com/OpenMOSS/AnyGPT) |
| **CoDi** ⭐⭐ | Any-to-Any Generation via Composable Diffusion | NeurIPS | 2023 | [Code](https://github.com/) |
| **NExT-GPT** | Any-to-Any Multimodal LLM | ICML | 2023/09 | [Code](https://github.com/NExT-GPT/NExT-GPT) |
| **Unified-IO 2** | Scaling Autoregressive Multimodal Models with Vision, Language, Audio, and Action | CVPR | 2023/12 | [Code](https://github.com/allenai/unified-io-2) |
| **ImageBind** ⭐⭐ | One Embedding Space To Bind Them All | CVPR | 2023 | [Code](https://github.com/) |

---

## 🌍 World Models

> *World models aim to learn internal representations of how the world works, enabling agents to predict future states, plan actions, and reason about counterfactuals. Originally rooted in model-based reinforcement learning (Ha & Schmidhuber, 2018) and Yann LeCun's vision of autonomous machine intelligence, the field has expanded dramatically to encompass interactive video generation, autonomous driving simulation, embodied manipulation, and scientific modeling.*

### Foundation World Models
| Model | Title | Representation | Year |
|-------|-------|---------------|------|
| **Genie 3** ⭐ | A new frontier for world models | Interactive Video | 2025 |
| **V-JEPA 2** ⭐ | Self-Supervised Video Models Enable Understanding, Prediction and Planning | Latent (JEPA) | 2025 |
| **Cosmos 2.5** ⭐ | Evolving the World Foundation Models for Physical AI | Video Generation | 2025 |
| **PAN** ⭐ | A World Model for General, Interactable, and Long-Horizon World Simulation | Interactive | 2025 |
| **Sora** ⭐ | Video generation models as world simulators | Video Generation | 2024 |
| **Genie 2** ⭐ | A Large-Scale Foundation World Model | Interactive Video | 2024 |
| **Genie** ⭐ | Generative Interactive Environments | Interactive Video | 2024 |
| **Cosmos** ⭐ | Cosmos World Foundation Model Platform for Physical AI | Video Generation | 2024 |
| **UniSim** ⭐ | Learning Interactive Real-World Simulators | Interactive | 2023 |
| **Pandora** ⭐ | Towards General World Model with Natural Language Actions and Video States | Interactive | 2024 |

### Game Simulation
| Model | Title | Space |
|-------|-------|-------|
| **GameNGen** ⭐ | Diffusion Models Are Real-Time Game Engines | Pixel |
| **MineWorld** | A Real-Time and Open-Source Interactive World Model on Minecraft | Pixel |
| **AnimeGamer** | Infinite Anime Life Simulation with Next Game State Prediction | Pixel |
| **GameFactory** | Creating New Games with Generative Interactive Videos | Pixel |
| **WORLDMEM** | Long-term Consistent World Simulation with Memory | Pixel |
| **DIAMOND** ⭐ | Diffusion for World Modeling: Visual Details Matter in Atari | Pixel |
| **Matrix-Game** ⭐ | Interactive World Foundation Model | Pixel |
| **Matrix-Game 2.0** ⭐ | Open-Source, Real-Time, and Streaming Interactive World Model | Pixel |
| **Oasis** | A Universe in a Transformer | Pixel |
| **HunyuanWorld 1.0** ⭐ | Generating Immersive, Explorable, and Interactive 3D Worlds | 3D Mesh |
| **Matrix-3D** ⭐ | Omnidirectional Explorable 3D World Generation | 3D Mesh |

### Autonomous Driving
| Model | Title |
|-------|-------|
| **Cosmos-Drive-Dreams** ⭐ | Scalable Synthetic Driving Data Generation with World Foundation Models |
| **Copilot4D** | Learning Unsupervised World Models for Autonomous Driving via Discrete Diffusion |
| **DrivingGPT** | Unifying Driving World Modeling and Planning with Multi-modal Autoregressive Transformers |
| **Doe-1** | Closed-Loop Autonomous Driving with Large World Model |
| **GEM** | A Generalizable Ego-Vision Multimodal World Model for Fine-Grained Control |
| **GAIA-2** ⭐ | A Controllable Multi-View Generative World Model for Autonomous Driving |
| **GAIA-1** | Introducing a Cutting-Edge Generative AI Model for Autonomy |
| **Vista** | A Generalizable Driving World Model with High Fidelity and Versatile Controllability |
| **DrivingWorld** | Constructing World Model for Autonomous Driving via Video GPT |
| **OccWorld** | Learning a 3D Occupancy World Model for Autonomous Driving |
| **Drive-WM** | Driving into the Future: Multiview Visual Forecasting and Planning with World Model |
| **CarDreamer** | Open-Source Learning Platform for World Model based Autonomous Driving |
| **SafeDreamer** | Safe Reinforcement Learning with World Models |
| **GenAD** | Generalized Predictive Model for Autonomous Driving |

### Embodied AI — Manipulation, Navigation & Locomotion
| Model | Title | Domain |
|-------|-------|--------|
| **TesserAct** ⭐ | Learning 4D Embodied World Models | Foundation |
| **DreamGen** ⭐ | Unlocking Generalization in Robot Learning through Video World Models | Foundation |
| **iVideoGPT** ⭐ | Interactive VideoGPTs are Scalable World Models | Foundation |
| **AgiBot-World** ⭐ | Large-scale Manipulation Platform for Scalable and Intelligent Embodied Systems | Manipulation |
| **FLARE** ⭐ | Robot Learning with Implicit World Modeling | Manipulation |
| **EnerVerse** ⭐ | Envisioning Embodied Future Space for Robotics Manipulation | Manipulation |
| **NWM** ⭐ | Navigation World Models | Navigation |
| **MindJourney** ⭐ | Test-Time Scaling with World Models for Spatial Reasoning | Navigation |
| **DWL** ⭐ | Advancing Humanoid Locomotion with Denoising World Model Learning | Locomotion |
| **Puppeteer** | Hierarchical World Models as Visual Whole-Body Humanoid Controllers | Locomotion |

### World Models × VLAs & Model-Based RL
| Model | Title | Focus |
|-------|-------|-------|
| **CoT-VLA** ⭐ | Visual Chain-of-Thought Reasoning for Vision-Language-Action Models | VLA |
| **WorldVLA** ⭐ | Towards Autoregressive Action World Model | VLA |
| **DreamVLA** ⭐ | A Vision-Language-Action Model Dreamed with Comprehensive World Knowledge | VLA |
| **Dreamer v4** ⭐ | Training Agents Inside of Scalable World Models | MBRL |
| **Dreamer v3** ⭐ | Mastering Diverse Domains through World Models | MBRL |
| **TD-MPC2** ⭐ | Scalable, Robust World Models for Continuous Control | MBRL |
| **DINO-WM** ⭐ | World Models on Pre-trained Visual Features enable Zero-shot Planning | Latent |
| **V-JEPA 2** ⭐ | Self-Supervised Video Models Enable Understanding, Prediction and Planning | JEPA |

### Scientific World Models
| Model | Domain | Title |
|-------|--------|-------|
| **CellFlux** ⭐ | Biology | Simulating Cellular Morphology Changes via Flow Matching |
| **Medical World Model** ⭐ | Medicine | Generative Simulation of Tumor Evolution for Treatment Planning |
| **SocioVerse** | Social Science | A World Model for Social Simulation Powered by LLM Agents |

---

## 🔄 Cross-Modal Synthesis & Transfer

> *Systematic approaches to bridging modality boundaries — text-guided image editing, text-to-video synthesis, text-to-3D generation, layout-conditioned synthesis, and speech/music generation.*

### Text + Image → Image / Video
| Model | Title | Venue | Year |
|-------|-------|-------|------|
| **AnimateDiff** ⭐⭐ | Animate Your Personalized Text-to-Image Diffusion Models | arXiv | 2023 |
| **InstructPix2Pix** | Learning to Follow Image Editing Instructions | CVPR | 2023 |
| **Blended Diffusion** ⭐⭐ | Text-driven Editing of Natural Images | CVPR | 2022 |
| **DreamBooth** | Fine Tuning T2I Diffusion for Subject-Driven Generation | CVPR | 2023 |
| **Break-A-Scene** ⭐⭐ | Extracting Multiple Concepts from a Single Image | SIGGRAPH Asia | 2023 |
| **MasaCtrl** ⭐⭐ | Tuning-free Mutual Self-Attention Control | arXiv | 2023 |
| **Text2LIVE** ⭐⭐ | Text-Driven Layered Image and Video Editing | arXiv | 2022 |
| **StyleCLIP** | Text-Driven Manipulation of StyleGAN Imagery | ICCV | 2021 |

### Text → Video
| Model | Title | Venue | Year |
|-------|-------|-------|------|
| **Sora** 💥 | Video Generation Models as World Simulators | OpenAI | 2024 |
| **Align your Latents** ⭐⭐ | High-Resolution Video Synthesis with Latent Diffusion Models | CVPR | 2023 |
| **LaVIE** | High-Quality Video Generation with Cascaded Latent Diffusion | arXiv | 2023 |
| **Emu Video** | Factorizing Text-to-Video Generation by Explicit Image Conditioning | arXiv | 2023 |
| **Make-A-Video** | Text-to-Video Generation without Text-Video Data | arXiv | 2022 |
| **Imagen Video** | High Definition Video Generation with Diffusion Models | arXiv | 2022 |
| **CogVideo** | Large-scale Pretraining for Text-to-Video via Transformers | arXiv | 2022 |

### Text → 3D / Motion / Shape
| Model | Title | Venue | Year |
|-------|-------|-------|------|
| **Meta 3D Gen** | Text-to-Mesh with High-Quality Geometry and PBR Materials | Meta | 2024 |
| **LATTE3D** | Large-scale Amortized Text-To-Enhanced3D Synthesis | arXiv | 2024 |
| **ProlificDreamer** | High-Fidelity and Diverse Text-to-3D with Variational Score Distillation | arXiv | 2023 |
| **DreamFusion** | Text-to-3D using 2D Diffusion | ICLR | 2023 |
| **Magic3D** | High-Resolution Text-to-3D Content Creation | arXiv | 2022 |
| **Point-E** | Generating 3D Point Clouds from Complex Prompts | arXiv | 2022 |
| **T2M-GPT** | Generating Human Motion from Textual Descriptions | arXiv | 2023 |

### Layout / Scene → Image & Other Modalities
| Model | Title | Venue | Year |
|-------|-------|-------|------|
| **InstanceDiffusion** | Instance-level Control for Image Generation | CVPR | 2024 |
| **LayoutDiffusion** | Controllable Diffusion Model for Layout-to-Image Generation | CVPR | 2023 |
| **SceneComposer** | Any-Level Semantic Image Synthesis | CVPR | 2023 |
| **MusicLM** ⭐ | Generating Music From Text | arXiv | 2023 |
| **ImageBind** ⭐⭐ | One Embedding Space To Bind Them All | CVPR | 2023 |
| **Lumina-T2X** | Transforming Text into Any Modality via Flow-based Large DiT | arXiv | 2024 |
| **S2IGAN** | Speech-to-Image Generation via Adversarial Learning | INTERSPEECH | 2020 |

---

## 📊 Benchmarks, Metrics & Evaluation Protocols

> *Rigorous, reproducible evaluation is the bedrock of scientific progress. This section catalogues standardized protocols for comparing multimodal systems across diverse capability dimensions — understanding, generation quality, compositional fidelity, physical plausibility, and human preference alignment.*

### Multimodal Understanding Benchmarks
| Benchmark | Evaluation Focus | Venue | Year | Code |
|-----------|-----------------|-------|------|------|
| **General-Bench** | Multimodal generalist evaluation | ICML | 2025 | [Code](https://github.com/path2generalist/General-Level) |
| **MMMU** | Multi-discipline multimodal understanding | CVPR | 2023 | [Code](https://github.com/MMMU-Benchmark/MMMU) |
| **MM-Vet v2** | Integrated capabilities of LMMs | arXiv | 2024 | [Code](https://github.com/yuweihao/MM-Vet) |
| **MMBench** | All-around multi-modal evaluation | ECCV | 2023 | [Code](https://github.com/open-compass/MMBench) |
| **SEED-Bench-2** | Generative comprehension | arXiv | 2023 | [Code](https://github.com/AILab-CVC/SEED-Bench) |
| **LAMM** | Language-assisted multimodal instruction tuning | NeurIPS | 2023 | [Code](https://github.com/) |
| **HaluEval** | Large-scale hallucination evaluation | EMNLP | 2023 | [Code](https://github.com/) |
| **GQA** | Real-world visual reasoning | CVPR | 2019 | [Code](https://github.com/) |

### Image Generation Benchmarks
| Benchmark | Evaluation Focus | Venue | Year | Code |
|-----------|-----------------|-------|------|------|
| **GenExam** | Multidisciplinary T2I examination | arXiv | 2025 | [Code](https://github.com/OpenGVLab/GenExam) |
| **KRIS-Bench** | Next-level intelligent image editing | NeurIPS | 2025 | [Code](https://github.com/mercurystraw/Kris_Bench) |
| **WISE** | World knowledge-informed semantic evaluation | arXiv | 2025 | [Code](https://github.com/PKU-YuanGroup/WISE) |
| **DreamBench++** | Human-aligned personalized image generation | ICLR | 2025 | [Code](https://github.com/yuangpeng/dreambench_plus) |
| **T2I-CompBench++** | Enhanced compositional T2I evaluation | TPAMI | 2025 | [Code](https://github.com/Karine-Huang/T2I-CompBench) |
| **GenAI-Bench** | Compositional text-to-visual generation | CVPR | 2024 | [Code](https://github.com/linzhiqiu/t2v_metrics) |
| **GenEval** | Object-focused T2I alignment | NeurIPS | 2023 | [Code](https://github.com/djghosh13/geneval) |
| **TIFA** | T2I faithfulness via QA | ICCV | 2023 | [Code](https://github.com/Yushi-Hu/tifa) |
| **HEIM** | Holistic evaluation of T2I models | NeurIPS | 2023 | [Code](https://github.com/stanford-crfm/helm) |
| **DrawBench** | Photorealistic T2I quality assessment | NeurIPS | 2022 | [Project](https://imagen.research.google/) |
| **PartiPrompts** | Content-rich T2I evaluation prompts | TMLR | 2022 | — |

### World Model & Interleaved Benchmarks
| Benchmark | Evaluation Focus | Domain |
|-----------|-----------------|--------|
| **WorldScore** | Unified evaluation for world generation | World Model |
| **WorldSimBench** | Video generation as world simulators | World Model |
| **PhyWorld** ⭐ | Physical law perspective evaluation | World Model |
| **Newton** | Interactive foundation world model benchmark | World Model |
| **WorldGym** ⭐ | Evaluating robot policies in world models | World Model |
| **EWMBench** | Scene, motion, semantic quality in embodied WMs | World Model |
| **UniBench** | Unified evaluation for unified multimodal models | Interleaved |
| **OpenING** | Open-ended interleaved image-text generation | Interleaved |
| **ISG** | Interleaved scene graphs for generation assessment | Interleaved |
| **MMIE** | Massive multimodal interleaved comprehension | Interleaved |

---

## 🏆 Community Arena Leaderboards

> *Human-preference-based Elo rankings derived from millions of blind pairwise comparisons — the most ecologically valid measure of generative image quality as perceived by real users. Unlike automated metrics, arena leaderboards capture holistic generation quality including photorealism, text rendering, compositional accuracy, and aesthetic appeal.*

### LM Arena Text-to-Image Leaderboard

Source: [lmarena.ai/leaderboard/text-to-image](https://lmarena.ai/leaderboard/text-to-image) · **3,918,094 votes** · **46 models** · Updated Feb 2026

| Rank | Model | Organization | Elo Score | License |
|------|-------|-------------|-----------|---------|
| 1 | **GPT-Image-1.5 High Fidelity** | OpenAI | **1248 ± 5** | Proprietary |
| 2 | **Gemini-3-Pro Image Preview 2K** | Google | **1237 ± 5** | Proprietary |
| 3 | **Gemini-3-Pro Image Preview** | Google | **1233 ± 5** | Proprietary |
| 4 | **Grok Imagine Image** | xAI | 1174 ± 6 | Proprietary |
| 5 | **FLUX.2 Max** | Black Forest Labs | 1169 ± 4 | Proprietary |
| 6 | **Grok Imagine Image Pro** | xAI | 1166 ± 6 | Proprietary |
| 7 | **FLUX.2 Flex** | Black Forest Labs | 1158 ± 4 | Proprietary |
| 8 | **Gemini 2.5 Flash Image** | Google | 1157 ± 3 | Proprietary |
| 9 | **FLUX.2 Pro** | Black Forest Labs | 1156 ± 4 | Proprietary |
| 10 | **HunyuanImage 3.0** | Tencent | 1151 ± 3 | Community |
| 11 | **FLUX.2 Dev** | Black Forest Labs | 1150 ± 5 | Proprietary |
| 12 | **Imagen Ultra 4.0** | Google | 1149 ± 4 | Proprietary |
| 13 | **Seedream 4 2K** | ByteDance | 1141 ± 6 | Proprietary |
| 14 | **Seedream 4.5** | ByteDance | 1141 ± 4 | Proprietary |
| 15 | **Qwen-Image 2512** | Alibaba | 1139 ± 5 | Apache 2.0 |
| 16 | **Imagen 4.0** | Google | 1135 ± 3 | Proprietary |
| 17 | **Wan2.6 T2I** | Alibaba | 1126 ± 6 | Proprietary |
| 18 | **Seedream 4 (Fal)** | ByteDance | 1119 ± 6 | Proprietary |
| 19 | **Wan2.5 T2I Preview** | Alibaba | 1117 ± 4 | Proprietary |
| 20 | **GPT-Image-1** | OpenAI | 1115 ± 3 | Proprietary |
| 21 | **Seedream 4 High-Res** | ByteDance | 1114 ± 4 | Proprietary |
| 22 | **GPT-Image-1 Mini** | OpenAI | 1100 ± 4 | Proprietary |
| 23 | **MAI-Image-1** | Microsoft AI | 1094 ± 4 | Proprietary |
| 24 | **Seedream 3** | ByteDance | 1084 ± 5 | Proprietary |
| 25 | **Z-Image Turbo** | Alibaba | 1083 ± 7 | Apache 2.0 |
| 26 | **FLUX.1 Kontext Max** | Black Forest Labs | 1076 ± 3 | Proprietary |
| 27 | **FLUX.2 Klein 9B** | Black Forest Labs | 1065 ± 4 | Non-Commercial |
| 28 | **Qwen-Image (Prompt Extend)** | Alibaba | 1061 ± 3 | Apache 2.0 |
| 29 | **FLUX.1 Kontext Pro** | Black Forest Labs | 1060 ± 3 | Proprietary |
| 30 | **Imagen 3.0 (002)** | Google | 1059 ± 3 | Proprietary |
| 31 | **Qwen-Image** | Alibaba | 1058 ± 2 | Apache 2.0 |
| 32 | **P-Image** | Pruna | 1053 ± 5 | Proprietary |
| 33 | **Ideogram v3 Quality** | Ideogram | 1050 ± 4 | Proprietary |
| 34 | **Photon** | Luma AI | 1037 ± 4 | Proprietary |
| 35 | **FLUX.2 Klein 4B** | Black Forest Labs | 1021 ± 4 | Apache 2.0 |
| 36 | **Recraft v3** | Recraft | 1021 ± 3 | Proprietary |
| 37 | **FLUX 1.1 Pro** | Black Forest Labs | 1017 ± 3 | Proprietary |
| 38 | **Lucid Origin** | Leonardo AI | 1015 ± 3 | Proprietary |
| 39 | **Ideogram v2** | Ideogram | 1015 ± 3 | Proprietary |
| 40 | **GLM-Image** | Z.ai | 1013 ± 9 | MIT |
| 41 | **Gemini 2.0 Flash Image** | Google | 976 ± 3 | Proprietary |
| 42 | **FLUX.1 Dev FP8** | Black Forest Labs | 970 ± 4 | Open |
| 43 | **DALL·E 3** | OpenAI | 969 ± 4 | Proprietary |
| 44 | **FLUX.1 Kontext Dev** | Black Forest Labs | 942 ± 4 | Non-Commercial |
| 45 | **Stable Diffusion v3.5 Large** | Stability AI | 939 ± 4 | Open |
| 46 | **BAGEL** | ByteDance | 900 ± 6 | Apache 2.0 |

### Artificial Analysis Text-to-Image Arena

Source: [artificialanalysis.ai/text-to-image/arena](https://artificialanalysis.ai/text-to-image/arena/leaderboard-text) · Evaluates models across **15 specialized visual categories.**

The Artificial Analysis arena provides granular, category-specific Elo rankings across 15 visual domains:

| Category | Description |
|----------|-------------|
| General & Photorealistic | Overall image quality and photorealism |
| Anime | Japanese animation-style generation |
| Text & Typography | Accuracy of rendered text in images |
| People: Portraits | Single-subject human portrait quality |
| People: Groups & Activities | Multi-person scenes and interactions |
| Nature & Landscapes | Environmental and natural scenes |
| Traditional Art | Painting, watercolor, and fine art styles |
| Cartoon & Illustration | Stylized cartoon and illustration generation |
| Vintage & Retro | Period-accurate retro aesthetic generation |
| Futuristic & Sci-Fi | Science fiction and futuristic imagery |
| Graphic Design & Digital Rendering | Design-oriented visual outputs |
| Fantasy & Mythical | Fantasy creatures, worlds, and mythology |
| UI/UX Design | User interface and experience mockups |
| Commercial | Product photography and marketing imagery |
| Physical Spaces | Architectural and interior space rendering |

**Recently added models** (as of Feb 2026): Grok Imagine Image Pro, Grok Imagine Image, Z-Image Base, Qwen Image Plus 2601, HunyuanImage 3.0 Instruct, Eigen Image, Wan2.6 T2I, FLUX.2 Klein (9B & 4B), GLM-Image.

### Key Observations from Arena Rankings

| Insight | Detail |
|---------|--------|
| **Proprietary Dominance** | Top 5 positions held exclusively by OpenAI, Google, and xAI; highest open-weight model (Qwen-Image, Apache 2.0) at rank 15 |
| **Rapid Capability Growth** | GPT-Image-1.5 (Elo 1248) vs. GPT-Image-1 (Elo 1115) — 133 Elo points improvement within a single model family |
| **Chinese Model Competitiveness** | Alibaba (Qwen-Image, Wan2.6, Z-Image), ByteDance (Seedream 4.5), and Tencent (HunyuanImage 3.0) occupy multiple top-20 positions |
| **Open-Weight Progress** | Qwen-Image (Apache 2.0, Elo 1139) and FLUX.2 Klein 4B (Apache 2.0, Elo 1021) demonstrate that open models are closing the gap to proprietary leaders |

---

## 💾 Datasets & Training Corpora

> *The empirical foundation upon which all multimodal systems are built — curated, large-scale datasets that define the scope and quality of learned representations.*

### Multimodal Understanding
| Dataset | Scale | Description | Venue | Year |
|---------|-------|-------------|-------|------|
| [LAION-5B](https://laion.ai/) | 5.9B | Open large-scale multi-modal dataset | NeurIPS | 2022 |
| [DataComp](https://huggingface.co/datasets/mlfoundations/datacomp_1b) | 1.4B | Next-generation multimodal dataset search | NeurIPS | 2023 |
| [CapsFusion-120M](https://huggingface.co/datasets/BAAI/CapsFusion-120M) | 120M | Rethinking image-text data at scale | CVPR | 2023 |
| [Infinity-MM](https://huggingface.co/datasets/BAAI/Infinity-MM) | 40M | Scaling multimodal performance with data | arXiv | 2024 |
| [Honey-Data-15M](https://huggingface.co/) | 15M | High-quality corpus for open MLLMs | arXiv | 2025 |
| [Cambrian-10M](https://huggingface.co/datasets/nyu-visionx/Cambrian-10M) | 10M | Vision-centric exploration of multimodal LLMs | NeurIPS | 2024 |
| [LLaVA-OneVision](https://huggingface.co/datasets/lmms-lab/LLaVA-OneVision-Data) | 4.8M | Easy visual task transfer | TMLR | 2024 |
| [ShareGPT4V](https://github.com/) | 100K | Better captions for large multi-modal models | ECCV | 2023 |

### Text-to-Image & Image Editing
| Dataset | Scale | Type | Venue | Year |
|---------|-------|------|-------|------|
| [LAION-Aesthetics](https://laion.ai/blog/laion-aesthetics/) | 120M | T2I (Aesthetic) | NeurIPS | 2022 |
| [PixelProse](https://huggingface.co/datasets/tomg-group-umd/pixelprose) | 16M | T2I (Dense Captions) | arXiv | 2024 |
| [PD12M](https://huggingface.co/datasets/Spawning/PD12M) | 12M | T2I (Public Domain) | arXiv | 2024 |
| [CC-12M](https://github.com/google-research-datasets/conceptual-12m) | 12M | T2I (Conceptual) | CVPR | 2021 |
| [SAM](https://segment-anything.com/) | 11M | T2I (Segmentation) | ICCV | 2023 |
| [ByteMorph-6M](https://huggingface.co/datasets/ByteDance-Seed/BM-6M) | 6M | Editing (Non-rigid) | arXiv | 2025 |
| [TextAtlas5M](https://huggingface.co/datasets/CSU-JPG/TextAtlas5M) | 5M | T2I (Dense Text) | arXiv | 2025 |
| [UltraEdit](https://huggingface.co/datasets/BleachNick/UltraEdit) | 4M | Editing (Fine-grained) | NeurIPS | 2024 |
| [AnyEdit](https://huggingface.co/datasets/Bin1117/AnyEdit) | 2.5M | Editing (Unified) | CVPR | 2024 |
| [ImgEdit](https://huggingface.co/datasets/sysuyy/ImgEdit) | 1.2M | Editing (Unified) | arXiv | 2025 |
| [InstructPix2Pix](https://github.com/timothybrooks/instruct-pix2pix) | 313K | Editing (Instructional) | CVPR | 2022 |

### Interleaved Image-Text
| Dataset | Scale | Description | Venue | Year |
|---------|-------|-------------|-------|------|
| [OmniCorpus](https://huggingface.co/collections/OpenGVLab/omnicorpus-6709d180dc8f500b508e195f) | 8B | Unified multimodal corpus of 10B-level images interleaved with text | ICLR | 2024 |
| [OBELICS](https://huggingface.co/datasets/HuggingFaceM4/OBELICS) | 141M | Open web-scale filtered interleaved image-text documents | NeurIPS | 2023 |
| [Multimodal C4](https://github.com/allenai/mmc4) | 101.2M | Open, billion-scale corpus of images interleaved with text | NeurIPS | 2023 |
| [CoMM](https://github.com/) | 227K | Coherent interleaved image-text for multimodal understanding | CVPR | 2024 |

---

## 🧠 Theory, Explainability & Position Papers

> *Interrogating the nature of learned representations — when do neural networks acquire structured world knowledge, what does "understanding" mean for generative models, and how should we think about the path towards general intelligence?*

| Title | Key Contribution | Resources |
|-------|-----------------|-----------|
| **General agents contain world models** ⭐ | Theoretical framework for world representation emergence | [Paper](https://arxiv.org/) |
| **When Do Neural Networks Learn World Models?** ⭐ | Conditions under which networks spontaneously develop world models | [Paper](https://arxiv.org/) |
| **Transformers Use Causal World Models in Maze-Solving Tasks** ⭐ | Evidence of causal reasoning in next-token prediction | [Paper](https://arxiv.org/) |
| **A Causal World Model Underlying Next Token Prediction** ⭐ | Theoretical analysis of causal structure in autoregressive models | [Paper](https://arxiv.org/) |
| **Video as the New Language for Real-World Decision Making** ⭐ | Video as universal reasoning substrate for embodied intelligence | [Paper](https://arxiv.org/) |
| **Compositional Generative Modeling: A Single Model is Not All You Need** ⭐ | Arguments for compositional model architectures | [Paper](https://arxiv.org/) |
| **Scaling Laws for Pre-training Agents and World Models** ⭐ | Compute-optimal training strategies for world models | [Paper](https://arxiv.org/) |
| **Linear Spatial World Models Emerge in Large Language Models** | Spontaneous emergence of spatial representations in LLMs | [Paper](https://arxiv.org/) · [Code](https://github.com/) |

---

## 📐 Quantitative Metrics Reference

| Metric | Full Name | Description | Primary Domain |
|--------|-----------|-------------|----------------|
| **FID** | Fréchet Inception Distance | Distributional similarity between generated and real images | Image Generation |
| **IS** | Inception Score | Quality and diversity of generated images | Image Generation |
| **CLIP Score** | CLIP-based Alignment Score | Text-image semantic alignment via CLIP embeddings | T2I Alignment |
| **VQAScore** | VQA-based Score | Visual question answering-based compositional evaluation | T2I Faithfulness |
| **LPIPS** | Learned Perceptual Image Patch Similarity | Perceptual similarity metric using deep features | Image Quality |
| **DreamSim** | Dream Similarity | Human visual similarity judgment via synthetic data | Perceptual Quality |
| **HPSv2** | Human Preference Score v2 | Human preference prediction for T2I outputs | Human Preference |
| **ImageReward** | Image Reward | Learned human preference model for T2I generation | Human Preference |
| **TIFA** | Text-to-Image Faithfulness Assessment | T2I faithfulness evaluation via question answering | Faithfulness |
| **DSG** | Davidsonian Scene Graph | Fine-grained compositional evaluation via scene graphs | Compositionality |
| **R-FID** | Reconstruction FID | FID for visual tokenizer reconstruction quality | Tokenizer Quality |
| **SSIM** | Structural Similarity Index | Structural image similarity measurement | Image Quality |

---

## 🙏 Acknowledgements

OpenMM-Arena is built upon the outstanding contributions of three foundational resources, whose meticulous curation and open sharing of knowledge have made this comprehensive compendium possible:

- 🎨 **[Awesome-Text-to-Image](https://github.com/Yutong-Zhou-cv/Awesome-Text-to-Image)** — curated by Yutong Zhou *et al.*
- 🌍 **[Awesome-World-Models](https://github.com/knightnemo/Awesome-World-Models)** — curated by Siqiao Huang *et al.*
- 🔮 **[Awesome-Unified-Multimodal-Models](https://github.com/AIDC-AI/Awesome-Unified-Multimodal-Models)** — curated by Zhang *et al.*

We extend our deepest gratitude to these authors for their scholarly diligence and commitment to open science.

---

## 📝 Citation

If you find **OpenMM-Arena** useful for your research, please consider citing:

```bibtex
@misc{openmmarena2025,
    title     = {OpenMM-Arena: A Comprehensive Compendium for Multimodal AI Research},
    author    = {OpenMM-Arena Contributors},
    year      = {2025},
    journal   = {GitHub repository},
    url       = {https://github.com/OpenMM-Arena/OpenMM-Arena}
}
```

Additionally, please cite the foundational works:

```bibtex
@inproceedings{zhou2023vision,
  title     = {Vision + Language Applications: A Survey},
  author    = {Zhou, Yutong and Shimada, Nobutaka},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (CVPRW)},
  year      = {2023}
}

@misc{huang2025awesomeworldmodels,
  title  = {Awesome-World-Models},
  author = {Siqiao Huang},
  year   = {2025},
  url    = {https://github.com/knightnemo/Awesome-World-Models}
}

@article{zhang2025unified,
  title   = {Unified Multimodal Understanding and Generation Models: Advances, Challenges, and Opportunities},
  author  = {Zhang, Xinjie and others},
  journal = {arXiv preprint arXiv:2505.02567},
  year    = {2025}
}
```

---

<div align="center">

**⭐ Star this repository if you find it useful for your research! ⭐**

*Curated with scholarly rigor for the multimodal AI research community.*

</div>
