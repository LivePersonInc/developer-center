---
pagename: Data Metrics
sitesection: Documents
categoryname: "Getting Started"
documentname: Essential Resources
permalink: essential-resources-data-metrics.html
indicator: both
---

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
  <tbody>
  {% for metricitem in site.data.reportbuilder %}
    <tr>
      <td>{{ metricitem.Metric }}</td>
      <td>{{ metricitem.analysisType }}</td>
      <td>{{ metricitem.Channel }}</td>
      <td>{{ metricitem.formulaOptional }}</td>
      <td>{{ metricitem.Description }}</td>
      <td>{{ metricitem.Dashboard }}</td>
      <td>{{ metricitem.filteredBy }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
