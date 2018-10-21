---
pagename: API Metrics
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-api-metrics.html
indicator: both
---

<div id="metrics">
<input id="metricsSearch" placeholder="Search by Metric or Channel" />
<table class="metricstable" id="apimetricstable">
  <thead>
    <th>Metric</th>
    <th>Analysis Type</th>
    <th>Channel</th>
    <th>Formula (Optional)</th>
    <th>Description</th>
    <th>API - Method</th>
    <th>Filtered By</th>
  </thead>
  <tbody class="list">
  {% for metricitem in site.data.apimetrics %}
    <tr>
      <td class="metric">{{ metricitem.Metric }}</td>
      <td class="analysis">{{ metricitem.analysisType }}</td>
      <td class="channel">{{ metricitem.Channel }}</td>
      <td class="formula">{{ metricitem.formulaOptional }}</td>
      <td class="description">{{ metricitem.Description }}</td>
      <td class="apiMethod">{{ metricitem.apiMethod }}</td>
      <td class="filtered">{{ metricitem.filteredBy }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
</div>
