/**
* Copyright 2011 Facebook, Inc.
*
* You are hereby granted a non-exclusive, worldwide, royalty-free license to
* use, copy, modify, and distribute this software in source code or binary
* form for use in connection with the web services and APIs provided by
* Facebook.
*
* As with any software that integrates with the Facebook platform, your use
* of this software is subject to the Facebook Developer Principles and
* Policies [http://developers.facebook.com/policy/]. This copyright notice
* shall be included in all copies or substantial portions of the software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
* THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
* DEALINGS IN THE SOFTWARE.
*
*
*/


function uniqName(name, map, keyGenerator) {
  keyGenerator = keyGenerator || defaultKeyGenerator;
  var suffix;
  var prefix;
  var match = name.match(/(.*[\-_ ])(\d+)$/);
  if (match) {
    prefix = match[1];
    suffix = match[2];
  } else {
    prefix = name + ' ';
    suffix = 1;
  }
  while (map[keyGenerator(name)]) {
    name = prefix + (suffix++);
  }
  return name;
}

function defaultKeyGenerator(name) {
  return name.toLowerCase();
}


exports.uniqName = uniqName;