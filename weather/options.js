// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/*
  Grays out or [whatever the opposite of graying out is called] the option
  field.
*/
function ghost(isDeactivated) {
  options.style.color = isDeactivated ? 'graytext' : 'black';
                                              // The label color.
  options.frequency.disabled = isDeactivated; // The control manipulability.
}

window.addEventListener('load', function() {
  // Initialize the option controls.
  options.isNotified.checked = JSON.parse(localStorage.isNotified);
                                         // The display activation.
  options.frequency.value = localStorage.frequency;
                                         // The display frequency, in minutes.

  if (!options.isNotified.checked) { ghost(true); }

  // Set the display activation and frequency.
  options.isNotified.onchange = function() {
    localStorage.isNotified = options.isNotified.checked;
    ghost(!options.isNotified.checked);
  };

  options.frequency.onchange = function() {
    localStorage.frequency = options.frequency.value;
  };
});
