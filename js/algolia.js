var client = algoliasearch("EICOREWTRW", "d9c4823582269a3f4f16e79105acc1d2")
var devIndex = client.initIndex('devMain');
var search = document.getElementById('aa-search-input');

const searchInstance = autocomplete(
  '#aa-search-input',
  {
    debug: false
  },
  [
    {
      source: autocomplete.sources.hits(devIndex, {hitsPerPage: 100}),
      displayKey: '',
      name: 'dev', /* class aa-dataset-dev */
      templates: {
        suggestion: function(suggestion) {
          let value = suggestion.pagename;
          let content = suggestion.content;
          let link = suggestion.permalink;
          let headings = suggestion.headings;
          let documentName = suggestion.documentname;
          let category = suggestion.categoryname;
          let title = $('h1');
          let titletext = title.text();
          if (suggestion._highlightResult.pagename) {
            value = suggestion._highlightResult.pagename.value;
          }
          if (suggestion._highlightResult.content) {
            content = suggestion._highlightResult.content.value;
          }
          if (suggestion._highlightResult.permalink) {
            suggestion._highlightResult.permalink.value;
          }
          if (suggestion._highlightResult.documentname) {
            documentName = suggestion._highlightResult.documentname.value;
          }
          if (documentName) {
          return (
            '<a class="searchMainLink" href="'+ link + '"> <div class="searchtitlecontainer"> <span class="searchtitle">' + value + '</span> <br /> <span class="documentContainer">' + category + ' - ' + documentName + '</span><span class="searchcontentcontainer">' + content + '</span> </div> </a>'
          )
        } else {
          return (
            '<a class="searchMainLink" href="'+ link + '"> <div class="searchtitlecontainer"> <span class="searchtitle">' + value + '</span> <br /> <span class="documentContainer">' + category + '</span><span class="searchContentHeading">' + headings + '</span><span class="searchcontentcontainer">' + content + '</span> </div> </a>'
          )
        }
        },
        empty: '<div class="aa-empty">No results found!</div>',
        },
      },
    ]
);

searchInstance.on({
  'autocomplete:shown': function() {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:closed': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.remove('overlayvisible');
    sidebar.classList.remove('overlayvisible');
    footer.classList.remove('overlayvisible');
},
  'autocomplete:empty': function () {
    var content = document.getElementById('defaultcontent');
    var sidebar = document.getElementById('defaultsidebar');
    var footer = document.getElementById('defaultfooter');
    content.classList.add('overlayvisible');
    sidebar.classList.add('overlayvisible');
    footer.classList.add('overlayvisible');
},
  'autocomplete:selected': function (event, suggestion, dataset, context) {
    var target = suggestion.url;
    navigateContent(target);
},
  'autocomplete:updated': function () {
    if (this.value != '') {
    var input = document.getElementById('aa-search-input');
    var filter = input.value.toUpperCase();
    localStorage.setItem('filter', filter);
    }else {
      var content = document.getElementById('defaultcontent');
      var sidebar = document.getElementById('defaultsidebar');
      var footer = document.getElementById('defaultfooter');
      content.classList.remove('overlayvisible');
      sidebar.classList.remove('overlayvisible');
      footer.classList.remove('overlayvisible');
}}
});
