---
title: "Interactive BI Portfolio Dashboard"
summary: "My first fully independent, end-to-end Power BI project demonstrating data modeling, ETL, DAX, and UX/UI design principles."
tags: ["Power BI", "Data Modeling", "DAX", "ETL", "UX/UI"]
image: "/work/student-retention.jpg"
priority: 1

context: "This is my interactive CV—a comprehensive BI project I built from scratch to demonstrate proficiency across the entire data analytics workflow: from raw data to polished, user-friendly dashboard."

problem: "How do you prove BI competency beyond certifications? Build a real project that showcases technical depth and design thinking."

constraints:
  - "First full-scale independent project—learning data modeling patterns in practice"
  - "Balancing technical complexity with user experience simplicity"
  - "No existing data infrastructure—built semantic model from ground up"

decisions:
  - title: "Star Schema Design"
    description: "Designed fact and dimension tables following Kimball methodology. Established proper foreign/primary key relationships to enable efficient querying and cross-dimensional analysis."
  - title: "ETL Implementation"
    description: "Performed data transformation, cleaning, and preparation using Power Query. Handled missing values, standardized formats, and created calculated columns for analytical flexibility."
  - title: "Dynamic DAX Measures"
    description: "Built reusable measures with time intelligence, contextual calculations, and dynamic filtering. Leveraged CALCULATE, FILTER, and iterator functions for advanced analytics."
  - title: "UX/UI Principles"
    description: "Applied page navigation, bookmarks, and consistent visual hierarchy. Prioritized user flow and minimized cognitive load—data tells a story, not overwhelms."

outcome:
  - "Delivered fully functional Power BI dashboard showcasing technical and design skills"
  - "Demonstrated mastery of: data modeling (star schema), ETL (Power Query), DAX (measures + time intelligence), UX/UI (navigation + bookmarks)"
  - "Created tangible proof of competency for recruiters and clients"

lessons: "Building a portfolio project is different from client work. You control the scope, so resist feature creep. Focus on demonstrating core competencies clearly—technical depth matters, but so does presentation."

embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzE2N2JhMjMtOGFmOS00YjJjLWE2NGItMWFjNmE4ZjBjNjUyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9"
---

## The Concept

This dashboard serves as my **interactive resume**—a live demonstration of end-to-end BI development skills. Rather than listing competencies, I built a complete project that proves them.

The scope was intentionally comprehensive: design the data model, perform ETL transformations, write dynamic DAX measures, and deliver a polished user experience. Every aspect of the BI workflow is represented here.

## Technical Implementation

### Data Modeling

**Star schema architecture:**

1. **Fact table**: Core metrics with foreign keys linking to dimensions
2. **Dimension tables**: Entities for filtering and grouping (time, categories, segments)
3. **Relationships**: Established 1:many cardinality with proper key management

**WHY star schema:** Optimized for Power BI's VertiPaq engine—fast queries, intuitive relationships, and straightforward measure logic.

### ETL Process (Power Query)

Data preparation workflow:

1. **Extract**: Imported raw data from multiple sources (CSV, Excel)
2. **Transform**: 
   - Standardized column names and data types
   - Handled nulls and missing values
   - Created calculated columns for segmentation
   - Merged queries to build unified tables
3. **Load**: Refreshed model with clean, analysis-ready data

**Key learning:** ETL isn't glamorous, but it's foundational. Clean data = reliable insights.

### DAX Measures

Built dynamic calculations including:

**Total metrics with context awareness:**
```dax
Total Revenue = SUM(Sales[Amount])

Revenue YTD = 
TOTALYTD([Total Revenue], Calendar[Date])
```

**Time intelligence comparisons:**
```dax
Revenue vs Previous Period = 
VAR CurrentPeriod = [Total Revenue]
VAR PreviousPeriod = CALCULATE([Total Revenue], DATEADD(Calendar[Date], -1, YEAR))
RETURN
    DIVIDE(CurrentPeriod - PreviousPeriod, PreviousPeriod, 0)
```

**Dynamic filtering:**
```dax
Active Items = 
CALCULATE(
    COUNTROWS(Items),
    Items[Status] = "Active"
)
```

### UX/UI Design

**Navigation structure:**
- **Page navigation**: Logical flow between overview, detail, and insights
- **Bookmarks**: Saved states for quick scenario comparison
- **Visual hierarchy**: Strategic use of size, color, and whitespace
- **Consistency**: Unified color palette and typography

**Design principle:** Data should inform, not overwhelm. Every chart serves a purpose.

## Skills Demonstrated

| Area | Specific Skills |
|------|-----------------|
| **Data Modeling** | Star schema, FK/PK relationships, cardinality |
| **ETL** | Power Query M, data cleaning, transformation logic |
| **DAX** | Measures, time intelligence, context manipulation, iterator functions |
| **Visualization** | Chart selection, visual hierarchy, color theory |
| **UX/UI** | Page navigation, bookmarks, user flow design |
| **Tools** | Power BI Desktop, Power Query Editor, DAX Studio (testing) |

## What This Proves

**For recruiters:** I don't just know theory—I build functioning solutions.

**For clients:** I understand the full BI lifecycle, from messy data to polished dashboards.

**For myself:** First major independent project completed. Foundation for more complex work ahead.

## Reflections

**What worked:**
- Breaking the project into phases (model → ETL → DAX → design) prevented overwhelm
- Documenting decisions made future troubleshooting easier
- Treating it as a portfolio piece (not just practice) elevated quality

**What I'd improve:**
- Add drill-through pages for deeper analysis
- Implement row-level security (RLS) to demonstrate security concepts
- Create mobile-optimized layout (currently desktop-first)

**Next portfolio project ideas:**
- Real-time data pipeline with Azure Synapse integration
- Python-based data transformation with Databricks
- Automated reporting with Power Automate