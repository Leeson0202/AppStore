self.addEventListener("message", function (e) {
    let data = e.data;
    let mdText = data.mdText;
    let markdown = new Markdown({mdText: mdText});
    let htmlText = markdown.markdown();
    self.postMessage({htmlText: htmlText})
}, false);

class Markdown {
    constructor(props = {mdText: ""}) {
        this.h1Reg = /^([-+*]*)(&nbsp;)*(#)&nbsp;(.+)/;
        this.h2Reg = /^([-+*]*)(&nbsp;)*(#{2})&nbsp;(.+)/;
        this.h3Reg = /^([-+*]*)(&nbsp;)*(#{3})&nbsp;(.+)/;
        this.h4Reg = /^([-+*]*)(&nbsp;)*(#{4})&nbsp;(.+)/;
        this.h5Reg = /^([-+*]*)(&nbsp;)*(#{5})&nbsp;(.+)/;
        this.h6Reg = /^([-+*]*)(&nbsp;)*(#{6})&nbsp;(.+)/;
        this.hrReg = /^[-+*_]{3,}$/;
        this.aReg = /\[([^\[\]]+?)]\(([^()]+?)\)/;
        this.imgReg = /!\[([^\[\]]+?)]\(([^()]+?)\)/;
        this.strongReg = /\*\*(.+?)\*\*/;
        this.emReg = /\*(.+?)\*/;
        this.delReg = /~~(.+?)~~/;
        this.markReg = /==(.+?)==/;
        this.subReg = /~(.+?)~/;
        this.supReg = /\^(.+?)\^/;
        this.inlineCodeReg = /`{1,2}(.+?)`{1,2}/;
        this.ulReg = /\n([-+*].*(\n[-+*].*)*)/;
        this.olReg = /\n([1-9]+\..*(\n[0-9]+\..*)*)/;
        this.blockquoteReg = /\n(&gt;.*(\n&gt;.*)*)/;
        this.codeReg = /\n```\n([\s\S]*?)\n```[\n]?/;
        this.tableReg = /\n(\|.*?\|<br>\n(\|(nbsp;)*-+)+\|<br>\n(\|.*?\|<br>\n)*)/;
        this.tranRegs = [{reg: /\\\\/, to: "<tranBackslash>"}, {reg: /\\&amp;/, to: "<tranAnd>"}, {
            reg: /\\&nbsp;/,
            to: "<tranSpace>"
        }, {reg: /\\&lt;/, to: "<tranLess>"}, {reg: /\\&gt;/, to: "<tranGreater>"}, {
            reg: /\\&#39;/,
            to: "<tranSingleQuotation>"
        }, {reg: /\\&quot;/, to: "<tranDoubleQuotation>"}, {reg: /\\#/, to: "<tranNumberSign>"}, {
            reg: /\\=/,
            to: "<tranEqual>"
        }, {reg: /\\\+/, to: "<tranAdd>"}, {reg: /\\-/, to: "<tranReduce>"}, {
            reg: /\\\*/,
            to: "<tranAsterisk>"
        }, {reg: /\\_/, to: "<tranUnderline>"}, {reg: /\\`/, to: "<tranBackquote>"}, {
            reg: /\\\|/,
            to: "<tranDelimiter>"
        }, {reg: /\\~/, to: "<tranWaveSign>"}, {reg: /\\\^/, to: "<tranPower>"}, {
            reg: /\\!/,
            to: "<tranExclamatoryMark>"
        }, {reg: /\\{/, to: "<tranLeftCurlyBracket>"}, {reg: /\\}/, to: "<tranRightCurlyBracket>"}, {
            reg: /\\\[/,
            to: "<tranLeftSquareBracket>"
        }, {reg: /\\]/, to: "<tranRightSquareBracket>"}, {reg: /\\\(/, to: "<tranLeftBracket>"}, {
            reg: /\\\)/,
            to: "<tranRightBracket>"
        }, {reg: /\\./, to: "<tranDot>"}];
        this.tranToRegs = [{reg: /<tranBackslash>/, to: "\\"}, {reg: /<tranAnd>/, to: "&amp;"}, {
            reg: /<tranSpace>/,
            to: "\\&nbsp;"
        }, {reg: /<tranLess>/, to: "&lt;"}, {reg: /<tranGreater>/, to: "&gt;"}, {
            reg: /<tranSingleQuotation>/,
            to: "&#39;"
        }, {reg: /<tranDoubleQuotation>/, to: "&quot;"}, {reg: /<tranNumberSign>/, to: "#"}, {
            reg: /<tranEqual>/,
            to: "="
        }, {reg: /<tranAdd>/, to: "+"}, {reg: /<tranReduce>/, to: "-"}, {
            reg: /<tranAsterisk>/,
            to: "*"
        }, {reg: /<tranUnderline>/, to: "_"}, {reg: /<tranBackquote>/, to: "`"}, {
            reg: /<tranDelimiter>/,
            to: "|"
        }, {reg: /<tranWaveSign>/, to: "~"}, {reg: /<tranPower>/, to: "^"}, {
            reg: /<tranExclamatoryMark>/,
            to: "!"
        }, {reg: /<tranLeftCurlyBracket>/, to: "{"}, {
            reg: /<tranRightCurlyBracket>/,
            to: "}"
        }, {reg: /<tranLeftSquareBracket>/, to: "["}, {
            reg: /<tranRightSquareBracket>/,
            to: "]"
        }, {reg: /<tranLeftBracket>/, to: "("}, {reg: /<tranRightBracket>/, to: ")"}, {reg: /<tranDot>/, to: "."}];
        let htmlEncode = str => {
            let s;
            if (str.length === 0) {
                return ""
            }
            s = str.replace(/&/g, "&amp;").replace(/ /g, "&nbsp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
            return s
        };
        this.props = props;
        this.props.mdText = htmlEncode(this.props.mdText)
    }

    markdown() {
        const replaceTran = htmlText => {
            let reg;
            let i = 0;
            for (let tranReg of this.tranRegs) {
                while (reg = tranReg.reg.exec(htmlText)) {
                    htmlText = htmlText.replace(tranReg.reg, tranReg.to)
                }
                i++
            }
            return htmlText
        };
        const replaceTranTo = htmlText => {
            let reg;
            let i = 0;
            for (let tranToReg of this.tranToRegs) {
                while (reg = tranToReg.reg.exec(htmlText)) {
                    htmlText = htmlText.replace(tranToReg.reg, tranToReg.to)
                }
                i++
            }
            return htmlText
        };
        const replaceA = htmlText => {
            let reg;
            while (reg = this.aReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.aReg, `<a class="md-a" href="${reg[2]}" target="_blank">${reg[1]}</a>`)
            }
            return htmlText
        };
        const replaceImg = htmlText => {
            let reg;
            while (reg = this.imgReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.imgReg, `<img class="md-img" src="${reg[2]}" alt="${reg[1]}"/>`)
            }
            return htmlText
        };
        const replaceStrong = htmlText => {
            let reg;
            while (reg = this.strongReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.strongReg, `<strong class="md-strong">${reg[1]}</strong>`)
            }
            return htmlText
        };
        const replaceEm = htmlText => {
            let reg;
            while (reg = this.emReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.emReg, `<em class="md-em">${reg[1]}</em>`)
            }
            return htmlText
        };
        const replaceDel = htmlText => {
            let reg;
            while (reg = this.delReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.delReg, `<del class="md-del">${reg[1]}</del>`)
            }
            return htmlText
        };
        const replaceMark = htmlText => {
            let reg;
            while (reg = this.markReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.markReg, `<mark class="md-mark">${reg[1]}</mark>`)
            }
            return htmlText
        };
        const replaceSub = htmlText => {
            let reg;
            while (reg = this.subReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.subReg, `<sub class="md-sub">${reg[1]}</sub>`)
            }
            return htmlText
        };
        const replaceSup = htmlText => {
            let reg;
            while (reg = this.supReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.supReg, `<sup class="md-sup">${reg[1]}</sup>`)
            }
            return htmlText
        };
        const replaceInlineCode = htmlText => {
            let reg;
            while (reg = this.inlineCodeReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.inlineCodeReg, `<code class="md-code-inline">${reg[1]}</code>`)
            }
            return htmlText
        };
        const replaceBlockquote = htmlText => {
            htmlText = "\n" + htmlText;
            let reg;
            while (reg = this.blockquoteReg.exec(htmlText)) {
                let reg2 = reg[1];
                reg2 = reg2.split("\n");
                for (let i = 0, l = reg2.length; i < l; i++) {
                    reg2[i] = reg2[i].replace(/^&gt;/, "");
                    if (!/^&gt;/.test(reg2[i]) && /\s*/.test(reg2[i])) {
                        reg2[i] = `${reg2[i]}`
                    }
                }
                reg2 = reg2.join("\n");
                if (!/&gt;/.test(reg2)) {
                    reg2 = reg2.split("\n\n");
                    reg2 = reg2.join("<br>");
                    reg2 = `<p>${reg2}</p>`
                }
                reg2 = `<blockquote class="md-blockquote">\n${reg2}\n</blockquote>`;
                htmlText = htmlText.replace(this.blockquoteReg, reg2)
            }
            return htmlText
        };
        const replaceUl = htmlText => {
            htmlText = "\n" + htmlText;
            let reg;
            while (reg = this.ulReg.exec(htmlText)) {
                let reg2 = reg[1];
                reg2 = reg2.split("\n");
                for (let i = 0, l = reg2.length; i < l; i++) {
                    reg2[i] = reg2[i].replace(/^[-+*](&nbsp;)?/, "");
                    if (!/^[-+*](&nbsp;)?/.test(reg2[i])) {
                        reg2[i] = `<li>\n${reg2[i]}\n</li>`
                    }
                }
                reg2 = reg2.join("\n");
                reg2 = `\n<ul class="md-ul">\n${reg2}\n</ul>\n`;
                htmlText = htmlText.replace(this.ulReg, reg2)
            }
            return htmlText
        };
        const replaceOl = htmlText => {
            htmlText = "\n" + htmlText;
            let reg;
            while (reg = this.olReg.exec(htmlText)) {
                let reg2 = reg[1];
                reg2 = reg2.split("\n");
                for (let i = 0, l = reg2.length; i < l; i++) {
                    reg2[i] = reg2[i].replace(/^[1-9]+\.(&nbsp;)?/, "");
                    if (!/^[1-9]+\.(&nbsp;)?/.test(reg2[i])) {
                        reg2[i] = `<li>\n${reg2[i]}\n</li>`
                    }
                }
                reg2 = reg2.join("\n");
                reg2 = `\n<ol class="md-ol">\n${reg2}\n</ol>\n`;
                htmlText = htmlText.replace(this.olReg, reg2)
            }
            return htmlText
        };
        const replaceCode = htmlText => {
            htmlText = "\n" + htmlText;
            let reg;
            while (reg = this.codeReg.exec(htmlText)) {
                htmlText = htmlText.replace(this.codeReg, `\n<code class="md-code">\n${reg[1]}\n</code>\n`)
            }
            return htmlText
        };
        const replaceTable = htmlText => {
            htmlText = "\n" + htmlText;
            let reg;
            while (reg = this.tableReg.exec(htmlText)) {
                let reg2 = reg[1].split("<br>\n");
                reg2.pop();
                let count = 0;
                for (let i = 0, l = reg2[1].length; i < l; i++) {
                    if (reg2[1][i] === "|") {
                        count++
                    }
                }
                let table = `\n<div class="md-table-outer">\n<table class="md-table">\n<thead class="md-thead">\n<tr class="md-tr">\n`;
                let reg3;
                let thInThead = [];
                while (reg3 = /\|(.[^|]*)/.exec(reg2[0])) {
                    reg2[0] = reg2[0].replace(/\|(.[^|]*)/, ``);
                    thInThead.push(`\n<th class="md-th">\n${reg3[1]}\n</th>\n`)
                }
                thInThead.length = count - 1;
                for (let th of thInThead) {
                    if (!th) {
                        th = `\n<th class="md-th">\n</th>\n`
                    }
                    table += th
                }
                table += `\n</tr>\n</thead>\n<tbody class="md-tbody">\n`;
                for (let i = 2, l = reg2.length; i < l; i++) {
                    table += `\n<tr class="md-tr">\n`;
                    let trInTbody = reg2[i].split("|");
                    trInTbody.pop();
                    trInTbody.shift();
                    trInTbody.length = count - 1;
                    for (let td of trInTbody) {
                        if (!td) {
                            td = `\n<td class="md-td">\n</td>\n`
                        } else {
                            td = `\n<td class="md-td">\n${td}\n</td>\n`
                        }
                        table += td
                    }
                    table += `\n</tr>\n`
                }
                table += "\n</tbody>\n</table>\n</div>\n";
                htmlText = htmlText.replace(this.tableReg, table)
            }
            return htmlText
        };
        let mdText = this.props.mdText;
        mdText = replaceTran(mdText);
        mdText = replaceCode(mdText);
        let mdTexts = mdText.split("\n");
        let htmlText = "";
        let target = false;
        let code = [];
        for (let text of mdTexts) {
            if (/^<code/.test(text)) {
                target = true
            } else if (/^<\/code>/.test(text)) {
                target = false
            }
            if (target) {
                code.push(text)
            } else {
                if (code.length > 0) {
                    code.shift();
                    htmlText += `\n<code class="md-code">\n${code.join("<br>\n")}<br>\n</code>\n`;
                    code = []
                } else {
                    let reg;
                    if (reg = this.h6Reg.exec(text)) {
                        htmlText += `${reg[1]}<h6 class="md-h6">${reg[4]}</h6>\n`
                    } else if (reg = this.h5Reg.exec(text)) {
                        htmlText += `${reg[1]}<h5 class="md-h5">${reg[4]}</h5>\n`
                    } else if (reg = this.h4Reg.exec(text)) {
                        htmlText += `${reg[1]}<h4 class="md-h4">${reg[4]}</h4>\n`
                    } else if (reg = this.h3Reg.exec(text)) {
                        htmlText += `${reg[1]}<h3 class="md-h3">${reg[4]}</h3>\n`
                    } else if (reg = this.h2Reg.exec(text)) {
                        htmlText += `${reg[1]}<h2 class="md-h2">${reg[4]}</h2>\n`
                    } else if (reg = this.h1Reg.exec(text)) {
                        htmlText += `${reg[1]}<h1 class="md-h1">${reg[4]}</h1>\n`
                    } else if (reg = this.hrReg.exec(text)) {
                        htmlText += `<hr class="md-hr">\n`
                    } else {
                        htmlText += `${text}<br>\n`
                    }
                }
            }
        }
        let sub = 0;
        let htmls = [];
        let reg;
        while (reg = /<code[\s\S]*?<\/code>/.exec(htmlText)) {
            htmls[htmls.length] = htmlText.substring(sub, reg.index);
            htmls[htmls.length] = htmlText.substring(reg.index, reg.index + reg[0].length);
            htmlText = htmlText.substring(reg.index + reg[0].length)
        }
        htmls[htmls.length] = htmlText;
        htmlText = "";
        let i = 1;
        for (let html of htmls) {
            if (i % 2 !== 0) {
                html = replaceTable(html);
                html = replaceImg(html);
                html = replaceA(html);
                html = replaceStrong(html);
                html = replaceEm(html);
                html = replaceDel(html);
                html = replaceMark(html);
                html = replaceSub(html);
                html = replaceSup(html);
                html = replaceInlineCode(html);
                html = replaceBlockquote(html);
                html = replaceOl(html);
                html = replaceUl(html)
            }
            htmlText += html;
            i++
        }
        htmlText = replaceTranTo(htmlText);
        htmlText = htmlText.replace(/<br>/, "");
        return htmlText
    }
}

export {Markdown}