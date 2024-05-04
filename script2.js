class AccordionComponents extends HTMLElement {
  constructor() {
    super();

    this.content = this.querySelector('.js-accordion-content');
  }

  connectedCallback() {
    this.addEventListener('click', (event) => {
      this.expanded = this.getAttribute('aria-expanded');

      if(this.content.contains(event.target)) return;

      this.setAttribute('aria-expanded', (this.expanded === 'false').toString());
      (this.expanded === 'false') ? this.content.style.maxHeight = this.content.scrollHeight + "px" : this.content.style.maxHeight = null;
    });
  }
}

customElements.define('accordion-item', AccordionComponents);