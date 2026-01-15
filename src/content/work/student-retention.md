---
title: "Predicting Student Retention"
summary: "Built ML model to identify at-risk students, reducing dropout rate by 23%."
publishDate: 2026-01-13
tags: ["Azure Fabric", "Power BI", "DAX"]
priority: 1
---

### The Challenge
University X faced a 15% churn rate, leading to significant revenue loss. The existing data was siloed across CSV files and legacy SQL databases, making it impossible to identify at-risk students in real-time.

### The Solution
I built a Lakehouse architecture in Azure Fabric to unify data sources. The pipeline cleanses data using PySpark notebooks and models it into a Star Schema for optimal Power BI performance.

### Live Dashboard
<div class="relative group my-16 w-full">
<div class="absolute -inset-1 bg-gradient-to-r from-accent-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div class="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-bg-secondary shadow-2xl">
<div class="absolute top-0 left-0 right-0 h-8 bg-bg-tertiary border-b border-white/5 flex items-center px-4 gap-2 z-10">
<div class="w-2 h-2 rounded-full bg-red-500/50"></div>
<div class="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div class="w-2 h-2 rounded-full bg-green-500/50"></div>
<span class="ml-2 text-[10px] text-text-secondary font-mono uppercase tracking-widest">Power BI Live Embed</span>
</div>
<iframe title="Raport Power BI" width="100%" height="100%" class="pt-8 bg-bg-secondary" src="TUTAJ_WKLEJ_SWOJ_LINK_Z_POWER_BI_SERVICE" frameborder="0" allowFullScreen="true"></iframe>
</div>
</div>

### Business Impact
* **Reduced churn by 3%** in the first quarter by enabling early intervention.
* **Automated reporting**, saving the administrative team 20 hours per week.
* Provided a **360-degree view** of student performance for the Dean's office.