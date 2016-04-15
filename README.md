# MoonDeploy - JS

*JavaScript utilities for MoonDeploy*


## Introduction

**MoonDeploy - JS** is a small JavaScript library simplifying the retrieval of [MoonDeploy](https://github.com/giancosta86/moondeploy) descriptors for GitHub projects. It is written in pure JavaScript, so it requires no additional dependencies.


## Usage

Copy [moondeploy3.js](moondeploy3.js) into your web project and reference it as a standard JavaScript file:

```html
<script type="text/javascript" src="PATH TO moondeploy3.js"></script>
```

then, you'll need to call the **getLatestMoonDescriptor()** function, to ask GitHub's API for the latest URL of the given descriptor.

It takes 4 parameters:

* The **Base URL**, which must match the following pattern: **https:<span></span>//github.com/GITHUB_USER/GITHUB_REPO/releases/latest**; otherwise, the function will **throw** an error message

* The **Descriptor file name** (most often, *App.moondeploy*) - that is, the filename of the descriptor uploaded to GitHub's *Releases* area

* The **success callback**, called when the most recent URL for the descriptor is correctly retrieved. It must be **function(descriptorURL)**

* The **failure callback**, called when there is a network problem. It is optional, but, if present, must be **function(apiRequest)**, where *apiRequest* is the *XMLHttpRequest* which failed

Please, note: if GitHub's API returned a result, *but* the descriptor file name was not found among the available files for the latest release, the function will **throw** an error message.


## Example

Please, refer to the [example HTML page](text.htm) and the [related script](test.js).


## Further references

* [MoonDeploy](https://github.com/giancosta86/moondeploy)

* [MoonDeploy-Gradle](https://github.com/giancosta86/MoonDeploy-Gradle)

* [MoonDeploy-Ant](https://github.com/giancosta86/MoonDeploy-Ant)
