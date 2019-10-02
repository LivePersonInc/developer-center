---
pagename: API Data Metrics
sitesection: Documents
categoryname: "Welcome"
documentname: Essential Resources
permalink: essential-resources-api-data-metrics.html
indicator: both
---

The table below outlines all of the data metrics available when using our Data APIs. These represent the different types of information and attributes which are retrievable via both our Historical and Real Time Data APIs.

<div id="metrics">
<input id="metricsSearch" placeholder="Search by Metric or API Method" />
<table class="metricstable" id="apimetricstable">
  <thead>
    <th>Metric</th>
    <th class="description">Description</th>
    <th>API - Method</th>
    <th>Channel</th>
    <th class="analysis">Analysis Type</th>
    <th class="filtered">Filtered By</th>
    <th class="formula">Formula (Optional)</th>
  </thead>
  <tbody class="list">
  {% for metricitem in site.data.apimetrics %}
    <tr>
      <td class="metric">{{ metricitem.Metric }}</td>
      <td class="description">{{ metricitem.Description }}</td>
      <td class="apiMethod">{{ metricitem.apiMethod }}</td>
      <td class="channel">{{ metricitem.Channel }}</td>
      <td class="analysis">{{ metricitem.analysisType }}</td>
      <td class="filtered">{{ metricitem.filteredBy }}</td>
      <td class="formula">{{ metricitem.formulaOptional }}</td>
    </tr>
  {% endfor %}
</tbody>
</table>
</div>
