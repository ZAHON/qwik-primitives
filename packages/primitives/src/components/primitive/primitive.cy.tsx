import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import * as Primitive from '.';

const PRIMITIVE_TESTID = 'PRIMITIVE_TESTID';

const AS_COMPONENT = component$<PropsOf<'div'>>((props) => {
  return <xyz {...props} />;
});

describe('Primitive', () => {
  describe('a', () => {
    it('should be <a> element', () => {
      cy.mount(<Primitive.a data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'A');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.div as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'A');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('abbr', () => {
    it('should be <abbr> element', () => {
      cy.mount(<Primitive.abbr data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'ABBR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.abbr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'ABBR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('address', () => {
    it('should be <address> element', () => {
      cy.mount(<Primitive.address data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'ADDRESS');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.address as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'ADDRESS');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('area', () => {
    it('should be <area> element', () => {
      cy.mount(<Primitive.area data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'AREA');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.area as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'AREA');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('article', () => {
    it('should be <article> element', () => {
      cy.mount(<Primitive.article data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'ARTICLE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.article as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'ARTICLE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('aside', () => {
    it('should be <aside> element', () => {
      cy.mount(<Primitive.aside data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'ASIDE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.aside as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'ASIDE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('audio', () => {
    it('should be <audio> element', () => {
      cy.mount(<Primitive.audio data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'AUDIO');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.audio as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'AUDIO');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('b', () => {
    it('should be <b> element', () => {
      cy.mount(<Primitive.b data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'B');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.b as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'B');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('bdi', () => {
    it('should be <bdi> element', () => {
      cy.mount(<Primitive.bdi data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BDI');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.bdi as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BDI');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('bdo', () => {
    it('should be <bdo> element', () => {
      cy.mount(<Primitive.bdo data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BDO');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.bdo as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BDO');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('blockquote', () => {
    it('should be <blockquote> element', () => {
      cy.mount(<Primitive.blockquote data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BLOCKQUOTE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.blockquote as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BLOCKQUOTE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('br', () => {
    it('should be <br> element', () => {
      cy.mount(<Primitive.br data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.br as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('button', () => {
    it('should be <button> element', () => {
      cy.mount(<Primitive.button data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'BUTTON');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.button as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'BUTTON');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('canvas', () => {
    it('should be <canvas> element', () => {
      cy.mount(<Primitive.canvas data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'CANVAS');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.canvas as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'CANVAS');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('caption', () => {
    it('should be <caption> element', () => {
      cy.mount(<Primitive.caption data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'CAPTION');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.caption as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'CAPTION');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('cite', () => {
    it('should be <cite> element', () => {
      cy.mount(<Primitive.cite data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'CITE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.cite as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'CITE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('code', () => {
    it('should be <code> element', () => {
      cy.mount(<Primitive.code data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'CODE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.code as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'CODE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('col', () => {
    it('should be <col> element', () => {
      cy.mount(<Primitive.col data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'COL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.col as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'COL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('colgroup', () => {
    it('should be <colgroup> element', () => {
      cy.mount(<Primitive.colgroup data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'COLGROUP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.colgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'COLGROUP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('data', () => {
    it('should be <data> element', () => {
      cy.mount(<Primitive.data data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DATA');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.data as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DATA');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('datalist', () => {
    it('should be <datalist> element', () => {
      cy.mount(<Primitive.datalist data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DATALIST');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.datalist as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DATALIST');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('dd', () => {
    it('should be <dd> element', () => {
      cy.mount(<Primitive.dd data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DD');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.dd as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DD');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('del', () => {
    it('should be <del> element', () => {
      cy.mount(<Primitive.del data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.del as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DEL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('details', () => {
    it('should be <details> element', () => {
      cy.mount(<Primitive.details data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DETAILS');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.details as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DETAILS');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('dfn', () => {
    it('should be <dfn> element', () => {
      cy.mount(<Primitive.dfn data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DFN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.dfn as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DFN');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('dialog', () => {
    it('should be <dialog> element', () => {
      cy.mount(<Primitive.dialog data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIALOG');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.dialog as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIALOG');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('div', () => {
    it('should be <div> element', () => {
      cy.mount(<Primitive.div data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DIV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.div as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DIV');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('dl', () => {
    it('should be <dl> element', () => {
      cy.mount(<Primitive.dl data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.dl as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('dt', () => {
    it('should be <dt> element', () => {
      cy.mount(<Primitive.dt data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'DT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.dt as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'DT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('em', () => {
    it('should be <em> element', () => {
      cy.mount(<Primitive.em data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'EM');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.em as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'EM');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('embed', () => {
    it('should be <embed> element', () => {
      cy.mount(<Primitive.embed data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'EMBED');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.embed as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'EMBED');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('fieldset', () => {
    it('should be <fieldset> element', () => {
      cy.mount(<Primitive.fieldset data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'FIELDSET');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.fieldset as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'FIELDSET');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('figcaption', () => {
    it('should be <figcaption> element', () => {
      cy.mount(<Primitive.figcaption data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'FIGCAPTION');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.figcaption as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'FIGCAPTION');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('figure', () => {
    it('should be <figure> element', () => {
      cy.mount(<Primitive.figure data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'FIGURE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.figure as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'FIGURE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('footer', () => {
    it('should be <footer> element', () => {
      cy.mount(<Primitive.footer data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'FOOTER');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.footer as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'FOOTER');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('form', () => {
    it('should be <form> element', () => {
      cy.mount(<Primitive.form data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'FORM');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.form as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'FORM');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h1', () => {
    it('should be <h1> element', () => {
      cy.mount(<Primitive.h1 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H1');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h1 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H1');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h2', () => {
    it('should be <h2> element', () => {
      cy.mount(<Primitive.h2 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H2');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h2 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H2');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h3', () => {
    it('should be <h3> element', () => {
      cy.mount(<Primitive.h3 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H3');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h3 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H3');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h4', () => {
    it('should be <h4> element', () => {
      cy.mount(<Primitive.h4 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H4');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h4 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H4');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h5', () => {
    it('should be <h5> element', () => {
      cy.mount(<Primitive.h5 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H5');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h5 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H5');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('h6', () => {
    it('should be <h6> element', () => {
      cy.mount(<Primitive.h6 data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'H6');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.h6 as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'H6');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('header', () => {
    it('should be <header> element', () => {
      cy.mount(<Primitive.header data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'HEADER');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.header as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'HEADER');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('hgroup', () => {
    it('should be <hgroup> element', () => {
      cy.mount(<Primitive.hgroup data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'HGROUP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.hgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'HGROUP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('hr', () => {
    it('should be <hr> element', () => {
      cy.mount(<Primitive.hr data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'HR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.hr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'HR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('i', () => {
    it('should be <i> element', () => {
      cy.mount(<Primitive.i data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'I');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.i as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'I');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('iframe', () => {
    it('should be <iframe> element', () => {
      cy.mount(<Primitive.iframe data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'IFRAME');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.iframe as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'IFRAME');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('img', () => {
    it('should be <img> element', () => {
      cy.mount(<Primitive.img data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'IMG');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.img as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'IMG');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('ins', () => {
    it('should be <ins> element', () => {
      cy.mount(<Primitive.ins data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'INS');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.ins as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'INS');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('kbd', () => {
    it('should be <kbd> element', () => {
      cy.mount(<Primitive.kbd data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'KBD');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.kbd as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'KBD');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('label', () => {
    it('should be <label> element', () => {
      cy.mount(<Primitive.label data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LABEL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.label as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LABEL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('legend', () => {
    it('should be <legend> element', () => {
      cy.mount(<Primitive.legend data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LEGEND');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.legend as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LEGEND');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('li', () => {
    it('should be <li> element', () => {
      cy.mount(<Primitive.li data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'LI');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.li as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'LI');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('main', () => {
    it('should be <main> element', () => {
      cy.mount(<Primitive.main data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'MAIN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.main as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'MAIN');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('map', () => {
    it('should be <map> element', () => {
      cy.mount(<Primitive.map data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'MAP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.map as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'MAP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('mark', () => {
    it('should be <mark> element', () => {
      cy.mount(<Primitive.mark data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'MARK');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.mark as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'MARK');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('menu', () => {
    it('should be <menu> element', () => {
      cy.mount(<Primitive.menu data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'MENU');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.menu as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'MENU');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('meter', () => {
    it('should be <meter> element', () => {
      cy.mount(<Primitive.meter data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'METER');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.meter as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'METER');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('nav', () => {
    it('should be <nav> element', () => {
      cy.mount(<Primitive.nav data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'NAV');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.nav as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'NAV');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('noscript', () => {
    it('should be <noscript> element', () => {
      cy.mount(<Primitive.noscript data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'NOSCRIPT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.noscript as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'NOSCRIPT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('object', () => {
    it('should be <object> element', () => {
      cy.mount(<Primitive.object data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'OBJECT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.object as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OBJECT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('ol', () => {
    it('should be <ol> element', () => {
      cy.mount(<Primitive.ol data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'OL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.ol as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('optgroup', () => {
    it('should be <optgroup> element', () => {
      cy.mount(<Primitive.optgroup data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'OPTGROUP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.optgroup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OPTGROUP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('output', () => {
    it('should be <output> element', () => {
      cy.mount(<Primitive.output data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'OUTPUT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.output as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'OUTPUT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('p', () => {
    it('should be <p> element', () => {
      cy.mount(<Primitive.p data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'P');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.p as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'P');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('picture', () => {
    it('should be <picture> element', () => {
      cy.mount(<Primitive.picture data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'PICTURE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.picture as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'PICTURE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('pre', () => {
    it('should be <pre> element', () => {
      cy.mount(<Primitive.pre data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'PRE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.pre as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'PRE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('progress', () => {
    it('should be <progress> element', () => {
      cy.mount(<Primitive.progress data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'PROGRESS');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.progress as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'PROGRESS');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('q', () => {
    it('should be <q> element', () => {
      cy.mount(<Primitive.q data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'Q');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.q as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'Q');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('rp', () => {
    it('should be <rp> element', () => {
      cy.mount(<Primitive.rp data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'RP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.rp as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'RP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('rt', () => {
    it('should be <rt> element', () => {
      cy.mount(<Primitive.rt data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'RT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.rt as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'RT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('ruby', () => {
    it('should be <ruby> element', () => {
      cy.mount(<Primitive.ruby data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'RUBY');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.ruby as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'RUBY');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('s', () => {
    it('should be <s> element', () => {
      cy.mount(<Primitive.s data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'S');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.s as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'S');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('script', () => {
    it('should be <script> element', () => {
      cy.mount(<Primitive.script data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SCRIPT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.script as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SCRIPT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('search', () => {
    it('should be <search> element', () => {
      cy.mount(<Primitive.search data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SEARCH');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.search as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SEARCH');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('section', () => {
    it('should be <section> element', () => {
      cy.mount(<Primitive.section data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SECTION');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.section as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SECTION');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('select', () => {
    it('should be <select> element', () => {
      cy.mount(<Primitive.select data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SELECT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.select as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SELECT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('small', () => {
    it('should be <small> element', () => {
      cy.mount(<Primitive.small data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SMALL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.small as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SMALL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('source', () => {
    it('should be <source> element', () => {
      cy.mount(<Primitive.source data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SOURCE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.source as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SOURCE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('span', () => {
    it('should be <span> element', () => {
      cy.mount(<Primitive.span data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SPAN');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.span as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SPAN');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('strong', () => {
    it('should be <strong> element', () => {
      cy.mount(<Primitive.strong data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'STRONG');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.strong as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'STRONG');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('sub', () => {
    it('should be <sub> element', () => {
      cy.mount(<Primitive.sub data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SUB');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.sub as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SUB');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('summary', () => {
    it('should be <summary> element', () => {
      cy.mount(<Primitive.summary data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SUMMARY');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.summary as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SUMMARY');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('sup', () => {
    it('should be <sup> element', () => {
      cy.mount(<Primitive.sup data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'SUP');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.sup as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'SUP');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('svg', () => {
    it('should be <svg> element', () => {
      cy.mount(<Primitive.svg data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'svg');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.svg as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'svg');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('table', () => {
    it('should be <table> element', () => {
      cy.mount(<Primitive.table data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TABLE');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.table as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TABLE');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('tbody', () => {
    it('should be <tbody> element', () => {
      cy.mount(<Primitive.tbody data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TBODY');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.tbody as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TBODY');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('td', () => {
    it('should be <td> element', () => {
      cy.mount(<Primitive.td data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TD');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.td as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TD');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('textarea', () => {
    it('should be <textarea> element', () => {
      cy.mount(<Primitive.textarea data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TEXTAREA');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.textarea as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TEXTAREA');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('tfoot', () => {
    it('should be <tfoot> element', () => {
      cy.mount(<Primitive.tfoot data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TFOOT');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.tfoot as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TFOOT');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('th', () => {
    it('should be <th> element', () => {
      cy.mount(<Primitive.th data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TH');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.th as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TH');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('thead', () => {
    it('should be <thead> element', () => {
      cy.mount(<Primitive.thead data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'THEAD');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.thead as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'THEAD');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('time', () => {
    it('should be <time> element', () => {
      cy.mount(<Primitive.time data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TIME');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.time as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TIME');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('tr', () => {
    it('should be <tr> element', () => {
      cy.mount(<Primitive.tr data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.tr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('track', () => {
    it('should be <track> element', () => {
      cy.mount(<Primitive.track data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'TRACK');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.track as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'TRACK');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('u', () => {
    it('should be <u> element', () => {
      cy.mount(<Primitive.u data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'U');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.u as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'U');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('ul', () => {
    it('should be <ul> element', () => {
      cy.mount(<Primitive.ul data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'UL');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.ul as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'UL');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('var', () => {
    it('should be <var> element', () => {
      cy.mount(<Primitive.var data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'VAR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.var as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'VAR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('video', () => {
    it('should be <video> element', () => {
      cy.mount(<Primitive.video data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'VIDEO');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.video as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'VIDEO');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });

  describe('wbr', () => {
    it('should be <wbr> element', () => {
      cy.mount(<Primitive.wbr data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'WBR');
    });

    it('should be element provided via as prop', () => {
      cy.mount(<Primitive.wbr as={AS_COMPONENT} data-testid={PRIMITIVE_TESTID} />);
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('not.eq', 'WBR');
      cy.get(`[data-testid="${PRIMITIVE_TESTID}"]`).should('have.prop', 'tagName').should('eq', 'XYZ');
    });
  });
});
