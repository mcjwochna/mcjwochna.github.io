---
title: "Multi-Entity P&L Consolidation"
summary: "Consolidated fragmented financial reporting across multiple business entities into a single source of truth for executive decision-making."
tags: ["Power BI", "DAX", "Financial Reporting", "Data Mapping"]
image: "/work/pl_consolidation.jpg"
priority: 2

context: "A company with multiple business entities relied on dozens of separate reports for financial analysis. Each entity used different account structures, naming conventions, and reporting formats."

problem: "Leadership couldn't get accurate P&L figures without weeks of manual consolidation. Conflicting numbers from different reports eroded trust in financial data. Strategic decisions were delayed or made on incomplete information."

constraints:
  - "Multiple teams responsible for different data segments—no single owner"
  - "No access to implement proper ETL pipeline (SQL transformations blocked)"
  - "Inconsistent chart of accounts across entities"
  - "Client-provided data with embedded quality issues"

decisions:
  - title: "Mapping/Dictionary Architecture"
    description: "Built a comprehensive mapping layer to translate disparate account structures into a unified financial hierarchy. This became the backbone enabling consistent DAX measures across all entities."
  - title: "DAX-First Transformation"
    description: "Without SQL access, pushed all transformation logic into DAX and Power Query M. Optimized measures for calculation groups and reusable patterns."

outcome:
  - "Delivered consolidated P&L reporting across all business entities"
  - "Single source of truth replaced 20+ fragmented reports"
  - "Enabled month-over-month and entity-vs-entity comparison for the first time"

lessons: "Focus on what you control. Time spent fighting for SQL access was time not spent optimizing DAX measures and refining the mapping logic. Constraints are fixed; your response to them isn't."

embedUrl: "PLACEHOLDER_POWER_BI_EMBED_URL"
---

## The Challenge

Financial reporting was fractured. Each business entity maintained its own reporting cadence, account structure, and Excel templates. The finance team spent the first two weeks of every month just reconciling numbers—and still couldn't guarantee accuracy.

**The core issue**: There was no canonical definition of revenue, cost, or margin that worked across entities.

## Technical Approach

### Mapping Layer Design

The solution centered on a robust mapping architecture:

- Source Account (Entity A) → Mapping Table → Unified Account Hierarchy
- Source Account (Entity B) → Mapping Table → Unified Account Hierarchy
- Source Account (Entity C) → Mapping Table → Unified Account Hierarchy

The mapping table became the single point of control for account categorization, hierarchy levels, and entity-specific exceptions.

### Key DAX Patterns

Consolidated P&L with entity filtering:

```dax
Net Revenue = 
CALCULATE(
    SUM(Fact_GL[Amount]),
    Dim_Account[Category] = "Revenue"
) - 
CALCULATE(
    SUM(Fact_GL[Amount]),
    Dim_Account[Category] = "Returns & Allowances"
)
```

## Results

| Metric | Before | After |
|--------|--------|-------|
| Reports to check for P&L | 20+ | 1 |
| Monthly close reporting time | 2 weeks | 2 days |
| Cross-entity comparison | Manual/impossible | Native filtering |

## What I'd Do Differently

With hindsight and fewer constraints:

- Backend-first approach with proper SQL-based ETL
- Implement incremental refresh with partitioning
- Add calculation groups for time intelligence