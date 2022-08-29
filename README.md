# LivePerson’s Developer Center and Community

**This site is maintained by LivePerson’s Developer Experience team. Please contact dx-lp@liveperson.com for issues, comments, or questions.**

This repository hosts LivePerson’s Developer Center, which can be found at [developers.liveperson.com](https://developers.liveperson.com/). The site is generated using [Jekyll](https://jekyllrb.com/). If you find an issue with the documentation, site structure, meta or anything else, please open an issue and we’ll respond as soon as possible.

## Table of contents

1. 📡 [Updating the documentation](#updating-the-documentation)
2. 📝 [Notes on content and code](#notes-on-content-and-code)
3. 🔨 [Building the site locally](#building-the-site-locally)
4. 👻 [Hiding files](#hiding-files)
5. 📋 [Template](#template)
6. 📜 [Licensing](#licensing)

## Updating the documentation

All pages on the site correspond to a Markdown file (.md) which can be found inside `pages/Documents`. To update a file, please branch off of the `master` branch, edit the file in question, and create a pull request back to the master branch.

### Committing changes to the site

Before making any commits, please make sure to read the _Updating and creating headers_ section. There is now a Git precommit hook that ensures you follow the rules on Markdown file creation. This hook will run on every commit and deny commits if they fail the test. The errors will be outputted to `./_scripts/docOutputError.log`. If you are adding new content, please make sure you are updating the content in the documentsupdated.yaml file. Our tests will use that YAML file as the source of truth, so make sure your header naming structure matches the documentsupdated.yaml.

File name rules:

1. All Markdown files must match the pagename that is provided in the headers
2. Spaces in pagename must be replaced with a “-”
3. All words are lowercased
4. All special characters excluding periods and dashes need to be removed from the filename
5. Periods are replaced by dashes.

Folder name rules:

1. They must use [upper camel case (Pascal case)](https://en.wikipedia.org/wiki/Camel_case)
2. All files in the folder, must include a reference in its header to its folder name. This will be in either the documentname, categoryname, or subfoldername (depending on the location of the folder)
3. All special characters excluding periods, dashes, and “&” need to be removed from Foldername
4. Periods are replaced with dashes.

Examples:

* A page name `Customizing the Conversational Cloud!` should use the file name `customizing-the-conversational-cloud.md`
* A document name `Add Agent Widgets` should use a folder with the name of `AddAgentWidgets`

The category name is the topmost folder in the sidebar.

### How to understand the documentsupdated.yaml file

Example of a normal layout:

    - categoryname: Agent Experience
      image: agent-experience-new
      documents:
      - documentname: Add Agent Widgets
        pages:
        - pagename: Add Your Own Widgets to the Agent Workspace
      - documentname: Agent Workspace Widget SDK
        pages:
          - pagename: Overview
          - pagename: Limitations
          - pagename: Methods
          - pagename: Public Model Structure
          - pagename: Public Properties
          - pagename: Best Practices and Troubleshooting
          - pagename: Release Notes
      - documentname: Chat Agent API
        basedomain: https://{domain}/api/account/{accountId}/agentSession
        pages:
        - pagename: Overview 

1. The Top layer 0 in this structure is the category name Agent Experience. Its folder name is`AgentExperience`.
2. `Add Agent Widgets` is a folder in layer 1 with the `AgentExperience/AddAgentWidgets` path. The `Add Agent Widgets` folder only contains one page.
3. `AgentExperience/AddAgentWidgets/add-your-own-widgets-to-the-agent-workspace.md` is the path of the file, and must list all parent folders, excluding the layer 0 `categoryname`.
4. For the above example, the permalink is `add-agent-widgets-add-your-own-widgets-to-the-agent-workspace.html`.
5. If you look at the document named `Agent Workspace Widget SDK`, it is still on level 1 with the `AgentExperience/AgentWorkspaceWidgetSDK/` path. The files in the folder are all listed below pages until you get to the last `pagename`; i.e., the document name `Chat Agent API` is not a folder located inside `Agent Workspace Widget SDK`.

Example of a subfolder layout:

    - categoryname: Conversational AI
      image: agent-experience
      documents:
      - documentname: Conversational AI
        pages:
          - pagename: Overview
      - documentname: Conversation Builder
        pages:
          - pagename: Tutorials & Guides
            subpages:
              - subpagename: Getting Started
              - subpagename: Using Meta Intents with Conversation Builder
              - subpagename: Implementing a Web View Integration
              - subpagename: Using LivePerson Functions with a Bot
  
1. The `pagename` entry `Tutorial & Guides` is not a file, but a folder, because it has subpages.
2. In the Markdown file for `Using Meta Intents with Conversation Builder`, the `pagename` must match the `subpagename`.
3. The file must include `Tutorial & Guides` as a `subfoldername` header since it is at level 2. 
4. The file must include `Conversation Builder` as a `documentname` in the header. 
5. The permalink must be `conversation-builder-tutorials-guides-using-meta-intents-with-conversation-builder.html`.
6. Notice how the `&` in the `subfoldername` is replaced by a dash in the permalink.
  
Another example:

    - categoryname: Getting Started
      image: getting-started
      documents:
      - documentname: Getting Started with your Free Trial Account
      - documentname: Do More with the Conversational Cloud
      - documentname: Customizing the Conversational Cloud
      - documentname: Starting with your Concierge Bot
      - documentname: API Guidelines
        pages:
        - pagename: Accessing LivePerson APIs
        - pagename: Create OAuth 1.0 API keys
        - pagename: OAuth 2.0 Client Credentials
        - pagename: Domain API
        - pagename: Data APIs
        - pagename: API Data Metrics
        - pagename: Engagement Attributes
        - pagename: Analytics Builder Data Metrics
        - pagename: Retry Policy Recommendations
        
1. The `documentname` entry `Getting Started with your Free Trial Account` does not represent a folder, because it does not contain a pages key.
2. Since this above file only contains one parent, there should not be a `documentname` in the file `getting-started-with-your-free-trial-account.md`.
3. The `pagename` for `getting-started-with-your-free-trial-account.md` must match the `documentname` in the YAML file `Getting Started with your Free Trial Account`.

### Environments

To update the production and staging environments, create a pull request for master or Staging [sic]. When the pull request gets merged, an automated release cycle will start and publish those changes in around five minutes.

* Production (built from the `master` branch): [https://developers.liveperson.com/](https://developers.liveperson.com/)
* Staging (built from the `Staging` branch): [https://staging-vdt2zeq-jlynhjefjcpgg.us.platform.sh/](https://staging-vdt2zeq-jlynhjefjcpgg.us.platform.sh/)

### Updating and creating headers

Jekyll uses a [front-matter](https://jekyllrb.com/docs/frontmatter/) block to arrange and define the various documents on the site. It is the text that appears in between the “---” dashes at the top of each document. It’s technically a YAML snippet, so all [YAML formatting](http://www.yamllint.com/) and rules apply. Our headers usually include the following key/value pairs:

* `pagename`: This is the name of the page that will appear at the top of the document.
* `keywords`: This header replaces the keywords found in the respective `<meta>` element of the page. Leave it empty, as it’s not currently used.
* `sitesection`: This key accepts either `Documents` or `Solutions`. This designates which part of the site the document is under.
* `categoryname`: This is the category to which the document’s API belongs (for example, the “Create Users” method belongs to the Users API which is under Contact Center Management).
* `documentname`: This is the API to which the document belongs.
* `subfoldername`: This is a sub-folder to which the document belongs, if there is one.
* `permalink`: this key defines the link at which the document can be found. The format of this value **must be** as follows; any other value format will cause the sidebar to malfunction:
  - If the page has a `subfoldername` value: `documentname-subfoldername-pagename`. For example: `mobile-app-messaging-sdk-for-android-advanced-features-audio-messages.html`.
  - If the page does not have a `subfoldername` value: `documentname-pagename`. For example: `users-api-overview.html`.
* `indicator`: This key contains a chat or messaging indicator (or both) for a document. It accepts `chat`, `messaging`, or `both` as its values.
* `layout`: Sets the value to `hidden-layout`, if you want this file to be ignored in search engines.
* `date_published`: This adds the date when it was published. `date_published: 2019/01/30` needs to be added manually
* `date_updated`: Last modified date added. Here's an example: `date_updated: 2022/01/30`

## Notes on content and code

When contributing to this repository, please observe the following:

### Content and punctuation

* Use American English
* Prefer active voice
* Try to use language that’s human and personal
* Keep it brief
* Use lists (ordered series in numbered lists, unordered series in bulleted lists)
* In headings, use [sentence case](https://apastyle.apa.org/style-grammar-guidelines/capitalization/sentence-case) (“This is a heading”)
* Use an Oxford comma (“one, two, and three”)
* Use typographically correct quotation marks (“”) ([keyboard shortcuts](https://chrisbracco.com/curly-quotes/))
* For dashes, use an [em dash](https://www.thepunctuationguide.com/em-dash.html), surrounded by spaces (“ — ”)
* Avoid “here” links
* Use the [singular “they,”](https://en.wikipedia.org/wiki/Singular_they) whenever a single-person reference is needed

#### APIs and SDKs

If you’re adding or deprecating an API or SDK, add it or update its status on the [APIs and SDKs overview](https://developers.liveperson.com/liveperson-apis-and-sdks.html).

### Code and media

* Be consistent
* Use [Markdown](https://www.markdownguide.org/basic-syntax/) wherever possible (i.e., avoid HTML in Markdown files)
* Make sure all images have an appropriate replacement text (“alt text”) (this is a forward-looking rule, though one to be applied to existing images when possible)
* To highlight notes, important sections, or deprecated information, you can precede the respective paragraph with `{: .important}`, `{: .notice}`, or `{: .deprecated}`
* The maximum (view) width for images in this repository is 800 pixels

You’ll find that few pages follow all these rules yet. This is subject to change as content and code are being edited. Contributions are welcome—thank you!

## Building the site locally

**Important:** This repository currently requires Ruby 2.7.x. Attempts to run the local server on 3.x.x may generate confusing errors.

If you have not done so, install Ruby. Here’s a helpful guide on [how to best do that on macOS](https://mac.install.guide/rubyonrails/) (you can stop once Ruby is installed, as you don’t need Rails) and on [any other system](https://www.ruby-lang.org/en/documentation/installation/). Another good resource is [Jekyll’s installation guide](https://jekyllrb.com/docs/installation/macos/), with the only difference being to have `chruby` point to a different version of Ruby (like 2.7.6).

Once you have installed Ruby, clone this repository to your machine. Then, navigate to it using Terminal or your preferred command line interface. Follow the steps below to run the site from your machine. **If you’re on Windows, don’t forget to run your CLI as an admin.**

### Install

1. Run `npm install`
2. Run `bundle install`

### Launch

3. Run `npm run serve`
4. Navigate to http://localhost:4000/ (or the port you chose) to access the site

### Notes

To use Jekyll’s standard commands, all you need to run in consequent builds of the site is `bundle exec jekyll serve`. You can add the suffix `--incremental` to enable incremental building of the site. This saves build times since the regeneration feature is enabled by default (the site rebuilds every time you hit “save”). When `--incremental` is used, Jekyll won’t rebuild the entire site on every save, only the affected sections. If you’d like the project to automatically open in a new tab, you can add the `-o` flag to the end of the above command.

Changes that alter site navigation or other changes that change the site as a whole might not show up when using `--incremental`. If that occurs, kill the build and run `bundle exec jekyll serve` without the suffix. (This is also true for gulp: You will need to kill your gulp instance and then run the Jekyll command.)

## Hiding files

* Add the files to the [Hidden/Hidden folder](/tree/Staging/pages/Documents/Hidden/Hidden).
* Do not include them in the documentsupdated.yaml file.
* Ensure the `layout` header is set to `hidden-layout` so that search engines do not find it.
* Follow the header structure of [`blank.md`](/blob/Staging/pages/Documents/Hidden/Hidden/blank.md) in the Hidden/Hidden folder to set the headers correctly.

**Any other parameters not documented here, but in the front matter of other files, are deprecated and only present for backwards-compatibility. They should not be used.**

### Adding new documents to the sidebar

Once you’ve created a new document, you’ll need to have it manually added. We chose a manual process for the sidebar for a few reasons:

1. It reduces the fragility of the sidebar (the extra, manual step gives us another layer of QA).
2. It increases the flexibility of the sidebar (we write code once and then maintain a YAML file, making it easier to add options).
3. It decreases site build times (since the `forloops` needed to dynamically build a sidebar in a site of our size and complexity are time- and resource-consuming).

The sidebar’s YAML file can be found in the `_data` folder. It’s called `documentsupdated.yaml`. You **must** make sure the name of the file and the pagename in the sidebar correspond; the link the sidebar sends to is auto-generated and **must** match the `permalink` in the file’s header (see above). Please make sure the Markdown file created contains its `pagename`, `documentname`, `categoryname`, and `permalink` in its header. The Markdown file might need more information depending on where it will need to be in the sidebar.

## Template

See the `_template` folder above for a complete template of a simple REST API. Other templates will follow in the future. However, if you have a unique API to document or need further assistance, please reach out to the Developer Experience team *before* starting to write your document so that we can advise on its structure.

### Algolia

Algolia is the tool we use for the search bar. It generates a list of searchable items by indexing it in their dashboard which is then pulled into the search bar within the project

To get the latest data to be added into Algolia simply do a pull request on the production branch (master)

## Licensing

All usage of the contents, documentation or code found in this repository is subject to the [LivePerson API Terms of Use](https://www.liveperson.com/policies/apitou).
