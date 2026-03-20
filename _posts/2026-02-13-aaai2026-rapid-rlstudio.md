---
layout: post
title: "Published Posts on LG AI Research Blog Introducing AAAI 2026 Papers"
title_ko: "LG AI Research 블로그에 AAAI 2026 논문 소개 포스트를 올렸습니다"
description: "RAPID and RL-Studio — industrial automation and RL experimentation platforms"
description_ko: "RAPID와 RL-Studio — 산업 자동화와 강화학습 실험 플랫폼"
date: 2026-02-13
tags: [reinforcement learning, multi-agent, physical AI, industrial automation, publication]
thumbnail: /assets/img/aaai26_rapid.gif
---

<div class="lang-en" markdown="1">

Our team presented two demonstration papers at AAAI 2026, held in Singapore in January. The Demonstration Program requires a fully working system — not just a proposal — making both acceptances a meaningful validation of practical research.

---

**RAPID: A Rapid Prototyping Platform for Industrial Automation**

I wrote this blog post myself. RAPID is a simulation platform for quickly designing and validating multi-robot coordination strategies in smart logistics and factory environments. The goal was to answer questions like "How much does throughput increase if we add five more robots?" — something that used to take weeks on existing platforms — in a matter of minutes.

The key feature is adopting PettingZoo API as a standard interface, enabling MARL algorithms like MAPPO and QMIX, as well as LLM-based planners, to be applied without any code changes.

[Read RAPID Blog Post →](https://www.lgresearch.ai/blog/view?seq=625)

---

**RL-Studio: A Multi-Phase RL Experimentation Platform**

This post was written by my colleague Whiyoung Jung; I contributed as a co-author. RL-Studio goes beyond the conventional fixed two-stage pipeline (e.g., Offline RL → Online RL), supporting multi-phase RL experiments where algorithms, environments, and training modes can be freely swapped at each stage. It also includes the PARS and OPT algorithms our team published at ICML 2025.

[Read RL-Studio Blog Post →](https://www.lgresearch.ai/blog/view?seq=631)

</div>

<div class="lang-ko" markdown="1">

올해 1월 싱가포르에서 열린 AAAI 2026에서 팀에서 두 편의 데모 논문을 발표했습니다. Demonstration Program은 단순한 아이디어 제안이 아니라 실제 동작하는 시스템을 요구하는 만큼, 두 논문 모두 연구의 실용성과 완성도를 인정받은 결과라 의미가 있었습니다.

---

**RAPID: 산업 자동화를 위한 신속 프로토타이핑 플랫폼**

제가 직접 블로그 포스트를 기고했습니다. RAPID는 스마트 물류·공장 환경에서 로봇 군집 제어 전략을 빠르게 설계하고 검증할 수 있는 시뮬레이션 플랫폼입니다. "로봇을 5대 더 추가하면 처리량이 얼마나 늘까?" 같은 질문에 기존 플랫폼으로는 수 주가 걸리던 것을 분 단위로 답할 수 있도록 만드는 게 목표였습니다.

PettingZoo API를 표준 인터페이스로 채택해 MAPPO, QMIX 같은 MARL 알고리즘은 물론 LLM 기반 플래너까지 코드 수정 없이 바로 적용할 수 있다는 점이 핵심입니다.

[RAPID 블로그 원문 보기 →](https://www.lgresearch.ai/blog/view?seq=625)

---

**RL-Studio: 멀티-페이즈 강화학습 실험 플랫폼**

동료 Whiyoung Jung이 포스트를 작성했고, 저도 공동저자로 참여했습니다. RL-Studio는 Offline RL → Online RL 같은 고정된 두 단계를 넘어, 알고리즘·환경·학습 방식을 단계마다 자유롭게 전환하는 멀티-페이즈 RL 실험을 지원하는 플랫폼입니다. 팀에서 ICML 2025에 발표했던 PARS, OPT 알고리즘도 내장되어 있습니다.

[RL-Studio 블로그 원문 보기 →](https://www.lgresearch.ai/blog/view?seq=631)

</div>
