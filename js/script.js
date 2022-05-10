/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ASSIGNMENT-05-HTML/sw.js", {
    scope: "/ASSIGNMENT-05-HTML/",
  })
}

/**
 * Input.
 */

function buttonClicked() {

  var integer = document.getElementById("integer").value
  var currentSymbol = "negative"
  var bottomNumber = 1
  var answer = (4 / bottomNumber)

  while (integer > 1) {
    if (currentSymbol == "negative") {
      bottomNumber = bottomNumber + 2
      answer = answer - (4 / bottomNumber)
      currentAction = "positive"
    } else if (currentSymbol == "positive") {
      bottomNumber = bottomNumber + 2
      answer = answer + (4 / bottomNumber)
      currentAction = "negative"
    }
    integer = integer - 1
  }
  document.getElementById("output").innerHTML = answer
}
