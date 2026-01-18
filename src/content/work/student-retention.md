---
title: "Multi-System Student Retention Analysis"
summary: "Unified data from disparate university systems to enable dropout prevention through real-time cohort analysis."
tags: ["Power BI", "Data Modeling", "DAX", "ETL"]
image: "/work/student-retention.jpg"
priority: 1

context: "A university struggled with a 15% annual dropout rate, resulting in significant revenue loss and reputational damage. Student data was scattered across multiple disconnected systems: admissions, enrollment, academic records, and financial aid."

problem: "Decision-makers couldn't identify at-risk students or understand dropout patterns. Each system told a partial story—no single view existed to answer: Who is leaving? When? Why?"

constraints:
  - "Tight deadline: solution required before next enrollment cycle"
  - "No access to source system modifications"
  - "Data quality issues in legacy systems (inconsistent student IDs across platforms)"
  - "Limited ability to perform deep data cleansing due to client-side data ownership"

decisions:
  - title: "Foreign/Primary Key Architecture"
    description: "Designed a unified key structure to link student records across systems. This became the foundation for a star schema model, enabling cross-system analysis without modifying source data."
  - title: "Simplified Semantic Model"
    description: "Resisted the temptation to overcomplicate. Built a lean model focused on answering core questions: enrollment funnel, dropout timing, and risk indicators."

outcome:
  - "Delivered interactive Power BI dashboards for enrollment and retention analysis"
  - "Enabled identification of dropout patterns by cohort, program, and enrollment stage"
  - "Reduced time-to-insight from weeks (manual Excel) to real-time"

lessons: "Less is more. Overengineering the semantic model or writing complex DAX measures isn't the answer when the client needs speed. Focus on delivering actionable insights first, optimize later."

embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzE2N2JhMjMtOGFmOS00YjJjLWE2NGItMWFjNmE4ZjBjNjUyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
---

## The Challenge

The university operated with data silos that made strategic decision-making nearly impossible. Admissions tracked applicants. The registrar tracked enrollments. Finance tracked payments. But no one could answer the fundamental question: **Why are students leaving, and can we intervene?**

The existing process involved manual data exports, Excel reconciliation, and weeks of analyst time—producing reports that were outdated before they were finished.

## Technical Approach

### Data Integration Strategy

Without access to modify source systems, I designed an integration layer that:

1. **Extracted** data from three primary systems via scheduled exports
2. **Standardized** student identifiers using a composite key logic (enrollment ID + birth date hash)
3. **Modeled** relationships in a star schema optimized for Power BI's Vertipaq engine

### Semantic Model Design

The model prioritized simplicity:

- **Fact table**: Student status snapshots (enrollment events, status changes)
- **Dimension tables**: Students, Programs, Time, Enrollment Stages
- **Avoided**: Slowly changing dimensions (SCD Type 2) due to time constraints—documented as technical debt

### Key DAX Patterns

Retention rate calculation with cohort comparison:

```dax
Retention Rate = 
DIVIDE(
    CALCULATE(COUNTROWS(Students), Students[Status] = "Active"),
    CALCULATE(COUNTROWS(Students), ALL(Students[Status])),
    0
)
```

## Results

The solution transformed how the university approaches retention:

| Metric | Before | After |
|--------|--------|-------|
| Time to generate retention report | 2-3 weeks | Real-time |
| Data sources unified | 0 | 3 |
| Dropout pattern visibility | None | By cohort, program, stage |

## What I'd Do Differently

Project is ongoing. Future iterations should address:

- Implement SCD Type 2 for historical tracking
- Add predictive indicators using enrollment behavior patterns
- Deeper integration with financial aid data for correlation analysis