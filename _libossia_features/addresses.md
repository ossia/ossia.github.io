---
layout: score-feature
title:  "Addresses"
title_fr: "Adresses"

permalink: /score/features/addresses.html
category: "site-score"
description: "How addresses work in score and libossia"
description_fr: "Fonctionnement des adresses dans score et libossia"

tag: "Protocols"
tag_fr: "Protocoles"
visible: true
---

## Pattern match

It's possible to do e.g. 

Given a device, for instance a MIDI device that looks like 

{% highlight matlab %}
QUNEO:/1/control/1
QUNEO:/1/control/4
QUNEO:/1/control/23
{% endhighlight %}

It's possible to use 

{% highlight matlab %}
QUNEO:/1/control/*
{% endhighlight %}

to refer to all the controls at once. Such addresses are called pattern matchs and are 
available in ossia score for instance for use in input and output ports.

Read more about [the whole set of possibilities in the pattern matching section of the libossia doc](https://ossia.io/ossia-docs/?c#pattern-matching).

## Address types

In multiple cases in score and libossia, an address type can be used.

All the units can be used: for instance, color.hsv, position.xyz... 
Easy mappings also exist for convenience, listed afterwards.
Note that some of the names used in those mapping may be later used by user interfaces to 
do appropriate things (for stuff such as blob, font, label, buffer, filepath, url, width, scale...)

### Integers
* int
* integer
* int32
* i32
* long

### Floating point
* float
* single
* number
* num
* decimal
* flt
* float32
* ieee754
* real
* width
* length
* len
* height
* glfloat
* x
* y
* z
* w
* scale

### String
* string
* str
* symbol
* sym

* font

* label

* url
* filepath
* path
* file
* folder
* directory

* bytearray
* blob
* buffer

### Boolean
* bool
* boolean

### Character
* char
* character
* byte

### Arrays (vec2/vec3/vec4)
* vec2
* vec2f
* vector2
* size
* dim
* dims

* vec3
* vec3f
* vector3

* vec4
* vector4
* vec4f
* rect
* rectangle

### Impulse
* pulse
* impulse
* infinitum
* bang

### List
* list
* lst
* tuple
* vector
* generic
* anything
* any
* floatArray
* integerArray
* stringArray

