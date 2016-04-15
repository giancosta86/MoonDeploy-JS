/*§
  ===========================================================================
  MoonDeploy - JS
  ===========================================================================
  Copyright (C) 2016 Gianluca Costa
  ===========================================================================
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  ===========================================================================
*/

var githubLatestRegex = /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/releases\/latest\/?$/

function getLatestMoonDescriptor(baseURL, descriptorFileName, successCallback, errorCallback) {
  var githubLatestComponents = githubLatestRegex.exec(baseURL)

  if (githubLatestComponents) {
    var gitHubUser = githubLatestComponents[1]
    var gitHubRepo = githubLatestComponents[2]

    var apiRequest = new XMLHttpRequest()

    apiRequest.onreadystatechange = function() {
      if (apiRequest.readyState == 4) {
        if (apiRequest.status == 200) {
          var responseObject = JSON.parse(apiRequest.responseText)

          for (asset of responseObject.assets) {
            if (asset.name == descriptorFileName) {
              successCallback(asset.browser_download_url)
              return
            }
          }

          throw `Cannot find descriptor '${descriptorFileName}' at ${responseObject.html_url}`
        } else {
          if (errorCallback) {
            errorCallback(apiRequest)
          }
        }
      }
    }


    var apiURL = "https://api.github.com/repos/" + gitHubUser + "/" + gitHubRepo + "/releases/latest"

    apiRequest.open("GET", apiURL, true)
    apiRequest.send()
  } else {
      throw("The baseURL parameter must be a GitHub URL ending with /releases/latest")
  }
}
