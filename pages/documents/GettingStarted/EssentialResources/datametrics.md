---
pagename: Report Builder Metrics
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-report-builder-metrics.html
indicator: both
---

<div id="metrics">
<input id="metricsSearch" placeholder="Search by Metric or Dashboard" />
<table class="metricstable" id="datametricstable">
  <thead>
    <th>Metric</th>
    <th>Analysis Type</th>
    <th>Channel</th>
    <th>Description</th>
    <th>Dashboard</th>
    <th>Filtered By</th>
    <th>Formula (Optional)</th>
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
