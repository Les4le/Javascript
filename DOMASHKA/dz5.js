// class Circle {
//   constructor(radius) {
//     this._radius = radius;
//   }

//   get radius() {
//     return this._radius;
//   }

//   set radius(value) {
//     if (value > 0) {
//       this._radius = value;
//     }
//   }

//   get diameter() {
//     return this._radius * 2;
//   }

//   getArea() {
//     return Math.PI * this._radius ** 2;
//   }

//   getCircumference() {
//     return 2 * Math.PI * this._radius;
//   }
// }

// const circle = new Circle(10);

// console.log("Радіус:", circle.radius);
// console.log("Діаметр:", circle.diameter);
// console.log("Площа:", circle.getArea().toFixed(2));
// console.log("Довжина кола:", circle.getCircumference().toFixed(2));

// circle.radius = 20;
// console.log("Новий радіус:", circle.radius);

// 2

// class HtmlElement {
//   constructor(tagName, selfClosing = false, textContent = "") {
//     this.tagName = tagName;
//     this.selfClosing = selfClosing;
//     this.textContent = textContent;

//     this.attributes = {};
//     this.styles = {};
//     this.children = [];
//   }

//   setAttribute(name, value) {
//     this.attributes[name] = value;
//   }

//   setStyle(property, value) {
//     this.styles[property] = value;
//   }

//   appendElement(element) {
//     this.children.push(element);
//   }

//   prependElement(element) {
//     this.children.unshift(element);
//   }

//   getHtml() {
//     let attrs = "";

//     for (let attr in this.attributes) {
//       attrs += ` ${attr}="${this.attributes[attr]}"`;
//     }

//     let styles = Object.entries(this.styles)
//       .map(([key, value]) => `${key}: ${value};`)
//       .join(" ");

//     if (styles.length) {
//       attrs += ` style="${styles}"`;
//     }

//     if (this.selfClosing) {
//       return `<${this.tagName}${attrs}>`;
//     }

//     let html = `<${this.tagName}${attrs}>`;

//     html += this.textContent;

//     this.children.forEach((child) => {
//       html += child.getHtml();
//     });

//     html += `</${this.tagName}>`;

//     return html;
//   }
// }

// const wrapper = new HtmlElement("div");
// wrapper.setAttribute("id", "wrapper");
// wrapper.setStyle("display", "flex");

// function createArticle() {
//   const div = new HtmlElement("div");
//   div.setStyle("width", "300px");
//   div.setStyle("margin", "10px");

//   const h3 = new HtmlElement("h3");
//   h3.textContent = "What is Lorem Ipsum?";

//   const img = new HtmlElement("img", true);
//   img.setAttribute("src", "lipsum.jpg");
//   img.setAttribute("alt", "Lorem Ipsum");
//   img.setStyle("width", "100%");

//   const p = new HtmlElement("p");
//   p.setStyle("text-align", "justify");

//   p.textContent =
//     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ";

//   const a = new HtmlElement("a");
//   a.setAttribute("href", "https://www.lipsum.com/");
//   a.setAttribute("target", "_blank");
//   a.textContent = "More...";

//   p.appendElement(a);

//   div.appendElement(h3);
//   div.appendElement(img);
//   div.appendElement(p);

//   return div;
// }

// wrapper.appendElement(createArticle());
// wrapper.appendElement(createArticle());

// document.write(wrapper.getHtml());

// 3

// class CssClass {
//   constructor(className) {
//     this.className = className;
//     this.styles = {};
//   }

//   setStyle(property, value) {
//     this.styles[property] = value;
//   }

//   removeStyle(property) {
//     delete this.styles[property];
//   }

//   getCss() {
//     let css = `.${this.className} {\n`;

//     for (let prop in this.styles) {
//       css += `    ${prop}: ${this.styles[prop]};\n`;
//     }

//     css += `}\n`;

//     return css;
//   }
// }

// 4

// class HtmlBlock {
//   constructor(rootElement) {
//     this.rootElement = rootElement;
//     this.cssClasses = [];
//   }

//   addCssClass(cssClass) {
//     this.cssClasses.push(cssClass);
//   }

//   getCode() {
//     let css = "<style>\n";

//     this.cssClasses.forEach((item) => {
//       css += item.getCss();
//     });

//     css += "</style>\n";

//     return css + this.rootElement.getHtml();
//   }
// }

// const wrapClass = new CssClass('wrap');
// wrapClass.setStyle('display', 'flex');

// const blockClass = new CssClass('block');
// blockClass.setStyle('width', '300px');
// blockClass.setStyle('margin', '10px');

// const imgClass = new CssClass('img');
// imgClass.setStyle('width', '100%');

// const textClass = new CssClass('text');
// textClass.setStyle('text-align', 'justify');

// const wrapper2 = new HtmlElement('div');
// wrapper2.setAttribute('id', 'wrapper');
// wrapper2.setAttribute('class', 'wrap');

// function createBlock() {
//     const block = new HtmlElement('div');
//     block.setAttribute('class', 'block');

//     const h3 = new HtmlElement('h3');
//     h3.textContent = 'What is Lorem Ipsum?';

//     const img = new HtmlElement('img', true);
//     img.setAttribute('class', 'img');
//     img.setAttribute('src', 'lipsum.jpg');
//     img.setAttribute('alt', 'Lorem Ipsum');

//     const p = new HtmlElement('p');
//     p.setAttribute('class', 'text');

//     p.textContent =
//         'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ';

//     const a = new HtmlElement('a');
//     a.setAttribute('href', 'https://www.lipsum.com/');
//     a.setAttribute('target', '_blank');
//     a.textContent = 'More...';

//     p.appendElement(a);

//     block.appendElement(h3);
//     block.appendElement(img);
//     block.appendElement(p);

//     return block;
// }

// wrapper2.appendElement(createBlock());
// wrapper2.appendElement(createBlock());

// const htmlBlock = new HtmlBlock(wrapper2);

// htmlBlock.addCssClass(wrapClass);
// htmlBlock.addCssClass(blockClass);
// htmlBlock.addCssClass(imgClass);
// htmlBlock.addCssClass(textClass);

// document.write(htmlBlock.getCode());
