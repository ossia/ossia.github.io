---
layout: post
title: Minimum viable declarative GUI in C++
date:   2022-03-22
author: Jean-Michaël Celerier
category: Dev
image: /assets/blog/mvp-ui/banner.png
image-alt: Some nifty C++20 code
description: Techniques for defining a declarative GUI in C++
---

## Introducing a "toolkit"

Here is the code of a minimal GUI toolkit for defining declarative UIs: 

{% highlight cpp %}
// That's it. That's the toolkit.
{% endhighlight %}

Well, this plus some extremely routine parts of "ISO/IEC JTC1 SC22 WG21 N 4860 - Programming Languages : C++", such as... strings... variable declarations... struct definitions... enums... ints... and a couple others. Code so post-modern it circled back to [orthodoxy](https://gist.github.com/bkaradzic/2e39896bc7d8c34e042b).

So, here is how one uses the C++ language plus this, uh, toolkit to declare a simple item, say, a text label:

{% highlight cpp %}
struct {
  const char* my_label = "foo";
} my_ui;
{% endhighlight %}

Believe me, dear reader, that is actually enough user code to be able to show the following UI:

![The UI]({{site.baseurl}}/assets/blog/mvp-ui/ui-minimal.png)

By user code, I mean that all the "nice" UI work can be done in, say, `foo.hpp`: 

{% highlight cpp %}
#pragma once
constexpr struct {
  const char* my_label = "foo";
} my_ui;
{% endhighlight %}

without requiring any custom header. Some yet-unknown .cpp file will include `foo.hpp`, and, no matter what the content of `my_ui` is, will execute a nice user interface from it. Anyone will be able to create independent libraries which will render UIs according to whatever platform-specific intricacies there are, but the actual UI code will be entirely independent from anything: peak separation of concerns is achieved.

### Advanced UI

The code above can be trivially extended to showing not one, but TWO labels:

{% highlight cpp %}
struct {
  const char* my_label = "foo";
  const char* other_label = "bar";
} my_ui;
{% endhighlight %}

The result:

![The UI]({{site.baseurl}}/assets/blog/mvp-ui/ui-advanced.png)

Now, one notices how the visual position of the labels in the UI has the good taste of matching 
the one in the code: the language provides us with a native primitive for ordering disjoint things, so why not just use it ?

Of course, just putting elements in a vertical row may not be sufficient for *every*  UI on earth.

Let's declare that our UI embraces horizontality instead, in the simplest way possible that I could find:

{% highlight cpp %}
struct {
  enum { hbox }; 
  const char* my_label = "foo";
  const char* other_label = "bar";
} my_ui;
{% endhighlight %}

And we get:

![The UI]({{site.baseurl}}/assets/blog/mvp-ui/hbox.png)


### Nested UI

We may want to imbricate multiple things:

{% highlight cpp %}
struct {
  enum { hbox }; 

  struct {
    enum { vbox }; 
    const char* a = "foo";
    const char* b = "bar";
  } group1;
  
  struct {
    enum { vbox }; 
    const char* a = "quz";
    const char* b = "qux";
  } group2;
} my_ui;
{% endhighlight %}

Gives: 

![The UI]({{site.baseurl}}/assets/blog/mvp-ui/quad.png)

We may want to go a bit deeper:

<picture><source type="image/avif" srcset="{{site.baseurl}}/assets/blog/mvp-ui/complete.avif"><img loading="lazy" src="{{site.baseurl}}/assets/blog/mvp-ui/complete.webp" alt="The complete UI"/></picture>

The controls are pointers to simple structs which define a couple of metadatas in the way mentioned in the [reflection]({{site.baseurl}}/posts/reflection) blogpost.

A nice thing here is that unlike many frameworks, there's not much memory to leak, as 
the very structure of C++ structs is used to define the hierarchical UI.

Of course, there has to be a rendering framework somewhere: the nice thing is that the UI code has no dependency on the actual framework.
Instead, some separate glue code will transmute our declarative UI definition. Thus, which framework exactly mostly does not matter,
for a large amount of potential UIs.

To give an example, the screenshots above were taken with a first prototype of renderer which generates QML / QtQuick code (and runs it).

## Trivial UI backends
Here is the exact same UI specification, but rendered with [Nuklear](https://github.com/Immediate-Mode-UI/Nuklear) instead, which is a fairly different UI paradigm code-wise:

<picture><source type="image/avif" srcset="{{site.baseurl}}/assets/blog/mvp-ui/nuklear.avif"><img loading="lazy" src="{{site.baseurl}}/assets/blog/mvp-ui/nuklear.webp" alt="The UI rendered with the Nuklear backend"/></picture>

I have spent an hour on it without prior knowledge of the library and did not find how to do splitters and group boxes well with it, but I'm sure there is a way ! 

Meanwhile... t r e e s.

The binding from this kind of UI specification to Nuklear holds in a ~200 lines [(fairly dirty) file](https://github.com/celtera/avendish/blob/main/include/avnd/binding/ui/nuklear_layout_ui.hpp).

Here is the core loop, for reference:


{% highlight cpp %}
void recurseItem(const auto& item)
{
  avnd::for_each_field_ref(item, [this] (auto& child) {
    this->createItem(child);      
  });
}

template<typename Item>
void createItem(const Item& item)
{
  constexpr int child_count = boost::pfr::tuple_size_v<Item>;
  if constexpr(requires { item.spacing; })
  {
    nk_label(ctx, " ", NK_TEXT_LEFT);
  }
  if constexpr(requires { item.hbox; })
  {
    nk_layout_row_dynamic(ctx, row_height, child_count);
    recurseItem(item);
  }
  else if constexpr(requires { item.vbox; })
  {
    recurseItem(item);
  }
  else if constexpr(requires { item.split; })
  {
    if (nk_tree_push(ctx, NK_TREE_TAB, "Split", NK_MINIMIZED)) {
      recurseItem(item);
      nk_tree_pop(ctx);
    }
  }
  else if constexpr(requires { item.group; })
  {
    if (nk_tree_push(ctx, NK_TREE_TAB, c_str(Item::name()), NK_MINIMIZED)) {
      recurseItem(item);
      nk_tree_pop(ctx);
    }
  }
  else if constexpr(requires { item.tabs; })
  {
    createTabs(item);
  } 
  else
  {
    // Normal widget
    createWidget(item);
  }
}
{% endhighlight %}

## Conclusion

*Glory to the post-library era and to declarative, struct & enum-based specification !*

The only remaining step is to integrate it with score's internal widget set and there will finally be a
way to specify audio and media plug-ins in a way entirely independent from any host app or framework, with zero-cost abstractions.

Here is the example plug-in showcased above, done in two ways:

- First version really only uses zero dependencies to show the sausage-making [https://github.com/celtera/avendish/blob/07beb43db484341addc121ac18727258000c44bd/examples/Ui.hpp](https://github.com/celtera/avendish/blob/07beb43db484341addc121ac18727258000c44bd/examples/Ui.hpp).
- Second version use some helpers macros: [https://github.com/celtera/avendish/blob/main/examples/Helpers/Ui.hpp](https://github.com/celtera/avendish/blob/main/examples/Helpers/Ui.hpp). I don't find them super convincing, but the nice thing is that the "public API" can be prototyped without issues ; as many distinct versions can exist concurrently. In the end, they pretty much won't exist in the binary as things can be made constexpr fairly extensively: the whole layout object can be constexpr for instance.

A few small additional things may be useful: 

- An API for loading images, for instance to render pretty SVG background à la VCVRack.
- Maybe investigating reactive properties. I have some ideas for those, which may actually fit in these margins :-)

This work can be tried with the [avendish](https://github.com/celtera/avendish) library.