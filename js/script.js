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
  var answer = (4 / bottom)

  if (integer > 1) {
    for (let counter = 0; counter < integer; counter++) {
      if (currentSymbol == "negative") {
        bottomNumber = bottomNumber + 2
        answer = answer - (4 / bottomNumber)
        currentSymbol = "positive"
      } else if (currentSymbol == "positive") {
        bottomNumber = bottomNumber + 2
        answer = answer + (4 / bottomNumber)
        currentSymbol = "negative"
        }
      }
    document.getElementById("output").innerHTML = answer.toFixed(10)
    console.log()
  } else {
  document.getElementById("output").innerHTML = "Number must be above 0"
  }
}
