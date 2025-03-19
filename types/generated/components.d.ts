import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
    icon: 'apps';
  };
  attributes: {
    item: Schema.Attribute.Component<'elements.carousel-item', true>;
  };
}

export interface BlocksFinancialIndicators extends Struct.ComponentSchema {
  collectionName: 'components_blocks_financial_indicators';
  info: {
    description: '';
    displayName: 'Financial Indicators';
    icon: 'apps';
  };
  attributes: {
    displayCurrentDolar: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    displayIPSA: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    displayUF: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlocksTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    description: '';
    displayName: 'Testimonials';
    icon: 'alien';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.testimonial', true>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsCarouselItem extends Struct.ComponentSchema {
  collectionName: 'components_hero_carousel_items';
  info: {
    description: '';
    displayName: 'Carousel Item';
    icon: 'cast';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    text: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ElementsFooterLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_links';
  info: {
    displayName: 'Footer Link';
    icon: 'attachment';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsHeaderLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_header_links';
  info: {
    description: '';
    displayName: 'Header Link';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Text'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'https://google.cl'>;
  };
}

export interface ElementsSiteLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_site_logos';
  info: {
    displayName: 'Site Logo';
    icon: 'alien';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface ElementsTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_elements_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'alien';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSiteFooter extends Struct.ComponentSchema {
  collectionName: 'components_sections_site_footers';
  info: {
    displayName: 'Site Footer';
    icon: 'alien';
  };
  attributes: {
    navigation: Schema.Attribute.Component<'elements.footer-link', true>;
  };
}

export interface SectionsSiteHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_site_headers';
  info: {
    displayName: 'Site Header';
    icon: 'alien';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.site-logo', false>;
    siteNavigation: Schema.Attribute.Component<'elements.header-link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.carousel': BlocksCarousel;
      'blocks.financial-indicators': BlocksFinancialIndicators;
      'blocks.testimonial': BlocksTestimonial;
      'elements.button': ElementsButton;
      'elements.carousel-item': ElementsCarouselItem;
      'elements.footer-link': ElementsFooterLink;
      'elements.header-link': ElementsHeaderLink;
      'elements.site-logo': ElementsSiteLogo;
      'elements.testimonial': ElementsTestimonial;
      'sections.hero': SectionsHero;
      'sections.site-footer': SectionsSiteFooter;
      'sections.site-header': SectionsSiteHeader;
    }
  }
}
