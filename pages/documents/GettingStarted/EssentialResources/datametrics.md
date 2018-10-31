---
pagename: Report Builder Data Metrics
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-report-builder-data-metrics.html
indicator: both
---

The table below outlines all of the data metrics available in the Report Builder, with their definition and location within the different dashboards. More information on the Report Builder can be found [here](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=report-builder).

<div id="metrics">
<input id="metricsSearch" placeholder="Search by Metric or Dashboard" />
<table class="metricstable" id="datametricstable">
  <thead>
    <th>Metric</th>
    <th class="analysis">Analysis Type</th>
    <th class="channel">Channel</th>
    <th class="description">Description</th>
    <th class="dashboard">Dashboard</th>
    <th class="filtered">Filtered By</th>
    <th class="formula">Formula (Optional)</th>
  </thead>
  <tbody class="list">
  {% for metricitem in site.data.reportbuilder %}
    <tr>
      <td class="metric">{{ metricitem.Metric }}</td>
      <td class="analysis">{{ metricitem.analysisType }}</td>
      <td class="channel">{{ metricitem.Channel }}</td>
      <td class="description">{{ metricitem.Description }}</td>
      <td class="dashboard">{{ metricitem.Dashboard }}</td>
      <td class="filtered">{{ metricitem.filteredBy }}</td>
      <td class="formula">{{ metricitem.formulaOptional }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
</div>
