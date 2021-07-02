
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/mountbuild/tone-script/blob/build/tone.png?raw=true'/>
</p>

<br/>
<br/>
<br/>

<h3 id="summary">Summary</h3>

Tone script (esoteric name Hanákana) is a Universal Writing System (UWS), capable of representing all human voice sounds in a concise and readable script. This means you can write any language in tone script script (constructed language or natural language) and read it without having to learn that language's specific quirks. [See some example words now](https://mountbuild.github.io/tone-script/words).

Tone script is a sound-based script like the [Ancient Runes](https://en.wikipedia.org/wiki/Runes), which means when you read see a symbol/letter, you know exactly how it is pronounced. There are no weird edge cases or specific words for which you have to memorize the sound. You simply learn the script and can pronounce the words and texts.

You can find how to pronounce the letters in the [PDF guide](https://github.com/mountbuild/tone-script/blob/build/guide.pdf) or partly on [leaf.surf](https://leaf.surf). Print out the [exercises](https://github.com/mountbuild/tone-script/blob/build/exercise.pdf) to learn how to write and pronounce them too! Try typing it interactively [here](https://mountbuild.github.io/tone-script)!

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/example.jpg?raw=true" />
</p>

You may note that Linguistics also has the International Phonetic Alphabet ([IPA](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet)), which seems to accomplish a similar thing. But the IPA is not for writing anything but the most detailed pronunciation guides, not for writing sentences or long texts. Tone script is meant for the later, for writing like you would in a normal language.

The ASCII encoding is mapped to IPA for your knowledge in the [call script](https://github.com/mountbuild/call-script). Ideally, tone script would be included in the Unicode standard, but [that is unlikely](http://www.unicode.org/pending/proposals.html). We have suggested it be used as a writing system [on Mars](https://twitter.com/mountbuild/status/1372723474741927938) 😂. Here is a [book](https://www.amazon.com/32-Languages-Words-Scripts-Multilingual/dp/1951702638) using it as well.

<br/>
<br/>

<p align="center"><a href="https://www.amazon.com/32-Languages-Words-Scripts-Multilingual/dp/1951702638"><img width="160" src="https://github.com/mountbuild/tone-script/blob/build/book.png?raw=true"/></a></p>

It doesn't necessarily play well with dyslexia, which might find the highly symmetric patterns difficult. We think there are far better methods of learning outside of writing systems than trying to invent the perfect script for all cases. To most natural languages, dyslexia is an unsolved problem. We instead strive to make a minimal seed from which knowledge can be modelled from primitive parts, memorized, and then used to derive further knowledge.

Tone Script is also a monospaced font, to be used eventually for programming. All sounds are derived from 3 base shapes, that for `i`, `a`, and `u`. Rotating and extending tails on them gives you the remaining base letters. Then adding dots to them extends the sound of the base letter slightly. From this it should be straightforward to memorize how to pronounce words in a day or so, and from there you can read and write any language pretty well.

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/transform.gif?raw=true" height="300" />
</p>

<h3 id="sounds-32">The Alphabet</h3>

These are the 39 main sounds. Everything else are variations of these sounds. These "variations" are accomplished in a structured way, see the [guide](https://github.com/mountbuild/tone-script/blob/build/guide.pdf). Indic retroflex consonants are added with a dot on the tailless side. Arabic sounds are added with a dot on the tailed side usually. Clicks are mapped to the closest mouth-position-oriented sound. Ejectives and implosives are simply added with accent marks. Etc.

Alphabetical order is this:

```
i
a
u
e
E
U
I
o
A
O
o~
u~ (r)
e~
i~
a~
ma
na
qi
ga
da
bi
pa
tu
ki
hu
lu
wi
fa
si
Ci
za
vu
ya
xu
ri
cu
ji
'a
r~i
La
Ni
Xa
Du
Ju
Ti
Ra
Ha
Ku
Va
Fu
Sa
Zi
"u
l~a
d~a
s~u
c+~a
t~u
b?a
g?u
ap.
at.
ak.
p!
t!
k!
s!
x!
T!
K!
p@
t@
k@
s@
d*
l*
p*
t*
k*
```

## Main Symbols

Here are the consonants and vowels in their main form (without tone or stress markers).

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/symbols.png?raw=true" />
</p>

Note, to add "aspiration" to a sound, you add the corresponding "h" symbol after the main symbol. To add nasalization to a vowel, you add a two dots below the vowel. Long vowels are made by writing two vowel letters.

## Phonology

Here is the consonant IPA phonology chart mapping.

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/phonology.png?raw=true" />
</p>

## Vowel Symbols

Here are all the possible vowel combinations. The combination elements are: tone (1, 2, 3, 4, or 5, 1 being the lowest, 5 being the highest), nasality, and stress. In languages with only 3 tones you can just use tones 2, 3, and 4, but in languages with 5 tones you need all 5. Nasality is done with two dots under the vowel. Stress is done with one dot above the vowel. Low tones are on the left, high tones on the right.

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/vowels.png?raw=true" />
</p>

## Usage

```bash
npm install @mountbuild/tone-script -g
```

To get access to the font for your own system, either just click and download the [font.otf](https://github.com/mountbuild/tone-script/blob/build/font.otf) directly, or do this to copy it after you've installed the NPM package:

```bash
tone-script use tone-script.otf
```

To print tone-script-font-ready text in the terminal, use:

```bash
tone-script print "hElo wrld"
tone-script print "$(<story.txt)"
```

Note, you need to write it in tone script ASCII (called "call script"), which you can see by looking at the form.js file.

To view it in the browser fully rendered:

```bash
tone-script view example.txt
```

<p align="center">
  <img src="https://github.com/mountbuild/tone-script/blob/build/tutorial.gif?raw=true" />
</p>

To use it in pure JavaScript:

```bash
npm install @mountbuild/tone-script
```

Then in JavaScript or Node.js land:

```js
const tone = require('@mountbuild/tone-script')

document.body.innerHTML = tone('hElow wOrld')
```

Here is how you might use it more robustly:

```js
const lines = `frUm mAunt yu faind CU stown, ritxiq tu CU klAwd
no wEr an Orc duw yuw fil CU pAwOr Uv neytxOr al UrAwnd
wIc CU klAwd sow klows, yuw kAn si, tUtx, En teyst
fidiq yor EnOrdji tu CU stown wIc heyst
mAwnt holdz Its xeyp, layk CU sikrIt bal`
  .split(/\n+/)
  .map(line => line.split(/\s+/).map(tone).join(' '))
  .join('\n')

document.body.innerHTML = lines.split(/\n/)
  .map(line => `<div>${line}</div>`)
  .join('\n')
```

<h3 id="license">License</h3>

Copyright 2021 <a href='https://mount.build'>Mount</a>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

<h3 id="mount">Mount</h3>

Tone script is being developed by the folks at [Mount](https://mount.build), a California-based project for helping humanity master information and computation. Mount started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to a seed of a project just beginning its development phases. Mount funds tone script's development with [Etsy](https://etsy.com/shop/mountbuild) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/mountbuild), [Twitter](https://twitter.com/mountbuild), and [LinkedIn](https://www.linkedin.com/company/mountbuild). Check out our other GitHub projects as well!

<br/>
<br/>
