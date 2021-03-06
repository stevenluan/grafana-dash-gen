// Copyright (c) 2015 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

'use strict';

var generateGraphId = require('../id');

function DashboardList(opts) {
    opts = opts || {};
    var self = this;

    this.state = {
        title: 'dashboard list',
        error: false,
        span: 3,
        editable: true,
        type: 'dashlist',
        isNew: true,
        id: 7,
        mode: 'search',
        query: 'dashboard list',
        limit: 10,
        tags: [],
        links: []
    };

    this.state.title = opts.title || this.state.title;
    this.state.id = opts.id || generateGraphId();
    this.state.span = opts.span || 3;
    
    // finally add to row/dashboard if given
    if (opts.row && opts.dashboard) {
        opts.row.addPanel(this);
        opts.dashboard.addRow(opts.row);
    }
    for (var k in opts) {
        this.state[k] = opts[k];
    }
}

DashboardList.prototype.setTitle = function setTitle(title) {
    this.state.title = title;
};

DashboardList.prototype.generate = function generate() {
    return this.state;
};

module.exports = DashboardList;