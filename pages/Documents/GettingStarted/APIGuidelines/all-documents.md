---
pagename: All Documents
sitesection: Documents
categoryname: "Getting Started"
documentname:
permalink: all-documents.html
indicator: both
---

Use this page to view all of the Developers' Community documents in one place. They are divided according to the same categories as the sidebar navigation

<div class="alldocumentscontainer">
  {% for category in site.data.documentsupdated  %}
  <span class="alldocumentscategoryname listheader"><h3>{{ category.categoryname }}</h3>
  <ul class="alldocumentscategory">
    {% for document in category.documents %}
    {% if document.pages %}
    <li class="alldocumentstitle listheader"><span class="alldocumentsdocumentname">{{ document.documentname }}</span>
      {% if document.pages %}
      <ul class="alldocumentspagelist">
        {% for page in document.pages %}
        {% if page.subpages %}
          <li class="alldocumentspage listheader">{{ page.pagename }}
              <ul class="alldocumentssubpageslist">
                {% for subpage in page.subpages %}
                <li class="alldocumentssubpage">
                 <a  onclick="linkclick(event,this)" href="/{{ document.documentname | append: '/' | append: page.pagename | append: '/' |append: subpage.subpagename | slugify }}.html">{{ subpage.subpagename }}</a>
               </li>
                {% endfor %}
               </ul>
               {% else %}
               <li class="alldocumentspage">
                 <a  onclick="linkclick(event, this)"   href="/{{ document.documentname | append: '/' | append: page.pagename | slugify }}.html">{{ page.pagename }}</a>
              {% endif %}
              </li>
            {% endfor %}
           </ul>
          {% endif %}
        </li>
        {% endif %}
      {% endfor %}
    </ul>
  </span>
  <hr class="alldocumentshr">
  {% endfor %}
</div>
