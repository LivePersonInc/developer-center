---
pagename: Data Metrics
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-data-metrics.html
indicator: both
---

<div id="metrics">
<input id="metricsSearch" placeholder="Search" />
<table id="datametricstable">
  <thead>
    <th>Metric</th>
    <th>Analysis Type</th>
    <th>Chanel</th>
    <th>Formula (Optional)</th>
    <th>Description</th>
    <th>Dashboard</th>
    <th>Filtered By</th>
  </thead>
  <tbody class="list">
  {% for metricitem in site.data.reportbuilder %}
    <tr>
      <td class="metric">{{ metricitem.Metric }}</td>
      <td class="analysis">{{ metricitem.analysisType }}</td>
      <td class="channel">{{ metricitem.Channel }}</td>
      <td class="formula">{{ metricitem.formulaOptional }}</td>
      <td class="description">{{ metricitem.Description }}</td>
      <td class="dashboard">{{ metricitem.Dashboard }}</td>
      <td class="filtered">{{ metricitem.filteredBy }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
</div>
