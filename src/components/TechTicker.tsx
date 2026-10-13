"use client";

import React from "react";

const technologies = [
  "React",
  "Angular",
  "Node.js",
  "Python",
  "Java",
  "Spring Boot",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "Docker",
  "Terraform",
  "CI/CD",
  "PostgreSQL",
  "MongoDB",
  "Snowflake",
  "Databricks",
  "Splunk",
  "CrowdStrike",
  "Okta",
  "ServiceNow",
  "SAP",
  "Salesforce",
  "Power BI",
  "Tableau",
  ".NET",
  "Go",
  "TypeScript",
  "Kafka",
  "Redis",
];

export default function TechTicker() {
  // Doubled for seamless CSS loop
  const doubled = [...technologies, ...technologies];

  return (
    <section className="bg-parchment py-14 border-y border-mist overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-midnight tracking-tight">
          Technical expertise across critical domains
        </h2>
        <p className="text-sm text-slate mt-2 max-w-xl leading-relaxed">
          We recruit across the technologies that modern enterprises depend on —
          from cloud infrastructure to application development to data
          platforms.
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-parchment to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-parchment to-transparent z-10 pointer-events-none" />

        <div className="ticker-track flex gap-3 whitespace-nowrap px-4">
          {doubled.map((tech, i) => (
            <span
              key={i}
              className="inline-block px-4 py-2.5 rounded-lg bg-white border border-mist text-sm font-medium text-slate hover:text-midnight hover:border-steel/30 transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
