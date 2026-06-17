# stand-the-fuck-out
A 10-skill brand positioning plugin for Claude, Cowork and Code. Built from the Stand the F*ck Out Playbook — a battle-tested system for going from invisible to unignorable.

Most brands don't have a marketing problem. They have a sameness problem. This plugin systematizes the entire process of finding, claiming, and defending a brand position that nobody else can copy.

---

## Installation

### Claude Code

In Claude Code:

```
/plugin marketplace add shashank-sn/stand-the-fuck-out
/plugin install stand-the-fuck-out
```

That's it — Claude Code will fetch the repo and register all 10 skills automatically.

<details>
<summary>Alternative: install from a local clone</summary>

```bash
git clone https://github.com/shashank-sn/stand-the-fuck-out.git ~/.claude/plugins/stand-the-fuck-out
```

Then in Claude Code:

```
/plugin marketplace add ~/.claude/plugins/stand-the-fuck-out

/plugin install stand-the-fuck-out
```

</details>

### Claude Cowork

1. Download the `.plugin` file
2. Open Claude Cowork on your desktop
3. Go to **Settings → Plugins → Install from file**
4. Select the downloaded `stand-the-fuck-out.plugin` file
5. All 10 skills will be available immediately

---

## CLI Usage (any terminal)

You can also run every skill from any shell — no Claude Code or plugin installation required. The CLI is published as `stand-the-f-out` on npm. The `sto` alias is available after global install. The repo, plugin, and brand remain `stand-the-fuck-out`.

> **Note:** npm's content policy blocks the original package name. Use `stand-the-f-out` for `npx` and `npm install`. The `sto` alias works globally.

### Run with npx (no install)

```bash
# Interactive skill picker
npx stand-the-f-out

# List all skill IDs
npx stand-the-f-out --list

# Run a specific skill
npx stand-the-f-out brand-invisibility-audit
npx stand-the-f-out order-winners-finder
npx stand-the-f-out ai-positioning-sprint
```

### Install globally

```bash
npm install -g stand-the-f-out

# Then use the shorter alias
sto
sto --list
sto brand-invisibility-audit
sto stand-out-blueprint
```

### CLI commands reference

| Command | What it does |
|---------|--------------|
| `npx stand-the-f-out` | Shows an interactive skill picker |
| `npx stand-the-f-out --list` | Lists all 10 skill IDs |
| `npx stand-the-f-out --help` | Shows usage and skill IDs |
| `npx stand-the-f-out <skill-id>` | Runs that skill interactively |

### Skill IDs for the CLI

Use these IDs when running a skill directly:

| Skill ID | Skill | What it produces |
|----------|-------|------------------|
| `brand-invisibility-audit` | Brand Invisibility Audit | Scored diagnostic + invisibility diagnosis |
| `order-winners-finder` | Order Winners Finder | Table-stake vs. order-winner worksheet |
| `blue-ocean-mapper` | Blue Ocean Mapper | Perceptual map + white-space worksheet |
| `value-bucket-builder` | Value Bucket Builder | Four-value-bucket excavation worksheet |
| `anti-positioning-generator` | Anti-Positioning Generator | Exclusion statements + placement map |
| `ai-positioning-sprint` | AI Positioning Sprint | Full 25-minute sprint worksheet |
| `category-creator` | Category Creator | Category naming + ownership worksheet |
| `customer-journey-optimizer` | Customer Journey Optimizer | Funnel map + friction intervention plan |
| `positioning-health-check` | Positioning Health Check | Quarterly health scores + action plan |
| `stand-out-blueprint` | Stand-Out Blueprint | One-page brand strategy synthesis |

### How the CLI works

1. **Pick a skill** — either from the interactive menu or by passing the skill ID as an argument.
2. **Answer the prompts** — the same strategic questions the AI skill asks.
3. **Get a dated Markdown file** — the CLI saves `<skill-id>-YYYY-MM-DD.md` in your current directory.
4. **Complete the work** — paste the report into any AI assistant (Claude, ChatGPT, etc.) to get the full strategic synthesis, or fill in the worksheet yourself.

### What each skill does in the CLI

- **Scored skills**: `brand-invisibility-audit` and `positioning-health-check` compute numeric scores and give a direct diagnosis in the terminal, plus an AI prompt for deeper analysis.
- **Worksheet skills**: All other skills generate a structured worksheet with the exact framework from the playbook. The saved Markdown file is ready to hand to an AI assistant or to a strategist.
- **Synthesis skill**: `stand-out-blueprint` can run in two modes — synthesizing prior outputs or building cold from a focused discovery session — and produces a complete one-page brand strategy.

### Example CLI session

```bash
$ npx stand-the-f-out brand-invisibility-audit
# Brand Invisibility Audit

Current tagline or value proposition: We help teams ship faster.
Homepage messaging or About page description: ...
...

Messaging Score: 8 / 20
Visual Score: 12 / 20
Strategy Score: 9 / 20
Total Score: 29 / 60

Diagnosis
You're blending in. Customers see you as interchangeable. This is urgent.

Saved output to: /Users/shasha/brand-invisibility-audit-2026-06-17.md
```

Open that Markdown file, copy it into your AI assistant, and ask it to expand the diagnosis into specific recommendations.

### Why the package name is `stand-the-f-out`

npm's content policy rejects the original package name. The CLI is published as `stand-the-fuck-out`, and the command-line alias `sto` is available globally after `npm install -g stand-the-fuck-out`. The repo, plugin, and brand remain `stand-the-fuck-out`.

---

## Skills

| Skill | Command | When to use |
|-------|---------|-------------|
| **Brand Invisibility Audit** | `/brand-invisibility-audit` | Before any positioning work — scores your brand across messaging, visuals, and strategy |
| **Order Winners Finder** | `/order-winners-finder` | Finding what actually makes customers choose you over alternatives |
| **Blue Ocean Mapper** | `/blue-ocean-mapper` | Mapping competitive white space and finding territory nobody has claimed |
| **Value Bucket Builder** | `/value-bucket-builder` | Extracting functional, emotional, social, and aspirational value to craft your brand promise |
| **Anti-Positioning Generator** | `/anti-positioning-generator` | Building bold exclusion messaging — "we're not for you" statements that magnetize the right people |
| **AI Positioning Sprint** | `/ai-positioning-sprint` | Running the complete 25-minute positioning workflow from scratch |
| **Category Creator** | `/category-creator` | Naming and owning a new market category so you stop being compared to competitors |
| **Customer Journey Optimizer** | `/customer-journey-optimizer` | Finding and fixing friction points across your customer funnel |
| **Positioning Health Check** | `/positioning-health-check` | Quarterly audit to check if your positioning is still working or being eroded |
| **Stand-Out Blueprint** | `/stand-out-blueprint` | Synthesizing everything into a one-page deployable brand strategy |

---

## The Stand the F*ck Out Journey

Run the skills in order for a complete rebrand, or use them individually for targeted work.

1. **Audit** — Establish your baseline invisibility score
2. **Differentiate** — Find the order winners that actually drive buying decisions
3. **Map** — Identify unclaimed competitive territory
4. **Value** — Excavate what customers really buy from you
5. **Exclude** — Build anti-positioning that repels wrong-fit customers
6. **Sprint** — Run the full AI positioning workflow in 25 minutes
7. **Create** — Name and own a new category
8. **Optimize** — Fix funnel friction blocking conversion
9. **Synthesize** — Assemble the one-page brand strategy
10. **Maintain** — Run the quarterly health check to keep your position strong

Each skill is fully self-contained — use whichever tool matches the specific problem you're working on.

---

## About

Built by [Shashank](https://x.com/istupidpreneur) — brand strategist, founder, and creator of the Stand the F*ck Out system.

Part of a complete brand differentiation methodology for founders and marketers who are done blending in.
