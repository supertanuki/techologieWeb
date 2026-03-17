---
layout: layouts/base.njk
pagination:
  data: collections
  size: 1
  alias: tag
permalink: /tag/{{ tag | slug }}/
eleventyComputed:
  title: Thématique "{{ tag }}"
---

# {{ title }}

<ul class="episodes">
{% set episodes = collections[ tag ] %}
{% for episode in episodes | reverse %}
  {% include "episodeslist.njk" %}
{% endfor %}
</ul>