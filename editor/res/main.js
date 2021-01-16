$(document).ready(function () {

    // read console
    let consoleContents = [];

    // rewrite console funtions to get the content
    let _console;
    if (console) {
        _console = {
            log: console.log,
            info: console.info,
            debug: console.debug,
            warn: console.warn,
            error: console.error,
        };
    } else {
        consoleContents.push('** console not available **');
    }
    console.log = function () {
        consoleContents.push({ type: 'log', content: [].slice.call(arguments).join('') });
        _console.log.apply(console, arguments);
    };
    console.info = function () {
        consoleContents.push({ type: 'info', content: [].slice.call(arguments).join('') });
        _console.info.apply(console, arguments);
    };
    console.debug = function () {
        consoleContents.push({ type: 'debug', content: [].slice.call(arguments).join('') });
        _console.debug.apply(console, arguments);
    };
    console.warn = function () {
        consoleContents.push({ type: 'warn', content: [].slice.call(arguments).join('') });
        _console.warn.apply(console, arguments);
    };
    console.error = function () {
        consoleContents.push({ type: 'error', content: [].slice.call(arguments).join('') });
        _console.error.apply(console, arguments);
    };

    // JC: where is this used?
    let defaultValue = "\n$mammal=(dog | child | ox)\n\n$verb=(watching | listening)\n\nThe $mammal.pluralize() were $verb.\n";

    CodeMirror.defineSimpleMode("RiScript", {
        start: [
            // //introduce JavaScript
            // { regex: /\!\-\-Start/, token: "meta", mode: { spec: 'javascript', end: /\!\-\-End/}},

            //RiScript
            { regex: /\$\w+/g, token: ["keyword"] },
            //vars
            { regex: /\((.*\|)+.*\)/g, token: ["keyword"] },
            //choices

            //javascript rules modified from https://codemirror.net/demo/simplemode.html
            { regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string" },
            { regex: /'(?:[^\\]|\\.)*?(?:'|$)/, token: "string" },
            { regex: /(function)(\s+)([a-z$][\w$]*)/, token: ["keyword", null, "variable-2"] },
            { regex: /(?:function|var|let|return|if|for|while|else|do|this)\b/, token: "keyword" },
            { regex: /true|false|null|undefined/, token: "atom" },
            { regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i, token: "number" },
            { regex: /\/\/.*/, token: "comment" },
            { regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3" },
            { regex: /\/\*/, token: "comment", next: "comment" },
            { regex: /[-+\/*=<>!]+/, token: "operator" },
            { regex: /[\{\[\(]/, indent: true },
            { regex: /[\}\]\)]/, dedent: true },
            { regex: /[a-z$][\w$]*/, token: "variable" },
            { regex: /<</, token: "meta", mode: { spec: "xml", end: />>/ } },
        ],
        comment: [
            { regex: /.*?\*\//, token: "comment", next: "start" },
            { regex: /.*/, token: "comment" }
        ],
        meta: {
            dontIndentStates: ["comment"],
            lineComment: "//"
        }
    });

    let editor = CodeMirror.fromTextArea($('#inputArea')[0], {
        lineNumbers: true,
        mode: 'RiScript',
    });
    editor.setSize("100%", "100%");

    let errorLine, doc = editor.getDoc();

    editor.on('change', function () {
        removeHighlight(errorLine);
    });

    // resizing
    $(".resizer.vertical").mousedown(function (e) {
        e.preventDefault();
        $("body").mousemove(function (m) {
            let x = m.pageX;
            let h = $("body").width() - m.pageX;
            $("#output").css({ width: x });
            $("#console").css({ width: h });
        });
    });
    $(".resizer.horizontal").mousedown(function (e) {
        e.preventDefault();
        $("body").mousemove(function (m) {
            let h = $("body").height() - m.pageY;
            $(".output-button-wrapper").css({ height: h })
        });
        let h = $("#output").height() - 30
        $(".content-wrapper").css({ height: h });
    });
    $("body").mouseup(function (e) {
        $(this).unbind("mousemove");
    });

     // buttons
    $("#clear").click(function (e) {
        e.preventDefault();
        editor.clearHistory();
        editor.setValue(defaultValue);
        $("#inputArea").val(defaultValue);
    });
    $("#run").click(function (e) {
        e.preventDefault();
        runCode();
    });
    $("#save").click(function (e) {
        e.preventDefault();
        saveCode();
    });
    $("#clearConsole").click(function (e) {
        e.preventDefault();
        $("#console .content").empty();
        consoleContents.length = 0;
    });
    $("#clearOutput").click(function (e) {
        e.preventDefault();
        $("#output .content").empty();
        consoleContents.length = 0;
    });

    // helpers
    function runCode() {

        // JC: need to run the code via RiTa.evaluate(theCode);

        let code = editor.getValue();
        let s = document.createElement("script");
        s.setAttribute("id", "receivedCode");
        s.textContent = code;
        document.body.appendChild(s);
        let h = $("#output").height() - 30
        $(".content-wrapper").css({ height: h });
        $("#output .content").append("<p class='output-content'>" + tryCode() + " </p>");
        $("#console .content").empty();
        consoleContents.forEach(function (e) {
            if (e.type == 'log') {
                $("#console .content").append("<p class='output-content'>" + e.content + " </p>");
            } else if (e.type == 'error') {
                $("#console .content").append("<p class='output-content-error'>" + e.content + " </p>");
            } else if (e.type == 'warn') {
                $("#console .content").append("<p class='output-content-warn'>" + e.content + " </p>");
            }
        });
    }

    function tryCode() { // what is this for ?
        try {
            return main(); // what is main?
        } catch (e) {
            let string = [].slice.call(e.stack).join('');
            if (string.includes("main") && string.includes("tryCode")) {
                let arr = string.split(' ');
                let lineNo = arr[arr.indexOf("main") + 1].split(':')[1];
                highlightError(lineNo - 1);
                console.error(e.name + ": " + e.message + " at line: " + lineNo);
            } else {
                console.error(e.stack);
            }
        }
    }

    function saveCode() {
        //via https://stackoverflow.com/a/30832210
        let data = doc.getValue();
        let fileName = $("#title").val() + '.rs';
        let b = new Blob([data], { type: 'text' });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(b);
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
        }, 0);
    }

    function highlightError(lineNo) {
        doc.addLineClass(lineNo, "background", "highLightedError");
        errorLine = lineNo;
    }

    function removeHighlight(lineNo) {
        if (lineNo) {
            doc.removeLineClass(lineNo, "background", "highLightedError");
            errorLine = undefined;
        }
    }
});


