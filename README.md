# MoonDeploy - JS

*JavaScript utilities for MoonDeploy*


## Introduction

**MoonDeploy - JS** is a small JavaScript library simplifying the retrieval of [MoonDeploy](https://github.com/giancosta86/moondeploy) descriptors for GitHub projects. It is written in pure JavaScript with AJAX, so it requires no additional dependencies.


## Usage

Copy [moondeploy3.js](moondeploy3.js) into your web project and reference it as a standard JavaScript file:

```html
<script type="text/javascript" src="PATH TO moondeploy3.js"></script>
```

## Function provided

### getLatestMoonDescriptor()

**getLatestMoonDescriptor()** asks GitHub API for the latest URL of the given descriptor.

Parameters:

* The **Base URL**, which must match the following pattern:

  > https:<span></span>//github.com/GITHUB_USER/GITHUB_REPO/releases/latest

  otherwise, the function will **throw** an error message

* The **Descriptor file name** (most often, *App.moondeploy*) - that is, the filename of the descriptor uploaded to GitHub's *Releases* area. It *must* have **.moondeploy** extension

* The **success callback**, called when the most recent URL for the descriptor is correctly retrieved. It must be **function(descriptorURL)**

* The **failure callback**, called when there is a network problem. It is optional, but, if present, must be **function(apiRequest)**, where *apiRequest* is the *XMLHttpRequest* which failed

Please, note: if GitHub API returned a result, *but* the descriptor file name was not found among the available artifacts for the latest release, the function will **throw** an error message.


### getLatestReleaseArtifact()

**getLatestReleaseArtifact()** asks GitHub API for the latest release of a given file, provided that its prefix and its suffix are known. For example, file **Chronos-IDE-2.1.zip** has a **Chronos-IDE** prefix and a **.zip** suffix.

Parameters:

* The **Base URL**, which must match the following pattern:

  > https:<span></span>//github.com/GITHUB_USER/GITHUB_REPO/releases/latest

  otherwise, the function will **throw** an error message

* The **file name prefix**, which is the beginning of the file name

* The **file name suffix**, which is the ending of the file name - usually, its extension

* The **success callback**, called when the most recent URL for the file is correctly retrieved. It must be **function(fileURL)**

* The **failure callback**, called when there is a network problem. It is optional, but, if present, must be **function(apiRequest)**, where *apiRequest* is the *XMLHttpRequest* which failed


Please, note: if GitHub API returned a result, *but* the a matching artifact name was not found among the available artifacts for the latest release, the function will **throw** an error message.


### scanAssetsInGitHubLatestRelease()

**scanAssetsInGitHubLatestRelease()** is a relatively low-level function that potentially applies a callback to all the assets (that is, published artifacts) for the *latest release* of the given GitHub project.

Parameters:

* The **Base URL**, which must match the following pattern:

  > https:<span></span>//github.com/GITHUB_USER/GITHUB_REPO/releases/latest

  otherwise, the function will **throw** an error message


* The **asset function**, which is a function whose parameters are:

  * **responseObject**: the JSON object returned as a response by GitHub API about the latest release

  * **asset**: the JSON object, within the response, related to the asset currently examined

  If the function returns a *true* value, no more artifacts will be scanned and the subsequent callback won't be called


* The **all assets scanned function**, which is a callback taking one parameter:

  * **responseObject**: the JSON object returned as a response by GitHub API about the latest release

  This function is only called when the **asset function** above never returned true and all the published artifacts have been scanned

* The **error callback function**, called if a network error occurred while performing the AJAX call


## Example

Please, refer to the [example HTML page](test.htm) and the [related script](test.js).


## Further references

* [MoonDeploy](https://github.com/giancosta86/moondeploy)

* [MoonDeploy-Gradle](https://github.com/giancosta86/MoonDeploy-Gradle)

* [MoonDeploy-Ant](https://github.com/giancosta86/MoonDeploy-Ant)
