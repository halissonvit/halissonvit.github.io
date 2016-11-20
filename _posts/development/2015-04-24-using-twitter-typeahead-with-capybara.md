---
layout: post
title: Using Twitter Typeahead with Capybara
date: 2015/04/24
last_updated: 2015/04/24
author: Halisson Bruno
categories:
  - Development
tags:
  - dev
  - tests
  - capybara
  - typeahead
  - autocomplete
---

I ran into a situation where I need to test a typeahead autocomplete field. For some reason the interaction with the
autocomplete field does not show suggestions. I have searched for a solution, and almost all of them involved the
execution of some sort of scripts using Capybara.

The solution I am using right now, is to create a typedown event, and to fire the event after set the value using
the typeahead API.

```ruby
      def fill_in_auto_complete(selector, value)
        create_event = "var e = $.Event('keydown', { keyCode: 40 })"
        type_text = "$('#{selector}').typeahead('val', '#{value}')"
        trigger_event = "$('#{selector}').trigger(e)"
        page.execute_script %Q{ #{create_event}; #{type_text}; #{trigger_event};}
      end
```

I think it's a little hackish, but it will do the job for now.

Source: [typeahead.js/issues/798](https://github.com/twitter/typeahead.js/issues/798)
